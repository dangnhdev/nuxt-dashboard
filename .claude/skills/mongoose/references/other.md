# Mongoose - Other

**Pages:** 11

---

## Migrating from 7.x to 8.x

**URL:** https://mongoosejs.com/docs/migrating_to_8.html

**Contents:**
- Migrating from 7.x to 8.x
- Removed rawResult option for findOneAndUpdate()
- Document.prototype.deleteOne now returns a query
- MongoDB Node Driver 6
- Removed findOneAndRemove()
- Removed count()
- Removed id Setter
- null is valid for non-required string enums
- Apply minimize when save() updates an existing document
- Apply base schema paths before discriminator paths

There are several backwards-breaking changes you should be aware of when migrating from Mongoose 7.x to Mongoose 8.x.

If you're still on Mongoose 6.x or earlier, please read the Mongoose 6.x to 7.x migration guide and upgrade to Mongoose 7.x first before upgrading to Mongoose 8.

We also recommend reviewing the MongoDB Node.js driver's release notes for v6.0.0 before upgrading to Mongoose 8.

The rawResult option for findOneAndUpdate(), findOneAndReplace(), and findOneAndDelete() has been replaced by the includeResultMetadata option.

includeResultMetadata in Mongoose 8 behaves identically to rawResult.

In Mongoose 7, doc.deleteOne() returned a promise that resolved to doc. In Mongoose 8, doc.deleteOne() returns a query for easier chaining, as well as consistency with doc.updateOne().

Mongoose 8 uses v6.x of the MongoDB Node driver. There's a few noteable changes in MongoDB Node driver v6 that affect Mongoose:

The ObjectId constructor no longer accepts strings of length 12. In Mongoose 7, new mongoose.Types.ObjectId('12charstring') was perfectly valid. In Mongoose 8, new mongoose.Types.ObjectId('12charstring') throws an error.

Deprecated SSL options have been removed

In Mongoose 7, findOneAndRemove() was an alias for findOneAndDelete() that Mongoose supported for backwards compatibility. Mongoose 8 no longer supports findOneAndRemove(). Use findOneAndDelete() instead.

Similarly, Mongoose 8 no longer supports findByIdAndRemove(), which was an alias for findByIdAndDelete(). Please use findByIdAndDelete() instead.

Model.count() and Query.prototype.count() were removed in Mongoose 8. Use Model.countDocuments() and Query.prototype.countDocuments() instead.

In Mongoose 7.4, Mongoose introduced an id setter that made doc.id = '0'.repeat(24) equivalent to doc._id = '0'.repeat(24). In Mongoose 8, that setter is now removed.

Before Mongoose 8, setting a string path with an enum to null would lead to a validation error, even if that path wasn't required. In Mongoose 8, it is valid to set a string path to null if required is not set, even with enum.

In Mongoose 7, Mongoose would only apply minimize when saving a new document, not when updating an existing document.

This means that, in Mongoose 8, getters and setters on discriminator paths run after getters and setters on base paths. In Mongoose 7, getters and setters on discriminator paths ran before getters and setters on base paths.

Mongoose 7 and earlier supported an overwrite option for findOneAndUpdate(), updateOne(), and update(). Before Mongoose 7, overwrite would skip wrapping the update parameter in $set, which meant that findOneAndUpdate() and update() would overwrite the matched document. In Mongoose 7, setting overwrite would convert findOneAndUpdate() to findOneAndReplace() and updateOne() to replaceOne() to retain backwards compatibility.

In Mongoose 8, the overwrite option is no longer supported. If you want to overwrite the entire document, use findOneAndReplace() or replaceOne().

In Mongoose 7, findOneAndUpdate(filter, update, { upsert: true }).orFail() would throw a DocumentNotFoundError if a new document was upserted. In other words, findOneAndUpdate().orFail() always threw an error if no document was found, even if a new document was upserted.

In Mongoose 8, findOneAndUpdate(filter, update, { upsert: true }).orFail() always succeeds. findOneAndUpdate().orFail() now throws a DocumentNotFoundError if there's no document returned, rather than if no document was found.

In Mongoose 7, create() would immediately throw if any save() threw an error by default. Mongoose 8 instead waits for all save() calls to finish before throwing the first error that occurred. So create() will throw the same error in both Mongoose 7 and Mongoose 8, Mongoose 8 just may take longer to throw the error.

In Mongoose 7, Model.validate() would potentially modify the passed in object. Mongoose 8 instead copies the passed in object first.

In Mongoose 8, automatically inferred schema types in TypeScript allow null for optional fields. In Mongoose 7, optional fields only allowed undefined, not null.

In Mongoose 8, no properties are required on model constructors by default.

**Examples:**

Example 1 (javascript):
```javascript
const filter = { name: 'Will Riker' };
const update = { age: 29 };

const res = await Character.findOneAndUpdate(filter, update, {
  new: true,
  upsert: true,
  // Replace `rawResult: true` with `includeResultMetadata: true`
  includeResultMetadata: true
});
```

Example 2 (javascript):
```javascript
const numberOne = await Character.findOne({ name: 'Will Riker' });

// In Mongoose 7, q is a Promise that resolves to `numberOne`
// In Mongoose 8, q is a Query.
const q = numberOne.deleteOne();

// In Mongoose 7, `res === numberOne`
// In Mongoose 8, `res` is a `DeleteResult`.
const res = await q;
```

Example 3 (javascript):
```javascript
const schema = new Schema({
  status: {
    type: String,
    enum: ['on', 'off']
  }
});
const Test = mongoose.model('Test', schema);

// Works fine in Mongoose 8
// Throws a `ValidationError` in Mongoose 7
await Test.create({ status: null });
```

Example 4 (javascript):
```javascript
const schema = new Schema({
  nested: {
    field1: Number
  }
});
const Test = mongoose.model('Test', schema);

// Both Mongoose 7 and Mongoose 8 strip out empty objects when saving
// a new document in MongoDB by default
const { _id } = await Test.create({ nested: {} });
let rawDoc = await Test.findById(_id).lean();
rawDoc.nested; // undefined

// Mongoose 8 will also strip out empty objects when saving an
// existing document in MongoDB
const doc = await Test.findById(_id);
doc.nested = {};
doc.markModified('nested');
await doc.save();

let rawDoc = await Test.findById(_id).lean();
rawDoc.nested; // undefined in Mongoose 8, {} in Mongoose 7
```

---

## Discriminators

**URL:** https://mongoosejs.com/docs/discriminators.html

**Contents:**
- Discriminators
- The model.discriminator() function
- Discriminators save to the Event model's collection
- Discriminator keys
- Updating the discriminator key
- Embedded discriminators in arrays
- Single nested discriminators

Discriminators are a schema inheritance mechanism. They enable you to have multiple models with overlapping schemas on top of the same underlying MongoDB collection.

Suppose you wanted to track different types of events in a single collection. Every event will have a timestamp, but events that represent clicked links should have a URL. You can achieve this using the model.discriminator() function. This function takes 3 parameters, a model name, a discriminator schema and an optional key (defaults to the model name). It returns a model whose schema is the union of the base schema and the discriminator schema.

Suppose you created another discriminator to track events where a new user registered. These SignedUpEvent instances will be stored in the same collection as generic events and ClickedLinkEvent instances.

The way Mongoose tells the difference between the different discriminator models is by the 'discriminator key', which is __t by default. Mongoose adds a String path called __t to your schemas that it uses to track which discriminator this document is an instance of.

By default, Mongoose doesn't let you update the discriminator key. save() will throw an error if you attempt to update the discriminator key. And findOneAndUpdate(), updateOne(), etc. will strip out discriminator key updates.

To update a document's discriminator key, use findOneAndUpdate() or updateOne() with the overwriteDiscriminatorKey option set as follows.

You can also define discriminators on embedded document arrays. Embedded discriminators are different because the different discriminator types are stored in the same document array (within a document) rather than the same collection. In other words, embedded discriminators let you store subdocuments matching different schemas in the same array.

As a general best practice, make sure you declare any hooks on your schemas before you use them. You should not call pre() or post() after calling discriminator().

You can also define discriminators on single nested subdocuments, similar to how you can define discriminators on arrays of subdocuments.

As a general best practice, make sure you declare any hooks on your schemas before you use them. You should not call pre() or post() after calling discriminator().

**Examples:**

Example 1 (javascript):
```javascript
const options = { discriminatorKey: 'kind' };

const eventSchema = new mongoose.Schema({ time: Date }, options);
const Event = mongoose.model('Event', eventSchema);

// ClickedLinkEvent is a special type of Event that has
// a URL.
const ClickedLinkEvent = Event.discriminator('ClickedLink',
  new mongoose.Schema({ url: String }, options));

// When you create a generic event, it can't have a URL field...
const genericEvent = new Event({ time: Date.now(), url: 'google.com' });
assert.ok(!genericEvent.url);

// But a ClickedLinkEvent can
const clickedEvent = new ClickedLinkEvent({ time: Date.now(), url: 'google.com' });
assert.ok(clickedEvent.url);
```

Example 2 (javascript):
```javascript
const event1 = new Event({ time: Date.now() });
const event2 = new ClickedLinkEvent({ time: Date.now(), url: 'google.com' });
const event3 = new SignedUpEvent({ time: Date.now(), user: 'testuser' });


await Promise.all([event1.save(), event2.save(), event3.save()]);
const count = await Event.countDocuments();
assert.equal(count, 3);
```

Example 3 (javascript):
```javascript
const event1 = new Event({ time: Date.now() });
const event2 = new ClickedLinkEvent({ time: Date.now(), url: 'google.com' });
const event3 = new SignedUpEvent({ time: Date.now(), user: 'testuser' });

assert.ok(!event1.__t);
assert.equal(event2.__t, 'ClickedLink');
assert.equal(event3.__t, 'SignedUp');
```

Example 4 (javascript):
```javascript
let event = new ClickedLinkEvent({ time: Date.now(), url: 'google.com' });
await event.save();

event.__t = 'SignedUp';
// ValidationError: ClickedLink validation failed: __t: Cast to String failed for value "SignedUp" (type string) at path "__t"
  await event.save();

event = await ClickedLinkEvent.findByIdAndUpdate(event._id, { __t: 'SignedUp' }, { new: true });
event.__t; // 'ClickedLink', update was a no-op
```

---

## Redirecting

**URL:** https://mongoosejs.com/docs/api.html

**Contents:**
- Redirecting

Redirecting to proper API page, please wait

This Page requires JavaScript to Redirect old links properly

---

## Incompatible packages

**URL:** https://mongoosejs.com/docs/incompatible_packages

**Contents:**
- Incompatible packages

The following npm packages are known to be incompatible with Mongoose:

---

## Defaults

**URL:** https://mongoosejs.com/docs/defaults.html

**Contents:**
- Defaults
- Declaring Defaults in Your Schema
- Default Functions
- The setDefaultsOnInsert Option
- Default functions and this

Your schemas can define default values for certain paths. If you create a new document without that path set, the default will kick in.

Note: Mongoose only applies a default if the value of the path is strictly undefined.

You can also set the default schema option to a function. Mongoose will execute that function and use the return value as the default.

Mongoose also sets defaults on update() and findOneAndUpdate() when the upsert option is set by adding your schema's defaults to a MongoDB $setOnInsert operator. You can disable this behavior by setting the setDefaultsOnInsert option to false.

You can also set setDefaultsOnInsert to false globally:

Unless it is running on a query with setDefaultsOnInsert, a default function's this refers to the document.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({
  name: String,
  role: { type: String, default: 'guitarist' }
});

const Person = db.model('Person', schema);

const axl = new Person({ name: 'Axl Rose', role: 'singer' });
assert.equal(axl.role, 'singer');

const slash = new Person({ name: 'Slash' });
assert.equal(slash.role, 'guitarist');

const izzy = new Person({ name: 'Izzy', role: undefined });
assert.equal(izzy.role, 'guitarist');

// Defaults do **not** run on `null`, `''`, or value other than `undefined`.
const foo = new Person({ name: 'Bar', role: null });
assert.strictEqual(foo.role, null);

await Person.create(axl, slash);

const docs = await Person.find({ role: 'guitarist' });

assert.equal(docs.length, 1);
assert.equal(docs[0].name, 'Slash');
```

Example 2 (javascript):
```javascript
const schema = new Schema({
  title: String,
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

const BlogPost = db.model('BlogPost', schema);

const post = new BlogPost({ title: '5 Best Arnold Schwarzenegger Movies' });

// The post has a default Date set to now
assert.ok(post.date.getTime() >= Date.now() - 1000);
assert.ok(post.date.getTime() <= Date.now());
```

Example 3 (javascript):
```javascript
const schema = new Schema({
  title: String,
  genre: { type: String, default: 'Action' }
});

const Movie = db.model('Movie', schema);

const query = {};
const update = { title: 'The Terminator' };
const options = {
  // Return the document after updates are applied
  new: true,
  // Create a document if one isn't found.
  upsert: true
};

let doc = await Movie.findOneAndUpdate(query, update, options).lean();
doc.genre; // 'Action', Mongoose set a default value.

await Movie.deleteMany({});

doc = await Movie.findOneAndUpdate(query, update, { new: true, upsert: true, setDefaultsOnInsert: false }).lean();
doc.genre; // undefined, Mongoose did not set a default value
```

Example 4 (unknown):
```unknown
mongoose.set('setDefaultsOnInsert', false);
```

---

## Migrating from 3.x to 4.x

**URL:** https://mongoosejs.com/docs/migration.html

**Contents:**
- Migrating from 3.x to 4.x
- findOneAndUpdate() new field is now false by default
- CastError and ValidationError now use kind instead of type to report error types
- Query now has a .then() function
- More Info

There are several backwards-breaking changes to be aware of when migrating from Mongoose 3 to Mongoose 4.

Mongoose's findOneAndUpdate(), findOneAndRemove(), findByIdAndUpdate(), and findByIdAndRemove() functions are just wrappers around MongoDB's findAndModify command. Both the MongoDB server and the MongoDB NodeJS driver set the new option to false by default, but mongoose 3 overwrote this default. In order to be more consistent with the MongoDB server's documentation, mongoose will use false by default. That is, findOneAndUpdate({}, { $set: { test: 1 } }, callback); will return the document as it was before the $set operation was applied.

To return the document with modifications made on the update, use the new: true option.

In Mongoose 3, CastError and ValidationError had a type field. For instance, user defined validation errors would have a type property that contained the string 'user defined'. In Mongoose 4, this property has been renamed to kind due to the V8 JavaScript engine using the Error.type property internally.

In mongoose 3, you needed to call .exec() on a query chain to get a promise back, like MyModel.find().exec().then();. Mongoose 4 queries are promises, so you can do MyModel.find().then() instead. Be careful if you're using functions like q's Q.ninvoke() or otherwise returning a mongoose query from a promise.

**Examples:**

Example 1 (unknown):
```unknown
MyModel.findOneAndUpdate({}, { $set: { test: 1 } }, { new: true }, callback);
```

---

## Version Support

**URL:** https://mongoosejs.com/docs/version-support.html

**Contents:**
- Version Support
- Mongoose 7
- Mongoose 6
- Mongoose 5

Mongoose 8.x (released October 31, 2023) is the current Mongoose major version. We ship all new bug fixes and features to 8.x.

Mongoose 7.x (released February 27, 2023) is currently in legacy support. We ship all new bug fixes and features to 7.x.

Mongoose 6.x (released August 24, 2021) is currently only receiving security fixes and requested bug fixes as of August 24, 2023. Please open a bug report on GitHub to request backporting a fix to Mongoose 6.

Mongoose 6.x end of life (EOL) is January 1, 2025. Mongoose 6.x will no longer receive any updates, security or otherwise, after that date.

Mongoose 5.x (released January 17, 2018) is End-of-Life (EOL) since March 1, 2024. Mongoose 5.x will no longer receive any updates, security or otherwise.

---

## Migrating from 4.x to 5.x

**URL:** https://mongoosejs.com/docs/migrating_to_5.html

**Contents:**
- Migrating from 4.x to 5.x
- Version Requirements
- Query Middleware
- Promises and Callbacks for mongoose.connect()
- Connection Logic and useMongoClient
- Setter Order
- Checking if a path is populated
- Return Values for remove() and deleteX()
- Aggregation Cursors
- geoNear

Please note: we plan to discontinue Mongoose 5 support on March 1, 2024. Please see our version support guide.

There are several backwards-breaking changes you should be aware of when migrating from Mongoose 4.x to Mongoose 5.x.

If you're still on Mongoose 3.x, please read the Mongoose 3.x to 4.x migration guide.

Mongoose now requires Node.js >= 4.0.0 and MongoDB >= 3.0.0. MongoDB 2.6 and Node.js < 4 where both EOL-ed in 2016.

Query middleware is now compiled when you call mongoose.model() or db.model(). If you add query middleware after calling mongoose.model(), that middleware will not get called.

mongoose.connect() and mongoose.disconnect() now return a promise if no callback specified, or null otherwise. It does not return the mongoose singleton.

The useMongoClient option was removed in Mongoose 5, it is now always true. As a consequence, Mongoose 5 no longer supports several function signatures for mongoose.connect() that worked in Mongoose 4.x if the useMongoClient option was off. Below are some examples of mongoose.connect() calls that do not work in Mongoose 5.x.

In Mongoose 5.x, the first parameter to mongoose.connect() and mongoose.createConnection(), if specified, must be a MongoDB connection string. The connection string and options are then passed down to the MongoDB Node.js driver's MongoClient.connect() function. Mongoose does not modify the connection string, although mongoose.connect() and mongoose.createConnection() support a few additional options in addition to the ones the MongoDB driver supports.

Setters run in reverse order in 4.x:

In 5.x, setters run in the order they're declared.

Mongoose 5.1.0 introduced an _id getter to ObjectIds that lets you get an ObjectId regardless of whether a path is populated.

As a consequence, checking whether blogPost.author._id is no longer viable as a way to check whether author is populated. Use blogPost.populated('author') != null or blogPost.author instanceof mongoose.Types.ObjectId to check whether author is populated instead.

Note that you can call mongoose.set('objectIdGetter', false) to change this behavior.

deleteOne(), deleteMany(), and remove() now resolve to the result object rather than the full driver WriteOpResult object.

The useMongooseAggCursor option from 4.x is now always on. This is the new syntax for aggregation cursors in mongoose 5:

Model.geoNear() has been removed because the MongoDB driver no longer supports it

Due to changes in the MongoDB driver, connection strings must be URI encoded.

If they are not, connections may fail with an illegal character message.

See a full list of affected characters.

If your app is used by a lot of different connection strings, it's possible that your test cases will pass, but production passwords will fail. Encode all your connection strings to be safe.

If you want to continue to use unencoded connection strings, the easiest fix is to use the mongodb-uri module to parse the connection strings, and then produce the properly encoded versions. You can use a function like this:

The function above is safe to use whether the existing string is already encoded or not.

Domain sockets must be URI encoded. For example:

The options parameter to toObject() and toJSON() merge defaults rather than overwriting them.

aggregate() no longer accepts a spread, you must pass your aggregation pipeline as an array. The below code worked in 4.x:

The above code does not work in 5.x, you must wrap the $match and $skip stages in an array.

By default, mongoose 4 would coerce any value to a boolean without error.

Mongoose 5 only casts the following values to true:

And the following values to false:

All other values will cause a CastError

Casting for update(), updateOne(), updateMany(), replaceOne(), remove(), deleteOne(), and deleteMany() doesn't happen until exec(). This makes it easier for hooks and custom query helpers to modify data, because mongoose won't restructure the data you passed in until after your hooks and query helpers have ran. It also makes it possible to set the overwrite option after passing in an update.

Post hooks now get flow control, which means async post save hooks and child document post save hooks execute before your save() callback.

$pushAll is no longer supported and no longer used internally for save(), since it has been deprecated since MongoDB 2.4. Use $push with $each instead.

The retainKeyOrder option was removed, mongoose will now always retain the same key position when cloning objects. If you have queries or indexes that rely on reverse key order, you will have to change them.

Setters now run on queries by default, and the old runSettersOnQuery option has been removed.

We no longer have a pre-compiled version of mongoose for the browser. If you want to use mongoose schemas in the browser, you need to build your own bundle with browserify/webpack.

The saveErrorIfNotFound option was removed, mongoose will now always error out from save() if the underlying document was not found

init hooks are now fully synchronous and do not receive next() as a parameter.

Document.prototype.init() no longer takes a callback as a parameter. It was always synchronous, just had a callback for legacy reasons.

doc.save() no longer passes numAffected as a 3rd param to its callback.

doc.remove() no longer debounces

getPromiseConstructor() is gone, just use mongoose.Promise.

You cannot pass parameters to the next pre middleware in the chain using next() in mongoose 5.x. In mongoose 4, next('Test') in pre middleware would call the next middleware with 'Test' as a parameter. Mongoose 5.x has removed support for this.

In mongoose 5 the required validator only verifies if the value is an array. That is, it will not fail for empty arrays as it would in mongoose 4.

In mongoose 5 the default debug function uses console.info() to display messages instead of console.error().

In Mongoose 4.x, overwriting a filter property that's a primitive with one that is an object would silently fail. For example, the below code would ignore the where() and be equivalent to Sport.find({ name: 'baseball' })

In Mongoose 5.x, the above code will correctly overwrite 'baseball' with { $ne: 'softball' }

Mongoose 5.x uses version 3.x of the MongoDB Node.js driver. MongoDB driver 3.x changed the format of the result of bulkWrite() calls so there is no longer a top-level nInserted, nModified, etc. property. The new result object structure is described here.

In Mongoose 4.x, the above will print:

In Mongoose 5.x, the script will print:

The most recent versions of the MongoDB Node.js driver use strict SSL validation by default, which may lead to errors if you're using self-signed certificates.

If this is blocking you from upgrading, you can set the tlsInsecure option to true.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ name: String });
const MyModel = mongoose.model('Test', schema);
schema.pre('find', () => { console.log('find!'); });

MyModel.find().exec(function() {
  // In mongoose 4.x, the above `.find()` will print "find!"
  // In mongoose 5.x, "find!" will **not** be printed.
  // Call `pre('find')` **before** calling `mongoose.model()` to make the middleware apply.
});
```

Example 2 (unknown):
```unknown
// Worked in mongoose 4. Does **not** work in mongoose 5, `mongoose.connect()`
// now returns a promise consistently. This is to avoid the horrible things
// we've done to allow mongoose to be a thenable that resolves to itself.
mongoose.connect('mongodb://127.0.0.1:27017/test').model('Test', new Schema({}));

// Do this instead
mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.model('Test', new Schema({}));
```

Example 3 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name').
  set(() => console.log('This will print 2nd')).
  set(() => console.log('This will print first'));
```

Example 4 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name').
  set(() => console.log('This will print first')).
  set(() => console.log('This will print 2nd'));
```

---

## Getters/Setters in Mongoose

**URL:** https://mongoosejs.com/docs/tutorials/getters-setters.html

**Contents:**
- Getters/Setters in Mongoose
- Getters
- Setters
- Passing Parameters using $locals
- Differences vs ES6 Getters/Setters

Mongoose getters and setters allow you to execute custom logic when getting or setting a property on a Mongoose document. Getters let you transform data in MongoDB into a more user friendly form, and setters let you transform user data before it gets to MongoDB.

Suppose you have a User collection and you want to obfuscate user emails to protect your users' privacy. Below is a basic userSchema that obfuscates the user's email address.

Keep in mind that getters do not impact the underlying data stored in MongoDB. If you save user, the email property will be 'ab@gmail.com' in the database.

By default, Mongoose does not execute getters when converting a document to JSON, including Express' res.json() function.

To run getters when converting a document to JSON, set the toJSON.getters option to true in your schema as shown below.

To skip getters on a one-off basis, use user.get() with the getters option set to false as shown below.

Suppose you want to make sure all user emails in your database are lowercased to make it easy to search without worrying about case. Below is an example userSchema that ensures emails are lowercased.

Mongoose also runs setters on update operations, like updateOne(). Mongoose will upsert a document with a lowercased email in the below example.

In a setter function, this can be either the document being set or the query being run. If you don't want your setter to run when you call updateOne(), you add an if statement that checks if this is a Mongoose document as shown below.

You can't pass parameters to your getter and setter functions like you do to normal function calls. To configure or pass additional properties to your getters and setters, you can use the document's $locals property.

The $locals property is the preferred place to store any program-defined data on your document without conflicting with schema-defined properties. In your getter and setter functions, this is the document being accessed, so you set properties on $locals and then access those properties in your getters examples. For example, the following shows how you can use $locals to configure the language for a custom getter that returns a string in different languages.

Mongoose setters are different from ES6 setters because they allow you to transform the value being set. With ES6 setters, you would need to store an internal _email property to use a setter. With Mongoose, you do not need to define an internal _email property or define a corresponding getter for email.

**Examples:**

Example 1 (javascript):
```javascript
const userSchema = new Schema({
  email: {
    type: String,
    get: obfuscate
  }
});

// Mongoose passes the raw value in MongoDB `email` to the getter
function obfuscate(email) {
  const separatorIndex = email.indexOf('@');
  if (separatorIndex < 3) {
    // 'ab@gmail.com' -> '**@gmail.com'
    return email.slice(0, separatorIndex).replace(/./g, '*') +
      email.slice(separatorIndex);
  }
  // 'test42@gmail.com' -> 'te****@gmail.com'
  return email.slice(0, 2) +
    email.slice(2, separatorIndex).replace(/./g, '*') +
    email.slice(separatorIndex);
}

const User = mongoose.model('User', userSchema);
const user = new User({ email: 'ab@gmail.com' });
user.email; // **@gmail.com
```

Example 2 (javascript):
```javascript
app.get(function(req, res) {
  return User.findOne().
    // The `email` getter will NOT run here
    then(doc => res.json(doc)).
    catch(err => res.status(500).json({ message: err.message }));
});
```

Example 3 (javascript):
```javascript
const userSchema = new Schema({
  email: {
    type: String,
    get: obfuscate
  }
}, { toJSON: { getters: true } });

// Or, globally
mongoose.set('toJSON', { getters: true });

// Or, on a one-off basis
app.get(function(req, res) {
  return User.findOne().
    // The `email` getter will run here
    then(doc => res.json(doc.toJSON({ getters: true }))).
    catch(err => res.status(500).json({ message: err.message }));
});
```

Example 4 (unknown):
```unknown
user.get('email', null, { getters: false }); // 'ab@gmail.com'
```

---

## Migrating from 5.x to 6.x

**URL:** https://mongoosejs.com/docs/migrating_to_6.html

**Contents:**
- Migrating from 5.x to 6.x
- Version Requirements
- MongoDB Driver 4.0
- No More Deprecation Warning Options
- The asPromise() Method for Connections
- mongoose.connect() Returns a Promise
- Duplicate Query Execution
- Model.exists(...) now returns a lean document instead of boolean
- strictQuery is now equal to strict by default
- MongoError is now MongoServerError

Please note: we plan to discontinue Mongoose 5 support on March 1, 2024. Please see our version support guide.

There are several backwards-breaking changes you should be aware of when migrating from Mongoose 5.x to Mongoose 6.x.

If you're still on Mongoose 4.x, please read the Mongoose 4.x to 5.x migration guide and upgrade to Mongoose 5.x first.

Mongoose now requires Node.js >= 12.0.0. Mongoose still supports MongoDB server versions back to 3.0.0.

Mongoose now uses v4.x of the MongoDB Node driver. See the MongoDB Node drivers' migration guide for detailed info. Below are some of the most noteworthy changes:

useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.

Mongoose connections are no longer thenable. This means that await mongoose.createConnection(uri) no longer waits for Mongoose to connect. Use mongoose.createConnection(uri).asPromise() instead. See #8810.

The mongoose.connect() function now always returns a promise, not a Mongoose instance.

Mongoose no longer allows executing the same query object twice. If you do, you'll get a Query was already executed error. Executing the same query instance twice is typically indicative of mixing callbacks and promises, but if you need to execute the same query twice, you can call Query#clone() to clone the query and re-execute it. See gh-7398

Mongoose no longer supports a strictQuery option. You must now use strict. As of Mongoose 6.0.10, we brought back the strictQuery option. In Mongoose 6, strictQuery is set to strict by default. This means that, by default, Mongoose will filter out query filter properties that are not in the schema.

However, this behavior was a source of confusion in some cases, so in Mongoose 7, this default changes back to false. So if you want to retain the default behavior of Mongoose 5 as well as Mongoose 7 and later, you can also disable strictQuery globally to override:

In a test suite, it may be useful to set strictQuery to throw, which will throw exceptions any time a query references schema that doesn't exist, which could help identify a bug in your tests or code.

Here's an example of the effect of strictQuery:

You can also disable strictQuery globally to override:

In MongoDB Node.js Driver v4.x, 'MongoError' is now 'MongoServerError'. Please change any code that depends on the hardcoded string 'MongoError'.

Mongoose now clones discriminator schemas by default. This means you need to pass { clone: false } to discriminator() if you're using recursive embedded discriminators.

In Mongoose 5, mongoose.isValidObjectId() returned false for values like numbers, which was inconsistent with the MongoDB driver's ObjectId.isValid() function. Technically, any JavaScript number can be converted to a MongoDB ObjectId.

In Mongoose 6, mongoose.isValidObjectId() is just a wrapper for mongoose.Types.ObjectId.isValid() for consistency.

Mongoose 6.2.5 now includes a mongoose.isObjectIdOrHexString() function, which does a better job of capturing the more common use case for isValidObjectId(): is the given value an ObjectId instance or a 24 character hex string representing an ObjectId?

Mongoose now saves objects with keys in the order the keys are specified in the schema, not in the user-defined object. So whether Object.keys(new User({ name: String, email: String }).toObject() is ['name', 'email'] or ['email', 'name'] depends on the order name and email are defined in your schema.

Mongoose 6 introduces a new sanitizeFilter option to globals and queries that defends against query selector injection attacks. If you enable sanitizeFilter, Mongoose will wrap any object in the query filter in a $eq:

To explicitly allow a query selector, use mongoose.trusted():

In Mongoose 5.x, setting a key to undefined in an update operation was equivalent to setting it to null.

Mongoose 5.x supported an omitUndefined option to strip out undefined keys. In Mongoose 6.x, the omitUndefined option has been removed, and Mongoose will always strip out undefined keys.

The only workaround is to explicitly set properties to null in your updates:

Mongoose now passes the document as the first parameter to default functions, which is helpful for using arrow functions with defaults.

This may affect you if you pass a function that expects different parameters to default, like default: mongoose.Types.ObjectId. See gh-9633. If you're passing a default function that does not utilize the document, change default: myFunction to default: () => myFunction() to avoid accidentally passing parameters that potentially change the behavior.

Mongoose arrays are now ES6 proxies. You no longer need to markModified() after setting an array index directly.

Schema paths declared with type: { name: String } become single nested subdocs in Mongoose 6, as opposed to Mixed in Mongoose 5. This removes the need for the typePojoToMixed option. See gh-7181.

Mongoose now throws an error if you populate() a path that isn't defined in your schema. This is only for cases when we can infer the local schema, like when you use Query#populate(), not when you call Model.populate() on a POJO. See gh-5124.

When populating a subdocument with a function ref or refPath, this is now the subdocument being populated, not the top-level document. See #8469.

Using save, isNew, and other Mongoose reserved names as schema path names now triggers a warning, not an error. You can suppress the warning by setting the suppressReservedKeysWarning in your schema options: new Schema({ save: String }, { suppressReservedKeysWarning: true }). Keep in mind that this may break plugins that rely on these reserved names.

Single nested subdocs have been renamed to "subdocument paths". So SchemaSingleNestedOptions is now SchemaSubdocumentOptions and mongoose.Schema.Types.Embedded is now mongoose.Schema.Types.Subdocument. See gh-10419

Aggregate#cursor() now returns an AggregationCursor instance to be consistent with Query#cursor(). You no longer need to do Model.aggregate(pipeline).cursor().exec() to get an aggregation cursor, just Model.aggregate(pipeline).cursor().

autoCreate is true by default unless readPreference is secondary or secondaryPreferred, which means Mongoose will attempt to create every model's underlying collection before creating indexes. If readPreference is secondary or secondaryPreferred, Mongoose will default to false for both autoCreate and autoIndex because both createCollection() and createIndex() will fail when connected to a secondary.

The context option for queries has been removed. Now Mongoose always uses context = 'query'.

Mongoose 6 always calls validators with depopulated paths (that is, with the id rather than the document itself). In Mongoose 5, Mongoose would call validators with the populated doc if the path was populated. See #8042

When connected to a replica set, connections now emit 'disconnected' when connection to the primary is lost. In Mongoose 5, connections only emitted 'disconnected' when losing connection to all members of the replica set.

However, Mongoose 6 does not buffer commands while a connection is disconnected. So you can still successfully execute commands like queries with readPreference = 'secondary', even if the Mongoose connection is in the disconnected state.

Document#populate() now returns a promise and is now no longer chainable.

Replace await doc.populate('path1').populate('path2').execPopulate(); with await doc.populate(['path1', 'path2']);

Replace await doc.populate('path1', 'select1').populate('path2', 'select2').execPopulate(); with

await Model.create([]) in v6.0 returns an empty array when provided an empty array, in v5.0 it used to return undefined. If any of your code is checking whether the output is undefined or not, you need to modify it with the assumption that await Model.create(...) will always return an array if provided an array.

doc.set({ child: { age: 21 } }) now works the same whether child is a nested path or a subdocument: Mongoose will overwrite the value of child. In Mongoose 5, this operation would merge child if child was a nested path.

Mongoose now adds a valueOf() function to ObjectIds. This means you can now use == to compare an ObjectId against a string.

If you set timestamps: true, Mongoose will now make the createdAt property immutable. See gh-10139

isAsync is no longer an option for validate. Use an async function instead.

safe is no longer an option for schemas, queries, or save(). Use writeConcern instead.

Mongoose now calls setter functions with priorValue as the 2nd parameter, rather than schemaType in Mongoose 5.

This change was technically released with 5.10.5, but caused issues for users migrating from 5.9.x to 6.x. In Mongoose < 5.10.5, toObject() and toJSON() would use the top-level schema's minimize option by default.

As a workaround, you can either explicitly pass minimize to toObject() or toJSON():

Or define the child schema inline (Mongoose 6 only) to inherit the parent's minimize option.

In Mongoose 5, calling populate() on a mixed type or other path with no ref would fall back to using the query's model.

In Mongoose 6, populating a path with no ref, refPath, or model is a no-op.

The MongoDB Node driver version that Mongoose 6 uses relies on a URL parser module that has several known compatibility issues with other npm packages. This can lead to errors like Invalid URL: mongodb+srv://username:password@development.xyz.mongodb.net/abc if you use one of the incompatible packages. You can find a list of incompatible packages here.

The reconnectTries and reconnectInterval options have been removed since they are no longer necessary.

The MongoDB node driver will always attempt to retry any operation for up to serverSelectionTimeoutMS, even if MongoDB is down for a long period of time. So, it will never run out of retries or try to reconnect to MongoDB.

Lodash's isEmpty() function returns true for primitives and primitive wrappers. ObjectId() is an object wrapper that is treated as a primitive by Mongoose. But starting in Mongoose 6, _.isEmpty() will return true for ObjectIds because of Lodash implementation details.

An ObjectId in mongoose is never empty, so if you're using isEmpty() you should check for instanceof ObjectId.

The mongoose.modelSchemas property was removed. This may have been used to delete a model schema.

The Schema class now takes 3 generic params instead of 4. The 3rd generic param, SchemaDefinitionType, is now the same as the 1st generic param DocType. Replace new Schema<UserDocument, UserModel, User>(schemaDefinition) with new Schema<UserDocument, UserModel>(schemaDefinition)

Types.ObjectId is now a class, which means you can no longer omit new when creating a new ObjectId using new mongoose.Types.ObjectId(). Currently, you can still omit new in JavaScript, but you must put new in TypeScript.

The following legacy types have been removed:

Mongoose 6 infers the document's type for this in virtual getters and setters. In Mongoose 5.x, this would be any in the following code.

In Mongoose 6, this will be set to the document type.

**Examples:**

Example 1 (javascript):
```javascript
const res = await TestModel.updateMany({}, { someProperty: 'someValue' });

res.matchedCount; // Number of documents that were found that match the filter. Replaces `res.n`
res.modifiedCount; // Number of documents modified. Replaces `res.nModified`
res.upsertedCount; // Number of documents upserted. Replaces `res.upserted`
```

Example 2 (javascript):
```javascript
const res = await TestModel.deleteMany({});

// In Mongoose 6: `{ acknowledged: true, deletedCount: 2 }`
// In Mongoose 5: `{ n: 2, ok: 1, deletedCount: 2 }`
res;

res.deletedCount; // Number of documents that were deleted. Replaces `res.n`
```

Example 3 (unknown):
```unknown
// No longer necessary:
mongoose.set('useFindAndModify', false);

await mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
});
```

Example 4 (unknown):
```unknown
// The below no longer works in Mongoose 6
await mongoose.createConnection(uri);

// Do this instead
await mongoose.createConnection(uri).asPromise();
```

---

## Integrating with MongoDB Client Side Field Level Encryption

**URL:** https://mongoosejs.com/docs/field-level-encryption

**Contents:**
- Integrating with MongoDB Client Side Field Level Encryption
- Automatic FLE in Mongoose
  - Encryption types
  - Declaring Encrypted Schemas
  - Registering Models
  - Connecting and configuring encryption options
  - Discriminators
- Managing Data Keys
- Manual FLE in Mongoose

Client Side Field Level Encryption, or CSFLE for short, is a tool for storing your data in an encrypted format in MongoDB. For example, instead of storing the name property as a plain-text string, CSFLE means MongoDB will store your document with name as an encrypted buffer. The resulting document will look similar to the following to a client that doesn't have access to decrypt the data.

You can read more about CSFLE on the MongoDB CSFLE documentation and this blog post about CSFLE in Node.js.

Mongoose supports the declaration of encrypted schemas - schemas that, when connected to a model, utilize MongoDB's Client Side Field Level Encryption or Queryable Encryption under the hood. Mongoose automatically generates either an encryptedFieldsMap or a schemaMap when instantiating a MongoClient and encrypts fields on write and decrypts fields on reads.

MongoDB has two different automatic encryption implementations: client side field level encryption (CSFLE) and queryable encryption (QE).See choosing an in-use encryption approach.

The following schema declares two properties, name and ssn. ssn is encrypted using queryable encryption, and is configured for equality queries:

To declare a field as encrypted, you must:

Not all schematypes are supported for CSFLE and QE. For an overview of supported BSON types, refer to MongoDB's documentation.

Encrypted schemas can be registered on the global mongoose object or on a specific connection, so long as models are registered before the connection is established:

Field level encryption in Mongoose works by generating the encryption schema that the MongoDB driver expects for each encrypted model on the connection. This happens automatically when the model's connection is established.

Queryable encryption and CSFLE require all the same configuration as outlined in the MongoDB encryption in-use documentation, except for the schemaMap or encryptedFieldsMap options.

Once the connection is established, Mongoose's operations will work as usual. Writes are encrypted automatically by the MongoDB driver prior to sending them to the server and reads are decrypted by the driver after fetching documents from the server.

Discriminators are supported for encrypted models as well:

When generating encryption schemas, Mongoose merges all discriminators together for all of the discriminators declared on the same namespace. As a result, discriminators that declare the same key with different types are not supported. Furthermore, all discriminators for the same namespace must share the same encryption type - it is not possible to configure discriminators on the same model for both CSFLE and Queryable Encryption.

Mongoose provides a convenient API to obtain a ClientEncryption object configured to manage data keys in the key vault. A client encryption can be obtained with the Model.clientEncryption() helper:

First, you need to install the mongodb-client-encryption npm package. This is MongoDB's official package for setting up encryption keys.

You also need to make sure you've installed mongocryptd. mongocryptd is a separate process from the MongoDB server that you need to run to work with field level encryption. You can either run mongocryptd yourself, or make sure it is on the system PATH and the MongoDB Node.js driver will run it for you. You can read more about mongocryptd here.

Once you've set up and run mongocryptd, first you need to create a new encryption key as follows. Keep in mind that the following example is a simple example to help you get started. The encryption key in the following example is insecure; MongoDB recommends using a KMS.

Once you have an encryption key, you can create a separate Mongoose connection with a schemaMap that defines which fields are encrypted using JSON schema syntax as follows.

With the above connection, if you create a model named 'Test' that uses the 'tests' collection, any documents will have their name property encrypted.

**Examples:**

Example 1 (unknown):
```unknown
{
  "_id" : ObjectId("647a3207661e3a3a1bc3e614"),
  "name" : BinData(6,"ASrIv7XfokKwiCUJEjckOdgCG+u6IqavcOWX8hINz29MLvcKDZ4nnjCnPFZG+0ftVxMdWgzu6Vdh7ys1uIK1WiaPN0SqpmmtL2rPoqT9gfhADpGDmI60+vm0bJepXNY1Gv0="),
  "__v" : 0
}
```

Example 2 (javascript):
```javascript
const encryptedUserSchema = new Schema({ 
  name: String,
  ssn: { 
    type: String, 
    // 1
    encrypt: { 
      keyId: '<uuid string of key id>',
      queries: 'equality'
    }
  }
  // 2
}, { encryptionType: 'queryableEncryption' });
```

Example 3 (javascript):
```javascript
// specific connection
const GlobalUserModel = mongoose.model('User', encryptedUserSchema);

// specific connection
const connection = mongoose.createConnection();
const UserModel = connection.model('User', encryptedUserSchema);
```

Example 4 (javascript):
```javascript
const keyVaultNamespace = 'client.encryption';
const kmsProviders = { local: { key } };
await connection.openUri(`mongodb://localhost:27017`, {
  // Configure auto encryption
  autoEncryption: {
    keyVaultNamespace: 'datakeys.datakeys',
    kmsProviders
  }
});
```

---
