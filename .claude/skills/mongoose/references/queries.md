# Mongoose - Queries

**Pages:** 5

---

## How to Use findOneAndUpdate() in Mongoose

**URL:** https://mongoosejs.com/docs/tutorials/findoneandupdate.html

**Contents:**
- How to Use findOneAndUpdate() in Mongoose
- Getting Started
- Atomic Updates
- Upsert
- The includeResultMetadata Option
- Updating Discriminator Keys

The findOneAndUpdate() function in Mongoose has a wide variety of use cases. You should use save() to update documents where possible, for better validation and middleware support. However, there are some cases where you need to use findOneAndUpdate(). In this tutorial, you'll see how to use findOneAndUpdate(), and learn when you need to use it.

As the name implies, findOneAndUpdate() finds the first document that matches a given filter, applies an update, and returns the document. The findOneAndUpdate() function has the following signature:

By default, findOneAndUpdate() returns the document as it was before update was applied. In the following example, doc initially only has name and _id properties. findOneAndUpdate() adds an age property, but the result of findOneAndUpdate() does not have an age property.

You should set the new option to true to return the document after update was applied.

Mongoose's findOneAndUpdate() is slightly different from the MongoDB Node.js driver's findOneAndUpdate() because it returns the document itself, not a result object.

As an alternative to the new option, you can also use the returnOriginal option. returnOriginal: false is equivalent to new: true. The returnOriginal option exists for consistency with the the MongoDB Node.js driver's findOneAndUpdate(), which has the same option.

With the exception of an unindexed upsert, findOneAndUpdate() is atomic. That means you can assume the document doesn't change between when MongoDB finds the document and when it updates the document, unless you're doing an upsert.

For example, if you're using save() to update a document, the document can change in MongoDB in between when you load the document using findOne() and when you save the document using save() as show below. For many use cases, the save() race condition is a non-issue. But you can work around it with findOneAndUpdate() (or transactions) if you need to.

Using the upsert option, you can use findOneAndUpdate() as a find-and-upsert operation. An upsert behaves like a normal findOneAndUpdate() if it finds a document that matches filter. But, if no document matches filter, MongoDB will insert one by combining filter and update as shown below.

Mongoose transforms the result of findOneAndUpdate() by default: it returns the updated document. That makes it difficult to check whether a document was upserted or not. In order to get the updated document and check whether MongoDB upserted a new document in the same operation, you can set the includeResultMetadata flag to make Mongoose return the raw result from MongoDB.

Here's what the res object from the above example looks like:

Mongoose prevents updating the discriminator key using findOneAndUpdate() by default. For example, suppose you have the following discriminator models.

Mongoose will remove __t (the default discriminator key) from the update parameter, if __t is set. This is to prevent unintentional updates to the discriminator key; for example, if you're passing untrusted user input to the update parameter. However, you can tell Mongoose to allow updating the discriminator key by setting the overwriteDiscriminatorKey option to true as shown below.

**Examples:**

Example 1 (unknown):
```unknown
function findOneAndUpdate(filter, update, options) {}
```

Example 2 (javascript):
```javascript
const Character = mongoose.model('Character', new mongoose.Schema({
  name: String,
  age: Number
}));

const _id = new mongoose.Types.ObjectId('0'.repeat(24));
let doc = await Character.create({ _id, name: 'Jean-Luc Picard' });
doc; // { name: 'Jean-Luc Picard', _id: ObjectId('000000000000000000000000') }

const filter = { name: 'Jean-Luc Picard' };
const update = { age: 59 };

// The result of `findOneAndUpdate()` is the document _before_ `update` was applied
doc = await Character.findOneAndUpdate(filter, update);
doc; // { name: 'Jean-Luc Picard', _id: ObjectId('000000000000000000000000') }

doc = await Character.findOne(filter);
doc.age; // 59
```

Example 3 (javascript):
```javascript
const filter = { name: 'Jean-Luc Picard' };
const update = { age: 59 };

// `doc` is the document _after_ `update` was applied because of
// `new: true`
const doc = await Character.findOneAndUpdate(filter, update, {
  new: true
});
doc.name; // 'Jean-Luc Picard'
doc.age; // 59
```

Example 4 (javascript):
```javascript
const filter = { name: 'Jean-Luc Picard' };
const update = { age: 59 };

// `doc` is the document _after_ `update` was applied because of
// `returnOriginal: false`
const doc = await Character.findOneAndUpdate(filter, update, {
  returnOriginal: false
});
doc.name; // 'Jean-Luc Picard'
doc.age; // 59
```

---

## Promises

**URL:** https://mongoosejs.com/docs/promises.html

**Contents:**
- Promises
- Built-in Promises
- Queries are not promises
- Queries are thenable
- Should You Use exec() With await?

Mongoose async operations, like .save() and queries, return thenables. This means that you can do things like MyModel.findOne({}).then() and await MyModel.findOne({}).exec() if you're using async/await.

You can find the return type of specific operations in the api docs You can also read more about promises in Mongoose.

Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience. If you need a fully-fledged promise, use the .exec() function.

Although queries are not promises, queries are thenables. That means they have a .then() function, so you can use queries as promises with either promise chaining or async await

There are two alternatives for using await with queries:

As far as functionality is concerned, these two are equivalent. However, we recommend using .exec() because that gives you better stack traces.

**Examples:**

Example 1 (javascript):
```javascript
const gnr = new Band({
  name: 'Guns N\' Roses',
  members: ['Axl', 'Slash']
});

const promise = gnr.save();
assert.ok(promise instanceof Promise);

promise.then(function(doc) {
  assert.equal(doc.name, 'Guns N\' Roses');
});
```

Example 2 (javascript):
```javascript
const query = Band.findOne({ name: 'Guns N\' Roses' });
assert.ok(!(query instanceof Promise));

// A query is not a fully-fledged promise, but it does have a `.then()`.
query.then(function(doc) {
  // use doc
});

// `.exec()` gives you a fully-fledged promise
const promise = Band.findOne({ name: 'Guns N\' Roses' }).exec();
assert.ok(promise instanceof Promise);

promise.then(function(doc) {
  // use doc
});
```

Example 3 (unknown):
```unknown
Band.findOne({ name: 'Guns N\' Roses' }).then(function(doc) {
  // use doc
});
```

Example 4 (javascript):
```javascript
const doc = await Band.findOne({ name: 'Guns N\' Roses' }); // works

const badId = 'this is not a valid id';
try {
  await Band.findOne({ _id: badId });
} catch (err) {
  // Without `exec()`, the stack trace does **not** include the
  // calling code. Below is the stack trace:
  //
  // CastError: Cast to ObjectId failed for value "this is not a valid id" at path "_id" for model "band-promises"
  //   at new CastError (/app/node_modules/mongoose/lib/error/cast.js:29:11)
  //   at model.Query.exec (/app/node_modules/mongoose/lib/query.js:4331:21)
  //   at model.Query.Query.then (/app/node_modules/mongoose/lib/query.js:4423:15)
  //   at process._tickCallback (internal/process/next_tick.js:68:7)
  err.stack;
}

try {
  await Band.findOne({ _id: badId }).exec();
} catch (err) {
  // With `exec()`, the stack trace includes where in your code you
  // called `exec()`. Below is the stack trace:
  //
  // CastError: Cast to ObjectId failed for value "this is not a valid id" at path "_id" for model "band-promises"
  //   at new CastError (/app/node_modules/mongoose/lib/error/cast.js:29:11)
  //   at model.Query.exec (/app/node_modules/mongoose/lib/query.js:4331:21)
  //   at Context.<anonymous> (/app/test/index.test.js:138:42)
  //   at process._tickCallback (internal/process/next_tick.js:68:7)
  err.stack;
}
```

---

## Faster Mongoose Queries With Lean

**URL:** https://mongoosejs.com/docs/tutorials/lean.html

**Contents:**
- Faster Mongoose Queries With Lean
- Using Lean
- Lean and Populate
- When to Use Lean
- Plugins
- BigInts

The lean option tells Mongoose to skip hydrating the result documents. This makes queries faster and less memory intensive, but the result documents are plain old JavaScript objects (POJOs), not Mongoose documents. In this tutorial, you'll learn more about the tradeoffs of using lean().

By default, Mongoose queries return an instance of the Mongoose Document class. Documents are much heavier than vanilla JavaScript objects, because they have a lot of internal state for change tracking. Enabling the lean option tells Mongoose to skip instantiating a full Mongoose document and just give you the POJO.

How much smaller are lean documents? Here's a comparison.

Under the hood, after executing a query, Mongoose converts the query results from POJOs to Mongoose documents. If you turn on the lean option, Mongoose skips this step.

The downside of enabling lean is that lean docs don't have:

For example, the following code sample shows that the Person model's getters and virtuals don't run if you enable lean.

Populate works with lean(). If you use both populate() and lean(), the lean option propagates to the populated documents as well. In the below example, both the top-level 'Group' documents and the populated 'Person' documents will be lean.

Virtual populate also works with lean.

If you're executing a query and sending the results without modification to, say, an Express response, you should use lean. In general, if you do not modify the query results and do not use custom getters, you should use lean(). If you modify the query results or rely on features like getters or transforms, you should not use lean().

Below is an example of an Express route that is a good candidate for lean(). This route does not modify the person doc and doesn't rely on any Mongoose-specific functionality.

Below is an example of an Express route that should not use lean(). As a general rule of thumb, GET routes are good candidates for lean() in a RESTful API. On the other hand, PUT, POST, etc. routes generally should not use lean().

Remember that virtuals do not end up in lean() query results. Use the mongoose-lean-virtuals plugin to add virtuals to your lean query results.

Using lean() bypasses all Mongoose features, including virtuals, getters/setters, and defaults. If you want to use these features with lean(), you need to use the corresponding plugin:

However, you need to keep in mind that Mongoose does not hydrate lean documents, so this will be a POJO in virtuals, getters, and default functions.

By default, the MongoDB Node driver converts longs stored in MongoDB into JavaScript numbers, not BigInts. Set the useBigInt64 option on your lean() queries to inflate longs into BigInts.

**Examples:**

Example 1 (javascript):
```javascript
const leanDoc = await MyModel.findOne().lean();
```

Example 2 (javascript):
```javascript
const schema = new mongoose.Schema({ name: String });
const MyModel = mongoose.model('Test', schema);

await MyModel.create({ name: 'test' });

const normalDoc = await MyModel.findOne();
// To enable the `lean` option for a query, use the `lean()` function.
const leanDoc = await MyModel.findOne().lean();

v8Serialize(normalDoc).length; // approximately 180
v8Serialize(leanDoc).length; // approximately 55, about 3x smaller!

// In case you were wondering, the JSON form of a Mongoose doc is the same
// as the POJO. This additional memory only affects how much memory your
// Node.js process uses, not how much data is sent over the network.
JSON.stringify(normalDoc).length === JSON.stringify(leanDoc).length; // true
```

Example 3 (javascript):
```javascript
const normalDoc = await MyModel.findOne();
const leanDoc = await MyModel.findOne().lean();

normalDoc instanceof mongoose.Document; // true
normalDoc.constructor.name; // 'model'

leanDoc instanceof mongoose.Document; // false
leanDoc.constructor.name; // 'Object'
```

Example 4 (javascript):
```javascript
// Define a `Person` model. Schema has 2 custom getters and a `fullName`
// virtual. Neither the getters nor the virtuals will run if lean is enabled.
const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    get: capitalizeFirstLetter
  },
  lastName: {
    type: String,
    get: capitalizeFirstLetter
  }
});
personSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});
function capitalizeFirstLetter(v) {
  // Convert 'bob' -> 'Bob'
  return v.charAt(0).toUpperCase() + v.substring(1);
}
const Person = mongoose.model('Person', personSchema);

// Create a doc and load it as a lean doc
await Person.create({ firstName: 'benjamin', lastName: 'sisko' });
const normalDoc = await Person.findOne();
const leanDoc = await Person.findOne().lean();

normalDoc.fullName; // 'Benjamin Sisko'
normalDoc.firstName; // 'Benjamin', because of `capitalizeFirstLetter()`
normalDoc.lastName; // 'Sisko', because of `capitalizeFirstLetter()`

leanDoc.fullName; // undefined
leanDoc.firstName; // 'benjamin', custom getter doesn't run
leanDoc.lastName; // 'sisko', custom getter doesn't run
```

---

## Query

**URL:** https://mongoosejs.com/docs/api/query.html

**Contents:**
- Query
  - Query()
      - Parameters:
    - Example:
  - Query.prototype.$where()
      - Parameters:
      - Returns:
      - See:
    - Example:
    - Note:

Query constructor used for building queries. You do not need to instantiate a Query directly. Instead use Model functions like Model.find().

Specifies a javascript function or expression to pass to MongoDBs query system.

Only use $where when you have a condition that cannot be met using other MongoDB operators like $lt. Be sure to read about all of its caveats before using.

Specifies an $all query condition.

When called with one argument, the most recent path passed to where() is used.

Sets the allowDiskUse option, which allows the MongoDB server to use more than 100 MB for this query's sort(). This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.

Note that this option requires MongoDB server >= 4.4. Setting this option is a no-op for MongoDB 4.2 and earlier.

Calling query.allowDiskUse(v) is equivalent to query.setOptions({ allowDiskUse: v })

Specifies arguments for a $and condition.

Specifies the batchSize option.

Cannot be used with distinct()

Specifies a $box condition

Casts this query to the schema of model

If obj is present, it is cast instead of this query.

Executes the query returning a Promise which will be resolved with either the doc(s) or rejected with the error. Like .then(), but only takes a rejection handler.

More about Promise catch() in JavaScript.

DEPRECATED Alias for circle

Deprecated. Use circle instead.

DEPRECATED Specifies a $centerSphere condition

Deprecated. Use circle instead.

Specifies a $center or $centerSphere condition.

Make a copy of this query so you can re-execute it.

Adds a collation to this op (MongoDB 3.4 and up)

Specifies the comment option.

Cannot be used with distinct()

Specifies this query as a countDocuments() query. Behaves like count(), except it always does a full collection scan when passed an empty filter {}.

There are also minor differences in how countDocuments() handles $where and a couple geospatial operators. versus count().

This function triggers the following middleware.

The countDocuments() function is similar to count(), but there are a few operators that countDocuments() does not support. Below are the operators that count() supports but countDocuments() does not, and the suggested replacement:

Returns a wrapper around a mongodb driver cursor. A QueryCursor exposes a Streams3 interface, as well as a .next() function.

The .cursor() function triggers pre find hooks, but not post find hooks.

Declare and/or execute this query as a deleteMany() operation. Works like remove, except it deletes every document that matches filter in the collection, regardless of the value of single.

This function triggers deleteMany middleware.

This function calls the MongoDB driver's Collection#deleteMany() function. The returned promise resolves to an object that contains 2 properties:

Declare and/or execute this query as a deleteOne() operation. Works like remove, except it deletes at most one document regardless of the single option.

This function triggers deleteOne middleware.

This function calls the MongoDB driver's Collection#deleteOne() function. The returned promise resolves to an object that contains 2 properties:

Declares or executes a distinct() operation.

This function does not trigger any middleware.

Specifies an $elemMatch condition

Specifies the complementary comparison value for paths specified with where()

Gets/sets the error flag on this query. If this flag is not null or undefined, the exec() promise will reject without executing.

Note that query casting runs after hooks, so cast errors will override custom errors.

Specifies this query as a estimatedDocumentCount() query. Faster than using countDocuments() for large collections because estimatedDocumentCount() uses collection metadata rather than scanning the entire collection.

estimatedDocumentCount() does not accept a filter. Model.find({ foo: bar }).estimatedDocumentCount() is equivalent to Model.find().estimatedDocumentCount()

This function triggers the following middleware.

Specifies an $exists condition

Sets the explain option, which makes this query return detailed execution stats instead of the actual query result. This method is useful for determining what index your queries use.

Calling query.explain(v) is equivalent to query.setOptions({ explain: v })

Executes the query returning a Promise which will be resolved with .finally() chained.

More about Promise finally() in JavaScript.

Find all documents that match selector. The result will be an array of documents.

If there are too many documents in the result to fit in memory, use Query.prototype.cursor()

Finds a single document by its _id field. findById(id) is equivalent to findOne({ _id: id }).

The id is cast based on the Schema before sending the command.

This function triggers the following middleware.

Issue a MongoDB findOneAndDelete() command by a document's _id field. In other words, findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).

This function triggers the following middleware.

Issues a mongodb findOneAndUpdate command by a document's _id field. findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any).

This function triggers the following middleware.

Declares the query a findOne operation. When executed, the first found document is passed to the callback.

The result of the query is a single document, or null if no document was found.

This function triggers the following middleware.

Issues a MongoDB findOneAndDelete command.

Finds a matching document, removes it, and returns the found document (if any).

This function triggers the following middleware.

Issues a MongoDB findOneAndReplace command.

Finds a matching document, removes it, and returns the found document (if any).

This function triggers the following middleware.

Issues a mongodb findOneAndUpdate() command.

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any).

This function triggers the following middleware.

Specifies a $geometry condition

The argument is assigned to the most recent path passed to where().

geometry() must come after either intersects() or within().

The object argument must contain type and coordinates properties.

For update operations, returns the value of a path in the update's $set. Useful for writing getters/setters that can work with both update operations and save().

Returns the current query filter (also known as conditions) as a POJO.

Gets a list of paths to be populated by this query

Returns the current query filter. Equivalent to getFilter().

You should use getFilter() instead of getQuery() where possible. getQuery() will likely be deprecated in a future release.

Returns the current update operations as a JSON object.

Specifies a $gt query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies a $gte query condition.

When called with one argument, the most recent path passed to where() is used.

Cannot be used with distinct()

Specifies an $in query condition.

When called with one argument, the most recent path passed to where() is used.

Declares an intersects query for geometry().

MUST be used after where().

In Mongoose 3.7, intersects changed from a getter to a function. If you need the old syntax, use this.

Wrapper function to call isPathSelectedInclusive on a query.

Requests acknowledgement that this operation has been persisted to MongoDB's on-disk journal. This option is only valid for operations that write to the database:

Defaults to the schema's writeConcern.j option

Sets the lean option.

Documents returned from queries with the lean option enabled are plain javascript objects, not Mongoose Documents. They have no save method, getters/setters, virtuals, or other Mongoose features.

Lean is great for high-performance, read-only cases, especially when combined with cursors.

If you need virtuals, getters/setters, or defaults with lean(), you need to use a plugin. See:

Specifies the maximum number of documents the query will return.

Cannot be used with distinct()

Specifies a $lt query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies a $lte query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies a maxDistance query condition.

When called with one argument, the most recent path passed to where() is used.

Sets the maxTimeMS option. This will tell the MongoDB server to abort if the query or write op has been running for more than ms milliseconds.

Calling query.maxTimeMS(v) is equivalent to query.setOptions({ maxTimeMS: v })

Merges another Query or conditions object into this one.

When a Query is passed, conditions, field selection and options are merged.

Specifies a $mod condition, filters documents for documents whose path property is a number that is equal to remainder modulo divisor.

The model this query is associated with.

Getter/setter around the current mongoose-specific options for this query Below are the current Mongoose-specific options.

Mongoose maintains a separate object for internal options because Mongoose sends Query.prototype.options to the MongoDB server, and the above options are not relevant for the MongoDB server.

Specifies a $ne query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies a $near or $nearSphere condition

These operators return documents sorted by distance.

DEPRECATED Specifies a $nearSphere condition

Deprecated. Use query.near() instead with the spherical option set to true.

Specifies an $nin query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies arguments for a $nor condition.

Specifies arguments for an $or condition.

Make this query throw an error if no documents match the given filter. This is handy for integrating with async/await, because orFail() saves you an extra if statement to check if no document was found.

Specifies a $polygon condition

Specifies paths which should be populated with other documents.

Paths are populated after the query executes and a response is received. A separate query is then executed for each path specified for population. After a response for each query has also been returned, the results are passed to the callback.

Add post middleware to this query instance. Doesn't affect other queries.

Add pre middleware to this query instance. Doesn't affect other queries.

Get/set the current projection (AKA fields). Pass null to remove the current projection.

Unlike projection(), the select() function modifies the current projection in place. This function overwrites the existing projection.

Determines the MongoDB nodes from which to read.

Read more about how to use read preferences here.

Sets the readConcern option for the query.

Read more about how to use read concern here.

Specifies a $regex query condition.

When called with one argument, the most recent path passed to where() is used.

Declare and/or execute this query as a replaceOne() operation. MongoDB will replace the existing document and will not accept any atomic operators ($set, etc.)

Note replaceOne will not fire update middleware. Use pre('replaceOne') and post('replaceOne') instead.

This function triggers the following middleware.

Sets this query's sanitizeProjection option. If set, sanitizeProjection does two things:

With sanitizeProjection(), you can pass potentially untrusted user data to .select().

Enable or disable schema level projections for this query. Enabled by default. Set to false to include fields with select: false in the query result by default.

Specifies which document fields to include or exclude (also known as the query "projection")

When using string syntax, prefixing a path with - will flag that path as excluded. When a path does not have the - prefix, it is included. Lastly, if a path is prefixed with +, it forces inclusion of the path, which is useful for paths excluded at the schema level.

A projection must be either inclusive or exclusive. In other words, you must either list the fields to include (which excludes all others), or list the fields to exclude (which implies all other fields are included). The _id field is the only exception because MongoDB includes it by default.

Determines if field selection has been made.

Determines if exclusive field selection has been made.

Determines if inclusive field selection has been made.

Sets the MongoDB session associated with this query. Sessions are how you mark a query as part of a transaction.

Calling session(null) removes the session from this query.

Adds a $set to this query's update without changing the operation. This is useful for query middleware so you can add an update regardless of whether you use updateOne(), updateMany(), findOneAndUpdate(), etc.

Sets query options. Some options only make sense for certain operations.

The following options are only for find():

The following options are only for write operations: updateOne(), updateMany(), replaceOne(), findOneAndUpdate(), and findByIdAndUpdate():

The following options are only for find(), findOne(), findById(), findOneAndUpdate(), findOneAndReplace(), findOneAndDelete(), and findByIdAndUpdate():

The following options are only for all operations except updateOne(), updateMany(), deleteOne(), and deleteMany():

The following options are for find(), findOne(), findOneAndUpdate(), findOneAndDelete(), updateOne(), and deleteOne():

The following options are for findOneAndUpdate() and findOneAndDelete()

The following options are for all operations:

Sets the query conditions to the provided JSON object.

Sets the current update operation to new value.

Specifies a $size query condition.

When called with one argument, the most recent path passed to where() is used.

Specifies the number of documents to skip.

Cannot be used with distinct()

Specifies a $slice projection for an array.

Note: If the absolute value of the number of elements to be sliced is greater than the number of elements in the array, all array elements will be returned.

Note: If the number of elements to skip is positive and greater than the number of elements in the array, an empty array will be returned.

Note: If the number of elements to skip is negative and its absolute value is greater than the number of elements in the array, the starting position is the start of the array.

If an object is passed, values allowed are asc, desc, ascending, descending, 1, and -1.

If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with - which will be treated as descending.

Cannot be used with distinct()

Sets the tailable option (for use with capped collections).

Cannot be used with distinct()

Executes the query returning a Promise which will be resolved with either the doc(s) or rejected with the error.

More about then() in JavaScript.

Converts this query to a customized, reusable query constructor with all arguments and options retained.

Runs a function fn and treats the return value of fn as the new value for the query to resolve to.

Any functions you pass to transform() will run after any post hooks.

Declare and/or execute this query as an updateMany() operation. MongoDB will update all documents that match filter (as opposed to just the first one).

Note updateMany will not fire update middleware. Use pre('updateMany') and post('updateMany') instead.

This function triggers the following middleware.

Declare and/or execute this query as an updateOne() operation. MongoDB will update only the first document that matches filter.

Note updateOne will not fire update middleware. Use pre('updateOne') and post('updateOne') instead.

This function triggers the following middleware.

Sets the specified number of mongod servers, or tag set of mongod servers, that must acknowledge this write before this write is considered successful. This option is only valid for operations that write to the database:

Defaults to the schema's writeConcern.w option

Specifies a path for use with chaining.

Defines a $within or $geoWithin argument for geo-spatial queries.

MUST be used after where().

As of Mongoose 3.7, $geoWithin is always used for queries. To change this behavior, see Query.use$geoWithin.

In Mongoose 3.7, within changed from a getter to a function. If you need the old syntax, use this.

Sets the 3 write concern parameters for this query:

This option is only valid for operations that write to the database:

Defaults to the schema's writeConcern option

If w > 1, the maximum amount of time to wait for this write to propagate through the replica set before this operation fails. The default is 0, which means no timeout.

This option is only valid for operations that write to the database:

Defaults to the schema's writeConcern.wtimeout option

Returns an asyncIterator for use with for/await/of loops This function only works for find() queries. You do not need to call this function explicitly, the JavaScript runtime will call it for you.

Node.js 10.x supports async iterators natively without any flags. You can enable async iterators in Node.js 8.x using the --harmony_async_iteration flag.

Note: This function is not if Symbol.asyncIterator is undefined. If Symbol.asyncIterator is undefined, that means your Node.js version does not support async iterators.

Returns a string representation of this query.

More about toString() in JavaScript.

Flag to opt out of using $geoWithin.

MongoDB 2.4 deprecated the use of $within, replacing it with $geoWithin. Mongoose uses $geoWithin by default (which is 100% backward compatible with $within). If you are running an older version of MongoDB, set this flag to false so your within() queries continue to work.

**Examples:**

Example 1 (javascript):
```javascript
const query = MyModel.find(); // `query` is an instance of `Query`
query.setOptions({ lean : true });
query.collection(MyModel.collection);
query.where('age').gte(21).exec(callback);

// You can instantiate a query directly. There is no need to do
// this unless you're an advanced user with a very good reason to.
const query = new mongoose.Query();
```

Example 2 (unknown):
```unknown
query.$where('this.comments.length === 10 || this.name.length === 5')

// or

query.$where(function () {
  return this.comments.length === 10 || this.name.length === 5;
})
```

Example 3 (unknown):
```unknown
MyModel.find().where('pets').all(['dog', 'cat', 'ferret']);
// Equivalent:
MyModel.find().all('pets', ['dog', 'cat', 'ferret']);
```

Example 4 (unknown):
```unknown
await query.find().sort({ name: 1 }).allowDiskUse(true);
// Equivalent:
await query.find().sort({ name: 1 }).allowDiskUse();
```

---

## Query Casting

**URL:** https://mongoosejs.com/docs/tutorials/query_casting.html

**Contents:**
- Query Casting
- The strictQuery Option
- Implicit $in

The first parameter to Model.find(), Query#find(), Model.findOne(), etc. is called filter. In older content this parameter is sometimes called query or conditions. For example:

When you execute the query using Query#exec() or Query#then(), Mongoose casts the filter to match your schema.

If Mongoose fails to cast the filter to your schema, your query will throw a CastError.

By default, Mongoose does not cast filter properties that aren't in your schema.

You can configure this behavior using the strictQuery option for schemas. This option is analogous to the strict option. Setting strictQuery to true removes non-schema properties from the filter:

To make Mongoose throw an error if your filter has a property that isn't in the schema, set strictQuery to 'throw':

Because of schemas, Mongoose knows what types fields should be, so it can provide some neat syntactic sugar. For example, if you forget to put $in on a non-array field, Mongoose will add $in for you.

**Examples:**

Example 1 (javascript):
```javascript
const query = Character.find({ name: 'Jean-Luc Picard' });
query.getFilter(); // `{ name: 'Jean-Luc Picard' }`

// Subsequent chained calls merge new properties into the filter
query.find({ age: { $gt: 50 } });
query.getFilter(); // `{ name: 'Jean-Luc Picard', age: { $gt: 50 } }`
```

Example 2 (javascript):
```javascript
// Note that `_id` and `age` are strings. Mongoose will cast `_id` to
// a MongoDB ObjectId and `age.$gt` to a number.
const query = Character.findOne({
  _id: '5cdc267dd56b5662b7b7cc0c',
  age: { $gt: '50' }
});

// `{ _id: '5cdc267dd56b5662b7b7cc0c', age: { $gt: '50' } }`
// Query hasn't been executed yet, so Mongoose hasn't casted the filter.
query.getFilter();

const doc = await query.exec();
doc.name; // "Jean-Luc Picard"

// Mongoose casted the filter, so `_id` became an ObjectId and `age.$gt`
// became a number.
query.getFilter()._id instanceof mongoose.Types.ObjectId; // true
typeof query.getFilter().age.$gt === 'number'; // true
```

Example 3 (javascript):
```javascript
const query = Character.findOne({ age: { $lt: 'not a number' } });

const err = await query.exec().then(() => null, err => err);
err instanceof mongoose.CastError; // true
// Cast to number failed for value "not a number" at path "age" for
// model "Character"
err.message;
```

Example 4 (javascript):
```javascript
const query = Character.findOne({ notInSchema: { $lt: 'not a number' } });

// No error because `notInSchema` is not defined in the schema
await query.exec();
```

---
