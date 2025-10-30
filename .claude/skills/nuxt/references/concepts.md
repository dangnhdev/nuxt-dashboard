# Nuxt - Concepts

**Pages:** 9

---

## useRequestURL

**URL:** llms-txt#userequesturl

`useRequestURL` is a helper function that returns an [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL){rel="nofollow"} working on both server-side and client-side.

::important
When utilizing [Hybrid Rendering](https://nuxt.com/docs/3.x/guide/concepts/rendering#hybrid-rendering) with cache strategies, all incoming request headers are dropped when handling the cached responses via the [Nitro caching layer](https://nitro.build/guide/cache){rel="nofollow"} (meaning `useRequestURL` will return `localhost` for the `host`).

You can define the [`cache.varies` option](https://nitro.build/guide/cache#options){rel="nofollow"} to specify headers that will be considered when caching and serving the responses, such as `host` and `x-forwarded-host` for multi-tenant environments.
::

::tip
---
icon: i-simple-icons-mdnwebdocs
target: _blank
to: https://developer.mozilla.org/en-US/docs/Web/API/URL#instance_properties
---
Read about the URL instance properties on the MDN documentation.
::

**Examples:**

Example 1 (unknown):
```unknown

```

---

## Add Nuxt modules

**URL:** llms-txt#add-nuxt-modules

**Contents:**
- Global `.nuxtrc` File

modules[]=@nuxt/image
modules[]=nuxt-security
md
  ~/.nuxtrc
  md
  C:\Users\{username}\.nuxtrc
  ```

This global `.nuxtrc` file allows you to define default settings that apply to all Nuxt projects on your system. However, project-level `.nuxtrc` files will override these global settings, and `nuxt.config` will take precedence over both.

**Examples:**

Example 1 (unknown):
```unknown
If present, the properties in the `nuxt.config` file will overwrite the properties in `.nuxtrc` file.

::note
Nuxt automatically adds a `setups` section to track module installation and upgrade state. This is used internally for [module lifecycle hooks](https://nuxt.com/docs/3.x/api/kit/modules#using-lifecycle-hooks-for-module-installation-and-upgrade) and should not be modified manually.
::

::read-more{to="https://nuxt.com/docs/api/configuration/nuxt-config"}
Discover all the available options in the **Nuxt configuration** documentation.
::

## Global `.nuxtrc` File

You can also create a global `.nuxtrc` file in your home directory to apply configurations globally.

- On macOS/Linux, this file is located at:
```

Example 2 (unknown):
```unknown
- On Windows, it is located at:
```

---

## ES Modules

**URL:** llms-txt#es-modules

**Contents:**
- Background
  - CommonJS Modules
  - ESM Syntax
  - What is 'Native' ESM?
  - What Are Valid Imports in a Node.js Context?
  - What Kinds of Problems Can There Be?
- Troubleshooting ESM Issues
  - Transpiling Libraries
  - Aliasing Libraries
  - Default Exports

This guide helps explain what ES Modules are and how to make a Nuxt app (or upstream library) compatible with ESM.

CommonJS (CJS) is a format introduced by Node.js that allows sharing functionality between isolated JavaScript modules ([read more](https://nodejs.org/api/modules.html){rel="nofollow"}).
You might be already familiar with this syntax:

Bundlers like webpack and Rollup support this syntax and allow you to use modules written in CommonJS in the browser.

Most of the time, when people talk about ESM vs. CJS, they are talking about a different syntax for writing [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules){rel="nofollow"}.

Before ECMAScript Modules (ESM) became a standard (it took more than 10 years!), tooling like
[webpack](https://webpack.js.org/guides/ecma-script-modules){rel="nofollow"} and even languages like TypeScript started supporting so-called **ESM syntax**.
However, there are some key differences with actual spec; here's [a helpful explainer](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/){rel="nofollow"}.

### What is 'Native' ESM?

You may have been writing your app using ESM syntax for a long time. After all, it's natively supported by the browser, and in Nuxt 2 we compiled all the code you wrote to the appropriate format (CJS for server, ESM for browser).

When adding modules to your package, things were a little different. A sample library might expose both CJS and ESM versions, and let us pick which one we wanted:

So in Nuxt 2, the bundler (webpack) would pull in the CJS file ('main') for the server build and use the ESM file ('module') for the client build.

::note
The `module` field is a convention used by bundlers like webpack and Rollup, but is not recognized by Node.js itself. Node.js only uses the [`exports`](https://nodejs.org/api/packages.html#exports){rel="nofollow"} and [`main`](https://nodejs.org/api/packages.html#main){rel="nofollow"} fields for module resolution.
::

However, in recent Node.js LTS releases, it is now possible to [use native ESM module](https://nodejs.org/api/esm.html){rel="nofollow"} within Node.js. That means that Node.js itself can process JavaScript using ESM syntax, although it doesn't do it by default. The two most common ways to enable ESM syntax are:

- set `"type": "module"` within your `package.json` and keep using `.js` extension
- use the `.mjs` file extensions (recommended)

This is what we do for Nuxt Nitro; we output a `.output/server/index.mjs` file. That tells Node.js to treat this file as a native ES module.

### What Are Valid Imports in a Node.js Context?

When you `import` a module rather than `require` it, Node.js resolves it differently. For example, when you import `sample-library`, Node.js will look for the `exports` entry in that library's `package.json`, or fall back to the `main` entry if `exports` is not defined.

This is also true of dynamic imports, like `const b = await import('sample-library')`.

Node supports the following kinds of imports (see [docs](https://nodejs.org/api/packages.html#determining-module-system){rel="nofollow"}):

1. files ending in `.mjs` - these are expected to use ESM syntax
2. files ending in `.cjs` - these are expected to use CJS syntax
3. files ending in `.js` - these are expected to use CJS syntax unless their `package.json` has `"type": "module"`

### What Kinds of Problems Can There Be?

For a long time module authors have been producing ESM-syntax builds but using conventions like `.esm.js` or `.es.js`, which they have added to the `module` field in their `package.json`. This hasn't been a problem until now because they have only been used by bundlers like webpack, which don't especially care about the file extension.

However, if you try to import a package with an `.esm.js` file in a Node.js ESM context, it won't work, and you'll get an error like:

You might also get this error if you have a named import from an ESM-syntax build that Node.js thinks is CJS:

## Troubleshooting ESM Issues

If you encounter these errors, the issue is almost certainly with the upstream library. They need to [fix their library](https://nuxt.com/#library-author-guide) to support being imported by Node.

### Transpiling Libraries

In the meantime, you can tell Nuxt not to try to import these libraries by adding them to `build.transpile`:

You may find that you *also* need to add other packages that are being imported by these libraries.

### Aliasing Libraries

In some cases, you may also need to manually alias the library to the CJS version, for example:

A dependency with CommonJS format, can use `module.exports` or `exports` to provide a default export:

This normally works well if we `require` such dependency:

[Node.js in native ESM mode](https://nodejs.org/api/esm.html#interoperability-with-commonjs){rel="nofollow"}, [typescript with `esModuleInterop` enabled](https://www.typescriptlang.org/tsconfig#esModuleInterop){rel="nofollow"} and bundlers such as webpack, provide a compatibility mechanism so that we can default import such library.
This mechanism is often referred to as "interop require default":

However, because of the complexities of syntax detection and different bundle formats, there is always a chance that the interop default fails and we end up with something like this:

Also when using dynamic import syntax (in both CJS and ESM files), we always have this situation:

In this case, we need to manually interop the default export:

For handling more complex situations and more safety, we recommend and internally use [mlly](https://github.com/unjs/mlly){rel="nofollow"} in Nuxt that can preserve named exports.

## Library Author Guide

The good news is that it's relatively simple to fix issues of ESM compatibility. There are two main options:

1. **You can rename your ESM files to end with `.mjs`.**:br&#x2A;This is the recommended and simplest approach.* You may have to sort out issues with your library's dependencies and possibly with your build system, but in most cases, this should fix the problem for you. It's also recommended to rename your CJS files to end with `.cjs`, for the greatest explicitness.
2. **You can opt to make your entire library ESM-only**. :br This would mean setting `"type": "module"` in your `package.json` and ensuring that your built library uses ESM syntax. However, you may face issues with your dependencies - and this approach means your library can *only* be consumed in an ESM context.

The initial step from CJS to ESM is updating any usage of `require` to use `import` instead:

In ESM Modules, unlike CJS, `require`, `require.resolve`, `__filename` and `__dirname` globals are not available
and should be replaced with `import()` and `import.meta.filename`.

- Prefer named exports rather than default export. This helps reduce CJS conflicts. (see [Default exports](https://nuxt.com/#default-exports) section)
- Avoid depending on Node.js built-ins and CommonJS or Node.js-only dependencies as much as possible to make your library usable in Browsers and Edge Workers without needing Nitro polyfills.
- Use new `exports` field with conditional exports. ([read more](https://nodejs.org/api/packages.html#conditional-exports){rel="nofollow"}).

**Examples:**

Example 1 (js):
```js
const a = require('./a')

module.exports.a = a
```

Example 2 (js):
```js
import a from './a'

export { a }
```

Example 3 (json):
```json
{
  "name": "sample-library",
  "main": "dist/sample-library.cjs.js",
  "module": "dist/sample-library.esm.js"
}
```

Example 4 (unknown):
```unknown
You might also get this error if you have a named import from an ESM-syntax build that Node.js thinks is CJS:
```

---

## node_modules

**URL:** llms-txt#node_modules

The package manager ([`npm`](https://docs.npmjs.com/cli/commands/npm){rel="nofollow"} or [`yarn`](https://yarnpkg.com){rel="nofollow"} or [`pnpm`](https://pnpm.io/cli/install){rel="nofollow"} or [`bun`](https://bun.sh/package-manager){rel="nofollow"}) creates this directory to store the dependencies of your project.

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/guide/directory-structure/gitignore) file to avoid pushing the dependencies to your repository.
::

---

## Nuxt Guide

**URL:** llms-txt#nuxt-guide

::card-group{.sm:grid-cols-1}
  :::card
  ---
  icon: i-lucide-folders
  title: Directory Structure
  to: https://nuxt.com/docs/guide/directory-structure
  ---
  Learn about Nuxt directory structure and what benefits each directory or file offers.
  :::

:::card
  ---
  icon: i-lucide-medal
  title: Key Concepts
  to: https://nuxt.com/docs/guide/concepts
  ---
  Discover the main concepts behind Nuxt, from auto-import, hybrid rendering to its TypeScript support.
  :::

:::card
  ---
  icon: i-lucide-star
  title: Going Further
  to: https://nuxt.com/docs/guide/going-further
  ---
  Master Nuxt with advanced concepts like experimental features, hooks, modules, and more.
  :::

:::card
  ---
  icon: i-lucide-book-open
  title: Recipes
  to: https://nuxt.com/docs/guide/recipes
  ---
  Find solutions to common problems and learn how to implement them in your Nuxt project.
  :::

:::card
  ---
  icon: i-lucide-square-check
  title: Best Practices
  to: https://nuxt.com/docs/guide/best-practices
  ---
  Learn about best practices when developing with Nuxt
  :::
::

---

## tsconfig.json

**URL:** llms-txt#tsconfig.json

Nuxt [automatically generates](https://nuxt.com/docs/3.x/guide/concepts/typescript) a `.nuxt/tsconfig.json` file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults.

You can benefit from this by creating a `tsconfig.json` in the root of your project with the following content:

::note
As you need to, you can customize the contents of this file. However, it is recommended that you don't overwrite `target`, `module` and `moduleResolution`.
::

::note
If you need to customize your `paths`, this will override the auto-generated path aliases. Instead, we recommend that you add any path aliases you need to the [`alias`](https://nuxt.com/docs/3.x/api/nuxt-config#alias) property within your `nuxt.config`, where they will get picked up and added to the auto-generated `tsconfig`.
::

---

## Modules

**URL:** llms-txt#modules

**Contents:**
- Module Compatibility
  - Plugin Compatibility
  - Vue Compatibility
- Module Migration
  - Test with `@nuxt/bridge`
  - Migrate from CommonJS to ESM
  - Ensure Plugins Default Export
  - Avoid Runtime Modules
  - Use TypeScript (Optional)

## Module Compatibility

Nuxt 3 has a basic backward compatibility layer for Nuxt 2 modules using `@nuxt/kit` auto wrappers. But there are usually steps to follow to make modules compatible with Nuxt 3 and sometimes, using Nuxt Bridge is required for cross-version compatibility.

We have prepared a [Dedicated Guide](https://nuxt.com/docs/3.x/guide/going-further/modules) for authoring Nuxt 3 ready modules using `@nuxt/kit`. Currently best migration path is to follow it and rewrite your modules. Rest of this guide includes preparation steps if you prefer to avoid a full rewrite yet making modules compatible with Nuxt 3.

::tip{icon="i-lucide-puzzle" to="https://nuxt.com/modules"}
Explore Nuxt 3 compatible modules.
::

### Plugin Compatibility

Nuxt 3 plugins are **not** fully backward compatible with Nuxt 2.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

### Vue Compatibility

Plugins or components using the Composition API need exclusive Vue 2 or Vue 3 support.

By using [vue-demi](https://github.com/vueuse/vue-demi){rel="nofollow"} they should be compatible with both Nuxt 2 and 3.

When Nuxt 3 users add your module, you will not have access to the module container (`this.*`) so you will need to use utilities from `@nuxt/kit` to access the container functionality.

### Test with `@nuxt/bridge`

Migrating to `@nuxt/bridge` is the first and most important step for supporting Nuxt 3.

If you have a fixture or example in your module, add `@nuxt/bridge` package to its config (see [example](https://nuxt.com/docs/3.x/bridge/overview#update-nuxtconfig))

### Migrate from CommonJS to ESM

Nuxt 3 natively supports TypeScript and ECMAScript Modules. Please check [Native ES Modules](https://nuxt.com/docs/3.x/guide/concepts/esm) for more info and upgrading.

### Ensure Plugins Default Export

If you inject a Nuxt plugin that does not have `export default` (such as global Vue plugins), ensure you add `export default () => { }` to the end of it.

### Avoid Runtime Modules

With Nuxt 3, Nuxt is now a build-time-only dependency, which means that modules shouldn't attempt to hook into the Nuxt runtime.

Your module should work even if it's only added to [`buildModules`](https://nuxt.com/docs/3.x/api/nuxt-config#runtimeconfig) (instead of `modules`). For example:

- Avoid updating `process.env` within a Nuxt module and reading by a Nuxt plugin; use [`runtimeConfig`](https://nuxt.com/docs/3.x/api/nuxt-config#runtimeconfig) instead.
- (\*) Avoid depending on runtime hooks like `vue-renderer:*` for production
- (\*) Avoid adding `serverMiddleware` by importing them inside the module. Instead, add them by referencing a file path so that they are independent of the module's context

(\*) Unless it is for `nuxt dev` purpose only and guarded with `if (nuxt.options.dev) { }`.

::tip
Continue reading about Nuxt 3 modules in the [Modules Author Guide](https://nuxt.com/docs/3.x/guide/going-further/modules).
::

### Use TypeScript (Optional)

While it is not essential, most of the Nuxt ecosystem is shifting to use TypeScript, so it is highly recommended to consider migration.

::tip
You can start migration by renaming `.js` files, to `.ts`. TypeScript is designed to be progressive!
::

::tip
You can use TypeScript syntax for Nuxt 2 and 3 modules and plugins without any extra dependencies.
::

**Examples:**

Example 1 (unknown):
```unknown

```

---

## TypeScript

**URL:** llms-txt#typescript

**Contents:**
- Remove Modules
  - Set `bridge.typescript`
- Update `tsconfig.json`

- Remove `@nuxt/typescript-build`: Bridge enables same functionality
- Remove `@nuxt/typescript-runtime` and `nuxt-ts`: Nuxt 2 has built-in runtime support

### Set `bridge.typescript`

## Update `tsconfig.json`

If you are using TypeScript, you can edit your `tsconfig.json` to benefit from auto-generated Nuxt types:

::note
As `.nuxt/tsconfig.json` is generated and not checked into version control, you'll need to generate that file before running your tests. Add `nuxi prepare` as a step before your tests, otherwise you'll see `TS5083: Cannot read file '~/.nuxt/tsconfig.json'`
::

::note
Keep in mind that all options extended from `./.nuxt/tsconfig.json` will be overwritten by the options defined in your `tsconfig.json`.
Overwriting options such as `"compilerOptions.paths"` with your own configuration will lead TypeScript to not factor in the module resolutions from `./.nuxt/tsconfig.json`. This can lead to module resolutions such as `#imports` not being recognized.

In case you need to extend options provided by `./.nuxt/tsconfig.json` further, you can use the `alias` property within your `nuxt.config`. `nuxi` will pick them up and extend `./.nuxt/tsconfig.json` accordingly.
::

**Examples:**

Example 1 (ts):
```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: false, // If migration to Nitro is complete, set to true
  },
})
```

---

## Auto Imports

**URL:** llms-txt#auto-imports

**Contents:**
- Migration

::note
In the rest of the migration documentation, you will notice that key Nuxt and Vue utilities do not have explicit imports. This is not a typo; Nuxt will automatically import them for you, and you should get full type hinting if you have followed [the instructions](https://nuxt.com/docs/3.x/migration/configuration#typescript) to use Nuxt's TypeScript support.
::

[Read more about auto imports](https://nuxt.com/docs/3.x/guide/concepts/auto-imports)

1. If you have been using `@nuxt/components` in Nuxt 2, you can remove `components: true` in your `nuxt.config`. If you had a more complex setup, then note that the component options have changed somewhat. See the [components documentation](https://nuxt.com/docs/3.x/guide/directory-structure/components) for more information.

::tip
You can look at `.nuxt/types/components.d.ts` and `.nuxt/types/imports.d.ts` to see how Nuxt has resolved your components and composable auto-imports.
::

---
