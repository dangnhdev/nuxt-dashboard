# Mongoose - Population

**Pages:** 1

---

## Populate

**URL:** https://mongoosejs.com/docs/populate.html

**Contents:**
- Populate
- Saving refs
- Population
- Setting Populated Fields
- Checking Whether a Field is Populated
- What If There's No Foreign Document?
- Field Selection
- Populating Multiple Paths
- Query conditions and other options
- limit vs. perDocumentLimit

MongoDB has the join-like $lookup aggregation operator in versions >= 3.2. Mongoose has a more powerful alternative called populate(), which lets you reference documents in other collections.

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.

So far we've created two Models. Our Person model has its stories field set to an array of ObjectIds. The ref option is what tells Mongoose which model to use during population, in our case the Story model. All _ids we store here must be document _ids from the Story model.

Saving refs to other documents works the same way you normally save properties, just assign the _id value:

You can set the ref option on ObjectId, Number, String, and Buffer paths. populate() works with ObjectIds, numbers, strings, and buffers. However, we recommend using ObjectIds as _id properties (and thus ObjectIds for ref properties) unless you have a good reason not to. That is because MongoDB will set _id to an ObjectId if you create a new document without an _id property, so if you make your _id property a Number, you need to be extra careful not to insert a document without a numeric _id.

So far we haven't done anything much different. We've merely created a Person and a Story. Now let's take a look at populating our story's author using the query builder:

Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.

Arrays of refs work the same way. Just call the populate method on the query and an array of documents will be returned in place of the original _ids.

You can manually populate a property by setting it to a document. The document must be an instance of the model your ref property refers to.

You can also push documents or POJOs onto a populated array, and Mongoose will add those documents if their ref matches.

If you push a non-POJO and non-document value, like an ObjectId, Mongoose >= 8.7.0 will depopulate the entire array.

You can call the populated() function to check whether a field is populated. If populated() returns a truthy value, you can assume the field is populated.

A common reason for checking whether a path is populated is getting the author id. However, for your convenience, Mongoose adds a _id getter to ObjectId instances so you can use story.author._id regardless of whether author is populated.

Mongoose populate doesn't behave like conventional SQL joins. When there's no document, story.author will be null. This is analogous to a left join in SQL.

If you have an array of authors in your storySchema, populate() will give you an empty array instead.

What if we only want a few specific fields returned for the populated documents? This can be accomplished by passing the usual field name syntax as the second argument to the populate method:

What if we wanted to populate multiple paths at the same time?

If you call populate() multiple times with the same path, only the last one will take effect.

What if we wanted to populate our fans array based on their age and select just their names?

The match option doesn't filter out Story documents. If there are no documents that satisfy match, you'll get a Story document with an empty fans array.

For example, suppose you populate() a story's author and the author doesn't satisfy match. Then the story's author will be null.

In general, there is no way to make populate() filter stories based on properties of the story's author. For example, the below query won't return any results, even though author is populated.

If you want to filter stories by their author's name, you should use denormalization.

Populate does support a limit option, however, it currently does not limit on a per-document basis for backwards compatibility. For example, suppose you have 2 stories:

If you were to populate() using the limit option, you would find that the 2nd story has 0 fans:

That's because, in order to avoid executing a separate query for each document, Mongoose instead queries for fans using numDocuments * limit as the limit. If you need the correct limit, you should use the perDocumentLimit option (new in Mongoose 5.9.0). Just keep in mind that populate() will execute a separate query for each story, which may cause populate() to be slower.

We may find however, if we use the author object, we are unable to get a list of the stories. This is because no story objects were ever 'pushed' onto author.stories.

There are two perspectives here. First, you may want the author to know which stories are theirs. Usually, your schema should resolve one-to-many relationships by having a parent pointer in the 'many' side. But, if you have a good reason to want an array of child pointers, you can push() documents onto the array as shown below.

This allows us to perform a find and populate combo:

It is debatable that we really want two sets of pointers as they may get out of sync. Instead we could skip populating and directly find() the stories we are interested in.

The documents returned from query population become fully functional, removeable, saveable documents unless the lean option is specified. Do not confuse them with sub docs. Take caution when calling its remove method because you'll be removing it from the database, not just the array.

If you have an existing mongoose document and want to populate some of its paths, you can use the Document#populate() method.

The Document#populate() method does not support chaining. You need to call populate() multiple times, or with an array of paths, to populate multiple paths

If we have one or many mongoose documents or even plain objects (like mapReduce output), we may populate them using the Model.populate() method. This is what Document#populate() and Query#populate() use to populate documents.

Say you have a user schema which keeps track of the user's friends.

Populate lets you get a list of a user's friends, but what if you also wanted a user's friends of friends? Specify the populate option to tell mongoose to populate the friends array of all the user's friends:

Let's say you have a schema representing events, and a schema representing conversations. Each event has a corresponding conversation thread.

In the above example, events and conversations are stored in separate MongoDB databases. String ref will not work in this situation, because Mongoose assumes a string ref refers to a model name on the same connection. In the above example, the conversation model is registered on db2, not db1.

This is known as a "cross-database populate," because it enables you to populate across MongoDB databases and even across MongoDB instances.

If you don't have access to the model instance when defining your eventSchema, you can also pass the model instance as an option to populate().

Mongoose can also populate from multiple collections based on the value of a property in the document. Let's say you're building a schema for storing comments. A user may comment on either a blog post or a product.

The refPath option is a more sophisticated alternative to ref. If ref is a string, Mongoose will always query the same model to find the populated subdocs. With refPath, you can configure what model Mongoose uses for each document.

An alternative approach is to define separate blogPost and product properties on commentSchema, and then populate() on both properties.

Defining separate blogPost and product properties works for this simple example. But, if you decide to allow users to also comment on articles or other comments, you'll need to add more properties to your schema. You'll also need an extra populate() call for every property, unless you use mongoose-autopopulate. Using refPath means you only need 2 schema paths and one populate() call regardless of how many models your commentSchema can point to.

You could also assign a function to refPath, which means Mongoose selects a refPath depending on a value on the document being populated.

Just like refPath, ref can also be assigned a function.

So far you've only populated based on the _id field. However, that's sometimes not the right choice. For example, suppose you have 2 models: Author and BlogPost.

The above is an example of bad schema design. Why? Suppose you have an extremely prolific author that writes over 10k blog posts. That author document will be huge, over 12kb, and large documents lead to performance issues on both server and client. The Principle of Least Cardinality states that one-to-many relationships, like author to blog post, should be stored on the "many" side. In other words, blog posts should store their author, authors should not store all their posts.

Unfortunately, these two schemas, as written, don't support populating an author's list of blog posts. That's where virtual populate comes in. Virtual populate means calling populate() on a virtual property that has a ref option as shown below.

You can then populate() the author's posts as shown below.

Keep in mind that virtuals are not included in toJSON() and toObject() output by default. If you want populate virtuals to show up when using functions like Express' res.json() function or console.log(), set the virtuals: true option on your schema's toJSON and toObject() options.

If you're using populate projections, make sure foreignField is included in the projection.

Populate virtuals also support counting the number of documents with matching foreignField as opposed to the documents themselves. Set the count option on your virtual:

Another option for Populate virtuals is match. This option adds an extra filter condition to the query Mongoose uses to populate():

You can also set the match option to a function. That allows configuring the match based on the document being populated. For example, suppose you only want to populate blog posts whose tags contain one of the author's favoriteTags.

You can overwrite the match option when calling populate() as follows.

You can also set the match option to a function in your populate() call. If you want to merge your populate() match option, rather than overwriting, use the following.

Maps are a type that represents an object with arbitrary string keys. For example, in the below schema, members is a map from strings to ObjectIds.

This map has a ref, which means you can use populate() to populate all the ObjectIds in the map. Suppose you have the below band document:

You can populate() every element in the map by populating the special path members.$*. $* is a special syntax that tells Mongoose to look at every key in the map.

You can also populate paths in maps of subdocuments using $*. For example, suppose you have the below librarySchema:

You can populate() every book's author by populating books.$*.author:

You can populate in either pre or post hooks. If you want to always populate a certain field, check out the mongoose-autopopulate plugin.

Populating multiple paths in middleware can be helpful when you always want to populate some fields. But, the implementation is just a tiny bit trickier than what you may think. Here's how you may expect it to work:

However, this will not work. By default, passing multiple paths to populate() in the middleware will trigger an infinite recursion, which means that it will basically trigger the same middleware for all of the paths provided to the populate() method - For example, this.populate('followers following') will trigger the same middleware for both followers and following fields and the request will just be left hanging in an infinite loop.

To avoid this, we have to add the _recursed option, so that our middleware will avoid populating recursively. The example below will make it work as expected.

Alternatively, you can check out the mongoose-autopopulate plugin.

You can manipulate populated documents using the transform option. If you specify a transform function, Mongoose will call this function on every populated document in the result with two arguments: the populated document, and the original id used to populate the document. This gives you more control over the result of the populate() execution. It is especially useful when you're populating multiple documents.

The original motivation for the transform option was to give the ability to leave the unpopulated _id if no document was found, instead of setting the value to null:

You can return any value from transform(). For example, you can use transform() to "flatten" populated documents as follows.

Another use case for transform() is setting $locals values on populated documents to pass parameters to getters and virtuals. For example, suppose you want to set a language code on your document for internationalization purposes as follows.

You can set the language code on all populated exercises as follows:

**Examples:**

Example 1 (javascript):
```javascript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);
```

Example 2 (javascript):
```javascript
const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

await author.save();

const story1 = new Story({
  title: 'Casino Royale',
  author: author._id // assign the _id from the person
});

await story1.save();
// that's it!
```

Example 3 (javascript):
```javascript
const story = await Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec();
// prints "The author is Ian Fleming"
console.log('The author is %s', story.author.name);
```

Example 4 (javascript):
```javascript
const story = await Story.findOne({ title: 'Casino Royale' });
story.author = author;
console.log(story.author.name); // prints "Ian Fleming"
```

---
