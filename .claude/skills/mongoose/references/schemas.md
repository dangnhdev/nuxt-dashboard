# Mongoose - Schemas

**Pages:** 18

---

## SchemaBoolean

**URL:** https://mongoosejs.com/docs/api/schemaboolean.html

**Contents:**
- SchemaBoolean
  - SchemaBoolean()
      - Parameters:
      - Inherits:
  - SchemaBoolean.cast()
      - Parameters:
      - Returns:
      - Type:
    - Example:
  - SchemaBoolean.checkRequired()

Boolean SchemaType constructor.

Get/set the function used to cast arbitrary values to booleans.

Override the function the required validator uses to check whether a boolean passes the required check.

Configure which values get casted to false.

Configure which values get casted to true.

Attaches a getter for all Boolean instances

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$in is the function Mongoose calls to cast $in filter operators.

Check if the given value satisfies a required validator. For a boolean to satisfy a required validator, it must be strictly equal to true or to false.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all Boolean instances.

**Examples:**

Example 1 (javascript):
```javascript
// Make Mongoose cast empty string '' to false.
const original = mongoose.Schema.Boolean.cast();
mongoose.Schema.Boolean.cast(v => {
  if (v === '') {
    return false;
  }
  return original(v);
});

// Or disable casting entirely
mongoose.Schema.Boolean.cast(false);
```

Example 2 (javascript):
```javascript
const M = mongoose.model('Test', new Schema({ b: Boolean }));
new M({ b: 'nay' }).b; // undefined
mongoose.Schema.Types.Boolean.convertToFalse.add('nay');
new M({ b: 'nay' }).b; // false
```

Example 3 (javascript):
```javascript
const M = mongoose.model('Test', new Schema({ b: Boolean }));
new M({ b: 'affirmative' }).b; // undefined
mongoose.Schema.Boolean.convertToTrue.add('affirmative');
new M({ b: 'affirmative' }).b; // true
```

Example 4 (javascript):
```javascript
mongoose.Schema.Boolean.get(v => v === true ? 'yes' : 'no');

const Order = mongoose.model('Order', new Schema({ isPaid: Boolean }));
new Order({ isPaid: false }).isPaid; // 'no'
```

---

## SchemaDocumentArray

**URL:** https://mongoosejs.com/docs/api/schemadocumentarray.html

**Contents:**
- SchemaDocumentArray
  - SchemaDocumentArray()
      - Parameters:
      - Inherits:
  - SchemaDocumentArray.get()
      - Parameters:
      - Returns:
      - Type:
  - SchemaDocumentArray.options
      - Type:

SubdocsArray SchemaType constructor

Attaches a getter for all DocumentArrayPath instances

Options for all document arrays.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$size is the function Mongoose calls to cast $size filter operators.

Adds a discriminator to this document array.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all DocumentArray instances.

**Examples:**

Example 1 (javascript):
```javascript
const shapeSchema = Schema({ name: String }, { discriminatorKey: 'kind' });
const schema = Schema({ shapes: [shapeSchema] });

const docArrayPath = parentSchema.path('shapes');
docArrayPath.discriminator('Circle', Schema({ radius: Number }));
```

Example 2 (unknown):
```unknown
// Make all numbers have option `min` equal to 0.
mongoose.Schema.DocumentArray.set('_id', false);
```

---

## SchemaTypes

**URL:** https://mongoosejs.com/docs/schematypes.html

**Contents:**
- SchemaTypes
- What is a SchemaType?
  - Example
- The type Key
- SchemaType Options
  - All Schema Types
  - Indexes
  - String
  - Number
  - Date

SchemaTypes handle definition of path defaults, validation, getters, setters, field selection defaults for queries, and other general characteristics for Mongoose document properties.

You can think of a Mongoose schema as the configuration object for a Mongoose model. A SchemaType is then a configuration object for an individual property. A SchemaType says what type a given path should have, whether it has any getters/setters, and what values are valid for that path.

A SchemaType is different from a type. In other words, mongoose.ObjectId !== mongoose.Types.ObjectId. A SchemaType is just a configuration object for Mongoose. An instance of the mongoose.ObjectId SchemaType doesn't actually create MongoDB ObjectIds, it is just a configuration for a path in a schema.

The following are all the valid SchemaTypes in Mongoose. Mongoose plugins can also add custom SchemaTypes like int32. Check out Mongoose's plugins search to find plugins.

type is a special property in Mongoose schemas. When Mongoose finds a nested property named type in your schema, Mongoose assumes that it needs to define a SchemaType with the given type.

As a consequence, you need a little extra work to define a property named type in your schema. For example, suppose you're building a stock portfolio app, and you want to store the asset's type (stock, bond, ETF, etc.). Naively, you might define your schema as shown below:

However, when Mongoose sees type: String, it assumes that you mean asset should be a string, not an object with a property type. The correct way to define an object with a property type is shown below.

You can declare a schema type using the type directly, or an object with a type property.

In addition to the type property, you can specify additional properties for a path. For example, if you want to lowercase a string before saving:

You can add any property you want to your SchemaType options. Many plugins rely on custom SchemaType options. For example, the mongoose-autopopulate plugin automatically populates paths if you set autopopulate: true in your SchemaType options. Mongoose comes with support for several built-in SchemaType options, like lowercase in the above example.

The lowercase option only works for strings. There are certain options which apply for all schema types, and some that apply for specific schema types.

You can also define MongoDB indexes using schema type options.

To declare a path as a string, you may use either the String global constructor or the string 'String'.

If you pass an element that has a toString() function, Mongoose will call it, unless the element is an array or the toString() function is strictly equal to Object.prototype.toString().

To declare a path as a number, you may use either the Number global constructor or the string 'Number'.

There are several types of values that will be successfully cast to a Number.

If you pass an object with a valueOf() function that returns a Number, Mongoose will call it and assign the returned value to the path.

The values null and undefined are not cast.

NaN, strings that cast to NaN, arrays, and objects that don't have a valueOf() function will all result in a CastError once validated, meaning that it will not throw on initialization, only when validated.

Built-in Date methods are not hooked into the mongoose change tracking logic which in English means that if you use a Date in your document and modify it with a method like setMonth(), mongoose will be unaware of this change and doc.save() will not persist this modification. If you must modify Date types using built-in methods, tell mongoose about the change with doc.markModified('pathToYourDate') before saving.

To declare a path as a Buffer, you may use either the Buffer global constructor or the string 'Buffer'.

Mongoose will successfully cast the below values to buffers.

An "anything goes" SchemaType. Mongoose will not do any casting on mixed paths. You can define a mixed path using Schema.Types.Mixed or by passing an empty object literal. The following are equivalent.

Since Mixed is a schema-less type, you can change the value to anything else you like, but Mongoose loses the ability to auto detect and save those changes. To tell Mongoose that the value of a Mixed type has changed, you need to call doc.markModified(path), passing the path to the Mixed type you just changed.

To avoid these side-effects, a Subdocument path may be used instead.

An ObjectId is a special type typically used for unique identifiers. Here's how you declare a schema with a path driver that is an ObjectId:

ObjectId is a class, and ObjectIds are objects. However, they are often represented as strings. When you convert an ObjectId to a string using toString(), you get a 24-character hexadecimal string:

Booleans in Mongoose are plain JavaScript booleans. By default, Mongoose casts the below values to true:

Mongoose casts the below values to false:

Any other value causes a CastError. You can modify what values Mongoose converts to true or false using the convertToTrue and convertToFalse properties, which are JavaScript sets.

Mongoose supports arrays of SchemaTypes and arrays of subdocuments. Arrays of SchemaTypes are also called primitive arrays, and arrays of subdocuments are also called document arrays.

Arrays are special because they implicitly have a default value of [] (empty array).

To overwrite this default, you need to set the default value to undefined

Note: specifying an empty array is equivalent to Mixed. The following all create arrays of Mixed:

A MongooseMap is a subclass of JavaScript's Map class. In these docs, we'll use the terms 'map' and MongooseMap interchangeably. In Mongoose, maps are how you create a nested document with arbitrary keys.

Note: In Mongoose Maps, keys must be strings in order to store the document in MongoDB.

The above example doesn't explicitly declare github or twitter as paths, but, since socialMediaHandles is a map, you can store arbitrary key/value pairs. However, since socialMediaHandles is a map, you must use .get() to get the value of a key and .set() to set the value of a key.

Map types are stored as BSON objects in MongoDB. Keys in a BSON object are ordered, so this means the insertion order property of maps is maintained.

Mongoose supports a special $* syntax to populate all elements in a map. For example, suppose your socialMediaHandles map contains a ref:

To populate every socialMediaHandles entry's oauth property, you should populate on socialMediaHandles.$*.oauth:

Mongoose also supports a UUID type that stores UUID instances as Node.js buffers. We recommend using ObjectIds rather than UUIDs for unique document ids in Mongoose, but you may use UUIDs if you need to.

In Node.js, a UUID is represented as an instance of bson.Binary type with a getter that converts the binary to a string when you access it. Mongoose stores UUIDs as binary data with subtype 4 in MongoDB.

To create UUIDs, we recommend using Node's built-in UUIDv4 generator.

Mongoose supports JavaScript BigInts as a SchemaType. BigInts are stored as 64-bit integers in MongoDB (BSON type "long").

Mongoose supports 64-bit IEEE 754-2008 floating point numbers as a SchemaType. Doubles are stored as BSON type "double" in MongoDB.

There are several types of values that will be successfully cast to a Double.

The following inputs will result will all result in a CastError once validated, meaning that it will not throw on initialization, only when validated:

Mongoose supports 32-bit integers as a SchemaType. Int32s are stored as 32-bit integers in MongoDB (BSON type "int").

There are several types of values that will be successfully cast to a Number.

If you pass an object with a valueOf() function that returns a Number, Mongoose will call it and assign the returned value to the path.

The values null and undefined are not cast.

The following inputs will result will all result in a CastError once validated, meaning that it will not throw on initialization, only when validated:

Getters are like virtuals for paths defined in your schema. For example, let's say you wanted to store user profile pictures as relative paths and then add the hostname in your application. Below is how you would structure your userSchema:

Generally, you only use getters on primitive paths as opposed to arrays or subdocuments. Because getters override what accessing a Mongoose path returns, declaring a getter on an object may remove Mongoose change tracking for that path.

Instead of declaring a getter on the array as shown above, you should declare a getter on the url string as shown below. If you need to declare a getter on a nested document or array, be very careful!

To declare a path as another schema, set type to the sub-schema's instance.

To set a default value based on the sub-schema's shape, simply set a default value, and the value will be cast based on the sub-schema's definition before being set during document creation.

Mongoose can also be extended with custom SchemaTypes. Search the plugins site for compatible types like mongoose-long, mongoose-int32, and mongoose-function.

Read more about creating custom SchemaTypes in our Custom SchemaTypes guide.

The schema.path() function returns the instantiated schema type for a given path.

You can use this function to inspect the schema type for a given path, including what validators it has and what the type is.

Now that we've covered SchemaTypes, let's take a look at Connections.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name') instanceof mongoose.SchemaType; // true
schema.path('name') instanceof mongoose.Schema.Types.String; // true
schema.path('name').instance; // 'String'
```

Example 2 (javascript):
```javascript
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  double: Schema.Types.Double,
  int32bit: Schema.Types.Int32,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String
  }
});

// example use

const Thing = mongoose.model('Thing', schema);

const m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = Buffer.alloc(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push('strings!');
m.ofNumber.unshift(1, 2, 3, 4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.map = new Map([['key', 'value']]);
m.save(callback);
```

Example 3 (javascript):
```javascript
// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
const schema = new Schema({
  name: { type: String },
  nested: {
    firstName: { type: String },
    lastName: { type: String }
  }
});
```

Example 4 (javascript):
```javascript
const holdingSchema = new Schema({
  // You might expect `asset` to be an object that has 2 properties,
  // but unfortunately `type` is special in Mongoose so mongoose
  // interprets this schema to mean that `asset` is a string
  asset: {
    type: String,
    ticker: String
  }
});
```

---

## SchemaNumber

**URL:** https://mongoosejs.com/docs/api/schemanumber.html

**Contents:**
- SchemaNumber
  - SchemaNumber()
      - Parameters:
      - Inherits:
  - SchemaNumber.cast()
      - Parameters:
      - Returns:
      - Type:
    - Example:
  - SchemaNumber.checkRequired()

Number SchemaType constructor.

Get/set the function used to cast arbitrary values to numbers.

Override the function the required validator uses to check whether a string passes the required check.

Attaches a getter for all Number instances.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$gte is the function Mongoose calls to cast $gte filter operators.

Check if the given value satisfies a required validator.

Sets a enum validator

Sets a maximum number validator.

Sets a minimum number validator.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all Number instances.

**Examples:**

Example 1 (javascript):
```javascript
// Make Mongoose cast empty strings '' to 0 for paths declared as numbers
const original = mongoose.Number.cast();
mongoose.Number.cast(v => {
  if (v === '') { return 0; }
  return original(v);
});

// Or disable casting entirely
mongoose.Number.cast(false);
```

Example 2 (javascript):
```javascript
// Make all numbers round down
mongoose.Number.get(function(v) { return Math.floor(v); });

const Model = mongoose.model('Test', new Schema({ test: Number }));
new Model({ test: 3.14 }).test; // 3
```

Example 3 (javascript):
```javascript
const s = new Schema({ n: { type: Number, enum: [1, 2, 3] });
const M = db.model('M', s);

const m = new M({ n: 4 });
await m.save(); // throws validation error

m.n = 3;
await m.save(); // succeeds
```

Example 4 (javascript):
```javascript
const s = new Schema({ n: { type: Number, max: 10 })
const M = db.model('M', s)
const m = new M({ n: 11 })
m.save(function (err) {
  console.error(err) // validator error
  m.n = 10;
  m.save() // success
})

// custom error messages
// We can also use the special {MAX} token which will be replaced with the invalid value
const max = [10, 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
const schema = new Schema({ n: { type: Number, max: max })
const M = mongoose.model('Measurement', schema);
const s= new M({ n: 4 });
s.validate(function (err) {
  console.log(String(err)) // ValidationError: The value of path `n` (4) exceeds the limit (10).
})
```

---

## SchemaUuid

**URL:** https://mongoosejs.com/docs/api/schemauuid.html

**Contents:**
- SchemaUuid
  - SchemaUUID()
      - Parameters:
      - Inherits:
  - SchemaUUID.checkRequired()
      - Parameters:
      - Returns:
      - Type:
  - SchemaUUID.get()
      - Parameters:

UUIDv1 SchemaType constructor.

Override the function the required validator uses to check whether a string passes the required check.

Attaches a getter for all UUID instances.

Get/set the function used to cast arbitrary values to UUIDs.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$exists is the function Mongoose calls to cast $exists filter operators.

Check if the given value satisfies a required validator.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all UUID instances.

**Examples:**

Example 1 (javascript):
```javascript
// Note that `v` is a string by default
mongoose.Schema.UUID.get(v => v.toUpperCase());

const Model = mongoose.model('Test', new Schema({ test: 'UUID' }));
new Model({ test: uuid.v4() }).test; // UUID with all uppercase
```

Example 2 (javascript):
```javascript
// Make Mongoose refuse to cast UUIDs with 0 length
const original = mongoose.Schema.Types.UUID.cast();
mongoose.UUID.cast(v => {
  assert.ok(typeof v === "string" && v.length > 0);
  return original(v);
});

// Or disable casting entirely
mongoose.UUID.cast(false);
```

Example 3 (javascript):
```javascript
// Make all UUIDs have `required` of true by default.
mongoose.Schema.UUID.set('required', true);

const User = mongoose.model('User', new Schema({ test: mongoose.UUID }));
new User({ }).validateSync().errors.test.message; // Path `test` is required.
```

---

## SchemaType

**URL:** https://mongoosejs.com/docs/api/schematype.html

**Contents:**
- SchemaType
  - SchemaType()
      - Parameters:
    - Example:
  - SchemaType.cast()
      - Parameters:
      - Returns:
    - Example:
  - SchemaType.checkRequired()
      - Parameters:

SchemaType constructor. Do not instantiate SchemaType directly. Mongoose converts your schema paths into SchemaTypes automatically.

Get/set the function used to cast arbitrary values to this type.

Set & Get the checkRequired function Override the function the required validator uses to check whether a value passes the required check. Override this on the individual SchemaType.

Attaches a getter for all instances of this schema type.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$exists is the function Mongoose calls to cast $exists filter operators.

The function that Mongoose calls to cast arbitrary values to this SchemaType.

Get/set the function used to cast arbitrary values to this particular schematype instance. Overrides SchemaType.cast().

Sets a default value for this SchemaType.

Defaults can be either functions which return the value to use as the default or the literal value itself. Either way, the value will be cast based on its schema type before being set during document creation.

Performs a validation of value using the validators declared for this SchemaType.

Adds a getter to this schematype.

Getters allow you to transform the representation of the data as it travels from the raw mongodb document to the value that you see.

Suppose you are storing credit card numbers and you want to hide everything except the last 4 digits to the mongoose user. You can do so by defining a getter in the following way:

Getters are also passed a second argument, the schematype on which the getter was defined. This allows for tailored behavior based on options passed in the schema.

Returns the embedded schema type, if any. For arrays, document arrays, and maps, getEmbeddedSchemaType() returns the schema type of the array's elements (or map's elements). For other types, getEmbeddedSchemaType() returns undefined.

Defines this path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.

Mongoose also prevents changing immutable properties using updateOne() and updateMany() based on strict mode.

Declares the index options for this schematype.

Indexes are created in the background by default. If background is set to false, MongoDB will not execute any read/write operations you send until the index build. Specify background: false to override Mongoose's default.

True if this SchemaType has a required validator. False otherwise.

The path to this SchemaType in a Schema.

Set the model that this path refers to. This is the option that populate looks at to determine the foreign collection it should query.

Adds a required validator to this SchemaType. The validator gets added to the front of this SchemaType's validators array using unshift().

The required validator uses the SchemaType's checkRequired function to determine whether a given value satisfies the required validator. By default, a value satisfies the required validator if val != null (that is, if the value is not null nor undefined). However, most built-in mongoose schema types override the default checkRequired function:

Sets default select() behavior for this path.

Set to true if this path should always be included in the results, false if it should be excluded by default. This setting can be overridden at the query level.

Adds a setter to this schematype.

Setters allow you to transform the data before it gets to the raw mongodb document or query.

Suppose you are implementing user registration for a website. Users provide an email and password, which gets saved to mongodb. The email is a string that you will want to normalize to lower case, in order to avoid one email having more than one account -- e.g., otherwise, avenue@q.com can be registered for 2 accounts via avenue@q.com and AvEnUe@Q.CoM.

You can set up email lower case normalization easily via a Mongoose setter.

As you can see above, setters allow you to transform the data before it stored in MongoDB, or before executing a query.

NOTE: we could have also just used the built-in lowercase: true SchemaType option instead of defining our own function.

Setters are also passed a second argument, the schematype on which the setter was defined. This allows for tailored behavior based on options passed in the schema.

You can also use setters to modify other properties on the document. If you're setting a property name on a document, the setter will run with this as the document. Be careful, in mongoose 5 setters will also run when querying by name with this as the query.

Declares a sparse index.

Declares a full text index.

Returns this schema type's representation in a JSON schema.

Defines a custom function for transforming this path when converting a document to JSON.

Mongoose calls this function with one parameter: the current value of the path. Mongoose then uses the return value in the JSON output.

Declares an unique index.

NOTE: violating the constraint returns an E11000 error from MongoDB when saving, not a Mongoose validation error.

You can optionally specify an error message to replace MongoDB's default E11000 duplicate key error message. The following will throw a "Email must be unique" error if save(), updateOne(), updateMany(), replaceOne(), findOneAndUpdate(), or findOneAndReplace() throws a duplicate key error:

Note that the above syntax does not work for bulkWrite() or insertMany(). bulkWrite() and insertMany() will still throw MongoDB's default E11000 duplicate key error message.

Adds validator(s) for this document path.

Validators always receive the value to validate as their first argument and must return Boolean. Returning false or throwing an error means validation failed.

The error message argument is optional. If not passed, the default generic error message template will be used.

Below is a list of supported template keywords:

If Mongoose's built-in error message templating isn't enough, Mongoose supports setting the message property to a function.

To bypass Mongoose's error messages and just copy the error message that the validator throws, do this:

Mongoose supports validators that return a promise. A validator that returns a promise is called an async validator. Async validators run in parallel, and validate() will wait until all async validators have settled.

You might use asynchronous validators to retreive other documents from the database to validate against or to meet other I/O bound validation needs.

Validation occurs pre('save') or whenever you manually execute document#validate.

If validation fails during pre('save') and no callback was passed to receive the error, an error event will be emitted on your Models associated db connection, passing the validation error object along.

If you want to handle these errors at the Model level, add an error listener to your Model as shown below.

Adds multiple validators for this document path. Calls validate() for every element in validators.

The validators that Mongoose should run to validate properties at this SchemaType's path.

Sets a default option for this schema type.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name') instanceof SchemaType; // true
```

Example 2 (unknown):
```unknown
// Disallow `null` for numbers, and don't try to cast any values to
// numbers, so even strings like '123' will cause a CastError.
mongoose.Number.cast(function(v) {
  assert.ok(v === undefined || typeof v === 'number');
  return v;
});
```

Example 3 (javascript):
```javascript
// Use this to allow empty strings to pass the `required` validator
mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');
```

Example 4 (unknown):
```unknown
// Make all numbers round down
mongoose.Number.get(function(v) { return Math.floor(v); });
```

---

## SchemaDateOptions

**URL:** https://mongoosejs.com/docs/api/schemadateoptions.html

**Contents:**
- SchemaDateOptions
  - SchemaDateOptions()
      - Type:
      - Inherits:
    - Example:
  - SchemaDateOptions.prototype.expires
      - Type:
    - Example:
  - SchemaDateOptions.prototype.max
      - Type:

The options defined on a Date schematype.

If set, Mongoose creates a TTL index on this path.

mongo TTL index expireAfterSeconds value will take 'expires' value expressed in seconds.

If set, Mongoose adds a validator that checks that this path is before the given max.

If set, Mongoose adds a validator that checks that this path is after the given min.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ startedAt: Date });
schema.path('startedAt').options; // SchemaDateOptions instance
```

Example 2 (javascript):
```javascript
const schema = new Schema({ "expireAt": { type: Date,  expires: 11 } });
// if 'expireAt' is set, then document expires at expireAt + 11 seconds
```

---

## Custom Schema Types

**URL:** https://mongoosejs.com/docs/customschematypes.html

**Contents:**
- Custom Schema Types
- Creating a Basic Custom Schema Type

New in Mongoose 4.4.0: Mongoose supports custom types. Before you reach for a custom type, however, know that a custom type is overkill for most use cases. You can do most basic tasks with custom getters/setters, virtuals, and single embedded docs.

Let's take a look at an example of a basic schema type: a 1-byte integer. To create a new schema type, you need to inherit from mongoose.SchemaType and add the corresponding property to mongoose.Schema.Types. The one method you need to implement is the cast() method.

**Examples:**

Example 1 (javascript):
```javascript
class Int8 extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, 'Int8');
  }

  // `cast()` takes a parameter that can be anything. You need to
  // validate the provided `val` and throw a `CastError` if you
  // can't convert it.
  cast(val) {
    let _val = Number(val);
    if (isNaN(_val)) {
      throw new Error('Int8: ' + val + ' is not a number');
    }
    _val = Math.round(_val);
    if (_val < -0x80 || _val > 0x7F) {
      throw new Error('Int8: ' + val +
        ' is outside of the range of valid 8-bit ints');
    }
    return _val;
  }
}

// Don't forget to add `Int8` to the type registry
mongoose.Schema.Types.Int8 = Int8;

const testSchema = new Schema({ test: Int8 });
const Test = mongoose.model('CustomTypeExample', testSchema);

const t = new Test();
t.test = 'abc';
assert.ok(t.validateSync());
assert.equal(t.validateSync().errors['test'].name, 'CastError');
assert.equal(t.validateSync().errors['test'].message,
  'Cast to Int8 failed for value "abc" (type string) at path "test"');
assert.equal(t.validateSync().errors['test'].reason.message,
  'Int8: abc is not a number');
```

---

## SchemaArray

**URL:** https://mongoosejs.com/docs/api/schemaarray.html

**Contents:**
- SchemaArray
  - SchemaArray()
      - Parameters:
      - Inherits:
  - SchemaArray.checkRequired()
      - Parameters:
      - Returns:
    - Example:
  - SchemaArray.get()
      - Parameters:

Array SchemaType constructor

Override the function the required validator uses to check whether an array passes the required check.

Attaches a getter for all Array instances

Options for all arrays.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$all is the function Mongoose calls to cast $all filter operators.

Check if the given value satisfies the required validator.

Adds an enum validator if this is an array of strings or numbers. Equivalent to SchemaString.prototype.enum() or SchemaNumber.prototype.enum()

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all Array instances.

**Examples:**

Example 1 (javascript):
```javascript
// Require non-empty array to pass `required` check
mongoose.Schema.Types.Array.checkRequired(v => Array.isArray(v) && v.length);

const M = mongoose.model({ arr: { type: Array, required: true } });
new M({ arr: [] }).validateSync(); // `null`, validation fails!
```

Example 2 (javascript):
```javascript
// Make all Array instances have `required` of true by default.
mongoose.Schema.Array.set('required', true);

const User = mongoose.model('User', new Schema({ test: Array }));
new User({ }).validateSync().errors.test.message; // Path `test` is required.
```

---

## Schemas

**URL:** https://mongoosejs.com/docs/guide.html

**Contents:**
- Schemas
- Defining your schema
- Creating a model
- Ids
- Instance methods
- Statics
- Query Helpers
- Indexes
- Virtuals
- Aliases

If you haven't yet done so, please take a minute to read the quickstart to get an idea of how Mongoose works. If you are migrating from 7.x to 8.x please take a moment to read the migration guide.

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

If you want to add additional keys later, use the Schema#add method.

Each key in our code blogSchema defines a property in our documents which will be cast to its associated SchemaType. For example, we've defined a property title which will be cast to the String SchemaType and property date which will be cast to a Date SchemaType.

Notice above that if a property only requires a type, it can be specified using a shorthand notation (contrast the title property above with the date property).

Keys may also be assigned nested objects containing further key/type definitions like the meta property above. This will happen whenever a key's value is a POJO that doesn't have a type property.

In these cases, Mongoose only creates actual schema paths for leaves in the tree. (like meta.votes and meta.favs above), and the branches do not have actual paths. A side-effect of this is that meta above cannot have its own validation. If validation is needed up the tree, a path needs to be created up the tree - see the Subdocuments section for more information on how to do this. Also read the Mixed subsection of the SchemaTypes guide for some gotchas.

The permitted SchemaTypes are:

Read more about SchemaTypes here.

Schemas not only define the structure of your document and casting of properties, they also define document instance methods, static Model methods, compound indexes, and document lifecycle hooks called middleware.

To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

By default, Mongoose adds an _id property to your schemas.

When you create a new document with the automatically added _id property, Mongoose creates a new _id of type ObjectId to your document.

You can also overwrite Mongoose's default _id with your own _id. Just be careful: Mongoose will refuse to save a top-level document that doesn't have an _id, so you're responsible for setting _id if you define your own _id path.

Mongoose also adds an _id property to subdocuments. You can disable the _id property on your subdocuments as follows. Mongoose does allow saving subdocuments without an _id property.

Alternatively, you can disable _id using the following syntax:

Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods.

Now all of our animal instances have a findSimilarTypes method available to them.

You can also add static functions to your model. There are three equivalent ways to add a static:

Do not declare statics using ES6 arrow functions (=>). Arrow functions explicitly prevent binding this, so the above examples will not work because of the value of this.

You can also add query helper functions, which are like instance methods but for mongoose queries. Query helper methods let you extend mongoose's chainable query builder API.

MongoDB supports secondary indexes. With mongoose, we define these indexes within our Schema at the path level or the schema level. Defining indexes at the schema level is necessary when creating compound indexes.

See SchemaType#index() for other index options.

When your application starts up, Mongoose automatically calls createIndex for each defined index in your schema. Mongoose will call createIndex for each index sequentially, and emit an 'index' event on the model when all the createIndex calls succeeded or when there was an error. While nice for development, it is recommended this behavior be disabled in production since index creation can cause a significant performance impact. Disable the behavior by setting the autoIndex option of your schema to false, or globally on the connection by setting the option autoIndex to false.

Mongoose will emit an index event on the model when indexes are done building or an error occurred.

See also the Model#ensureIndexes method.

Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage.

Suppose you want to print out the person's full name. You could do it yourself:

But concatenating the first and last name every time can get cumbersome. And what if you want to do some extra processing on the name, like removing diacritics? A virtual property getter lets you define a fullName property that won't get persisted to MongoDB.

Now, mongoose will call your getter function every time you access the fullName property:

If you use toJSON() or toObject() Mongoose will not include virtuals by default. Pass { virtuals: true } to toJSON() or toObject() to include virtuals.

The above caveat for toJSON() also includes the output of calling JSON.stringify() on a Mongoose document, because JSON.stringify() calls toJSON(). To include virtuals in JSON.stringify() output, you can either call toObject({ virtuals: true }) on the document before calling JSON.stringify(), or set the toJSON: { virtuals: true } option on your schema.

You can also add a custom setter to your virtual that will let you set both first name and last name via the fullName virtual.

Virtual property setters are applied before other validation. So the example above would still work even if the first and last name fields were required.

Only non-virtual properties work as part of queries and for field selection. Since virtuals are not stored in MongoDB, you can't query with them.

You can learn more about virtuals here.

Aliases are a particular type of virtual where the getter and setter seamlessly get and set another property. This is handy for saving network bandwidth, so you can convert a short property name stored in the database into a longer name for code readability.

You can also declare aliases on nested paths. It is easier to use nested schemas and subdocuments, but you can also declare nested path aliases inline as long as you use the full nested path nested.myProp as the alias.

Schemas have a few configurable options which can be passed to the constructor or to the set method:

By default, Mongoose's init() function creates all the indexes defined in your model's schema by calling Model.createIndexes() after you successfully connect to MongoDB. Creating indexes automatically is great for development and test environments. But index builds can also create significant load on your production database. If you want to manage indexes carefully in production, you can set autoIndex to false.

The autoIndex option is set to true by default. You can change this default by setting mongoose.set('autoIndex', false);

Before Mongoose builds indexes, it calls Model.createCollection() to create the underlying collection in MongoDB by default. Calling createCollection() sets the collection's default collation based on the collation option and establishes the collection as a capped collection if you set the capped schema option.

You can disable this behavior by setting autoCreate to false using mongoose.set('autoCreate', false). Like autoIndex, autoCreate is helpful for development and test environments, but you may want to disable it for production to avoid unnecessary database calls.

Unfortunately, createCollection() cannot change an existing collection. For example, if you add capped: { size: 1024 } to your schema and the existing collection is not capped, createCollection() will not overwrite the existing collection. That is because the MongoDB server does not allow changing a collection's options without dropping the collection first.

By default, mongoose buffers commands when the connection goes down until the driver manages to reconnect. To disable buffering, set bufferCommands to false.

The schema bufferCommands option overrides the global bufferCommands option.

If bufferCommands is on, this option sets the maximum amount of time Mongoose buffering will wait before throwing an error. If not specified, Mongoose will use 10000 (10 seconds).

Mongoose supports MongoDBs capped collections. To specify the underlying MongoDB collection be capped, set the capped option to the maximum size of the collection in bytes.

The capped option may also be set to an object if you want to pass additional options like max. In this case you must explicitly pass the size option, which is required.

Mongoose by default produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. Set this option if you need a different name for your collection.

When you define a discriminator, Mongoose adds a path to your schema that stores which discriminator a document is an instance of. By default, Mongoose adds an __t path, but you can set discriminatorKey to overwrite this default.

When excludeIndexes is true, Mongoose will not create indexes from the given subdocument schema. This option only works when the schema is used in a subdocument path or document array path, Mongoose ignores this option if set on the top-level schema for a model. Defaults to false.

Mongoose assigns each of your schemas an id virtual getter by default which returns the document's _id field cast to a string, or in the case of ObjectIds, its hexString. If you don't want an id getter added to your schema, you may disable it by passing this option at schema construction time.

Mongoose assigns each of your schemas an _id field by default if one is not passed into the Schema constructor. The type assigned is an ObjectId to coincide with MongoDB's default behavior. If you don't want an _id added to your schema at all, you may disable it using this option.

You can only use this option on subdocuments. Mongoose can't save a document without knowing its id, so you will get an error if you try to save a document without an _id.

Mongoose will, by default, "minimize" schemas by removing empty objects.

This behavior can be overridden by setting minimize option to false. It will then store empty objects.

To check whether an object is empty, you can use the $isEmpty() helper:

Allows setting query#read options at the schema level, providing us a way to apply default ReadPreferences to all queries derived from a model.

The alias of each pref is also permitted so instead of having to type out 'secondaryPreferred' and getting the spelling wrong, we can simply pass 'sp'.

The read option also allows us to specify tag sets. These tell the driver from which members of the replica-set it should attempt to read. Read more about tag sets in the MongoDB documentation on replica set tag sets and in the MongoDB core documentation on read preference.

NOTE: you may also specify the driver read preference strategy option when connecting:

Allows setting write concern at the schema level.

The shardKey option is used when we have a sharded MongoDB architecture. Each sharded collection is given a shard key which must be present in all insert/update operations. We just need to set this schema option to the same shard key and we’ll be all set.

Note that Mongoose does not send the shardcollection command for you. You must configure your shards yourself.

The strict option, (enabled by default), ensures that values passed to our model constructor that were not specified in our schema do not get saved to the db.

This also affects the use of doc.set() to set a property value.

This value can be overridden at the model instance level by passing a second boolean argument:

The strict option may also be set to "throw" which will cause errors to be produced instead of dropping the bad data.

NOTE: Any key/val set on the instance that does not exist in your schema is always ignored, regardless of schema option.

Mongoose supports a separate strictQuery option to avoid strict mode for query filters. This is because empty query filters cause Mongoose to return all documents in the model, which can cause issues.

The strict option does apply to updates. The strictQuery option is just for query filters.

Mongoose has a separate strictQuery option to toggle strict mode for the filter parameter to queries.

In general, we do not recommend passing user-defined objects as query filters:

In Mongoose 7, strictQuery is false by default. However, you can override this behavior globally:

Exactly the same as the toObject option but only applies when the document's toJSON method is called.

To see all available toJSON/toObject options, read this.

Documents have a toObject method which converts the mongoose document into a plain JavaScript object. This method accepts a few options. Instead of applying these options on a per-document basis, we may declare the options at the schema level and have them applied to all of the schema's documents by default.

To have all virtuals show up in your console.log output, set the toObject option to { getters: true }:

To see all available toObject options, read this.

By default, if you have an object with key 'type' in your schema, mongoose will interpret it as a type declaration.

However, for applications like geoJSON, the 'type' property is important. If you want to control which key mongoose uses to find type declarations, set the 'typeKey' schema option.

By default, documents are automatically validated before they are saved to the database. This is to prevent saving an invalid document. If you want to handle validation manually, and be able to save objects which don't pass validation, you can set validateBeforeSave to false.

The versionKey is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The versionKey option is a string that represents the path to use for versioning. The default is __v. If this conflicts with your application you can configure as such:

Note that Mongoose's default versioning is not a full optimistic concurrency solution. Mongoose's default versioning only operates on arrays as shown below.

If you need optimistic concurrency support for save(), you can set the optimisticConcurrency option.

Document versioning can also be disabled by setting the versionKey to false. DO NOT disable versioning unless you know what you are doing.

Mongoose only updates the version key when you use save(). If you use update(), findOneAndUpdate(), etc. Mongoose will not update the version key. As a workaround, you can use the below middleware.

Optimistic concurrency is a strategy to ensure the document you're updating didn't change between when you loaded it using find() or findOne(), and when you update it using save().

For example, suppose you have a House model that contains a list of photos, and a status that represents whether this house shows up in searches. Suppose that a house that has status 'APPROVED' must have at least two photos. You might implement the logic of approving a house document as shown below:

The markApproved() function looks right in isolation, but there might be a potential issue: what if another function removes the house's photos between the findOne() call and the save() call? For example, the below code will succeed:

If you set the optimisticConcurrency option on the House model's schema, the above script will throw an error.

Sets a default collation for every query and aggregation. Here's a beginner-friendly overview of collations.

If you set the timeseries option on a schema, Mongoose will create a timeseries collection for any model that you create from that schema.

skipVersioning allows excluding paths from versioning (i.e., the internal revision will not be incremented even if these paths are updated). DO NOT do this unless you know what you're doing. For subdocuments, include this on the parent document using the fully qualified path.

The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.

By default, the names of the fields are createdAt and updatedAt. Customize the field names by setting timestamps.createdAt and timestamps.updatedAt.

The way timestamps works under the hood is:

By default, Mongoose uses new Date() to get the current time. If you want to overwrite the function Mongoose uses to get the current time, you can set the timestamps.currentTime option. Mongoose will call the timestamps.currentTime function whenever it needs to get the current time.

Mongoose supports defining global plugins, plugins that apply to all schemas.

Sometimes, you may only want to apply a given plugin to some schemas. In that case, you can add pluginTags to a schema:

If you call plugin() with a tags option, Mongoose will only apply that plugin to schemas that have a matching entry in pluginTags.

By default, Mongoose will automatically select() any populated paths for you, unless you explicitly exclude them.

To opt out of selecting populated fields by default, set selectPopulatedPaths to false in your schema.

For legacy reasons, when there is a validation error in subpath of a single nested schema, Mongoose will record that there was a validation error in the single nested schema path as well. For example:

Set the storeSubdocValidationError to false on the child schema to make Mongoose only reports the parent error.

Options like collation and capped affect the options Mongoose passes to MongoDB when creating a new collection. Mongoose schemas support most MongoDB createCollection() options, but not all. You can use the collectionOptions option to set any createCollection() options; Mongoose will use collectionOptions as the default values when calling createCollection() for your schema.

Similar to autoIndex, except for automatically creates any Atlas search indexes defined in your schema. Unlike autoIndex, this option defaults to false.

Read concerns are similar to writeConcern, but for read operations like find() and findOne(). To set a default readConcern, pass the readConcern option to the schema constructor as follows.

Schemas have a loadClass() method that you can use to create a Mongoose schema from an ES6 class:

Here's an example of using loadClass() to create a schema from an ES6 class:

Schemas are also pluggable which allows us to package up reusable features into plugins that can be shared with the community or just between your projects.

Here's an alternative introduction to Mongoose schemas.

To get the most out of MongoDB, you need to learn the basics of MongoDB schema design. SQL schema design (third normal form) was designed to minimize storage costs, whereas MongoDB schema design is about making common queries as fast as possible. The 6 Rules of Thumb for MongoDB Schema Design blog series is an excellent resource for learning the basic rules for making your queries fast.

Users looking to master MongoDB schema design in Node.js should look into The Little MongoDB Schema Design Book by Christian Kvalheim, the original author of the MongoDB Node.js driver. This book shows you how to implement performant schemas for a laundry list of use cases, including e-commerce, wikis, and appointment bookings.

Now that we've covered Schemas, let's take a look at SchemaTypes.

**Examples:**

Example 1 (python):
```python
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
```

Example 2 (javascript):
```javascript
const Blog = mongoose.model('Blog', blogSchema);
// ready to go!
```

Example 3 (javascript):
```javascript
const schema = new Schema();

schema.path('_id'); // ObjectId { ... }
```

Example 4 (javascript):
```javascript
const Model = mongoose.model('Test', schema);

const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId; // true
```

---

## SchemaSubdocument

**URL:** https://mongoosejs.com/docs/api/schemasubdocument.html

**Contents:**
- SchemaSubdocument
  - SchemaSubdocument()
      - Parameters:
      - Inherits:
  - SchemaSubdocument.get()
      - Parameters:
      - Returns:
      - Type:
  - SchemaSubdocument.prototype.$conditionalHandlers
      - Type:

Single nested subdocument SchemaType constructor.

Attaches a getter for all Subdocument instances

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$exists is the function Mongoose calls to cast $exists filter operators.

Adds a discriminator to this single nested subdocument.

Returns this schema type's representation in a JSON schema.

Sets a default option for all Subdocument instances.

**Examples:**

Example 1 (javascript):
```javascript
const shapeSchema = Schema({ name: String }, { discriminatorKey: 'kind' });
const schema = Schema({ shape: shapeSchema });

const singleNestedPath = parentSchema.path('shape');
singleNestedPath.discriminator('Circle', Schema({ radius: Number }));
```

Example 2 (unknown):
```unknown
// Make all numbers have option `min` equal to 0.
mongoose.Schema.Subdocument.set('required', true);
```

---

## Subdocument

**URL:** https://mongoosejs.com/docs/api/subdocument.html

**Contents:**
- Subdocument
  - Subdocument.prototype.$parent()
  - Subdocument.prototype.$toObject()
  - Subdocument.prototype.deleteOne()
      - Parameters:
  - Subdocument.prototype.inspect()
  - Subdocument.prototype.ownerDocument()
      - Returns:
  - Subdocument.prototype.parent()

Returns this sub-documents parent document.

Override $toObject() to handle minimizing the whole path. Should not minimize if schematype-level minimize is set to false re: gh-11247, gh-14058, gh-14151

Helper for console.log

Returns the top level document of this sub-document.

Returns this sub-documents parent document.

---

## SchemaStringOptions

**URL:** https://mongoosejs.com/docs/api/schemastringoptions.html

**Contents:**
- SchemaStringOptions
  - SchemaStringOptions()
      - Type:
      - Inherits:
    - Example:
  - SchemaStringOptions.prototype.enum
      - Type:
  - SchemaStringOptions.prototype.lowercase
      - Type:
  - SchemaStringOptions.prototype.match

The options defined on a string schematype.

Array of allowed values for this path

If truthy, Mongoose will add a custom setter that lowercases this string using JavaScript's built-in String#toLowerCase().

Attach a validator that succeeds if the data string matches the given regular expression, and fails otherwise.

If set, Mongoose will add a custom validator that ensures the given string's length is at most the given number.

Mongoose supports two different spellings for this option: maxLength and maxlength. maxLength is the recommended way to specify this option, but Mongoose also supports maxlength (lowercase "l").

If set, Mongoose will add a custom validator that ensures the given string's length is at least the given number.

Mongoose supports two different spellings for this option: minLength and minlength. minLength is the recommended way to specify this option, but Mongoose also supports minlength (lowercase "l").

Sets default populate options.

If truthy, Mongoose will add a custom setter that removes leading and trailing whitespace using JavaScript's built-in String#trim().

If truthy, Mongoose will add a custom setter that uppercases this string using JavaScript's built-in String#toUpperCase().

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name').options; // SchemaStringOptions instance
```

---

## SchemaString

**URL:** https://mongoosejs.com/docs/api/schemastring.html

**Contents:**
- SchemaString
  - SchemaString()
      - Parameters:
      - Inherits:
  - SchemaString.cast()
      - Parameters:
      - Returns:
      - Type:
    - Example:
  - SchemaString.checkRequired()

String SchemaType constructor.

Get/set the function used to cast arbitrary values to strings.

Override the function the required validator uses to check whether a string passes the required check.

Attaches a getter for all String instances.

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$exists is the function Mongoose calls to cast $exists filter operators.

Check if the given value satisfies the required validator. The value is considered valid if it is a string (that is, not null or undefined) and has positive length. The required validator will fail for empty strings.

Adds an enum validator

Adds a lowercase setter.

Note that lowercase does not affect regular expression queries:

Sets a regexp validator.

Any value that does not pass regExp.test(val) will fail validation.

Empty strings, undefined, and null values always pass the match validator. If you require these values, enable the required validator also.

Sets a maximum length validator.

Sets a minimum length validator.

Returns this schema type's representation in a JSON schema.

The string value will be trimmed when set.

Note that trim does not affect regular expression queries:

Adds an uppercase setter.

Note that uppercase does not affect regular expression queries:

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all String instances.

**Examples:**

Example 1 (javascript):
```javascript
// Throw an error if you pass in an object. Normally, Mongoose allows
// objects with custom `toString()` functions.
const original = mongoose.Schema.Types.String.cast();
mongoose.Schema.Types.String.cast(v => {
  assert.ok(v == null || typeof v !== 'object');
  return original(v);
});

// Or disable casting entirely
mongoose.Schema.Types.String.cast(false);
```

Example 2 (javascript):
```javascript
// Allow empty strings to pass `required` check
mongoose.Schema.Types.String.checkRequired(v => v != null);

const M = mongoose.model({ str: { type: String, required: true } });
new M({ str: '' }).validateSync(); // `null`, validation passes!
```

Example 3 (javascript):
```javascript
// Make all numbers round down
mongoose.Schema.String.get(v => v.toLowerCase());

const Model = mongoose.model('Test', new Schema({ test: String }));
new Model({ test: 'FOO' }).test; // 'foo'
```

Example 4 (javascript):
```javascript
const states = ['opening', 'open', 'closing', 'closed']
const s = new Schema({ state: { type: String, enum: states }})
const M = db.model('M', s)
const m = new M({ state: 'invalid' })
await m.save()
  .catch((err) => console.error(err)); // ValidationError: `invalid` is not a valid enum value for path `state`.
m.state = 'open';
await m.save();
// success

// or with custom error messages
const enum = {
  values: ['opening', 'open', 'closing', 'closed'],
  message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
}
const s = new Schema({ state: { type: String, enum: enum })
const M = db.model('M', s)
const m = new M({ state: 'invalid' })
await m.save()
  .catch((err) => console.error(err)); // ValidationError: enum validator failed for path `state` with value `invalid`
m.state = 'open';
await m.save();
// success
```

---

## Schema

**URL:** https://mongoosejs.com/docs/api/schema.html

**Contents:**
- Schema
  - Schema()
      - Parameters:
      - Inherits:
    - Example:
    - Options:
    - Options for Nested Schemas:
    - Note:
  - Schema.Types
      - Type:

When nesting schemas, (children in the example above), always declare the child schema first before passing it into its parent.

The various built-in Mongoose Schema Types.

Using this exposed access to the Mixed SchemaType, we can use them in our schema.

The allowed index types

Adds key path / schema type pairs to this schema.

Add an alias for path. This means getting or setting the alias is equivalent to getting or setting the path.

Array of child schemas (from document arrays and single nested subdocs) and their corresponding compiled models. Each element of the array is an object with 2 properties: schema and model.

This property is typically only useful for plugin authors and advanced users. You do not need to interact with this property at all to use mongoose.

Remove all indexes from this schema.

clearIndexes only removes indexes from your schema object. Does not affect the indexes in MongoDB.

Returns a deep copy of the schema

Inherit a Schema by applying a discriminator on an existing Schema.

Iterates the schemas paths similar to Array#forEach.

The callback is passed the pathname and the schemaType instance.

Sets the encryption type of the schema, if a value is provided, otherwise returns the encryption type.

Gets a schema option.

Defines an index (most likely compound) for this schema.

Returns a list of indexes that this schema declares, via schema.index() or by index: true in a path's options. Indexes are expressed as an array [spec, options].

Plugins can use the return value of this function to modify a schema's indexes. For example, the below plugin makes every index unique by default.

Loads an ES6 class into a schema. Maps setters + getters, static methods, and instance methods to schema virtuals, statics, and methods.

Adds an instance method to documents constructed from Models compiled from this schema.

If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.

NOTE: Schema.method() adds instance methods to the Schema.methods object. You can also add instance methods directly to the Schema.methods object as seen in the guide

The original object passed to the schema constructor

Returns a new schema that has the paths from the original schema, minus the omitted ones.

This method is analagous to Lodash's omit() function for Mongoose schemas.

Gets/sets schema paths.

Sets a path (if arity 2) Gets a path (if arity 1)

Returns the pathType of path for this schema.

Given a path, returns whether it is a real, virtual, nested, or ad-hoc/undefined path.

The paths defined on this schema. The keys are the top-level paths in this schema, and the values are instances of the SchemaType class.

Returns a new schema that has the picked paths from this schema.

This method is analagous to Lodash's pick() function for Mongoose schemas.

Registers a plugin for this schema.

Defines a post hook for the document

Defines a pre hook for the model.

Adds a method call to the queue.

Removes the given path (or [paths]).

Remove an index by name or index specification.

removeIndex only removes indexes from your schema object. Does not affect the indexes in MongoDB.

Removes the given virtual or virtuals from the schema.

Returns an Array of path strings that are required by this schema.

Add an Atlas search index that Mongoose will create using Model.createSearchIndex(). This function only works when connected to MongoDB Atlas.

Sets a schema option.

Adds static "class" methods to Models compiled from this schema.

If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.

If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as statics.

Returns a JSON schema representation of this Schema.

By default, returns normal JSON schema representation, which is not typically what you want to use with MongoDB's $jsonSchema collection option. Use the useBsonType: true option to return MongoDB $jsonSchema syntax instead.

In addition to types, jsonSchema() supports the following Mongoose validators:

const schema = new Schema({ name: String }); // { required: ['_id'], properties: { name: { type: ['string', 'null'] }, _id: { type: 'string' } } } schema.toJSONSchema();

// { required: ['_id'], properties: { name: { bsonType: ['string', 'null'] }, _id: { bsonType: 'objectId' } } } schema.toJSONSchema({ useBsonType: true });

Creates a virtual type with the given name.

Returns the virtual type with the given name.

Object containing all virtuals defined on this schema. The objects' keys are the virtual paths and values are instances of VirtualType.

This property is typically only useful for plugin authors and advanced users. You do not need to interact with this property at all to use mongoose.

Reserved document keys.

Keys in this object are names that are warned in schema declarations because they have the potential to break Mongoose/ Mongoose plugins functionality. If you create a schema using new Schema() with one of these property names, Mongoose will log a warning.

NOTE: Use of these terms as method names is permitted, but play at your own risk, as they may be existing mongoose document methods you are stomping on.

schemaMaps are JSON schemas, which use the following structure to represent objects: { field: { bsonType: 'object', properties: { ... } } }

for example, a schema that looks like this { a: { b: int32 } } would be encoded as { a: { bsonType: 'object', properties: { b: < encryption configuration > } } }

This function takes an array of path segments, an output object (that gets mutated) and a value to be associated with the full path, and constructs a valid CSFLE JSON schema path for the object. This works for deeply nested properties as well.

**Examples:**

Example 1 (javascript):
```javascript
const child = new Schema({ name: String });
const schema = new Schema({ name: String, age: Number, children: [child] });
const Tree = mongoose.model('Tree', schema);

// setting schema options
new Schema({ name: String }, { id: false, autoIndex: false })
```

Example 2 (javascript):
```javascript
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
```

Example 3 (javascript):
```javascript
const Mixed = mongoose.Schema.Types.Mixed;
new mongoose.Schema({ _user: Mixed })
```

Example 4 (javascript):
```javascript
const ToySchema = new Schema();
ToySchema.add({ name: 'string', color: 'string', price: 'number' });

const TurboManSchema = new Schema();
// You can also `add()` another schema and copy over all paths, virtuals,
// getters, setters, indexes, methods, and statics.
TurboManSchema.add(ToySchema).add({ year: Number });
```

---

## SchemaTypeOptions

**URL:** https://mongoosejs.com/docs/api/schematypeoptions.html

**Contents:**
- SchemaTypeOptions
  - SchemaTypeOptions()
      - Type:
    - Example:
  - SchemaTypeOptions.prototype.cast
      - Type:
    - Example:
  - SchemaTypeOptions.prototype.default
      - Type:
  - SchemaTypeOptions.prototype.immutable

The options defined on a schematype.

Allows overriding casting logic for this individual path. If a string, the given string overwrites Mongoose's default cast error message.

The default value for this path. If a function, Mongoose executes the function and uses the return value as the default.

If truthy, Mongoose will disallow changes to this path once the document is saved to the database for the first time. Read more about immutability in Mongoose here.

If truthy, Mongoose will build an index on this path when the model is compiled.

The model that populate() should use if populating this path.

The path in the document that populate() should use to find the model to use.

If true, attach a required validator to this path, which ensures this path cannot be set to a nullish value. If a function, Mongoose calls the function and only checks for nullish values if the function returns a truthy value.

Whether to include or exclude this path by default when loading documents using find(), findOne(), etc.

If truthy, Mongoose will build a sparse index on this path.

If truthy, Mongoose will build a text index on this path.

Define a transform function for this individual schema type. Only called when calling toJSON() or toObject().

The type to cast this path to.

If truthy, Mongoose will build a unique index on this path when the model is compiled. The unique option is not a validator.

Function or object describing how to validate this schematype.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({ name: String });
schema.path('name').options instanceof mongoose.SchemaTypeOptions; // true
```

Example 2 (javascript):
```javascript
const schema = new Schema({
  num: {
    type: Number,
    cast: '{VALUE} is not a valid number'
  }
});

// Throws 'CastError: "bad" is not a valid number'
schema.path('num').cast('bad');

const Model = mongoose.model('Test', schema);
const doc = new Model({ num: 'fail' });
const err = doc.validateSync();

err.errors['num']; // 'CastError: "fail" is not a valid number'
```

Example 3 (javascript):
```javascript
const schema = Schema({
  myDate: {
    type: Date,
    transform: v => v.getFullYear()
  }
});
const Model = mongoose.model('Test', schema);

const doc = new Model({ myDate: new Date('2019/06/01') });
doc.myDate instanceof Date; // true

const res = doc.toObject({ transform: true });
res.myDate; // 2019
```

---

## SchemaObjectId

**URL:** https://mongoosejs.com/docs/api/schemaobjectid.html

**Contents:**
- SchemaObjectId
  - SchemaObjectId()
      - Parameters:
      - Inherits:
  - SchemaObjectId.cast()
      - Parameters:
      - Returns:
      - Type:
    - Example:
  - SchemaObjectId.checkRequired()

ObjectId SchemaType constructor.

Get/set the function used to cast arbitrary values to objectids.

Override the function the required validator uses to check whether a string passes the required check.

Attaches a getter for all ObjectId instances

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$in is the function Mongoose calls to cast $in filter operators.

Adds an auto-generated ObjectId default if turnOn is true.

Check if the given value satisfies a required validator.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all ObjectId instances.

**Examples:**

Example 1 (javascript):
```javascript
// Make Mongoose only try to cast length 24 strings. By default, any 12
// char string is a valid ObjectId.
const original = mongoose.ObjectId.cast();
mongoose.ObjectId.cast(v => {
  assert.ok(typeof v !== 'string' || v.length === 24);
  return original(v);
});

// Or disable casting entirely
mongoose.ObjectId.cast(false);
```

Example 2 (javascript):
```javascript
// Allow empty strings to pass `required` check
mongoose.Schema.Types.String.checkRequired(v => v != null);

const M = mongoose.model({ str: { type: String, required: true } });
new M({ str: '' }).validateSync(); // `null`, validation passes!
```

Example 3 (javascript):
```javascript
// Always convert to string when getting an ObjectId
mongoose.ObjectId.get(v => v.toString());

const Model = mongoose.model('Test', new Schema({}));
typeof (new Model({})._id); // 'string'
```

Example 4 (javascript):
```javascript
// Make all object ids have option `required` equal to true.
mongoose.Schema.ObjectId.set('required', true);

const Order = mongoose.model('Order', new Schema({ userId: ObjectId }));
new Order({ }).validateSync().errors.userId.message; // Path `userId` is required.
```

---

## SchemaBuffer

**URL:** https://mongoosejs.com/docs/api/schemabuffer.html

**Contents:**
- SchemaBuffer
  - SchemaBuffer()
      - Parameters:
      - Inherits:
  - SchemaBuffer.checkRequired()
      - Parameters:
      - Returns:
      - Type:
    - Example:
  - SchemaBuffer.get()

Buffer SchemaType constructor

Override the function the required validator uses to check whether a string passes the required check.

Attaches a getter for all Buffer instances

Contains the handlers for different query operators for this schema type. For example, $conditionalHandlers.$exists is the function Mongoose calls to cast $exists filter operators.

Check if the given value satisfies a required validator. To satisfy a required validator, a buffer must not be null or undefined and have non-zero length.

Sets the default subtype for this buffer. You can find a list of allowed subtypes here.

Returns this schema type's representation in a JSON schema.

This schema type's name, to defend against minifiers that mangle function names.

Sets a default option for all Buffer instances.

**Examples:**

Example 1 (javascript):
```javascript
// Allow empty strings to pass `required` check
mongoose.Schema.Types.String.checkRequired(v => v != null);

const M = mongoose.model({ buf: { type: Buffer, required: true } });
new M({ buf: Buffer.from('') }).validateSync(); // validation passes!
```

Example 2 (javascript):
```javascript
// Always convert to string when getting an ObjectId
mongoose.Schema.Types.Buffer.get(v => v.toString('hex'));

const Model = mongoose.model('Test', new Schema({ buf: Buffer } }));
typeof (new Model({ buf: Buffer.fromString('hello') }).buf); // 'string'
```

Example 3 (javascript):
```javascript
const s = new Schema({ uuid: { type: Buffer, subtype: 4 });
const M = db.model('M', s);
const m = new M({ uuid: 'test string' });
m.uuid._subtype; // 4
```

Example 4 (javascript):
```javascript
// Make all buffers have `required` of true by default.
mongoose.Schema.Buffer.set('required', true);

const User = mongoose.model('User', new Schema({ test: Buffer }));
new User({ }).validateSync().errors.test.message; // Path `test` is required.
```

---
