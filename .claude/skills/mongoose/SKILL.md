---
name: mongoose
description: Use when working with MongoDB and Mongoose ODM - schemas, models, queries, validation, middleware, population, and database operations
---

# Mongoose Skill

Comprehensive assistance với Mongoose ODM cho MongoDB, tập trung vào các patterns thực tế và code examples rõ ràng.

## When to Use This Skill

Trigger skill này khi bạn cần:

**Database Operations:**
- Kết nối đến MongoDB database
- Tạo, đọc, update, delete documents (CRUD)
- Query với filters, sort, limit, pagination
- Aggregate data (grouping, calculations, pipeline)

**Schema & Models:**
- Define schemas với validation rules
- Tạo models từ schemas
- Nested schemas và subdocuments
- Schema types (String, Number, Date, ObjectId, etc.)

**Advanced Features:**
- Population (join data giữa collections)
- Middleware (pre/post hooks)
- Virtual properties (computed fields)
- Custom validators và methods
- Transactions

**Debug & Issues:**
- Connection errors
- Validation errors
- Cast errors
- Query optimization

## Quick Reference

### 1. Connect to MongoDB

**Basic connection:**
```javascript
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('Connected to MongoDB');
}

main().catch(err => console.log(err));
```

**Connection với authentication:**
```javascript
await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
```

### 2. Define Schema & Model

**Simple schema:**
```javascript
const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
```

**Schema with validation:**
```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, min: 0, max: 120 }
});

const User = mongoose.model('User', userSchema);
```

### 3. Create & Save Documents

**Create document:**
```javascript
const fluffy = new Kitten({ name: 'fluffy' });
await fluffy.save();
```

**Create multiple documents:**
```javascript
await User.create([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
]);
```

### 4. Query Documents

**Find all:**
```javascript
const kittens = await Kitten.find();
console.log(kittens);
```

**Find with filter (regex):**
```javascript
// Find kittens whose name starts with "fluff"
const kittens = await Kitten.find({ name: /^fluff/ });
```

**Find by ID:**
```javascript
const doc = await MyModel.findById('507f1f77bcf86cd799439011');
```

### 5. Update Documents

**Update using save():**
```javascript
const doc = await MyModel.findOne();
doc.name = 'foo';
await doc.save(); // Mongoose sends updateOne({ _id: doc._id }, { $set: { name: 'foo' } })
```

**Find and update:**
```javascript
const updatedDoc = await Model.findByIdAndUpdate(
  id,
  { name: 'New Name' },
  { new: true, runValidators: true }
);
```

### 6. Delete Documents

**Delete one:**
```javascript
await Model.deleteOne({ name: 'foo' });
```

**Delete many:**
```javascript
await Model.deleteMany({ age: { $lt: 18 } });
```

**Find and delete:**
```javascript
const deletedDoc = await Model.findOneAndDelete({ name: 'foo' });
```

### 7. Validation

**Built-in validators:**
```javascript
const schema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  age: { type: Number, min: [0, 'Age must be positive'], max: 120 }
});
```

**Custom validator:**
```javascript
const schema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  }
});
```

**Validate before save:**
```javascript
const Model = mongoose.model('Test', new mongoose.Schema({ answer: Number }));
const doc = new Model({ answer: 'not a number' });
const err = doc.validateSync();

if (err instanceof mongoose.Error.ValidationError) {
  console.log('Validation failed!');
}
```

### 8. Virtual Properties

**Define virtuals:**
```javascript
const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// Getter
personSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// Setter
personSchema.virtual('fullName').set(function(value) {
  const parts = value.split(' ');
  this.firstName = parts[0];
  this.lastName = parts[1];
});

const Model = mongoose.model('Person', personSchema);
const doc = new Model();
doc.fullName = 'Jean-Luc Picard';
console.log(doc.firstName); // 'Jean-Luc'
console.log(doc.lastName); // 'Picard'
```

### 9. Middleware (Hooks)

**Pre-save hook:**
```javascript
userSchema.pre('save', async function(next) {
  // Hash password before saving
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
```

**Post-save hook:**
```javascript
userSchema.post('save', function(doc, next) {
  console.log('%s has been saved', doc._id);
  next();
});
```

### 10. Transactions

**Basic transaction:**
```javascript
// Using Mongoose's default connection
const session = await mongoose.startSession();

await session.withTransaction(async () => {
  await Customer.create([{ name: 'Test' }], { session });
});

await session.endSession();
```

**Transaction with Connection:**
```javascript
const session = await db.startSession();

await session.withTransaction(async () => {
  const doc = await Model.findOne({ name: 'Test' }, null, { session });
  doc.status = 'active';
  await doc.save(); // Uses session automatically
});

await session.endSession();
```

## Key Concepts

### Schema Types
- `String` - text data
- `Number` - integers và floats
- `Date` - timestamps
- `Boolean` - true/false
- `ObjectId` - references đến documents khác
- `Array` - lists of values
- `Map` - key-value pairs (ES6 Map)
- `Buffer` - binary data
- `Mixed` - any type (use carefully)
- `Decimal128` - high precision decimals
- `UUID` - unique identifiers

### Documents vs Models
- **Model**: Class để construct documents (e.g., `mongoose.model('User', schema)`)
- **Document**: Instance của model (e.g., `new User({ name: 'John' })`)
- Document có methods: `save()`, `validate()`, `toObject()`, etc.
- Model có static methods: `find()`, `create()`, `updateOne()`, etc.

### Query Operators
- `$gt` / `$gte` - greater than / equal
- `$lt` / `$lte` - less than / equal
- `$in` / `$nin` - in array / not in array
- `$ne` - not equal
- `$or` / `$and` - logical operators
- `$regex` - pattern matching
- `$exists` - field exists

### Update Operators
- `$set` - set field value
- `$inc` - increment number
- `$push` - add to array
- `$pull` - remove from array
- `$addToSet` - add unique to array
- `$pop` - remove first/last from array
- `$unset` - remove field

### Mongoose Arrays
- `doc.array.$pop()` - atomically pop array
- `doc.array.$shift()` - atomically shift array
- `doc.array.addToSet()` - add if not exists
- `doc.array.pull()` - remove matching elements
- `doc.array.push()` - add elements
- Array methods mark document as modified

## Reference Files

Documentation được tổ chức trong `references/`:

- **getting_started.md** (2 pages)
  - Setup và basic usage
  - Install Mongoose, connect DB, first schema
  - Create models, save documents, basic queries

- **schemas.md**
  - Schema definition và types
  - Validation rules, default values
  - Virtual properties, methods, statics
  - Schema options và middleware

- **models.md** (15 pages)
  - Model creation và compilation
  - CRUD operations (create, read, update, delete)
  - Static methods, instance methods
  - Model.bulkWrite(), Model.aggregate()
  - AWS Lambda integration
  - Documents lifecycle

- **queries.md**
  - Query syntax và filters
  - Sorting, pagination, limiting
  - Query helpers và chains
  - Lean queries (plain objects)
  - Query middleware

- **validation.md**
  - Built-in validators (required, min, max, etc.)
  - Custom validation functions
  - Error handling (ValidationError, ValidatorError)
  - Async validators
  - Update validators (runValidators option)

- **middleware.md**
  - Pre/post hooks
  - Document middleware (save, validate, remove)
  - Query middleware (find, update, delete)
  - Aggregate middleware
  - Error handling middleware

- **population.md**
  - Cross-collection references (ObjectId refs)
  - Populate options (select, match, sort)
  - Nested population
  - Virtual populate
  - Dynamic references

- **connections.md** (5 pages)
  - Connection options và strings
  - Multiple connections
  - Connection events và error handling
  - Connection pooling
  - FAQ (common issues)
  - Transactions

- **plugins.md**
  - Create reusable schema logic
  - Plugin structure và API
  - Apply plugins globally/locally
  - Popular plugins

- **api.md** (7 pages)
  - Complete API reference
  - VirtualType, Map, Array, Buffer, UUID
  - Error types (CastError, ValidationError, etc.)
  - Decimal128, ObjectId

Use `view references/<file>` để đọc chi tiết.

## Working with This Skill

### For Beginners
1. **Start with getting_started.md** - learn connection và basic CRUD
2. **Read schemas.md** - understand schema definition và types
3. **Practice với models.md** - create your first models
4. **Check Quick Reference** ở trên cho common patterns

### For Intermediate Users
- **queries.md** - advanced query techniques, aggregation
- **validation.md** - custom validators và error handling
- **population.md** - join data across collections (like SQL joins)
- **middleware.md** - add hooks to your models (pre/post save, etc.)

### For Advanced Users
- **plugins.md** - create reusable functionality across schemas
- **connections.md** - manage multiple connections, transactions
- **api.md** - deep dive vào API details, custom types
- **models.md** - bulkWrite, AWS Lambda integration

### Common Workflows

**Setup new project:**
1. Install: `npm install mongoose`
2. Connect to MongoDB: `await mongoose.connect(uri)`
3. Define schemas: `new mongoose.Schema({ ... })`
4. Create models: `mongoose.model('Name', schema)`
5. Start querying: `await Model.find()`

**Debug connection issues:**
1. Check MongoDB is running: `mongod` or Atlas connection
2. Verify connection string format
3. Check network/firewall rules
4. Enable debug: `mongoose.set('debug', true)`

**Handle validation errors:**
```javascript
try {
  await doc.save();
} catch (err) {
  if (err.name === 'ValidationError') {
    Object.keys(err.errors).forEach(key => {
      console.log(err.errors[key].message);
    });
  }
}
```

**Optimize queries:**
1. Use indexes: `schema.index({ email: 1 })`
2. Use `.lean()` for read-only: `Model.find().lean()`
3. Select only needed fields: `Model.find().select('name email')`
4. Limit results: `Model.find().limit(10)`

## Best Practices

✅ **Always use schemas** - define structure cho consistency và validation

✅ **Enable validation** - catch errors trước khi save to DB

✅ **Use indexes** - improve query performance dramatically
```javascript
schema.index({ email: 1 }, { unique: true });
```

✅ **Handle errors properly** - try/catch cho async operations

✅ **Avoid Mixed type** - always define specific types cho better validation

✅ **Use lean() for read-only** - faster queries khi không cần document methods
```javascript
const users = await User.find().lean(); // Returns plain JS objects
```

✅ **Connection pooling** - reuse connections, đừng create/destroy mỗi operation

✅ **Use transactions** - cho related operations that must succeed/fail together

✅ **Use save() for updates** - get full validation và middleware
```javascript
// Good: Full validation + middleware
const doc = await Model.findById(id);
doc.name = 'New Name';
await doc.save();

// Alternative: Limited validation (needs runValidators: true)
await Model.updateOne({ _id: id }, { name: 'New Name' }, { runValidators: true });
```

## Common Pitfalls

### ❌ Forgetting to await
```javascript
// Wrong
const user = User.findOne({ email: 'john@example.com' });
console.log(user.name); // undefined! findOne returns Promise
```

✅ **Always await async operations:**
```javascript
// Correct
const user = await User.findOne({ email: 'john@example.com' });
console.log(user.name); // Works!
```

### ❌ Mixing callbacks and promises
```javascript
// Wrong - executes query TWICE!
Model.find({ name: 'foo' }, callback).then(docs => { ... });
```

✅ **Use only promises:**
```javascript
// Correct
const docs = await Model.find({ name: 'foo' });
```

### ❌ Not handling unique index errors
```javascript
// This can fail silently or crash
await User.create({ email: 'duplicate@example.com' });
```

✅ **Always handle duplicate key errors:**
```javascript
try {
  await User.create({ email: 'duplicate@example.com' });
} catch (err) {
  if (err.code === 11000) {
    console.log('Email already exists');
  }
}
```

### ❌ Forgetting to call Model.init()
```javascript
// unique index not built yet!
const schema = new mongoose.Schema({ name: { type: String, unique: true } });
const Model = mongoose.model('Test', schema);
await Model.create([{ name: 'Val' }, { name: 'Val' }]); // No error!
```

✅ **Wait for indexes to build:**
```javascript
await Model.init(); // Build indexes first
await Model.create([{ name: 'Val' }, { name: 'Val' }]); // Throws duplicate key error
```

### ❌ Using arrow functions for virtuals/methods
```javascript
// Wrong - 'this' doesn't work!
personSchema.virtual('fullName').get(() => {
  return this.firstName + ' ' + this.lastName; // 'this' is undefined!
});
```

✅ **Use regular functions:**
```javascript
// Correct
personSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName; // 'this' is the document
});
```

### ❌ Not using lean() for read-only queries
```javascript
// Slow - creates full Mongoose documents
const users = await User.find(); // ~5-10x slower
```

✅ **Use lean() when you don't need document methods:**
```javascript
// Fast - returns plain JS objects
const users = await User.find().lean(); // ~5-10x faster
```

## Troubleshooting

### Connection timeout errors
```
Operation timed out after 10000 ms
```

**Causes:**
- MongoDB not running
- Wrong connection string
- Network/firewall issues
- Atlas IP whitelist not configured

**Solutions:**
1. Verify MongoDB is running: `mongod` or check Atlas
2. Check connection string format
3. For Atlas: whitelist IP (0.0.0.0/0 for all)
4. Increase timeout: `mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })`

### Validation errors not working
```javascript
// No validation error even though email is invalid
await User.create({ email: 'not-an-email' });
```

**Cause:** No validators defined in schema

**Solution:** Add validators:
```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: v => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
      message: 'Invalid email format'
    }
  }
});
```

### Unique not working
```javascript
// Can save duplicates even with unique: true
await User.create([{ email: 'same@email.com' }, { email: 'same@email.com' }]);
```

**Cause:** Index not built yet

**Solution:** Wait for indexes:
```javascript
await User.init(); // Build indexes
await User.create([{ email: 'same@email.com' }, { email: 'same@email.com' }]); // Now throws error
```

### Updates not validated
```javascript
// Invalid data saved even with validators
await User.updateOne({ _id: id }, { age: -5 }); // Saved even if min: 0
```

**Cause:** Update operations skip validation by default

**Solution:** Enable runValidators:
```javascript
await User.updateOne(
  { _id: id },
  { age: -5 },
  { runValidators: true } // Now throws validation error
);
```

## Resources

### Official Links
- [Mongoose Docs](https://mongoosejs.com) - Official documentation
- [MongoDB Manual](https://docs.mongodb.com) - MongoDB docs
- [GitHub](https://github.com/Automattic/mongoose) - Source code
- [Stack Overflow](https://stackoverflow.com/questions/tagged/mongoose) - Community Q&A

### Quick Commands
```bash
# Install Mongoose
npm install mongoose

# Run MongoDB locally (with data directory)
mongod --dbpath /path/to/data

# MongoDB shell (new version)
mongosh

# MongoDB shell (old version)
mongo
```

### Useful Snippets

**Enable debug mode:**
```javascript
mongoose.set('debug', true); // Log all queries
```

**Check connection status:**
```javascript
console.log(mongoose.connection.readyState);
// 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
```

**Global plugins:**
```javascript
// Apply plugin to all schemas
mongoose.plugin(require('mongoose-autopopulate'));
```

## Notes

- Skill này được auto-generated từ official Mongoose documentation
- Code examples đã được extracted từ real documentation pages
- Quick Reference prioritize practical, common use cases
- Reference files preserve full documentation details với table of contents
- Examples có language detection cho syntax highlighting
- Patterns extracted từ "Example:", "Pattern:", "Usage:" markers trong docs
