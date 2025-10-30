# Convex - Client

**Pages:** 22

---

## Next.js

**URL:** https://docs.convex.dev/client/nextjs/

**Contents:**
- Next.js
- Getting started​
- Calling Convex functions from client code​
- Convex React library documentation
- Server rendering (SSR)​
- Adding authentication​
  - Client-side only​
  - Server and client side​
    - Clerk​
    - Auth0​

Next.js is a React web development framework. When used with Convex, Next.js provides:

This page covers the App Router variant of Next.js. Alternatively see the Pages Router version of this page.

Follow the Next.js Quickstart to add Convex to a new or existing Next.js project.

To fetch and edit the data in your database from client code, use hooks of the Convex React library.

Next.js automatically renders both Client and Server Components on the server during the initial page load.

To keep your UI automatically reactive to changes in your Convex database it needs to use Client Components. The ConvexReactClient will maintain a connection to your deployment and will get updates as data changes and that must happen on the client.

See the dedicated Server Rendering page for more details about preloading data for Client Components, fetching data and authentication in Server Components, and implementing Route Handlers.

The simplest way to add user authentication to your Next.js app is to follow our React-based authentication guides for Clerk or Auth0, inside your app/ConvexClientProvider.tsx file. For example this is what the file would look like for Auth0:

Custom loading and logged out views can be built with the helper Authenticated, Unauthenticated and AuthLoading components from convex/react, see the Convex Next.js demo for an example.

If only some routes of your app require login, the same helpers can be used directly in page components that do require login instead of being shared between all pages from app/ConvexClientProvider.tsx. Share a single ConvexReactClient instance between pages to avoid needing to reconnect to Convex on client-side page navigation.

To access user information or load Convex data requiring ctx.auth from Server Components, Server Actions, or Route Handlers you need to use the Next.js specific SDKs provided by Clerk and Auth0.

Additional .env.local configuration is needed for these hybrid SDKs.

For an example of using Convex and with Next.js 15, run

npm create convex@latest -- -t nextjs-clerk

Otherwise, follow the Clerk Next.js quickstart, a guide from Clerk that includes steps for adding NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to the .env.local file. In Next.js 15, the <ClerkProvider> component imported from the @clerk/nextjs v6 package functions as both a client and a server context provider so you probably won't need the ClerkProvider from @clerk/clerk-react.

See the Auth0 Next.js guide.

Convex uses JWT identity tokens on the client for live query subscriptions and running mutations and actions, and on the Next.js backend for running queries, mutations, and actions in server components and API routes.

Obtain the appropriate OpenID Identity JWT in both locations and you should be able to use any auth provider. See Custom Auth for more.

**Examples:**

Example 1 (tsx):
```tsx
"use client";import { Auth0Provider } from "@auth0/auth0-react";import { ConvexReactClient } from "convex/react";import { ConvexProviderWithAuth0 } from "convex/react-auth0";import { ReactNode } from "react";const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);export function ConvexClientProvider({ children }: { children: ReactNode }) {  return (    <Auth0Provider      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}      authorizationParams={{        redirect_uri:          typeof window === "undefined" ? undefined : window.location.origin,      }}      useRefreshTokens={true}      cacheLocation="localstorage"    >      <ConvexProviderWithAuth0 client={convex}>        {children}      </ConvexProviderWithAuth0>    </Auth0Provider>  );}
```

---

## Nuxt

**URL:** https://docs.convex.dev/client/vue/nuxt

**Contents:**
- Nuxt

Nuxt is a powerful web framework powered by Vue.

The community-maintained convex-nuxt npm package provides deep integration of Convex with the Nuxt 3 ecosystem.

It uses convex-vue under the hood.

See the Nuxt Quickstart to get started or the convex-nuxt GitHub page for more documentation.

The convex-nuxt library is community-maintained. Thank you to the maintainer Chris Visser for his work on this project!

You're welcome to ask questions about the library on the Convex Discord but opening a convex-nuxt GitHub issue is a better way to request a new feature or report a bug.

---

## iOS & macOS Swift

**URL:** https://docs.convex.dev/client/swift

**Contents:**
- iOS & macOS Swift
- Installation​
- Connecting to a backend​
- Fetching data​
  - Query arguments​
  - Subscription lifetime​
- Editing Data​
  - Handling errors​
- Calling third-party APIs​
- Authentication with Auth0​

The Convex Swift client library enables your iOS or macOS application to interact with your Convex backend. It allows your frontend code to:

The library is open source and available on GitHub.

Follow the Swift Quickstart to get started.

For an iOS or macOS project in Xcode, you’ll need to perform the following steps to add a dependency on the ConvexMobile library.

Click on the top-level app container in the project navigator on the left

Click on the app name under the PROJECT heading

Click the Package Dependencies tab

Paste https://github.com/get-convex/convex-swift into the search box and press Enter

When the convex-swift package loads, click the Add Package button

In the Package Products dialog, select your product name in the Add to Target dropdown

The ConvexClient is used to establish and maintain a connection between your application and the Convex backend. First you need to create an instance of the client by giving it your backend deployment URL:

You should create and use one instance of the ConvexClient for the lifetime of your application process. You can store the client in a global constant like shown above. An actual connection to the Convex backend won’t be initiated until you call a method on the ConvexClient. After that it will maintain the connection and re-establish it if it gets dropped.

The Swift Convex library gives you access to the Convex sync engine, which enables real-time subscriptions to query results. You subscribe to queries with the subscribe method on ConvexClient which returns a Publisher. The data available via the Publisher will change over time as the underlying data backing the query changes.

You can call methods on the Publisher to transform and consume the data it provides.

A simple way to consume a query that returns a list of strings in a View is to use a combination of a @State containing a list and the .task modifier with code that loops over the query results as an AsyncSequence:

Any time the data that powers the backend "colors:get" query changes, a new array of String values will appear in the AsyncSequence and the View's colors list gets assigned the new data. The UI will then rebuild reactively to reflect the changed data.

You can pass arguments to subscribe and they will be supplied to the associated backend query function. The arguments must be a Dictionary keyed with strings and the values should generally be primitive types, Arrays and other Dictionaries.

Assuming the colors:get query accepts an onlyFavorites argument, the value can be received and used to perform logic in the query function.

Use Decodable structs to automatically convert Convex objects to Swift structs.

The Publisher returned from subscribe will persist as long as the associated View or ObservableObject. When either is no longer part of the UI, the underlying query subscription to Convex will be canceled.

You can use the mutation method on ConvexClient to trigger a backend mutation.

mutation is an async method so you'll need to call it within a Task. Mutations can return a value or not.

Mutations can also receive arguments, just like queries. Here's an example of calling a mutation with arguments that returns a value:

If an error occurs during a call to mutation, it will throw. Typically you may want to catch ConvexError and ServerError and handle them however is appropriate in your application.

Here’s a small example of how you might handle an error from colors:put if it threw a ConvexError with an error message if a color already existed.

See documentation on error handling for more details.

You can use the action method on ConvexClient to trigger a backend action.

Calls to action can accept arguments, return values and throw exceptions just like calls to mutation.

Even though you can call actions from your client code, it's not always the right choice. See the action docs for tips on calling actions from clients.

You can use ConvexClientWithAuth in place of ConvexClient to configure authentication with Auth0. You'll need the convex-swift-auth0 library to do that, as well as an Auth0 account and application configuration.

See the README in the convex-swift-auth0 repo for more detailed setup instructions, and the Workout example app which is configured for Auth0. The overall Convex authentication docs are a good resource as well.

It should also be possible to integrate other similar OpenID Connect authentication providers. See the AuthProvider protocol in the convex-swift repo for more info.

When you're ready to move toward production for your app, you can setup your Xcode build system to point different build targets to different Convex deployments. Build environment configuration is highly specialized, and it’s possible that you or your team have different conventions, but this is one way to approach the problem.

Now you can refer to deploymentUrl wherever you create your ConvexClient and depending on the target that you build, it will use your dev or prod URL.

The examples shown in this guide are intended to be brief, and don't provide guidance on how to structure a whole application.

If you want a more robust and layered approach, put your code that interacts with ConvexClientin a class that conforms to ObservableObject. Then your View can observe that object as a @StateObject and will rebuild whenever it changes.

For example, if we adapt the colors:get example from above to a ViewModel: ObservableObject class, the View no longer plays a direct part in fetching the data - it only knows that the list of colors is provided by the ViewModel.

Depending on your needs and the scale of your app, it might make sense to give it even more formal structure as demonstrated in something like https://github.com/nalexn/clean-architecture-swiftui.

The Swift Convex library is built on top of the official Convex Rust client. It handles maintaining a WebSocket connection with the Convex backend and implements the full Convex protocol.

All method calls on ConvexClient are handled via a Tokio async runtime on the Rust side and are safe to call from the application's main actor.

**Examples:**

Example 1 (swift):
```swift
import ConvexMobilelet convex = ConvexClient(deploymentUrl: "https://<your domain here>.convex.cloud")
```

Example 2 (swift):
```swift
struct ColorList: View {  @State private var colors: [String] = []  var body: some View {    List {      ForEach(colors, id: \.self) { color in        Text(color)      }    }.task {      let latestColors = convex.subscribe(to: "colors:get", yielding: [String].self)        .replaceError(with: [])        .values      for await colors in latestColors {        self.colors = colors      }    }  }}
```

Example 3 (swift):
```swift
let publisher = convex.subscribe(to: "colors:get",                               with:["onlyFavorites": true],                           yielding:[String].self)
```

Example 4 (swift):
```swift
let isColorAdded: Bool = try await convex.mutation("colors:put", with: ["color": newColor])
```

---

## Convex with TanStack Query

**URL:** https://docs.convex.dev/client/tanstack/tanstack-query/

**Contents:**
- Convex with TanStack Query
- Setup​
- Queries​
- Mutations​
- Differences from using fetch with TanStack Query​

TanStack Query is an excellent, popular library for managing requests to a server.

The @convex-dev/react-query library provides Query Option functions for use with TanStack Query.

Not all features of the standard Convex React client are available through the TanStack Query APIs but you can use the two alongside each other, dropping into the standard Convex React hooks as necessary.

The TanStack Query adapter is currently a beta feature. If you have feedback or feature requests, let us know on Discord!

This makes subscribing to a Convex query function using the TanStack Query useQuery hook look like this:

Instead of the typical polling pattern for API endpoints used with TanStack Query, the code above receives updates for this api.messages.list query from the Convex server reactively. New results for all relevant subscriptions are pushed to the client where they update at the same time so data is never stale and there's no need to manually invalidate queries.

Currently only React Query is supported via @convex-dev/react-query. Let us know if you would find support for vue-query, svelte-query, solid-query, or angular-query helpful.

To get live updates in TanStack Query create a ConvexQueryClient and connect it to the TanStack Query QueryClient. After installing the adapter library with

wire up Convex to TanStack Query like this:

Note that when your create your React tree you should both:

A live-updating subscription to a Convex query is as simple as calling TanStack useQuery with convexQuery:

You can spread the object returned by convexQuery into an object specifying additional arguments of useQuery.

Your app can call Convex mutations by using the TanStack useMutation hook, and setting the mutationFn property to the result of calling useConvexMutation:

useConvexMutation is just a re-export of the useMutation hook from Convex React.

Convex provides stronger guarantees than other methods of fetching data with React Query, so some options and return value properties are no longer necessary.

Subscriptions to Convex queries will remain active after the last component using useQuery for a given function unmounts for gcTime milliseconds. This value is 5 minutes by default; if this results in unwanted function activity use a smaller value.

Data provided by Convex is never stale, so the isStale property of the return value of useQuery will always be false. retry-related options are ignored, since Convex provides its own retry mechanism over its WebSocket protocol. refetch-related options are similarly ignored since Convex queries are always up to date.

**Examples:**

Example 1 (ts):
```ts
const { data, isPending, error } = useQuery(convexQuery(api.messages.list, {}));
```

Example 2 (text):
```text
npm i @convex-dev/react-query
```

Example 3 (tsx):
```tsx
import { ConvexQueryClient } from "@convex-dev/react-query";import { QueryClient, QueryClientProvider } from "@tanstack/react-query";import { ConvexProvider, ConvexReactClient } from "convex/react";import ReactDOM from "react-dom/client";import App from "./App";import "./index.css";const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);const convexQueryClient = new ConvexQueryClient(convex);const queryClient = new QueryClient({  defaultOptions: {    queries: {      queryKeyHashFn: convexQueryClient.hashFn(),      queryFn: convexQueryClient.queryFn(),    },  },});convexQueryClient.connect(queryClient);ReactDOM.createRoot(document.getElementById("root")!).render(  <ConvexProvider client={convex}>    <QueryClientProvider client={queryClient}>      <App />    </QueryClientProvider>  </ConvexProvider>,);
```

Example 4 (ts):
```ts
import { useQuery } from "@tanstack/react-query";import { convexQuery } from "@convex-dev/react-query";import { api } from "../convex/_generated/api";export function App() {  const { data, isPending, error } = useQuery(    convexQuery(api.functions.myQuery, { id: 123 }),  );  return isPending ? "Loading..." : data;}
```

---

## TanStack Start

**URL:** https://docs.convex.dev/client/tanstack/tanstack-start/

**Contents:**
- TanStack Start
- Getting started​
- Using Convex with React Query​
  - Staying subscribed to queries​
  - Using Convex React hooks​
- Server-side Rendering​
  - Consistent client views​
  - Loaders​
- Authentication​

TanStack Start is a new React web framework with best-in-class typesafe routing.

When used with Convex, TanStack Start provides

This page describes the recommended way to use Convex with TanStack Start, via React Query. The standard Convex React hooks work also with TanStack Start without React Query, as do the React Query hooks without TanStack Start! But using all three is a sweet spot.

TanStack Start is a new React framework currently in beta. You can use it today but there may be breaking changes made to it before a stable release.

Follow the TanStack Start Quickstart to add Convex to a new TanStack Start project.

You can read more about React Query hooks, but a few highlights relevant to TanStack Start.

Convex queries in React Query continue to receive updates after the last component subscribed to the query unmounts. The default for this behavior is 5 minutes and this value is configured with gcTime.

This is useful to know when debugging why a query result is already loaded: for client side navigations, whether a subscription is already active can depend on what pages were previously visited in a session.

Convex React hooks like usePaginatedQuery can be used alongside TanStack hooks. These hooks reference the same Convex Client so there's still just one set of consistent query results in your app when these are combined.

Using TanStack Start and Query with Convex makes it particularly easy to live-update Convex queries on the client while also server-rendering them. useSuspenseQuery() is the simplest way to do this:

In the browser all Convex query subscriptions present a consistent, at-the-same-logical-timestamp view of the database: if one query result reflects a given mutation transaction, every other query result will too.

Server-side rendering is usually a special case: instead of a stateful WebSocket session, on the server it's simpler to fetch query results ad-hoc. This can lead to inconsistencies analogous to one REST endpoint returning results before a mutation ran and another endpoint returning results after that change.

In TanStack Start, this issue is avoided by sending in a timestamp along with each query: Convex uses the same timestamp for all queries.

To make client-side navigations faster you can add a loader to a route. By default, loaders will run when mousing over a link to that page.

Client-side authentication in Start works the way client-side authentication with Convex generally works in React because TanStack Start works well as a client-side framework.

To use Clerk auth to make authenticated Convex calls on the server as well see the TanStack Start + Clerk guide.

Clerk is an official partner of TanStack, see our setup guide.

**Examples:**

Example 1 (ts):
```ts
const { data } = useSuspenseQuery(convexQuery(api.messages.list, {}));
```

Example 2 (ts):
```ts
export const Route = createFileRoute('/posts')({  loader: async (opts) => {    await opts.context.queryClient.ensureQueryData(      convexQuery(api.messages.list, {}),    );  };  component: () => {    const { data } = useSuspenseQuery(convexQuery(api.messages.list, {}));    return (      <div>	{data.map((message) => (	  <Message key={message.id} post={message} />	))}      </div>    );  },})
```

---

## Configuring Deployment URL

**URL:** https://docs.convex.dev/client/react/deployment-urls

**Contents:**
- Configuring Deployment URL
  - Create a Convex project​
  - Configure the client​
  - Choosing environment variable names​

When connecting to your backend it's important to correctly configure the deployment URL.

The first time you run

in your project directory you will create a new Convex project.

Your new project includes two deployments: production and development. The development deployment's URL will be saved in .env.local or .env file, depending on the frontend framework or bundler you're using.

You can find the URLs of all deployments in a project by visiting the deployment settings on your Convex dashboard.

Construct a Convex React client by passing in the URL of the Convex deployment. There should generally be a single Convex client in a frontend application.

While this URL can be hardcoded, it's convenient to use an environment variable to determine which deployment the client should connect to.

Use an environment variable name accessible from your client code according to the frontend framework or bundler you're using.

To avoid unintentionally exposing secret environment variables in frontend code, many bundlers require environment variables referenced in frontend code to use a specific prefix.

Vite requires environment variables used in frontend code start with VITE_, so VITE_CONVEX_URL is a good name.

Create React App requires environment variables used in frontend code to begin with REACT_APP_, so the code above uses REACT_APP_CONVEX_URL.

Next.js requires them to begin with NEXT_PUBLIC_, so NEXT_PUBLIC_CONVEX_URL is a good name.

Bundlers provide different ways to access these variables too: while Vite uses import.meta.env.VARIABLE_NAME, many other tools like Next.js use the Node.js-like process.env.VARIABLE_NAME

.env files are a common way to wire up different environment variable values in development and production environments. npx convex dev will save the deployment URL to the corresponding .env file, while trying to infer which bundler your project uses.

Your backend functions can use environment variables configured on your dashboard. They do not source values from .env files.

**Examples:**

Example 1 (sh):
```sh
npx convex dev
```

Example 2 (jsx):
```jsx
import { ConvexProvider, ConvexReactClient } from "convex/react";const deploymentURL = import.meta.env.VITE_CONVEX_URL;const convex = new ConvexReactClient(deploymentURL);
```

Example 3 (jsx):
```jsx
import { ConvexProvider, ConvexReactClient } from "convex/react";const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
```

Example 4 (shell):
```shell
NEXT_PUBLIC_CONVEX_URL=https://guiltless-dog-960.convex.cloud# examples of other environment variables that might be passed to the frontendNEXT_PUBLIC_SENTRY_DSN=https://123abc@o123.ingest.sentry.io/1234NEXT_PUBLIC_LAUNCHDARKLY_SDK_CLIENT_SIDE_ID=01234567890abcdef
```

---

## Python

**URL:** https://docs.convex.dev/client/python

**Contents:**
- Python

See the Python Quickstart and the convex PyPI package docs. The Python client is open source and available on GitHub.

---

## Node.js

**URL:** https://docs.convex.dev/client/javascript/node

**Contents:**
- Node.js
- TypeScript​
- TypeScript without a compile step​
- JavaScript with CommonJS (require() syntax)​
- TypeScript with CommonJS without a compile step​
- Using Convex with Node.js without codegen​

Convex supports point-in-time queries (see HTTP client) and query subscriptions (see ConvexClient) in Node.js.

If your JavaScript code uses import/export syntax, calling Convex functions works just like in a browser.

Just like bundling for the browser, bundling TypeScript code for Node.js with webpack, esbuild, rollup, vite, and others usually allow you import from code that uses import/export syntax with no extra setup.

If you use TypeScript to compile your code (this is rare for web projects but more common with Node.js), add "allowJs": true to tsconfig.json compiler options so that TypeScript will compile the api.js file as well.

If you want to run your TypeScript script directly without a compile step, installing ts-node-esm and running your script with ts-node-esm should work if you use "type": "module" in your package.json.

If you don't use "type": "module" in the package.json of your project you'll need to use require() syntax and Node.js will not be able to import the convex/_generated/api.js file directly.

In the same directory as your package.json, create or edit convex.json:

When the convex dev command generates files in convex/_generated/ a new api_cjs.cjs file will be created which can be imported from CommonJS code.

Follow the steps above for CommonJS and use ts-node to run you code. Be sure your tsconfig.json is configured for CommonJS output.

You can always use the anyApi object or strings if you don't have the Convex functions and api file handy. An api reference like api.folder.file.exportName becomes anyApi.folder.file.exportName or "folder/file:exportName".

**Examples:**

Example 1 (js):
```js
import { ConvexHttpClient, ConvexClient } from "convex/browser";import { api } from "./convex/_generated/api.js";// HTTP clientconst httpClient = new ConvexHttpClient(CONVEX_URL_GOES_HERE);httpClient.query(api.messages.list).then(console.log);// Subscription clientconst client = new ConvexClient(CONVEX_URL_GOES_HERE);client.onUpdate(api.messages.list, {}, (messages) => console.log(messages));
```

Example 2 (json):
```json
{  "generateCommonJSApi": true}
```

Example 3 (js):
```js
const { ConvexHttpClient, ConvexClient } = require("convex/browser");const { api } = require("./convex/_generated/api_cjs.cjs");const httpClient = new ConvexHttpClient(CONVEX_URL_GOES_HERE);
```

---

## Next.js Pages Quickstart

**URL:** https://docs.convex.dev/client/nextjs/pages-router/quickstart

**Contents:**
- Next.js Pages Quickstart

Learn how to query data from Convex in a Next.js app using the Pages Router.

Alternatively see the App Router version of this quickstart.

Create a Next.js app using the npx create-next-app command.

Choose the default option for every prompt (hit Enter).

To get started, install the convex package which provides a convenient interface for working with Convex from a React app.

Navigate to your app and install convex.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In pages/_app.js, create a ConvexReactClient and pass it to a ConvexProvider wrapping your app.

In pages/index.js, use the useQuery hook to fetch from your api.tasks.get API function.

Start the app, open http://localhost:3000 in a browser, and see the list of tasks.

**Examples:**

Example 1 (sh):
```sh
npx create-next-app@latest my-app --no-app --js
```

Example 2 (sh):
```sh
cd my-app && npm install convex
```

Example 3 (sh):
```sh
npx convex dev
```

Example 4 (json):
```json
{"text": "Buy groceries", "isCompleted": true}{"text": "Go for a swim", "isCompleted": true}{"text": "Integrate Convex", "isCompleted": false}
```

---

## Next.js

**URL:** https://docs.convex.dev/client/nextjs/app-router/

**Contents:**
- Next.js
- Getting started​
- Calling Convex functions from client code​
- Convex React library documentation
- Server rendering (SSR)​
- Adding authentication​
  - Client-side only​
  - Server and client side​
    - Clerk​
    - Auth0​

Next.js is a React web development framework. When used with Convex, Next.js provides:

This page covers the App Router variant of Next.js. Alternatively see the Pages Router version of this page.

Follow the Next.js Quickstart to add Convex to a new or existing Next.js project.

To fetch and edit the data in your database from client code, use hooks of the Convex React library.

Next.js automatically renders both Client and Server Components on the server during the initial page load.

To keep your UI automatically reactive to changes in your Convex database it needs to use Client Components. The ConvexReactClient will maintain a connection to your deployment and will get updates as data changes and that must happen on the client.

See the dedicated Server Rendering page for more details about preloading data for Client Components, fetching data and authentication in Server Components, and implementing Route Handlers.

The simplest way to add user authentication to your Next.js app is to follow our React-based authentication guides for Clerk or Auth0, inside your app/ConvexClientProvider.tsx file. For example this is what the file would look like for Auth0:

Custom loading and logged out views can be built with the helper Authenticated, Unauthenticated and AuthLoading components from convex/react, see the Convex Next.js demo for an example.

If only some routes of your app require login, the same helpers can be used directly in page components that do require login instead of being shared between all pages from app/ConvexClientProvider.tsx. Share a single ConvexReactClient instance between pages to avoid needing to reconnect to Convex on client-side page navigation.

To access user information or load Convex data requiring ctx.auth from Server Components, Server Actions, or Route Handlers you need to use the Next.js specific SDKs provided by Clerk and Auth0.

Additional .env.local configuration is needed for these hybrid SDKs.

For an example of using Convex and with Next.js 15, run

npm create convex@latest -- -t nextjs-clerk

Otherwise, follow the Clerk Next.js quickstart, a guide from Clerk that includes steps for adding NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to the .env.local file. In Next.js 15, the <ClerkProvider> component imported from the @clerk/nextjs v6 package functions as both a client and a server context provider so you probably won't need the ClerkProvider from @clerk/clerk-react.

See the Auth0 Next.js guide.

Convex uses JWT identity tokens on the client for live query subscriptions and running mutations and actions, and on the Next.js backend for running queries, mutations, and actions in server components and API routes.

Obtain the appropriate OpenID Identity JWT in both locations and you should be able to use any auth provider. See Custom Auth for more.

**Examples:**

Example 1 (tsx):
```tsx
"use client";import { Auth0Provider } from "@auth0/auth0-react";import { ConvexReactClient } from "convex/react";import { ConvexProviderWithAuth0 } from "convex/react-auth0";import { ReactNode } from "react";const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);export function ConvexClientProvider({ children }: { children: ReactNode }) {  return (    <Auth0Provider      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}      authorizationParams={{        redirect_uri:          typeof window === "undefined" ? undefined : window.location.origin,      }}      useRefreshTokens={true}      cacheLocation="localstorage"    >      <ConvexProviderWithAuth0 client={convex}>        {children}      </ConvexProviderWithAuth0>    </Auth0Provider>  );}
```

---

## Convex React

**URL:** https://docs.convex.dev/client/react

**Contents:**
- Convex React
- Installation​
- Connecting to a backend​
- Fetching data​
  - Query arguments​
  - Reactivity​
  - Consistency​
  - Paginating queries​
  - Skipping queries​
  - One-off queries​

Convex React is the client library enabling your React application to interact with your Convex backend. It allows your frontend code to:

The Convex React client is open source and available on GitHub.

Follow the React Quickstart to get started with React using Vite.

Convex React is part of the convex npm package:

The ConvexReactClient maintains a connection to your Convex backend, and is used by the React hooks described below to call your functions.

First you need to create an instance of the client by giving it your backend deployment URL. See Configuring Deployment URL on how to pass in the right value:

And then you make the client available to your app by passing it in to a ConvexProvider wrapping your component tree:

Your React app fetches data using the useQuery React hook by calling your queries via an api object.

The npx convex dev command generates this api object for you in the convex/_generated/api.js module to provide better autocompletion in JavaScript and end-to-end type safety in TypeScript:

The useQuery hook returns undefined while the data is first loading and afterwards the return value of your query.

Arguments to your query follow the query name:

The useQuery hook makes your app automatically reactive: when the underlying data changes in your database, your component rerenders with the new query result.

The first time the hook is used it creates a subscription to your backend for a given query and any arguments you pass in. When your component unmounts, the subscription is canceled.

Convex React ensures that your application always renders a consistent view of the query results based on a single state of the underlying database.

Imagine a mutation changes some data in the database, and that 2 different useQuery call sites rely on this data. Your app will never render in an inconsistent state where only one of the useQuery call sites reflects the new data.

See Paginating within React Components.

With React it can be tricky to dynamically invoke a hook, because hooks cannot be placed inside conditionals or after early returns:

For this reason useQuery can be "disabled" by passing in "skip" instead of its arguments:

When "skip" is used the useQuery doesn't talk to your backend at all and returns undefined.

Sometimes you might want to read state from the database in response to a user action, for example to validate given input, without making any changes to the database. In this case you can use a one-off query call, similarly to calling mutations and actions.

The async method query is exposed on the ConvexReactClient, which you can reference in your components via the useConvex() hook.

Your React app edits data using the useMutation React hook by calling your mutations.

The convex dev command generates this api object for you in the convex/_generated/api.js module to provide better autocompletion in JavaScript and end-to-end type safety in TypeScript:

The hook returns an async function which performs the call to the mutation.

Arguments to your mutation are passed to the async function returned from useMutation:

The mutation can optionally return a value or throw errors, which you can await:

Or handle as a Promise:

Learn more about Error Handling in functions.

Convex React automatically retries mutations until they are confirmed to have been written to the database. The Convex backend ensures that despite multiple retries, every mutation call only executes once.

Additionally, Convex React will warn users if they try to close their browser tab while there are outstanding mutations. This means that when you call a Convex mutation, you can be sure that the user's edits won't be lost.

Convex queries are fully reactive, so all query results will be automatically updated after a mutation. Sometimes you may want to update the UI before the mutation changes propagate back to the client. To accomplish this, you can configure an optimistic update to execute as part of your mutation.

Optimistic updates are temporary, local changes to your query results which are used to make your app more responsive.

See Optimistic Updates on how to configure them.

Your React app can read data, call third-party services, and write data with a single backend call using the useAction React hook by calling your actions.

Like useQuery and useMutation, this hook is used with the api object generated for you in the convex/_generated/api.js module to provide better autocompletion in JavaScript and end-to-end type safety in TypeScript:

The hook returns an async function which performs the call to the action.

Action arguments work exactly the same as mutation arguments.

Action response and error handling work exactly the same as mutation response and error handling.

Actions do not support automatic retries or optimistic updates.

The ConvexReactClient connects to your Convex deployment by creating a WebSocket. The WebSocket provides a 2-way communication channel over TCP. This allows Convex to push new query results reactively to the client without the client needing to poll for updates.

If the internet connection drops, the client will handle reconnecting and re-establishing the Convex session automatically.

**Examples:**

Example 1 (text):
```text
npm install convex
```

Example 2 (jsx):
```jsx
import { ConvexProvider, ConvexReactClient } from "convex/react";const convex = new ConvexReactClient("https://<your domain here>.convex.cloud");
```

Example 3 (jsx):
```jsx
reactDOMRoot.render(  <React.StrictMode>    <ConvexProvider client={convex}>      <App />    </ConvexProvider>  </React.StrictMode>,);
```

Example 4 (tsx):
```tsx
import { useQuery } from "convex/react";import { api } from "../convex/_generated/api";export function App() {  const data = useQuery(api.functions.myQuery);  return data ?? "Loading...";}
```

---

## TanStack Start with Clerk

**URL:** https://docs.convex.dev/client/tanstack/tanstack-start/clerk

**Contents:**
- TanStack Start with Clerk

Using Clerk with Convex looks like following the Clerk TanStack Quickstart and adding Convex like the Convex TanStack Quickstart shows. Then to make Clerk identity tokens available everywhere you might make authenticated calls to Convex in TanStack Start, you'll want to

Making these changes looks like modifying app/router.tsx like this:

and modifying app/routes/__root.tsx like this:

Now all queries, mutations and action made with TanStack Query will be authenticated by a Clerk identity token.

**Examples:**

Example 1 (tsx):
```tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router'import { routeTree } from './routeTree.gen'import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'import { NotFound } from './components/NotFound'import { routerWithQueryClient } from '@tanstack/react-router-with-query'import { ConvexProvider, ConvexReactClient } from 'convex/react'import { ConvexQueryClient } from '@convex-dev/react-query'import { QueryClient } from '@tanstack/react-query'export function createRouter() {  const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL!  if (!CONVEX_URL) {    throw new Error('missing VITE_CONVEX_URL envar')  }  const convex = new ConvexReactClient(CONVEX_URL, {    unsavedChangesWarning: false,  })  const convexQueryClient = new ConvexQueryClient(convex)  const queryClient: QueryClient = new QueryClient({    defaultOptions: {      queries: {        queryKeyHashFn: convexQueryClient.hashFn(),        queryFn: convexQueryClient.queryFn(),      },    },  })  convexQueryClient.connect(queryClient)  const router = routerWithQueryClient(    createTanStackRouter({      routeTree,      defaultPreload: 'intent',      defaultErrorComponent: DefaultCatchBoundary,      defaultNotFoundComponent: () => <NotFound />,      context: { queryClient, convexClient: convex, convexQueryClient },      scrollRestoration: true,      Wrap: ({ children }) => (        <ConvexProvider client={convexQueryClient.convexClient}>          {children}        </ConvexProvider>      ),    }),    queryClient,  )  return router}declare module '@tanstack/react-router' {  interface Register {    router: ReturnType<typeof createRouter>  }}
```

Example 2 (tsx):
```tsx
import {  Link,  Outlet,  createRootRouteWithContext,  useRouteContext,} from '@tanstack/react-router'import {  ClerkProvider,  SignInButton,  SignedIn,  SignedOut,  UserButton,  useAuth,} from '@clerk/tanstack-start'import { TanStackRouterDevtools } from '@tanstack/router-devtools'import { Meta, Scripts, createServerFn } from '@tanstack/start'import { QueryClient } from '@tanstack/react-query'import * as React from 'react'import { getAuth } from '@clerk/tanstack-start/server'import { getWebRequest } from 'vinxi/http'import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary.js'import { NotFound } from '~/components/NotFound.js'import appCss from '~/styles/app.css?url'import { ConvexQueryClient } from '@convex-dev/react-query'import { ConvexReactClient } from 'convex/react'import { ConvexProviderWithClerk } from 'convex/react-clerk'const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {  const auth = await getAuth(getWebRequest())  const token = await auth.getToken({ template: 'convex' })  return {    userId: auth.userId,    token,  }})export const Route = createRootRouteWithContext<{  queryClient: QueryClient  convexClient: ConvexReactClient  convexQueryClient: ConvexQueryClient}>()({  head: () => ({    meta: [      {        charSet: 'utf-8',      },      {        name: 'viewport',        content: 'width=device-width, initial-scale=1',      },    ],    links: [      { rel: 'stylesheet', href: appCss },      {        rel: 'apple-touch-icon',        sizes: '180x180',        href: '/apple-touch-icon.png',      },      {        rel: 'icon',        type: 'image/png',        sizes: '32x32',        href: '/favicon-32x32.png',      },      {        rel: 'icon',        type: 'image/png',        sizes: '16x16',        href: '/favicon-16x16.png',      },      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },      { rel: 'icon', href: '/favicon.ico' },    ],  }),  beforeLoad: async (ctx) => {    const auth = await fetchClerkAuth()    const { userId, token } = auth    // During SSR only (the only time serverHttpClient exists),    // set the Clerk auth token to make HTTP queries with.    if (token) {      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)    }    return {      userId,      token,    }  },  errorComponent: (props) => {    return (      <RootDocument>        <DefaultCatchBoundary {...props} />      </RootDocument>    )  },  notFoundComponent: () => <NotFound />,  component: RootComponent,})function RootComponent() {  const context = useRouteContext({ from: Route.id })  return (    <ClerkProvider>      <ConvexProviderWithClerk client={context.convexClient} useAuth={useAuth}>        <RootDocument>          <Outlet />        </RootDocument>      </ConvexProviderWithClerk>    </ClerkProvider>  )}function RootDocument({ children }: { children: React.ReactNode }) {  return (    <html>      <head>        <Meta />      </head>      <body>        <div className="p-2 flex gap-2 text-lg">          <Link            to="/"            activeProps={{              className: 'font-bold',            }}            activeOptions={{ exact: true }}          >            Home          </Link>{' '}          <Link            to="/posts"            activeProps={{              className: 'font-bold',            }}          >            Posts          </Link>          <div className="ml-auto">            <SignedIn>              <UserButton />            </SignedIn>            <SignedOut>              <SignInButton mode="modal" />            </SignedOut>          </div>        </div>        <hr />        {children}        <TanStackRouterDevtools position="bottom-right" />        <Scripts />      </body>    </html>  )}
```

---

## Optimistic Updates

**URL:** https://docs.convex.dev/client/react/optimistic-updates

**Contents:**
- Optimistic Updates
- Simple example​
- Complex example​
- Learning more​

Even though Convex queries are completely reactive, sometimes you'll want to update your UI before the mutation changes propagate back to the client. To accomplish this, you can configure an optimistic update to execute as part of your mutation.

Optimistic updates are temporary, local changes to your query results which are used to make your app more responsive. These updates are made by functions registered on a mutation invocation with the .withOptimisticUpdate configuration option.

Optimistic updates are run when a mutation is initiated, rerun if the local query results change, and rolled back when a mutation completes.

Here is how an optimistic update could be added to an increment mutation in a simple counter app:

Optimistic updates receive a localStore, a view of the Convex client's internal state, followed by the arguments to the mutation.

This optimistic update updates the api.counter.get query to be increment higher if it's loaded.

If we want to add an optimistic update to a multi-channel chat app, that might look like:

This optimistic update changes the api.messages.list query for the current channel to include a new message. The newly created message object should match the structure of the real messages generated by the api.messages.list query on the server.

Because this message includes the client's current time (not the server's), it will inevitably not match the api.messages.list query after the mutation runs. That's okay! The Convex client will handle rolling back this update after the mutation completes and the queries are updated. If there are small mistakes in optimistic updates, the UI will always eventually render the correct values.

Similarly, the update creates a temporary Id with new Id("messages", crypto.randomUUID()). This will also be rolled back and replaced with the true ID once the server assigns it.

Lastly, note that this update creates a new array of messages instead of using existingMessages.push(newMessage). This is important! Mutating objects inside of optimistic updates will corrupt the client's internal state and lead to surprising results. Always create new objects inside of optimistic updates.

To learn more, check out our API documentation:

If you'd like some hands on experience, try adding optimistic updates to the tutorial app! If you do, you should notice the app feels snappier — just a little, Convex is pretty fast already! — but otherwise works the same.

To explore even further, try inserting a mistake into this update! You should see a flicker as the optimistic update is applied and then rolled back.

**Examples:**

Example 1 (tsx):
```tsx
import { api } from "../convex/_generated/api";import { useMutation } from "convex/react";export function IncrementCounter() {  const increment = useMutation(api.counter.increment).withOptimisticUpdate(    (localStore, args) => {      const { increment } = args;      const currentValue = localStore.getQuery(api.counter.get);      if (currentValue !== undefined) {        localStore.setQuery(api.counter.get, {}, currentValue + increment);      }    },  );  const incrementCounter = () => {    increment({ increment: 1 });  };  return <button onClick={incrementCounter}>+1</button>;}
```

Example 2 (tsx):
```tsx
import { api } from "../convex/_generated/api";import { useMutation } from "convex/react";import { Id } from "../convex/_generated/dataModel";export function MessageSender(props: { channel: Id<"channels"> }) {  const sendMessage = useMutation(api.messages.send).withOptimisticUpdate(    (localStore, args) => {      const { channel, body } = args;      const existingMessages = localStore.getQuery(api.messages.list, {        channel,      });      // If we've loaded the api.messages.list query, push an optimistic message      // onto the list.      if (existingMessages !== undefined) {        const now = Date.now();        const newMessage = {          _id: crypto.randomUUID() as Id<"messages">,          _creationTime: now,          channel,          body,        };        localStore.setQuery(api.messages.list, { channel }, [          ...existingMessages,          newMessage,        ]);      }    },  );  async function handleSendMessage(    channelId: Id<"channels">,    newMessageText: string,  ) {    await sendMessage({ channel: channelId, body: newMessageText });  }  return (    <button onClick={() => handleSendMessage(props.channel, "Hello world!")}>      Send message    </button>  );}
```

---

## Convex JavaScript Clients

**URL:** https://docs.convex.dev/client/javascript

**Contents:**
- Convex JavaScript Clients
- Convex Client​
- HTTP client​
- Using Convex without generated convex/_generated/api.js​

Convex applications can be accessed from Node.js or any JavaScript runtime that implements fetch or WebSocket. The reactive Convex Client allows web applications and long-running Node.js servers to subscribe to updates on Convex queries, while the Convex HTTP client is typically used for server-side rendering, migrations, administrative scripts, and serverless functions to run queries at a single point in time.

If you're using React, see the dedicated ConvexReactClient described in React.

The ConvexClient provides subscriptions to queries in Node.js and any JavaScript environment that supports WebSockets.

The Convex client is open source and available on GitHub.

See the Script Tag Quickstart to get started.

The ConvexHttpClient works in the browser, Node.js, and any JavaScript environment with fetch.

See the Node.js Quickstart.

If the source code for your Convex function isn't located in the same project or in the same monorepos you can use the untyped api object called anyApi.

**Examples:**

Example 1 (ts):
```ts
import { ConvexClient } from "convex/browser";import { api } from "../convex/_generated/api";const client = new ConvexClient(process.env.CONVEX_URL!);// subscribe to query resultsclient.onUpdate(api.messages.listAll, {}, (messages) =>  console.log(messages.map((msg) => msg.body)),);// execute a mutationfunction hello() {  client.mutation(api.messages.sendAnon, {    body: `hello at ${new Date()}`,  });}
```

Example 2 (ts):
```ts
import { ConvexHttpClient } from "convex/browser";import { api } from "./convex/_generated/api";const client = new ConvexHttpClient(process.env["CONVEX_URL"]);// either thisconst count = await client.query(api.counter.get);// or thisclient.query(api.counter.get).then((count) => console.log(count));
```

Example 3 (ts):
```ts
import { ConvexClient } from "convex/browser";import { anyApi } from "convex/server";const CONVEX_URL = "http://happy-otter-123";const client = new ConvexClient(CONVEX_URL);client.onUpdate(anyApi.messages.list, {}, (messages) =>  console.log(messages.map((msg) => msg.body)),);setInterval(  () =>    client.mutation(anyApi.messages.send, {      body: `hello at ${new Date()}`,      author: "me",    }),  5000,);
```

---

## Rust

**URL:** https://docs.convex.dev/client/rust

**Contents:**
- Rust

See the Rust Quickstart and convex on docs.rs docs. The Rust client is open source and available on GitHub.

---

## Next.js Server Rendering

**URL:** https://docs.convex.dev/client/nextjs/app-router/server-rendering

**Contents:**
- Next.js Server Rendering
- Preloading data for Client Components​
  - Using the query result​
- Using Convex to render Server Components​
- Server Actions and Route Handlers​
- Server-side authentication​
- Configuring Convex deployment URL​
- Consistency​

Next.js automatically renders both Client and Server Components on the server during the initial page load.

By default Client Components will not wait for Convex data to be loaded, and your UI will render in a "loading" state. Read on to learn how to preload data during server rendering and how to interact with the Convex deployment from Next.js server-side.

Example: Next.js App Router

This pages covers the App Router variant of Next.js.

Next.js Server Rendering support is currently a beta feature. If you have feedback or feature requests, let us know on Discord!

If you want to preload data from Convex and leverage Next.js server rendering, but still retain reactivity after the initial page load, use preloadQuery from convex/nextjs.

In a Server Component call preloadQuery:

In a Client Component call usePreloadedQuery:

preloadQuery takes three arguments:

preloadQuery uses the cache: 'no-store' policy so any Server Components using it will not be eligible for static rendering.

preloadQuery returns an opaque Preloaded payload that should be passed through to usePreloadedQuery. If you want to use the return value of the query, perhaps to decide whether to even render the Client Component, you can pass the Preloaded payload to the preloadedQueryResult function.

If you need Convex data on the server, you can load data from Convex in your Server Components, but it will be non-reactive. To do this, use the fetchQuery function from convex/nextjs:

Next.js supports building HTTP request handling routes, similar to Convex HTTP Actions. You can use Convex from a Server Action or a Route Handler as you would any other database service.

To load and edit Convex data in your Server Action or Route Handler, you can use the fetchQuery, fetchMutation and fetchAction functions.

Here's an example inline Server Action calling a Convex mutation:

Here's an example Route Handler calling a Convex mutation:

To make authenticated requests to Convex during server rendering, pass a JWT token to preloadQuery or fetchQuery in the third options argument:

The implementation of getAuthToken depends on your authentication provider.

Convex hooks used by Client Components are configured via the ConvexReactClient constructor, as shown in the Next.js Quickstart.

To use preloadQuery, fetchQuery, fetchMutation and fetchAction in Server Components, Server Actions and Route Handlers you must either:

preloadQuery and fetchQuery use the ConvexHTTPClient under the hood. This client is stateless. This means that two calls to preloadQuery are not guaranteed to return consistent data based on the same database state. This is similar to more traditional databases, but is different from the guaranteed consistency provided by the ConvexReactClient.

To prevent rendering an inconsistent UI avoid using multiple preloadQuery calls on the same page.

**Examples:**

Example 1 (tsx):
```tsx
import { preloadQuery } from "convex/nextjs";import { api } from "@/convex/_generated/api";import { Tasks } from "./Tasks";export async function TasksWrapper() {  const preloadedTasks = await preloadQuery(api.tasks.list, {    list: "default",  });  return <Tasks preloadedTasks={preloadedTasks} />;}
```

Example 2 (tsx):
```tsx
"use client";import { Preloaded, usePreloadedQuery } from "convex/react";import { api } from "@/convex/_generated/api";export function Tasks(props: {  preloadedTasks: Preloaded<typeof api.tasks.list>;}) {  const tasks = usePreloadedQuery(props.preloadedTasks);  // render `tasks`...  return <div>...</div>;}
```

Example 3 (tsx):
```tsx
import { fetchQuery } from "convex/nextjs";import { api } from "@/convex/_generated/api";export async function StaticTasks() {  const tasks = await fetchQuery(api.tasks.list, { list: "default" });  // render `tasks`...  return <div>...</div>;}
```

Example 4 (tsx):
```tsx
import { api } from "@/convex/_generated/api";import { fetchMutation, fetchQuery } from "convex/nextjs";import { revalidatePath } from "next/cache";export default async function PureServerPage() {  const tasks = await fetchQuery(api.tasks.list, { list: "default" });  async function createTask(formData: FormData) {    "use server";    await fetchMutation(api.tasks.create, {      text: formData.get("text") as string,    });    revalidatePath("/example");  }  // render tasks and task creation form  return <form action={createTask}>...</form>;}
```

---

## Next.js Pages Router

**URL:** https://docs.convex.dev/client/nextjs/pages-router/

**Contents:**
- Next.js Pages Router
- Getting started​
- Adding client-side authentication​
- API routes​
- Server-side rendering​

This pages covers the Pages Router variant of Next.js. Alternatively see the App Router version of this page.

Follow the Next.js Pages Router Quickstart to add Convex to a new or existing Next.js project.

The simplest approach to authentication in Next.js is to keep it client-side.

For example Auth0 describes this approach in Next.js Authentication with Auth0 guide, describing it in "Next.js Static Site Approach" and "Serverless with the user on the frontend".

To require login on every page of your application you can add logic to _app.jsx to conditionally render page content, blocking it until the user is logged in.

If you're using Auth0, the helper component ConvexProviderWithAuth0 can be imported from convex/react-auth0.

Custom loading and logged out views can be built with the helper Authenticated, Unauthenticated and AuthLoading components from convex/react, see the Convex Next.js demo for an example.

If only some routes of your app require login, the same helpers can be used directly in page components that do require login instead of being shared between all pages from pages/_app.jsx. Share a single ConvexReactClient instance between pages to avoid needing to reconnect to Convex on client-side page navigation.

Read more about authenticating users with Convex in Authentication.

Next.js supports building HTTP request handling routes, similar to Convex HTTP Actions. Using Next.js routes might be helpful if you need to use a dependency not supported by the Convex default runtime.

To build an API route add a file to the pages/api directory.

To load and edit Convex data in your endpoints, use the fetchQuery function from convex/nextjs:

Consider client-side rendering Convex data when using Next.js. Data from Convex is fully reactive so Convex needs a connection from your deployment to the browser in order to push updates as data changes.

You can of course load data from Convex in getStaticProps or getServerSideProps, but it will be non-reactive. To do this, use the fetchQuery function to call query functions just like you would in API routes.

To make authenticated requests to Convex during server-side rendering, you need authentication info present server-side. Auth0 describes this approach in Serverless with the user on the backend. When server-side rendering, pass the authentication token as token to the third argument of fetchQuery.

To preload data on server side before rendering a reactive query on the client side use preloadQuery. Check out the App Router version of these docs for more details.

**Examples:**

Example 1 (jsx):
```jsx
import { ConvexReactClient } from "convex/react";import { ConvexProviderWithAuth0 } from "convex/react-auth0";import { Auth0Provider } from "@auth0/auth0-react";import { AppProps } from "next/app";const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);export default function MyApp({ Component, pageProps }: AppProps) {  return (    <Auth0Provider      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}      authorizationParams={{        redirect_uri:          typeof window === "undefined" ? undefined : window.location.origin,      }}      useRefreshTokens={true}      cacheLocation="localstorage"    >      <ConvexProviderWithAuth0 client={convex}>        <Component {...pageProps} />      </ConvexProviderWithAuth0>    </Auth0Provider>  );}
```

Example 2 (js):
```js
import type { NextApiRequest, NextApiResponse } from "next";import { fetchQuery } from "convex/nextjs";import { api } from "../../convex/_generated/api";export const count = async function handler(  _req: NextApiRequest,  res: NextApiResponse,) {  const clicks = await fetchQuery(api.counter.get, { counterName: "clicks" });  res.status(200).json({ clicks });};
```

---

## Script Tag

**URL:** https://docs.convex.dev/client/javascript/script-tag

**Contents:**
- Script Tag

Sometimes you just want to get your data on a web page: no installing packages, no build steps, no TypeScript. Subscribing to queries deployed to an existing Convex deployment from a script tag is simple.

VS Code doesn't support TypeScript autocompletion in HTML files so for types and better autocompletion you can split your code out into a script file:

See the Script Tag Quickstart for instructions for setting up a new Convex project.

**Examples:**

Example 1 (html):
```html
<!doctype html><script src="https://unpkg.com/convex@1.3.1/dist/browser.bundle.js"></script><script>  const CONVEX_URL = "CONVEX_URL_GOES_HERE";  const client = new convex.ConvexClient(CONVEX_URL);  client.onUpdate("messages:list", {}, (messages) =>    console.log(messages.map((msg) => msg.body)),  );</script>
```

Example 2 (html):
```html
<!doctype html><form>  <input placeholder="type here" /></form><div class="messages"></div><script src="https://unpkg.com/convex@1.3.1/dist/browser.bundle.js"></script><!--VS Code TypeScript autocompletion doesn't work in HTML files so use a file--><script src="./script.js"></script>
```

Example 3 (js):
```js
const CONVEX_URL = "CONVEX_URL_GOES_HERE";// These JSDoc type annotations help VS Code find types./** @type {import("convex/browser")["ConvexClient"]} */const ConvexClient = convex.ConvexClient;const client = new ConvexClient(CONVEX_URL);/** @type {import("./convex/_generated/api")["api"]} */const api = convex.anyApi;client.onUpdate(api.messages.list, {}, (messages) => {  console.log(messages);  const container = document.querySelector(".messages");  container.innerHTML = "";  for (const message of messages.reverse()) {    const li = document.createElement("li");    li.textContent = `${message.author}: ${message.body}`;    container.appendChild(li);  }});document.querySelector("form").addEventListener("submit", (e) => {  e.preventDefault();  const inp = e.target.querySelector("input");  client.mutation(api.messages.send, {    body: inp.value,    author: "me",  });  inp.value = "";});
```

---

## Next.js

**URL:** https://docs.convex.dev/client/nextjs

**Contents:**
- Next.js
- Getting started​
- Calling Convex functions from client code​
- Convex React library documentation
- Server rendering (SSR)​
- Adding authentication​
  - Client-side only​
  - Server and client side​
    - Clerk​
    - Auth0​

Next.js is a React web development framework. When used with Convex, Next.js provides:

This page covers the App Router variant of Next.js. Alternatively see the Pages Router version of this page.

Follow the Next.js Quickstart to add Convex to a new or existing Next.js project.

To fetch and edit the data in your database from client code, use hooks of the Convex React library.

Next.js automatically renders both Client and Server Components on the server during the initial page load.

To keep your UI automatically reactive to changes in your Convex database it needs to use Client Components. The ConvexReactClient will maintain a connection to your deployment and will get updates as data changes and that must happen on the client.

See the dedicated Server Rendering page for more details about preloading data for Client Components, fetching data and authentication in Server Components, and implementing Route Handlers.

The simplest way to add user authentication to your Next.js app is to follow our React-based authentication guides for Clerk or Auth0, inside your app/ConvexClientProvider.tsx file. For example this is what the file would look like for Auth0:

Custom loading and logged out views can be built with the helper Authenticated, Unauthenticated and AuthLoading components from convex/react, see the Convex Next.js demo for an example.

If only some routes of your app require login, the same helpers can be used directly in page components that do require login instead of being shared between all pages from app/ConvexClientProvider.tsx. Share a single ConvexReactClient instance between pages to avoid needing to reconnect to Convex on client-side page navigation.

To access user information or load Convex data requiring ctx.auth from Server Components, Server Actions, or Route Handlers you need to use the Next.js specific SDKs provided by Clerk and Auth0.

Additional .env.local configuration is needed for these hybrid SDKs.

For an example of using Convex and with Next.js 15, run

npm create convex@latest -- -t nextjs-clerk

Otherwise, follow the Clerk Next.js quickstart, a guide from Clerk that includes steps for adding NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to the .env.local file. In Next.js 15, the <ClerkProvider> component imported from the @clerk/nextjs v6 package functions as both a client and a server context provider so you probably won't need the ClerkProvider from @clerk/clerk-react.

See the Auth0 Next.js guide.

Convex uses JWT identity tokens on the client for live query subscriptions and running mutations and actions, and on the Next.js backend for running queries, mutations, and actions in server components and API routes.

Obtain the appropriate OpenID Identity JWT in both locations and you should be able to use any auth provider. See Custom Auth for more.

**Examples:**

Example 1 (tsx):
```tsx
"use client";import { Auth0Provider } from "@auth0/auth0-react";import { ConvexReactClient } from "convex/react";import { ConvexProviderWithAuth0 } from "convex/react-auth0";import { ReactNode } from "react";const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);export function ConvexClientProvider({ children }: { children: ReactNode }) {  return (    <Auth0Provider      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}      authorizationParams={{        redirect_uri:          typeof window === "undefined" ? undefined : window.location.origin,      }}      useRefreshTokens={true}      cacheLocation="localstorage"    >      <ConvexProviderWithAuth0 client={convex}>        {children}      </ConvexProviderWithAuth0>    </Auth0Provider>  );}
```

---

## Vue

**URL:** https://docs.convex.dev/client/vue

**Contents:**
- Vue

Vue is an "approachable, performant and versatile framework for building web user interfaces."

The community-maintained convex-vue npm package is a Vue.js integration library for Convex. It also powers convex-nuxt.

See the Vue Quickstart to get started or the convex-vue GitHub page for more documentation.

The convex-vue library is community-maintained. Thank you to the maintainer Chris Visser for his work on this project!

You're welcome to ask questions about the library on the Convex Discord but opening a convex-vue GitHub issue is a better way to request a new feature or report a bug.

---

## Android Kotlin

**URL:** https://docs.convex.dev/client/android

**Contents:**
- Android Kotlin
- Installation​
- Connecting to a backend​
- Fetching data​
  - Query arguments​
  - Subscription lifetime​
- Editing data​
- Calling third-party APIs​
- Authentication with Auth0​
- Production and dev deployments​

Convex Android client library enables your Android application to interact with your Convex backend. It allows your frontend code to:

The library is open source and available on GitHub.

Follow the Android Quickstart to get started.

You'll need to make the following changes to your app's build.gradle[.kts] file.

After that, sync Gradle to pick up those changes. Your app will now have access to the Convex for Android library as well as Kotlin's JSON serialization which is used to communicate between your code and the Convex backend.

The ConvexClient is used to establish and maintain a connect between your application and the Convex backend. First you need to create an instance of the client by giving it your backend deployment URL:

You should create and use one instance of the ConvexClient for the lifetime of your application process. It can be convenient to create a custom Android Application subclass and initialize it there:

Once you've done that, you can access the client from a Jetpack Compose @Composable function like this:

Convex for Android gives you access to the Convex reactor, which enables real-time subscriptions to query results. You subscribe to queries with the subscribe method on ConvexClient which returns a Flow. The contents of the Flow will change over time as the underlying data backing the query changes.

All methods on ConvexClient suspend, and need to be called from a CoroutineScope or another suspend function. A simple way to consume a query that returns a list of strings from a @Composable is to use a combination of mutable state containing a list and LaunchedEffect:

Any time the data that powers the backend "workouts:get" query changes, a new Result<List<String>> will be emitted into the Flow and the workouts list will refresh with the new data. Any UI that uses workouts will then rebuild, giving you a fully reactive UI.

Note: you may prefer to put the subscription logic wrapped a Repository as described in the Android architecture patterns.

You can pass arguments to subscribe and they will be supplied to the associated backend query function. The arguments are typed as Map<String, Any?>. The values in the map must be primitive values or other maps and lists.

Assuming a backend query that accepts a favoriteColors argument, the value can be received and used to perform logic in the query function.

Use serializable Kotlin Data classes to automatically convert Convex objects to Kotlin model classes.

The Flow returned from subscribe will persist as long as something is waiting to consume results from it. When a @Composable or ViewModel with a subscription goes out of scope, the underlying query subscription to Convex will be canceled.

You can use the mutation method on ConvexClient to trigger a backend mutation.

You'll need to use it in another suspend function or a CoroutineScope. Mutations can return a value or not. If you expect a type in the response, indicate it in the call signature.

Mutations can also receive arguments, just like queries. Here's an example of returning a type from a mutation with arguments:

If an error occurs during a call to mutation, it will throw an exception. Typically you may want to catch ConvexError and ServerError and handle them however is appropriate in your application. See documentation on error handling for more details.

You can use the action method on ConvexClient to trigger a backend action.

Calls to action can accept arguments, return values and throw exceptions just like calls to mutation.

Even though you can call actions from Android, it's not always the right choice. See the action docs for tips on calling actions from clients.

You can use ConvexClientWithAuth in place of ConvexClient to configure authentication with Auth0. You'll need the convex-android-auth0 library to do that, as well as an Auth0 account and application configuration.

See the README in the convex-android-auth0 repo for more detailed setup instructions, and the Workout example app which is configured for Auth0. The overall Convex authentication docs are a good resource as well.

It should also be possible to integrate other similar OpenID Connect authentication providers. See the AuthProvider interface in the convex-mobile repo for more info.

When you're ready to move toward production for your app, you can setup your Android build system to point different builds or flavors of your application to different Convex deployments. One fairly simple way to do it is by passing different values (e.g. deployment URL) to different build targets or flavors.

Here's a simple example that shows using different deployment URLs for release and debug builds:

Then you can build your ConvexClient using a single resource in code, and it will get the right value at compile time.

You may not want these urls checked into your repository. One pattern is to create a custom my_app.properties file that is configured to be ignored in your .gitignore file. You can then read this file in your build.gradle.kts file. You can see this pattern in use in the workout sample app.

The examples shown in this guide are intended to be brief, and don't provide guidance on how to structure a whole application.

The official Android application architecture docs cover best practices for building applications, and Convex also has a sample open source application that attempts to demonstrate what a small multi-screen application might look like.

In general, do the following:

ConvexClient is an open class so it can be mocked or faked in unit tests. If you want to use more of the real client, you can pass a fake MobileConvexClientInterface in to the ConvexClient constructor. Just be aware that you'll need to provide JSON in Convex's undocumented JSON format.

You can also use the full ConvexClient in Android instrumentation tests. You can setup a special backend instance for testing or run a local Convex server and run full integration tests.

Convex for Android is built on top of the official Convex Rust client. It handles maintaining a WebSocket connection with the Convex backend and implements the full Convex protocol.

All method calls on ConvexClient are handled via a Tokio async runtime on the Rust side and are safe to call from the application's main thread.

ConvexClient also makes heavy use of Kotlin's serialization framework, and most of the functionality in that framework is available for you to use in your applications. Internally, ConvexClient enables the JSON ignoreUnknownKeys and allowSpecialFloatingPointValues features.

**Examples:**

Example 1 (kotlin):
```kotlin
plugins {    // ... existing plugins    kotlin("plugin.serialization") version "1.9.0"}dependencies {    // ... existing dependencies    implementation("dev.convex:android-convexmobile:0.4.1@aar") {        isTransitive = true    }    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")}
```

Example 2 (kotlin):
```kotlin
package com.example.convexappimport dev.convex.android.ConvexClientval convex = ConvexClient("https://<your domain here>.convex.cloud")
```

Example 3 (kotlin):
```kotlin
package com.example.convexappimport android.app.Applicationimport dev.convex.android.ConvexClientclass MyApplication : Application() {    lateinit var convex: ConvexClient    override fun onCreate() {        super.onCreate()        convex = ConvexClient("https://<your domain here>.convex.cloud")    }}
```

Example 4 (kotlin):
```kotlin
val convex = (application as MyApplication).convex
```

---

## Bun

**URL:** https://docs.convex.dev/client/javascript/bun

**Contents:**
- Bun
- Using Convex with Bun without codegen​

Bun can be used to run scripts and servers that use Convex clients and can even run the Convex CLI.

Convex supports point-in-time queries, mutations and actions (see HTTP client) and those plus query subscriptions (see ConvexClient) in Bun.

You can always use the anyApi object or strings if you don't have the Convex functions and api file handy. An api reference like api.folder.file.exportName becomes anyApi.folder.file.exportName or "folder/file:exportName".

**Examples:**

Example 1 (js):
```js
import { ConvexHttpClient, ConvexClient } from "convex/browser";import { api } from "./convex/_generated/api.js";// HTTP clientconst httpClient = new ConvexHttpClient(process.env.CONVEX_URL);httpClient.query(api.messages.list).then((messages) => {  console.log(messages);});// Subscription clientconst client = new ConvexClient(process.env.CONVEX_URL);const unsubscribe = client.onUpdate(api.messages.list, {}, (messages) =>  console.log(messages),);await Bun.sleep(1000);client.mutate(api.messages.send, {}, { body: "hello!", author: "me" });await Bun.sleep(1000);
```

---
