# Convex - Quickstart

**Pages:** 16

---

## Remix Quickstart

**URL:** https://docs.convex.dev/quickstart/remix

**Contents:**
- Remix Quickstart

Learn how to query data from Convex in a Remix app.

Create a Remix site using the npx create-remix@latest command.

To get started, install the convex package.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

Create a sampleData.jsonl file at the root of you app and fill it with the sample data given.

Now that your project is ready, add a tasks table with the sample data you just created in sampleData.jsonl into your Convex database with the import command.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

Modify app/root.tsx to set up the Convex client there to make it available on every page of your app.

In app/routes/_index.tsx use useQuery to subscribe your api.tasks.get API function.

Start the app, open http://localhost:5173 in a browser, and see the list of tasks.

Remix uses the React web library. See the complete React documentation.

**Examples:**

Example 1 (sh):
```sh
npx create-remix@latest my-remix-app
```

Example 2 (sh):
```sh
cd my-remix-app && npm install convex
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

## iOS Swift Quickstart

**URL:** https://docs.convex.dev/quickstart/swift

**Contents:**
- iOS Swift Quickstart

Learn how to query data from Convex in an application targeting iOS and MacOS devices built with Swift and SwiftUI.

This quickstart assumes that you have a Mac with Xcode, node and npm installed. If you don’t have those tools, take time to install them first.

Open a terminal and cd to the directory for the Xcode project you created. Run the following commands to install the Convex client and server library.

Start a Convex dev deployment. Follow the command line instructions to create a new project.

Create a new sampleData.jsonl file in your Swift project directory with these contents

Open another terminal tab by pressing ⌘+T which should open in your Swift project directory and run

Create a tasks.ts file in the convex/ directory within your Swift project with the following contents

Back in Xcode, create a struct at the bottom of the ContentView file to match the sample data

Replace the default ContentView with the following code that will refresh the list of todo items whenever the backend data changes.

See the complete iOS Swift documentation.

**Examples:**

Example 1 (text):
```text
https://github.com/get-convex/convex-swift
```

Example 2 (bash):
```bash
npm init -ynpm install convex
```

Example 3 (bash):
```bash
npx convex dev
```

Example 4 (json):
```json
{"text": "Buy groceries", "isCompleted": true}{"text": "Go for a swim", "isCompleted": true}{"text": "Integrate Convex", "isCompleted": false}
```

---

## React Quickstart

**URL:** https://docs.convex.dev/quickstart/react

**Contents:**
- React Quickstart

To get setup quickly with Convex and React run

npm create convex@latest

or follow the guide below.

Learn how to query data from Convex in a React app using Vite and

Create a React app using the create vite command.

To get started, install the convex package which provides a convenient interface for working with Convex from a React app.

Navigate to your app directory and install convex.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file schema.ts in the convex/ folder with a description of your data.

This will declare the types of your data for optional typechecking with TypeScript, and it will be also enforced at runtime.

Alternatively remove the line 'plugin:@typescript-eslint/recommended-requiring-type-checking', from the .eslintrc.cjs file to lower the type checking strictness.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In src/main.tsx, create a ConvexReactClient and pass it to a ConvexProvider wrapping your app.

In src/App.tsx, use the useQuery hook to fetch from your api.tasks.get API function and display the data.

Start the app, open http://localhost:5173/ in a browser, and see the list of tasks.

See the complete React documentation.

**Examples:**

Example 1 (sh):
```sh
npm create vite@latest my-app -- --template react-ts
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

## TanStack Start Quickstart

**URL:** https://docs.convex.dev/quickstart/tanstack-start

**Contents:**
- TanStack Start Quickstart

TanStack Start is a new React framework currently in the Release Candidate stage. You can try it today but there might still be bug or issues.

To get setup quickly with Convex and TanStack Start run

npm create convex@latest -- -t tanstack-start

or follow the guide below.

To use Clerk with Convex and TanStack Start, see the TanStack Start + Clerk guide

Learn how to query data from Convex in a TanStack Start site.

Create a TanStack Start app using the create-start-app command:

To get started with Convex install the convex package and a few React Query-related packages.

Add a QueryClient to the router context to make React Query usable anywhere in the TanStack Start site.

Replace the file app/router.tsx with these contents.

This creates a ConvexClient and a ConvexQueryClient and wires in a ConvexProvider.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

Replace the file app/routes/index.tsx with these contents.

The useSuspenseQuery hook renders the API function api.tasks.get query result on the server initially, then it updates live in the browser.

Start the app, open http://localhost:3000 in a browser, and see the list of tasks.

For more see the TanStack Start with Convex client documentation page.

**Examples:**

Example 1 (sh):
```sh
npx create-start-app@latest
```

Example 2 (sh):
```sh
npm install convex @convex-dev/react-query @tanstack/react-router-with-query @tanstack/react-query
```

Example 3 (tsx):
```tsx
import { QueryClient } from "@tanstack/react-query";import { createRootRouteWithContext } from "@tanstack/react-router";import { Outlet, Scripts, HeadContent } from "@tanstack/react-router";import * as React from "react";export const Route = createRootRouteWithContext<{  queryClient: QueryClient;}>()({  head: () => ({    meta: [      {        charSet: "utf-8",      },      {        name: "viewport",        content: "width=device-width, initial-scale=1",      },      {        title: "TanStack Start Starter",      },    ],  }),  component: RootComponent,});function RootComponent() {  return (    <RootDocument>      <Outlet />    </RootDocument>  );}function RootDocument({ children }: { children: React.ReactNode }) {  return (    <html>      <head>        <HeadContent />      </head>      <body>        {children}        <Scripts />      </body>    </html>  );}
```

Example 4 (tsx):
```tsx
import { createRouter } from "@tanstack/react-router";import { QueryClient } from "@tanstack/react-query";import { routerWithQueryClient } from "@tanstack/react-router-with-query";import { ConvexQueryClient } from "@convex-dev/react-query";import { ConvexProvider } from "convex/react";import { routeTree } from "./routeTree.gen";export function getRouter() {  const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL!;  if (!CONVEX_URL) {    console.error("missing envar VITE_CONVEX_URL");  }  const convexQueryClient = new ConvexQueryClient(CONVEX_URL);  const queryClient: QueryClient = new QueryClient({    defaultOptions: {      queries: {        queryKeyHashFn: convexQueryClient.hashFn(),        queryFn: convexQueryClient.queryFn(),      },    },  });  convexQueryClient.connect(queryClient);  const router = routerWithQueryClient(    createRouter({      routeTree,      defaultPreload: "intent",      context: { queryClient },      scrollRestoration: true,      Wrap: ({ children }) => (        <ConvexProvider client={convexQueryClient.convexClient}>          {children}        </ConvexProvider>      ),    }),    queryClient,  );  return router;}
```

---

## Android Kotlin Quickstart

**URL:** https://docs.convex.dev/quickstart/android

**Contents:**
- Android Kotlin Quickstart

Learn how to query data from Convex in a Android Kotlin project.

This quickstart assumes that you have Android Studio, node and npm installed. If you don’t have those tools, take time to install them first.

Choose the following options in the wizard.

Add the following to your AndroidManifest.xml.

Add the following entries to the :app build.gradle.kts file (ignore IDE suggestion to move them to version catalog for now, if present).

Ensure that you sync Gradle when all of the above is complete (Android Studio should prompt you to do so).

Open a terminal in your Android Studio instance and install the Convex client and server library.

Start a Convex dev deployment. Follow the command line instructions.

Create a new sampleData.jsonl file with these contents.

Open another terminal tab and run.

Create a tasks.ts file in your convex/ directory with the following contents.

Add a new data class to your MainActivity to support the task data defined above. Import whatever it asks you to.

Delete the template @Composable functions that Android Studio created and add a new one to display data from your Convex deployment. Again, import whatever it asks you to.

Fix up any missing imports (your import declarations should look something like this):

You can also try adding, updating or deleting documents in your tasks table at dashboard.convex.dev - the app will update with the changes in real-time.

See the complete Android Kotlin documentation.

**Examples:**

Example 1 (text):
```text
1. Choose the "Empty Activity" template2. Name it "Convex Quickstart"3. Choose min SDK as 264. Choose Kotlin as the Gradle DSL
```

Example 2 (xml):
```xml
<?xml version="1.0" encoding="utf-8"?><manifest xmlns:android="http://schemas.android.com/apk/res/android"    xmlns:tools="http://schemas.android.com/tools">    <uses-permission android:name="android.permission.INTERNET"/>    <application>        <!-- ... existing application contents -->    </application></manifest>
```

Example 3 (kotlin):
```kotlin
plugins {    // ... existing plugins    kotlin("plugin.serialization") version "1.9.0"}dependencies {    // ... existing dependencies    implementation("dev.convex:android-convexmobile:0.4.1@aar") {        isTransitive = true    }    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")}
```

Example 4 (bash):
```bash
npm init -ynpm install convex
```

---

## Next.js Quickstart

**URL:** https://docs.convex.dev/quickstart/nextjs

**Contents:**
- Next.js Quickstart

Convex is an all-in-one backend and database that integrates quickly and easily with Next.js.

Once you've gotten started, see how to set up hosting, server rendering, and auth.

To get setup quickly with Convex and Next.js run

npm create convex@latest

or follow the guide below.

Learn how to query data from Convex in a Next.js app using the App Router and

Alternatively see the Pages Router version of this quickstart.

Create a Next.js app using the npx create-next-app command.

Choose the default option for every prompt (hit Enter).

To get started, install the convex package.

Navigate to your app and install convex.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Use the import command to add a tasks table with the sample data into your Convex database.

In the convex/ folder, add a new file tasks.ts with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name: api.tasks.get.

For <ConvexProvider> to work on the client, ConvexReactClient must be passed to it.

In the app/ folder, add a new file ConvexClientProvider.tsx with the following code. This creates a client component that wraps <ConvexProvider> and passes it the <ConvexReactClient>.

In app/layout.tsx, wrap the children of the body element with the <ConvexClientProvider>.

In app/page.tsx, use the useQuery() hook to fetch from your api.tasks.get API function.

Run your Next.js development server, open http://localhost:3000 in a browser, and see the list of tasks.

See the complete Next.js documentation.

**Examples:**

Example 1 (sh):
```sh
npx create-next-app@latest my-app
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

## Python Quickstart

**URL:** https://docs.convex.dev/quickstart/python

**Contents:**
- Python Quickstart

Learn how to query data from Convex in a Python app.

Create a folder for your Python script with a virtual environment.

To get started, install the convex npm package which enables you to write your backend.

And also install the convex Python client library and python-dotenv for working with .env files.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, "tasks:get".

In a new file main.py, create a ConvexClient and use it to fetch from your "tasks:get" API.

Run the script and see the serialized list of tasks.

See the docs on PyPI for more details.

**Examples:**

Example 1 (sh):
```sh
python3 -m venv my-app/venv
```

Example 2 (sh):
```sh
cd my-app && npm init -y && npm install convex && venv/bin/pip install convex python-dotenv
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

## Quickstarts

**URL:** https://docs.convex.dev/quickstarts

**Contents:**
- Quickstarts
- React
- Next.js
- Remix
- TanStack Start
- React Native
- Vue
- Nuxt
- Svelte
- Node.js

Quickly get up and running with your favorite frontend tooling:

Quickly get up and running with your favorite languages:

---

## Vue Quickstart

**URL:** https://docs.convex.dev/quickstart/vue

**Contents:**
- Vue Quickstart

Learn how to query data from Convex in a Vue app.

This quickstart guide uses a community-maintained Vue client for Convex.

Create a Vue site using the npm create vue@latest my-vue-app command.

Convex will work with any set of options but to follow this quickstart most closely choose:

To get started, install the convex package.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In src/main.ts set up the Convex client there to make it available on every page of your app.

In src/App.vue use useQuery to subscribe your api.tasks.get API function.

Start the app, open http://localhost:5173 in a browser, and see the list of tasks.

See the complete Vue npm package documentation.

**Examples:**

Example 1 (sh):
```sh
npm create vue@latest my-vue-app
```

Example 2 (sh):
```sh
cd my-vue-app && npm install convex-vue
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

## Svelte Quickstart

**URL:** https://docs.convex.dev/quickstart/svelte

**Contents:**
- Svelte Quickstart

Learn how to query data from Convex in a Svelte app.

Create a SvelteKit app using the npx sv create command.

Other sets of options will work with the library but for this quickstart guide:

To get started, install the convex and convex-svelte packages.

SvelteKit doesn't like referencing code outside of source, so customize the convex functionsDir to be under src/.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a src/convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

Create a new file src/routes/+layout.svelte and set up the Convex client there to make it available on every page of your app.

In src/routes/+page.svelte use useQuery to subscribe your api.tasks.get API function.

Start the app, open http://localhost:5173 in a browser, and see the list of tasks.

See the Svelte npm package documentation.

**Examples:**

Example 1 (sh):
```sh
npx sv@latest create my-app
```

Example 2 (sh):
```sh
cd my-app && npm install convex convex-svelte
```

Example 3 (json):
```json
{	"functions": "src/convex/"}
```

Example 4 (sh):
```sh
npx convex dev
```

---

## Rust Quickstart

**URL:** https://docs.convex.dev/quickstart/rust

**Contents:**
- Rust Quickstart

Learn how to query data from Convex in a Rust app with Tokio.

Create a new Cargo project.

To get started, install the convex npm package which enables you to write your backend.

And also install the convex Rust client library, the tokio runtime, and dotenvy for working with .env files.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, "tasks:get".

In the file src/main.rs, create a ConvexClient and use it to fetch from your "tasks:get" API.

Run the app and see the serialized list of tasks.

See the complete Rust documentation.

**Examples:**

Example 1 (sh):
```sh
cargo new my_appcd my_app
```

Example 2 (sh):
```sh
npm init -y && npm install convex && cargo add convex tokio dotenvy
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

## Node.js Quickstart

**URL:** https://docs.convex.dev/quickstart/nodejs

**Contents:**
- Node.js Quickstart

Learn how to query data from Convex in a Node.js project.

For instructions for subscriptions instead of point-in-time queries and more project configurations (TypeScript, bundlers, CJS vs ESM) see Node.js notes.

Create a new directory for your Node.js project.

Install the convex package which provides a convenient interface for working with Convex from JavaScript.

Also install the dotenv library for loading .env files.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In a new file script.js, create a ConvexHttpClient using the URL of your development environment.

Run the script from the same directory and see the list of tasks logged to the terminal.

See the complete Node.js documentation.

**Examples:**

Example 1 (sh):
```sh
mkdir my-project && cd my-project && npm init -y && npm pkg set type="module"
```

Example 2 (sh):
```sh
npm install convex dotenv
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

## Script Tag Quickstart

**URL:** https://docs.convex.dev/quickstart/script-tag

**Contents:**
- Script Tag Quickstart

Learn how to query data from Convex from script tags in HTML.

Create a new directory for your Convex project.

Install the convex package which provides a convenient interface for working with Convex from JavaScript.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

Open the .env.local file and copy the CONVEX_URL of your development environment for use in the HTML file.

In a new file index.html, create a ConvexClient using the URL of your development environment.

Open this file in a web browser and you'll see it run each time the tasks table is modified.

See the complete Script Tag documentation.

**Examples:**

Example 1 (sh):
```sh
mkdir my-project && cd my-project && npm init -y
```

Example 2 (sh):
```sh
npm install convex
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

## React Native Quickstart

**URL:** https://docs.convex.dev/quickstart/react-native

**Contents:**
- React Native Quickstart

Learn how to query data from Convex in a React Native app.

Create a React Native app using the npx create-expo-app command.

To get started, install the convex package which provides a convenient interface for working with Convex from a React app.

Navigate to your app and install convex.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

Create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

If you haven't done so yet, reset the Expo project to get a fresh app directory.

In _layout.tsx, create a ConvexReactClient and pass it to a ConvexProvider wrapping your component tree.

In index.tsx use the useQuery hook to fetch from your api.tasks.get API.

Start the app, scan the provided QR code with your phone, and see the serialized list of tasks in the center of the screen.

React native uses the same library as React web. See the complete React documentation.

**Examples:**

Example 1 (sh):
```sh
npx create-expo-app my-app
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

## Nuxt Quickstart

**URL:** https://docs.convex.dev/quickstart/nuxt

**Contents:**
- Nuxt Quickstart

Learn how to query data from Convex in a Nuxt app.

This quickstart guide uses a community-maintained Nuxt client for Convex.

Create a Nuxt application using the npm create nuxt@latest my-nuxt-app command.

Convex will work with any of the official modules but to follow this quickstart skip installing them for now.

To get started, install the convex package and the convex-nuxt module to your Nuxt application.

Add the Convex URL to your nuxt.config.ts file.

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file schema.ts in the convex/ folder with a description of your data.

This will declare the types of your data for optional typechecking with TypeScript, and it will be also enforced at runtime.

Add a new file tasks.ts in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In app.vue use useQuery to subscribe your api.tasks.get API function.

By default, Convex stores environment variables in .env.local, and Nuxt looks for environment variables in .env.

To use the default npm run dev command, update your package.json to use the --dotenv .env.local flag.

Start the app, open http://localhost:3000 in a browser, and see the list of tasks.

For more examples, take a look at the Nuxt Convex module repository.

See the complete Nuxt npm package documentation.

**Examples:**

Example 1 (sh):
```sh
npm create nuxt@latest my-nuxt-app
```

Example 2 (sh):
```sh
cd my-nuxt-app && npm install convex && npx nuxi module add convex-nuxt
```

Example 3 (ts):
```ts
export default defineNuxtConfig({  compatibilityDate: '2025-07-15',  devtools: { enabled: true },  modules: ['convex-nuxt'],  convex: {    url: process.env.CONVEX_URL  },})
```

Example 4 (sh):
```sh
npx convex dev
```

---

## Using Convex with Bun

**URL:** https://docs.convex.dev/quickstart/bun

**Contents:**
- Using Convex with Bun

Learn how to query data from Convex in a Bun project.

For instructions for subscriptions instead of point-in-time queries see Bun notes.

Create a new directory for your Bun project.

Install the convex package.

Next, run bunx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.

It will also create a convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

In a new terminal window, create a sampleData.jsonl file with some sample data.

Now that your project is ready, add a tasks table with the sample data into your Convex database with the import command.

Add a new file tasks.js in the convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

In a new file index.ts, create a ConvexClient using the URL of your development environment.

Run the script from the same directory and see the list of tasks logged to the terminal.

See the complete Bun documentation.

**Examples:**

Example 1 (sh):
```sh
mkdir my-project && cd my-project && bun init -y
```

Example 2 (sh):
```sh
bun add convex
```

Example 3 (sh):
```sh
bunx convex dev
```

Example 4 (json):
```json
{"text": "Buy groceries", "isCompleted": true}{"text": "Go for a swim", "isCompleted": true}{"text": "Integrate Convex", "isCompleted": false}
```

---
