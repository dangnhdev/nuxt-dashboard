# Nuxt - Other

**Pages:** 155

---

## <NuxtPicture>

**URL:** llms-txt#<nuxtpicture>

**Contents:**
- Setup

`<NuxtPicture>` is a drop-in replacement for the native `<picture>` tag.

Usage of `<NuxtPicture>` is almost identical to [`<NuxtImg>`](https://nuxt.com/docs/3.x/api/components/nuxt-img) but it also allows serving modern formats like `webp` when possible.

Learn more about the [`<picture>` tag on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture){rel="nofollow"}.

In order to use `<NuxtPicture>` you should install and enable the Nuxt Image module:

::read-more{target="_blank" to="https://image.nuxt.com/usage/nuxt-picture"}
Read more about the `<NuxtPicture>` component.
::

---

## Announcing Nuxt 4.0

**URL:** llms-txt#announcing-nuxt-4.0

**Contents:**
- 🔥 What's new?
  - 🗂️ New project structure
  - 🔄 Smarter data fetching
  - 🔧 Better TypeScript experience
  - ⚡ Faster CLI and development
- 🚀 How to upgrade
  - 1. Update Nuxt
  - 2. Optional: use migration tools
  - 3. Test and adjust
- 🗺️ What's next?

**Nuxt 4.0 is here!** 🎉

After a year of real-world testing, we're excited to announce the official release of Nuxt 4. This is a stability-focused major release, introducing a few thoughtful breaking changes in order to improve development experience.

If you've been following along, you'll recognize many of these features and changes — and if you're new to them, we hope you'll welcome them.

Nuxt 4 is all about making your development experience smoother:

- **Cleaner project organization** with the new `app/` directory structure
- **Smarter data fetching** - we've taken the opportunity to address some inconsistencies and improve performance with the data layer
- **Better TypeScript support** with project-based separation between the different contexts in your project - app code, server code, `shared/` folder, and configuration
- **Faster CLI and development** with adoption of internal sockets and a faster CLI

Why these features in particular? Mostly because these kind of improvements have required making changes that are technically breaking.

In general, we aim for a hype-free approach to releases. Rather than save up features for a big release, we've been shipping improvements in Nuxt 3 minor releases.

We've also spent a lot of time figuring out how to implement these changes in a backwards-compatible way, and I hope that means that most Nuxt 3 projects can upgrade with a minimum of effort.

I'd advise reading through the [upgrade guide](https://nuxt.com/docs/4.x/getting-started/upgrade) before you start, to understand what areas of your app might be affected.

### 🗂️ New project structure

The biggest visible change is how projects are organized. Your application code now lives in an `app/` directory by default:

This helps keep your code separate from `node_modules/` and `.git/`, which makes file watchers faster (especially on Windows and Linux). It also gives your IDE better context about whether you're working with client or server code.

::tip
**Don't want to migrate?** That's totally fine! Nuxt will detect your existing structure and keep working exactly as before.
::

#### 🎨 Updated UI templates

Nuxt’s starter templates have an all new look, with improved accessibility, default titles, and template polish ([#27843](https://github.com/nuxt/nuxt/pull/27843){rel="nofollow"}).

### 🔄 Smarter data fetching

We've made `useAsyncData` and `useFetch` work better. Multiple components using the same key now share their data automatically. There's also automatic cleanup when components unmount, and you can use reactive keys to refetch data when needed. Plus, we've given you more control over when cached data gets used.

Some of these features have already been made available in Nuxt v3 minor releases, because we've been rolling this out gradually. Nuxt v4 brings different defaults, and we expect to continue to work on this data layer in the days to come.

### 🔧 Better TypeScript experience

Nuxt now creates separate TypeScript projects for your app code, server code, `shared/` folder, and builder code. This should mean better autocompletion, more accurate type inference and fewer confusing errors when you're working in different contexts.

::tip
With Nuxt 4, you will only need one `tsconfig.json` file in your project root!
::

This is probably the single issue that is most likely to cause surprises when upgrading, but it should also make your TypeScript experience much smoother in the long run. Please report any issues you encounter. 🙏

### ⚡ Faster CLI and development

In parallel with the release of v4, we've been working on speeding up `@nuxt/cli`.

- **Faster cold starts** - Development server startup is noticeably faster
- **Node.js compile cache** - Automatic reuse of the v8 compile cache
- **Native file watching** - Uses `fs.watch` APIs for fewer system resources
- **Socket-based communication** - The CLI and Vite dev server now communicate via internal sockets instead of network ports, reducing overhead — particularly on Windows

These improvements combined can make a really noticeable difference in your day-to-day development experience, and we have more planned.

Although any major release brings breaking changes, one of our main aims for this release is to ensure that the upgrade path is as smooth as possible. Most of the breaking changes have been testable with a compatibility flag for over a year.

Most projects should upgrade smoothly, but there are a few things to be aware of:

- Nuxt 2 compatibility has been removed from `@nuxt/kit`. (This will particularly affect module authors.)
- Some legacy utilities and deprecated features have been cleaned up.
- The new TypeScript setup might surface some type issues that were hidden before.
- A few modules might need further updates for full Nuxt 4 compatibility.

Don't worry though — for most breaking changes, there are configuration options to revert to the old behavior while you adjust.

Our recommendation for upgrading is to run:

This will deduplicate your lockfile as well, and help ensure that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

### 2. Optional: use migration tools

We’ve also partnered with [Codemod](https://github.com/codemod-com/codemod){rel="nofollow"} to automate many, though not all, migration steps:

### 3. Test and adjust

Run your tests, check that everything builds correctly, and fix any issues that come up. The [upgrade guide](https://nuxt.com/docs/4.x/getting-started/upgrade) has detailed migration steps for specific scenarios.

We'd recommend reading through it in full before starting your upgrade, to understand what areas of your app might be affected.

We're planning quick patch releases to address any issues that come up. Nuxt 3 will continue to receive maintenance updates (both bug fixes and backports of features from Nuxt 4) until the end of January 2026, so there's no rush if you need time to migrate.

Looking ahead, we plan to release Nuxt 5 on the sooner side, which will bring Nitro v3 and h3 v2 for even better performance, as well as adopting the Vite Environment API for an improved (and faster!) development experience. And there's a lot more in the works too!

And, quite apart from major releases, we have a lot of exciting features planned to make their way into Nuxt 3.x and 4.x release branches, including support for SSR streaming ([#4753](https://github.com/nuxt/nuxt/issues/4753){rel="nofollow"}), a first-party accessibility module ([#23255](https://github.com/nuxt/nuxt/issues/23255){rel="nofollow"}), built-in fetch caching strategies ([#26017](https://github.com/nuxt/nuxt/issues/26017){rel="nofollow"}), more strongly typed fetch calls (landing in Nitro v3), dynamic route discovery ([#32196](https://github.com/nuxt/nuxt/issues/32196){rel="nofollow"}), multi-app support ([#21635](https://github.com/nuxt/nuxt/issues/21635){rel="nofollow"}) and more.

This release is credit to so many people, particularly those who have been testing v4 compatibility mode over the past year. I'm really grateful — thank you for all your help!

Happy coding with Nuxt 4! 🚀

## 📑 Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v4.0.0
---
Read the full release notes of Nuxt `v4.0.0`.
::

A huge thank you to everyone who's been a part of this release. ❤️

**Examples:**

Example 1 (bash):
```bash
my-nuxt-app/
├─ app/
│  ├─ assets/
│  ├─ components/
│  ├─ composables/
│  ├─ layouts/
│  ├─ middleware/
│  ├─ pages/
│  ├─ plugins/
│  ├─ utils/
│  ├─ app.vue
│  ├─ app.config.ts
│  └─ error.vue
├─ content/
├─ public/
├─ shared/
├─ server/
└─ nuxt.config.ts
```

Example 2 (sh):
```sh
npx nuxt upgrade --dedupe
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown

```

---

## Logging

**URL:** llms-txt#logging

**Contents:**
- `useLogger`
  - Usage
  - Type
  - Parameters
  - Examples

Nuxt provides a logger instance that you can use to log messages with extra features. `useLogger` allows you to get a logger instance.

Returns a logger instance. It uses [consola](https://github.com/unjs/consola){rel="nofollow"} under the hood.

**`tag`**: A tag to suffix all log messages with, displayed on the right near the timestamp.

**`options`**: Consola configuration options.

**Examples:**

Example 1 (unknown):
```unknown
### Type
```

Example 2 (unknown):
```unknown
### Parameters

**`tag`**: A tag to suffix all log messages with, displayed on the right near the timestamp.

**`options`**: Consola configuration options.

### Examples
```

---

## JSX / TSX

**URL:** llms-txt#jsx-/-tsx

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
to: https://vuejs.org/guide/extras/render-function.html#jsx-tsx
---
::

::sandbox
---
branch: main
dir: examples/advanced/jsx
file: app.vue
repo: nuxt/examples
---
::

---

## A New Website

**URL:** llms-txt#a-new-website

**Contents:**
- New Design
- Improved Navigation
- Source Code Buttons
- Improved Search Feature
- Migration to Nuxt UI
- Open Graph Images
- Available on GitHub
- What's next?

Nuxt.com is the main entry point when you want to learn Nuxt. With **more than 300k visitors every month**, it was time to give it a new look and feel.

We are back to the original colors of Nuxt, with a navy background (`#020420`) and its signature shiny green (`#00DC82`).

:nuxt-img{.rounded-lg.border.border-gray-700 alt="Nuxt Website Screenshot" height="497" src="https://nuxt.com/assets/blog/website/nuxt-website.png" width="832"}

::read-more{icon="i-lucide-palette" to="https://nuxt.com/design-kit"}
Discover the **Nuxt Design Kit** as well as our **Logo History**.
::

We wanted to achieve a consistent design across all our official documentations:

::div{.grid.sm:grid-cols-2.gap-4}
  :::nuxt-link
  ---
  class: hover:border-transparent
  target: _blank
  to: https://image.nuxt.com
  ---
  :nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt Image" height="255" src="https://nuxt.com/assets/blog/website/nuxt-image.png" width="408"}
  :::

:::nuxt-link
  ---
  class: hover:border-transparent
  target: _blank
  to: https://content.nuxt.com
  ---
  :nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt Content" height="255" src="https://nuxt.com/assets/blog/website/nuxt-content.png" width="408"}
  :::

:::nuxt-link
  ---
  class: hover:border-transparent
  target: _blank
  to: https://devtools.nuxt.com
  ---
  :nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt DevTools" height="255" src="https://nuxt.com/assets/blog/website/nuxt-devtools.png" width="408"}
  :::

:::nuxt-link{.hover:border-transparent target="_blank" to="https://ui.nuxt.com"}
  :nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt UI" height="255" src="https://nuxt.com/assets/blog/website/nuxt-ui.png" width="408"}
  :::
::

We really love this new design and hope you do too. &#x2A;*This is only the first step toward many improvements coming to the website.**

## Improved Navigation

From now on, you can easily jump between the five main documentation categories:

:video{.rounded.dark:border.dark:border-gray-700 controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1697548111/nuxt3/nuxt-website-docs-nav.jpg"}

On the right side, you can see the table of contents as well as community shortcuts: Edit this page, Chat on Discord, etc.

:video{.rounded.dark:border.dark:border-gray-700 controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1697549697/nuxt3/nuxt-website-docs-aside.jpg"}

## Source Code Buttons

When looking at Nuxt built-in [components](https://nuxt.com/docs/api/components), [composables](https://nuxt.com/docs/api/composables), [utils](https://nuxt.com/docs/api/utils), [commands](https://nuxt.com/docs/api/commands) and [kit utilities](https://nuxt.com/docs/api/kit), you can now jump to the source code by clicking on the :u-button[Source]{color="gray" icon="i-simple-icons-github" size="xs"} button.

:nuxt-img{.border.rounded.border-gray-700 alt="Nuxt Source Code Button" height="343" src="https://nuxt.com/assets/blog/website/nuxt-website-source-button.png" width="818"}

::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
Checkout an example on `<NuxtLink>` documentation page.
::

## Improved Search Feature

You may notice a new modal when hitting `` ``. We leverage the Nuxt UI [`<CommandPalette>`](https://ui.nuxt.com/components/command-palette){rel="nofollow"} components combined with Nuxt Content data (search & navigation) to provide a better search experience.

With the command palette, you can:

- Jump to a page
- Search in the documentation
- Search a module
- Switch the color mode

We plan to add more commands soon.

:video{.rounded.dark:border.dark:border-gray-700 controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1697550571/nuxt3/nuxt-website-search.jpg"}

## Migration to Nuxt UI

The new website is powered by [Nuxt UI](https://ui.nuxt.com){rel="nofollow"}, our UI library tailored made for Nuxt and built on top of [Tailwind CSS](https://tailwindcss.com){rel="nofollow"} & [Headless UI](https://headlessui.com/){rel="nofollow"}.

The website also uses [Nuxt UI Pro](https://ui.nuxt.com/pro){rel="nofollow"}, a set of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.

It includes components such as `<UHeader>`, `<UFooter>`, `<ULandingHero>`, `<ULandingCard>` and more.

::note
We plan to launch the full documentation of Nuxt UI Pro at the end of October. If you cannot wait and want early access, you can already [purchase a license](https://ui.nuxt.com/pro/purchase){rel="nofollow"} now and get access to our private repository on GitHub.
::

This [migration](https://github.com/nuxt/nuxt.com/pull/1365){rel="nofollow"} was a great opportunity to improve Nuxt UI & UI Pro and fix some bugs, as well as a difference of [+9,004]{.text-primary} / [-23,113]{.text-error} lines of code changed.

::read-more
---
icon: i-simple-icons-nuxtdotjs
target: _blank
to: https://ui.nuxt.com
---
Read more about **Nuxt UI**.
::

We are big fans of having a custom image when we share a link on social media. That's why we have added OG images on all our documentation pages.

Example of the [Installation page](https://nuxt.com/docs/getting-started/installation):

![Nuxt OG Image](https://nuxt.com/__og-image__/image/docs/getting-started/introduction/og.png){.border.rounded.border-gray-700 height="630" width="1200"}

::read-more
---
target: _blank
to: https://nuxtseo.com/og-image/getting-started/installation
---
Discover the **Nuxt OG Image** module.
::

## Available on GitHub

We are proud to announce that the website is **now open source** and available on GitHub.

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt.com
---
Check out `nuxt/nuxt.com` on GitHub.
::

This new website is the beginning of upcoming changes we are planing, some of them are:

- Team & Contributors pages
- Integrations page to showcase all the possibilities with Nuxt: Hosting, CMS, Database, etc.
- Templates page (currently [nuxt.new](https://nuxt.new){rel="nofollow"}) to list official and community starters
- And more...

**We are looking forward to your feedback on [Twitter](https://x.com/nuxt_js){rel="nofollow"}, [Discord](https://discord.com/invite/nuxt){rel="nofollow"} or [GitHub](https://github.com/nuxt/nuxt.com){rel="nofollow"}**.

Thank you for reading this blog post, and happy Nuxting 🤟

---

## Nuxt 3.15

**URL:** llms-txt#nuxt-3.15

**Contents:**
- ❄️ Snowfall!
- ⚡️ Vite 6 included
- 🪵 Chromium devtools improvements
- 🗺️ Navigation mode for `callOnce`
- 🥵 HMR for templates, pages + page metadata
- 📋 Page meta enhancements
- 🔥 Performance improvements
- 🐣 v4 updates
- ✅ Upgrading
- Full release notes

We're continuing to work on the release of Nitro v3, Nuxt v4 and more. But we're delighted to ship Nuxt v3.15 (just) in time for Christmas.

Happy holidays! You'll notice when you start Nuxt that (if you're in the Northern Hemisphere) there's some snow on the loading screen ([#29871](https://github.com/nuxt/nuxt/pull/29871){rel="nofollow"}).

## ⚡️ Vite 6 included

Nuxt v3.15 includes [Vite 6](https://vite.dev/blog/announcing-vite6){rel="nofollow"} for the first time. Although this is a major version, we expect that this won't be a breaking change for Nuxt users (see full [migration guide](https://vite.dev/guide/migration.html){rel="nofollow"}). However, please take care if you have dependencies that rely on a particular Vite version.

One of the most significant changes with Vite 6 is the new Environment API, which we hope to use in conjunction with Nitro to improve the server dev environment. Watch this space!

You can read the full list of changes in the [Vite 6 changelog](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#600-2024-11-26){rel="nofollow"}.

## 🪵 Chromium devtools improvements

We talk a lot about the Nuxt DevTools, but v3.15 ships with better integration in dev mode for Chromium-based browser devtools.

We now use the [Chrome DevTools extensibility API](https://developer.chrome.com/docs/devtools/performance/extension){rel="nofollow"} to add support for printing nuxt hook timings in the browser devtools performance panel.

![CleanShot 2024-11-14 at 15 05 22@2x](https://github.com/user-attachments/assets/57525027-750a-462f-b713-398302aec0cd)

## 🗺️ Navigation mode for `callOnce`

`callOnce` is a built-in Nuxt composable for running code only once. For example, if the code runs on the server it won't run again on the client. But sometimes you do want code to run on *every navigation* - just avoid the initial server/client double load. For this, there's a new `mode: 'navigation'` option that will run the code only once *per navigation*. (See [#30260](https://github.com/nuxt/nuxt/pull/30260){rel="nofollow"} for more info.)

## 🥵 HMR for templates, pages + page metadata

We now implement hot module reloading for Nuxt's virtual files (like routes, plugins, generated files) as well as for the content of page metadata (within a `definePageMeta` macro) ([#30113](https://github.com/nuxt/nuxt/pull/30113){rel="nofollow"}).

This should mean you have a faster experience in development, as well as not needing to reload the page when making changes to your routes.

## 📋 Page meta enhancements

We now support extracting extra page meta keys (likely used by module authors) via `experimental.extraPageMetaExtractionKeys` ([#30015](https://github.com/nuxt/nuxt/pull/30015){rel="nofollow"}). This enables module authors to use this information at build time, in the `pages:resolved` hook.

We also now support local functions in `definePageMeta` ([#30241](https://github.com/nuxt/nuxt/pull/30241){rel="nofollow"}). This means you can do something like this:

## 🔥 Performance improvements

We now preload the app manifest in the browser if it will be used when hydrating the app ([#30017](https://github.com/nuxt/nuxt/pull/30017){rel="nofollow"}).

We'll also tree shake vue-router's hash mode history out of your bundle if we can - specifically, if you haven't customised your `app/router.options.ts` ([#30297](https://github.com/nuxt/nuxt/pull/30297){rel="nofollow"}).

If A few more changes shipped for the new defaults for v4, including only inlining styles by default for Vue components ([#30305](https://github.com/nuxt/nuxt/pull/30305){rel="nofollow"}).

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## Full release notes

::read-more
---
color: neutral
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.15.0
---
Read the full release notes of Nuxt `v3.15.0`.
::

A huge thank you to everyone who's been a part of this release. ❤️

Don't hesitate to let us know if you have any feedback or issues! 🙏

**Examples:**

Example 1 (ts):
```ts
await callOnce(() => counter.value++, { mode: 'navigation' })
```

Example 2 (ts):
```ts
function validateIdParam(route) {
  return !!(route.params.id && !isNaN(Number(route.params.id)))
}

definePageMeta({
  validate: validateIdParam,
})
```

Example 3 (sh):
```sh
npx nuxi@latest upgrade --force
```

---

## Use Custom Fetch Composable

**URL:** llms-txt#use-custom-fetch-composable

::read-more{to="https://nuxt.com/docs/guide/recipes/custom-usefetch"}
::

::sandbox
---
branch: main
dir: examples/advanced/use-custom-fetch-composable
file: composables/useCustomFetch.ts
repo: nuxt/examples
---
::

---

## Hello Content

**URL:** llms-txt#hello-content

**Contents:**
- Render Content
- Documentation

vue [pages/[...slug\\].vue]
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div>
    <header><!-- ... --></header>

<ContentRenderer
      v-if="page"
      :value="page"
    />

<footer><!-- ... --></footer>
  </div>
</template>
```

::tip{icon="i-lucide-book"}
Head over to <https://content.nuxt.com>{rel="nofollow"} to learn more about the Content module features, such as how to build queries and use Vue components in your Markdown files with the MDC syntax.
::

**Examples:**

Example 1 (unknown):
```unknown
The module automatically loads and parses them.

## Render Content

To render content pages, add a [catch-all route](https://nuxt.com/docs/3.x/guide/directory-structure/pages/#catch-all-route) using the [`<ContentRenderer>`](https://content.nuxt.com/docs/components/content-renderer){rel="nofollow"} component:
```

---

## Announcing Nuxt 3.0 stable

**URL:** llms-txt#announcing-nuxt-3.0-stable

**Contents:**
- API Stability
- The browser and Node.js support
- We Love Community
- To the Future

We are thrilled to announce the first stable version of Nuxt 3.0.0 ✨

Nuxt 3 is a modern rewrite of the Nuxt framework based on [Vite](https://vitejs.dev/){rel="nofollow"}, [Vue3](https://vuejs.org/){rel="nofollow"}, and [Nitro](https://nitro.unjs.io/){rel="nofollow"} with first-class TypeScript support and the result of more than two years of research, community feedback, innovation, and experiment to make a pleasant full-stack Developer Experience for Vue development to everyone.

[Read More In the Documentation](https://nuxt.com/docs/getting-started/introduction)

Nuxt 3.0.0 comes with a stable, production-ready API and 50+ [supported modules](https://nuxt.com/modules) built using [Nuxt Kit](https://nuxt.com/docs/guide/going-further/modules) by the community and Nuxt team.

All composables, filesystem conventions, and configurations are guaranteed to be backward compatible with Nuxt 3.0.0. Due to the nature of the meta-frameworks, some changes happen when we upgrade the underlying dependencies (vite, rollup, and nitropack). Thanks to the new Nuxt Kit and Schema tools, such upgrades will be backward compatible as long as you are using documented features. Kit and Schema also guarantee better future compatibility. This makes it faster for us to iterate and plan the next major versions of Nuxt.

## The browser and Node.js support

Nuxt 3 officially supports evergreen browsers only. The "core browser set" is what we (And [web.dev](http://web.dev){rel="nofollow"} team) believe most developers need to support most of the time in the absence of specific constraints. It takes into account [usage numbers](https://caniuse.com/usage-table){rel="nofollow"}, developer expectations, and [existing support in](https://make.wordpress.org/core/handbook/best-practices/browser-support/){rel="nofollow"} [the ecosystem](https://angular.io/guide/browser-support){rel="nofollow"}. The core browser set targets the **2 most recent major versions** of Chrome, Firefox, and Edge on a monthly basis and Safari on a yearly basis.

On the server side, Nuxt 3 supports Node.js 14, 16, 18, and 19 at the moment. We encourage everyone to use the latest LTS releases of Node.js, we push them once **widely adopted by major deployment platforms**. This means we keep supporting Node.js versions as long as they are supported by the Node.js team on a rolling basis in non-major releases of Nuxt. Since 14.x is being end-of-life soon, we highly encourage you to update to the latest 18.x whenever possible.

Nuxt wouldn’t be possible today without an amazing community making amazing modules, feedback, and contributions every day. Check our [Community Documentation](https://nuxt.com/docs/community/getting-help){rel="nofollow"} to be involved!

Releasing Nuxt 3 is a big milestone for us and opens a future-proof basis for new ideas and trust for the users to build their enterprise projects with Nuxt 3.

Server Component Islands, WebSocket layer, new Deployment presets, improved CLI and DevTools and Testing infra are a few to mention. Keep an eye on the [roadmap page](https://nuxt.com/docs/community/roadmap){rel="nofollow"} and [GitHub discussions](https://github.com/nuxt/nuxt/discussions){rel="nofollow"} for updates.

NuxtLabs is working on [new product](https://nuxt.studio){rel="nofollow"} and solutions on top of Nuxt 3 at the time of writing this article.

Stay tuned for more exciting news and Happy Nuxting 💚

---

## Nuxt 3.14

**URL:** llms-txt#nuxt-3.14

**Contents:**
  - ⚡️ Faster starts powered by `jiti`
  - 📂 Shared folder for code and types shared with client/server
  - 🦀 `rspack` builder
  - ✨ New composables
  - 🔧 New module utilities
  - 🚧 v4 changes
- 🗺️ Roadmap to v3.15
- ✅ Upgrading
- Full Release Notes

Behind the scenes, a lot has been going on in preparation for the release of Nuxt v4 (particularly on the `unjs` side with preparations for Nitro v3!)

### ⚡️ Faster starts powered by `jiti`

Loading the nuxt config file, as well as modules and other build-time code, is now powered by `jiti` v2. You can see more about the release in the [jiti v2 release notes](https://github.com/unjs/jiti/releases/tag/v2.0.0){rel="nofollow"}, but one of the most important pieces is native node esm import (where possible), which should mean a faster start. ✨

### 📂 Shared folder for code and types shared with client/server

You should never import Vue app code in your nitro code (or the other way around). But this has meant a friction point when it comes to sharing types or utilities that *don't* rely on the nitro/vue contexts.

For this, we have a new `shared/` folder ([#28682](https://github.com/nuxt/nuxt/pull/28682){rel="nofollow"}). You can't import Vue or nitro code *into* files in this folder, but it produces auto-imports (if you're using `compatibilityVersion: 4`) which you can consume throughout the rest of your app.

If needed you can use the new `#shared` alias which points to this folder.

The shared folder is alongside your `server/` folder. (If you're using `compatibilityVersion: 4`, this means it's not inside your `app/` folder.)

### 🦀 `rspack` builder

We're excited to announce a new first-class Nuxt builder for `rspack`. It's still experimental but we've refactored the internal Nuxt virtual file system to use `unplugin` to make this possible.

Let us know if you like it - and feel free to raise any issues you experience with it.

👉 To try it out, you can use [this starter](https://github.com/danielroe/nuxt-rspack-starter){rel="nofollow"} - or just install `@nuxt/rspack-builder` and set `builder: 'rspack'` in your nuxt config file.

### ✨ New composables

We have new `useResponseHeader` and `useRuntimeHook` composables ([#27131](https://github.com/nuxt/nuxt/pull/27131){rel="nofollow"} and [#29741](https://github.com/nuxt/nuxt/pull/29741){rel="nofollow"}).

### 🔧 New module utilities

We now have a new `addServerTemplate` utility ([#29320](https://github.com/nuxt/nuxt/pull/29320){rel="nofollow"}) for adding virtual files for access inside nitro runtime routes.

We've merged some changes which only take effect with `compatibilityVersion: 4`, but which [you can opt-into earlier](https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4).

1. previously, if you had a component like `~/components/App/Header.vue` this would be visible in your devtools as `<Header>`. From v4 we ensure this is `<AppHeader>`, but it's opt-in to avoid breaking any manual `<KeepAlive>` you might have implemented. ([#28745](https://github.com/nuxt/nuxt/pull/28745){rel="nofollow"}).
2. Nuxt scans page metadata from your files, before calling `pages:extend`. But this has led to some confusing behaviour, as pages added at this point do not end up having their page metadata respected. So we now do not scan metadata before calling `pages:extend`. Instead, we have a new `pages:resolved` hook, which is called after `pages:extend`, after all pages have been augmented with their metadata. I'd recommend opting into this by setting `experimental.scanPageMeta` to `after-resolve`, as it solves a number of bugs.

## 🗺️ Roadmap to v3.15

They didn't quite make it in time for v3.14 but for the next minor release you can expect (among other things):

- auto-imported directives from modules ([#29203](https://github.com/nuxt/nuxt/pull/29203){rel="nofollow"})
- 'isolated' page renders ([#29366](https://github.com/nuxt/nuxt/pull/29366){rel="nofollow"})
- delayed hydration ([#26468](https://github.com/nuxt/nuxt/pull/26468){rel="nofollow"})

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## Full Release Notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.14.0
---
Read the full release notes of Nuxt `v3.14.0`.
::

A huge thank you to everyone who's been a part of this release. We have exciting things in store with our next releases! ❤️

Don't hesitate to let us know if you have any feedback or issues! 🙏

**Examples:**

Example 1 (sh):
```sh
npx nuxi@latest upgrade --force
```

---

## bun --bun run dev -o

**URL:** llms-txt#bun---bun-run-dev--o

**Contents:**
- Next Steps

bash [deno]
deno run dev -o
```
::

::tip{icon="i-lucide-circle-check"}
Well done! A browser window should automatically open for <http://localhost:3000>{rel="nofollow"}.
::

Now that you've created your Nuxt project, you are ready to start building your application.

::read-more{title="Nuxt Concepts" to="https://nuxt.com/docs/guide/concepts"}
::

**Examples:**

Example 1 (unknown):
```unknown

```

---

## .gitignore

**URL:** llms-txt#.gitignore

A `.gitignore` file specifies intentionally untracked files that git should ignore.

::read-more
---
icon: i-simple-icons-git
target: _blank
title: the git documentation
to: https://git-scm.com/docs/gitignore
---
::

We recommend having a `.gitignore` file that has **at least** the following entries present:

---

## nuxt build-module

**URL:** llms-txt#nuxt-build-module

**Contents:**
- Arguments
- Options

The `build-module` command runs `@nuxt/module-builder` to generate `dist` directory within your `rootDir` that contains the full build for your **nuxt-module**.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                     |
| `--build`                          | `false` | Build module for distribution                                                    |
| `--stub`                           | `false` | Stub dist instead of actually building it for development                        |
| `--sourcemap`                      | `false` | Generate sourcemaps                                                              |
| `--prepare`                        | `false` | Prepare module for local development                                             |

::read-more
---
icon: i-simple-icons-github
target: \_blank
to: https://github.com/nuxt/module-builder
---
Read more about `@nuxt/module-builder`.
::

---

## Nightly Release Channel

**URL:** llms-txt#nightly-release-channel

**Contents:**
- Opting In
- Opting Out
- Using Nightly `@nuxt/cli`

Nuxt lands commits, improvements, and bug fixes every day. You can opt in to test them earlier before the next release.

After a commit is merged into the `main` branch of [nuxt/nuxt](https://github.com/nuxt/nuxt){rel="nofollow"} and **passes all tests**, we trigger an automated npm release, using GitHub Actions.

You can use these 'nightly' releases to beta test new features and changes.

The build and publishing method and quality of these 'nightly' releases are the same as stable ones. The only difference is that you should often check the GitHub repository for updates. There is a slight chance of regressions not being caught during the review process and by the automated tests. Therefore, we internally use this channel to double-check everything before each release.

::note
Features that are only available on the nightly release channel are marked with an alert in the documentation.
::

::warning
The `latest` nightly release channel is currently tracking the Nuxt v4 branch, meaning that it is particularly likely to have breaking changes right now — be careful! You can opt in to the 3.x branch nightly releases with `"nuxt": "npm:nuxt-nightly@3x"`.
::

Update `nuxt` dependency inside `package.json`:

Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

Update `nuxt` dependency inside `package.json`:

Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

## Using Nightly `@nuxt/cli`

To try the latest version of [nuxt/cli](https://github.com/nuxt/cli){rel="nofollow"}:

::read-more{to="https://nuxt.com/docs/api/commands"}
Read more about the available commands.
::

**Examples:**

Example 1 (unknown):
```unknown
Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

## Opting Out

Update `nuxt` dependency inside `package.json`:
```

Example 2 (unknown):
```unknown
Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

## Using Nightly `@nuxt/cli`

To try the latest version of [nuxt/cli](https://github.com/nuxt/cli){rel="nofollow"}:
```

---

## Announcing Nuxt 3 Release Candidate

**URL:** llms-txt#announcing-nuxt-3-release-candidate

**Contents:**
- A new foundation
- Important notes
- Timeline

We are excited to open source Nuxt 3 after more than a year of intense development. The repository is available on GitHub on [nuxt/nuxt](https://go.nuxt.com/github){rel="nofollow"} under the [MIT](https://go.nuxt.com/license){rel="nofollow"} license.

::tip
The documentation is available on <https://nuxt.com>{rel="nofollow"}.
::

On top of supporting [Vue 3](https://vuejs.org){rel="nofollow"} or [Vite](https://vitejs.dev){rel="nofollow"}, Nuxt 3 contains a new [server engine](https://nuxt.com/docs/guide/concepts/server-engine){rel="nofollow"}, unlocking new full-stack capabilities to Nuxt server and beyond. It's the first JavaScript application server that is portable across a variety of modern cloud hosting providers.

In production, it builds your Vue application and server into one universal `.output` directory. This output is light: minified and without any other Node.js dependencies (except polyfills). You can deploy this output on any system supporting JavaScript, whether Node.js, Serverless, Workers, Edge-side rendering or purely static.

**Bonus:** this server engine can be used on existing Nuxt 2 projects with [Nuxt Bridge](https://nuxt.com/docs/getting-started/bridge){rel="nofollow"} 🚀

Head over the [Nuxt 3 homepage](https://nuxt.com){rel="nofollow"} to learn more about Nuxt Nitro and Nuxt Bridge.

Nuxt 3 is currently in beta, so expect things to break (and be fixed quickly). We have [plenty of work left](https://github.com/nuxt/nuxt/issues){rel="nofollow"} but we want to open it publicly to gather feedback and contributions from the community 💚

**Do not use it for production until we reach the first release candidate.**

During the beta, almost every commit will [trigger a new npm release](https://github.com/nuxt/nuxt/blob/main/.github/workflows/ci.yml#L111-L119){rel="nofollow"}; you may want to look at the [merged pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel="nofollow"} until we begin generating automated changelogs in the documentation.

We are working every day to improve the documentation, explaining as much as possible all the concepts, features and usage of Nuxt 3.

Check out the community section of the Nuxt 3 website for [getting help](https://nuxt.com/docs/community/getting-help){rel="nofollow"}, [reporting bugs](https://nuxt.com/docs/community/reporting-bugs){rel="nofollow"} or [contributing to the framework](https://nuxt.com/docs/community/contribution){rel="nofollow"}.

Here some major milestones we've achieved on the way to Nuxt 3:

- **Jul 2, 2020**: Nuxt 3 first commit with full TypeScript rewrite
- **Aug 7, 2020**: Webpack 5 support
- **Sep 15, 2020**: [`pages/`](https://nuxt.com/docs/guide/directory-structure/pages){rel="nofollow"} support
- **Oct 29, 2020**: [Vue 3](https://vuejs.org){rel="nofollow"} support with bundle-renderer
- **Nov 2, 2020**: [Nuxt Nitro](https://nuxt.com/guide/concepts/server-engine){rel="nofollow"} initial work
- **Jan 22, 2021**: Initial [Vite](https://vitejs.dev){rel="nofollow"} support
- **Feb 4, 2021**: Nuxt can deploy on [major serverless platforms](https://nuxt.com/docs/getting-started/deployment){rel="nofollow"}
- **Mar 6, 2021**: [UnJS](https://github.com/unjs){rel="nofollow"} organisation created on GitHub
- **Mar 28, 2021**: Init Nuxt Kit and Nuxt CLI ([nuxi](https://nuxt.com/docs/api/commands/add){rel="nofollow"})
- **May 20, 2021**: [`app.vue`](https://nuxt.com/docs/guide/directory-structure/app){rel="nofollow"} support (`pages/` becomes optional)
- **Jun 30, 2021**: [`layouts/`](https://nuxt.com/docs/guide/directory-structure/layouts){rel="nofollow"} support
- **Jul 15, 2021**: Native ESM support
- **Aug 10, 2021**: Auto import of composables and components
- **Sep 5, 2021**: Init [Nuxt Bridge](https://nuxt.com/docs/bridge/overview){rel="nofollow"} for improving Nuxt 2 experience
- **Sep 7, 2021**: Support Vite build for production
- **Oct 11, 2021**: Add [`useState`](https://nuxt.com/docs/getting-started/state-management){rel="nofollow"} and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch){rel="nofollow"} composables

So far, we've merged [385 pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel="nofollow"}, closed [229 issues](https://github.com/nuxt/nuxt/issues?q=is%3Aissue+is%3Aclosed){rel="nofollow"} and made [925+ commits](https://github.com/nuxt/nuxt/commits/main){rel="nofollow"}.

We are excited to hear your thoughts and we thank you for your patience.

Now you can go over the [Nuxt 3 documentation](https://nuxt.com){rel="nofollow"} 😊

Don't forget to follow us on [Twitter](https://x.com/nuxt_js){rel="nofollow"} to get the latest news about Nuxt!

---

## Nuxt UI v4

**URL:** llms-txt#nuxt-ui-v4

**Contents:**
- Build anything, faster than ever
- From design to code, seamlessly
- An upgraded developer experience
  - Effortless migration
  - A refined documentation
  - Ready for the next wave of AI
- A thank you to our pro users
- Start building today
- The future is open

Today, we’re releasing [**Nuxt UI v4**](https://ui.nuxt.com){rel="nofollow"}, a major milestone that sets a new standard for our component library. With this release, we are unifying Nuxt UI and Nuxt UI Pro into a single, powerful, and completely free open-source library.

This marks an exciting new chapter for the Vue and Nuxt ecosystems, made possible by [NuxtLabs joining Vercel](https://nuxtlabs.com){rel="nofollow"}. Our shared commitment to the open-source community has allowed us to make every component, from a [simple button](https://ui.nuxt.com/docs/components/button){rel="nofollow"} to the most advanced [dashboard sidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar){rel="nofollow"}, accessible to everyone.

What was previously a premium offering is now available to all. Over 100 components, advanced sections, and [production-ready templates](https://ui.nuxt.com/templates){rel="nofollow"} are now yours to build with, unified in one place.

## Build anything, faster than ever

Nuxt UI v4 makes it easy to build modern, polished apps quickly. You can create complex interfaces like landing pages, pricing pages, docs, blogs, portfolios, etc. without starting from scratch.

This is possible because Nuxt UI v4 unifies everything you need into a single `@nuxt/ui` package:

- **110+ components:** An extensive library to build anything from simple websites to complex applications.
- **12 free templates:** Start your next project in minutes with a production-ready template for a [Landing Page](https://landing-template.nuxt.dev){rel="nofollow"}, [SaaS](https://saas-template.nuxt.dev){rel="nofollow"}, [Dashboard](https://dashboard-template.nuxt.dev){rel="nofollow"}, [Docs site](https://docs-template.nuxt.dev){rel="nofollow"}, [Portfolio](https://portfolio-template.nuxt.dev){rel="nofollow"}, [Chat app](https://chat-template.nuxt.dev){rel="nofollow"}, or [Changelog](https://changelog-template.nuxt.dev){rel="nofollow"}.
- **Rich Content & Typography:** Beautifully render Markdown and build content-rich sites with our advanced prose components, fully integrated with Nuxt Content.
- **Vue and Nuxt Compatibility:** Works in any Vue or Nuxt project, as well as [Adonis](https://github.com/nuxt-ui-templates/starter-adonis){rel="nofollow"} and [Laravel](https://github.com/nuxt-ui-templates/starter-laravel){rel="nofollow"}.

The entire Pro suite is now yours. Build with powerful components previously exclusive to our paid users, now free for everyone.

::tabs{.gap-0}
  :::div{label="index.vue"}
  
  :::

:::code-preview
  ---
  ui:
    preview: p-0
  class: "[&>div]:*:my-0 w-full"
  label: Preview
  ---
    ::::index-example
    ::::
  :::
::

## From design to code, seamlessly

A successful project starts with a solid design system. In v4, we are releasing the **complete Figma Kit** for free, mirroring the entire component library.

With over **2,000 component variants and design tokens**, you now have a single Figma entry point that contains every component along with detailed explanations about structure and usage. Designers and developers work from the same comprehensive source, making collaboration seamless and ensuring a perfect match between design and implementation.

::u-button
---
class: mb-4
icon: i-simple-icons-figma
label: Get the Figma Kit →
target: _blank
to: https://go.nuxt.com/figma-ui
---
::

::carousel
---
items:
  - /assets/blog/figma-kit/1.png
  - /assets/blog/figma-kit/2.png
  - /assets/blog/figma-kit/3.png
---
::

## An upgraded developer experience

Beyond new components, v4 brings significant improvements to your workflow.

### Effortless migration

Unlike the major overhaul from v2 to v3, the migration to v4 is simple. This release focuses on unification, not breaking changes. Most components work identically, and your existing code will remain largely intact.

Check out our [migration guide](https://ui.nuxt.com/getting-started/migration/v4){rel="nofollow"} for a complete walkthrough.

### A refined documentation

We've completely overhauled our documentation to make it clearer and more intuitive. We’ve restructured the layout and split complex topics into dedicated pages, ensuring you can find the information you need, faster.

Our documentation is also now fully AI-ready. It's powered by our new &#x2A;*[Model Context Protocol (MCP) server](https://ui.nuxt.com/docs/getting-started/ai/mcp){rel="nofollow"}*&#x2A;, which allows AI tools like Cursor to access component documentation and metadata directly. In addition, we provide &#x2A;*[`LLMs.txt` files](https://ui.nuxt.com/docs/getting-started/ai/llms-txt){rel="nofollow"}**, a structured format that enables any AI assistant to understand our components, theming, and best practices. Your AI tools now have first-class access to our entire library, right inside your editor.

### Ready for the next wave of AI

Our AI chat components now support **Vercel's AI SDK v5**. The new `Chat` class and message format (with `parts`) ensure compatibility with the latest AI SDK improvements, keeping you at the forefront of AI development.

## A thank you to our pro users

We want to extend a special thanks to everyone who supported Nuxt UI Pro. Your early adoption and feedback were instrumental in shaping Nuxt UI. You helped us fund, maintain, and improve the project, allowing us to reach this milestone where we can now offer these powerful tools to the entire community.

Your support made this moment possible.

## Start building today

Get started with Nuxt UI v4 by creating a new project with any of our free templates:

Or add it to your existing project:

## The future is open

With a unified codebase and the backing of Vercel, we're more excited than ever to push the boundaries of component development. This release wouldn't have been possible without the support of our amazing community, and every contributor who has helped shape Nuxt UI.

We can't wait to see what you build. The future of UI development is free, open, and more powerful than ever.

*Ready to get started? Check out the [documentation](https://ui.nuxt.com){rel="nofollow"} and join our [Discord community](https://discord.nuxt.com){rel="nofollow"} to connect with other developers building amazing things with Nuxt UI.*

**Examples:**

Example 1 (vue):
```vue
<template>
      <UApp>
        <UHeader>
          <UNavigationMenu :items="navigation" />
          <template #right>
            <UColorModeButton />
            <UButton icon="i-simple-icons-github" />
          </template>
        </UHeader>
  
        <UPageHero
          title="Nuxt UI - Starter"
          description="Nuxt UI is a free and open-source UI library for Nuxt applications. Create beautiful & responsive applications in minutes."
          :links="heroLinks"
        />
  
        <UPageSection
          title="The freedom to build anything"
          description="Nuxt UI ships with a comprehensive set of components that cover a wide range of use-cases. Carefully crafted to reduce boilerplate code without sacrificing flexibility."
          :features="features"
        />
  
        <UPageSection title="Pricing">
          <UPricingPlans :plans="plans" />
        </UPageSection>
  
        <UPageSection>
          <UPageCTA
            title="Start with Nuxt UI today!"
            description="Nuxt UI is a free and open-source UI library for Nuxt applications."
            variant="subtle"
            :links="ctaLinks"
          />
        </UPageSection>
  
        <UFooter :items="footerItems" />
      </UApp>
    </template>
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

## Framework

**URL:** llms-txt#framework

**Contents:**
- Monorepo Guide
- Setup
  - Playground
  - Testing
  - Linting
  - Documentation
  - Final Checklist
- Documentation Guide
  - Quick Edits
  - Longer Edits

Once you've read the [general contribution guide](https://nuxt.com/docs/3.x/community/contribution), here are some specific points to make about contributions to the [`nuxt/nuxt`](https://github.com/nuxt/nuxt){rel="nofollow"} repository.

- `packages/kit`: Toolkit for authoring Nuxt Modules, published as [`@nuxt/kit`](https://npmjs.com/package/@nuxt/kit){rel="nofollow"}.
- `packages/nuxt`: The core of Nuxt, published as [`nuxt`](https://npmjs.com/package/nuxt){rel="nofollow"}.
- `packages/schema`: Cross-version Nuxt typedefs and defaults, published as [`@nuxt/schema`](https://npmjs.com/package/@nuxt/schema){rel="nofollow"}.
- `packages/rspack`: The [Rspack](https://rspack.dev){rel="nofollow"} bundler for Nuxt, published as [`@nuxt/rspack-builder`](https://npmjs.com/package/@nuxt/rspack-builder){rel="nofollow"}.
- `packages/vite`: The [Vite](https://vite.dev){rel="nofollow"} bundler for Nuxt, published as [`@nuxt/vite-builder`](https://npmjs.com/package/@nuxt/vite-builder){rel="nofollow"}.
- `packages/webpack`: The [webpack](https://webpack.js.org){rel="nofollow"} bundler for Nuxt, published as [`@nuxt/webpack-builder`](https://npmjs.com/package/@nuxt/webpack-builder){rel="nofollow"}.

To contribute to Nuxt, you need to set up a local environment.

1. [Fork](https://help.github.com/articles/fork-a-repo){rel="nofollow"} the [`nuxt/nuxt`](https://github.com/nuxt/nuxt){rel="nofollow"} repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository){rel="nofollow"} it to your local device.
2. Ensure using the latest [Node.js](https://nodejs.org/en){rel="nofollow"} (20.x)
3. Enable [Corepack](https://github.com/nodejs/corepack){rel="nofollow"} to have `pnpm` and `yarn`
   
4. Run `pnpm install --frozen-lockfile` to Install the dependencies with pnpm:

:note[If you are adding a dependency, please use `pnpm add`. :br
   The `pnpm-lock.yaml` file is the source of truth for all Nuxt dependencies.]
5. Activate the passive development system

6. Check out a branch where you can work and commit your changes:

Then, test your changes against the [playground](https://nuxt.com/#playground) and [test](https://nuxt.com/#testing) your changes before submitting a pull request.

While working on a pull request, you will likely want to check if your changes are working correctly.

You can modify the example app in `playground/`, and run:

::important
Please make sure not to commit it to your branch, but it could be helpful to add some example code to your PR description. This can help reviewers and other Nuxt users understand the feature you've built in-depth.
::

Every new feature should have a corresponding unit test (if possible). The `test/` directory in this repository is currently a work in progress, but do your best to create a new test following the example of what's already there.

Before creating a PR or marking it as ready-to-review, ensure that all tests pass by running:

You might have noticed already that we use ESLint to enforce a coding standard.

Before committing your changes, to verify that the code style is correct, run:

::note
You can use `pnpm lint --fix` to fix most of the style changes. :br
If there are still errors left, you must correct them manually.
::

If you are adding a new feature or refactoring or changing the behavior of Nuxt in any other manner, you'll likely want to document the changes. Please include any changes to the docs in the same PR. You don't have to write documentation up on the first commit (but please do so as soon as your pull request is mature enough).

::important
Make sure to make changes according to the [Documentation Style Guide](https://nuxt.com/docs/3.x/community/contribution#documentation-style-guide).
::

When submitting your PR, there is a simple template that you have to fill out. Please tick all appropriate "answers" in the checklists.

## Documentation Guide

If you spot an area where we can improve documentation or error messages, please do open a PR - even if it's just to fix a typo!

::important
Make sure to make changes according to the [Documentation Style Guide](https://nuxt.com/docs/3.x/community/contribution#documentation-style-guide).
::

If you spot a typo or want to rephrase a sentence, you can click on the **Edit this page** link located on the right aside in the **Community** section.

Make the change directly in the GitHub interface and open a Pull Request.

The documentation content is inside the `docs/` directory of the [nuxt/nuxt](https://github.com/nuxt/nuxt){rel="nofollow"} repository and written in markdown.

::note
To preview the docs locally, follow the steps on [nuxt/nuxt.com](https://github.com/nuxt/nuxt.com){rel="nofollow"} repository.
::

::note
We recommend that you install the [MDC extension](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc){rel="nofollow"} for VS Code.
::

Documentation is linted using [MarkdownLint](https://github.com/DavidAnson/markdownlint){rel="nofollow"} and [case police](https://github.com/antfu/case-police){rel="nofollow"} to keep the documentation cohesive.

::note
You can also run `pnpm lint:docs:fix` to highlight and resolve any lint issues.
::

Please make sure your PR title adheres to the [conventional commits](https://www.conventionalcommits.org){rel="nofollow"} guidelines.

**Examples:**

Example 1 (unknown):
```unknown
4. Run `pnpm install --frozen-lockfile` to Install the dependencies with pnpm:
```

Example 2 (unknown):
```unknown
:note[If you are adding a dependency, please use `pnpm add`. :br
   The `pnpm-lock.yaml` file is the source of truth for all Nuxt dependencies.]
5. Activate the passive development system
```

Example 3 (unknown):
```unknown
6. Check out a branch where you can work and commit your changes:
```

Example 4 (unknown):
```unknown
Then, test your changes against the [playground](https://nuxt.com/#playground) and [test](https://nuxt.com/#testing) your changes before submitting a pull request.

### Playground

While working on a pull request, you will likely want to check if your changes are working correctly.

You can modify the example app in `playground/`, and run:
```

---

## Testing

**URL:** llms-txt#testing

::read-more{to="https://nuxt.com/docs/getting-started/testing"}
::

::sandbox
---
branch: main
dir: examples/advanced/testing
file: app.vue
repo: nuxt/examples
---
::

---

## useState

**URL:** llms-txt#usestate

**Contents:**
- Usage
- Using `shallowRef`
- Type

::read-more{to="https://nuxt.com/docs/getting-started/state-management"}
::

::important
Because the data inside `useState` will be serialized to JSON, it is important that it does not contain anything that cannot be serialized, such as classes, functions or symbols.
::

::warning
`useState` is a reserved function name transformed by the compiler, so you should not name your own function `useState`.
::

::video-accordion
---
title: Watch a video from Alexander Lichter about why and when to use useState
video-id: mv0WcBABcIk
---
::

## Using `shallowRef`

If you don't need your state to be deeply reactive, you can combine `useState` with [`shallowRef`](https://vuejs.org/api/reactivity-advanced.html#shallowref){rel="nofollow"}. This can improve performance when your state contains large objects and arrays.

- `key`: A unique key ensuring that data fetching is properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file and line number of the instance of [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) will be generated for you.
- `init`: A function that provides initial value for the state when not initiated. This function can also return a `Ref`.
- `T`: (typescript only) Specify the type of state

**Examples:**

Example 1 (ts):
```ts
// Create a reactive state and set default value
const count = useState('counter', () => Math.round(Math.random() * 100))
```

Example 2 (ts):
```ts
const state = useState('my-shallow-state', () => shallowRef({ deep: 'not reactive' }))
// isShallow(state) === true
```

---

## The Evolution of Shiki v1.0

**URL:** llms-txt#the-evolution-of-shiki-v1.0

**Contents:**
- The Start
- The Fork - Shikiji
- Merging Back
- Twoslash
- Integrations
- Conclusions

[Shiki](https://github.com/shikijs/shiki){rel="nofollow"} is a syntax highlighter that uses [TextMate grammars and themes](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#textmate-grammars){rel="nofollow"}, the same engine that powers VS Code. It provides one of the most accurate and beautiful syntax highlighting for your code snippets. It was created by [Pine Wu](https://github.com/octref){rel="nofollow"} back in 2018, when he was part of the VS Code team. It started as an experiment to use [Oniguruma](https://github.com/microsoft/vscode-oniguruma){rel="nofollow"} to do syntax highlighting.

Different from existing syntax highlighters like [Prism](https://prismjs.com/){rel="nofollow"} and [Highlight.js](https://highlightjs.org/){rel="nofollow"} that designed to run in the browser, Shiki took a different approach by **highlighting ahead of time**. It ships the highlighted HTML to the client, producing accurate and beautiful syntax highlighting with **zero JavaScript**. It soon took off and became a very popular choice, especially for static site generators and documentation sites.

::collapsible{name="Shiki Example"}
For example, with the code snippet below:

Shiki will generate the following HTML:

It might look a bit overwhelming if you read it, but **this piece of HTML works everywhere without any JavaScript or CSS**. TextMate grammars has a very rich representation of the types of every token (TextMate scopes). Since Shiki flattens all the tokens into styled spans, it achieves accurate results that most traditional CSS-based highlighters have difficulties achieving.
::

While Shiki is awesome, it's still a library that is designed to run on Node.js. This means it is limited to highlighting static code only and would have trouble with dynamic code, because Shiki doesn't work in the browser. In addition, Shiki relies on the WASM binary of Oniguruma, as well as a bunch of heavy grammar and theme files in JSON. It uses Node.js filesystem and path resolution to load these files, which is not accessible in the browser.

To improve that situation, I [started this RFC](https://github.com/shikijs/shiki/issues/91){rel="nofollow"} that later landed with [this PR](https://github.com/shikijs/shiki/pull/109){rel="nofollow"} and shipped in Shiki v0.9. While it abstracted the file loading layer to use fetch or filesystem based on the environment, it's still quite complicated to use as you need to serve the grammars and theme files somewhere in your bundle or CDN manually, then call the `setCDN` method to tell Shiki where to load these files.

The solution is not perfect but at least it made it possible to run Shiki in the browser to highlight dynamic content. We have been using that approach since then - until the story of this article began.

Nuxt is putting a lot effort in pushing the [web to the edge](https://nuxt.com/blog/nuxt-on-the-edge), making the web more accessible with lower latency and better performance. Like CDN servers, edge hosting services such as [CloudFlare Workers](https://workers.cloudflare.com/){rel="nofollow"} are deployed all over the world. Users get the content from the nearest edge server without the round trips to the origin server which could be thousands of miles away. With the awesome benefits it provides, it also comes with some trade-offs. For example, edge servers use a restricted runtime environment. CloudFlare Workers also does not support file system access and usually don't preserve the state between requests. While Shiki's main overhead is loading the grammars and themes upfront, that wouldn't work well in the edge environment.

It all started with a chat between [Sébastien](https://x.com/Atinux){rel="nofollow"} and me. We were trying to make [Nuxt Content](https://github.com/nuxt/content){rel="nofollow"} which uses Shiki to highlight the code blocks, to work on the edge.

![Chat History Between Sébastien and Anthony](https://nuxt.com/assets/blog/shiki-start-chat.png){.rounded-lg.shadow.max-w-[700px].border.dark:border-gray-700}

I started the experiments by patching [`shiki-es`](https://github.com/pi0/shiki-es){rel="nofollow"} (a ESM build of Shiki by [Pooya Parsa](https://github.com/pi0){rel="nofollow"}) locally, to convert the grammars and themes files into [ECMAScript Module (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules){rel="nofollow"} so that it could be understood and bundled by the build tools. This was done to create the code bundle for CloudFlare Workers to consume without using the filesystem nor making network requests.

We need to wrap the JSON files into ESM as inline literal so that we can use [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import){rel="nofollow"} to dynamically import them. The difference is that `import()` is a standard JavaScript feature that works everywhere, while `fs.readFile` is a Node.js specific API that only works in Node.js. Having `import()` statically would also make bundlers like [Rollup](https://rollupjs.org/){rel="nofollow"} and [webpack](https://webpack.js.org/){rel="nofollow"} able to construct the module relationship graph and [emit the bundled code as chunks](https://rollupjs.org/tutorial/#code-splitting){rel="nofollow"}.

Then, I realized that it actually takes more than that to make it work on edge runtimes. Since bundlers expect imports to be resolvable at build time (meaning that in order to support all the languages and themes), we need to list all the import statements in every single grammar and theme file in the codebase. This would end up with a huge bundle size with a bunch of grammars and themes that you might not actually use. This problem is particularly important in the edge environment, where the bundle size is critical for performance.

So, we needed to figure out a better middle ground to make it work better.

## The Fork - Shikiji

Knowing this might fundamentally change the way Shiki works, and since we don't want to risk breaking the existing Shiki users with our experiments, I started a fork of Shiki called [Shikiji](https://github.com/antfu/shikiji){rel="nofollow"}. I rewrote the code from scratch while keeping the previous API design decisions in mind. The goal is to make Shiki runtime-agnostic, performant and efficient, like the philosophy we have at [UnJS](https://github.com/unjs){rel="nofollow"}.

To make that happen, we need to make Shikiji completely ESM-friendly, pure and [tree-shakable](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking){rel="nofollow"}. This goes all the way up to the dependencies of Shiki such as [`vscode-oniguruma`](https://github.com/microsoft/vscode-oniguruma){rel="nofollow"} and [`vscode-textmate`](https://github.com/microsoft/vscode-textmate){rel="nofollow"}, which are provided in [Common JS (CJS)](https://requirejs.org/docs/commonjs.html){rel="nofollow"} format. `vscode-oniguruma` also contains a WASM binding generated by [`emscripten`](https://github.com/emscripten-core/emscripten){rel="nofollow"} that contains [dangling promises](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md){rel="nofollow"} that will make CloudFlare Workers fail to finish the request. We ended up by embedding the WASM binary into a [base64 string](https://en.wikipedia.org/wiki/Base64){rel="nofollow"} and shipping it as an ES module, manually rewriting the WASM binding to avoid dangling promises, and [vendored `vscode-textmate`](https://github.com/shikijs/shiki/blob/main/CONTRIBUTING.md#clone){rel="nofollow"} to compile from its source code and produce the efficient ESM output.

The end result was very promising. We managed to get Shikiji working on any runtime environment, with even the possibility to [import it from CDN and run in the browser](https://shiki.style/guide/install#cdn-usage){rel="nofollow"} with a single line of code.

We also took the chance to improve the API and the internal architecture of Shiki. We switched from simple string concatenation to use [`hast`](https://github.com/syntax-tree/hast){rel="nofollow"}, creating an Abstract Syntax Tree (AST) for generating the HTML output. This opens up the possibility of exposing a [Transformers API](https://shiki.style/guide/transformers){rel="nofollow"} to allow users to modify the intermediate HAST and do many cool integrations that would be very hard to achieve previously.

Dark/Light mode support [was a frequently requested feature](https://github.com/shikijs/shiki/issues/33){rel="nofollow"}. Because of the static approach Shiki takes, it won't be possible to change the theme on the fly at rendering. The solution in the past was to generate the highlighted HTML twice, and toggle their visibility based on the user's preference - it wasn't efficient as it duplicate the payload, or used [CSS variables theme](https://github.com/shikijs/shiki/pull/212){rel="nofollow"} which lost the granular highlighting Shiki is great for. With the new architecture that Shikiji has, I took a step back and rethought the problem, and [came up with the idea](https://github.com/shikijs/shiki/issues/33#issuecomment-1676362336){rel="nofollow"} of breaking down the common tokens and merge multiple themes as inlined CSS variables, which provide efficient output while aligning with the Shiki's philosophy. You can learn more about it in [Shiki's documentation](https://shiki.style/guide/dual-themes){rel="nofollow"}.

To make the migration easier, we also created the [`shikiji-compat` compatibility layer](https://shikiji.netlify.app/guide/compat){rel="nofollow"}, which uses Shikiji's new foundation and provides backward compatibility API.

To get Shikiji to work on Cloudflare Workers, we had one last challenge as they don't support [initiating WASM instance](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static){rel="nofollow"}s from inlined binary data. Instead it requires importing the static `.wasm` assets for security reasons. This means that our "All-in-ESM" approach does not work well on CloudFlare. This would require extra work for users to provide different WASM sources, which makes the experience more difficult than we intended. At this moment, [Pooya Parsa](https://github.com/pi0){rel="nofollow"} stepped in and made the universal layer [`unjs/unwasm`](https://github.com/unjs/unwasm){rel="nofollow"}, which supports the upcoming [WebAssembly/ES Module Integration](https://github.com/WebAssembly/esm-integration/tree/main/proposals/esm-integration){rel="nofollow"} proposal. It has been integrated into [Nitro to have automated WASM targets](https://github.com/unjs/nitro/pull/2037){rel="nofollow"}. We hope that `unwasm` will help developers to have a better experience when working with WASM.

Overall, the Shikiji rewrite works well. [Nuxt Content](https://github.com/nuxt/content){rel="nofollow"}, [VitePress](https://vitepress.dev/){rel="nofollow"} and [Astro](https://astro.build/){rel="nofollow"} have been migrated to it. The feedback we have received has also been very positive.

I am a team member of Shiki and have helped to do releases from time to time. While [Pine](https://github.com/octref){rel="nofollow"} is the lead of Shiki, he was busy on other stuff and Shiki's iterations slowed down. During the experiments in Shikiji, I [proposed a few improvements](https://github.com/shikijs/shiki/issues/510){rel="nofollow"} that could help Shiki acquire a modern structure. While generally everyone agreed with that direction, there would have been quite a lot of work to do and no one started to work on that.

While we were happy to use Shikiji to solve the problems we had, we certainly didn't want to see the community split by two different versions of Shiki. After a call with Pine, we made the consensus to merge the two projects into one:

::read-more
---
color: purple
icon: i-octicon-git-merge-24
to: https://github.com/shikijs/shiki/pull/557
---
feat!: merge Shikiji back into Shiki for v1.0 [#557]{.opacity-50}
::

We are really happy to see that our work in Shikiji has been merged back to Shiki, that not only works for ourselves, but also benefits the entire community. With this merge, it **solves around 95% of the open issues** we have had in Shiki for years:

![Shikiji Merged Back to Shiki](https://nuxt.com/assets/blog/shiki-merge-pr.png){.rounded-lg.shadow}

Shiki now also got [a brand new documentation site](https://shiki.style/){rel="nofollow"} where you can also play it right in your browser (thanks to the agnostic approach!). Many frameworks now has built-in integration with Shiki, maybe you are already using it somewhere!

[Twoslash](https://github.com/twoslashes/twoslash){rel="nofollow"} is an integration tool to retrieve type information from [TypeScript Language Services](https://github.com/microsoft/TypeScript/wiki/Using-the-Language-Service-API){rel="nofollow"} and generated to your code snippet. It essentially make your static code snippet to have hover type information similar to your VS Code editor. It's made by [Orta Therox](https://github.com/orta){rel="nofollow"} for the [TypeScript documentation site](https://github.com/microsoft/TypeScript-Website){rel="nofollow"}, there you can find [the original source code here](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher){rel="nofollow"}. Orta also created the [Twoslash integration for Shiki v0.x versions](https://github.com/shikijs/twoslash){rel="nofollow"}. Back then, Shiki [did not have proper plugin system](https://github.com/shikijs/shiki/issues/380){rel="nofollow"}, that makes the `shiki-twoslash` had to be built as a wrapper over Shiki, make it a bit hard to set up as the existing Shiki integrations won't directly work with Twoslash.

We also took the chance to revise the Twoslash integrations when we were rewriting Shikiji, also a way to [dog-fooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food){rel="nofollow"} and verify the extensibility. With the new HAST internal, we are able to [integrate Twoslash as a transformer plugin](https://shiki.style/packages/twoslash){rel="nofollow"}, making it works everywhere that Shiki works and also in a composable way to be used with other transformers.

With this, we started to think that we could probably get Twoslash to work on [nuxt.com](https://nuxt.com), the website you are looking at. nuxt.com uses [Nuxt Content](https://github.com/nuxt/content){rel="nofollow"} under the hood, and different from other documentation tools like VitePress, one of the benefits Nuxt Content provides is that it's able to handle dynamic content and runs on the edge. Since Twoslash is relying on TypeScript as well as the giant types modules graph from your dependencies, that would be not ideal to ship all those things to the edge or browser. Sounds tricky, but challenge accepted!

We first come up of fetching the types on-demand from CDN, using the [Auto-Type-Acquisition](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata){rel="nofollow"} technique that you will see on the [TypeScript playground](https://www.typescriptlang.org/play){rel="nofollow"}. We made the [`twoslash-cdn`](https://github.com/antfu/twoslash-cdn){rel="nofollow"} that allows Twoslash to run in any runtime. However, still, it sounds like not the most optimal solution, as it would still require to make many network requests that might defeat the purpose of running on the edge.

After a few iterations on the underlying tools (e.g. on [`@nuxtjs/mdc`](https://github.com/nuxt-modules/mdc/pull/129){rel="nofollow"}, the markdown compiler used by Nuxt Content), we managed to take the hybrid approach and made [`nuxt-content-twoslash`](https://github.com/antfu/nuxt-content-twoslash){rel="nofollow"} that runs Twoslash on build time and caches the results for edge rendering. This way we could avoid shipping any extra dependencies to the final bundle, but still have the rich interactive code snippets on the website:

During that, we also took the chance to refactor [Twoslash](https://github.com/twoslashes/twoslash){rel="nofollow"} with Orta to have a more efficient and modern structure. It also allows us have [`twoslash-vue`](https://github.com/twoslashes/twoslash/tree/main/packages/twoslash-vue){rel="nofollow"} that provides the [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html){rel="nofollow"} support as you are playing above. It's powered by [Volar.js](https://github.com/volarjs/volar.js){rel="nofollow"} and [`vuejs/language-tools`](https://github.com/vuejs/language-tools){rel="nofollow"}. With Volar growing to be framework agnostic and frameworks to work together, we are looking forward to see such integrations to expand to more syntaxes like Astro and Svelte components files in the future.

If you want to give Shiki a try in your own website, here you can find some integrations that we have made:

- [Nuxt](https://shiki.style/packages/nuxt){rel="nofollow"}
  - If using [Nuxt Content](https://content.nuxt.com/){rel="nofollow"}, Shiki is [build-in](https://content.nuxt.com/get-started/configuration#highlight){rel="nofollow"}. For Twoslash, you can add [`nuxt-content-twoslash`](https://github.com/antfu/nuxt-content-twoslash){rel="nofollow"} on top.
  - If not, you can use [`nuxt-shiki`](https://github.com/pi0/nuxt-shiki){rel="nofollow"} to use Shiki as Vue component or composibles.
- [VitePress](https://shiki.style/packages/vitepress){rel="nofollow"}
  - Shiki is [built-in](https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks){rel="nofollow"}. For Twoslash, you can use [`vitepress-twoslash`](https://shiki.style/packages/vitepress#twoslash){rel="nofollow"}.
- Low-level integrations - Shiki provides official integrations for markdown compilers:

- [`markdown-it`](https://shiki.style/packages/markdown-it){rel="nofollow"} - Plugin for [`markdown-it`](https://github.com/markdown-it/markdown-it){rel="nofollow"}
  - [`rehype`](https://shiki.style/packages/rehype){rel="nofollow"} - Plugin for [`rehype`](https://github.com/rehypejs/rehype){rel="nofollow"}

Check out more integrations on [Shiki's Documentation](https://shiki.style/){rel="nofollow"}

**Our mission at Nuxt is not only to make a better framework for developers, but also to make the entire frontend and web ecosystem a better place.** We are keeping pushing the boundaries and endorse the modern web standards and best practices. We hope you enjoy the new [Shiki](https://github.com/shikijs/shiki){rel="nofollow"}, [unwasm](https://github.com/unjs/unwasm){rel="nofollow"}, [Twoslash](https://github.com/twoslashes/twoslash){rel="nofollow"} and many other tools we made in the process of making Nuxt and the web better.

**Examples:**

Example 1 (ts):
```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
})
```

Example 2 (html):
```html
<pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8" tabindex="0">
  <code>
    <span class="line"><span style="color:#89DDFF;font-style:italic">export</span><span style="color:#89DDFF;font-style:italic"> default</span><span style="color:#82AAFF"> defineNuxtConfig</span><span style="color:#BABED8">(</span><span style="color:#89DDFF">{</span></span>
    <span class="line"><span style="color:#F07178">  modules</span><span style="color:#89DDFF">:</span><span style="color:#BABED8"> [</span></span>
    <span class="line"><span style="color:#89DDFF">    '</span><span style="color:#C3E88D">@nuxt/content</span><span style="color:#89DDFF">'</span><span style="color:#89DDFF">,</span></span>
    <span class="line"><span style="color:#BABED8">  ]</span><span style="color:#89DDFF">,</span></span>
    <span class="line"><span style="color:#89DDFF">}</span><span style="color:#BABED8">)</span></span>
  </code>
</pre>
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
We need to wrap the JSON files into ESM as inline literal so that we can use [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import){rel="nofollow"} to dynamically import them. The difference is that `import()` is a standard JavaScript feature that works everywhere, while `fs.readFile` is a Node.js specific API that only works in Node.js. Having `import()` statically would also make bundlers like [Rollup](https://rollupjs.org/){rel="nofollow"} and [webpack](https://webpack.js.org/){rel="nofollow"} able to construct the module relationship graph and [emit the bundled code as chunks](https://rollupjs.org/tutorial/#code-splitting){rel="nofollow"}.

Then, I realized that it actually takes more than that to make it work on edge runtimes. Since bundlers expect imports to be resolvable at build time (meaning that in order to support all the languages and themes), we need to list all the import statements in every single grammar and theme file in the codebase. This would end up with a huge bundle size with a bunch of grammars and themes that you might not actually use. This problem is particularly important in the edge environment, where the bundle size is critical for performance.

So, we needed to figure out a better middle ground to make it work better.

## The Fork - Shikiji

Knowing this might fundamentally change the way Shiki works, and since we don't want to risk breaking the existing Shiki users with our experiments, I started a fork of Shiki called [Shikiji](https://github.com/antfu/shikiji){rel="nofollow"}. I rewrote the code from scratch while keeping the previous API design decisions in mind. The goal is to make Shiki runtime-agnostic, performant and efficient, like the philosophy we have at [UnJS](https://github.com/unjs){rel="nofollow"}.

To make that happen, we need to make Shikiji completely ESM-friendly, pure and [tree-shakable](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking){rel="nofollow"}. This goes all the way up to the dependencies of Shiki such as [`vscode-oniguruma`](https://github.com/microsoft/vscode-oniguruma){rel="nofollow"} and [`vscode-textmate`](https://github.com/microsoft/vscode-textmate){rel="nofollow"}, which are provided in [Common JS (CJS)](https://requirejs.org/docs/commonjs.html){rel="nofollow"} format. `vscode-oniguruma` also contains a WASM binding generated by [`emscripten`](https://github.com/emscripten-core/emscripten){rel="nofollow"} that contains [dangling promises](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md){rel="nofollow"} that will make CloudFlare Workers fail to finish the request. We ended up by embedding the WASM binary into a [base64 string](https://en.wikipedia.org/wiki/Base64){rel="nofollow"} and shipping it as an ES module, manually rewriting the WASM binding to avoid dangling promises, and [vendored `vscode-textmate`](https://github.com/shikijs/shiki/blob/main/CONTRIBUTING.md#clone){rel="nofollow"} to compile from its source code and produce the efficient ESM output.

The end result was very promising. We managed to get Shikiji working on any runtime environment, with even the possibility to [import it from CDN and run in the browser](https://shiki.style/guide/install#cdn-usage){rel="nofollow"} with a single line of code.

We also took the chance to improve the API and the internal architecture of Shiki. We switched from simple string concatenation to use [`hast`](https://github.com/syntax-tree/hast){rel="nofollow"}, creating an Abstract Syntax Tree (AST) for generating the HTML output. This opens up the possibility of exposing a [Transformers API](https://shiki.style/guide/transformers){rel="nofollow"} to allow users to modify the intermediate HAST and do many cool integrations that would be very hard to achieve previously.

Dark/Light mode support [was a frequently requested feature](https://github.com/shikijs/shiki/issues/33){rel="nofollow"}. Because of the static approach Shiki takes, it won't be possible to change the theme on the fly at rendering. The solution in the past was to generate the highlighted HTML twice, and toggle their visibility based on the user's preference - it wasn't efficient as it duplicate the payload, or used [CSS variables theme](https://github.com/shikijs/shiki/pull/212){rel="nofollow"} which lost the granular highlighting Shiki is great for. With the new architecture that Shikiji has, I took a step back and rethought the problem, and [came up with the idea](https://github.com/shikijs/shiki/issues/33#issuecomment-1676362336){rel="nofollow"} of breaking down the common tokens and merge multiple themes as inlined CSS variables, which provide efficient output while aligning with the Shiki's philosophy. You can learn more about it in [Shiki's documentation](https://shiki.style/guide/dual-themes){rel="nofollow"}.

To make the migration easier, we also created the [`shikiji-compat` compatibility layer](https://shikiji.netlify.app/guide/compat){rel="nofollow"}, which uses Shikiji's new foundation and provides backward compatibility API.

To get Shikiji to work on Cloudflare Workers, we had one last challenge as they don't support [initiating WASM instance](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiate_static){rel="nofollow"}s from inlined binary data. Instead it requires importing the static `.wasm` assets for security reasons. This means that our "All-in-ESM" approach does not work well on CloudFlare. This would require extra work for users to provide different WASM sources, which makes the experience more difficult than we intended. At this moment, [Pooya Parsa](https://github.com/pi0){rel="nofollow"} stepped in and made the universal layer [`unjs/unwasm`](https://github.com/unjs/unwasm){rel="nofollow"}, which supports the upcoming [WebAssembly/ES Module Integration](https://github.com/WebAssembly/esm-integration/tree/main/proposals/esm-integration){rel="nofollow"} proposal. It has been integrated into [Nitro to have automated WASM targets](https://github.com/unjs/nitro/pull/2037){rel="nofollow"}. We hope that `unwasm` will help developers to have a better experience when working with WASM.

Overall, the Shikiji rewrite works well. [Nuxt Content](https://github.com/nuxt/content){rel="nofollow"}, [VitePress](https://vitepress.dev/){rel="nofollow"} and [Astro](https://astro.build/){rel="nofollow"} have been migrated to it. The feedback we have received has also been very positive.

## Merging Back

I am a team member of Shiki and have helped to do releases from time to time. While [Pine](https://github.com/octref){rel="nofollow"} is the lead of Shiki, he was busy on other stuff and Shiki's iterations slowed down. During the experiments in Shikiji, I [proposed a few improvements](https://github.com/shikijs/shiki/issues/510){rel="nofollow"} that could help Shiki acquire a modern structure. While generally everyone agreed with that direction, there would have been quite a lot of work to do and no one started to work on that.

While we were happy to use Shikiji to solve the problems we had, we certainly didn't want to see the community split by two different versions of Shiki. After a call with Pine, we made the consensus to merge the two projects into one:

::read-more
---
color: purple
icon: i-octicon-git-merge-24
to: https://github.com/shikijs/shiki/pull/557
---
feat!: merge Shikiji back into Shiki for v1.0 [#557]{.opacity-50}
::

We are really happy to see that our work in Shikiji has been merged back to Shiki, that not only works for ourselves, but also benefits the entire community. With this merge, it **solves around 95% of the open issues** we have had in Shiki for years:

![Shikiji Merged Back to Shiki](https://nuxt.com/assets/blog/shiki-merge-pr.png){.rounded-lg.shadow}

Shiki now also got [a brand new documentation site](https://shiki.style/){rel="nofollow"} where you can also play it right in your browser (thanks to the agnostic approach!). Many frameworks now has built-in integration with Shiki, maybe you are already using it somewhere!

## Twoslash

[Twoslash](https://github.com/twoslashes/twoslash){rel="nofollow"} is an integration tool to retrieve type information from [TypeScript Language Services](https://github.com/microsoft/TypeScript/wiki/Using-the-Language-Service-API){rel="nofollow"} and generated to your code snippet. It essentially make your static code snippet to have hover type information similar to your VS Code editor. It's made by [Orta Therox](https://github.com/orta){rel="nofollow"} for the [TypeScript documentation site](https://github.com/microsoft/TypeScript-Website){rel="nofollow"}, there you can find [the original source code here](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher){rel="nofollow"}. Orta also created the [Twoslash integration for Shiki v0.x versions](https://github.com/shikijs/twoslash){rel="nofollow"}. Back then, Shiki [did not have proper plugin system](https://github.com/shikijs/shiki/issues/380){rel="nofollow"}, that makes the `shiki-twoslash` had to be built as a wrapper over Shiki, make it a bit hard to set up as the existing Shiki integrations won't directly work with Twoslash.

We also took the chance to revise the Twoslash integrations when we were rewriting Shikiji, also a way to [dog-fooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food){rel="nofollow"} and verify the extensibility. With the new HAST internal, we are able to [integrate Twoslash as a transformer plugin](https://shiki.style/packages/twoslash){rel="nofollow"}, making it works everywhere that Shiki works and also in a composable way to be used with other transformers.

With this, we started to think that we could probably get Twoslash to work on [nuxt.com](https://nuxt.com), the website you are looking at. nuxt.com uses [Nuxt Content](https://github.com/nuxt/content){rel="nofollow"} under the hood, and different from other documentation tools like VitePress, one of the benefits Nuxt Content provides is that it's able to handle dynamic content and runs on the edge. Since Twoslash is relying on TypeScript as well as the giant types modules graph from your dependencies, that would be not ideal to ship all those things to the edge or browser. Sounds tricky, but challenge accepted!

We first come up of fetching the types on-demand from CDN, using the [Auto-Type-Acquisition](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata){rel="nofollow"} technique that you will see on the [TypeScript playground](https://www.typescriptlang.org/play){rel="nofollow"}. We made the [`twoslash-cdn`](https://github.com/antfu/twoslash-cdn){rel="nofollow"} that allows Twoslash to run in any runtime. However, still, it sounds like not the most optimal solution, as it would still require to make many network requests that might defeat the purpose of running on the edge.

After a few iterations on the underlying tools (e.g. on [`@nuxtjs/mdc`](https://github.com/nuxt-modules/mdc/pull/129){rel="nofollow"}, the markdown compiler used by Nuxt Content), we managed to take the hybrid approach and made [`nuxt-content-twoslash`](https://github.com/antfu/nuxt-content-twoslash){rel="nofollow"} that runs Twoslash on build time and caches the results for edge rendering. This way we could avoid shipping any extra dependencies to the final bundle, but still have the rich interactive code snippets on the website:
```

---

## useSeoMeta

**URL:** llms-txt#useseometa

**Contents:**
- Usage
- Parameters
- Performance

This helps you avoid common mistakes, such as using `name` instead of `property`, as well as typos - with over 100+ meta tags fully typed.

::important
This is the recommended way to add meta tags to your site as it is XSS safe and has full TypeScript support.
::

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

When inserting tags that are reactive, you should use the computed getter syntax (`() => value`):

There are over 100 parameters. See the [full list of parameters in the source code](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/src/metaFlat.ts#L1035){rel="nofollow"}.

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

In most instances, SEO meta tags don't need to be reactive as search engine robots primarily scan the initial page load.

For better performance, you can wrap your `useSeoMeta` calls in a server-only condition when the meta tags don't need to be reactive:

This previously used the [`useServerSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-server-seo-meta) composable, but it has been deprecated in favor of this approach.

**Examples:**

Example 1 (unknown):
```unknown
When inserting tags that are reactive, you should use the computed getter syntax (`() => value`):
```

Example 2 (unknown):
```unknown
## Parameters

There are over 100 parameters. See the [full list of parameters in the source code](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/src/metaFlat.ts#L1035){rel="nofollow"}.

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

## Performance

In most instances, SEO meta tags don't need to be reactive as search engine robots primarily scan the initial page load.

For better performance, you can wrap your `useSeoMeta` calls in a server-only condition when the meta tags don't need to be reactive:
```

---

## nuxt typecheck

**URL:** llms-txt#nuxt-typecheck

**Contents:**
- Arguments
- Options

The `typecheck` command runs [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc){rel="nofollow"} to check types throughout your app.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                     |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                      |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                         |

::note
This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a [`.env`](https://nuxt.com/docs/3.x/guide/directory-structure/env) file or as a command-line argument.
::

::read-more{to="https://nuxt.com/docs/guide/concepts/typescript#type-checking"}
Read more on how to enable type-checking at build or development time.
::

---

## Builder

**URL:** llms-txt#builder

**Contents:**
- `extendViteConfig`
  - Usage
  - Type
  - Parameters
- `extendWebpackConfig`
  - Usage
  - Type
  - Parameters
- `addVitePlugin`
  - Usage

Nuxt have builders based on [Vite](https://github.com/nuxt/nuxt/tree/main/packages/vite){rel="nofollow"} and [webpack](https://github.com/nuxt/nuxt/tree/main/packages/webpack){rel="nofollow"}. You can extend the config passed to each one using `extendViteConfig` and `extendWebpackConfig` functions. You can also add additional plugins via `addVitePlugin`, `addWebpackPlugin` and `addBuildPlugin`.

## `extendViteConfig`

Extends the Vite configuration. Callback function can be called multiple times, when applying to both client and server builds.

::warning
This hook is now deprecated, and we recommend using a Vite plugin instead with a `config` hook, or — for environment-specific configuration — the `applyToEnvironment` hook.
::

For environment-specific configuration in Nuxt 5+, use `addVitePlugin()` instead:

::warning
**Important:** The `config` hook runs before `applyToEnvironment` and modifies the global configuration. Use `configEnvironment` for environment-specific configuration changes.
::

::read-more
---
icon: i-simple-icons-vite
target: _blank
to: https://vite.dev/config
---
Checkout Vite website for more information about its configuration.
::

**`callback`**: A callback function that will be called with the Vite configuration object.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                                                                                        |
| --------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                                                                                          |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                                                                                           |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `addVitePlugin()` with `applyToEnvironment()` instead. |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `addVitePlugin()` with `applyToEnvironment()` instead. |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`.                                                                       |

## `extendWebpackConfig`

Extends the webpack configuration. Callback function can be called multiple times, when applying to both client and server builds.

::read-more
---
icon: i-simple-icons-webpack
target: _blank
to: https://webpack.js.org/configuration
---
Checkout webpack website for more information about its configuration.
::

**`callback`**: A callback function that will be called with the webpack configuration object.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                  |
| --------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                    |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                     |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle.                      |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle.                      |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`. |

Append Vite plugin to the config.

::warning
In Nuxt 5+, plugins registered with `server: false` or `client: false` options will not have their `config` or `configResolved` hooks called. Instead, use the `applyToEnvironment()` method instead for environment-specific plugins.
::

::tip
See [Vite website](https://vite.dev/guide/api-plugin.html){rel="nofollow"} for more information about Vite plugins. You can also use [this repository](https://github.com/vitejs/awesome-vite#plugins){rel="nofollow"} to find a plugin that suits your needs.
::

**`pluginOrGetter`**: A Vite plugin instance or an array of Vite plugin instances. If a function is provided, it must return a Vite plugin instance or an array of Vite plugin instances.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                                                                 |
| --------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                                                                   |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                                                                    |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `applyToEnvironment()` instead. |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `applyToEnvironment()` instead. |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`.                                                |

## `addWebpackPlugin`

Append webpack plugin to the config.

::tip
See [webpack website](https://webpack.js.org/concepts/plugins){rel="nofollow"} for more information about webpack plugins. You can also use [this collection](https://webpack.js.org/awesome-webpack/#webpack-plugins){rel="nofollow"} to find a plugin that suits your needs.
::

**`pluginOrGetter`**: A webpack plugin instance or an array of webpack plugin instances. If a function is provided, it must return a webpack plugin instance or an array of webpack plugin instances.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                  |
| --------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                    |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                     |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle.                      |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle.                      |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`. |

Builder-agnostic version of `addVitePlugin` and `addWebpackPlugin`. It will add the plugin to both Vite and webpack configurations if they are present.

**`pluginFactory`**: A factory function that returns an object with `vite` and/or `webpack` properties. These properties must be functions that return a Vite plugin instance or an array of Vite plugin instances and/or a webpack plugin instance or an array of webpack plugin instances.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                  |
| --------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                    |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                     |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle.                      |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle.                      |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`. |

**Examples:**

Example 1 (unknown):
```unknown
For environment-specific configuration in Nuxt 5+, use `addVitePlugin()` instead:
```

Example 2 (unknown):
```unknown
::warning
**Important:** The `config` hook runs before `applyToEnvironment` and modifies the global configuration. Use `configEnvironment` for environment-specific configuration changes.
::

### Type
```

Example 3 (unknown):
```unknown
::read-more
---
icon: i-simple-icons-vite
target: _blank
to: https://vite.dev/config
---
Checkout Vite website for more information about its configuration.
::

### Parameters

**`callback`**: A callback function that will be called with the Vite configuration object.

**`options`**: Options to pass to the callback function. This object can have the following properties:

| Property  | Type      | Required | Description                                                                                                                                                                        |
| --------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`     | `boolean` | `false`  | If set to `true`, the callback function will be called when building in development mode.                                                                                          |
| `build`   | `boolean` | `false`  | If set to `true`, the callback function will be called when building in production mode.                                                                                           |
| `server`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the server bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `addVitePlugin()` with `applyToEnvironment()` instead. |
| `client`  | `boolean` | `false`  | If set to `true`, the callback function will be called when building the client bundle. &#x2A;*Deprecated in Nuxt 5+.** Use `addVitePlugin()` with `applyToEnvironment()` instead. |
| `prepend` | `boolean` | `false`  | If set to `true`, the callback function will be prepended to the array with `unshift()` instead of `push()`.                                                                       |

## `extendWebpackConfig`

Extends the webpack configuration. Callback function can be called multiple times, when applying to both client and server builds.

### Usage
```

Example 4 (unknown):
```unknown
### Type
```

---

## Refreshed Nuxt ESLint Integrations

**URL:** llms-txt#refreshed-nuxt-eslint-integrations

**Contents:**
- TL;DR
- Background
- Nuxt ESLint Monorepo
- ESLint Flat Config
  - Why Flat Config?
- Nuxt Presets for Flat Config
- Nuxt ESLint Module
  - Project-aware Rules
  - Config Inspector DevTools Integrations
  - Type Generation for Rules

We revamped our ESLint integrations to support ESLint v9 with the new flat config. Along the way, we have explored many new possibilities to make it more personalized, powerful, and with better developer experience.

You can run the following command to install the new [`@nuxt/eslint`](https://eslint.nuxt.com/packages/module){rel="nofollow"} module:

Continue reading the story or learn more with [the documentation](https://eslint.nuxt.com/packages/module){rel="nofollow"}.

[ESLint](https://eslint.org/){rel="nofollow"} has become an essential tool for today's web development. It helps you to catch errors and enforce a consistent coding style in your project. At Nuxt, we do our best to provide an out-of-the-box experience for ESLint, making it easy to use, configure and follow the best practices we recommend.

Since, both Nuxt and ESLint have evolved a lot. Historically, we ended up with [a few different packages and integrations for ESLint in Nuxt](https://eslint.nuxt.com/guide/faq#package-disambiguation){rel="nofollow"}, and it wasn't always obvious which one to use for what purpose. We have received a lot of feedback from our community.

To improve the situation and also make it future-proof, we recently refreshed our ESLint integrations to support [ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel="nofollow"} with the [flat config](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"}. It opens up many more capabilities for customizing your ESLint setup, providing a more straightforward and unified experience.

## Nuxt ESLint Monorepo

We moved ESLint-related packages scattered across different repositories into a single monorepo: [`nuxt/eslint`](https://github.com/nuxt/eslint){rel="nofollow"}, with a dedicated new documentation site: [eslint.nuxt.com](https://eslint.nuxt.com/){rel="nofollow"}.

To help understand the differences between each package and what to use, we also have a [FAQ](https://eslint.nuxt.com/guide/faq){rel="nofollow"} page comparing them and explaining their scopes.

This monorepo now includes:

- `@nuxt/eslint` - The new, all-in-one ESLint module for Nuxt 3, supporting project-aware ESLint flat config and more.
- `@nuxt/eslint-config` - The unopinionated but customizable shared ESLint config for Nuxt 3. Supports both [the flat config format](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"} and [the legacy format](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated){rel="nofollow"}.
- `@nuxt/eslint-plugin` - The ESLint plugin for Nuxt 3 provides Nuxt-specific rules and configurations.
- Two packages for Nuxt 2 in maintenance mode.

## ESLint Flat Config

Before diving into new Nuxt integrations, let me introduce you to the concept of [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"}.

Flat config is a configuration format introduced in ESLint `v8.21.0` as experimental, and became the default format in [ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel="nofollow"}.

A quick reference to differentiate:

- **Flat config**: `eslint.config.js` `eslint.config.mjs` etc.
- **Legacy config**: `.eslintrc` `.eslintrc.json` `.eslintrc.js` etc.

[This blog post from ESLint](https://eslint.org/blog/2022/08/new-config-system-part-1/){rel="nofollow"} explains the motivation behind the flat config system in detail. In short, the legacy `eslintrc` format was designed in the early time of JavaScript, when ES modules and modern JavaScript features were not yet standardized. Many implicit conventions involved, and the `extends` feature makes the final config result hard to understand and predict. Which also makes shared configs hard to maintain and debug.

The new flat config moves the plugins and configs resolution from ESLint's internal convention to the native ES module resolution. This in turn makes it more explicit and transparent, allowing you to even import it from other modules. Since the flat config is just a JavaScript module, it also opens the door for much more customization.

## Nuxt Presets for Flat Config

In the latest [`@nuxt/eslint-config` package](https://eslint.nuxt.com/packages/config#flat-config-format){rel="nofollow"}, we leverage the flexibility we have to provide a factory function that allows you to customize the config presets easily in a more high-level way. Here is an example of how you can use it:

`@nuxt/eslint-config` starts with an unopinionated base config, which means we only include rules for best practices of TypeScript, Vue and Nuxt, and leave the rest like code style, formatting, etc for you to decide. You can also run [Prettier](https://prettier.io/){rel="nofollow"} alongside for formatting with the defaults.

The config also allows you to opt-in to more opinionated features as needed. For example, if you want ESLint to take care of the formatting as well, you can turn it on by passing `features.stylistic` to the factory function (powered by [ESLint Stylistic](https://eslint.style/){rel="nofollow"}):

Or tweak your preferences with an options object ([learn more with the options here](https://eslint.style/guide/config-presets#configuration-factory){rel="nofollow"}):

And if you are [authoring a Nuxt Module](https://nuxt.com/docs/guide/going-further/modules){rel="nofollow"}, you can turn on `features.tooling` to enable the rules for the Nuxt module development:

...and so on. The factory function in flat config allows the presets to cover the complexity of the underlying ESLint configuration, and provide high-level and user-friendly abstractions for end users to customize. All this without requiring users to worry about the internal details.

While this approach offers you a Prettier-like experience with minimal configurations (because it's powered by ESLint), you still get the full flexibility to customize and override fine-grained rules and plugins as needed.

We also made a [`FlatConfigComposer`](https://github.com/antfu/eslint-flat-config-utils#composer){rel="nofollow"} utility from [`eslint-flat-config-utils`](https://github.com/antfu/eslint-flat-config-utils){rel="nofollow"} to make it even easier to override and extend the flat config. The factory function in `@nuxt/eslint-config/flat` returns a `FlatConfigComposer` instance:

With this approach, we get the best of both worlds: the simplicity and high-level abstraction for easy to use, and the power for customization and fine-tuning.

## Nuxt ESLint Module

Taking this even further, we made the new, all-in-one [`@nuxt/eslint` module](https://eslint.nuxt.com/packages/module){rel="nofollow"} for Nuxt 3. It leverages Nuxt's context to generate project-aware and type-safe ESLint configurations for your project.

### Project-aware Rules

We know that Vue's Style Guide suggests the use of [multi-word names for components](https://vuejs.org/style-guide/rules-essential.html#use-multi-word-component-names){rel="nofollow"} to avoid conflicts with existing and future HTML elements. Thus, in [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue){rel="nofollow"}, we have the rule [`vue/multi-word-component-names`](https://eslint.vuejs.org/rules/multi-word-component-names.html){rel="nofollow"} enabled by default. It's a good practice to follow, but we know that in a Nuxt project, not all `.vue` files are registered as components. Files like `app.vue`, `pages/index.vue`, `layouts/default.vue`, etc. are not available as components in other Vue files, and the rule will be irrelevant to them.

Usually, we could turn off the rule for those files like:

It should work for the majority of the cases. However, we know that in Nuxt you can [customize the path for each directory](https://nuxt.com/docs/api/nuxt-config#dir){rel="nofollow"}, and [layers](https://nuxt.com/docs/getting-started/layers){rel="nofollow"} allow you to have multiple sources for each directory. This means the linter rules will be less accurate and potentially cause users extra effort to keep them aligned **manually**.

Similarly, we want to have [`vue/no-multiple-template-root`](https://eslint.vuejs.org/rules/no-multiple-template-root.html){rel="nofollow"} enabled only for `pages` and `layouts`, etc. As the cases grow, it becomes unrealistic to ask users to maintain the rules manually.

That's where the magic of `@nuxt/eslint` comes in! It leverages Nuxt's context to generate the configurations and rules specific to your project structure. Very similar to the [`.nuxt/tsconfig.json`](http://nuxt.com/docs/guide/concepts/typescript#auto-generated-types){rel="nofollow"} Nuxt provides, you now also have the project-aware `.nuxt/eslint.config.mjs` to extend from.

To use it, you can add the module to your Nuxt project:

### Config Inspector DevTools Integrations

During the migrations and research for the new flat config, I came up with the idea to make an interactive UI inspector for the flat config and make the configurations more transparent and easier to understand. We have integrated it into [Nuxt DevTools](https://github.com/nuxt/devtools){rel="nofollow"} when you have the `@nuxt/eslint` module installed so you easily access it whenever you need it.

![Screenshot of ESLint Config Inspector running as a tab in Nuxt DevTools](https://nuxt.com/assets/blog/nuxt-eslint-inspector.png)

The inspector allows you to see the final resolved configurations, rules and plugins that have been enabled, and do quick matches to see how rules and configurations have applied to specific files. It's great for debugging and learning how ESLint works in your project.

We are delighted that the ESLint team also finds it useful and is interested in having it for the broader ESLint community. We later joined the effort and made it [the official ESLint Config Inspector](https://github.com/eslint/config-inspector){rel="nofollow"} (it's built with Nuxt, by the way). You can read [this announcement post](https://eslint.org/blog/2024/04/eslint-config-inspector/){rel="nofollow"} for more details.

### Type Generation for Rules

One of the main pain points of configuring ESLint was the leak of type information for the rules and configurations. It's hard to know what options are available for a specific rule, and it would require you to jump around the documentation for every rule to figure that out.

Thanks again for the new flat config being dynamic with so many possibilities. We figured out a new tool, [`eslint-typegen`](https://github.com/antfu/eslint-typegen){rel="nofollow"}, that we could generate the corresponding types from rules configuration schema for each rule **based on the actual plugins you are using**. This means it's a universal solution that works for any ESLint plugins, and the types are always accurate and up-to-date.

In the `@nuxt/eslint` module, this feature is integrated out-of-box, so that you will get this awesome experience right away:

![Screenshot of VS Code that showcases the type check and autocomplete with ESLint rules config](https://nuxt.com/assets/blog/nuxt-eslint-typegen.png)

### Dev Server Checker

With the new module, we took the chance to merge the [`@nuxtjs/eslint-module`](https://github.com/nuxt-modules/eslint){rel="nofollow"} and the dev server checker for ESLint into the new `@nuxt/eslint` module as an opt-in feature.

::note
You might not need this feature most of the time, as your editor integration should already provide ESLint diagnostics right in your editor. However, for some teams that work with different editors and want to ensure ESLint is always running, being able to run ESLint within the dev server might be helpful in some cases.
::

To enable it, you can set the `checker` option to `true` in the module options:

Whenever you get some ESLint errors, you will see a warning in the console and the browser. To learn more about this feature, you can check the [documentation](https://eslint.nuxt.com/packages/module#dev-server-checker){rel="nofollow"}.

Since we are now in the Nuxt module with the codegen capabilities and the project-aware configurations, we can actually do a lot more interesting things with this. One is that we can allow modules to contribute to the ESLint configurations as well. Imagine that in the future, when you install a Nuxt module like `@nuxtjs/i18n` it can automatically enable specific ESLint rules for i18n-related files, or when you install something like `@pinia/nuxt` it can install the Pinia ESLint plugin to enforce the best practices for Pinia, etc.

As an experiment, we made a module [`nuxt-eslint-auto-explicit-import`](https://github.com/antfu/nuxt-eslint-auto-explicit-import){rel="nofollow"} that can do auto inserts for the auto-imports registered in your Nuxt project with a preconfigured ESLint preset. So that you can get the same nice developer experience with auto-imports on using APIs, but still have the auto-inserted explicit imports in your codebase.

This is still in the early stages, and we are still exploring the possibilities and best practices. But we are very excited about the potential and the opportunities it opens up. We will collaborate with the community to see how we can make the most out of it. If you have any ideas or feedback, please do not hesitate to share them with us!

At Nuxt, we care a lot about the ecosystem and the community as always. During our explorations to adopt the new flat config and improve the developer experience, we made quite a few tools to reach that goal. All of them are general-purposed and can be used outside of Nuxt:

- [`@eslint/config-inspector`](https://github.com/eslint/config-inspector){rel="nofollow"} - The official ESLint Config Inspector, provides interactive UI for your configs.
- [`eslint-typegen`](https://github.com/antfu/eslint-typegen){rel="nofollow"} - Generate TypeScript types for ESLint rules based on the actual plugins you are using.
- [`eslint-flat-config-utils`](https://github.com/antfu/eslint-flat-config-utils){rel="nofollow"} - Utilities for managing and composing ESLint flat configs.

We are committed to supporting the broader community and collaborating with developers to improve these tools and expand their possibilities. We are excited to see how these tools can benefit the ESLint ecosystem and contribute to the overall developer experience.

::tip
The flat config format is still fairly new, and ESLint v9 was just released a couple of weeks ago. Plugins and the community are gradually catching up to the new format. It's still in the phase of exploration and experimentation.
::

Looking ahead, we are eager to see how the ESLint ecosystem will continue to evolve and how we can leverage new capabilities and possibilities to further enhance Nuxt's developer experience. We are dedicated to providing a seamless and powerful development environment for Nuxt users, and we will continue to explore new ideas and collaborate with the community to achieve this goal.

**Examples:**

Example 1 (unknown):
```unknown
Continue reading the story or learn more with [the documentation](https://eslint.nuxt.com/packages/module){rel="nofollow"}.

## Background

[ESLint](https://eslint.org/){rel="nofollow"} has become an essential tool for today's web development. It helps you to catch errors and enforce a consistent coding style in your project. At Nuxt, we do our best to provide an out-of-the-box experience for ESLint, making it easy to use, configure and follow the best practices we recommend.

Since, both Nuxt and ESLint have evolved a lot. Historically, we ended up with [a few different packages and integrations for ESLint in Nuxt](https://eslint.nuxt.com/guide/faq#package-disambiguation){rel="nofollow"}, and it wasn't always obvious which one to use for what purpose. We have received a lot of feedback from our community.

To improve the situation and also make it future-proof, we recently refreshed our ESLint integrations to support [ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel="nofollow"} with the [flat config](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"}. It opens up many more capabilities for customizing your ESLint setup, providing a more straightforward and unified experience.

## Nuxt ESLint Monorepo

We moved ESLint-related packages scattered across different repositories into a single monorepo: [`nuxt/eslint`](https://github.com/nuxt/eslint){rel="nofollow"}, with a dedicated new documentation site: [eslint.nuxt.com](https://eslint.nuxt.com/){rel="nofollow"}.

To help understand the differences between each package and what to use, we also have a [FAQ](https://eslint.nuxt.com/guide/faq){rel="nofollow"} page comparing them and explaining their scopes.

This monorepo now includes:

- `@nuxt/eslint` - The new, all-in-one ESLint module for Nuxt 3, supporting project-aware ESLint flat config and more.
- `@nuxt/eslint-config` - The unopinionated but customizable shared ESLint config for Nuxt 3. Supports both [the flat config format](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"} and [the legacy format](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated){rel="nofollow"}.
- `@nuxt/eslint-plugin` - The ESLint plugin for Nuxt 3 provides Nuxt-specific rules and configurations.
- Two packages for Nuxt 2 in maintenance mode.

## ESLint Flat Config

Before diving into new Nuxt integrations, let me introduce you to the concept of [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"}.

Flat config is a configuration format introduced in ESLint `v8.21.0` as experimental, and became the default format in [ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel="nofollow"}.

A quick reference to differentiate:

- **Flat config**: `eslint.config.js` `eslint.config.mjs` etc.
- **Legacy config**: `.eslintrc` `.eslintrc.json` `.eslintrc.js` etc.

### Why Flat Config?

[This blog post from ESLint](https://eslint.org/blog/2022/08/new-config-system-part-1/){rel="nofollow"} explains the motivation behind the flat config system in detail. In short, the legacy `eslintrc` format was designed in the early time of JavaScript, when ES modules and modern JavaScript features were not yet standardized. Many implicit conventions involved, and the `extends` feature makes the final config result hard to understand and predict. Which also makes shared configs hard to maintain and debug.
```

Example 2 (unknown):
```unknown
The new flat config moves the plugins and configs resolution from ESLint's internal convention to the native ES module resolution. This in turn makes it more explicit and transparent, allowing you to even import it from other modules. Since the flat config is just a JavaScript module, it also opens the door for much more customization.

## Nuxt Presets for Flat Config

In the latest [`@nuxt/eslint-config` package](https://eslint.nuxt.com/packages/config#flat-config-format){rel="nofollow"}, we leverage the flexibility we have to provide a factory function that allows you to customize the config presets easily in a more high-level way. Here is an example of how you can use it:
```

Example 3 (unknown):
```unknown
`@nuxt/eslint-config` starts with an unopinionated base config, which means we only include rules for best practices of TypeScript, Vue and Nuxt, and leave the rest like code style, formatting, etc for you to decide. You can also run [Prettier](https://prettier.io/){rel="nofollow"} alongside for formatting with the defaults.

The config also allows you to opt-in to more opinionated features as needed. For example, if you want ESLint to take care of the formatting as well, you can turn it on by passing `features.stylistic` to the factory function (powered by [ESLint Stylistic](https://eslint.style/){rel="nofollow"}):
```

Example 4 (unknown):
```unknown
Or tweak your preferences with an options object ([learn more with the options here](https://eslint.style/guide/config-presets#configuration-factory){rel="nofollow"}):
```

---

## Roadmap

**URL:** llms-txt#roadmap

**Contents:**
- Status Reports
- Roadmap
- Core Modules Roadmap
- Release Cycle
  - Ongoing Support for Nuxt
  - Current Packages
  - Support Status

::read-more{to="https://nuxt.com/blog"}
See our blog for the latest framework and ecosystem announcements.
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/issues/13653
---
Documentation Progress
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/discussions/16119
---
Rendering Optimizations: Today and Tomorrow
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/image/discussions/563
---
Nuxt Image: Performance and Status
::

In roadmap below are some features we are planning or working on at the moment.

::tip
Check [Discussions](https://github.com/nuxt/nuxt/discussions){rel="nofollow"} and [RFCs](https://github.com/nuxt/nuxt/discussions/categories/rfcs){rel="nofollow"} for more upcoming features and ideas.
::

| Milestone    | Expected date | Notes                                                                                                                                                                        | Description                                                                                                                                                             |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SEO & PWA    | 2025          | [nuxt/nuxt#18395](https://github.com/nuxt/nuxt/discussions/18395){rel="nofollow"}                                                                                            | Migrating from [nuxt-community/pwa-module](https://github.com/nuxt-community/pwa-module){rel="nofollow"} for built-in SEO utils and service worker support              |
| Assets       | 2025          | [nuxt/nuxt#22012](https://github.com/nuxt/nuxt/discussions/22012){rel="nofollow"}                                                                                            | Allow developers and modules to handle loading third-party assets.                                                                                                      |
| Translations | -             | [nuxt/translations#4](https://github.com/nuxt/translations/discussions/4){rel="nofollow"} ([request access](https://github.com/nuxt/nuxt/discussions/16054){rel="nofollow"}) | A collaborative project for a stable translation process for Nuxt docs. Currently pending for ideas and documentation tooling support (content v2 with remote sources). |

## Core Modules Roadmap

In addition to the Nuxt framework, there are modules that are vital for the ecosystem. Their status will be updated below.

| Module                                              | Status      | Nuxt Support | Repository                                                      | Description                                                                                                                                                                          |
| --------------------------------------------------- | ----------- | ------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Scripts](https://scripts.nuxt.com){rel="nofollow"} | Public Beta | 3.x, 4.x     | [nuxt/scripts](https://github.com/nuxt/scripts){rel="nofollow"} | Easy 3rd party script management.                                                                                                                                                    |
| Auth Utils                                          | Planned     | 4.x, 5.x     | `nuxt/auth-utils` to be announced                               | The temporary repository [atinux/nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils){rel="nofollow"} is available while awaiting its official integration into Nuxt via RFC. |
| A11y                                                | Planned     | 4.x, 5.x     | `nuxt/a11y` to be announced                                     | Accessibility hinting and utilities [nuxt/nuxt#23255](https://github.com/nuxt/nuxt/issues/23255){rel="nofollow"}                                                                     |
| Hints                                               | Planned     | 4.x, 5.x     | `nuxt/hints` to be announced                                    | Guidance and suggestions for enhancing development practices.                                                                                                                        |

Since January 2023, we've adopted a consistent release cycle for Nuxt, following [semver](https://semver.org){rel="nofollow"}. We aim for major framework releases every year, with an expectation of patch releases every week or so and minor releases every month or so. They should never contain breaking changes except within options clearly marked as `experimental`.

We are planning a slight variation from this plan for Nuxt 4 and Nuxt 5. Nuxt 4 will be a stability-focused release containing all `compatibilityVersion: 4` features, and will be followed shortly by Nuxt 5 which will include an upgrade to Nitro v3 and additional changes.

This approach separates breaking changes into manageable phases, allowing for better ecosystem testing and smoother migrations.

### Ongoing Support for Nuxt

We commit to support each major version of Nuxt for a minimum of six months after the release of the next major version, and to providing an upgrade path for current users at that point.

The current active version of [Nuxt](https://nuxt.com){rel="nofollow"} is **v4** which is available as `nuxt` on npm with the `latest` tag.

Nuxt 3 will continue to receive maintenance updates (both bug fixes and backports of features from Nuxt 4) until the end of January 2026.

Each active version has its own nightly releases which are generated automatically. For more about enabling the Nuxt nightly release channel, see [the nightly release channel docs](https://nuxt.com/docs/3.x/guide/going-further/nightly-release-channel).

| Release               |                                                                                                                                        | Initial release     | End Of Life                | Docs                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------- | ------------------------------------------------------- |
| **5.x** (scheduled)   |                                                                                                                                        | Q4 2025 (estimated) | TBA                        |                                                         |
| **4.x** (stable)      | [![Nuxt latest version](https://flat.badgen.net/npm/v/nuxt?label=){.not-prose}](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2025-07-16          | 6 months after 5.x release | [nuxt.com](https://nuxt.com/docs/4.x)                   |
| **3.x** (maintenance) | [![Nuxt 3.x version](https://flat.badgen.net/npm/v/nuxt/3x?label=){.not-prose}](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2022-11-16          | 2026-01-31                 | [nuxt.com](https://nuxt.com/docs/3.x)                   |
| **2.x** (unsupported) | [![Nuxt 2.x version](https://flat.badgen.net/npm/v/nuxt/2x?label=){.not-prose}](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2018-09-21          | 2024-06-30                 | [v2.nuxt.com](https://v2.nuxt.com/docs){rel="nofollow"} |
| **1.x** (unsupported) | [![Nuxt 1.x version](https://flat.badgen.net/npm/v/nuxt/1x?label=){.not-prose}](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2018-01-08          | 2019-09-21                 |                                                         |

| Status      | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| Unsupported | This version is not maintained any more and will not receive security patches |
| Maintenance | This version will only receive security patches                               |
| Stable      | This version is being developed for and will receive security patches         |
| Development | This version could be unstable                                                |
| Scheduled   | This version does not exist yet but is planned                                |

---

## Geist

**URL:** llms-txt#geist

We are a specialized agency focused on building complex, high-performance e-commerce websites using Nuxt 3 and Shopify.

Our approach prioritizes long-term success for our clients by delivering a clean, maintainable codebase that ensures full control over their project post-delivery.

This allows our clients to easily manage and scale their e-commerce platforms without reliance on external developers, empowering them to make updates and adjustments seamlessly.

---

## Component Options

**URL:** llms-txt#component-options

**Contents:**
- `asyncData` and `fetch`
  - Isomorphic Fetch
  - Composables
  - Migration
- `head`
- `key`
- `layout`
- `loading`
- `middleware`
- `scrollToTop`

## `asyncData` and `fetch`

Nuxt 3 provides new options for [fetching data from an API](https://nuxt.com/docs/3.x/getting-started/data-fetching).

In Nuxt 2 you might use `@nuxtjs/axios` or `@nuxt/http` to fetch your data - or just the polyfilled global `fetch`.

In Nuxt 3 you can use a globally available `fetch` method that has the same API as [the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch){rel="nofollow"} or [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch) method which is using [unjs/ofetch](https://github.com/unjs/ofetch){rel="nofollow"}. It has a number of benefits, including:

1. It will handle 'smartly' making [direct API calls](https://nuxt.com/docs/3.x/guide/concepts/server-engine#direct-api-calls) if it's running on the server, or making a client-side call to your API if it's running on the client. (It can also handle calling third-party APIs.)
2. Plus, it comes with convenience features including automatically parsing responses and stringifying data.

You can read more [about direct API calls](https://nuxt.com/docs/3.x/guide/concepts/server-engine#direct-api-calls) or [fetching data](https://nuxt.com/docs/3.x/getting-started/data-fetching).

Nuxt 3 provides new composables for fetching data: [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and `useFetch`. They each have 'lazy' variants (`useLazyAsyncData` and `useLazyFetch`), which do not block client-side navigation.

In Nuxt 2, you'd fetch your data in your component using a syntax similar to:

Within your methods and templates, you could use the `post` variable similar how you'd use any other piece of data provided by your component.

With Nuxt 3, you can perform this data fetching using composables in your `setup()` method or `<script setup>` tag:

You can now use `post` inside of your Nuxt 3 template, or call `refresh` to update the data.

::note
Despite the names, [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) is not a direct replacement of the `fetch()` hook. Rather, [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) replaces both hooks and is more customizable; it can do more than simply fetching data from an endpoint. [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) is a convenience wrapper around [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) for simply fetching data from an endpoint.
::

1. Replace the `asyncData` hook with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) in your page/component.
2. Replace the `fetch` hook with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) in your component.

::read-more{to="https://nuxt.com/docs/migration/meta"}
::

You can now define a key within the [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) compiler macro.

::read-more{to="https://nuxt.com/docs/migration/pages-and-layouts"}
::

This feature is not yet supported in Nuxt 3.

::read-more{to="https://nuxt.com/docs/migration/plugins-and-middleware"}
::

This feature is not yet supported in Nuxt 3. If you want to overwrite the default scroll behavior of `vue-router`, you can do so in `~/app/router.options.ts` (see [docs](https://nuxt.com/docs/3.x/guide/recipes/custom-routing#router-options)) for more info.
Similar to `key`, specify it within the [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) compiler macro.

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

The validate hook in Nuxt 3 only accepts a single argument, the `route`. Just as in Nuxt 2, you can return a boolean value. If you return false and another match can't be found, this will mean a 404. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).

This is not supported in Nuxt 3. Instead, you can directly use a watcher to trigger refetching data.

**Examples:**

Example 1 (ts):
```ts
export default {
  async asyncData ({ params, $http }) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  },
  // or alternatively
  fetch () {
    this.post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  },
}
```

Example 2 (vue):
```vue
<script setup lang="ts">
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
const { data: post, refresh } = await useAsyncData('post', () => $fetch(`https://api.nuxtjs.dev/posts/${params.id}`))
// Or instead - useFetch is a convenience wrapper around useAsyncData when you're just performing a simple fetch
const { data: post, refresh } = await useFetch(`https://api.nuxtjs.dev/posts/${params.id}`)
</script>
```

Example 3 (unknown):
```unknown
## `layout`

::read-more{to="https://nuxt.com/docs/migration/pages-and-layouts"}
::

## `loading`

This feature is not yet supported in Nuxt 3.

## `middleware`

::read-more{to="https://nuxt.com/docs/migration/plugins-and-middleware"}
::

## `scrollToTop`

This feature is not yet supported in Nuxt 3. If you want to overwrite the default scroll behavior of `vue-router`, you can do so in `~/app/router.options.ts` (see [docs](https://nuxt.com/docs/3.x/guide/recipes/custom-routing#router-options)) for more info.
Similar to `key`, specify it within the [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) compiler macro.
```

Example 4 (unknown):
```unknown
## `transition`

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

## `validate`

The validate hook in Nuxt 3 only accepts a single argument, the `route`. Just as in Nuxt 2, you can return a boolean value. If you return false and another match can't be found, this will mean a 404. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).
```

---

## Contribution

**URL:** llms-txt#contribution

**Contents:**
- Ecosystem
- How To Contribute
  - Triage Issues and Help Out in Discussions
  - Creating an Issue
  - Send a Pull Request
  - AI-Assisted Contributions
  - Create a Module
  - Make an RFC
  - Conventions Across Ecosystem
- Documentation Style Guide

There is a range of different ways you might be able to contribute to the Nuxt ecosystem.

The Nuxt ecosystem includes many different projects and organizations:

- [nuxt/](https://github.com/nuxt){rel="nofollow"} - core repositories for the Nuxt framework itself. [**nuxt/nuxt**](https://github.com/nuxt/nuxt){rel="nofollow"} contains the Nuxt framework (both versions 2 and 3).
- [nuxt-modules/](https://github.com/nuxt-modules){rel="nofollow"} - community-contributed and maintained modules and libraries. There is a [process to migrate a module](https://nuxt.com/docs/3.x/guide/going-further/modules/#joining-nuxt-modules-and-nuxtjs) to `nuxt-modules`. While these modules have individual maintainers, they are not dependent on a single person.
- [unjs/](https://github.com/unjs){rel="nofollow"} - many of these libraries are used throughout the Nuxt ecosystem. They are designed to be universal libraries that are framework- and environment-agnostic. We welcome contributions and usage by other frameworks and projects.

### Triage Issues and Help Out in Discussions

Check out the issues and discussions for the project you want to help. For example, here are [the issues board](https://github.com/nuxt/nuxt/issues){rel="nofollow"} and [discussions](https://github.com/nuxt/nuxt/discussions){rel="nofollow"} for Nuxt. Helping other users, sharing workarounds, creating reproductions, or even poking into a bug a little bit and sharing your findings makes a huge difference.

### Creating an Issue

Thank you for taking the time to create an issue! ❤️

- **Reporting bugs**: Check out [our guide](https://nuxt.com/docs/3.x/community/reporting-bugs) for some things to do before opening an issue.
- **Feature requests**: Check that there is not an existing issue or discussion covering the scope of the feature you have in mind. If the feature is to another part of the Nuxt ecosystem (such as a module), please consider raising a feature request there first. If the feature you have in mind is general or the API is not entirely clear, consider opening a discussion in the **Ideas** section to discuss with the community first.

We'll do our best to follow our [internal issue decision making flowchart](https://mermaid.live/view#pako\:eNqFlE1v2zAMhv8K4UuToslhx2Bo0TZt12Edhm7YMCAXWqJtorLk6qOpkfS_j7KdfpyWQ-BQr8mHL6nsCuU0FauiMm6rGvQRfq03FuRzvvvTYIQHthpcBT_ugQNwPHuZjheLxf4i1VDx8x4udrf5EBCOQvSsYg4ffS79KS9pmX9QALTgyid2KYB7Ih-4bmKWbDk2YB0E1gRUVaRi-FDmmjAmT3u4nB3DmoNKIUA1BsGSohA49jnVMQhHbDh_EZQUImyxh-gAtfaiG-KWSJ-N8nt6YtpCdgEeE5rXPOdav5YwWJIJU7zrvNADV9C7JBIyIC07Wxupkx3LFQ5vCkguRno5f9fP2qnUko0Y2dk9rGdvHAa9IIhVGlCp5FFNPN-ce4DKeXBd53xMliOLp9IZtyORQVsnrGm-WJzejtUu5fFqdr5FGQ3bLslYvGthjZbJTLpReZG5_lLYw7XQ_CbPVT92ws9gnEJj-v84dk-PiaXnmF1XGAaPsOsMKywNvYmG80ZohV8k4wDR9_N3KN_dHm5mh1lnkM5FsYzRfNiTvJoT5gnQsl6uxjqXLhkNQ9syHJ0UZZ8ERUIlNShr6N8gZDEliR-ow7QZa0fhY4LoHLRo-8N7ZxPwjRj5ZZYXpvOSNs9v3Jjs8NXB4ets92xan3zydXZHvj64lKMayh4-gZC1bjASW2ipLeWuzIuToiXfImu5rbucclMIc0ubYiWPGv3DptjYF9Fhiu5nb1Wxij7RSZE6jZHWjLXHtlhVaIJESXN0_m68_sO_wMs_oO9gyg){rel="nofollow"} when responding to issues.

### Send a Pull Request

We always welcome pull requests! ❤️

#### Before You Start

Before you fix a bug, we recommend that you check whether **there's an issue that describes it**, as it's possible it's a documentation issue or that there is some context that would be helpful to know.

If you're working on a feature, then we ask that you **open a feature request issue first** to discuss with the maintainers whether the feature is desired - and the design of those features. This helps save time for both the maintainers and the contributors and means that features can be shipped faster. The issue **should be confirmed** by a framework team member before building out a feature in a pull request.

For typo fixes, it's recommended to batch multiple typo fixes into one pull request to maintain a cleaner commit history.

For bigger changes to Nuxt itself, we recommend that you first [create a Nuxt module](https://nuxt.com/#create-a-module) and implement the feature there. This allows for quick proof-of-concept. You can then [create an RFC](https://nuxt.com/#make-an-rfc) in the form of a discussion. As users adopt it and you gather feedback, it can then be refined and either added to Nuxt core or continue as a standalone module.

#### Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org){rel="nofollow"} for commit messages, which [allows a changelog to be auto-generated](https://github.com/unjs/changelogen){rel="nofollow"} based on the commits. Please read the guide through if you aren't familiar with it already.

Note that `fix:` and `feat:` are for **actual code changes** (that might affect logic). For typo or document changes, use `docs:` or `chore:` instead:

- ~~`fix: typo`~~ -> `docs: fix typo`

If you are working in a project with a monorepo, like `nuxt/nuxt`, ensure that you specify the main scope of your commit in brackets. For example: `feat(kit): add 'addMagicStuff' utility`.

#### Making the Pull Request

If you don't know how to send a pull request, we recommend reading [the guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){rel="nofollow"}.

When sending a pull request, make sure your PR's title also follows the [Commit Convention](https://nuxt.com/#commit-conventions).

If your PR fixes or resolves existing issues, please make sure you mention them in the PR description.

It's ok to have multiple commits in a single PR; you don't need to rebase or force push for your changes as we will use `Squash and Merge` to squash the commits into one commit when merging.

We do not add any commit hooks to allow for quick commits. But before you make a pull request, you should ensure that any lint/test scripts are passing.

In general, please also make sure that there are no *unrelated* changes in a PR. For example, if your editor has made any changes to whitespace or formatting elsewhere in a file that you edited, please revert these so it is more obvious what your PR changes. And please avoid including multiple unrelated features or fixes in a single PR. If it is possible to separate them, it is better to have multiple PRs to review and merge separately. In general, a PR should do *one thing only*.

#### Once You've Made a Pull Request

Once you've made a pull request, we'll do our best to review it promptly.

If we assign it to a maintainer, then that means that person will take special care to review it and implement any changes that may be required.

If we request changes on a PR, please ignore the red text! It doesn't mean we think it's a bad PR - it's just a way of easily telling the status of a list of pull requests at a glance.

If we mark a PR as 'pending', that means we likely have another task to do in reviewing the PR - it's an internal note-to-self, and not necessarily a reflection on whether the PR is a good idea or not. We will do our best to explain via a comment the reason for the pending status.

We'll do our best to follow [our PR decision making flowchart](https://mermaid.live/view#pako\:eNp9VE1v2kAQ_SsjXzBSEqlALlaUisSh0ACK2l4qcVm8Y9hi7672Iwly-O-ZtYPt5FAOCHbee_PmzdpVlCmOURLlhXrJ9sw4-JNuJNBnWs1UQafIQVjrERyWumAOv58-AJeXt29_0b7BXbWwwL0uRPa1vlZvcB_fF8oiMMmB2QM4BXkt3UoON7Lh3LWaDz2SVkK6QGt7DHvw0CKt5sxCKaQoWQEGtVHcZ04oGdw04LTVngW_LHOeFcURGGz97mw6PSv-iJdsi0UCA4nI7SfNwc3W3JZit3eQ1SZFDlKB15yswQ2MgbOjbYeatY3n8bcr-IWlekYYaJRcyB04I9gOB1CEfkF5dAVTzmFAtnqn4-bUYAiMMmHZgWhNPRhgus5mW2BATxq0NkIZ4Y4NbNjzE2ZchBzcHmGLe_ZMSKCcyRXyLrVFa_5n_PBK2xKy3kk9eOjULUdltk6C8kI-7NFDr8f4EVGDoqlp-wa4sJm3ltIMIuZ_mTQXJyTSkQZtunPqsKxShV9GKdkBYe1fHXjpbcjlvONlO9Kqx_M7YHmOmav_luxfE5zKwVs09hM5DLSupgYDlr5flDkwo7ykixKG-xDsUly1LZ-uY32dgDc7lG7YqwbNp0msJwmIUivjWFtfd-xRrEcJ7Omydz37qFplHOtxEp4GskI2qB5dRCWakglOz3oV8JuITJa4iRL6yZk5bKKNPBGOead-H2UWJc54vIiaW53SPgwrz4fIhVNm1bw76lfI6R2_MW21){rel="nofollow"} when responding and reviewing to pull requests.

### AI-Assisted Contributions

We welcome the thoughtful use of AI tools when contributing to Nuxt, yet ask all contributors to follow [two core principles](https://roe.dev/blog/using-ai-in-open-source){rel="nofollow"}.

#### Never let an LLM speak for you

- All comments, issues, and pull request descriptions should be written in your own voice
- We value clear, human communication over perfect grammar or spelling
- Avoid copy-pasting AI-generated summaries that don't reflect your own understanding

#### Never let an LLM think for you

- Feel free to use AI tools to generate code or explore ideas
- Only submit contributions you fully understand and can explain
- Contributions should reflect your own reasoning and problem-solving

Our aim is ensuring quality and maintaining the joy of collaborating and communicating with real people. If you have ideas for improving our policy on AI in the Nuxt community, we'd love to hear them! ❤️

If you've built something with Nuxt that's cool, why not [extract it into a module](https://nuxt.com/docs/3.x/guide/going-further/modules), so it can be shared with others? We have [many excellent modules already](https://nuxt.com/modules), but there's always room for more.

If you need help while building it, feel free to [check in with us](https://nuxt.com/docs/3.x/community/getting-help).

We highly recommend [creating a module](https://nuxt.com/#create-a-module) first to test out big new features and gain community adoption.

If you have done this already, or it's not appropriate to create a new module, then please start by creating a new discussion. Make sure it explains your thinking as clearly as possible. Include code examples or function signatures for new APIs. Reference existing issues or pain points with examples.

If we think this should be an RFC, we'll change the category to RFC and broadcast it more widely for feedback.

An RFC will then move through the following stages:

- `rfc: active` - currently open for comment
- `rfc: approved` - approved by the Nuxt team
- `rfc: ready to implement` - an issue has been created and assigned to implement
- `rfc: shipped` - implemented
- `rfc: archived` - not approved, but archived for future reference

### Conventions Across Ecosystem

The following conventions are *required* within the `nuxt/` organization and recommended for other maintainers in the ecosystem.

#### Module Conventions

Modules should follow the [Nuxt module template](https://github.com/nuxt/starter/tree/module){rel="nofollow"}. See [module guide](https://nuxt.com/docs/3.x/guide/going-further/modules) for more information.

#### Use Core `unjs/` Libraries

We recommend the following libraries which are used throughout the ecosystem:

- [pathe](https://github.com/unjs/pathe){rel="nofollow"} - universal path utilities (replacement for node `path`)
- [ufo](https://github.com/unjs/ufo){rel="nofollow"} - URL parsing and joining utilities
- [unbuild](https://github.com/unjs/unbuild){rel="nofollow"} - rollup-powered build system
- ... check out the rest of the [unjs/](https://github.com/unjs){rel="nofollow"} organization for many more!

#### Use ESM Syntax and Default to `type: module`

Most of the Nuxt ecosystem can consume ESM directly. In general we advocate that you avoid using CJS-specific code, such as `__dirname` and `require` statements. You can [read more about ESM](https://nuxt.com/docs/3.x/guide/concepts/esm).

[Corepack](https://nodejs.org/api/corepack.html){rel="nofollow"} makes sure you are using the correct version for package manager when you run corresponding commands. Projects might have `packageManager` field in their `package.json`.

Under projects with configuration as shown below, Corepack will install `v7.5.0` of `pnpm` (if you don't have it already) and use it to run your commands.

We use [ESLint](https://eslint.org){rel="nofollow"} for both linting and formatting with [`@nuxt/eslint`](https://github.com/nuxt/eslint){rel="nofollow"}.

We recommend using [VS Code](https://code.visualstudio.com){rel="nofollow"} along with the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){rel="nofollow"}. If you would like, you can enable auto-fix and formatting when you save the code you are editing:

Since ESLint is already configured to format the code, there is no need to duplicate the functionality with Prettier. To format the code, you can run `yarn lint --fix`, `pnpm lint --fix`, or `bun run lint --fix` or referring the [ESLint section](https://nuxt.com/#use-eslint) for IDE Setup.

If you have Prettier installed in your editor, we recommend you disable it when working on the project to avoid conflict.

We recommend `pnpm` as a package manager for modules, libraries and apps.

It is important to enable Corepack to ensure you are on the same version of the package manager as the project. Corepack is built-in to new node versions for seamless package manager integration.

You only need to do this one time, after Node.js is installed on your computer.

## Documentation Style Guide

Documentation is an essential part of Nuxt. We aim to be an intuitive framework - and a big part of that is making sure that both the developer experience and the docs are perfect across the ecosystem. 👌

Here are some tips that may help improve your documentation:

- Avoid subjective words like *simply*, *just*, &#x2A;obviously...* when possible. :br Keep in mind your readers can have different backgrounds and experiences. Therefore, these words don't convey meaning and can be harmful. :caution[Simply make sure the function returns a promise.]{icon="i-lucide-circle-x"}:tip[Make sure the function returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise){rel="nofollow"}.]{icon="i-lucide-circle-check"}
- Prefer [active voice](https://developers.google.com/tech-writing/one/active-voice){rel="nofollow"}. :caution[An error will be thrown by Nuxt.]{icon="i-lucide-circle-x"}:tip[Nuxt will throw an error.]{icon="i-lucide-circle-check"}

::read-more
---
to: https://nuxt.com/docs/community/framework-contribution#documentation-guide
---
Learn how to contribute to the documentation.
::

**Examples:**

Example 1 (unknown):
```unknown
#### Use ESLint

We use [ESLint](https://eslint.org){rel="nofollow"} for both linting and formatting with [`@nuxt/eslint`](https://github.com/nuxt/eslint){rel="nofollow"}.

##### IDE Setup

We recommend using [VS Code](https://code.visualstudio.com){rel="nofollow"} along with the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){rel="nofollow"}. If you would like, you can enable auto-fix and formatting when you save the code you are editing:
```

Example 2 (unknown):
```unknown
#### No Prettier

Since ESLint is already configured to format the code, there is no need to duplicate the functionality with Prettier. To format the code, you can run `yarn lint --fix`, `pnpm lint --fix`, or `bun run lint --fix` or referring the [ESLint section](https://nuxt.com/#use-eslint) for IDE Setup.

If you have Prettier installed in your editor, we recommend you disable it when working on the project to avoid conflict.

#### Package Manager

We recommend `pnpm` as a package manager for modules, libraries and apps.

It is important to enable Corepack to ensure you are on the same version of the package manager as the project. Corepack is built-in to new node versions for seamless package manager integration.

To enable it, run
```

---

## WebReinvent

**URL:** llms-txt#webreinvent

WebReinvent has 12+ years of experience building software and a team of 50+ software professionals including software developers, UI/UX designers, testers, DevOps, project managers, etc. The team is well-versed in the Nuxt ecosystem and has delivered multiple high-performance web apps, dashboards, real-time apps, multi-tenant SaaS applications, etc.

We are one of the most process-driven companies and we love to follow industry standards. Some of them are managing git repo, code review/audits, deploying new releases via CI/CD, automated software testing, maintaining detailed technical documentation, application performance monitoring, etc. We have been delivering MVP to enterprise-level software products from startup to MSME.

Contact us to build your MVP fast or migrate your legacy software to Nuxt or maintain your existing software or scale your software to the enterprise level. We're here to help.

---

## Vue.js Development

**URL:** llms-txt#vue.js-development

**Contents:**
- Vue with Nuxt
  - Single File Components
  - Auto-imports
  - Vue Router
- Differences with Nuxt 2 / Vue 2
  - Faster Rendering
  - Smaller Bundle
  - Composition API
  - TypeScript Support

Nuxt integrates Vue 3, the new major release of Vue that enables new patterns for Nuxt users.

::note
While an in-depth knowledge of Vue is not required to use Nuxt, we recommend that you read the documentation and go through some of the examples on [vuejs.org](https://vuejs.org){rel="nofollow"}.
::

Nuxt has always used Vue as a frontend framework.

We chose to build Nuxt on top of Vue for these reasons:

- The reactivity model of Vue, where a change in data automatically triggers a change in the interface.
- The component-based templating, while keeping HTML as the common language of the web, enables intuitive patterns to keep your interface consistent, yet powerful.
- From small projects to large web applications, Vue keeps performing well at scale to ensure that your application keeps delivering value to your users.

### Single File Components

[Vue’s single-file components](https://vuejs.org/guide/scaling-up/sfc.html){rel="nofollow"} (SFC or `*.vue` files) encapsulate the markup (`<template>`), logic (`<script>`) and styling (`<style>`) of a Vue component. Nuxt provides a zero-config experience for SFCs with [Hot Module Replacement](https://vite.dev/guide/features.html#hot-module-replacement){rel="nofollow"} that offers a seamless developer experience.

Every Vue component created in the [`components/`](https://nuxt.com/docs/3.x/guide/directory-structure/components) directory of a Nuxt project will be available in your project without having to import it. If a component is not used anywhere, your production’s code will not include it.

::read-more{to="https://nuxt.com/docs/guide/concepts/auto-imports"}
::

Most applications need multiple pages and a way to navigate between them. This is called **routing**. Nuxt uses a [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory and naming conventions to directly create routes mapped to your files using the official [Vue Router library](https://router.vuejs.org){rel="nofollow"}.

::read-more{to="https://nuxt.com/docs/getting-started/routing"}
::

::link-example{to="https://nuxt.com/docs/examples/features/auto-imports"}
::

## Differences with Nuxt 2 / Vue 2

Nuxt 3+ is based on Vue 3. The new major Vue version introduces several changes that Nuxt takes advantage of:

- Better performance
- Composition API
- TypeScript support

The Vue Virtual DOM (VDOM) has been rewritten from the ground up and allows for better rendering performance. On top of that, when working with compiled Single-File Components, the Vue compiler can further optimize them at build time by separating static and dynamic markup.

This results in faster first rendering (component creation) and updates, and less memory usage. In Nuxt 3, it enables faster server-side rendering as well.

With Vue 3 and Nuxt 3, a focus has been put on bundle size reduction. With version 3, most of Vue’s functionality, including template directives and built-in components, is tree-shakable. Your production bundle will not include them if you don’t use them.

This way, a minimal Vue 3 application can be reduced to 12 kb gzipped.

The only way to provide data and logic to components in Vue 2 was through the Options API, which allows you to return data and methods to a template with pre-defined properties like `data` and `methods`:

The [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html){rel="nofollow"} introduced in Vue 3 is not a replacement of the Options API, but it enables better logic reuse throughout an application, and is a more natural way to group code by concern in complex components.

Used with the `setup` keyword in the `<script>` definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:

The goal of Nuxt is to provide a great developer experience around the Composition API.

- Use auto-imported [Reactivity functions](https://vuejs.org/api/reactivity-core.html){rel="nofollow"} from Vue and Nuxt [built-in composables](https://nuxt.com/docs/3.x/api/composables/use-async-data).
- Write your own auto-imported reusable functions in the [`composables/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/composables).

### TypeScript Support

Both Vue 3 and Nuxt 3+ are written in TypeScript. A fully typed codebase prevents mistakes and documents APIs usage. This doesn’t mean that you have to write your application in TypeScript to take advantage of it. With Nuxt 3, you can opt-in by renaming your file from `.js` to `.ts` , or add `<script setup lang="ts">` in a component.

::read-more{to="https://nuxt.com/docs/guide/concepts/typescript"}
Read the details about TypeScript in Nuxt
::

**Examples:**

Example 1 (unknown):
```unknown
The [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html){rel="nofollow"} introduced in Vue 3 is not a replacement of the Options API, but it enables better logic reuse throughout an application, and is a more natural way to group code by concern in complex components.

Used with the `setup` keyword in the `<script>` definition, here is the above component rewritten with Composition API and Nuxt 3’s auto-imported Reactivity APIs:
```

---

## <DevOnly>

**URL:** llms-txt#<devonly>

**Contents:**
- Slots

Nuxt provides the `<DevOnly>` component to render a component only during development.

The content will not be included in production builds.

- `#fallback`: if you ever require to have a replacement during production.

**Examples:**

Example 1 (unknown):
```unknown
## Slots

- `#fallback`: if you ever require to have a replacement during production.
```

---

## Configuration for `@nuxt/devtools`

**URL:** llms-txt#configuration-for-`@nuxt/devtools`

devtools.enabled=true

---

## .nuxtrc

**URL:** llms-txt#.nuxtrc

**Contents:**
- Usage

The `.nuxtrc` file can be used to configure Nuxt with a flat syntax. It is based on [`unjs/rc9`](https://github.com/unjs/rc9){rel="nofollow"}.

::tip
For more advanced configurations, use [`nuxt.config`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config).
::

---

## Reporting Bugs

**URL:** llms-txt#reporting-bugs

**Contents:**
- Is It Really a Bug?
- Search the Issues
- Create a Minimal Reproduction
- Figure Out What the Cause Might Be

Try as we might, we will never completely eliminate bugs.

Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.

Here are a few key steps.

## Is It Really a Bug?

Consider if you're looking to get help with something, or whether you think there's a bug with Nuxt itself. If it's the former, we'd love to help you - but the best way to do that is through [asking for help](https://nuxt.com/docs/3.x/community/getting-help) rather than reporting a bug.

Search through the [open issues](https://github.com/nuxt/nuxt/issues){rel="nofollow"} and [discussions](https://github.com/nuxt/nuxt/discussions){rel="nofollow"} first. If you find anything that seems like the same bug, it's much better to comment on an existing thread than create a duplicate.

## Create a Minimal Reproduction

It's important to be able to reproduce the bug reliably - in a minimal way and apart from the rest of your project. This narrows down what could be causing the issue and makes it possible for someone not only to find the cause, but also to test a potential solution.

Start with the Nuxt sandbox and add the **minimum** amount of code necessary to reproduce the bug you're experiencing.

::note
If your issue concerns Vue or Vite, please try to reproduce it first with the Vue SSR starter.
::

::card-group
  :::card
  ---
  icon: i-simple-icons-stackblitz
  target: _blank
  title: Nuxt on StackBlitz
  to: https://nuxt.new/s/v3
  ---
  :::

:::card
  ---
  icon: i-simple-icons-codesandbox
  target: _blank
  title: Nuxt on CodeSandbox
  to: https://nuxt.new/c/v3
  ---
  :::
::

::card-group
  :::card
  ---
  icon: i-simple-icons-stackblitz
  target: _blank
  title: Vue SSR on StackBlitz
  to: https://stackblitz.com/github/nuxt-contrib/vue3-ssr-starter/tree/main?terminal=dev
  ---
  :::

:::card
  ---
  icon: i-simple-icons-codesandbox
  target: _blank
  title: Vue SSR on CodeSandbox
  to: https://codesandbox.io/s/github/nuxt-contrib/vue3-ssr-starter/main
  ---
  :::

:::card
  ---
  icon: i-simple-icons-github
  target: _blank
  title: Vue SSR Template on GitHub
  to: https://github.com/nuxt-contrib/vue3-ssr-starter/generate
  ---
  :::
::

Once you've reproduced the issue, remove as much code from your reproduction as you can (while still recreating the bug). The time spent making the reproduction as minimal as possible will make a huge difference to whoever sets out to fix the issue.

## Figure Out What the Cause Might Be

With a Nuxt project, there are lots of moving pieces - from [Nuxt modules](https://nuxt.com/modules) to [other JavaScript libraries](https://www.npmjs.com){rel="nofollow"}. Try to report the bug at the most relevant and specific place. That will likely be the Nuxt module causing an issue, or the upstream library that Nuxt is depending on.

---

## Nuxt 4.1

**URL:** llms-txt#nuxt-4.1

**Contents:**
- 🔥 Build and Performance Improvements
  - 🍫 Enhanced Chunk Stability
  - 🦀 Experimental Rolldown Support
- 🧪 Improved Lazy Hydration
- 📄 Enhanced Page Rules
- 🚀 Module Development Enhancements
  - 🪾 Module Dependencies and Integration
  - 🪝 Module Lifecycle Hooks
  - 🙈 Enhanced File Resolution
  - 📂 Layer Directories Utility

## 🔥 Build and Performance Improvements

### 🍫 Enhanced Chunk Stability

Build stability has been significantly improved with import maps ([#33075](https://github.com/nuxt/nuxt/pull/33075){rel="nofollow"}). This prevents cascading hash changes that could invalidate large portions of your build when small changes are made:

By default, JS chunks emitted in a Vite build are hashed, which means they can be cached immutably. However, this can cause a significant issue: a change to a single component can cause *every* hash to be invalidated, massively increasing the chance of 404s.

1. a component is changed slightly - the hash of its JS chunk changes
2. the page which uses the component has to be updated to reference the new file name
3. the *entry* now has its hash changed because it dynamically imports the page
4. ***every other file*** which imports the entry has its hash changed because the entry file name is changed

Obviously this wasn't optimal. With this new feature, the hash of (otherwise) unchanged files which import the entry won't be affected.

This feature is automatically enabled and helps maintain better cache efficiency in production. It does require [native import map support](https://caniuse.com/import-maps){rel="nofollow"}, but Nuxt will automatically disable it if you have configured `vite.build.target` to include a browser that doesn't support import maps.

And of course you can disable it if needed:

### 🦀 Experimental Rolldown Support

Nuxt now includes experimental support for `rolldown-vite` ([#31812](https://github.com/nuxt/nuxt/pull/31812){rel="nofollow"}), bringing Rust-powered bundling for potentially faster builds.

To try Rolldown in your Nuxt project, you need to override Vite with the rolldown-powered version since Vite is a dependency of Nuxt. Add the following to your `package.json`:

::code-group{sync="pm"}

After adding the override, reinstall your dependencies. Nuxt will automatically detect when Rolldown is available and adjust its build configuration accordingly.

For more details on Rolldown integration, see the [Vite Rolldown guide](https://vite.dev/guide/rolldown){rel="nofollow"}.

::note
This is experimental and may have some limitations, but offers a glimpse into the future of high-performance bundling in Nuxt.
::

## 🧪 Improved Lazy Hydration

Lazy hydration macros now work without auto-imports ([#33037](https://github.com/nuxt/nuxt/pull/33037){rel="nofollow"}), making them more reliable when component auto-discovery is disabled:

This ensures that components that are not "discovered" through Nuxt (e.g., because `components` is set to `false` in the config) can still be used in lazy hydration macros.

## 📄 Enhanced Page Rules

If you have enabled experimental extraction of route rules, these are now exposed on a dedicated `rules` property on `NuxtPage` objects ([#32897](https://github.com/nuxt/nuxt/pull/32897){rel="nofollow"}), making them more accessible to modules and improving the overall architecture:

The `defineRouteRules` function continues to work exactly as before, but now provides better integration possibilities for modules.

## 🚀 Module Development Enhancements

### 🪾 Module Dependencies and Integration

Modules can now specify dependencies and modify options for other modules ([#33063](https://github.com/nuxt/nuxt/pull/33063){rel="nofollow"}). This enables better module integration and ensures proper setup order:

This replaces the deprecated `installModule` function and provides a more robust way to handle module dependencies with version constraints and configuration merging.

### 🪝 Module Lifecycle Hooks

Module authors now have access to two new lifecycle hooks: `onInstall` and `onUpgrade` ([#32397](https://github.com/nuxt/nuxt/pull/32397){rel="nofollow"}). These hooks allow modules to perform additional setup steps when first installed or when upgraded to a new version:

The hooks are only triggered when both `name` and `version` are provided in the module metadata. Nuxt uses the `.nuxtrc` file internally to track module versions and trigger the appropriate hooks. (If you haven't come across it before, the `.nuxtrc` file should be committed to version control.)

::tip
This means module authors can begin implementing their own 'setup wizards' to provide a better experience when some setup is required after installing a module.
::

### 🙈 Enhanced File Resolution

The new `ignore` option for `resolveFiles` ([#32858](https://github.com/nuxt/nuxt/pull/32858){rel="nofollow"}) allows module authors to exclude specific files based on glob patterns:

### 📂 Layer Directories Utility

A new `getLayerDirectories` utility ([#33098](https://github.com/nuxt/nuxt/pull/33098){rel="nofollow"}) provides a clean interface for accessing layer directories without directly accessing private APIs:

## ✨ Developer Experience Improvements

### 🎱 Simplified Kit Utilities

Several kit utilities have been improved for better developer experience:

- `addServerImports` now supports single imports ([#32289](https://github.com/nuxt/nuxt/pull/32289){rel="nofollow"}):

### 🔥 Performance Optimizations

This release includes several internal performance optimizations:

- Improved route rules cache management ([#32877](https://github.com/nuxt/nuxt/pull/32877){rel="nofollow"})
- Optimized app manifest watching ([#32880](https://github.com/nuxt/nuxt/pull/32880){rel="nofollow"})
- Better TypeScript processing for page metadata ([#32920](https://github.com/nuxt/nuxt/pull/32920){rel="nofollow"})

- Improved `useFetch` hook typing ([#32891](https://github.com/nuxt/nuxt/pull/32891){rel="nofollow"})
- Better handling of TypeScript expressions in page metadata ([#32902](https://github.com/nuxt/nuxt/pull/32902){rel="nofollow"}, [#32914](https://github.com/nuxt/nuxt/pull/32914){rel="nofollow"})
- Enhanced route matching and synchronization ([#32899](https://github.com/nuxt/nuxt/pull/32899){rel="nofollow"})
- Reduced verbosity of Vue server warnings in development ([#33018](https://github.com/nuxt/nuxt/pull/33018){rel="nofollow"})
- Better handling of relative time calculations in `<NuxtTime>` ([#32893](https://github.com/nuxt/nuxt/pull/32893){rel="nofollow"})

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile and pull in all the latest dependencies that Nuxt relies on, especially from the unjs ecosystem.

All of these features are also available in **Nuxt 3.19**, which has been released alongside v4.1. As part of our commitment to the v3 branch, we continue to backport compatible v4 features to ensure v3 users can benefit from the latest improvements.

If you're still using Nuxt 3, you can upgrade to v3.19 to get access to all these features while staying on the stable v3 release line.

## Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v4.1.0
---
Read the full release notes of Nuxt `v4.1.0`.
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.19.0
---
Read the full release notes of Nuxt `v3.19.0`.
::

Thank you to everyone who contributed! We're excited to see what you build with these new features. ❤️

**Examples:**

Example 1 (html):
```html
<!-- Automatically injected import map -->
<script type="importmap">{"imports":{"#entry":"/_nuxt/DC5HVSK5.js"}}</script>
```

Example 2 (unknown):
```unknown
### 🦀 Experimental Rolldown Support

Nuxt now includes experimental support for `rolldown-vite` ([#31812](https://github.com/nuxt/nuxt/pull/31812){rel="nofollow"}), bringing Rust-powered bundling for potentially faster builds.

To try Rolldown in your Nuxt project, you need to override Vite with the rolldown-powered version since Vite is a dependency of Nuxt. Add the following to your `package.json`:

::code-group{sync="pm"}
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown

```

---

## Run only unit tests

**URL:** llms-txt#run-only-unit-tests

npx vitest --project unit

---

## callOnce

**URL:** llms-txt#callonce

**Contents:**
- Purpose
- Usage
- Type
- Parameters

::important
This utility is available since [Nuxt v3.9](https://nuxt.com/blog/v3-9).
::

The `callOnce` function is designed to execute a given function or block of code only once during:

- server-side rendering but not hydration
- client-side navigation

This is useful for code that should be executed only once, such as logging an event or setting up a global state.

The default mode of `callOnce` is to run code only once. For example, if the code runs on the server it won't run again on the client. It also won't run again if you `callOnce` more than once on the client, for example by navigating back to this page.

It is also possible to run on every navigation while still avoiding the initial server/client double load. For this, it is possible to use the `navigation` mode:

::important
`navigation` mode is available since [Nuxt v3.15](https://nuxt.com/blog/v3-15).
::

::tip
---
to: https://nuxt.com/docs/getting-started/state-management#usage-with-pinia
---
`callOnce` is useful in combination with the [Pinia module](https://nuxt.com/modules/pinia) to call store actions.
::

::read-more{to="https://nuxt.com/docs/getting-started/state-management"}
::

::warning
Note that `callOnce` doesn't return anything. You should use [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) if you want to do data fetching during SSR.
::

::note
`callOnce` is a composable meant to be called directly in a setup function, plugin, or route middleware, because it needs to add data to the Nuxt payload to avoid re-calling the function on the client when the page hydrates.
::

- `key`: A unique key ensuring that the code is run once. If you do not provide a key, then a key that is unique to the file and line number of the instance of `callOnce` will be generated for you.
- `fn`: The function to run once. It can be asynchronous.
- `options`: Setup the mode, either to re-execute on navigation (`navigation`) or just once for the lifetime of the app (`render`). Defaults to `render`.

- `render`: Executes once during initial render (either SSR or CSR) - Default mode
  - `navigation`: Executes once during initial render and once per subsequent client-side navigation

**Examples:**

Example 1 (unknown):
```unknown
It is also possible to run on every navigation while still avoiding the initial server/client double load. For this, it is possible to use the `navigation` mode:
```

Example 2 (unknown):
```unknown
::important
`navigation` mode is available since [Nuxt v3.15](https://nuxt.com/blog/v3-15).
::

::tip
---
to: https://nuxt.com/docs/getting-started/state-management#usage-with-pinia
---
`callOnce` is useful in combination with the [Pinia module](https://nuxt.com/modules/pinia) to call store actions.
::

::read-more{to="https://nuxt.com/docs/getting-started/state-management"}
::

::warning
Note that `callOnce` doesn't return anything. You should use [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) or [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) if you want to do data fetching during SSR.
::

::note
`callOnce` is a composable meant to be called directly in a setup function, plugin, or route middleware, because it needs to add data to the Nuxt payload to avoid re-calling the function on the client when the page hydrates.
::

## Type
```

---

## Clever Cloud

**URL:** llms-txt#clever-cloud

**Contents:**
- Deploy Clever Cloud from the Console
- Learn more

Nuxt supports deploying on [Clever Cloud](https://www.clever-cloud.com/){rel="nofollow"} with minimal configuration.

## Deploy Clever Cloud from the Console

To deploy your Nuxt project to Clever Cloud, you will need to create a **new application**. The application wizard will walk you through the necessary configuration steps.

1. From the lateral menubar, click **Create > An application**
2. Choose how to deploy: **Create an application from a local repository** or **Create an application from a GitHub repository**
3. Select a **Node.js** application, or a **static one**.
4. Set up the minimal size for your instance and scalability options. Nuxt app must be deployed with a minimum size of **XS** instance for **Node.js** application and **nano** instance for **static one**. The build process, however, will need to be configured later with at least an M instance size to ensure it can handle the resource requirements. Depending on your project’s specifications and dependencies, you may need to adjust further as you monitor the metrics from the **Overview** page.
5. Select a **region** to deploy your instance.
6. Skip connecting **Add-ons** to your Clever application unless you’re using a database.
7. Inject **environment variables**:

::code-group{sync="pm"}

- For a **static application**

::note
If [`ssr: false` is set in `nuxt.config.ts`](https://nuxt.com/docs/4.x/getting-started/deployment#static-hosting){rel="nofollow"} **or** if your project contains dynamic routes that cannot be pre-rendered, you should :

1. Use a **Static Apache** application
2. Create a [`.htaccess`](https://www.clever.cloud/developers/doc/applications/static-apache/#serving-indexhtml-for-spa-single-page-application-routers){rel="nofollow"} file that redirects all routes to `index.html` to ensure proper routing for your SPA.

Otherwise, you can use the default **Static HTML** application.
::

::code-group{sync="pm"}

8. Navigate to the application **Information** menu and enable the **enable dedicated build instance** option on a minimal instance of type **M**.
9. **Deploy!** If you’re deploying from **GitHub**, your deployment should start automatically. If you’re using **Git**, show [this docs](https://www.clever-cloud.com/developers/doc/quickstart/#choose-how-to-deploy){rel="nofollow"}.

::read-more
---
target: _blank
to: https://developers.clever-cloud.com/guides/nuxt
---
Clever Cloud documentation for deploying Nuxt
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

- For a **static application**

::note
If [`ssr: false` is set in `nuxt.config.ts`](https://nuxt.com/docs/4.x/getting-started/deployment#static-hosting){rel="nofollow"} **or** if your project contains dynamic routes that cannot be pre-rendered, you should :

1. Use a **Static Apache** application
2. Create a [`.htaccess`](https://www.clever.cloud/developers/doc/applications/static-apache/#serving-indexhtml-for-spa-single-page-application-routers){rel="nofollow"} file that redirects all routes to `index.html` to ensure proper routing for your SPA.

Otherwise, you can use the default **Static HTML** application.
::

::code-group{sync="pm"}
```

---

## Nuxt Docs

**URL:** llms-txt#nuxt-docs

**Contents:**
- Contributing

This repository contains the documentation of Nuxt hosted on <https://nuxt.com/docs>{rel="nofollow"}

Have a look at <https://github.com/nuxt/nuxt.com>{rel="nofollow"} to run the website locally.

---

## Releases

**URL:** llms-txt#releases

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/nuxt
  to: https://github.com/nuxt/nuxt/releases
  ---
  Nuxt framework releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/cli
  to: https://github.com/nuxt/cli/releases
  ---
  Nuxt CLI (`@nuxt/cli`) releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/content
  to: https://github.com/nuxt/content/releases
  ---
  Nuxt Content releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/devtools
  to: https://github.com/nuxt/devtools/releases
  ---
  Nuxt DevTools releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/fonts
  to: https://github.com/nuxt/fonts/releases
  ---
  Nuxt Fonts releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/image
  to: https://github.com/nuxt/image/releases
  ---
  Nuxt Image releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/scripts
  to: https://github.com/nuxt/scripts/releases
  ---
  Nuxt Scripts releases.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: nuxt/ui
  to: https://github.com/nuxt/ui/releases
  ---
  Nuxt UI releases.
  :::
::

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt
---
Discover the `nuxt` organization on GitHub
::

---

## EpicMax

**URL:** llms-txt#epicmax

**Contents:**
  - 🚀 Our Services
  - **1. Vue Power Team** — Dedicated Vue/Nuxt experts at your side
  - **2. Vue Power Projects** — End-to-end Vue/Nuxt delivery
  - **3. Vue/Nuxt Code Audit** — Health check for your frontend
  - **4. Consulting from Our CTO** — Strategic Vue/Nuxt expertise on demand

We’re a passionate team of frontend developers, united by our love for coding and open source ❤️

Over the past 8 years, we’ve built **60+ Vue/Nuxt projects** across E-commerce, SaaS, EdTech, and FinTech — and developed our own open-source products: **Vuestic UI** and **Vuestic Admin**.

We’ve seen (and solved) nearly every frontend challenge out there.

We specialize in creating responsive, scalable applications using **Vue**, **Nuxt**, **TypeScript**, and more.

### **1. Vue Power Team** — Dedicated Vue/Nuxt experts at your side

Plug in a seasoned frontend team that feels like part of your own.

- Flexible engagement, predictable monthly costs
- Scale up or down without hiring hassle
- Workflows that adapt to your needs

### **2. Vue Power Projects** — End-to-end Vue/Nuxt delivery

Have a clear scope and deadlines? We’ll handle the rest.

- Fixed timeline and budget — no surprises
- Clean, maintainable code tailored to your business
- Best practices baked in from day one

### **3. Vue/Nuxt Code Audit** — Health check for your frontend

Get a detailed, no-fluff analysis of your existing codebase.

- Identify performance bottlenecks and security risks
- Ensure code quality, scalability, and maintainability
- Actionable report with clear next steps

### **4. Consulting from Our CTO** — Strategic Vue/Nuxt expertise on demand

Work directly with our CTO to level up your frontend game.

- Architecture and scalability guidance
- Workflow improvements and best practices
- Ideal for teams who want to move faster and smarter

Let us help you build something great — or make what you already have even better.

Drop us a line at [**hello@epicmax.co**](mailto\:hello@epicmax.co)

---

## Create a new Nuxt project with Nuxt UI

**URL:** llms-txt#create-a-new-nuxt-project-with-nuxt-ui

**Contents:**
- 🙏 Thank You

npx nuxi@latest init my-app -t ui
bash [pnpm]
pnpm add @nuxt/ui@latest
bash [yarn]
yarn add @nuxt/ui@latest
bash [npm]
npm install @nuxt/ui@latest
bash [bun]
bun add @nuxt/ui@latest
```
::

::warning
If you're using **pnpm**, ensure that you either set [`shamefully-hoist=true`](https://pnpm.io/npmrc#shamefully-hoist){rel="nofollow"} in your `.npmrc` file or install `tailwindcss` in your project's root directory.
::

Visit our [documentation](https://ui.nuxt.com/getting-started){rel="nofollow"} to explore all the components and features available in Nuxt UI v3.

This release represents thousands of hours of work from our team and the community. We'd like to thank everyone who contributed to making Nuxt UI v3 a reality.

We're excited to see what you'll build with Nuxt UI v3!

**Examples:**

Example 1 (unknown):
```unknown
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

## useRuntimeHook

**URL:** llms-txt#useruntimehook

**Contents:**
- Usage
  - Parameters
  - Returns
- Example

::important
This composable is available in Nuxt v3.14+.
::

- `name`: The name of the runtime hook to register. You can see the full list of [runtime Nuxt hooks here](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime).
- `fn`: The callback function to execute when the hook is triggered. The function signature varies based on the hook name.

The composable doesn't return a value, but it automatically unregisters the hook when the component's scope is destroyed.

**Examples:**

Example 1 (unknown):
```unknown
## Usage

### Parameters

- `name`: The name of the runtime hook to register. You can see the full list of [runtime Nuxt hooks here](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime).
- `fn`: The callback function to execute when the hook is triggered. The function signature varies based on the hook name.

### Returns

The composable doesn't return a value, but it automatically unregisters the hook when the component's scope is destroyed.

## Example
```

---

## nuxt analyze

**URL:** llms-txt#nuxt-analyze

**Contents:**
- Arguments
- Options

The `analyze` command builds Nuxt and analyzes the production bundle (experimental).

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default   | Description                                                                      |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |           | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |           | Specify build-time log level                                                     |
| `--dotenv`                         |           | Path to `.env` file to load, relative to the root directory                      |
| `-e, --extends=<layer-name>`       |           | Extend from a Nuxt layer                                                         |
| `--name=<name>`                    | `default` | Name of the analysis                                                             |
| `--no-serve`                       |           | Skip serving the analysis results                                                |

::note
This command sets `process.env.NODE_ENV` to `production`.
::

---

## Import meta

**URL:** llms-txt#import-meta

**Contents:**
- The `import.meta` object
- Runtime (App) Properties
- Builder Properties
- Examples
  - Using `import.meta.url` to resolve files within modules

## The `import.meta` object

With ES modules you can obtain some metadata from the code that imports or compiles your ES-module.
This is done through `import.meta`, which is an object that provides your code with this information.
Throughout the Nuxt documentation you may see snippets that use this already to figure out whether the
code is currently running on the client or server side.

::read-more
---
to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta
---
Read more about `import.meta`.
::

## Runtime (App) Properties

These values are statically injected and can be used for tree-shaking your runtime code.

| Property                | Type    | Description                                                                  |
| ----------------------- | ------- | ---------------------------------------------------------------------------- |
| `import.meta.client`    | boolean | True when evaluated on the client side.                                      |
| `import.meta.browser`   | boolean | True when evaluated on the client side.                                      |
| `import.meta.server`    | boolean | True when evaluated on the server side.                                      |
| `import.meta.nitro`     | boolean | True when evaluated on the server side.                                      |
| `import.meta.dev`       | boolean | True when running the Nuxt dev server.                                       |
| `import.meta.test`      | boolean | True when running in a test context.                                         |
| `import.meta.prerender` | boolean | True when rendering HTML on the server in the prerender stage of your build. |

## Builder Properties

These values are available both in modules and in your `nuxt.config`.

| Property          | Type   | Description                           |
| ----------------- | ------ | ------------------------------------- |
| `import.meta.env` | object | Equals `process.env`                  |
| `import.meta.url` | string | Resolvable path for the current file. |

### Using `import.meta.url` to resolve files within modules

---

## Programmatic Usage

**URL:** llms-txt#programmatic-usage

**Contents:**
- `loadNuxt`
  - Type
  - Parameters
- `buildNuxt`
  - Type
  - Parameters
- `loadNuxtConfig`
  - Type
  - Parameters
- `writeTypes`

Programmatic usage can be helpful when you want to use Nuxt programmatically, for example, when building a [CLI tool](https://github.com/nuxt/cli){rel="nofollow"} or [test utils](https://github.com/nuxt/nuxt/tree/main/packages/test-utils){rel="nofollow"}.

Load Nuxt programmatically. It will load the Nuxt configuration, instantiate and return the promise with Nuxt instance.

**`loadOptions`**: Loading conditions for Nuxt. `loadNuxt` uses [`c12`](https://github.com/unjs/c12){rel="nofollow"} under the hood, so it accepts the same options as `c12.loadConfig` with some additional options:

| Property | Type      | Required | Description                                                                                                                                                       |
| -------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`    | `boolean` | `false`  | If set to `true`, Nuxt will be loaded in development mode.                                                                                                        |
| `ready`  | `boolean` | `true`   | If set to `true`, Nuxt will be ready to use after the `loadNuxt` call. If set to `false`, you will need to call `nuxt.ready()` to make sure Nuxt is ready to use. |

Build Nuxt programmatically. It will invoke the builder (currently [@nuxt/vite-builder](https://github.com/nuxt/nuxt/tree/main/packages/vite){rel="nofollow"} or [@nuxt/webpack-builder](https://github.com/nuxt/nuxt/tree/main/packages/webpack){rel="nofollow"}) to bundle the application.

**`nuxt`**: Nuxt instance to build. It can be retrieved from the context via `useNuxt()` call.

Load Nuxt configuration. It will return the promise with the configuration object.

**`options`**: Options to pass in [`c12`](https://github.com/unjs/c12#options){rel="nofollow"} `loadConfig` call.

Generates `tsconfig.json` and writes it to the project buildDir.

**`nuxt`**: Nuxt instance to build. It can be retrieved from the context via `useNuxt()` call.

**Examples:**

Example 1 (ts):
```ts
function loadNuxt (loadOptions?: LoadNuxtOptions): Promise<Nuxt>
```

Example 2 (ts):
```ts
function buildNuxt (nuxt: Nuxt): Promise<any>
```

Example 3 (ts):
```ts
function loadNuxtConfig (options: LoadNuxtConfigOptions): Promise<NuxtOptions>
```

Example 4 (ts):
```ts
function writeTypes (nuxt?: Nuxt): void
```

---

## Nuxt 3.8

**URL:** llms-txt#nuxt-3.8

**Contents:**
  - 💻 CLI Improvements
  - ✨ Built-in Nuxt DevTools
  - 📸 Nuxt Image Auto-install
  - 📂 Deeper Layout Scanning
  - 📊 App Manifest
  - 🤝 Scope and Context Improvements
  - 🔗 NuxtLink Defaults
  - ⚡️ Data Fetching Improvements
  - 🔢 Layer Improvements
  - 😴 Nightly Release Channel

### 💻 CLI Improvements

Just to remind you, we're now using [the new Nuxt CLI](https://github.com/nuxt/cli){rel="nofollow"} which is now versioned separately.

::tip
You can now install a module with `nuxi module add <module-name>`
::

::note{icon="i-lucide-rocket"}
We now share the same port with the Vite websocket, meaning better support for docker containers in development.
::

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/cli/releases/tag/v3.9.0
---
Read the Nuxt CLI `v3.9.0` release notes.
::

### ✨ Built-in Nuxt DevTools

Nuxt DevTools v1.0.0 is out and we now think it's ready to be shipped as a direct dependency of Nuxt.

::read-more
---
color: gray
icon: i-simple-icons-github
to: https://nuxt.com/blog/nuxt-devtools-v1-0
---
Check out Nuxt DevTools v1.0 announcement.
::

### 📸 Nuxt Image Auto-install

[`<NuxtImg>`](https://nuxt.com/docs/api/components/nuxt-img) and [`<NuxtPicture>`](https://nuxt.com/docs/api/components/nuxt-picture) first-class built-in components.

We now auto-installing `@nuxt/image` the first time that they are used ([#23717](https://github.com/nuxt/nuxt/pull/23717){rel="nofollow"}).

:video{.rounded.dark:border.dark:border-gray-700 controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1697721767/nuxt3/nuxt-image-auto-install_uqkptq.jpg"}

::tip
We advise using [`@nuxt/image`](https://image.nuxt.com){rel="nofollow"} if you're using images in your site; it can apply optimisations to make your site more performant.
::

### 📂 Deeper Layout Scanning

::caution
This is a behaviour change so do take care with this one.
::

We now support scanning layouts within subfolders in [`~/layouts`](https://nuxt.com/docs/guide/directory-structure/layouts) in the same way as we do with [`~/components`](https://nuxt.com/docs/guide/directory-structure/components).

| File                             | Layout name       |
| -------------------------------- | ----------------- |
| \~/layouts/desktop/default.vue   | 'desktop-default' |
| \~/layouts/desktop-base/base.vue | 'desktop-base'    |
| \~/layouts/desktop/index.vue     | 'desktop'         |

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/layouts#named-layout
---
Read more about **Named Layouts**.
::

We now support a built-in app manifest (see [PR #21641](https://github.com/nuxt/nuxt/pull/21641){rel="nofollow"}), which generates a manifest at `/_nuxt/builds/meta/<buildId>.json`.

It enables loading payloads **only for prerendered routes**, if a site is generated with `nuxt generate`, preventing 404s in the console.

It also enables **client-side route rules**. Only `redirect` route rules is supported for now; they will now redirect when performing client-side navigation.

::tip{icon="i-lucide-rocket"}
The app manifest also enables future enhancements including detection of a new deployment by checking `/_nuxt/builds/latest.json`.
::

::note
You can **opt-on from this behaviour if you need to** by setting `experimental.appManifest` to `false` in your `nuxt.config.ts` file.
::

### 🤝 Scope and Context Improvements

We now define a 'scope' for Nuxt composables executed in plugins ([#23667](https://github.com/nuxt/nuxt/pull/23667){rel="nofollow"}), which allows running synchronous cleanup before navigating away from your site, using the Vue [`onScopeDispose`](https://vuejs.org/api/reactivity-advanced.html#onscopedispose){rel="nofollow"} lifecycle method.

::note
This should fix an edge case with cookies ([#23697](https://github.com/nuxt/nuxt/pull/23697){rel="nofollow"}) and also improves memory management such as Pinia stores ([#23650](https://github.com/nuxt/nuxt/issues/23650){rel="nofollow"}).
::

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
to: https://vuejs.org/api/reactivity-advanced.html#effectscope
---
Read more about Vue effect scopes.
::

We also now support [**native async context**](https://nodejs.org/api/async_context.html){rel="nofollow"} for the *Vue composition API* ([#23526](https://github.com/nuxt/nuxt/pull/23526){rel="nofollow"}). In case you're unaware, we support native async context on Node and Bun, enabled with [`experimental.asyncContext`](https://nuxt.com/docs/guide/going-further/experimental-features#asynccontext).

If you experience issues with `Nuxt instance unavailable`, enabling this option may solve your issues:

::note
Once we have cross-runtime support, we will enable it by default.
::

### 🔗 NuxtLink Defaults

You can define your own [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) components with the [`defineNuxtLink`](https://nuxt.com/docs/api/components/nuxt-link#definenuxtlink-signature) utility.

Today, you can cutomize the options for the built-in [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link), directly in your `nuxt.config.ts` file ([#23724](https://github.com/nuxt/nuxt/pull/23724){rel="nofollow"}).

This can enable you to enforce trailing slash behaviour across your entire site, for example:

### ⚡️ Data Fetching Improvements

We have two very significant new features for [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch):

1. You can now set `deep: false` to prevent deep reactivity on the `data` object returned from these composables ([#23600](https://github.com/nuxt/nuxt/pull/23600){rel="nofollow"}). It should be a performance improvement if you are returning large arrays or objects. The object will still update when refetched; it just won't trigger reactive effects if you change a property deep within the `data`.
2. You can now use the `getCachedData` option to handle custom caching for these composables ([#20747](https://github.com/nuxt/nuxt/pull/20747){rel="nofollow"})

::video-accordion
---
title: Watch the video from Alexander Lichter about Client-side caching with
  getCachedData.
video-id: aQPR0xn-MMk
---
::

We also support configuring some default values for these composables in an app-wide way ([#23725](https://github.com/nuxt/nuxt/pull/20747){rel="nofollow"}):

### 🔢 Layer Improvements

We now more carefully load layer plugins ([#22889](https://github.com/nuxt/nuxt/pull/22889){rel="nofollow"} and [#23148](https://github.com/nuxt/nuxt/pull/23148){rel="nofollow"}) and middleware ([#22925](https://github.com/nuxt/nuxt/pull/22925){rel="nofollow"} and [#23552](https://github.com/nuxt/nuxt/pull/23552){rel="nofollow"}) in the order of the layers, always loading your own plugins and middleware last. This should mean you can rely on utilities that layers may inject.

And probably one of the most significant changes - if you are using remote layers we now clone these within your [`node_modules/`](https://nuxt.com/docs/guide/directory-structure/node_modules) folder ([#109](https://github.com/unjs/c12/pull/109){rel="nofollow"}) so layers can use dependencies with your project. See [`c12` release notes](https://github.com/unjs/c12/releases/tag/v1.5.1){rel="nofollow"} for full details.

::tip{icon="i-lucide-check-circle"}
We've also added a test suite to cover these layer resolution changes.
::

### 😴 Nightly Release Channel

Every commit to the `main` branch of Nuxt is automatically deployed to a new release, for easier testing before releases. We've renamed this from the 'edge release channel' to the 'nightly release channel' to avoid confusion with *edge deployments*. And probably also with Microsoft Edge (though I haven't heard that anyone was confused with that one!)

- `nuxt3` is now `nuxt-nightly`
- `nuxi-edge` is now `nuxi-nightly`
- `@​nuxt/kit-edge` is now `@​nuxt/kit-nightly`
- ... and so on.

::read-more
---
to: https://nuxt.com/docs/guide/going-further/nightly-release-channel#nightly-release-channel
---
Read more about the **Nighly Release Channel**.
::

Nitro v2.7 has been released with lots of improvements and bug fixes.

::tip{icon="i-lucide-rocket"}
🔥 One of the most significant is that we now save **40% of bundle size in production** by using native `fetch` supported in Node 18+ ([#1724](https://github.com/unjs/nitro/pull/1724){rel="nofollow"}). So if possible, we'd recommend you update your Node version to at least 18.
::

::read-more
---
color: gray
icon: i-simple-icons-github
target: _blank
to: https://github.com/unjs/nitro/releases/tag/v2.7.0
---
Check out Nitro v2.7 release note.
::

### 💪 Type Import Changes

::warning
This is likely to need code changes in your project.
::

Vue requires that type imports be explicit (so that the Vue compiler can correctly optimise and resolve type imports for props and so on). See [core Vue `tsconfig.json`](https://github.com/vuejs/tsconfig/blob/main/tsconfig.json#L30-L33){rel="nofollow"}.

We've therefore taken the decision to turn on `verbatimModuleSyntax` by default in Nuxt projects, which will throw a type error if types are imported without an explicit `type` import. To resolve it you will need to update your imports:

You may also encounter modules in the Nuxt ecosystem that need to be updated; please open an issue for those modules. I'm also very happy to help if you're encountering any problems with this, if you're a module author. Just tag me and I'll take a look.

If for whatever reason you need to undo this change in your project you can set the following configuration:

However, we'd recommend only doing that temporarily, as Vue does need this option to be set for best results.

As usual, our recommendation for upgrading is to run:

## Full Release Notes

::read-more
---
color: gray
icon: i-simple-icons-github
to: https://github.com/nuxt/nuxt/releases/tag/v3.8.0
---
Read the full release notes of Nuxt `v3.8.0`.
::

Thank you for reading this far! We hope you enjoy the new release. Please do let us know if you have any feedback or issues.

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

::tip{icon="i-lucide-rocket"}
The app manifest also enables future enhancements including detection of a new deployment by checking `/_nuxt/builds/latest.json`.
::

::note
You can **opt-on from this behaviour if you need to** by setting `experimental.appManifest` to `false` in your `nuxt.config.ts` file.
::

### 🤝 Scope and Context Improvements

We now define a 'scope' for Nuxt composables executed in plugins ([#23667](https://github.com/nuxt/nuxt/pull/23667){rel="nofollow"}), which allows running synchronous cleanup before navigating away from your site, using the Vue [`onScopeDispose`](https://vuejs.org/api/reactivity-advanced.html#onscopedispose){rel="nofollow"} lifecycle method.

::note
This should fix an edge case with cookies ([#23697](https://github.com/nuxt/nuxt/pull/23697){rel="nofollow"}) and also improves memory management such as Pinia stores ([#23650](https://github.com/nuxt/nuxt/issues/23650){rel="nofollow"}).
::

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
to: https://vuejs.org/api/reactivity-advanced.html#effectscope
---
Read more about Vue effect scopes.
::

We also now support [**native async context**](https://nodejs.org/api/async_context.html){rel="nofollow"} for the *Vue composition API* ([#23526](https://github.com/nuxt/nuxt/pull/23526){rel="nofollow"}). In case you're unaware, we support native async context on Node and Bun, enabled with [`experimental.asyncContext`](https://nuxt.com/docs/guide/going-further/experimental-features#asynccontext).

If you experience issues with `Nuxt instance unavailable`, enabling this option may solve your issues:
```

Example 3 (unknown):
```unknown
::note
Once we have cross-runtime support, we will enable it by default.
::

### 🔗 NuxtLink Defaults

You can define your own [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) components with the [`defineNuxtLink`](https://nuxt.com/docs/api/components/nuxt-link#definenuxtlink-signature) utility.

Today, you can cutomize the options for the built-in [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link), directly in your `nuxt.config.ts` file ([#23724](https://github.com/nuxt/nuxt/pull/23724){rel="nofollow"}).

This can enable you to enforce trailing slash behaviour across your entire site, for example:
```

Example 4 (unknown):
```unknown
### ⚡️ Data Fetching Improvements

We have two very significant new features for [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch):

1. You can now set `deep: false` to prevent deep reactivity on the `data` object returned from these composables ([#23600](https://github.com/nuxt/nuxt/pull/23600){rel="nofollow"}). It should be a performance improvement if you are returning large arrays or objects. The object will still update when refetched; it just won't trigger reactive effects if you change a property deep within the `data`.
2. You can now use the `getCachedData` option to handle custom caching for these composables ([#20747](https://github.com/nuxt/nuxt/pull/20747){rel="nofollow"})
```

---

## refreshCookie

**URL:** llms-txt#refreshcookie

**Contents:**
- Purpose
- Usage
- Type

::important
This utility is available since [Nuxt v3.10](https://nuxt.com/blog/v3-10).
::

The `refreshCookie` function is designed to refresh cookie value returned by `useCookie`.

This is useful for updating the `useCookie` ref when we know the new cookie value has been set in the browser.

::note
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#cookiestore
---
You can enable experimental `cookieStore` option to automatically refresh `useCookie` value when cookie changes in the browser.
::

**Examples:**

Example 1 (unknown):
```unknown
::note
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#cookiestore
---
You can enable experimental `cookieStore` option to automatically refresh `useCookie` value when cookie changes in the browser.
::

## Type
```

---

## Make sure to run the deployctl command from the output directory

**URL:** llms-txt#make-sure-to-run-the-deployctl-command-from-the-output-directory

**Contents:**
- Deploy within CI/CD using GitHub Actions
- Templates
- Learn more

cd .output
deployctl deploy --project=my-project server/index.ts --token=<DENO_DEPLOY_TOKEN>
yaml [.github/workflows/deno_deploy.yml]
name: deno-deploy
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  deploy:
    steps:
      - uses: actions/checkout@v3
      - run: corepack enable
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
        env:
          NITRO_PRESET: deno_deploy
      - name: Deploy to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: <my-project>
          entrypoint: server/index.ts
          root: .output
```

::important
Make sure to rename `<my-project>` with your project name.
::

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Deno KV
  to: https://github.com/Atinux/nuxt-deno-kv
  ---
  A collaborative todo-list app built with Deno KV and Nuxt.
  :::
::

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/deno-deploy
---
Head over **Nitro documentation** to learn more about the deno-deploy deployment preset.
::

**Examples:**

Example 1 (unknown):
```unknown
## Deploy within CI/CD using GitHub Actions

Link your GitHub repository to your Deno Deploy project and choose the "GitHub Actions" deployment mode. You can do this in your project settings on <https://dash.deno.com>{rel="nofollow"}.

Create a GitHub action file in your repository:
```

---

## Coditive

**URL:** llms-txt#coditive

We are a software development company from Poland, and we specialize in providing exceptional software development services to businesses worldwide. Since 2009, we have helped over 400 clients achieve their business goals. We are your long term, trusted technology partner.

At Coditive, we're committed to bringing your vision to life with our top-notch coding skill both on frontend and backend areas. Our team blends experience and technical know-how to offer unparalleled development services.

Our aim is to help your business succeed by tackling the unique challenges you encounter. Our services encompass creating new digital products, improving existing ones, and experimenting with fresh ideas. At Coditive, we believe that communication is key to success in any project. That's why we always prioritize open and transparent communication with our clients. We value your input and feedback throughout the entire development process, from ideation to implementation.

We specialize in Vue.js, Nuxt, Node.js, and Hi-end WordPress development. Our team has a keen eye for detail, ensuring that every aspect of your project is executed with precision and care. Let us know how we can assist you in reaching your goals.

---

## Nuxt 2 End-of-Life (EOL)

**URL:** llms-txt#nuxt-2-end-of-life-(eol)

**Contents:**
- What happens on June 30th, 2024?
- What’s Next?
- Still on Nuxt 2? Here Are Your Options.
  - Update to the Nuxt 2 latest release
  - Purchase Extended Support for Nuxt 2
  - Notify Your Users of Your Nuxt 2 Post-EOL Plan
- Looking Forward

Released in 2018, Nuxt 2.0 marked a major milestone, establishing it as a mainstream framework. Over the past six years, many developers adopted Nuxt 2, leading to the creation of numerous impressive projects across the web.

However, looking forward, maintaining Nuxt 2 is no longer sustainable. With the recent end-of-life of Vue 2 and the maturity of Nuxt 3 and its ecosystem, it's time for our team to concentrate our efforts on the latest major version and upcoming versions.

::tip
---
target: _blank
to: https://www.herodevs.com/support/nuxt-nes?utm_source=nuxt&utm_medium=nuxt-eol-article
---
Jump over HeroDevs' Nuxt Never-Ending Support (NES)
::

## What happens on June 30th, 2024?

After this date, Nuxt 2 will continue to be available on the NPM package manager, but will no longer receive updates, such as security and browser compatibility fixes. In other words, your applications will continue to work, but you may get deprecation warnings from your package manager reminding you that Nuxt 2 is no longer a supported version.

::note
Vue 2 reached its end-of-life date on December 31st, 2023.
::

Nuxt 3 has been the default version of Nuxt since November 16th, 2022.

On top of using Vue 3 and the composition API, it is shipped with features and innovations:

- Universal & Hybrid Rendering: Benefits of both SPA and SSR, with fine-grained control over route rendering
- Support for serverless environments (AWS Lambda, Deno, Cloudflare Workers) with minimal cold-start.
- First-Class TypeScript Support: Full typing across all components and configurations.
- Vite integration for a faster developer experience
- Server & API routes with end-to-end typing powered by Nitro
- Auto import of composables & utils
- Layers feature for domain driven development

When and if you can, consider migrating to Nuxt 3 to take advantage of these powerful features.

::read-more{to="https://nuxt.com/docs/getting-started/upgrade#nuxt-2-vs-nuxt-3"}
See a full comparison table between Nuxt 2 and Nuxt 3, as well as detailed upgrade guides to Nuxt 3 and Nuxt Bridge (as a part of upgrading to Nuxt 3).
::

::read-more{icon="i-lucide-life-buoy" to="https://nuxt.com/enterprise/support"}
If you need support, including upgrading to Nuxt 3, NuxtLabs provides professional support and consultancy in a wide range of areas.
::

## Still on Nuxt 2? Here Are Your Options.

Recognizing the various situations that arise during transitions, we are fully aware that users may need other options until they can migrate, or maybe migration simply isn't a feasible path. Here are some other options to consider:

### Update to the Nuxt 2 latest release

We expect to release 2.18.0 at the end of June 2024, which will include a few final fixes.

::note
We strongly encourage you to update to 2.18.0 once it's out. This will be the starting point for extended support mentioned below.
::

### Purchase Extended Support for Nuxt 2

If you have to stay on Nuxt 2 post-EOL, we have partnered with HeroDevs to offer Nuxt 2 Never-Ending Support (NES). Nuxt 2 NES provides ongoing security and compatibility patches for Nuxt 2 and all official Nuxt Modules (modules released by the Nuxt team, labeled `@nuxt/...` in the marketplace) even after EOL so that applications with strict compliance requirements remain secure and compliant. It also guarantees that Nuxt 2 applications will continue to operate effectively in modern browsers and maintain compatibility with essential libraries like Vue 2. Moreover, Nuxt 2 NES has continuous security monitoring and an enterprise level SLA with respect to support and fixes.

Nuxt 2 NES is the continuation of the flavor of security support you’ve enjoyed during the Nuxt 2 LTS period — but indefinitely.

::tip
---
target: _blank
to: https://www.herodevs.com/support/nuxt-nes?utm_source=nuxt&utm_medium=nuxt-eol-article
---
Read more about HeroDevs' Nuxt Never-Ending Support (NES)
::

### Notify Your Users of Your Nuxt 2 Post-EOL Plan

If migrating to Nuxt 3 or using Nuxt 2 NES isn't feasible right now, but you're still on Nuxt 2, it's essential to plan how you'll communicate your security strategy to your customers.

This doesn't affect all Nuxt users, but many teams face restrictions against deploying unsupported software due to SLAs, contracts, or other obligations to clients and partners. These requirements might come from customers, regulatory bodies, or internal company policies. Increasingly, regulatory bodies are setting higher standards for software accountability.

For those with such responsibilities, informing your customers, managers, CISO, or other stakeholders about your plans to handle support and manage potential CVEs is crucial. While Nuxt 2 has only had few vulnerabilities, CVEs can emerge even in well-maintained EOL projects through direct vulnerabilities or compromised dependencies. Staying updated with CVE notifications from organizations like [OpenCVE](https://www.opencve.io){rel="nofollow"}, and [Snyk](https://snyk.io){rel="nofollow"} can help you identify issues as they arise. Additionally, browsers occasionally update in ways that can affect legacy libraries—though rare, it’s a possibility to be aware of.

It is with a heavy heart that I am saying goodbye to Nuxt 2. After many years of working on it and seeing so many websites made with it, this famous loading bar at the top of each Nuxt 2 website will be something I’ll miss a lot! It is with excitement and energy that I will keep working with the core team on the future of Nuxt to keep innovating like we've been doing over these past 8 years.

---

## nuxt dev

**URL:** llms-txt#nuxt-dev

**Contents:**
- Arguments
- Options

The `dev` command starts a development server with hot module replacement at [http://localhost:3000](https://localhost:3000){rel="nofollow"}

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |
| `--clear`                          | `false` | Clear console on restart                                                                                                                             |
| `--no-f, --no-fork`                |         | Disable forked mode                                                                                                                                  |
| `-p, --port`                       |         | Port to listen on (default: `NUXT_PORT || NITRO_PORT || PORT || nuxtOptions.devServer.port`)                                                         |
| `-h, --host`                       |         | Host to listen on (default: `NUXT_HOST || NITRO_HOST || HOST || nuxtOptions.devServer?.host`)                                                        |
| `--clipboard`                      | `false` | Copy the URL to the clipboard                                                                                                                        |
| `-o, --open`                       | `false` | Open the URL in the browser                                                                                                                          |
| `--https`                          |         | Enable HTTPS                                                                                                                                         |
| `--publicURL`                      |         | Displayed public URL (used for QR code)                                                                                                              |
| `--qr`                             |         | Display The QR code of public URL when available                                                                                                     |
| `--public`                         |         | Listen to all network interfaces                                                                                                                     |
| `--tunnel`                         |         | Open a tunnel using <https://github.com/unjs/untun>{rel="nofollow"}                                                                                  |
| `--sslCert`                        |         | (DEPRECATED) Use `--https.cert` instead.                                                                                                             |
| `--sslKey`                         |         | (DEPRECATED) Use `--https.key` instead.                                                                                                              |

The port and host can also be set via NUXT\_PORT, PORT, NUXT\_HOST or HOST environment variables.

Additionally to the above options, `@nuxt/cli` can pass options through to `listhen`, e.g. `--no-qr` to turn off the dev server QR code. You can find the list of `listhen` options in the [unjs/listhen](https://github.com/unjs/listhen){rel="nofollow"} docs.

This command sets `process.env.NODE_ENV` to `development`.

::note
If you are using a self-signed certificate in development, you will need to set `NODE_TLS_REJECT_UNAUTHORIZED=0` in your environment.
::

---

## Liip AG

**URL:** llms-txt#liip-ag

Liip is a Swiss digital agency with strong convictions. For more than a decade, Liip has been helping companies with their strategic digital projects – from developing innovative web applications, award-winning mobile apps and data-driven online shops, through to coaching sessions for agile ways of working. Our strategy, ideation, user experience and custom development experts create long-lasting software. Whether start-up, large company or federal authority, from retail to mobility, our projects are used by thousands of users.

Rather than just offering standard solutions, we strive for real progress: user-centred innovations with a social, environmental and economic impact for our customers. Liip works in an agile way in self-organised teams using Holacracy. This means no bosses, just lots of entrepreneurship and drive – and even more open source, creative problem solving, testing and new technologies. This is valued by not only our around 200 employees, but also customers and award panels.

---

## Nuxt 3.17

**URL:** llms-txt#nuxt-3.17

**Contents:**
- 📊 Data Fetching Improvements
  - Consistent Data Across Components
  - Reactive Keys
  - Optimized Data Refetching
- 🎭 Built-In Nuxt Components
  - `<NuxtTime>` - A new component for safe time display
  - Enhanced `<NuxtErrorBoundary>`
- 🔗 Router Improvements
- 🔄 Loading Indicator Customization
- 📚 Documentation as a Package

## 📊 Data Fetching Improvements

A major reorganization of Nuxt's data fetching layer brings significant improvements to `useAsyncData` and `useFetch`.

Although we have aimed to maintain backward compatibility and put breaking changes behind the `experimental.granularCachedData` flag (disabled by default), we recommend testing your application thoroughly after upgrading. You can also disable `experimental.purgeCachedData` to revert to the previous behavior if you are relying on cached data being available indefinitely after components using `useAsyncData` are unmounted.

::read-more{target="_blank" to="https://github.com/nuxt/nuxt/pull/31373"}
Read the original PR for full details.
::

### Consistent Data Across Components

All calls to `useAsyncData` or `useFetch` with the same key now share the underlying refs, ensuring consistency across your application:

This solves various issues where components could have inconsistent data states.

You can now use computed refs, plain refs, or getter functions as keys:

### Optimized Data Refetching

Multiple components watching the same data source will now trigger only a single data fetch when dependencies change:

## 🎭 Built-In Nuxt Components

### `<NuxtTime>` - A new component for safe time display

We've added a new `<NuxtTime>` component for SSR-safe time display, which resolves hydration mismatches when working with dates ([#31876](https://github.com/nuxt/nuxt/pull/31876){rel="nofollow"}):

The component accepts multiple time formats and gracefully handles both client and server rendering.

### Enhanced `<NuxtErrorBoundary>`

The `<NuxtErrorBoundary>` component has been converted to a Single File Component and now exposes `error` and `clearError` from the component - as well as in the error slot types, giving you greater ability to handle errors in your templates and via `useTemplateRef` ([#31847](https://github.com/nuxt/nuxt/pull/31847){rel="nofollow"}):

## 🔗 Router Improvements

`<NuxtLink>` now accepts a `trailingSlash` prop, giving you more control over URL formatting ([#31820](https://github.com/nuxt/nuxt/pull/31820){rel="nofollow"}):

## 🔄 Loading Indicator Customization

You can now customize the loading indicator with new props directly on the component ([#31532](https://github.com/nuxt/nuxt/pull/31532){rel="nofollow"}):

- `hideDelay`: Controls how long to wait before hiding the loading bar
- `resetDelay`: Controls how long to wait before resetting loading indicator state

## 📚 Documentation as a Package

The Nuxt documentation is now available as an npm package! You can install `@nuxt/docs` to access the raw markdown and YAML content used to build the documentation website ([#31353](https://github.com/nuxt/nuxt/pull/31353){rel="nofollow"}).

## 💻 Developer Experience Improvements

We've added several warnings to help catch common mistakes:

- Warning when server components don't have a root element [#31365](https://github.com/nuxt/nuxt/pull/31365){rel="nofollow"}
- Warning when using the reserved `runtimeConfig.app` namespace [#31774](https://github.com/nuxt/nuxt/pull/31774){rel="nofollow"}
- Warning when core auto-import presets are overridden [#29971](https://github.com/nuxt/nuxt/pull/29971){rel="nofollow"}
- Error when `definePageMeta` is used more than once in a file [#31634](https://github.com/nuxt/nuxt/pull/31634){rel="nofollow"}

## 🔌 Enhanced Module Development

Module authors will be happy to know:

- A new `experimental.enforceModuleCompatibility` allows Nuxt to throw an error when a module is loaded that isn't compatible with it ([#31657](https://github.com/nuxt/nuxt/pull/31657){rel="nofollow"}). It will be enabled by default in Nuxt v4.
- You can now automatically register every component exported via named exports from a file with `addComponentExports` [#27155](https://github.com/nuxt/nuxt/pull/27155){rel="nofollow"}

## 🔥 Performance Improvements

Several performance improvements have been made:

- Switched to `tinyglobby` for faster file globbing [#31668](https://github.com/nuxt/nuxt/pull/31668){rel="nofollow"}
- Excluded `.data` directory from type-checking for faster builds [#31738](https://github.com/nuxt/nuxt/pull/31738){rel="nofollow"}
- Improved tree-shaking by hoisting the `purgeCachedData` check [#31785](https://github.com/nuxt/nuxt/pull/31785){rel="nofollow"}

Our recommendation for upgrading is to run:

This refreshes your lockfile and pulls in all the latest dependencies that Nuxt relies on, especially from the unjs ecosystem.

## Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.17.0
---
Read the full release notes of Nuxt `v3.17.0`.
::

A huge thank you to everyone who's been a part of this release. ❤️

**Examples:**

Example 1 (vue):
```vue
<!-- ComponentA.vue -->
<script setup>
const { data: users, pending } = useAsyncData('users', fetchUsers)
</script>

<!-- ComponentB.vue -->
<script setup>
// This will reference the same data state as ComponentA
const { data: users, status } = useAsyncData('users', fetchUsers)
// When either component refreshes the data, both will update consistently
</script>
```

Example 2 (ts):
```ts
const userId = ref('123')
const { data: user } = useAsyncData(
  computed(() => `user-${userId.value}`),
  () => fetchUser(userId.value)
)

// Changing the userId will automatically trigger a new data fetch
// and clean up the old data if no other components are using it
userId.value = '456'
```

Example 3 (ts):
```ts
// In multiple components:
const { data } = useAsyncData(
  'users', 
  () => $fetch(`/api/users?page=${route.query.page}`),
  { watch: [() => route.query.page] }
)

// When route.query.page changes, only one fetch operation will occur
// All components using this key will update simultaneously
```

Example 4 (vue):
```vue
<template>
  <NuxtTime :datetime="Date.now()" />
</template>
```

---

## useRequestFetch

**URL:** llms-txt#userequestfetch

You can use `useRequestFetch` to forward the request context and headers when making server-side fetch requests.

When making a client-side fetch request, the browser automatically sends the necessary headers.
However, when making a request during server-side rendering, due to security considerations, we need to forward the headers manually.

::note
Headers that are **not meant to be forwarded** will **not be included** in the request. These headers include, for example:
`transfer-encoding`, `connection`, `keep-alive`, `upgrade`, `expect`, `host`, `accept`
::

::tip
The [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) composable uses `useRequestFetch` under the hood to automatically forward the request context and headers.
::

::tip
In the browser during client-side navigation, `useRequestFetch` will behave just like regular [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch).
::

**Examples:**

Example 1 (unknown):
```unknown

```

---

## .nuxt

**URL:** llms-txt#.nuxt

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/guide/directory-structure/gitignore) file to avoid pushing the dev build output to your repository.
::

This directory is interesting if you want to learn more about the files Nuxt generates based on your directory structure.

Nuxt also provides a Virtual File System (VFS) for modules to add templates to this directory without writing them to disk.

You can explore the generated files by opening the [Nuxt DevTools](https://devtools.nuxt.com){rel="nofollow"} in development mode and navigating to the **Virtual Files** tab.

::warning
You should not touch any files inside since the whole directory will be re-created when running [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev).
::

---

## nuxt module

**URL:** llms-txt#nuxt-module

**Contents:**
- nuxt module add
- nuxt module search
  - Arguments
  - Options

Nuxt provides a few utilities to work with [Nuxt modules](https://nuxt.com/modules) seamlessly.

| Argument     | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| `MODULENAME` | Specify one or more modules to install by name, separated by spaces |

| Option                             | Default | Description                         |
| ---------------------------------- | ------- | ----------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory       |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level        |
| `--skipInstall`                    |         | Skip npm install                    |
| `--skipConfig`                     |         | Skip nuxt.config.ts update          |
| `--dev`                            |         | Install modules as dev dependencies |

The command lets you install [Nuxt modules](https://nuxt.com/modules) in your application with no manual work.

When running the command, it will:

- install the module as a dependency using your package manager
- add it to your [package.json](https://nuxt.com/docs/3.x/guide/directory-structure/package) file
- update your [`nuxt.config`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file

Installing the [`Pinia`](https://nuxt.com/modules/pinia) module

## nuxt module search

| Argument | Description            |
| -------- | ---------------------- |
| `QUERY`  | keywords to search for |

| Option                | Default | Description                                                                        |
| --------------------- | ------- | ---------------------------------------------------------------------------------- |
| `--cwd=<directory>`   | `.`     | Specify the working directory                                                      |
| `--nuxtVersion=<2|3>` |         | Filter by Nuxt version and list compatible modules only (auto detected by default) |

The command searches for Nuxt modules matching your query that are compatible with your Nuxt version.

**Examples:**

Example 1 (unknown):
```unknown
| Argument     | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| `MODULENAME` | Specify one or more modules to install by name, separated by spaces |

| Option                             | Default | Description                         |
| ---------------------------------- | ------- | ----------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory       |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level        |
| `--skipInstall`                    |         | Skip npm install                    |
| `--skipConfig`                     |         | Skip nuxt.config.ts update          |
| `--dev`                            |         | Install modules as dev dependencies |

The command lets you install [Nuxt modules](https://nuxt.com/modules) in your application with no manual work.

When running the command, it will:

- install the module as a dependency using your package manager
- add it to your [package.json](https://nuxt.com/docs/3.x/guide/directory-structure/package) file
- update your [`nuxt.config`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file

**Example:**

Installing the [`Pinia`](https://nuxt.com/modules/pinia) module
```

Example 2 (unknown):
```unknown
## nuxt module search
```

Example 3 (unknown):
```unknown
### Arguments

| Argument | Description            |
| -------- | ---------------------- |
| `QUERY`  | keywords to search for |

### Options

| Option                | Default | Description                                                                        |
| --------------------- | ------- | ---------------------------------------------------------------------------------- |
| `--cwd=<directory>`   | `.`     | Specify the working directory                                                      |
| `--nuxtVersion=<2|3>` |         | Filter by Nuxt version and list compatible modules only (auto detected by default) |

The command searches for Nuxt modules matching your query that are compatible with your Nuxt version.

**Example:**
```

---

## Nuxt 3.10

**URL:** llms-txt#nuxt-3.10

**Contents:**
  - ✨ Experimental shared `asyncData` when prerendering
  - 🆔 SSR-safe accessible unique ID creation
  - ✍️ Extending `app/router.options`
  - :icon{name="i-vscode-icons-file-type-node"} Client-side Node.js support
  - 🍪 Better cookie reactivity
  - 🏥 Detecting anti-patterns
  - 🧂 Granular view transitions support
  - 🏗️ Build-time route metadata
  - 📦 Bundler module resolution
- ✅ Upgrading

v3.10 comes quite close on the heels of v3.9, but it's packed with features and fixes. Here are a few highlights.

### ✨ Experimental shared `asyncData` when prerendering

When prerendering routes, we can end up refetching the same data over and over again. In Nuxt 2 it was possible to create a 'payload' which could be fetched once and then accessed in every page (and this is of course possible to do manually in Nuxt 3 - see [this article](https://roe.dev/blog/shared-data-nuxt-generate){rel="nofollow"}).

With [#24894](https://github.com/nuxt/nuxt/pull/24894){rel="nofollow"}, we are now able to do this automatically for you when prerendering your site. Your [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch) calls will be deduplicated and cached between renders of your site.

::important
It is particularly important to make sure that any unique key of your data is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch` should do this automatically.)
::

::read-more
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#sharedprerenderdata
---
::

### 🆔 SSR-safe accessible unique ID creation

We now ship a `useId` composable for generating SSR-safe unique IDs ([#23368](https://github.com/nuxt/nuxt/pull/23368){rel="nofollow"}). This allows creating more accessible interfaces in your app. For example:

### ✍️ Extending `app/router.options`

It's now possible for module authors to inject their own `router.options` files ([#24922](https://github.com/nuxt/nuxt/pull/24922){rel="nofollow"}). The new `pages:routerOptions` hook allows module authors to do things like add custom `scrollBehavior` or add runtime augmenting of routes.

::read-more
---
to: https://nuxt.com/docs/guide/going-further/custom-routing#router-options
---
::

### :icon{name="i-vscode-icons-file-type-node"} Client-side Node.js support

We now support (experimentally) polyfilling key Node.js built-ins ([#25028](https://github.com/nuxt/nuxt/pull/25028){rel="nofollow"}), just as we already do via Nitro on the server when deploying to non-Node environments.

That means that, within your client-side code, you can import directly from Node built-ins (`node:` and node imports are supported). However, nothing is globally injected for you, to avoid increasing your bundle size unnecessarily. You can either import them where needed.

Or provide your own polyfill, for example, inside a Nuxt plugin.

This should make life easier for users who are working with libraries without proper browser support. However, because of the risk in increasing your bundle unnecessarily, we would strongly urge users **to choose other alternatives** if at all possible.

### 🍪 Better cookie reactivity

We now allow you to opt-in to using the [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore){rel="nofollow"}. If browser support is present, this will then be used instead of a BroadcastChannel to update `useCookie` values reactively when the cookies are updated ([#25198](https://github.com/nuxt/nuxt/pull/25198){rel="nofollow"}).

This also comes paired with a new composable, `refreshCookie` which allows manually refreshing cookie values, such as after performing a request.

::read-more{to="https://nuxt.com/docs/api/utils/refresh-cookie"}
::

### 🏥 Detecting anti-patterns

In this release, we've also shipped a range of features to detect potential bugs and performance problems.

- We now will throw an error if `setInterval` is used on server ([#25259](https://github.com/nuxt/nuxt/pull/25259){rel="nofollow"}).
- We warn (in development only) if data fetch composables are used wrongly ([#25071](https://github.com/nuxt/nuxt/pull/25071){rel="nofollow"}), such as outside of a plugin or setup context.
- We warn (in development only) if you are not using `<NuxtPage />` but have the `vue-router` integration enabled ([#25490](https://github.com/nuxt/nuxt/pull/25490){rel="nofollow"}). (`<RouterView />` should not be used on its own.)

### 🧂 Granular view transitions support

It's now possible to control view transitions support on a per-page basis, using `definePageMeta` ([#25264](https://github.com/nuxt/nuxt/pull/25264){rel="nofollow"}).

You need to have experimental view transitions support enabled first:

And you can opt in/out granularly:

Finally, Nuxt will not apply View Transitions if the user's browser matches `prefers-reduced-motion: reduce` ([#22292](https://github.com/nuxt/nuxt/pull/22292){rel="nofollow"}). You can set `viewTransition: 'always'`; it will then be up to you to respect the user's preference.

### 🏗️ Build-time route metadata

It's now possible to access routing metadata defined in `definePageMeta` at build-time, allowing modules and hooks to modify and change these values ([#25210](https://github.com/nuxt/nuxt/pull/25210){rel="nofollow"}).

Please, experiment with this and let us know how it works for you. We hope to improve performance and enable this by default in a future release so modules like `@nuxtjs/i18n` and others can provide a deeper integration with routing options set in `definePageMeta`.

### 📦 Bundler module resolution

With [#24837](https://github.com/nuxt/nuxt/pull/24837){rel="nofollow"}, we are now opting in to the TypeScript `bundler` resolution which should more closely resemble the actual way that we resolve subpath imports for modules in Nuxt projects.

'Bundler' module resolution is [recommended by Vue](https://github.com/vuejs/tsconfig/blob/mainz/tsconfig.json#L24-L26){rel="nofollow"} and [by Vite](https://vitejs.dev/guide/performance.html#reduce-resolve-operations){rel="nofollow"}, but unfortunately there are still many packages that do not have the correct entries in their `package.json`.

As part of this, we opened 85 PRs across the ecosystem to test switching the default, and identified and fixed some issues.

If you need to switch off this behaviour, you can do so. However, please consider raising an issue (feel free to tag me in it) in the library or module's repo so it can be resolved at source.

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## Full Release Notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.10.0
---
Read the full release notes of Nuxt `v3.10.0`.
::

Thank you for reading this far! We hope you enjoy the new release. Please do let us know if you have any feedback or issues.

**Examples:**

Example 1 (unknown):
```unknown
::important
It is particularly important to make sure that any unique key of your data is always resolvable to the same data. For example, if you are using `useAsyncData` to fetch data related to a particular page, you should provide a key that uniquely matches that data. (`useFetch` should do this automatically.)
::

::read-more
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#sharedprerenderdata
---
::

### 🆔 SSR-safe accessible unique ID creation

We now ship a `useId` composable for generating SSR-safe unique IDs ([#23368](https://github.com/nuxt/nuxt/pull/23368){rel="nofollow"}). This allows creating more accessible interfaces in your app. For example:
```

Example 2 (unknown):
```unknown
### ✍️ Extending `app/router.options`

It's now possible for module authors to inject their own `router.options` files ([#24922](https://github.com/nuxt/nuxt/pull/24922){rel="nofollow"}). The new `pages:routerOptions` hook allows module authors to do things like add custom `scrollBehavior` or add runtime augmenting of routes.

::read-more
---
to: https://nuxt.com/docs/guide/going-further/custom-routing#router-options
---
::

### :icon{name="i-vscode-icons-file-type-node"} Client-side Node.js support

We now support (experimentally) polyfilling key Node.js built-ins ([#25028](https://github.com/nuxt/nuxt/pull/25028){rel="nofollow"}), just as we already do via Nitro on the server when deploying to non-Node environments.

That means that, within your client-side code, you can import directly from Node built-ins (`node:` and node imports are supported). However, nothing is globally injected for you, to avoid increasing your bundle size unnecessarily. You can either import them where needed.
```

Example 3 (unknown):
```unknown
Or provide your own polyfill, for example, inside a Nuxt plugin.
```

Example 4 (unknown):
```unknown
This should make life easier for users who are working with libraries without proper browser support. However, because of the risk in increasing your bundle unnecessarily, we would strongly urge users **to choose other alternatives** if at all possible.

### 🍪 Better cookie reactivity

We now allow you to opt-in to using the [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore){rel="nofollow"}. If browser support is present, this will then be used instead of a BroadcastChannel to update `useCookie` values reactively when the cookies are updated ([#25198](https://github.com/nuxt/nuxt/pull/25198){rel="nofollow"}).

This also comes paired with a new composable, `refreshCookie` which allows manually refreshing cookie values, such as after performing a request.

::read-more{to="https://nuxt.com/docs/api/utils/refresh-cookie"}
::

### 🏥 Detecting anti-patterns

In this release, we've also shipped a range of features to detect potential bugs and performance problems.

- We now will throw an error if `setInterval` is used on server ([#25259](https://github.com/nuxt/nuxt/pull/25259){rel="nofollow"}).
- We warn (in development only) if data fetch composables are used wrongly ([#25071](https://github.com/nuxt/nuxt/pull/25071){rel="nofollow"}), such as outside of a plugin or setup context.
- We warn (in development only) if you are not using `<NuxtPage />` but have the `vue-router` integration enabled ([#25490](https://github.com/nuxt/nuxt/pull/25490){rel="nofollow"}). (`<RouterView />` should not be used on its own.)

### 🧂 Granular view transitions support

It's now possible to control view transitions support on a per-page basis, using `definePageMeta` ([#25264](https://github.com/nuxt/nuxt/pull/25264){rel="nofollow"}).

You need to have experimental view transitions support enabled first:
```

---

## Nuxt 3.9

**URL:** llms-txt#nuxt-3.9

**Contents:**
  - ⚡️ Vite 5
  - ✨ Vue 3.4 ready
  - 🏝️ Interactive Server Components
  - 🔥 Automatic Server Optimisations
  - 🚦 Granular Loading API
  - 🏁 Run single events in `callOnce`
  - 🚨 Error Types
  - 🔥 Schema Performance
- ✅ Upgrading
- Full Release Notes

A very merry Christmas to you and yours from all Nuxters involved in this release! 🎁🎄

We have lots of features packed into v3.9 and can't wait for you to try them out.

This release comes with Vite 5 and Rollup 4 support. Module authors may need to check to ensure that any vite plugins you're creating are compatible with these latest releases.

This comes with a whole host of great improvements and bug fixes - check out [the Vite changelog](https://vitejs.dev/guide/migration.html#migration-from-v4){rel="nofollow"} for more info.

This release is tested with the latest Vue 3.4 release candidate, and has the necessary configuration to take advantage of [new features in Vue 3.4](https://blog.vuejs.org/posts/vue-3-4){rel="nofollow"}, including debugging hydration errors in production (just set `debug: true`) in your Nuxt config.

👉 To take advantage, just update your `vue` version once v3.4 is released, or try out the release candidate today:

### 🏝️ Interactive Server Components

This is a highly-experimental update, but it's now possible to play around with interactive components within Nuxt server components. You'll need to enable this new feature additionally to component islands:

Now, within a server component, you can specify components to hydrate by using the `nuxt-client` directive:

We're pretty excited about this one - so do let us know how you're using it! 🙏

### 🔥 Automatic Server Optimisations

We now use Vite's new AST-aware 'define' to perform more accurate replacements on server-side code, meaning code like this will no longer throw an error:

This hasn't been possible until now because we haven't wanted to run the risk of accidentally replacing normal words like `document` within non-JS parts of your apps. But Vite's new `define` functionality is powered by `esbuild` and is syntax-aware, so we feel confident in enabling this functionality. Nevertheless, you can opt out if you need to:

### 🚦 Granular Loading API

We now have a new hook-based system for [`<NuxtLoadingIndicator>`](https://nuxt.com/docs/api/components/nuxt-loading-indicator), including a `useLoadingIndicator` composable that lets you control/stop/start the loading state. You can also hook into `page:loading:start` and `page:loading:end` if you prefer.

::tip
You can read more [in the docs](https://nuxt.com/docs/api/composables/use-loading-indicator) and in the original PR ([#24010](https://github.com/nuxt/nuxt/pull/24010){rel="nofollow"}).
::

### 🏁 Run single events in `callOnce`

Sometimes you only want to run code once, no matter how many times you load a page - and you don't want to run it again on the client if it ran on the server.

For this, we have a new utility: [`callOnce`](https://nuxt.com/docs/api/utils/call-once) ([#24787](https://github.com/nuxt/nuxt/pull/24787){rel="nofollow"}).

Note that this utility is context-aware so it *must* be called in component setup function or Nuxt plugin, as with other Nuxt composables.

::read-more{to="https://nuxt.com/docs/api/utils/call-once"}
::

For a while now, errors returned by `useAsyncData` and `useFetch` have been typed pretty generically as `Error`. We've significantly improved the type possibilities for them to make them more accurate in terms of what you'll actually receive. (We normalise errors with the `h3` `createError` utility under the hood, so they can be serialised from server to client, for example.)

We've tried to implement the type change in a backwards compatible way, but you might notice that you need to update the generic if you're manually configuring the generics for these composables. See ([#24396](https://github.com/nuxt/nuxt/pull/24396){rel="nofollow"}) for more information, and do let us know if you experience any issues.

### 🔥 Schema Performance

We've taken some time in this release to make some minor performance improvements, so you should notice some things are a bit faster. This is an ongoing project and we have ideas for improving initial load time of the Nuxt dev server.

As usual, our recommendation for upgrading is to run:

## Full Release Notes

::read-more
---
icon: i-simple-icons-github
to: https://github.com/nuxt/nuxt/releases/tag/v3.9.0
---
Read the full release notes of Nuxt `v3.9.0`.
::

Thank you for reading this far! We hope you enjoy the new release. Please do let us know if you have any feedback or issues.

**Examples:**

Example 1 (unknown):
```unknown
### 🏝️ Interactive Server Components

This is a highly-experimental update, but it's now possible to play around with interactive components within Nuxt server components. You'll need to enable this new feature additionally to component islands:
```

Example 2 (unknown):
```unknown
Now, within a server component, you can specify components to hydrate by using the `nuxt-client` directive:
```

Example 3 (unknown):
```unknown
We're pretty excited about this one - so do let us know how you're using it! 🙏

### 🔥 Automatic Server Optimisations

We now use Vite's new AST-aware 'define' to perform more accurate replacements on server-side code, meaning code like this will no longer throw an error:
```

Example 4 (unknown):
```unknown
This hasn't been possible until now because we haven't wanted to run the risk of accidentally replacing normal words like `document` within non-JS parts of your apps. But Vite's new `define` functionality is powered by `esbuild` and is syntax-aware, so we feel confident in enabling this functionality. Nevertheless, you can opt out if you need to:
```

---

## useRouteAnnouncer

**URL:** llms-txt#userouteannouncer

**Contents:**
- Description
- Parameters
- Properties
  - `message`
  - `politeness`
- Methods
  - `set(message, politeness = "polite")`
  - `polite(message)`
  - `assertive(message)`
- Example

::important
This composable is available in Nuxt v3.12+.
::

A composable which observes the page title changes and updates the announcer message accordingly. Used by [`<NuxtRouteAnnouncer>`](https://nuxt.com/docs/3.x/api/components/nuxt-route-announcer) and controllable.
It hooks into Unhead's [`dom:rendered`](https://unhead.unjs.io/docs/typescript/head/api/hooks/dom-rendered){rel="nofollow"} to read the page's title and set it as the announcer message.

- `politeness`: Sets the urgency for screen reader announcements: `off` (disable the announcement), `polite` (waits for silence), or `assertive` (interrupts immediately). (default `polite`).

- **type**: `Ref<string>`
- **description**: The message to announce

- **type**: `Ref<string>`
- **description**: Screen reader announcement urgency level `off`, `polite`, or `assertive`

### `set(message, politeness = "polite")`

Sets the message to announce with its urgency level.

### `polite(message)`

Sets the message with `politeness = "polite"`

### `assertive(message)`

Sets the message with `politeness = "assertive"`

---

## <NuxtClientFallback>

**URL:** llms-txt#<nuxtclientfallback>

**Contents:**
- Events
- Props
- Slots

Nuxt provides the `<NuxtClientFallback>` component to render its content on the client if any of its children trigger an error in SSR.

::note
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#clientfallback
---
This component is experimental and in order to use it you must enable the `experimental.clientFallback` option in your `nuxt.config`.
::

- `@ssr-error`: Event emitted when a child triggers an error in SSR. Note that this will only be triggered on the server.

- `placeholderTag` | `fallbackTag`: Specify a fallback tag to be rendered if the slot fails to render on the server.

- **type**: `string`
  - **default**: `div`
- `placeholder` | `fallback`: Specify fallback content to be rendered if the slot fails to render.

- **type**: `string`
- `keepFallback`: Keep the fallback content if it failed to render server-side.

- **type**: `boolean`
  - **default**: `false`

- `#fallback`: specify content to be displayed server-side if the slot fails to render.

**Examples:**

Example 1 (unknown):
```unknown
## Events

- `@ssr-error`: Event emitted when a child triggers an error in SSR. Note that this will only be triggered on the server.
```

Example 2 (unknown):
```unknown
## Props

- `placeholderTag` | `fallbackTag`: Specify a fallback tag to be rendered if the slot fails to render on the server.

  - **type**: `string`
  - **default**: `div`
- `placeholder` | `fallback`: Specify fallback content to be rendered if the slot fails to render.

  - **type**: `string`
- `keepFallback`: Keep the fallback content if it failed to render server-side.

  - **type**: `boolean`
  - **default**: `false`
```

Example 3 (unknown):
```unknown
## Slots

- `#fallback`: specify content to be displayed server-side if the slot fails to render.
```

---

## Wimadev

**URL:** llms-txt#wimadev

We help you plan, develop, extend and maintain your enterprise grade Nuxt application and Node.js backend. Our customers include big international tech corporations and some of Germanys most well known brands. We have been developing almost exclusively with Nuxt since Nuxt 2 was released about 5 years ago.

---

## Nuxt UI v3

**URL:** llms-txt#nuxt-ui-v3

**Contents:**
- 🚀 Reimagined from the Ground Up
  - **From HeadlessUI to Reka UI**
  - **Tailwind CSS v4 Integration**
- 🎨 A Brand New Design System
- 💚 Complete Vue Compatibility
- 📦 Components for Every Need
- 🔷 Improved TypeScript Integration
- ⬆️ Upgrading to v3
- 🎯 Getting Started

We are thrilled to announce the release of Nuxt UI v3, a complete redesign of our UI library that brings significant improvements in accessibility, performance, and developer experience. This major update represents over 1500 commits of hard work, collaboration, and innovation from our team and the community.

## 🚀 Reimagined from the Ground Up

Nuxt UI v3 represents a major leap forward in our journey to provide the most comprehensive UI solution for Vue and Nuxt developers. This version has been rebuilt from the ground up with modern technologies and best practices in mind.

### **From HeadlessUI to Reka UI**

With Reka UI at its core, Nuxt UI v3 delivers:

• Proper keyboard navigation across all interactive components

• ARIA attributes automatically handled for you

• Focus management that just works

• Screen reader friendly components out of the box

This means you can build applications that work for everyone without becoming an accessibility expert.

### **Tailwind CSS v4 Integration**

The integration with Tailwind CSS v4 brings huge performance improvements:

• **5x faster runtime** with optimized component rendering

• **100x faster build times** thanks to the new CSS-first engine

• Smaller bundle sizes with more efficient styling

Your applications will feel snappier, build quicker, and load faster for your users.

## 🎨 A Brand New Design System

Our new color system includes 7 semantic color aliases:

| Color                        | Default  | Description                                      |
| ---------------------------- | -------- | ------------------------------------------------ |
| `primary`{.text-primary}     | `blue`   | Primary color to represent the brand.            |
| `secondary`{.text-secondary} | `blue`   | Secondary color to complement the primary color. |
| `success`{.text-success}     | `green`  | Used for success states.                         |
| `info`{.text-info}           | `blue`   | Used for informational states.                   |
| `warning`{.text-warning}     | `yellow` | Used for warning states.                         |
| `error`{.text-error}         | `red`    | Used for form error validation states.           |
| `neutral`                    | `slate`  | Neutral color for backgrounds, text, etc.        |

This approach makes your codebase more maintainable and your UI more consistent—especially when working in teams. With these semantic tokens, light and dark mode transitions become effortless, as the system automatically handles the appropriate color values for each theme without requiring duplicate class definitions.

## 💚 Complete Vue Compatibility

We're really happy to expand the scope of Nuxt UI beyond the Nuxt framework. With v3, both Nuxt UI and Nuxt UI Pro now work seamlessly in any Vue project, this means you can:

• Use the same components across all your Vue projects

• Benefit from Nuxt UI's theming system in any Vue application

• Enjoy auto-imports and TypeScript support outside of Nuxt

• Leverage both basic components and advanced Pro components in any Vue project

## 📦 Components for Every Need

With 54 core components, 50 Pro components, and 42 Prose components, Nuxt UI v3 provides solutions for virtually any UI challenge:

• **Data Display**: Tables, charts, and visualizations that adapt to your data

• **Navigation**: Menus, tabs, and breadcrumbs that guide users intuitively

• **Feedback**: Toasts, alerts, and modals that communicate clearly

• **Forms**: Inputs, selectors, and validation that simplify data collection

• **Layout**: Grids, containers, and responsive systems that organize content beautifully

Each component is designed to be both beautiful out of the box and deeply customizable when needed.

## 🔷 Improved TypeScript Integration

We've completely revamped our TypeScript integration, with features that make you more productive:

- Complete type safety with helpful autocompletion
- Generic-based components for flexible APIs
- Type-safe theming through a clear, consistent API

## ⬆️ Upgrading to v3

We've prepared a comprehensive [migration](https://ui.nuxt.com/getting-started/migration){rel="nofollow"} guide to help you upgrade from v2 to v3. While there are breaking changes due to our complete overhaul, we've worked hard to make the transition as smooth as possible.

Whether you're starting a new project or upgrading an existing one, getting started with Nuxt UI v3 is easy:

**Examples:**

Example 1 (html):
```html
<!-- Before: Inconsistent color usage with duplicate dark mode classes -->
<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
  <h2 class="text-gray-900 dark:text-white text-xl mb-2">User Profile</h2>
  <p class="text-gray-600 dark:text-gray-300">Account settings and preferences</p>
  <button class="bg-blue-500 text-white px-3 py-1 rounded mt-2">Edit Profile</button>
</div>
```

Example 2 (html):
```html
<!-- After: Semantic design tokens with automatic dark mode support -->
<div class="bg-muted p-4 rounded-lg">
  <h2 class="text-highlighted text-xl mb-2">User Profile</h2>
  <p class="text-muted">Account settings and preferences</p>
  <UButton color="primary" size="sm" class="mt-2">Edit Profile</UButton>
</div>
```

Example 3 (unknown):
```unknown
## 📦 Components for Every Need

With 54 core components, 50 Pro components, and 42 Prose components, Nuxt UI v3 provides solutions for virtually any UI challenge:

• **Data Display**: Tables, charts, and visualizations that adapt to your data

• **Navigation**: Menus, tabs, and breadcrumbs that guide users intuitively

• **Feedback**: Toasts, alerts, and modals that communicate clearly

• **Forms**: Inputs, selectors, and validation that simplify data collection

• **Layout**: Grids, containers, and responsive systems that organize content beautifully

Each component is designed to be both beautiful out of the box and deeply customizable when needed.

## 🔷 Improved TypeScript Integration

We've completely revamped our TypeScript integration, with features that make you more productive:

- Complete type safety with helpful autocompletion
- Generic-based components for flexible APIs
- Type-safe theming through a clear, consistent API
```

Example 4 (unknown):
```unknown
## ⬆️ Upgrading to v3

We've prepared a comprehensive [migration](https://ui.nuxt.com/getting-started/migration){rel="nofollow"} guide to help you upgrade from v2 to v3. While there are breaking changes due to our complete overhaul, we've worked hard to make the transition as smooth as possible.

## 🎯 Getting Started

Whether you're starting a new project or upgrading an existing one, getting started with Nuxt UI v3 is easy:
```

---

## Deno Deploy

**URL:** llms-txt#deno-deploy

**Contents:**
- Deploy with the CLI

::important
Deno deploy preset is experimental.
::

## Deploy with the CLI

You can use [deployctl](https://deno.com/deploy/docs/deployctl){rel="nofollow"} to deploy your app.

Login to [Deno Deploy](https://dash.deno.com/account#access-tokens){rel="nofollow"} to obtain a `DENO_DEPLOY_TOKEN` access token, and set it as an environment variable.

---

## Stormkit

**URL:** llms-txt#stormkit

**Contents:**
- Setup
- Deployment

::tip
**Zero Configuration ✨**

Integration with [Stormkit](https://www.stormkit.io/){rel="nofollow"} is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

Follow the steps to [create a new app](https://app.stormkit.io/apps/new){rel="nofollow"} on Stormkit.

By default, Stormkit will deploy your apps automatically when you push changes to your main branch. But to trigger a manual deploy (for example, you might do this for the very first deployment), you may click `Deploy now`.

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/stormkit
---
Head over **Nitro documentation** to learn more about the stormkit deployment preset.
::

---

## nuxt test

**URL:** llms-txt#nuxt-test

**Contents:**
- Arguments
- Options

The `test` command runs tests using [`@nuxt/test-utils`](https://nuxt.com/docs/getting-started/testing). This command sets `process.env.NODE_ENV` to `test` if not already set.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                     |
| `--dev`                            |         | Run in dev mode                                                                  |
| `--watch`                          |         | Watch mode                                                                       |

::note
This command sets `process.env.NODE_ENV` to `test`.
::

---

## Why is it important to fix them?

**URL:** llms-txt#why-is-it-important-to-fix-them?

**Contents:**
- Performance Impact
- Functionality Issues

Hydration mismatches are not just warnings - they are indicators of serious problems that can break your application:

## Performance Impact

- **Increased time to interactive**: Hydration errors force Vue to re-render the entire component tree, which will increase the time for your Nuxt app to become interactive
- **Poor user experience**: Users may see content flashing or unexpected layout shifts

## Functionality Issues

- **Broken interactivity**: Event listeners may not attach properly, leaving buttons and forms non-functional
- **State inconsistencies**: Application state can become out of sync between what the user sees and what the application thinks is rendered
- **SEO problems**: Search engines may index different content than what users actually see

---

## ignore layout files whose name ends with -ignore.vue

**URL:** llms-txt#ignore-layout-files-whose-name-ends-with--ignore.vue

---

## Design Kit

**URL:** llms-txt#design-kit

**Contents:**
- Logo History
- Nuxt Logo
  - Icon
  - Logo
- Color Palette

The Nuxt logo has evolved gradually over time, but the mountain shape and wordmark have been constant elements in its design.

::div{.hidden.lg:block}
![Nuxt Logo Timeline](https://nuxt.com/assets/design-kit/timeline-light.svg){.dark:hidden.w-full}![Nuxt Logo Timeline](https://nuxt.com/assets/design-kit/timeline-dark.svg){.hidden.dark:block.w-full}
::

::div{.lg:hidden}
![Nuxt Logo Timeline](https://nuxt.com/assets/design-kit/timeline-mobile-light.svg){.dark:hidden.w-full}![Nuxt Logo Timeline](https://nuxt.com/assets/design-kit/timeline-mobile-dark.svg){.hidden.dark:block.w-full}
::

The logo is made from two elements: the triangular mountains and the wordmark. In most cases, they should appear together as the opposite master lockup shows. The triangular mountains can be used on their own as an icon, profile picture or badge, but the wordmark should never be used without this symbol on the side.

::u-page-grid
  :::design-kit-image-card{name="Green" path="icon-green"}
  :::

:::design-kit-image-card{background="bg-white" name="Black" path="icon-black"}
  :::

:::design-kit-image-card
  ---
  background: bg-gray-950
  name: White
  path: icon-white
  ---
  :::
::

::u-page-grid
  :::design-kit-image-card
  ---
  full: true
  background: bg-gray-950
  name: Green & white
  path: logo-green-white
  ---
  :::

:::design-kit-image-card
  ---
  full: true
  background: bg-white
  name: Black
  path: logo-black
  ---
  :::

:::design-kit-image-card
  ---
  full: true
  background: bg-gray-950
  name: White
  path: logo-white
  ---
  :::

:::design-kit-image-card
  ---
  full: true
  background: bg-white
  name: Green & black
  path: logo-green-black
  ---
  :::
::

Our color palette is based on our iconic Nuxt green and colours have been carefully considered to work in harmony and consistency across various media. When creating Nuxt communications, use the colour values shown to make sure your designs stay on-brand.

::u-page-grid
  :::design-kit-color-card{background="#00DC82" name="Green"}
  :::

:::design-kit-color-card{background="#FFFFFF" name="White"}
  :::

:::design-kit-color-card{background="#020420" name="Gray"}
  :::
::

---

## How Nuxt Works?

**URL:** llms-txt#how-nuxt-works?

**Contents:**
- The Nuxt Interface
- The NuxtApp Interface
- Runtime Context vs. Build Context

This guide helps you better understand Nuxt internals to develop new solutions and module integrations on top of Nuxt.

## The Nuxt Interface

When you start Nuxt in development mode with [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev) or building a production application with [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build),
a common context will be created, referred to as `nuxt` internally. It holds normalized options merged with `nuxt.config` file,
some internal state, and a powerful [hooking system](https://nuxt.com/docs/3.x/api/advanced/hooks) powered by [unjs/hookable](https://github.com/unjs/hookable){rel="nofollow"}
allowing different components to communicate with each other. You can think of it as **Builder Core**.

This context is globally available to be used with [Nuxt Kit](https://nuxt.com/docs/3.x/guide/going-further/kit) composables.
Therefore only one instance of Nuxt is allowed to run per process.

To extend the Nuxt interface and hook into different stages of the build process, we can use [Nuxt Modules](https://nuxt.com/docs/3.x/guide/going-further/modules).

For more details, check out [the source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/core/nuxt.ts){rel="nofollow"}.

## The NuxtApp Interface

When rendering a page in the browser or on the server, a shared context will be created, referred to as `nuxtApp`.
This context keeps vue instance, runtime hooks, and internal states like ssrContext and payload for hydration.
You can think of it as **Runtime Core**.

This context can be accessed using [`useNuxtApp()`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) composable within Nuxt plugins and `<script setup>` and vue composables.
Global usage is possible for the browser but not on the server, to avoid sharing context between users.

Since [`useNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) throws an exception if context is currently unavailable, if your composable does not always require `nuxtApp`, you can use [`tryUseNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app#tryusenuxtapp) instead, which will return `null` instead of throwing an exception.

To extend the `nuxtApp` interface and hook into different stages or access contexts, we can use [Nuxt Plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins).

Check [Nuxt App](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) for more information about this interface.

`nuxtApp` has the following properties:

For more details, check out [the source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts){rel="nofollow"}.

## Runtime Context vs. Build Context

Nuxt builds and bundles project using Node.js but also has a runtime side.

While both areas can be extended, that runtime context is isolated from build-time. Therefore, they are not supposed to share state, code, or context other than runtime configuration!

`nuxt.config` and [Nuxt Modules](https://nuxt.com/docs/3.x/guide/going-further/modules) can be used to extend the build context, and [Nuxt Plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) can be used to extend runtime.

When building an application for production, `nuxt build` will generate a standalone build in the `.output` directory, independent of `nuxt.config` and [Nuxt modules](https://nuxt.com/docs/3.x/guide/going-further/modules).

**Examples:**

Example 1 (ts):
```ts
interface NuxtApp {
  vueApp // the global Vue application: https://vuejs.org/api/application.html#application-api

  versions // an object containing Nuxt and Vue versions

  // These let you call and add runtime NuxtApp hooks
  // https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts#L18
  hooks
  hook
  callHook

  // Only accessible on server-side
  ssrContext: {
    url
    req
    res
    runtimeConfig
    noSSR
  }

  // This will be stringified and passed from server to client
  payload: {
    serverRendered: true
    data: {}
    state: {}
  }

  provide: (name: string, value: any) => void
}
```

---

## <NuxtImg>

**URL:** llms-txt#<nuxtimg>

**Contents:**
- Setup
- Usage

`<NuxtImg>` is a drop-in replacement for the native `<img>` tag.

- Uses built-in provider to optimize local and remote images
- Converts `src` to provider-optimized URLs
- Automatically resizes images based on `width` and `height`
- Generates responsive sizes when providing `sizes` option
- Supports native lazy loading as well as other `<img>` attributes

In order to use `<NuxtImg>` you should install and enable the Nuxt Image module:

`<NuxtImg>` outputs a native `img` tag directly (without any wrapper around it). Use it like you would use the `<img>` tag:

::read-more{target="_blank" to="https://image.nuxt.com/usage/nuxt-img"}
Read more about the `<NuxtImg>` component.
::

**Examples:**

Example 1 (unknown):
```unknown
## Usage

`<NuxtImg>` outputs a native `img` tag directly (without any wrapper around it). Use it like you would use the `<img>` tag:
```

Example 2 (unknown):
```unknown
Will result in:
```

---

## Nuxt dev/build outputs

**URL:** llms-txt#nuxt-dev/build-outputs

.output
.data
.nuxt
.nitro
.cache
dist

---

## SST

**URL:** llms-txt#sst

**Contents:**
- Quick start
- More options

Nuxt supports deploying on [SST](https://sst.dev/){rel="nofollow"} with minimal configuration.

1. Create a Nuxt project.
2. Init SST in your project.

3. It should detect that your are using Nuxt and ask you to update your `nuxt.config.ts` file.

4. Once you are ready to deploy, run.

You can [read the full Nuxt on SST tutorial here](https://sst.dev/docs/start/aws/nuxt){rel="nofollow"}.

You can also deploy Nuxt to a container using SST. Head over to the [SST docs to learn more](https://sst.dev/docs/start/aws/nuxt){rel="nofollow"}.

**Examples:**

Example 1 (bash):
```bash
npx sst@latest init
```

Example 2 (ts):
```ts
nitro: {
     preset: 'aws-lambda'
   }
```

Example 3 (bash):
```bash
npx sst deploy --stage production
```

---

## Compatibility

**URL:** llms-txt#compatibility

**Contents:**
- `checkNuxtCompatibility`
  - Usage
  - Type
  - Parameters
- `assertNuxtCompatibility`
  - Type
  - Parameters
- `hasNuxtCompatibility`
  - Usage
  - Type

Nuxt Kit utilities can be used in Nuxt 3, Nuxt 2 with Bridge and even Nuxt 2 without Bridge. To make sure your module is compatible with all versions, you can use the `checkNuxtCompatibility`, `assertNuxtCompatibility` and `hasNuxtCompatibility` functions. They will check if the current Nuxt version meets the constraints you provide. Also you can use `isNuxt2`, `isNuxt3` and `getNuxtVersion` functions for more granular checks.

## `checkNuxtCompatibility`

Checks if constraints are met for the current Nuxt version. If not, returns an array of messages. Nuxt 2 version also checks for `bridge` support.

**`constraints`**: Version and builder constraints to check against. It accepts the following properties:

| Property | Type                                                                                                                                               | Required | Description                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `nuxt`   | `string`                                                                                                                                           | `false`  | Nuxt version in semver format. Versions may be defined in Node.js way, for example: `>=2.15.0 <3.0.0`.                                          |
| `bridge` | `Record<string, string | false>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | Specifies version constraints or disables compatibility for specific Nuxt builders like `vite`, `webpack`, or `rspack`. Use `false` to disable. |

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

## `assertNuxtCompatibility`

Asserts that constraints are met for the current Nuxt version. If not, throws an error with the list of issues as string.

**`constraints`**: Version and builder constraints to check against. Refer to the [constraints table in `checkNuxtCompatibility`](https://nuxt.com/#parameters) for details.

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

## `hasNuxtCompatibility`

Checks if constraints are met for the current Nuxt version. Return `true` if all constraints are met, otherwise returns `false`. Nuxt 2 version also checks for `bridge` support.

**`constraints`**: Version and builder constraints to check against. Refer to the [constraints table in `checkNuxtCompatibility`](https://nuxt.com/#parameters) for details.

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

## `isNuxtMajorVersion`

Check if current Nuxt instance is of specified major version

**`major`**: Major version to check against.

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

Checks if the current Nuxt version is 3.x.

::note
Use `isNuxtMajorVersion(2, nuxt)` instead. This may be removed in @nuxt/kit v5 or a future major version.
::

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

Checks if the current Nuxt version is 2.x.

::note
Use `isNuxtMajorVersion(2, nuxt)` instead. This may be removed in @nuxt/kit v5 or a future major version.
::

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

Returns the current Nuxt version.

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

**Examples:**

Example 1 (unknown):
```unknown
### Type
```

Example 2 (unknown):
```unknown
### Parameters

**`constraints`**: Version and builder constraints to check against. It accepts the following properties:

| Property | Type                                                                                                                                               | Required | Description                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `nuxt`   | `string`                                                                                                                                           | `false`  | Nuxt version in semver format. Versions may be defined in Node.js way, for example: `>=2.15.0 <3.0.0`.                                          |
| `bridge` | `Record<string, string | false>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | Specifies version constraints or disables compatibility for specific Nuxt builders like `vite`, `webpack`, or `rspack`. Use `false` to disable. |

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

## `assertNuxtCompatibility`

Asserts that constraints are met for the current Nuxt version. If not, throws an error with the list of issues as string.

### Type
```

Example 3 (unknown):
```unknown
### Parameters

**`constraints`**: Version and builder constraints to check against. Refer to the [constraints table in `checkNuxtCompatibility`](https://nuxt.com/#parameters) for details.

**`nuxt`**: Nuxt instance. If not provided, it will be retrieved from the context via `useNuxt()` call.

## `hasNuxtCompatibility`

Checks if constraints are met for the current Nuxt version. Return `true` if all constraints are met, otherwise returns `false`. Nuxt 2 version also checks for `bridge` support.

### Usage
```

Example 4 (unknown):
```unknown
### Type
```

---

## Fidelity Solutions

**URL:** llms-txt#fidelity-solutions

Fidelity Solutions is a full-stack software development agency based in Dallas, Texas, proudly working with businesses across the United States. We build custom websites, apps, and software platforms that help companies reach their digital goals using innovative, scalable technology. Our team excels in everything from UI/UX design and mobile app development to software architecture and system engineering, always tailoring our services to meet the unique needs of each client.

Efficiency drives how we work. We focus on fast timelines, clean code, and eliminating non-essential tasks that slow projects down. Our clients value the open and honest communication they receive from us throughout the entire process—no surprises, just solid teamwork from start to finish. By staying in sync with our clients and using the right tools for the job, we deliver reliable, high-performing digital solutions that grow with your business.

**Why We Partner with Nuxt**

Nuxt helps us build smoother front-end experiences for our clients. Its server-side rendering, modular features, and built-in performance enhancements enable us to create websites that are efficient and easy to scale. This Nuxt partnership has been a game-changer! We launch projects faster and deliver better user experiences across a wide range of industries. We’re excited to start sharing our Nuxt insights and top client success stories.

---

## Events

**URL:** llms-txt#events

**Contents:**
- Creating Events and Listeners

Using events is a great way to decouple your application and allow for more flexible and modular communication between different parts of your code. Events can have multiple listeners that do not depend on each other. For example, you may wish to send an email to your user each time an order has shipped. Instead of coupling your order processing code to your email code, you can emit an event which a listener can receive and use to dispatch an email.

The Nuxt event system is powered by [unjs/hookable](https://github.com/unjs/hookable){rel="nofollow"}, which is the same library that powers the Nuxt hooks system.

## Creating Events and Listeners

You can create your own custom events using the `hook` method:

To emit an event and notify any listeners, use `callHook`:

You can also use the payload object to enable two-way communication between the emitter and listeners. Since the payload is passed by reference, a listener can modify it to send data back to the emitter.

::tip
You can inspect all events using the **Nuxt DevTools** Hooks panel.
::

::read-more{to="https://nuxt.com/docs/guide/going-further/hooks"}
Learn more about Nuxt's built-in hooks and how to extend them
::

**Examples:**

Example 1 (ts):
```ts
const nuxtApp = useNuxtApp()

nuxtApp.hook('app:user:registered', (payload) => {
  console.log('A new user has registered!', payload)
})
```

Example 2 (ts):
```ts
const nuxtApp = useNuxtApp()

await nuxtApp.callHook('app:user:registered', {
  id: 1,
  name: 'John Doe',
})
```

Example 3 (ts):
```ts
const nuxtApp = useNuxtApp()

nuxtApp.hook('app:user:registered', (payload) => {
  payload.message = 'Welcome to our app!'
})

const payload = {
  id: 1,
  name: 'John Doe',
}

await nuxtApp.callHook('app:user:registered', {
  id: 1,
  name: 'John Doe',
})

// payload.message will be 'Welcome to our app!'
```

---

## Universal Router

**URL:** llms-txt#universal-router

::sandbox
---
branch: main
dir: examples/routing/universal-router
file: app.vue
repo: nuxt/examples
---
::

---

## Features

**URL:** llms-txt#features

**Contents:**
- `features`
  - inlineStyles
  - noScripts
- `future`
  - compatibilityVersion
  - typescriptBundlerResolution

Some features of Nuxt are available on an opt-in basis, or can be disabled based on your needs.

Inlines styles when rendering HTML. This is currently available only when using Vite.

You can also pass a function that receives the path of a Vue component and returns a boolean indicating whether to inline the styles for that component.

Disables rendering of Nuxt scripts and JS resource hints. Can also be configured granularly within `routeRules`.

There is also a `future` namespace for early opting-in to new features that will become default in a future (possibly major) version of the framework.

### compatibilityVersion

::important
This configuration option is available in Nuxt v3.12+. Please note, that for now, you need to define the compatibility version in each layer that opts into Nuxt 4 behavior. This will not be required after Nuxt 4 is released.
::

This enables early access to Nuxt features or flags.

Setting `compatibilityVersion` to `4` changes defaults throughout your
Nuxt configuration to opt-in to Nuxt v4 behaviour, but you can granularly re-enable Nuxt v3 behaviour
when testing (see example). Please file issues if so, so that we can
address in Nuxt or in the ecosystem.

### typescriptBundlerResolution

This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting
for frameworks like Nuxt and [Vite](https://vite.dev/guide/performance.html#reduce-resolve-operations){rel="nofollow"}.

It improves type support when using modern libraries with `exports`.

See [the original TypeScript pull request](https://github.com/microsoft/TypeScript/pull/51669){rel="nofollow"}.

**Examples:**

Example 1 (unknown):
```unknown
### noScripts

Disables rendering of Nuxt scripts and JS resource hints. Can also be configured granularly within `routeRules`.
```

Example 2 (unknown):
```unknown
## `future`

There is also a `future` namespace for early opting-in to new features that will become default in a future (possibly major) version of the framework.

### compatibilityVersion

::important
This configuration option is available in Nuxt v3.12+. Please note, that for now, you need to define the compatibility version in each layer that opts into Nuxt 4 behavior. This will not be required after Nuxt 4 is released.
::

This enables early access to Nuxt features or flags.

Setting `compatibilityVersion` to `4` changes defaults throughout your
Nuxt configuration to opt-in to Nuxt v4 behaviour, but you can granularly re-enable Nuxt v3 behaviour
when testing (see example). Please file issues if so, so that we can
address in Nuxt or in the ecosystem.
```

Example 3 (unknown):
```unknown
### typescriptBundlerResolution

This enables 'Bundler' module resolution mode for TypeScript, which is the recommended setting
for frameworks like Nuxt and [Vite](https://vite.dev/guide/performance.html#reduce-resolve-operations){rel="nofollow"}.

It improves type support when using modern libraries with `exports`.

See [the original TypeScript pull request](https://github.com/microsoft/TypeScript/pull/51669){rel="nofollow"}.
```

---

## useRoute

**URL:** llms-txt#useroute

**Contents:**
- Example
- API
- Common Pitfalls
  - Route Synchronization Issues
  - Calling `useRoute` in Middleware
  - Hydration Issues with `route.fullPath`

::note
Within the template of a Vue component, you can access the route using `$route`.
::

The `useRoute` composable is a wrapper around the identically named composable from `vue-router`, providing access to the current route in a Nuxt application.

The key difference is that in Nuxt, the composable ensures that the route is updated **only after** the page content has changed after navigation.
In contrast, the `vue-router` version updates the route **immediately**, which can lead to synchronization issues between different parts of the template
that rely on the route metadata, for example.

In the following example, we call an API via [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) using a dynamic page parameter - `slug` - as part of the URL.

If you need to access the route query parameters (for example `example` in the path `/test?example=true`), then you can use `useRoute().query` instead of `useRoute().params`.

Apart from dynamic parameters and query parameters, `useRoute()` also provides the following computed references related to the current route:

- `fullPath`: encoded URL associated with the current route that contains path, query and hash
- `hash`: decoded hash section of the URL that starts with a #
- `query`: access route query parameters
- `matched`: array of normalized matched routes with current route location
- `meta`: custom data attached to the record
- `name`: unique name for the route record
- `path`: encoded pathname section of the URL
- `redirectedFrom`: route location that was attempted to access before ending up on the current route location

### Route Synchronization Issues

It’s important to use the `useRoute()` composable from Nuxt rather than the one from `vue-router` to avoid synchronization issues during page navigation.
Importing `useRoute` directly from `vue-router` bypasses Nuxt's implementation.

### Calling `useRoute` in Middleware

Using `useRoute` in middleware is not recommended because it can lead to unexpected behavior.
There is no concept of a "current route" in middleware.
The `useRoute()` composable should only be used in the setup function of a Vue component or in a Nuxt plugin.

::warning
This applies to any composable that uses `useRoute()` internally too.
::

::read-more
---
to: https://nuxt.com/docs/4.x/guide/directory-structure/app/middleware
---
Read more about accessing the route in the middleware section.
::

### Hydration Issues with `route.fullPath`

Browsers don't send [URL fragments](https://url.spec.whatwg.org/#concept-url-fragment){rel="nofollow"} (for example `#foo`) when making requests. So using `route.fullPath` to affect the template can trigger hydration issues because this will include the fragment on client but not the server.

::read-more
---
icon: i-simple-icons-vuedotjs
to: https://router.vuejs.org/api/type-aliases/RouteLocationNormalizedLoaded.html
---
::

**Examples:**

Example 1 (unknown):
```unknown
If you need to access the route query parameters (for example `example` in the path `/test?example=true`), then you can use `useRoute().query` instead of `useRoute().params`.

## API

Apart from dynamic parameters and query parameters, `useRoute()` also provides the following computed references related to the current route:

- `fullPath`: encoded URL associated with the current route that contains path, query and hash
- `hash`: decoded hash section of the URL that starts with a #
- `query`: access route query parameters
- `matched`: array of normalized matched routes with current route location
- `meta`: custom data attached to the record
- `name`: unique name for the route record
- `path`: encoded pathname section of the URL
- `redirectedFrom`: route location that was attempted to access before ending up on the current route location

## Common Pitfalls

### Route Synchronization Issues

It’s important to use the `useRoute()` composable from Nuxt rather than the one from `vue-router` to avoid synchronization issues during page navigation.
Importing `useRoute` directly from `vue-router` bypasses Nuxt's implementation.
```

---

## createError

**URL:** llms-txt#createerror

**Contents:**
- Parameters
- In Vue App
  - Example
- In API Routes
  - Example

You can use this function to create an error object with additional metadata. It is usable in both the Vue and Nitro portions of your app, and is meant to be thrown.

- `err`: `string | { cause, data, message, name, stack, statusCode, statusMessage, fatal }`

You can pass either a string or an object to the `createError` function. If you pass a string, it will be used as the error `message`, and the `statusCode` will default to `500`. If you pass an object, you can set multiple properties of the error, such as `statusCode`, `message`, and other error properties.

If you throw an error created with `createError`:

- on server-side, it will trigger a full-screen error page which you can clear with `clearError`.
- on client-side, it will throw a non-fatal error for you to handle. If you need to trigger a full-screen error page, then you can do this by setting `fatal: true`.

Use `createError` to trigger error handling in server API routes.

In API routes, using `createError` by passing an object with a short `statusMessage` is recommended because it can be accessed on the client side. Otherwise, a `message` passed to `createError` on an API route will not propagate to the client. Alternatively, you can use the `data` property to pass data back to the client. In any case, always consider avoiding to put dynamic user input to the message to avoid potential security issues.

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

**Examples:**

Example 1 (unknown):
```unknown
## In API Routes

Use `createError` to trigger error handling in server API routes.

### Example
```

---

## Vite

**URL:** llms-txt#vite

**Contents:**
- Remove Modules
- Update Config
- Configuration

::warning
When using `vite`, [nitro](https://nuxt.com/docs/3.x/bridge/nitro) must have been configured.
::

- Remove `nuxt-vite`: Bridge enables same functionality

**Examples:**

Example 1 (unknown):
```unknown
## Configuration
```

---

## DigiNeat

**URL:** llms-txt#digineat

Welcome to DigiNeat — a modern digital agency that always stays up-to-date with the times. We are proud to have representations in Armenia and the USA, allowing us to effectively collaborate with clients worldwide.

We specialize in developing:

- **Websites and mobile applications**: We create attractive and functional solutions that meet any business needs.
- **Smart TV applications**: We offer innovative solutions for television platforms to make entertainment even more accessible.
- **PC software**: We develop powerful and reliable applications for all necessary tasks.

**Why We Choose NUXT**

We have been using Nuxt as one of the leading solutions in our projects — from websites to smart TV applications. Our team is thrilled to be among the official agencies representing this company. Nuxt enables us to create high-quality and efficient applications with minimal time and resource investment. [Learn more about why we choose Nuxt.](https://digineat.com/partners/nuxt){rel="nofollow"}

For us, our clients' tasks and deadlines are a priority. By utilizing advanced technologies and an AI-first approach, we achieve more while spending less. Our cost-effective process optimization has saved our clients millions of dollars.

**Open to Collaboration**

We are always ready for new opportunities and open to collaboration. We welcome all interested parties to work with us on joint projects.

Contact us, and let’s create the future of digital technology together!

---

## ignore page bar.vue

**URL:** llms-txt#ignore-page-bar.vue

---

## Build with the deno_deploy preset

**URL:** llms-txt#build-with-the-deno_deploy-preset

npm run build --preset=deno_deploy

---

## Understanding how fetch works in Nuxt 2.12

**URL:** llms-txt#understanding-how-fetch-works-in-nuxt-2.12

**Contents:**
- Fetch Hook and Nuxt Lifecycle
  - Page Components
- Availability of fetch hook
  - Layout Components
  - Building-block (Child/Nested) Components
- Call order of multiple fetch hooks
  - Disabling fetch on server-side
- Error Handling
- Fetch as a method
- Making Nuxt pages more performant

Nuxt introduces a new `fetch` with the latest release of version 2.12. Fetch provides a brand new way to bring data into Nuxt applications.

In this post, we will explore different features of the fetch hook and try to understand how it works.

## Fetch Hook and Nuxt Lifecycle

In terms of Nuxt lifecycle hooks, `fetch` sits within Vue lifecycle after `created` hook. As we already know that, all Vue lifecycle hooks are called with their `this` context. The same applies to `fetch` hook as well.

![New fetch in Nuxt lifecycle](https://nuxt.com/assets/blog/new-fetch-lifecycle-hooks.png)

Fetch hook is called after the component instance is created on the server-side. That makes `this` context available inside the `fetch`.

Let’s see what this could mean for page components.

With the help of `this` context, fetch is able to mutate component’s data directly. It means we can set the component’s local data without having to dispatch Vuex store action or committing mutation from the page component.

As a result, Vuex becomes optional, but not impossible. We can still use `this.$store` as usual to access Vuex store if required.

## Availability of fetch hook

With `fetch`, we can prefetch the data asynchronously **in any Vue components**. It means, other than page components found in `/pages` directory, every other `.vue` components found in `/layouts` and `/components` directories can also benefit from the fetch hook.

Let's see what this could mean for layout and building-block components.

### Layout Components

Using new `fetch`, now we can make API calls directly from the layout components. This was impossible prior to the release of v2.12.

**Possible use cases**

- Fetch config data from the back-end in Nuxt layouts to generate footer and navbar dynamically
- Fetch user related data (i.e. user profile, shopping-cart item count) in the navbar
- Fetch site relevant data on `layouts/error.vue`

### Building-block (Child/Nested) Components

With `fetch` hook available in child components as well, we can off-load some of the data-fetching tasks from page-level components, and delegate them over to nested components. This was also impossible prior to the release of v2.12.

This reduces the responsibility of route-level components to a great extent.

**Possible use case -** We can still pass props to child components, but if the child components need to have their own data-fetching logic, now they can!

## Call order of multiple fetch hooks

Since each component can have its own data-fetching logic, you may ask what would be the order in which each of them are called?

Fetch hook is called on server-side once (on the first request to the Nuxt app) and then on client-side when navigating to further routes. But since we can define one fetch hook for each component, fetch hooks are called in sequence of their hierarchy.

### Disabling fetch on server-side

In addition, we can even disable fetch on the server-side if required.

And this way, the fetch hook will only be called on client-side. When `fetchOnServer` is set to false, `$fetchState.pending` becomes `true` when the component is rendered on server-side.

New `fetch` handles error at component level. Let’s see how.

Because we’re fetching data asynchronously, the new fetch() provides a `$fetchState` object to check whether the request has finished and progressed successfully.

Below is what the `$fetchState` object looks like.

1. **Pending -** lets you display a placeholder when fetch is being called on client-side
2. **Error -** lets you show an error message
3. **Timestamp -** shows timestamp of the last fetch which is useful for caching with `keep-alive`

These keys are then used directly in the template area of the component to show relevant placeholders during the process of fetching data from the API.

When error occurs at **component-level**, we can set HTTP status code on server-side by checking `process.server` in fetch hook and follow it up with `throw new Error()` statement.

Setting the HTTP status code this way **is useful for correct SEO**.

New fetch hook also acts as a method that can be invoked upon user interaction or invoked programmatically from the component methods.

## Making Nuxt pages more performant

We can use `:keep-alive-props` prop and `activated` hook to make Nuxt page components more performant using a new fetch hook.

Nuxt allows **caching a certain number of pages** in the memory along with their fetched data. And also allows **adding a number of seconds** before we can re-fetch the data.

For any of the above methods to work, we have to use the `keep-alive` prop in generic `<nuxt />` and `<nuxt-child`> components.

In addition, we can pass `:keep-alive-props` to `<nuxt />` component to cache a number of pages along with their fetched data.

`:keep-alive-props` prop allow us to indicate the maximum number of pages that should be kept in the memory while we navigate elsewhere within the site.

Above is one way to boost page performance which is more high-level and generic, while the next one drills down to optimize the fetch request calls by using the `timestamp` property of `$fetchState` and comparing it against the number of seconds delay before it re-fetches the data.

Vue’s `activated` hook is used here with Nuxt's `keep-alive` prop to re-fetch the data.

## asyncData vs Fetch

As far as page components are concerned, new `fetch` seems way too similar to `asyncData()` because they both deal with the local data. But there are some key differences worth taking note of as below.

As of Nuxt 2.12, `asyncData` method is still an active feature. Let’s examine some of the key differences between `asyncData` and new `fetch`.

1. `asyncData` is limited to only page-level components
2. `this` context is unavailable
3. Adds payload by **returning** the data

1. `fetch` is available in all Vue components
2. `this` context is available
3. Simply **mutates** the local data

## Fetch before Nuxt 2.12

If you have been working with Nuxt for a while, then you’ll know that the previous version of `fetch` was significantly different.

> **Is this a breaking change?**

> No, it isn't. Actually, the old fetch can still be used by passing the `context` as the first argument to avoid any breaking changes in your existing Nuxt applications.

Here’s the list of notable changes in `fetch` hook compared with **before** and **after** v2.12.

### 1. Call order of `fetch` hook

**Before -** `fetch` hook was called before initiating the component, hence `this` wasn’t available inside the fetch hook.

**After -** `fetch` is called after the component instance is created on the server-side when the route is accessed.

### 2. `this` vs `context`

**Before -** We had access to the Nuxt `context` on page-level components, given that the `context` is passed as a first parameter.

**After -** We can access `this` context just like Vue client-side hooks without passing any parameters.

### 3. Availability of `fetch` hook

**Before -** Only page (route-level) components were allowed to fetch data on the server-side.

**After -** Now, we can prefetch the data asynchronously in any Vue components.

### 4. Call order of `fetch` hook

**Before -** `fetch` could be called server-side once (on the first request to the Nuxt app) and client-side when navigating to further routes.

**After -** New `fetch` is the same as an old fetch, but…

…since we can have one `fetch` for each component, `fetch` hooks are called in sequence of their hierarchy.

### 5. Error Handling

**Before -** We used the `context.error` function that showed a custom error page when an error occurred during API calls.

**After -** New `fetch` uses the `$fetchState` object to handle errors in the template area during API calls.

Error handling is performed at component level.

> **Does this mean we cannot show users a custom error page like we did prior to Nuxt 2.12?**

Yes we can, but only with `asyncData()` when it's about page-level component data. When using `fetch`, we can utilize `this.$nuxt.error({ statusCode: 404, message: 'Data not found' })` to show a custom error page.

New fetch hook brings a lot of improvements and provides more flexibility in fetching data and organizing route-level & building-block components in a whole new way!

It will certainly make you think a little differently when you plan and design your new Nuxt project that requires multiple API calls within the same route.

I hope this article has helped you get acquainted with the new `fetch` feature. I'd love to see what you build with it.

**Examples:**

Example 1 (js):
```js
export default {
  fetch() {
    console.log(this)
  }
}
```

Example 2 (js):
```js
export default {
  fetchOnServer: false
}
```

Example 3 (text):
```text
$fetchState = {
  pending: true | false,
  error: null | {},
  timestamp: Integer
};
```

Example 4 (html):
```html
<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts</p>
    <ul v-else>
      …
    </ul>
  </div>
</template>
```

---

## package.json

**URL:** llms-txt#package.json

The minimal `package.json` of your Nuxt application should looks like:

::read-more
---
icon: i-simple-icons-npm
target: _blank
to: https://docs.npmjs.com/cli/configuring-npm/package-json
---
Read more about the `package.json` file.
::

---

## nuxt info

**URL:** llms-txt#nuxt-info

**Contents:**
- Arguments
- Options

The `info` command logs information about the current or specified Nuxt project.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option              | Default | Description                                                                      |
| ------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>` |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |

---

## DigitalOcean

**URL:** llms-txt#digitalocean

**Contents:**
- Setup
- Learn more

Nuxt supports deploying on the [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/){rel="nofollow"} with minimal configuration.

1. Create a new DigitalOcean app following the [guide](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/){rel="nofollow"}.
2. Next, you'll need to configure environment variables. In your app settings, ensure the following [app-level environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/){rel="nofollow"}:
   
3. You will need to ensure you set an `engines.node` field in your app's `package.json` to ensure DigitalOcean uses a supported version of Node.js:
   
4. You'll also need to add a run command so DigitalOcean knows what command to run after a build. You can do so by adding a start script to your `package.json`:
   
5. Finally, you'll need to add this start script to your DigitalOcean app's run command. Go to `Components > Settings > Commands`, click "Edit", then add `npm run start`

::tip
Your Nuxt app should be live at a DigitalOcean generated URL and you can now follow [the rest of the DigitalOcean deployment guide](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/){rel="nofollow"}.
::

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/digitalocean
---
Head over **Nitro documentation** to learn more about the digitalocean deployment preset.
::

**Examples:**

Example 1 (bash):
```bash
SERVER_PRESET=digital-ocean
```

Example 2 (unknown):
```unknown
4. You'll also need to add a run command so DigitalOcean knows what command to run after a build. You can do so by adding a start script to your `package.json`:
```

---

## Zen Architects

**URL:** llms-txt#zen-architects

ZEN Architects provides Nuxt support by specialists with strengths in DevOps and OSS. Our team consists of top-notch experts in front-end technologies, with extensive experience developing with frameworks including Vue.js and Nuxt.js over years. We keep focusing on optimizing clients IT investment by providing the most efficient solution case by case.

ZEN Architects は DevOps や OSS に強みを持つスペシャリスト集団です。フロントエンド技術については、Vue.js や Nuxt.js などのフレームワークを使った開発経験が豊富で、チームには日本を代表するエキスパートも含まれています。ZEN Architects が提供する技術アドバイザリサービスでは、これまで数十社にのぼるエンタープライズ開発プロジェクトをサポートしてきました。私たちは日頃よりお客様のITへの投資を最適化することにフォーカスしており、ケースごとに最適な解決策を提供します。

---

## Local env files

**URL:** llms-txt#local-env-files

.env
.env.*
!.env.example
```

---

## <NuxtErrorBoundary>

**URL:** llms-txt#<nuxterrorboundary>

**Contents:**
- Events
- Slots
- Examples
  - Accessing `error` and `clearError` in script

::tip
The `<NuxtErrorBoundary>` uses Vue's [`onErrorCaptured`](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured){rel="nofollow"} hook under the hood.
::

- `@error`: Event emitted when the default slot of the component throws an error.

- `#error`: Specify a fallback content to display in case of error.

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

### Accessing `error` and `clearError` in script

You can access `error` and `clearError` properties within the component's script as below:

**Examples:**

Example 1 (vue):
```vue
<template>
    <NuxtErrorBoundary @error="logSomeError">
      <!-- ... -->
    </NuxtErrorBoundary>
  </template>
```

Example 2 (vue):
```vue
<template>
    <NuxtErrorBoundary>
      <!-- ... -->
      <template #error="{ error, clearError }">
        <p>An error occurred: {{ error }}</p>

        <button @click="clearError">
          Clear error
        </button>
      </template>
    </NuxtErrorBoundary>
  </template>
```

Example 3 (vue):
```vue
<template>
  <NuxtErrorBoundary ref="errorBoundary">
    <!-- ... -->
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
const errorBoundary = useTemplateRef('errorBoundary')

// errorBoundary.value?.error
// errorBoundary.value?.clearError()
</script>
```

---

## Introducing Nuxt 3 Beta

**URL:** llms-txt#introducing-nuxt-3-beta

**Contents:**
- A new foundation
- Important notes
- Timeline

We are excited to open source Nuxt 3 after more than a year of intense development. The repository is available on GitHub on [nuxt/nuxt](https://github.com/nuxt/nuxt){rel="nofollow"} under the [MIT](https://github.com/nuxt/nuxt/blob/main/LICENSE){rel="nofollow"} license.

::tip
The documentation is available on <https://nuxt.com>{rel="nofollow"}.
::

On top of supporting [Vue 3](https://vuejs.org){rel="nofollow"} or [Vite](https://vitejs.dev){rel="nofollow"}, Nuxt 3 contains a new [server engine](https://nuxt.com/docs/guide/concepts/server-engine){rel="nofollow"}, unlocking new full-stack capabilities to Nuxt server and beyond. It's the first JavaScript application server that is portable across a variety of modern cloud hosting providers.

In production, it builds your Vue application and server into one universal `.output` directory. This output is light: minified and without any other Node.js dependencies (except polyfills). You can deploy this output on any system supporting JavaScript, whether Node.js, Serverless, Workers, Edge-side rendering or purely static.

**Bonus:** this server engine can be used on existing Nuxt 2 projects with [Nuxt Bridge](https://nuxt.com/docs/getting-started/bridge){rel="nofollow"} 🚀

Head over the [Nuxt 3 homepage](https://nuxt.com){rel="nofollow"} to learn more about Nuxt Nitro and Nuxt Bridge.

Nuxt 3 is currently in beta, so expect things to break (and be fixed quickly). We have [plenty of work left](https://github.com/nuxt/nuxt/issues){rel="nofollow"} but we want to open it publicly to gather feedback and contributions from the community 💚

**Do not use it for production until we reach the first release candidate.**

During the beta, almost every commit will [trigger a new npm release](https://github.com/nuxt/nuxt/blob/main/.github/workflows/ci.yml#L111-L119){rel="nofollow"}; you may want to look at the [merged pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel="nofollow"} until we begin generating automated changelogs in the documentation.

We are working every day to improve the documentation, explaining as much as possible all the concepts, features and usage of Nuxt 3.

Check out the community section of the Nuxt 3 website for [getting help](https://nuxt.com/docs/community/getting-help){rel="nofollow"}, [reporting bugs](https://nuxt.com/docs/community/reporting-bugs){rel="nofollow"} or [contributing to the framework](https://nuxt.com/docs/community/contribution){rel="nofollow"}.

Here some major milestones we've achieved on the way to Nuxt 3:

- **Jul 2, 2020**: Nuxt 3 first commit with full TypeScript rewrite
- **Aug 7, 2020**: Webpack 5 support
- **Sep 15, 2020**: [`pages/`](https://nuxt.com/docs/guide/directory-structure/pages){rel="nofollow"} support
- **Oct 29, 2020**: [Vue 3](https://vuejs.org){rel="nofollow"} support with bundle-renderer
- **Nov 2, 2020**: [Nuxt Nitro](https://nuxt.com/guide/concepts/server-engine){rel="nofollow"} initial work
- **Jan 22, 2021**: Initial [Vite](https://vitejs.dev){rel="nofollow"} support
- **Feb 4, 2021**: Nuxt can deploy on [major serverless platforms](https://nuxt.com/docs/getting-started/deployment){rel="nofollow"}
- **Mar 6, 2021**: [UnJS](https://github.com/unjs){rel="nofollow"} organisation created on GitHub
- **Mar 28, 2021**: Init Nuxt Kit and Nuxt CLI ([nuxi](https://nuxt.com/docs/api/commands/add){rel="nofollow"})
- **May 20, 2021**: [`app.vue`](https://nuxt.com/docs/guide/directory-structure/app){rel="nofollow"} support (`pages/` becomes optional)
- **Jun 30, 2021**: [`layouts/`](https://nuxt.com/docs/guide/directory-structure/layouts){rel="nofollow"} support
- **Jul 15, 2021**: Native ESM support
- **Aug 10, 2021**: Auto import of composables and components
- **Sep 5, 2021**: Init [Nuxt Bridge](https://nuxt.com/docs/bridge/overview){rel="nofollow"} for improving Nuxt 2 experience
- **Sep 7, 2021**: Support Vite build for production
- **Oct 11, 2021**: Add [`useState`](https://nuxt.com/docs/getting-started/state-management){rel="nofollow"} and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch){rel="nofollow"} composables

So far, we've merged [385 pull requests](https://github.com/nuxt/nuxt/pulls?q=is%3Apr+is%3Amerged){rel="nofollow"}, closed [229 issues](https://github.com/nuxt/nuxt/issues?q=is%3Aissue+is%3Aclosed){rel="nofollow"} and made [925+ commits](https://github.com/nuxt/nuxt/commits/main){rel="nofollow"}.

We are excited to hear your thoughts and we thank you for your patience.

Now you can go over the [Nuxt 3 documentation](https://nuxt.com){rel="nofollow"} 😊

Don't forget to follow us on [Twitter](https://x.com/nuxt_js){rel="nofollow"} to get the latest news about Nuxt!

---

## Nuxt performance

**URL:** llms-txt#nuxt-performance

**Contents:**
- Built-in Features
  - Links
  - Hybrid Rendering
  - Lazy Loading Components
  - Lazy Hydration
  - Fetching data
- Core Nuxt Modules
  - Images
  - Fonts
  - Scripts

Nuxt comes with built-in features designed to improve your application's performance and contribute to better [Core Web Vitals](https://web.dev/articles/vitals){rel="nofollow"}. There are also multiple Nuxt core modules that assist in improving performance in specific areas. This guide outlines best practices to optimize performance of your Nuxt application.

Nuxt offers several built-in features that help you optimize performance of your website. Understanding how these features work is crucial for achieving blazingly-fast performance.

[`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link) is a drop-in replacement for both Vue Router's `<RouterLink>` component and HTML's `<a>` tag. It intelligently determines whether the link is internal or external and renders it accordingly with available optimizations (prefetching, default attributes, etc.)

Nuxt automatically includes smart prefetching. That means it detects when a link is visible (by default), either in the viewport or when scrolling and prefetches the JavaScript for those pages so that they are ready when the user clicks the link.

You can also opt for prefetching on interaction instead:

::read-more
---
title: NuxtLink
to: https://nuxt.com/docs/api/components/nuxt-link
---
::

In more complex applications, we may need a full control over how our application is rendered to support cases where some pages could be generated at build time, while others should be client-side rendered

Hybrid rendering allows different caching rules per route using Route Rules and decides how the server should respond to a new request on a given URL:

Nuxt server will automatically register corresponding middleware and wrap routes with cache handlers using Nitro caching layer.

::read-more
---
title: Hybrid rendering
to: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
---
::

### Lazy Loading Components

To dynamically import a component (also known as lazy-loading a component) all you need to do is add the Lazy prefix to the component's name. This is useful if the component is not always needed.

By using the Lazy prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.

::read-more
---
title: Lazy loading components
to: https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports
---
::

It is not always necessary to hydrate (or make interactive) all the components of your site on the initial load. Using lazy hydration, you can control when components can have their code loaded, which can improve the time-to-interactive metric for your app. Nuxt allows you to control when components become interactive with lazy hydration (added in Nuxt v3.16).

To optimize your app, you may want to delay the hydration of some components until they're visible, or until the browser is done with more important tasks.

::read-more
---
title: Lazy hydration
to: https://nuxt.com/docs/guide/directory-structure/components#delayed-or-lazy-hydration
---
::

To avoid fetching same data twice (once on the server and once on client) Nuxt provides [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) and [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data). They ensure that if an API call is made on the server, the data is forwarded to the client in the payload instead of being fetched again.

::read-more
---
title: Data fetching
to: https://nuxt.com/docs/getting-started/data-fetching
---
::

Apart from Nuxt's built-in features, there are also core modules maintained by the Nuxt team which help improve performance even further. These modules help handle assets such as images, custom fonts, or third party scripts.

Unoptimized images can have a significant negative impact on your website performance, specifically the [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp){rel="nofollow"} score.

In Nuxt we can use [Nuxt Image](https://image.nuxt.com/){rel="nofollow"} module that is a plug-and-play image optimization for Nuxt apps. It allows resizing and transforming your images using built-in optimizer or your favorite images CDN.

::video-accordion
---
title: Watch the video by LearnVue about Nuxt Image
video-id: _UBff2eqGY0
---
::

[`<NuxtImg>`](https://nuxt.com/docs/3.x/api/components/nuxt-img) is a drop-in replacement for the native `<img>` tag that comes with following enhancements:

- Uses built-in provider to optimize local and remote images
- Converts `src` to provider optimized URLs with modern formats such as WebP or Avif
- Automatically resizes images based on `width` and `height`
- Generates responsive `sizes` when providing sizes option
- Supports native `lazy loading` as well as other `<img>` attributes

Images in your website can usually be separated by importance; the ones that are needed to be delivered first at initial load (i.e. `Largest Contentful Paint`), and the ones that can be loaded later or when specifically needed. For that, we could use the following optimizations:

::read-more{title="Nuxt Image" to="https://image.nuxt.com/usage/nuxt-img"}
::

[Nuxt Fonts](https://fonts.nuxt.com/){rel="nofollow"} will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.

It includes built-in automatic self-hosting for any font file which means you can optimally load web fonts with reduced layout shift, thanks to the underlying package [fontaine](https://github.com/unjs/fontaine){rel="nofollow"}.

::video-accordion
---
title: Watch the talk by Daniel Roe about the idea behind Nuxt Fonts
video-id: D3F683UViBY
---
::

Nuxt Fonts processes all your CSS and does the following things automatically when it encounters a font-family declaration.

1. **Resolves fonts** – Looks for font files in public/, then checks web providers like Google, Bunny, and Fontshare.
2. **Generates @font-face rules** – Injects CSS rules to load fonts from the correct sources.
3. **Proxies & caches fonts** – Rewrites URLs to `/_fonts`, downloads and caches fonts locally.
4. **Creates fallback metrics** – Adjusts local system fonts to match web fonts, reducing layout shift ([CLS](https://web.dev/articles/cls){rel="nofollow"}).
5. **Includes fonts in build** – Bundles fonts with your project, hashing file names and setting long-lived cache headers.

It supports multiple providers that are designed to be pluggable and extensible, so no matter your setup you should be able to use an existing provider or write your own.

Third-party resources like analytics tools, video embeds, maps, and social media integrations enhance website functionality but can significantly degrade user experience and negatively impact [Interaction to Next Paint (INP)](https://web.dev/articles/inp){rel="nofollow"} and Largest Contentful Paint (LCP) scores.

[Nuxt Scripts](https://scripts.nuxt.com/){rel="nofollow"} lets you load third-party scripts with better performance, privacy, security and DX.

::video-accordion
---
title: Watch the video by Alex Lichter about Nuxt Scripts
video-id: sjMqUUvH9AE
---
::

Nuxt Scripts provides an abstraction layer on top of third-party scripts, providing SSR support and type-safety and while still giving you full low-level control over how a script is loaded.

::read-more{title="Nuxt Scripts" to="https://scripts.nuxt.com/scripts"}
::

To improve performance, we need to first know how to measure it, starting with measuring performance during development - on local environment, and then moving to auditing application that are deployed on production.

[This](https://nuxt.com/docs/3.x/api/commands/analyze) command of `nuxi` allows to analyze the production bundle or your Nuxt application. It leverages `vite-bundle-visualizer` (similar to `webpack-bundle-analyzer`) to generate a visual representation of your application's bundle, making it easier to identify which components take up the most space.

When you see a large block in the visualization, it often signals an opportunity for optimization—whether by splitting it into smaller parts, implementing lazy loading, or replacing it with a more efficient alternative, especially for third-party libraries.

Large blocks containing multiple elements can often be reduced by importing only the necessary components rather than entire modules while large standalone blocks may be better suited for lazy loading rather than being included in the main bundle.

The [Nuxt DevTools](https://devtools.nuxt.com/){rel="nofollow"} gives you insights and transparency about your Nuxt App to identify performance gaps and seamlessly manage your app configurations.

![Nuxt DevTools example](https://user-images.githubusercontent.com/11247099/217670806-fb39aeff-3881-44e5-b9c8-6c757f5925fc.png)

It comes with several features we can use to measure performance of Nuxt apps:

1. **Timeline** – Tracks time spent on rendering, updating, and initializing components to identify performance bottlenecks.
2. **Assets** – Displays file sizes (e.g., images) without transformations.
3. **Render Tree** – Shows connections between Vue components, scripts, and styles to optimize dynamic loading.
4. **Inspect** – Lists all files used in the Vue app with their size and evaluation time.

Chrome DevTools come with two useful tabs for measuring performance; `Performance` and `Lighthouse`.

When you open the [Performance](https://developer.chrome.com/docs/devtools/performance/overview){rel="nofollow"} panel, it instantly shows your local &#x2A;*Largest Contentful Paint (LCP)** and &#x2A;*Cumulative Layout Shift (CLS)** scores (good, needs improvement, or bad).

If you interact with the page, it also captures &#x2A;*Interaction to Next Paint (INP)**, giving you a full view of your Core Web Vitals based on your device and network.

![Chrome DevTools Performance Panel](https://developer.chrome.com/static/docs/devtools/performance/image/cpu-throttling_856.png)

[Lighthouse](https://developer.chrome.com/docs/devtools/lighthouse){rel="nofollow"} audits performance, accessibility, SEO, progressive web apps, and best practices. It runs tests on your page and generates a report. Use failing audits as a guide to improve your site.

![Lighthouse](https://developer.chrome.com/static/docs/lighthouse/images/lighthouse-overview_720.png)

Each audit has a reference document explaining why the audit is important, as well as how to fix it.

### PageSpeed Insights

[PageSpeed Insights (PSI)](https://developers.google.com/speed/docs/insights/v5/about){rel="nofollow"} reports on the user experience of a page on both mobile and desktop devices, and provides suggestions on how that page may be improved.

It provides both lab and field data about a page. Lab data is useful for debugging issues, as it is collected in a controlled environment while field data is useful for capturing true, real-world user experience.

[WebPageTest](https://www.webpagetest.org/){rel="nofollow"} is a web performance tool providing deep diagnostic information about how a page performs under a variety of conditions.

Each test can be run from different locations around the world, on real browsers, over any number of customizable network conditions.

When building more complex Nuxt applications, you will probably encounter some of the problems listed below. Understanding these problems and fixing them will help you improve performance of your website.

### Overusing plugins

**Problem**: A large number of plugins can cause performance issues, especially if they require expensive computations or take too long to initialize. Since plugins run during the hydration phase, inefficient setups can block rendering and degrade the user experience.

**Solution**: Inspect your plugins and see if some of them could be implemented rather as a composable or utility function instead.

### Unused code / dependencies

**Problem**: With the development of the project, there can be a case where there will be some unused code or a dependency. This additional functionality may not be used or needed while it will be increase the bundle size of our project.

**Solution**: Inspect your `package.json` for unused dependencies and analyze your code for unused utils/composables/functions.

### Not using Vue Performance tips

**Problem**: [Vue documentation](https://vuejs.org/guide/best-practices/performance){rel="nofollow"} lists several Performance improvements we can use in our Nuxt projects as well but as they are part of Vue documentation, developers tend to forget about it and focus on Nuxt specific improvements only - while Nuxt application is still a Vue project.

**Solution**: Use concepts such as `shallowRef`, `v-memo`, `v-once`, etc to improve performance.

### Not following patterns

**Problem**: The more people are currently working on the project, the more difficult it will be to maintain the stable codebase. Developers have a tendency to introduce new concepts they've seen in another project which can cause conflicts and problems with performance.

**Solution**: Establish rules and patterns in the project such as [Good practices and Design Patterns for Vue Composables](https://dev.to/jacobandrewsky/good-practices-and-design-patterns-for-vue-composables-24lk){rel="nofollow"}

### Trying to load everything at the same time

**Problem**: When a page is loaded and it is not correctly instructed about the order of loading elements it will result in fetching everything at the same time - which can be slow and result in bad User Experience.

**Solution**: Use concepts such as Progressive Enhancement where core webpage content is set first, then more nuanced and technically rigorous layers of presentation and features are added on top as the browser/internet connection allow.

To learn more about various techniques for improving performance, take a look at the following resources:

1. [Apply instant loading with the PRPL pattern](https://web.dev/articles/apply-instant-loading-with-prpl){rel="nofollow"}
2. [Perceived performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance){rel="nofollow"}
3. [Understanding Critical Rendering Path](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path){rel="nofollow"}

**Examples:**

Example 1 (html):
```html
<template>
  <NuxtLink to="/about">About page</NuxtLink>
</template>

<!-- Which will render to with Vue Router & Smart Prefetching -->
<a href="/about">About page</a>
```

Example 2 (ts):
```ts
export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: 'interaction',
      },
    },
  },
})
```

Example 3 (ts):
```ts
export default defineNuxtConfig({
  routeRules: {
    '/': {
      prerender: true,
    },
    '/products/**': {
      swr: 3600,
    },
    '/blog': {
      isr: 3600,
    },
    '/admin/**': {
      ssr: false,
    },
  },
})
```

Example 4 (html):
```html
<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>
```

---

## Code Style

**URL:** llms-txt#code-style

**Contents:**
- ESLint
- Quick Setup

The recommended approach for Nuxt is to enable ESLint support using the [`@nuxt/eslint`](https://eslint.nuxt.com/packages/module){rel="nofollow"} module, that will setup project-aware ESLint configuration for you.

::callout{icon="i-lucide-lightbulb"}
The module is designed for the [new ESLint flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new){rel="nofollow"} with is the [default format since ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel="nofollow"}. If you are using the legacy `.eslintrc` config, you will need to [configure manually with `@nuxt/eslint-config`](https://eslint.nuxt.com/packages/config#legacy-config-format){rel="nofollow"}. We highly recommend you to migrate over the flat config to be future-proof.
::

Start your Nuxt app, a `eslint.config.mjs` file will be generated under your project root. You can customize it as needed.

You can learn more about the module and customizations in [Nuxt ESLint's documentation](https://eslint.nuxt.com/packages/module){rel="nofollow"}.

**Examples:**

Example 1 (bash):
```bash
npx nuxt module add eslint
```

---

## How to detect them

**URL:** llms-txt#how-to-detect-them

**Contents:**
- Development Console Warnings

## Development Console Warnings

Vue will log hydration mismatch warnings in the browser console during development:

![Screenshot of Vue hydration mismatch warning in the browser console](https://nuxt.com/assets/docs/best-practices/vue-console-hydration.png)

---

## create nuxt

**URL:** llms-txt#create-nuxt

**Contents:**
- Arguments
- Options
- Environment variables

The `create-nuxt` command initializes a fresh Nuxt project using [unjs/giget](https://github.com/unjs/giget){rel="nofollow"}.

| Argument | Description       |
| -------- | ----------------- |
| `DIR=""` | Project directory |

| Option                             | Default | Description                                              |
| ---------------------------------- | ------- | -------------------------------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory                            |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                             |
| `-t, --template`                   |         | Template name                                            |
| `-f, --force`                      |         | Override existing directory                              |
| `--offline`                        |         | Force offline mode                                       |
| `--preferOffline`                  |         | Prefer offline mode                                      |
| `--no-install`                     |         | Skip installing dependencies                             |
| `--gitInit`                        |         | Initialize git repository                                |
| `--shell`                          |         | Start shell after installation in project directory      |
| `--packageManager`                 |         | Package manager choice (npm, pnpm, yarn, bun)            |
| `-M, --modules`                    |         | Nuxt modules to install (comma separated without spaces) |
| `--no-modules`                     |         | Skip module installation prompt                          |
| `--nightly`                        |         | Use Nuxt nightly release channel (3x or latest)          |

## Environment variables

- `NUXI_INIT_REGISTRY`: Set to a custom template registry. ([learn more](https://github.com/unjs/giget#custom-registry){rel="nofollow"}).

- Default registry is loaded from [nuxt/starter/templates](https://github.com/nuxt/starter/tree/templates/templates){rel="nofollow"}

---

## Nuxt 3.7

**URL:** llms-txt#nuxt-3.7

**Contents:**
  - 🐣 A New CLI
  - 🕸️ Native Web Streams and `Response`
  - 🔥 HTML Rendering Optimisations
  - 🛠️ Build Environment Shortcuts
  - ⚡️ Vite 4.4
  - 💪 TypeScript Updates
  - 🦄 Async Context support
  - 👓 Watcher Updates
  - ⚗️ Nitro 2.6
- ✅ Upgrading

We've refactored `nuxi` using [unjs/citty](http://github.com/unjs/citty){rel="nofollow"} and this marks the first Nuxt release that depends on the new version, safely in its own repository. We have grand plans for this - check out some of the features + roadmap discussions in [nuxt/cli](https://github.com/nuxt/cli){rel="nofollow"} and please feel free to contribute!

- [**Project Goals**](https://github.com/nuxt/cli/discussions/3)
- [Feedbacks and Ideas](https://github.com/nuxt/cli/discussions/4)
- [The journey of Nuxt CLI Generations](https://github.com/nuxt/cli/discussions/7)

Nuxi is now decoupled from the main `nuxt` version - we plan to iterate and release nuxi more quickly in future so you can expect new things coming soon!

### 🕸️ Native Web Streams and `Response`

With improvements in [unjs/h3](https://github.com/unjs/h3){rel="nofollow"} and [unjs/nitro](https://github.com/unjs/nitro){rel="nofollow"}, it's now possible to directly return a `Response` object from server routes, meaning it's *also* possible to return and handle streams natively in Nuxt.

👉 Check out the full detail in the [unjs/h3](https://github.com/unjs/h3/releases){rel="nofollow"} and [unjs/nitro](https://github.com/unjs/nitro/releases){rel="nofollow"} release notes.

### 🔥 HTML Rendering Optimisations

This release comes with a couple of improvements in rendering HTML responses from the server. We now determine whether to preload/prefetch resources at build time (so you can customise this in the `build:manifest` hook). We also now manage rendering the HTML for them directly in `unhead` ([#22179](https://github.com/nuxt/nuxt/pull/22179){rel="nofollow"}), which means you can configure the *order* for `<link>`, `<meta>`, `<script>`, `<style>`, and more. And - in our preliminary testing - it's even faster!

It's possible to opt-in to upcoming head improvements with the `experimental.headNext` flag. This currently includes a new ordering algorithm based on [capo.js](https://github.com/rviscomi/capo.js){rel="nofollow"} ([#22431](https://github.com/nuxt/nuxt/pull/22431){rel="nofollow"}) and allows enabling future optimisations as they are released in `unhead`:

We'd love your thoughts - you can respond with any issues/feedback in [this discussion](https://github.com/nuxt/nuxt/discussions/22632){rel="nofollow"}.

### 🛠️ Build Environment Shortcuts

In your Nuxt config you can now use `$client` and `$server` shortcuts to easily define configuration that is specific to just the Vite client/server ([#22302](https://github.com/nuxt/nuxt/pull/22302){rel="nofollow"}) or webpack client/server ([#22304](https://github.com/nuxt/nuxt/pull/22304){rel="nofollow"}) builds. This previously was only possible with the `vite:extendConfig` and `webpack:config` hooks.

We've chosen to unpin Vite from minor versions, meaning whenever Vite releases a new feature version you can opt-in straight away. Vite 4.4 brings a lot of exciting things, including experimental Lightning CSS support - and much more!

👉 Check out the [Vite release notes](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#440-2023-07-06){rel="nofollow"} for more.

### 💪 TypeScript Updates

We now use purely relative paths in the generated `tsconfig.json` instead of setting a `baseUrl`. This means better support for dev environments like docker images where the absolute path may not match your IDE ([#22410](https://github.com/nuxt/nuxt/pull/22410){rel="nofollow"}).

We also set a couple of additional compiler flag defaults to match Vite/TS recommendations ([#22468](https://github.com/nuxt/nuxt/pull/22468){rel="nofollow"}).

Plus, you should now get type hinted access to layouts in `setPageLayout` and also in `<NuxtLayout name>` ([#22363](https://github.com/nuxt/nuxt/pull/22362){rel="nofollow"}).

### 🦄 Async Context support

If you've ever got an issue with 'Nuxt context unavailable' this might be one for you. We now support native async context for Bun and Node under an experimental flag, in both Nuxt and Nitro ([#20918](https://github.com/nuxt/nuxt/pull/20918){rel="nofollow"}).

This enables using Nuxt composables on the server *without* needing to ensure they are being called directly in a setup function. It also allows the same in Nitro, with a new `useEvent()` utility that is usable in server routes.

To try it out, you can enable `experimental.asyncContext`:

### 👓 Watcher Updates

We've fixed a couple of issues with watchers, meaning that you should need to restart your server less often - and you should see a significant performance increase if you are using layers.

There lots more exciting features coming directly from Nitro 2.6, including smaller, lighter servers and new persistent data storage in a `.data` directory.

👉 Read more in [the full release article](https://unjs.io/blog/2023-08-25-nitro-2.6){rel="nofollow"}.

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the [unjs](https://github.com/unjs){rel="nofollow"} ecosystem.

Read the full release notes on <https://github.com/nuxt/nuxt/releases/tag/v3.7.0>{rel="nofollow"}

**Examples:**

Example 1 (ts):
```ts
export default defineNuxtConfig({
  experimental: {
    headNext: true
  }
})
```

Example 2 (ts):
```ts
export default defineNuxtConfig({
  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: '_nuxt/[hash].js',
            assetFileNames: '_nuxt/[hash][extname]',
            entryFileNames: '_nuxt/[hash].js'
          }
        }
      }
    }
  }
})
```

Example 3 (ts):
```ts
export default defineNuxtConfig({
  experimental: {
    asyncContext: true
  }
})
```

Example 4 (sh):
```sh
npx nuxi upgrade --force
```

---

## Passionate People

**URL:** llms-txt#passionate-people

Passionate People provide you with additional technical capacity to power-up your digital transformation journeys with our teams of first-class engineers and consultants.

Full stack JavaScript Cloud Engineers ready to work with you and your teams.

---

## ignore layout foo.vue

**URL:** llms-txt#ignore-layout-foo.vue

---

## Nuxt and hydration

**URL:** llms-txt#nuxt-and-hydration

When developing, you may face hydration issues. Don't ignore those warnings.

---

## Nuxt 3.12

**URL:** llms-txt#nuxt-3.12

**Contents:**
- 🚀 Testing Nuxt 4 changes
- 📜 Nuxt Scripts auto-install
- 🌈 Layer auto-registration and bugfixes
- 🌐 Built-in accessibility improvements
- 🔥 Performance improvements
- 👨‍👩‍👧‍👦 Multi-app support
- ⛑️ DX wins
- 🪨 Stabilising features
- 💪 Type improvements
- 📦 Module author/power user improvements

We're on the road to the release of Nuxt 4, but we've not held back in Nuxt v3.12.

## 🚀 Testing Nuxt 4 changes

Nuxt 4 is on the horizon, and it's now possible to test out the behaviour changes that will be coming in the next major release ([#26925](https://github.com/nuxt/nuxt/pull/26925){rel="nofollow"}) by setting an option in your `nuxt.config.ts` file:

As we've been merging PRs for Nuxt 4, we've been enabling them behind this flag. As much as possible we're aiming for backwards compatibility - our test matrix is running the same fixtures in both v3 and v4 compatibility mode.

There is a lot to say here, with 10+ different PRs and behaviour changes documented and testable, but for full details, including migration steps, see [the v4 upgrade documentation](https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4).

We'd be very grateful for early testing of what's coming in Nuxt 4! 🙏

## 📜 Nuxt Scripts auto-install

We've been gradually working to release [Nuxt Scripts](https://scripts.nuxt.com/){rel="nofollow"}. It's currently in public preview, but we're near a public release, so we've added some stubs for composables that (when used) will prompt installing the `@nuxt/scripts` module.

👉 Watch out for the launch - and an article explaining more!

## 🌈 Layer auto-registration and bugfixes

Just like `~/modules`, any layers within your project in the `~/layers` directory will now be automatically registered as layers in your project ([#27221](https://github.com/nuxt/nuxt/pull/27221){rel="nofollow"}).

We also now correctly load layer dependencies, which should resolve a range of issues with monorepos and git installations ([#27338](https://github.com/nuxt/nuxt/pull/27338){rel="nofollow"}).

## 🌐 Built-in accessibility improvements

We now have a built-in [`<NuxtRouteAnnouncer>`](https://nuxt.com/docs/api/components/nuxt-route-announcer) component and corresponding [`useRouteAnnouncer`](https://nuxt.com/docs/api/composables/use-route-announcer) composable, which will be added by default to new Nuxt templates going forward.

For full details, see [the original PR (#25741)](https://github.com/nuxt/nuxt/pull/25741){rel="nofollow"} and [documentation](https://nuxt.com/docs/api/components/nuxt-route-announcer).

We're continuing to work on `nuxt/a11y` - expect to hear more on that in future!

## 🔥 Performance improvements

We've landed some performance improvements as well, many of which are behind the `compatibilityVersion: 4` flag, such as a move away from deeply reactive asyncData payloads.

Significant improvements include deduplicating modules ([#27475](https://github.com/nuxt/nuxt/pull/27475){rel="nofollow"}) - which will apply mostly to layer users who specify modules in their layers. In one project, we saw 30s+ improvement in starting Nuxt.

We've also improved Vite dev server start up time by excluding common ESM dependencies from pre-bundling, and would suggest module authors consider doing the same ([#27372](https://github.com/nuxt/nuxt/pull/27372){rel="nofollow"}).

We improved chunk determinism, so sequential builds should be less likely to have *completely* different chunk hashes ([#27258](https://github.com/nuxt/nuxt/pull/27258){rel="nofollow"}).

And we tree shake more client-only composables from your server builds ([#27044](https://github.com/nuxt/nuxt/pull/27044){rel="nofollow"}), and have reduced the size of server component payloads ([#26863](https://github.com/nuxt/nuxt/pull/26863){rel="nofollow"}).

## 👨‍👩‍👧‍👦 Multi-app support

We've landed a couple of changes that take us toward a place of supporting multi-app natively in Nuxt, including a `multiApp` experimental flag ([#27291](https://github.com/nuxt/nuxt/pull/27291){rel="nofollow"}) and the ability to have multiple Nuxt app instances running in parallel at runtime ([#27068](https://github.com/nuxt/nuxt/pull/27068){rel="nofollow"}).

While it's not yet ready, please do follow along on [the tracker issue](https://github.com/nuxt/nuxt/issues/21635){rel="nofollow"}, and feel free to pitch in if this is interesting to you.

We now serialise more things in your dev server logs, including VNodes ([#27309](https://github.com/nuxt/nuxt/pull/27309){rel="nofollow"}) and [URLs](https://github.com/nuxt/nuxt/commit/a549b46e9){rel="nofollow"}. We also addressed a bug that could lead to a frozen dev server.

When accessing private runtime config in the browser, we now let you know with a more informative error message ([#26441](https://github.com/nuxt/nuxt/pull/26441){rel="nofollow"}).

## 🪨 Stabilising features

We've removed some experimental options that have been stabilised and which we feel no longer need to be configurable:

- `experimental.treeshakeClientOnly` (enabled by default since v3.0.0)
- `experimental.configSchema` (enabled by default since v3.3.0)
- `experimental.polyfillVueUseHead` (disabled since v3.4.0) - implementable in user-land with [plugin](https://github.com/nuxt/nuxt/blob/f209158352b09d1986aa320e29ff36353b91c358/packages/nuxt/src/head/runtime/plugins/vueuse-head-polyfill.ts#L10-L11){rel="nofollow"}
- `experimental.respectNoSSRHeader` (disabled since v3.4.0) - implementable in user-land with [server middleware](https://github.com/nuxt/nuxt/blob/c660b39447f0d5b8790c0826092638d321cd6821/packages/nuxt/src/core/runtime/nitro/no-ssr.ts#L8-L9){rel="nofollow"}

We've also enabled `scanPageMeta` by default ([#27134](https://github.com/nuxt/nuxt/pull/27134){rel="nofollow"}). This pulls out any page metadata in your `definePageMeta` macro, and makes it available to modules (like `@nuxtjs/i18n`) so they can augment it.

This unlocks much better module/typed routing integration, but has a potential performance cost - so please file an issue if you experience any problems.

## 💪 Type improvements

We now have support for typed `#fallback` slots in server components ([#27097](https://github.com/nuxt/nuxt/pull/27097){rel="nofollow"}).

We've also improved some defaults in your generated `tsconfig.json`, including setting `module: 'preserve'` if you have a locally installed TypeScript v5.4 version ([see docs](https://www.typescriptlang.org/tsconfig/#preserve){rel="nofollow"}) - see [#26667](https://github.com/nuxt/nuxt/pull/26667){rel="nofollow"}, [#27485](https://github.com/nuxt/nuxt/pull/27485){rel="nofollow"}.

## 📦 Module author/power user improvements

We have shipped a range of type improvements for module authors, including:

- support for typed module options in `installModule` ([#26744](https://github.com/nuxt/nuxt/pull/26744){rel="nofollow"})
- the option to specify compatibility with certain builders (vite/webpack) in module options ([#27022](https://github.com/nuxt/nuxt/pull/27022){rel="nofollow"})
- a new `onPrehydrate` hook for hooking into the browser hydration cycle ([#27037](https://github.com/nuxt/nuxt/pull/27037){rel="nofollow"})
- the ability to access and update *resolved* runtime configuration within modules, with new build-time `useRuntimeConfig` and `updateRuntimeConfig` utils ([#27117](https://github.com/nuxt/nuxt/pull/27117){rel="nofollow"})

## 🎨 Inlined UI templates

If you previously used `@nuxt/ui-templates` then it may be worth knowing that we have moved them from [a separate repository](https://github.com/nuxt/ui-templates){rel="nofollow"} into the [nuxt/nuxt](https://github.com/nuxt/nuxt){rel="nofollow"} monorepo. (This is purely a refactor rather than a change, although you can expect some new designs for Nuxt v4.)

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## Full Release Notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.12.0
---
Read the full release notes of Nuxt `v3.12.0`.
::

A huge thank you to the 75+ Nuxt contributors and community members who have been part of this release. ❤️

Finally, thank you for reading this far! We hope you enjoy v3.12, and please do let us know if you have any feedback or issues. 🙏

**Examples:**

Example 1 (unknown):
```unknown
As we've been merging PRs for Nuxt 4, we've been enabling them behind this flag. As much as possible we're aiming for backwards compatibility - our test matrix is running the same fixtures in both v3 and v4 compatibility mode.

There is a lot to say here, with 10+ different PRs and behaviour changes documented and testable, but for full details, including migration steps, see [the v4 upgrade documentation](https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4).

We'd be very grateful for early testing of what's coming in Nuxt 4! 🙏

## 📜 Nuxt Scripts auto-install

We've been gradually working to release [Nuxt Scripts](https://scripts.nuxt.com/){rel="nofollow"}. It's currently in public preview, but we're near a public release, so we've added some stubs for composables that (when used) will prompt installing the `@nuxt/scripts` module.

👉 Watch out for the launch - and an article explaining more!

## 🌈 Layer auto-registration and bugfixes

Just like `~/modules`, any layers within your project in the `~/layers` directory will now be automatically registered as layers in your project ([#27221](https://github.com/nuxt/nuxt/pull/27221){rel="nofollow"}).

We also now correctly load layer dependencies, which should resolve a range of issues with monorepos and git installations ([#27338](https://github.com/nuxt/nuxt/pull/27338){rel="nofollow"}).

## 🌐 Built-in accessibility improvements

We now have a built-in [`<NuxtRouteAnnouncer>`](https://nuxt.com/docs/api/components/nuxt-route-announcer) component and corresponding [`useRouteAnnouncer`](https://nuxt.com/docs/api/composables/use-route-announcer) composable, which will be added by default to new Nuxt templates going forward.

For full details, see [the original PR (#25741)](https://github.com/nuxt/nuxt/pull/25741){rel="nofollow"} and [documentation](https://nuxt.com/docs/api/components/nuxt-route-announcer).

We're continuing to work on `nuxt/a11y` - expect to hear more on that in future!

## 🔥 Performance improvements

We've landed some performance improvements as well, many of which are behind the `compatibilityVersion: 4` flag, such as a move away from deeply reactive asyncData payloads.

Significant improvements include deduplicating modules ([#27475](https://github.com/nuxt/nuxt/pull/27475){rel="nofollow"}) - which will apply mostly to layer users who specify modules in their layers. In one project, we saw 30s+ improvement in starting Nuxt.

We've also improved Vite dev server start up time by excluding common ESM dependencies from pre-bundling, and would suggest module authors consider doing the same ([#27372](https://github.com/nuxt/nuxt/pull/27372){rel="nofollow"}).

We improved chunk determinism, so sequential builds should be less likely to have *completely* different chunk hashes ([#27258](https://github.com/nuxt/nuxt/pull/27258){rel="nofollow"}).

And we tree shake more client-only composables from your server builds ([#27044](https://github.com/nuxt/nuxt/pull/27044){rel="nofollow"}), and have reduced the size of server component payloads ([#26863](https://github.com/nuxt/nuxt/pull/26863){rel="nofollow"}).

## 👨‍👩‍👧‍👦 Multi-app support

We've landed a couple of changes that take us toward a place of supporting multi-app natively in Nuxt, including a `multiApp` experimental flag ([#27291](https://github.com/nuxt/nuxt/pull/27291){rel="nofollow"}) and the ability to have multiple Nuxt app instances running in parallel at runtime ([#27068](https://github.com/nuxt/nuxt/pull/27068){rel="nofollow"}).

While it's not yet ready, please do follow along on [the tracker issue](https://github.com/nuxt/nuxt/issues/21635){rel="nofollow"}, and feel free to pitch in if this is interesting to you.

## ⛑️ DX wins

We now serialise more things in your dev server logs, including VNodes ([#27309](https://github.com/nuxt/nuxt/pull/27309){rel="nofollow"}) and [URLs](https://github.com/nuxt/nuxt/commit/a549b46e9){rel="nofollow"}. We also addressed a bug that could lead to a frozen dev server.

When accessing private runtime config in the browser, we now let you know with a more informative error message ([#26441](https://github.com/nuxt/nuxt/pull/26441){rel="nofollow"}).

## 🪨 Stabilising features

We've removed some experimental options that have been stabilised and which we feel no longer need to be configurable:

- `experimental.treeshakeClientOnly` (enabled by default since v3.0.0)
- `experimental.configSchema` (enabled by default since v3.3.0)
- `experimental.polyfillVueUseHead` (disabled since v3.4.0) - implementable in user-land with [plugin](https://github.com/nuxt/nuxt/blob/f209158352b09d1986aa320e29ff36353b91c358/packages/nuxt/src/head/runtime/plugins/vueuse-head-polyfill.ts#L10-L11){rel="nofollow"}
- `experimental.respectNoSSRHeader` (disabled since v3.4.0) - implementable in user-land with [server middleware](https://github.com/nuxt/nuxt/blob/c660b39447f0d5b8790c0826092638d321cd6821/packages/nuxt/src/core/runtime/nitro/no-ssr.ts#L8-L9){rel="nofollow"}

We've also enabled `scanPageMeta` by default ([#27134](https://github.com/nuxt/nuxt/pull/27134){rel="nofollow"}). This pulls out any page metadata in your `definePageMeta` macro, and makes it available to modules (like `@nuxtjs/i18n`) so they can augment it.

This unlocks much better module/typed routing integration, but has a potential performance cost - so please file an issue if you experience any problems.

## 💪 Type improvements

We now have support for typed `#fallback` slots in server components ([#27097](https://github.com/nuxt/nuxt/pull/27097){rel="nofollow"}).

We've also improved some defaults in your generated `tsconfig.json`, including setting `module: 'preserve'` if you have a locally installed TypeScript v5.4 version ([see docs](https://www.typescriptlang.org/tsconfig/#preserve){rel="nofollow"}) - see [#26667](https://github.com/nuxt/nuxt/pull/26667){rel="nofollow"}, [#27485](https://github.com/nuxt/nuxt/pull/27485){rel="nofollow"}.

## 📦 Module author/power user improvements

We have shipped a range of type improvements for module authors, including:

- support for typed module options in `installModule` ([#26744](https://github.com/nuxt/nuxt/pull/26744){rel="nofollow"})
- the option to specify compatibility with certain builders (vite/webpack) in module options ([#27022](https://github.com/nuxt/nuxt/pull/27022){rel="nofollow"})
- a new `onPrehydrate` hook for hooking into the browser hydration cycle ([#27037](https://github.com/nuxt/nuxt/pull/27037){rel="nofollow"})
- the ability to access and update *resolved* runtime configuration within modules, with new build-time `useRuntimeConfig` and `updateRuntimeConfig` utils ([#27117](https://github.com/nuxt/nuxt/pull/27117){rel="nofollow"})

## 🎨 Inlined UI templates

If you previously used `@nuxt/ui-templates` then it may be worth knowing that we have moved them from [a separate repository](https://github.com/nuxt/ui-templates){rel="nofollow"} into the [nuxt/nuxt](https://github.com/nuxt/nuxt){rel="nofollow"} monorepo. (This is purely a refactor rather than a change, although you can expect some new designs for Nuxt v4.)

## ✅ Upgrading

As usual, our recommendation for upgrading is to run:
```

---

## Magic as a Service

**URL:** llms-txt#magic-as-a-service

**Contents:**
  - **Nuxt Development by Magic as a Servic**
  - Our Capabilities

### **Nuxt Development by Magic as a Servic**

With deep expertise in Nuxt and Vue, we build seamless, scalable applications that combine technical precision, elegant design, and intuitive user experiences. From lean MVPs to large-scale digital platforms, we develop ambitious products that solve real problems—with a focus on seamless performance, elegant design, and user-first experiences.

Our work with Maison Margiela, Jil Sander, and SSENSE showcases our ability to craft fast, accessible, and future-proof digital platforms. From custom UI components to SSR and ISR optimisations, we ensure every application is built for beauty, accessibility and performance.

We design and build complete digital products—combining design, engineering, and technical strategy in one team. Whether it's a design system, an e-commerce platform, or a complex interactive experience, we create solutions that are both technically robust and visually compelling. Our process covers everything from discovery and definition to design, development, and deployment.

Using Nuxt as a stable and flexible framework, we create applications that are efficient, scalable, and easy to maintain. Learn more about how we work with Nuxt at [maas.engineering/nuxt](https://maas.engineering/nuxt){rel="nofollow"}.

---

## Render

**URL:** llms-txt#render

**Contents:**
- Set up application
- More options

Nuxt supports deploying on [Render](https://render.com/){rel="nofollow"} with minimal configuration.

## Set up application

1. [Create a new Web Service](https://dashboard.render.com/select-repo?type=web){rel="nofollow"} and select the repository that contains your code.
2. Ensure the 'Node' environment is selected.
3. Depending on your package manager, set the build command to `yarn && yarn build`, `npm install && npm run build`, or `pnpm i --shamefully-hoist && pnpm build`.
4. Update the start command to `node .output/server/index.mjs`
5. Click 'Advanced' and add the following environment variables

6. Click on `Create Web Service`.

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/render"}
Head over **Nitro documentation** to learn more about the Render deployment presets.
::

**Examples:**

Example 1 (bash):
```bash
SERVER_PRESET=render_com
   NODE_VERSION=20
```

---

## To use the Bun runtime during development

**URL:** llms-txt#to-use-the-bun-runtime-during-development

---

## useRequestEvent

**URL:** llms-txt#userequestevent

Within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context) you can use `useRequestEvent` to access the incoming request.

::tip
In the browser, `useRequestEvent` will return `undefined`.
::

**Examples:**

Example 1 (ts):
```ts
// Get underlying request event
const event = useRequestEvent()

// Get the URL
const url = event?.path
```

---

## onBeforeRouteLeave

**URL:** llms-txt#onbeforerouteleave

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
title: Vue Router Docs
to: https://router.vuejs.org/api/functions/onBeforeRouteLeave.html
---
::

---

## Nuxt: Looking forward

**URL:** llms-txt#nuxt:-looking-forward

**Contents:**
- A Review of 2023 - Sébastien
- Looking forward into 2024 - Daniel
  - Continued development and reimagination
  - Sustainable open source
  - Friendly collaboration
  - A welcoming community
  - What about Nuxt 4?

## A Review of 2023 - Sébastien

In January 2023, Daniel set out [**Nuxt: A vision for 2023**](https://nuxt.com/blog/vision-2023). We achieved most of the goals we set out to accomplish. Some of them are missing and we will tackle them this year!

It was a productive year and the team shipped **9 minor releases**: from v3.1 to v3.9.

In the first 365 days, Nuxt 3 reached new milestones:

- :icon{name="i-lucide-star"} **49,5K stars** on GitHub ([add yours](https://github.com/nuxt/nuxt){rel="nofollow"} 😊)
- :icon{name="i-lucide-download"} **27M downloads** on npm
- :icon{name="i-lucide-user-plus"} **612 contributors** on the [nuxt repository](https://github.com/nuxt/nuxt){rel="nofollow"}
- :icon{name="i-lucide-puzzle"} **184 modules** created by **142 maintainers**
- :icon{name="i-lucide-circle-check"} **2,423 closed issues**
- :icon{name="i-lucide-git-pull-request"} **1,728 merged pull request**
- :icon{name="i-simple-icons-discord"} **26,300 members** on [Discord](https://chat.nuxt.dev){rel="nofollow"}

End of October, Nuxt 3 downloads [surpassed Nuxt 2 downloads](https://x.com/Atinux/status/1731980841142669379){rel="nofollow"} 🚀.

The same month, we released [Nuxt Image 1.0](https://image.nuxt.com){rel="nofollow"} with Nuxt 3 support and new features to make sure your website stays performant when using Images. Nuxt now auto-installs it as soon as you start using the [`<NuxtImg>`](https://nuxt.com/docs/api/components/nuxt-img) or [`<NuxtPicture>`](https://nuxt.com/docs/api/components/nuxt-picture) component.

We shipped [Nuxt DevTools](https://nuxt.com/blog/nuxt-devtools-v1-0), leveling up the Developer Experience we can expect from a Web framework. I am happy to see that we inspired other frameworks to adopt a similar approach: [Vue DevTools](https://x.com/vuejs/status/1741032977919053865){rel="nofollow"}, [Next DevTools](https://x.com/xinyao27/status/1741447261132145133){rel="nofollow"}, [Remix DevTools](https://x.com/AlemTuzlak59192/status/1741903214860009539){rel="nofollow"}, [Vite Plugin DevTools](https://github.com/pheno-agency/vite-plugin-devtools){rel="nofollow"}, [Astro Dev Toolbar](https://x.com/n_moore/status/1732164645778071888){rel="nofollow"} and more.

After many months of building our UI library internally, [Benjamin Canac](https://github.com/benjamincanac){rel="nofollow"} open sourced [Nuxt UI](https://ui.nuxt.com){rel="nofollow"} to let you create websites at a faster pace with highly customizable components built with TailwindCSS.

[Nuxt Content](http://content.nuxt.com){rel="nofollow"} has had 10 minor releases with various improvements: from performance to the MDC syntax. We have some ongoing work to better support [edge rendering](https://nuxt.com/blog/nuxt-on-the-edge){rel="nofollow"} in the future. At the same time, the NuxtLabs team is working on [Nuxt Studio](https://nuxt.studio){rel="nofollow"} to let users edit Markdown files with a Notion-like editor while keeping your content inside your git repository.

## Looking forward into 2024 - Daniel

We are well into 2024, and this update is definitely overdue!

Here are a few thoughts on the direction that I'll be seeking to lead Nuxt in over the next year.

### Continued development and reimagination

I would love to see us continuing to adapt our best practices to the changing needs of the ecosystem, expand the boundaries of what good DX could be, and improve Nuxt.

I am really pleased at what we currently offer in Nuxt. But I would never want to rest on our laurels. We need to keep pursuing new possibilities that appear as the web platform develops. We've committed to [Baseline Compatibility](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility){rel="nofollow"} going forward (and are included in conversations about it with the [W3C WebDX Community Group](https://github.com/web-platform-dx/web-features){rel="nofollow"}).

We have some strategies to enable us to do this while also prioritising stability for our existing users, and recognising the scope of the Nuxt ecosystem.

1. In general we follow a pattern of **introducing a module or experimental feature** that can be disabled in testing while we gather feedback and confirm the direction and API of new features.
2. We have adopted the **ecosystem-ci pattern** of validating that our code changes in Nuxt don't break downstream projects unintentionally. If you maintain a well-tested module or library that depends on Nuxt, I'd welcome a PR adding your project to [nuxt/ecosystem-ci](https://github.com/nuxt/ecosystem-ci){rel="nofollow"}.
3. We plan to release a **pull-based test** that will allow you to configure your CI to test itself against the latest nightly version of Nuxt to provide early feedback on new Nuxt releases, rather than facing an issue when upgrading.
4. Finally, we have adopted a **push-based approach to updating existing projects**. When we identify breaking changes or improvements that can be rolled out to the ecosystem, we will proactively raise PRs to Nuxt modules (and, to a lesser extent, other open-source projects using Nuxt).

I hope this will allow us to continue to innovate and experiment with new features without sacrificing the stability and maintainability.

In particular, look for active development on the following:

- ✅ [nuxt/fonts](https://github.com/nuxt/fonts){rel="nofollow"} - working up to v1.0.0
- ✅ [nuxt/eslint](https://github.com/nuxt/eslint){rel="nofollow"} - working up to v1.0.0
- 🔥 [nuxt/scripts](https://github.com/nuxt/scripts){rel="nofollow"} - soon to be released
- 🚧 [nuxt/a11y](https://github.com/nuxt/a11y){rel="nofollow"} - coming soon!
- 🚧 [nuxt/auth](https://github.com/nuxt/auth){rel="nofollow"} - coming soon!
- 🚧 [nuxt/hints](https://github.com/nuxt/hints){rel="nofollow"} - coming soon!

### Sustainable open source

I want Nuxt to continue to be an independent, community-driven framework for the long term.

I'm really delighted to see successful businesses founded on Nuxt, and initiatives springing up around Nuxt that become [sponsors](https://nuxt.com/enterprise/sponsors) or otherwise giving back to the core framework, enabling ongoing Nuxt development.

Obviously, [NuxtLabs](https://nuxtlabs.com){rel="nofollow"} is the preeminent example of that. [Pooya Parsa](https://github.com/pi0){rel="nofollow"}, [Anthony Fu](https://github.com/antfu){rel="nofollow"} and I are all able to work full-time on open source thanks to their paid services around Nuxt: [Nuxt UI Pro](https://ui.nuxt.com/pro/getting-started){rel="nofollow"}, [Nuxt Experts](https://nuxt.com/enterprise/support), [Nuxt Studio](https://nuxt.studio/){rel="nofollow"} and [NuxtHub](https://hub.nuxt.com/){rel="nofollow"} (soon). They also [sponsor community members](https://github.com/orgs/nuxtlabs/sponsoring){rel="nofollow"} from Vue, Vite, UnJS, and Nuxt.

For me, keeping Nuxt independent and sustainable for the future requires an active and growing team and community. In the weeks ahead, I'll be announcing a broader 'Nuxt team' alongside the core team. This is about recognising the tireless work of the many people whose contributions are already making Nuxt what it is.

I would also love to see more of those team members or the wider community sponsored to work in the Nuxt ecosystem in the years ahead. If your company has benefited from Nuxt, please do consider sponsoring some of the developers working on Nuxt, whether they are team or wider community members.

### Friendly collaboration

From the beginning of our work on Nuxt 3, we have sought to extract out utilities, libraries and even frameworks that we benefit from so they can *also* benefit a much broader audience.

That's the origin of [UnJS](https://unjs.io/){rel="nofollow"}, of course, and it continues to thrive under the leadership of [Pooya Parsa](https://github.com/pi0){rel="nofollow"} (who is also a key member of the Nuxt core team).

We'd like to continue that attitude of friendly collaboration. Although building things ourselves or keeping them to ourselves might to be 'success', I don't have any time for zero-sum games. We will go further, both as a framework and as a web community, if we build *together*.

Equally, one of our core values is platform-independence (alongside deep platform *integration*). We support 90+ providers across deployment, testing, stories, KV and cache, databases, image CDNs and font hosts. That breadth of ecosystem is one that bears rich rewards and frees people up to make choices about which providers they use based on the value they bring. But it *also* means we are dependent on our community who use these different providers to help us keep these integrations up-to-date.

Nuxt isn't going anywhere, but we hope that the work we do collaboratively will last long beyond us.

### A welcoming community

Although it is easy to focus on technical excellence or the quality of developer experience, I am more encouraged to see the continued growth of the Nuxt ecosystem as a welcoming and friendly community.

I am incredibly grateful for the kind tone that prevails across [our community Discord](https://chat.nuxt.dev){rel="nofollow"}, on [Twitter](https://x.com/nuxt_js){rel="nofollow"}, and on [GitHub](https://github.com/nuxt/nuxt){rel="nofollow"}.

### What about Nuxt 4?

The JavaScript space is known for producing a new framework every week, which means there is a natural hype cycle.

But we are not aiming for hype with the continued development of Nuxt, which is part of why we have committed to regular release cycles:

- **major** framework releases every year
- **minor** releases every month or so
- **patch** releases every week or so

You can expect to see breaking changes shipped in major releases, with features shipped in our minor releases. That means we aren't holding features back for Nuxt 4; we'll ship those as regularly as we can in our 6-weekly minor release cycle.

Our aim is that Nuxt 4 is an opportunity for *thoughtful* breaking changes with either a straightforward migration path (ideally with automated processes) or the ability to opt-in to previous behaviour.

There are definitely lessons we as a team have learned form the transition from Nuxt 2 to 3, and I see Nuxt 4 as an opportunity for us to prove that major releases can be a good experience for users.

You can preview the changes we have in mind by browsing [our roadmap](https://github.com/orgs/nuxt/projects/8/views/4){rel="nofollow"} or checking through [the issues we've tagged for v4](https://github.com/nuxt/nuxt/issues?q=is\:issue+label:4.x){rel="nofollow"}. Feedback and wishes are very welcome as always!

Our roadmap for Nuxt 4 is a little complex as we are also planning on major releases across the UnJS ecosystem.

Roughly speaking, we are aiming to have one more minor release for Nuxt v3 and Nitro v2, before beginning a [raft of major releases across the UnJS ecosystem of packages](https://github.com/unjs/community/discussions/4){rel="nofollow"} - culminating in Nuxt v4.

We are aiming to release **Nuxt v4 on or before June 14** (though obviously this is dependent on having enough time after Nitro's major release to be properly tested in the community, so be aware that this is not an exact date).

After the release of Nuxt v4, we will be providing **six months** of ongoing support and bug-fixes for Nuxt v3, which we expect will be more than ample to upgrade to v4 given our aim of a gentle upgrade path.

We hope you are as excited as we are about the pending release of Nuxt v4! 🎉

Finally, thank you so much for all your trust and support as we've been building Nuxt. I know I speak for the whole team when I say that it's such a privilege to be doing this alongside everyone in the Nuxt community! ❤️

Daniel (on behalf of the whole Nuxt team)

---

## Flightcontrol

**URL:** llms-txt#flightcontrol

**Contents:**
- Set Up your Flightcontrol account
- Create a Project with Configuration via the Dashboard
- Create a Project with Configuration via `flightcontrol.json`

Nitro supports deploying to [AWS via Flightcontrol](https://flightcontrol.dev?ref=nuxt){rel="nofollow"} with minimal configuration.

::tip
**Zero Configuration ✨**

Integration with Flightcontrol is possible with zero configuration.
::

## Set Up your Flightcontrol account

On a high level, the steps you will need to follow to deploy a project for the first time are:

1. Create an account at [Flightcontrol](https://app.flightcontrol.dev/signup?ref=nuxt){rel="nofollow"}
2. Create an account at [AWS](https://portal.aws.amazon.com/billing/signup){rel="nofollow"} (if you don't already have one)
3. Link your AWS account to the Flightcontrol
4. Authorize the Flightcontrol GitHub App to access your chosen repositories, public or private.
5. Create a Flightcontrol project with configuration via the Dashboard or with configuration via `flightcontrol.json`.

## Create a Project with Configuration via the Dashboard

1. Create a Flightcontrol project from the Dashboard. Select a repository for the source.
2. Select the `GUI` config type.
3. Select the Nuxt preset.
4. Select your preferred AWS server size.
5. Submit the new project form.

## Create a Project with Configuration via `flightcontrol.json`

1. Create a Flightcontrol project from your dashboard. Select a repository for the source.
2. Select the `flightcontrol.json` config type.
3. Add a new file at the root of your repository called `flightcontrol.json`. Here is an example configuration that creates an AWS fargate service for your app:

4. Submit the new project form.

::read-more{target="_blank" to="https://www.flightcontrol.dev/docs?ref=nuxt"}
Learn more about Flightcontrol's configuration.
::

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/flightcontrol
---
Head over **Nitro documentation** to learn more about the flightcontrol deployment preset.
::

---

## Firebase

**URL:** llms-txt#firebase

**Contents:**
- Firebase App Hosting (recommended)
  - Project Setup
- Firebase Functions (deprecated)
- Project Setup
- Local Preview
- Build and Deploy
- Options
  - Runtime Node.js Version
- Other Cloud Functions
- Using Cookies in Production

## Firebase App Hosting (recommended)

::note
You will need to be on the [**Blaze plan**](https://firebase.google.com/pricing){rel="nofollow"} (Pay as you go) to get started.
::

::read-more
---
title: Firebase App Hosting
to: https://firebase.google.com/docs/app-hosting
---
::

1. Go to the Firebase [console](https://console.firebase.google.com/){rel="nofollow"} and set up a new project.
2. Select **Build > App Hosting** from the sidebar.

- You may need to upgrade your billing plan at this step.
3. Click **Get Started**.

- Choose a region.
   - Import a GitHub repository (you’ll need to link your GitHub account).
   - Configure deployment settings (project root directory and branch), and enable automatic rollouts.
   - Choose a unique ID for your backend.
4. Click Finish & Deploy to create your first rollout.

When you deploy with Firebase App Hosting, the App Hosting preset will be run automatically at build time.

## Firebase Functions (deprecated)

::important
This deployment method is deprecated and is not recommended. Firebase App Hosting is the recommended way to deploy Nuxt apps on Firebase.
::

To use the more recent and recommended generation of Firebase functions, set the `firebase.gen` option to `2`:

::note
If you cannot use configuration for any reason, alternatively you can use `NITRO_FIREBASE_GEN=2` environment variable.
::

If you already have a deployed version of your website and want to upgrade to 2nd gen, [see the Migration process on Firebase docs](https://firebase.google.com/docs/functions/2nd-gen-upgrade){rel="nofollow"}. Namely, the CLI will ask you to delete your existing functions before deploying the new ones.

::tip
---
target: _blank
to: https://firebase.google.com/docs/functions/version-comparison
---
Comparison between 1st and 2nd generation functions
::

You may instead prefer to set up your project with the Firebase CLI, which will fetch your project ID for you, add required dependencies (see above) and even set up automated deployments via GitHub Actions (for hosting only). [Learn about installing the firebase CLI](https://firebase.google.com/docs/cli#windows-npm){rel="nofollow"}.

1. Install the latest version of the Firebase CLI.
   
2. Initialize your Firebase Project

::note
When prompted, you can enter `.output/public` as the public directory. In the next step, **do not** configure your project as a single-page app.
::

Once complete, add the following to your `firebase.json` to enable server rendering in Cloud Functions:

You can preview a local version of your site if you need to test things out without deploying.

Deploy to Firebase Hosting by running a Nuxt build and then running the `firebase deploy` command.

You can set options for Firebase functions in your `nuxt.config.ts` file:

### Runtime Node.js Version

You can set a custom Node.js version in configuration:

Firebase tools use the `engines.node` version in `package.json` to determine which node version to use for your functions. Nuxt automatically writes to the `.output/server/package.json` with configured Node.js version.

You might also need to add a runtime key to your `firebase.json` file:

::read-more
---
target: _blank
to: https://firebase.google.com/docs/functions/manage-functions?gen=2nd#set_nodejs_version
---
You can read more about this in **Firebase Docs**.
::

## Other Cloud Functions

You may be warned that other cloud functions will be deleted when you deploy your Nuxt project. This is because Nitro will deploy your entire project to firebase functions. If you want to deploy only your Nuxt project, you can use the `--only` flag:

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/firebase
---
Head over to the **Nitro documentation** to learn more about the Firebase deployment preset.
::

## Using Cookies in Production

When using Firebase Hosting together with Cloud Functions or Cloud Run, cookies are generally stripped from incoming requests to allow for efficient CDN cache behavior. Only the specially-named `__session` cookie is permitted to pass through to your app.

::read-more
---
target: \_blank
to: https://firebase.google.com/docs/hosting/manage-cache#using_cookies
---
For more information, refer to the **Firebase documentation**.
::

## Working with Environment Variables

To set environment variables for your Firebase functions, you need to copy the `.env` file to the `.output/server` directory.
You can do this by adding a `postbuild` script to your `package.json`, that will automatically run after the build command:

::read-more
---
target: \_blank
to: https://firebase.google.com/docs/functions/config-env?gen=2nd#env-variables
---
For more information, refer to the **Firebase documentation**.
::

**Examples:**

Example 1 (unknown):
```unknown
::note
If you cannot use configuration for any reason, alternatively you can use `NITRO_FIREBASE_GEN=2` environment variable.
::

If you already have a deployed version of your website and want to upgrade to 2nd gen, [see the Migration process on Firebase docs](https://firebase.google.com/docs/functions/2nd-gen-upgrade){rel="nofollow"}. Namely, the CLI will ask you to delete your existing functions before deploying the new ones.

::tip
---
target: _blank
to: https://firebase.google.com/docs/functions/version-comparison
---
Comparison between 1st and 2nd generation functions
::

## Project Setup

You may instead prefer to set up your project with the Firebase CLI, which will fetch your project ID for you, add required dependencies (see above) and even set up automated deployments via GitHub Actions (for hosting only). [Learn about installing the firebase CLI](https://firebase.google.com/docs/cli#windows-npm){rel="nofollow"}.

1. Install the latest version of the Firebase CLI.
```

Example 2 (unknown):
```unknown
2. Initialize your Firebase Project
```

Example 3 (unknown):
```unknown
::note
When prompted, you can enter `.output/public` as the public directory. In the next step, **do not** configure your project as a single-page app.
::

Once complete, add the following to your `firebase.json` to enable server rendering in Cloud Functions:
```

Example 4 (unknown):
```unknown
## Local Preview

You can preview a local version of your site if you need to test things out without deploying.
```

---

## Resolving

**URL:** llms-txt#resolving

**Contents:**
- `resolvePath`
  - Usage
  - Type
  - Parameters
  - Examples
- `resolveAlias`
  - Type
  - Parameters
- `findPath`
  - Usage

Sometimes you need to resolve a paths: relative to the current module, with unknown name or extension. For example, you may want to add a plugin that is located in the same directory as the module. To handle this cases, nuxt provides a set of utilities to resolve paths. `resolvePath` and `resolveAlias` are used to resolve paths relative to the current module. `findPath` is used to find first existing file in given paths. `createResolver` is used to create resolver relative to base path.

Resolves full path to a file or directory respecting Nuxt alias and extensions options. If path could not be resolved, normalized input path will be returned.

**`path`**: A path to resolve.

**`options`**: Options to pass to the resolver. This object can have the following properties:

| Property             | Type                                                                                                                                       | Required | Description                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `cwd`                | `string`                                                                                                                                   | `false`  | Base for resolving paths from. Default is Nuxt rootDir.                                                                      |
| `alias`              | `Record<string, string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | An object of aliases. Default is Nuxt configured aliases.                                                                    |
| `extensions`         | `string[]`                                                                                                                                 | `false`  | The file extensions to try. Default is Nuxt configured extensions.                                                           |
| `virtual`            | `boolean`                                                                                                                                  | `false`  | Whether to resolve files that exist in the Nuxt VFS (for example, as a Nuxt template).                                       |
| `fallbackToOriginal` | `boolean`                                                                                                                                  | `false`  | Whether to fallback to the original path if the resolved path does not exist instead of returning the normalized input path. |

Resolves path aliases respecting Nuxt alias options.

**`path`**: A path to resolve.

**`alias`**: An object of aliases. If not provided, it will be read from `nuxt.options.alias`.

Try to resolve first existing file in given paths.

**`paths`**: A path or an array of paths to resolve.

**`options`**: Options to pass to the resolver. This object can have the following properties:

| Property             | Type                                                                                                                                       | Required | Description                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `cwd`                | `string`                                                                                                                                   | `false`  | Base for resolving paths from. Default is Nuxt rootDir.                                                                      |
| `alias`              | `Record<string, string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | An object of aliases. Default is Nuxt configured aliases.                                                                    |
| `extensions`         | `string[]`                                                                                                                                 | `false`  | The file extensions to try. Default is Nuxt configured extensions.                                                           |
| `virtual`            | `boolean`                                                                                                                                  | `false`  | Whether to resolve files that exist in the Nuxt VFS (for example, as a Nuxt template).                                       |
| `fallbackToOriginal` | `boolean`                                                                                                                                  | `false`  | Whether to fallback to the original path if the resolved path does not exist instead of returning the normalized input path. |

Creates resolver relative to base path.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/resolving-paths-and-injecting-assets-to-the-app?friend=nuxt
---
Watch Vue School video about createResolver.
::

**`basePath`**: A base path to resolve from. It can be a string or a URL.

The `createResolver` function returns an object with the following properties:

| Property      | Type                                                                                                                                                                                | Description                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `resolve`     | `(path: string) => string`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                                        | A function that resolves a path relative to the base path.                                                |
| `resolvePath` | `(path: string, options?: ResolvePathOptions) => Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | A function that resolves a path relative to the base path and respects Nuxt alias and extensions options. |

**Examples:**

Example 1 (ts):
```ts
import { defineNuxtModule, resolvePath } from '@nuxt/kit'

export default defineNuxtModule({
  async setup () {
    const entrypoint = await resolvePath('@unhead/vue')
    console.log(`Unhead entrypoint is ${entrypoint}`)
  },
})
```

Example 2 (ts):
```ts
function resolvePath (path: string, options?: ResolvePathOptions): Promise<string>
```

Example 3 (ts):
```ts
import { defineNuxtModule, resolvePath } from '@nuxt/kit'
import { join } from 'pathe'

const headlessComponents: ComponentGroup[] = [
  {
    relativePath: 'combobox/combobox.js',
    chunkName: 'headlessui/combobox',
    exports: [
      'Combobox',
      'ComboboxLabel',
      'ComboboxButton',
      'ComboboxInput',
      'ComboboxOptions',
      'ComboboxOption',
    ],
  },
]

export default defineNuxtModule({
  meta: {
    name: 'nuxt-headlessui',
    configKey: 'headlessui',
  },
  defaults: {
    prefix: 'Headless',
  },
  async setup (options) {
    const entrypoint = await resolvePath('@headlessui/vue')
    const root = join(entrypoint, '../components')

    for (const group of headlessComponents) {
      for (const e of group.exports) {
        addComponent(
          {
            name: e,
            export: e,
            filePath: join(root, group.relativePath),
            chunkName: group.chunkName,
            mode: 'all',
          },
        )
      }
    }
  },
})
```

Example 4 (ts):
```ts
function resolveAlias (path: string, alias?: Record<string, string>): string
```

---

## Nuxt 3.18

**URL:** llms-txt#nuxt-3.18

**Contents:**
- 🧪 Lazy Hydration Macros
- ♿️ Accessibility Improvements
- 🛠️ Enhanced Development Experience
  - Chrome DevTools Workspace Integration
  - Better Component Type Safety
  - New Auto-Import: `onWatcherCleanup`
- 📊 Observability Enhancements
- 🔧 Module Development Improvements
  - Simplified Server Imports
  - TypeScript Configuration

## 🧪 Lazy Hydration Macros

Building on the delayed hydration support from v3.16, we now support **lazy hydration macros** ([#31192](https://github.com/nuxt/nuxt/pull/31192){rel="nofollow"})! These provide a more ergonomic way to control component hydration:

These macros make it possible to use Nuxt's lazy hydration utilities alongside explicit component imports.

## ♿️ Accessibility Improvements

We've enhanced accessibility by including `<NuxtRouteAnnouncer>` in the built-in `app.vue` ([#32621](https://github.com/nuxt/nuxt/pull/32621){rel="nofollow"}). This means page changes will be announced to screen readers, making navigation more accessible for users with visual impairments. (This only applies if you do not have an `app.vue` in your project. If you do, please keep `<NuxtRouteAnnouncer>` in your `app.vue`!)

## 🛠️ Enhanced Development Experience

### Chrome DevTools Workspace Integration

We've added **Chrome DevTools workspace integration** ([#32084](https://github.com/nuxt/nuxt/pull/32084){rel="nofollow"}), allowing you to edit your Nuxt source files directly from Chrome DevTools. This creates a better debugging experience where changes made in DevTools are reflected in your actual source files.

### Better Component Type Safety

Component type safety has been improved with:

- **Typed slots for `<ClientOnly>` and `<DevOnly>`** ([#32707](https://github.com/nuxt/nuxt/pull/32707){rel="nofollow"}) - better IntelliSense and error checking
- **Exported `<NuxtTime>` prop types** ([#32547](https://github.com/nuxt/nuxt/pull/32547){rel="nofollow"}) - easier to extend and customize

### New Auto-Import: `onWatcherCleanup`

The `onWatcherCleanup` function from `vue` is now available as an auto-import ([#32396](https://github.com/nuxt/nuxt/pull/32396){rel="nofollow"}), making it easier to clean up watchers and prevent memory leaks:

## 📊 Observability Enhancements

Page routes are now **exposed to Nitro for observability** ([#32617](https://github.com/nuxt/nuxt/pull/32617){rel="nofollow"}), enabling better monitoring and analytics integration with supported platforms. This allows observability tools to track page-level metrics more effectively.

## 🔧 Module Development Improvements

Module authors get several quality-of-life improvements:

### Simplified Server Imports

The `addServerImports` kit utility now **supports single imports** ([#32289](https://github.com/nuxt/nuxt/pull/32289){rel="nofollow"}), making it easier to add individual server utilities:

### TypeScript Configuration

Modules can now &#x2A;*add to `typescript.hoist`** ([#32601](https://github.com/nuxt/nuxt/pull/32601){rel="nofollow"}), giving them more control over TypeScript configuration and type generation.

## ⚡️ Performance Improvements

We've made several performance optimizations:

- **Improved Vite-node communication** via internal socket ([#32417](https://github.com/nuxt/nuxt/pull/32417){rel="nofollow"}) for faster development builds
- **Migration to `oxc-walker`** ([#32250](https://github.com/nuxt/nuxt/pull/32250){rel="nofollow"}) and **oxc for `onPrehydrate` transforms** ([#32045](https://github.com/nuxt/nuxt/pull/32045){rel="nofollow"}) for faster code transformations

This release also includes several important fixes:

- **Improved data fetching**: When computed keys change, old data is now properly retained ([#32616](https://github.com/nuxt/nuxt/pull/32616){rel="nofollow"})
- **Better scroll behavior**: `scrollBehaviorType` is now only used for hash scrolling ([#32622](https://github.com/nuxt/nuxt/pull/32622){rel="nofollow"})
- **Fixed directory aliases**: Added trailing slashes to some directory aliases for better consistency ([#32755](https://github.com/nuxt/nuxt/pull/32755){rel="nofollow"})

As usual, our recommendation for upgrading is to run:

This refreshes your lockfile and pulls in all the latest dependencies that Nuxt relies on, especially from the unjs ecosystem.

## Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.18.0
---
Read the full release notes of Nuxt `v3.18.0`.
::

A huge thank you to everyone who's been a part of this release. Over the next six months, we'll continue backporting compatible v4 features and bug fixes, so please keep the feedback coming! ❤️

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue')
)
</script>
<template>
  <div>
    <!-- 
      Hydration will be triggered when
      the element(s) is 100px away from entering the viewport.
    -->
    <LazyHydrationMyComponent :hydrate-on-visible="{ rootMargin: '100px' }" />
  </div>
</template>
```

Example 2 (ts):
```ts
const { data } = useAsyncData('users', fetchUsers)

watch(data, (newData) => {
  const interval = setInterval(() => {
    // Some periodic task
  }, 1000)
  
  // Clean up when the watcher is stopped
  onWatcherCleanup(() => {
    clearInterval(interval)
  })
})
```

Example 3 (ts):
```ts
// Before: had to wrap in array
addServerImports([{ from: 'my-package', name: 'myUtility' }])

// Now: can pass directly
addServerImports({ from: 'my-package', name: 'myUtility' })
```

Example 4 (sh):
```sh
npx nuxi@latest upgrade --dedupe
```

---

## onNuxtReady

**URL:** llms-txt#onnuxtready

::important
`onNuxtReady` only runs on the client-side. :br
It is ideal for running code that should not block the initial rendering of your app.
::

It is 'safe' to run even after your app has initialized. In this case, then the code will be registered to run in the next idle callback.

---

## SIDESTREAM

**URL:** llms-txt#sidestream

We develop the best Nuxt 3 software for you.

How? You’ll work directly with a Nuxt-Insider and 25+ Nuxt3 experts who shipped 50+ Nuxt projects.

We are the creators of sidebase - The productive way to build fullstack Nuxt 3 applications.

We specialize in Nuxt 3 and Fullstack TypeScript Development.

---

## Nuxt 4.2

**URL:** llms-txt#nuxt-4.2

**Contents:**
- 🎯 Abort Control for Data Fetching
- 🎨 Better Error Pages in Development
- 🔮 Opt-in Vite Environment API
- 📦 New `@nuxt/nitro-server` Package
- ⚡ Performance Improvements
  - 📉 Async Data Handler Extraction
- 🔧 Experimental TypeScript Plugin Support
- 🎁 Other Improvements
- 🩹 Important Fixes
- ✅ Upgrading

We're excited to announce Nuxt 4.2, bringing new capabilities for better TypeScript DX, enhanced error handling, and improved control over data fetching! 🎉

## 🎯 Abort Control for Data Fetching

You can now use `AbortController` signals directly within `useAsyncData`, giving you fine-grained control over request cancellation ([#32531](https://github.com/nuxt/nuxt/pull/32531){rel="nofollow"}).

This works by passing an internal signal to your `useAsyncData` `handler` to cancel any promise that can be canceled, such as `$fetch`.

You also pass an `AbortController` signal directly to `refresh`/`execute`, giving you fine-grained control over request cancellation. This is particularly useful when you need to abort requests based on user actions or component lifecycle events.

## 🎨 Better Error Pages in Development

When an error occurs during development, Nuxt will now display both your custom error page *and* a detailed technical error overlay ([#33359](https://github.com/nuxt/nuxt/pull/33359){rel="nofollow"}). This gives you the best of both worlds – you can see what your users will experience while also having immediate access to stack traces and debugging information.

![Screenshot of the new development error page](https://nuxt.com/assets/blog/nuxt-error-page.png)

The technical overlay appears as a toggleable panel that doesn't interfere with your custom error page, making it easier to debug issues while maintaining a realistic preview of your error handling.

## 🔮 Opt-in Vite Environment API

For those wanting to experiment with cutting-edge features, you can now opt into the [Vite Environment API](https://vite.dev/guide/api-environment){rel="nofollow"} ([#33492](https://github.com/nuxt/nuxt/pull/33492){rel="nofollow"}).

The Vite Environment API is a major architectural improvement in Vite 6. It closes the gap between development and production by allowing the Vite dev server to handle multiple environments concurrently (rather than requiring multiple Vite dev servers, as we have done previously in Nuxt).

This should improve performance when developing and eliminate some edge case bugs.

... and it is the foundation for implementing Nitro as a Vite environment, which should speed up the dev server still further, as well as allowing more greater alignment in development with your Nitro preset.

This is also the first breaking change for Nuxt v5. You can opt in to these breaking changes by setting `compatibilityVersion` to `5`:

Please only use this for testing, as this opts in to unlimited future breaking changes, including updating to Nitro v3 once we ship the Nuxt integration.

::callout{type="warning"}
This is highly experimental and the API may change. Only enable if you're prepared for potential breaking changes and want to help shape the future of Nuxt!
::

## 📦 New `@nuxt/nitro-server` Package

We've extracted Nitro server integration into its own package: `@nuxt/nitro-server` ([#33462](https://github.com/nuxt/nuxt/pull/33462){rel="nofollow"}). This architectural change allows for different Nitro integration patterns and paves the way for future innovations in server-side rendering.

While this change is mostly internal, it's part of our ongoing effort to make Nuxt more modular and flexible. The new package provides standalone Nitro integration and sets the foundation for alternative integration approaches (such as using Nitro as a Vite plugin in Nuxt v5+).

::callout{type="info"}
This is an internal refactor – no changes should be required in your code.
::

## ⚡ Performance Improvements

We've also shipped several performance enhancements:

- **Precomputed renderer dependencies** – We now compute renderer dependencies at build time rather than runtime, improving cold start and initial render performance ([#33361](https://github.com/nuxt/nuxt/pull/33361){rel="nofollow"})
- **Reduced dependencies** – Removed unnecessary dependencies from kit and schema packages ([7ae2cf563](https://github.com/nuxt/nuxt/commit/7ae2cf563){rel="nofollow"})

### 📉 Async Data Handler Extraction

One of the most exciting performance improvements is the new experimental async data handler extraction ([#33131](https://github.com/nuxt/nuxt/pull/33131){rel="nofollow"}). When enabled, handler functions passed to `useAsyncData` and `useLazyAsyncData` are automatically extracted into separate chunks and dynamically imported.

This is **particularly effective for prerendered static sites**, as the data fetching logic is only needed at build time and can be completely excluded from the client bundle.

::callout{type="info"}
In testing with a previous version of nuxt.com, this feature **reduced JavaScript bundle size by 39%**! Of course, your mileage may vary depending on how much data fetching logic you have.
::

For static/prerendered sites, enable it in your config:

The extracted handlers are then tree-shaken from your client bundle when prerendering, as the data is already available in the payload. This results in significantly smaller JavaScript files shipped to your users.

## 🔧 Experimental TypeScript Plugin Support

We're introducing experimental support for enhanced TypeScript developer experience through the [`@dxup/nuxt`](https://github.com/KazariEX/dxup){rel="nofollow"} module.

This module adds a number of TypeScript plugins that aim to improve your experience when using Nuxt-specific features:

- **Smart component renaming**: Automatically updates all references when you rename auto-imported component files
- **Go to definition for dynamic imports**: Navigate directly to files when using glob patterns like ``import(`~/assets/${name}.webp`)``
- **Nitro route navigation**: Jump to server route handlers from data fetching functions (`$fetch`, `useFetch`, `useLazyFetch`)
- **Runtime config navigation**: Go to definition works seamlessly with runtime config properties
- **Enhanced auto-import support**: Includes the [`@dxup/unimport`](https://github.com/KazariEX/dxup/tree/main/packages/unimport){rel="nofollow"} plugin for better navigation with auto-imported composables and utilities

::note
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#typescriptplugin
---
Read more in **[the documentation](https://nuxt.com/docs/guide/going-further/experimental-features#typescriptplugin)**.
::

To enable this feature, set `experimental.typescriptPlugin` to `true` in your Nuxt configuration:

Once enabled, the module will be automatically installed and configured by Nuxt.

::warning
This feature also requires selecting the workspace TypeScript version in VS Code. Run the "TypeScript: Select TypeScript Version" command and choose "Use Workspace Version".
::

## 🎁 Other Improvements

- **Component `declarationPath`** – You can now specify a custom declaration path for components ([#33419](https://github.com/nuxt/nuxt/pull/33419){rel="nofollow"})
- **Module resolution extensions** – Kit's `resolveModule` now accepts an `extensions` option ([#33328](https://github.com/nuxt/nuxt/pull/33328){rel="nofollow"})
- **Global head utility** – New `setGlobalHead` utility in kit for easier head management ([#33512](https://github.com/nuxt/nuxt/pull/33512){rel="nofollow"})

- Route hash is now preserved when redirecting based on `routeRules` ([#33222](https://github.com/nuxt/nuxt/pull/33222){rel="nofollow"})
- Fixed concurrent calls to `loadNuxtConfig` with proper cleanup ([#33420](https://github.com/nuxt/nuxt/pull/33420){rel="nofollow"})
- Object-format `href` now works correctly in `<NuxtLink>` ([c69e4c30d](https://github.com/nuxt/nuxt/commit/c69e4c30d){rel="nofollow"})
- Component auto-imports now work as arguments to Vue's `h()` function ([#33509](https://github.com/nuxt/nuxt/pull/33509){rel="nofollow"})
- Fixed app config array handling during HMR ([#33555](https://github.com/nuxt/nuxt/pull/33555){rel="nofollow"})

Our recommendation for upgrading is to run:

This will refresh your lockfile and pull in all the latest dependencies that Nuxt relies on, especially from the unjs ecosystem.

## 👉 Full Release Notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v4.2.0
---
Read the full release notes of Nuxt `v4.2.0`.
::

Thank you for reading this far! We hope you enjoy the new release. Please do let us know if you have any feedback or issues.

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const { data, error, clear, refresh } = await useAsyncData('users', (_nuxtApp, { signal }) => $fetch('/api/users', {
  signal
}))

refresh() // will actually cancel the $fetch request (if dedupe: cancel)
refresh() // will actually cancel the $fetch request (if dedupe: cancel)
refresh()
  
clear() // will cancel the latest pending handler
</script>
```

Example 2 (ts):
```ts
const { data, refresh } = await useAsyncData('posts', fetchPosts)

// Abort an ongoing refresh
const abortController = new AbortController()
refresh({ signal: abortController.signal })

// Later...
abortController.abort()
```

Example 3 (unknown):
```unknown
This is also the first breaking change for Nuxt v5. You can opt in to these breaking changes by setting `compatibilityVersion` to `5`:
```

Example 4 (unknown):
```unknown
Please only use this for testing, as this opts in to unlimited future breaking changes, including updating to Nitro v3 once we ship the Nuxt integration.

::callout{type="warning"}
This is highly experimental and the API may change. Only enable if you're prepared for potential breaking changes and want to help shape the future of Nuxt!
::

## 📦 New `@nuxt/nitro-server` Package

We've extracted Nitro server integration into its own package: `@nuxt/nitro-server` ([#33462](https://github.com/nuxt/nuxt/pull/33462){rel="nofollow"}). This architectural change allows for different Nitro integration patterns and paves the way for future innovations in server-side rendering.

While this change is mostly internal, it's part of our ongoing effort to make Nuxt more modular and flexible. The new package provides standalone Nitro integration and sets the foundation for alternative integration approaches (such as using Nitro as a Vite plugin in Nuxt v5+).

::callout{type="info"}
This is an internal refactor – no changes should be required in your code.
::

## ⚡ Performance Improvements

We've also shipped several performance enhancements:

- **Precomputed renderer dependencies** – We now compute renderer dependencies at build time rather than runtime, improving cold start and initial render performance ([#33361](https://github.com/nuxt/nuxt/pull/33361){rel="nofollow"})
- **Reduced dependencies** – Removed unnecessary dependencies from kit and schema packages ([7ae2cf563](https://github.com/nuxt/nuxt/commit/7ae2cf563){rel="nofollow"})

### 📉 Async Data Handler Extraction

One of the most exciting performance improvements is the new experimental async data handler extraction ([#33131](https://github.com/nuxt/nuxt/pull/33131){rel="nofollow"}). When enabled, handler functions passed to `useAsyncData` and `useLazyAsyncData` are automatically extracted into separate chunks and dynamically imported.

This is **particularly effective for prerendered static sites**, as the data fetching logic is only needed at build time and can be completely excluded from the client bundle.

::callout{type="info"}
In testing with a previous version of nuxt.com, this feature **reduced JavaScript bundle size by 39%**! Of course, your mileage may vary depending on how much data fetching logic you have.
::
```

---

## nuxt generate

**URL:** llms-txt#nuxt-generate

**Contents:**
- Arguments
- Options

The `generate` command pre-renders every route of your application and stores the result in plain HTML files that you can deploy on any static hosting services. The command triggers the `nuxt build` command with the `prerender` argument set to `true`

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--preset`                         |         | Nitro server preset                                                                                                                                  |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |

::read-more
---
to: https://nuxt.com/docs/getting-started/deployment#static-hosting
---
Read more about pre-rendering and static hosting.
::

---

## Error Handling

**URL:** llms-txt#error-handling

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

::sandbox
---
branch: main
dir: examples/advanced/error-handling
file: app.vue
repo: nuxt/examples
---
::

---

## Build Tooling

**URL:** llms-txt#build-tooling

**Contents:**
- Steps

We use the following build tools by default:

- [Vite](https://vite.dev){rel="nofollow"} or [webpack](https://webpack.js.org){rel="nofollow"}
- [Rollup](https://rollupjs.org){rel="nofollow"}
- [PostCSS](https://postcss.org){rel="nofollow"}
- [esbuild](https://esbuild.github.io){rel="nofollow"}

For this reason, most of your previous `build` configuration in `nuxt.config` will now be ignored, including any custom babel configuration.

If you need to configure any of Nuxt's build tools, you can do so in your `nuxt.config`, using the new top-level `vite`, `webpack` and `postcss` keys.

In addition, Nuxt ships with TypeScript support.

::read-more{to="https://nuxt.com/docs/guide/concepts/typescript"}
::

1. Remove `@nuxt/typescript-build` and `@nuxt/typescript-runtime` from your dependencies and modules.
2. Remove any unused babel dependencies from your project.
3. Remove any explicit core-js dependencies.
4. Migrate `require` to `import`.

---

## nuxt devtools

**URL:** llms-txt#nuxt-devtools

**Contents:**
- Arguments
- Options

Running `nuxt devtools enable` will install the Nuxt DevTools globally, and also enable it within the particular project you are using. It is saved as a preference in your user-level `.nuxtrc`. If you want to remove devtools support for a particular project, you can run `nuxt devtools disable`.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `COMMAND`     | Command to run (options: \<enable\|disable>)   |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option              | Default | Description                                                                      |
| ------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>` |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |

::read-more
---
icon: i-simple-icons-nuxtdotjs
target: \_blank
to: https://devtools.nuxt.com
---
Read more about the **Nuxt DevTools**.
::

---

## Disable SSR

**URL:** llms-txt#disable-ssr

---

## Misc

**URL:** llms-txt#misc

---

## Nuxt Kit

**URL:** llms-txt#nuxt-kit

**Contents:**
- Usage
  - Install Dependency
  - Import Kit Utilities

Nuxt Kit provides composable utilities to make interacting with [Nuxt Hooks](https://nuxt.com/docs/3.x/api/advanced/hooks), the [Nuxt Interface](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxt-interface) and developing [Nuxt Modules](https://nuxt.com/docs/3.x/guide/going-further/modules) super easy.

::read-more{to="https://nuxt.com/docs/api/kit"}
Discover all Nuxt Kit utilities.
::

### Install Dependency

You can install the latest Nuxt Kit by adding it to the `dependencies` section of your `package.json`. However, please consider always explicitly installing the `@nuxt/kit` package even if it is already installed by Nuxt.

::note
`@nuxt/kit` and `@nuxt/schema` are key dependencies for Nuxt. If you are installing it separately, make sure that the versions of `@nuxt/kit` and `@nuxt/schema` are equal to or greater than your `nuxt` version to avoid any unexpected behavior.
::

### Import Kit Utilities

::read-more{to="https://nuxt.com/docs/api/kit"}
::

::note
Nuxt Kit utilities are only available for modules and not meant to be imported in runtime (components, Vue composables, pages, plugins, or server routes).
::

Nuxt Kit is an [esm-only package](https://nuxt.com/docs/3.x/guide/concepts/esm) meaning that you **cannot** `require('@nuxt/kit')`. As a workaround, use dynamic import in the CommonJS context:

**Examples:**

Example 1 (unknown):
```unknown
### Import Kit Utilities
```

Example 2 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/api/kit"}
::

::note
Nuxt Kit utilities are only available for modules and not meant to be imported in runtime (components, Vue composables, pages, plugins, or server routes).
::

Nuxt Kit is an [esm-only package](https://nuxt.com/docs/3.x/guide/concepts/esm) meaning that you **cannot** `require('@nuxt/kit')`. As a workaround, use dynamic import in the CommonJS context:
```

---

## Logs

**URL:** llms-txt#logs

---

## Nuxt 2: From Terminal to Browser

**URL:** llms-txt#nuxt-2:-from-terminal-to-browser

**Contents:**
- Problems
- Solutions
- Nuxt Vision

> Nuxt is a Vue.js framework to create different kind of web applications with the **same directory structure & conventions**: Universal, Single Page, PWA or Static Generated.

*ℹ️ These features are all available with [v2.8.0 release](https://github.com/nuxt/nuxt.js/releases/tag/v2.8.0){rel="nofollow"}.*

1. Developing JavaScript applications with Webpack or any bundler requires to switch between your browser and terminal for debugging purpose.
2. Using `console.log` to debug when the app is server rendered requires to remember that logs will be displayed on the terminal when refreshing the page.

1. Forwarding Webpack build state right in the browser and display them in a fancy manner.

![forward-webpack-build-state](https://nuxt.com/assets/blog/forward-webpack-build-state.gif){.rounded-lg.border.border-gray-700}

2. Same for Hot Module Replacement (really useful when the project gets bigger and takes more time to re-build).

![nuxt-build-indicator-hmr](https://nuxt.com/assets/blog/nuxt-build-indicator-hmr.gif){.rounded-lg.border.border-gray-700}

3. Forwarding SSR logs to the browser in development mode

![nuxt-ssr-logs-forwarding](https://nuxt.com/assets/blog/nuxt-ssr-logs-forwarding.gif){.rounded-lg.border.border-gray-700}

The purpose to these changes is to use the terminal for commands only.

Now you can focus right on your code and its visual result 🙂

> Be lazy, be smart, be Nuxt.

- Nuxt 2 docs: <https://v2.nuxt.com>{rel="nofollow"}
- GitHub: <https://github.com/nuxt/nuxt.js>{rel="nofollow"}
- Loading Screen source code: <https://github.com/nuxt/loading-screen>{rel="nofollow"}
- Twitter: <https://x.com/nuxt_js>{rel="nofollow"}

---

## nuxt cleanup

**URL:** llms-txt#nuxt-cleanup

**Contents:**
- Arguments
- Options

The `cleanup` command removes common generated Nuxt files and caches, including:

- `.nuxt`
- `.output`
- `node_modules/.vite`
- `node_modules/.cache`

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option              | Default | Description                                                                      |
| ------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>` |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |

---

## <NuxtWelcome>

**URL:** llms-txt#<nuxtwelcome>

It includes links to the Nuxt documentation, source code, and social media accounts.

::read-more
---
target: _blank
to: https://templates.ui.nuxtjs.org/templates/welcome
---
Preview the `<NuxtWelcome />` component.
::

::tip
This component is part of [nuxt/assets](https://github.com/nuxt/assets){rel="nofollow"}.
::

---

## Building a Privacy-First Feedback Widget

**URL:** llms-txt#building-a-privacy-first-feedback-widget

**Contents:**
- Why a feedback widget?
- Technical architecture
  - 1. Frontend with Motion animations
  - 2. Plausible-inspired anonymization
  - 3. Database persistence with conflict handling
- Shared types for consistency
- What's next

Documentation is at the heart of the Nuxt developer experience. To continuously improve it, we needed a simple and effective way to collect user feedback directly on each page. Here's how we designed and implemented our feedback widget, drawing inspiration from Plausible's privacy-first approach.

## Why a feedback widget?

Currently, users can provide feedback on our documentation by creating GitHub issues or contacting us directly. While these channels are valuable and remain important, they require users to leave their current context and take several steps to share their thoughts.

We wanted something different:

- **Contextual**: Directly integrated into each documentation page
- **Frictionless**: Maximum 2 clicks to provide feedback
- **Privacy-respecting**: No personal tracking, GDPR compliant by design

:video{.rounded-lg controls controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/so_0/v1749746517/nuxt/nuxt-feedback_lh6zyg.jpg"}

## Technical architecture

Our solution consists of three main components:

### 1. Frontend with Motion animations

The interface combines Vue 3's Composition API with [Motion for Vue](https://motion.dev/docs/vue){rel="nofollow"} to create an engaging user experience. The widget uses layout animations for smooth state transitions and spring physics for natural feedback. The `useFeedback` composable handles all state management and automatically resets when users navigate between pages.

Here's the success state animation, for example:

You can find the source code of the feedback widget [here](https://github.com/nuxt/nuxt.com/tree/main/app/components/Feedback.vue){rel="nofollow"}.

### 2. Plausible-inspired anonymization

The challenge was detecting duplicates (a user changing their mind) while preserving privacy. We took inspiration from [Plausible](https://plausible.io/){rel="nofollow"}'s approach to [counting unique visitors without cookies](https://plausible.io/data-policy){rel="nofollow"}.

This method generates a unique daily identifier by combining:

- **IP + User-Agent**: Naturally sent with every HTTP request
- **Domain**: Enables environment isolation
- **Current date**: Forces daily rotation of identifiers

**Why is this secure?**

- IP and User-Agent are never stored in the database
- The hash changes daily, preventing long-term tracking
- Very difficult to reverse engineer original data from the hash
- GDPR compliant by design (no persistent personal data)

### 3. Database persistence with conflict handling

First, we define the schema for the feedback table and add a unique constraint on the `path` and `fingerprint` columns.

Then, in the server, we use [Drizzle](https://orm.drizzle.team/docs/get-started){rel="nofollow"} with an `UPSERT` strategy:

This approach enables updates if the user changes their mind within the day, creation for new feedback, and automatic deduplication per page and user.

You can find the source code of the server side [here](https://github.com/nuxt/nuxt.com/tree/main/server){rel="nofollow"}.

## Shared types for consistency

We use Zod for runtime validation and type generation:

This approach ensures consistency across frontend, API, and database.

The widget is now live across all documentation pages. Our next step is building an admin interface within nuxt.com to analyze feedback patterns and identify pages that need improvement. This will help us continuously enhance the documentation quality based on real user feedback.

The complete source code is available on [GitHub](https://github.com/nuxt/nuxt.com){rel="nofollow"} for inspiration and contributions!

**Examples:**

Example 1 (vue):
```vue
<template>
  <!-- ... -->
  <motion.div
    v-if="isSubmitted"
    key="success"
    :initial="{ opacity: 0, scale: 0.95 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 0.3 }"
    class="flex items-center gap-3 py-2"
    role="status"
    aria-live="polite"
    aria-label="Feedback submitted successfully"
  >
    <motion.div
      :initial="{ scale: 0 }"
      :animate="{ scale: 1 }"
      :transition="{ delay: 0.1, type: 'spring', visualDuration: 0.4 }"
      class="text-xl"
      aria-hidden="true"
    >
      ✨
    </motion.div>
    <motion.div
      :initial="{ opacity: 0, x: 10 }"
      :animate="{ opacity: 1, x: 0 }"
      :transition="{ delay: 0.2, duration: 0.3 }"
    >
      <div class="text-sm font-medium text-highlighted">
        Thank you for your feedback!
      </div>
      <div class="text-xs text-muted mt-1">
        Your input helps us improve the documentation.
      </div>
    </motion.div>
  </motion.div>
  <!-- ... -->
</template>
```

Example 2 (typescript):
```typescript
export async function generateHash(
  today: string,
  ip: string,
  domain: string,
  userAgent: string
): Promise<string> {
  const data = `${today}+${domain}+${ip}+${userAgent}`

  const buffer = await crypto.subtle.digest(
    'SHA-1',
    new TextEncoder().encode(data)
  )

  return [...new Uint8Array(buffer)]
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}
```

Example 3 (typescript):
```typescript
export const feedback = sqliteTable('feedback', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  rating: text('rating').notNull(),
  feedback: text('feedback'),
  path: text('path').notNull(),
  title: text('title').notNull(),
  stem: text('stem').notNull(),
  country: text('country').notNull(),
  fingerprint: text('fingerprint').notNull(),
  createdAt: integer({ mode: 'timestamp' }).notNull(),
  updatedAt: integer({ mode: 'timestamp' }).notNull()
}, table => [uniqueIndex('path_fingerprint_idx').on(table.path, table.fingerprint)])
```

Example 4 (typescript):
```typescript
await drizzle.insert(tables.feedback).values({
  rating: data.rating,
  feedback: data.feedback || null,
  path: data.path,
  title: data.title,
  stem: data.stem,
  country: event.context.cf?.country || 'unknown',
  fingerprint,
  createdAt: new Date(),
  updatedAt: new Date()
}).onConflictDoUpdate({
  target: [tables.feedback.path, tables.feedback.fingerprint],
  set: {
    rating: data.rating,
    feedback: data.feedback || null,
    country,
    updatedAt: new Date()
  }
})
```

---

## Run only Nuxt tests

**URL:** llms-txt#run-only-nuxt-tests

npx vitest --project nuxt

---

## nuxt add

**URL:** llms-txt#nuxt-add

**Contents:**
  - Arguments
  - Options

| Argument   | Description                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEMPLATE` | Specify which template to generate (options: \<api\|app\|app-config\|component\|composable\|error\|layer\|layout\|middleware\|module\|page\|plugin\|server-middleware\|server-plugin\|server-route\|server-util>) |
| `NAME`     | Specify name of the generated file                                                                                                                                                                                |

| Option                             | Default | Description                              |
| ---------------------------------- | ------- | ---------------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory            |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level             |
| `--force`                          | `false` | Force override file if it already exists |

Some templates support additional modifier flags to add a suffix (like `.client` or `.get`) to their name.

**Examples:**

Example 1 (unknown):
```unknown
### Arguments

| Argument   | Description                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEMPLATE` | Specify which template to generate (options: \<api\|app\|app-config\|component\|composable\|error\|layer\|layout\|middleware\|module\|page\|plugin\|server-middleware\|server-plugin\|server-route\|server-util>) |
| `NAME`     | Specify name of the generated file                                                                                                                                                                                |

### Options

| Option                             | Default | Description                              |
| ---------------------------------- | ------- | ---------------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory            |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level             |
| `--force`                          | `false` | Force override file if it already exists |

**Modifiers:**

Some templates support additional modifier flags to add a suffix (like `.client` or `.get`) to their name.
```

---

## onPrehydrate

**URL:** llms-txt#onprehydrate

**Contents:**
- Usage
- Type
- Parameters
- Return Values
- Example

::important
This composable is available in Nuxt v3.12+.
::

`onPrehydrate` is a composable lifecycle hook that allows you to run a callback on the client immediately before Nuxt hydrates the page.

::note
This is an advanced utility and should be used with care. For example, [`nuxt-time`](https://github.com/danielroe/nuxt-time/pull/251){rel="nofollow"} and [`@nuxtjs/color-mode`](https://github.com/nuxt-modules/color-mode/blob/main/src/script.js){rel="nofollow"} manipulate the DOM to avoid hydration mismatches.
::

Call `onPrehydrate` in the setup function of a Vue component (e.g., in `<script setup>`) or in a plugin. It only has an effect when called on the server and will not be included in your client build.

| Parameter  | Type                                   | Required | Description                                                                                                                                                                                                                                                                              |
| ---------- | -------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | `((el: HTMLElement) => void) | string` | Yes      | A function (or stringified function) to run before Nuxt hydrates. It will be stringified and inlined in the HTML. Should not have external dependencies or reference variables outside the callback. Runs before Nuxt runtime initializes, so it should not rely on Nuxt or Vue context. |
| `key`      | `string`                               | No       | (Advanced) A unique key to identify the prehydrate script, useful for advanced scenarios like multiple root nodes.                                                                                                                                                                       |

- Returns `undefined` when called with only a callback function.
- Returns a string (the prehydrate id) when called with a callback and a key, which can be used to set or access the `data-prehydrate-id` attribute for advanced use cases.

**Examples:**

Example 1 (unknown):
```unknown
## Parameters

| Parameter  | Type                                   | Required | Description                                                                                                                                                                                                                                                                              |
| ---------- | -------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | `((el: HTMLElement) => void) | string` | Yes      | A function (or stringified function) to run before Nuxt hydrates. It will be stringified and inlined in the HTML. Should not have external dependencies or reference variables outside the callback. Runs before Nuxt runtime initializes, so it should not rely on Nuxt or Vue context. |
| `key`      | `string`                               | No       | (Advanced) A unique key to identify the prehydrate script, useful for advanced scenarios like multiple root nodes.                                                                                                                                                                       |

## Return Values

- Returns `undefined` when called with only a callback function.
- Returns a string (the prehydrate id) when called with a callback and a key, which can be used to set or access the `data-prehydrate-id` attribute for advanced use cases.

## Example
```

---

## Monterail

**URL:** llms-txt#monterail

Monterail focuses on delivering innovative software to industry leaders. Since 2010, it has **leveraged the expertise of over 150 specialists** to engineer cutting-edge solutions for market leaders.

As a trusted Vue.js partner, our portfolio showcases diverse projects, highlighting our **commitment to technological excellence and innovative design**.

Our global clientele spans various industries, underscoring our versatility and the recognition we've received, including presence in the Financial Times 1000 and Deloitte's rankings.

Our remote-friendly team excels in communication and collaboration, ensuring seamless engagement across borders. We offer comprehensive tech consultations and business strategy evaluations, building enduring client relationships. Our approach values diversity and creativity, driving us to explore unique solutions that empower businesses.

---

## 7Span

**URL:** llms-txt#7span

At 7Span, we specialize in crafting innovative technology solutions for entrepreneurs and businesses committed to excellence. Since 2015, we have delivered a wide range of services, including custom web development, startup consulting, mobile app solutions, SaaS development, and UI/UX & branding, to enterprises, startups, and agencies.

With a robust team of over 230 professionals, we have consistently developed high-performance web apps, browser extensions, chat apps, real-time dashboards, and multi-tenant SaaS apps, particularly within the Nuxt ecosystem.

We pride ourselves on being one of the most process-driven companies in the industry. We adhere to stringent standards such as effective sprint management, follow strict security protocols, efficient git repo management, thorough code reviews and audits, CI/CD-based deployment, software testing, technical documentation, and comprehensive application performance monitoring.

Over the past decade, we have had the honor of developing cutting-edge solutions for globally renowned brands, high-growth startups, ambitious entrepreneurs, and Fortune 100 companies.

Our notable clients::br
Nestle, Dell, HP, Princeton University, Pfizer, Jio, ITC, T-Systems, Godrej, and Delhivery.

Let's connect to build your MVP, migrate your legacy software to Nuxt, upgrade to the latest Nuxt version, or scale your software to the enterprise level.

---

## Roadmap to v4

**URL:** llms-txt#roadmap-to-v4

**Contents:**
- Why Two Releases?
- What's Included?
- What About Nitro?
- What About Nuxt 3?
- What's Next

We originally planned Nuxt 4 for June 2024, but things don't always go according to plan. I think it's appropriate to take a different approach:

👉 &#x2A;*Nuxt 4 entered Release Candidate (RC) stage on July 8, 2025, with a stable release coming soon. Nuxt 5 will come later once Nitro v3 is ready.**

Honestly, in hindsight I think we should have shipped Nuxt v4 last year. It would have aligned better with our once-a-year plan for careful major releases.

On the other hand, it has allowed time for testing across countless projects, by opting in to Nuxt 4 breaking changes with a single flag. I think that we should go ahead and ship these changes as Nuxt v4 for two reasons:

1. **People are already using it**. I frequently hear of teams who are using `compatibilityVersion: 4` in production. This option was *intended* only for testing, but it has proven solid enough for production use. We want to make it official, and give these teams the protection of a stable release.
2. **It will improve the migration**. Having a two-stage migration from v3 -> v4, and then v4 -> v5 will make for a smoother migration. We don't yet have a final list of breaking changes for Nitro v3, and this means we can spend enough time to ensure that the Nitro upgrade is smooth, while not delaying adoption of the Nuxt changes we've planned for the last year.

What's more, going forward we're going to do our best to decouple Nuxt releases from our key dependencies, like Vite or Nitro.

Nuxt 4 includes all the features you've been testing with `compatibilityVersion: 4`:

- **🗂️ New Directory Structure** - code goes in `app/` for cleaner organization and better IDE performance
- **🔄 Improved Data Fetching** - smarter `useAsyncData` and `useFetch` with better caching and cleanup
- **🏷️ Consistent Component Names** - Vue DevTools and `<KeepAlive>` now see the same names as Nuxt's auto-imports
- **📄 Enhanced Head Management** - dropping deprecated features from Unhead v2 with better performance and tag optimization

... as well as many other improvements documented in the [upgrade guide](https://nuxt.com/docs/getting-started/upgrade). There are also a handful of further changes we will shipping, including:

- preparations for adopting the Vite Environment API (with a single dev server)
- improvements to type 'environment' handling (for server, client, and shared code)

**We're not delaying Nitro v3 adoption**. We aim for Nuxt 5 to arrive with Nitro v3 at the same time we originally planned, even if that's only a few months after the release of Nuxt v4.

Despite the delays over the past year, we've seen phenomenal progress on Nitro. As a whole team, we're very excited to unveil what we have planned in Nitro v3 and h3 v2.

While Nuxt 4 won't initially include these upgrades, releasing Nuxt v4 and Nitro v3 in parallel will mean we can test both Nuxt and Nitro more thoroughly across the ecosystem by the time Nuxt 5 arrives.

## What About Nuxt 3?

We'll provide ongoing maintenance and support for Nuxt 3 after the first stable release of Nuxt 4 — and continue supporting both Nuxt 3 and Nuxt 4 after Nuxt 5 has been released. We've intentionally chosen a slightly shorter timetable of *six months* support for each of these releases because we believe that it will be a straightforward upgrade.

(My main aim for the Nuxt 4 upgrade is to ensure that it is as smooth as possible.)

Nevertheless, I'll be closely monitoring to see how successfully and quickly the ecosystem migrates. If there are issues I will absolutely extend that six month ongoing maintenance window. We don't want to leave anyone behind.

For a while, this will mean active backports of features and bugfixes across three versions. But I think it's worth it. And we have — after all — been doing this for the last year in preparation for Nuxt 4.

|            |                                                   |
| ---------- | ------------------------------------------------- |
| **Nuxt 3** | Continues receiving updates until the end of 2025 |
| **Nuxt 4** | Supported until mid-2026 (estimated)              |
| **Nuxt 5** | Long-term support following our usual pattern     |

Nuxt v4 is now in &#x2A;*Release Candidate (RC)** stage! We'd love early adopters to test it. Please do report issues to Nuxt or any modules that you may be using.

::note
We are currently in the **release candidate stage**: no more breaking changes are planned — only bug fixes before the stable release.

Release stages for Nuxt 4:

- **Alpha**: experimental features and breaking changes
- **RC (now)**: stable feature set, final testing before release
::

Here's what you can expect over the next few weeks:

- We plan to open **upstream PRs for community modules** in the [nuxt/modules](https://github.com/nuxt/modules){rel="nofollow"} registry, and create a migration guide for module authors.
- We'll create a full **upgrade guide** for Nuxt 3 users, including a list of breaking changes and how to migrate. (The current [upgrade guide](https://nuxt.com/docs/getting-started/upgrade) explains how to enable compatibility mode, but there are some differences with Nuxt 4.)
- We'll **only release bugfixes for v3** this month, deferring backporting new features until after the release of v4.
- We'll &#x2A;*update the docs on [nuxt.com](https://nuxt.com)** to allow switching between `3.x`, `4.x` and (soon) `5.x` documentation.
- With the **release candidate now live**, we're focused exclusively on bug fixes. No new features or breaking changes are expected.
- Once v4 is released, we'll separate the `main` branch to `4.x` to adopt edge releases of `h3` and `nitro` and begin development of Nuxt 5.

::note
You can follow the progress of the remaining work by checking [these remaining tasks](https://github.com/nuxt/nuxt/issues/27027){rel="nofollow"} and [the Nuxt 4 milestone](https://github.com/nuxt/nuxt/milestone/8){rel="nofollow"} on GitHub.
::

I'm really excited with this timeline — and thank you for your patience and trust over the last year!

---

## onBeforeRouteUpdate

**URL:** llms-txt#onbeforerouteupdate

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
title: Vue Router Docs
to: https://router.vuejs.org/api/functions/onBeforeRouteUpdate.html
---
::

---

## Curotec

**URL:** llms-txt#curotec

**Contents:**
- Curotec Experience
- The Team

## Curotec Experience

Our experience extends from ground-up development using the Nuxt.js framework to side-by-side collaborations that make in-house teams more productive with Nuxt. Innovation doesn’t stop or start at a company’s size. That’s why our skilled Nuxt.js development team has helped a wide variety of businesses - from enterprises to digital-first startups - realize their vision with highly-usable, seamless, professionally-built applications.

Our team is equipped to take your ideas from concept to launch, pairing the powerful Nuxt.js framework with complementary technologies such as Vue.js, Laravel, Node.js, WordPress, and more as well as deep software planning and design experience to transform your vision into reality. But Curotec can do more than greenfield development, drawing on the comprehensive skill set of our teams and leaders to step in at any stage of development, from planning and design to long-term support.

Rounding out the team with digital strategy, UX, and DevOps, Curotec engineers are positioned to partner with you to create beautiful, functional, and purpose-built applications.

---

## Nuxt on the Edge

**URL:** llms-txt#nuxt-on-the-edge

**Contents:**
- Introduction
- The Challenge
- Pushing Full-stack Capabilities
- Conclusion

In September 2017, Cloudflare [introduced Cloudflare Workers](https://blog.cloudflare.com/introducing-cloudflare-workers/){rel="nofollow"}, giving the ability to run JavaScript on their [edge network](https://www.cloudflare.com/network/){rel="nofollow"}. This means your code will deploy on the entire edge network in over a hundred locations worldwide in about 30 seconds. This technology allows you to focus on writing your application close to your users, wherever they are in the world (\~50ms latency).

The worker's runtime is not the same as Node.js or the Browser, it executes the code using V8, the JavaScript engine developed by Google Chrome. Until now, what you could run on their platform were small scripts running on the edge before hitting your server to increase the performance or add some logic based on request headers, for example.

In November 2020, while working on Nuxt 3, **we made the bet to run Nuxt in-production on edge runtimes / V8 isolates**.

It unlocks the ability to server-render pages in \~50ms from all over the world when using a platform like CloudFlare Workers, without having to deal with servers, load balancers and caching, for about [$0.3 per million requests](https://developers.cloudflare.com/workers/platform/pricing/){rel="nofollow"}. As of today, new platforms are coming to let run apps on V8 isolates such as Deno Deploy.

::note
**2024 update:** I released [NuxtHub](https://hub.nuxt.com){rel="nofollow"} to let you build full-stack applications with Nuxt on the edge, on your Cloudflare account with zero configuration. It includes a database, blob storage, KV, remote storage and more.
::

In order to make Nuxt run in workers, we had to rewrite some parts of Nuxt to be environmentally agnostic (runs in Node.js, Browser or V8).

We started with our server and created [unjs/h3](http://github.com/unjs/h3){rel="nofollow"}: a minimal http framework built for high performance and portability. It replaces [Connect](https://github.com/senchalabs/connect){rel="nofollow"} we used in Nuxt 2 but has compatibility with it so you can keep using Connect/Express middleware. In the workers, for each incoming request, it starts Nuxt in production, sends the request to it and sends back the response.

In Nuxt 2, the duration to start the server in production in memory (also named cold start) was about \~300ms, because we had to load all the dependencies of your server and application in order to handle the request.

By working on h3, we decided to code-split each handler attached to the server and lazy-load them only when requested. When you start Nuxt 3, we only load h3 in memory and the corresponding handlers. When a request comes in, we load the handler corresponding to the route and execute it.

:video{controls poster="https://res.cloudinary.com/nuxt/video/upload/v1689236511/nuxt3/nuxt3-server-performance.jpg" src="https://res.cloudinary.com/nuxt/video/upload/v1689236511/nuxt3/nuxt3-server-performance.mp4"}

By adopting this approach, **we reduced the cold start from \~300ms to \~2ms**.

We had another challenge in order to run Nuxt on the edge: the production bundle size. This includes the server, Vue app and Node.js dependencies combined. Cloudflare workers currently have a limit of 1MB (free plan) and 5MB ($5 per month plan) for the worker size.

In order to achieve this, we created [unjs/nitro](https://nitro.unjs.io/){rel="nofollow"}, our server engine, when running the `nuxt build` command, it bundles your whole project and includes all dependencies into the final output. It uses [Rollup](https://rollupjs.org/){rel="nofollow"} and [vercel/nft](https://github.com/vercel/nft){rel="nofollow"} to trace only the code used by the `node_modules` to remove unnecessary code. &#x2A;*The total size of the generated output for a basic Nuxt 3 application is about 700kB gzip.**

Lastly, to provide the same developer experience between development (Node.js) and production on Cloudflare (Edge runtime), we created [unjs/unenv](https://github.com/unjs/unenv){rel="nofollow"}: a library to convert JavaScript code to run everywhere (platform agnostic) by mocking or adding polyfills for known dependencies.

**At Nuxt, we believe that you should have the freedom to choose the hosting provider that fits you best.**

This is why you can deploy a Nuxt application with edge-side rendering on:

- [NuxtHub](https://hub.nuxt.com){rel="nofollow"}
- [Cloudflare Page](https://nitro.unjs.io/deploy/providers/cloudflare#cloudflare-pages){rel="nofollow"}
- [Deno Deploy](https://nitro.unjs.io/deploy/providers/deno-deploy){rel="nofollow"}
- [Vercel Edge Functions](https://nitro.unjs.io/deploy/providers/vercel#vercel-edge-functions){rel="nofollow"} (using CloudFlare Workers under the hood)
- [Netlify Edge Functions](https://nitro.unjs.io/deploy/providers/netlify#netlify-edge-functions){rel="nofollow"} (using Deno under the hood)

We also support many other deployment providers, including [static hosting](https://nuxt.com/docs/getting-started/deployment#static-hosting) or [traditional Node.js serverless and server hosts](https://nuxt.com/docs/getting-started/deployment#nodejs-server).

## Pushing Full-stack Capabilities

Now that we have Nuxt running on edge runtime, we can do more than render a Vue application. Thanks to the [server directory](https://nuxt.com/docs/guide/directory-structure/server), creating an API route is a TypeScript file away.

To add the `/api/hello` route, create a `server/api/hello.ts` file:

You can now universally call this API in your pages and components:

One important thing to note when we created [useFetch](https://nuxt.com/docs/api/composables/use-fetch) and [$fetch](https://nuxt.com/docs/api/utils/dollarfetch) is that during server-side rendering, if you call your API routes, it will emulate the request and call the function code directly: **avoiding an HTTP request and reducing page’s rendering time**.

In terms of developer experience, you will notice that when creating server files, the Nuxt server keeps running without rebuilding the Vue app. &#x2A;*This is because Nuxt 3 supports Hot Module Replacement (HMR) when creating API and server routes.**

Furthermore, by leveraging Object Relational Mapping (ORM) like [drizzle-orm](https://orm.drizzle.team/){rel="nofollow"}, developers can connect Edge & Serverless databases such as [D1](https://developers.cloudflare.com/d1/){rel="nofollow"}, [Turso](https://turso.tech/){rel="nofollow"}, [Neon](https://neon.tech){rel="nofollow"}, [Planetscale](https://planetscale.com/){rel="nofollow"} and more.

I created [Atidone](https://todos.nuxt.dev/){rel="nofollow"}, an open source demo to showcase a full-stack application with authentication and a database running on the edge. The source code is available on GitHub under the MIT license at [atinux/atidone](https://github.com/atinux/atidone){rel="nofollow"}.

We are excited about edge-side rendering and what it unlocks. Our team at Nuxt can’t wait to see what you will build on top of this!

Feel free to join our [Discord server](https://discord.com/invite/nuxt){rel="nofollow"} or mention [@nuxt\_js](https://x.com/nuxt_js){rel="nofollow"} on Twitter to share your work.

**Examples:**

Example 1 (unknown):
```unknown
You can now universally call this API in your pages and components:
```

---

## Undefined

**URL:** llms-txt#undefined

Undefined is a london-based digital studio. We imagine, build & grow performant Websites & Digital Products. We’re a hands-on team of designers & developers that joins forces with forward-thinking startups & enterprises dedicated to their craft.

We believe in the power of collaboration, mixing your expertise in your industry with our love & knowledge for building great digital experiences.

We specialize in building custom web experiences, with our passion being building engaging & bespoke headless CMS setups. Being a partner with a range of great services (Vercel, Prismic, Storyblok, Shopify) gives us deep knowledge to pick the right fit for every project.

---

## ignore page inside ignore folder

**URL:** llms-txt#ignore-page-inside-ignore-folder

---

## WASM

**URL:** llms-txt#wasm

::sandbox
---
branch: main
dir: examples/experimental/wasm
file: app.vue
repo: nuxt/examples
---
::

---

## <Teleport>

**URL:** llms-txt#<teleport>

**Contents:**
- Body Teleport
- Client-side Teleport

::warning
The `to` target of [`<Teleport>`](https://vuejs.org/guide/built-ins/teleport.html){rel="nofollow"} expects a CSS selector string or an actual DOM node. Nuxt currently has SSR support for teleports to `#teleports` only, with client-side support for other targets using a `<ClientOnly>` wrapper.
::

## Client-side Teleport

::link-example{to="https://nuxt.com/docs/examples/advanced/teleport"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <button @click="open = true">
    Open Modal
  </button>
  <Teleport to="#teleports">
    <div
      v-if="open"
      class="modal"
    >
      <p>Hello from the modal!</p>
      <button @click="open = false">
        Close
      </button>
    </div>
  </Teleport>
</template>
```

Example 2 (vue):
```vue
<template>
  <ClientOnly>
    <Teleport to="#some-selector">
      <!-- content -->
    </Teleport>
  </ClientOnly>
</template>
```

---

## Lifecycle Hooks

**URL:** llms-txt#lifecycle-hooks

**Contents:**
- App Hooks (runtime)
- Nuxt Hooks (build time)
- Nitro App Hooks (runtime, server-side)

::read-more{to="https://nuxt.com/docs/guide/going-further/hooks"}
::

## App Hooks (runtime)

Check the [app source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts#L37){rel="nofollow"} for all available hooks.

| Hook                         | Arguments           | Environment     | Description                                                                                                                                                                                           |
| ---------------------------- | ------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app:created`                | `vueApp`            | Server & Client | Called when initial `vueApp` instance is created.                                                                                                                                                     |
| `app:error`                  | `err`               | Server & Client | Called when a fatal error occurs.                                                                                                                                                                     |
| `app:error:cleared`          | `{ redirect? }`     | Server & Client | Called when a fatal error occurs.                                                                                                                                                                     |
| `vue:setup`                  | -                   | Server & Client | Called when the setup of Nuxt root is initialized. This callback must be synchronous.                                                                                                                 |
| `vue:error`                  | `err, target, info` | Server & Client | Called when a vue error propagates to the root component. [Learn More](https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured){rel="nofollow"}.                                         |
| `app:rendered`               | `renderContext`     | Server          | Called when SSR rendering is done.                                                                                                                                                                    |
| `app:redirected`             | -                   | Server          | Called before SSR redirection.                                                                                                                                                                        |
| `app:beforeMount`            | `vueApp`            | Client          | Called before mounting the app, called only on client side.                                                                                                                                           |
| `app:mounted`                | `vueApp`            | Client          | Called when Vue app is initialized and mounted in browser.                                                                                                                                            |
| `app:suspense:resolve`       | `appComponent`      | Client          | On [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense){rel="nofollow"} resolved event.                                                                                               |
| `app:manifest:update`        | `{ id, timestamp }` | Client          | Called when there is a newer version of your app detected.                                                                                                                                            |
| `app:data:refresh`           | `keys?`             | Client          | Called when `refreshNuxtData` is called.                                                                                                                                                              |
| `link:prefetch`              | `to`                | Client          | Called when a `<NuxtLink>` is observed to be prefetched.                                                                                                                                              |
| `page:start`                 | `pageComponent?`    | Client          | Called on [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense){rel="nofollow"} inside of `NuxtPage` pending event.                                                                    |
| `page:finish`                | `pageComponent?`    | Client          | Called on [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense){rel="nofollow"} inside of `NuxtPage` resolved event.                                                                   |
| `page:loading:start`         | -                   | Client          | Called when the `setup()` of the new page is running.                                                                                                                                                 |
| `page:loading:end`           | -                   | Client          | Called after `page:finish`                                                                                                                                                                            |
| `page:transition:finish`     | `pageComponent?`    | Client          | After page transition [onAfterLeave](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks){rel="nofollow"} event.                                                                       |
| `dev:ssr-logs`               | `logs`              | Client          | Called with an array of server-side logs that have been passed to the client (if `features.devLogs` is enabled).                                                                                      |
| `page:view-transition:start` | `transition`        | Client          | Called after `document.startViewTransition` is called when [experimental viewTransition support is enabled](https://nuxt.com/docs/3.x/getting-started/transitions#view-transitions-api-experimental). |

## Nuxt Hooks (build time)

Check the [schema source code](https://github.com/nuxt/nuxt/blob/main/packages/schema/src/types/hooks.ts#L83){rel="nofollow"} for all available hooks.

| Hook                        | Arguments                                                | Description                                                                                                                                                                                                |
| --------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kit:compatibility`         | `compatibility, issues`                                  | Allows extending compatibility checks.                                                                                                                                                                     |
| `ready`                     | `nuxt`                                                   | Called after Nuxt initialization, when the Nuxt instance is ready to work.                                                                                                                                 |
| `close`                     | `nuxt`                                                   | Called when Nuxt instance is gracefully closing.                                                                                                                                                           |
| `restart`                   | `{ hard?: boolean }`                                     | To be called to restart the current Nuxt instance.                                                                                                                                                         |
| `modules:before`            | -                                                        | Called during Nuxt initialization, before installing user modules.                                                                                                                                         |
| `modules:done`              | -                                                        | Called during Nuxt initialization, after installing user modules.                                                                                                                                          |
| `app:resolve`               | `app`                                                    | Called after resolving the `app` instance.                                                                                                                                                                 |
| `app:templates`             | `app`                                                    | Called during `NuxtApp` generation, to allow customizing, modifying or adding new files to the build directory (either virtually or to written to `.nuxt`).                                                |
| `app:templatesGenerated`    | `app`                                                    | Called after templates are compiled into the [virtual file system](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt#virtual-file-system) (vfs).                                                    |
| `build:before`              | -                                                        | Called before Nuxt bundle builder.                                                                                                                                                                         |
| `build:done`                | -                                                        | Called after Nuxt bundle builder is complete.                                                                                                                                                              |
| `build:manifest`            | `manifest`                                               | Called during the manifest build by Vite and webpack. This allows customizing the manifest that Nitro will use to render `<script>` and `<link>` tags in the final HTML.                                   |
| `builder:generateApp`       | `options`                                                | Called before generating the app.                                                                                                                                                                          |
| `builder:watch`             | `event, path`                                            | Called at build time in development when the watcher spots a change to a file or directory in the project.                                                                                                 |
| `pages:extend`              | `pages`                                                  | Called after page routes are scanned from the file system.                                                                                                                                                 |
| `pages:resolved`            | `pages`                                                  | Called after page routes have been augmented with scanned metadata.                                                                                                                                        |
| `pages:routerOptions`       | `{ files: Array<{ path: string, optional?: boolean }> }` | Called when resolving `router.options` files. Later items in the array override earlier ones.                                                                                                              |
| `server:devHandler`         | `handler`                                                | Called when the dev middleware is being registered on the Nitro dev server.                                                                                                                                |
| `imports:sources`           | `presets`                                                | Called at setup allowing modules to extend sources.                                                                                                                                                        |
| `imports:extend`            | `imports`                                                | Called at setup allowing modules to extend imports.                                                                                                                                                        |
| `imports:context`           | `context`                                                | Called when the [unimport](https://github.com/unjs/unimport){rel="nofollow"} context is created.                                                                                                           |
| `imports:dirs`              | `dirs`                                                   | Allows extending import directories.                                                                                                                                                                       |
| `components:dirs`           | `dirs`                                                   | Called within `app:resolve` allowing to extend the directories that are scanned for auto-importable components.                                                                                            |
| `components:extend`         | `components`                                             | Allows extending new components.                                                                                                                                                                           |
| `nitro:config`              | `nitroConfig`                                            | Called before initializing Nitro, allowing customization of Nitro's configuration.                                                                                                                         |
| `nitro:init`                | `nitro`                                                  | Called after Nitro is initialized, which allows registering Nitro hooks and interacting directly with Nitro.                                                                                               |
| `nitro:build:before`        | `nitro`                                                  | Called before building the Nitro instance.                                                                                                                                                                 |
| `nitro:build:public-assets` | `nitro`                                                  | Called after copying public assets. Allows modifying public assets before Nitro server is built.                                                                                                           |
| `prerender:routes`          | `ctx`                                                    | Allows extending the routes to be pre-rendered.                                                                                                                                                            |
| `build:error`               | `error`                                                  | Called when an error occurs at build time.                                                                                                                                                                 |
| `prepare:types`             | `options`                                                | Called before `@nuxt/cli` writes `.nuxt/tsconfig.json` and `.nuxt/nuxt.d.ts`, allowing addition of custom references and declarations in `nuxt.d.ts`, or directly modifying the options in `tsconfig.json` |
| `listen`                    | `listenerServer, listener`                               | Called when the dev server is loading.                                                                                                                                                                     |
| `schema:extend`             | `schemas`                                                | Allows extending default schemas.                                                                                                                                                                          |
| `schema:resolved`           | `schema`                                                 | Allows extending resolved schema.                                                                                                                                                                          |
| `schema:beforeWrite`        | `schema`                                                 | Called before writing the given schema.                                                                                                                                                                    |
| `schema:written`            | -                                                        | Called after the schema is written.                                                                                                                                                                        |
| `vite:extend`               | `viteBuildContext`                                       | Allows extending Vite default context.                                                                                                                                                                     |
| `vite:extendConfig`         | `viteInlineConfig, env`                                  | Allows extending Vite default config. &#x2A;*Deprecated in Nuxt 5+.** In Nuxt 5, this operates on a shared configuration rather than separate client/server configs.                                       |
| `vite:configResolved`       | `viteInlineConfig, env`                                  | Allows reading the resolved Vite config. &#x2A;*Deprecated in Nuxt 5+.** In Nuxt 5, this operates on a shared configuration rather than separate client/server configs.                                    |
| `vite:serverCreated`        | `viteServer, env`                                        | Called when the Vite server is created.                                                                                                                                                                    |
| `vite:compiled`             | -                                                        | Called after Vite server is compiled.                                                                                                                                                                      |
| `webpack:config`            | `webpackConfigs`                                         | Called before configuring the webpack compiler.                                                                                                                                                            |
| `webpack:configResolved`    | `webpackConfigs`                                         | Allows reading the resolved webpack config.                                                                                                                                                                |
| `webpack:compile`           | `options`                                                | Called right before compilation.                                                                                                                                                                           |
| `webpack:compiled`          | `options`                                                | Called after resources are loaded.                                                                                                                                                                         |
| `webpack:change`            | `shortPath`                                              | Called on `change` on WebpackBar.                                                                                                                                                                          |
| `webpack:error`             | -                                                        | Called on `done` if has errors on WebpackBar.                                                                                                                                                              |
| `webpack:done`              | -                                                        | Called on `allDone` on WebpackBar.                                                                                                                                                                         |
| `webpack:progress`          | `statesArray`                                            | Called on `progress` on WebpackBar.                                                                                                                                                                        |

## Nitro App Hooks (runtime, server-side)

See [Nitro](https://nitro.build/guide/plugins#available-hooks){rel="nofollow"} for all available hooks.

| Hook              | Arguments                                  | Description                                 | Types                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev:ssr-logs`    | `{ path, logs }`                           | Server                                      | Called at the end of a request cycle with an array of server-side logs.                                                                                                                                                                                                                                                                                                                                                                                 |
| `render:response` | `response, { event }`                      | Called before sending the response.         | [response](https://github.com/nuxt/nuxt/blob/71ef8bd3ff207fd51c2ca18d5a8c7140476780c7/packages/nuxt/src/core/runtime/nitro/renderer.ts#L24){rel="nofollow"}, [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}                                                                                                                                                                         |
| `render:html`     | `html, { event }`                          | Called before constructing the HTML.        | [html](https://github.com/nuxt/nuxt/blob/71ef8bd3ff207fd51c2ca18d5a8c7140476780c7/packages/nuxt/src/core/runtime/nitro/renderer.ts#L15){rel="nofollow"}, [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}                                                                                                                                                                             |
| `render:island`   | `islandResponse, { event, islandContext }` | Called before constructing the island HTML. | [islandResponse](https://github.com/nuxt/nuxt/blob/e50cabfed1984c341af0d0c056a325a8aec26980/packages/nuxt/src/core/runtime/nitro/renderer.ts#L28){rel="nofollow"}, [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}, [islandContext](https://github.com/nuxt/nuxt/blob/e50cabfed1984c341af0d0c056a325a8aec26980/packages/nuxt/src/core/runtime/nitro/renderer.ts#L38){rel="nofollow"} |
| `close`           | -                                          | Called when Nitro is closed.                | -                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `error`           | `error, { event? }`                        | Called when an error occurs.                | [error](https://github.com/nitrojs/nitro/blob/d20ffcbd16fc4003b774445e1a01e698c2bb078a/src/types/runtime/nitro.ts#L48){rel="nofollow"}, [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}                                                                                                                                                                                              |
| `request`         | `event`                                    | Called when a request is received.          | [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}                                                                                                                                                                                                                                                                                                                                      |
| `beforeResponse`  | `event, { body }`                          | Called before sending the response.         | [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}, unknown                                                                                                                                                                                                                                                                                                                             |
| `afterResponse`   | `event, { body }`                          | Called after sending the response.          | [event](https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38){rel="nofollow"}, unknown                                                                                                                                                                                                                                                                                                                             |

---

## Run all tests

**URL:** llms-txt#run-all-tests

---

## Generates `layers/subscribe/nuxt.config.ts`

**URL:** llms-txt#generates-`layers/subscribe/nuxt.config.ts`

npx nuxt add layer subscribe
```

---

## AWS Amplify

**URL:** llms-txt#aws-amplify

**Contents:**
- Setup
- Learn more

::tip
**Zero Configuration ✨**

Integration with AWS Amplify is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

1. Login to the [AWS Amplify Hosting Console](https://console.aws.amazon.com/amplify/?trk=01c5a476-5997-4e6a-88b9-fd0a0a5bbe34\&sc_channel=el){rel="nofollow"}
2. Click on "Get Started" > Amplify Hosting (Host your web app)
3. Select and authorize access to your Git repository provider and select the main branch
4. Choose a name for your app, make sure build settings are auto-detected and optionally set requirement environment variables under the advanced section
5. Optionally, select Enable SSR logging to enable server-side logging to your Amazon CloudWatch account
6. Confirm configuration and click on "Save and Deploy"

::read-more{target="_blank" to="https://www.youtube.com/watch?v=CAk5_XGkOG4"}
Watch an Amplify Hosting tutorial with Nuxt
::

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/aws-amplify
---
Head over **Nitro documentation** to learn more about the aws-amplify deployment preset.
::

---

## The Coding Machine

**URL:** llms-txt#the-coding-machine

The Coding Machine has been specialized in tailor-made development around Open Source technologies for more than 15 years.

We like to work and partner with companies of all sizes, from entrepreneurs to multinationals, in all sectors. Technical expertise, challenge (and curiosity) is what drives us.

---

## .env

**URL:** llms-txt#.env

**Contents:**
- Dev, Build and Generate Time
- Custom File
- Production
- Production Preview

::important
This file should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/guide/directory-structure/gitignore) file to avoid pushing secrets to your repository.
::

## Dev, Build and Generate Time

Nuxt CLI has built-in [dotenv](https://github.com/motdotla/dotenv){rel="nofollow"} support in development mode and when running [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build) and [`nuxt generate`](https://nuxt.com/docs/3.x/api/commands/generate).

In addition to any process environment variables, if you have a `.env` file in your project root directory, it will be automatically loaded **at dev, build and generate time**. Any environment variables set there will be accessible within your `nuxt.config` file and modules.

::note
Note that removing a variable from `.env` or removing the `.env` file entirely will not unset values that have already been set.
::

If you want to use a different file - for example, to use `.env.local` or `.env.production` - you can do so by passing the `--dotenv` flag when using the Nuxt CLI.

When updating `.env` in development mode, the Nuxt instance is automatically restarted to apply new values to the `process.env`.

::important
In your application code, you should use [Runtime Config](https://nuxt.com/docs/3.x/guide/going-further/runtime-config) instead of plain env variables.
::

**After your server is built**, you are responsible for setting environment variables when you run the server.

Your `.env` files will not be read at this point. How you do this is different for every environment.

This design decision was made to ensure compatibility across various deployment environments, some of which may not have a traditional file system available, such as serverless platforms or edge networks like Cloudflare Workers.

Since `.env` files are not used in production, you must explicitly set environment variables using the tools and methods provided by your hosting environment. Here are some common approaches:

- You can pass the environment variables as arguments using the terminal: :br`$ DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs`
- You can set environment variables in shell configuration files like `.bashrc` or `.profile`.
- Many cloud service providers, such as Vercel, Netlify, and AWS, provide interfaces for setting environment variables via their dashboards, CLI tools or configuration files.

::important
`runtimeConfig` [won't pick up environment variables that don't start with `NUXT_` in production] (<https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables>{rel="nofollow"}).
::

## Production Preview

For local production preview purpose, we recommend using [`nuxt preview`](https://nuxt.com/docs/3.x/api/commands/preview) since using this command, the `.env` file will be loaded into `process.env` for convenience. Note that this command requires dependencies to be installed in the package directory.

Or you could pass the environment variables as arguments using the terminal. For example, on Linux or macOS:

Note that for a purely static site, it is not possible to set runtime configuration config after your project is prerendered.

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

::note
If you want to use environment variables set at build time but do not care about updating these down the line (or only need to update them reactively *within* your app) then `appConfig` may be a better choice. You can define `appConfig` both within your `nuxt.config` (using environment variables) and also within an `~/app.config.ts` file in your project.

:::read-more{to="https://nuxt.com/docs/guide/directory-structure/app-config"}
  :::
::

**Examples:**

Example 1 (unknown):
```unknown
::note
Note that removing a variable from `.env` or removing the `.env` file entirely will not unset values that have already been set.
::

## Custom File

If you want to use a different file - for example, to use `.env.local` or `.env.production` - you can do so by passing the `--dotenv` flag when using the Nuxt CLI.
```

Example 2 (unknown):
```unknown
When updating `.env` in development mode, the Nuxt instance is automatically restarted to apply new values to the `process.env`.

::important
In your application code, you should use [Runtime Config](https://nuxt.com/docs/3.x/guide/going-further/runtime-config) instead of plain env variables.
::

## Production

**After your server is built**, you are responsible for setting environment variables when you run the server.

Your `.env` files will not be read at this point. How you do this is different for every environment.

This design decision was made to ensure compatibility across various deployment environments, some of which may not have a traditional file system available, such as serverless platforms or edge networks like Cloudflare Workers.

Since `.env` files are not used in production, you must explicitly set environment variables using the tools and methods provided by your hosting environment. Here are some common approaches:

- You can pass the environment variables as arguments using the terminal: :br`$ DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs`
- You can set environment variables in shell configuration files like `.bashrc` or `.profile`.
- Many cloud service providers, such as Vercel, Netlify, and AWS, provide interfaces for setting environment variables via their dashboards, CLI tools or configuration files.

::important
`runtimeConfig` [won't pick up environment variables that don't start with `NUXT_` in production] (<https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables>{rel="nofollow"}).
::

## Production Preview

For local production preview purpose, we recommend using [`nuxt preview`](https://nuxt.com/docs/3.x/api/commands/preview) since using this command, the `.env` file will be loaded into `process.env` for convenience. Note that this command requires dependencies to be installed in the package directory.

Or you could pass the environment variables as arguments using the terminal. For example, on Linux or macOS:
```

---

## useRouter

**URL:** llms-txt#userouter

**Contents:**
- Basic Manipulation
- Based on History API
- Navigation Guards
- Promise and Error Handling
- Universal Router Instance

If you only need the router instance within your template, use `$router`:

If you have a `pages/` directory, `useRouter` is identical in behavior to the one provided by `vue-router`.

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
to: https://router.vuejs.org/api/interfaces/Router.html#Properties-currentRoute
---
Read `vue-router` documentation about the `Router` interface.
::

## Basic Manipulation

- [`addRoute()`](https://router.vuejs.org/api/interfaces/Router.html#addRoute){rel="nofollow"}: Add a new route to the router instance. `parentName` can be provided to add new route as the child of an existing route.
- [`removeRoute()`](https://router.vuejs.org/api/interfaces/Router.html#removeRoute){rel="nofollow"}: Remove an existing route by its name.
- [`getRoutes()`](https://router.vuejs.org/api/interfaces/Router.html#getRoutes){rel="nofollow"}: Get a full list of all the route records.
- [`hasRoute()`](https://router.vuejs.org/api/interfaces/Router.html#hasRoute){rel="nofollow"}: Checks if a route with a given name exists.
- [`resolve()`](https://router.vuejs.org/api/interfaces/Router.html#resolve){rel="nofollow"}: Returns the normalized version of a route location. Also includes an `href` property that includes any existing base.

::note
`router.addRoute()` adds route details into an array of routes and it is useful while building [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) while `router.push()` on the other hand, triggers a new navigation immediately and it is useful in pages, Vue components and composable.
::

## Based on History API

- [`back()`](https://router.vuejs.org/api/interfaces/Router.html#back){rel="nofollow"}: Go back in history if possible, same as `router.go(-1)`.
- [`forward()`](https://router.vuejs.org/api/interfaces/Router.html#forward){rel="nofollow"}: Go forward in history if possible, same as `router.go(1)`.
- [`go()`](https://router.vuejs.org/api/interfaces/Router.html#go){rel="nofollow"}: Move forward or backward through the history without the hierarchical restrictions enforced in `router.back()` and `router.forward()`.
- [`push()`](https://router.vuejs.org/api/interfaces/Router.html#push){rel="nofollow"}: Programmatically navigate to a new URL by pushing an entry in the history stack. &#x2A;*It is recommended to use [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to) instead.**
- [`replace()`](https://router.vuejs.org/api/interfaces/Router.html#replace){rel="nofollow"}: Programmatically navigate to a new URL by replacing the current entry in the routes history stack. &#x2A;*It is recommended to use [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to) instead.**

::read-more
---
icon: i-simple-icons-mdnwebdocs
target: _blank
to: https://developer.mozilla.org/en-US/docs/Web/API/History
---
Read more about the browser's History API.
::

`useRouter` composable provides `afterEach`, `beforeEach` and `beforeResolve` helper methods that acts as navigation guards.

However, Nuxt has a concept of **route middleware** that simplifies the implementation of navigation guards and provides a better developer experience.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

## Promise and Error Handling

- [`isReady()`](https://router.vuejs.org/api/interfaces/Router.html#isReady){rel="nofollow"}: Returns a Promise that resolves when the router has completed the initial navigation.
- [`onError`](https://router.vuejs.org/api/interfaces/Router.html#onError){rel="nofollow"}: Adds an error handler that is called every time a non caught error happens during navigation.

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
title: Vue Router Docs
to: https://router.vuejs.org/api/interfaces/Router.html#Methods
---
::

## Universal Router Instance

If you do not have a `pages/` folder, then [`useRouter`](https://nuxt.com/docs/3.x/api/composables/use-router) will return a universal router instance with similar helper methods, but be aware that not all features may be supported or behave in exactly the same way as with `vue-router`.

**Examples:**

Example 1 (unknown):
```unknown
If you only need the router instance within your template, use `$router`:
```

Example 2 (unknown):
```unknown
If you have a `pages/` directory, `useRouter` is identical in behavior to the one provided by `vue-router`.

::read-more
---
icon: i-simple-icons-vuedotjs
target: _blank
to: https://router.vuejs.org/api/interfaces/Router.html#Properties-currentRoute
---
Read `vue-router` documentation about the `Router` interface.
::

## Basic Manipulation

- [`addRoute()`](https://router.vuejs.org/api/interfaces/Router.html#addRoute){rel="nofollow"}: Add a new route to the router instance. `parentName` can be provided to add new route as the child of an existing route.
- [`removeRoute()`](https://router.vuejs.org/api/interfaces/Router.html#removeRoute){rel="nofollow"}: Remove an existing route by its name.
- [`getRoutes()`](https://router.vuejs.org/api/interfaces/Router.html#getRoutes){rel="nofollow"}: Get a full list of all the route records.
- [`hasRoute()`](https://router.vuejs.org/api/interfaces/Router.html#hasRoute){rel="nofollow"}: Checks if a route with a given name exists.
- [`resolve()`](https://router.vuejs.org/api/interfaces/Router.html#resolve){rel="nofollow"}: Returns the normalized version of a route location. Also includes an `href` property that includes any existing base.
```

Example 3 (unknown):
```unknown
::note
`router.addRoute()` adds route details into an array of routes and it is useful while building [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) while `router.push()` on the other hand, triggers a new navigation immediately and it is useful in pages, Vue components and composable.
::

## Based on History API

- [`back()`](https://router.vuejs.org/api/interfaces/Router.html#back){rel="nofollow"}: Go back in history if possible, same as `router.go(-1)`.
- [`forward()`](https://router.vuejs.org/api/interfaces/Router.html#forward){rel="nofollow"}: Go forward in history if possible, same as `router.go(1)`.
- [`go()`](https://router.vuejs.org/api/interfaces/Router.html#go){rel="nofollow"}: Move forward or backward through the history without the hierarchical restrictions enforced in `router.back()` and `router.forward()`.
- [`push()`](https://router.vuejs.org/api/interfaces/Router.html#push){rel="nofollow"}: Programmatically navigate to a new URL by pushing an entry in the history stack. &#x2A;*It is recommended to use [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to) instead.**
- [`replace()`](https://router.vuejs.org/api/interfaces/Router.html#replace){rel="nofollow"}: Programmatically navigate to a new URL by replacing the current entry in the routes history stack. &#x2A;*It is recommended to use [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to) instead.**
```

---

## Nuxt 3.4

**URL:** llms-txt#nuxt-3.4

**Contents:**
- 🪄 View Transitions API Support
- ✨ Payload Enhancements
- 🎁 Object-syntax Nuxt plugins
- 🛠️ Easier Devtools Configuration
- 📚 Layers Improvements
- 🧸 Better Context Transforms
- ♻️ Ecosystem Updates
- 🚨 'Breaking fixes'
- ✅ Upgrading

## 🪄 View Transitions API Support

::article-video{cloudinary="v1681229056/nuxt3/nuxt-view-transitions_cruvma"}
::

You can check a demo on <https://nuxt-view-transitions.surge.sh>{rel="nofollow"} and the [source on StackBlitz](https://stackblitz.com/edit/nuxt-view-transitions){rel="nofollow"}.

You may have noticed that Chromium-based browsers now ship a new web platform API: the [**View Transitions API**](https://developer.chrome.com/docs/web-platform/view-transitions/){rel="nofollow"}. This is an exciting new ability for native browser transitions which (among other things) have the ability to transition between unrelated elements on different pages.

Nuxt now ships with an experimental implementation, which will be under active development during the v3.4 release cycle. See the known issues in the [linked PR](https://github.com/nuxt/nuxt/pull/20092){rel="nofollow"}.

## ✨ Payload Enhancements

We've merged a &#x2A;*[significant change to how Nuxt handles payloads](https://github.com/nuxt/nuxt/pull/19205){rel="nofollow"}** (under an experimental flag). Payloads are used to send data from the server to the client when doing server-side rendering and avoid double data-fetching during the hydration phase.

With this new option enabled, this now means that **various rich JS types are supported out-of-the-box**: regular expressions, dates, Map and Set and BigInt as well as NuxtError - and Vue-specific objects like `ref`, `reactive`, `shallowRef` and `shallowReactive`.

You can find [an example](https://github.com/nuxt/nuxt/blob/main/test/fixtures/basic/pages/json-payload.vue){rel="nofollow"} in our test suite.

This is all possible due to [Rich-Harris/devalue#58](https://github.com/Rich-Harris/devalue/pull/58){rel="nofollow"}. For a long time, Nuxt has been using our own fork of devalue owing to issues serialising Errors and other non-POJO objects, but we now have transitioned back to the original.

You can even register your own custom types with a new object-syntax Nuxt plugin:

You can read more about how this works [here](https://github.com/rich-harris/devalue#custom-types){rel="nofollow"}.

**Note**: this only affects payloads of the Nuxt app, that is, data stored within `useState`, returned from `useAsyncData` or manually injected via `nuxtApp.payload`. It does not affect data fetched from Nitro server routes via `$fetch` or `useFetch` although this is one area I am keen to explore further.

Preliminary testing shows a significant speed-up: **25% faster in total server response time** for a very minimal app with a large JSON payload, but I'd urge you to run your own tests and share the results with us.

As mentioned, we're merging this behind a flag so we can test this broadly and gather feedback on the new approach. The most significant potential change is that the payload is now no longer available on `window.__NUXT__` immediately. Instead, we now need to initialise the Nuxt app to parse the payload so any code that accesses `__NUXT__` will need to be run in a plugin or later in the Nuxt app lifecycle. Please feel free to raise an issue if you foresee or encounter issues in your projects.

## 🎁 Object-syntax Nuxt plugins

We now support object-syntax Nuxt plugins for better control over plugin *order* and easier registration of hooks.

In future we plan to enable build optimizations based on the metadata you pass in your Nuxt plugins.

## 🛠️ Easier Devtools Configuration

It's even easier to enable Nuxt DevTools in your project: just set `devtools: true` in your `nuxt.config.ts` file to enable devtools.

If it's not already installed, Nuxt will prompt to install it locally. This means you no longer need to have Nuxt DevTools enabled globally.

**Note**: the DevTools is still experimental and under active development, so do be prepared for occasional unexpected behaviour, and please report issues directly to <https://github.com/nuxt/devtools>{rel="nofollow"} 🙏

## 📚 Layers Improvements

We now support [transforming `~`/`~~`/`@`/`@@` aliases within layers](https://github.com/nuxt/nuxt/pull/19986){rel="nofollow"}, meaning you now no longer need to use relative paths when importing within layers.

This should mean it is much easier to use a 'normal' Nuxt project as a [layer](https://nuxt.com/docs/getting-started/layers#layers){rel="nofollow"} without needing to specially write it as one.

## 🧸 Better Context Transforms

We [now transform certain keys](https://github.com/nuxt/nuxt/pull/20182){rel="nofollow"} of `definePageMeta` and `defineNuxtComponent` which means you should have fewer issues with a missing Nuxt instance. This includes support accessing the Nuxt instance after an `await` within `asyncData` and `setup` functions for those still using the Options API. And you no longer need to wrap `middleware` and `validate` with `defineNuxtRouteMiddleware` when using async functions.

## ♻️ Ecosystem Updates

As usual, this release will pull in upstream improvements, including the new [Consola v3](https://github.com/unjs/consola){rel="nofollow"} and [Nitropack v2.3.3](https://github.com/unjs/nitro){rel="nofollow"} (a new minor is expected shortly).

## 🚨 'Breaking fixes'

We've also taken the opportunity to do some cleanup in this minor release.

1. Previously it was possible to pass the `x-nuxt-no-ssr` header (undocumented) to force SPA rendering. We've now disabled this behaviour by default but you can get it back by setting `experimental.respectNoSSRHeader` to true. Alternatively, you can set `event.context.nuxt.noSSR` on the server to force SPA rendering.
2. We've [removed the (deprecated) `#head` alias](https://github.com/nuxt/nuxt/pull/20111){rel="nofollow"} and also disabled the [polyfill for `@vueuse/head` behaviour](https://github.com/nuxt/nuxt/pull/20131){rel="nofollow"} by default. (It can still be enabled with `experimental.polyfillVueUseHead`.)
3. We've [removed the (deprecated) `experimental.viteNode` option](https://github.com/nuxt/nuxt/pull/20112){rel="nofollow"}. It can be configured instead with `vite.devBundler`.
4. We've [deprecated accessing public runtime config without the `public` key](https://github.com/nuxt/nuxt/pull/20082){rel="nofollow"}. This was an undocument compatibility measure with Nuxt 2 and we plan to remove it entirely in v3.5.
5. To fix a bug with our vue-router integration, we now generate a slightly different path matching syntax. If you were relying on the exact path generated, have a look at <https://github.com/nuxt/nuxt/pull/19902>{rel="nofollow"} for more information.

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

**Examples:**

Example 1 (ts):
```ts
export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  }
})
```

Example 2 (unknown):
```unknown
With this new option enabled, this now means that **various rich JS types are supported out-of-the-box**: regular expressions, dates, Map and Set and BigInt as well as NuxtError - and Vue-specific objects like `ref`, `reactive`, `shallowRef` and `shallowReactive`.

You can find [an example](https://github.com/nuxt/nuxt/blob/main/test/fixtures/basic/pages/json-payload.vue){rel="nofollow"} in our test suite.

This is all possible due to [Rich-Harris/devalue#58](https://github.com/Rich-Harris/devalue/pull/58){rel="nofollow"}. For a long time, Nuxt has been using our own fork of devalue owing to issues serialising Errors and other non-POJO objects, but we now have transitioned back to the original.

You can even register your own custom types with a new object-syntax Nuxt plugin:
```

Example 3 (unknown):
```unknown
You can read more about how this works [here](https://github.com/rich-harris/devalue#custom-types){rel="nofollow"}.

**Note**: this only affects payloads of the Nuxt app, that is, data stored within `useState`, returned from `useAsyncData` or manually injected via `nuxtApp.payload`. It does not affect data fetched from Nitro server routes via `$fetch` or `useFetch` although this is one area I am keen to explore further.

Preliminary testing shows a significant speed-up: **25% faster in total server response time** for a very minimal app with a large JSON payload, but I'd urge you to run your own tests and share the results with us.

As mentioned, we're merging this behind a flag so we can test this broadly and gather feedback on the new approach. The most significant potential change is that the payload is now no longer available on `window.__NUXT__` immediately. Instead, we now need to initialise the Nuxt app to parse the payload so any code that accesses `__NUXT__` will need to be run in a plugin or later in the Nuxt app lifecycle. Please feel free to raise an issue if you foresee or encounter issues in your projects.

## 🎁 Object-syntax Nuxt plugins

We now support object-syntax Nuxt plugins for better control over plugin *order* and easier registration of hooks.
```

Example 4 (unknown):
```unknown
In future we plan to enable build optimizations based on the metadata you pass in your Nuxt plugins.

## 🛠️ Easier Devtools Configuration

It's even easier to enable Nuxt DevTools in your project: just set `devtools: true` in your `nuxt.config.ts` file to enable devtools.
```

---

## Overview

**URL:** llms-txt#overview

**Contents:**
- Next Steps

There are significant changes when migrating a Nuxt 2 app to Nuxt 3, although you can expect migration to become more straightforward as we move toward a stable release.

::note
This migration guide is under progress to align with the development of Nuxt 3.
::

Some of these significant changes include:

1. Moving from Vue 2 to Vue 3, including defaulting to the Composition API and script setup.
2. Moving from webpack 4 and Babel to Vite or webpack 5 and esbuild.
3. Moving from a runtime Nuxt dependency to a minimal, standalone server compiled with nitropack.

::tip
If you need to remain on Nuxt 2, but want to benefit from Nuxt 3 features in Nuxt 2, you can alternatively check out [how to get started with Bridge](https://nuxt.com/docs/3.x/bridge/overview).
::

- Learn about differences in [configuration](https://nuxt.com/docs/3.x/migration/configuration)

---

## Nuxt DevTools v1.0

**URL:** llms-txt#nuxt-devtools-v1.0

**Contents:**
- The Reasons We Built Nuxt DevTools
  - The Problem
- Features
  - In App DevTools
  - Pages View
  - Components View
  - Composables View
  - Modules Management
  - Static Assets Management
  - Runtime Configs Editor

We are thrilled to announce the release of [Nuxt DevTools v1.0](https://github.com/nuxt/devtools){rel="nofollow"}! 🎉

::tip
Since this release, Nuxt DevTools is now enabled with [Nuxt v3.8](https://nuxt.com/blog/v3-8) and onwards by default. Generally available to all Nuxt projects!
::

You can start playing with it by upgrading to the latest Nuxt, and press `Shift + Option + D` (macOS) or `Shift + Alt + D` (Windows) in your browser to open the DevTools. By default the floating panel is hidden to reduce the distraction. You can enable it inside Nuxt DevTools settings page, or explicitly enabled it in your config:

## The Reasons We Built Nuxt DevTools

Over the recent years, there has been an increasing focus on Developer Experience (DX). Tools and frameworks have been striving to improve the DX. Along the way, Nuxt introduced many innovative features and conventions to make your day-to-day development easier and more efficient.

For example, [file-based routing](https://nuxt.com/docs/guide/directory-structure/pages), [layout system](https://nuxt.com/docs/guide/directory-structure/layouts), [plugins](https://nuxt.com/docs/guide/directory-structure/plugins), [route middleware](https://nuxt.com/docs/guide/directory-structure/middleware), [composables auto-import](https://nuxt.com/docs/guide/concepts/auto-imports), [file-based server APIs](https://nitro.unjs.io/guide/routing){rel="nofollow"}, [powerful module system](https://nuxt.com/modules) and many more.

![List of Nuxt features that enhance developer experience](https://nuxt.com/assets/blog/devtools/slide-dx.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Nuxt is capable of creating various range of applications, from simple hobby projects to large scale applications, from simple client-rendered single-page applications to hybrid rendered sites with serverless functions on edge, etc. We provide those features and conventions to make it easier to support all those use cases and scenarios.

Out of all these benefits of having a powerful framework, we have to made some trade-offs. Sometimes, we have to sacrifice a bit of the transparency of the underlying implementation to make things easier to use.

!["Transparency" as the trade offs of having "Conventions", "Abstractions", "Sensible Defaults" and "Normalizations"](https://nuxt.com/assets/blog/devtools/slide-transparency.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Conventional abstractions are great things to transfer implementation complexity and make things easier to get more focus when building. On the other hand, they can also add extra burden for users to learn and understand what's going on under the hood. Leading also to implicitness, like where a auto-imported component is from, or how many modules is using a certain component, etc. It can also make things hard to debug.

Trade-offs are inevitable. Generally we believe those trade-offs are worth it, as they would help organizing users' codebase and make it easier to maintain in the long run. In the meantime, we also want to compensate the transparency we lost by providing a tool to help you understand what's going on under the hood and make the learning curve smoother.

That's where Nuxt DevTools comes in! We [first introduced it](https://nuxt.com/blog/introducing-nuxt-devtools) in February 2023 to experiment with the idea. After a few months of exploration and development, from surprisingly positive feedbacks from the community, this idea has been proven to be useful and we decided to make it a core part of your Nuxt development experience.

[Nuxt DevTools](https://github.com/nuxt/devtools){rel="nofollow"} is a set of visual tools to help you understand your Nuxt app and improve the developer experience even further. It's created to provide better transparency between Nuxt and your app, find performance bottlenecks and help you manage your app and configuration.

From the overview, Nuxt DevTools is an in-app DevTools that lives alongside your app. It will show up as a floating panel that you can click to open.

::article-video{cloudinary="v1700132388/devtools/0-intro_ilgwel"}
::

We believe this is a better approach than the traditional browser extension DevTools, as it's:

- **Works across all browsers**, and even on mobile devices! - The capability of browser extension DevTools are limited by the APIs each browsers provides, and also maintain multiple extensions would require a lot of effort. This approach would allow us to focus more on the functionality and features, while having it accessible to users on any browsers and devices.
- **Build tools integrations** - Tranditionally browser extension DevTools are only able to access the runtime context of your app and have no access to the build tools. Having the DevTools comes with Nuxt, allows us to communicate with the build tools and provide much more insights and features.
- **Avoid layout shifts** - Having the DevTools as a floating panel would avoid the layout shifts when toggling the DevTools.

To help improving the implicitness of file-based routing, we introduced the Pages View in DevTools. It lists all the pages that have been registered in your app, that you can easily test and navigate between them.

::article-video{cloudinary="v1700132393/devtools/1-pages_kkbecx"}
::

The Components tab shows all the components you are using in your app and where they are from. You can also search for them and go to the source code.

It also provides a graph view that show the relationship between components. You can filter the components to see the dependencies of a specific component. This could help to identify unintended dependencies and improve the performance and bundle size of pages.

::article-video{cloudinary="v1700132398/devtools/2-components_paj0uv"}
::

Composables view shows all the auto-imported composables registered to Nuxt. You can see which files are importing them, and where they are from. Some entries can also provide short descriptions and documentation links.

::article-video{cloudinary="v1700132395/devtools/3-imports_qhahdf"}
::

### Modules Management

The Modules tab shows all the modules that are registered in your app, with the links to their documentations and repositories.

We also provide the ability for you to search for and explore the modules from the community. And install them with a single click!

::article-video{cloudinary="v1700132389/devtools/4-modules_v5ha5u"}
::

### Static Assets Management

The Assets tab shows all the static assets under your `public` directory. It supports previewing images, videos, fonts, PDFs, and other files, that you can easily copy the URL or code snippet to use in your app. You may also drag and drop files to upload them directly from Nuxt DevTools.

::article-video{cloudinary="v1700132394/devtools/5-assets_mpzyrs"}
::

### Runtime Configs Editor

The Runtime Configs tab shows the runtime configs of your app and provides an interactive editor for you to play with different values.

::article-video{cloudinary="v1700132393/devtools/6-runtime-configs_fzlrik"}
::

Similar to the Runtime Configs Editor, the Payload Editor allows you to edit the payload from composables like [`useState`](https://nuxt.com/docs/api/composables/use-state) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch) to see what have been passed from server to client on server-side rendering.

::article-video{cloudinary="v1700132389/devtools/7-payload_nfzobp"}
::

### Open Graph Preview

[Open Graph](https://ogp.me/){rel="nofollow"} plays an important role in social media sharing as well as [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization){rel="nofollow"}. In the traditional workflow, we usually need to first deploy our app to check if the Open Graph is working as expected on various social media platforms. With the Open Graph Preview, you can now preview the Open Graph in DevTools and update it live with an instant feedback loop.

We also help you check the Open Graph tags in your app and provide suggestions to improve them. You can copy the generated code snippet and paste it to your routes to fix them in one go.

::article-video{cloudinary="v1700132390/devtools/8-open-graph_hjawen"}
::

Plugins Overview list all the [plugins](https://nuxt.com/docs/guide/directory-structure/plugins) registered in your app. As the plugins are executed in the runtime before your app renders, it's important to keep plugins performant and avoid blocking the rendering. We provide the execution time of each plugin and the total time of all plugins, so you can better identify the potential performance bottlenecks.

::article-video{cloudinary="v1700132390/devtools/9-plugins_bhcobr"}
::

Timeline is a tool for you to check when and how each composable been called. Different from browser DevTools' performance tools, this tab only check the high-level composables combining with other events like route navigration, which is closer to day-to-day use. It also records the arguments and return values of each call, so you can better understand what's going on under the hood.

::warning
As of November 2023, the Timeline is still an experimental feature that requires manually opt-in.
::

::article-video{cloudinary="v1700132392/devtools/10-timeline_zeei5s"}
::

### Production Build Analyzer

While Nuxt DevTools is mostly focused on providing development tools, sometimes we might want to know how chunks are composed in production. The Build Analyzer allows you to fire up a production build and analyze the chunks and modules at any time and see how they are bundled. You can also do multiple builds on different branches to compare how your refactoring/changes affect the bundle size, etc.

::article-video{cloudinary="v1700132394/devtools/11-build-analyze_f3wx6q"}
::

### Server API Playground

Nuxt provides a very convenient way to create server API functions with the [server routes](https://nuxt.com/docs/guide/directory-structure/server#server-routes). Since in Nuxt we have that information, we are able to provide a playground for you to test and debug your server API functions, similar to tools like Postman. We list all the server APIs available in your app automatically. And we execute those functions **within the same context of your app**, so you don't need to manually set them up in external tools. As always, we also have code snippets for you to copy and paste into your app.

::article-video{cloudinary="v1700132388/devtools/12-server-api_owjyjg"}
::

### Embedded Full-feature VS Code

Thanks to the flexibility of our DevTools approach, we can leverage the power of the modern web to embed a full-featured VS Code right in the DevTools. In that VS Code, you can sign in to your account and synchronize your settings, and all the extensions just work as your normal VS Code client. This allows you to quickly edit your code without leaving your browser.

::article-video{cloudinary="v1700132395/devtools/13-vscode_je5x0m"}
::

### Component Inspector

The Inspector allows you to inspect the DOM tree and see which component is rendering it. Click to go to your editor for the specific line. Making it much easier to make changes without the requirement of understanding the project structure thoroughly.

::article-video{cloudinary="v1700132391/devtools/0-inspector_fuxmr7"}
::

In the recent releases, we introduced a split screen feature, that allows you to open two tabs side-by-side.

::article-video{cloudinary="v1700132391/devtools/0-split-view_mdeiie"}
::

In DevTools setting, we provide a few options for you to customize the tabs you want to see, and the layout of the DevTools.

::article-video{cloudinary="v1700132391/devtools/0-settings_weflmu"}
::

In Nuxt, we value the ecosystem a lot. Similar to how Nuxt modules enhance Nuxt core, we also designed Nuxt DevTools to be highly extensible, allowing modules to provide additional features and integrations.

### Community Modules

We are proud to see the community has already started to build modules for Nuxt DevTools. Here are some of them:

[Vitest module](https://nuxt.com/modules/vitest){rel="nofollow"} provides Vitest UI for tests running with the same pipeline as your Nuxt app. Made it easier to debug your tests alongside your app.

::article-video{cloudinary="v1700132393/devtools/99-vitest_wwikpc"}
::

[VueUse module](https://nuxt.com/modules/vueuse) provides a search page for available composables and see their documentation.

::article-video{cloudinary="v1700132390/devtools/99-vueuse_simsfj"}
::

[SiteMap module](https://nuxt.com/modules/sitemap) provides an interactive editor for you to manage your sitemap.

::article-video{cloudinary="v1700132390/devtools/99-sitemap_xpsfek"}
::

[TailwindCSS module](https://nuxt.com/modules/tailwindcss) provides the Tailwind Config Viewer for you to check what's available based on your config.

::article-video{cloudinary="v1700132388/devtools/99-tailwind_dgiodc"}
::

[UnoCSS module](https://nuxt.com/modules/unocss) provides an interactive inspector to see how each module contributes to the final CSS.

::article-video{cloudinary="v1700132394/devtools/99-unocss_xvii5x"}
::

[Storybook module](https://nuxt.com/modules/storybook) provides a Storybook UI for your components.

::article-video{cloudinary="v1700132388/devtools/99-storybook_ifxt4r"}
::

And they are just a few of them! We are looking forward to see more modules coming to Nuxt DevTools!

### Projects Inspired by Nuxt DevTools

In the meantime, we are also flattered that other frameworks are starting to build their own DevTools inspired by Nuxt DevTools:

- [`webfansplz/vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools){rel="nofollow"} - A Nuxt DevTools port to support DevTools for Vite + Vue 3 apps.
- [`pheno-agency/vite-plugin-devtools`](https://github.com/pheno-agency/vite-plugin-devtools){rel="nofollow"} - An experiment on building framework-agnostic DevTools for Vite.
- [Modern.js DevTools](https://github.com/Asuka109/modern.js/tree/dev/modernjs-devtools/packages/devtools/plugin){rel="nofollow"} - In App DevTools for Modern.js
- [Qwik DevTools](https://github.com/QwikDev/devtools){rel="nofollow"} - DevTools for Qwik

We are working closely with the maintainers of those projects to see how we can bring the experience of DevTools to the next level.

Nuxt DevTools just reached v1.0, but t doesn't mean we are done. There are still a lot of things we want to explore and improve. Here are some of the ideas we are considering:

- Nuxt Accessibility Integration - We are building an a11y integration for Nuxt ([#23255](https://github.com/nuxt/nuxt/issues/23255){rel="nofollow"}). We'll build a dedicated view in Nuxt DevTools for you to check the accessibility hints interactively.
- Vue DevTools Integration - We are working with the Vue team to bring the Vue DevTools experience to a shared tool that works for both browser extensions and in-app DevTools like `vite-plugin-vue-devtools` and Nuxt DevTools.
- [Let us know your ideas/suggestions!](https://github.com/nuxt/devtools/discussions/29){rel="nofollow"}

We are excited to see how Nuxt DevTools can help you build better apps and improve your developer experience. Going forward, we are imagining something bigger than Nuxt DevTools itself. We believe that having such framework-specific DevTools is the way onwards to provide even better developer experience. We also see there are many parts of such tools can actually be shared and reused across tools. We came up with the idea of the DevTools Kit.

DevTools Kit is an idea of the universal protocol that is still in the early brainstorming phase. We imagine that in the best world, each feature of the DevTools should be **composable, extensible, and collaborative**. Meta-frameworks could build their own features for their specific needs, while the common web-related tools could be shared and collaborated on between different frameworks.

![DevTools Kit](https://nuxt.com/assets/blog/devtools/slide-devtools-kit.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Imagine we could have all these features, each as a standalone package. We could have general web-related tools like SEO, Accessibility, PWA, Static Assets, etc. Then low-level build tools related, like Vite build analyzer, Vite Inspector, or Webpack visualizer, etc. And finally, we could have framework and meta-framework specific tools like Vue Components view, or Nuxt Server API Playground, etc.

![Nuxt DevTools](https://nuxt.com/assets/blog/devtools/slide-nuxt-devtools.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

![Nuxt DevTools](https://nuxt.com/assets/blog/devtools/slide-vue-devtools.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

At that time, Vue DevTools would be a composition of common web features and Vue-specific features. And Nuxt DevTools would essentially be a composition of the features above, inherit all features from Vue DevTools, and add Nuxt specific features on top of it.

![Your DevTools](https://nuxt.com/assets/blog/devtools/slide-your-devtools.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

It would even be possible to compose your own DevTools as you like.

That said, we are still thinking about and discussing the details of the DevTools Kit. Stay tuned for more updates!

We hope you enjoy the new Nuxt DevTools experience! We are looking forward to seeing how it can help you build better apps and improve your developer experience. If you have any ideas or suggestions, feel free to let us know in the [Ideas & Suggestions](https://github.com/nuxt/devtools/discussions/29){rel="nofollow"} discussion.

Thank you for your support and happy hacking! 🚀

---

## defineLazyHydrationComponent

**URL:** llms-txt#definelazyhydrationcomponent

**Contents:**
- Usage
  - Visibility Strategy
  - Idle Strategy
  - Interaction Strategy
  - Media Query Strategy
  - Time Strategy
  - If Strategy
  - Never Hydrate
  - Listening to Hydration Events
- Parameters

`defineLazyHydrationComponent` is a compiler macro that helps you create a component with a specific lazy hydration strategy. Lazy hydration defers hydration until components become visible or until the browser has completed more critical tasks. This can significantly reduce the initial performance cost, especially for non-essential components.

### Visibility Strategy

Hydrates the component when it becomes visible in the viewport.

The `hydrateOnVisible` prop is optional. You can pass an object to customize the behavior of the `IntersectionObserver` under the hood.

::read-more
---
title: IntersectionObserver options
to: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
---
Read more about the options for `hydrate-on-visible`.
::

::note
Under the hood, this uses Vue's built-in [`hydrateOnVisible` strategy](https://vuejs.org/guide/components/async.html#hydrate-on-visible){rel="nofollow"}.
::

Hydrates the component when the browser is idle. This is suitable if you need the component to load as soon as possible, but not block the critical rendering path.

The `hydrateOnIdle` prop is optional. You can pass a positive number to specify the maximum timeout.

Idle strategy is for components that can be hydrated when the browser is idle.

::note
Under the hood, this uses Vue's built-in [`hydrateOnIdle` strategy](https://vuejs.org/guide/components/async.html#hydrate-on-idle){rel="nofollow"}.
::

### Interaction Strategy

Hydrates the component after a specified interaction (e.g., click, mouseover).

The `hydrateOnInteraction` prop is optional. If you do not pass an event or a list of events, it defaults to hydrating on `pointerenter`, `click`, and `focus`.

::note
Under the hood, this uses Vue's built-in [`hydrateOnInteraction` strategy](https://vuejs.org/guide/components/async.html#hydrate-on-interaction){rel="nofollow"}.
::

### Media Query Strategy

Hydrates the component when the window matches a media query.

::note
Under the hood, this uses Vue's built-in [`hydrateOnMediaQuery` strategy](https://vuejs.org/guide/components/async.html#hydrate-on-media-query){rel="nofollow"}.
::

Hydrates the component after a specified delay (in milliseconds).

Time strategy is for components that can wait a specific amount of time.

Hydrates the component based on a boolean condition.

If strategy is best for components that might not always need to be hydrated.

Never hydrates the component.

### Listening to Hydration Events

All delayed hydration components emit a `@hydrated` event when they are hydrated.

::warning
To ensure that the compiler correctly recognizes this macro, avoid using external variables. The following approach will prevent the macro from being properly recognized:

- **Type**: `'visible' | 'idle' | 'interaction' | 'mediaQuery' | 'if' | 'time' | 'never'`
- **Required**: `true`

| Strategy      | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `visible`     | Hydrates when the component becomes visible in the viewport. |
| `idle`        | Hydrates when the browser is idle or after a delay.          |
| `interaction` | Hydrates upon user interaction (e.g., click, hover).         |
| `mediaQuery`  | Hydrates when the specified media query condition is met.    |
| `if`          | Hydrates when a specified boolean condition is met.          |
| `time`        | Hydrates after a specified time delay.                       |
| `never`       | Prevents Vue from hydrating the component.                   |

- **Type**: `() => Promise<Component>`
- **Required**: `true`

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the element(s) is 100px away from entering the viewport.
    -->
    <LazyHydrationMyComponent :hydrate-on-visible="{ rootMargin: '100px' }" />
  </div>
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'idle',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!-- Hydration will be triggered when the browser is idle or after 2000ms. -->
    <LazyHydrationMyComponent :hydrate-on-idle="2000" />
  </div>
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'interaction',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the element(s) is hovered over by the pointer.
    -->
    <LazyHydrationMyComponent hydrate-on-interaction="mouseover" />
  </div>
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'mediaQuery',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the window width is greater than or equal to 768px.
    -->
    <LazyHydrationMyComponent hydrate-on-media-query="(min-width: 768px)" />
  </div>
</template>
```

---

## Locale

**URL:** llms-txt#locale

::callout{icon="i-ph-info-duotone"}
You can right-click to "View Page Source" and see that Nuxt renders the correct date in SSR based on the visitor's locale.
::

::sandbox
---
branch: main
dir: examples/advanced/locale
file: app.vue
repo: nuxt/examples
---
::

---

## Examples

**URL:** llms-txt#examples

**Contents:**
- Accessing Nuxt Vite Config

## Accessing Nuxt Vite Config

If you are building an integration that needs access to the runtime Vite or webpack config that Nuxt uses, it is possible to extract this using Kit utilities.

Some examples of projects doing this already:

- [histoire](https://github.com/histoire-dev/histoire/blob/main/packages/histoire-plugin-nuxt/src/index.ts){rel="nofollow"}
- [nuxt-vitest](https://github.com/danielroe/nuxt-vitest/blob/main/packages/nuxt-vitest/src/config.ts){rel="nofollow"}
- [@storybook-vue/nuxt](https://github.com/storybook-vue/storybook-nuxt/blob/main/packages/storybook-nuxt/src/preset.ts){rel="nofollow"}

Here is a brief example of how you might access the Vite config from a project; you could implement a similar approach to get the webpack configuration.

**Examples:**

Example 1 (js):
```js
import { buildNuxt, loadNuxt } from '@nuxt/kit'

// https://github.com/nuxt/nuxt/issues/14534
async function getViteConfig () {
  const nuxt = await loadNuxt({ cwd: process.cwd(), dev: false, overrides: { ssr: false } })
  return new Promise((resolve, reject) => {
    nuxt.hook('vite:extend', (config) => {
      resolve(config)
      throw new Error('_stop_')
    })
    buildNuxt(nuxt).catch((err) => {
      if (!err.toString().includes('_stop_')) {
        reject(err)
      }
    })
  }).finally(() => nuxt.close())
}

const viteConfig = await getViteConfig()
console.log(viteConfig)
```

---

## 64 Robots

**URL:** llms-txt#64-robots

64 Robots is a software agency that specializes in custom software development using a powerful tech stack, consisting of Laravel, Vue.js, Nuxt.js, AWS, and Figma. Founded in 2016 and based in Baltimore, Maryland, our primary focus is on building highly-scalable, accessibility-focused, secure applications.

We believe that accessibility is a fundamental aspect of web application development. We prioritize accessibility in everything we do, from design to development to testing. We create accessibility-first web applications that are designed to meet the accessibility requirements of the Americans with Disabilities Act (ADA).

At 64 Robots, security is a critical aspect of web application development, and we take it seriously. We follow strict security protocols and employ a range of security testing techniques to identify and address potential vulnerabilities. We conduct a thorough risk assessment at the beginning of the development process to identify potential security risks and develop a plan to address them.

We pride ourselves on building partnerships with our clients and providing full transparency at each stage of every project lifecycle.

---

## Context

**URL:** llms-txt#context

**Contents:**
- `useNuxt`
  - Usage
  - Type
  - Return Value
  - Examples
- `tryUseNuxt`
  - Usage
  - Type
  - Return Value
  - Examples

Nuxt modules allow you to enhance Nuxt's capabilities. They offer a structured way to keep your code organized and modular. If you're looking to break down your module into smaller components, Nuxt offers the `useNuxt` and `tryUseNuxt` functions. These functions enable you to conveniently access the Nuxt instance from the context without having to pass it as an argument.

::note
When you're working with the `setup` function in Nuxt modules, Nuxt is already provided as the second argument. This means you can access it directly without needing to call `useNuxt()`.
::

Get the Nuxt instance from the context. It will throw an error if Nuxt is not available.

The `useNuxt` function returns the Nuxt instance, which contains all the options and methods available in Nuxt.

| Property   | Type                                                                     | Description                                                                                               |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `options`  | `NuxtOptions`                                                            | The resolved Nuxt configuration.                                                                          |
| `hooks`    | `Hookable<NuxtHooks>`                                                    | The Nuxt hook system. Allows registering and listening to lifecycle events.                               |
| `hook`     | `(name: string, (...args: any[]) => Promise<void> | void) => () => void` | Shortcut for `nuxt.hooks.hook`. Registers a single callback for a specific lifecycle hook.                |
| `callHook` | `(name: string, ...args: any[]) => Promise<any>`                         | Shortcut for `nuxt.hooks.callHook`. Triggers a lifecycle hook manually and runs all registered callbacks. |
| `addHooks` | `(configHooks: NestedHooks) => () => void`                               | Shortcut for `nuxt.hooks.addHooks`. Registers multiple hooks at once.                                     |

Get the Nuxt instance from the context. It will return `null` if Nuxt is not available.

The `tryUseNuxt` function returns the Nuxt instance if available, or `null` if Nuxt is not available.

The Nuxt instance as described in the `useNuxt` section.

**Examples:**

Example 1 (ts):
```ts
import { useNuxt } from '@nuxt/kit'

const setupSomeFeature = () => {
  const nuxt = useNuxt()

  // You can now use the nuxt instance
  console.log(nuxt.options)
}
```

Example 2 (unknown):
```unknown
### Return Value

The `useNuxt` function returns the Nuxt instance, which contains all the options and methods available in Nuxt.

| Property   | Type                                                                     | Description                                                                                               |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `options`  | `NuxtOptions`                                                            | The resolved Nuxt configuration.                                                                          |
| `hooks`    | `Hookable<NuxtHooks>`                                                    | The Nuxt hook system. Allows registering and listening to lifecycle events.                               |
| `hook`     | `(name: string, (...args: any[]) => Promise<void> | void) => () => void` | Shortcut for `nuxt.hooks.hook`. Registers a single callback for a specific lifecycle hook.                |
| `callHook` | `(name: string, ...args: any[]) => Promise<any>`                         | Shortcut for `nuxt.hooks.callHook`. Triggers a lifecycle hook manually and runs all registered callbacks. |
| `addHooks` | `(configHooks: NestedHooks) => () => void`                               | Shortcut for `nuxt.hooks.addHooks`. Registers multiple hooks at once.                                     |

### Examples

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

## `tryUseNuxt`

Get the Nuxt instance from the context. It will return `null` if Nuxt is not available.

### Usage
```

---

## Getting Help

**URL:** llms-txt#getting-help

**Contents:**
- "I can't figure out how to (...)."
- "Could there be a bug?"
- "I need professional help"

At some point, you may find that there's an issue you need some help with.

But don't worry! We're a friendly community of developers and we'd love to help.

::card-group
  :::card
  ---
  icon: i-simple-icons-discord
  target: _blank
  title: Discord
  to: https://go.nuxt.com/discord
  ---
  Get real-time help, exchange with the core team and the community, and stay updated on the latest Nuxt news.
  :::

:::card
  ---
  icon: i-simple-icons-nuxt
  target: _blank
  title: Nuxters
  to: https://nuxters.nuxt.com
  ---
  Connect with other Nuxt enthusiasts.
  :::
::

## "I can't figure out how to (...)."

You've read through these docs and you think it should be possible, but it's not clear how. The best thing is to [open a GitHub Discussion](https://github.com/nuxt/nuxt/discussions){rel="nofollow"}.

Please don't feel embarrassed about asking a question that you think is easy - we've all been there! ❤️

Everyone you'll encounter is helping out because they care, not because they are paid to do so. The kindest thing to do is make it easy for them to help you. Here are some ideas:

- *Explain what your objective is, not just the problem you're facing.* "I need to ensure my form inputs are accessible, so I'm trying to get the ids to match between server and client."
- *Make sure you've first read the docs and used your favorite search engine*. Let people know by saying something like "I've Googled for 'nuxt script setup' but I couldn't find code examples anywhere."
- *Explain what you've tried.* Tell people the kind of solutions you've experimented with, and why. Often this can make people's advice more relevant to your situation.
- *Share your code.* People probably won't be able to help if they just see an error message or a screenshot - but that all changes if you share your code in a copy/pasteable format - preferably in the form of a minimal reproduction like a CodeSandbox.

And finally, just ask the question! There's no need to [ask permission to ask a question](https://dontasktoask.com){rel="nofollow"} or [wait for someone to reply to your 'hello'](https://www.nohello.com){rel="nofollow"}. If you do, you might not get a response because people are waiting for the whole question before engaging.

## "Could there be a bug?"

Something isn't working the way that the docs say that it should. You're not sure if it's a bug. You've searched through the [open issues](https://github.com/nuxt/nuxt/issues){rel="nofollow"} and [discussions](https://github.com/nuxt/nuxt/discussions){rel="nofollow"} but you can't find anything. (if there is a closed issue, please create a new one)

We recommend taking a look at [how to report bugs](https://nuxt.com/docs/3.x/community/reporting-bugs). Nuxt is still in active development, and every issue helps make it better.

## "I need professional help"

If the community couldn't provide the help you need in the time-frame you have, NuxtLabs offers professional support with the [Nuxt Experts](https://nuxt.com/enterprise/support){rel="nofollow"}.

The objective of the Nuxt Expert is to provide support to the Vue ecosystem, while also creating freelance opportunities for those contributing to open-source solutions, thus helping to maintain the sustainability of the ecosystem.

The Nuxt experts are Vue, Nuxt and Vite chosen contributors providing professional support and consulting services.

---
