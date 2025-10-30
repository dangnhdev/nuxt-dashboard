# Convex - Functions

**Pages:** 16

---

## Application Errors

**URL:** https://docs.convex.dev/functions/error-handling/application-errors

**Contents:**
- Application Errors
- Returning different values​
- Throwing application errors​
  - Application error data payload​
- Handling application errors on the client​

If you have expected ways your functions might fail, you can either return different values or throw ConvexErrors.

If you're using TypeScript different return types can enforce that you're handling error scenarios.

For example, a createUser mutation could return

to express that either the mutation succeeded or the email address was already taken.

This ensures that you remember to handle these cases in your UI.

You might prefer to throw errors for the following reasons:

Convex provides an error subclass, ConvexError, which can be used to carry information from the backend to the client:

You can pass the same data types supported by function arguments, return types and the database, to the ConvexError constructor. This data will be stored on the data property of the error:

Error payloads more complicated than a simple string are helpful for more structured error logging, or for handling sets of errors differently on the client.

On the client, application errors also use the ConvexError class, and the data they carry can be accessed via the data property:

**Examples:**

Example 1 (ts):
```ts
Id<"users"> | { error: "EMAIL_ADDRESS_IN_USE" };
```

Example 2 (ts):
```ts
import { ConvexError } from "convex/values";import { mutation } from "./_generated/server";export const assignRole = mutation({  args: {    // ...  },  handler: (ctx, args) => {    const isTaken = isRoleTaken(/* ... */);    if (isTaken) {      throw new ConvexError("Role is already taken");    }    // ...  },});
```

Example 3 (ts):
```ts
// error.data === "My fancy error message"throw new ConvexError("My fancy error message");// error.data === {message: "My fancy error message", code: 123, severity: "high"}throw new ConvexError({  message: "My fancy error message",  code: 123,  severity: "high",});// error.data === {code: 123, severity: "high"}throw new ConvexError({  code: 123,  severity: "high",});
```

Example 4 (tsx):
```tsx
import { ConvexError } from "convex/values";import { useMutation } from "convex/react";import { api } from "../convex/_generated/api";export function MyApp() {  const doSomething = useMutation(api.myFunctions.mutateSomething);  const handleSomething = async () => {    try {      await doSomething({ a: 1, b: 2 });    } catch (error) {      const errorMessage =        // Check whether the error is an application error        error instanceof ConvexError          ? // Access data and cast it to the type we expect            (error.data as { message: string }).message          : // Must be some de
...
```

---

## Internal Functions

**URL:** https://docs.convex.dev/functions/internal-functions

**Contents:**
- Internal Functions
- Use cases for internal functions​
- Defining internal functions​
- Calling internal functions​

Internal functions can only be called by other functions and cannot be called directly from a Convex client.

By default your Convex functions are public and accessible to clients. Public functions may be called by malicious users in ways that cause surprising results. Internal functions help you mitigate this risk. We recommend using internal functions any time you're writing logic that should not be called from a client.

While internal functions help mitigate risk by reducing the public surface area of your application, you can still validate internal invariants using argument validation and/or authentication.

Leverage internal functions by:

An internal function is defined using internalQuery, internalMutation, or internalAction. For example:

If you need to pass complicated objects to internal functions you might prefer to not use argument validation. Note though that if you're using internalQuery or internalMutation it's a better idea to pass around document IDs instead of documents, to ensure the query or mutation is working with the up-to-date state of the database.

Internal functions can be called from actions and scheduled from actions and mutation using the internal object.

For example, consider this public upgrade action that calls the internal plans.markPlanAsProfessional mutation we defined above:

In this example a user should not be able to directly call internal.plans.markPlanAsProfessional without going through the upgrade action — if they did, then they would get a free upgrade.

You can define public and internal functions in the same file.

**Examples:**

Example 1 (ts):
```ts
import { internalMutation } from "./_generated/server";import { v } from "convex/values";export const markPlanAsProfessional = internalMutation({  args: { planId: v.id("plans") },  handler: async (ctx, args) => {    await ctx.db.patch(args.planId, { planType: "professional" });  },});
```

Example 2 (ts):
```ts
import { internalAction } from "./_generated/server";import { Doc } from "./_generated/dataModel";export const markPlanAsProfessional = internalAction({  handler: async (actionCtx, args) => {    // perform an action, perhaps calling a third-party API  },});
```

Example 3 (ts):
```ts
import { action } from "./_generated/server";import { internal } from "./_generated/api";import { v } from "convex/values";export const upgrade = action({  args: {    planId: v.id("plans"),  },  handler: async (ctx, args) => {    // Call out to payment provider (e.g. Stripe) to charge customer    const response = await fetch("https://...");    if (response.ok) {      // Mark the plan as "professional" in the Convex DB      await ctx.runMutation(internal.plans.markPlanAsProfessional, {        planId: args.planId,      });    }  },});
```

---

## Functions

**URL:** https://docs.convex.dev/dashboard/deployments/functions

**Contents:**
- Functions
- Running functions​
  - Querying a paginated function​
  - Assuming a user identity​
- Metrics​
  - Invocations​
  - Errors​
  - Cache Hit Rate​
  - Execution Time​

The functions page shows all currently deployed Convex functions.

For dev deployments, these are updated continuously by npx convex dev. The functions for production deployments are registered with npx convex deploy.

To run a Convex function in the dashboard, select a function from the list on the left-hand side of the page, and click the "Run Function" button that appears next to the function's name.

If you're not on the functions page, you can still open this UI via the persistent fn button shown on the bottom right of all deployment pages. The keyboard shortcut to open the function runner is Ctrl + ` (backtick).

This view allows you to fill out the arguments for your function and run it.

Query results will update automatically as you modify function arguments and data changes.

Mutation and action results will be visible once you click the "Run" button.

Note that these results will show the logs and value returned from the function. To see what changed when you ran your function, see the data page.

You can also write a custom query function by choosing the “Custom test query“ option instead of one of your deployed functions.

When querying a paginated function in the dashboard, the UI will expect the arguments to include PaginationOptions -- i.e. an object containing the numItems field, and optionally the cursor field. The name of this argument should be the same as the name defined in your query function.

Assuming a user identity in the Convex dashboard does not give you access to a real user identity. Instead, this concept can be thought of as "mocking" a user identity into your function.

If you're building an authenticated application, you may want to run a Convex function while acting as an authenticated user identity.

To do so, check the "Act as a user" box.

From there, you can type in the box that appears to fill out the user identity object.

The valid user attributes are:

*These attributes are required.

There are four basic charts for each function. For overall team usage metrics, see team settings.

This chart plots the number of times your function was called per minute. As your app's usage increases, you should see this chart trend upward as well.

A plot of any exceptions that occur while running your function. Want to know what's going wrong? Check out the logs page, detailed below.

Cache hit rate only applies to query functions

A percentage rate of how often this function is simply reusing a cached value vs. being rerun. You

*[Content truncated]*

---

## Bundling

**URL:** https://docs.convex.dev/functions/bundling

**Contents:**
- Bundling
- Bundling for Convex​
- Bundling limitations​
  - Code size limits​
  - Dynamic dependencies​
- External packages​
  - Package installation on the server​
  - Specifying external packages​
  - Troubleshooting external packages​
    - Incorrect package versions​

Bundling is the process of gathering, optimizing and transpiling the JS/TS source code of functions and their dependencies. During development and when deploying, the code is transformed to a format that Convex runtimes can directly and efficiently execute.

Convex currently bundles all dependencies automatically, but for the Node.js runtime you can disable bundling certain packages via the external packages config.

When you push code either via npx convex dev or npx convex deploy, the Convex CLI uses esbuild to traverse your convex/ folder and bundle your functions and all of their used dependencies into a source code bundle. This bundle is then sent to the server.

Thanks to bundling you can write your code using both modern ECMAScript Modules (ESM) or the older CommonJS (CJS) syntax.

The nature of bundling comes with a few limitations.

The total size of your bundled function code in your convex/ folder is limited to 32MiB (~33.55MB). Other platform limits can be found here.

While this limit in itself is quite high for just source code, certain dependencies can quickly make your bundle size cross over this limit, particularly if they are not effectively tree-shakeable (such as aws-sdk or snowflake-sdk)

You can follow these steps to debug bundle size:

Note that this will not push code, and just generated a bundle for debugging purposes.

Use source-map-explorer to visualize your bundle.

Code bundled for the Convex runtime will be in the isolate directory while code bundled for node actions will be in the node directory.

Large node dependencies can be eliminated from the bundle by marking them as external packages.

Some libraries rely on dynamic imports (via import/require calls) to avoid always including their dependencies. These imports are not supported by the default Convex runtime and will throw an error at runtime.

Additionally, some libraries rely on local files, which cannot be bundled by esbuild. If bundling is used, irrespective of the choice of runtime, these imports will always fail in Convex.

Consider the following examples of packages relying on dynamic dependencies:

As a workaround for the bundling limitations above, Convex provides an escape hatch: external packages. This feature is currently exclusive to Convex's Node.js runtime.

External packages use esbuild's facility for marking a dependency as external. This tells esbuild to not bundle the external dependency at all and to leave the import as a dynamic runtime import using

*[Content truncated]*

**Examples:**

Example 1 (sh):
```sh
npm install convex@latest
```

Example 2 (sh):
```sh
npx convex dev --once --debug-bundle-path /tmp/myBundle
```

Example 3 (sh):
```sh
npx source-map-explorer /tmp/myBundle/**/*.js
```

Example 4 (json):
```json
{  "node": {    "externalPackages": ["*"]  }}
```

---

## Debugging

**URL:** https://docs.convex.dev/functions/debugging

**Contents:**
- Debugging
- Debugging during development​
  - Using a debugger​
- Debugging in production​
- Finding relevant logs by Request ID​

Debugging is the process of figuring out why your code isn't behaving as you expect.

During development the built-in console API allows you to understand what's going on inside your functions:

The following methods are available in the default Convex runtime:

The Convex backend also automatically logs all successful function executions and all errors thrown by your functions.

You can view these logs:

You can exercise your functions from tests, in which case you can add debugger; statements and step through your code. See Testing.

When debugging an issue in production your options are:

Convex backend currently only preserves a limited number of logs, and logs can be erased at any time when the Convex team performs internal maintenance and upgrades. You should therefore set up log streaming and error reporting integrations to enable your team easy access to historical logs and additional information logged by your client.

To find the appropriate logs for an error you or your users experience, Convex includes a Request ID in all exception messages in both dev and prod in this format: [Request ID: <request_id>].

You can copy and paste a Request ID into your Convex dashboard to view the logs for functions started by that request. See the Dashboard logs page for details.

**Examples:**

Example 1 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const mutateSomething = mutation({  args: { a: v.number(), b: v.number() },  handler: (_, args) => {    console.log("Received args", args);    // ...  },});
```

---

## Argument and Return Value Validation

**URL:** https://docs.convex.dev/functions/validation

**Contents:**
- Argument and Return Value Validation
- Adding validators​
- Supported types​
  - Convex values​
  - Unions​
  - Literals​
  - Record objects​
  - Any​
  - Optional fields​
- Extracting TypeScript types​

Argument and return value validators ensure that queries, mutations, and actions are called with the correct types of arguments and return the expected types of return values.

This is important for security! Without argument validation, a malicious user can call your public functions with unexpected arguments and cause surprising results. TypeScript alone won't help because TypeScript types aren't present at runtime. We recommend adding argument validation for all public functions in production apps. For non-public functions that are not called by clients, we recommend internal functions and optionally validation.

Example: Argument Validation

To add argument validation to your functions, pass an object with args and handler properties to the query, mutation or action constructor. To add return value validation, use the returns property in this object:

If you define your function with an argument validator, there is no need to include TypeScript type annotations! The type of your function will be inferred automatically. Similarly, if you define a return value validator, the return type of your function will be inferred from the validator, and TypeScript will check that it matches the inferred return type of the handler function.

Unlike TypeScript, validation for an object will throw if the object contains properties that are not declared in the validator.

If the client supplies arguments not declared in args, or if the function returns a value that does not match the validator declared in returns. This is helpful to prevent bugs caused by mistyped names of arguments or returning more data than intended to a client.

Even args: {} is a helpful use of validators because TypeScript will show an error on the client if you try to pass any arguments to the function which doesn't expect them.

All functions, both public and internal, can accept and return the following data types. Each type has a corresponding validator that can be accessed on the v object imported from "convex/values".

The database can store the exact same set of data types.

Additionally you can also express type unions, literals, any types, and optional fields.

Convex supports the following types of values:

You can describe fields that could be one of multiple types using v.union:

Fields that are a constant can be expressed with v.literal. This is especially useful when combined with unions:

You can describe objects that map arbitrary keys to values with v.record:

You can use other 

*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { mutation, query } from "./_generated/server";import { v } from "convex/values";export const send = mutation({  args: {    body: v.string(),    author: v.string(),  },  returns: v.null(),  handler: async (ctx, args) => {    const { body, author } = args;    await ctx.db.insert("messages", { body, author });  },});
```

Example 2 (typescript):
```typescript
import { mutation } from "./_generated/server";import { v } from "convex/values";export default mutation({  args: {    stringOrNumber: v.union(v.string(), v.number()),  },  handler: async ({ db }, { stringOrNumber }) => {    //...  },});
```

Example 3 (typescript):
```typescript
import { mutation } from "./_generated/server";import { v } from "convex/values";export default mutation({  args: {    oneTwoOrThree: v.union(      v.literal("one"),      v.literal("two"),      v.literal("three"),    ),  },  handler: async ({ db }, { oneTwoOrThree }) => {    //...  },});
```

Example 4 (typescript):
```typescript
import { mutation } from "./_generated/server";import { v } from "convex/values";export default mutation({  args: {    simpleMapping: v.record(v.string(), v.boolean()),  },  handler: async ({ db }, { simpleMapping }) => {    //...  },});
```

---

## Scheduled Functions

**URL:** https://docs.convex.dev/scheduling/scheduled-functions

**Contents:**
- Scheduled Functions
- Scheduling functions​
  - Scheduling from mutations​
  - Scheduling from actions​
  - Scheduling immediately​
- Retrieving scheduled function status​
- Canceling scheduled functions​
- Debugging​
- Error handling​
- Auth​

Convex allows you to schedule functions to run in the future. This allows you to build powerful durable workflows without the need to set up and maintain queues or other infrastructure.

Scheduled functions are stored in the database. This means you can schedule functions minutes, days, and even months in the future. Scheduling is resilient against unexpected downtime or system restarts.

You can schedule public functions and internal functions from mutations and actions via the scheduler provided in the respective function context.

The rest of the arguments are the path to the function and its arguments, similar to invoking a function from the client. For example, here is how to send a message that self-destructs in five seconds.

A single function can schedule up to 1000 functions with total argument size of 8MB.

Scheduling functions from mutations is atomic with the rest of the mutation. This means that if the mutation succeeds, the scheduled function is guaranteed to be scheduled. On the other hand, if the mutations fails, no function will be scheduled, even if the function fails after the scheduling call.

Unlike mutations, actions don't execute as a single database transaction and can have side effects. Thus, scheduling from actions does not depend on the outcome of the function. This means that an action might succeed to schedule some functions and later fail due to transient error or a timeout. The scheduled functions will still be executed.

Using runAfter() with delay set to 0 is used to immediately add a function to the event queue. This usage may be familiar to you if you're used to calling setTimeout(fn, 0).

As noted above, actions are not atomic and are meant to cause side effects. Scheduling immediately becomes useful when you specifically want to trigger an action from a mutation that is conditional on the mutation succeeding. This post goes over a direct example of this in action, where the application depends on an external service to fill in information to the database.

Every scheduled function is reflected as a document in the "_scheduled_functions" system table. runAfter() and runAt() return the id of scheduled function. You can read data from system tables using the db.system.get and db.system.query methods, which work the same as the standard db.get and db.query methods.

This is an example of the returned document:

The returned document has the following fields:

Scheduled function results are available for 7 days after they ha

*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { mutation, internalMutation } from "./_generated/server";import { internal } from "./_generated/api";import { v } from "convex/values";export const sendExpiringMessage = mutation({  args: { body: v.string(), author: v.string() },  handler: async (ctx, args) => {    const { body, author } = args;    const id = await ctx.db.insert("messages", { body, author });    await ctx.scheduler.runAfter(5000, internal.messages.destruct, {      messageId: id,    });  },});export const destruct = internalMutation({  args: {    messageId: v.id("messages"),  },  handler: async (ctx, args) => {    await
...
```

Example 2 (ts):
```ts
export const listScheduledMessages = query({  args: {},  handler: async (ctx, args) => {    return await ctx.db.system.query("_scheduled_functions").collect();  },});export const getScheduledMessage = query({  args: {    id: v.id("_scheduled_functions"),  },  handler: async (ctx, args) => {    return await ctx.db.system.get(args.id);  },});
```

Example 3 (json):
```json
{  "_creationTime": 1699931054642.111,  "_id": "3ep33196167235462543626ss0scq09aj4gqn9kdxrdr",  "args": [{}],  "completedTime": 1699931054690.366,  "name": "messages.js:destruct",  "scheduledTime": 1699931054657,  "state": { "kind": "success" }}
```

Example 4 (ts):
```ts
export const cancelMessage = mutation({  args: {    id: v.id("_scheduled_functions"),  },  handler: async (ctx, args) => {    await ctx.scheduler.cancel(args.id);  },});
```

---

## Queries

**URL:** https://docs.convex.dev/understanding/convex-fundamentals/functions

**Contents:**
- Queries
- Query names​
- The query constructor​
  - Query arguments​
  - Query responses​
  - Query context​
- Splitting up query code via helpers​
- Using NPM packages​
- Calling queries from clients​
- Caching & reactivity & consistency​

Queries are the bread and butter of your backend API. They fetch data from the database, check authentication or perform other business logic, and return data back to the client application.

This is an example query, taking in named arguments, reading data from the database and returning a result:

Read on to understand how to build queries yourself.

Queries are defined in

The path and name of the file, as well as the way the function is exported from the file, determine the name the client will use to call it:

To structure your API you can nest directories inside the convex/ directory:

Default exports receive the name default.

The same rules apply to mutations and actions, while HTTP actions use a different routing approach.

Client libraries in languages other than JavaScript and TypeScript use strings instead of API objects:

To actually declare a query in Convex you use the query constructor function. Pass it an object with a handler function, which returns the query result:

Queries accept named arguments. The argument values are accessible as fields of the second parameter of the handler function:

Arguments and responses are automatically serialized and deserialized, and you can pass and return most value-like JavaScript data to and from your query.

To both declare the types of arguments and to validate them, add an args object using v validators:

See argument validation for the full list of supported types and validators.

The first parameter of the handler function contains the query context.

Queries can return values of any supported Convex type which will be automatically serialized and deserialized.

Queries can also return undefined, which is not a valid Convex value. When a query returns undefined it is translated to null on the client.

The query constructor enables fetching data, and other Convex features by passing a QueryCtx object to the handler function as the first parameter:

Which part of the query context is used depends on what your query needs to do:

To fetch from the database use the db field. Note that we make the handler function an async function so we can await the promise returned by db.get():

Read more about Reading Data.

To return URLs to stored files use the storage field. Read more about File Storage.

To check user authentication use the auth field. Read more about Authentication.

When you want to split up the code in your query or reuse logic across multiple Convex functions you can define and call helper


*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { query } from "./_generated/server";import { v } from "convex/values";// Return the last 100 tasks in a given task list.export const getTaskList = query({  args: { taskListId: v.id("taskLists") },  handler: async (ctx, args) => {    const tasks = await ctx.db      .query("tasks")      .filter((q) => q.eq(q.field("taskListId"), args.taskListId))      .order("desc")      .take(100);    return tasks;  },});
```

Example 2 (ts):
```ts
// This function will be referred to as `api.myFunctions.myQuery`.export const myQuery = …;// This function will be referred to as `api.myFunctions.sum`.export const sum = …;
```

Example 3 (ts):
```ts
// This function will be referred to as `api.foo.myQueries.listMessages`.export const listMessages = …;
```

Example 4 (ts):
```ts
// This function will be referred to as `api.myFunctions.default`.export default …;
```

---

## Auth in Functions

**URL:** https://docs.convex.dev/auth/functions-auth

**Contents:**
- Auth in Functions
- User identity fields​
  - Clerk claims configuration​
  - Custom JWT Auth​
- HTTP Actions​

If you're using Convex Auth, see the authorization doc.

Within a Convex function, you can access information about the currently logged-in user by using the auth property of the QueryCtx, MutationCtx, or ActionCtx object:

The UserIdentity object returned by getUserIdentity is guaranteed to have tokenIdentifier, subject and issuer fields. Which other fields it will include depends on the identity provider used and the configuration of JWT tokens and OpenID scopes.

tokenIdentifier is a combination of subject and issuer to ensure uniqueness even when multiple providers are used.

If you followed one of our integrations with Clerk or Auth0 at least the following fields will be present: familyName, givenName, nickname, pictureUrl, updatedAt, email, emailVerified. See their corresponding standard definition in the OpenID docs.

If you're using Clerk, the fields returned by getUserIdentity are determined by your JWT template's Claims config. If you've set custom claims, they will be returned by getUserIdentity as well.

If you're using Custom JWT auth instead of OpenID standard fields you'll find each nested field available at dot-containing-string field names like identity["properties.email"].

You can also access the user identity from an HTTP action ctx.auth.getUserIdentity(), by calling your endpoint with an Authorization header including a JWT token:

**Examples:**

Example 1 (ts):
```ts
import { mutation } from "./_generated/server";export const myMutation = mutation({  args: {    // ...  },  handler: async (ctx, args) => {    const identity = await ctx.auth.getUserIdentity();    if (identity === null) {      throw new Error("Unauthenticated call to mutation");    }    //...  },});
```

Example 2 (ts):
```ts
import { mutation } from "./_generated/server";export const myMutation = mutation({  args: {    // ...  },  handler: async (ctx, args) => {    const identity = await ctx.auth.getUserIdentity();    const { tokenIdentifier, name, email } = identity!;    //...  },});
```

Example 3 (ts):
```ts
const jwtToken = "...";fetch("https://<deployment name>.convex.site/myAction", {  headers: {    Authorization: `Bearer ${jwtToken}`,  },});
```

---

## Runtimes

**URL:** https://docs.convex.dev/functions/runtimes

**Contents:**
- Runtimes
- Default Convex runtime​
  - Supported APIs​
    - Network APIs​
    - Encoding APIs​
    - Web Stream APIs​
    - Web Crypto APIs​
  - Restrictions on queries and mutations​
    - Using randomness and time in queries and mutations​
  - Actions​

Convex functions can run in two runtimes:

All Convex backend functions are written in JavaScript or TypeScript. By default all functions run in a custom JavaScript runtime very similar to the Cloudflare Workers runtime with access to most web standard globals.

The default runtime has many advantages including:

The default runtime supports most npm libraries that work in the browser, Deno, and Cloudflare workers. If your library isn't supported, you can use an action with the Node.js runtime, or reach out in Discord. We are improving support all the time.

Query and mutation functions are further restricted by the runtime to be deterministic. This allows Convex to automatically retry them by the system as necessary.

Determinism means that no matter how many times your function is run, as long as it is given the same arguments, it will have identical side effects and return the same value.

You don't have to think all that much about maintaining these properties of determinism when you write your Convex functions. Convex will provide helpful error messages as you go, so you can't accidentally do something forbidden.

Convex provides a "seeded" strong pseudo-random number generator at Math.random() so that it can guarantee the determinism of your function. The random number generator's seed is an implicit parameter to your function. Multiple calls to Math.random() in one function call will return different random values. Note that Convex does not reevaluate the Javascript modules on every function run, so a call to Math.random() stored in a global variable will not change between function runs.

To ensure the logic within your function is reproducible, the system time used globally (outside of any function) is "frozen" at deploy time, while the system time during Convex function execution is "frozen" when the function begins. Date.now() will return the same result for the entirety of your function's execution. For example,

Actions are unrestricted by the same rules of determinism as query and mutation functions. Notably actions are allowed to call third-party HTTP endpoints via the browser-standard fetch function.

By default actions also run in Convex’s custom JavaScript runtime with all of its advantages including no cold starts and a browser-like API environment. They can also live in the same file as your query and mutation functions.

Some JavaScript and TypeScript libraries use features that are not included in the default Convex runtime. Convex ac

*[Content truncated]*

**Examples:**

Example 1 (javascript):
```javascript
const globalRand = Math.random(); // `globalRand` does not change between runs.const globalNow = Date.now(); // `globalNow` is the time when Convex functions were deployed.export const updateSomething = mutation({  args: {},  handler: () => {    const now1 = Date.now(); // `now1` is the time when the function execution started.    const rand1 = Math.random(); // `rand1` has a new value for each function run.    // implementation    const now2 = Date.now(); // `now2` === `now1`    const rand2 = Math.random(); // `rand1` !== `rand2`  },});
```

---

## Mutations

**URL:** https://docs.convex.dev/functions/mutation-functions

**Contents:**
- Mutations
- Mutation names​
- The mutation constructor​
  - Mutation arguments​
  - Mutation responses​
  - Mutation context​
- Splitting up mutation code via helpers​
- Using NPM packages​
- Calling mutations from clients​
- Transactions​

Mutations insert, update and remove data from the database, check authentication or perform other business logic, and optionally return a response to the client application.

This is an example mutation, taking in named arguments, writing data to the database and returning a result:

Read on to understand how to build mutations yourself.

Mutations follow the same naming rules as queries, see Query names.

Queries and mutations can be defined in the same file when using named exports.

To declare a mutation in Convex use the mutation constructor function. Pass it an object with a handler function, which performs the mutation:

Unlike a query, a mutation can but does not have to return a value.

Just like queries, mutations accept named arguments, and the argument values are accessible as fields of the second parameter of the handler function:

Arguments and responses are automatically serialized and deserialized, and you can pass and return most value-like JavaScript data to and from your mutation.

To both declare the types of arguments and to validate them, add an args object using v validators:

See argument validation for the full list of supported types and validators.

The first parameter to the handler function is reserved for the mutation context.

Queries can return values of any supported Convex type which will be automatically serialized and deserialized.

Mutations can also return undefined, which is not a valid Convex value. When a mutation returns undefined it is translated to null on the client.

The mutation constructor enables writing data to the database, and other Convex features by passing a MutationCtx object to the handler function as the first parameter:

Which part of the mutation context is used depends on what your mutation needs to do:

To read from and write to the database use the db field. Note that we make the handler function an async function so we can await the promise returned by db.insert():

Read on about Writing Data.

To generate upload URLs for storing files use the storage field. Read on about File Storage.

To check user authentication use the auth field. Read on about Authentication.

To schedule functions to run in the future, use the scheduler field. Read on about Scheduled Functions.

When you want to split up the code in your mutation or reuse logic across multiple Convex functions you can define and call helper

Mutations can call helpers that take a QueryCtx as argument, since the mutation context can do eve

*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";// Create a new task with the given textexport const createTask = mutation({  args: { text: v.string() },  handler: async (ctx, args) => {    const newTaskId = await ctx.db.insert("tasks", { text: args.text });    return newTaskId;  },});
```

Example 2 (ts):
```ts
import { mutation } from "./_generated/server";export const mutateSomething = mutation({  handler: () => {    // implementation will be here  },});
```

Example 3 (ts):
```ts
import { mutation } from "./_generated/server";export const mutateSomething = mutation({  handler: (_, args: { a: number; b: number }) => {    // do something with `args.a` and `args.b`    // optionally return a value    return "success";  },});
```

Example 4 (ts):
```ts
import { mutation } from "./_generated/server";import { v } from "convex/values";export const mutateSomething = mutation({  args: { a: v.number(), b: v.number() },  handler: (_, args) => {    // do something with `args.a` and `args.b`  },});
```

---

## Actions

**URL:** https://docs.convex.dev/functions/actions

**Contents:**
- Actions
- Action names​
- The action constructor​
  - Action arguments and responses​
  - Action context​
  - Dealing with circular type inference​
- Choosing the runtime ("use node")​
- Splitting up action code via helpers​
- Calling actions from clients​
- Limits​

Actions can call third party services to do things such as processing a payment with Stripe. They can be run in Convex's JavaScript environment or in Node.js. They can interact with the database indirectly by calling queries and mutations.

Example: GIPHY Action

Actions follow the same naming rules as queries, see Query names.

To declare an action in Convex you use the action constructor function. Pass it an object with a handler function, which performs the action:

Unlike a query, an action can but does not have to return a value.

Action arguments and responses follow the same rules as mutations:

The first argument to the handler function is reserved for the action context.

The action constructor enables interacting with the database, and other Convex features by passing an ActionCtx object to the handler function as the first argument:

Which part of that action context is used depends on what your action needs to do:

To read data from the database use the runQuery field, and call a query that performs the read:

Here readData is an internal query because we don't want to expose it to the client directly. Actions, mutations and queries can be defined in the same file.

To write data to the database use the runMutation field, and call a mutation that performs the write:

Use an internal mutation when you want to prevent users from calling the mutation directly.

As with queries, it's often convenient to define actions and mutations in the same file.

To generate upload URLs for storing files use the storage field. Read on about File Storage.

To check user authentication use the auth field. Auth is propagated automatically when calling queries and mutations from the action. Read on about Authentication.

To schedule functions to run in the future, use the scheduler field. Read on about Scheduled Functions.

To search a vector index, use the vectorSearch field. Read on about Vector Search.

When the return value of an action depends on the result of calling ctx.runQuery or ctx.runMutation, TypeScript will complain that it cannot infer the return type of the action. This is a minimal example of the issue:

To work around this, there are two options:

TypeScript will check that the type annotation matches what the called query or mutation returns, so you don't lose any type safety.

In this trivial example the return type of the query was null. See the TypeScript page for other types which might be helpful when annotating the result.

Actions can run 

*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { action } from "./_generated/server";export const doSomething = action({  handler: () => {    // implementation goes here    // optionally return a value    return "success";  },});
```

Example 2 (ts):
```ts
import { action } from "./_generated/server";import { v } from "convex/values";export const doSomething = action({  args: { a: v.number(), b: v.number() },  handler: (_, args) => {    // do something with `args.a` and `args.b`    // optionally return a value    return "success";  },});
```

Example 3 (ts):
```ts
import { action } from "./_generated/server";import { v } from "convex/values";export const doSomething = action({  args: { a: v.number(), b: v.number() },  handler: (ctx, args) => {    // do something with `ctx`  },});
```

Example 4 (ts):
```ts
import { action, internalQuery } from "./_generated/server";import { internal } from "./_generated/api";import { v } from "convex/values";export const doSomething = action({  args: { a: v.number() },  handler: async (ctx, args) => {    const data = await ctx.runQuery(internal.myFunctions.readData, {      a: args.a,    });    // do something with `data`  },});export const readData = internalQuery({  args: { a: v.number() },  handler: async (ctx, args) => {    // read from `ctx.db` here  },});
```

---

## Functions

**URL:** https://docs.convex.dev/functions

**Contents:**
- Functions

Functions run on the backend and are written in JavaScript (or TypeScript). They are automatically available as APIs accessed through client libraries. Everything you do in the Convex backend starts from functions.

There are three types of functions:

You can also build HTTP actions when you want to call your functions from a webhook or a custom client.

Here's an overview of the three different types of Convex functions and what they can do:

---

## Queries

**URL:** https://docs.convex.dev/functions/query-functions

**Contents:**
- Queries
- Query names​
- The query constructor​
  - Query arguments​
  - Query responses​
  - Query context​
- Splitting up query code via helpers​
- Using NPM packages​
- Calling queries from clients​
- Caching & reactivity & consistency​

Queries are the bread and butter of your backend API. They fetch data from the database, check authentication or perform other business logic, and return data back to the client application.

This is an example query, taking in named arguments, reading data from the database and returning a result:

Read on to understand how to build queries yourself.

Queries are defined in

The path and name of the file, as well as the way the function is exported from the file, determine the name the client will use to call it:

To structure your API you can nest directories inside the convex/ directory:

Default exports receive the name default.

The same rules apply to mutations and actions, while HTTP actions use a different routing approach.

Client libraries in languages other than JavaScript and TypeScript use strings instead of API objects:

To actually declare a query in Convex you use the query constructor function. Pass it an object with a handler function, which returns the query result:

Queries accept named arguments. The argument values are accessible as fields of the second parameter of the handler function:

Arguments and responses are automatically serialized and deserialized, and you can pass and return most value-like JavaScript data to and from your query.

To both declare the types of arguments and to validate them, add an args object using v validators:

See argument validation for the full list of supported types and validators.

The first parameter of the handler function contains the query context.

Queries can return values of any supported Convex type which will be automatically serialized and deserialized.

Queries can also return undefined, which is not a valid Convex value. When a query returns undefined it is translated to null on the client.

The query constructor enables fetching data, and other Convex features by passing a QueryCtx object to the handler function as the first parameter:

Which part of the query context is used depends on what your query needs to do:

To fetch from the database use the db field. Note that we make the handler function an async function so we can await the promise returned by db.get():

Read more about Reading Data.

To return URLs to stored files use the storage field. Read more about File Storage.

To check user authentication use the auth field. Read more about Authentication.

When you want to split up the code in your query or reuse logic across multiple Convex functions you can define and call helper


*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { query } from "./_generated/server";import { v } from "convex/values";// Return the last 100 tasks in a given task list.export const getTaskList = query({  args: { taskListId: v.id("taskLists") },  handler: async (ctx, args) => {    const tasks = await ctx.db      .query("tasks")      .filter((q) => q.eq(q.field("taskListId"), args.taskListId))      .order("desc")      .take(100);    return tasks;  },});
```

Example 2 (ts):
```ts
// This function will be referred to as `api.myFunctions.myQuery`.export const myQuery = …;// This function will be referred to as `api.myFunctions.sum`.export const sum = …;
```

Example 3 (ts):
```ts
// This function will be referred to as `api.foo.myQueries.listMessages`.export const listMessages = …;
```

Example 4 (ts):
```ts
// This function will be referred to as `api.myFunctions.default`.export default …;
```

---

## Error Handling

**URL:** https://docs.convex.dev/functions/error-handling/

**Contents:**
- Error Handling
- Errors in queries​
- Errors in mutations​
- Errors in action functions​
- Differences in error reporting between dev and prod​
- Application errors, expected failures​
- Read/write limit errors​
- Debugging Errors​

There are four reasons why your Convex queries and mutations may hit errors:

Convex will automatically handle internal Convex errors. If there are problems on our end, we'll automatically retry your queries and mutations until the problem is resolved and your queries and mutations succeed.

On the other hand, you must decide how to handle application, developer and read/write limit errors. When one of these errors happens, the best practices are to:

Additionally, you might also want to send client-side errors to a service like Sentry to capture additional information for debugging and observability.

If your query function hits an error, the error will be sent to the client and thrown from your useQuery call site. The best way to handle these errors is with a React error boundary component.

Error boundaries allow you to catch errors thrown in their child component tree, render fallback UI, and send information about the error to your exception handling service. Adding error boundaries to your app is a great way to handle errors in Convex query functions as well as other errors in your React components. If you are using Sentry, you can use their Sentry.ErrorBoundary component.

With error boundaries, you can decide how granular you'd like your fallback UI to be. One simple option is to wrap your entire application in a single error boundary like:

Then any error in any of your components will be caught by the boundary and render the same fallback UI.

On the other hand, if you'd like to enable some portions of your app to continue functioning even if other parts hit errors, you can instead wrap different parts of your app in separate error boundaries.

Unlike other frameworks, there is no concept of "retrying" if your query function hits an error. Because Convex functions are deterministic, if the query function hits an error, retrying will always produce the same error. There is no point in running the query function with the same arguments again.

If a mutation hits an error, this will

If you have an exception service like Sentry configured, it should report "unhandled promise rejections" like this automatically. That means that with no additional work your mutation errors should be reported.

Note that errors in mutations won't be caught by your error boundaries because the error doesn't happen as part of rendering your components.

If you would like to render UI specifically in response to a mutation failure, you can use .catch on your mutation call

*[Content truncated]*

**Examples:**

Example 1 (tsx):
```tsx
<StrictMode>  <ErrorBoundary>    <ConvexProvider client={convex}>      <App />    </ConvexProvider>  </ErrorBoundary></StrictMode>,
```

Example 2 (javascript):
```javascript
sendMessage(newMessageText).catch((error) => {  // Do something with `error` here});
```

Example 3 (javascript):
```javascript
try {  await sendMessage(newMessageText);} catch (error) {  // Do something with `error` here}
```

---

## HTTP Actions

**URL:** https://docs.convex.dev/functions/http-actions

**Contents:**
- HTTP Actions
- Defining HTTP actions​
- Limits​
- Debugging​
  - Step 1: Check that your HTTP actions were deployed.​
  - Step 2: Check that you can access your endpoint using curl​
  - Step 3: Check the request being made by your browser​
- Common patterns​
  - File Storage​
  - CORS​

HTTP actions allow you to build an HTTP API right in Convex!

HTTP actions take in a Request and return a Response following the Fetch API. HTTP actions can manipulate the request and response directly, and interact with data in Convex indirectly by running queries, mutations, and actions. HTTP actions might be used for receiving webhooks from external applications or defining a public HTTP API.

HTTP actions are exposed at https://<your deployment name>.convex.site (e.g. https://happy-animal-123.convex.site).

Example: HTTP Actions

HTTP action handlers are defined using the httpAction constructor, similar to the action constructor for normal actions:

The first argument to the handler is an ActionCtx object, which provides auth, storage, and scheduler, as well as runQuery, runMutation, runAction.

The second argument contains the Request data. HTTP actions do not support argument validation, as the parsing of arguments from the incoming Request is left entirely to you.

To expose the HTTP Action, export an instance of HttpRouter from the convex/http.ts file. To create the instance call the httpRouter function. On the HttpRouter you can expose routes using the route method:

You can now call this action via HTTP and interact with data stored in the Convex Database. HTTP actions are exposed on https://<your deployment name>.convex.site.

Like other Convex functions, you can view your HTTP actions in the Functions view of your dashboard and view logs produced by them in the Logs view.

HTTP actions run in the same environment as queries and mutations so also do not have access to Node.js-specific JavaScript APIs. HTTP actions can call actions, which can run in Node.js.

Like actions, HTTP actions may have side-effects and will not be automatically retried by Convex when errors occur. It is a responsibility of the caller to handle errors and retry the request if appropriate.

Request and response size is limited to 20MB.

HTTP actions support request and response body types of .text(), .json(), .blob(), and .arrayBuffer().

Note that you don't need to define an HTTP action to call your queries, mutations and actions over HTTP if you control the caller, since you can use use the JavaScript ConvexHttpClient or the Python client to call these functions directly.

Check the functions page in the dashboard and make sure there's an entry called http.

If not, double check that you've defined your HTTP actions with the httpRouter in a file called http.js or http.ts

*[Content truncated]*

**Examples:**

Example 1 (ts):
```ts
import { httpRouter } from "convex/server";import { httpAction } from "./_generated/server";const http = httpRouter();http.route({  path: "/",  method: "GET",  handler: httpAction(async (ctx, request) => {    return new Response(`Hello from ${request.url}`);  }),});export default http;
```

Example 2 (ts):
```ts
import { httpAction } from "./_generated/server";export const doSomething = httpAction(async () => {  // implementation will be here  return new Response();});
```

Example 3 (ts):
```ts
import { httpAction } from "./_generated/server";import { internal } from "./_generated/api";export const postMessage = httpAction(async (ctx, request) => {  const { author, body } = await request.json();  await ctx.runMutation(internal.messages.sendOne, {    body: `Sent via HTTP action: ${body}`,    author,  });  return new Response(null, {    status: 200,  });});
```

Example 4 (ts):
```ts
import { httpRouter } from "convex/server";import { postMessage, getByAuthor, getByAuthorPathSuffix } from "./messages";const http = httpRouter();http.route({  path: "/postMessage",  method: "POST",  handler: postMessage,});// Define additional routeshttp.route({  path: "/getMessagesByAuthor",  method: "GET",  handler: getByAuthor,});// Define a route using a path prefixhttp.route({  // Will match /getAuthorMessages/User+123 and /getAuthorMessages/User+234 etc.  pathPrefix: "/getAuthorMessages/",  method: "GET",  handler: getByAuthorPathSuffix,});// Convex expects the router to be the default 
...
```

---
