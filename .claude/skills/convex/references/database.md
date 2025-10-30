# Convex - Database

**Pages:** 24

---

## Reading Data

**URL:** https://docs.convex.dev/database/reading-data

**Contents:**
- Reading Data
- Reading a single document​
- Querying documents​
- Filtering your query​
  - 1. Define the index​
  - 2. Filter a query with an index​
- Ordering​
  - Ordering of different types of values​
- Retrieving results​
  - Taking n results​

Query and mutation functions can read data from database tables using document ids and document queries.

Given a single document's id you can read its data with the db.get method:

Note: You should use the v.id validator like in the example above to make sure you are not exposing data from tables other than the ones you intended.

Document queries always begin by choosing the table to query with the db.query method:

We'll see how this works in the examples below.

The best way to filter in Convex is to use indexes. Indexes build a special internal structure in your database to speed up lookups.

There are two steps to using indexes:

If you aren't familiar with how to create a Convex schema, read the schema doc.

Let’s assume you’re building a chat app and want to get all messages in a particular channel. You can define a new index called by_channel on the messages table by using the .index() method in your schema.

In your query function, you can now filter your messages table by using the by_channel index.

In Convex, you must explicitly use the withIndex() syntax to ensure your database uses the index. This differs from a more traditional SQL database, where the database implicitly chooses to use an index based on heuristics. The Convex approach leads to fewer surprises in the long run.

You can create an index across multiple fields at once, query a specific range of data, and change the order of your query result. Read the complete index documentation to learn more.

Convex also supports a slower filtering mechanism that effectively loops through the table to match the filter. This can be useful if you know your table will be small (low thousands of rows), you're prototyping, or you want to filter an index query further. You can read more about filters here.

By default Convex always returns documents ordered by _creationTime.

You can use .order("asc" | "desc") to pick whether the order is ascending or descending. If the order isn't specified, it defaults to ascending.

If you need to sort on a field other than _creationTime and your document query returns a small number of documents (on the order of hundreds rather than thousands of documents), consider sorting in Javascript:

For document queries that return larger numbers of documents, you'll want to use an index to improve the performance. Document queries that use indexes will be ordered based on the columns in the index and can avoid slow table scans.

See Limits for details.

A single field can have values of any Convex type. When there are values of different types in an indexed field, their ascending order is as follows:

No value set (undefined) < Null (null) < Int64 (bigint) < Float64 (number) < Boolean (boolean) < String (string) < Bytes (ArrayBuffer) < Array (Array) < Object (Object)

The same ordering is used by the filtering comparison operators q.lt(), q.lte(), q.gt() and q.gte().

Most of our previous examples have ended the document query with the .collect() method, which returns all the documents that match your filters. Here are the other options for retrieving results.

.take(n) selects only the first n results that match your query.

.first() selects the first document that matches your query and returns null if no documents were found.

.unique() selects the single document from your query or returns null if no documents were found. If there are multiple results it will throw an exception.

.paginate(opts) loads a page of results and returns a Cursor for loading additional results.

See Paginated Queries to learn more.

Convex prefers to have a few, simple ways to walk through and select documents from tables. In Convex, there is no specific query language for complex logic like a join, an aggregation, or a group by.

Instead, you can write the complex logic in Javascript! Convex guarantees that the results will be consistent.

Table join might look like:

Here's an example of computing an average:

If you need more scalable aggregate options (for example to handle frequent updates or large tables), consider using the Sharded Counter or Aggregate components. These components can help you handle high-throughput counters, sums, or computations without looping through the whole table.

Here's an example of grouping and counting:

You can try out the syntax described above directly from the dashboard by writing a custom test query.

**Examples:**

Example 1 (ts):
```ts
import { query } from "./_generated/server";import { v } from "convex/values";export const getTask = query({  args: { taskId: v.id("tasks") },  handler: async (ctx, args) => {    const task = await ctx.db.get(args.taskId);    // do something with `task`  },});
```

Example 2 (ts):
```ts
import { query } from "./_generated/server";export const listTasks = query({  handler: async (ctx) => {    const tasks = await ctx.db.query("tasks").collect();    // do something with `tasks`  },});
```

Example 3 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with an index.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  }).index("by_channel", ["channel"]),});
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) => q.eq("channel", channel))  .collect();
```

---

## Data Types

**URL:** https://docs.convex.dev/database/types

**Contents:**
- Data Types
- Convex values​
- System fields​
- Limits​
- Working with undefined​
- Working with dates and times​

All Convex documents are defined as Javascript objects. These objects can have field values of any of the types below.

You can codify the shape of documents within your tables by defining a schema.

Convex supports the following types of values:

Every document in Convex has two automatically-generated system fields:

Convex values must be less than 1MB in total size. This is an approximate limit for now, but if you're running into these limits and would like a more precise method to calculate a document's size, reach out to us. Documents can have nested values, either objects or arrays that contain other Convex types. Convex types can have at most 16 levels of nesting, and the cumulative size of a nested tree of values must be under the 1MB limit.

Table names may contain alphanumeric characters ("a" to "z", "A" to "Z", and "0" to "9") and underscores ("_"), and they cannot start with an underscore.

For information on other limits, see here.

If any of these limits don't work for you, let us know!

The TypeScript value undefined is not a valid Convex value, so it cannot be used in Convex function arguments or return values, or in stored documents.

If you would prefer to avoid the special behaviors of undefined, you can use null instead, which is a valid Convex value.

Convex does not have a special data type for working with dates and times. How you store dates depends on the needs of your application:

For more sophisticated printing (formatting) and manipulation of dates and times use one of the popular JavaScript libraries: date-fns, Day.js, Luxon or Moment.js.

**Examples:**

Example 1 (ts):
```ts
if (args.a === null) {  args.a = undefined;}await ctx.db.patch(id, args);
```

---

## Data Export

**URL:** https://docs.convex.dev/database/import-export/export

**Contents:**
- Data Export

You can export your data from Convex by taking a backup and downloading it as a zip file.

Alternatively, you can export the same data with the command line:

**Examples:**

Example 1 (sh):
```sh
npx convex export --path ~/Downloads
```

---

## Storing Users in the Convex Database

**URL:** https://docs.convex.dev/auth/database-auth

**Contents:**
- Storing Users in the Convex Database
- Call a mutation from the client​
  - (optional) Users table schema​
  - Mutation for storing current user​
  - Calling the store user mutation from React​
  - Using the current user's document ID​
  - Loading users by their ID​
- Set up webhooks​
  - Configure the webhook endpoint in Clerk​
  - (optional) Users table schema​

If you're using Convex Auth the user information is already stored in your database. There's nothing else you need to implement.

You might want to store user information directly in your Convex database, for the following reasons:

There are two ways you can choose from for storing user information in your database (but only the second one allows storing information not contained in the JWT):

Example: Convex Authentication with Clerk

You can define a "users" table, optionally with an index for efficient looking up the users in the database.

In the examples below we will use the tokenIdentifier from the ctx.auth.getUserIdentity() to identify the user, but you could use the subject field (which is usually set to the unique user ID from your auth provider) or even email, if your authentication provider provides email verification and you have it enabled.

Which field you use will determine how multiple providers interact, and how hard it will be to migrate to a different provider.

This is an example of a mutation that stores the user's name and tokenIdentifier:

You can call this mutation when the user logs in from a useEffect hook. After the mutation succeeds you can update local state to reflect that the user has been stored.

This helper hook that does the job:

You can use this hook in your top-level component. If your queries need the user document to be present, make sure that you only render the components that call them after the user has been stored:

In this way the useStoreUserEffect hook replaces the useConvexAuth hook.

Similarly to the store user mutation, you can retrieve the current user's ID, or throw an error if the user hasn't been stored.

Now that you have users stored as documents in your Convex database, you can use their IDs as foreign keys in other documents:

The information about other users can be retrieved via their IDs:

This guide will use Clerk, but Auth0 can be set up similarly via Auth0 Actions.

With this implementation Clerk will call your Convex backend via an HTTP endpoint any time a user signs up, updates or deletes their account.

Example: Convex Authentication with Clerk and Webhooks

On your Clerk dashboard, go to Webhooks, click on + Add Endpoint.

Set Endpoint URL to https://<your deployment name>.convex.site/clerk-users-webhook (note the domain ends in .site, not .cloud). You can see your deployment name in the .env.local file in your project directory, or on your Convex dashboard as part of the Deployment URL. For example, the endpoint URL could be: https://happy-horse-123.convex.site/clerk-users-webhook.

In Message Filtering, select user for all user events (scroll down or use the search input).

After the endpoint is saved, copy the Signing Secret (on the right side of the UI), it should start with whsec_. Set it as the value of the CLERK_WEBHOOK_SECRET environment variable in your Convex dashboard.

You can define a "users" table, optionally with an index for efficient looking up the users in the database.

In the examples below we will use the subject from the ctx.auth.getUserIdentity() to identify the user, which should be set to the Clerk user ID.

This is an example of mutations that handle the updates received via the webhook:

There are also a few helpers in this file:

This how the actual HTTP endpoint can be implemented:

If you deploy your code now and sign in, you should see the user being created in your Convex database.

You can use the helpers defined before to retrieve the current user's document.

Now that you have users stored as documents in your Convex database, you can use their IDs as foreign keys in other documents:

The information about other users can be retrieved via their IDs:

If you want to use the current user's document in a query, make sure that the user has already been stored. You can do this by explicitly checking for this condition before rendering the components that call the query, or before redirecting to the authenticated portion of your app.

For example you can define a hook that determines the current authentication state of the client, taking into account whether the current user has been stored:

And then you can use it to render the appropriate components:

**Examples:**

Example 1 (ts):
```ts
users: defineTable({  name: v.string(),  tokenIdentifier: v.string(),}).index("by_token", ["tokenIdentifier"]),
```

Example 2 (ts):
```ts
import { mutation } from "./_generated/server";export const store = mutation({  args: {},  handler: async (ctx) => {    const identity = await ctx.auth.getUserIdentity();    if (!identity) {      throw new Error("Called storeUser without authentication present");    }    // Check if we've already stored this identity before.    // Note: If you don't want to define an index right away, you can use    // ctx.db.query("users")    //  .filter(q => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))    //  .unique();    const user = await ctx.db      .query("users")      .withIndex("by_token", (q) =>        q.eq("tokenIdentifier", identity.tokenIdentifier),      )      .unique();    if (user !== null) {      // If we've seen this identity before but the name has changed, patch the value.      if (user.name !== identity.name) {        await ctx.db.patch(user._id, { name: identity.name });      }      return user._id;    }    // If it's a new identity, create a new `User`.    return await ctx.db.insert("users", {      name: identity.name ?? "Anonymous",      tokenIdentifier: identity.tokenIdentifier,    });  },});
```

Example 3 (ts):
```ts
import { useUser } from "@clerk/clerk-react";import { useConvexAuth } from "convex/react";import { useEffect, useState } from "react";import { useMutation } from "convex/react";import { api } from "../convex/_generated/api";import { Id } from "../convex/_generated/dataModel";export function useStoreUserEffect() {  const { isLoading, isAuthenticated } = useConvexAuth();  const { user } = useUser();  // When this state is set we know the server  // has stored the user.  const [userId, setUserId] = useState<Id<"users"> | null>(null);  const storeUser = useMutation(api.users.store);  // Call the `storeUser` mutation function to store  // the current user in the `users` table and return the `Id` value.  useEffect(() => {    // If the user is not logged in don't do anything    if (!isAuthenticated) {      return;    }    // Store the user in the database.    // Recall that `storeUser` gets the user information via the `auth`    // object on the server. You don't need to pass anything manually here.    async function createUser() {      const id = await storeUser();      setUserId(id);    }    createUser();    return () => setUserId(null);    // Make sure the effect reruns if the user logs in with    // a different identity  }, [isAuthenticated, storeUser, user?.id]);  // Combine the local state with the state from context  return {    isLoading: isLoading || (isAuthenticated && userId === null),    isAuthenticated: isAuthenticated && userId !== null,  };}
```

Example 4 (tsx):
```tsx
import { SignInButton, UserButton } from "@clerk/clerk-react";import { useQuery } from "convex/react";import { api } from "../convex/_generated/api";import { useStoreUserEffect } from "./useStoreUserEffect.js";function App() {  const { isLoading, isAuthenticated } = useStoreUserEffect();  return (    <main>      {isLoading ? (        <>Loading...</>      ) : !isAuthenticated ? (        <SignInButton />      ) : (        <>          <UserButton />          <Content />        </>      )}    </main>  );}function Content() {  const messages = useQuery(api.messages.getForCurrentUser);  return <div>Authenticated content: {messages?.length}</div>;}export default App;
```

---

## OCC and Atomicity

**URL:** https://docs.convex.dev/database/advanced/occ

**Contents:**
- OCC and Atomicity
- Convex Financial, Inc.​
- When OCC loses, determinism wins​
- Snapshot Isolation vs Serializability​
- No need to think about this​

In Queries, we mentioned that determinism was important in the way optimistic concurrency control (OCC) was used within Convex. In this section, we'll dive much deeper into why.

Imagine that you're building a banking app, and therefore your databases stores accounts with balances. You want your users to be able to give each other money, so you write a mutation function that transfers funds from one user's account to another.

One run of that transaction might read Alice's account balance, and then Bob's. You then propose to deduct $5 from Alice's account and increase Bob's balance by the same $5.

Here's our pseudocode:

This ledger balance transfer is a classic database scenario that requires a guarantee that these write operations will only apply together. It is a really bad thing if only one operation succeeds!

You need a guarantee that this can never happen. You require transaction atomicity, and Convex provides it.

The problem of data correctness is much deeper. Concurrent transactions that read and edit the same records can create data races.

In the case of our app it's entirely possible that someone deducts Alice's balance right after we read it. Maybe she bought a Coke Zero at the airport with her debit card for $3.

Clearly, we need to prevent these types of data races from happening. We need a way to handle these concurrent conflicts. Generally, there are two common approaches.

Most traditional databases choose a pessimistic locking strategy. (Pessimism in this case means the strategy assumes conflict will happen ahead of time so seeks to prevent it.) With pessimistic locking, you first need to acquire a lock on Alice's record, and then acquire a lock on Bob's record. Then you can proceed to conduct your transaction, knowing that any other transaction that needed to touch those records will wait until you are done and all your writes are committed.

After decades of experience, the drawbacks of pessimistic locking are well understood and undeniable. The biggest limitation arises from real-life networks and computers being inherently unreliable. If the lock holder goes missing for whatever reason half way through its transaction, everyone else that wants to modify any of those records is waiting indefinitely. Not good!

Optimistic concurrency control is, as the name states, optimistic. It assumes the transaction will succeed and doesn't worry about locking anything ahead of time. Very brash! How can it be so sure?

It does this by treating the transaction as a declarative proposal to write records on the basis of any read record versions (the "read set"). At the end of the transaction, the writes all commit if every version in the read set is still the latest version of that record. This means no concurrent conflict occurred.

Now using our version read set, let's see how OCC would have prevented the soda-catastrophe above:

This is akin to being unable to push your Git repository because you're not at HEAD. We all know in that circumstance, we need to pull, and rebase or merge, etc.

A naive optimistic concurrency control solution would be to solve this the same way that Git does: require the user/application to resolve the conflict and determine if it is safe to retry.

In Convex, however, we don't need to do that. We know the transaction is deterministic. It didn't charge money to Stripe, it didn't write a permanent value out to the filesystem. It had no effect at all other than proposing some atomic changes to Convex tables that were not applied.

The determinism means that we can simply re-run the transaction; you never need to worry about temporary data races. We can run several retries if necessary until we succeed to execute the transaction without any conflicts.

In fact, the Git analogy stays very apt. An OCC conflict means we cannot push because our HEAD is out of date, so we need to rebase our changes and try again. And determinism is what guarantees there is never a "merge conflict", so (unlike with Git) this rebase operation will always eventually succeed without developer intervention.

It is common for optimistic multi-version concurrency control databases to provide a guarantee of snapshot isolation. This isolation level provides the illusion that all transactions execute on an atomic snapshot of the data but it is vulnerable to anomalies where certain combinations of concurrent transactions can yield incorrect results. The implementation of optimistic concurrency control in Convex instead provides true serializability and will yield correct results regardless of what transactions are issued concurrently.

The beauty of this approach is that you can simply write your mutation functions as if they will always succeed, and always be guaranteed to be atomic.

Aside from sheer curiosity about how Convex works, day to day there's no need to worry about conflicts, locking, or atomicity when you make changes to your tables and documents. The "obvious way" to write your mutation functions will just work.

**Examples:**

Example 1 (text):
```text
$14 <- READ Alice$11 <- READ BobWRITE Alice $9WRITE Bob $16
```

Example 2 (text):
```text
$14 <- READ Alice$11 <- READ BobWRITE Alice $9*crash* // $5 lost from your bank
```

Example 3 (text):
```text
$5 Transfer                           $3 Debit Card Charge----------------------------------------------------------$14 <- READ Alice$11 <- READ Bob                                        $14 <- READ Alice                                        WRITE Alice $11WRITE Alice $9 // Free coke!WRITE Bob $16
```

Example 4 (text):
```text
$5 Transfer                           $3 Debit Card Charge----------------------------------------------------------(v1, $14) <- READ Alice(v7, $11) <- READ Bob                                        (v1, $14) <- READ Alice                                        WRITE Alice $11                                        IF Alice.v = v1WRITE Alice = $9, Bob = $16    IF Alice.v = v1, Bob.v = v7 // Fails! Alice is = v2
```

---

## Schemas

**URL:** https://docs.convex.dev/database/schemas

**Contents:**
- Schemas
- Writing schemas​
  - Validators​
    - Optional fields​
    - Unions​
    - Literals​
    - Record objects​
    - Any​
  - Options​
    - schemaValidation: boolean​

A schema is a description of

While it is possible to use Convex without defining a schema, adding a schema.ts file will ensure that the documents in your tables are the correct type. If you're using TypeScript, adding a schema will also give you end-to-end type safety throughout your app.

We recommend beginning your project without a schema for rapid prototyping and then adding a schema once you've solidified your plan. To learn more see our Schema Philosophy.

Example: TypeScript and Schemas

Schemas are defined in a schema.ts file in your convex/ directory and look like:

This schema (which is based on our users and auth example), has 2 tables: messages and users. Each table is defined using the defineTable function. Within each table, the document type is defined using the validator builder, v. In addition to the fields listed, Convex will also automatically add _id and _creationTime fields. To learn more, see System Fields.

While writing your schema, it can be helpful to consult the Convex Dashboard. The "Generate Schema" button in the "Data" view suggests a schema declaration based on the data in your tables.

The validator builder, v is used to define the type of documents in each table. It has methods for each of Convex's types:

It additionally allows you to define unions, optional property, string literals, and more. Argument validation and schemas both use the same validator builder, v.

You can describe optional fields by wrapping their type with v.optional(...):

This corresponds to marking fields as optional with ? in TypeScript.

You can describe fields that could be one of multiple types using v.union:

If your table stores multiple different types of documents, you can use v.union at the top level:

In this schema, documents either have a kind of "StringDocument" and a string for their value:

or they have a kind of "NumberDocument" and a number for their value:

Fields that are a constant can be expressed with v.literal:

You can describe objects that map arbitrary keys to values with v.record:

You can use other types of string validators for the keys:

Fields or documents that could take on any value can be represented with v.any():

This corresponds to the any type in TypeScript.

These options are passed as part of the options argument to defineSchema.

Whether Convex should validate at runtime that your documents match your schema.

By default, Convex will enforce that all new and existing documents match your schema.

You can disable schemaValidation by passing in schemaValidation: false:

When schemaValidation is disabled, Convex will not validate that new or existing documents match your schema. You'll still get schema-specific TypeScript types, but there will be no validation at runtime that your documents match those types.

Whether the TypeScript types should allow accessing tables not in the schema.

By default, the TypeScript table name types produced by your schema are strict. That means that they will be a union of strings (ex. "messages" | "users") and only support accessing tables explicitly listed in your schema.

Sometimes it's useful to only define part of your schema. For example, if you are rapidly prototyping, it could be useful to try out a new table before adding it your schema.ts file.

You can disable strictTableNameTypes by passing in strictTableNameTypes: false:

When strictTableNameTypes is disabled, the TypeScript types will allow access to tables not listed in the schema and their document type will be any.

Regardless of the value of strictTableNameTypes, your schema will only validate documents in the tables listed in the schema. You can still create and modify documents in other tables in JavaScript or on the dashboard (they just won't be validated).

Schemas are pushed automatically in npx convex dev and npx convex deploy.

The first push after a schema is added or modified will validate that all existing documents match the schema. If there are documents that fail validation, the push will fail.

After the schema is pushed, Convex will validate that all future document inserts and updates match the schema.

Schema validation is skipped if schemaValidation is set to false.

Note that schemas only validate documents in the tables listed in the schema. You can still create and modify documents in other tables (they just won't be validated).

You might want to define a schema with circular ID references like:

In this schema, documents in the users table contain a reference to documents in preferences and vice versa.

Because schema validation enforces your schema on every db.insert, db.replace, and db.patch call, creating circular references like this is not possible.

The easiest way around this is to make one of the references nullable:

This way you can create a preferences document first, then create a user document, then set the reference on the preferences document:

Let us know if you need better support for circular references.

Once you've defined a schema, npx convex dev will produce new versions of dataModel.d.ts and server.d.ts with types based on your schema.

The Doc TypeScript type from dataModel.d.ts provides document types for all of your tables. You can use these both when writing Convex functions and in your React components:

If you need the type for a portion of a document, use the Infer type helper.

The query and mutation functions in server.js have the same API as before but now provide a db with more precise types. Functions like db.insert(table, document) now understand your schema. Additionally database queries will now return the correct document type (not any).

**Examples:**

Example 1 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";export default defineSchema({  messages: defineTable({    body: v.string(),    user: v.id("users"),  }),  users: defineTable({    name: v.string(),    tokenIdentifier: v.string(),  }).index("by_token", ["tokenIdentifier"]),});
```

Example 2 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";export default defineSchema({  documents: defineTable({    id: v.id("documents"),    string: v.string(),    number: v.number(),    boolean: v.boolean(),    nestedObject: v.object({      property: v.string(),    }),  }),});
```

Example 3 (typescript):
```typescript
defineTable({  optionalString: v.optional(v.string()),  optionalNumber: v.optional(v.number()),});
```

Example 4 (typescript):
```typescript
defineTable({  stringOrNumber: v.union(v.string(), v.number()),});
```

---

## Paginated Queries

**URL:** https://docs.convex.dev/database/pagination

**Contents:**
- Paginated Queries
- Writing paginated query functions​
  - Additional arguments​
  - Transforming results​
- Paginating within React Components​
  - Reactivity​
- Paginating manually​

Paginated queries are queries that return a list of results in incremental pages.

This can be used to build components with "Load More" buttons or "infinite scroll" UIs where more results are loaded as the user scrolls.

Example: Paginated Messaging App

Using pagination in Convex is as simple as:

Like other Convex queries, paginated queries are completely reactive.

Convex uses cursor-based pagination. This means that paginated queries return a string called a Cursor that represents the point in the results that the current page ended. To load more results, you simply call the query function again, passing in the cursor.

To build this in Convex, define a query function that:

You can define paginated query functions that take arguments in addition to paginationOpts:

You can apply arbitrary transformations to the page property of the object returned by paginate, which contains the array of documents:

To paginate within a React component, use the usePaginatedQuery hook. This hook gives you a simple interface for rendering the current items and requesting more. Internally, this hook manages the continuation cursors.

The arguments to this hook are:

The hook returns an object with:

You can also pass additional arguments in the arguments object if your function expects them:

Like any other Convex query functions, paginated queries are completely reactive. Your React components will automatically rerender if items in your paginated list are added, removed or changed.

One consequence of this is that page sizes in Convex may change! If you request a page of 10 items and then one item is removed, this page may "shrink" to only have 9 items. Similarly if new items are added, a page may "grow" beyond its initial size.

If you're paginating outside of React, you can manually call your paginated function multiple times to collect the items:

**Examples:**

Example 1 (ts):
```ts
import { v } from "convex/values";import { query, mutation } from "./_generated/server";import { paginationOptsValidator } from "convex/server";export const list = query({  args: { paginationOpts: paginationOptsValidator },  handler: async (ctx, args) => {    const foo = await ctx.db      .query("messages")      .order("desc")      .paginate(args.paginationOpts);    return foo;  },});
```

Example 2 (ts):
```ts
export const listWithExtraArg = query({  args: { paginationOpts: paginationOptsValidator, author: v.string() },  handler: async (ctx, args) => {    return await ctx.db      .query("messages")      .filter((q) => q.eq(q.field("author"), args.author))      .order("desc")      .paginate(args.paginationOpts);  },});
```

Example 3 (ts):
```ts
export const listWithTransformation = query({  args: { paginationOpts: paginationOptsValidator },  handler: async (ctx, args) => {    const results = await ctx.db      .query("messages")      .order("desc")      .paginate(args.paginationOpts);    return {      ...results,      page: results.page.map((message) => ({        author: message.author.slice(0, 1),        body: message.body.toUpperCase(),      })),    };  },});
```

Example 4 (tsx):
```tsx
import { usePaginatedQuery } from "convex/react";import { api } from "../convex/_generated/api";export function App() {  const { results, status, loadMore } = usePaginatedQuery(    api.messages.list,    {},    { initialNumItems: 5 },  );  return (    <div>      {results?.map(({ _id, body }) => <div key={_id}>{body}</div>)}      <button onClick={() => loadMore(5)} disabled={status !== "CanLoadMore"}>        Load More      </button>    </div>  );}
```

---

## Data Import & Export

**URL:** https://docs.convex.dev/database/import-export/

**Contents:**
- Data Import & Export

If you're bootstrapping your app from existing data, Convex provides three ways to get the data in:

You can export data from Convex in two ways.

Data Import & Export is currently a beta feature. If you have feedback or feature requests, let us know on Discord!

---

## Filtering

**URL:** https://docs.convex.dev/database/reading-data/filters

**Contents:**
- Filtering
  - Equality conditions​
  - Comparisons​
  - Arithmetic​
  - Combining operators​
- Advanced filtering techniques​
- Querying performance and limits​

The filter method allows you to restrict the documents that your document query returns. This method takes a filter constructed by FilterBuilder and will only select documents that match.

The examples below demonstrate some of the common uses of filter. You can see the full list of available filtering methods in the reference docs.

If you need to filter to documents containing some keywords, use a search query.

Filters effectively loop over your table looking for documents that match. This can be slow or cause your function to hit a limit when your table has thousands of rows. For faster more database efficient queries use indexes instead.

This document query finds documents in the users table where doc.name === "Alex":

Here q is the FilterBuilder utility object. It contains methods for all of our supported filter operators.

This filter will run on all documents in the table. For each document, q.field("name") evaluates to the name property. Then q.eq checks if this property is equal to "Alex".

If your query references a field that is missing from a given document then that field will be considered to have the value undefined.

Filters can also be used to compare fields against values. This document query finds documents where doc.age >= 18:

Here the q.gte operator checks if the first argument (doc.age) is greater than or equal to the second (18).

Here's the full list of comparisons:

You can also include basic arithmetic in your queries. This document query finds documents in the carpets table where doc.height * doc.width > 100:

Here's the full list of arithmetic operators:

You can construct more complex filters using methods like q.and, q.or, and q.not. This document query finds documents where doc.name === "Alex" && doc.age >= 18:

Here is a query that finds all users where doc.name === "Alex" || doc.name === "Emma":

Sometimes the filter syntax is is not expressive enough. For example you may want to collect all posts that have a tag. Your schema for the posts looks like this:

One way to solve is by applying the filter on the result of the collect() call. This is just filtering a JavaScript array:

But this requires reading the whole table first. If you want to just get the first result that matches, reading the whole table could be very inefficient. Instead you may want to use the JavaScript for await...of syntax to loop through the table one document at a time:

This works because Convex queries are JavaScript iterables.

Even with this optimization you are still just looping over the table to find the first post that matches and may hit your function limits. Using indexes is still the way to go. You can read a detailed discussion of how to handle tags with indexes.

Most of the example document queries above can lead to a full table scan. That is, for the document query to return the requested results, it might need to walk over every single document in the table.

Take this simple example:

This document query will not scan more than 5 documents.

On the other hand, this document query:

might need to walk over every single document in the "tasks" table just to find the first one with isCompleted: true.

If a table has more than a few thousand documents, you should use indexes to improve your document query performance. Otherwise, you may run into our enforced limits, detailed in Read/write limit errors.

For information on other limits, see Limits.

**Examples:**

Example 1 (ts):
```ts
// Get all users named "Alex".const usersNamedAlex = await ctx.db  .query("users")  .filter((q) => q.eq(q.field("name"), "Alex"))  .collect();
```

Example 2 (ts):
```ts
// Get all users with an age of 18 or higher.const adults = await ctx.db  .query("users")  .filter((q) => q.gte(q.field("age"), 18))  .collect();
```

Example 3 (ts):
```ts
// Get all carpets that have an area of over 100.const largeCarpets = await ctx.db  .query("carpets")  .filter((q) => q.gt(q.mul(q.field("height"), q.field("width")), 100))  .collect();
```

Example 4 (ts):
```ts
// Get all users named "Alex" whose age is at least 18.const adultAlexes = await ctx.db  .query("users")  .filter((q) =>    q.and(q.eq(q.field("name"), "Alex"), q.gte(q.field("age"), 18)),  )  .collect();
```

---

## Schema Philosophy

**URL:** https://docs.convex.dev/database/advanced/schema-philosophy

**Contents:**
- Schema Philosophy

With Convex there is no need to write any CREATE TABLE statements, or think through your stored table structure ahead of time so you can name your field and types. You simply put your objects into Convex and keep building your app!

However, moving fast early can be problematic later. "Was that field a number or a string? I think I changed it when I fixed that one bug?"

Storage systems which are too permissive can sometimes become liabilities as your system matures and you want to be able to reason assuredly about exactly what data is in your system.

The good news is Convex is always typed. It's just implicitly typed! When you submit a document to Convex, tracks all the types of all the fields in your document. You can go to your dashboard and view the inferred schema of any table to understand what you've ended up with.

"What about that field I changed from a string to a number?" Convex can handle this too. Convex will track those changes, in this case the field is a union like v.union(v.number(), v.string()). That way even when you change your mind about your documents fields and types, Convex has your back.

Once you are ready to formalize your schema, you can define it using our schema builder to enable schema validation and generate types based on it.

---

## Reading Data

**URL:** https://docs.convex.dev/using/database-queries

**Contents:**
- Reading Data
- Reading a single document​
- Querying documents​
- Filtering your query​
  - 1. Define the index​
  - 2. Filter a query with an index​
- Ordering​
  - Ordering of different types of values​
- Retrieving results​
  - Taking n results​

Query and mutation functions can read data from database tables using document ids and document queries.

Given a single document's id you can read its data with the db.get method:

Note: You should use the v.id validator like in the example above to make sure you are not exposing data from tables other than the ones you intended.

Document queries always begin by choosing the table to query with the db.query method:

We'll see how this works in the examples below.

The best way to filter in Convex is to use indexes. Indexes build a special internal structure in your database to speed up lookups.

There are two steps to using indexes:

If you aren't familiar with how to create a Convex schema, read the schema doc.

Let’s assume you’re building a chat app and want to get all messages in a particular channel. You can define a new index called by_channel on the messages table by using the .index() method in your schema.

In your query function, you can now filter your messages table by using the by_channel index.

In Convex, you must explicitly use the withIndex() syntax to ensure your database uses the index. This differs from a more traditional SQL database, where the database implicitly chooses to use an index based on heuristics. The Convex approach leads to fewer surprises in the long run.

You can create an index across multiple fields at once, query a specific range of data, and change the order of your query result. Read the complete index documentation to learn more.

Convex also supports a slower filtering mechanism that effectively loops through the table to match the filter. This can be useful if you know your table will be small (low thousands of rows), you're prototyping, or you want to filter an index query further. You can read more about filters here.

By default Convex always returns documents ordered by _creationTime.

You can use .order("asc" | "desc") to pick whether the order is ascending or descending. If the order isn't specified, it defaults to ascending.

If you need to sort on a field other than _creationTime and your document query returns a small number of documents (on the order of hundreds rather than thousands of documents), consider sorting in Javascript:

For document queries that return larger numbers of documents, you'll want to use an index to improve the performance. Document queries that use indexes will be ordered based on the columns in the index and can avoid slow table scans.

See Limits for details.

A single field can have values of any Convex type. When there are values of different types in an indexed field, their ascending order is as follows:

No value set (undefined) < Null (null) < Int64 (bigint) < Float64 (number) < Boolean (boolean) < String (string) < Bytes (ArrayBuffer) < Array (Array) < Object (Object)

The same ordering is used by the filtering comparison operators q.lt(), q.lte(), q.gt() and q.gte().

Most of our previous examples have ended the document query with the .collect() method, which returns all the documents that match your filters. Here are the other options for retrieving results.

.take(n) selects only the first n results that match your query.

.first() selects the first document that matches your query and returns null if no documents were found.

.unique() selects the single document from your query or returns null if no documents were found. If there are multiple results it will throw an exception.

.paginate(opts) loads a page of results and returns a Cursor for loading additional results.

See Paginated Queries to learn more.

Convex prefers to have a few, simple ways to walk through and select documents from tables. In Convex, there is no specific query language for complex logic like a join, an aggregation, or a group by.

Instead, you can write the complex logic in Javascript! Convex guarantees that the results will be consistent.

Table join might look like:

Here's an example of computing an average:

If you need more scalable aggregate options (for example to handle frequent updates or large tables), consider using the Sharded Counter or Aggregate components. These components can help you handle high-throughput counters, sums, or computations without looping through the whole table.

Here's an example of grouping and counting:

You can try out the syntax described above directly from the dashboard by writing a custom test query.

**Examples:**

Example 1 (ts):
```ts
import { query } from "./_generated/server";import { v } from "convex/values";export const getTask = query({  args: { taskId: v.id("tasks") },  handler: async (ctx, args) => {    const task = await ctx.db.get(args.taskId);    // do something with `task`  },});
```

Example 2 (ts):
```ts
import { query } from "./_generated/server";export const listTasks = query({  handler: async (ctx) => {    const tasks = await ctx.db.query("tasks").collect();    // do something with `tasks`  },});
```

Example 3 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with an index.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  }).index("by_channel", ["channel"]),});
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) => q.eq("channel", channel))  .collect();
```

---

## Backups

**URL:** https://docs.convex.dev/database/backup-restore

**Contents:**
- Backups
  - Periodic Backups​
  - Restoring from backup​
  - Restoring in an emergency​
- Downloading a backup
  - Using the downloaded backup.​
- FAQ​
  - Are there any limitations?​
  - How are they priced?​
  - What does the backup not contain?​

Convex supports Backup & Restore of data via the dashboard.

A backup is a consistent snapshot of your table data and file storage made at the time of your request.

Take a manual backup by pressing the "Backup Now" button. This may take a few seconds to a few hours, depending on how much data is in your deployment.

Manual backups are stored for 7 days. You can download or delete backups via this page.

Deployment configuration and other data (code, environment variables, scheduled functions, etc.) will not be included.

Schedule a periodic daily or weekly backup by checking the "Backup automatically" box. You can select what time of day / day of week to have the backup occur.

Daily backups are stored for 7 days. Weekly backups are stored for 14 days.

Periodic backups require a Convex Pro plan. Learn more about our plans or upgrade.

Restore from a backup by selecting "Restore" from the submenu of an individual backup. You can restore from backups in the same deployment or from other deployments on the same team by using the deployment selector on the backups page. Restores may take a few seconds to a few hours depending on how much data is in your backup.

Note that restoring is a destructive operation that wipes your existing data and replaces it with that from the backup. It's recommended that you generate an additional backup before doing a restore.

If your production deployment ends up in a bad state, you may want to consider doing a restore to return to a good state. Note that getting your data to a good state may not be enough. Consider whether you may need each of the following actions. Depending on the nature of your emergency, these may be required.

You can download your manual and periodic backups from the dashboard via the download button in the menu.

Alternatively, you can generate an export in the same format with the command line:

The backup comes as a generated a ZIP file with all documents in all Convex tables in your deployment.

The ZIP file's name has the format snapshot_{ts}.zip where ts is a UNIX timestamp of the snapshot in nanoseconds. The export ZIP file contains documents for each table at <table_name>/documents.jsonl, with one document per line.

Exported ZIP files also contain data from file storage in a _storage folder, with metadata like IDs and checksums in _storage/documents.jsonl and each file as _storage/<id>.

Downloaded ZIP files can be imported into the same deployment or a different deployment with the CLI.

Each backup is accessible for up to 7 days.

On the Free/Starter plan, up to two backups can stored per deployment at a time. Deployments on Convex Professional plan can have many backups with standard usage based pricing.

Backups uses database bandwidth to read all documents, and file bandwidth to include user files. The generation and storage of the backup itself is billed with the same bandwidth and storage pricing as user file storage. You can observe this bandwidth and storage cost in the usage dashboard. Check the limits docs for pricing details.

The backup only contains the documents for your tables and files in file storage. In particular it lacks:

**Examples:**

Example 1 (sh):
```sh
npx convex export --path ~/Downloads
```

---

## Indexes

**URL:** https://docs.convex.dev/database/reading-data/indexes

**Contents:**
- Indexes
- Defining indexes​
- Querying documents using indexes​
- Sorting with indexes​
- Staged indexes​
- Limits​

Indexes are a data structure that allow you to speed up your document queries by telling Convex how to organize your documents. Indexes also allow you to change the order of documents in query results.

For a more in-depth introduction to indexing see Indexes and Query Performance.

Indexes are defined as part of your Convex schema. Each index consists of:

To add an index onto a table, use the index method on your table's schema:

The by_channel index is ordered by the channel field defined in the schema. For messages in the same channel, they are ordered by the system-generated _creationTime field which is added to all indexes automatically.

By contrast, the by_channel_user index orders messages in the same channel by the user who sent them, and only then by _creationTime.

Indexes are created in npx convex dev and npx convex deploy.

You may notice that the first deploy that defines an index is a bit slower than normal. This is because Convex needs to backfill your index. The more data in your table, the longer it will take Convex to organize it in index order. If you need to add indexes to large tables, use a staged index.

You can feel free to query an index in the same deploy that defines it. Convex will ensure that the index is backfilled before the new query and mutation functions are registered.

In addition to adding new indexes, npx convex deploy will delete indexes that are no longer present in your schema. Make sure that your indexes are completely unused before removing them from your schema!

A query for "messages in channel created 1-2 minutes ago" over the by_channel index would look like:

The .withIndex method defines which index to query and how Convex will use that index to select documents. The first argument is the name of the index and the second is an index range expression. An index range expression is a description of which documents Convex should consider when running the query.

The choice of index both affects how you write the index range expression and what order the results are returned in. For instance, by making both a by_channel and by_channel_user index, we can get results within a channel ordered by _creationTime or by user, respectively. If you were to use the by_channel_user index like this:

The results would be all of the messages in a channel ordered by user, then by _creationTime. If you were to use by_channel_user like this:

The results would be the messages in the given channel sent by user, ordered by _creationTime.

An index range expression is always a chained list of:

You must step through fields in index order.

Each equality expression must compare a different index field, starting from the beginning and in order. The upper and lower bounds must follow the equality expressions and compare the next field.

For example, it is not possible to write a query like:

This query is invalid because the by_channel index is ordered by (channel, _creationTime) and this query range has a comparison on _creationTime without first restricting the range to a single channel. Because the index is sorted first by channel and then by _creationTime, it isn't a useful index for finding messages in all channels created 1-2 minutes ago. The TypeScript types within withIndex will guide you through this.

To better understand what queries can be run over which indexes, see Introduction to Indexes and Query Performance.

The performance of your query is based on the specificity of the range.

For example, if the query is

then query's performance would be based on the number of messages in channel created 1-2 minutes ago.

If the index range is not specified, all documents in the index will be considered in the query.

For performance, define index ranges that are as specific as possible! If you are querying a large table and you're unable to add any equality conditions with .eq, you should consider defining a new index.

.withIndex is designed to only allow you to specify ranges that Convex can efficiently use your index to find. For all other filtering you can use the .filter method.

For example to query for "messages in channel not created by me" you could do:

In this case the performance of this query will be based on how many messages are in the channel. Convex will consider each message in the channel and only return the messages where the user field matches myUserId.

Queries that use withIndex are ordered by the columns specified in the index.

The order of the columns in the index dictates the priority for sorting. The values of the columns listed first in the index are compared first. Subsequent columns are only compared as tie breakers only if all earlier columns match.

Since Convex automatically includes _creationTime as the last column in all indexes, _creationTime will always be the final tie breaker if all other columns in the index are equal.

For example, by_channel_user includes channel, user, and \_creationTime. So queries on messages that use .withIndex("by_channel_user") will be sorted first by channel, then by user within each channel, and finally by the creation time.

Sorting with indexes allows you to satisfy use cases like displaying the top N scoring users, the most recent N transactions, or the most N liked messages.

For example, to get the top 10 highest scoring players in your game, you might define an index on the player's highest score:

You can then efficiently find the top 10 highest scoring players using your index and take(10):

In this example, the range expression is omitted because we're looking for the highest scoring players of all time. This particular query is reasonably efficient for large data sets only because we're using take().

If you use an index without a range expression, you should always use one of the following in conjunction with withIndex:

These APIs allow you to efficiently limit your query to a reasonable size without performing a full table scan.

When your query fetches documents from the database, it will scan the rows in the range you specify. If you are using .collect(), for instance, it will scan all of the rows in the range. So if you use withIndex without a range expression, you will be scanning the whole table, which can be slow when your table has thousands of rows. .filter() doesn't affect which documents are scanned. Using .first() or .unique() or .take(n) will only scan rows until it has enough documents.

You can include a range expression to satisfy more targeted queries. For example, to get the top scoring players in Canada, you might use both take() and a range expression:

By default, index creation happens synchronously when you deploy code. For large tables, the process of backfilling the index for the existing table can be slow. Staged indexes are a way to create an index on a large table asynchronously without blocking deploy. This can be useful if you are working on multiple features at once.

To create a staged index, use the following syntax in your schema.ts.

Staged indexes cannot be used in queries until you enable them. To enable them, they must first finish backfilling.

You can check the backfill progress via the Indexes pane on the dashboard data page. Once it is complete, you can enable the index and use it by removing the staged option.

Convex supports indexes containing up to 16 fields. You can define 32 indexes on each table. Indexes can't contain duplicate fields.

No reserved fields (starting with _) are allowed in indexes. The _creationTime field is automatically added to the end of every index to ensure a stable ordering. It should not be added explicitly in the index definition, and it's counted towards the index fields limit.

The by_creation_time index is created automatically (and is what is used in database queries that don't specify an index). The by_id index is reserved.

**Examples:**

Example 1 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with two indexes.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  })    .index("by_channel", ["channel"])    .index("by_channel_user", ["channel", "user"]),});
```

Example 2 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) =>    q      .eq("channel", channel)      .gt("_creationTime", Date.now() - 2 * 60000)      .lt("_creationTime", Date.now() - 60000),  )  .collect();
```

Example 3 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) => q.eq("channel", channel))  .collect();
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) =>    q.eq("channel", channel).eq("user", user),  )  .collect();
```

---

## Indexes

**URL:** https://docs.convex.dev/database/reading-data/indexes/

**Contents:**
- Indexes
- Defining indexes​
- Querying documents using indexes​
- Sorting with indexes​
- Staged indexes​
- Limits​

Indexes are a data structure that allow you to speed up your document queries by telling Convex how to organize your documents. Indexes also allow you to change the order of documents in query results.

For a more in-depth introduction to indexing see Indexes and Query Performance.

Indexes are defined as part of your Convex schema. Each index consists of:

To add an index onto a table, use the index method on your table's schema:

The by_channel index is ordered by the channel field defined in the schema. For messages in the same channel, they are ordered by the system-generated _creationTime field which is added to all indexes automatically.

By contrast, the by_channel_user index orders messages in the same channel by the user who sent them, and only then by _creationTime.

Indexes are created in npx convex dev and npx convex deploy.

You may notice that the first deploy that defines an index is a bit slower than normal. This is because Convex needs to backfill your index. The more data in your table, the longer it will take Convex to organize it in index order. If you need to add indexes to large tables, use a staged index.

You can feel free to query an index in the same deploy that defines it. Convex will ensure that the index is backfilled before the new query and mutation functions are registered.

In addition to adding new indexes, npx convex deploy will delete indexes that are no longer present in your schema. Make sure that your indexes are completely unused before removing them from your schema!

A query for "messages in channel created 1-2 minutes ago" over the by_channel index would look like:

The .withIndex method defines which index to query and how Convex will use that index to select documents. The first argument is the name of the index and the second is an index range expression. An index range expression is a description of which documents Convex should consider when running the query.

The choice of index both affects how you write the index range expression and what order the results are returned in. For instance, by making both a by_channel and by_channel_user index, we can get results within a channel ordered by _creationTime or by user, respectively. If you were to use the by_channel_user index like this:

The results would be all of the messages in a channel ordered by user, then by _creationTime. If you were to use by_channel_user like this:

The results would be the messages in the given channel sent by user, ordered by _creationTime.

An index range expression is always a chained list of:

You must step through fields in index order.

Each equality expression must compare a different index field, starting from the beginning and in order. The upper and lower bounds must follow the equality expressions and compare the next field.

For example, it is not possible to write a query like:

This query is invalid because the by_channel index is ordered by (channel, _creationTime) and this query range has a comparison on _creationTime without first restricting the range to a single channel. Because the index is sorted first by channel and then by _creationTime, it isn't a useful index for finding messages in all channels created 1-2 minutes ago. The TypeScript types within withIndex will guide you through this.

To better understand what queries can be run over which indexes, see Introduction to Indexes and Query Performance.

The performance of your query is based on the specificity of the range.

For example, if the query is

then query's performance would be based on the number of messages in channel created 1-2 minutes ago.

If the index range is not specified, all documents in the index will be considered in the query.

For performance, define index ranges that are as specific as possible! If you are querying a large table and you're unable to add any equality conditions with .eq, you should consider defining a new index.

.withIndex is designed to only allow you to specify ranges that Convex can efficiently use your index to find. For all other filtering you can use the .filter method.

For example to query for "messages in channel not created by me" you could do:

In this case the performance of this query will be based on how many messages are in the channel. Convex will consider each message in the channel and only return the messages where the user field matches myUserId.

Queries that use withIndex are ordered by the columns specified in the index.

The order of the columns in the index dictates the priority for sorting. The values of the columns listed first in the index are compared first. Subsequent columns are only compared as tie breakers only if all earlier columns match.

Since Convex automatically includes _creationTime as the last column in all indexes, _creationTime will always be the final tie breaker if all other columns in the index are equal.

For example, by_channel_user includes channel, user, and \_creationTime. So queries on messages that use .withIndex("by_channel_user") will be sorted first by channel, then by user within each channel, and finally by the creation time.

Sorting with indexes allows you to satisfy use cases like displaying the top N scoring users, the most recent N transactions, or the most N liked messages.

For example, to get the top 10 highest scoring players in your game, you might define an index on the player's highest score:

You can then efficiently find the top 10 highest scoring players using your index and take(10):

In this example, the range expression is omitted because we're looking for the highest scoring players of all time. This particular query is reasonably efficient for large data sets only because we're using take().

If you use an index without a range expression, you should always use one of the following in conjunction with withIndex:

These APIs allow you to efficiently limit your query to a reasonable size without performing a full table scan.

When your query fetches documents from the database, it will scan the rows in the range you specify. If you are using .collect(), for instance, it will scan all of the rows in the range. So if you use withIndex without a range expression, you will be scanning the whole table, which can be slow when your table has thousands of rows. .filter() doesn't affect which documents are scanned. Using .first() or .unique() or .take(n) will only scan rows until it has enough documents.

You can include a range expression to satisfy more targeted queries. For example, to get the top scoring players in Canada, you might use both take() and a range expression:

By default, index creation happens synchronously when you deploy code. For large tables, the process of backfilling the index for the existing table can be slow. Staged indexes are a way to create an index on a large table asynchronously without blocking deploy. This can be useful if you are working on multiple features at once.

To create a staged index, use the following syntax in your schema.ts.

Staged indexes cannot be used in queries until you enable them. To enable them, they must first finish backfilling.

You can check the backfill progress via the Indexes pane on the dashboard data page. Once it is complete, you can enable the index and use it by removing the staged option.

Convex supports indexes containing up to 16 fields. You can define 32 indexes on each table. Indexes can't contain duplicate fields.

No reserved fields (starting with _) are allowed in indexes. The _creationTime field is automatically added to the end of every index to ensure a stable ordering. It should not be added explicitly in the index definition, and it's counted towards the index fields limit.

The by_creation_time index is created automatically (and is what is used in database queries that don't specify an index). The by_id index is reserved.

**Examples:**

Example 1 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with two indexes.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  })    .index("by_channel", ["channel"])    .index("by_channel_user", ["channel", "user"]),});
```

Example 2 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) =>    q      .eq("channel", channel)      .gt("_creationTime", Date.now() - 2 * 60000)      .lt("_creationTime", Date.now() - 60000),  )  .collect();
```

Example 3 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) => q.eq("channel", channel))  .collect();
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) =>    q.eq("channel", channel).eq("user", user),  )  .collect();
```

---

## System Tables

**URL:** https://docs.convex.dev/database/advanced/system-tables

**Contents:**
- System Tables

System tables enable read-only access to metadata for built-in Convex features. Currently there are two system tables exposed:

You can read data from system tables using the db.system.get and db.system.query methods, which work the same as the standard db.get and db.query methods. Queries reading from system tables are reactive and realtime just like queries reading from all other tables, and pagination can be used to enumerate all documents even when there are too many to read in a single query.

---

## Data Import

**URL:** https://docs.convex.dev/database/import-export/import

**Contents:**
- Data Import
- Single table import​
- Restore data from a backup ZIP file​
- Use cases​
- Features​
- Warnings​

You can import data into Convex from a local file using the command line.

Data import is currently a beta feature. If you have feedback or feature requests, let us know on Discord!

Use --help to see all options. The most common flows are described here.

Import a CSV, JSON, or JSONLines file into a Convex table.

Imports into a table with existing data will fail by default, but you can specify --append to append the imported rows to the table or --replace to replace existing data in the table with your import.

The default is to import into your dev deployment. Use --prod to import to your production deployment or --preview-name to import into a preview deployment.

Import from a Backup into a Convex deployment, where the backup is a ZIP file that has been downloaded on the dashboard. Documents will retain their _id and _creationTime fields so references between tables are maintained.

Imports where tables have existing data will fail by default, but you can specify --replace to replace existing data in tables mentioned in the ZIP file.

Data import uses database bandwidth to write all documents, and file bandwidth if the export includes file storage. You can observe this bandwidth in the usage dashboard as function name _cli/import and associated cost in the limits docs.

**Examples:**

Example 1 (sh):
```sh
npx convex import
```

Example 2 (sh):
```sh
npx convex import --table <tableName> <path>
```

Example 3 (sh):
```sh
npx convex import <path>.zip
```

Example 4 (sh):
```sh
# full backup - exported from prod or another dev deployment.npx convex import seed_data.zip# Import single table from jsonl/csvnpx convex import --table <table name> data.jsonl
```

---

## Writing Data

**URL:** https://docs.convex.dev/database/writing-data

**Contents:**
- Writing Data
- Inserting new documents​
- Updating existing documents​
- Deleting documents​
- Bulk inserts or updates​
- Migrations​
  - Migrations
- Write performance and limits​

Mutations can insert, update, and remove data from database tables.

You can create new documents in the database with the db.insert method:

The second argument to db.insert is a JavaScript object with data for the new document.

The same types of values that can be passed into and returned from queries and mutations can be written into the database. See Data Types for the full list of supported types.

The insert method returns a globally unique ID for the newly inserted document.

Given an existing document ID the document can be updated using the following methods:

Given an existing document ID the document can be removed from the table with the db.delete method.

If you are used to SQL you might be looking for some sort of bulk insert or bulk update statement. In Convex the entire mutation function is automatically a single transaction.

You can just insert or update in a loop in the mutation function. Convex queues up all database changes in the function and executes them all in a single transaction when the function ends, leading to a single efficient change to the database.

Database migrations are done through the migration component. The component is designed to run online migrations to safely evolve your database schema over time. It allows you to resume from failures, and validate changes with dry runs.

Framework for long running data migrations of live data.

To prevent accidental writes of large amounts of records, queries and mutations enforce limits detailed here.

**Examples:**

Example 1 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const createTask = mutation({  args: { text: v.string() },  handler: async (ctx, args) => {    const taskId = await ctx.db.insert("tasks", { text: args.text });    // do something with `taskId`  },});
```

Example 2 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const updateTask = mutation({  args: { id: v.id("tasks") },  handler: async (ctx, args) => {    const { id } = args;    console.log(await ctx.db.get(id));    // { text: "foo", status: { done: true }, _id: ... }    // Add `tag` and overwrite `status`:    await ctx.db.patch(id, { tag: "bar", status: { archived: true } });    console.log(await ctx.db.get(id));    // { text: "foo", tag: "bar", status: { archived: true }, _id: ... }    // Unset `tag` by setting it to `undefined`    await ctx.db.patch(id, { tag: undefined });    console.log(await ctx.db.get(id));    // { text: "foo", status: { archived: true }, _id: ... }  },});
```

Example 3 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const replaceTask = mutation({  args: { id: v.id("tasks") },  handler: async (ctx, args) => {    const { id } = args;    console.log(await ctx.db.get(id));    // { text: "foo", _id: ... }    // Replace the whole document    await ctx.db.replace(id, { invalid: true });    console.log(await ctx.db.get(id));    // { invalid: true, _id: ... }  },});
```

Example 4 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const deleteTask = mutation({  args: { id: v.id("tasks") },  handler: async (ctx, args) => {    await ctx.db.delete(args.id);  },});
```

---

## Introduction to Indexes and Query Performance

**URL:** https://docs.convex.dev/database/reading-data/indexes/indexes-and-query-perf

**Contents:**
- Introduction to Indexes and Query Performance
- A Library of Documents​
- Full Table Scans​
- Card Catalogs​
- Indexes​
- Backfilling and Maintaining Indexes​
- Indexing Multiple Fields​
- Conclusions​

How do I ensure my Convex database queries are fast and efficient? When should I define an index? What is an index?

This document explains how you should think about query performance in Convex by describing a simplified model of how queries and indexes function.

If you already have a strong understanding of database queries and indexes you can jump straight to the reference documentation instead:

You can imagine that Convex is a physical library storing documents as physical books. In this world, every time you add a document to Convex with db.insert("books", {...}) a librarian places the book on a shelf.

By default, Convex organizes your documents in the order they were inserted. You can imagine the librarian inserting documents left to right on a shelf.

If you run a query to find the first book like:

then the librarian could start at the left edge of the shelf and find the first book. This is an extremely fast query because the librarian only has to look at a single book to get the result.

Similarly, if we want to retrieve the last book that was inserted we could instead do:

This is the same query but we've swapped the order to descending. In the library, this means that the librarian will start on the right edge of the shelf and scan right-to-left. The librarian still only needs to look at a single book to determine the result so this query is also extremely fast.

Now imagine that someone shows up at the library and asks "what books do you have by Jane Austen?"

This could be expressed as:

This query is saying "look through all of the books, left-to-right, and collect the ones where the author field is Jane Austen." To do this the librarian will need to look through the entire shelf and check the author of every book.

This query is a full table scan because it requires Convex to look at every document in the table. The performance of this query is based on the number of books in the library.

If your Convex table has a small number of documents, this is fine! Full table scans should still be fast if there are a few hundred documents, but if the table has many thousands of documents these queries will become slow.

In the library analogy, this kind of query is fine if the library has a single shelf. As the library expands into a bookcase with many shelves or many bookcases, this approach becomes infeasible.

How can we more efficiently find books given an author?

One option is to re-sort the entire library by author. This will solve our immediate problem but now our original queries for firstBook and lastBook would become full table scans because we'd need to examine every book to see which was inserted first/last.

Another option is to duplicate the entire library. We could purchase 2 copies of every book and put them on 2 separate shelves: one shelf sorted by insertion time and another sorted by author. This would work, but it's expensive. We now need twice as much space for our library.

A better option is to build an index on author. In the library, we could use an old-school card catalog to organize the books by author. The idea here is that the librarian will write an index card for each book that contains:

These index cards will be sorted by author and live in a separate organizer from the shelves that hold the books. The card catalog should stay small because it only has an index card per book (not the entire text of the book).

When a patron asks for "books by Jane Austen", the librarian can now:

This is quite fast because the librarian can quickly find the index cards for Jane Austen. It's still a little bit of work to find the book for each card but the number of index cards is small so this is quite fast.

Database indexes work based on the same concept! With Convex you can define an index with:

then Convex will create a new index called by_author on author. This means that your books table will now have an additional data structure that is sorted by the author field.

You can query this index with:

This query instructs Convex to go to the by_author index and find all the entries where doc.author === "Jane Austen". Because the index is sorted by author, this is a very efficient operation. This means that Convex can execute this query in the same manner that the librarian can:

The performance of this query is based on the number of documents where doc.author === "Jane Austen" which should be quite small. We've dramatically sped up the query!

One interesting detail to think about is the work needed to create this new structure. In the library, the librarian must go through every book on the shelf and put a new index card for each one in the card catalog sorted by author. Only after that can the librarian trust that the card catalog will give it correct results.

The same is true for Convex indexes! When you define a new index, the first time you run npx convex deploy Convex will need to loop through all of your documents and index each one. This is why the first deploy after the creation of a new index will be slightly slower than normal; Convex has to do a bit of work for each document in your table. If the table is particularly large, consider using a staged index to complete the backfill asynchronously from the deploy.

Similarly, even after an index is defined, Convex will have to do a bit of extra work to keep this index up to date as the data changes. Every time a document is inserted, updated, or deleted in an indexed table, Convex will also update its index entry. This is analogous to a librarian creating new index cards for new books as they add them to the library.

If you are defining a few indexes there is no need to worry about the maintenance cost. As you define more indexes, the cost to maintain them grows because every insert needs to update every index. This is why Convex has a limit of 32 indexes per table. In practice most applications define a handful of indexes per table to make their important queries efficient.

Now imagine that a patron shows up at the library and would like to check out Foundation by Isaac Asimov. Given our index on author, we can write a query that uses the index to find all the books by Isaac Asimov and then examines the title of each book to see if it's Foundation.

This query describes how a librarian might execute the query. The librarian will use the card catalog to find all of the index cards for Isaac Asimov's books. The cards themselves don't have the title of the book so the librarian will need to find every Asimov book on the shelves and look at its title to find the one named Foundation. Lastly, this query ends with .unique because we expect there to be at most one result.

This query demonstrates the difference between filtering using withIndex and filter. withIndex only allows you to restrict your query based on the index. You can only do operations that the index can do efficiently like finding all documents with a given author.

filter on the other hand allows you to write arbitrary, complex expressions but it won't be run using the index. Instead, filter expressions will be evaluated on every document in the range.

Given all of this, we can conclude that the performance of indexed queries is based on how many documents are in the index range. In this case, the performance is based on the number of Isaac Asimov books because the librarian will need to look at each one to examine its title.

Unfortunately, Isaac Asimov wrote a lot of books. Realistically even with 500+ books, this will be fast enough on Convex with the existing index, but let's consider how we could improve it anyway.

One approach is to build a separate by_title index on title. This could let us swap the work we do in .filter and .withIndex to instead be:

In this query, we're efficiently using the index to find all the books called Foundation and then filtering through to find the one by Isaac Asimov.

This is okay, but we're still at risk of having a slow query because too many books have a title of Foundation. An even better approach could be to build a compound index that indexes both author and title. Compound indexes are indexes on an ordered list of fields.

In this index, books are sorted first by the author and then within each author by title. This means that a librarian can use the index to jump to the Isaac Asimov section and quickly find Foundation within it.

Expressing this as a Convex query this looks like:

Here the index range expression tells Convex to only consider documents where the author is Isaac Asimov and the title is Foundation. This is only a single document so this query will be quite fast!

Because this index sorts by author and then by title, it also efficiently supports queries like "All books by Isaac Asimov that start with F." We could express this as:

This query uses the index to find books where author === "Isaac Asimov" && "F" <= title < "G". Once again, the performance of this query is based on how many documents are in the index range. In this case, that's just the Asimov books that begin with "F" which is quite small.

Also note that this index also supports our original query for "books by Jane Austen." It's okay to only use the author field in an index range expression and not restrict by title at all.

Lastly, imagine that a library patron asks for the book The Three-Body Problem but they don't know the author's name. Our by_author_title index won't help us here because it's sorted first by author, and then by title. The title, The Three-Body Problem, could appear anywhere in the index!

The Convex TypeScript types in the withIndex make this clear because they require that you compare index fields in order. Because the index is defined on ["author", "title"], you must first compare the author with .eq before the title.

In this case, the best option is probably to create the separate by_title index to facilitate this query.

Congrats! You now understand how queries and indexes work within Convex!

Here are the main points we've covered:

To learn more about queries and indexes, check out our reference documentation:

**Examples:**

Example 1 (ts):
```ts
const firstBook = await ctx.db.query("books").first();
```

Example 2 (ts):
```ts
const lastBook = await ctx.db.query("books").order("desc").first();
```

Example 3 (ts):
```ts
const books = await ctx.db  .query("books")  .filter((q) => q.eq(q.field("author"), "Jane Austen"))  .collect();
```

Example 4 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";export default defineSchema({  books: defineTable({    author: v.string(),    title: v.string(),    text: v.string(),  }).index("by_author", ["author"]),});
```

---

## Data Import & Export

**URL:** https://docs.convex.dev/database/import-export

**Contents:**
- Data Import & Export

If you're bootstrapping your app from existing data, Convex provides three ways to get the data in:

You can export data from Convex in two ways.

Data Import & Export is currently a beta feature. If you have feedback or feature requests, let us know on Discord!

---

## Introduction to Indexes and Query Performance

**URL:** https://docs.convex.dev/database/indexes/indexes-and-query-perf

**Contents:**
- Introduction to Indexes and Query Performance
- A Library of Documents​
- Full Table Scans​
- Card Catalogs​
- Indexes​
- Backfilling and Maintaining Indexes​
- Indexing Multiple Fields​
- Conclusions​

How do I ensure my Convex database queries are fast and efficient? When should I define an index? What is an index?

This document explains how you should think about query performance in Convex by describing a simplified model of how queries and indexes function.

If you already have a strong understanding of database queries and indexes you can jump straight to the reference documentation instead:

You can imagine that Convex is a physical library storing documents as physical books. In this world, every time you add a document to Convex with db.insert("books", {...}) a librarian places the book on a shelf.

By default, Convex organizes your documents in the order they were inserted. You can imagine the librarian inserting documents left to right on a shelf.

If you run a query to find the first book like:

then the librarian could start at the left edge of the shelf and find the first book. This is an extremely fast query because the librarian only has to look at a single book to get the result.

Similarly, if we want to retrieve the last book that was inserted we could instead do:

This is the same query but we've swapped the order to descending. In the library, this means that the librarian will start on the right edge of the shelf and scan right-to-left. The librarian still only needs to look at a single book to determine the result so this query is also extremely fast.

Now imagine that someone shows up at the library and asks "what books do you have by Jane Austen?"

This could be expressed as:

This query is saying "look through all of the books, left-to-right, and collect the ones where the author field is Jane Austen." To do this the librarian will need to look through the entire shelf and check the author of every book.

This query is a full table scan because it requires Convex to look at every document in the table. The performance of this query is based on the number of books in the library.

If your Convex table has a small number of documents, this is fine! Full table scans should still be fast if there are a few hundred documents, but if the table has many thousands of documents these queries will become slow.

In the library analogy, this kind of query is fine if the library has a single shelf. As the library expands into a bookcase with many shelves or many bookcases, this approach becomes infeasible.

How can we more efficiently find books given an author?

One option is to re-sort the entire library by author. This will solve our immediate problem but now our original queries for firstBook and lastBook would become full table scans because we'd need to examine every book to see which was inserted first/last.

Another option is to duplicate the entire library. We could purchase 2 copies of every book and put them on 2 separate shelves: one shelf sorted by insertion time and another sorted by author. This would work, but it's expensive. We now need twice as much space for our library.

A better option is to build an index on author. In the library, we could use an old-school card catalog to organize the books by author. The idea here is that the librarian will write an index card for each book that contains:

These index cards will be sorted by author and live in a separate organizer from the shelves that hold the books. The card catalog should stay small because it only has an index card per book (not the entire text of the book).

When a patron asks for "books by Jane Austen", the librarian can now:

This is quite fast because the librarian can quickly find the index cards for Jane Austen. It's still a little bit of work to find the book for each card but the number of index cards is small so this is quite fast.

Database indexes work based on the same concept! With Convex you can define an index with:

then Convex will create a new index called by_author on author. This means that your books table will now have an additional data structure that is sorted by the author field.

You can query this index with:

This query instructs Convex to go to the by_author index and find all the entries where doc.author === "Jane Austen". Because the index is sorted by author, this is a very efficient operation. This means that Convex can execute this query in the same manner that the librarian can:

The performance of this query is based on the number of documents where doc.author === "Jane Austen" which should be quite small. We've dramatically sped up the query!

One interesting detail to think about is the work needed to create this new structure. In the library, the librarian must go through every book on the shelf and put a new index card for each one in the card catalog sorted by author. Only after that can the librarian trust that the card catalog will give it correct results.

The same is true for Convex indexes! When you define a new index, the first time you run npx convex deploy Convex will need to loop through all of your documents and index each one. This is why the first deploy after the creation of a new index will be slightly slower than normal; Convex has to do a bit of work for each document in your table. If the table is particularly large, consider using a staged index to complete the backfill asynchronously from the deploy.

Similarly, even after an index is defined, Convex will have to do a bit of extra work to keep this index up to date as the data changes. Every time a document is inserted, updated, or deleted in an indexed table, Convex will also update its index entry. This is analogous to a librarian creating new index cards for new books as they add them to the library.

If you are defining a few indexes there is no need to worry about the maintenance cost. As you define more indexes, the cost to maintain them grows because every insert needs to update every index. This is why Convex has a limit of 32 indexes per table. In practice most applications define a handful of indexes per table to make their important queries efficient.

Now imagine that a patron shows up at the library and would like to check out Foundation by Isaac Asimov. Given our index on author, we can write a query that uses the index to find all the books by Isaac Asimov and then examines the title of each book to see if it's Foundation.

This query describes how a librarian might execute the query. The librarian will use the card catalog to find all of the index cards for Isaac Asimov's books. The cards themselves don't have the title of the book so the librarian will need to find every Asimov book on the shelves and look at its title to find the one named Foundation. Lastly, this query ends with .unique because we expect there to be at most one result.

This query demonstrates the difference between filtering using withIndex and filter. withIndex only allows you to restrict your query based on the index. You can only do operations that the index can do efficiently like finding all documents with a given author.

filter on the other hand allows you to write arbitrary, complex expressions but it won't be run using the index. Instead, filter expressions will be evaluated on every document in the range.

Given all of this, we can conclude that the performance of indexed queries is based on how many documents are in the index range. In this case, the performance is based on the number of Isaac Asimov books because the librarian will need to look at each one to examine its title.

Unfortunately, Isaac Asimov wrote a lot of books. Realistically even with 500+ books, this will be fast enough on Convex with the existing index, but let's consider how we could improve it anyway.

One approach is to build a separate by_title index on title. This could let us swap the work we do in .filter and .withIndex to instead be:

In this query, we're efficiently using the index to find all the books called Foundation and then filtering through to find the one by Isaac Asimov.

This is okay, but we're still at risk of having a slow query because too many books have a title of Foundation. An even better approach could be to build a compound index that indexes both author and title. Compound indexes are indexes on an ordered list of fields.

In this index, books are sorted first by the author and then within each author by title. This means that a librarian can use the index to jump to the Isaac Asimov section and quickly find Foundation within it.

Expressing this as a Convex query this looks like:

Here the index range expression tells Convex to only consider documents where the author is Isaac Asimov and the title is Foundation. This is only a single document so this query will be quite fast!

Because this index sorts by author and then by title, it also efficiently supports queries like "All books by Isaac Asimov that start with F." We could express this as:

This query uses the index to find books where author === "Isaac Asimov" && "F" <= title < "G". Once again, the performance of this query is based on how many documents are in the index range. In this case, that's just the Asimov books that begin with "F" which is quite small.

Also note that this index also supports our original query for "books by Jane Austen." It's okay to only use the author field in an index range expression and not restrict by title at all.

Lastly, imagine that a library patron asks for the book The Three-Body Problem but they don't know the author's name. Our by_author_title index won't help us here because it's sorted first by author, and then by title. The title, The Three-Body Problem, could appear anywhere in the index!

The Convex TypeScript types in the withIndex make this clear because they require that you compare index fields in order. Because the index is defined on ["author", "title"], you must first compare the author with .eq before the title.

In this case, the best option is probably to create the separate by_title index to facilitate this query.

Congrats! You now understand how queries and indexes work within Convex!

Here are the main points we've covered:

To learn more about queries and indexes, check out our reference documentation:

**Examples:**

Example 1 (ts):
```ts
const firstBook = await ctx.db.query("books").first();
```

Example 2 (ts):
```ts
const lastBook = await ctx.db.query("books").order("desc").first();
```

Example 3 (ts):
```ts
const books = await ctx.db  .query("books")  .filter((q) => q.eq(q.field("author"), "Jane Austen"))  .collect();
```

Example 4 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";export default defineSchema({  books: defineTable({    author: v.string(),    title: v.string(),    text: v.string(),  }).index("by_author", ["author"]),});
```

---

## Database

**URL:** https://docs.convex.dev/database

**Contents:**
- Database
- Tables​
- Documents​
- Schemas​
- Next: Reading Data

The Convex database provides a relational data model, stores JSON-like documents, and can be used with or without a schema. It "just works," giving you predictable query performance in an easy-to-use interface.

Query and mutation functions read and write data through a lightweight JavaScript API. There is nothing to set up and no need to write any SQL. Just use JavaScript to express your app's needs.

Start by learning about the basics of tables, documents and schemas below, then move on to Reading Data and Writing Data.

As your app grows more complex you'll need more from your database:

Your Convex deployment contains tables that hold your app's data. Initially, your deployment contains no tables or documents.

Each table springs into existence as soon as you add the first document to it.

You do not have to specify a schema upfront or create tables explicitly.

Tables contain documents. Documents are very similar to JavaScript objects. They have fields and values, and you can nest arrays or objects within them.

These are all valid Convex documents:

They can also contain references to other documents in other tables. See Data Types to learn more about the types supported in Convex and Document IDs to learn about how to use those types to model your data.

Though optional, schemas ensure that your data looks exactly how you want. For a simple chat app, the schema will look like this:

You can choose to be as flexible as you want by using types such as v.any() or as specific as you want by precisely describing a v.object().

See the schema documentation to learn more about schemas.

Query and read data from Convex database tables

**Examples:**

Example 1 (javascript):
```javascript
// `friends` table doesn't exist.await ctx.db.insert("friends", { name: "Jamie" });// Now it does, and it has one document.
```

Example 2 (json):
```json
{}{"name": "Jamie"}{"name": {"first": "Ari", "second": "Cole"}, "age": 60}
```

Example 3 (typescript):
```typescript
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// @snippet start schemaexport default defineSchema({  messages: defineTable({    author: v.id("users"),    body: v.string(),  }),});
```

---

## Document IDs

**URL:** https://docs.convex.dev/database/document-ids

**Contents:**
- Document IDs
- References and relationships​
- Trading off deeply nested documents vs. relationships​
- Serializing IDs​

Example: Relational Data Modeling

Every document in convex has a globally unique string document ID that is automatically generated by the system.

You can use this ID to efficiently read a single document using the get method:

You can access the ID of a document in the _id field:

Also, this same ID can be used to update that document in place:

Convex generates an Id TypeScript type based on your schema that is parameterized over your table names:

IDs are strings at runtime, but the Id type can be used to distinguish IDs from other strings at compile time.

In Convex, you can reference a document simply by embedding its Id in another document:

You can follow references with ctx.db.get:

And query for documents with a reference:

Using Ids as references can allow you to build a complex data model.

While it's useful that Convex supports nested objects and arrays, you should keep documents relatively small in size. In practice, we recommend limiting Arrays to no more than 5-10 elements and avoiding deeply nested Objects.

Instead, leverage separate tables, documents, and references to structure your data. This will lead to better maintainability and performance as your project grows.

IDs are strings, which can be easily inserted into URLs or stored outside of Convex.

You can pass an ID string from an external source (like a URL) into a Convex function and get the corresponding object. If you're using TypeScript on the client you can cast a string to the Id type:

Since this ID is coming from an external source, use an argument validator or ctx.db.normalizeId to confirm that the ID belongs to the expected table before returning the object.

**Examples:**

Example 1 (ts):
```ts
const userId = await ctx.db.insert("users", { name: "Michael Jordan" });
```

Example 2 (ts):
```ts
const retrievedUser = await ctx.db.get(userId);
```

Example 3 (ts):
```ts
const userId = retrievedUser._id;
```

Example 4 (ts):
```ts
await ctx.db.patch(userId, { name: "Steph Curry" });
```

---

## Indexes

**URL:** https://docs.convex.dev/database/indexes/

**Contents:**
- Indexes
- Defining indexes​
- Querying documents using indexes​
- Sorting with indexes​
- Staged indexes​
- Limits​

Indexes are a data structure that allow you to speed up your document queries by telling Convex how to organize your documents. Indexes also allow you to change the order of documents in query results.

For a more in-depth introduction to indexing see Indexes and Query Performance.

Indexes are defined as part of your Convex schema. Each index consists of:

To add an index onto a table, use the index method on your table's schema:

The by_channel index is ordered by the channel field defined in the schema. For messages in the same channel, they are ordered by the system-generated _creationTime field which is added to all indexes automatically.

By contrast, the by_channel_user index orders messages in the same channel by the user who sent them, and only then by _creationTime.

Indexes are created in npx convex dev and npx convex deploy.

You may notice that the first deploy that defines an index is a bit slower than normal. This is because Convex needs to backfill your index. The more data in your table, the longer it will take Convex to organize it in index order. If you need to add indexes to large tables, use a staged index.

You can feel free to query an index in the same deploy that defines it. Convex will ensure that the index is backfilled before the new query and mutation functions are registered.

In addition to adding new indexes, npx convex deploy will delete indexes that are no longer present in your schema. Make sure that your indexes are completely unused before removing them from your schema!

A query for "messages in channel created 1-2 minutes ago" over the by_channel index would look like:

The .withIndex method defines which index to query and how Convex will use that index to select documents. The first argument is the name of the index and the second is an index range expression. An index range expression is a description of which documents Convex should consider when running the query.

The choice of index both affects how you write the index range expression and what order the results are returned in. For instance, by making both a by_channel and by_channel_user index, we can get results within a channel ordered by _creationTime or by user, respectively. If you were to use the by_channel_user index like this:

The results would be all of the messages in a channel ordered by user, then by _creationTime. If you were to use by_channel_user like this:

The results would be the messages in the given channel sent by user, ordered by _creationTime.

An index range expression is always a chained list of:

You must step through fields in index order.

Each equality expression must compare a different index field, starting from the beginning and in order. The upper and lower bounds must follow the equality expressions and compare the next field.

For example, it is not possible to write a query like:

This query is invalid because the by_channel index is ordered by (channel, _creationTime) and this query range has a comparison on _creationTime without first restricting the range to a single channel. Because the index is sorted first by channel and then by _creationTime, it isn't a useful index for finding messages in all channels created 1-2 minutes ago. The TypeScript types within withIndex will guide you through this.

To better understand what queries can be run over which indexes, see Introduction to Indexes and Query Performance.

The performance of your query is based on the specificity of the range.

For example, if the query is

then query's performance would be based on the number of messages in channel created 1-2 minutes ago.

If the index range is not specified, all documents in the index will be considered in the query.

For performance, define index ranges that are as specific as possible! If you are querying a large table and you're unable to add any equality conditions with .eq, you should consider defining a new index.

.withIndex is designed to only allow you to specify ranges that Convex can efficiently use your index to find. For all other filtering you can use the .filter method.

For example to query for "messages in channel not created by me" you could do:

In this case the performance of this query will be based on how many messages are in the channel. Convex will consider each message in the channel and only return the messages where the user field matches myUserId.

Queries that use withIndex are ordered by the columns specified in the index.

The order of the columns in the index dictates the priority for sorting. The values of the columns listed first in the index are compared first. Subsequent columns are only compared as tie breakers only if all earlier columns match.

Since Convex automatically includes _creationTime as the last column in all indexes, _creationTime will always be the final tie breaker if all other columns in the index are equal.

For example, by_channel_user includes channel, user, and \_creationTime. So queries on messages that use .withIndex("by_channel_user") will be sorted first by channel, then by user within each channel, and finally by the creation time.

Sorting with indexes allows you to satisfy use cases like displaying the top N scoring users, the most recent N transactions, or the most N liked messages.

For example, to get the top 10 highest scoring players in your game, you might define an index on the player's highest score:

You can then efficiently find the top 10 highest scoring players using your index and take(10):

In this example, the range expression is omitted because we're looking for the highest scoring players of all time. This particular query is reasonably efficient for large data sets only because we're using take().

If you use an index without a range expression, you should always use one of the following in conjunction with withIndex:

These APIs allow you to efficiently limit your query to a reasonable size without performing a full table scan.

When your query fetches documents from the database, it will scan the rows in the range you specify. If you are using .collect(), for instance, it will scan all of the rows in the range. So if you use withIndex without a range expression, you will be scanning the whole table, which can be slow when your table has thousands of rows. .filter() doesn't affect which documents are scanned. Using .first() or .unique() or .take(n) will only scan rows until it has enough documents.

You can include a range expression to satisfy more targeted queries. For example, to get the top scoring players in Canada, you might use both take() and a range expression:

By default, index creation happens synchronously when you deploy code. For large tables, the process of backfilling the index for the existing table can be slow. Staged indexes are a way to create an index on a large table asynchronously without blocking deploy. This can be useful if you are working on multiple features at once.

To create a staged index, use the following syntax in your schema.ts.

Staged indexes cannot be used in queries until you enable them. To enable them, they must first finish backfilling.

You can check the backfill progress via the Indexes pane on the dashboard data page. Once it is complete, you can enable the index and use it by removing the staged option.

Convex supports indexes containing up to 16 fields. You can define 32 indexes on each table. Indexes can't contain duplicate fields.

No reserved fields (starting with _) are allowed in indexes. The _creationTime field is automatically added to the end of every index to ensure a stable ordering. It should not be added explicitly in the index definition, and it's counted towards the index fields limit.

The by_creation_time index is created automatically (and is what is used in database queries that don't specify an index). The by_id index is reserved.

**Examples:**

Example 1 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with two indexes.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  })    .index("by_channel", ["channel"])    .index("by_channel_user", ["channel", "user"]),});
```

Example 2 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) =>    q      .eq("channel", channel)      .gt("_creationTime", Date.now() - 2 * 60000)      .lt("_creationTime", Date.now() - 60000),  )  .collect();
```

Example 3 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) => q.eq("channel", channel))  .collect();
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel_user", (q) =>    q.eq("channel", channel).eq("user", user),  )  .collect();
```

---

## Reading Data

**URL:** https://docs.convex.dev/database/reading-data/

**Contents:**
- Reading Data
- Reading a single document​
- Querying documents​
- Filtering your query​
  - 1. Define the index​
  - 2. Filter a query with an index​
- Ordering​
  - Ordering of different types of values​
- Retrieving results​
  - Taking n results​

Query and mutation functions can read data from database tables using document ids and document queries.

Given a single document's id you can read its data with the db.get method:

Note: You should use the v.id validator like in the example above to make sure you are not exposing data from tables other than the ones you intended.

Document queries always begin by choosing the table to query with the db.query method:

We'll see how this works in the examples below.

The best way to filter in Convex is to use indexes. Indexes build a special internal structure in your database to speed up lookups.

There are two steps to using indexes:

If you aren't familiar with how to create a Convex schema, read the schema doc.

Let’s assume you’re building a chat app and want to get all messages in a particular channel. You can define a new index called by_channel on the messages table by using the .index() method in your schema.

In your query function, you can now filter your messages table by using the by_channel index.

In Convex, you must explicitly use the withIndex() syntax to ensure your database uses the index. This differs from a more traditional SQL database, where the database implicitly chooses to use an index based on heuristics. The Convex approach leads to fewer surprises in the long run.

You can create an index across multiple fields at once, query a specific range of data, and change the order of your query result. Read the complete index documentation to learn more.

Convex also supports a slower filtering mechanism that effectively loops through the table to match the filter. This can be useful if you know your table will be small (low thousands of rows), you're prototyping, or you want to filter an index query further. You can read more about filters here.

By default Convex always returns documents ordered by _creationTime.

You can use .order("asc" | "desc") to pick whether the order is ascending or descending. If the order isn't specified, it defaults to ascending.

If you need to sort on a field other than _creationTime and your document query returns a small number of documents (on the order of hundreds rather than thousands of documents), consider sorting in Javascript:

For document queries that return larger numbers of documents, you'll want to use an index to improve the performance. Document queries that use indexes will be ordered based on the columns in the index and can avoid slow table scans.

See Limits for details.

A single field can have values of any Convex type. When there are values of different types in an indexed field, their ascending order is as follows:

No value set (undefined) < Null (null) < Int64 (bigint) < Float64 (number) < Boolean (boolean) < String (string) < Bytes (ArrayBuffer) < Array (Array) < Object (Object)

The same ordering is used by the filtering comparison operators q.lt(), q.lte(), q.gt() and q.gte().

Most of our previous examples have ended the document query with the .collect() method, which returns all the documents that match your filters. Here are the other options for retrieving results.

.take(n) selects only the first n results that match your query.

.first() selects the first document that matches your query and returns null if no documents were found.

.unique() selects the single document from your query or returns null if no documents were found. If there are multiple results it will throw an exception.

.paginate(opts) loads a page of results and returns a Cursor for loading additional results.

See Paginated Queries to learn more.

Convex prefers to have a few, simple ways to walk through and select documents from tables. In Convex, there is no specific query language for complex logic like a join, an aggregation, or a group by.

Instead, you can write the complex logic in Javascript! Convex guarantees that the results will be consistent.

Table join might look like:

Here's an example of computing an average:

If you need more scalable aggregate options (for example to handle frequent updates or large tables), consider using the Sharded Counter or Aggregate components. These components can help you handle high-throughput counters, sums, or computations without looping through the whole table.

Here's an example of grouping and counting:

You can try out the syntax described above directly from the dashboard by writing a custom test query.

**Examples:**

Example 1 (ts):
```ts
import { query } from "./_generated/server";import { v } from "convex/values";export const getTask = query({  args: { taskId: v.id("tasks") },  handler: async (ctx, args) => {    const task = await ctx.db.get(args.taskId);    // do something with `task`  },});
```

Example 2 (ts):
```ts
import { query } from "./_generated/server";export const listTasks = query({  handler: async (ctx) => {    const tasks = await ctx.db.query("tasks").collect();    // do something with `tasks`  },});
```

Example 3 (ts):
```ts
import { defineSchema, defineTable } from "convex/server";import { v } from "convex/values";// Define a messages table with an index.export default defineSchema({  messages: defineTable({    channel: v.id("channels"),    body: v.string(),    user: v.id("users"),  }).index("by_channel", ["channel"]),});
```

Example 4 (ts):
```ts
const messages = await ctx.db  .query("messages")  .withIndex("by_channel", (q) => q.eq("channel", channel))  .collect();
```

---
