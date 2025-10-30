# Nuxt - Api

**Pages:** 5

---

## nuxt.config.ts

**URL:** llms-txt#nuxt.config.ts

The `nuxt.config` file extension can either be `.js`, `.ts` or `.mjs`.

::tip
`defineNuxtConfig` helper is globally available without import.
::

You can explicitly import `defineNuxtConfig` from `nuxt/config` if you prefer:

::read-more{to="https://nuxt.com/docs/api/configuration/nuxt-config"}
Discover all the available options in the **Nuxt configuration** documentation.
::

To ensure your configuration is up to date, Nuxt will make a full restart when detecting changes in the main configuration file, the [`.env`](https://nuxt.com/docs/3.x/guide/directory-structure/env), [`.nuxtignore`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxtignore) and [`.nuxtrc`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxtrc) dotfiles.

**Examples:**

Example 1 (unknown):
```unknown
::tip
`defineNuxtConfig` helper is globally available without import.
::

You can explicitly import `defineNuxtConfig` from `nuxt/config` if you prefer:
```

---

## Nuxt Configuration

**URL:** llms-txt#nuxt-configuration

**Contents:**
- alias
- analyzeDir
- app
  - `baseURL`
  - `buildAssetsDir`
  - `cdnURL`
  - `head`
  - `keepalive`
  - `layoutTransition`
  - `pageTransition`

::note
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/tree/main/packages/schema/src/config
---
This file is auto-generated from Nuxt source code.
::

You can improve your DX by defining additional aliases to access custom directories within your JavaScript and CSS.

- **Type**: `object`
- **Default**

::callout
**Note**: Within a webpack context (image sources, CSS - but not JavaScript) you *must* access
your alias by prefixing it with `~`.
::

::callout
**Note**: These aliases will be automatically added to the generated `.nuxt/tsconfig.json` so you can get full
type support and path auto-complete. In case you need to extend options provided by `./.nuxt/tsconfig.json`
further, make sure to add them here or within the `typescript.tsConfig` property in `nuxt.config`.
::

The directory where Nuxt will store the generated files when running `nuxt analyze`.

If a relative path is specified, it will be relative to your `rootDir`.

- **Type**: `string`
- **Default:** `"/<rootDir>/.nuxt/analyze"`

Nuxt App configuration.

The base path of your Nuxt application.

- **Type**: `string`
- **Default:** `"/"`

The folder name for the built site assets, relative to `baseURL` (or `cdnURL` if set). This is set at build time and should not be customized at runtime.

- **Type**: `string`
- **Default:** `"/_nuxt/"`

An absolute URL to serve the public folder from (production-only).

- **Type**: `string`
- **Default:** `""`

Set default configuration for `<head>` on every page.

- **Type**: `object`
- **Default**

Default values for KeepAlive configuration between pages.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue KeepAlive](https://vuejs.org/api/built-in-components.html#keepalive){rel="nofollow"}

### `layoutTransition`

Default values for layout transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}

Default values for page transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}

Customize Nuxt root element id.

- **Type**: `object`
- **Default**

Customize Nuxt root element id.

- **Type**: `string`
- **Default:** `"__nuxt"`

Customize Nuxt root element tag.

- **Type**: `string`
- **Default:** `"div"`

Customize Nuxt Nuxt SpaLoader element attributes.

- **Type**: `string`
- **Default:** `"__nuxt-loader"`

Customize Nuxt SpaLoader element tag.

- **Type**: `string`
- **Default:** `"div"`

Customize Nuxt Teleport element attributes.

- **Type**: `object`
- **Default**

Customize Nuxt Teleport element id.

- **Type**: `string`
- **Default:** `"teleports"`

Customize Nuxt Teleport element tag.

- **Type**: `string`
- **Default:** `"div"`

Default values for view transitions.

This only has an effect when **experimental** support for View Transitions is [enabled in your nuxt.config file](https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental).
This can be overridden with `definePageMeta` on an individual page.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt View Transition API docs](https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental){rel="nofollow"}

Additional app configuration

For programmatic usage and type support, you can directly provide app config with this option. It will be merged with `app.config` file as default value.

For multi-app projects, the unique id of the Nuxt application.

Defaults to `nuxt-app`.

- **Type**: `string`
- **Default:** `"nuxt-app"`

Shared build configuration.

Nuxt allows visualizing your bundles and how to optimize them.

Set to `true` to enable bundle analysis, or pass an object with options: [for webpack](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin){rel="nofollow"} or [for vite](https://github.com/btd/rollup-plugin-visualizer#options){rel="nofollow"}.

- **Type**: `object`
- **Default**

It is recommended to use `addTemplate` from `@nuxt/kit` instead of this option.

If you want to transpile specific dependencies with Babel, you can add them here. Each item in transpile can be a package name, a function, a string or regex object matching the dependency's file name.

You can also use a function to conditionally transpile. The function will receive an object ({ isDev, isServer, isClient, isModern, isLegacy }).

Define the directory where your built Nuxt files will be placed.

Many tools assume that `.nuxt` is a hidden directory (because it starts with a `.`). If that is a problem, you can use this option to prevent that.

- **Type**: `string`
- **Default:** `"/<rootDir>/.nuxt"`

A unique identifier matching the build. This may contain the hash of the current state of the project.

- **Type**: `string`
- **Default:** `"84cde2e2-8b76-4234-80e5-67c2dd45206f"`

The builder to use for bundling the Vue part of your application.

- **Type**: `string`
- **Default:** `"@nuxt/vite-builder"`

Specify a compatibility date for your app.

This is used to control the behavior of presets in Nitro, Nuxt Image and other modules that may change behavior without a major version bump.
We plan to improve the tooling around this feature in the future.

Configure Nuxt component auto-registration.

Any components in the directories configured here can be used throughout your pages, layouts (and other components) without needing to explicitly import them.

- **Type**: `object`
- **Default**

**See**: [`components/` directory documentation](https://nuxt.com/docs/guide/directory-structure/components){rel="nofollow"}

You can define the CSS files/modules/libraries you want to set globally (included in every page).

Nuxt will automatically guess the file type by its extension and use the appropriate pre-processor. You will still need to install the required loader if you need to use them.

Set to `true` to enable debug mode.

At the moment, it prints out hook names and timings on the server, and logs hook arguments as well in the browser.
You can also set this to an object to enable specific debug options.

- **Type**: `boolean`
- **Default:** `false`

Whether Nuxt is running in development mode.

Normally, you should not need to set this.

- **Type**: `boolean`
- **Default:** `false`

Set CORS options for the dev server

- **Type**: `array`
- **Default**

Dev server listening host

Whether to enable HTTPS.

- **Type**: `boolean`
- **Default:** `false`

### `loadingTemplate`

Template to show a loading screen

- **Type**: `function`

Dev server listening port

- **Type**: `number`
- **Default:** `3000`

Listening dev server URL.

This should not be set directly as it will always be overridden by the dev server with the full URL (for module and internal use).

- **Type**: `string`
- **Default:** `"http://localhost:3000"`

Nitro development-only server handlers.

**See**: [Nitro server routes documentation](https://nitro.build/guide/routing){rel="nofollow"}

Enable Nuxt DevTools for development.

Breaking changes for devtools might not reflect on the version of Nuxt.

**See**: [Nuxt DevTools](https://devtools.nuxt.com/){rel="nofollow"} for more information.

Customize default directory structure used by Nuxt.

It is better to stick with defaults unless needed.

- **Type**: `string`
- **Default:** `"app"`

The assets directory (aliased as `~assets` in your build).

- **Type**: `string`
- **Default:** `"assets"`

The layouts directory, each file of which will be auto-registered as a Nuxt layout.

- **Type**: `string`
- **Default:** `"layouts"`

The middleware directory, each file of which will be auto-registered as a Nuxt middleware.

- **Type**: `string`
- **Default:** `"middleware"`

The modules directory, each file in which will be auto-registered as a Nuxt module.

- **Type**: `string`
- **Default:** `"modules"`

The directory which will be processed to auto-generate your application page routes.

- **Type**: `string`
- **Default:** `"pages"`

The plugins directory, each file of which will be auto-registered as a Nuxt plugin.

- **Type**: `string`
- **Default:** `"plugins"`

The directory containing your static files, which will be directly accessible via the Nuxt server and copied across into your `dist` folder when your app is generated.

- **Type**: `string`
- **Default:** `"public"`

The shared directory. This directory is shared between the app and the server.

- **Type**: `string`
- **Default:** `"shared"`

- **Type**: `string`
- **Default:** `"public"`

Configure shared esbuild options used within Nuxt and passed to other builders, such as Vite or Webpack.

- **Type**: `string`
- **Default:** `"h"`

- **Type**: `string`
- **Default:** `"Fragment"`

- **Type**: `string`
- **Default:** `"esnext"`

### `alwaysRunFetchOnKeyChange`

Whether to run `useFetch` when the key changes, even if it is set to `immediate: false` and it has not been triggered yet.

`useFetch` and `useAsyncData` will always run when the key changes if `immediate: true` or if it has been already triggered.

- **Type**: `boolean`
- **Default:** `true`

Use app manifests to respect route rules on client-side.

- **Type**: `boolean`
- **Default:** `true`

Enable native async context to be accessible for nested composables

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt PR #20918](https://github.com/nuxt/nuxt/pull/20918){rel="nofollow"}

Set to true to generate an async entry point for the Vue bundle (for module federation support).

- **Type**: `boolean`
- **Default:** `false`

### `browserDevtoolsTiming`

Enable timings for Nuxt application hooks in the performance panel of Chromium-based browsers.

This feature adds performance markers for Nuxt hooks, allowing you to track their execution time in the browser's Performance tab. This is particularly useful for debugging performance issues.

- **Type**: `boolean`
- **Default:** `false`

**See**: [PR #29922](https://github.com/nuxt/nuxt/pull/29922){rel="nofollow"}

**See**: [Chrome DevTools Performance API](https://developer.chrome.com/docs/devtools/performance/extension#tracks){rel="nofollow"}

Cache Nuxt/Nitro build artifacts based on a hash of the configuration and source files.

This only works for source files within `srcDir` and `serverDir` for the Vue/Nitro parts of your app.

- **Type**: `boolean`
- **Default:** `false`

### `checkOutdatedBuildInterval`

Set the time interval (in ms) to check for new builds. Disabled when `experimental.appManifest` is `false`.

Set to `false` to disable.

- **Type**: `number`
- **Default:** `3600000`

### `chromeDevtoolsProjectSettings`

Enable integration with Chrome DevTools Workspaces for Nuxt projects.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Chrome DevTools Project Settings](https://docs.google.com/document/d/1rfKPnxsNuXhnF7AiQZhu9kIwdiMS5hnAI05HBwFuBSM){rel="nofollow"}

Whether to enable the experimental `<NuxtClientFallback>` component for rendering content on the client if there's an error in SSR.

- **Type**: `boolean`
- **Default:** `false`

### `clientNodeCompat`

Automatically polyfill Node.js imports in the client build using `unenv`.

- **Type**: `boolean`
- **Default:** `false`

**See**: [unenv](https://github.com/unjs/unenv){rel="nofollow"}

### `compileTemplate`

Whether to use `lodash.template` to compile Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `componentIslands`

Experimental component islands support with `<NuxtIsland>` and `.island.vue` files.

By default it is set to 'auto', which means it will be enabled only when there are islands, server components or server pages in your app.

- **Type**: `string`
- **Default:** `"auto"`

Config schema support

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issue #15592](https://github.com/nuxt/nuxt/issues/15592){rel="nofollow"}

Enables CookieStore support to listen for cookie updates (if supported by the browser) and refresh `useCookie` ref values.

- **Type**: `boolean`
- **Default:** `true`

**See**: [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore){rel="nofollow"}

### `crossOriginPrefetch`

Enable cross-origin prefetch using the Speculation Rules API.

- **Type**: `boolean`
- **Default:** `false`

### `debugModuleMutation`

Record mutations to `nuxt.options` in module context, helping to debug configuration changes made by modules during the Nuxt initialization phase.

When enabled, Nuxt will track which modules modify configuration options, making it easier to trace unexpected configuration changes.

- **Type**: `boolean`
- **Default:** `false`

**See**: [PR #30555](https://github.com/nuxt/nuxt/pull/30555){rel="nofollow"}

Enable to use experimental decorators in Nuxt and Nitro.

- **Type**: `boolean`
- **Default:** `false`

**See**: <https://github.com/tc39/proposal-decorators>{rel="nofollow"}

This allows specifying the default options for core Nuxt components and composables.

These options will likely be moved elsewhere in the future, such as into `app.config` or into the `app/` directory.

##### `componentName`

- **Type**: `string`
- **Default:** `"NuxtLink"`

- **Type**: `boolean`
- **Default:** `true`

- **Type**: `boolean`
- **Default:** `true`

Options that apply to `useAsyncData` (and also therefore `useFetch`)

- **Type**: `boolean`
- **Default:** `true`

- **Type**: `string`
- **Default:** `"null"`

- **Type**: `string`
- **Default:** `"null"`

### `emitRouteChunkError`

Emit `app:chunkError` hook when there is an error loading vite/webpack chunks.

By default, Nuxt will also perform a reload of the new route when a chunk fails to load when navigating to a new route (`automatic`).
Setting `automatic-immediate` will lead Nuxt to perform a reload of the current route right when a chunk fails to load (instead of waiting for navigation).
You can disable automatic handling by setting this to `false`, or handle chunk errors manually by setting it to `manual`.

- **Type**: `string`
- **Default:** `"automatic"`

**See**: [Nuxt PR #19038](https://github.com/nuxt/nuxt/pull/19038){rel="nofollow"}

### `enforceModuleCompatibility`

Whether Nuxt should stop if a Nuxt module is incompatible.

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `boolean`
- **Default:** `true`

Externalize `vue`, `@vue/*` and `vue-router` when building.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issue #13632](https://github.com/nuxt/nuxt/issues/13632){rel="nofollow"}

### `extraPageMetaExtractionKeys`

Configure additional keys to extract from the page metadata when using `scanPageMeta`.

This allows modules to access additional metadata from the page metadata. It's recommended to augment the NuxtPage types with your keys.

### `extractAsyncDataHandlers`

- **Type**: `boolean`
- **Default:** `false`

### `granularCachedData`

Whether to call and use the result from `getCachedData` on manual refresh for `useAsyncData` and `useFetch`.

- **Type**: `boolean`
- **Default:** `false`

Use new experimental head optimisations:

- Add the capo.js head plugin in order to render tags in of the head in a more performant way. - Uses the hash hydration plugin to reduce initial hydration
- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Discussion #22632](https://github.com/nuxt/nuxt/discussions/22632){rel="nofollow"}

### `inlineRouteRules`

Allow defining `routeRules` directly within your `~/pages` directory using `defineRouteRules`.

Rules are converted (based on the path) and applied for server requests. For example, a rule defined in `~/pages/foo/bar.vue` will be applied to `/foo/bar` requests. A rule in `~/pages/foo/[id].vue` will be applied to `/foo/**` requests.
For more control, such as if you are using a custom `path` or `alias` set in the page's `definePageMeta`, you should set `routeRules` directly within your `nuxt.config`.

- **Type**: `boolean`
- **Default:** `false`

Enable automatic configuration of hydration strategies for `<Lazy>` components.

This feature intelligently determines when to hydrate lazy components based on visibility, idle time, or other triggers, improving performance by deferring hydration of components until they're needed.

- **Type**: `boolean`
- **Default:** `true`

**See**: [PR #26468](https://github.com/nuxt/nuxt/pull/26468){rel="nofollow"}

### `localLayerAliases`

Resolve `~`, `~~`, `@` and `@@` aliases located within layers with respect to their layer source and root directories.

- **Type**: `boolean`
- **Default:** `true`

### `navigationRepaint`

Wait for a single animation frame before navigation, which gives an opportunity for the browser to repaint, acknowledging user interaction.

It can reduce INP when navigating on prerendered routes.

- **Type**: `boolean`
- **Default:** `true`

Disable vue server renderer endpoint within nitro.

- **Type**: `boolean`
- **Default:** `false`

### `normalizeComponentNames`

Ensure that auto-generated Vue component names match the full component name you would use to auto-import the component.

- **Type**: `boolean`
- **Default:** `false`

Whether to parse `error.data` when rendering a server error page.

- **Type**: `boolean`
- **Default:** `false`

### `payloadExtraction`

When this option is enabled (by default) payload of pages that are prerendered are extracted

- **Type**: `boolean`
- **Default:** `true`

### `pendingWhenIdle`

For `useAsyncData` and `useFetch`, whether `pending` should be `true` when data has not yet started to be fetched.

- **Type**: `boolean`
- **Default:** `true`

### `polyfillVueUseHead`

Whether or not to add a compatibility layer for modules, plugins or user code relying on the old `@vueuse/head` API.

This is disabled to reduce the client-side bundle by \~0.5kb.

- **Type**: `boolean`
- **Default:** `false`

### `purgeCachedData`

Whether to clean up Nuxt static and asyncData caches on route navigation.

Nuxt will automatically purge cached data from `useAsyncData` and `nuxtApp.static.data`. This helps prevent memory leaks and ensures fresh data is loaded when needed, but it is possible to disable it.

- **Type**: `boolean`
- **Default:** `true`

**See**: [PR #31379](https://github.com/nuxt/nuxt/pull/31379){rel="nofollow"}

### `relativeWatchPaths`

Whether to provide relative paths in the `builder:watch` hook.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `renderJsonPayloads`

Render JSON payloads with support for revivifying complex types.

- **Type**: `boolean`
- **Default:** `true`

### `resetAsyncDataToUndefined`

Whether `clear` and `clearNuxtData` should reset async data to its *default* value or update it to `null`/`undefined`.

- **Type**: `boolean`
- **Default:** `true`

### `respectNoSSRHeader`

Allow disabling Nuxt SSR responses by setting the `x-nuxt-no-ssr` header.

- **Type**: `boolean`
- **Default:** `false`

Whether to restore Nuxt app state from `sessionStorage` when reloading the page after a chunk error or manual `reloadNuxtApp()` call.

To avoid hydration errors, it will be applied only after the Vue app has been mounted, meaning there may be a flicker on initial load.
Consider carefully before enabling this as it can cause unexpected behavior, and consider providing explicit keys to `useState` as auto-generated keys may not match across builds.

- **Type**: `boolean`
- **Default:** `false`

Allow exposing some route metadata defined in `definePageMeta` at build-time to modules (alias, name, path, redirect, props, middleware).

This only works with static or strings/arrays rather than variables or conditional assignment.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt Issues #24770](https://github.com/nuxt/nuxt/issues/24770){rel="nofollow"}

### `sharedPrerenderData`

Automatically share payload *data* between pages that are prerendered. This can result in a significant performance improvement when prerendering sites that use `useAsyncData` or `useFetch` and fetch the same data in different pages.

It is particularly important when enabling this feature to make sure that any unique key of your data is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch` should do this automatically for you.)

- **Type**: `boolean`
- **Default:** `false`

### `spaLoadingTemplateLocation`

Keep showing the spa-loading-template until suspense\:resolve

- **Type**: `string`
- **Default:** `"within"`

**See**: [Nuxt Issues #21721](https://github.com/nuxt/nuxt/issues/21721){rel="nofollow"}

### `templateImportResolution`

Disable resolving imports into Nuxt templates from the path of the module that added the template.

By default, Nuxt attempts to resolve imports in templates relative to the module that added them. Setting this to `false` disables this behavior, which may be useful if you're experiencing resolution conflicts in certain environments.

- **Type**: `boolean`
- **Default:** `true`

**See**: [PR #31175](https://github.com/nuxt/nuxt/pull/31175){rel="nofollow"}

### `templateRouteInjection`

By default the route object returned by the auto-imported `useRoute()` composable is kept in sync with the current page in view in `<NuxtPage>`. This is not true for `vue-router`'s exported `useRoute` or for the default `$route` object available in your Vue templates.

By enabling this option a mixin will be injected to keep the `$route` template object in sync with Nuxt's managed `useRoute()`.

- **Type**: `boolean`
- **Default:** `true`

Whether to provide a legacy `templateUtils` object (with `serialize`, `importName` and `importSources`) when compiling Nuxt templates.

This flag will be removed with the release of v4 and exists only for advance testing within Nuxt v3.12+ or in [the nightly release channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel).

- **Type**: `boolean`
- **Default:** `true`

### `treeshakeClientOnly`

Tree shakes contents of client-only components from server bundle.

- **Type**: `boolean`
- **Default:** `true`

**See**: [Nuxt PR #5750](https://github.com/nuxt/framework/pull/5750){rel="nofollow"}

Enable the new experimental typed router using [unplugin-vue-router](https://github.com/posva/unplugin-vue-router){rel="nofollow"}.

- **Type**: `boolean`
- **Default:** `false`

Enable View Transition API integration with client-side router.

- **Type**: `boolean`
- **Default:** `false`

**See**: [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions){rel="nofollow"}

### `viteEnvironmentApi`

- **Type**: `boolean`
- **Default:** `false`

Set an alternative watcher that will be used as the watching service for Nuxt.

Nuxt uses 'chokidar-granular' if your source directory is the same as your root directory . This will ignore top-level directories (like `node_modules` and `.git`) that are excluded from watching.
You can set this instead to `parcel` to use `@parcel/watcher`, which may improve performance in large projects or on Windows platforms.
You can also set this to `chokidar` to watch all files in your source directory.

- **Type**: `string`
- **Default:** `"chokidar"`

**See**: [chokidar](https://github.com/paulmillr/chokidar){rel="nofollow"}

**See**: [@parcel/watcher](https://github.com/parcel-bundler/watcher){rel="nofollow"}

### `writeEarlyHints`

Write early hints when using node server.

- **Type**: `boolean`
- **Default:** `false`

::callout
**Note**: nginx does not support 103 Early hints in the current version.
::

Extend project from multiple local or remote sources.

Value should be either a string or array of strings pointing to source directories or config path relative to current config.
You can use `github:`, `gh:` `gitlab:` or `bitbucket:`

**See**: [`c12` docs on extending config layers](https://github.com/unjs/c12#extending-config-layer-from-remote-sources){rel="nofollow"}

**See**: [`giget` documentation](https://github.com/unjs/giget){rel="nofollow"}

The extensions that should be resolved by the Nuxt resolver.

- **Type**: `array`
- **Default**

Some features of Nuxt are available on an opt-in basis, or can be disabled based on your needs.

Stream server logs to the client as you are developing. These logs can be handled in the `dev:ssr-logs` hook.

If set to `silent`, the logs will not be printed to the browser console.

- **Type**: `boolean`
- **Default:** `false`

Inline styles when rendering HTML (currently vite only).

You can also pass a function that receives the path of a Vue component and returns a boolean indicating whether to inline the styles for that component.

- **Type**: `boolean`
- **Default:** `true`

Turn off rendering of Nuxt scripts and JS resource hints. You can also disable scripts more granularly within `routeRules`.

If set to 'production' or `true`, JS will be disabled in production mode only.

- **Type**: `boolean`
- **Default:** `false`

`future` is for early opting-in to new features that will become default in a future (possibly major) version of the framework.

### `compatibilityVersion`

Enable early access to Nuxt v4 features or flags.

Setting `compatibilityVersion` to `4` changes defaults throughout your Nuxt configuration, but you can granularly re-enable Nuxt v3 behaviour when testing (see example). Please file issues if so, so that we can address in Nuxt or in the ecosystem.

- **Type**: `number`
- **Default:** `3`

This enables early access to the experimental multi-app support.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt Issue #21635](https://github.com/nuxt/nuxt/issues/21635){rel="nofollow"}

### `typescriptBundlerResolution`

This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting for frameworks like Nuxt and Vite.

It improves type support when using modern libraries with `exports`.
You can set it to false to use the legacy 'Node' mode, which is the default for TypeScript.

- **Type**: `boolean`
- **Default:** `true`

**See**: [TypeScript PR implementing `bundler` module resolution](https://github.com/microsoft/TypeScript/pull/51669){rel="nofollow"}

This option is no longer used. Instead, use `nitro.prerender.ignore`.

The routes to generate.

If you are using the crawler, this will be only the starting point for route generation. This is often necessary when using dynamic routes.
It is preferred to use `nitro.prerender.routes`.

Hooks are listeners to Nuxt events that are typically used in modules, but are also available in `nuxt.config`.

Internally, hooks follow a naming pattern using colons (e.g., build\:done).
For ease of configuration, you can also structure them as an hierarchical object in `nuxt.config` (as below).

More customizable than `ignorePrefix`: all files matching glob patterns specified inside the `ignore` array will be ignored in building.

- **Type**: `array`
- **Default**

Pass options directly to `node-ignore` (which is used by Nuxt to ignore files).

**See**: [node-ignore](https://github.com/kaelzhang/node-ignore){rel="nofollow"}

Any file in `pages/`, `layouts/`, `middleware/`, and `public/` directories will be ignored during the build process if its filename starts with the prefix specified by `ignorePrefix`. This is intended to prevent certain files from being processed or served in the built application. By default, the `ignorePrefix` is set to '-', ignoring any files starting with '-'.

- **Type**: `string`
- **Default:** `"-"`

Configure how Nuxt auto-imports composables into your application.

**See**: [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/composables){rel="nofollow"}

An array of custom directories that will be auto-imported. Note that this option will not override the default directories (\~/composables, \~/utils).

- **Type**: `boolean`
- **Default:** `false`

Whether to scan your `composables/` and `utils/` directories for composables to auto-import. Auto-imports registered by Nuxt or other modules, such as imports from `vue` or `nuxt`, will still be enabled.

- **Type**: `boolean`
- **Default:** `true`

Log level when building logs.

Defaults to 'silent' when running in CI or when a TTY is not available. This option is then used as 'silent' in Vite and 'none' in Webpack

- **Type**: `string`
- **Default:** `"info"`

Modules are Nuxt extensions which can extend its core functionality and add endless integrations.

Each module is either a string (which can refer to a package, or be a path to a file), a tuple with the module as first string and the options as a second object, or an inline module function.
Nuxt tries to resolve each item in the modules array using node require path (in `node_modules`) and then will be resolved from project `srcDir` if `~` alias is used.

::callout
**Note**: Modules are executed sequentially so the order is important. First, the modules defined in `nuxt.config.ts` are loaded. Then, modules found in the `modules/`
directory are executed, and they load in alphabetical order.
::

Used to set the modules directories for path resolving (for example, webpack's `resolveLoading`, `nodeExternals` and `postcss`).

The configuration path is relative to `options.rootDir` (default is current working directory).
Setting this field may be necessary if your project is organized as a yarn workspace-styled mono-repository.

- **Type**: `array`
- **Default**

Configuration for Nitro.

**See**: [Nitro configuration docs](https://nitro.build/config/){rel="nofollow"}

- **Type**: `object`
- **Default**

Build time optimization configuration.

### `asyncTransforms`

Options passed directly to the transformer from `unctx` that preserves async context after `await`.

#### `asyncFunctions`

- **Type**: `array`
- **Default**

#### `objectDefinitions`

##### `defineNuxtComponent`

- **Type**: `array`
- **Default**

##### `defineNuxtPlugin`

- **Type**: `array`
- **Default**

##### `definePageMeta`

- **Type**: `array`
- **Default**

### `keyedComposables`

Functions to inject a key for.

As long as the number of arguments passed to the function is less than `argumentLength`, an additional magic string will be injected that can be used to deduplicate requests between server and client. You will need to take steps to handle this additional key.
The key will be unique based on the location of the function being invoked within the file.

- **Type**: `array`
- **Default**

Tree shake code from specific builds.

Tree shake composables from the server or client builds.

- **Type**: `object`
- **Default**

- **Type**: `object`
- **Default**

Configure shared oxc options used within Nuxt and passed where necessary.

Options for `oxc-transform`

**See**: [Oxc transform docs](https://oxc.rs/docs/guide/usage/transformer.html){rel="nofollow"}

- **Type**: `string`
- **Default:** `"h"`

- **Type**: `string`
- **Default:** `"Fragment"`

- **Type**: `string`
- **Default:** `"esnext"`

Whether to use the vue-router integration in Nuxt 3. If you do not provide a value it will be enabled if you have a `pages/` directory in your source folder.

Additionally, you can provide a glob pattern or an array of patterns to scan only certain files for pages.

An array of nuxt app plugins.

Each plugin can be a string (which can be an absolute or relative path to a file). If it ends with `.client` or `.server` then it will be automatically loaded only in the appropriate context.
It can also be an object with `src` and `mode` keys.

::callout
**Note**: Plugins are also auto-registered from the `~/plugins` directory
and these plugins do not need to be listed in `nuxt.config` unless you
need to customize their order. All plugins are deduplicated by their src path.
::

**See**: [`plugins/` directory documentation](https://nuxt.com/docs/guide/directory-structure/plugins){rel="nofollow"}

A strategy for ordering PostCSS plugins.

- **Type**: `function`

Options for configuring PostCSS plugins.

**See**: [PostCSS docs](https://postcss.org/){rel="nofollow"}

Plugin to parse CSS and add vendor prefixes to CSS rules.

**See**: [`autoprefixer`](https://github.com/postcss/autoprefixer){rel="nofollow"}

**See**: [`cssnano` configuration options](https://cssnano.github.io/cssnano/docs/config-file/#configuration-options){rel="nofollow"}

Define the root directory of your application.

This property can be overwritten (for example, running `nuxt ./my-app/` will set the `rootDir` to the absolute path of `./my-app/` from the current/working directory.
It is normally not needed to configure this option.

- **Type**: `string`
- **Default:** `"/<rootDir>"`

Global route options applied to matching server routes.

**Experimental**: This is an experimental feature and API may change in the future.

**See**: [Nitro route rules documentation](https://nitro.build/config/#routerules){rel="nofollow"}

Additional router options passed to `vue-router`. On top of the options for `vue-router`, Nuxt offers additional options to customize the router (see below).

::callout
**Note**: Only JSON serializable options should be passed by Nuxt config.
For more control, you can use `app/router.options.ts` file.
::

**See**: [Vue Router documentation](https://router.vuejs.org/api/interfaces/routeroptions.html){rel="nofollow"}.

You can enable hash history in SPA mode. In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the **URL is never sent to the server** and **SSR is not supported**.

- **Type**: `boolean`
- **Default:** `false`

#### `scrollBehaviorType`

Customize the scroll behavior for hash links.

- **Type**: `string`
- **Default:** `"auto"`

Runtime config allows passing dynamic config and environment variables to the Nuxt app context.

The value of this object is accessible from server only using `useRuntimeConfig`.
It mainly should hold *private* configuration which is not exposed on the frontend. This could include a reference to your API secret tokens.
Anything under `public` and `app` will be exposed to the frontend as well.
Values are automatically replaced by matching env variables at runtime, e.g. setting an environment variable `NUXT_API_KEY=my-api-key NUXT_PUBLIC_BASE_URL=/foo/` would overwrite the two values in the example below.

- **Type**: `object`
- **Default**

- **Type**: `string`
- **Default:** `"@nuxt/nitro-server"`

Define the server directory of your Nuxt application, where Nitro routes, middleware and plugins are kept.

If a relative path is specified, it will be relative to your `rootDir`.

- **Type**: `string`
- **Default:** `"/<srcDir>/server"`

Nitro server handlers.

Each handler accepts the following options:

- handler: The path to the file defining the handler. - route: The route under which the handler is available. This follows the conventions of [rou3](https://github.com/unjs/rou3){rel="nofollow"}. - method: The HTTP method of requests that should be handled. - middleware: Specifies whether it is a middleware handler. - lazy: Specifies whether to use lazy loading to import the handler.
- **Type**: `array`

**See**: [`server/` directory documentation](https://nuxt.com/docs/guide/directory-structure/server){rel="nofollow"}

::callout
**Note**: Files from `server/api`, `server/middleware` and `server/routes` will be automatically registered by Nuxt.
::

Configures whether and how sourcemaps are generated for server and/or client bundles.

If set to a single boolean, that value applies to both server and client. Additionally, the `'hidden'` option is also available for both server and client.
Available options for both client and server: - `true`: Generates sourcemaps and includes source references in the final bundle. - `false`: Does not generate any sourcemaps. - `'hidden'`: Generates sourcemaps but does not include references in the final bundle.

- **Type**: `object`
- **Default**

## spaLoadingTemplate

Boolean or a path to an HTML file with the contents of which will be inserted into any HTML page rendered with `ssr: false`.

- If it is unset, it will use `~/app/spa-loading-template.html` file in one of your layers, if it exists. - If it is false, no SPA loading indicator will be loaded. - If true, Nuxt will look for `~/app/spa-loading-template.html` file in one of your layers, or a
  default Nuxt image will be used.
  Some good sources for spinners are [SpinKit](https://github.com/tobiasahlin/SpinKit){rel="nofollow"} or [SVG Spinners](https://icones.js.org/collection/svg-spinners){rel="nofollow"}.
- **Default:** `null`

**Example**: \~/app/spa-loading-template.html

Define the source directory of your Nuxt application.

If a relative path is specified, it will be relative to the `rootDir`.

- **Type**: `string`
- **Default:** `"/<srcDir>"`

This would work with the following folder structure:

Whether to enable rendering of HTML - either dynamically (in server mode) or at generate time. If set to `false` generated pages will have no content.

- **Type**: `boolean`
- **Default:** `true`

Manually disable nuxt telemetry.

**See**: [Nuxt Telemetry](https://github.com/nuxt/telemetry){rel="nofollow"} for more information.

Whether your app is being unit tested.

- **Type**: `boolean`
- **Default:** `false`

Extend project from a local or remote source.

Value should be a string pointing to source directory or config path relative to current config.
You can use `github:`, `gitlab:`, `bitbucket:` or `https://` to extend from a remote git repository.

Configuration for Nuxt's TypeScript integration.

Which builder types to include for your project.

By default Nuxt infers this based on your `builder` option (defaulting to 'vite') but you can either turn off builder environment types (with `false`) to handle this fully yourself, or opt for a 'shared' option.
The 'shared' option is advised for module authors, who will want to support multiple possible builders.

- **Default:** `null`

Modules to generate deep aliases for within `compilerOptions.paths`. This does not yet support subpaths. It may be necessary when using Nuxt within a pnpm monorepo with `shamefully-hoist=false`.

- **Type**: `array`
- **Default**

### `includeWorkspace`

Include parent workspace in the Nuxt project. Mostly useful for themes and module authors.

- **Type**: `boolean`
- **Default:** `false`

Generate a `*.vue` shim.

We recommend instead letting the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar){rel="nofollow"} generate accurate types for your components.
Note that you may wish to set this to `true` if you are using other libraries, such as ESLint, that are unable to understand the type of `.vue` files.

- **Type**: `boolean`
- **Default:** `false`

TypeScript comes with certain checks to give you more safety and analysis of your program. Once you’ve converted your codebase to TypeScript, you can start enabling these checks for greater safety. [Read More](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks){rel="nofollow"}

- **Type**: `boolean`
- **Default:** `true`

You can extend generated `.nuxt/tsconfig.json` using this option.

Enable build-time type checking.

If set to true, this will type check in development. You can restrict this to build-time type checking by setting it to `build`. Requires to install `typescript` and `vue-tsc` as dev dependencies.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt TypeScript docs](https://nuxt.com/docs/guide/concepts/typescript){rel="nofollow"}

An object that allows us to configure the `unhead` nuxt module.

Enable the legacy compatibility mode for `unhead` module. This applies the following changes: - Disables Capo.js sorting - Adds the `DeprecationsPlugin`: supports `hid`, `vmid`, `children`, `body` - Adds the `PromisesPlugin`: supports promises as input

- **Type**: `boolean`
- **Default:** `false`

**See**: [`unhead` migration documentation](https://unhead.unjs.io/docs/typescript/head/guides/get-started/migration){rel="nofollow"}

### `renderSSRHeadOptions`

An object that will be passed to `renderSSRHead` to customize the output.

- **Type**: `object`
- **Default**

Configuration that will be passed directly to Vite.

**See**: [Vite configuration docs](https://vite.dev/config){rel="nofollow"} for more information.
Please note that not all vite options are supported in Nuxt.

- **Type**: `string`
- **Default:** `"_nuxt/"`

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `string`
- **Default:** `"/<rootDir>/node_modules/.cache/vite"`

- **Type**: `boolean`
- **Default:** `true`

- **Type**: `object`
- **Default**

- **Type**: `object`
- **Default**

- **Type**: `string`
- **Default:** `"production"`

#### `esbuildOptions`

- **Type**: `object`
- **Default**

- **Type**: `array`
- **Default**

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `array`
- **Default**

- **Type**: `string`
- **Default:** `"/<srcDir>"`

- **Type**: `array`
- **Default**

##### `propsDestructure`

- **Type**: `boolean`
- **Default:** `true`

- **Type**: `boolean`
- **Default:** `true`

##### `compilerOptions`

##### `transformAssetUrls`

- **Type**: `object`
- **Default**

- **Type**: `object`
- **Default**

### `compilerOptions`

Options for the Vue compiler that will be passed at build time.

**See**: [Vue documentation](https://vuejs.org/api/application.html#app-config-compileroptions){rel="nofollow"}

It is possible to pass configure the Vue app globally. Only serializable options may be set in your `nuxt.config`. All other options should be set at runtime in a Nuxt plugin..

**See**: [Vue app config documentation](https://vuejs.org/api/application.html#app-config){rel="nofollow"}

### `propsDestructure`

Enable reactive destructure for `defineProps`

- **Type**: `boolean`
- **Default:** `true`

### `runtimeCompiler`

Include Vue compiler in runtime bundle.

- **Type**: `boolean`
- **Default:** `false`

### `transformAssetUrls`

- **Type**: `array`
- **Default**

- **Type**: `array`
- **Default**

- **Type**: `array`
- **Default**

- **Type**: `array`
- **Default**

- **Type**: `array`
- **Default**

The watch property lets you define patterns that will restart the Nuxt dev server when changed.

It is an array of strings or regular expressions. Strings should be either absolute paths or relative to the `srcDir` (and the `srcDir` of any layers). Regular expressions will be matched against the path relative to the project `srcDir` (and the `srcDir` of any layers).

The watchers property lets you overwrite watchers configuration in your `nuxt.config`.

Options to pass directly to `chokidar`.

**See**: [chokidar](https://github.com/paulmillr/chokidar#api){rel="nofollow"}

- **Type**: `boolean`
- **Default:** `true`

#### `ignorePermissionErrors`

- **Type**: `boolean`
- **Default:** `true`

### `rewatchOnRawEvents`

An array of event types, which, when received, will cause the watcher to restart.

`watchOptions` to pass directly to webpack.

**See**: [webpack@4 watch options](https://v4.webpack.js.org/configuration/watch/#watchoptions){rel="nofollow"}.

#### `aggregateTimeout`

- **Type**: `number`
- **Default:** `1000`

### `aggressiveCodeRemoval`

Hard-replaces `typeof process`, `typeof window` and `typeof document` to tree-shake bundle.

- **Type**: `boolean`
- **Default:** `false`

Nuxt uses `webpack-bundle-analyzer` to visualize your bundles and how to optimize them.

Set to `true` to enable bundle analysis, or pass an object with options: [for webpack](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin){rel="nofollow"} or [for vite](https://github.com/btd/rollup-plugin-visualizer#options){rel="nofollow"}.

- **Type**: `object`
- **Default**

Enables CSS source map support (defaults to `true` in development).

- **Type**: `boolean`
- **Default:** `false`

See [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware){rel="nofollow"} for available options.

- **Type**: `string`
- **Default:** `"none"`

Configure [webpack experiments](https://webpack.js.org/configuration/experiments/){rel="nofollow"}

Enables Common CSS Extraction.

Using [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin){rel="nofollow"} under the hood, your CSS will be extracted into separate files, usually one per component. This allows caching your CSS and JavaScript separately.

- **Type**: `boolean`
- **Default:** `true`

Customize bundle filenames.

To understand a bit more about the use of manifests, take a look at [webpack documentation](https://webpack.js.org/guides/code-splitting/){rel="nofollow"}.

::callout
**Note**: Be careful when using non-hashed based filenames in production
as most browsers will cache the asset and not detect the changes on first load.
::

- **Type**: `function`

- **Type**: `function`

- **Type**: `function`

- **Type**: `function`

- **Type**: `function`

- **Type**: `function`

Set to `false` to disable the overlay provided by [FriendlyErrorsWebpackPlugin](https://github.com/nuxt/friendly-errors-webpack-plugin){rel="nofollow"}.

- **Type**: `boolean`
- **Default:** `true`

See [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware){rel="nofollow"} for available options.

Customize the options of Nuxt's integrated webpack loaders.

See [css-loader](https://github.com/webpack-contrib/css-loader){rel="nofollow"} for available options.

- **Type**: `boolean`
- **Default:** `false`

##### `importLoaders`

- **Type**: `number`
- **Default:** `0`

- **Type**: `function`

See [css-loader](https://github.com/webpack-contrib/css-loader){rel="nofollow"} for available options.

- **Type**: `boolean`
- **Default:** `false`

##### `importLoaders`

- **Type**: `number`
- **Default:** `0`

###### `localIdentName`

- **Type**: `string`
- **Default:** `"[local]_[hash:base64:5]"`

- **Type**: `function`

- **Type**: `object`
- **Default**

**See**: [esbuild loader](https://github.com/esbuild-kit/esbuild-loader){rel="nofollow"}

**See**: [`file-loader` Options](https://github.com/webpack-contrib/file-loader#options){rel="nofollow"}

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `number`
- **Default:** `1000`

**See**: [`file-loader` Options](https://github.com/webpack-contrib/file-loader#options){rel="nofollow"}

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `number`
- **Default:** `1000`

**See**: [`file-loader` Options](https://github.com/webpack-contrib/file-loader#options){rel="nofollow"}

- **Type**: `boolean`
- **Default:** `false`

- **Type**: `number`
- **Default:** `1000`

**See**: [`less-loader` Options](https://github.com/webpack-contrib/less-loader#options){rel="nofollow"}

**See**: [`pug` options](https://pugjs.org/api/reference.html#options){rel="nofollow"}

**See**: [`sass-loader` Options](https://github.com/webpack-contrib/sass-loader#options){rel="nofollow"}

###### `indentedSyntax`

- **Type**: `boolean`
- **Default:** `true`

**See**: [`sass-loader` Options](https://github.com/webpack-contrib/sass-loader#options){rel="nofollow"}

**See**: [`stylus-loader` Options](https://github.com/webpack-contrib/stylus-loader#options){rel="nofollow"}

See [vue-loader](https://github.com/vuejs/vue-loader){rel="nofollow"} for available options.

##### `compilerOptions`

##### `propsDestructure`

- **Type**: `boolean`
- **Default:** `true`

##### `transformAssetUrls`

- **Type**: `object`
- **Default**

Configure [webpack optimization](https://webpack.js.org/configuration/optimization/){rel="nofollow"}.

Set minimize to `false` to disable all minimizers. (It is disabled in development by default).

- **Type**: `boolean`
- **Default:** `true`

You can set minimizer to a customized array of plugins.

- **Type**: `string`
- **Default:** `"single"`

##### `automaticNameDelimiter`

- **Type**: `string`
- **Default:** `"/"`

- **Type**: `string`
- **Default:** `"all"`

OptimizeCSSAssets plugin options.

Defaults to true when `extractCSS` is enabled.

- **Type**: `boolean`
- **Default:** `false`

**See**: [css-minimizer-webpack-plugin documentation](https://github.com/webpack-contrib/css-minimizer-webpack-plugin){rel="nofollow"}.

Customize PostCSS Loader. same options as [`postcss-loader` options](https://github.com/webpack-contrib/postcss-loader#options){rel="nofollow"}

#### `postcssOptions`

- **Type**: `object`
- **Default**

Enable the profiler in webpackbar.

It is normally enabled by CLI argument `--profile`.

- **Type**: `boolean`
- **Default:** `false`

**See**: [webpackbar](https://github.com/unjs/webpackbar#profile){rel="nofollow"}.

### `serverURLPolyfill`

The polyfill library to load to provide URL and URLSearchParams.

Defaults to `'url'` ([see package](https://www.npmjs.com/package/url){rel="nofollow"}).

- **Type**: `string`
- **Default:** `"url"`

### `warningIgnoreFilters`

Filters to hide build warnings.

Define the workspace directory of your application.

Often this is used when in a monorepo setup. Nuxt will attempt to detect your workspace directory automatically, but you can override it here.
It is normally not needed to configure this option.

- **Type**: `string`
- **Default:** `"/<workspaceDir>"`

**Examples:**

Example 1 (json):
```json
{
  "~": "/<srcDir>/",
  "@": "/<srcDir>/",
  "~~": "/<rootDir>/",
  "@@": "/<rootDir>/",
  "#shared": "/<rootDir>/shared/",
  "assets": "/<srcDir>/assets/",
  "public": "/<srcDir>/public/",
  "#build": "/<rootDir>/.nuxt/",
  "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs"
}
```

Example 2 (js):
```js
export default {
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
  }
}
```

Example 3 (ts):
```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/prefix/'
  }
})
```

Example 4 (bash):
```bash
NUXT_APP_BASE_URL=/prefix/ node .output/server/index.mjs
```

---

## Experimental Features

**URL:** llms-txt#experimental-features

**Contents:**
- asyncContext
- asyncEntry
- externalVue
- treeshakeClientOnly
- extractAsyncDataHandlers
- emitRouteChunkError
- restoreState
- inlineRouteRules
- renderJsonPayloads
- noVueServer

The Nuxt experimental features can be enabled in the Nuxt configuration file.

Internally, Nuxt uses `@nuxt/schema` to define these experimental features. You can refer to the [API documentation](https://nuxt.com/docs/3.x/api/configuration/nuxt-config#experimental) or the [source code](https://github.com/nuxt/nuxt/blob/main/packages/schema/src/config/experimental.ts){rel="nofollow"} for more information.

::note
Note that these features are experimental and could be removed or modified in the future.
::

Enable native async context to be accessible for nested composables in Nuxt and in Nitro. This opens the possibility to use composables inside async composables and reduce the chance to get the `Nuxt instance is unavailable` error.

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/20918
---
See full explanation on the GitHub pull-request.
::

Enables generation of an async entry point for the Vue bundle, aiding module federation support.

Externalizes `vue`, `@vue/*` and `vue-router` when building.

*Enabled by default.*

::warning
This feature will likely be removed in a near future.
::

## treeshakeClientOnly

Tree shakes contents of client-only components from server bundle.

*Enabled by default.*

## extractAsyncDataHandlers

Extracts handler functions from `useAsyncData` and `useLazyAsyncData` calls into separate chunks for improved code splitting and caching efficiency.

This feature transforms inline handler functions into dynamically imported chunks:

The benefit of this transformation is that we can split out data fetching logic — while still allowing the code to be loaded if required.

::important
This feature is only recommended for **static builds** with payload extraction, and where data does not need to be re-fetched at runtime.
::

## emitRouteChunkError

Emits `app:chunkError` hook when there is an error loading vite/webpack chunks. Default behavior is to perform a reload of the new route on navigation to a new route when a chunk fails to load.

If you set this to `'automatic-immediate'` Nuxt will reload the current route immediately, instead of waiting for a navigation. This is useful for chunk errors that are not triggered by navigation, e.g., when your Nuxt app fails to load a [lazy component](https://nuxt.com/docs/3.x/guide/directory-structure/components#dynamic-imports). A potential downside of this behavior is undesired reloads, e.g., when your app does not need the chunk that caused the error.

You can disable automatic handling by setting this to `false`, or handle chunk errors manually by setting it to `manual`.

Allows Nuxt app state to be restored from `sessionStorage` when reloading the page after a chunk error or manual [`reloadNuxtApp()`](https://nuxt.com/docs/3.x/api/utils/reload-nuxt-app) call.

To avoid hydration errors, it will be applied only after the Vue app has been mounted, meaning there may be a flicker on initial load.

::important
Consider carefully before enabling this as it can cause unexpected behavior,
and consider providing explicit keys to [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) as auto-generated keys may not match across builds.
::

Define route rules at the page level using [`defineRouteRules`](https://nuxt.com/docs/3.x/api/utils/define-route-rules).

Matching route rules will be created, based on the page's `path`.

::read-more
---
icon: i-lucide-square-function
to: https://nuxt.com/docs/api/utils/define-route-rules
---
Read more in `defineRouteRules` utility.
::

::read-more
---
icon: i-lucide-medal
to: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
---
::

## renderJsonPayloads

Allows rendering of JSON payloads with support for revivifying complex types.

*Enabled by default.*

Disables Vue server renderer endpoint within Nitro.

Enables extraction of payloads of pages generated with `nuxt generate`.

Enables the experimental [`<NuxtClientFallback>`](https://nuxt.com/docs/3.x/api/components/nuxt-client-fallback) component for rendering content on the client if there's an error in SSR.

## crossOriginPrefetch

Enables cross-origin prefetch using the Speculation Rules API.

::read-more
---
icon: i-simple-icons-w3c
target: _blank
to: https://wicg.github.io/nav-speculation/prefetch.html
---
Read more about the **Speculation Rules API**.
::

Enables View Transition API integration with client-side router.

::link-example
---
target: _blank
to: https://stackblitz.com/edit/nuxt-view-transitions?file=app.vue
---
::

::read-more
---
icon: i-simple-icons-mdnwebdocs
target: _blank
to: https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
---
Read more about the **View Transition API**.
::

Enables writing of early hints when using node server.

Enables experimental component islands support with [`<NuxtIsland>`](https://nuxt.com/docs/3.x/api/components/nuxt-island) and `.island.vue` files.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/components#server-components
---
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/issues/19772
---
You can follow the server components roadmap on GitHub.
::

Enables config schema support.

*Enabled by default.*

## polyfillVueUseHead

Adds a compatibility layer for modules, plugins, or user code relying on the old `@vueuse/head` API.

## respectNoSSRHeader

Allow disabling Nuxt SSR responses by setting the `x-nuxt-no-ssr` header.

Resolve `~`, `~~`, `@` and `@@` aliases located within layers with respect to their layer source and root directories.

*Enabled by default.*

Enable the new experimental typed router using [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router){rel="nofollow"}.

Out of the box, this will enable typed usage of [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to), [`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link), [`router.push()`](https://nuxt.com/docs/3.x/api/composables/use-router) and more.

You can even get typed params within a page by using `const route = useRoute('route-name')`.

::important
If you use `pnpm` without `shamefully-hoist=true`, you will need to have `unplugin-vue-router` installed as a devDependency in order for this feature to work.
::

::video-accordion
---
title: Watch a video from Daniel Roe explaining type-safe routing in Nuxt
video-id: SXk-L19gTZk
---
::

Set an alternative watcher that will be used as the watching service for Nuxt.

Nuxt uses `chokidar-granular` by default, which will ignore top-level directories
(like `node_modules` and `.git`) that are excluded from watching.

You can set this instead to `parcel` to use `@parcel/watcher`, which may improve
performance in large projects or on Windows platforms.

You can also set this to `chokidar` to watch all files in your source directory.

## sharedPrerenderData

Enabling this feature automatically shares payload *data* between pages that are prerendered. This can result
in a significant performance improvement when prerendering sites that use `useAsyncData` or `useFetch` and
fetch the same data in different pages.

::video-accordion
---
title: Watch a video from Alexander Lichter about the experimental sharedPrerenderData
video-id: 1jUupYHVvrU
---
::

It is particularly important when enabling this feature to make sure that any unique key of your data
is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch
data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch`
should do this automatically for you.)

With this feature, Nuxt will automatically polyfill Node.js imports in the client build using [`unenv`](https://github.com/unjs/unenv){rel="nofollow"}.

::note
To make globals like `Buffer` work in the browser, you need to manually inject them.

This option allows exposing some route metadata defined in `definePageMeta` at build-time to modules (specifically `alias`, `name`, `path`, `redirect`, `props` and `middleware`).

This only works with static or strings/arrays rather than variables or conditional assignment. See [original issue](https://github.com/nuxt/nuxt/issues/24770){rel="nofollow"} for more information and context.

It is also possible to scan page metadata only after all routes have been registered in `pages:extend`. Then another hook, `pages:resolved` will be called. To enable this behavior, set `scanPageMeta: 'after-resolve'`.

You can disable this feature if it causes issues in your project.

Enables CookieStore support to listen for cookie updates (if supported by the browser) and refresh `useCookie` ref values.

::read-more
---
icon: i-simple-icons-mdnwebdocs
target: _blank
to: https://developer.mozilla.org/en-US/docs/Web/API/CookieStore
---
Read more about the **CookieStore**.
::

Caches Nuxt build artifacts based on a hash of the configuration and source files.

When enabled, changes to the following files will trigger a full rebuild:

In addition, any changes to files within `srcDir` will trigger a rebuild of the Vue client/server bundle. Nitro will always be rebuilt (though work is in progress to allow Nitro to announce its cacheable artifacts and their hashes).

::note
A maximum of 10 cache tarballs are kept.
::

## extraPageMetaExtractionKeys

The `definePageMeta()` macro is a useful way to collect build-time meta about pages. Nuxt itself provides a set list of supported keys which is used to power some of the internal features such as redirects, page aliases and custom paths.

This option allows passing additional keys to extract from the page metadata when using `scanPageMeta`.

This allows modules to access additional metadata from the page metadata in the build context. If you are using this within a module, it's recommended also to [augment the `NuxtPage` types with your keys](https://nuxt.com/docs/3.x/guide/directory-structure/pages#typing-custom-metadata).

## normalizeComponentNames

Ensure that auto-generated Vue component names match the full component name
you would use to auto-import the component.

By default, if you haven't set it manually, Vue will assign a component name that matches
the filename of the component.

In this case, the component name would be `MyComponent`, as far as Vue is concerned. If you wanted to use `<KeepAlive>` with it, or identify it in the Vue DevTools, you would need to use this component.

But in order to auto-import it, you would need to use `SomeFolderMyComponent`.

By setting `experimental.normalizeComponentNames`, these two values match, and Vue will generate a component name that matches the Nuxt pattern for component naming.

## spaLoadingTemplateLocation

When rendering a client-only page (with `ssr: false`), we optionally render a loading screen (from `app/spa-loading-template.html`).

It can be set to `within`, which will render it like this:

Alternatively, you can render the template alongside the Nuxt app root by setting it to `body`:

This avoids a white flash when hydrating a client-only page.

## browserDevtoolsTiming

Enables performance markers for Nuxt hooks in browser devtools. This adds performance markers that you can track in the Performance tab of Chromium-based browsers, which is useful for debugging and optimizing performance.

This is enabled by default in development mode. If you need to disable this feature, it is possible to do so:

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/29922
---
See PR #29922 for implementation details.
::

::read-more
---
color: gray
icon: i-simple-icons-googlechrome
target: _blank
to: https://developer.chrome.com/docs/devtools/performance/extension#tracks
---
Learn more about Chrome DevTools Performance API.
::

## debugModuleMutation

Records mutations to `nuxt.options` in module context, helping to debug configuration changes made by modules during the Nuxt initialization phase.

This is enabled by default when `debug` mode is enabled. If you need to disable this feature, it is possible to do so:

To enable it explicitly:

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/30555
---
See PR #30555 for implementation details.
::

This enables hydration strategies for `<Lazy>` components, which improves performance by deferring hydration of components until they're needed.

Lazy hydration is enabled by default, but you can disable this feature:

::read-more
---
color: gray
icon: i-simple-icons-github
to: https://nuxt.com/docs/guide/directory-structure/components#delayed-or-lazy-hydration
---
Read more about lazy hydration.
::

## templateImportResolution

Controls how imports in Nuxt templates are resolved. By default, Nuxt attempts to resolve imports in templates relative to the module that added them.

This is enabled by default, so if you're experiencing resolution conflicts in certain environments, you can disable this behavior:

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/31175
---
See PR #31175 for implementation details.
::

This option enables enabling decorator syntax across your entire Nuxt/Nitro app, powered by [esbuild](https://github.com/evanw/esbuild/releases/tag/v0.21.3){rel="nofollow"}.

For a long time, TypeScript has had support for decorators via `compilerOptions.experimentalDecorators`. This implementation predated the TC39 standardization process. Now, decorators are a [Stage 3 Proposal](https://github.com/tc39/proposal-decorators){rel="nofollow"}, and supported without special configuration in TS 5.0+ (see <https://github.com/microsoft/TypeScript/pull/52582>{rel="nofollow"} and <https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#decorators>{rel="nofollow"}).

Enabling `experimental.decorators` enables support for the TC39 proposal, **NOT** for TypeScript's previous `compilerOptions.experimentalDecorators` implementation.

::warning
Note that there may be changes before this finally lands in the JS standard.
::

Nuxt will automatically purge cached data from `useAsyncData` and `nuxtApp.static.data`. This helps prevent memory leaks
and ensures fresh data is loaded when needed, but it is possible to disable it:

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/31379
---
See PR #31379 for implementation details.
::

## granularCachedData

Whether to call and use the result from `getCachedData` when refreshing data for `useAsyncData` and `useFetch` (whether by `watch`, `refreshNuxtData()`, or a manual `refresh()` call.

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/31373
---
See PR #31373 for implementation details.
::

If set to `false`, the `pending` object returned from `useAsyncData`, `useFetch`, `useLazyAsyncData` and `useLazyFetch` will be a computed property that is `true` only when `status` is also pending.

That means that when `immediate: false` is passed, `pending` will be `false` until the first request is made.

By default, Nuxt improves chunk stability by using an import map to resolve the entry chunk of the bundle.

This injects an import map at the top of your `<head>` tag:

Within the script chunks emitted by Vite, imports will be from `#entry`. This means that changes to the entry will not invalidate chunks which are otherwise unchanged.

::note
Nuxt smartly disables this feature if you have configured `vite.build.target` to include a browser that doesn't support import maps, or if you have configured `vite.build.rollupOptions.output.entryFileNames` to a value that does not include `[hash]`.
::

If you need to disable this feature you can do so:

Enable enhanced TypeScript developer experience with the `@dxup/nuxt` module.

This experimental plugin provides improved TypeScript integration and development tooling for better DX when working with TypeScript in Nuxt applications.

This flag is disabled by default, but you can enable this feature:

::important
To use this feature, you need to:

- Have `typescript` installed as a dependency
- Configure VS Code to use your workspace TypeScript version (see [VS Code documentation](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript){rel="nofollow"})
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/KazariEX/dxup
---
Learn more about **@dxup/nuxt**.
::

## viteEnvironmentApi

Enable Vite 6's new [Environment API](https://vite.dev/guide/api-environment){rel="nofollow"} for improved build configuration and plugin architecture.

When you set `future.compatibilityVersion` to `5`, this feature is enabled by default. You can also enable it explicitly for testing:

The Vite Environment API provides better consistency between development and production builds, more granular control over environment-specific configuration, and improved performance.

::important
Enabling this feature changes how Vite plugins are registered and configured. See the [Vite Environment API migration guide](https://nuxt.com/docs/4.x/getting-started/upgrade#migration-to-vite-environment-api) for details on updating your plugins.
::

::read-more{target="_blank" to="https://vite.dev/guide/api-environment"}
Learn more about Vite's Environment API.
::

**Examples:**

Example 1 (unknown):
```unknown
::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/pull/20918
---
See full explanation on the GitHub pull-request.
::

## asyncEntry

Enables generation of an async entry point for the Vue bundle, aiding module federation support.
```

Example 2 (unknown):
```unknown
## externalVue

Externalizes `vue`, `@vue/*` and `vue-router` when building.

*Enabled by default.*
```

Example 3 (unknown):
```unknown
::warning
This feature will likely be removed in a near future.
::

## treeshakeClientOnly

Tree shakes contents of client-only components from server bundle.

*Enabled by default.*
```

Example 4 (unknown):
```unknown
## extractAsyncDataHandlers

Extracts handler functions from `useAsyncData` and `useLazyAsyncData` calls into separate chunks for improved code splitting and caching efficiency.
```

---

## Runtime config values are automatically replaced by matching environment variables at runtime

**URL:** llms-txt#runtime-config-values-are-automatically-replaced-by-matching-environment-variables-at-runtime

NUXT_API_SECRET=api_secret_token
NUXT_PUBLIC_API_BASE=https://nuxtjs.org
```
::

---

## .nuxtignore

**URL:** llms-txt#.nuxtignore

**Contents:**
- Usage

The `.nuxtignore` file tells Nuxt to ignore files in your project’s root directory ([`rootDir`](https://nuxt.com/docs/3.x/api/nuxt-config#rootdir)) during the build phase.

It is subject to the same specification as [`.gitignore`](https://nuxt.com/docs/3.x/guide/directory-structure/gitignore) and `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.

::tip
You can also configure [`ignoreOptions`](https://nuxt.com/docs/3.x/api/nuxt-config#ignoreoptions), [`ignorePrefix`](https://nuxt.com/docs/3.x/api/nuxt-config#ignoreprefix) and [`ignore`](https://nuxt.com/docs/3.x/api/nuxt-config#ignore) in your `nuxt.config` file.
::

```bash [.nuxtignore]

---
