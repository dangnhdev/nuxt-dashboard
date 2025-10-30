# Nuxt - Getting Started

**Pages:** 5

---

## nuxt upgrade

**URL:** llms-txt#nuxt-upgrade

**Contents:**
- Arguments
- Options

The `upgrade` command upgrades Nuxt to the latest version.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                                                        | Default  | Description                                                                      |
| ------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                                           |          | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>`                            |          | Specify build-time log level                                                     |
| `--dedupe`                                                    |          | Dedupe dependencies after upgrading                                              |
| `-f, --force`                                                 |          | Force upgrade to recreate lockfile and node\_modules                             |
| `-ch, --channel=<stable|nightly|v3|v4|v4-nightly|v3-nightly>` | `stable` | Specify a channel to install from (default: stable)                              |

---

## Installation

**URL:** llms-txt#installation

**Contents:**
- Play Online
- New Project
- Development Server

If you just want to play around with Nuxt in your browser without setting up a project, you can use one of our online sandboxes:

::card-group
  :::card
  ---
  icon: i-simple-icons-stackblitz
  target: _blank
  title: Open on StackBlitz
  to: https://nuxt.new/s/v4
  ---
  :::

:::card
  ---
  icon: i-simple-icons-codesandbox
  target: _blank
  title: Open on CodeSandbox
  to: https://nuxt.new/c/v4
  ---
  :::
::

Or follow the steps below to set up a new Nuxt project on your computer.

- **Node.js** - [`20.x`](https://nodejs.org/en){rel="nofollow"} or newer (but we recommend the [active LTS release](https://github.com/nodejs/release#release-schedule){rel="nofollow"})
- **Text editor** - There is no IDE requirement, but we recommend [Visual Studio Code](https://code.visualstudio.com/){rel="nofollow"} with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar){rel="nofollow"} (previously known as Volar) or [WebStorm](https://www.jetbrains.com/webstorm/){rel="nofollow"}, which, along with [other JetBrains IDEs](https://www.jetbrains.com/ides/){rel="nofollow"}, offers great Nuxt support right out-of-the-box.
- **Terminal** - In order to run Nuxt commands

::note
Additional notes for an optimal setup:

- **Node.js**: Make sure to use an even numbered version (20, 22, etc.)
- **Nuxtr**: Install the community-developed [Nuxtr extension](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode){rel="nofollow"}
- **WSL**: If you are using Windows and experience slow HMR, you may want to try using [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/install){rel="nofollow"} which may solve some performance issues.
- **Windows slow DNS resolution** - instead of using `localhost:3000` for local dev server on Windows, use `127.0.0.1` for much faster loading experience on browsers.
::

Open a terminal (if you're using [Visual Studio Code](https://code.visualstudio.com){rel="nofollow"}, you can open an [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal){rel="nofollow"}) and use the following command to create a new starter project:

::code-group{sync="pm"}

::tip
Alternatively, you can find other starters or themes by opening [nuxt.new](https://nuxt.new){rel="nofollow"} and following the instructions there.
::

Open your project folder in Visual Studio Code:

Or change directory into your new project from your terminal:

## Development Server

Now you'll be able to start your Nuxt app in development mode:

::code-group{sync="pm"}

```bash [bun]
bun run dev -o

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

```

---

## Upgrade Guide

**URL:** llms-txt#upgrade-guide

**Contents:**
- Upgrading Nuxt
  - Latest release
  - Nightly Release Channel
- Testing Nuxt 4
  - Opting in to Nuxt 4
  - Migrating Using Codemods

To upgrade Nuxt to the [latest release](https://github.com/nuxt/nuxt/releases){rel="nofollow"}, use the `nuxt upgrade` command.

::code-group{sync="pm"}

### Nightly Release Channel

To use the latest Nuxt build and test features before their release, read about the [nightly release channel](https://nuxt.com/docs/3.x/guide/going-further/nightly-release-channel) guide.

::warning
The nightly release channel `latest` tag is currently tracking the Nuxt v4 branch, meaning that it is particularly likely to have breaking changes right now — be careful! You can opt in to the 3.x branch nightly releases with `"nuxt": "npm:nuxt-nightly@3x"`.
::

Nuxt 4 is **scheduled for release in Q2 2025**. It will include all the features currently available through `compatibilityVersion: 4`.

Until the release, it is possible to test many of Nuxt 4's breaking changes from Nuxt version 3.12+.

::video-accordion
---
title: Watch a video from Alexander Lichter showing how to opt in to Nuxt 4's
  breaking changes already
video-id: r4wFKlcJK6c
---
::

### Opting in to Nuxt 4

First, upgrade Nuxt to the [latest release](https://github.com/nuxt/nuxt/releases){rel="nofollow"}.

Then you can set your `compatibilityVersion` to match Nuxt 4 behavior:

::note
For now, you need to define the compatibility version in each layer that opts into Nuxt 4 behavior. This will not be required after Nuxt 4 is released.
::

When you set your `compatibilityVersion` to `4`, defaults throughout your Nuxt configuration will change to opt in to Nuxt v4 behavior, but you can granularly re-enable Nuxt v3 behavior when testing, following the commented out lines above. Please file issues if so, so that we can address them in Nuxt or in the ecosystem.

Breaking or significant changes will be noted here along with migration steps for backward/forward compatibility.

::note
This section is subject to change until the final release, so please check back here regularly if you are testing Nuxt 4 using `compatibilityVersion: 4`.
::

### Migrating Using Codemods

To facilitate the upgrade process, we have collaborated with the [Codemod](https://github.com/codemod-com/codemod){rel="nofollow"} team to automate many migration steps with some open-source codemods.

::note
If you encounter any issues, please report them to the Codemod team with `npx codemod feedback` 🙏
::

For a complete list of Nuxt 4 codemods, detailed information on each, their source, and various ways to run them, visit the [Codemod Registry](https://go.codemod.com/codemod-registry){rel="nofollow"}.

You can run all the codemods mentioned in this guide using the following `codemod` recipe:

::code-group
```bash [npm]

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

### Nightly Release Channel

To use the latest Nuxt build and test features before their release, read about the [nightly release channel](https://nuxt.com/docs/3.x/guide/going-further/nightly-release-channel) guide.

::warning
The nightly release channel `latest` tag is currently tracking the Nuxt v4 branch, meaning that it is particularly likely to have breaking changes right now — be careful! You can opt in to the 3.x branch nightly releases with `"nuxt": "npm:nuxt-nightly@3x"`.
::

## Testing Nuxt 4

Nuxt 4 is **scheduled for release in Q2 2025**. It will include all the features currently available through `compatibilityVersion: 4`.

Until the release, it is possible to test many of Nuxt 4's breaking changes from Nuxt version 3.12+.

::video-accordion
---
title: Watch a video from Alexander Lichter showing how to opt in to Nuxt 4's
  breaking changes already
video-id: r4wFKlcJK6c
---
::

### Opting in to Nuxt 4

First, upgrade Nuxt to the [latest release](https://github.com/nuxt/nuxt/releases){rel="nofollow"}.

Then you can set your `compatibilityVersion` to match Nuxt 4 behavior:

::code-collapse
```

---

## Introduction

**URL:** llms-txt#introduction

**Contents:**
- Automation and Conventions
- Server-Side Rendering
  - Server engine
  - Production-ready
  - Modular
  - Architecture

Nuxt is a free and [open-source framework](https://github.com/nuxt/nuxt){rel="nofollow"} with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with [Vue.js](https://vuejs.org){rel="nofollow"}.

We made everything so you can start writing `.vue` files from the beginning while enjoying hot module replacement in development and a performant application in production with server-side rendering by default.

Nuxt has no vendor lock-in, allowing you to deploy your application [**everywhere, even on the edge**](https://nuxt.com/blog/nuxt-on-the-edge).

::tip
If you want to play around with Nuxt in your browser, you can [try it out in one of our online sandboxes](https://nuxt.com/docs/3.x/getting-started/installation#play-online).
::

## Automation and Conventions

Nuxt uses conventions and an opinionated directory structure to automate repetitive tasks and allow developers to focus on pushing features. The configuration file can still customize and override its default behaviors.

- **File-based routing:** define routes based on the structure of your [`pages/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages). This can make it easier to organize your application and avoid the need for manual route configuration.
- **Code splitting:** Nuxt automatically splits your code into smaller chunks, which can help reduce the initial load time of your application.
- **Server-side rendering out of the box:** Nuxt comes with built-in SSR capabilities, so you don't have to set up a separate server yourself.
- **Auto-imports:** write Vue composables and components in their respective directories and use them without having to import them with the benefits of tree-shaking and optimized JS bundles.
- **Data-fetching utilities:** Nuxt provides composables to handle SSR-compatible data fetching as well as different strategies.
- **Zero-config TypeScript support:** write type-safe code without having to learn TypeScript with our auto-generated types and `tsconfig.json`.
- **Configured build tools:** we use [Vite](https://vite.dev){rel="nofollow"} by default to support hot module replacement (HMR) in development and bundling your code for production with best-practices baked-in.

Nuxt takes care of these and provides both frontend and backend functionality so you can focus on what matters: **creating your web application**.

## Server-Side Rendering

Nuxt comes with built-in server-side rendering (SSR) capabilities by default, without having to configure a server yourself, which has many benefits for web applications:

- **Faster initial page load time:** Nuxt sends a fully rendered HTML page to the browser, which can be displayed immediately. This can provide a faster perceived page load time and a better user experience (UX), especially on slower networks or devices.
- **Improved SEO:** search engines can better index SSR pages because the HTML content is available immediately, rather than requiring JavaScript to render the content on the client-side.
- **Better performance on low-powered devices:** it reduces the amount of JavaScript that needs to be downloaded and executed on the client-side, which can be beneficial for low-powered devices that may struggle with processing heavy JavaScript applications.
- **Better accessibility:** the content is immediately available on the initial page load, improving accessibility for users who rely on screen readers or other assistive technologies.
- **Easier caching:** pages can be cached on the server-side, which can further improve performance by reducing the amount of time it takes to generate and send the content to the client.

Overall, server-side rendering can provide a faster and more efficient user experience, as well as improve search engine optimization and accessibility.

As Nuxt is a versatile framework, it gives you the possibility to statically render your whole application to a static hosting with `nuxt generate`,
disable SSR globally with the `ssr: false` option or leverage hybrid rendering by setting up the `routeRules` option.

::read-more
---
title: Nuxt rendering modes
to: https://nuxt.com/docs/guide/concepts/rendering
---
::

The Nuxt server engine [Nitro](https://nitro.build/){rel="nofollow"} unlocks new full-stack capabilities.

In development, it uses Rollup and Node.js workers for your server code and context isolation. It also generates your server API by reading files in `server/api/` and server middleware from `server/middleware/`.

In production, Nitro builds your app and server into one universal `.output` directory. This output is light: minified and removed from any Node.js modules (except polyfills). You can deploy this output on any system supporting JavaScript, from Node.js, Serverless, Workers, Edge-side rendering or purely static.

::read-more
---
title: Nuxt server engine
to: https://nuxt.com/docs/guide/concepts/server-engine
---
::

A Nuxt application can be deployed on a Node or Deno server, pre-rendered to be hosted in static environments, or deployed to serverless and edge providers.

::read-more
---
title: Deployment section
to: https://nuxt.com/docs/getting-started/deployment
---
::

A module system allows you to extend Nuxt with custom features and integrations with third-party services.

::read-more
---
title: Nuxt Modules Concept
to: https://nuxt.com/docs/guide/concepts/modules
---
::

Nuxt is composed of different [core packages](https://github.com/nuxt/nuxt/tree/main/packages){rel="nofollow"}:

- Core engine: [nuxt](https://github.com/nuxt/nuxt/tree/main/packages/nuxt){rel="nofollow"}
- Bundlers: [@nuxt/vite-builder](https://github.com/nuxt/nuxt/tree/main/packages/vite){rel="nofollow"}, [@nuxt/rspack-builder](https://github.com/nuxt/nuxt/tree/main/packages/rspack){rel="nofollow"} and [@nuxt/webpack-builder](https://github.com/nuxt/nuxt/tree/main/packages/webpack){rel="nofollow"}
- Command line interface: [@nuxt/cli](https://github.com/nuxt/cli){rel="nofollow"}
- Server engine: [nitro](https://github.com/nitrojs/nitro){rel="nofollow"}
- Development kit: [@nuxt/kit](https://github.com/nuxt/nuxt/tree/main/packages/kit){rel="nofollow"}

We recommend reading each concept to have a full vision of Nuxt capabilities and the scope of each package.

---

## Hello World

**URL:** llms-txt#hello-world

::read-more{to="https://nuxt.com/docs/getting-started/introduction"}
::

::sandbox
---
branch: main
dir: examples/hello-world
file: app.vue
repo: nuxt/examples
---
::

---
