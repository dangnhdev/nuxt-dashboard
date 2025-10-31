# Mongoose - Connections

**Pages:** 5

---

## FAQ

**URL:** https://mongoosejs.com/docs/faq.html

**Contents:**
- FAQ

Q. I get an error connect ECONNREFUSED ::1:27017 when connecting to localhost. Why?

The easy solution is to replace localhost with 127.0.0.1.

The reason why this error happens is that Node.js 18 and up prefer IPv6 addresses over IPv4 by default. And, most Linux and OSX machines have a ::1 localhost entry in /etc/hosts by default. That means that Node.js 18 will assume that localhost means the IPv6 ::1 address. And MongoDB doesn't accept IPv6 connections by default.

You can also fix this error by enabling IPv6 support on your MongoDB server.

Q. Operation ... timed out after 10000 ms. What gives?

A. At its core, this issue stems from not connecting to MongoDB. You can use Mongoose before connecting to MongoDB, but you must connect at some point. For example:

Q. I am able to connect locally but when I try to connect to MongoDB Atlas I get this error. What gives?

You must ensure that you have whitelisted your ip on mongodb to allow Mongoose to connect. You can allow access from all ips with 0.0.0.0/0.

Q. x.$__y is not a function. What gives?

A. This issue is a result of having multiple versions of mongoose installed that are incompatible with each other. Run npm list | grep "mongoose" to find and remedy the problem. If you're storing schemas or models in a separate npm package, please list Mongoose in peerDependencies rather than dependencies in your separate package.

Q. I declared a schema property as unique but I can still save duplicates. What gives?

A. Mongoose doesn't handle unique on its own: { name: { type: String, unique: true } } is just a shorthand for creating a MongoDB unique index on name. For example, if MongoDB doesn't already have a unique index on name, the below code will not error despite the fact that unique is true.

However, if you wait for the index to build using the Model.on('index') event, attempts to save duplicates will correctly error.

MongoDB persists indexes, so you only need to rebuild indexes if you're starting with a fresh database or you ran db.dropDatabase(). In a production environment, you should create your indexes using the MongoDB shell rather than relying on mongoose to do it for you. The unique option for schemas is convenient for development and documentation, but mongoose is not an index management solution.

Q. When I have a nested property in a schema, mongoose adds empty objects by default. Why?

A. This is a performance optimization. These empty objects are not saved to the database, nor are they in the result toObject(), nor do they show up in JSON.stringify() output unless you turn off the minimize option.

The reason for this behavior is that Mongoose's change detection and getters/setters are based on Object.defineProperty(). In order to support change detection on nested properties without incurring the overhead of running Object.defineProperty() every time a document is created, mongoose defines properties on the Model prototype when the model is compiled. Because mongoose needs to define getters and setters for nested.prop, nested must always be defined as an object on a mongoose document, even if nested is undefined on the underlying POJO.

Q. I'm using an arrow function for a virtual, middleware, getter/setter, or method and the value of this is wrong.

A. Arrow functions handle the this keyword differently than conventional functions. Mongoose getters/setters depend on this to give you access to the document that you're writing to, but this functionality does not work with arrow functions. Do not use arrow functions for mongoose getters/setters unless do not intend to access the document in the getter/setter.

Q. I have an embedded property named type like this:

But mongoose gives me a CastError telling me that it can't cast an object to a string when I try to save a Holding with an asset object. Why is this?

A. The type property is special in mongoose, so when you say type: String, mongoose interprets it as a type declaration. In the above schema, mongoose thinks asset is a string, not an object. Do this instead:

Q. I'm populating a nested property under an array like the below code:

.populate({ path: 'arr.child', options: { sort: 'name' } }) won't sort by arr.child.name?

A. See this GitHub issue. It's a known issue but one that's exceptionally difficult to fix.

Q. All function calls on my models hang, what am I doing wrong?

A. By default, mongoose will buffer your function calls until it can connect to MongoDB. Read the buffering section of the connection docs for more information.

Q. How can I enable debugging?

A. Set the debug option:

For more debugging options (streams, callbacks), see the 'debug' option under .set().

Q. My save() callback never executes. What am I doing wrong?

A. All collection actions (insert, remove, queries, etc.) are queued until Mongoose successfully connects to MongoDB. It is likely you haven't called Mongoose's connect() or createConnection() function yet.

In Mongoose 5.11, there is a bufferTimeoutMS option (set to 10000 by default) that configures how long Mongoose will allow an operation to stay buffered before throwing an error.

If you want to opt out of Mongoose's buffering mechanism across your entire application, set the global bufferCommands option to false:

Instead of opting out of Mongoose's buffering mechanism, you may want to instead reduce bufferTimeoutMS to make Mongoose only buffer for a short time.

Q. Should I create/destroy a new connection for each database operation?

A. No. Open your connection when your application starts up and leave it open until the application shuts down.

Q. Why do I get "OverwriteModelError: Cannot overwrite .. model once compiled" when I use nodemon / a testing framework?

A. mongoose.model('ModelName', schema) requires 'ModelName' to be unique, so you can access the model by using mongoose.model('ModelName'). If you put mongoose.model('ModelName', schema); in a mocha beforeEach() hook, this code will attempt to create a new model named 'ModelName' before every test, and so you will get an error. Make sure you only create a new model with a given name once. If you need to create multiple models with the same name, create a new connection and bind the model to the connection.

Q. How can I change mongoose's default behavior of initializing an array path to an empty array so that I can require real data on document creation?

A. You can set the default of the array to undefined.

Q. How can I initialize an array path to null?

A. You can set the default of the array to null.

Q. Why does my aggregate $match fail to return the document that my find query returns when working with dates?

A. Mongoose does not cast aggregation pipeline stages because with $project, $group, etc. the type of a property may change during the aggregation. If you want to query by date using the aggregation framework, you're responsible for ensuring that you're passing in a valid date.

Q. Why don't in-place modifications to date objects (e.g. date.setMonth(1);) get saved?

A. Mongoose currently doesn't watch for in-place updates to date objects. If you have need for this feature, feel free to discuss on this GitHub issue. There are several workarounds:

Q. Why does calling save() multiple times on the same document in parallel only let the first save call succeed and return ParallelSaveErrors for the rest?

A. Due to the asynchronous nature of validation and middleware in general, calling save() multiple times in parallel on the same doc could result in conflicts. For example, validating, and then subsequently invalidating the same path.

Q. Why is any 12 character string successfully cast to an ObjectId?

A. Technically, any 12 character string is a valid ObjectId. Consider using a regex like /^[a-f0-9]{24}$/ to test whether a string is exactly 24 hex characters.

Q. Why do keys in Mongoose Maps have to be strings?

A. Because the Map eventually gets stored in MongoDB where the keys must be strings.

Q. I am using Model.find(...).populate(...) with the limit option, but getting fewer results than the limit. What gives?

A. In order to avoid executing a separate query for each document returned from the find query, Mongoose instead queries using (numDocuments * limit) as the limit. If you need the correct limit, you should use the perDocumentLimit option (new in Mongoose 5.9.0). Just keep in mind that populate() will execute a separate query for each document.

Q. My query/update seems to execute twice. Why is this happening?

A. The most common cause of duplicate queries is mixing callbacks and promises with queries. That's because passing a callback to a query function, like find() or updateOne(), immediately executes the query, and calling then() executes the query again.

Mixing promises and callbacks can lead to duplicate entries in arrays. For example, the below code inserts 2 entries into the tags array, *not just 1.

If you'd like to contribute to this page, please visit it on github and use the Edit button to send a pull request.

**Examples:**

Example 1 (javascript):
```javascript
await mongoose.createConnection(mongodbUri).asPromise();

const Test = mongoose.model('Test', schema);

await Test.findOne(); // Will throw "Operation timed out" error because didn't call `mongoose.connect()`
```

Example 2 (javascript):
```javascript
await mongoose.connect(mongodbUri);

const db = mongoose.createConnection();

const Test = db.model('Test', schema);

await Test.findOne(); // Will throw "Operation timed out" error because `db` isn't connected to MongoDB
```

Example 3 (javascript):
```javascript
const schema = new mongoose.Schema({
  name: { type: String, unique: true }
});
const Model = db.model('Test', schema);

// No error, unless index was already built
await Model.create([{ name: 'Val' }, { name: 'Val' }]);
```

Example 4 (javascript):
```javascript
const schema = new mongoose.Schema({
  name: { type: String, unique: true }
});
const Model = db.model('Test', schema);

// Wait for model's indexes to finish. The `init()`
// function is idempotent, so don't worry about triggering an index rebuild.
await Model.init();

// Throws a duplicate key error
await Model.create([{ name: 'Val' }, { name: 'Val' }]);
```

---

## Transactions in Mongoose

**URL:** https://mongoosejs.com/docs/transactions.html

**Contents:**
- Transactions in Mongoose
- Getting Started with Transactions
- Note About Parallelism in Transactions
- With Mongoose Documents and save()
- With the Aggregation Framework
- Using AsyncLocalStorage
- Advanced Usage

Transactions let you execute multiple operations in isolation and potentially undo all the operations if one of them fails. This guide will get you started using transactions with Mongoose.

If you haven't already, import mongoose:

To create a transaction, you first need to create a session using Mongoose#startSession or Connection#startSession().

In practice, you should use either the session.withTransaction() helper or Mongoose's Connection#transaction() function to run a transaction. The session.withTransaction() helper handles:

For more information on the ClientSession#withTransaction() function, please see the MongoDB Node.js driver docs.

Mongoose's Connection#transaction() function is a wrapper around withTransaction() that integrates Mongoose change tracking with transactions. For example, suppose you save() a document in a transaction that later fails. The changes in that document are not persisted to MongoDB. The Connection#transaction() function informs Mongoose change tracking that the save() was rolled back, and marks all fields that were changed in the transaction as modified.

Running operations in parallel is not supported during a transaction. The use of Promise.all, Promise.allSettled, Promise.race, etc. to parallelize operations inside a transaction is undefined behaviour and should be avoided.

MongoDB also does not support multiple transactions on the same session in parallel. This also means MongoDB does not support nested transactions on the same session. The following code will throw a Transaction already in progress error.

If you get a Mongoose document from findOne() or find() using a session, the document will keep a reference to the session and use that session for save().

To get/set the session associated with a given document, use doc.$session().

The Model.aggregate() function also supports transactions. Mongoose aggregations have a session() helper that sets the session option. Below is an example of executing an aggregation within a transaction.

One major pain point with transactions in Mongoose is that you need to remember to set the session option on every operation. If you don't, your operation will execute outside of the transaction. Mongoose 8.4 is able to set the session operation on all operations within a Connection.prototype.transaction() executor function using Node's AsyncLocalStorage API. Set the transactionAsyncLocalStorage option using mongoose.set('transactionAsyncLocalStorage', true) to enable this feature.

With transactionAsyncLocalStorage, you no longer need to pass sessions to every operation. Mongoose will add the session by default under the hood.

transactionAsyncLocalStorage creates a new session each time you call connection.transaction(). This means each transaction will have its own session and be independent of other transactions. This also means that nested transactions are also independent of each other.

However, if the nested transaction fails, the top-level transaction will still be rolled back because await mongoose.connection.transaction() throws.

Advanced users who want more fine-grained control over when they commit or abort transactions can use session.startTransaction() to start a transaction:

You can also use session.abortTransaction() to abort a transaction:

**Examples:**

Example 1 (python):
```python
import mongoose from 'mongoose';
```

Example 2 (javascript):
```javascript
// Using Mongoose's default connection
const session = await mongoose.startSession();

// Using custom connection
const db = await mongoose.createConnection(mongodbUri).asPromise();
const session = await db.startSession();
```

Example 3 (javascript):
```javascript
let session = null;
return Customer.createCollection().
  then(() => Customer.startSession()).
  // The `withTransaction()` function's first parameter is a function
  // that returns a promise.
  then(_session => {
    session = _session;
    return session.withTransaction(() => {
      return Customer.create([{ name: 'Test' }], { session: session });
    });
  }).
  then(() => Customer.countDocuments()).
  then(count => assert.strictEqual(count, 1)).
  then(() => session.endSession());
```

Example 4 (javascript):
```javascript
const doc = new Person({ name: 'Will Riker' });

await db.transaction(async function setRank(session) {
  doc.name = 'Captain';
  await doc.save({ session });
  doc.isNew; // false

  // Throw an error to abort the transaction
  throw new Error('Oops!');
}, { readPreference: 'primary' }).catch(() => {});

// true, `transaction()` reset the document's state because the
// transaction was aborted.
doc.isNew;
```

---

## Mongoose

**URL:** https://mongoosejs.com/docs/api/mongoose.html

**Contents:**
- Mongoose
  - Mongoose()
      - Parameters:
    - Example:
  - Mongoose.prototype.Aggregate()
  - Mongoose.prototype.CastError()
      - Parameters:
  - Mongoose.prototype.Collection()
  - Mongoose.prototype.Collection()
  - Mongoose.prototype.Connection()

Mongoose constructor.

The exports object of the mongoose module is an instance of this class. Most apps will only use this one instance.

The Mongoose Aggregate constructor

The Mongoose CastError constructor

The Base Mongoose Collection class. mongoose.Collection extends from this class.

The Mongoose Collection constructor

The Mongoose Connection constructor

The Base Mongoose Connection class. mongoose.Connection extends from this class.

Expose connection states for user-land

The Mongoose Date SchemaType.

The Mongoose Decimal128 SchemaType. Used for declaring paths in your schema that should be 128-bit decimal floating points. Do not use this to create a new Decimal128 instance, use mongoose.Types.Decimal128 instead.

The Mongoose Document constructor.

The Mongoose DocumentProvider constructor. Mongoose users should not have to use this directly

The MongooseError constructor.

The Mongoose Mixed SchemaType. Used for declaring paths in your schema that Mongoose's change tracking, casting, and validation should ignore.

The Mongoose Model constructor.

The Mongoose constructor

The exports of the mongoose module is an instance of this class.

The Mongoose Number SchemaType. Used for declaring paths in your schema that Mongoose should cast to numbers.

The Mongoose ObjectId SchemaType. Used for declaring paths in your schema that should be MongoDB ObjectIds. Do not use this to create a new ObjectId instance, use mongoose.Types.ObjectId instead.

The Mongoose Query constructor.

Expose connection states for user-land

The Mongoose Schema constructor

The Mongoose SchemaType constructor

The constructor used for schematype options

The various Mongoose SchemaTypes.

Alias of mongoose.Schema.Types for backwards compatibility.

The various Mongoose Types.

Using this exposed access to the ObjectId type, we can construct ids on demand.

The Mongoose VirtualType constructor

Opens the default mongoose connection.

The Mongoose module's default connection. Equivalent to mongoose.connections[0], see connections.

This is the connection used by default for every model created using mongoose.model.

To create a new connection, use createConnection().

An array containing all connections associated with this Mongoose instance. By default, there is 1 connection. Calling createConnection() adds a connection to this array.

Creates a Connection instance.

Each connection instance maps to a single database. This method is helpful when managing multiple db connections.

Options passed take precedence over options included in connection strings.

Removes the model named name from the default connection, if it exists. You can use this function to clean up any models you created in your tests to prevent OverwriteModelErrors.

Equivalent to mongoose.connection.deleteModel(name).

Runs .close() on all connections in parallel.

Object with get() and set() containing the underlying driver this Mongoose instance uses to communicate with the database. A driver is a Mongoose-specific interface that defines functions like find().

Gets mongoose options

Returns true if the given value is a Mongoose ObjectId (using instanceof) or if the given value is a 24 character hex string, which is the most commonly used string representation of an ObjectId.

This function is similar to isValidObjectId(), but considerably more strict, because isValidObjectId() will return true for any value that Mongoose can convert to an ObjectId. That includes Mongoose documents, any string of length 12, and any number. isObjectIdOrHexString() returns true only for ObjectId instances or 24 character hex strings, and will return false for numbers, documents, and strings of length 12.

Returns true if Mongoose can cast the given value to an ObjectId, or false otherwise.

Defines a model or retrieves it.

Models defined on the mongoose instance are available to all connection created by the same mongoose instance.

If you call mongoose.model() with twice the same name but a different schema, you will get an OverwriteModelError. If you call mongoose.model() with the same name and same schema, you'll get the same schema back.

When no collection argument is passed, Mongoose uses the model name. If you don't like this behavior, either pass a collection name, use mongoose.pluralize(), or set your schemas collection name option.

Returns an array of model names created on this instance of Mongoose.

Does not include names of models created using connection.model().

The mquery query builder Mongoose uses.

Mongoose uses this function to get the current time when setting timestamps. You may stub out this function using a tool like Sinon for testing.

Takes in an object and deletes any keys from the object whose values are strictly equal to undefined. This function is useful for query filters because Mongoose treats TestModel.find({ name: undefined }) as TestModel.find({ name: null }).

Use this function in post() middleware to replace the result

Declares a global plugin executed on all Schemas.

Equivalent to calling .plugin(fn) on each Schema you create.

Getter/setter around function for pluralizing collection names.

Sanitizes query filters against query selector injection attacks by wrapping any nested objects that have a property whose name starts with $ in a $eq.

Sets mongoose options

key can be used a object to set multiple options at once. If a error gets thrown for one option, other options will still be evaluated.

Currently supported options are:

Overwrites the current driver used by this Mongoose instance. A driver is a Mongoose-specific interface that defines functions like find().

Use this function in pre() middleware to skip calling the wrapped function.

Requires MongoDB >= 3.6.0. Starts a MongoDB session for benefits like causal consistency, retryable writes, and transactions.

Calling mongoose.startSession() is equivalent to calling mongoose.connection.startSession(). Sessions are scoped to a connection, so calling mongoose.startSession() starts a session on the default mongoose connection.

Syncs all the indexes for the models registered with this connection.

Tells sanitizeFilter() to skip the given object when filtering out potential query selector injection attacks. Use this method when you have a known query selector that you want to use.

**Examples:**

Example 1 (javascript):
```javascript
const mongoose = require('mongoose');
mongoose instanceof mongoose.Mongoose; // true

// Create a new Mongoose instance with its own `connect()`, `set()`, `model()`, etc.
const m = new mongoose.Mongoose();
```

Example 2 (javascript):
```javascript
const schema = new Schema({ test: Date });
schema.path('test') instanceof mongoose.Date; // true
```

Example 3 (javascript):
```javascript
const vehicleSchema = new Schema({ fuelLevel: mongoose.Decimal128 });
```

Example 4 (javascript):
```javascript
const schema = new Schema({ arbitrary: mongoose.Mixed });
```

---

## Connection

**URL:** https://mongoosejs.com/docs/api/connection.html

**Contents:**
- Connection
  - Connection()
      - Parameters:
      - Inherits:
  - Connection.prototype.aggregate()
      - Parameters:
      - Returns:
  - Connection.prototype.asPromise()
      - Returns:
    - Example:

Connection constructor

For practical reasons, a Connection equals a Db.

Runs a db-level aggregate() on this connection's underlying db

Returns a promise that resolves when this connection successfully connects to MongoDB, or rejects if this connection failed to connect.

Requires MongoDB Server 8.0 or greater. Executes bulk write operations across multiple models in a single operation. You must specify the model for each operation: Mongoose will use model for casting and validation, as well as determining which collection to apply the operation to.

The MongoClient instance this connection uses to talk to MongoDB. Mongoose automatically sets this property when the connection is opened.

Closes the connection

Retrieves a raw collection instance, creating it if not cached. This method returns a thin wrapper around a [MongoDB Node.js driver collection](MongoDB Node.js driver collection). Using a Collection bypasses Mongoose middleware, validation, and casting, letting you use MongoDB Node.js driver functionality directly.

A hash of the collections associated with this connection

A hash of the global options that are associated with this connection

Helper for createCollection(). Will explicitly create the given collection with specified options. Used to create capped collections and views from mongoose.

Options are passed down without modification to the MongoDB driver's createCollection() function

Calls createCollection() on a models in a series.

The mongodb.Db instance, set when the connection is opened

Removes the model named name from this connection, if it exists. You can use this function to clean up any models you created in your tests to prevent OverwriteModelErrors.

Destroy the connection. Similar to .close, but also removes the connection from Mongoose's connections list and prevents the connection from ever being re-opened.

Helper for dropCollection(). Will delete the given collection, including all documents and indexes.

Helper for dropDatabase(). Deletes the given database, including all collections, documents, and indexes.

Gets the value of the option key. Equivalent to conn.options[key]

Returns the MongoDB driver MongoClient instance that this connection uses to talk to MongoDB.

The host name portion of the URI. If multiple hosts, such as a replica set, this will contain the first host name in the URI

A number identifier for this connection. Used for debugging when you have multiple connections.

Helper for MongoDB Node driver's listCollections(). Returns an array of collection objects.

Helper for MongoDB Node driver's listDatabases(). Returns an object with a databases property that contains an array of database objects.

Defines or retrieves a model.

When no collection argument is passed, Mongoose produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. If you don't like this behavior, either pass a collection name or set your schemas collection name option.

Returns an array of model names created on this connection.

A POJO containing a map from model names to models. Contains all models that have been added to this connection using Connection#model().

The name of the database this connection points to.

Listen to events in the Connection

Listen to a event once in the Connection

Opens the connection with a URI using MongoClient.connect().

The password specified in the URI

Declares a plugin executed on all schemas you pass to conn.model()

Equivalent to calling .plugin(fn) on each schema you create.

The plugins that will be applied to all models created on this connection.

The port portion of the URI. If multiple hosts, such as a replica set, this will contain the port from the first host name in the URI.

Connection ready state

Each state change emits its associated event name.

Removes the database connection with the given name created with with useDb().

Throws an error if the database connection was not found.

Sets the value of the option key. Equivalent to conn.options[key] = val

Supported options include:

Set the MongoDB driver MongoClient instance that this connection uses to talk to MongoDB. This is useful if you already have a MongoClient instance, and want to reuse it.

Requires MongoDB >= 3.6.0. Starts a MongoDB session for benefits like causal consistency, retryable writes, and transactions.

Syncs all the indexes for the models registered with this connection.

Requires MongoDB >= 3.6.0. Executes the wrapped async function in a transaction. Mongoose will commit the transaction if the async function executes successfully and attempt to retry if there was a retriable error.

Calls the MongoDB driver's session.withTransaction(), but also handles resetting Mongoose document state as shown below.

Switches to a different database using the same connection pool.

Returns a new connection object, with the new db.

The username specified in the URI

Watches the entire underlying database for changes. Similar to Model.watch().

This function does not trigger any middleware. In particular, it does not trigger aggregate middleware.

The ChangeStream object is an event emitter that emits the following events:

A convenience wrapper for connection.client.withSession().

**Examples:**

Example 1 (javascript):
```javascript
const conn = await mongoose.createConnection('mongodb://127.0.0.1:27017/test').
  asPromise();
conn.readyState; // 1, means Mongoose is connected
```

Example 2 (javascript):
```javascript
const Test = mongoose.model('Test', new Schema({ name: String }));

await db.bulkWrite([
  { model: Test, name: 'insertOne', document: { name: 'test1' } }, // Can specify model as a Model class...
  { model: 'Test', name: 'insertOne', document: { name: 'test2' } } // or as a model name
], { ordered: false });
```

Example 3 (unknown):
```unknown
conn.model('User', new Schema({ name: String }));
console.log(conn.model('User')); // Model object
conn.deleteModel('User');
console.log(conn.model('User')); // undefined

// Usually useful in a Mocha `afterEach()` hook
afterEach(function() {
  conn.deleteModel(/.+/); // Delete every model
});
```

Example 4 (javascript):
```javascript
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/mydb');
// Deletes the entire 'mydb' database
await conn.dropDatabase();
```

---

## Connections

**URL:** https://mongoosejs.com/docs/connections.html

**Contents:**
- Connections
- Operation Buffering
- Error Handling
- Options
- serverSelectionTimeoutMS
- Callback
- Connection String Options
- Connection Events
- A note about keepAlive
- Replica Set Connections

You can connect to MongoDB with the mongoose.connect() method.

This is the minimum needed to connect the myapp database running locally on the default port (27017). For local MongoDB databases, we recommend using 127.0.0.1 instead of localhost. That is because Node.js 18 and up prefer IPv6 addresses, which means, on many machines, Node.js will resolve localhost to the IPv6 address ::1 and Mongoose will be unable to connect, unless the mongodb instance is running with ipv6 enabled.

You can also specify several more parameters in the uri:

See the mongodb connection string spec for more details.

Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

That's because mongoose buffers model function calls internally. This buffering is convenient, but also a common source of confusion. Mongoose will not throw any errors by default if you use a model without connecting.

To disable buffering, turn off the bufferCommands option on your schema. If you have bufferCommands on and your connection is hanging, try turning bufferCommands off to see if you haven't opened a connection properly. You can also disable bufferCommands globally:

Note that buffering is also responsible for waiting until Mongoose creates collections if you use the autoCreate option. If you disable buffering, you should also disable the autoCreate option and use createCollection() to create capped collections or collections with collations.

There are two classes of errors that can occur with a Mongoose connection.

To handle initial connection errors, you should use .catch() or try/catch with async/await.

To handle errors after initial connection was established, you should listen for error events on the connection. However, you still need to handle initial connection errors as shown above.

Note that Mongoose does not necessarily emit an 'error' event if it loses connectivity to MongoDB. You should listen to the disconnected event to report when Mongoose is disconnected from MongoDB.

The connect method also accepts an options object which will be passed on to the underlying MongoDB driver.

A full list of options can be found on the MongoDB Node.js driver docs for MongoClientOptions. Mongoose passes options to the driver without modification, modulo a few exceptions that are explained below.

Below are some of the options that are important for tuning Mongoose.

The serverSelectionTimeoutMS option is extremely important: it controls how long the MongoDB Node.js driver will attempt to retry any operation before erroring out. This includes initial connection, like await mongoose.connect(), as well as any operations that make requests to MongoDB, like save() or find().

By default, serverSelectionTimeoutMS is 30000 (30 seconds). This means that, for example, if you call mongoose.connect() when your standalone MongoDB server is down, your mongoose.connect() call will only throw an error after 30 seconds.

Similarly, if your standalone MongoDB server goes down after initial connection, any find() or save() calls will error out after 30 seconds, unless your MongoDB server is restarted.

While 30 seconds seems like a long time, serverSelectionTimeoutMS means you're unlikely to see any interruptions during a replica set failover. If you lose your replica set primary, the MongoDB Node driver will ensure that any operations you send during the replica set election will eventually execute, assuming that the replica set election takes less than serverSelectionTimeoutMS.

To get faster feedback on failed connections, you can reduce serverSelectionTimeoutMS to 5000 as follows. We don't recommend reducing serverSelectionTimeoutMS unless you are running a standalone MongoDB server rather than a replica set, or unless you are using a serverless runtime like AWS Lambda.

There is no way to tune serverSelectionTimeoutMS independently for mongoose.connect() vs for queries. If you want to reduce serverSelectionTimeoutMS for queries and other operations, but still retry mongoose.connect() for longer, you are responsible for retrying the connect() calls yourself using a for loop or a tool like p-retry.

The connect() function also accepts a callback parameter and returns a promise.

You can also specify driver options in your connection string as parameters in the query string portion of the URI. This only applies to options passed to the MongoDB driver. You can't set Mongoose-specific options like bufferCommands in the query string.

The disadvantage of putting options in the query string is that query string options are harder to read. The advantage is that you only need a single configuration option, the URI, rather than separate options for socketTimeoutMS, etc. Best practice is to put options that likely differ between development and production, like replicaSet or ssl, in the connection string, and options that should remain constant, like socketTimeoutMS or maxPoolSize, in the options object.

The MongoDB docs have a full list of supported connection string options. Below are some options that are often useful to set in the connection string because they are closely associated with the hostname and authentication information.

Connections inherit from Node.js' EventEmitter class, and emit events when something happens to the connection, like losing connectivity to the MongoDB server. Below is a list of events that a connection may emit.

When you're connecting to a single MongoDB server (a "standalone"), Mongoose will emit disconnected if it gets disconnected from the standalone server, and connected if it successfully connects to the standalone. In a replica set, Mongoose will emit disconnected if it loses connectivity to the replica set primary, and connected if it manages to reconnect to the replica set primary.

If you are using mongoose.connect(), you can use the following to listen to the above events:

With mongoose.createConnection(), use the following instead:

Before Mongoose 5.2.0, you needed to enable the keepAlive option to initiate TCP keepalive to prevent "connection closed" errors. However, keepAlive has been true by default since Mongoose 5.2.0, and the keepAlive is deprecated as of Mongoose 7.2.0. Please remove keepAlive and keepAliveInitialDelay options from your Mongoose connections.

To connect to a replica set you pass a comma delimited list of hosts to connect to rather than a single host.

To connect to a single node replica set, specify the replicaSet option.

The underlying MongoDB driver uses a process known as server selection to connect to MongoDB and send operations to MongoDB. If the MongoDB driver can't find a server to send an operation to after serverSelectionTimeoutMS, you'll get the below error:

You can configure the timeout using the serverSelectionTimeoutMS option to mongoose.connect():

A MongoTimeoutError has a reason property that explains why server selection timed out. For example, if you're connecting to a standalone server with an incorrect password, reason will contain an "Authentication failed" error.

MongoDB replica sets rely on being able to reliably figure out the domain name for each member.On Linux and OSX, the MongoDB server uses the output of the hostname command to figure out the domain name to report to the replica set. This can cause confusing errors if you're connecting to a remote MongoDB replica set running on a machine that reports its hostname as localhost:

If you're experiencing a similar error, connect to the replica set using the mongo shell and run the rs.conf() command to check the host names of each replica set member. Follow this page's instructions to change a replica set member's host name.

You can also check the reason.servers property of MongooseServerSelectionError to see what the MongoDB Node driver thinks the state of your replica set is. The reason.servers property contains a map of server descriptions.

You can also connect to multiple mongos instances for high availability in a sharded cluster. You do not need to pass any special options to connect to multiple mongos in mongoose 5.x.

So far we've seen how to connect to MongoDB using Mongoose's default connection. Mongoose creates a default connection when you call mongoose.connect(). You can access the default connection using mongoose.connection.

You may need multiple connections to MongoDB for several reasons. One reason is if you have multiple databases or multiple MongoDB clusters. Another reason is to work around slow trains. The mongoose.createConnection() function takes the same arguments as mongoose.connect() and returns a new connection.

This connection object is then used to create and retrieve models. Models are always scoped to a single connection.

The createConnection() function returns a connection instance, not a promise. If you want to use await to make sure Mongoose successfully connects to MongoDB, use the asPromise() function:

If you use multiple connections, you should make sure you export schemas, not models. Exporting a model from a file is called the export model pattern. The export model pattern is limited because you can only use one connection.

If you use the export schema pattern, you still need to create models somewhere. There are two common patterns. The first is to create a function that instantiates a new connection and registers all models on that connection. With this pattern, you may also register connections with a dependency injector or another inversion of control (IOC) pattern.

Exporting a function that creates a new connection is the most flexible pattern. However, that pattern can make it tricky to get access to your connection from your route handlers or wherever your business logic is. An alternative pattern is to export a connection and register the models on the connection in the file's top-level scope as follows.

You can create separate files for each connection, like connections/web.js and connections/mobile.js if you want to create separate connections for your web API backend and your mobile API backend. Your business logic can then require() or import the connection it needs.

Each connection, whether created with mongoose.connect or mongoose.createConnection are all backed by an internal configurable connection pool defaulting to a maximum size of 100. Adjust the pool size using your connection options:

The connection pool size is important because MongoDB currently can only process one operation per socket. So maxPoolSize functions as a cap on the number of concurrent operations.

In the context of Mongoose, a multi-tenant architecture typically means a case where multiple different clients talk to MongoDB through a single Mongoose application. This typically means each client makes queries and executes updates through a single Mongoose application, but has a distinct MongoDB database within the same MongoDB cluster.

We recommend reading this article about multi-tenancy with Mongoose; it has a good description of how we define multi-tenancy and a more detailed overview of our recommended patterns.

There are two patterns we recommend for multi-tenancy in Mongoose:

The following is an example of pattern (1). We recommend pattern (1) for cases where you have a small number of tenants, or if each individual tenant's workload is light (approximately < 1 request per second, all requests take < 10ms of database processing time). Pattern (1) is simpler to implement and simpler to manage in production, because there is only 1 connection pool. But, under high load, you will likely run into issues where some tenants' operations slow down other tenants' operations due to slow trains.

The following is an example of pattern (2). Pattern (2) is more flexible and better for use cases with > 10k tenants and > 1 requests/second. Because each tenant has a separate connection pool, one tenants' slow operations will have minimal impact on other tenants. However, this pattern is harder to implement and manage in production. In particular, MongoDB does have a limit on the number of open connections, and MongoDB Atlas has separate limits on the number of open connections, so you need to make sure the total number of sockets in your connection pools doesn't go over MongoDB's limits.

Now that we've covered connections, let's take a look at models.

**Examples:**

Example 1 (unknown):
```unknown
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
```

Example 2 (unknown):
```unknown
mongoose.connect('mongodb://username:password@host:port/database?options...');
```

Example 3 (javascript):
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
await MyModel.findOne();
```

Example 4 (javascript):
```javascript
const MyModel = mongoose.model('Test', new Schema({ name: String }));
const promise = MyModel.findOne();

setTimeout(function() {
  mongoose.connect('mongodb://127.0.0.1:27017/myapp');
}, 60000);

// Will just hang until mongoose successfully connects
await promise;
```

---
