# Nuxt - Server

**Pages:** 5

---

## Nuxt: A vision for 2023

**URL:** llms-txt#nuxt:-a-vision-for-2023

**Contents:**
- Unifying Nuxt
- New Website
- Key Modules
- DX and Performance
- A New Release Cycle
- Migrating to Nuxt 3

This past year has been an exciting one. Looking into the new year, there is a lot we have planned as a team and we'd love to share it with you. ✨

This past year has been an exciting one, with the release of Nuxt 3 and Nitro and the launch of the new [nuxt.com](http://nuxt.com/){rel="nofollow"} website. It's been the culmination of years of work, and has not only resulted in a new major version of Nuxt, but a new Nuxt architecture, a full-stack server framework ([Nitro](https://nitro.unjs.io/){rel="nofollow"}), and a new GitHub organisation and ecosystem ([UnJS](https://github.com/unjs/){rel="nofollow"}).

Throughout that whole time, [Pooya Parsa](https://github.com/pi0){rel="nofollow"} has led the Nuxt team, putting in countless hours of work and thought into building Nuxt 3.

Now, at the start of 2023, he's handing over the helm of the Nuxt open-source work to me ([Daniel Roe](https://github.com/danielroe){rel="nofollow"}). Pooya will continue to be actively contributing to the Nuxt project and of course driving the development of UnJS ecosystem and Nitro project.

This is a real honour and I'm hugely pleased to be able to work with the rest of the team and the community to continue to drive Nuxt forward to be the intuitive way to build a web application using Vue. 😊

Looking into the new year, there is a lot we have planned as a team and we'd love to share it with you.

One important change will be unifying Nuxt into a single repository.

As a complete rewrite of Nuxt 2, Nuxt 3 has been developed in a separate repository: `nuxt/framework`. Nuxt 3 even has its own documentation on [nuxt.com](http://nuxt.com/){rel="nofollow"}, versus the Nuxt 2 documentation on [v2.nuxt.com](https://v2.nuxt.com){rel="nofollow"}. In development, this helped us move faster but meant less attention on issues for Nuxt 2. It's also a bit confusing.

So in the coming days, we'll be unifying the Nuxt repos into a single repository, `nuxt/nuxt`. We'll transfer all issues and discussions across, of course, clearly labeling them as to which version of Nuxt they affect. This will also provide us an opportunity to close out issues and RFCs that we've resolved or implemented in Nuxt 3.

This last year brought us the launch of [nuxt.com](http://nuxt.com/){rel="nofollow"} and the unveiling of Nuxt's [new logo](https://nuxt.com/design-kit).

![Nuxt Website 2023](https://nuxt.com/assets/blog/website/new-website-2023.png){.rounded-lg.border.border-gray-700}

We'd like to make this website the central place for everything Nuxt. That includes:

- migrating Nuxt 2 documentation so there's a single website to check (with a version switcher)
- documentation for community modules (using multi-source to pull them from their own repositories)
- revamped [examples](https://nuxt.com/docs/examples/hello-world) that show off more real use cases, including authentication, monorepos and more

We have some other exciting plans for the website, but I don't want to reveal too much, other than to say that we'll also (of course!) be open-sourcing the website soon.

The modules ecosystem is an incredibly powerful one, and we are grateful to all the module authors who extend Nuxt with so many features. Today we have more than 60 modules compatible with Nuxt 3. Our goal is to continue to empower module development as well as make sure that the most used modules in Nuxt 2 are updated or have a straightforward migration path.

The main priorities at the start of the year are `nuxt/image`, PWA and `nuxt/auth`.

We're also developing RFCs for `nuxt/font` and `nuxt/script` in conjunction with the Google Aurora team, which will make it much easier to apply best performance practices to your Nuxt apps. Watch this space!

## DX and Performance

We particularly care a lot about making Nuxt a joy to use, and we'd like to keep pushing the boundary of great developer experience, which we believe results in the best experience for users of the apps we write too.

In the coming months, there will be a continued focus on developer experience and performance. Expect to see Nuxt DevTools and CLI improvements for scaffolding - and more. On the performance side, Nuxt 3 + Nitro is a game-changer for speed, performance, and customisability, and we’ll be building on top of that to enable some amazing features. 🚀

## A New Release Cycle

It's important to know what's coming, and we're going to be spending some time making sure we communicate clearly about what's happening with Nuxt through regular updates like this one.

On top of that, we're planning a consistent release cycle, following [semver](https://semver.org/){rel="nofollow"}. We'll aim for major framework releases every year, with an expectation of patch releases every week or so and minor releases every month or so. They should never contain breaking changes except within options clearly marked as `experimental`.

One comment: We don't want there to be as big a gap (either in time or in breaking changes) between 3 -> 4 as there was between 2 -> 3, so, when the time comes for Nuxt 4, expect a much more gentle upgrade!

In the upcoming 3.1.0 release, you can already find a host of bug fixes as well as:

- experimental server-only components and a component island renderer
- Nitro 2, Vite 4 and Rollup 3 support

## Migrating to Nuxt 3

On December 31st, 2023, Vue 2 will reach End of Life (EOL), and with it Nuxt 2. Both Vue and Nuxt will continue being available and working for many people, but at the same time, many companies and users will want to transition to Nuxt 3 (and we'd encourage this!).

Part of our focus this year therefore will be supporting everyone who wants to migrate their apps to Nuxt 3. We'll also be working to backport key bug fixes and security fixes to Nuxt 2.

In addition, there is Nuxt Bridge. It was built as a module to bring features and bug fixes from Nuxt 3 back to Nuxt 2, although it has not yet been released in a stable version. We plan to stabilise and release it in the next month or so, but our main focus over the course of the year will be on helping people transition to Nuxt 3.

It’s a privilege to be part of this community, and we wish you a very Happy New Year! 💚

Daniel (on behalf of the whole Nuxt team)

---

## Netlify

**URL:** llms-txt#netlify

**Contents:**
- Setup
- Netlify Edge Functions
- On-demand Builders

::tip
**Zero Configuration ✨**

Integration with Netlify is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

Nuxt will auto-detect that you are in a [Netlify](https://www.netlify.com){rel="nofollow"} build environment and build an optimized version of your server.

For new sites, Netlify will detect that you are using Nuxt 3 and set the publish directory to `dist` and build command to `npm run build`.

::note
If you are upgrading an existing site from Nuxt 2 you should check these and update them if needed.
::

If you want to add custom redirects, you can do so with [`routeRules`](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) or by adding a [`_redirects`](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file){rel="nofollow"} file to your `public` directory.

::tip{color="green" icon="i-lucide-check-circle"}
For deployment, just push to your git repository [as you would normally do for Netlify](https://docs.netlify.com/configure-builds/get-started/){rel="nofollow"}.
::

## Netlify Edge Functions

::read-more
---
target: _blank
to: https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions
---
Netlify Edge Functions use Deno and the powerful V8 JavaScript runtime to let you run globally distributed functions for the fastest possible response times.
::

Set the following environment variable to run Nuxt on Edge Functions:

## On-demand Builders

On-demand Builders are serverless functions used to generate web content as needed that’s automatically cached on Netlify’s Edge CDN.

They enable you to build pages for your site when a user visits them for the first time and then cache them at the edge for subsequent visits until the next deployment.

::read-more
---
target: _blank
to: https://docs.netlify.com/configure-builds/on-demand-builders/
---
Read More about Netlify on-demand builders
::

Set the following environment variable to enable on-demand builders:

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/netlify"}
Head over **Nitro documentation** to learn more about the netlify deployment preset.
::

**Examples:**

Example 1 (bash):
```bash
SERVER_PRESET=netlify_edge
```

Example 2 (bash):
```bash
SERVER_PRESET=netlify_builder
```

---

## Nitro

**URL:** llms-txt#nitro

**Contents:**
- Remove Modules
- Update Config
- Update Your Scripts
  - Install Nuxi
  - Nuxi
  - Static Target
  - Server Target
- Exclude Built Nitro Folder From Git
- Ensure Everything Goes Well

- Remove `@nuxt/nitro`: Bridge injects same functionality

## Update Your Scripts

You will also need to update your scripts within your `package.json` to reflect the fact that Nuxt will now produce a Nitro server as build output.

Install `nuxi` as a development dependency:

::code-group{sync="pm"}

Nuxt 3 introduced the new Nuxt CLI command [`nuxi`](https://nuxt.com/docs/3.x/api/commands/add). Update your scripts as follows to leverage the better support from Nuxt Bridge:

::tip
If `nitro: false`, use the `nuxt2` command.
::

If you have set `target: 'static'` in your `nuxt.config` then you need to ensure that you update your build script to be `nuxi generate`.

For all other situations, you can use the `nuxi build` command.

## Exclude Built Nitro Folder From Git

Add the folder `.output` to the `.gitignore` file.

## Ensure Everything Goes Well

✔️ Try with `nuxi dev` and `nuxi build` (or `nuxi generate`) to see if everything goes well.

**Examples:**

Example 1 (unknown):
```unknown
## Update Your Scripts

You will also need to update your scripts within your `package.json` to reflect the fact that Nuxt will now produce a Nitro server as build output.

### Install Nuxi

Install `nuxi` as a development dependency:

::code-group{sync="pm"}
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown

```

---

## Legacy Composition API

**URL:** llms-txt#legacy-composition-api

**Contents:**
- Remove Modules
- Using `@vue/composition-api`
- Migrating from `@nuxtjs/composition-api`
  - Remove `@nuxtjs/composition-api/module` from your buildModules
  - Set `bridge.capi`
  - useFetch
  - `defineNuxtMiddleware`
  - `defineNuxtPlugin`
  - `useRouter` and `useRoute`

Nuxt Bridge provides access to Composition API syntax. It is specifically designed to be aligned with Nuxt 3. Because of this, there are a few extra steps to take when enabling Nuxt Bridge, if you have been using the Composition API previously.

- Remove `@vue/composition-api` from your dependencies.
- Remove `@nuxtjs/composition-api` from your dependencies (and from your modules in `nuxt.config`).

## Using `@vue/composition-api`

If you have been using just `@vue/composition-api` and not `@nuxtjs/composition-api`, then things are very straightforward.

1. First, remove the plugin where you are manually registering the Composition API. Nuxt Bridge will handle this for you.
   
2. Otherwise, there is nothing you need to do. However, if you want, you can remove your explicit imports from `@vue/composition-api` and rely on Nuxt Bridge auto-importing them for you.

## Migrating from `@nuxtjs/composition-api`

Nuxt Bridge implements the Composition API slightly differently from `@nuxtjs/composition-api` and provides different composables (designed to be aligned with the composables that Nuxt 3 provides).

Because some composables have been removed and don't yet have a replacement, this will be a slightly more complicated process.

### Remove `@nuxtjs/composition-api/module` from your buildModules

You don't have to immediately update your imports yet - Nuxt Bridge will automatically provide a 'shim' for most imports you currently have, to give you time to migrate to the new, Nuxt 3-compatible composables, with the following exceptions:

- `withContext` has been removed. See [below](https://nuxt.com/docs/3.x/bridge/nuxt3-compatible-api#usecontext-and-withcontext).
- `useStatic` has been removed. There is no current replacement. Feel free to raise a discussion if you have a use case for this.
- `reqRef` and `reqSsrRef`, which were deprecated, have now been removed entirely. Follow the instructions below regarding [ssrRef](https://nuxt.com/docs/3.x/bridge/nuxt3-compatible-api#ssrref-and-shallowssrref) to replace this.

### Set `bridge.capi`

For each other composable you are using from `@nuxtjs/composition-api`, follow the steps below.

`$fetchState` and `$fetch` have been removed.

### `defineNuxtMiddleware`

This was a type-helper stub function that is now removed.

Remove the `defineNuxtMiddleware` wrapper:

For typescript support, you can use `@nuxt/types`:

### `defineNuxtPlugin`

This was a type-helper stub function that is now removed.

You may also keep using Nuxt 2-style plugins, by removing the function (as with [defineNuxtMiddleware](https://nuxt.com/#definenuxtmiddleware)).

Remove the `defineNuxtPlugin` wrapper:

For typescript support, you can use `@nuxt/types`:

::warning
While this example is valid, Nuxt 3 introduces a new defineNuxtPlugin function that has a slightly different signature.
::

::read-more{link="/docs/guide/directory-structure/plugins#creating-plugins"}
::

### `useRouter` and `useRoute`

Nuxt Bridge provides direct replacements for these composables via [`useRouter`](https://nuxt.com/docs/3.x/api/composables/use-router) and `useRoute`.

The only key difference is that [`useRoute`](https://nuxt.com/docs/3.x/api/composables/use-route) no longer returns a computed property.

**Examples:**

Example 1 (diff):
```diff
- import Vue from 'vue'
   - import VueCompositionApi from '@vue/composition-api'
   -
   - Vue.use(VueCompositionApi)
```

Example 2 (ts):
```ts
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    capi: true,
    nitro: false, // If migration to Nitro is complete, set to true
  },
})
```

Example 3 (diff):
```diff
const {
- $fetch,
- $fetchState,
+ fetch,
+ fetchState,
} = useFetch(() => { posts.value = await $fetch('/api/posts') })
```

Example 4 (diff):
```diff
- import { defineNuxtMiddleware } from '@nuxtjs/composition-api`
- export default defineNuxtMiddleware((ctx) => {})
+ export default (ctx) => {}
```

---

## New Composition API

**URL:** llms-txt#new-composition-api

**Contents:**
- `ssrRef` and `shallowSsrRef`
- `ssrPromise`
- `onGlobalSetup`
- `useStore`
- `useContext` and `withContext`
- `wrapProperty`
- `useAsync` and `useFetch`
  - `useMeta`
  - Explicit Imports
  - Disabling Auto-imports

By migrating from `@nuxtjs/composition-api` to the Nuxt 3 compatible API, there will be less rewriting when migrating to Nuxt 3.

## `ssrRef` and `shallowSsrRef`

These two functions have been replaced with a new composable that works very similarly under the hood: `useState`.

The key differences are that you must provide a *key* for this state (which Nuxt generated automatically for `ssrRef` and `shallowSsrRef`), and that it can only be called within a Nuxt 3 plugin (which is defined by `defineNuxtPlugin`) or a component instance. (In other words, you cannot use [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) with a global/ambient context, because of the danger of shared state across requests.)

Because the state is keyed, you can access the same state from multiple locations, as long as you are using the same key.

You can read more about how to use this composable in [the Nuxt 3 docs](https://nuxt.com/docs/3.x/api/composables/use-state).

This function has been removed, and you will need to find an alternative implementation if you were using it. If you have a use case for `ssrPromise`, please let us know via a discussion.

This function has been removed, but its use cases can be met by using [`useNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) or [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) within `defineNuxtPlugin`. You can also run any custom code within the `setup()` function of a layout.

In order to access Vuex store instance, you can use `useNuxtApp().$store`.

## `useContext` and `withContext`

You can access injected helpers using `useNuxtApp`.

::note
`useNuxtApp()` also provides a key called `nuxt2Context` which contains all the same properties you would normally access from Nuxt 2 context, but it's advised *not* to use this directly, as it won't exist in Nuxt 3. Instead, see if there is another way to access what you need. (If not, please raise a feature request or discussion.)
::

This helper function is not provided any more but you can replace it with the following code:

## `useAsync` and `useFetch`

These two composables can be replaced with `useLazyAsyncData` and `useLazyFetch`, which are documented [in the Nuxt 3 docs](https://nuxt.com/docs/3.x/getting-started/data-fetching). Just like the previous `@nuxtjs/composition-api` composables, these composables do not block route navigation on the client-side (hence the 'lazy' part of the name).

::important
Note that the API is entirely different, despite similar sounding names. Importantly, you should not attempt to change the value of other variables outside the composable (as you may have been doing with the previous `useFetch`).
::

::warning
The `useLazyFetch` must have been configured for [Nitro](https://nuxt.com/docs/3.x/bridge/nitro).
::

Migrating to the new composables from `useAsync`:

Migrating to the new composables from `useFetch`:

In order to interact with `vue-meta`, you may use `useNuxt2Meta`, which will work in Nuxt Bridge (but not Nuxt 3) and will allow you to manipulate your meta tags in a `vue-meta`-compatible way.

You can also pass in computed values or refs, and the meta values will be updated reactively:

::note
Be careful not to use both `useNuxt2Meta()` and the Options API `head()` within the same component, as behavior may be unpredictable.
::

Nuxt Bridge also provides a Nuxt 3-compatible meta implementation that can be accessed with the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable.

You will also need to enable it explicitly in your `nuxt.config`:

This [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable uses `@unhead/vue` under the hood (rather than `vue-meta`) to manipulate your `<head>`. Accordingly, it is recommended not to use both the native Nuxt 2 `head()` properties as well as [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) , as they may conflict.

For more information on how to use this composable, see [the Nuxt 3 docs](https://nuxt.com/docs/3.x/getting-started/seo-meta).

Nuxt exposes every auto-import with the `#imports` alias that can be used to make the import explicit if needed:

### Disabling Auto-imports

If you want to disable auto-importing composables and utilities, you can set `imports.autoImport` to `false` in the `nuxt.config` file.

This will disable auto-imports completely but it's still possible to use [explicit imports](https://nuxt.com/#explicit-imports) from `#imports`.

**Examples:**

Example 1 (diff):
```diff
- import { ssrRef } from '@nuxtjs/composition-api'

- const ref1 = ssrRef('initialData')
- const ref2 = ssrRef(() => 'factory function')
+ const ref1 = useState('ref1-key', () => 'initialData')
+ const ref2 = useState('ref2-key', () => 'factory function')
  // accessing the state
  console.log(ref1.value)
```

Example 2 (diff):
```diff
- import { onGlobalSetup } from '@nuxtjs/composition-api'

- export default () => {
-   onGlobalSetup(() => {
+ export default defineNuxtPlugin((nuxtApp) => {
+   nuxtApp.hook('vue:setup', () => {
      // ...
    })
- }
+ })
```

Example 3 (diff):
```diff
- import { useStore } from '@nuxtjs/composition-api`
+ const { $store } = useNuxtApp()
```

Example 4 (diff):
```diff
- import { useContext } from '@nuxtjs/composition-api`
+ const { $axios } = useNuxtApp()
```

---
