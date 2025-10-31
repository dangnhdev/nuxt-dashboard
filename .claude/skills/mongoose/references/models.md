# Mongoose - Models

**Pages:** 15

---

## Using Mongoose With AWS Lambda

**URL:** https://mongoosejs.com/docs/lambda.html

**Contents:**
- Using Mongoose With AWS Lambda
- Connection Helper
- Using mongoose.connect()

AWS Lambda is a popular service for running arbitrary functions without managing individual servers. Using Mongoose in your AWS Lambda functions is easy. Here's a sample function that connects to a MongoDB instance and finds a single document:

The above code works fine for a single Lambda function, but what if you want to reuse the same connection logic in multiple Lambda functions? You can export the below function.

You can also use mongoose.connect(), so you can use mongoose.model() to create models.

**Examples:**

Example 1 (javascript):
```javascript
const mongoose = require('mongoose');

let conn = null;

const uri = 'YOUR CONNECTION STRING HERE';

exports.handler = async function(event, context) {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false;

  // Because `conn` is in the global scope, Lambda may retain it between
  // function calls thanks to `callbackWaitsForEmptyEventLoop`.
  // This means your Lambda function doesn't have to go through the
  // potentially expensive process of connecting to MongoDB every time.
  if (conn == null) {
    conn = mongoose.createConnection(uri, {
      // and tell the MongoDB driver to not wait more than 5 seconds
      // before erroring out if it isn't connected
      serverSelectionTimeoutMS: 5000
    });

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn.asPromise();
    conn.model('Test', new mongoose.Schema({ name: String }));
  }

  const M = conn.model('Test');

  const doc = await M.findOne();
  console.log(doc);

  return doc;
};
```

Example 2 (javascript):
```javascript
const mongoose = require('mongoose');

let conn = null;

const uri = 'YOUR CONNECTION STRING HERE';

exports.connect = async function() {
  if (conn == null) {
    conn = mongoose.createConnection(uri, {
      serverSelectionTimeoutMS: 5000
    });

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn.asPromise();
  }

  return conn;
};
```

Example 3 (javascript):
```javascript
const mongoose = require('mongoose');

let conn = null;

const uri = 'YOUR CONNECTION STRING HERE';

exports.connect = async function() {
  if (conn == null) {
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    }).then(() => mongoose);

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
};
```

---

## Documents

**URL:** https://mongoosejs.com/docs/documents.html

**Contents:**
- Documents
- Documents vs Models
- Retrieving
- Updating Using save()
- Setting Nested Properties
- Updating Using Queries
- Validating
- Overwriting
- Next Up

Mongoose documents represent a one-to-one mapping to documents as stored in MongoDB. Each document is an instance of its Model.

Document and Model are distinct classes in Mongoose. The Model class is a subclass of the Document class. When you use the Model constructor, you create a new document.

In Mongoose, a "document" generally means an instance of a model. You should not have to create an instance of the Document class without going through a model.

When you load documents from MongoDB using model functions like findOne(), you get a Mongoose document back.

Mongoose documents track changes. You can modify a document using vanilla JavaScript assignments and Mongoose will convert it into MongoDB update operators.

The save() method returns a promise. If save() succeeds, the promise resolves to the document that was saved.

If the document with the corresponding _id is not found, Mongoose will report a DocumentNotFoundError:

Mongoose documents have a set() function that you can use to safely set deeply nested properties.

Mongoose documents also have a get() function that lets you safely read deeply nested properties. get() lets you avoid having to explicitly check for nullish values, similar to JavaScript's optional chaining operator ?..

You can use optional chaining ?. and nullish coalescing ?? with Mongoose documents. However, be careful when using nullish coalescing assignments ??= to create nested paths with Mongoose documents.

The save() function is generally the right way to update a document with Mongoose. With save(), you get full validation and middleware.

For cases when save() isn't flexible enough, Mongoose lets you create your own MongoDB updates with casting, middleware, and limited validation.

Note that update(), updateMany(), findOneAndUpdate(), etc. do not execute save() middleware. If you need save middleware and full validation, first query for the document and then save() it.

Documents are casted and validated before they are saved. Mongoose first casts values to the specified type and then validates them. Internally, Mongoose calls the document's validate() method before saving.

Mongoose also supports limited validation on updates using the runValidators option. Mongoose casts parameters to query functions like findOne(), updateOne() by default. However, Mongoose does not run validation on query function parameters by default. You need to set runValidators: true for Mongoose to validate.

Read the validation guide for more details.

There are 2 different ways to overwrite a document (replacing all keys in the document). One way is to use the Document#overwrite() function followed by save().

The other way is to use Model.replaceOne().

Now that we've covered Documents, let's take a look at Subdocuments.

**Examples:**

Example 1 (javascript):
```javascript
const MyModel = mongoose.model('Test', new Schema({ name: String }));
const doc = new MyModel();

doc instanceof MyModel; // true
doc instanceof mongoose.Model; // true
doc instanceof mongoose.Document; // true
```

Example 2 (javascript):
```javascript
const doc = await MyModel.findOne();

doc instanceof MyModel; // true
doc instanceof mongoose.Model; // true
doc instanceof mongoose.Document; // true
```

Example 3 (unknown):
```unknown
doc.name = 'foo';

// Mongoose sends an `updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
// to MongoDB.
await doc.save();
```

Example 4 (javascript):
```javascript
doc.save().then(savedDoc => {
  savedDoc === doc; // true
});
```

---

## Model

**URL:** https://mongoosejs.com/docs/api/model.html

**Contents:**
- Model
  - Model()
      - Parameters:
      - Inherits:
    - Example:
  - Model.$where()
      - Parameters:
      - Returns:
      - See:
  - Model.aggregate()

A Model is a class that's your primary tool for interacting with MongoDB. An instance of a Model is called a Document.

In Mongoose, the term "Model" refers to subclasses of the mongoose.Model class. You should not use the mongoose.Model class directly. The mongoose.model() and connection.model() functions create subclasses of mongoose.Model as shown below.

Creates a Query and specifies a $where condition.

Sometimes you need to query for things in mongodb using a JavaScript expression. You can do so via find({ $where: javascript }), or you can use the mongoose shortcut method $where via a Query chain or from your mongoose Model.

Performs aggregations on the models collection.

The aggregate itself is returned.

This function triggers the following middleware.

Apply defaults to the given document or POJO.

Apply this model's timestamps to a given POJO, including subdocument timestamps

Apply this model's virtuals to a given POJO. Virtuals execute with the POJO as the context this.

Takes an array of documents, gets the changes and inserts/updates documents in the database according to whether or not the document is new, or whether it has changes or not.

bulkSave uses bulkWrite under the hood, so it's mostly useful when dealing with many documents (10K+)

bulkSave() throws errors under the following conditions:

Note that bulkSave() will not throw an error if only some of the save() calls succeeded.

Sends multiple insertOne, updateOne, updateMany, replaceOne, deleteOne, and/or deleteMany operations to the MongoDB server in one command. This is faster than sending multiple independent operations (e.g. if you use create()) because with bulkWrite() there is only one round trip to MongoDB.

Mongoose will perform casting on all operations you provide. The only exception is setting the update operator for updateOne or updateMany to a pipeline: Mongoose does not cast update pipelines.

This function does not trigger any middleware, neither save(), nor update(). If you need to trigger save() middleware for every document use create() instead.

The supported operations are:

Cast the given POJO to the model's schema

Deletes all indexes that aren't defined in this model's schema. Used by syncIndexes().

The returned promise resolves to a list of the dropped indexes' names as an array

If auto encryption is enabled, returns a ClientEncryption instance that is configured with the same settings that Mongoose's underlying MongoClient is using. If the client has not yet been configured, returns null.

Counts number of documents matching filter in a database collection.

If you want to count all documents in a large collection, use the estimatedDocumentCount() function instead. If you call countDocuments({}), MongoDB will always execute a full collection scan and not use any indexes.

The countDocuments() function is similar to count(), but there are a few operators that countDocuments() does not support. Below are the operators that count() supports but countDocuments() does not, and the suggested replacement:

Shortcut for saving one or more documents to the database. MyModel.create(docs) does new MyModel(doc).save() for every doc in docs.

This function triggers the following middleware.

Create the collection for this model. By default, if no indexes are specified, mongoose will not create the collection for the model until any documents are created. Use this method to create the collection explicitly.

Note 1: You may need to call this before starting a transaction See https://www.mongodb.com/docs/manual/core/transactions/#transactions-and-operations

Note 2: You don't have to call this if your schema contains index or unique field. In that case, just use Model.init()

Similar to ensureIndexes(), except for it uses the createIndex function.

Create an Atlas search index. This function only works when connected to MongoDB Atlas.

Creates all Atlas search indexes defined in this model's schema. This function only works when connected to MongoDB Atlas.

Connection instance the model uses.

Deletes all of the documents that match conditions from the collection. It returns an object with the property deletedCount containing the number of documents deleted.

This function triggers deleteMany query hooks. Read the middleware docs to learn more.

Deletes the first document that matches conditions from the collection. It returns an object with the property deletedCount indicating how many documents were deleted.

This function triggers deleteOne query hooks. Read the middleware docs to learn more.

Does a dry-run of Model.syncIndexes(), returning the indexes that syncIndexes() would drop and create if you were to run syncIndexes().

Adds a discriminator type.

Creates a Query for a distinct operation.

Delete an existing Atlas search index by name. This function only works when connected to MongoDB Atlas.

Sends createIndex commands to mongo for each index declared in the schema. The createIndex commands are sent in series.

After completion, an index event is emitted on this Model passing an error if one occurred.

NOTE: It is not recommended that you run this in production. Index creation may impact database performance depending on your load. Use with caution.

Estimates the number of documents in the MongoDB collection. Faster than using countDocuments() for large collections because estimatedDocumentCount() uses collection metadata rather than scanning the entire collection.

Event emitter that reports any errors that occurred. Useful for global error handling.

Returns a document with _id only if at least one document exists in the database that matches the given filter, and null otherwise.

Under the hood, MyModel.exists({ answer: 42 }) is equivalent to MyModel.findOne({ answer: 42 }).select({ _id: 1 }).lean()

This function triggers the following middleware.

Mongoose casts the filter to match the model's schema before the command is sent. See our query casting tutorial for more information on how Mongoose casts filter.

Finds a single document by its _id field. findById(id) is equivalent to findOne({ _id: id }).

The id is cast based on the Schema before sending the command.

This function triggers the following middleware.

Issue a MongoDB findOneAndDelete() command by a document's _id field. In other words, findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).

This function triggers the following middleware.

Issues a mongodb findOneAndUpdate command by a document's _id field. findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).

Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any).

This function triggers the following middleware.

All top level update keys which are not atomic operation names are treated as set operations:

findOneAndX and findByIdAndX functions support limited validation. You can enable validation by setting the runValidators option.

If you need full-fledged validation, use the traditional approach of first retrieving the document.

The conditions are cast to their respective SchemaTypes before the command is sent.

Note: conditions is optional, and if conditions is null or undefined, mongoose will send an empty findOne command to MongoDB, which will return an arbitrary document. If you're querying by _id, use findById() instead.

Issue a MongoDB findOneAndDelete() command.

Finds a matching document, removes it, and returns the found document (if any).

This function triggers the following middleware.

findOneAndX and findByIdAndX functions support limited validation. You can enable validation by setting the runValidators option.

If you need full-fledged validation, use the traditional approach of first retrieving the document.

Issue a MongoDB findOneAndReplace() command.

Finds a matching document, replaces it with the provided doc, and returns the document.

This function triggers the following query middleware.

Issues a mongodb findOneAndUpdate command.

Finds a matching document, updates it according to the update arg, passing any options. A Query object is returned.

All top level update keys which are not atomic operation names are treated as set operations:

findOneAndX and findByIdAndX functions support limited validation that you can enable by setting the runValidators option.

If you need full-fledged validation, use the traditional approach of first retrieving the document.

Shortcut for creating a new Document from existing raw data, pre-saved in the DB. The document returned has no paths marked as modified initially.

This function is responsible for initializing the underlying connection in MongoDB based on schema options. This function performs the following operations:

Mongoose calls this function automatically when a model is a created using mongoose.model() or connection.model(), so you don't need to call init() to trigger index builds.

However, you may need to call init() to get back a promise that will resolve when your indexes are finished. Calling await Model.init() is helpful if you need to wait for indexes to build before continuing. For example, if you want to wait for unique indexes to build before continuing with a test case.

Shortcut for validating an array of documents and inserting them into MongoDB if they're all valid. This function is faster than .create() because it only sends one operation to the server, rather than one for each document.

Mongoose always validates each document before sending insertMany to MongoDB. So if one document has a validation error, no documents will be saved, unless you set the ordered option to false.

This function does not trigger save middleware.

This function triggers the following middleware.

Shortcut for saving one document to the database. MyModel.insertOne(obj, options) is almost equivalent to new MyModel(obj).save(options). The difference is that insertOne() checks if obj is already a document, and checks for discriminators.

This function triggers the following middleware.

Helper for console.log. Given a model named 'MyModel', returns the string 'Model { MyModel }'.

Lists the indexes currently defined in MongoDB. This may or may not be the same as the indexes defined in your schema depending on whether you use the autoIndex option and if you build indexes manually.

List all Atlas search indexes on this model's collection. This function only works when connected to MongoDB Atlas.

Return the MongoDB namespace for this model as a string. The namespace is the database name, followed by '.', followed by the collection name.

Populates document references.

Changed in Mongoose 6: the model you call populate() on should be the "local field" model, not the "foreign field" model.

Returns the model instance used to create this document if no name specified. If name specified, returns the model with the given name.

Additional properties to attach to the query when calling save() and isNew is false.

Base Mongoose instance the model uses.

If this is a discriminator model, baseModelName is the name of the base model.

The collection instance this model uses. A Mongoose collection is a thin wrapper around a [MongoDB Node.js driver collection](MongoDB Node.js driver collection). Using Model.collection means you bypass Mongoose middleware, validation, and casting.

This property is read-only. Modifying this property is a no-op.

Collection the model uses.

Connection the model uses.

Delete this document from the db. Returns a Query instance containing a deleteOne operation by this document's _id.

Since deleteOne() returns a Query, the deleteOne() will not execute unless you use either await, .then(), .catch(), or .exec()

Registered discriminators for this model.

Signal that we desire an increment of this documents version.

Returns the model instance used to create this document if no name specified. If name specified, returns the model with the given name.

The name of the model

Saves this document by inserting a new document into the database if document.isNew is true, or sends an updateOne operation with just the modified paths if isNew is false.

If save is successful, the returned promise will fulfill with the document saved.

Apply changes made to this model's schema after this model was compiled. By default, adding virtuals and other properties to a schema after the model is compiled does nothing. Call this function to apply virtuals and properties that were added later.

Replace the existing document with the given document (no atomic operators like $set).

This function triggers the following middleware.

Schema the model uses.

Requires MongoDB >= 3.6.0. Starts a MongoDB session for benefits like causal consistency, retryable writes, and transactions.

Calling MyModel.startSession() is equivalent to calling MyModel.db.startSession().

This function does not trigger any middleware.

Makes the indexes in MongoDB match the indexes defined in this model's schema. This function will drop any indexes that are not defined in the model's schema except the _id index, and build any indexes that are in your schema but not in MongoDB.

See the introductory blog post for more information.

You should be careful about running syncIndexes() on production applications under heavy load, because index builds are expensive operations, and unexpected index drops can lead to degraded performance. Before running syncIndexes(), you can use the diffIndexes() function to check what indexes syncIndexes() will drop and create.

Translate any aliases fields/conditions so the final query or document object is pure

By default, translateAliases() overwrites raw fields with aliased fields. So if n is an alias for name, { n: 'alias', name: 'raw' } will resolve to { name: 'alias' }. However, you can set the errorOnDuplicates option to throw an error if there are potentially conflicting paths. The translateAliases option for queries uses errorOnDuplicates.

Only translate arguments of object type anything else is returned raw

Same as updateOne(), except MongoDB will update all documents that match filter (as opposed to just the first one) regardless of the value of the multi option.

Note updateMany will not fire update middleware. Use pre('updateMany') and post('updateMany') instead.

This function triggers the following middleware.

Update only the first document that matches filter.

This function triggers the following middleware.

Update an existing Atlas search index. This function only works when connected to MongoDB Atlas.

Changes the Connection instance this model uses to make requests to MongoDB. This function is most useful for changing the Connection that a Model defined using mongoose.model() uses after initialization.

Note: useConnection() does not apply any connection-level plugins from the new connection. If you use useConnection() to switch a model's connection, the model will still have the old connection's plugins.

Casts and validates the given object against this model's schema, passing the given context to custom validators.

Requires a replica set running MongoDB >= 3.6.0. Watches the underlying collection for changes using MongoDB change streams.

This function does not trigger any middleware. In particular, it does not trigger aggregate middleware.

The ChangeStream object is an event emitter that emits the following events:

Creates a Query, applies the passed conditions, and returns the Query.

For example, instead of writing:

we can instead write:

Since the Query class also supports where you can continue chaining

**Examples:**

Example 1 (javascript):
```javascript
// `UserModel` is a "Model", a subclass of `mongoose.Model`.
const UserModel = mongoose.model('User', new Schema({ name: String }));

// You can use a Model to create new documents using `new`:
const userDoc = new UserModel({ name: 'Foo' });
await userDoc.save();

// You also use a model to create queries:
const userFromDb = await UserModel.findOne({ name: 'Foo' });
```

Example 2 (unknown):
```unknown
Blog.$where('this.username.indexOf("val") !== -1').exec(function (err, docs) {});
```

Example 3 (javascript):
```javascript
// Find the max balance of all accounts
const res = await Users.aggregate([
  { $group: { _id: null, maxBalance: { $max: '$balance' }}},
  { $project: { _id: 0, maxBalance: 1 }}
]);

console.log(res); // [ { maxBalance: 98000 } ]

// Or use the aggregation pipeline builder.
const res = await Users.aggregate().
  group({ _id: null, maxBalance: { $max: '$balance' } }).
  project('-id maxBalance').
  exec();
console.log(res); // [ { maxBalance: 98 } ]
```

Example 4 (javascript):
```javascript
const userSchema = new Schema({ name: String }, { timestamps: true });
const User = mongoose.model('User', userSchema);

const obj = { name: 'John' };
User.applyTimestamps(obj);
obj.createdAt; // 2024-06-01T18:00:00.000Z
obj.updatedAt; // 2024-06-01T18:00:00.000Z
```

---

## Mongoose Virtuals

**URL:** https://mongoosejs.com/docs/tutorials/virtuals.html

**Contents:**
- Mongoose Virtuals
- Your First Virtual
- Virtual Setters
- Virtuals in JSON
- Virtuals in console.log()
- Virtuals with Lean
- Limitations
- Populate
- Virtuals via schema options
- Further Reading

In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.

Suppose you have a User model. Every user has an email, but you also want the email's domain. For example, the domain portion of 'test@gmail.com' is 'gmail.com'.

Below is one way to implement the domain property using a virtual. You define virtuals on a schema using the Schema#virtual() function.

The Schema#virtual() function returns a VirtualType object. Unlike normal document properties, virtuals do not have any underlying value and Mongoose does not do any type coercion on virtuals. However, virtuals do have getters and setters, which make them ideal for computed properties, like the domain example above.

You can also use virtuals to set multiple properties at once as an alternative to custom setters on normal properties. For example, suppose you have two string properties: firstName and lastName. You can create a virtual property fullName that lets you set both of these properties at once. The key detail is that, in virtual getters and setters, this refers to the document the virtual is attached to.

By default, Mongoose does not include virtuals when you convert a document to JSON. For example, if you pass a document to Express' res.json() function, virtuals will not be included by default.

To include virtuals in res.json(), you need to set the toJSON schema option to { virtuals: true }.

By default, Mongoose does not include virtuals in console.log() output. To include virtuals in console.log(), you need to set the toObject schema option to { virtuals: true }, or use toObject() before printing the object.

Virtuals are properties on Mongoose documents. If you use the lean option, that means your queries return POJOs rather than full Mongoose documents. That means no virtuals if you use lean().

If you use lean() for performance, but still need virtuals, Mongoose has an officially supported mongoose-lean-virtuals plugin that decorates lean documents with virtuals.

Mongoose virtuals are not stored in MongoDB, which means you can't query based on Mongoose virtuals.

If you want to query by a computed property, you should set the property using a custom setter or pre save middleware.

Mongoose also supports populating virtuals. A populated virtual contains documents from another collection. To define a populated virtual, you need to specify:

Virtuals can also be defined in the schema-options directly without having to use .virtual:

The same also goes for virtual options, like virtual populate:

**Examples:**

Example 1 (javascript):
```javascript
const userSchema = mongoose.Schema({
  email: String
});
// Create a virtual property `domain` that's computed from `email`.
userSchema.virtual('domain').get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

const doc = await User.create({ email: 'test@gmail.com' });
// `domain` is now a property on User documents.
doc.domain; // 'gmail.com'
```

Example 2 (javascript):
```javascript
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});
// Create a virtual property `fullName` with a getter and setter.
userSchema.virtual('fullName').
  get(function() { return `${this.firstName} ${this.lastName}`; }).
  set(function(v) {
    // `v` is the value being set, so use the value to set
    // `firstName` and `lastName`.
    const firstName = v.substring(0, v.indexOf(' '));
    const lastName = v.substring(v.indexOf(' ') + 1);
    this.set({ firstName, lastName });
  });
const User = mongoose.model('User', userSchema);

const doc = new User();
// Vanilla JavaScript assignment triggers the setter
doc.fullName = 'Jean-Luc Picard';

doc.fullName; // 'Jean-Luc Picard'
doc.firstName; // 'Jean-Luc'
doc.lastName; // 'Picard'
```

Example 3 (javascript):
```javascript
const opts = { toJSON: { virtuals: true } };
const userSchema = mongoose.Schema({
  _id: Number,
  email: String
}, opts);
// Create a virtual property `domain` that's computed from `email`.
userSchema.virtual('domain').get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

const doc = new User({ _id: 1, email: 'test@gmail.com' });

doc.toJSON().domain; // 'gmail.com'
// {"_id":1,"email":"test@gmail.com","domain":"gmail.com","id":"1"}
JSON.stringify(doc);

// To skip applying virtuals, pass `virtuals: false` to `toJSON()`
doc.toJSON({ virtuals: false }).domain; // undefined
```

Example 4 (unknown):
```unknown
console.log(doc.toObject({ virtuals: true }));
```

---

## Migrating from 6.x to 7.x

**URL:** https://mongoosejs.com/docs/migrating_to_7.html

**Contents:**
- Migrating from 6.x to 7.x
- Version Requirements
- strictQuery
- Removed remove()
- Dropped callback support
- Removed update()
- ObjectId requires new
- id Setter
- Discriminator schemas use base schema options by default
- Removed castForQueryWrapper, updated castForQuery() signature

There are several backwards-breaking changes you should be aware of when migrating from Mongoose 6.x to Mongoose 7.x.

If you're still on Mongoose 5.x, please read the Mongoose 5.x to 6.x migration guide and upgrade to Mongoose 6.x first.

Mongoose now requires Node.js >= 14.0.0 and MongoDB Node Driver >= 5.0.0.

See the MongoDB Node Driver migration guide for detailed info.

strictQuery is now false by default.

The remove() method on documents and models has been removed. Use deleteOne() or deleteMany() instead.

Keep in mind that deleteOne() hooks are treated as query middleware by default. So for middleware, please do the following:

The following functions no longer accept callbacks. They always return promises.

If you are using the above functions with callbacks, we recommend switching to async/await, or promises if async functions don't work for you. If you need help refactoring a legacy codebase, this tool from Mastering JS callbacks to async await using ChatGPT.

Model.update(), Query.prototype.update(), and Document.prototype.update() have been removed. Use updateOne() instead.

In Mongoose 6 and older, you could define a new ObjectId without using the new keyword:

In Mongoose 7, ObjectId is now a JavaScript class, so you need to use the new keyword.

Starting in Mongoose 7.4, Mongoose's built-in id virtual (which stores the document's _id as a string) has a setter which allows modifying the document's _id property via id.

This can cause surprising behavior if you create a new TestModel(obj) where obj contains both an id and an _id, or if you use doc.set()

The id setter was later removed in Mongoose 8 due to compatibility issues.

When you use Model.discriminator(), Mongoose will now use the discriminator base schema's options by default. This means you don't need to explicitly set child schema options to match the base schema's.

Mongoose now always calls SchemaType castForQuery() method with 3 arguments: $conditional, value, and context. If you've implemented a custom schema type that defines its own castForQuery() method, you need to update the method as follows.

Mongoose now copies user defined schema options when adding one schema to another. For example, childSchema below will get baseSchema's id and toJSON options.

This applies both when creating a new schema using an array of schemas, as well as when calling add() as follows.

The internal _bsontype property on ObjectIds is equal to 'ObjectId' in Mongoose 7, as opposed to 'ObjectID' in Mongoose 6.

Please update any places where you use _bsontype to check if an object is an ObjectId. This may also affect libraries that use Mongoose.

MongoDB no longer supports mapReduce, so Mongoose 7 no longer has a Model.mapReduce() function. Use the aggregation framework as a replacement for mapReduce().

Mongoose 7 no longer supports plugging in custom promise libraries. So the following no longer makes Mongoose return Bluebird promises in Mongoose 7.

If you want to use Bluebird for all promises globally, you can do the following:

Before Mongoose 5.2.0, you needed to enable the keepAlive option to initiate TCP keepalive to prevent "connection closed" errors. However, keepAlive has been true by default since Mongoose 5.2.0, and the keepAlive is deprecated as of Mongoose 7.2.0. Please remove keepAlive and keepAliveInitialDelay options from your Mongoose connections.

Mongoose 7 no longer exports a LeanDocument type, and no longer supports passing a document type that extends Document into Model<>.

Mongoose's HydratedDocument type transforms a raw document interface into the type of the hydrated Mongoose document, including virtuals, methods, etc. In Mongoose 7, the generic parameters to HydratedDocument have changed. In Mongoose 6, the generic parameters were:

In Mongoose 7, the new type is as follows.

In Mongoose 7, the first parameter is the raw document interface, the 2nd parameter is any document-specific overrides (usually virtuals and methods), and the 3rd parameter is any query helpers associated with the document's model.

The key difference is that, in Mongoose 6, the 3rd generic param was the document's virtuals. In Mongoose 7, the 3rd generic param is the document's query helpers.

**Examples:**

Example 1 (javascript):
```javascript
const mySchema = new Schema({ field: Number });
const MyModel = mongoose.model('Test', mySchema);

// Mongoose will not strip out `notInSchema: 1` because `strictQuery` is false by default
const docs = await MyModel.find({ notInSchema: 1 });
// Empty array in Mongoose 7. In Mongoose 6, this would contain all documents in MyModel
docs;
```

Example 2 (javascript):
```javascript
const mySchema = new Schema({ field: Number });
const MyModel = mongoose.model('Test', mySchema);

// Change this:
await MyModel.remove(filter);

// To this:
await MyModel.deleteOne(filter);
// Or this, if you want to delete multiple:
await MyModel.deleteMany(filter);

// For documents, change this:
await doc.remove();

// To this:
await doc.deleteOne();
```

Example 3 (unknown):
```unknown
// Replace this:
schema.pre('remove', function() {
  /* ... */
});

// With this:
schema.pre('deleteOne', { document: true, query: false }, function() {
  /* ... */
});
```

Example 4 (javascript):
```javascript
// Before
conn.startSession(function(err, session) {
  // ...
});

// After
const session = await conn.startSession();
// Or:
conn.startSession().then(session => { /* ... */ });

// With error handling
try {
  await conn.startSession();
} catch (err) { /* ... */ }
// Or:
const [err, session] = await conn.startSession().then(
  session => ([null, session]),
  err => ([err, null])
);
```

---

## Aggregate

**URL:** https://mongoosejs.com/docs/api/aggregate.html

**Contents:**
- Aggregate
  - Aggregate()
      - Parameters:
      - See:
    - Example:
    - Note:
  - Aggregate.prototype.addFields()
      - Parameters:
      - Returns:
      - See:

Aggregate constructor used for building aggregation pipelines. Do not instantiate this class directly, use Model.aggregate() instead.

The documents returned are plain javascript objects, not mongoose documents (since any shape of document can be returned).

Mongoose does not cast pipeline stages. The below will not work unless _id is a string in the database

new Aggregate([{ $match: { _id: '00000000000000000000000a' } }]); // Do this instead to cast to an ObjectId new Aggregate([{ $match: { _id: new mongoose.Types.ObjectId('00000000000000000000000a') } }]);

Appends a new $addFields operator to this aggregate pipeline. Requires MongoDB v3.4+ to work

Sets the allowDiskUse option for the aggregation query

Appends new operators to this aggregate pipeline

Executes the aggregation returning a Promise which will be resolved with either the doc(s) or rejected with the error. Like .then(), but only takes a rejection handler. Compatible with await.

Appends a new $count operator to this aggregate pipeline.

Sets the cursor option and executes this aggregation, returning an aggregation cursor. Cursors are useful if you want to process the results of the aggregation one-at-a-time because the aggregation result is too big to fit into memory.

Appends a new $densify operator to this aggregate pipeline.

Executes the aggregate pipeline on the currently bound Model.

Execute the aggregation with explain

Combines multiple aggregation pipelines.

Appends a new $fill operator to this aggregate pipeline.

Executes the aggregate returning a Promise which will be resolved with .finally() chained.

More about Promise finally() in JavaScript.

Appends new custom $graphLookup operator(s) to this aggregate pipeline, performing a recursive search on a collection.

Note that graphLookup can only consume at most 100MB of memory, and does not allow disk use even if { allowDiskUse: true } is specified.

Appends a new custom $group operator to this aggregate pipeline.

Sets the hint option for the aggregation query

Appends a new $limit operator to this aggregate pipeline.

Appends new custom $lookup operator to this aggregate pipeline.

Appends a new custom $match operator to this aggregate pipeline.

Get/set the model that this aggregation will execute on.

Appends a new $geoNear operator to this aggregate pipeline.

MUST be used as the first operator in the pipeline.

Lets you set arbitrary options, for middleware or plugins.

Contains options passed down to the aggregate command. Supported options are:

Returns the current pipeline

Appends a new $project operator to this aggregate pipeline.

Mongoose query selection syntax is also supported.

Sets the readPreference option for the aggregation query.

Sets the readConcern level for the aggregation query.

Appends a new $redact operator to this aggregate pipeline.

If 3 arguments are supplied, Mongoose will wrap them with if-then-else of $cond operator respectively If thenExpr or elseExpr is string, make sure it starts with $$, like $$DESCEND, $$PRUNE or $$KEEP.

Appends a new $replaceRoot operator to this aggregate pipeline.

Note that the $replaceRoot operator requires field strings to start with '$'. If you are passing in a string Mongoose will prepend '$' if the specified field doesn't start '$'. If you are passing in an object the strings in your expression will not be altered.

Appends new custom $sample operator to this aggregate pipeline.

Helper for Atlas Text Search's $search stage.

Sets the session for this aggregation. Useful for transactions.

Appends a new $skip operator to this aggregate pipeline.

Appends a new $sort operator to this aggregate pipeline.

If an object is passed, values allowed are asc, desc, ascending, descending, 1, and -1.

If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with - which will be treated as descending.

Appends a new $sortByCount operator to this aggregate pipeline. Accepts either a string field name or a pipeline object.

Note that the $sortByCount operator requires the new root to start with '$'. Mongoose will prepend '$' if the specified field name doesn't start with '$'.

Provides a Promise-like then function, which will call .exec without a callback Compatible with await.

Appends new $unionWith operator to this aggregate pipeline.

Appends new custom $unwind operator(s) to this aggregate pipeline.

Note that the $unwind operator requires the path name to start with '$'. Mongoose will prepend '$' if the specified field doesn't start '$'.

Returns an asyncIterator for use with for/await/of loops You do not need to call this function explicitly, the JavaScript runtime will call it for you.

Node.js 10.x supports async iterators natively without any flags. You can enable async iterators in Node.js 8.x using the --harmony_async_iteration flag.

Note: This function is not set if Symbol.asyncIterator is undefined. If Symbol.asyncIterator is undefined, that means your Node.js version does not support async iterators.

**Examples:**

Example 1 (javascript):
```javascript
const aggregate = Model.aggregate([
  { $project: { a: 1, b: 1 } },
  { $skip: 5 }
]);

Model.
  aggregate([{ $match: { age: { $gte: 21 }}}]).
  unwind('tags').
  exec();
```

Example 2 (unknown):
```unknown
// adding new fields based on existing fields
aggregate.addFields({
    newField: '$b.nested'
  , plusTen: { $add: ['$val', 10]}
  , sub: {
       name: '$a'
    }
})

// etc
aggregate.addFields({ salary_k: { $divide: [ "$salary", 1000 ] } });
```

Example 3 (unknown):
```unknown
await Model.aggregate([{ $match: { foo: 'bar' } }]).allowDiskUse(true);
```

Example 4 (javascript):
```javascript
aggregate.append({ $project: { field: 1 }}, { $limit: 2 });

// or pass an array
const pipeline = [{ $match: { daw: 'Logic Audio X' }} ];
aggregate.append(pipeline);
```

---

## Document

**URL:** https://mongoosejs.com/docs/api/document.html

**Contents:**
- Document
  - Document.prototype.$assertPopulated()
      - Parameters:
      - Returns:
    - Example:
  - Document.prototype.$clearModifiedPaths()
      - Returns:
    - Example:
  - Document.prototype.$clone()
      - Returns:

Throws an error if a given path is not populated

Clear the document's modified paths.

Returns a copy of this document with a deep clone of _doc and $__.

Creates a snapshot of this document's internal change tracking state. You can later reset this document's change tracking state using $restoreModifiedPathsSnapshot().

Hash containing current validation $errors.

Get all subdocs (by bfs)

Gets all populated documents associated with this document.

Don't run validation on this path or persist changes to this path.

Increments the numeric value at path by the given val. When you call save() on this document, Mongoose will send a $inc as opposed to a $set.

Checks if a path is set to its default.

Getter/setter, determines whether the document was deleted. The Model.prototype.deleteOne() method sets $isDeleted if the delete operation succeeded.

Returns true if the given path is nullish or only contains empty objects. Useful for determining whether this subdoc will get stripped out by the minimize option.

Boolean flag specifying if the document is new. If you create a document using new, this document will be considered "new". $isNew is how Mongoose determines whether save() should use insertOne() to create a new document or updateOne() to update an existing document.

On the other hand, if you load an existing document from the database using findOne() or another query operation, $isNew will be false.

Mongoose sets $isNew to false immediately after save() succeeds. That means Mongoose sets $isNew to false before post('save') hooks run. In post('save') hooks, $isNew will be false if save() succeeded.

For subdocuments, $isNew is true if either the parent has $isNew set, or if you create a new subdocument.

Empty object that you can use for storing properties on the document. This is handy for passing data to middleware without conflicting with Mongoose internals.

Marks a path as valid, removing existing validation errors.

A string containing the current operation that Mongoose is executing on this document. May be null, 'save', 'validate', or 'remove'.

Alias for parent(). If this document is a subdocument or populated document, returns the document's parent. Returns undefined otherwise.

Restore this document's change tracking state to the given snapshot. Note that $restoreModifiedPathsSnapshot() does not modify the document's properties, just resets the change tracking state.

This method is especially useful when writing custom transaction wrappers that need to restore change tracking when aborting a transaction.

Getter/setter around the session associated with this document. Used to automatically set session if you save() a doc that you got from a query with an associated session.

If this is a top-level document, setting the session propagates to all child docs.

Alias for set(), used internally to avoid conflicts

Getter/setter around whether this document will apply timestamps by default when using save() and bulkSave().

Set this property to add additional query filters when Mongoose saves this document and isNew is false.

Takes a populated field and returns it to its unpopulated state.

If the path was not provided, then all populated fields are returned to their unpopulated state.

Returns the list of paths that have been directly modified. A direct modified path is a path that you explicitly set, whether via doc.foo = 'bar', Object.assign(doc, { foo: 'bar' }), or doc.set('foo', 'bar').

A path a may be in modifiedPaths() but not in directModifiedPaths() because a child of a was directly modified.

Returns true if this document is equal to another document.

Documents are considered equal when they have matching _ids, unless neither document has an _id, in which case this function falls back to using deepEqual().

Hash containing current validation errors.

Returns the value of a path.

Returns the changes that happened to the document in the format that will be sent to MongoDB.

Modifying the object that getChanges() returns does not affect the document's change tracking state. Even if you delete user.getChanges().$set, Mongoose will still send a $set to the server.

The string version of this documents _id.

This getter exists on all documents by default. The getter can be disabled by setting the id option of its Schema to false at construction time.

Hydrates this document with the data in doc. Does not run setters or mark any paths modified.

Called internally after a document is returned from MongoDB. Normally, you do not need to call this function on your own.

This function triggers init middleware. Note that init hooks are synchronous.

Helper for console.log

Marks a path as invalid, causing validation to fail.

The errorMsg argument will become the message of the ValidationError.

The value argument (if passed) will be available through the ValidationError.value property.

Returns true if path was directly set and modified, else false.

Checks if path was explicitly selected. If no projection, always returns true.

Checks if path is in the init state, that is, it was set by Document#init() and not modified since.

Returns true if any of the given paths is modified, else false. If no arguments, returns true if any path in this document is modified.

If path is given, checks if a path or any full path containing path as part of its path chain has been modified.

Legacy alias for $isNew.

Checks if path was selected in the source query which initialized this document.

Marks the path as having pending changes to write to the db.

Very helpful when using Mixed types.

Returns the list of paths that have been modified.

Overwrite all values in this document with the values of obj, except for immutable properties. Behaves similarly to set(), except for it unsets all properties that aren't in obj.

If this document is a subdocument or populated document, returns the document's parent. Returns the original document if there is no parent.

Populates paths on an existing document.

Gets _id(s) used during population of the given path.

If the path was not populated, returns undefined.

Sends a replaceOne command with this document _id as the query selector.

Saves this document by inserting a new document into the database if document.isNew is true, or sends an updateOne operation only with the modifications to the database, it does not replace the whole document in the latter case.

If save is successful, the returned promise will fulfill with the document saved.

The document's schema.

Sets the value of a path, or many paths. Alias for .$set.

The return value of this method is used in calls to JSON.stringify(doc).

This method accepts the same options as Document#toObject. To apply the options to every document of your schema by default, set your schemas toJSON option to the same argument.

There is one difference between toJSON() and toObject() options. When you call toJSON(), the flattenMaps option defaults to true, because JSON.stringify() doesn't convert maps to objects by default. When you call toObject(), the flattenMaps option is false by default.

See schema options for more information on setting toJSON option defaults.

Converts this document into a plain-old JavaScript object (POJO).

Buffers are converted to instances of mongodb.Binary for proper storage.

Example of only applying path getters

Example of only applying virtual getters

Example of applying both path and virtual getters

To apply these options to every document of your schema by default, set your schemas toObject option to the same argument.

We may need to perform a transformation of the resulting object based on some criteria, say to remove some sensitive information or return a custom object. In this case we set the optional transform function.

Transform functions receive three arguments

With transformations we can do a lot more than remove properties. We can even return completely new customized objects:

Note: if a transform function returns undefined, the return value will be ignored.

Transformations may also be applied inline, overridding any transform set in the schema options. Any transform function specified in toObject options also propagates to any subdocuments.

If you want to skip transformations, use transform: false:

If you pass a transform in toObject() options, Mongoose will apply the transform to subdocuments in addition to the top-level document. Similarly, transform: false skips transforms for all subdocuments. Note that this behavior is different for transforms defined in the schema: if you define a transform in schema.options.toObject.transform, that transform will not apply to subdocuments.

Transforms, like all of these options, are also available for toJSON. See this guide to JSON.stringify() to learn why toJSON() and toObject() are separate functions.

See schema options for some more details.

During save, no custom options are applied to the document before being sent to the database.

Helper for console.log

Clears the modified state on the specified path.

Sends an updateOne command with this document _id as the query selector.

Executes registered validation rules for this document.

This method is called pre save and if a validation rule is violated, save is aborted and the error is thrown.

Executes registered validation rules (skipping asynchronous validators) for this document.

This method is useful if you need synchronous validation.

**Examples:**

Example 1 (javascript):
```javascript
const doc = await Model.findOne().populate('author');

doc.$assertPopulated('author'); // does not throw
doc.$assertPopulated('other path'); // throws an error

// Manually populate and assert in one call. The following does
// `doc.$set({ likes })` before asserting.
doc.$assertPopulated('likes', { likes });
```

Example 2 (javascript):
```javascript
const doc = await TestModel.findOne();

doc.name = 'test';
doc.$isModified('name'); // true

doc.$clearModifiedPaths();
doc.name; // 'test', `$clearModifiedPaths()` does **not** modify the document's data, only change tracking
```

Example 3 (javascript):
```javascript
const doc = await TestModel.findOne();
const snapshot = doc.$createModifiedPathsSnapshot();
```

Example 4 (unknown):
```unknown
doc.foo = null;
doc.$ignore('foo');
doc.save(); // changes to foo will not be persisted and validators won't be run
```

---

## Middleware

**URL:** https://mongoosejs.com/docs/middleware.html

**Contents:**
- Middleware
- Types of Middleware
- Pre
  - Use Cases
  - Errors in Pre Hooks
- Post middleware
- Asynchronous Post Hooks
- Define Middleware Before Compiling Models
- Save/Validate Hooks
- Accessing Parameters in Middleware

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

Document middleware is supported for the following document functions. In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.

Query middleware is supported for the following Query functions. Query middleware executes when you call exec() or then() on a Query object, or await on a Query object. In query middleware functions, this refers to the query.

Aggregate middleware is for MyModel.aggregate(). Aggregate middleware executes when you call exec() on an aggregate object. In aggregate middleware, this refers to the aggregation object.

Model middleware is supported for the following model functions. Don't confuse model middleware and document middleware: model middleware hooks into static functions on a Model class, document middleware hooks into methods on a Model class. In model middleware functions, this refers to the model.

Here are the possible strings that can be passed to pre()

All middleware types support pre and post hooks. How pre and post hooks work is described in more detail below.

Note: Mongoose registers updateOne middleware on Query.prototype.updateOne() by default. This means that both doc.updateOne() and Model.updateOne() trigger updateOne hooks, but this refers to a query, not a document. To register updateOne middleware as document middleware, use schema.pre('updateOne', { document: true, query: false }).

Note: Like updateOne, Mongoose registers deleteOne middleware on Query.prototype.deleteOne by default. That means that Model.deleteOne() will trigger deleteOne hooks, and this will refer to a query. However, doc.deleteOne() does not fire deleteOne query middleware for legacy reasons. To register deleteOne middleware as document middleware, use schema.pre('deleteOne', { document: true, query: false }).

Note: The create() function fires save() hooks.

Note: Query middlewares are not executed on subdocuments.

Pre middleware functions are executed one after another, when each middleware calls next.

In mongoose 5.x, instead of calling next() manually, you can use a function that returns a promise. In particular, you can use async/await.

If you use next(), the next() call does not stop the rest of the code in your middleware function from executing. Use the early return pattern to prevent the rest of your middleware function from running when you call next().

Middleware are useful for atomizing model logic. Here are some other ideas:

If any pre hook errors out, mongoose will not execute subsequent middleware or the hooked function. Mongoose will instead pass an error to the callback and/or reject the returned promise. There are several ways to report an error in middleware:

Calling next() multiple times is a no-op. If you call next() with an error err1 and then throw an error err2, mongoose will report err1.

post middleware are executed after the hooked method and all of its pre middleware have completed.

If your post hook function takes at least 2 parameters, mongoose will assume the second parameter is a next() function that you will call to trigger the next middleware in the sequence.

You can also pass an async function to post(). If you pass an async function that takes at least 2 parameters, you are still responsible for calling next(). However, you can also pass in an async function that takes less than 2 parameters, and Mongoose will wait for the promise to resolve.

Calling pre() or post() after compiling a model does not work in Mongoose in general. For example, the below pre('save') middleware will not fire.

This means that you must add all middleware and plugins before calling mongoose.model(). The below script will print out "Hello from pre save":

As a consequence, be careful about exporting Mongoose models from the same file that you define your schema. If you choose to use this pattern, you must define global plugins before calling require() on your model file.

The save() function triggers validate() hooks, because mongoose has a built-in pre('save') hook that calls validate(). This means that all pre('validate') and post('validate') hooks get called before any pre('save') hooks.

Mongoose provides 2 ways to get information about the function call that triggered the middleware. For query middleware, we recommend using this, which will be a Mongoose Query instance.

For document middleware, like pre('save'), Mongoose passes the 1st parameter to save() as the 2nd argument to your pre('save') callback. You should use the 2nd argument to get access to the save() call's options, because Mongoose documents don't store all the options you can pass to save().

Mongoose has both query and document hooks for deleteOne().

You can pass options to Schema.pre() and Schema.post() to switch whether Mongoose calls your deleteOne() hook for Document.prototype.deleteOne() or Query.prototype.deleteOne(). Note here that you need to set both document and query properties in the passed object:

Mongoose also has both query and document hooks for validate(). Unlike deleteOne and updateOne, validate middleware applies to Document.prototype.validate by default.

Pre and post save() hooks are not executed on update(), findOneAndUpdate(), etc. You can see a more detailed discussion why in this GitHub issue. Mongoose 4.0 introduced distinct hooks for these functions.

Query middleware differs from document middleware in a subtle but important way: in document middleware, this refers to the document being updated. In query middleware, mongoose doesn't necessarily have a reference to the document being updated, so this refers to the query object rather than the document being updated.

For instance, if you wanted to add an updatedAt timestamp to every updateOne() call, you would use the following pre hook.

You cannot access the document being updated in pre('updateOne') or pre('findOneAndUpdate') query middleware. If you need to access the document that will be updated, you need to execute an explicit query for the document.

However, if you define pre('updateOne') document middleware, this will be the document being updated. That's because pre('updateOne') document middleware hooks into Document#updateOne() rather than Query#updateOne().

Middleware execution normally stops the first time a piece of middleware calls next() with an error. However, there is a special kind of post middleware called "error handling middleware" that executes specifically when an error occurs. Error handling middleware is useful for reporting errors and making error messages more readable.

Error handling middleware is defined as middleware that takes one extra parameter: the 'error' that occurred as the first parameter to the function. Error handling middleware can then transform the error however you want.

Error handling middleware also works with query middleware. You can also define a post update() hook that will catch MongoDB duplicate key errors.

Error handling middleware can transform an error, but it can't remove the error. Even if you call next() with no error as shown above, the function call will still error out.

You can also define hooks for the Model.aggregate() function. In aggregation middleware functions, this refers to the Mongoose Aggregate object. For example, suppose you're implementing soft deletes on a Customer model by adding an isDeleted property. To make sure aggregate() calls only look at customers that aren't soft deleted, you can use the below middleware to add a $match stage to the beginning of each aggregation pipeline.

The Aggregate#pipeline() function lets you access the MongoDB aggregation pipeline that Mongoose will send to the MongoDB server. It is useful for adding stages to the beginning of the pipeline from middleware.

Certain Mongoose hooks are synchronous, which means they do not support functions that return promises or receive a next() callback. Currently, only init hooks are synchronous, because the init() function is synchronous. Below is an example of using pre and post init hooks.

To report an error in an init hook, you must throw a synchronous error. Unlike all other middleware, init middleware does not handle promise rejections.

Now that we've covered middleware, let's take a look at Mongoose's approach to faking JOINs with its query population helper.

**Examples:**

Example 1 (javascript):
```javascript
const childSchema = new mongoose.Schema({
  name: String
});

const mainSchema = new mongoose.Schema({
  child: [childSchema]
});

mainSchema.pre('findOneAndUpdate', function() {
  console.log('Middleware on parent document'); // Will be executed
});

childSchema.pre('findOneAndUpdate', function() {
  console.log('Middleware on subdocument'); // Will not be executed
});
```

Example 2 (javascript):
```javascript
const schema = new Schema({ /* ... */ });
schema.pre('save', function(next) {
  // do stuff
  next();
});
```

Example 3 (javascript):
```javascript
schema.pre('save', function() {
  return doStuff().
    then(() => doMoreStuff());
});

// Or, using async functions
schema.pre('save', async function() {
  await doStuff();
  await doMoreStuff();
});
```

Example 4 (javascript):
```javascript
const schema = new Schema({ /* ... */ });
schema.pre('save', function(next) {
  if (foo()) {
    console.log('calling next!');
    // `return next();` will make sure the rest of this function doesn't run
    /* return */ next();
  }
  // Unless you comment out the `return` above, 'after next' will print
  console.log('after next');
});
```

---

## DocumentArray

**URL:** https://mongoosejs.com/docs/api/documentarray.html

**Contents:**
- DocumentArray
  - MongooseDocumentArray.prototype.create()
      - Parameters:
  - MongooseDocumentArray.prototype.id()
      - Parameters:
      - Returns:
    - Example:
  - MongooseDocumentArray.prototype.inspect()
  - MongooseDocumentArray.prototype.pull()
      - Parameters:

Creates a subdocument casted to this schema.

This is the same subdocument constructor used for casting.

Searches array items for the first document with a matching _id.

Helper for console.log

Pulls items from the array atomically.

Wraps Array#push with proper change tracking.

Returns a native js Array of plain js objects

Each sub-document is converted to a plain object by calling its #toObject method.

**Examples:**

Example 1 (javascript):
```javascript
const embeddedDoc = m.array.id(some_id);
```

---

## AggregationCursor

**URL:** https://mongoosejs.com/docs/api/aggregationcursor.html

**Contents:**
- AggregationCursor
  - AggregationCursor()
      - Parameters:
      - Inherits:
  - AggregationCursor.prototype.addCursorFlag()
      - Parameters:
      - Returns:
  - AggregationCursor.prototype.close()
      - Returns:
      - See:

An AggregationCursor is a concurrency primitive for processing aggregation results one document at a time. It is analogous to QueryCursor.

An AggregationCursor fulfills the Node.js streams3 API, in addition to several other mechanisms for loading documents from MongoDB one at a time.

Creating an AggregationCursor executes the model's pre aggregate hooks, but not the model's post aggregate hooks.

Unless you're an advanced user, do not instantiate this class directly. Use Aggregate#cursor() instead.

Adds a cursor flag. Useful for setting the noCursorTimeout and tailable flags.

Marks this cursor as closed. Will stop streaming and subsequent calls to next() will error.

Execute fn for every document in the cursor. If fn returns a promise, will wait for the promise to resolve before iterating on to the next one. Returns a promise that resolves when done.

Registers a transform function which subsequently maps documents retrieved via the streams interface or .next()

Get the next document from this cursor. Will return null when there are no documents left.

Returns an asyncIterator for use with for/await/of loops You do not need to call this function explicitly, the JavaScript runtime will call it for you.

Node.js 10.x supports async iterators natively without any flags. You can enable async iterators in Node.js 8.x using the --harmony_async_iteration flag.

Note: This function is not set if Symbol.asyncIterator is undefined. If Symbol.asyncIterator is undefined, that means your Node.js version does not support async iterators.

Handles error emitted from pre middleware. In particular, checks for skipWrappedFunction, which allows skipping the actual aggregation and overwriting the function's return value. Because aggregation cursors don't return a value, we need to make sure the user doesn't accidentally set a value in skipWrappedFunction.

**Examples:**

Example 1 (javascript):
```javascript
// Map documents returned by `data` events
Thing.
  find({ name: /^hello/ }).
  cursor().
  map(function (doc) {
   doc.foo = "bar";
   return doc;
  })
  on('data', function(doc) { console.log(doc.foo); });

// Or map documents returned by `.next()`
const cursor = Thing.find({ name: /^hello/ }).
  cursor().
  map(function (doc) {
    doc.foo = "bar";
    return doc;
  });
cursor.next(function(error, doc) {
  console.log(doc.foo);
});
```

Example 2 (javascript):
```javascript
// Async iterator without explicitly calling `cursor()`. Mongoose still
// creates an AggregationCursor instance internally.
const agg = Model.aggregate([{ $match: { age: { $gte: 25 } } }]);
for await (const doc of agg) {
  console.log(doc.name);
}

// You can also use an AggregationCursor instance for async iteration
const cursor = Model.aggregate([{ $match: { age: { $gte: 25 } } }]).cursor();
for await (const doc of cursor) {
  console.log(doc.name);
}
```

---

## QueryCursor

**URL:** https://mongoosejs.com/docs/api/querycursor.html

**Contents:**
- QueryCursor
  - QueryCursor()
      - Parameters:
      - Inherits:
  - QueryCursor.prototype.addCursorFlag()
      - Parameters:
      - Returns:
  - QueryCursor.prototype.close()
      - Returns:
      - See:

A QueryCursor is a concurrency primitive for processing query results one document at a time. A QueryCursor fulfills the Node.js streams3 API, in addition to several other mechanisms for loading documents from MongoDB one at a time.

QueryCursors execute the model's pre find hooks before loading any documents from MongoDB, and the model's post find hooks after loading each document.

Unless you're an advanced user, do not instantiate this class directly. Use Query#cursor() instead.

Adds a cursor flag. Useful for setting the noCursorTimeout and tailable flags.

Marks this cursor as closed. Will stop streaming and subsequent calls to next() will error.

Execute fn for every document in the cursor. If fn returns a promise, will wait for the promise to resolve before iterating on to the next one. Returns a promise that resolves when done.

Returns the underlying cursor from the MongoDB Node driver that this cursor uses.

Registers a transform function which subsequently maps documents retrieved via the streams interface or .next()

Get the next document from this cursor. Will return null when there are no documents left.

The options passed in to the QueryCursor constructor.

Rewind this cursor to its uninitialized state. Any options that are present on the cursor will remain in effect. Iterating this cursor will cause new queries to be sent to the server, even if the resultant data has already been retrieved by this cursor.

Returns an asyncIterator for use with for/await/of loops. You do not need to call this function explicitly, the JavaScript runtime will call it for you.

Node.js 10.x supports async iterators natively without any flags. You can enable async iterators in Node.js 8.x using the --harmony_async_iteration flag.

Note: This function is not if Symbol.asyncIterator is undefined. If Symbol.asyncIterator is undefined, that means your Node.js version does not support async iterators.

**Examples:**

Example 1 (unknown):
```unknown
// Iterate over documents asynchronously
Thing.
  find({ name: /^hello/ }).
  cursor().
  eachAsync(async function (doc, i) {
    doc.foo = doc.bar + i;
    await doc.save();
  })
```

Example 2 (javascript):
```javascript
// Map documents returned by `data` events
Thing.
  find({ name: /^hello/ }).
  cursor().
  map(function (doc) {
   doc.foo = "bar";
   return doc;
  })
  on('data', function(doc) { console.log(doc.foo); });

// Or map documents returned by `.next()`
const cursor = Thing.find({ name: /^hello/ }).
  cursor().
  map(function (doc) {
    doc.foo = "bar";
    return doc;
  });
cursor.next(function(error, doc) {
  console.log(doc.foo);
});
```

Example 3 (javascript):
```javascript
// Works without using `cursor()`
for await (const doc of Model.find([{ $sort: { name: 1 } }])) {
  console.log(doc.name);
}

// Can also use `cursor()`
for await (const doc of Model.find([{ $sort: { name: 1 } }]).cursor()) {
  console.log(doc.name);
}
```

---

## ArraySubdocument

**URL:** https://mongoosejs.com/docs/api/arraysubdocument.html

**Contents:**
- ArraySubdocument
  - ArraySubdocument.prototype.$parent()
  - ArraySubdocument.prototype.parentArray()
    - Example:

Returns this sub-documents parent document.

Returns this subdocument's parent array.

**Examples:**

Example 1 (javascript):
```javascript
const Test = mongoose.model('Test', new Schema({
  docArr: [{ name: String }]
}));
const doc = new Test({ docArr: [{ name: 'test subdoc' }] });

doc.docArr[0].parentArray() === doc.docArr; // true
```

---

## Queries

**URL:** https://mongoosejs.com/docs/queries.html

**Contents:**
- Queries
- Executing
- Queries are Not Promises
- References to other documents
- Streaming
- Versus Aggregation
- Sorting
- Next Up

Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.

A query also has a .then() function, and thus can be used as a promise.

When executing a query, you specify your query as a JSON document. The JSON document's syntax is the same as the MongoDB shell.

What person is depends on the operation: For findOne() it is a potentially-null single document, find() a list of documents, count() the number of documents, update() the number of documents affected, etc. The API docs for Models provide more details.

Now let's look at what happens when no await is used:

In the above code, the query variable is of type Query. A Query enables you to build up a query using chaining syntax, rather than specifying a JSON object. The below 2 examples are equivalent.

A full list of Query helper functions can be found in the API docs.

Mongoose queries are not promises. Queries are thenables, meaning they have a .then() method for async/await as a convenience. However, unlike promises, calling a query's .then() executes the query, so calling then() multiple times will throw an error.

There are no joins in MongoDB but sometimes we still want references to documents in other collections. This is where population comes in. Read more about how to include documents from other collections in your query results in the population documentation.

You can stream query results from MongoDB. You need to call the Query#cursor() function to return an instance of QueryCursor.

Iterating through a Mongoose query using async iterators also creates a cursor.

Cursors are subject to cursor timeouts. By default, MongoDB will close your cursor after 10 minutes and subsequent next() calls will result in a MongoServerError: cursor id 123 not found error. To override this, set the noCursorTimeout option on your cursor.

However, cursors can still time out because of session idle timeouts. So even a cursor with noCursorTimeout set will still time out after 30 minutes of inactivity. You can read more about working around session idle timeouts in the MongoDB documentation.

Aggregation can do many of the same things that queries can. For example, below is how you can use aggregate() to find docs where name.last = 'Ghost':

However, just because you can use aggregate() doesn't mean you should. In general, you should use queries where possible, and only use aggregate() when you absolutely need to.

Unlike query results, Mongoose does not hydrate() aggregation results. Aggregation results are always POJOs, not Mongoose documents.

Also, unlike query filters, Mongoose also doesn't cast aggregation pipelines. That means you're responsible for ensuring the values you pass in to an aggregation pipeline have the correct type.

Sorting is how you can ensure your query results come back in the desired order.

When sorting with mutiple fields, the order of the sort keys determines what key MongoDB server sorts by first.

You can view the output of a single run of this block below. As you can see, age is sorted from 0 to 2 but when age is equal, sorts by weight.

Now that we've covered Queries, let's take a look at Validation.

**Examples:**

Example 1 (javascript):
```javascript
const Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
const person = await Person.findOne({ 'name.last': 'Ghost' }, 'name occupation');
// Prints "Space Ghost is a talk show host".
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
```

Example 2 (javascript):
```javascript
// find each person with a last name matching 'Ghost'
const query = Person.findOne({ 'name.last': 'Ghost' });

// selecting the `name` and `occupation` fields
query.select('name occupation');

// execute the query at a later time
const person = await query.exec();
// Prints "Space Ghost is a talk show host."
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
```

Example 3 (unknown):
```unknown
// With a JSON doc
await Person.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec();

// Using query builder
await Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec();
```

Example 4 (javascript):
```javascript
const q = MyModel.updateMany({}, { isDeleted: true });

await q.then(() => console.log('Update 2'));
// Throws "Query was already executed: Test.updateMany({}, { isDeleted: true })"
await q.then(() => console.log('Update 3'));
```

---

## Subdocuments

**URL:** https://mongoosejs.com/docs/subdocs.html

**Contents:**
- Subdocuments
- What is a Subdocument?
- Subdocuments versus Nested Paths
- Subdocument Defaults
- Finding a Subdocument
- Adding Subdocs to Arrays
- Removing Subdocs
- Parents of Subdocs
  - Alternate declaration syntax for arrays
  - Next Up

Subdocuments are documents embedded in other documents. In Mongoose, this means you can nest schemas in other schemas. Mongoose has two distinct notions of subdocuments: arrays of subdocuments and single nested subdocuments.

Note that populated documents are not subdocuments in Mongoose. Subdocument data is embedded in the top-level document. Referenced documents are separate top-level documents.

Subdocuments are similar to normal documents. Nested schemas can have middleware, custom validation logic, virtuals, and any other feature top-level schemas can use. The major difference is that subdocuments are not saved individually, they are saved whenever their top-level parent document is saved.

Subdocuments have save and validate middleware just like top-level documents. Calling save() on the parent document triggers the save() middleware for all its subdocuments, and the same for validate() middleware.

Subdocuments' pre('save') and pre('validate') middleware execute before the top-level document's pre('save') but after the top-level document's pre('validate') middleware. This is because validating before save() is actually a piece of built-in middleware.

In Mongoose, nested paths are subtly different from subdocuments. For example, below are two schemas: one with child as a subdocument, and one with child as a nested path.

These two schemas look similar, and the documents in MongoDB will have the same structure with both schemas. But there are a few Mongoose-specific differences:

First, instances of Nested never have child === undefined. You can always set subproperties of child, even if you don't set the child property. But instances of Subdoc can have child === undefined.

Subdocument paths are undefined by default, and Mongoose does not apply subdocument defaults unless you set the subdocument path to a non-nullish value.

However, if you set doc.child to any object, Mongoose will apply the age default if necessary.

Mongoose applies defaults recursively, which means there's a nice workaround if you want to make sure Mongoose applies subdocument defaults: make the subdocument path default to an empty object.

Each subdocument has an _id by default. Mongoose document arrays have a special id method for searching a document array to find a document with a given _id.

MongooseArray methods such as push, unshift, addToSet, and others cast arguments to their proper types transparently:

You can also create a subdocument without adding it to an array by using the create() method of Document Arrays.

Each subdocument has its own deleteOne method. For an array subdocument, this is equivalent to calling .pull() on the subdocument. For a single nested subdocument, deleteOne() is equivalent to setting the subdocument to null.

Sometimes, you need to get the parent of a subdoc. You can access the parent using the parent() function.

If you have a deeply nested subdoc, you can access the top-level document using the ownerDocument() function.

If you create a schema with an array of objects, Mongoose will automatically convert the object to a schema for you:

Now that we've covered Subdocuments, let's take a look at querying.

**Examples:**

Example 1 (javascript):
```javascript
const childSchema = new Schema({ name: 'string' });

const parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema],
  // Single nested subdocuments
  child: childSchema
});
```

Example 2 (javascript):
```javascript
const childSchema = new Schema({ name: 'string' });
const Child = mongoose.model('Child', childSchema);

const parentSchema = new Schema({
  child: {
    type: mongoose.ObjectId,
    ref: 'Child'
  }
});
const Parent = mongoose.model('Parent', parentSchema);

const doc = await Parent.findOne().populate('child');
// NOT a subdocument. `doc.child` is a separate top-level document.
doc.child;
```

Example 3 (javascript):
```javascript
const Parent = mongoose.model('Parent', parentSchema);
const parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] });
parent.children[0].name = 'Matthew';

// `parent.children[0].save()` is a no-op, it triggers middleware but
// does **not** actually save the subdocument. You need to save the parent
// doc.
await parent.save();
```

Example 4 (javascript):
```javascript
childSchema.pre('save', function(next) {
  if ('invalid' == this.name) {
    return next(new Error('#sadpanda'));
  }
  next();
});

const parent = new Parent({ children: [{ name: 'invalid' }] });
try {
  await parent.save();
} catch (err) {
  err.message; // '#sadpanda'
}
```

---

## Models

**URL:** https://mongoosejs.com/docs/models.html

**Contents:**
- Models
- Compiling your first model
- Constructing Documents
- Querying
- Deleting
- Updating
- Change Streams
- Views
- Yet more
- Next Up

Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.

When you call mongoose.model() on a schema, Mongoose compiles a model for you.

The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

Note: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!

An instance of a model is called a document. Creating them and saving to the database is easy.

Note that no tanks will be created/removed until the connection your model uses is open. Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.

If you create a custom connection, use that connection's model() function instead.

Finding documents is easy with Mongoose, which supports the rich query syntax of MongoDB. Documents can be retrieved using a model's find, findById, findOne, or where static functions.

See the chapter on queries for more details on how to use the Query api.

Models have static deleteOne() and deleteMany() functions for removing all documents matching the given filter.

Each model has its own update method for modifying documents in the database without returning them to your application. See the API docs for more detail.

If you want to update a single document in the db and return it to your application, use findOneAndUpdate instead.

Change streams provide a way for you to listen to all inserts and updates going through your MongoDB database. Note that change streams do not work unless you're connected to a MongoDB replica set.

The output from the above async function will look like what you see below.

You can read more about change streams in mongoose in this blog post.

MongoDB Views are essentially read-only collections that contain data computed from other collections using aggregations. In Mongoose, you should define a separate Model for each of your Views. You can also create a View using createCollection().

The following example shows how you can create a new RedactedUser View on a User Model that hides potentially sensitive information, like name and email.

Note that Mongoose does not currently enforce that Views are read-only. If you attempt to save() a document from a View, you will get an error from the MongoDB server.

The API docs cover many additional methods available like count, mapReduce, aggregate, and more.

Now that we've covered Models, let's take a look at Documents.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new mongoose.Schema({ name: String, size: String });
const Tank = mongoose.model('Tank', schema);
```

Example 2 (javascript):
```javascript
const Tank = mongoose.model('Tank', yourSchema);

const small = new Tank({ size: 'small' });
await small.save();

// or

await Tank.create({ size: 'small' });

// or, for inserting large batches of documents
await Tank.insertMany([{ size: 'small' }]);
```

Example 3 (unknown):
```unknown
await mongoose.connect('mongodb://127.0.0.1/gettingstarted');
```

Example 4 (javascript):
```javascript
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
const Tank = connection.model('Tank', yourSchema);
```

---
