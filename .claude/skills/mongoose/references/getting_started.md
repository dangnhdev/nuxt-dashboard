# Mongoose - Getting Started

**Pages:** 2

---

## Getting Started

**URL:** https://mongoosejs.com/docs/index.html

**Contents:**
- Getting Started
- Congratulations

First be sure you have MongoDB and Node.js installed.

Next install Mongoose from the command line using npm:

Now say we like fuzzy kittens and want to record every kitten we ever meet in MongoDB. The first thing we need to do is include mongoose in our project and open a connection to the test database on our locally running instance of MongoDB.

For brevity, let's assume that all following code is within the main() function.

With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.

So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.

A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:

We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.

Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

This performs a search for all documents with a name property that begins with "fluff" and returns the result as an array of kittens to the callback.

That's the end of our quick start. We created a schema, added a custom document method, saved and queried kittens in MongoDB using Mongoose. Head over to the guide, or API docs for more.

**Examples:**

Example 1 (unknown):
```unknown
npm install mongoose
```

Example 2 (javascript):
```javascript
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

Example 3 (javascript):
```javascript
const kittySchema = new mongoose.Schema({
  name: String
});
```

Example 4 (javascript):
```javascript
const Kitten = mongoose.model('Kitten', kittySchema);
```

---

## Getting Started

**URL:** https://mongoosejs.com/docs/

**Contents:**
- Getting Started
- Congratulations

First be sure you have MongoDB and Node.js installed.

Next install Mongoose from the command line using npm:

Now say we like fuzzy kittens and want to record every kitten we ever meet in MongoDB. The first thing we need to do is include mongoose in our project and open a connection to the test database on our locally running instance of MongoDB.

For brevity, let's assume that all following code is within the main() function.

With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.

So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.

A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:

We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.

Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

This performs a search for all documents with a name property that begins with "fluff" and returns the result as an array of kittens to the callback.

That's the end of our quick start. We created a schema, added a custom document method, saved and queried kittens in MongoDB using Mongoose. Head over to the guide, or API docs for more.

**Examples:**

Example 1 (unknown):
```unknown
npm install mongoose
```

Example 2 (javascript):
```javascript
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

Example 3 (javascript):
```javascript
const kittySchema = new mongoose.Schema({
  name: String
});
```

Example 4 (javascript):
```javascript
const Kitten = mongoose.model('Kitten', kittySchema);
```

---
