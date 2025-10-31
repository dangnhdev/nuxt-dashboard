# Mongoose - Validation

**Pages:** 1

---

## Validation

**URL:** https://mongoosejs.com/docs/validation.html

**Contents:**
- Validation
- Built-in Validators
- Custom Error Messages
- The unique Option is Not a Validator
- Custom Validators
- Async Custom Validators
- Validation Errors
- Cast Errors
- Global SchemaType Validation
- Required Validators On Nested Objects

Before we get into the specifics of validation syntax, please keep the following rules in mind:

Mongoose has several built-in validators.

Each of the validator links above provide more information about how to enable them and customize their error messages.

You can configure the error message for individual validators in your schema. There are two equivalent ways to set the validator error message:

Mongoose also supports rudimentary templating for error messages. Mongoose replaces {VALUE} with the value being validated.

A common gotcha for beginners is that the unique option for schemas is not a validator. It's a convenient helper for building MongoDB unique indexes. See the FAQ for more information.

If the built-in validators aren't enough, you can define custom validators to suit your needs.

Custom validation is declared by passing a validation function. You can find detailed instructions on how to do this in the SchemaType#validate() API docs.

Custom validators can also be asynchronous. If your validator function returns a promise (like an async function), mongoose will wait for that promise to settle. If the returned promise rejects, or fulfills with the value false, Mongoose will consider that a validation error.

Errors returned after failed validation contain an errors object whose values are ValidatorError objects. Each ValidatorError has kind, path, value, and message properties. A ValidatorError also may have a reason property. If an error was thrown in the validator, this property will contain the error that was thrown.

Before running validators, Mongoose attempts to coerce values to the correct type. This process is called casting the document. If casting fails for a given path, the error.errors object will contain a CastError object.

Casting runs before validation, and validation does not run if casting fails. That means your custom validators may assume v is null, undefined, or an instance of the type specified in your schema.

By default, Mongoose cast error messages look like Cast to Number failed for value "pie" at path "numWheels". You can overwrite Mongoose's default cast error message by the cast option on your SchemaType to a string as follows.

Mongoose's cast error message templating supports the following parameters:

You can also define a function that Mongoose will call to get the cast error message as follows.

In addition to defining custom validators on individual schema paths, you can also configure a custom validator to run on every instance of a given SchemaType. For example, the following code demonstrates how to make empty string '' an invalid value for all string paths.

Defining validators on nested objects in mongoose is tricky, because nested objects are not fully fledged paths.

In the above examples, you learned about document validation. Mongoose also supports validation for update(), updateOne(), updateMany(), and findOneAndUpdate() operations. Update validators are off by default - you need to specify the runValidators option.

To turn on update validators, set the runValidators option for update(), updateOne(), updateMany(), or findOneAndUpdate(). Be careful: update validators are off by default because they have several caveats.

There are a couple of key differences between update validators and document validators. In the color validation function below, this refers to the document being validated when using document validation. However, when running update validators, this refers to the query object instead of the document. Because queries have a neat .get() function, you can get the updated value of the property you want.

The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed.

When using update validators, required validators only fail when you try to explicitly $unset the key.

One final detail worth noting: update validators only run on the following update operators:

For instance, the below update will succeed, regardless of the value of number, because update validators ignore $inc.

Also, $push, $addToSet, $pull, and $pullAll validation does not run any validation on the array itself, only individual elements of the array.

Now that we've covered Validation, let's take a look at Middleware.

**Examples:**

Example 1 (javascript):
```javascript
const schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const Cat = db.model('Cat', schema);

// This cat has no name :(
const cat = new Cat();

let error;
try {
  await cat.save();
} catch (err) {
  error = err;
}

assert.equal(error.errors['name'].message,
  'Path `name` is required.');

error = cat.validateSync();
assert.equal(error.errors['name'].message,
  'Path `name` is required.');
```

Example 2 (javascript):
```javascript
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea'],
    required: function() {
      return this.bacon > 3;
    }
  }
});
const Breakfast = db.model('Breakfast', breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  bacon: 0,
  drink: 'Milk'
});
let error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Too few eggs');
assert.ok(!error.errors['bacon']);
assert.equal(error.errors['drink'].message,
  '`Milk` is not a valid enum value for path `drink`.');

badBreakfast.bacon = 5;
badBreakfast.drink = null;

error = badBreakfast.validateSync();
assert.equal(error.errors['drink'].message, 'Path `drink` is required.');

badBreakfast.bacon = null;
error = badBreakfast.validateSync();
assert.equal(error.errors['bacon'].message, 'Why no bacon?');
```

Example 3 (javascript):
```javascript
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Must be at least 6, got {VALUE}'],
    max: 12
  },
  drink: {
    type: String,
    enum: {
      values: ['Coffee', 'Tea'],
      message: '{VALUE} is not supported'
    }
  }
});
const Breakfast = db.model('Breakfast', breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  drink: 'Milk'
});
const error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Must be at least 6, got 2');
assert.equal(error.errors['drink'].message, 'Milk is not supported');
```

Example 4 (javascript):
```javascript
const uniqueUsernameSchema = new Schema({
  username: {
    type: String,
    unique: true
  }
});
const U1 = db.model('U1', uniqueUsernameSchema);
const U2 = db.model('U2', uniqueUsernameSchema);

const dup = [{ username: 'Val' }, { username: 'Val' }];
// Race condition! This may save successfully, depending on whether
// MongoDB built the index before writing the 2 docs.
U1.create(dup).
  then(() => {
  }).
  catch(err => {
  });

// You need to wait for Mongoose to finish building the `unique`
// index before writing. You only need to build indexes once for
// a given collection, so you normally don't need to do this
// in production. But, if you drop the database between tests,
// you will need to use `init()` to wait for the index build to finish.
U2.init().
  then(() => U2.create(dup)).
  catch(error => {
    // `U2.create()` will error, but will *not* be a mongoose validation error, it will be
    // a duplicate key error.
    // See: https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
    assert.ok(error);
    assert.ok(!error.errors);
    assert.ok(error.message.indexOf('duplicate key error') !== -1);
  });
```

---
