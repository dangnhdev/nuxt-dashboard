# Convex - Api

**Pages:** 82

---

## Class: ConvexReactClient

**URL:** https://docs.convex.dev/api/classes/react.ConvexReactClient

**Contents:**
- Class: ConvexReactClient
- Constructors​
  - constructor​
    - Parameters​
    - Defined in​
- Accessors​
  - url​
    - Returns​
    - Defined in​
  - logger​

react.ConvexReactClient

A Convex client for use within React.

This loads reactive queries and executes mutations over a WebSocket.

• new ConvexReactClient(address, options?)

Return the address for this client, useful for creating a new client.

Not guaranteed to match the address with which this client was constructed: it may be canonicalized.

• get logger(): Logger

Get the logger for this client.

The Logger for this client.

▸ setAuth(fetchToken, onChange?): void

Set the authentication token to be used for subsequent queries and mutations. fetchToken will be called automatically again if a token expires. fetchToken should return null if the token cannot be retrieved, for example when the user's rights were permanently revoked.

Clear the current authentication token if set.

▸ watchQuery<Query>(query, ...argsAndOptions): Watch<FunctionReturnType<Query>>

Construct a new Watch on a Convex query function.

Most application code should not call this method directly. Instead use the useQuery hook.

Watch<FunctionReturnType<Query>>

▸ prewarmQuery<Query>(queryOptions): void

Indicates likely future interest in a query subscription.

The implementation currently immediately subscribes to a query. In the future this method may prioritize some queries over others, fetch the query result without subscribing, or do nothing in slow network connections or high load scenarios.

To use this in a React component, call useQuery() and ignore the return value.

▸ mutation<Mutation>(mutation, ...argsAndOptions): Promise<FunctionReturnType<Mutation>>

Execute a mutation function.

Promise<FunctionReturnType<Mutation>>

A promise of the mutation's result.

▸ action<Action>(action, ...args): Promise<FunctionReturnType<Action>>

Execute an action function.

Promise<FunctionReturnType<Action>>

A promise of the action's result.

▸ query<Query>(query, ...args): Promise<FunctionReturnType<Query>>

Fetch a query result once.

Most application code should subscribe to queries instead, using the useQuery hook.

Promise<FunctionReturnType<Query>>

A promise of the query's result.

▸ connectionState(): ConnectionState

Get the current ConnectionState between the client and the Convex backend.

The ConnectionState with the Convex backend.

▸ subscribeToConnectionState(cb): () => void

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently. ConnectionState may also lose properties in future versions as we figure out what information is most useful. As such this API is considered unstable.

An unsubscribe function to stop listening.

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently. ConnectionState may also lose properties in future versions as we figure out what information is most useful. As such this API is considered unstable.

An unsubscribe function to stop listening.

▸ close(): Promise<void>

Close any network handles associated with this client and stop all subscriptions.

Call this method when you're done with a ConvexReactClient to dispose of its sockets and resources.

A Promise fulfilled when the connection has been completely closed.

---

## Namespace: Base64

**URL:** https://docs.convex.dev/api/namespaces/values.Base64

**Contents:**
- Namespace: Base64
- Functions​
  - byteLength​
    - Parameters​
    - Returns​
    - Defined in​
  - toByteArray​
    - Parameters​
    - Returns​
    - Defined in​

▸ byteLength(b64): number

▸ toByteArray(b64): Uint8Array

▸ fromByteArray(uint8): string

▸ fromByteArrayUrlSafeNoPadding(uint8): string

---

## Class: BaseConvexClient

**URL:** https://docs.convex.dev/api/classes/browser.BaseConvexClient

**Contents:**
- Class: BaseConvexClient
- Constructors​
  - constructor​
    - Parameters​
    - Defined in​
- Accessors​
  - url​
    - Returns​
    - Defined in​
- Methods​

browser.BaseConvexClient

Low-level client for directly integrating state management libraries with Convex.

Most developers should use higher level clients, like the ConvexHttpClient or the React hook based ConvexReactClient.

• new BaseConvexClient(address, onTransition, options?)

browser/sync/client.ts:268

Return the address for this client, useful for creating a new client.

Not guaranteed to match the address with which this client was constructed: it may be canonicalized.

browser/sync/client.ts:1028

▸ getMaxObservedTimestamp(): undefined | Long

browser/sync/client.ts:533

▸ addOnTransitionHandler(fn): () => boolean

Add a handler that will be called on a transition.

Any external side effects (e.g. setting React state) should be handled here.

browser/sync/client.ts:612

▸ getCurrentAuthClaims(): undefined | { token: string ; decoded: Record<string, any> }

Get the current JWT auth token and decoded claims.

undefined | { token: string ; decoded: Record<string, any> }

browser/sync/client.ts:621

▸ setAuth(fetchToken, onChange): void

Set the authentication token to be used for subsequent queries and mutations. fetchToken will be called automatically again if a token expires. fetchToken should return null if the token cannot be retrieved, for example when the user's rights were permanently revoked.

browser/sync/client.ts:646

browser/sync/client.ts:653

browser/sync/client.ts:663

▸ subscribe(name, args?, options?): Object

Subscribe to a query function.

Whenever this query's result changes, the onTransition callback passed into the constructor will be called.

An object containing a QueryToken corresponding to this query and an unsubscribe callback.

browser/sync/client.ts:682

▸ localQueryResult(udfPath, args?): undefined | Value

A query result based only on the current, local state.

The only way this will return a value is if we're already subscribed to the query or its value has been set optimistically.

browser/sync/client.ts:715

▸ queryJournal(name, args?): undefined | QueryJournal

Retrieve the current QueryJournal for this query function.

If we have not yet received a result for this query, this will be undefined.

undefined | QueryJournal

The query's QueryJournal or undefined.

browser/sync/client.ts:768

▸ connectionState(): ConnectionState

Get the current ConnectionState between the client and the Convex backend.

The ConnectionState with the Convex backend.

browser/sync/client.ts:783

▸ subscribeToConnectionState(cb): () => void

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently.

An unsubscribe function to stop listening.

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently.

An unsubscribe function to stop listening.

browser/sync/client.ts:829

▸ mutation(name, args?, options?): Promise<any>

Execute a mutation function.

browser/sync/client.ts:849

▸ action(name, args?): Promise<any>

Execute an action function.

A promise of the action's result.

browser/sync/client.ts:970

▸ close(): Promise<void>

Close any network handles associated with this client and stop all subscriptions.

Call this method when you're done with an BaseConvexClient to dispose of its sockets and resources.

A Promise fulfilled when the connection has been completely closed.

browser/sync/client.ts:1017

---

## Interface: UserIdentity

**URL:** https://docs.convex.dev/api/interfaces/server.UserIdentity

**Contents:**
- Interface: UserIdentity
- Indexable​
- Properties​
  - tokenIdentifier​
    - Defined in​
  - subject​
    - Defined in​
  - issuer​
    - Defined in​
  - name​

Information about an authenticated user, derived from a JWT.

The only fields guaranteed to be present are tokenIdentifier and issuer. All remaining fields may or may not be present depending on the information given by the identity provider.

The explicitly listed fields are derived from the OpenID Connect (OIDC) standard fields, see the OIDC specification for more information on these fields.

Any additional fields are custom claims that may be present in the JWT, and their type depends on your identity provider configuration. If you know the type of the field, you can assert it in TypeScript like this (for example as a string):

▪ [key: string]: JSONValue | undefined

• Readonly tokenIdentifier: string

A stable and globally unique string for this identity (i.e. no other user, even from a different identity provider, will have the same string.)

JWT claims: sub + iss

server/authentication.ts:107

• Readonly subject: string

Identifier for the end-user from the identity provider, not necessarily unique across different providers.

server/authentication.ts:115

• Readonly issuer: string

The hostname of the identity provider used to authenticate this user.

server/authentication.ts:122

• Optional Readonly name: string

server/authentication.ts:127

• Optional Readonly givenName: string

JWT claim: given_name

server/authentication.ts:132

• Optional Readonly familyName: string

JWT claim: family_name

server/authentication.ts:137

• Optional Readonly nickname: string

server/authentication.ts:142

• Optional Readonly preferredUsername: string

JWT claim: preferred_username

server/authentication.ts:147

• Optional Readonly profileUrl: string

server/authentication.ts:152

• Optional Readonly pictureUrl: string

server/authentication.ts:157

• Optional Readonly email: string

server/authentication.ts:162

• Optional Readonly emailVerified: boolean

JWT claim: email_verified

server/authentication.ts:167

• Optional Readonly gender: string

server/authentication.ts:172

• Optional Readonly birthday: string

server/authentication.ts:177

• Optional Readonly timezone: string

server/authentication.ts:182

• Optional Readonly language: string

server/authentication.ts:187

• Optional Readonly phoneNumber: string

JWT claim: phone_number

server/authentication.ts:192

• Optional Readonly phoneNumberVerified: boolean

JWT claim: phone_number_verified

server/authentication.ts:197

• Optional Readonly address: string

server/authentication.ts:202

• Optional Readonly updatedAt: string

JWT claim: updated_at

server/authentication.ts:207

**Examples:**

Example 1 (typescript):
```typescript
const identity = await ctx.auth.getUserIdentity();if (identity === null) {  return null;}const customClaim = identity.custom_claim as string;
```

---

## Interface: GenericDatabaseWriter<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericDatabaseWriter

**Contents:**
- Interface: GenericDatabaseWriter<DataModel>
- Type parameters​
- Hierarchy​
- Properties​
  - system​
    - Inherited from​
    - Defined in​
- Methods​
  - get​
    - Type parameters​

server.GenericDatabaseWriter

An interface to read from and write to the database within Convex mutation functions.

Convex guarantees that all writes within a single mutation are executed atomically, so you never have to worry about partial writes leaving your data in an inconsistent state. See the Convex Guide for the guarantees Convex provides your functions.

If you're using code generation, use the DatabaseReader type in convex/_generated/server.d.ts which is typed for your data model.

GenericDatabaseReader<DataModel>

↳ GenericDatabaseWriter

• system: BaseDatabaseReader<SystemDataModel>

An interface to read from the system tables within Convex query functions

The two entry points are:

GenericDatabaseReader.system

server/database.ts:130

▸ get<TableName>(id): Promise<null | DocumentByName<DataModel, TableName>>

Fetch a single document from the database by its GenericId.

Promise<null | DocumentByName<DataModel, TableName>>

GenericDatabaseReader.get

server/database.ts:36

▸ query<TableName>(tableName): QueryInitializer<NamedTableInfo<DataModel, TableName>>

Begin a query for the given table name.

Queries don't execute immediately, so calling this method and extending its query are free until the results are actually used.

QueryInitializer<NamedTableInfo<DataModel, TableName>>

GenericDatabaseReader.query

server/database.ts:49

▸ normalizeId<TableName>(tableName, id): null | GenericId<TableName>

Returns the string ID format for the ID in a given table, or null if the ID is from a different table or is not a valid ID.

This accepts the string ID format as well as the .toString() representation of the legacy class-based ID format.

This does not guarantee that the ID exists (i.e. db.get(id) may return null).

null | GenericId<TableName>

GenericDatabaseReader.normalizeId

server/database.ts:65

▸ insert<TableName>(table, value): Promise<GenericId<TableName>>

Insert a new document into a table.

Promise<GenericId<TableName>>

server/database.ts:172

▸ patch<TableName>(id, value): Promise<void>

Patch an existing document, shallow merging it with the given partial document.

New fields are added. Existing fields are overwritten. Fields set to undefined are removed.

server/database.ts:208

▸ replace<TableName>(id, value): Promise<void>

Replace the value of an existing document, overwriting its old value.

server/database.ts:236

▸ delete(id): Promise<void>

Delete an existing document.

server/database.ts:259

---

## Module: react

**URL:** https://docs.convex.dev/api/modules/react

**Contents:**
- Module: react
- Usage​
  - Creating the client​
  - Storing the client in React Context​
  - Using the auth helpers​
  - Using React hooks​
- Classes​
- Interfaces​
- References​
  - AuthTokenFetcher​

Tools to integrate Convex into React applications.

This module contains:

Re-exports AuthTokenFetcher

Ƭ ConvexAuthState: Object

Type representing the state of an auth integration with Convex.

react/ConvexAuthState.tsx:26

Ƭ OptionalRestArgsOrSkip<FuncRef>: FuncRef["_args"] extends EmptyObject ? [args?: EmptyObject | "skip"] : [args: FuncRef["_args"] | "skip"]

Ƭ Preloaded<Query>: Object

The preloaded query payload, which should be passed to a client component and passed to usePreloadedQuery.

react/hydration.tsx:12

Ƭ PaginatedQueryReference: FunctionReference<"query", "public", { paginationOpts: PaginationOptions }, PaginationResult<any>>

A FunctionReference that is usable with usePaginatedQuery.

This function reference must:

react/use_paginated_query.ts:31

Ƭ UsePaginatedQueryResult<Item>: { results: Item[] ; loadMore: (numItems: number) => void } & { status: "LoadingFirstPage" ; isLoading: true } | { status: "CanLoadMore" ; isLoading: false } | { status: "LoadingMore" ; isLoading: true } | { status: "Exhausted" ; isLoading: false }

The result of calling the usePaginatedQuery hook.

react/use_paginated_query.ts:479

Ƭ PaginationStatus: UsePaginatedQueryResult<any>["status"]

The possible pagination statuses in UsePaginatedQueryResult.

This is a union of string literal types.

react/use_paginated_query.ts:507

Ƭ PaginatedQueryArgs<Query>: Expand<BetterOmit<FunctionArgs<Query>, "paginationOpts">>

Given a PaginatedQueryReference, get the type of the arguments object for the query, excluding the paginationOpts argument.

react/use_paginated_query.ts:515

Ƭ PaginatedQueryItem<Query>: FunctionReturnType<Query>["page"][number]

Given a PaginatedQueryReference, get the type of the item being paginated over.

react/use_paginated_query.ts:524

Ƭ UsePaginatedQueryReturnType<Query>: UsePaginatedQueryResult<PaginatedQueryItem<Query>>

The return type of usePaginatedQuery.

react/use_paginated_query.ts:532

Ƭ RequestForQueries: Record<string, { query: FunctionReference<"query"> ; args: Record<string, Value> }>

An object representing a request to load multiple queries.

The keys of this object are identifiers and the values are objects containing the query function and the arguments to pass to it.

This is used as an argument to useQueries.

react/use_queries.ts:126

▸ useConvexAuth(): Object

Get the ConvexAuthState within a React component.

This relies on a Convex auth integration provider being above in the React component tree.

The current ConvexAuthState.

react/ConvexAuthState.tsx:43

▸ ConvexProviderWithAuth(«destructured»): Element

A replacement for ConvexProvider which additionally provides ConvexAuthState to descendants of this component.

Use this to integrate any auth provider with Convex. The useAuth prop should be a React hook that returns the provider's authentication state and a function to fetch a JWT access token.

If the useAuth prop function updates causing a rerender then auth state will transition to loading and the fetchAccessToken() function called again.

See Custom Auth Integration for more information.

react/ConvexAuthState.tsx:75

▸ Authenticated(«destructured»): null | Element

Renders children if the client is authenticated.

react/auth_helpers.tsx:10

▸ Unauthenticated(«destructured»): null | Element

Renders children if the client is using authentication but is not authenticated.

react/auth_helpers.tsx:23

▸ AuthLoading(«destructured»): null | Element

Renders children if the client isn't using authentication or is in the process of authenticating.

react/auth_helpers.tsx:37

▸ useConvex(): ConvexReactClient

Get the ConvexReactClient within a React component.

This relies on the ConvexProvider being above in the React component tree.

The active ConvexReactClient object, or undefined.

▸ ConvexProvider(props, deprecatedLegacyContext?): null | ReactElement<any, any>

Provides an active Convex ConvexReactClient to descendants of this component.

Wrap your app in this component to use Convex hooks useQuery, useMutation, and useConvex.

null | ReactElement<any, any>

../../common/temp/node_modules/.pnpm/@types+react@18.3.18/node_modules/@types/react/ts5.0/index.d.ts:1128

▸ useQuery<Query>(query, ...args): Query["_returnType"] | undefined

Load a reactive query within a React component.

This React hook contains internal state that will cause a rerender whenever the query result changes.

Throws an error if not used under ConvexProvider.

Query["_returnType"] | undefined

the result of the query. If the query is loading returns undefined.

▸ useMutation<Mutation>(mutation): ReactMutation<Mutation>

Construct a new ReactMutation.

Mutation objects can be called like functions to request execution of the corresponding Convex function, or further configured with optimistic updates.

The value returned by this hook is stable across renders, so it can be used by React dependency arrays and memoization logic relying on object identity without causing rerenders.

Throws an error if not used under ConvexProvider.

ReactMutation<Mutation>

The ReactMutation object with that name.

▸ useAction<Action>(action): ReactAction<Action>

Construct a new ReactAction.

Action objects can be called like functions to request execution of the corresponding Convex function.

The value returned by this hook is stable across renders, so it can be used by React dependency arrays and memoization logic relying on object identity without causing rerenders.

Throws an error if not used under ConvexProvider.

The ReactAction object with that name.

▸ useConvexConnectionState(): ConnectionState

React hook to get the current ConnectionState and subscribe to changes.

This hook returns the current connection state and automatically rerenders when any part of the connection state changes (e.g., when going online/offline, when requests start/complete, etc.).

The shape of ConnectionState may change in the future which may cause this hook to rerender more frequently.

Throws an error if not used under ConvexProvider.

The current ConnectionState with the Convex backend.

▸ usePreloadedQuery<Query>(preloadedQuery): Query["_returnType"]

Load a reactive query within a React component using a Preloaded payload from a Server Component returned by preloadQuery.

This React hook contains internal state that will cause a rerender whenever the query result changes.

Throws an error if not used under ConvexProvider.

the result of the query. Initially returns the result fetched by the Server Component. Subsequently returns the result fetched by the client.

react/hydration.tsx:34

▸ usePaginatedQuery<Query>(query, args, options): UsePaginatedQueryReturnType<Query>

Load data reactively from a paginated query to a create a growing list.

This can be used to power "infinite scroll" UIs.

This hook must be used with public query references that match PaginatedQueryReference.

usePaginatedQuery concatenates all the pages of results into a single list and manages the continuation cursors when requesting more items.

If the query reference or arguments change, the pagination state will be reset to the first page. Similarly, if any of the pages result in an InvalidCursor error or an error associated with too much data, the pagination state will also reset to the first page.

To learn more about pagination, see Paginated Queries.

UsePaginatedQueryReturnType<Query>

A UsePaginatedQueryResult that includes the currently loaded items, the status of the pagination, and a loadMore function.

react/use_paginated_query.ts:162

▸ resetPaginationId(): void

Reset pagination id for tests only, so tests know what it is.

react/use_paginated_query.ts:458

▸ optimisticallyUpdateValueInPaginatedQuery<Query>(localStore, query, args, updateValue): void

Optimistically update the values in a paginated list.

This optimistic update is designed to be used to update data loaded with usePaginatedQuery. It updates the list by applying updateValue to each element of the list across all of the loaded pages.

This will only apply to queries with a matching names and arguments.

react/use_paginated_query.ts:578

▸ insertAtTop<Query>(options): void

Updates a paginated query to insert an element at the top of the list.

This is regardless of the sort order, so if the list is in descending order, the inserted element will be treated as the "biggest" element, but if it's ascending, it'll be treated as the "smallest".

react/use_paginated_query.ts:640

▸ insertAtBottomIfLoaded<Query>(options): void

Updates a paginated query to insert an element at the bottom of the list.

This is regardless of the sort order, so if the list is in descending order, the inserted element will be treated as the "smallest" element, but if it's ascending, it'll be treated as the "biggest".

This only has an effect if the last page is loaded, since otherwise it would result in the element being inserted at the end of whatever is loaded (which is the middle of the list) and then popping out once the optimistic update is over.

react/use_paginated_query.ts:689

▸ insertAtPosition<Query>(options): void

This is a helper function for inserting an item at a specific position in a paginated query.

You must provide the sortOrder and a function for deriving the sort key (an array of values) from an item in the list.

This will only work if the server query uses the same sort order and sort key as the optimistic update.

react/use_paginated_query.ts:770

▸ useQueries(queries): Record<string, any | undefined | Error>

Load a variable number of reactive Convex queries.

useQueries is similar to useQuery but it allows loading multiple queries which can be useful for loading a dynamic number of queries without violating the rules of React hooks.

This hook accepts an object whose keys are identifiers for each query and the values are objects of { query: FunctionReference, args: Record<string, Value> }. The query is a FunctionReference for the Convex query function to load, and the args are the arguments to that function.

The hook returns an object that maps each identifier to the result of the query, undefined if the query is still loading, or an instance of Error if the query threw an exception.

For example if you loaded a query like:

then the result would look like:

This React hook contains internal state that will cause a rerender whenever any of the query results change.

Throws an error if not used under ConvexProvider.

Record<string, any | undefined | Error>

An object with the same keys as the input. The values are the result of the query function, undefined if it's still loading, or an Error if it threw an exception.

react/use_queries.ts:60

**Examples:**

Example 1 (typescript):
```typescript
import { ConvexReactClient } from "convex/react";// typically loaded from an environment variableconst address = "https://small-mouse-123.convex.cloud"const convex = new ConvexReactClient(address);
```

Example 2 (typescript):
```typescript
import { ConvexProvider } from "convex/react";<ConvexProvider client={convex}>  <App /></ConvexProvider>
```

Example 3 (typescript):
```typescript
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";<Authenticated>  Logged in</Authenticated><Unauthenticated>  Logged out</Unauthenticated><AuthLoading>  Still loading</AuthLoading>
```

Example 4 (typescript):
```typescript
import { useQuery, useMutation } from "convex/react";import { api } from "../convex/_generated/api";function App() {  const counter = useQuery(api.getCounter.default);  const increment = useMutation(api.incrementCounter.default);  // Your component here!}
```

---

## Generated Code

**URL:** https://docs.convex.dev/generated-api/

**Contents:**
- Generated Code

Convex uses code generation to create code that is specific to your app's data model and API. Convex generates JavaScript files (.js) with TypeScript type definitions (.d.ts).

Code generation isn't required to use Convex, but using the generated code will give you more better autocompletion in your editor and more type safety if you're using TypeScript.

To generate the code, run:

This creates a convex/_generated directory that contains:

**Examples:**

Example 1 (text):
```text
npx convex dev
```

---

## Interface: DefineSchemaOptions<StrictTableNameTypes>

**URL:** https://docs.convex.dev/api/interfaces/server.DefineSchemaOptions

**Contents:**
- Interface: DefineSchemaOptions<StrictTableNameTypes>
- Type parameters​
- Properties​
  - schemaValidation​
    - Defined in​
  - strictTableNameTypes​
    - Defined in​

server.DefineSchemaOptions

Options for defineSchema.

• Optional schemaValidation: boolean

Whether Convex should validate at runtime that all documents match your schema.

If schemaValidation is true, Convex will:

If schemaValidation is false, Convex will not validate that new or existing documents match your schema. You'll still get schema-specific TypeScript types, but there will be no validation at runtime that your documents match those types.

By default, schemaValidation is true.

• Optional strictTableNameTypes: StrictTableNameTypes

Whether the TypeScript types should allow accessing tables not in the schema.

If strictTableNameTypes is true, using tables not listed in the schema will generate a TypeScript compilation error.

If strictTableNameTypes is false, you'll be able to access tables not listed in the schema and their document type will be any.

strictTableNameTypes: false is useful for rapid prototyping.

Regardless of the value of strictTableNameTypes, your schema will only validate documents in the tables listed in the schema. You can still create and modify other tables on the dashboard or in JavaScript mutations.

By default, strictTableNameTypes is true.

---

## Class: VInt64<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VInt64

**Contents:**
- Class: VInt64<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.int64() validator.

BaseValidator<Type, IsOptional>

• new VInt64<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "int64"

The kind of validator, "int64".

values/validators.ts:133

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Class: VObject<Type, Fields, IsOptional, FieldPaths>

**URL:** https://docs.convex.dev/api/classes/values.VObject

**Contents:**
- Class: VObject<Type, Fields, IsOptional, FieldPaths>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.object() validator.

BaseValidator<Type, IsOptional, FieldPaths>

• new VObject<Type, Fields, IsOptional, FieldPaths>(«destructured»)

Usually you'd use v.object({ ... }) instead.

BaseValidator&lt;Type, IsOptional, FieldPaths&gt;.constructor

values/validators.ts:292

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: FieldPaths

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly fields: Fields

An object with the validator for each property.

values/validators.ts:282

• Readonly kind: "object"

The kind of validator, "object".

values/validators.ts:287

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: GenericQueryCtx<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericQueryCtx

**Contents:**
- Interface: GenericQueryCtx<DataModel>
- Type parameters​
- Properties​
  - db​
    - Defined in​
  - auth​
    - Defined in​
  - storage​
    - Defined in​
  - runQuery​

server.GenericQueryCtx

A set of services for use within Convex query functions.

The query context is passed as the first argument to any Convex query function run on the server.

This differs from the MutationCtx because all of the services are read-only.

• db: GenericDatabaseReader<DataModel>

A utility for reading data in the database.

server/registration.ts:130

Information about the currently authenticated user.

server/registration.ts:135

• storage: StorageReader

A utility for reading files in storage.

server/registration.ts:140

• runQuery: <Query>(query: Query, ...args: OptionalRestArgs<Query>) => Promise<FunctionReturnType<Query>>

▸ <Query>(query, ...args): Promise<FunctionReturnType<Query>>

Call a query function within the same transaction.

NOTE: often you can call the query's function directly instead of using this. runQuery incurs overhead of running argument and return value validation, and creating a new isolated JS context.

Promise<FunctionReturnType<Query>>

server/registration.ts:149

---

## Interface: VectorIndexConfig<VectorField, FilterFields>

**URL:** https://docs.convex.dev/api/interfaces/server.VectorIndexConfig

**Contents:**
- Interface: VectorIndexConfig<VectorField, FilterFields>
- Type parameters​
- Properties​
  - vectorField​
    - Defined in​
  - dimensions​
    - Defined in​
  - filterFields​
    - Defined in​

server.VectorIndexConfig

The configuration for a vector index.

• vectorField: VectorField

The field to index for vector search.

This must be a field of type v.array(v.float64()) (or a union)

The length of the vectors indexed. This must be between 2 and 2048 inclusive.

• Optional filterFields: FilterFields[]

Additional fields to index for fast filtering when running vector searches.

---

## Class: SchemaDefinition<Schema, StrictTableTypes>

**URL:** https://docs.convex.dev/api/classes/server.SchemaDefinition

**Contents:**
- Class: SchemaDefinition<Schema, StrictTableTypes>
- Type parameters​
- Properties​
  - tables​
    - Defined in​
  - strictTableNameTypes​
    - Defined in​
  - schemaValidation​
    - Defined in​

server.SchemaDefinition

The definition of a Convex project schema.

This should be produced by using defineSchema.

• strictTableNameTypes: StrictTableTypes

• Readonly schemaValidation: boolean

---

## Class: SearchFilter

**URL:** https://docs.convex.dev/api/classes/server.SearchFilter

**Contents:**
- Class: SearchFilter
- Hierarchy​

An expression representing a search filter created by SearchFilterBuilder.

↳ SearchFilterFinalizer

---

## Class: FilterExpression<T>

**URL:** https://docs.convex.dev/api/classes/server.FilterExpression

**Contents:**
- Class: FilterExpression<T>
- Type parameters​

server.FilterExpression

Expressions are evaluated to produce a Value in the course of executing a query.

To construct an expression, use the VectorFilterBuilder provided within VectorSearchQuery.

---

## Interface: GenericMutationCtx<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericMutationCtx

**Contents:**
- Interface: GenericMutationCtx<DataModel>
- Type parameters​
- Properties​
  - db​
    - Defined in​
  - auth​
    - Defined in​
  - storage​
    - Defined in​
  - scheduler​

server.GenericMutationCtx

A set of services for use within Convex mutation functions.

The mutation context is passed as the first argument to any Convex mutation function run on the server.

If you're using code generation, use the MutationCtx type in convex/_generated/server.d.ts which is typed for your data model.

• db: GenericDatabaseWriter<DataModel>

A utility for reading and writing data in the database.

server/registration.ts:50

Information about the currently authenticated user.

server/registration.ts:55

• storage: StorageWriter

A utility for reading and writing files in storage.

server/registration.ts:60

• scheduler: Scheduler

A utility for scheduling Convex functions to run in the future.

server/registration.ts:65

• runQuery: <Query>(query: Query, ...args: OptionalRestArgs<Query>) => Promise<FunctionReturnType<Query>>

▸ <Query>(query, ...args): Promise<FunctionReturnType<Query>>

Call a query function within the same transaction.

NOTE: often you can call the query's function directly instead of using this. runQuery incurs overhead of running argument and return value validation, and creating a new isolated JS context.

Promise<FunctionReturnType<Query>>

server/registration.ts:74

• runMutation: <Mutation>(mutation: Mutation, ...args: OptionalRestArgs<Mutation>) => Promise<FunctionReturnType<Mutation>>

▸ <Mutation>(mutation, ...args): Promise<FunctionReturnType<Mutation>>

Call a mutation function within the same transaction.

NOTE: often you can call the mutation's function directly instead of using this. runMutation incurs overhead of running argument and return value validation, and creating a new isolated JS context.

The mutation runs in a sub-transaction, so if the mutation throws an error, all of its writes will be rolled back. Additionally, a successful mutation's writes will be serializable with other writes in the transaction.

Promise<FunctionReturnType<Mutation>>

server/registration.ts:90

---

## Interface: GenericDatabaseReader<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericDatabaseReader

**Contents:**
- Interface: GenericDatabaseReader<DataModel>
- Type parameters​
- Hierarchy​
- Properties​
  - system​
    - Defined in​
- Methods​
  - get​
    - Type parameters​
    - Parameters​

server.GenericDatabaseReader

An interface to read from the database within Convex query functions.

The two entry points are:

If you're using code generation, use the DatabaseReader type in convex/_generated/server.d.ts which is typed for your data model.

BaseDatabaseReader<DataModel>

↳ GenericDatabaseReader

↳↳ GenericDatabaseWriter

• system: BaseDatabaseReader<SystemDataModel>

An interface to read from the system tables within Convex query functions

The two entry points are:

server/database.ts:130

▸ get<TableName>(id): Promise<null | DocumentByName<DataModel, TableName>>

Fetch a single document from the database by its GenericId.

Promise<null | DocumentByName<DataModel, TableName>>

BaseDatabaseReader.get

server/database.ts:36

▸ query<TableName>(tableName): QueryInitializer<NamedTableInfo<DataModel, TableName>>

Begin a query for the given table name.

Queries don't execute immediately, so calling this method and extending its query are free until the results are actually used.

QueryInitializer<NamedTableInfo<DataModel, TableName>>

BaseDatabaseReader.query

server/database.ts:49

▸ normalizeId<TableName>(tableName, id): null | GenericId<TableName>

Returns the string ID format for the ID in a given table, or null if the ID is from a different table or is not a valid ID.

This accepts the string ID format as well as the .toString() representation of the legacy class-based ID format.

This does not guarantee that the ID exists (i.e. db.get(id) may return null).

null | GenericId<TableName>

BaseDatabaseReader.normalizeId

server/database.ts:65

---

## Interface: CronJob

**URL:** https://docs.convex.dev/api/interfaces/server.CronJob

**Contents:**
- Interface: CronJob
- Properties​
  - name​
    - Defined in​
  - args​
    - Defined in​
  - schedule​
    - Defined in​

A schedule to run a Convex mutation or action on. You can schedule Convex functions to run regularly with interval and exporting it.

---

## Interface: OrderedQuery<TableInfo>

**URL:** https://docs.convex.dev/api/interfaces/server.OrderedQuery

**Contents:**
- Interface: OrderedQuery<TableInfo>
- Type parameters​
- Hierarchy​
- Methods​
  - [asyncIterator]​
    - Returns​
    - Inherited from​
    - Defined in​
  - filter​
    - Parameters​

A Query with an order that has already been defined.

AsyncIterable<DocumentByInfo<TableInfo>>

▸ [asyncIterator](): AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

AsyncIterable.[asyncIterator]

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

▸ filter(predicate): OrderedQuery<TableInfo>

Filter the query output, returning only the values for which predicate evaluates to true.

OrderedQuery<TableInfo>

▸ paginate(paginationOpts): Promise<PaginationResult<DocumentByInfo<TableInfo>>>

Load a page of n results and obtain a Cursor for loading more.

Note: If this is called from a reactive query function the number of results may not match paginationOpts.numItems!

paginationOpts.numItems is only an initial value. After the first invocation, paginate will return all items in the original query range. This ensures that all pages will remain adjacent and non-overlapping.

Promise<PaginationResult<DocumentByInfo<TableInfo>>>

A PaginationResult containing the page of results and a cursor to continue paginating.

▸ collect(): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return all of the results as an array.

Note: when processing a query with a lot of results, it's often better to use the Query as an AsyncIterable instead.

Promise<DocumentByInfo<TableInfo>[]>

▸ take(n): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return the first n results.

Promise<DocumentByInfo<TableInfo>[]>

▸ first(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the first result if there is one.

Promise<null | DocumentByInfo<TableInfo>>

▸ unique(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the singular result if there is one.

Will throw an error if the query returns more than one result.

Promise<null | DocumentByInfo<TableInfo>>

---

## dataModel.d.ts

**URL:** https://docs.convex.dev/generated-api/data-model

**Contents:**
- dataModel.d.ts
- Types​
  - TableNames​
  - Doc​
    - Type parameters​
  - Id​
    - Type parameters​
  - DataModel​

These exports are not directly available in the convex package!

Instead you must run npx convex dev to create convex/_generated/dataModel.d.ts.

Generated data model types.

The names of all of your Convex tables.

Ƭ Doc<TableName>: Object

The type of a document stored in Convex.

An identifier for a document in Convex.

Convex documents are uniquely identified by their Id, which is accessible on the _id field. To learn more, see Document IDs.

Documents can be loaded using db.get(id) in query and mutation functions.

IDs are just strings at runtime, but this type can be used to distinguish them from other strings when type checking.

This is an alias of GenericId that is typed for your data model.

A type describing your Convex data model.

This type includes information about what tables you have, the type of documents stored in those tables, and the indexes defined on them.

This type is used to parameterize methods like queryGeneric and mutationGeneric to make them type-safe.

---

## Class: ConvexClient

**URL:** https://docs.convex.dev/api/classes/browser.ConvexClient

**Contents:**
- Class: ConvexClient
- Constructors​
  - constructor​
    - Parameters​
    - Defined in​
- Accessors​
  - closed​
    - Returns​
    - Defined in​
  - client​

Subscribes to Convex query functions and executes mutations and actions over a WebSocket.

Optimistic updates for mutations are not provided for this client. Third party clients may choose to wrap BaseConvexClient for additional control.

• new ConvexClient(address, options?)

Construct a client and immediately initiate a WebSocket connection to the passed address.

browser/simple_client.ts:103

• get closed(): boolean

Once closed no registered callbacks will fire again.

browser/simple_client.ts:87

• get client(): BaseConvexClient

browser/simple_client.ts:90

• get disabled(): boolean

browser/simple_client.ts:94

▸ onUpdate<Query>(query, args, callback, onError?): Unsubscribe<Query["_returnType"]>

Call a callback whenever a new result for a query is received. The callback will run soon after being registered if a result for the query is already in memory.

The return value is an Unsubscribe object which is both a function an an object with properties. Both of the patterns below work with this object:

Unsubscribe<Query["_returnType"]>

an Unsubscribe function to stop calling the onUpdate function.

browser/simple_client.ts:165

▸ close(): Promise<void>

browser/simple_client.ts:249

▸ getAuth(): undefined | { token: string ; decoded: Record<string, any> }

Get the current JWT auth token and decoded claims.

undefined | { token: string ; decoded: Record<string, any> }

browser/simple_client.ts:260

▸ setAuth(fetchToken, onChange?): void

Set the authentication token to be used for subsequent queries and mutations. fetchToken will be called automatically again if a token expires. fetchToken should return null if the token cannot be retrieved, for example when the user's rights were permanently revoked.

browser/simple_client.ts:273

▸ mutation<Mutation>(mutation, args, options?): Promise<Awaited<FunctionReturnType<Mutation>>>

Execute a mutation function.

Promise<Awaited<FunctionReturnType<Mutation>>>

A promise of the mutation's result.

browser/simple_client.ts:347

▸ action<Action>(action, args): Promise<Awaited<FunctionReturnType<Action>>>

Execute an action function.

Promise<Awaited<FunctionReturnType<Action>>>

A promise of the action's result.

browser/simple_client.ts:364

▸ query<Query>(query, args): Promise<Awaited<Query["_returnType"]>>

Fetch a query result once.

Promise<Awaited<Query["_returnType"]>>

A promise of the query's result.

browser/simple_client.ts:380

▸ connectionState(): ConnectionState

Get the current ConnectionState between the client and the Convex backend.

The ConnectionState with the Convex backend.

browser/simple_client.ts:412

▸ subscribeToConnectionState(cb): () => void

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently.

An unsubscribe function to stop listening.

Subscribe to the ConnectionState between the client and the Convex backend, calling a callback each time it changes.

Subscribed callbacks will be called when any part of ConnectionState changes. ConnectionState may grow in future versions (e.g. to provide a array of inflight requests) in which case callbacks would be called more frequently.

An unsubscribe function to stop listening.

browser/simple_client.ts:427

**Examples:**

Example 1 (ts):
```ts
const client = new ConvexClient("https://happy-otter-123.convex.cloud");const unsubscribe = client.onUpdate(api.messages.list, {}, (messages) => {  console.log(messages[0].body);});
```

Example 2 (ts):
```ts
// call the return value as a functionconst unsubscribe = client.onUpdate(api.messages.list, {}, (messages) => {  console.log(messages);});unsubscribe();// unpack the return value into its propertiesconst {  getCurrentValue,  unsubscribe,} = client.onUpdate(api.messages.list, {}, (messages) => {  console.log(messages);});
```

---

## Interface: OptimisticLocalStore

**URL:** https://docs.convex.dev/api/interfaces/browser.OptimisticLocalStore

**Contents:**
- Interface: OptimisticLocalStore
- Methods​
  - getQuery​
    - Type parameters​
    - Parameters​
    - Returns​
    - Defined in​
  - getAllQueries​
    - Type parameters​
    - Parameters​

browser.OptimisticLocalStore

A view of the query results currently in the Convex client for use within optimistic updates.

▸ getQuery<Query>(query, ...args): undefined | FunctionReturnType<Query>

Retrieve the result of a query from the client.

Important: Query results should be treated as immutable! Always make new copies of structures within query results to avoid corrupting data within the client.

undefined | FunctionReturnType<Query>

The query result or undefined if the query is not currently in the client.

browser/sync/optimistic_updates.ts:28

▸ getAllQueries<Query>(query): { args: FunctionArgs<Query> ; value: undefined | FunctionReturnType<Query> }[]

Retrieve the results and arguments of all queries with a given name.

This is useful for complex optimistic updates that need to inspect and update many query results (for example updating a paginated list).

Important: Query results should be treated as immutable! Always make new copies of structures within query results to avoid corrupting data within the client.

{ args: FunctionArgs<Query> ; value: undefined | FunctionReturnType<Query> }[]

An array of objects, one for each query of the given name. Each object includes:

browser/sync/optimistic_updates.ts:49

▸ setQuery<Query>(query, args, value): void

Optimistically update the result of a query.

This can either be a new value (perhaps derived from the old value from getQuery) or undefined to remove the query. Removing a query is useful to create loading states while Convex recomputes the query results.

browser/sync/optimistic_updates.ts:69

---

## Interface: BaseTableReader<DataModel, TableName>

**URL:** https://docs.convex.dev/api/interfaces/server.BaseTableReader

**Contents:**
- Interface: BaseTableReader<DataModel, TableName>
- Type parameters​
- Hierarchy​
- Methods​
  - get​
    - Parameters​
    - Returns​
    - Defined in​
  - query​
    - Returns​

server.BaseTableReader

▸ get(id): Promise<null | DocumentByName<DataModel, TableName>>

Fetch a single document from the table by its GenericId.

Promise<null | DocumentByName<DataModel, TableName>>

server/database.ts:90

▸ query(): QueryInitializer<NamedTableInfo<DataModel, TableName>>

Begin a query for the table.

Queries don't execute immediately, so calling this method and extending its query are free until the results are actually used.

QueryInitializer<NamedTableInfo<DataModel, TableName>>

server/database.ts:102

---

## Interface: SubscribeOptions

**URL:** https://docs.convex.dev/api/interfaces/browser.SubscribeOptions

**Contents:**
- Interface: SubscribeOptions
- Properties​
  - journal​
    - Defined in​

browser.SubscribeOptions

Options for subscribe.

• Optional journal: QueryJournal

An (optional) journal produced from a previous execution of this query function.

If there is an existing subscription to a query function with the same name and arguments, this journal will have no effect.

browser/sync/client.ts:181

---

## Class: Expression<T>

**URL:** https://docs.convex.dev/api/classes/server.Expression

**Contents:**
- Class: Expression<T>
- Type parameters​

Expressions are evaluated to produce a Value in the course of executing a query.

To construct an expression, use the FilterBuilder provided within filter.

---

## Class: IndexRange

**URL:** https://docs.convex.dev/api/classes/server.IndexRange

**Contents:**
- Class: IndexRange

An expression representing an index range created by IndexRangeBuilder.

---

## Interface: StorageReader

**URL:** https://docs.convex.dev/api/interfaces/server.StorageReader

**Contents:**
- Interface: StorageReader
- Hierarchy​
- Methods​
  - getUrl​
    - Parameters​
    - Returns​
    - Defined in​
    - Type parameters​
    - Parameters​
    - Returns​

An interface to read files from storage within Convex query functions.

▸ getUrl(storageId): Promise<null | string>

Get the URL for a file in storage by its Id<"_storage">.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getUrl<T>(storageId): Promise<null | string>

Passing a string is deprecated, use storage.getUrl(Id<"_storage">) instead.

Get the URL for a file in storage by its StorageId.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getMetadata(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

▸ getMetadata<T>(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

---

## Class: VUnion<Type, T, IsOptional, FieldPaths>

**URL:** https://docs.convex.dev/api/classes/values.VUnion

**Contents:**
- Class: VUnion<Type, T, IsOptional, FieldPaths>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.union() validator.

BaseValidator<Type, IsOptional, FieldPaths>

• new VUnion<Type, T, IsOptional, FieldPaths>(«destructured»)

Usually you'd use v.union(...members) instead.

BaseValidator&lt;Type, IsOptional, FieldPaths&gt;.constructor

values/validators.ts:520

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: FieldPaths

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly members: T

The array of validators, one of which must match the value.

values/validators.ts:510

• Readonly kind: "union"

The kind of validator, "union".

values/validators.ts:515

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Module: server

**URL:** https://docs.convex.dev/api/modules/server

**Contents:**
- Module: server
- Usage​
  - Code Generation​
  - Example​
- Classes​
- Interfaces​
- References​
  - UserIdentityAttributes​
- Type Aliases​
  - FunctionType​

Utilities for implementing server-side Convex query and mutation functions.

This module is typically used alongside generated server code.

To generate the server code, run npx convex dev in your Convex project. This will create a convex/_generated/server.js file with the following functions, typed for your schema:

If you aren't using TypeScript and code generation, you can use these untyped functions instead:

Convex functions are defined by using either the query or mutation wrappers.

Queries receive a db that implements the GenericDatabaseReader interface.

If your function needs to write to the database, such as inserting, updating, or deleting documents, use mutation instead which provides a db that implements the GenericDatabaseWriter interface.

Re-exports UserIdentityAttributes

Ƭ FunctionType: "query" | "mutation" | "action"

The type of a Convex function.

Ƭ FunctionReference<Type, Visibility, Args, ReturnType, ComponentPath>: Object

A reference to a registered Convex function.

You can create a FunctionReference using the generated api utility:

If you aren't using code generation, you can create references using anyApi:

Function references can be used to invoke functions from the client. For example, in React you can pass references to the useQuery hook:

Ƭ ApiFromModules<AllModules>: FilterApi<ApiFromModulesAllowEmptyNodes<AllModules>, FunctionReference<any, any, any, any>>

Given the types of all modules in the convex/ directory, construct the type of api.

api is a utility for constructing FunctionReferences.

Ƭ FilterApi<API, Predicate>: Expand<{ [mod in keyof API as API[mod] extends Predicate ? mod : API[mod] extends FunctionReference<any, any, any, any> ? never : FilterApi<API[mod], Predicate> extends Record<string, never> ? never : mod]: API[mod] extends Predicate ? API[mod] : FilterApi<API[mod], Predicate> }>

Filter a Convex deployment api object for functions which meet criteria, for example all public queries.

Ƭ AnyApi: Record<string, Record<string, AnyModuleDirOrFunc>>

The type that Convex api objects extend. If you were writing an api from scratch it should extend this type.

Ƭ PartialApi<API>: { [mod in keyof API]?: API[mod] extends FunctionReference<any, any, any, any> ? API[mod] : PartialApi<API[mod]> }

Recursive partial API, useful for defining a subset of an API when mocking or building custom api objects.

Ƭ FunctionArgs<FuncRef>: FuncRef["_args"]

Given a FunctionReference, get the return type of the function.

This is represented as an object mapping argument names to values.

Ƭ OptionalRestArgs<FuncRef>: FuncRef["_args"] extends EmptyObject ? [args?: EmptyObject] : [args: FuncRef["_args"]]

A tuple type of the (maybe optional) arguments to FuncRef.

This type is used to make methods involving arguments type safe while allowing skipping the arguments for functions that don't require arguments.

Ƭ ArgsAndOptions<FuncRef, Options>: FuncRef["_args"] extends EmptyObject ? [args?: EmptyObject, options?: Options] : [args: FuncRef["_args"], options?: Options]

A tuple type of the (maybe optional) arguments to FuncRef, followed by an options object of type Options.

This type is used to make methods like useQuery type-safe while allowing

Ƭ FunctionReturnType<FuncRef>: FuncRef["_returnType"]

Given a FunctionReference, get the return type of the function.

The value exported by your Convex project in auth.config.ts.

server/authentication.ts:19

Ƭ AuthProvider: { applicationID: string ; domain: string } | { type: "customJwt" ; applicationID?: string ; issuer: string ; jwks: string ; algorithm: "RS256" | "ES256" }

An authentication provider allowed to issue JWTs for your app.

See: https://docs.convex.dev/auth/advanced/custom-auth and https://docs.convex.dev/auth/advanced/custom-jwt

server/authentication.ts:28

Ƭ FunctionHandle<Type, Args, ReturnType>: string & FunctionReference<Type, "internal", Args, ReturnType>

A serializable reference to a Convex function. Passing a this reference to another component allows that component to call this function during the current function execution or at any later time. Function handles are used like api.folder.function FunctionReferences, e.g. ctx.scheduler.runAfter(0, functionReference, args).

A function reference is stable across code pushes but it's possible the Convex function it refers to might no longer exist.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

server/components/index.ts:35

Ƭ ComponentDefinition<Exports>: Object

An object of this type should be the default export of a convex.config.ts file in a component definition directory.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

server/components/index.ts:84

Ƭ AnyChildComponents: Record<string, AnyComponentReference>

server/components/index.ts:402

Ƭ AnyComponents: AnyChildComponents

server/components/index.ts:442

Ƭ GenericDocument: Record<string, Value>

A document stored in Convex.

server/data_model.ts:9

Ƭ GenericFieldPaths: string

A type describing all of the document fields in a table.

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

server/data_model.ts:18

Ƭ GenericIndexFields: string[]

A type describing the ordered fields in an index.

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

server/data_model.ts:29

Ƭ GenericTableIndexes: Record<string, GenericIndexFields>

A type describing the indexes in a table.

It's an object mapping each index name to the fields in the index.

server/data_model.ts:37

Ƭ GenericSearchIndexConfig: Object

A type describing the configuration of a search index.

server/data_model.ts:43

Ƭ GenericTableSearchIndexes: Record<string, GenericSearchIndexConfig>

A type describing all of the search indexes in a table.

This is an object mapping each index name to the config for the index.

server/data_model.ts:54

Ƭ GenericVectorIndexConfig: Object

A type describing the configuration of a vector index.

server/data_model.ts:63

Ƭ GenericTableVectorIndexes: Record<string, GenericVectorIndexConfig>

A type describing all of the vector indexes in a table.

This is an object mapping each index name to the config for the index.

server/data_model.ts:75

Ƭ FieldTypeFromFieldPath<Document, FieldPath>: FieldTypeFromFieldPathInner<Document, FieldPath> extends Value | undefined ? FieldTypeFromFieldPathInner<Document, FieldPath> : Value | undefined

The type of a field in a document.

Note that this supports both simple fields like "name" and nested fields like "properties.name".

If the field is not present in the document it is considered to be undefined.

server/data_model.ts:104

Ƭ FieldTypeFromFieldPathInner<Document, FieldPath>: FieldPath extends `${infer First}.${infer Second}` ? ValueFromUnion<Document, First, Record<never, never>> extends infer FieldValue ? FieldValue extends GenericDocument ? FieldTypeFromFieldPath<FieldValue, Second> : undefined : undefined : ValueFromUnion<Document, FieldPath, undefined>

The inner type of FieldTypeFromFieldPath.

It's wrapped in a helper to coerce the type to Value | undefined since some versions of TypeScript fail to infer this type correctly.

server/data_model.ts:120

Ƭ GenericTableInfo: Object

A type describing the document type and indexes in a table.

server/data_model.ts:145

Ƭ DocumentByInfo<TableInfo>: TableInfo["document"]

The type of a document in a table for a given GenericTableInfo.

server/data_model.ts:157

Ƭ FieldPaths<TableInfo>: TableInfo["fieldPaths"]

The field paths in a table for a given GenericTableInfo.

These can either be field names (like "name") or references to fields on nested objects (like "properties.name").

server/data_model.ts:167

Ƭ Indexes<TableInfo>: TableInfo["indexes"]

The database indexes in a table for a given GenericTableInfo.

This will be an object mapping index names to the fields in the index.

server/data_model.ts:176

Ƭ IndexNames<TableInfo>: keyof Indexes<TableInfo>

The names of indexes in a table for a given GenericTableInfo.

server/data_model.ts:182

Ƭ NamedIndex<TableInfo, IndexName>: Indexes<TableInfo>[IndexName]

Extract the fields of an index from a GenericTableInfo by name.

server/data_model.ts:189

Ƭ SearchIndexes<TableInfo>: TableInfo["searchIndexes"]

The search indexes in a table for a given GenericTableInfo.

This will be an object mapping index names to the search index config.

server/data_model.ts:200

Ƭ SearchIndexNames<TableInfo>: keyof SearchIndexes<TableInfo>

The names of search indexes in a table for a given GenericTableInfo.

server/data_model.ts:207

Ƭ NamedSearchIndex<TableInfo, IndexName>: SearchIndexes<TableInfo>[IndexName]

Extract the config of a search index from a GenericTableInfo by name.

server/data_model.ts:214

Ƭ VectorIndexes<TableInfo>: TableInfo["vectorIndexes"]

The vector indexes in a table for a given GenericTableInfo.

This will be an object mapping index names to the vector index config.

server/data_model.ts:225

Ƭ VectorIndexNames<TableInfo>: keyof VectorIndexes<TableInfo>

The names of vector indexes in a table for a given GenericTableInfo.

server/data_model.ts:232

Ƭ NamedVectorIndex<TableInfo, IndexName>: VectorIndexes<TableInfo>[IndexName]

Extract the config of a vector index from a GenericTableInfo by name.

server/data_model.ts:239

Ƭ GenericDataModel: Record<string, GenericTableInfo>

A type describing the tables in a Convex project.

This is designed to be code generated with npx convex dev.

server/data_model.ts:252

Ƭ AnyDataModel: Object

A GenericDataModel that considers documents to be any and does not support indexes.

This is the default before a schema is defined.

▪ [tableName: string]: { document: any ; fieldPaths: GenericFieldPaths ; indexes: ; searchIndexes: ; vectorIndexes: }

server/data_model.ts:261

Ƭ TableNamesInDataModel<DataModel>: keyof DataModel & string

A type of all of the table names defined in a GenericDataModel.

server/data_model.ts:275

Ƭ NamedTableInfo<DataModel, TableName>: DataModel[TableName]

Extract the TableInfo for a table in a GenericDataModel by table name.

server/data_model.ts:284

Ƭ DocumentByName<DataModel, TableName>: DataModel[TableName]["document"]

The type of a document in a GenericDataModel by table name.

server/data_model.ts:293

Ƭ ExpressionOrValue<T>: Expression<T> | T

An Expression or a constant Value

server/filter_builder.ts:38

An opaque identifier used for paginating a database query.

Cursors are returned from paginate and represent the point of the query where the page of results ended.

To continue paginating, pass the cursor back into paginate in the PaginationOptions object to fetch another page of results.

Note: Cursors can only be passed to exactly the same database query that they were generated from. You may not reuse a cursor between different database queries.

server/pagination.ts:19

Ƭ GenericMutationCtxWithTable<DataModel>: Omit<GenericMutationCtx<DataModel>, "db"> & { db: GenericDatabaseWriterWithTable<DataModel> }

A set of services for use within Convex mutation functions.

The mutation context is passed as the first argument to any Convex mutation function run on the server.

If you're using code generation, use the MutationCtx type in convex/_generated/server.d.ts which is typed for your data model.

server/registration.ts:109

Ƭ GenericQueryCtxWithTable<DataModel>: Omit<GenericQueryCtx<DataModel>, "db"> & { db: GenericDatabaseReaderWithTable<DataModel> }

A set of services for use within Convex query functions.

The query context is passed as the first argument to any Convex query function run on the server.

This differs from the MutationCtx because all of the services are read-only.

server/registration.ts:167

Ƭ DefaultFunctionArgs: Record<string, unknown>

The default arguments type for a Convex query, mutation, or action function.

Convex functions always take an arguments object that maps the argument names to their values.

server/registration.ts:278

Ƭ ArgsArray: OneArgArray | NoArgsArray

An array of arguments to a Convex function.

Convex functions can take either a single DefaultFunctionArgs object or no args at all.

server/registration.ts:301

Ƭ ArgsArrayToObject<Args>: Args extends OneArgArray<infer ArgsObject> ? ArgsObject : EmptyObject

Convert an ArgsArray into a single object type.

Empty arguments arrays are converted to EmptyObject.

server/registration.ts:316

Ƭ FunctionVisibility: "public" | "internal"

A type representing the visibility of a Convex function.

server/registration.ts:324

Ƭ RegisteredMutation<Visibility, Args, Returns>: { isConvexFunction: true ; isMutation: true } & VisibilityProperties<Visibility>

A mutation function that is part of this app.

You can create a mutation by wrapping your function in mutationGeneric or internalMutationGeneric and exporting it.

server/registration.ts:347

Ƭ RegisteredQuery<Visibility, Args, Returns>: { isConvexFunction: true ; isQuery: true } & VisibilityProperties<Visibility>

A query function that is part of this app.

You can create a query by wrapping your function in queryGeneric or internalQueryGeneric and exporting it.

server/registration.ts:376

Ƭ RegisteredAction<Visibility, Args, Returns>: { isConvexFunction: true ; isAction: true } & VisibilityProperties<Visibility>

An action that is part of this app.

You can create an action by wrapping your function in actionGeneric or internalActionGeneric and exporting it.

server/registration.ts:405

Ƭ PublicHttpAction: Object

An HTTP action that is part of this app's public API.

You can create public HTTP actions by wrapping your function in httpActionGeneric and exporting it.

server/registration.ts:434

Ƭ UnvalidatedFunction<Ctx, Args, Returns>: (ctx: Ctx, ...args: Args) => Returns | { handler: (ctx: Ctx, ...args: Args) => Returns }

-- See the type definition for MutationBuilder or similar for the types used for defining Convex functions.

The definition of a Convex query, mutation, or action function without argument validation.

Convex functions always take a context object as their first argument and an (optional) args object as their second argument.

This can be written as a function like:

or as an object like:

See ValidatedFunction to add argument validation.

server/registration.ts:472

Ƭ ReturnValueForOptionalValidator<ReturnsValidator>: [ReturnsValidator] extends [Validator<any, any, any>] ? ValidatorTypeToReturnType<Infer<ReturnsValidator>> : [ReturnsValidator] extends [PropertyValidators] ? ValidatorTypeToReturnType<ObjectType<ReturnsValidator>> : any

There are multiple syntaxes for defining a Convex function:

In each of these, we want to correctly infer the type for the arguments and return value, preferring the type derived from a validator if it's provided.

To avoid having a separate overload for each, which would show up in error messages, we use the type params -- ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs.

The type for ReturnValue and OneOrZeroArgs are constrained by the type or ArgsValidator and ReturnsValidator if they're present, and inferred from any explicit type annotations to the arguments or return value of the function.

Below are a few utility types to get the appropriate type constraints based on an optional validator.

server/registration.ts:574

Ƭ ArgsArrayForOptionalValidator<ArgsValidator>: [ArgsValidator] extends [Validator<any, any, any>] ? OneArgArray<Infer<ArgsValidator>> : [ArgsValidator] extends [PropertyValidators] ? OneArgArray<ObjectType<ArgsValidator>> : ArgsArray

server/registration.ts:582

Ƭ DefaultArgsForOptionalValidator<ArgsValidator>: [ArgsValidator] extends [Validator<any, any, any>] ? [Infer<ArgsValidator>] : [ArgsValidator] extends [PropertyValidators] ? [ObjectType<ArgsValidator>] : OneArgArray

server/registration.ts:590

Ƭ MutationBuilder<DataModel, Visibility>: <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation: { args?: ArgsValidator ; returns?: ReturnsValidator ; handler: (ctx: GenericMutationCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue } | (ctx: GenericMutationCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue) => RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

▸ <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation): RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Internal type helper used by Convex code generation.

Used to give mutationGeneric a type specific to your data model.

RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

server/registration.ts:604

Ƭ MutationBuilderWithTable<DataModel, Visibility>: <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation: { args?: ArgsValidator ; returns?: ReturnsValidator ; handler: (ctx: GenericMutationCtxWithTable<DataModel>, ...args: OneOrZeroArgs) => ReturnValue } | (ctx: GenericMutationCtxWithTable<DataModel>, ...args: OneOrZeroArgs) => ReturnValue) => RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

▸ <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation): RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Internal type helper used by Convex code generation.

Used to give mutationGeneric a type specific to your data model.

RegisteredMutation<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

server/registration.ts:697

Ƭ QueryBuilder<DataModel, Visibility>: <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query: { args?: ArgsValidator ; returns?: ReturnsValidator ; handler: (ctx: GenericQueryCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue } | (ctx: GenericQueryCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue) => RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

▸ <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query): RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Internal type helper used by Convex code generation.

Used to give queryGeneric a type specific to your data model.

RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

server/registration.ts:790

Ƭ QueryBuilderWithTable<DataModel, Visibility>: <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query: { args?: ArgsValidator ; returns?: ReturnsValidator ; handler: (ctx: GenericQueryCtxWithTable<DataModel>, ...args: OneOrZeroArgs) => ReturnValue } | (ctx: GenericQueryCtxWithTable<DataModel>, ...args: OneOrZeroArgs) => ReturnValue) => RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

▸ <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query): RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Internal type helper used by Convex code generation.

Used to give queryGeneric a type specific to your data model.

RegisteredQuery<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

server/registration.ts:879

Ƭ ActionBuilder<DataModel, Visibility>: <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(func: { args?: ArgsValidator ; returns?: ReturnsValidator ; handler: (ctx: GenericActionCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue } | (ctx: GenericActionCtx<DataModel>, ...args: OneOrZeroArgs) => ReturnValue) => RegisteredAction<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

▸ <ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(func): RegisteredAction<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Internal type helper used by Convex code generation.

Used to give actionGeneric a type specific to your data model.

RegisteredAction<Visibility, ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

server/registration.ts:968

Ƭ HttpActionBuilder: (func: (ctx: GenericActionCtx<any>, request: Request) => Promise<Response>) => PublicHttpAction

▸ (func): PublicHttpAction

Internal type helper used by Convex code generation.

Used to give httpActionGeneric a type specific to your data model and functions.

server/registration.ts:1063

Ƭ RoutableMethod: typeof ROUTABLE_HTTP_METHODS[number]

A type representing the methods supported by Convex HTTP actions.

HEAD is handled by Convex by running GET and stripping the body. CONNECT is not supported and will not be supported. TRACE is not supported and will not be supported.

Ƭ RouteSpecWithPath: Object

A type representing a route to an HTTP action using an exact request URL path match.

Used by HttpRouter to route requests to HTTP actions.

Ƭ RouteSpecWithPathPrefix: Object

A type representing a route to an HTTP action using a request URL path prefix match.

Used by HttpRouter to route requests to HTTP actions.

Ƭ RouteSpec: RouteSpecWithPath | RouteSpecWithPathPrefix

A type representing a route to an HTTP action.

Used by HttpRouter to route requests to HTTP actions.

Ƭ SchedulableFunctionReference: FunctionReference<"mutation" | "action", "public" | "internal">

A FunctionReference that can be scheduled to run in the future.

Schedulable functions are mutations and actions that are public or internal.

server/scheduler.ts:11

Ƭ GenericSchema: Record<string, TableDefinition>

A type describing the schema of a Convex project.

This should be constructed using defineSchema, defineTable, and v.

Ƭ DataModelFromSchemaDefinition<SchemaDef>: MaybeMakeLooseDataModel<{ [TableName in keyof SchemaDef["tables"] & string]: SchemaDef["tables"][TableName] extends TableDefinition<infer DocumentType, infer Indexes, infer SearchIndexes, infer VectorIndexes> ? Object : never }, SchemaDef["strictTableNameTypes"]>

Internal type used in Convex code generation!

Convert a SchemaDefinition into a GenericDataModel.

Ƭ SystemTableNames: TableNamesInDataModel<SystemDataModel>

A reference to a file in storage.

This is used in the StorageReader and StorageWriter which are accessible in Convex queries and mutations via QueryCtx and MutationCtx respectively.

Ƭ FileStorageId: GenericId<"_storage"> | StorageId

Ƭ FileMetadata: Object

Metadata for a single file as returned by storage.getMetadata.

Ƭ SystemFields: Object

The fields that Convex automatically adds to documents, not including _id.

This is an object type mapping field name to field type.

server/system_fields.ts:11

Ƭ IdField<TableName>: Object

The _id field that Convex automatically adds to documents.

server/system_fields.ts:19

Ƭ WithoutSystemFields<Document>: Expand<BetterOmit<Document, keyof SystemFields | "_id">>

A Convex document with the system fields like _id and _creationTime omitted.

server/system_fields.ts:28

Ƭ WithOptionalSystemFields<Document>: Expand<WithoutSystemFields<Document> & Partial<Pick<Document, keyof SystemFields | "_id">>>

A Convex document with the system fields like _id and _creationTime optional.

server/system_fields.ts:37

Ƭ SystemIndexes: Object

The indexes that Convex automatically adds to every table.

This is an object mapping index names to index field paths.

server/system_fields.ts:48

Ƭ IndexTiebreakerField: "_creationTime"

Convex automatically appends "_creationTime" to the end of every index to break ties if all of the other fields are identical.

server/system_fields.ts:61

Ƭ VectorSearch<DataModel, TableName, IndexName>: (tableName: TableName, indexName: IndexName, query: VectorSearchQuery<NamedTableInfo<DataModel, TableName>, IndexName>) => Promise<{ _id: GenericId<TableName> ; _score: number }[]>

▸ (tableName, indexName, query): Promise<{ _id: GenericId<TableName> ; _score: number }[]>

Promise<{ _id: GenericId<TableName> ; _score: number }[]>

server/vector_search.ts:55

Ƭ Expand<ObjectType>: ObjectType extends Record<any, any> ? { [Key in keyof ObjectType]: ObjectType[Key] } : never

Hack! This type causes TypeScript to simplify how it renders object types.

It is functionally the identity for object types, but in practice it can simplify expressions like A & B.

Ƭ BetterOmit<T, K>: { [Property in keyof T as Property extends K ? never : Property]: T[Property] }

• Const anyApi: AnyApi

A utility for constructing FunctionReferences in projects that are not using code generation.

You can create a reference to a function like:

This supports accessing any path regardless of what directories and modules are in your project. All function references are typed as AnyFunctionReference.

If you're using code generation, use api from convex/_generated/api instead. It will be more type-safe and produce better auto-complete in your editor.

• Const paginationOptsValidator: VObject<{ id: undefined | number ; endCursor: undefined | null | string ; maximumRowsRead: undefined | number ; maximumBytesRead: undefined | number ; numItems: number ; cursor: null | string }, { numItems: VFloat64<number, "required"> ; cursor: VUnion<null | string, [VString<string, "required">, VNull<null, "required">], "required", never> ; endCursor: VUnion<undefined | null | string, [VString<string, "required">, VNull<null, "required">], "optional", never> ; id: VFloat64<undefined | number, "optional"> ; maximumRowsRead: VFloat64<undefined | number, "optional"> ; maximumBytesRead: VFloat64<undefined | number, "optional"> }, "required", "id" | "numItems" | "cursor" | "endCursor" | "maximumRowsRead" | "maximumBytesRead">

A Validator for PaginationOptions.

This includes the standard PaginationOptions properties along with an optional cache-busting id property used by usePaginatedQuery.

server/pagination.ts:131

• Const ROUTABLE_HTTP_METHODS: readonly ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"]

A list of the methods supported by Convex HTTP actions.

HEAD is handled by Convex by running GET and stripping the body. CONNECT is not supported and will not be supported. TRACE is not supported and will not be supported.

▸ getFunctionName(functionReference): string

Get the name of a function from a FunctionReference.

The name is a string like "myDir/myModule:myFunction". If the exported name of the function is "default", the function name is omitted (e.g. "myDir/myModule").

A string of the function's name.

▸ makeFunctionReference<type, args, ret>(name): FunctionReference<type, "public", args, ret>

FunctionReferences generally come from generated code, but in custom clients it may be useful to be able to build one manually.

Real function references are empty objects at runtime, but the same interface can be implemented with an object for tests and clients which don't use code generation.

FunctionReference<type, "public", args, ret>

▸ filterApi<API, Predicate>(api): FilterApi<API, Predicate>

Given an api of type API and a FunctionReference subtype, return an api object containing only the function references that match.

FilterApi<API, Predicate>

▸ createFunctionHandle<Type, Args, ReturnType>(functionReference): Promise<FunctionHandle<Type, Args, ReturnType>>

Create a serializable reference to a Convex function. Passing a this reference to another component allows that component to call this function during the current function execution or at any later time. Function handles are used like api.folder.function FunctionReferences, e.g. ctx.scheduler.runAfter(0, functionReference, args).

A function reference is stable across code pushes but it's possible the Convex function it refers to might no longer exist.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

Promise<FunctionHandle<Type, Args, ReturnType>>

server/components/index.ts:54

▸ defineComponent<Exports>(name): ComponentDefinition<Exports>

Define a component, a piece of a Convex deployment with namespaced resources.

The default the default export of a module like "cool-component/convex.config.js" is a `@link ComponentDefinition}, but during component definition evaluation this is its type instead.

@param name Name must be alphanumeric plus underscores. Typically these are lowercase with underscores like "onboarding_flow_tracker".

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

ComponentDefinition<Exports>

server/components/index.ts:359

▸ defineApp(): AppDefinition

Attach components, reuseable pieces of a Convex deployment, to this Convex app.

This is a feature of components, which are in beta. This API is unstable and may change in subsequent releases.

server/components/index.ts:385

▸ componentsGeneric(): AnyChildComponents

server/components/index.ts:440

▸ getFunctionAddress(functionReference): { functionHandle: string = functionReference; name?: undefined ; reference?: undefined = referencePath } | { functionHandle?: undefined = functionReference; name: any ; reference?: undefined = referencePath } | { functionHandle?: undefined = functionReference; name?: undefined ; reference: string = referencePath }

{ functionHandle: string = functionReference; name?: undefined ; reference?: undefined = referencePath } | { functionHandle?: undefined = functionReference; name: any ; reference?: undefined = referencePath } | { functionHandle?: undefined = functionReference; name?: undefined ; reference: string = referencePath }

server/components/paths.ts:20

Create a CronJobs object to schedule recurring tasks.

▸ mutationGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation): RegisteredMutation<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define a mutation in this Convex app's public API.

This function will be allowed to modify your Convex database and will be accessible from the client.

If you're using code generation, use the mutation function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredMutation<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped mutation. Include this as an export to name it and make it accessible.

server/registration.ts:608

▸ internalMutationGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(mutation): RegisteredMutation<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define a mutation that is only accessible from other Convex functions (but not from the client).

This function will be allowed to modify your Convex database. It will not be accessible from the client.

If you're using code generation, use the internalMutation function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredMutation<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped mutation. Include this as an export to name it and make it accessible.

server/registration.ts:608

▸ queryGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query): RegisteredQuery<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define a query in this Convex app's public API.

This function will be allowed to read your Convex database and will be accessible from the client.

If you're using code generation, use the query function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredQuery<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped query. Include this as an export to name it and make it accessible.

server/registration.ts:794

▸ internalQueryGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(query): RegisteredQuery<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define a query that is only accessible from other Convex functions (but not from the client).

This function will be allowed to read from your Convex database. It will not be accessible from the client.

If you're using code generation, use the internalQuery function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredQuery<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped query. Include this as an export to name it and make it accessible.

server/registration.ts:794

▸ actionGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(func): RegisteredAction<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define an action in this Convex app's public API.

If you're using code generation, use the action function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredAction<"public", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped function. Include this as an export to name it and make it accessible.

server/registration.ts:972

▸ internalActionGeneric<ArgsValidator, ReturnsValidator, ReturnValue, OneOrZeroArgs>(func): RegisteredAction<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

Define an action that is only accessible from other Convex functions (but not from the client).

If you're using code generation, use the internalAction function in convex/_generated/server.d.ts which is typed for your data model.

RegisteredAction<"internal", ArgsArrayToObject<OneOrZeroArgs>, ReturnValue>

The wrapped function. Include this as an export to name it and make it accessible.

server/registration.ts:972

▸ httpActionGeneric(func): PublicHttpAction

Define a Convex HTTP action.

The wrapped function. Route a URL path to this function in convex/http.js.

server/impl/registration_impl.ts:465

▸ httpRouter(): HttpRouter

Return a new HttpRouter object.

▸ defineTable<DocumentSchema>(documentSchema): TableDefinition<DocumentSchema>

Define a table in a schema.

You can either specify the schema of your documents as an object like

or as a schema type like

TableDefinition<DocumentSchema>

A TableDefinition for the table.

▸ defineTable<DocumentSchema>(documentSchema): TableDefinition<VObject<ObjectType<DocumentSchema>, DocumentSchema>>

Define a table in a schema.

You can either specify the schema of your documents as an object like

or as a schema type like

TableDefinition<VObject<ObjectType<DocumentSchema>, DocumentSchema>>

A TableDefinition for the table.

▸ defineSchema<Schema, StrictTableNameTypes>(schema, options?): SchemaDefinition<Schema, StrictTableNameTypes>

Define the schema of this Convex project.

This should be exported from a schema.ts file in your convex/ directory like:

SchemaDefinition<Schema, StrictTableNameTypes>

**Examples:**

Example 1 (js):
```js
import { query } from "./_generated/server";export default query({  handler: async ({ db }, { arg1, arg2 }) => {    // Your (read-only) code here!  },});
```

Example 2 (js):
```js
import { mutation } from "./_generated/server";export default mutation({  handler: async ({ db }, { arg1, arg2 }) => {    // Your mutation code here!  },});
```

Example 3 (js):
```js
import { api } from "../convex/_generated/api";const reference = api.myModule.myFunction;
```

Example 4 (js):
```js
import { anyApi } from "convex/server";const reference = anyApi.myModule.myFunction;
```

---

## Interface: ReactMutation<Mutation>

**URL:** https://docs.convex.dev/api/interfaces/react.ReactMutation

**Contents:**
- Interface: ReactMutation<Mutation>
- Type parameters​
- Callable​
  - ReactMutation​
    - Parameters​
    - Returns​
    - Defined in​
- Methods​
  - withOptimisticUpdate​
    - Type parameters​

An interface to execute a Convex mutation function on the server.

▸ ReactMutation(...args): Promise<FunctionReturnType<Mutation>>

Execute the mutation on the server, returning a Promise of its return value.

Promise<FunctionReturnType<Mutation>>

The return value of the server-side function call.

▸ withOptimisticUpdate<T>(optimisticUpdate): ReactMutation<Mutation>

Define an optimistic update to apply as part of this mutation.

This is a temporary update to the local query results to facilitate a fast, interactive UI. It enables query results to update before a mutation executed on the server.

When the mutation is invoked, the optimistic update will be applied.

Optimistic updates can also be used to temporarily remove queries from the client and create loading experiences until a mutation completes and the new query results are synced.

The update will be automatically rolled back when the mutation is fully completed and queries have been updated.

ReactMutation<Mutation>

A new ReactMutation with the update configured.

---

## Interface: SystemDataModel

**URL:** https://docs.convex.dev/api/interfaces/server.SystemDataModel

**Contents:**
- Interface: SystemDataModel
- Hierarchy​
- Properties​
  - _scheduled_functions​
    - Type declaration​
    - Inherited from​
  - _storage​
    - Type declaration​
    - Inherited from​

server.SystemDataModel

Internal type used in Convex code generation!

Convert a SchemaDefinition into a GenericDataModel.

DataModelFromSchemaDefinition<typeof _systemSchema>

• _scheduled_functions: Object

DataModelFromSchemaDefinition._scheduled_functions

DataModelFromSchemaDefinition._storage

---

## Module: browser

**URL:** https://docs.convex.dev/api/modules/browser

**Contents:**
- Module: browser
- Usage​
- Classes​
- Interfaces​
- Type Aliases​
  - HttpMutationOptions​
    - Type declaration​
    - Defined in​
  - ConvexClientOptions​
    - Defined in​

Tools for accessing Convex in the browser.

If you are using React, use the react module instead.

Create a ConvexHttpClient to connect to the Convex Cloud.

Ƭ HttpMutationOptions: Object

browser/http_client.ts:40

Ƭ ConvexClientOptions: BaseConvexClientOptions & { disabled?: boolean ; unsavedChangesWarning?: boolean }

browser/simple_client.ts:28

Ƭ AuthTokenFetcher: (args: { forceRefreshToken: boolean }) => Promise<string | null | undefined>

▸ (args): Promise<string | null | undefined>

An async function returning a JWT. Depending on the auth providers configured in convex/auth.config.ts, this may be a JWT-encoded OpenID Connect Identity Token or a traditional JWT.

forceRefreshToken is true if the server rejected a previously returned token or the token is anticipated to expiring soon based on its exp time.

See ConvexReactClient.setAuth.

Promise<string | null | undefined>

browser/sync/authentication_manager.ts:25

Ƭ ConnectionState: Object

State describing the client's connection with the Convex backend.

browser/sync/client.ts:138

Ƭ FunctionResult: FunctionSuccess | FunctionFailure

The result of running a function on the server.

If the function hit an exception it will have an errorMessage. Otherwise it will produce a Value.

browser/sync/function_result.ts:11

Ƭ OptimisticUpdate<Args>: (localQueryStore: OptimisticLocalStore, args: Args) => void

▸ (localQueryStore, args): void

A temporary, local update to query results within this client.

This update will always be executed when a mutation is synced to the Convex server and rolled back when the mutation completes.

Note that optimistic updates can be called multiple times! If the client loads new data while the mutation is in progress, the update will be replayed again.

browser/sync/optimistic_updates.ts:90

Ƭ QueryJournal: string | null

A serialized representation of decisions made during a query's execution.

A journal is produced when a query function first executes and is re-used when a query is re-executed.

Currently this is used to store pagination end cursors to ensure that pages of paginated queries will always end at the same cursor. This enables gapless, reactive pagination.

null is used to represent empty journals.

browser/sync/protocol.ts:113

A string representing the name and arguments of a query.

This is used by the BaseConvexClient.

browser/sync/udf_path_utils.ts:27

Ƭ UserIdentityAttributes: Omit<UserIdentity, "tokenIdentifier">

server/authentication.ts:215

**Examples:**

Example 1 (typescript):
```typescript
import { ConvexHttpClient } from "convex/browser";// typically loaded from an environment variableconst address = "https://small-mouse-123.convex.cloud";const convex = new ConvexHttpClient(address);
```

---

## api.js

**URL:** https://docs.convex.dev/generated-api/api

**Contents:**
- api.js
  - api​
  - internal​

These exports are not directly available in the convex package!

Instead you need to run npx convex dev to create convex/_generated/api.js and convex/_generated/api.d.ts.

These types require running code generation because they are specific to the Convex functions you define for your app.

If you aren't using code generation, you can use makeFunctionReference instead.

An object of type API describing your app's public Convex API.

Its API type includes information about the arguments and return types of your app's Convex functions.

The api object is used by client-side React hooks and Convex functions that run or schedule other functions.

Another object of type API describing your app's internal Convex API.

**Examples:**

Example 1 (javascript):
```javascript
import { api } from "../convex/_generated/api";import { useQuery } from "convex/react";const data = useQuery(api.messages.list);
```

Example 2 (js):
```js
import { action } from "../_generated/server";import { internal } from "../_generated/api";export default action({  handler: async ({ runMutation }, { planId, ... }) => {    // Call out to payment provider (e.g. Stripe) to charge customer    const response = await fetch(...);    if (response.ok) {      // Mark the plan as "professional" in the Convex DB      await runMutation(internal.plans.markPlanAsProfessional, { planId });    }  },});
```

---

## Interface: VectorFilterBuilder<Document, VectorIndexConfig>

**URL:** https://docs.convex.dev/api/interfaces/server.VectorFilterBuilder

**Contents:**
- Interface: VectorFilterBuilder<Document, VectorIndexConfig>
- Type parameters​
- Methods​
  - eq​
    - Type parameters​
    - Parameters​
    - Returns​
    - Defined in​
  - or​
    - Parameters​

server.VectorFilterBuilder

An interface for defining filters for vector searches.

This has a similar interface to FilterBuilder, which is used in database queries, but supports only the methods that can be efficiently done in a vector search.

▸ eq<FieldName>(fieldName, value): FilterExpression<boolean>

Is the field at fieldName equal to value

FilterExpression<boolean>

server/vector_search.ts:110

▸ or(...exprs): FilterExpression<boolean>

exprs[0] || exprs[1] || ... || exprs[n]

FilterExpression<boolean>

server/vector_search.ts:122

---

## Interface: StorageWriter

**URL:** https://docs.convex.dev/api/interfaces/server.StorageWriter

**Contents:**
- Interface: StorageWriter
- Hierarchy​
- Methods​
  - getUrl​
    - Parameters​
    - Returns​
    - Inherited from​
    - Defined in​
    - Type parameters​
    - Parameters​

An interface to write files to storage within Convex mutation functions.

↳↳ StorageActionWriter

▸ getUrl(storageId): Promise<null | string>

Get the URL for a file in storage by its Id<"_storage">.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getUrl<T>(storageId): Promise<null | string>

Passing a string is deprecated, use storage.getUrl(Id<"_storage">) instead.

Get the URL for a file in storage by its StorageId.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getMetadata(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

StorageReader.getMetadata

▸ getMetadata<T>(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

StorageReader.getMetadata

▸ generateUploadUrl(): Promise<string>

Fetch a short-lived URL for uploading a file into storage.

Upon a POST request to this URL, the endpoint will return a JSON object containing a newly allocated Id<"_storage">.

The POST URL accepts an optional standard HTTP Digest header with a sha256 checksum.

server/storage.ts:105

▸ delete(storageId): Promise<void>

Delete a file from Convex storage.

Once a file is deleted, any URLs previously generated by getUrl will return 404s.

server/storage.ts:113

▸ delete<T>(storageId): Promise<void>

Passing a string is deprecated, use storage.delete(Id<"_storage">) instead.

Delete a file from Convex storage.

Once a file is deleted, any URLs previously generated by getUrl will return 404s.

server/storage.ts:124

---

## Interface: MutationOptions

**URL:** https://docs.convex.dev/api/interfaces/browser.MutationOptions

**Contents:**
- Interface: MutationOptions
- Properties​
  - optimisticUpdate​
    - Defined in​

browser.MutationOptions

Options for mutation.

• Optional optimisticUpdate: OptimisticUpdate<any>

An optimistic update to apply along with this mutation.

An optimistic update locally updates queries while a mutation is pending. Once the mutation completes, the update will be rolled back.

browser/sync/client.ts:201

---

## Convex HTTP API

**URL:** https://docs.convex.dev/http-api/

**Contents:**
- Convex HTTP API
- Convex value format​
- API authentication​
- Functions API​
  - POST /api/query, /api/mutation, /api/action​
  - POST /api/run/{functionIdentifier}​

The public functions that define a deployment are exposed at public HTTP endpoints.

Each of the HTTP APIs take a format query param that describes how documents are formatted. Currently the only supported value is json. See our types page for details. Note that for simplicity, the json format does not support all Convex data types as input, and uses overlapping representation for several data types in output. We plan to add a new format with support for all Convex data types in the future.

The Functions API can be optionally authenticated as a user via a bearer token in a Authorization header. The value is Bearer <access_key> where the key is a token from your auth provider. See the under the hood portion of the Clerk docs for details on how this works with Clerk.

Streaming export and streaming import requests require deployment admin authorization via the HTTP header Authorization. The value is Convex <access_key> where the access key comes from "Deploy key" on the Convex dashboard and gives full read and write access to your Convex data.

These HTTP endpoints allow you to call Convex functions and get the result as a value.

You can find your backend deployment URL on the dashboard Settings page, then the API URL will be <CONVEX_URL>/api/query etc., for example:

Result JSON on success

This HTTP endpoint allows you to call arbitrary Convex function types with the path in the request URL and get the result as a value. The function identifier is formatted as a string as defined here with a / replacing the :.

You can find your backend deployment URL on the dashboard Settings page, then the API URL will be <CONVEX_URL>/api/run/{functionIdentifier} etc., for example:

Result JSON on success

**Examples:**

Example 1 (text):
```text
curl https://acoustic-panther-728.convex.cloud/api/query \   -d '{"path": "messages:list", "args": {}, "format": "json"}' \   -H "Content-Type: application/json"
```

Example 2 (js):
```js
const url = "https://acoustic-panther-728.convex.cloud/api/query";const request = { path: "messages:list", args: {}, format: "json" };const response = fetch(url, {  method: "POST",  headers: {    "Content-Type": "application/json",  },  body: JSON.stringify(request),});
```

Example 3 (py):
```py
import requestsurl = "https://acoustic-panther-728.convex.cloud/api/query"headers = {"accept": "application/json"}body = {"path": "messages:list", "args": {}, "format": "json"}response = requests.post(url, headers=headers, json=body)
```

Example 4 (text):
```text
curl https://acoustic-panther-728.convex.cloud/api/run/messages/list \   -d '{"args": {}, "format": "json"}' \   -H "Content-Type: application/json"
```

---

## Interface: WatchQueryOptions

**URL:** https://docs.convex.dev/api/interfaces/react.WatchQueryOptions

**Contents:**
- Interface: WatchQueryOptions
- Properties​
  - journal​
    - Defined in​

react.WatchQueryOptions

Options for watchQuery.

• Optional journal: QueryJournal

An (optional) journal produced from a previous execution of this query function.

If there is an existing subscription to a query function with the same name and arguments, this journal will have no effect.

---

## Interface: SearchFilterBuilder<Document, SearchIndexConfig>

**URL:** https://docs.convex.dev/api/interfaces/server.SearchFilterBuilder

**Contents:**
- Interface: SearchFilterBuilder<Document, SearchIndexConfig>
- Type parameters​
- Methods​
  - search​
    - Parameters​
    - Returns​
    - Defined in​

server.SearchFilterBuilder

Builder for defining search filters.

A search filter is a chained list of:

The search expression must search for text in the index's searchField. The filter expressions can use any of the filterFields defined in the index.

For all other filtering use filter.

To learn about full text search, see Indexes.

▸ search(fieldName, query): SearchFilterFinalizer<Document, SearchIndexConfig>

Search for the terms in query within doc[fieldName].

This will do a full text search that returns results where any word of of query appears in the field.

Documents will be returned based on their relevance to the query. This takes into account:

SearchFilterFinalizer<Document, SearchIndexConfig>

server/search_filter_builder.ts:42

---

## Class: HttpRouter

**URL:** https://docs.convex.dev/api/classes/server.HttpRouter

**Contents:**
- Class: HttpRouter
- Constructors​
  - constructor​
- Properties​
  - exactRoutes​
    - Defined in​
  - prefixRoutes​
    - Defined in​
  - isRouter​
    - Defined in​

HTTP router for specifying the paths and methods of httpActionGenerics

An example convex/http.js file might look like this.

• exactRoutes: Map<string, Map<"GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", PublicHttpAction>>

• prefixRoutes: Map<"GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", Map<string, PublicHttpAction>>

Specify an HttpAction to be used to respond to requests for an HTTP method (e.g. "GET") and a path or pathPrefix.

Paths must begin with a slash. Path prefixes must also end in a slash.

▸ getRoutes(): readonly [string, "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", PublicHttpAction][]

Returns a list of routed HTTP actions.

These are used to populate the list of routes shown in the Functions page of the Convex dashboard.

readonly [string, "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", PublicHttpAction][]

▸ lookup(path, method): null | readonly [PublicHttpAction, "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", string]

Returns the appropriate HTTP action and its routed request path and method.

The path and method returned are used for logging and metrics, and should match up with one of the routes returned by getRoutes.

null | readonly [PublicHttpAction, "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH", string]

▸ runRequest(argsStr, requestRoute): Promise<string>

Given a JSON string representation of a Request object, return a Response by routing the request and running the appropriate endpoint or returning a 404 Response.

**Examples:**

Example 1 (js):
```js
import { httpRouter } from "convex/server";import { getMessagesByAuthor } from "./getMessagesByAuthor";import { httpAction } from "./_generated/server";const http = httpRouter();// HTTP actions can be defined inline...http.route({  path: "/message",  method: "POST",  handler: httpAction(async ({ runMutation }, request) => {    const { author, body } = await request.json();    await runMutation(api.sendMessage.default, { body, author });    return new Response(null, {      status: 200,    });  })});// ...or they can be imported from other files.http.route({  path: "/getMessagesByAuthor",  method: "GET",  handler: getMessagesByAuthor,});// Convex expects the router to be the default export of `convex/http.js`.export default http;
```

Example 2 (js):
```js
// matches `/profile` (but not `/profile/`)http.route({ path: "/profile", method: "GET", handler: getProfile})// matches `/profiles/`, `/profiles/abc`, and `/profiles/a/c/b` (but not `/profile`)http.route({ pathPrefix: "/profile/", method: "GET", handler: getProfile})
```

Example 3 (js):
```js
http.route({ pathPrefix: "/profile/", method: "GET", handler: getProfile});http.lookup("/profile/abc", "GET") // returns [getProfile, "GET", "/profile/*"]
```

---

## Interface: SearchFilterFinalizer<Document, SearchIndexConfig>

**URL:** https://docs.convex.dev/api/interfaces/server.SearchFilterFinalizer

**Contents:**
- Interface: SearchFilterFinalizer<Document, SearchIndexConfig>
- Type parameters​
- Hierarchy​
- Methods​
  - eq​
    - Type parameters​
    - Parameters​
    - Returns​
    - Defined in​

server.SearchFilterFinalizer

Builder to define equality expressions as part of a search filter.

See SearchFilterBuilder.

↳ SearchFilterFinalizer

▸ eq<FieldName>(fieldName, value): SearchFilterFinalizer<Document, SearchIndexConfig>

Restrict this query to documents where doc[fieldName] === value.

SearchFilterFinalizer<Document, SearchIndexConfig>

server/search_filter_builder.ts:66

---

## Class: VLiteral<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VLiteral

**Contents:**
- Class: VLiteral<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.literal() validator.

BaseValidator<Type, IsOptional>

• new VLiteral<Type, IsOptional>(«destructured»)

Usually you'd use v.literal(value) instead.

BaseValidator&lt;Type, IsOptional&gt;.constructor

values/validators.ts:351

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly value: Type

The value that the validated values must be equal to.

values/validators.ts:341

• Readonly kind: "literal"

The kind of validator, "literal".

values/validators.ts:346

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Class: VId<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VId

**Contents:**
- Class: VId<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.id(tableName) validator.

BaseValidator<Type, IsOptional>

• new VId<Type, IsOptional>(«destructured»)

Usually you'd use v.id(tableName) instead.

BaseValidator&lt;Type, IsOptional&gt;.constructor

values/validators.ts:72

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly tableName: TableNameFromType<Type>

The name of the table that the validated IDs must belong to.

values/validators.ts:62

• Readonly kind: "id"

The kind of validator, "id".

values/validators.ts:67

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Class: VFloat64<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VFloat64

**Contents:**
- Class: VFloat64<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.float64() validator.

BaseValidator<Type, IsOptional>

• new VFloat64<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "float64"

The kind of validator, "float64".

values/validators.ts:108

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Convex

**URL:** https://docs.convex.dev/api/

**Contents:**
- Convex
- Structure

TypeScript backend SDK, client libraries, and CLI for Convex.

Convex is the backend application platform with everything you need to build your product.

Get started at docs.convex.dev!

Open discussions and issues in this repository about Convex TypeScript/JavaScript clients, the Convex CLI, or the Convex platform in general.

Also feel free to share feature requests, product feedback, or general questions in the Convex Discord Community.

This package includes several entry points for building apps on Convex:

This package also includes convex, the command-line interface for managing Convex projects.

---

## Interface: StorageActionWriter

**URL:** https://docs.convex.dev/api/interfaces/server.StorageActionWriter

**Contents:**
- Interface: StorageActionWriter
- Hierarchy​
- Methods​
  - getUrl​
    - Parameters​
    - Returns​
    - Inherited from​
    - Defined in​
    - Type parameters​
    - Parameters​

server.StorageActionWriter

An interface to read and write files to storage within Convex actions and HTTP actions.

↳ StorageActionWriter

▸ getUrl(storageId): Promise<null | string>

Get the URL for a file in storage by its Id<"_storage">.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getUrl<T>(storageId): Promise<null | string>

Passing a string is deprecated, use storage.getUrl(Id<"_storage">) instead.

Get the URL for a file in storage by its StorageId.

The GET response includes a standard HTTP Digest header with a sha256 checksum.

Promise<null | string>

▸ getMetadata(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

StorageWriter.getMetadata

▸ getMetadata<T>(storageId): Promise<null | FileMetadata>

This function is deprecated, use db.system.get(Id<"_storage">) instead.

Get metadata for a file.

Promise<null | FileMetadata>

StorageWriter.getMetadata

▸ generateUploadUrl(): Promise<string>

Fetch a short-lived URL for uploading a file into storage.

Upon a POST request to this URL, the endpoint will return a JSON object containing a newly allocated Id<"_storage">.

The POST URL accepts an optional standard HTTP Digest header with a sha256 checksum.

StorageWriter.generateUploadUrl

server/storage.ts:105

▸ delete(storageId): Promise<void>

Delete a file from Convex storage.

Once a file is deleted, any URLs previously generated by getUrl will return 404s.

server/storage.ts:113

▸ delete<T>(storageId): Promise<void>

Passing a string is deprecated, use storage.delete(Id<"_storage">) instead.

Delete a file from Convex storage.

Once a file is deleted, any URLs previously generated by getUrl will return 404s.

server/storage.ts:124

▸ get(storageId): Promise<null | Blob>

Get a Blob containing the file associated with the provided Id<"_storage">, or null if there is no file.

server/storage.ts:138

▸ get<T>(storageId): Promise<null | Blob>

Passing a string is deprecated, use storage.get(Id<"_storage">) instead.

Get a Blob containing the file associated with the provided StorageId, or null if there is no file.

server/storage.ts:145

▸ store(blob, options?): Promise<GenericId<"_storage">>

Store the file contained in the Blob.

If provided, this will verify the sha256 checksum matches the contents of the file.

Promise<GenericId<"_storage">>

server/storage.ts:153

---

## Interface: GenericDatabaseWriterWithTable<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericDatabaseWriterWithTable

**Contents:**
- Interface: GenericDatabaseWriterWithTable<DataModel>
- Type parameters​
- Hierarchy​
- Properties​
  - system​
    - Inherited from​
    - Defined in​
- Methods​
  - table​
    - Type parameters​

server.GenericDatabaseWriterWithTable

An interface to read from and write to the database within Convex mutation functions.

Convex guarantees that all writes within a single mutation are executed atomically, so you never have to worry about partial writes leaving your data in an inconsistent state. See the Convex Guide for the guarantees Convex provides your functions.

If you're using code generation, use the DatabaseReader type in convex/_generated/server.d.ts which is typed for your data model.

GenericDatabaseReaderWithTable<DataModel>

↳ GenericDatabaseWriterWithTable

• system: BaseDatabaseReaderWithTable<SystemDataModel>

An interface to read from the system tables within Convex query functions

The two entry points are:

GenericDatabaseReaderWithTable.system

server/database.ts:146

▸ table<TableName>(tableName): BaseTableWriter<DataModel, TableName>

Scope the database to a specific table.

BaseTableWriter<DataModel, TableName>

GenericDatabaseReaderWithTable.table

server/database.ts:282

---

## Interface: QueryInitializer<TableInfo>

**URL:** https://docs.convex.dev/api/interfaces/server.QueryInitializer

**Contents:**
- Interface: QueryInitializer<TableInfo>
- Type parameters​
- Hierarchy​
- Methods​
  - [asyncIterator]​
    - Returns​
    - Inherited from​
    - Defined in​
  - fullTableScan​
    - Returns​

server.QueryInitializer

The QueryInitializer interface is the entry point for building a Query over a Convex database table.

There are two types of queries:

For convenience, QueryInitializer extends the Query interface, implicitly starting a full table scan.

▸ [asyncIterator](): AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

Query.[asyncIterator]

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

▸ fullTableScan(): Query<TableInfo>

Query by reading all of the values out of this table.

This query's cost is relative to the size of the entire table, so this should only be used on tables that will stay very small (say between a few hundred and a few thousand documents) and are updated infrequently.

▸ withIndex<IndexName>(indexName, indexRange?): Query<TableInfo>

Query by reading documents from an index on this table.

This query's cost is relative to the number of documents that match the index range expression.

Results will be returned in index order.

To learn about indexes, see Indexes.

▸ withSearchIndex<IndexName>(indexName, searchFilter): OrderedQuery<TableInfo>

Query by running a full text search against a search index.

Search queries must always search for some text within the index's searchField. This query can optionally add equality filters for any filterFields specified in the index.

Documents will be returned in relevance order based on how well they match the search text.

To learn about full text search, see Indexes.

OrderedQuery<TableInfo>

▸ order(order): OrderedQuery<TableInfo>

Define the order of the query output.

Use "asc" for an ascending order and "desc" for a descending order. If not specified, the order defaults to ascending.

OrderedQuery<TableInfo>

▸ filter(predicate): QueryInitializer<TableInfo>

Filter the query output, returning only the values for which predicate evaluates to true.

QueryInitializer<TableInfo>

▸ paginate(paginationOpts): Promise<PaginationResult<DocumentByInfo<TableInfo>>>

Load a page of n results and obtain a Cursor for loading more.

Note: If this is called from a reactive query function the number of results may not match paginationOpts.numItems!

paginationOpts.numItems is only an initial value. After the first invocation, paginate will return all items in the original query range. This ensures that all pages will remain adjacent and non-overlapping.

Promise<PaginationResult<DocumentByInfo<TableInfo>>>

A PaginationResult containing the page of results and a cursor to continue paginating.

▸ collect(): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return all of the results as an array.

Note: when processing a query with a lot of results, it's often better to use the Query as an AsyncIterable instead.

Promise<DocumentByInfo<TableInfo>[]>

▸ take(n): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return the first n results.

Promise<DocumentByInfo<TableInfo>[]>

▸ first(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the first result if there is one.

Promise<null | DocumentByInfo<TableInfo>>

▸ unique(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the singular result if there is one.

Will throw an error if the query returns more than one result.

Promise<null | DocumentByInfo<TableInfo>>

---

## Interface: IndexRangeBuilder<Document, IndexFields, FieldNum>

**URL:** https://docs.convex.dev/api/interfaces/server.IndexRangeBuilder

**Contents:**
- Interface: IndexRangeBuilder<Document, IndexFields, FieldNum>
- Type parameters​
- Hierarchy​
- Methods​
  - eq​
    - Parameters​
    - Returns​
    - Defined in​
  - gt​
    - Parameters​

server.IndexRangeBuilder

Builder to define an index range to query.

An index range is a description of which documents Convex should consider when running the query.

An index range is always a chained list of:

You must step through fields in index order.

Each equality expression must compare a different index field, starting from the beginning and in order. The upper and lower bounds must follow the equality expressions and compare the next field.

For example, if there is an index of messages on ["projectId", "priority"], a range searching for "messages in 'myProjectId' with priority at least 100" would look like:

The performance of your query is based on the specificity of the range.

This class is designed to only allow you to specify ranges that Convex can efficiently use your index to find. For all other filtering use filter.

To learn about indexes, see Indexes.

LowerBoundIndexRangeBuilder<Document, IndexFields[FieldNum]>

▸ eq(fieldName, value): NextIndexRangeBuilder<Document, IndexFields, FieldNum>

Restrict this range to documents where doc[fieldName] === value.

NextIndexRangeBuilder<Document, IndexFields, FieldNum>

server/index_range_builder.ts:76

▸ gt(fieldName, value): UpperBoundIndexRangeBuilder<Document, IndexFields[FieldNum]>

Restrict this range to documents where doc[fieldName] > value.

UpperBoundIndexRangeBuilder<Document, IndexFields[FieldNum]>

LowerBoundIndexRangeBuilder.gt

server/index_range_builder.ts:115

▸ gte(fieldName, value): UpperBoundIndexRangeBuilder<Document, IndexFields[FieldNum]>

Restrict this range to documents where doc[fieldName] >= value.

UpperBoundIndexRangeBuilder<Document, IndexFields[FieldNum]>

LowerBoundIndexRangeBuilder.gte

server/index_range_builder.ts:126

▸ lt(fieldName, value): IndexRange

Restrict this range to documents where doc[fieldName] < value.

LowerBoundIndexRangeBuilder.lt

server/index_range_builder.ts:151

▸ lte(fieldName, value): IndexRange

Restrict this range to documents where doc[fieldName] <= value.

LowerBoundIndexRangeBuilder.lte

server/index_range_builder.ts:164

**Examples:**

Example 1 (ts):
```ts
q.eq("projectId", myProjectId) .gte("priority", 100)
```

---

## Class: VString<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VString

**Contents:**
- Class: VString<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.string() validator.

BaseValidator<Type, IsOptional>

• new VString<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "string"

The kind of validator, "string".

values/validators.ts:202

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Class: VArray<Type, Element, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VArray

**Contents:**
- Class: VArray<Type, Element, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.array() validator.

BaseValidator<Type, IsOptional>

• new VArray<Type, Element, IsOptional>(«destructured»)

Usually you'd use v.array(element) instead.

BaseValidator&lt;Type, IsOptional&gt;.constructor

values/validators.ts:400

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly element: Element

The validator for the elements of the array.

values/validators.ts:390

• Readonly kind: "array"

The kind of validator, "array".

values/validators.ts:395

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: GenericDatabaseReaderWithTable<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericDatabaseReaderWithTable

**Contents:**
- Interface: GenericDatabaseReaderWithTable<DataModel>
- Type parameters​
- Hierarchy​
- Properties​
  - system​
    - Defined in​
- Methods​
  - table​
    - Type parameters​
    - Parameters​

server.GenericDatabaseReaderWithTable

BaseDatabaseReaderWithTable<DataModel>

↳ GenericDatabaseReaderWithTable

↳↳ GenericDatabaseWriterWithTable

• system: BaseDatabaseReaderWithTable<SystemDataModel>

An interface to read from the system tables within Convex query functions

The two entry points are:

server/database.ts:146

▸ table<TableName>(tableName): BaseTableReader<DataModel, TableName>

Scope the database to a specific table.

BaseTableReader<DataModel, TableName>

BaseDatabaseReaderWithTable.table

server/database.ts:75

---

## Module: nextjs

**URL:** https://docs.convex.dev/api/modules/nextjs

**Contents:**
- Module: nextjs
- Usage​
  - Preloading data​
- Type Aliases​
  - NextjsOptions​
    - Type declaration​
    - Defined in​
- Functions​
  - preloadQuery​
    - Type parameters​

Helpers for integrating Convex into Next.js applications using server rendering.

This module contains:

All exported functions assume that a Convex deployment URL is set in the NEXT_PUBLIC_CONVEX_URL environment variable. npx convex dev will automatically set it during local development.

Preload data inside a Server Component:

And pass it to a Client Component:

Ƭ NextjsOptions: Object

Options to preloadQuery, fetchQuery, fetchMutation and fetchAction.

▸ preloadQuery<Query>(query, ...args): Promise<Preloaded<Query>>

Execute a Convex query function and return a Preloaded payload which can be passed to usePreloadedQuery in a Client Component.

Promise<Preloaded<Query>>

A promise of the Preloaded payload.

▸ preloadedQueryResult<Query>(preloaded): FunctionReturnType<Query>

Returns the result of executing a query via preloadQuery.

FunctionReturnType<Query>

▸ fetchQuery<Query>(query, ...args): Promise<FunctionReturnType<Query>>

Execute a Convex query function.

Promise<FunctionReturnType<Query>>

A promise of the query's result.

▸ fetchMutation<Mutation>(mutation, ...args): Promise<FunctionReturnType<Mutation>>

Execute a Convex mutation function.

Promise<FunctionReturnType<Mutation>>

A promise of the mutation's result.

▸ fetchAction<Action>(action, ...args): Promise<FunctionReturnType<Action>>

Execute a Convex action function.

Promise<FunctionReturnType<Action>>

A promise of the action's result.

**Examples:**

Example 1 (typescript):
```typescript
import { preloadQuery } from "convex/nextjs";import { api } from "@/convex/_generated/api";import ClientComponent from "./ClientComponent";export async function ServerComponent() {  const preloaded = await preloadQuery(api.foo.baz);  return <ClientComponent preloaded={preloaded} />;}
```

Example 2 (typescript):
```typescript
import { Preloaded, usePreloadedQuery } from "convex/react";import { api } from "@/convex/_generated/api";export function ClientComponent(props: {  preloaded: Preloaded<typeof api.foo.baz>;}) {  const data = usePreloadedQuery(props.preloaded);  // render `data`...}
```

---

## Interface: BaseTableWriter<DataModel, TableName>

**URL:** https://docs.convex.dev/api/interfaces/server.BaseTableWriter

**Contents:**
- Interface: BaseTableWriter<DataModel, TableName>
- Type parameters​
- Hierarchy​
- Methods​
  - get​
    - Parameters​
    - Returns​
    - Inherited from​
    - Defined in​
  - query​

server.BaseTableWriter

BaseTableReader<DataModel, TableName>

▸ get(id): Promise<null | DocumentByName<DataModel, TableName>>

Fetch a single document from the table by its GenericId.

Promise<null | DocumentByName<DataModel, TableName>>

server/database.ts:90

▸ query(): QueryInitializer<NamedTableInfo<DataModel, TableName>>

Begin a query for the table.

Queries don't execute immediately, so calling this method and extending its query are free until the results are actually used.

QueryInitializer<NamedTableInfo<DataModel, TableName>>

BaseTableReader.query

server/database.ts:102

▸ insert(value): Promise<GenericId<TableName>>

Insert a new document into the table.

Promise<GenericId<TableName>>

server/database.ts:297

▸ patch(id, value): Promise<void>

Patch an existing document, shallow merging it with the given partial document.

New fields are added. Existing fields are overwritten. Fields set to undefined are removed.

server/database.ts:312

▸ replace(id, value): Promise<void>

Replace the value of an existing document, overwriting its old value.

server/database.ts:324

▸ delete(id): Promise<void>

Delete an existing document.

server/database.ts:334

---

## Interface: MutationOptions<Args>

**URL:** https://docs.convex.dev/api/interfaces/react.MutationOptions

**Contents:**
- Interface: MutationOptions<Args>
- Type parameters​
- Properties​
  - optimisticUpdate​
    - Defined in​

react.MutationOptions

Options for mutation.

• Optional optimisticUpdate: OptimisticUpdate<Args>

An optimistic update to apply along with this mutation.

An optimistic update locally updates queries while a mutation is pending. Once the mutation completes, the update will be rolled back.

---

## Interface: Auth

**URL:** https://docs.convex.dev/api/interfaces/server.Auth

**Contents:**
- Interface: Auth
- Methods​
  - getUserIdentity​
    - Returns​
    - Defined in​

An interface to access information about the currently authenticated user within Convex query and mutation functions.

▸ getUserIdentity(): Promise<null | UserIdentity>

Get details about the currently authenticated user.

Promise<null | UserIdentity>

A promise that resolves to a UserIdentity if the Convex client was configured with a valid ID token, or if not, will:

server/authentication.ts:236

---

## Class: VNull<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VNull

**Contents:**
- Class: VNull<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.null() validator.

BaseValidator<Type, IsOptional>

• new VNull<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "null"

The kind of validator, "null".

values/validators.ts:226

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: ReactAction<Action>

**URL:** https://docs.convex.dev/api/interfaces/react.ReactAction

**Contents:**
- Interface: ReactAction<Action>
- Type parameters​
- Callable​
  - ReactAction​
    - Parameters​
    - Returns​
    - Defined in​

An interface to execute a Convex action on the server.

▸ ReactAction(...args): Promise<FunctionReturnType<Action>>

Execute the function on the server, returning a Promise of its return value.

Promise<FunctionReturnType<Action>>

The return value of the server-side function call.

---

## Interface: Query<TableInfo>

**URL:** https://docs.convex.dev/api/interfaces/server.Query

**Contents:**
- Interface: Query<TableInfo>
- Type parameters​
- Hierarchy​
- Methods​
  - [asyncIterator]​
    - Returns​
    - Inherited from​
    - Defined in​
  - order​
    - Parameters​

The Query interface allows functions to read values out of the database.

If you only need to load an object by ID, use db.get(id) instead.

Executing a query consists of calling

Queries are lazily evaluated. No work is done until iteration begins, so constructing and extending a query is free. The query is executed incrementally as the results are iterated over, so early terminating also reduces the cost of the query.

It is more efficient to use filter expression rather than executing JavaScript to filter.

To learn more about how to write queries, see Querying the Database.

OrderedQuery<TableInfo>

▸ [asyncIterator](): AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

AsyncIterator<DocumentByInfo<TableInfo>, any, undefined>

OrderedQuery.[asyncIterator]

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

▸ order(order): OrderedQuery<TableInfo>

Define the order of the query output.

Use "asc" for an ascending order and "desc" for a descending order. If not specified, the order defaults to ascending.

OrderedQuery<TableInfo>

▸ filter(predicate): Query<TableInfo>

Filter the query output, returning only the values for which predicate evaluates to true.

▸ paginate(paginationOpts): Promise<PaginationResult<DocumentByInfo<TableInfo>>>

Load a page of n results and obtain a Cursor for loading more.

Note: If this is called from a reactive query function the number of results may not match paginationOpts.numItems!

paginationOpts.numItems is only an initial value. After the first invocation, paginate will return all items in the original query range. This ensures that all pages will remain adjacent and non-overlapping.

Promise<PaginationResult<DocumentByInfo<TableInfo>>>

A PaginationResult containing the page of results and a cursor to continue paginating.

OrderedQuery.paginate

▸ collect(): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return all of the results as an array.

Note: when processing a query with a lot of results, it's often better to use the Query as an AsyncIterable instead.

Promise<DocumentByInfo<TableInfo>[]>

▸ take(n): Promise<DocumentByInfo<TableInfo>[]>

Execute the query and return the first n results.

Promise<DocumentByInfo<TableInfo>[]>

▸ first(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the first result if there is one.

Promise<null | DocumentByInfo<TableInfo>>

▸ unique(): Promise<null | DocumentByInfo<TableInfo>>

Execute the query and return the singular result if there is one.

Will throw an error if the query returns more than one result.

Promise<null | DocumentByInfo<TableInfo>>

---

## Interface: Watch<T>

**URL:** https://docs.convex.dev/api/interfaces/react.Watch

**Contents:**
- Interface: Watch<T>
- Type parameters​
- Methods​
  - onUpdate​
    - Parameters​
    - Returns​
      - Returns​
    - Defined in​
  - localQueryResult​
    - Returns​

A watch on the output of a Convex query function.

▸ onUpdate(callback): () => void

Initiate a watch on the output of a query.

This will subscribe to this query and call the callback whenever the query result changes.

Important: If the client is already subscribed to this query with the same arguments this callback will not be invoked until the query result is updated. To get the current, local result call localQueryResult.

Initiate a watch on the output of a query.

This will subscribe to this query and call the callback whenever the query result changes.

Important: If the client is already subscribed to this query with the same arguments this callback will not be invoked until the query result is updated. To get the current, local result call localQueryResult.

▸ localQueryResult(): undefined | T

Get the current result of a query.

This will only return a result if we're already subscribed to the query and have received a result from the server or the query value has been set optimistically.

An error if the query encountered an error on the server.

The result of the query or undefined if it isn't known.

▸ journal(): undefined | QueryJournal

Get the current QueryJournal for this query.

If we have not yet received a result for this query, this will be undefined.

undefined | QueryJournal

---

## Class: ConvexError<TData>

**URL:** https://docs.convex.dev/api/classes/values.ConvexError

**Contents:**
- Class: ConvexError<TData>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

• new ConvexError<TData>(data)

▪ Static Optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any

▸ (err, stackTraces): any

Optional override for formatting stack traces

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

Error.prepareStackTrace

../../common/temp/node_modules/.pnpm/@types+node@18.19.70/node_modules/@types/node/globals.d.ts:98

▪ Static stackTraceLimit: number

Error.stackTraceLimit

../../common/temp/node_modules/.pnpm/@types+node@18.19.70/node_modules/@types/node/globals.d.ts:100

• Optional cause: unknown

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2022.error.d.ts:24

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es5.d.ts:1055

• Optional stack: string

../../common/temp/node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es5.d.ts:1056

• name: string = "ConvexError"

• [IDENTIFYING_FIELD]: boolean = true

▸ Static captureStackTrace(targetObject, constructorOpt?): void

Create .stack property on a target object

Error.captureStackTrace

../../common/temp/node_modules/.pnpm/@types+node@18.19.70/node_modules/@types/node/globals.d.ts:91

---

## Class: VBytes<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VBytes

**Contents:**
- Class: VBytes<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.bytes() validator.

BaseValidator<Type, IsOptional>

• new VBytes<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "bytes"

The kind of validator, "bytes".

values/validators.ts:180

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Module: react-auth0

**URL:** https://docs.convex.dev/api/modules/react_auth0

**Contents:**
- Module: react-auth0
- Functions​
  - ConvexProviderWithAuth0​
    - Parameters​
    - Returns​
    - Defined in​

React login component for use with Auth0.

▸ ConvexProviderWithAuth0(«destructured»): Element

A wrapper React component which provides a ConvexReactClient authenticated with Auth0.

It must be wrapped by a configured Auth0Provider from @auth0/auth0-react.

See Convex Auth0 on how to set up Convex with Auth0.

react-auth0/ConvexProviderWithAuth0.tsx:26

---

## Class: TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

**URL:** https://docs.convex.dev/api/classes/server.TableDefinition

**Contents:**
- Class: TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>
- Type parameters​
- Properties​
  - validator​
    - Defined in​
- Methods​
  - indexes​
    - Returns​
    - Defined in​
  - index​

server.TableDefinition

The definition of a table within a schema.

This should be produced by using defineTable.

• validator: DocumentType

▸ ** indexes**(): { indexDescriptor: string ; fields: string[] }[]

This API is experimental: it may change or disappear.

Returns indexes defined on this table. Intended for the advanced use cases of dynamically deciding which index to use for a query. If you think you need this, please chime in on ths issue in the Convex JS GitHub repo. https://github.com/get-convex/convex-js/issues/49

{ indexDescriptor: string ; fields: string[] }[]

▸ index<IndexName, FirstFieldPath, RestFieldPaths>(name, indexConfig): TableDefinition<DocumentType, Expand<Indexes & Record<IndexName, [FirstFieldPath, ...RestFieldPaths[], "_creationTime"]>>, SearchIndexes, VectorIndexes>

Define an index on this table.

To learn about indexes, see Defining Indexes.

TableDefinition<DocumentType, Expand<Indexes & Record<IndexName, [FirstFieldPath, ...RestFieldPaths[], "_creationTime"]>>, SearchIndexes, VectorIndexes>

A TableDefinition with this index included.

▸ index<IndexName, FirstFieldPath, RestFieldPaths>(name, fields): TableDefinition<DocumentType, Expand<Indexes & Record<IndexName, [FirstFieldPath, ...RestFieldPaths[], "_creationTime"]>>, SearchIndexes, VectorIndexes>

Define an index on this table.

To learn about indexes, see Defining Indexes.

TableDefinition<DocumentType, Expand<Indexes & Record<IndexName, [FirstFieldPath, ...RestFieldPaths[], "_creationTime"]>>, SearchIndexes, VectorIndexes>

A TableDefinition with this index included.

▸ index<IndexName, FirstFieldPath, RestFieldPaths>(name, indexConfig): TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

Define a staged index on this table.

For large tables, index backfill can be slow. Staging an index allows you to push the schema and enable the index later.

If staged is true, the index will be staged and will not be enabled until the staged flag is removed. Staged indexes do not block push completion. Staged indexes cannot be used in queries.

To learn about indexes, see Defining Indexes.

TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

A TableDefinition with this index included.

▸ searchIndex<IndexName, SearchField, FilterFields>(name, indexConfig): TableDefinition<DocumentType, Indexes, Expand<SearchIndexes & Record<IndexName, { searchField: SearchField ; filterFields: FilterFields }>>, VectorIndexes>

Define a search index on this table.

To learn about search indexes, see Search.

TableDefinition<DocumentType, Indexes, Expand<SearchIndexes & Record<IndexName, { searchField: SearchField ; filterFields: FilterFields }>>, VectorIndexes>

A TableDefinition with this search index included.

▸ searchIndex<IndexName, SearchField, FilterFields>(name, indexConfig): TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

Define a staged search index on this table.

For large tables, index backfill can be slow. Staging an index allows you to push the schema and enable the index later.

If staged is true, the index will be staged and will not be enabled until the staged flag is removed. Staged indexes do not block push completion. Staged indexes cannot be used in queries.

To learn about search indexes, see Search.

TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

A TableDefinition with this search index included.

▸ vectorIndex<IndexName, VectorField, FilterFields>(name, indexConfig): TableDefinition<DocumentType, Indexes, SearchIndexes, Expand<VectorIndexes & Record<IndexName, { vectorField: VectorField ; dimensions: number ; filterFields: FilterFields }>>>

Define a vector index on this table.

To learn about vector indexes, see Vector Search.

TableDefinition<DocumentType, Indexes, SearchIndexes, Expand<VectorIndexes & Record<IndexName, { vectorField: VectorField ; dimensions: number ; filterFields: FilterFields }>>>

A TableDefinition with this vector index included.

▸ vectorIndex<IndexName, VectorField, FilterFields>(name, indexConfig): TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

Define a staged vector index on this table.

For large tables, index backfill can be slow. Staging an index allows you to push the schema and enable the index later.

If staged is true, the index will be staged and will not be enabled until the staged flag is removed. Staged indexes do not block push completion. Staged indexes cannot be used in queries.

To learn about vector indexes, see Vector Search.

TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

A TableDefinition with this vector index included.

▸ Protected self(): TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

Work around for https://github.com/microsoft/TypeScript/issues/57035

TableDefinition<DocumentType, Indexes, SearchIndexes, VectorIndexes>

---

## Interface: ConvexReactClientOptions

**URL:** https://docs.convex.dev/api/interfaces/react.ConvexReactClientOptions

**Contents:**
- Interface: ConvexReactClientOptions
- Hierarchy​
- Properties​
  - unsavedChangesWarning​
    - Inherited from​
    - Defined in​
  - webSocketConstructor​
    - Call signature​
      - Parameters​
      - Returns​

react.ConvexReactClientOptions

Options for ConvexReactClient.

BaseConvexClientOptions

↳ ConvexReactClientOptions

• Optional unsavedChangesWarning: boolean

Whether to prompt the user if they have unsaved changes pending when navigating away or closing a web page.

This is only possible when the window object exists, i.e. in a browser.

The default value is true in browsers.

BaseConvexClientOptions.unsavedChangesWarning

browser/sync/client.ts:60

• Optional webSocketConstructor: Object

• new webSocketConstructor(url, protocols?): WebSocket

Specifies an alternate WebSocket constructor to use for client communication with the Convex cloud. The default behavior is to use WebSocket from the global environment.

BaseConvexClientOptions.webSocketConstructor

browser/sync/client.ts:67

• Optional verbose: boolean

Adds additional logging for debugging purposes.

The default value is false.

BaseConvexClientOptions.verbose

browser/sync/client.ts:73

• Optional logger: boolean | Logger

A logger, true, or false. If not provided or true, logs to the console. If false, logs are not printed anywhere.

You can construct your own logger to customize logging to log elsewhere. A logger is an object with 4 methods: log(), warn(), error(), and logVerbose(). These methods can receive multiple arguments of any types, like console.log().

BaseConvexClientOptions.logger

browser/sync/client.ts:82

• Optional reportDebugInfoToConvex: boolean

Sends additional metrics to Convex for debugging purposes.

The default value is false.

BaseConvexClientOptions.reportDebugInfoToConvex

browser/sync/client.ts:88

• Optional onServerDisconnectError: (message: string) => void

This API is experimental: it may change or disappear.

A function to call on receiving abnormal WebSocket close messages from the connected Convex deployment. The content of these messages is not stable, it is an implementation detail that may change.

Consider this API an observability stopgap until higher level codes with recommendations on what to do are available, which could be a more stable interface instead of string.

Check connectionState for more quantitative metrics about connection status.

BaseConvexClientOptions.onServerDisconnectError

browser/sync/client.ts:102

• Optional skipConvexDeploymentUrlCheck: boolean

Skip validating that the Convex deployment URL looks like https://happy-animal-123.convex.cloud or localhost.

This can be useful if running a self-hosted Convex backend that uses a different URL.

The default value is false

BaseConvexClientOptions.skipConvexDeploymentUrlCheck

browser/sync/client.ts:112

• Optional authRefreshTokenLeewaySeconds: number

If using auth, the number of seconds before a token expires that we should refresh it.

The default value is 2.

BaseConvexClientOptions.authRefreshTokenLeewaySeconds

browser/sync/client.ts:118

• Optional expectAuth: boolean

This API is experimental: it may change or disappear.

Whether query, mutation, and action requests should be held back until the first auth token can be sent.

Opting into this behavior works well for pages that should only be viewed by authenticated clients.

Defaults to false, not waiting for an auth token.

BaseConvexClientOptions.expectAuth

browser/sync/client.ts:130

---

## server.js

**URL:** https://docs.convex.dev/generated-api/server

**Contents:**
- server.js
- Functions​
  - query​
    - Parameters​
    - Returns​
  - internalQuery​
    - Parameters​
    - Returns​
  - mutation​
    - Parameters​

These exports are not directly available in the convex package!

Instead you must run npx convex dev to create convex/_generated/server.js and convex/_generated/server.d.ts.

Generated utilities for implementing server-side Convex query and mutation functions.

▸ query(func): RegisteredQuery

Define a query in this Convex app's public API.

This function will be allowed to read your Convex database and will be accessible from the client.

This is an alias of queryGeneric that is typed for your app's data model.

The wrapped query. Include this as an export to name it and make it accessible.

▸ internalQuery(func): RegisteredQuery

Define a query that is only accessible from other Convex functions (but not from the client).

This function will be allowed to read from your Convex database. It will not be accessible from the client.

This is an alias of internalQueryGeneric that is typed for your app's data model.

The wrapped query. Include this as an export to name it and make it accessible.

▸ mutation(func): RegisteredMutation

Define a mutation in this Convex app's public API.

This function will be allowed to modify your Convex database and will be accessible from the client.

This is an alias of mutationGeneric that is typed for your app's data model.

The wrapped mutation. Include this as an export to name it and make it accessible.

▸ internalMutation(func): RegisteredMutation

Define a mutation that is only accessible from other Convex functions (but not from the client).

This function will be allowed to read and write from your Convex database. It will not be accessible from the client.

This is an alias of internalMutationGeneric that is typed for your app's data model.

The wrapped mutation. Include this as an export to name it and make it accessible.

▸ action(func): RegisteredAction

Define an action in this Convex app's public API.

An action is a function which can execute any JavaScript code, including non-deterministic code and code with side-effects, like calling third-party services. They can be run in Convex's JavaScript environment or in Node.js using the "use node" directive. They can interact with the database indirectly by calling queries and mutations using the ActionCtx.

This is an alias of actionGeneric that is typed for your app's data model.

The wrapped function. Include this as an export to name it and make it accessible.

▸ internalAction(func): RegisteredAction

Define an action that is only accessible from other Convex functions (but not from the client).

This is an alias of internalActionGeneric that is typed for your app's data model.

The wrapped action. Include this as an export to name it and make it accessible.

▸ httpAction(func: (ctx: ActionCtx, request: Request) => Promise<Response>): PublicHttpAction

The wrapped function. Import this function from convex/http.js and route it to hook it up.

A set of services for use within Convex query functions.

The query context is passed as the first argument to any Convex query function run on the server.

This differs from the MutationCtx because all of the services are read-only.

This is an alias of GenericQueryCtx that is typed for your app's data model.

Ƭ MutationCtx: Object

A set of services for use within Convex mutation functions.

The mutation context is passed as the first argument to any Convex mutation function run on the server.

This is an alias of GenericMutationCtx that is typed for your app's data model.

A set of services for use within Convex action functions.

The action context is passed as the first argument to any Convex action function run on the server.

This is an alias of ActionCtx that is typed for your app's data model.

An interface to read from the database within Convex query functions.

This is an alias of GenericDatabaseReader that is typed for your app's data model.

An interface to read from and write to the database within Convex mutation functions.

This is an alias of GenericDatabaseWriter that is typed for your app's data model.

---

## Interface: SearchIndexConfig<SearchField, FilterFields>

**URL:** https://docs.convex.dev/api/interfaces/server.SearchIndexConfig

**Contents:**
- Interface: SearchIndexConfig<SearchField, FilterFields>
- Type parameters​
- Properties​
  - searchField​
    - Defined in​
  - filterFields​
    - Defined in​

server.SearchIndexConfig

The configuration for a full text search index.

• searchField: SearchField

The field to index for full text search.

This must be a field of type string.

• Optional filterFields: FilterFields[]

Additional fields to index for fast filtering when running search queries.

---

## Interface: BaseConvexClientOptions

**URL:** https://docs.convex.dev/api/interfaces/browser.BaseConvexClientOptions

**Contents:**
- Interface: BaseConvexClientOptions
- Hierarchy​
- Properties​
  - unsavedChangesWarning​
    - Defined in​
  - webSocketConstructor​
    - Call signature​
      - Parameters​
      - Returns​
    - Type declaration​

browser.BaseConvexClientOptions

Options for BaseConvexClient.

BaseConvexClientOptions

↳ ConvexReactClientOptions

• Optional unsavedChangesWarning: boolean

Whether to prompt the user if they have unsaved changes pending when navigating away or closing a web page.

This is only possible when the window object exists, i.e. in a browser.

The default value is true in browsers.

browser/sync/client.ts:60

• Optional webSocketConstructor: Object

• new webSocketConstructor(url, protocols?): WebSocket

Specifies an alternate WebSocket constructor to use for client communication with the Convex cloud. The default behavior is to use WebSocket from the global environment.

browser/sync/client.ts:67

• Optional verbose: boolean

Adds additional logging for debugging purposes.

The default value is false.

browser/sync/client.ts:73

• Optional logger: boolean | Logger

A logger, true, or false. If not provided or true, logs to the console. If false, logs are not printed anywhere.

You can construct your own logger to customize logging to log elsewhere. A logger is an object with 4 methods: log(), warn(), error(), and logVerbose(). These methods can receive multiple arguments of any types, like console.log().

browser/sync/client.ts:82

• Optional reportDebugInfoToConvex: boolean

Sends additional metrics to Convex for debugging purposes.

The default value is false.

browser/sync/client.ts:88

• Optional onServerDisconnectError: (message: string) => void

This API is experimental: it may change or disappear.

A function to call on receiving abnormal WebSocket close messages from the connected Convex deployment. The content of these messages is not stable, it is an implementation detail that may change.

Consider this API an observability stopgap until higher level codes with recommendations on what to do are available, which could be a more stable interface instead of string.

Check connectionState for more quantitative metrics about connection status.

browser/sync/client.ts:102

• Optional skipConvexDeploymentUrlCheck: boolean

Skip validating that the Convex deployment URL looks like https://happy-animal-123.convex.cloud or localhost.

This can be useful if running a self-hosted Convex backend that uses a different URL.

The default value is false

browser/sync/client.ts:112

• Optional authRefreshTokenLeewaySeconds: number

If using auth, the number of seconds before a token expires that we should refresh it.

The default value is 2.

browser/sync/client.ts:118

• Optional expectAuth: boolean

This API is experimental: it may change or disappear.

Whether query, mutation, and action requests should be held back until the first auth token can be sent.

Opting into this behavior works well for pages that should only be viewed by authenticated clients.

Defaults to false, not waiting for an auth token.

browser/sync/client.ts:130

---

## Class: Crons

**URL:** https://docs.convex.dev/api/classes/server.Crons

**Contents:**
- Class: Crons
- Constructors​
  - constructor​
    - Defined in​
- Properties​
  - crons​
    - Defined in​
  - isCrons​
    - Defined in​
- Methods​

A class for scheduling cron jobs.

To learn more see the documentation at https://docs.convex.dev/scheduling/cron-jobs

• crons: Record<string, CronJob>

▸ interval<FuncRef>(cronIdentifier, schedule, functionReference, ...args): void

Schedule a mutation or action to run at some interval.

▸ hourly<FuncRef>(cronIdentifier, schedule, functionReference, ...args): void

Schedule a mutation or action to run on an hourly basis.

▸ daily<FuncRef>(cronIdentifier, schedule, functionReference, ...args): void

Schedule a mutation or action to run on a daily basis.

▸ weekly<FuncRef>(cronIdentifier, schedule, functionReference, ...args): void

Schedule a mutation or action to run on a weekly basis.

▸ monthly<FuncRef>(cronIdentifier, schedule, functionReference, ...args): void

Schedule a mutation or action to run on a monthly basis.

Note that some months have fewer days than others, so e.g. a function scheduled to run on the 30th will not run in February.

▸ cron<FuncRef>(cronIdentifier, cron, functionReference, ...args): void

Schedule a mutation or action to run on a recurring basis.

Like the unix command cron, Sunday is 0, Monday is 1, etc.

**Examples:**

Example 1 (js):
```js
crons.interval("Clear presence data", {seconds: 30}, api.presence.clear);
```

Example 2 (js):
```js
crons.hourly(  "Reset high scores",  {    minuteUTC: 30,  },  api.scores.reset)
```

Example 3 (js):
```js
crons.daily(  "Reset high scores",  {    hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)    minuteUTC: 30,  },  api.scores.reset)
```

Example 4 (js):
```js
crons.weekly(  "Weekly re-engagement email",  {    dayOfWeek: "Tuesday",    hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)    minuteUTC: 30,  },  api.emails.send)
```

---

## Interface: PaginationResult<T>

**URL:** https://docs.convex.dev/api/interfaces/server.PaginationResult

**Contents:**
- Interface: PaginationResult<T>
- Type parameters​
- Properties​
  - page​
    - Defined in​
  - isDone​
    - Defined in​
  - continueCursor​
    - Defined in​
  - splitCursor​

server.PaginationResult

The result of paginating using paginate.

server/pagination.ts:30

Have we reached the end of the results?

server/pagination.ts:35

• continueCursor: string

A Cursor to continue loading more results.

server/pagination.ts:40

• Optional splitCursor: null | string

A Cursor to split the page into two, so the page from (cursor, continueCursor] can be replaced by two pages (cursor, splitCursor] and (splitCursor, continueCursor].

server/pagination.ts:47

• Optional pageStatus: null | "SplitRecommended" | "SplitRequired"

When a query reads too much data, it may return 'SplitRecommended' to indicate that the page should be split into two with splitCursor. When a query reads so much data that page might be incomplete, its status becomes 'SplitRequired'.

server/pagination.ts:55

---

## Interface: GenericActionCtx<DataModel>

**URL:** https://docs.convex.dev/api/interfaces/server.GenericActionCtx

**Contents:**
- Interface: GenericActionCtx<DataModel>
- Type parameters​
- Properties​
  - scheduler​
    - Defined in​
  - auth​
    - Defined in​
  - storage​
    - Defined in​
- Methods​

server.GenericActionCtx

A set of services for use within Convex action functions.

The context is passed as the first argument to any Convex action run on the server.

If you're using code generation, use the ActionCtx type in convex/_generated/server.d.ts which is typed for your data model.

• scheduler: Scheduler

A utility for scheduling Convex functions to run in the future.

server/registration.ts:236

Information about the currently authenticated user.

server/registration.ts:241

• storage: StorageActionWriter

A utility for reading and writing files in storage.

server/registration.ts:246

▸ runQuery<Query>(query, ...args): Promise<FunctionReturnType<Query>>

Run the Convex query with the given name and arguments.

Consider using an internalQuery to prevent users from calling the query directly.

Promise<FunctionReturnType<Query>>

A promise of the query's result.

server/registration.ts:196

▸ runMutation<Mutation>(mutation, ...args): Promise<FunctionReturnType<Mutation>>

Run the Convex mutation with the given name and arguments.

Consider using an internalMutation to prevent users from calling the mutation directly.

Promise<FunctionReturnType<Mutation>>

A promise of the mutation's result.

server/registration.ts:211

▸ runAction<Action>(action, ...args): Promise<FunctionReturnType<Action>>

Run the Convex action with the given name and arguments.

Consider using an internalAction to prevent users from calling the action directly.

Promise<FunctionReturnType<Action>>

A promise of the action's result.

server/registration.ts:228

▸ vectorSearch<TableName, IndexName>(tableName, indexName, query): Promise<{ _id: GenericId<TableName> ; _score: number }[]>

Run a vector search on the given table and index.

Promise<{ _id: GenericId<TableName> ; _score: number }[]>

A promise of IDs and scores for the documents with the nearest vectors

server/registration.ts:258

---

## Module: react-clerk

**URL:** https://docs.convex.dev/api/modules/react_clerk

**Contents:**
- Module: react-clerk
- Functions​
  - ConvexProviderWithClerk​
    - Parameters​
    - Returns​
    - Defined in​

React login component for use with Clerk.

▸ ConvexProviderWithClerk(«destructured»): Element

A wrapper React component which provides a ConvexReactClient authenticated with Clerk.

It must be wrapped by a configured ClerkProvider, from @clerk/clerk-react, @clerk/clerk-expo, @clerk/nextjs or another React-based Clerk client library and have the corresponding useAuth hook passed in.

See Convex Clerk on how to set up Convex with Clerk.

react-clerk/ConvexProviderWithClerk.tsx:41

---

## Class: VAny<Type, IsOptional, FieldPaths>

**URL:** https://docs.convex.dev/api/classes/values.VAny

**Contents:**
- Class: VAny<Type, IsOptional, FieldPaths>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.any() validator.

BaseValidator<Type, IsOptional, FieldPaths>

• new VAny<Type, IsOptional, FieldPaths>(«destructured»)

BaseValidator<Type, IsOptional, FieldPaths>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: FieldPaths

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "any"

The kind of validator, "any".

values/validators.ts:249

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: VectorSearchQuery<TableInfo, IndexName>

**URL:** https://docs.convex.dev/api/interfaces/server.VectorSearchQuery

**Contents:**
- Interface: VectorSearchQuery<TableInfo, IndexName>
- Type parameters​
- Properties​
  - vector​
    - Defined in​
  - limit​
    - Defined in​
  - filter​
    - Type declaration​
      - Parameters​

server.VectorSearchQuery

An object with parameters for performing a vector search against a vector index.

This must have the same length as the dimensions of the index. This vector search will return the IDs of the documents most similar to this vector.

server/vector_search.ts:30

• Optional limit: number

The number of results to return. If specified, must be between 1 and 256 inclusive.

server/vector_search.ts:37

• Optional filter: (q: VectorFilterBuilder<DocumentByInfo<TableInfo>, NamedVectorIndex<TableInfo, IndexName>>) => FilterExpression<boolean>

▸ (q): FilterExpression<boolean>

Optional filter expression made up of q.or and q.eq operating over the filter fields of the index.

e.g. filter: q => q.or(q.eq("genre", "comedy"), q.eq("genre", "drama"))

FilterExpression<boolean>

server/vector_search.ts:47

---

## Interface: FilterBuilder<TableInfo>

**URL:** https://docs.convex.dev/api/interfaces/server.FilterBuilder

**Contents:**
- Interface: FilterBuilder<TableInfo>
- Type parameters​
- Methods​
  - eq​
    - Type parameters​
    - Parameters​
    - Returns​
    - Defined in​
  - neq​
    - Type parameters​

An interface for defining filters in queries.

FilterBuilder has various methods that produce Expressions. These expressions can be nested together along with constants to express a filter predicate.

FilterBuilder is used within filter to create query filters.

Here are the available methods:

▸ eq<T>(l, r): Expression<boolean>

server/filter_builder.ts:87

▸ neq<T>(l, r): Expression<boolean>

server/filter_builder.ts:97

▸ lt<T>(l, r): Expression<boolean>

server/filter_builder.ts:107

▸ lte<T>(l, r): Expression<boolean>

server/filter_builder.ts:117

▸ gt<T>(l, r): Expression<boolean>

server/filter_builder.ts:127

▸ gte<T>(l, r): Expression<boolean>

server/filter_builder.ts:137

▸ add<T>(l, r): Expression<T>

server/filter_builder.ts:149

▸ sub<T>(l, r): Expression<T>

server/filter_builder.ts:159

▸ mul<T>(l, r): Expression<T>

server/filter_builder.ts:169

▸ div<T>(l, r): Expression<T>

server/filter_builder.ts:179

▸ mod<T>(l, r): Expression<T>

server/filter_builder.ts:189

▸ neg<T>(x): Expression<T>

server/filter_builder.ts:199

▸ and(...exprs): Expression<boolean>

exprs[0] && exprs[1] && ... && exprs[n]

server/filter_builder.ts:208

▸ or(...exprs): Expression<boolean>

exprs[0] || exprs[1] || ... || exprs[n]

server/filter_builder.ts:215

▸ not(x): Expression<boolean>

server/filter_builder.ts:222

▸ field<FieldPath>(fieldPath): Expression<FieldTypeFromFieldPath<DocumentByInfo<TableInfo>, FieldPath>>

Evaluates to the field at the given fieldPath.

For example, in filter this can be used to examine the values being filtered.

field("user.isActive") evaluates to true.

Expression<FieldTypeFromFieldPath<DocumentByInfo<TableInfo>, FieldPath>>

server/filter_builder.ts:246

**Examples:**

Example 1 (text):
```text
{  "user": {    "isActive": true  }}
```

---

## Interface: ValidatedFunction<Ctx, ArgsValidator, Returns>

**URL:** https://docs.convex.dev/api/interfaces/server.ValidatedFunction

**Contents:**
- Interface: ValidatedFunction<Ctx, ArgsValidator, Returns>
- Type parameters​
- Properties​
  - args​
    - Defined in​
  - handler​
    - Type declaration​
      - Parameters​
      - Returns​
    - Defined in​

server.ValidatedFunction

-- See the type definition for MutationBuilder or similar for the types used for defining Convex functions.

The definition of a Convex query, mutation, or action function with argument validation.

Argument validation allows you to assert that the arguments to this function are the expected type.

For security, argument validation should be added to all public functions in production apps.

See UnvalidatedFunction for functions without argument validation.

• args: ArgsValidator

A validator for the arguments of this function.

This is an object mapping argument names to validators constructed with v.

server/registration.ts:528

• handler: (ctx: Ctx, args: ObjectType<ArgsValidator>) => Returns

▸ (ctx, args): Returns

The implementation of this function.

This is a function that takes in the appropriate context and arguments and produces some result.

server/registration.ts:542

**Examples:**

Example 1 (js):
```js
import { query } from "./_generated/server";import { v } from "convex/values";export const func = query({  args: {    arg: v.string()  },  handler: ({ db }, { arg }) => {...},});
```

Example 2 (js):
```js
import { v } from "convex/values";const args = {  stringArg: v.string(),  optionalNumberArg: v.optional(v.number()),}
```

---

## Module: values

**URL:** https://docs.convex.dev/api/modules/values

**Contents:**
- Module: values
- Namespaces​
- Classes​
- Type Aliases​
  - GenericValidator​
    - Defined in​
  - AsObjectValidator​
    - Type parameters​
    - Defined in​
  - PropertyValidators​

Utilities for working with values stored in Convex.

You can see the full set of supported types at Types.

Ƭ GenericValidator: Validator<any, any, any>

The type that all validators must extend.

values/validator.ts:27

Ƭ AsObjectValidator<V>: V extends Validator<any, any, any> ? V : V extends PropertyValidators ? Validator<ObjectType<V>> : never

Coerce an object with validators as properties to a validator. If a validator is passed, return it.

values/validator.ts:61

Ƭ PropertyValidators: Record<string, Validator<any, OptionalProperty, any>>

Validators for each property of an object.

This is represented as an object mapping the property name to its Validator.

values/validator.ts:235

Ƭ ObjectType<Fields>: Expand<{ [Property in OptionalKeys<Fields>]?: Exclude<Infer<Fields[Property]>, undefined> } & { [Property in RequiredKeys<Fields>]: Infer<Fields[Property]> }>

Compute the type of an object from PropertyValidators.

values/validator.ts:245

Ƭ Infer<T>: T["type"]

Extract a TypeScript type from a validator.

The type of a Validator constructed with v.

values/validator.ts:287

Ƭ VOptional<T>: T extends VId<infer Type, OptionalProperty> ? VId<Type | undefined, "optional"> : T extends VString<infer Type, OptionalProperty> ? VString<Type | undefined, "optional"> : T extends VFloat64<infer Type, OptionalProperty> ? VFloat64<Type | undefined, "optional"> : T extends VInt64<infer Type, OptionalProperty> ? VInt64<Type | undefined, "optional"> : T extends VBoolean<infer Type, OptionalProperty> ? VBoolean<Type | undefined, "optional"> : T extends VNull<infer Type, OptionalProperty> ? VNull<Type | undefined, "optional"> : T extends VAny<infer Type, OptionalProperty> ? VAny<Type | undefined, "optional"> : T extends VLiteral<infer Type, OptionalProperty> ? VLiteral<Type | undefined, "optional"> : T extends VBytes<infer Type, OptionalProperty> ? VBytes<Type | undefined, "optional"> : T extends VObject<infer Type, infer Fields, OptionalProperty, infer FieldPaths> ? VObject<Type | undefined, Fields, "optional", FieldPaths> : T extends VArray<infer Type, infer Element, OptionalProperty> ? VArray<Type | undefined, Element, "optional"> : T extends VRecord<infer Type, infer Key, infer Value, OptionalProperty, infer FieldPaths> ? VRecord<Type | undefined, Key, Value, "optional", FieldPaths> : T extends VUnion<infer Type, infer Members, OptionalProperty, infer FieldPaths> ? VUnion<Type | undefined, Members, "optional", FieldPaths> : never

values/validators.ts:546

Ƭ OptionalProperty: "optional" | "required"

Type representing whether a property in an object is optional or required.

values/validators.ts:579

Ƭ Validator<Type, IsOptional, FieldPaths>: VId<Type, IsOptional> | VString<Type, IsOptional> | VFloat64<Type, IsOptional> | VInt64<Type, IsOptional> | VBoolean<Type, IsOptional> | VNull<Type, IsOptional> | VAny<Type, IsOptional> | VLiteral<Type, IsOptional> | VBytes<Type, IsOptional> | VObject<Type, Record<string, Validator<any, OptionalProperty, any>>, IsOptional, FieldPaths> | VArray<Type, Validator<any, "required", any>, IsOptional> | VRecord<Type, Validator<string, "required", any>, Validator<any, "required", any>, IsOptional, FieldPaths> | VUnion<Type, Validator<any, "required", any>[], IsOptional, FieldPaths>

A validator for a Convex value.

This should be constructed using the validator builder, v.

A validator encapsulates:

Specific types of validators contain additional information: for example an ArrayValidator contains an element property with the validator used to validate each element of the list. Use the shared 'kind' property to identity the type of validator.

More validators can be added in future releases so an exhaustive switch statement on validator kind should be expected to break in future releases of Convex.

values/validators.ts:604

Ƭ ObjectFieldType: Object

values/validators.ts:645

Ƭ ValidatorJSON: { type: "null" } | { type: "number" } | { type: "bigint" } | { type: "boolean" } | { type: "string" } | { type: "bytes" } | { type: "any" } | { type: "literal" ; value: JSONValue } | { type: "id" ; tableName: string } | { type: "array" ; value: ValidatorJSON } | { type: "record" ; keys: RecordKeyValidatorJSON ; values: RecordValueValidatorJSON } | { type: "object" ; value: Record<string, ObjectFieldType> } | { type: "union" ; value: ValidatorJSON[] }

values/validators.ts:647

Ƭ RecordKeyValidatorJSON: { type: "string" } | { type: "id" ; tableName: string } | { type: "union" ; value: RecordKeyValidatorJSON[] }

values/validators.ts:666

Ƭ RecordValueValidatorJSON: ObjectFieldType & { optional: false }

values/validators.ts:671

Ƭ JSONValue: null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue; }

The type of JavaScript values serializable to JSON.

Ƭ GenericId<TableName>: string & { __tableName: TableName }

An identifier for a document in Convex.

Convex documents are uniquely identified by their Id, which is accessible on the _id field. To learn more, see Document IDs.

Documents can be loaded using db.get(id) in query and mutation functions.

IDs are base 32 encoded strings which are URL safe.

IDs are just strings at runtime, but this type can be used to distinguish them from other strings at compile time.

If you're using code generation, use the Id type generated for your data model in convex/_generated/dataModel.d.ts.

Ƭ Value: null | bigint | number | boolean | string | ArrayBuffer | Value[] | { [key: string]: undefined | Value; }

A value supported by Convex.

You can see the full set of supported types at Types.

Ƭ NumericValue: bigint | number

The types of Value that can be used to represent numbers.

The validator builder.

This builder allows you to build validators for Convex values.

Validators can be used in schema definitions and as input validators for Convex functions.

values/validator.ts:80

▸ compareValues(k1, k2): number

▸ asObjectValidator<V>(obj): V extends Validator<any, any, any> ? V : V extends PropertyValidators ? Validator<ObjectType<V>> : never

Coerce an object with validators as properties to a validator. If a validator is passed, return it.

V extends Validator<any, any, any> ? V : V extends PropertyValidators ? Validator<ObjectType<V>> : never

values/validator.ts:39

▸ jsonToConvex(value): Value

Parse a Convex value from its JSON representation.

This function will deserialize serialized Int64s to BigInts, Bytes to ArrayBuffers etc.

To learn more about Convex values, see Types.

The JavaScript representation of the Convex value.

▸ convexToJson(value): JSONValue

Convert a Convex value to its JSON representation.

Use jsonToConvex to recreate the original value.

To learn more about Convex values, see Types.

The JSON representation of value.

**Examples:**

Example 1 (ts):
```ts
const objectSchema = v.object({  property: v.string(),});type MyObject = Infer<typeof objectSchema>; // { property: string }
```

---

## Class: VBoolean<Type, IsOptional>

**URL:** https://docs.convex.dev/api/classes/values.VBoolean

**Contents:**
- Class: VBoolean<Type, IsOptional>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Inherited from​
    - Defined in​
- Properties​

The type of the v.boolean() validator.

BaseValidator<Type, IsOptional>

• new VBoolean<Type, IsOptional>(«destructured»)

BaseValidator<Type, IsOptional>.constructor

values/validators.ts:38

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: never

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

• Readonly kind: "boolean"

The kind of validator, "boolean".

values/validators.ts:156

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: PaginationOptions

**URL:** https://docs.convex.dev/api/interfaces/server.PaginationOptions

**Contents:**
- Interface: PaginationOptions
- Properties​
  - numItems​
    - Defined in​
  - cursor​
    - Defined in​

server.PaginationOptions

The options passed to paginate.

To use this type in argument validation, use the paginationOptsValidator.

Number of items to load in this page of results.

Note: This is only an initial value!

If you are running this paginated query in a reactive query function, you may receive more or less items than this if items were added to or removed from the query range.

server/pagination.ts:76

• cursor: null | string

A Cursor representing the start of this page or null to start at the beginning of the query results.

server/pagination.ts:82

---

## Class: ConvexHttpClient

**URL:** https://docs.convex.dev/api/classes/browser.ConvexHttpClient

**Contents:**
- Class: ConvexHttpClient
- Constructors​
  - constructor​
    - Parameters​
    - Defined in​
- Accessors​
  - url​
    - Returns​
    - Defined in​
- Methods​

browser.ConvexHttpClient

A Convex client that runs queries and mutations over HTTP.

This client is stateful (it has user credentials and queues mutations) so take care to avoid sharing it between requests in a server.

This is appropriate for server-side code (like Netlify Lambdas) or non-reactive webapps.

• new ConvexHttpClient(address, options?)

Create a new ConvexHttpClient.

browser/http_client.ts:95

Return the address for this client, useful for creating a new client.

Not guaranteed to match the address with which this client was constructed: it may be canonicalized.

browser/http_client.ts:143

▸ backendUrl(): string

Obtain the ConvexHttpClient's URL to its backend.

Use url, which returns the url without /api at the end.

The URL to the Convex backend, including the client's API version.

browser/http_client.ts:133

▸ setAuth(value): void

Set the authentication token to be used for subsequent queries and mutations.

Should be called whenever the token changes (i.e. due to expiration and refresh).

browser/http_client.ts:154

Clear the current authentication token if set.

browser/http_client.ts:180

▸ consistentQuery<Query>(query, ...args): Promise<FunctionReturnType<Query>>

This API is experimental: it may change or disappear.

Execute a Convex query function at the same timestamp as every other consistent query execution run by this HTTP client.

This doesn't make sense for long-lived ConvexHttpClients as Convex backends can read a limited amount into the past: beyond 30 seconds in the past may not be available.

Create a new client to use a consistent time.

This API is experimental: it may change or disappear.

Promise<FunctionReturnType<Query>>

A promise of the query's result.

browser/http_client.ts:222

▸ query<Query>(query, ...args): Promise<FunctionReturnType<Query>>

Execute a Convex query function.

Promise<FunctionReturnType<Query>>

A promise of the query's result.

browser/http_client.ts:266

▸ mutation<Mutation>(mutation, ...args): Promise<FunctionReturnType<Mutation>>

Execute a Convex mutation function. Mutations are queued by default.

Promise<FunctionReturnType<Mutation>>

A promise of the mutation's result.

browser/http_client.ts:426

▸ action<Action>(action, ...args): Promise<FunctionReturnType<Action>>

Execute a Convex action function. Actions are not queued.

Promise<FunctionReturnType<Action>>

A promise of the action's result.

browser/http_client.ts:449

---

## Class: VRecord<Type, Key, Value, IsOptional, FieldPaths>

**URL:** https://docs.convex.dev/api/classes/values.VRecord

**Contents:**
- Class: VRecord<Type, Key, Value, IsOptional, FieldPaths>
- Type parameters​
- Hierarchy​
- Constructors​
  - constructor​
    - Type parameters​
    - Parameters​
    - Overrides​
    - Defined in​
- Properties​

The type of the v.record() validator.

BaseValidator<Type, IsOptional, FieldPaths>

• new VRecord<Type, Key, Value, IsOptional, FieldPaths>(«destructured»)

Usually you'd use v.record(key, value) instead.

BaseValidator&lt;Type, IsOptional, FieldPaths&gt;.constructor

values/validators.ts:454

• Readonly type: Type

Only for TypeScript, the TS type of the JS values validated by this validator.

values/validators.ts:21

• Readonly fieldPaths: FieldPaths

Only for TypeScript, if this an Object validator, then this is the TS type of its property names.

BaseValidator.fieldPaths

values/validators.ts:26

• Readonly isOptional: IsOptional

Whether this is an optional Object property value validator.

BaseValidator.isOptional

values/validators.ts:31

• Readonly isConvexValidator: true

BaseValidator.isConvexValidator

values/validators.ts:36

The validator for the keys of the record.

values/validators.ts:439

• Readonly value: Value

The validator for the values of the record.

values/validators.ts:444

• Readonly kind: "record"

The kind of validator, "record".

values/validators.ts:449

• get optional(): boolean

BaseValidator.optional

values/validators.ts:43

---

## Interface: Scheduler

**URL:** https://docs.convex.dev/api/interfaces/server.Scheduler

**Contents:**
- Interface: Scheduler
- Methods​
  - runAfter​
    - Type parameters​
    - Parameters​
    - Returns​
    - Defined in​
  - runAt​
    - Type parameters​
    - Parameters​

An interface to schedule Convex functions.

You can schedule either mutations or actions. Mutations are guaranteed to execute exactly once - they are automatically retried on transient errors and either execute successfully or fail deterministically due to developer error in defining the function. Actions execute at most once - they are not retried and might fail due to transient errors.

Consider using an internalMutation or internalAction to enforce that these functions cannot be called directly from a Convex client.

▸ runAfter<FuncRef>(delayMs, functionReference, ...args): Promise<GenericId<"_scheduled_functions">>

Schedule a function to execute after a delay.

Promise<GenericId<"_scheduled_functions">>

server/scheduler.ts:41

▸ runAt<FuncRef>(timestamp, functionReference, ...args): Promise<GenericId<"_scheduled_functions">>

Schedule a function to execute at a given timestamp.

Promise<GenericId<"_scheduled_functions">>

server/scheduler.ts:58

▸ cancel(id): Promise<void>

Cancels a previously scheduled function if it has not started yet. If the scheduled function is already in progress, it will continue running but any new functions that it tries to schedule will be canceled.

server/scheduler.ts:71

---
