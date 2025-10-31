# Mongoose - Api

**Pages:** 7

---

## VirtualType

**URL:** https://mongoosejs.com/docs/api/virtualtype.html

**Contents:**
- VirtualType
  - VirtualType()
      - Parameters:
    - Example:
  - VirtualType.prototype.applyGetters()
      - Parameters:
      - Returns:
  - VirtualType.prototype.applySetters()
      - Parameters:
      - Returns:

VirtualType constructor

This is what mongoose uses to define virtual attributes via Schema.prototype.virtual.

Applies getters to value.

Applies setters to value.

Adds a custom getter to this virtual.

Mongoose calls the getter function with the below 3 parameters.

Adds a custom setter to this virtual.

Mongoose calls the setter function with the below 3 parameters.

**Examples:**

Example 1 (javascript):
```javascript
const fullname = schema.virtual('fullname');
fullname instanceof mongoose.VirtualType // true
```

Example 2 (javascript):
```javascript
const virtual = schema.virtual('fullname');
virtual.get(function(value, virtual, doc) {
  return this.name.first + ' ' + this.name.last;
});
```

Example 3 (javascript):
```javascript
const virtual = schema.virtual('fullname');
virtual.set(function(value, virtual, doc) {
  const parts = value.split(' ');
  this.name.first = parts[0];
  this.name.last = parts[1];
});

const Model = mongoose.model('Test', schema);
const doc = new Model();
// Calls the setter with `value = 'Jean-Luc Picard'`
doc.fullname = 'Jean-Luc Picard';
doc.name.first; // 'Jean-Luc'
doc.name.last; // 'Picard'
```

---

## Map

**URL:** https://mongoosejs.com/docs/api/map.html

**Contents:**
- Map
  - MongooseMap.prototype.$isMongooseMap
      - Type:
  - MongooseMap.prototype.clear()
  - MongooseMap.prototype.delete()
  - MongooseMap.prototype.get()
  - MongooseMap.prototype.set()
    - Example:
  - MongooseMap.prototype.toBSON()
  - MongooseMap.prototype.toJSON()

Set to true for all Mongoose map instances

Overwrites native Map's clear() function to support change tracking.

Overwrites native Map's delete() function to support change tracking.

Overwrites native Map's get() function to support Mongoose getters.

Overwrites native Map's set() function to support setters, populate(), and change tracking. Note that Mongoose maps only support strings and ObjectIds as keys.

Converts this map to a native JavaScript Map so the MongoDB driver can serialize it.

Converts this map to a native JavaScript Map for JSON.stringify(). Set the flattenMaps option to convert this map to a POJO instead.

**Examples:**

Example 1 (unknown):
```unknown
doc.myMap.set('test', 42); // works
doc.myMap.set({ obj: 42 }, 42); // Throws "Mongoose maps only support string keys"
doc.myMap.set(10, 42); // Throws "Mongoose maps only support string keys"
doc.myMap.set("$test", 42); // Throws "Mongoose maps do not support keys that start with "$", got "$test""
```

Example 2 (unknown):
```unknown
doc.myMap.toJSON() instanceof Map; // true
doc.myMap.toJSON({ flattenMaps: true }) instanceof Map; // false
```

---

## Array

**URL:** https://mongoosejs.com/docs/api/array.html

**Contents:**
- Array
  - MongooseArray.prototype.$pop()
      - See:
    - NOTE:
  - MongooseArray.prototype.$shift()
      - See:
    - Note:
  - MongooseArray.prototype.addToSet()
      - Parameters:
      - Returns:

Pops the array atomically at most one time per document save().

Calling this multiple times on an array before saving sends the same command as calling it once. This update is implemented using the MongoDB $pop method which enforces this restriction.

Atomically shifts the array at most one time per document save().

Calling this multiple times on an array before saving sends the same command as calling it once. This update is implemented using the MongoDB $pop method which enforces this restriction.

Adds values to the array if not already present.

Return whether or not the obj is included in the array.

Return the index of obj or -1 if not found.

Helper for console.log

Pushes items to the array non-atomically.

marks the entire array as modified, which if saved, will store it as a $set operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.

Wraps Array#pop with proper change tracking.

marks the entire array as modified which will pass the entire thing to $set potentially overwriting any changes that happen between when you retrieved the object and when you save it.

Pulls items from the array atomically. Equality is determined by casting the provided value to an embedded document and comparing using the Document.equals() function.

To remove a document from a subdocument array we may pass an object with a matching _id.

Or we may passing the _id directly and let mongoose take care of it.

The first pull call will result in a atomic operation on the database, if pull is called repeatedly without saving the document, a $set operation is used on the complete array instead, overwriting possible changes that happened on the database in the meantime.

Wraps Array#push with proper change tracking.

Sets the casted val at index i and marks the array modified.

Wraps Array#shift with proper change tracking.

marks the entire array as modified, which if saved, will store it as a $set operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.

Wraps Array#sort with proper change tracking.

marks the entire array as modified, which if saved, will store it as a $set operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.

Wraps Array#splice with proper change tracking and casting.

marks the entire array as modified, which if saved, will store it as a $set operation, potentially overwritting any changes that happen between when you retrieved the object and when you save it.

Returns a native js Array.

Wraps Array#unshift with proper change tracking.

marks the entire array as modified, which if saved, will store it as a $set operation, potentially overwriting any changes that happen between when you retrieved the object and when you save it.

**Examples:**

Example 1 (javascript):
```javascript
doc.array = [1,2,3];

 const popped = doc.array.$pop();
 console.log(popped); // 3
 console.log(doc.array); // [1,2]

 // no affect
 popped = doc.array.$pop();
 console.log(doc.array); // [1,2]

 doc.save(function (err) {
   if (err) return handleError(err);

   // we saved, now $pop works again
   popped = doc.array.$pop();
   console.log(popped); // 2
   console.log(doc.array); // [1]
 })
```

Example 2 (javascript):
```javascript
doc.array = [1,2,3];

 const shifted = doc.array.$shift();
 console.log(shifted); // 1
 console.log(doc.array); // [2,3]

 // no affect
 shifted = doc.array.$shift();
 console.log(doc.array); // [2,3]

 doc.save(function (err) {
   if (err) return handleError(err);

   // we saved, now $shift works again
   shifted = doc.array.$shift();
   console.log(shifted ); // 2
   console.log(doc.array); // [3]
 })
```

Example 3 (javascript):
```javascript
console.log(doc.array) // [2,3,4]
const added = doc.array.addToSet(4,5);
console.log(doc.array) // [2,3,4,5]
console.log(added)     // [5]
```

Example 4 (unknown):
```unknown
doc.array.pull(ObjectId)
doc.array.pull({ _id: 'someId' })
doc.array.pull(36)
doc.array.pull('tag 1', 'tag 2')
```

---

## Uuid

**URL:** https://mongoosejs.com/docs/api/uuid.html

**Contents:**
- Uuid
  - UUID()
    - Example:

UUID type constructor

**Examples:**

Example 1 (javascript):
```javascript
const id = new mongoose.Types.UUID();
```

---

## Error

**URL:** https://mongoosejs.com/docs/api/error.html

**Contents:**
- Error
  - Error()
      - Parameters:
      - Type:
      - Inherits:
    - Example:
  - Error.CastError
      - Type:
  - Error.DivergentArrayError
      - Type:

MongooseError constructor. MongooseError is the base class for all Mongoose-specific errors.

An instance of this error class will be thrown when mongoose failed to cast a value.

An instance of this error will be thrown if you used an array projection and then modified the array in an unsafe way.

An instance of this error class will be thrown when save() fails because the underlying document was not found. The constructor takes one parameter, the conditions that mongoose passed to updateOne() when trying to update the document.

Thrown when you try to access a model that has not been registered yet

Thrown when some documents failed to save when calling bulkSave()

Thrown when the MongoDB Node driver can't connect to a valid server to send an operation to.

Thrown when a model with the given name was already registered on the connection. See the FAQ about OverwriteModelError.

An instance of this error class will be thrown when you call save() multiple times on the same document in parallel. See the FAQ for more information.

Thrown when your try to pass values to model constructor that were not specified in schema or change immutable properties when strict mode is "throw"

An instance of this error class will be returned when mongoose failed to populate with a path that is not existing.

An instance of this error class will be thrown when validation failed. The errors property contains an object whose keys are the paths that failed and whose values are instances of CastError or ValidationError.

A ValidationError has a hash of errors that contain individual ValidatorError instances.

Instances of ValidatorError have the following properties:

An instance of this error class will be thrown when you call save() after the document in the database was changed in a potentially unsafe way. See the versionKey option for more information.

The default built-in validator error messages.

The name of the error. The name uniquely identifies this Mongoose error. The possible values are:

**Examples:**

Example 1 (javascript):
```javascript
const Model = mongoose.model('Test', new mongoose.Schema({ answer: Number }));
const doc = new Model({ answer: 'not a number' });
const err = doc.validateSync();

err instanceof mongoose.Error.ValidationError; // true
```

Example 2 (javascript):
```javascript
const schema = Schema({ name: { type: String, required: true } });
const Model = mongoose.model('Test', schema);
const doc = new Model({});

// Top-level error is a ValidationError, **not** a ValidatorError
const err = doc.validateSync();
err instanceof mongoose.Error.ValidationError; // true

// A ValidationError `err` has 0 or more ValidatorErrors keyed by the
// path in the `err.errors` property.
err.errors['name'] instanceof mongoose.Error.ValidatorError;

err.errors['name'].kind; // 'required'
err.errors['name'].path; // 'name'
err.errors['name'].value; // undefined
```

---

## Decimal128

**URL:** https://mongoosejs.com/docs/api/decimal128.html

**Contents:**
- Decimal128
  - Decimal128()
    - Example:

Decimal128 type constructor

**Examples:**

Example 1 (javascript):
```javascript
const id = new mongoose.Types.Decimal128('3.1415');
```

---

## Buffer

**URL:** https://mongoosejs.com/docs/api/buffer.html

**Contents:**
- Buffer
  - MongooseBuffer.mixin.copy()
      - Parameters:
      - Returns:
      - Type:
    - Note:
  - MongooseBuffer.mixin.equals()
      - Parameters:
      - Returns:
  - MongooseBuffer.mixin.subtype()

Buffer#copy does not mark target as modified so you must copy from a MongooseBuffer for it to work as expected. This is a work around since copy modifies the target, not this.

Determines if this buffer is equals to other buffer

Sets the subtype option and marks the buffer modified.

Converts this buffer for storage in MongoDB, including subtype

Converts this buffer to its Binary type representation.

Converts this buffer to a UUID. Throws an error if subtype is not 4.

**Examples:**

Example 1 (javascript):
```javascript
const bson = require('bson')
bson.BSON_BINARY_SUBTYPE_DEFAULT
bson.BSON_BINARY_SUBTYPE_FUNCTION
bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY
bson.BSON_BINARY_SUBTYPE_UUID
bson.BSON_BINARY_SUBTYPE_MD5
bson.BSON_BINARY_SUBTYPE_USER_DEFINED

doc.buffer.subtype(bson.BSON_BINARY_SUBTYPE_UUID);
```

Example 2 (javascript):
```javascript
const bson = require('bson')
bson.BSON_BINARY_SUBTYPE_DEFAULT
bson.BSON_BINARY_SUBTYPE_FUNCTION
bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY
bson.BSON_BINARY_SUBTYPE_UUID
bson.BSON_BINARY_SUBTYPE_MD5
bson.BSON_BINARY_SUBTYPE_USER_DEFINED
doc.buffer.toObject(bson.BSON_BINARY_SUBTYPE_USER_DEFINED);
```

---
