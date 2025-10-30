# Nuxt - Directory Structure

**Pages:** 135

---

## Job name has to be `pages`. See https://docs.gitlab.com/ee/user/project/pages/#how-it-works

**URL:** llms-txt#job-name-has-to-be-`pages`.-see-https://docs.gitlab.com/ee/user/project/pages/#how-it-works

**Contents:**
- Learn more

pages:
   image: node
   before_script:
      - npm ci --cache .npm --prefer-offline
   script:
      # Specify the steps involved to build your app here
      - npm run generate
   cache: # https://docs.gitlab.com/ee/ci/caching/#cache-nodejs-dependencies
      key:
         files:
         - package-lock.json
      paths:
         - .npm/
   artifacts:
      paths:
         # The directory that contains the built files to be published
         - .output/public
   # The directory that contains the built files to be published
   publish: .output/public
   rules:
      # This ensures that only pushes to the default branch 
      # will trigger a pages deploy
      - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```

::read-more
---
target: _blank
to: https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html#project-website-examples
---
Head over **GitLab Pages default domain names and URLs** to learn more about the GitLab Pages default domain names.
::

---

## error.vue

**URL:** llms-txt#error.vue

During the lifespan of your application, some errors may appear unexpectedly at runtime. In such case, we can use the `error.vue` file to override the default error files and display the error nicely.

::note
Although it is called an 'error page' it's not a route and shouldn't be placed in your `~/pages` directory. For the same reason, you shouldn't use `definePageMeta` within this page. That being said, you can still use layouts in the error file, by utilizing the [`NuxtLayout`](https://nuxt.com/docs/3.x/api/components/nuxt-layout) component and specifying the name of the layout.
::

The error page has a single prop - `error` which contains an error for you to handle.

The `error` object provides the following fields:

If you have an error with custom fields they will be lost; you should assign them to `data` instead:

**Examples:**

Example 1 (unknown):
```unknown
::note
Although it is called an 'error page' it's not a route and shouldn't be placed in your `~/pages` directory. For the same reason, you shouldn't use `definePageMeta` within this page. That being said, you can still use layouts in the error file, by utilizing the [`NuxtLayout`](https://nuxt.com/docs/3.x/api/components/nuxt-layout) component and specifying the name of the layout.
::

The error page has a single prop - `error` which contains an error for you to handle.

The `error` object provides the following fields:
```

Example 2 (unknown):
```unknown
If you have an error with custom fields they will be lost; you should assign them to `data` instead:
```

---

## defineNuxtRouteMiddleware

**URL:** llms-txt#definenuxtroutemiddleware

**Contents:**
- Type
- Parameters
  - `middleware`
- Examples
  - Showing Error Page
  - Redirection

Route middleware are stored in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) of your Nuxt application (unless [set otherwise](https://nuxt.com/docs/3.x/api/nuxt-config#middleware)).

- **Type**: `RouteMiddleware`

A function that takes two Vue Router's route location objects as parameters: the next route `to` as the first, and the current route `from` as the second.

Learn more about available properties of `RouteLocationNormalized&#x60; in the &#x2A;*[Vue Router docs](https://router.vuejs.org/api/type-aliases/RouteLocationNormalized.html){rel="nofollow"}**.

### Showing Error Page

You can use route middleware to throw errors and show helpful error messages:

The above route middleware will redirect a user to the custom error page defined in the `~/error.vue` file, and expose the error message and code passed from the middleware.

Use [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) in combination with `navigateTo` helper function inside the route middleware to redirect users to different routes based on their authentication status:

Both [navigateTo](https://nuxt.com/docs/3.x/api/utils/navigate-to) and [abortNavigation](https://nuxt.com/docs/3.x/api/utils/abort-navigation) are globally available helper functions that you can use inside `defineNuxtRouteMiddleware`.

**Examples:**

Example 1 (unknown):
```unknown
## Parameters

### `middleware`

- **Type**: `RouteMiddleware`

A function that takes two Vue Router's route location objects as parameters: the next route `to` as the first, and the current route `from` as the second.

Learn more about available properties of `RouteLocationNormalized&#x60; in the &#x2A;*[Vue Router docs](https://router.vuejs.org/api/type-aliases/RouteLocationNormalized.html){rel="nofollow"}**.

## Examples

### Showing Error Page

You can use route middleware to throw errors and show helpful error messages:
```

Example 2 (unknown):
```unknown
The above route middleware will redirect a user to the custom error page defined in the `~/error.vue` file, and expose the error message and code passed from the middleware.

### Redirection

Use [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) in combination with `navigateTo` helper function inside the route middleware to redirect users to different routes based on their authentication status:
```

---

## useFetch

**URL:** llms-txt#usefetch

**Contents:**
- Usage
  - Reactive Keys and Shared State
  - Reactive Fetch Options
- Type
- Parameters
- Return Values
  - Status values
  - Examples

This composable provides a convenient wrapper around [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch).
It automatically generates a key based on URL and fetch options, provides type hints for request url based on server routes, and infers API response type.

::note
`useFetch` is a composable meant to be called directly in a setup function, plugin, or route middleware. It returns reactive composables and handles adding responses to the Nuxt payload so they can be passed from server to client without re-fetching the data on client side when the page hydrates.
::

::warning
If you're using a custom useFetch wrapper, do not await it in the composable, as that can cause unexpected behavior. Please follow [this recipe](https://nuxt.com/docs/3.x/guide/recipes/custom-usefetch#custom-usefetch) for more information on how to make a custom async data fetcher.
::

::note
`data`, `status`, and `error` are Vue refs, and they should be accessed with `.value` when used within the `<script setup>`, while `refresh`/`execute` and `clear` are plain functions.
::

Using the `query` option, you can add search parameters to your query. This option is extended from [unjs/ofetch](https://github.com/unjs/ofetch){rel="nofollow"} and is using [unjs/ufo](https://github.com/unjs/ufo){rel="nofollow"} to create the URL. Objects are automatically stringified.

The above example results in `https://api.nuxt.com/modules?param1=value1&param2=value2`.

You can also use [interceptors](https://github.com/unjs/ofetch#%EF%B8%8F-interceptors){rel="nofollow"}:

### Reactive Keys and Shared State

You can use a computed ref or a plain ref as the URL, allowing for dynamic data fetching that automatically updates when the URL changes:

When using `useFetch` with the same URL and options in multiple components, they will share the same `data`, `error` and `status` refs. This ensures consistency across components.

::tip
Keyed state created using `useFetch` can be retrieved across your Nuxt application using [`useNuxtData`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-data).
::

::warning
`useFetch` is a reserved function name transformed by the compiler, so you should not name your own function `useFetch`.
::

::warning
If you encounter the `data` variable destructured from a `useFetch` returns a string and not a JSON parsed object then make sure your component doesn't include an import statement like `import { useFetch } from '@vueuse/core`.
::

::video-accordion
---
title: Watch the video from Alexander Lichter to avoid using useFetch the wrong way
video-id: njsGVmcWviY
---
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

### Reactive Fetch Options

Fetch options can be provided as reactive, supporting `computed`, `ref` and [computed getters](https://vuejs.org/guide/essentials/computed.html){rel="nofollow"}. When a reactive fetch option is updated it will trigger a refetch using the updated resolved reactive value.

If needed, you can opt out of this behavior using `watch: false`:

- `URL` (`string | Request | Ref<string | Request> | () => string | Request`): The URL or request to fetch. Can be a string, a Request object, a Vue ref, or a function returning a string/Request. Supports reactivity for dynamic endpoints.
- `options` (object): Configuration for the fetch request. Extends [unjs/ofetch](https://github.com/unjs/ofetch){rel="nofollow"} options and [`AsyncDataOptions`](https://nuxt.com/docs/3.x/api/composables/use-async-data#params). All options can be a static value, a `ref`, or a computed value.

| Option          | Type                                                                  | Default    | Description                                                                                                                                                              |
| --------------- | --------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`           | `MaybeRefOrGetter<string>`                                            | auto-gen   | Unique key for de-duplication. If not provided, generated from URL and options.                                                                                          |
| `method`        | `MaybeRefOrGetter<string>`                                            | `'GET'`    | HTTP request method.                                                                                                                                                     |
| `query`         | `MaybeRefOrGetter<SearchParams>`                                      | -          | Query/search params to append to the URL. Alias: `params`.                                                                                                               |
| `params`        | `MaybeRefOrGetter<SearchParams>`                                      | -          | Alias for `query`.                                                                                                                                                       |
| `body`          | `MaybeRefOrGetter<RequestInit['body'] | Record<string, any>>`         | -          | Request body. Objects are automatically stringified.                                                                                                                     |
| `headers`       | `MaybeRefOrGetter<Record<string, string> | [key, value][] | Headers>` | -          | Request headers.                                                                                                                                                         |
| `baseURL`       | `MaybeRefOrGetter<string>`                                            | -          | Base URL for the request.                                                                                                                                                |
| `timeout`       | `MaybeRefOrGetter<number>`                                            | -          | Timeout in milliseconds to abort the request.                                                                                                                            |
| `cache`         | `boolean | string`                                                    | -          | Cache control. Boolean disables cache, or use Fetch API values: `default`, `no-store`, etc.                                                                              |
| `server`        | `boolean`                                                             | `true`     | Whether to fetch on the server.                                                                                                                                          |
| `lazy`          | `boolean`                                                             | `false`    | If true, resolves after route loads (does not block navigation).                                                                                                         |
| `immediate`     | `boolean`                                                             | `true`     | If false, prevents request from firing immediately.                                                                                                                      |
| `default`       | `() => DataT`                                                         | -          | Factory for default value of `data` before async resolves.                                                                                                               |
| `timeout`       | `number`                                                              | -          | A number in milliseconds to wait before timing out the request (defaults to `undefined`, which means no timeout)                                                         |
| `transform`     | `(input: DataT) => DataT | Promise<DataT>`                            | -          | Function to transform the result after resolving.                                                                                                                        |
| `getCachedData` | `(key, nuxtApp, ctx) => DataT | undefined`                            | -          | Function to return cached data. See below for default.                                                                                                                   |
| `pick`          | `string[]`                                                            | -          | Only pick specified keys from the result.                                                                                                                                |
| `watch`         | `MultiWatchSources | false`                                           | -          | Array of reactive sources to watch and auto-refresh. `false` disables watching.                                                                                          |
| `deep`          | `boolean`                                                             | `true`     | Return data in a deep ref object. Set to `false` to return data in a shallow ref object, which can improve performance if your data does not need to be deeply reactive. |
| `dedupe`        | `'cancel' | 'defer'`                                                  | `'cancel'` | Avoid fetching same key more than once at a time.                                                                                                                        |
| `$fetch`        | `typeof globalThis.$fetch`                                            | -          | Custom $fetch implementation. See [Custom useFetch in Nuxt](https://nuxt.com/docs/guide/recipes/custom-usefetch)                                                         |

::note
All fetch options can be given a `computed` or `ref` value. These will be watched and new requests made automatically with any new values if they are updated.
::

**getCachedData default:**

This only caches data when `experimental.payloadExtraction` in `nuxt.config` is enabled.

| Name      | Type                                                | Description                                                                                                                                                  |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`    | `Ref<DataT | undefined>`                            | The result of the asynchronous fetch.                                                                                                                        |
| `refresh` | `(opts?: AsyncDataExecuteOptions) => Promise<void>` | Function to manually refresh the data. By default, Nuxt waits until a `refresh` is finished before it can be executed again.                                 |
| `execute` | `(opts?: AsyncDataExecuteOptions) => Promise<void>` | Alias for `refresh`.                                                                                                                                         |
| `error`   | `Ref<ErrorT | undefined>`                           | Error object if the data fetching failed.                                                                                                                    |
| `status`  | `Ref<'idle' | 'pending' | 'success' | 'error'>`     | Status of the data request. See below for possible values.                                                                                                   |
| `clear`   | `() => void`                                        | Resets `data` to `undefined` (or the value of `options.default()` if provided), `error` to `null`, set `status` to `idle`, and cancels any pending requests. |

- `idle`: Request has not started (e.g. `{ immediate: false }` or `{ server: false }` on server render)
- `pending`: Request is in progress
- `success`: Request completed successfully
- `error`: Request failed

::note
If you have not fetched data on the server (for example, with `server: false`), then the data *will not* be fetched until hydration completes. This means even if you await `useFetch` on client-side, `data` will remain null within `<script setup>`.
::

::link-example
---
to: https://nuxt.com/docs/examples/advanced/use-custom-fetch-composable
---
::

::link-example{to="https://nuxt.com/docs/examples/features/data-fetching"}
::

**Examples:**

Example 1 (unknown):
```unknown
::warning
If you're using a custom useFetch wrapper, do not await it in the composable, as that can cause unexpected behavior. Please follow [this recipe](https://nuxt.com/docs/3.x/guide/recipes/custom-usefetch#custom-usefetch) for more information on how to make a custom async data fetcher.
::

::note
`data`, `status`, and `error` are Vue refs, and they should be accessed with `.value` when used within the `<script setup>`, while `refresh`/`execute` and `clear` are plain functions.
::

Using the `query` option, you can add search parameters to your query. This option is extended from [unjs/ofetch](https://github.com/unjs/ofetch){rel="nofollow"} and is using [unjs/ufo](https://github.com/unjs/ufo){rel="nofollow"} to create the URL. Objects are automatically stringified.
```

Example 2 (unknown):
```unknown
The above example results in `https://api.nuxt.com/modules?param1=value1&param2=value2`.

You can also use [interceptors](https://github.com/unjs/ofetch#%EF%B8%8F-interceptors){rel="nofollow"}:
```

Example 3 (unknown):
```unknown
### Reactive Keys and Shared State

You can use a computed ref or a plain ref as the URL, allowing for dynamic data fetching that automatically updates when the URL changes:
```

Example 4 (unknown):
```unknown
When using `useFetch` with the same URL and options in multiple components, they will share the same `data`, `error` and `status` refs. This ensures consistency across components.

::tip
Keyed state created using `useFetch` can be retrieved across your Nuxt application using [`useNuxtData`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-data).
::

::warning
`useFetch` is a reserved function name transformed by the compiler, so you should not name your own function `useFetch`.
::

::warning
If you encounter the `data` variable destructured from a `useFetch` returns a string and not a JSON parsed object then make sure your component doesn't include an import statement like `import { useFetch } from '@vueuse/core`.
::

::video-accordion
---
title: Watch the video from Alexander Lichter to avoid using useFetch the wrong way
video-id: njsGVmcWviY
---
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

### Reactive Fetch Options

Fetch options can be provided as reactive, supporting `computed`, `ref` and [computed getters](https://vuejs.org/guide/essentials/computed.html){rel="nofollow"}. When a reactive fetch option is updated it will trigger a refetch using the updated resolved reactive value.
```

---

## Generates `components/TheHeader.vue`

**URL:** llms-txt#generates-`components/theheader.vue`

**Contents:**
- `nuxt add composable`

npx nuxt add component TheHeader
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add composable`
```

---

## Introducing Nuxt Icon v1

**URL:** llms-txt#introducing-nuxt-icon-v1

**Contents:**
- Why Are Icons Challenging?
- A Journey Through Icon Solutions
  - 1. `<img>` Tags: The Early Days
  - 2. Web Fonts: Icon Fonts
  - 3. Inline SVGs: Component-Based Icons
  - 4. Iconify Runtime: Dynamic API Access
  - 5. On-Demand Component Icons
  - 6. Pure CSS Icons
- The Challenges to Integrate in Nuxt
- Introducing Nuxt Icon v1: The Balance of Both Worlds

Icons are essential to modern web interfaces. They simplify navigation, clarify functionality, and enhance visual appeal. However, implementing icons efficiently involves challenges like scalability, dynamic loading, and server-side rendering (SSR) compatibility.

To address these challenges, we developed **Nuxt Icon v1** — a versatile, modern solution tailored for Nuxt projects. By building on established icon rendering techniques and introducing novel approaches, Nuxt Icon bridges the gap between performance, usability, and flexibility.

In this post, we’ll explore the challenges of icon rendering, the evolution of icon solutions, and how Nuxt Icon combines the best aspects of these methods to offer a seamless experience for developers.

## Why Are Icons Challenging?

At first glance, icons seem simple - they are essentially just tiny image elements that enhance a user interface, providing visual cues and enhancing usability.

![Icons Showcases](https://nuxt.com/assets/blog/nuxt-icon/icons-showcase.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

However, from an engineering perspective, they pose several challenges. Ideal icons should be:

- **Colorable**: Adaptable to themes and color schemes.
- **Scalable**: Render crisply at various sizes and resolutions.
- **Manageable**: Icon sets can contain hundreds or thousands of icons.
- **Efficiently Bundled**: Minimize network requests.
- **Optimally Loaded**: Affect application performance and user experience.
- **Dynamic**: Support dynamic loading for user-generated or runtime-defined icons.

![Engineering Challenges with Icons](https://nuxt.com/assets/blog/nuxt-icon/challenges.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Meeting all these needs requires a carefully engineered solution that balances trade-offs. Let’s explore the evolution of icon solutions and how they address these challenges.

## A Journey Through Icon Solutions

Over the years, developers have experimented with various techniques to render icons efficiently. Let’s explore the evolution of these solutions and the challenges they faced.

### 1. `<img>` Tags: The Early Days

The most straightforward solution: using the `<img>` tag. This was the go-to method in the early days of the web.

You'd host your image assets and use an `<img>` tag to link to that image, specifying its width and height. It's simple, requires no setup or runtime dependencies, and works natively in browsers.

![Solution 1](https://nuxt.com/assets/blog/nuxt-icon/solution-1.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

However, there are drawbacks. Images can become pixelated, lack color control, and don't scale well. Each icon being a separate image file results in many network requests, which could be slow, especially back in the days of HTTP 1.1. Before the image is downloaded, you might see a flash of invisible icons, which can hurt the user experience. Lastly, it's quite verbose to write, as you need to specify the full path of the image and manage the relative paths. It explains why this approach is rarely used on modern websites today.

### 2. Web Fonts: Icon Fonts

As the next step in icon evolution, web fonts emerged as a popular solution. Fonts are inherently vectorized and colorable, making them a natural fit for icons.

Iconset providers typically compile their icons into a special font file, assigning a unique Unicode character to each icon. This is accompanied by a CSS file that maps these Unicode values to specific icon classes.

The advantages of this approach are clear: it's easy to use, colorable, scalable, and requires only a single request to load all icons.

![Solution 2](https://nuxt.com/assets/blog/nuxt-icon/solution-2.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

However, there are some downsides. Loading a large font file upfront can be slow, and customizing the icon set is challenging. Additionally, you might experience a flash of invisible icons before the font loads, as there are no fallback fonts available.

### 3. Inline SVGs: Component-Based Icons

With the advent of modern frontend frameworks, reusing HTML elements has become significantly easier. This led to the idea of directly inlining SVG tags as components.

To support this approach, many icon sets provide packages with wrappers tailored for each framework. For instance, MDI icons use a shared component and pass icon data as props, while Tabler icons offer a dedicated component for each icon.

Since these are SVGs, they are inherently colorable, scalable, and retain all the features of SVGs. Typically, icons are bundled into the app, eliminating additional network requests and ensuring they are SSR-friendly and visible on the first render.

![Solution 3](https://nuxt.com/assets/blog/nuxt-icon/solution-3.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

However, this method has its downsides. It generates numerous SVG DOM elements, which can impact performance when many icons are used. It also increases the bundle size and requires specific integration support for each icon set and framework combination, leading to a degree of vendor lock-in. This makes it challenging to switch to a different icon set or framework.

Despite these trade-offs, this approach is widely adopted today, as switching icon sets or frameworks is not a frequent necessity for most projects.

### 4. Iconify Runtime: Dynamic API Access

[Iconify](https://iconify.design/){rel="nofollow"} revolutionized icon usage by aggregating over 200,000 icons across 100+ collections. Its runtime solution dynamically fetched icons via an API, enabling dynamic access to any icon without pre-bundling.

This is a great fit for rendering icons from user-provided content or other dynamic content that you don't know at build time. And it's super easy to set up, as you can even use it as a CDN without any build tools.

![Solution 4](https://nuxt.com/assets/blog/nuxt-icon/solution-4.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

While this method offers great flexibility, it does come with some trade-offs. It introduces runtime dependencies, meaning icons will only render after JavaScript is loaded and the icon data is fetched. This approach also poses challenges for server-side rendering (SSR) and caching layers, such as those used in Progressive Web Apps (PWAs).

### 5. On-Demand Component Icons

With the unified interface from Iconify and Vite's on-demand approach, we developed [`unplugin-icons`](https://github.com/unplugin/unplugin-icons){rel="nofollow"}. This tool allows you to import any icons as components on-demand.

As an [`unplugin`](https://github.com/unjs/unplugin){rel="nofollow"}, it supports all popular build tools, including Vite, webpack, and rspack. We provide compilers for popular frameworks like Vue, React, Svelte, and Solid. With Iconify, you can use any icon across any framework, minimizing vendor lock-in.

![Solution 5](https://nuxt.com/assets/blog/nuxt-icon/solution-5.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

While this technique shares the same pros and cons as previous component icon solutions, the integration with build tools allows us to serve the full Iconify collection while only shipping the icons you actually use. However, runtime concerns like DOM element management still persist.

### 6. Pure CSS Icons

As a side-effect of working on [UnoCSS](https://unocss.dev/){rel="nofollow"}, we discovered the potential of embedding icons entirely in CSS, leading to the innovative solution of [Pure CSS Icons](https://antfu.me/posts/icons-in-pure-css){rel="nofollow"}.

This method involves inlining SVG icons as data URLs and providing a single class to display the icons. With some tweaks, these icons become colorable, scalable, and even capable of displaying SVG animations.

Browsers can cache the CSS rules, and each icon requires only **one DOM element** to render. This approach ships the icons in a single CSS file with no additional requests. Since it's pure CSS, the icons display along with the rest of your UI, require zero runtime, and work naturally with SSR—your server doesn't need any extra work on the server side.

![Solution 6](https://nuxt.com/assets/blog/nuxt-icon/solution-6.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

The only downsides are the lack of full customization for elements inside the SVG and the need to bundle icons at build-time, which isn't dynamic.

## The Challenges to Integrate in Nuxt

While I would say that the [Pure CSS Icons](https://nuxt.com/#_6-pure-css-icons) and [On-demand Component Icons](https://nuxt.com/#_5-on-demand-component-icons) would be pretty sufficient for most of the static usages, Nuxt as a full featured framework, has a bit more requirements to integrate icons efficiently:

- **SSR/CSR**: Nuxt works in both server-side rendering (SSR) and client-side rendering (CSR) modes. We care a lot about the end user experience, and we want to ensure that icons are rendered instantly without flickers.
- **Dynamic Icons**: In integrations like [Nuxt Content](https://content.nuxt.com/){rel="nofollow"}, the content can be provided at runtime or from external sources, which we are not aware at build time. We want to ensure we have the capability to integrate with those cases well.
- **Performance**: We want to ensure that the icons are bundled efficiently, and the loading of icons is optimized for the best performance.
- **Custom Icons**: While Iconify provides a wide range of icons for selection, we also aware it's pretty common for projects to have their own icon sets, or wanted to use paid icons that are not available in Iconify. Supporting custom icons is crucial for our users.

![Nuxt Integration Challenges and Solutions](https://nuxt.com/assets/blog/nuxt-icon/nuxt-icon-challenges.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

With these requirements in mind, let's revisit the solutions we discussed earlier and see how they stack up.

For dynamic icons, the Iconify Runtime stands out as a viable option. It allows for dynamic fetching of icons, making it suitable for content that isn't known at build time. However, it has its drawbacks. The reliance on runtime dependencies means it doesn't integrate seamlessly with SSR, and it doesn't support custom icons since the requests are directed to Iconify's servers, which don't have access to our local icon setup.

Conversely, Pure CSS Icons offer excellent performance and SSR compatibility. They ensure icons are rendered instantly without flickers and are bundled efficiently. However, they fall short when it comes to dynamic icons, as they need to be bundled at build time and lack the flexibility to adapt to runtime content changes.

Balancing these trade-offs is indeed challenging. So, why not leverage the strengths of both approaches? By understanding these trade-offs, we can better appreciate the balanced solution that Nuxt Icon v1 offers.

## Introducing Nuxt Icon v1: The Balance of Both Worlds

With the flexibility of the Nuxt Module system, Nuxt Icon combines the best of both worlds: the instant rendering of CSS icons and the dynamic fetching of Iconify icons. This dual approach provides a versatile, modern, and customizable icon solution that seamlessly adapts to your project's needs.

### Dual Rendering Modes

To address the trade-offs in rendering approaches, Nuxt Icon introduces a versatile `<Icon>` component that supports both CSS and SVG modes, both of which are SSR-friendly. Depending on your customization needs, you can switch between these modes for each icon.

In CSS mode, icons are included in the CSS during SSR, ensuring they render instantly without any runtime cost. In SVG mode, icons are inlined as HTML during SSR, providing the same immediate rendering benefits. Both approaches ensure that icons appear on the initial screen without any delay, offering a seamless user experience.

![Dual rendering mode](https://nuxt.com/assets/blog/nuxt-icon/dual-rendering-modes.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Dynamic icons present unique challenges, especially when it comes to loading them efficiently. To address this, we leverage Iconify's API, which allows us to serve any icon on demand via network requests. However, relying solely on this API can introduce delays, especially if the servers are geographically distant from your users.

To mitigate this, we introduced the concept of Icon Bundles. We can bundle frequently used icons directly into the `Client Bundle`. This ensures that these icons render instantly without additional network requests. However, bundling all possible icons isn't feasible due to the potential increase in bundle size.

Given that Nuxt is a full-stack framework, we can strike a balance by introducing a `Server Bundle`. On the server side, bundle size is less of an issue, allowing us to include a more extensive set of icons. During SSR, these icons can be fetched quickly and sent to the client as needed. This setup ensures high performance for commonly used icons while still providing the flexibility to serve any icon from Iconify as a fallback.

By combining client-side bundling for static icons and server-side bundling for dynamic icons, we achieve an optimal balance between performance and flexibility.

![Icon Bundles in Nuxt Icons](https://nuxt.com/assets/blog/nuxt-icon/bundles.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Here is a data flow diagram illustrating how Nuxt Icon requests icon data:

1. You use the `<Icon>` component and provide the icon `name`.
2. Nuxt Icon will first check if the icon is available in the `Client Bundle`, or the SSR payload (icons that are known at SSR will be presented in the payload). If so, the icon will be rendered instantly.
3. If the icon is not available on the client side, Nuxt Icon will fetch the icon data from the server API shipped along with your Nuxt app. Inside the server endpoint, it will query from the `Server Bundle` to see if the icon is available.
4. Between that, there are multiple cache systems involved. Server endpoint cache, HTTP cache, and client-side cache to ensure the icon is fetched efficiently and quickly. Since icon data does not change frequently, we use hard cache strategies to ensure the best performance.
5. When the icon is unknown to both the client and server (dynamic icons), the server endpoint will fallback to the Iconify API to fetch the icon data. Since the server endpoint is cached, the Iconify API will be called only once for each unique icon regardless of how many clients are requesting it, to save resources on both sides.

![Nuxt Icon Requesting Data flow](https://nuxt.com/assets/blog/nuxt-icon/dataflow.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

This layered approach ensures efficient icon delivery, balancing speed and flexibility, while being as dynamic as possible. And balance out the trade-offs between each solution.

## Try Nuxt Icon Today

Nuxt Icon v1 represents the culmination of years of innovation in icon rendering. Whether you’re building a dynamic app, a static website, or anything in between, Nuxt Icon adapts to your needs.

It’s easy to add Nuxt Icon to your project by running the following command:

Then, import the `<Icon>` component in your Vue components, providing icon `name` following [Iconify's conventions](https://iconify.design/docs/icons/icon-basics.html){rel="nofollow"}:

Explore more with the [documentation](https://github.com/nuxt/icon){rel="nofollow"}, experiment with its features, and let us know your thoughts. We’re excited to see how Nuxt Icon transforms your projects!

**Examples:**

Example 1 (bash):
```bash
npx nuxi module add icon
```

Example 2 (vue):
```vue
<template>
  <Icon name="i-lucide-activity" />
</template>
```

---

## Views

**URL:** llms-txt#views

**Contents:**
- `app.vue`
- Components
- Pages
- Layouts
- Advanced: Extending the HTML Template

![The app.vue file is the entry point of your application](https://nuxt.com/assets/docs/getting-started/views/app.svg)

By default, Nuxt will treat this file as the **entrypoint** and render its content for every route of the application.

::tip
If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.
::

![Components are reusable pieces of UI](https://nuxt.com/assets/docs/getting-started/views/components.svg)

Most components are reusable pieces of the user interface, like buttons and menus. In Nuxt, you can create these components in the [`components/`](https://nuxt.com/docs/3.x/guide/directory-structure/components) directory, and they will be automatically available across your application without having to explicitly import them.

![Pages are views tied to a specific route](https://nuxt.com/assets/docs/getting-started/views/pages.svg)

Pages represent views for each specific route pattern. Every file in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory represents a different route displaying its content.

To use pages, create `pages/index.vue` file and add `<NuxtPage />` component to the [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app) (or remove `app.vue` for default entry). You can now create more pages and their corresponding routes by adding new files in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory.

::read-more
---
title: Routing Section
to: https://nuxt.com/docs/getting-started/routing
---
::

![Layouts are wrapper around pages](https://nuxt.com/assets/docs/getting-started/views/layouts.svg)

Layouts are wrappers around pages that contain a common User Interface for several pages, such as header and footer displays. Layouts are Vue files using `<slot />` components to display the **page** content. The `layouts/default.vue` file will be used by default. Custom layouts can be set as part of your page metadata.

::note
If you only have a single layout in your application, we recommend using [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app) with [`<NuxtPage />`](https://nuxt.com/docs/3.x/api/components/nuxt-page) instead.
::

If you want to create more layouts and learn how to use them in your pages, find more information in the [Layouts section](https://nuxt.com/docs/3.x/guide/directory-structure/layouts).

## Advanced: Extending the HTML Template

::note
If you only need to modify the `<head>`, you can refer to the [SEO and meta section](https://nuxt.com/docs/3.x/getting-started/seo-meta).
::

You can have full control over the HTML template by adding a Nitro plugin that registers a hook.
The callback function of the `render:html` hook allows you to mutate the HTML before it is sent to the client.

::read-more{to="https://nuxt.com/docs/guide/going-further/hooks"}
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.
::

## Components

![Components are reusable pieces of UI](https://nuxt.com/assets/docs/getting-started/views/components.svg)

Most components are reusable pieces of the user interface, like buttons and menus. In Nuxt, you can create these components in the [`components/`](https://nuxt.com/docs/3.x/guide/directory-structure/components) directory, and they will be automatically available across your application without having to explicitly import them.

::code-group
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
::

## Pages

![Pages are views tied to a specific route](https://nuxt.com/assets/docs/getting-started/views/pages.svg)

Pages represent views for each specific route pattern. Every file in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory represents a different route displaying its content.

To use pages, create `pages/index.vue` file and add `<NuxtPage />` component to the [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app) (or remove `app.vue` for default entry). You can now create more pages and their corresponding routes by adding new files in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory.

::code-group
```

Example 4 (unknown):
```unknown

```

---

## useHydration

**URL:** llms-txt#usehydration

**Contents:**
- Usage
- Type
- Parameters

::note
This is an advanced composable, primarily designed for use within plugins, mostly used by Nuxt modules.
::

::note
`useHydration` is designed to **ensure state synchronization and restoration during SSR**. If you need to create a globally reactive state that is SSR-friendly in Nuxt, [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) is the recommended choice.
::

`useHydration` is a built-in composable that provides a way to set data on the server side every time a new HTTP request is made and receive that data on the client side. This way `useHydration` allows you to take full control of the hydration cycle.

The data returned from the `get` function on the server is stored in `nuxtApp.payload` under the unique key provided as the first parameter to `useHydration`. During hydration, this data is then retrieved on the client, preventing redundant computations or API calls.

- `key`: A unique key that identifies the data in your Nuxt application.
- `get`: A function executed **only on the server** (called when SSR rendering is done) to set the initial value.
- `set`: A function executed **only on the client** (called when initial vue instance is created) to receive the data.

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

## Type
```

---

## Middleware

**URL:** llms-txt#middleware

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

::sandbox
---
branch: main
dir: examples/routing/middleware
file: app.vue
repo: nuxt/examples
---
::

---

## Generates `app/pages/category/[id].vue`

**URL:** llms-txt#generates-`app/pages/category/[id].vue`

**Contents:**
- `nuxt add middleware`

npx nuxt add page "category/[id]"
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add middleware`

- Modifier flags: `--global`
```

---

## GitLab Pages

**URL:** llms-txt#gitlab-pages

**Contents:**
- Deployment

Nuxt supports deploying on the [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages){rel="nofollow"} with minimal configuration.

::caution
GitLab Pages only support static sites, Nuxt will pre-render your application to static HTML files.
::

::caution
If you are **not** using a custom domain, you need to set `NUXT_APP_BASE_URL` to your repository-slug for your build step.

**Example**: `https://<group/user>.gitlab.io/<repository>/`: `NUXT_APP_BASE_URL=/<repository>/ npm run generate`
::

1. Here is an example GitLab Pages workflow to deploy your site to GitLab Pages:

```yaml [.gitlab-ci.yml]

---

## <NuxtPage>

**URL:** llms-txt#<nuxtpage>

**Contents:**
- Props
- Example
- Page's Ref
- Custom Props

`<NuxtPage>` is a built-in component that comes with Nuxt. It lets you display top-level or nested pages located in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory.

::note
`<NuxtPage>` is a wrapper around [`<RouterView>`](https://router.vuejs.org/api/interfaces/RouterViewProps.html#interface-routerviewprops){rel="nofollow"} from Vue Router. It should be used instead of `<RouterView>` because the former takes additional care of internal states. Otherwise, `useRoute()` may return incorrect paths.
::

`<NuxtPage>` includes the following components:

By default, Nuxt does not enable `<Transition>` and `<KeepAlive>`. You can enable them in the nuxt.config file or by setting the `transition` and `keepalive` properties on `<NuxtPage>`. If you want to define a specific page, you can set it in `definePageMeta` in the page component.

::warning
If you enable `<Transition>` in your page component, ensure that the page has a single root element.
::

Since `<NuxtPage>` uses `<Suspense>` under the hood, the component lifecycle behavior during page changes differs from that of a typical Vue application.

In a typical Vue application, a new page component is mounted **only after** the previous one has been fully unmounted. However, in Nuxt, due to how Vue `<Suspense>` is implemented, the new page component is mounted **before** the previous one is unmounted.

- `name`: tells `<RouterView>` to render the component with the corresponding name in the matched route record's components option.

- type: `string`
- `route`: route location that has all of its components resolved.

- type: `RouteLocationNormalized`
- `pageKey`: control when the `NuxtPage` component is re-rendered.

- type: `string` or `function`
- `transition`: define global transitions for all pages rendered with the `NuxtPage` component.

- type: `boolean` or [`TransitionProps`](https://vuejs.org/api/built-in-components#transition){rel="nofollow"}
- `keepalive`: control state preservation of pages rendered with the `NuxtPage` component.

- type: `boolean` or [`KeepAliveProps`](https://vuejs.org/api/built-in-components#keepalive){rel="nofollow"}

::tip
Nuxt automatically resolves the `name` and `route` by scanning and rendering all Vue component files found in the `/pages` directory.
::

For example, if you pass a key that never changes, the `<NuxtPage>` component will be rendered only once - when it is first mounted.

You can also use a dynamic key based on the current route:

::warning
Don't use `$route` object here as it can cause problems with how `<NuxtPage>` renders pages with `<Suspense>`.
::

Alternatively, `pageKey` can be passed as a `key` value via [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) from the `<script>` section of your Vue component in the `/pages` directory.

::link-example{to="https://nuxt.com/docs/examples/routing/pages"}
::

To get the `ref` of a page component, access it through `ref.value.pageRef`

`<NuxtPage>` also accepts custom props that you may need to pass further down the hierarchy.

For example, in the below example, the value of `foobar` will be passed to the `NuxtPage` component and then to the page components.

We can access the `foobar` prop in the page component:

If you have not defined the prop with `defineProps`, any props passed down to `NuxtPage` can still be accessed directly from the page `attrs`:

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <RouterView v-slot="{ Component }">
    <!-- Optional, when using transitions -->
    <Transition>
      <!-- Optional, when using keep-alive -->
      <KeepAlive>
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>
```

Example 2 (unknown):
```unknown
You can also use a dynamic key based on the current route:
```

Example 3 (unknown):
```unknown
::warning
Don't use `$route` object here as it can cause problems with how `<NuxtPage>` renders pages with `<Suspense>`.
::

Alternatively, `pageKey` can be passed as a `key` value via [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) from the `<script>` section of your Vue component in the `/pages` directory.
```

Example 4 (unknown):
```unknown
::link-example{to="https://nuxt.com/docs/examples/routing/pages"}
::

## Page's Ref

To get the `ref` of a page component, access it through `ref.value.pageRef`
```

---

## Debugging

**URL:** llms-txt#debugging

**Contents:**
- Sourcemaps
- Debugging with Node Inspector
- Debugging in Your IDE
  - Example VS Code Debug Configuration
  - Example JetBrains IDEs Debug Configuration
  - Other IDEs

Sourcemaps are enabled for your server build by default, and for the client build in dev mode, but you can enable them more specifically in your configuration.

## Debugging with Node Inspector

You can use [Node inspector](https://nodejs.org/en/learn/getting-started/debugging){rel="nofollow"} to debug Nuxt server-side.

This will start Nuxt in `dev` mode with debugger active. If everything is working correctly a Node.js icon will appear on your Chrome DevTools and you can attach to the debugger.

::important
Note that the Node.js and Chrome processes need to be run on the same platform. This doesn't work inside of Docker.
::

## Debugging in Your IDE

It is possible to debug your Nuxt app in your IDE while you are developing it.

### Example VS Code Debug Configuration

You may need to update the config below with a path to your web browser. For more information, visit the [VS Code documentation about debug configuration](https://go.microsoft.com/fwlink/?linkid=830387){rel="nofollow"}.

If you prefer your usual browser extensions, add this to the *chrome* configuration above:

### Example JetBrains IDEs Debug Configuration

You can also debug your Nuxt app in JetBrains IDEs such as IntelliJ IDEA, WebStorm, or PhpStorm.

1. Create a new file in your project root directory and name it `nuxt.run.xml`.
2. Open the `nuxt.run.xml` file and paste the following debug configuration:

If you have another IDE and would like to contribute sample configuration, feel free to [open a PR](https://github.com/nuxt/nuxt/edit/main/docs/2.guide/3.going-further/9.debugging.md){rel="nofollow"}!

**Examples:**

Example 1 (ts):
```ts
export default defineNuxtConfig({
  // or sourcemap: true
  sourcemap: {
    server: true,
    client: true,
  },
})
```

Example 2 (bash):
```bash
nuxt dev --inspect
```

Example 3 (json5):
```json5
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "client: chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "server: nuxt",
      "outputCapture": "std",
      "program": "${workspaceFolder}/node_modules/nuxt/bin/nuxt.mjs",
      "args": [
        "dev"
      ],
    }
  ],
  "compounds": [
    {
      "name": "fullstack: nuxt",
      "configurations": [
        "server: nuxt",
        "client: chrome"
      ]
    }
  ]
}
```

Example 4 (json5):
```json5
"userDataDir": false,
```

---

## useError

**URL:** llms-txt#useerror

**Contents:**
- Usage
- Type
- Parameters
- Return Values
- Example

The `useError` composable returns the global Nuxt error that is being handled and is available on both client and server. It provides a reactive, SSR-friendly error state across your app.

You can use this composable in your components, pages, or plugins to access or react to the current Nuxt error.

This composable does not take any parameters.

Returns a `Ref` containing the current Nuxt error (or `undefined` if there is no error). The error object is reactive and will update automatically when the error state changes.

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

**Examples:**

Example 1 (ts):
```ts
const error = useError()
```

Example 2 (ts):
```ts
interface NuxtError<DataT = unknown> {
  statusCode: number
  statusMessage: string
  message: string
  data?: DataT
  error?: true
}

export const useError: () => Ref<NuxtError | undefined>
```

Example 3 (vue):
```vue
<script setup lang="ts">
const error = useError()

if (error.value) {
  console.error('Nuxt error:', error.value)
}
</script>
```

---

## Plugins

**URL:** llms-txt#plugins

**Contents:**
- `addPlugin`
  - Usage
  - Type
  - Parameters
  - Examples
- `addPluginTemplate`
  - Usage
  - Type
  - Parameters
  - Examples

Plugins are self-contained code that usually add app-level functionality to Vue. In Nuxt, plugins are automatically imported from the `plugins/` directory. However, if you need to ship a plugin with your module, Nuxt Kit provides the `addPlugin` and `addPluginTemplate` methods. These utils allow you to customize the plugin configuration to better suit your needs.

Registers a Nuxt plugin and adds it to the plugins array.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/injecting-plugins?friend=nuxt
---
Watch Vue School video about `addPlugin`.
::

**`plugin`**: A plugin object or a string with the path to the plugin. If a string is provided, it will be converted to a plugin object with `src` set to the string value.

If a plugin object is provided, it must have the following properties:

| Property | Type                                                                                                                                            | Required | Description                                                                                                                                                                                                                                                                                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src`    | `string`                                                                                                                                        | `true`   | Path to the plugin file.                                                                                                                                                                                                                                                                                                                                                 |
| `mode`   | `'all' | 'server' | 'client'`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | If set to `'all'`, the plugin will be included in both client and server bundles. If set to `'server'`, the plugin will only be included in the server bundle. If set to `'client'`, the plugin will only be included in the client bundle. You can also use `.client` and `.server` modifiers when specifying `src` option to use plugin only in client or server side. |
| `order`  | `number`                                                                                                                                        | `false`  | Order of the plugin. This allows more granular control over plugin order and should only be used by advanced users. Lower numbers run first, and user plugins default to `0`. It's recommended to set `order` to a number between `-20` for `pre`-plugins (plugins that run before Nuxt plugins) and `20` for `post`-plugins (plugins that run after Nuxt plugins).      |

::warning
Avoid using `order` unless necessary. Use `append` if you simply need to register plugins after Nuxt defaults.
::

**`options`**: Optional object with the following properties:

| Property | Type      | Required | Description                                                                                                         |
| -------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `append` | `boolean` | `false`  | If `true`, the plugin will be appended to the plugins array. If `false`, it will be prepended. Defaults to `false`. |

## `addPluginTemplate`

Adds a template and registers as a nuxt plugin. This is useful for plugins that need to generate code at build time.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/injecting-plugin-templates?friend=nuxt
---
Watch Vue School video about `addPluginTemplate`.
::

**`pluginOptions`**: A plugin template object with the following properties:

| Property      | Type                                                                                                                                                                        | Required | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src`         | `string`                                                                                                                                                                    | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                                                                                                                                                                                                                  |
| `filename`    | `string`                                                                                                                                                                    | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                                                                                                                                                                                                           |
| `dst`         | `string`                                                                                                                                                                    | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                                                                                                                                                                                                        |
| `mode`        | `'all' | 'server' | 'client'`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                             | `false`  | If set to `'all'`, the plugin will be included in both client and server bundles. If set to `'server'`, the plugin will only be included in the server bundle. If set to `'client'`, the plugin will only be included in the client bundle. You can also use `.client` and `.server` modifiers when specifying `src` option to use plugin only in client or server side. |
| `options`     | `Record<string, any>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                                     | `false`  | Options to pass to the template.                                                                                                                                                                                                                                                                                                                                         |
| `getContents` | `(data: Record<string, any>) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored.                                                                                                                                                                                         |
| `write`       | `boolean`                                                                                                                                                                   | `false`  | If set to `true`, the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.                                                                                                                                                                                                                                 |
| `order`       | `number`                                                                                                                                                                    | `false`  | Order of the plugin. This allows more granular control over plugin order and should only be used by advanced users. Lower numbers run first, and user plugins default to `0`. It's recommended to set `order` to a number between `-20` for `pre`-plugins (plugins that run before Nuxt plugins) and `20` for `post`-plugins (plugins that run after Nuxt plugins).      |

::warning
Prefer using `getContents` for dynamic plugin generation. Avoid setting `order` unless necessary.
::

**`options`**: Optional object with the following properties:

| Property | Type      | Required | Description                                                                                                         |
| -------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `append` | `boolean` | `false`  | If `true`, the plugin will be appended to the plugins array. If `false`, it will be prepended. Defaults to `false`. |

#### Generate a plugin template with different options

Use `addPluginTemplate` when you need to generate plugin code dynamically at build time. This allows you to generate different plugin contents based on the options passed to it. For example, Nuxt internally uses this function to generate Vue app configurations.

This generates different plugin code depending on the provided configuration.

#### Using an EJS template to generate a plugin

You can also use an EJS template to generate your plugin. Options can be passed through the `options` property and then used within the EJS template to generate the plugin content.

::warning
If you set `compatibilityVersion` to `4`, Nuxt no longer uses `lodash.template` to compile templates by default. You can still enable it via the `experimental.compileTemplate` option, but support for EJS templates will be removed entirely in the next major version.
::

**Examples:**

Example 1 (unknown):
```unknown
### Type
```

Example 2 (unknown):
```unknown
### Parameters

**`plugin`**: A plugin object or a string with the path to the plugin. If a string is provided, it will be converted to a plugin object with `src` set to the string value.

If a plugin object is provided, it must have the following properties:

| Property | Type                                                                                                                                            | Required | Description                                                                                                                                                                                                                                                                                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src`    | `string`                                                                                                                                        | `true`   | Path to the plugin file.                                                                                                                                                                                                                                                                                                                                                 |
| `mode`   | `'all' | 'server' | 'client'`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | If set to `'all'`, the plugin will be included in both client and server bundles. If set to `'server'`, the plugin will only be included in the server bundle. If set to `'client'`, the plugin will only be included in the client bundle. You can also use `.client` and `.server` modifiers when specifying `src` option to use plugin only in client or server side. |
| `order`  | `number`                                                                                                                                        | `false`  | Order of the plugin. This allows more granular control over plugin order and should only be used by advanced users. Lower numbers run first, and user plugins default to `0`. It's recommended to set `order` to a number between `-20` for `pre`-plugins (plugins that run before Nuxt plugins) and `20` for `post`-plugins (plugins that run after Nuxt plugins).      |

::warning
Avoid using `order` unless necessary. Use `append` if you simply need to register plugins after Nuxt defaults.
::

**`options`**: Optional object with the following properties:

| Property | Type      | Required | Description                                                                                                         |
| -------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `append` | `boolean` | `false`  | If `true`, the plugin will be appended to the plugins array. If `false`, it will be prepended. Defaults to `false`. |

### Examples

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

## `addPluginTemplate`

Adds a template and registers as a nuxt plugin. This is useful for plugins that need to generate code at build time.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/injecting-plugin-templates?friend=nuxt
---
Watch Vue School video about `addPluginTemplate`.
::

### Usage
```

---

## defineNuxtComponent

**URL:** llms-txt#definenuxtcomponent

**Contents:**
- `asyncData()`
- `head()`

::note
`defineNuxtComponent()` is a helper function for defining type safe Vue components using options API similar to [`defineComponent()`](https://vuejs.org/api/general.html#definecomponent){rel="nofollow"}. `defineNuxtComponent()` wrapper also adds support for `asyncData` and `head` component options.
::

::note
Using `<script setup lang="ts">` is the recommended way of declaring Vue components in Nuxt.
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

If you choose not to use `setup()` in your app, you can use the `asyncData()` method within your component definition:

If you choose not to use `setup()` in your app, you can use the `head()` method within your component definition:

**Examples:**

Example 1 (unknown):
```unknown
## `head()`

If you choose not to use `setup()` in your app, you can use the `head()` method within your component definition:
```

---

## clearError

**URL:** llms-txt#clearerror

Within your pages, components, and plugins, you can use `clearError` to clear all errors and redirect the user.

- `options?: { redirect?: string }`

You can provide an optional path to redirect to (for example, if you want to navigate to a 'safe' page).

Errors are set in state using [`useError()`](https://nuxt.com/docs/3.x/api/composables/use-error). The `clearError` composable will reset this state and calls the `app:error:cleared` hook with the provided options.

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

**Examples:**

Example 1 (ts):
```ts
// Without redirect
clearError()

// With redirect
clearError({ redirect: '/homepage' })
```

---

## defineNuxtPlugin

**URL:** llms-txt#definenuxtplugin

**Contents:**
- Type
- Parameters
- Examples
  - Basic Usage
  - Object Syntax Plugin

`defineNuxtPlugin` is a helper function for creating Nuxt plugins with enhanced functionality and type safety. This utility normalizes different plugin formats into a consistent structure that works seamlessly within Nuxt's plugin system.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/plugins#creating-plugins
---
::

**plugin**: A plugin can be defined in two ways:

1. **Function Plugin**: A function that receives the [`NuxtApp`](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxtapp-interface) instance and can return a promise with an potential object with a [`provide`](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#providing-helpers) property if you want to provide a helper on [`NuxtApp`](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxtapp-interface) instance.
2. **Object Plugin**: An object that can include various properties to configure the plugin's behavior, such as `name`, `enforce`, `dependsOn`, `order`, `parallel`, `setup`, `hooks`, and `env`.

| Property    | Type                                                                                                                                          | Required | Description                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`      | `string`                                                                                                                                      | `false`  | Optional name for the plugin, useful for debugging and dependency management.                                                                                            |
| `enforce`   | `'pre'` \| `'default'` \| `'post'`                                                                                                            | `false`  | Controls when the plugin runs relative to other plugins.                                                                                                                 |
| `dependsOn` | `string[]`                                                                                                                                    | `false`  | Array of plugin names this plugin depends on. Ensures proper execution order.                                                                                            |
| `order`     | `number`                                                                                                                                      | `false`  | This allows more granular control over plugin order and should only be used by advanced users. &#x2A;*It overrides the value of `enforce` and is used to sort plugins.** |
| `parallel`  | `boolean`                                                                                                                                     | `false`  | Whether to execute the plugin in parallel with other parallel plugins.                                                                                                   |
| `setup`     | `Plugin<T>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                 | `false`  | The main plugin function, equivalent to a function plugin.                                                                                                               |
| `hooks`     | `Partial<RuntimeNuxtHooks>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | Nuxt app runtime hooks to register directly.                                                                                                                             |
| `env`       | `{ islands?: boolean }`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}     | `false`  | Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.                                                           |

::video-accordion
---
title: Watch a video from Alexander Lichter about the Object Syntax for Nuxt plugins
video-id: 2aXZyXB1QGQ
---
::

The example below demonstrates a simple plugin that adds global functionality:

### Object Syntax Plugin

The example below shows the object syntax with advanced configuration:

**Examples:**

Example 1 (unknown):
```unknown
::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/plugins#creating-plugins
---
::

## Type
```

Example 2 (unknown):
```unknown
## Parameters

**plugin**: A plugin can be defined in two ways:

1. **Function Plugin**: A function that receives the [`NuxtApp`](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxtapp-interface) instance and can return a promise with an potential object with a [`provide`](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#providing-helpers) property if you want to provide a helper on [`NuxtApp`](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxtapp-interface) instance.
2. **Object Plugin**: An object that can include various properties to configure the plugin's behavior, such as `name`, `enforce`, `dependsOn`, `order`, `parallel`, `setup`, `hooks`, and `env`.

| Property    | Type                                                                                                                                          | Required | Description                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`      | `string`                                                                                                                                      | `false`  | Optional name for the plugin, useful for debugging and dependency management.                                                                                            |
| `enforce`   | `'pre'` \| `'default'` \| `'post'`                                                                                                            | `false`  | Controls when the plugin runs relative to other plugins.                                                                                                                 |
| `dependsOn` | `string[]`                                                                                                                                    | `false`  | Array of plugin names this plugin depends on. Ensures proper execution order.                                                                                            |
| `order`     | `number`                                                                                                                                      | `false`  | This allows more granular control over plugin order and should only be used by advanced users. &#x2A;*It overrides the value of `enforce` and is used to sort plugins.** |
| `parallel`  | `boolean`                                                                                                                                     | `false`  | Whether to execute the plugin in parallel with other parallel plugins.                                                                                                   |
| `setup`     | `Plugin<T>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                 | `false`  | The main plugin function, equivalent to a function plugin.                                                                                                               |
| `hooks`     | `Partial<RuntimeNuxtHooks>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | Nuxt app runtime hooks to register directly.                                                                                                                             |
| `env`       | `{ islands?: boolean }`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}     | `false`  | Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.                                                           |

::video-accordion
---
title: Watch a video from Alexander Lichter about the Object Syntax for Nuxt plugins
video-id: 2aXZyXB1QGQ
---
::

## Examples

### Basic Usage

The example below demonstrates a simple plugin that adds global functionality:
```

Example 3 (unknown):
```unknown
### Object Syntax Plugin

The example below shows the object syntax with advanced configuration:
```

---

## <ClientOnly>

**URL:** llms-txt#<clientonly>

**Contents:**
- Props
- Slots
- Examples
  - Accessing HTML Elements

The `<ClientOnly>` component is used for purposely rendering a component only on client side.

::note
The content of the default slot will be tree-shaken out of the server build. (This does mean that any CSS used by components within it may not be inlined when rendering the initial HTML.)
::

- `placeholderTag` | `fallbackTag`: specify a tag to be rendered server-side.
- `placeholder` | `fallback`: specify a content to be rendered server-side.

- `#fallback`: specify a content to be rendered on the server and displayed until `<ClientOnly>` is mounted in the browser.

### Accessing HTML Elements

Components inside `<ClientOnly>` are rendered only after being mounted. To access the rendered elements in the DOM, you can watch a template ref:

**Examples:**

Example 1 (vue):
```vue
<template>
  <div>
    <Sidebar />
    <!-- The <Comment> component will only be rendered on client-side -->
    <ClientOnly
      fallback-tag="span"
      fallback="Loading comments..."
    >
      <Comment />
    </ClientOnly>
  </div>
</template>
```

Example 2 (unknown):
```unknown
## Examples

### Accessing HTML Elements

Components inside `<ClientOnly>` are rendered only after being mounted. To access the rendered elements in the DOM, you can watch a template ref:
```

---

## State Management

**URL:** llms-txt#state-management

::read-more{to="https://nuxt.com/docs/getting-started/state-management"}
::

::read-more{to="https://nuxt.com/docs/api/composables/use-state"}
::

::sandbox
---
branch: main
dir: examples/features/state-management
file: app.vue
repo: nuxt/examples
---
::

---

## assets

**URL:** llms-txt#assets

The directory usually contains the following types of files:

- Stylesheets (CSS, SASS, etc.)
- Fonts
- Images that won't be served from the [`public/`](https://nuxt.com/docs/3.x/guide/directory-structure/public) directory.

If you want to serve assets from the server, we recommend taking a look at the [`public/`](https://nuxt.com/docs/3.x/guide/directory-structure/public) directory.

::read-more{to="https://nuxt.com/docs/getting-started/assets"}
::

---

## Cloudflare

**URL:** llms-txt#cloudflare

**Contents:**
- Cloudflare Pages
  - Git Integration
  - Route matching
  - Direct Upload
- Learn more
- Templates
- Learn more

::tip
**Zero Configuration ✨**

Integration with Cloudflare Pages is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

::important
Checkout the [@nuxthub/core](https://nuxt.com/modules/hub) module to build full-stack Nuxt applications with Cloudflare, learn more on [hub.nuxt.com](https://hub.nuxt.com){rel="nofollow"}.
::

If you use the GitHub/GitLab integration with Cloudflare Pages, **no configuration is required**. Pushing to your repository will automatically build your project and deploy it.

::note
Nuxt will detect the environment to set the correct [Server/Nitro preset](https://nitro.unjs.io/deploy/providers/cloudflare){rel="nofollow"}.
::

To leverage server-side rendering on the edge, set the build command to: `nuxt build`

To statically generate your website, set the build command to: `nuxt generate`

On CloudFlare Pages, if an HTML file is found with a matching path to the current route requested, it will serve it. It will also redirect HTML pages to their extension-less counterparts: for instance, `/contact.html` will be redirected to `/contact`, and `/about/index.html` will be redirected to `/about/`.

To match Cloudflare [route matching](https://developers.cloudflare.com/pages/configuration/serving-pages/#route-matching){rel="nofollow"} rules, set the nitro option `autoSubfolderIndex` to `false`.

Alternatively, you can use [wrangler](https://github.com/cloudflare/workers-sdk){rel="nofollow"} to upload your project to Cloudflare.

In this case, you will have to set the preset manually.

1. Build your project for Cloudflare Pages:
   
2. Deploy, it will ask you to create a project for the first time:

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/cloudflare
---
Head over **Nitro documentation** to learn more about the Cloudflare deployment preset.
::

::read-more
---
target: _blank
to: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/#use-bindings-in-your-nuxt-application
---
Head over **CloudFlare Pages** documentation to learn more about it.
::

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atidone
  to: https://github.com/atinux/atidone
  ---
  A todos application with user authentication, SSR and Cloudflare D1.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atinotes
  to: https://github.com/atinux/atinotes
  ---
  An editable website with universal rendering based on Cloudflare KV.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atidraw
  to: https://github.com/atinux/atidraw
  ---
  Web application that lets you to draw and share your drawings with the world, with Cloudflare R2 & AI.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Image Gallery
  to: https://github.com/flosciante/nuxt-image-gallery
  ---
  An image gallery to upload, edit and share your images to the world, with Cloudflare R2.
  :::
::

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/cloudflare
---
Head over **Nitro documentation** to learn more about the cloudflare deployment preset.
::

**Examples:**

Example 1 (unknown):
```unknown
### Direct Upload

Alternatively, you can use [wrangler](https://github.com/cloudflare/workers-sdk){rel="nofollow"} to upload your project to Cloudflare.

In this case, you will have to set the preset manually.

1. Build your project for Cloudflare Pages:
```

Example 2 (unknown):
```unknown
2. Deploy, it will ask you to create a project for the first time:
```

---

## Teleport

**URL:** llms-txt#teleport

Vue 3 provides the [`<Teleport>` component](https://vuejs.org/guide/built-ins/teleport.html){rel="nofollow"} which allows content to be rendered elsewhere in the DOM, outside of the Vue application.

This example shows how to use the `<Teleport>` with client-side and server-side rendering.

::read-more{to="https://nuxt.com/docs/api/components/teleports"}
::

::sandbox
---
branch: main
dir: examples/advanced/teleport
file: app.vue
repo: nuxt/examples
---
::

---

## Introducing Nuxt Scripts

**URL:** llms-txt#introducing-nuxt-scripts

**Contents:**
- Getting to Nuxt Scripts
- Why Build a Third-Party Script Module?
  - 😒 Developer Experience: A Full-Stack Headache
  - 🐌 Performance: "Why can't I get 100 on Lighthouse?"
  - 🛡️ Privacy & Security: Do *no* evil?
- What does Nuxt Scripts do about these issues?
  - Composable: useScript
  - Script Registry
  - Facade Components
  - Consent Management & Element Event Triggers

The Nuxt team, in collaboration with the [Chrome Aurora](https://developer.chrome.com/aurora){rel="nofollow"} team at Google, is excited to announce the public beta release of [Nuxt Scripts](https://scripts.nuxt.com){rel="nofollow"}.

Nuxt Scripts is a better way to work with third-party scripts, providing improved performance, privacy, security, and developer experience.

![Nuxt Scripts Banner](https://nuxt.com/assets/blog/nuxt-scripts/banner.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

## Getting to Nuxt Scripts

Over a year ago, Daniel published the initial [Nuxt Scripts RFC](https://github.com/nuxt/nuxt/discussions/22016){rel="nofollow"}. The RFC proposed a module that would "allow third-party scripts to be managed and optimized, following best practices for performant and compliant websites".

Having [personal experience](https://github.com/harlan-zw/nuxt-delay-hydration){rel="nofollow"} with solving performance issues related to third-party scripts, I knew how difficult these performance optimizations could be. Nonetheless, I was keen to tackle the problem and took over the project.

With the RFC as the seed of the idea, I started prototyping what it could [look like](https://github.com/nuxt/nuxt/discussions/22016#discussioncomment-6527001){rel="nofollow"} using [Unhead](https://unhead.unjs.io/){rel="nofollow"}.

Thinking about what I wanted to build exactly, I found that the real issue wasn't just how to load "optimized" third-party scripts but how to make working with third-party scripts a better experience overall.

## Why Build a Third-Party Script Module?

[94% of sites use at least one third-party provider](https://almanac.httparchive.org/en/2022/third-parties#prevalence){rel="nofollow"}, with the average site having [five third-party providers](https://docs.google.com/spreadsheets/d/1YqoRRsyiNsrEabVLu2nRU98JIG_0zLLuoQhC2nX8xbM/edit?gid=1428106498#gid=1428106498){rel="nofollow"}.

We know that third-party scripts aren't perfect; they [slow down the web](https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript#){rel="nofollow"}, cause privacy and security issues, and are a pain to work with.

However, they are fundamentally useful and aren't going anywhere soon.

By exploring the issues with third-party scripts, we can see where improvements can be made.

### 😒 Developer Experience: A Full-Stack Headache

Let's walk through adding a third-party script to your Nuxt app using a fictional `tracker.js` script that adds a `track` function to the window.

We start by loading the script using `useHead`.

However, let's now try to get the script functionality working in our app.

The following steps are common when working with third-party scripts in Nuxt:

- Everything has to be wrapped for SSR safety.
- Flaky checks for if the script has loaded.
- Augmenting the window object for types.

### 🐌 Performance: "Why can't I get 100 on Lighthouse?"

For a visitor to start interacting with your Nuxt site, the app bundle needs to be downloaded and Vue needs to hydrate the app instance.

Loading third-party scripts can interfere with this hydration process, even when using `async` or `defer`. This slows down the network and blocks the main thread, leading to a degraded user experience and poor [Core Web Vitals](https://web.dev/vitals/){rel="nofollow"}.

The [Chrome User Experience Report](https://developer.chrome.com/docs/crux){rel="nofollow"} shows Nuxt sites with numerous third-party resources typically have poorer [Interaction to Next Paint (INP)](https://web.dev/articles/inp){rel="nofollow"} and [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp){rel="nofollow"} scores.

To see how third-party scripts degrade performance, we can look at the [Web Almanac 2022](https://almanac.httparchive.org/en/2022/third-parties#impact-on-performance){rel="nofollow"}. The report shows that the top 10 third-party scripts **average median blocking time is 1.4 seconds**.

### 🛡️ Privacy & Security: Do *no* evil?

Of the top 10,000 sites, 58% of them have third-party scripts that [exchange tracking IDs stored in external cookies](https://www3.cs.stonybrook.edu/~mikepo/papers/firstparty.www21.pdf){rel="nofollow"}, meaning they can track users across sites even with third-party cookies disabled.

While in many cases our hands are tied with the providers we use, we should try to minimize the amount of our end-users' data that we're leaking where possible.

When we do take on the privacy implications, it can then be difficult to accurately convey these in our privacy policies and build the consent management required to comply with regulations such as GDPR.

Security when using third-party scripts is also a concern. Third-party scripts are common attack vectors for malicious actors, most do not provide `integrity` hashes for their scripts, meaning they can be compromised and inject malicious code into your app at any time.

## What does Nuxt Scripts do about these issues?

### Composable: useScript

This composable sits between the `<script>` tag and the functionality added to `window.{thirdPartyKey}`.

For the `<script>` tag, the composable:

- Gives full visibility into the script's loading and error states
- Loads scripts as Nuxt is hydrating the app by default, for slightly better performance.
- Restricts `crossorigin` and `referrerpolicy` to improve privacy and security.
- Provides a way to [delay loading the script](https://scripts.nuxt.com/docs/guides/script-triggers){rel="nofollow"} until you need it.

For the scripts API, it:

- Provides full type-safety around the script's functions
- Adds a proxy layer allowing your app to run when the script functions in unsafe contexts (SSR, before the script is loaded, the script is blocked)

The [script registry](https://scripts.nuxt.com/scripts){rel="nofollow"} is a collection of first-party integrations for common third-party scripts. As of release, we support 21 scripts, with more to come.

![Nuxt Scripts Registry](https://nuxt.com/assets/blog/nuxt-scripts/registry.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

These registry scripts are fine-tuned wrappers around `useScript` with full type-safety, runtime validation of the script options (dev only) and environment variable support

For example, we can look at the [Fathom Analytics](https://scripts.nuxt.com/scripts/analytics/fathom-analytics){rel="nofollow"} script.

### Facade Components

The registry includes several [facade components](https://scripts.nuxt.com/docs/guides/facade-components){rel="nofollow"}, such as
[Google Maps](https://scripts.nuxt.com/scripts/content/google-maps){rel="nofollow"}, [YouTube](https://scripts.nuxt.com/scripts/content/youtube-player){rel="nofollow"} and [Intercom](https://scripts.nuxt.com/scripts/support/intercom){rel="nofollow"}.

Facade components are "fake" components that get hydrated when the third-party script loads. Facade components
have trade-offs but can drastically improve your performance. See the [What are Facade Components?](https://scripts.nuxt.com/docs/guides/facade-components#what-are-facade-components){rel="nofollow"}
guide for more information.

Nuxt Scripts provides facade components as accessible but headless, meaning they are not styled by default but add the necessary
a16y data.

::tabs
  :::tabs-item{label="Output"}
    ::::youtube-demo
    ::::
  :::

:::tabs-item{label="Input"}
  
  :::
::

### Consent Management & Element Event Triggers

The `useScript` composable gives you full control over how and when your scripts are loaded, by either providing a custom `trigger` or manually calling the `load()` function.

Building on top of this, Nuxt Scripts provides advanced triggers to make it even easier.

- [Consent Management](https://scripts.nuxt.com/docs/guides/consent){rel="nofollow"} - Load scripts only after the user has given consent such as with a cookie banner.
- [Element Event Triggers](https://scripts.nuxt.com/docs/guides/script-triggers#element-event-triggers){rel="nofollow"} - Load scripts based on user interactions such as scrolling, clicking, or form submissions.

In many cases, we're loading third-party scripts from a domain that we don't control. This can lead to a number of issues:

- Privacy: The third-party script can track users across sites.
- Security: The third-party script can be compromised and inject malicious code.
- Performance: Extra DNS lookups will slow down the page load.
- Developer Experience: Consented scripts may be blocked by ad blockers.

To mitigate this, Nuxt Scripts provides a way to bundle third-party scripts into your public directory without any extra work.

The script will now be served from `/_scripts/{hash}` on your own domain.

As we saw, there are many opportunities to improve third-party scripts for developers and end-users.

The initial release of Nuxt Scripts has solved *some* of these issues, but there's still a lot of work ahead of us.

The next items on the roadmap are:

- [Add web worker support (Partytown)](https://github.com/nuxt/scripts/issues/182){rel="nofollow"}
- [More Live Chat Facade Components](https://github.com/nuxt/scripts/issues/44){rel="nofollow"}
- [Offload Scripts To Nuxt Server Proxy](https://github.com/nuxt/scripts/issues/87){rel="nofollow"}
- [Iframe Script Sandboxing](https://github.com/nuxt/scripts/issues/131){rel="nofollow"}

We'd love to have your contribution and support.

To get started with Nuxt Scripts, we've created a [tutorial](https://scripts.nuxt.com/docs/getting-started/confetti-tutorial){rel="nofollow"} to help you get up and running.

- [Harlan Wilton - Nuxt](https://github.com/harlan-zw){rel="nofollow"} (author)
- [Julien Huang - Nuxt](https://github.com/huang-julien){rel="nofollow"} (contributor)
- [Daniel Roe - Nuxt](https://github.com/danielroe){rel="nofollow"} (contributor)
- [Chrome Aurora - Google](https://developer.chrome.com/aurora){rel="nofollow"} (contributor)

And a big thank you to the early contributors.

![Nuxt Scripts Contributors](https://nuxt.com/assets/blog/nuxt-scripts/contributors.png){.border.border-gray-200.dark:border-gray-700.rounded-lg}

**Examples:**

Example 1 (ts):
```ts
useHead({ script: [{ src: '/tracker.js', defer: true }] })
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

## Data Fetching

**URL:** llms-txt#data-fetching

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/server"}
::

::sandbox
---
branch: main
dir: examples/features/data-fetching
file: app.vue
repo: nuxt/examples
---
::

---

## Configuration

**URL:** llms-txt#configuration

**Contents:**
- `nuxt.config`
  - Migration
- Modules
  - Migration
- Directory Changes
- TypeScript
  - Migration
- Vue Changes
- Vuex

The starting point for your Nuxt app remains your `nuxt.config` file.

::note
Nuxt configuration will be loaded using [`unjs/jiti`](https://github.com/unjs/jiti){rel="nofollow"} and [`unjs/c12`](https://github.com/unjs/c12){rel="nofollow"}.
::

1. You should migrate to the new `defineNuxtConfig` function that provides a typed configuration schema. :code-group[]
2. If you were using `router.extendRoutes` you can migrate to the new `pages:extend` hook: :code-group[]
3. If you were using `router.routeNameSplitter` you can achieve same result by updating route name generation logic in the new `pages:extend` hook: :code-group[]

Nuxt 3 is an [ESM native framework](https://nuxt.com/docs/3.x/guide/concepts/esm). Although [`unjs/jiti`](https://github.com/unjs/jiti){rel="nofollow"} provides semi compatibility when loading `nuxt.config` file, avoid any usage of `require` and `module.exports` in this file.

1. Change `module.exports` to `export default`
2. Change `const lib = require('lib')` to `import lib from 'lib'`

#### Async Configuration

In order to make Nuxt loading behavior more predictable, async config syntax is deprecated. Consider using Nuxt hooks for async operations.

Nuxt has built-in support for loading `.env` files. Avoid directly importing it from `nuxt.config`.

Nuxt and Nuxt Modules are now build-time-only.

1. Move all your `buildModules` into `modules`.
2. Check for Nuxt 3 compatibility of modules.
3. If you have any local modules pointing to a directory you should update this to point to the entry file:

::tip
If you are a module author, you can check out [more information about module compatibility](https://nuxt.com/docs/3.x/migration/module-authors) and [our module author guide](https://nuxt.com/docs/3.x/guide/going-further/modules).
::

The `static/` (for storing static assets) has been renamed to `public/`. You can either rename your `static` directory to `public`, or keep the name by setting `dir.public` in your `nuxt.config`.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/public"}
::

It will be much easier to migrate your application if you use Nuxt's TypeScript integration. This does not mean you need to write your application in TypeScript, just that Nuxt will provide automatic type hints for your editor.

You can read more about Nuxt's TypeScript support [in the docs](https://nuxt.com/docs/3.x/guide/concepts/typescript).

::note
Nuxt can type-check your app using [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc){rel="nofollow"} with `nuxt typecheck` command.
::

1. Create a `tsconfig.json` with the following content:
   
2. Run `npx nuxt prepare` to generate `.nuxt/tsconfig.json`.
3. Install Volar following the instructions in the [docs](https://nuxt.com/docs/3.x/getting-started/introduction#prerequisites).

There are a number of changes to what is recommended Vue best practice, as well as a number of breaking changes between Vue 2 and 3.

It is recommended to read the [Vue 3 migration guide](https://v3-migration.vuejs.org){rel="nofollow"} and in particular the [breaking changes list](https://v3-migration.vuejs.org/breaking-changes){rel="nofollow"}.

It is not currently possible to use the [Vue 3 migration build](https://v3-migration.vuejs.org/migration-build.html){rel="nofollow"} with Nuxt 3.

Nuxt no longer provides a Vuex integration. Instead, the official Vue recommendation is to use `pinia`, which has built-in Nuxt support via a [Nuxt module](https://pinia.vuejs.org/ssr/nuxt.html){rel="nofollow"}. [Find out more about pinia here](https://pinia.vuejs.org){rel="nofollow"}.

A simple way to provide global state management with pinia would be:

Install the [`@pinia/nuxt`](https://nuxt.com/modules/pinia) module:

Enable the module in your nuxt configuration:

Create a `store` folder at the root of your application:

Create a [plugin](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) file to globalize your store:

If you want to keep using Vuex, you can manually migrate to Vuex 4 following [these steps](https://vuex.vuejs.org/guide/migrating-to-4-0-from-3-x.html){rel="nofollow"}.

Once it's done you will need to add the following plugin to your Nuxt app:

For larger apps, this migration can entail a lot of work. If updating Vuex still creates roadblocks, you may want to use the community module: [nuxt3-vuex-module](https://github.com/vedmant/nuxt3-vuex#nuxt3-vuex-module){rel="nofollow"}, which should work out of the box.

**Examples:**

Example 1 (diff):
```diff
export default defineNuxtConfig({
    modules: [
-     '~/modules/my-module'
+     '~/modules/my-module/index'
    ]
  })
```

Example 2 (json):
```json
{
     "extends": "./.nuxt/tsconfig.json"
   }
```

Example 3 (unknown):
```unknown
Enable the module in your nuxt configuration:
```

Example 4 (unknown):
```unknown
Create a `store` folder at the root of your application:
```

---

## Nuxt 3.11

**URL:** llms-txt#nuxt-3.11

**Contents:**
- 🪵 Better logging
- 🎨 Preview mode
- 💰 Cache-busting payloads
- 👮‍♂️ Middleware `routeRules`
- ⌫ New `clear` data fetching utility
- 🕳️ New `#teleports` target
- 🚦 Loading indicator and transition controls
- 🛍️ Server- and client-only pages
- 🤠 Server component bonanza
- 🔥 Performance improvements

This is possibly the last minor release before Nuxt v4, and so we've packed it full of features and improvements we hope will delight you! ✨

When developing a Nuxt application and using `console.log` in your application, you may have noticed that these logs are not displayed in your browser console when refreshing the page (during server-side rendering). This can be frustrating, as it makes it difficult to debug your application. This is now a thing of the past!

Now, when you have server logs associated with a request, they will be bundled up and passed to the client and displayed in your browser console. [Asynchronous context](https://nodejs.org/docs/latest-v20.x/api/async_context.html){rel="nofollow"} is used to track and associate these logs with the request that triggered them. ([#25936](https://github.com/nuxt/nuxt/pull/25936){rel="nofollow"}).

For example, this code:

will now log to your browser console when you refresh the page:

👉 We also plan to support streaming of subsequent logs to the Nuxt DevTools in future.

We've also added a `dev:ssr-logs` hook (both in Nuxt and Nitro) which is called on server and client, allowing you to handle them yourself if you want to.

If you encounter any issues with this, it is possible to disable them - or prevent them from logging to your browser console.

A new `usePreviewMode` composable aims to make it simple to use preview mode in your Nuxt app.

When preview mode is enabled, all your data fetching composables, like `useAsyncData` and `useFetch` will rerun, meaning any cached data in the payload will be bypassed.

::read-more{to="https://nuxt.com/docs/api/composables/use-preview-mode"}
::

## 💰 Cache-busting payloads

We now automatically cache-bust your payloads if you haven't disabled Nuxt's app manifest, meaning you shouldn't be stuck with outdated data after a deployment ([#26068](https://github.com/nuxt/nuxt/pull/26068){rel="nofollow"}).

## 👮‍♂️ Middleware `routeRules`

It's now possible to define middleware for page paths within the Vue app part of your application (that is, not your Nitro routes) ([#25841](https://github.com/nuxt/nuxt/pull/25841){rel="nofollow"}).

::read-more{to="https://nuxt.com/docs/guide/concepts/rendering#route-rules"}
::

## ⌫ New `clear` data fetching utility

Now, `useAsyncData` and `useFetch` expose a `clear` utility. This is a function that can be used to set `data` to undefined, set `error` to `null`, set `pending` to `false`, set `status` to `idle`, and mark any currently pending requests as cancelled. ([#26259](https://github.com/nuxt/nuxt/pull/26259){rel="nofollow"})

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

## 🕳️ New `#teleports` target

Nuxt now includes a new `<div id="teleports"></div>` element in your app within your `<body>` tag. It supports server-side teleports, meaning you can do this safely on the server:

## 🚦 Loading indicator and transition controls

It's now possible to set custom timings for hiding the loading indicator, and forcing the `finish()` method if needed ([#25932](https://github.com/nuxt/nuxt/pull/25932){rel="nofollow"}).

There's also a new `page:view-transition:start` hook for hooking into the View Transitions API ([#26045](https://github.com/nuxt/nuxt/pull/26045){rel="nofollow"}) if you have that feature enabled.

## 🛍️ Server- and client-only pages

This release sees server- and client-only pages land in Nuxt! You can now add a `.server.vue` or `.client.vue` suffix to a page to get automatic handling of it.

**Client-only pages** will render entirely on the client-side, and skip server-rendering entirely, just as if the entire page was wrapped in `<ClientOnly>`. Use this responsibly. The flash of load on the client-side can be a bad user experience so make sure you really need to avoid server-side loading. Also consider using `<ClientOnly>` with a `fallback` slot to render a skeleton loader ([#25037](https://github.com/nuxt/nuxt/pull/25037){rel="nofollow"}).

⚗️ **Server-only pages** are even more useful because they enable you to integrate fully-server rendered HTML within client-side navigation. They will even be prefetched when links to them are in the viewport - so you will get instantaneous loading ([#24954](https://github.com/nuxt/nuxt/pull/24954){rel="nofollow"}).

## 🤠 Server component bonanza

When you are using server components, you can now use the `nuxt-client` attribute anywhere within your tree ([#25479](https://github.com/nuxt/nuxt/pull/25479){rel="nofollow"}).

You can listen to an `@error` event from server components that will be triggered if there is any issue loading the component ([#25798](https://github.com/nuxt/nuxt/pull/25798){rel="nofollow"}).

Finally, server-only components are now smartly enabled when you have a server-only component or a server-only page within your project or any of its layers ([#26223](https://github.com/nuxt/nuxt/pull/26223){rel="nofollow"}).

::callout{type="warning"}
Server components remain experimental and their API may change, so be careful
before depending on implementation details.
::

## 🔥 Performance improvements

We've shipped a number of performance improvements, including only updating changed virtual templates ([#26250](https://github.com/nuxt/nuxt/pull/26250){rel="nofollow"}), using a 'layered' prerender cache ([#26104](https://github.com/nuxt/nuxt/pull/26104){rel="nofollow"}) that falls back to filesystem instead of keeping everything in memory when prerendering - and lots of other examples.

## 📂 Public assets handling

We have shipped a reimplementation of Vite's public asset handling, meaning that public assets in your `public/` directory or your layer directories are now resolved entirely by Nuxt ([#26163](https://github.com/nuxt/nuxt/pull/26163){rel="nofollow"}), so if you have added `nitro.publicAssets` directories with a custom prefix, these will now work.

We have changed the default `_nuxt/[name].[hash].js` file name pattern for your JS chunks. Now, we default to `_nuxt/[hash].js`. This is to avoid false positives by ad blockers triggering off your component or chunk names, which can be a very difficult issue to debug. ([#26203](https://github.com/nuxt/nuxt/pull/26203){rel="nofollow"})

You can easily configure this to revert to previous behaviour if you wish:

Previously users with `shamefully-hoist=false` may have encountered issues with types not being resolved or working correctly. You may also have encountered problems with excessive type instantiation.

We now try to tell TypeScript about certain key types so they can be resolved even if deeply nested ([#26158](https://github.com/nuxt/nuxt/pull/26158){rel="nofollow"}).

There are a whole raft of other type fixes, including some regarding import types ([#26218](https://github.com/nuxt/nuxt/pull/26218){rel="nofollow"} and [#25965](https://github.com/nuxt/nuxt/pull/25965){rel="nofollow"}) and module typings ([#25548](https://github.com/nuxt/nuxt/pull/25548){rel="nofollow"}).

As usual, our recommendation for upgrading Nuxt is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## 👉 Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.11.0
---
Read the full release notes of Nuxt `v3.11.0`.
::

Thank you for reading this far! We hope you enjoy the new release. Please do let us know if you have any feedback or issues.

**Examples:**

Example 1 (unknown):
```unknown
will now log to your browser console when you refresh the page:
```

Example 2 (unknown):
```unknown
👉 We also plan to support streaming of subsequent logs to the Nuxt DevTools in future.

We've also added a `dev:ssr-logs` hook (both in Nuxt and Nitro) which is called on server and client, allowing you to handle them yourself if you want to.

If you encounter any issues with this, it is possible to disable them - or prevent them from logging to your browser console.
```

Example 3 (unknown):
```unknown
## 🎨 Preview mode

A new `usePreviewMode` composable aims to make it simple to use preview mode in your Nuxt app.
```

Example 4 (unknown):
```unknown
When preview mode is enabled, all your data fetching composables, like `useAsyncData` and `useFetch` will rerun, meaning any cached data in the payload will be bypassed.

::read-more{to="https://nuxt.com/docs/api/composables/use-preview-mode"}
::

## 💰 Cache-busting payloads

We now automatically cache-bust your payloads if you haven't disabled Nuxt's app manifest, meaning you shouldn't be stuck with outdated data after a deployment ([#26068](https://github.com/nuxt/nuxt/pull/26068){rel="nofollow"}).

## 👮‍♂️ Middleware `routeRules`

It's now possible to define middleware for page paths within the Vue app part of your application (that is, not your Nitro routes) ([#25841](https://github.com/nuxt/nuxt/pull/25841){rel="nofollow"}).
```

---

## useNuxtApp

**URL:** llms-txt#usenuxtapp

**Contents:**
- Methods
  - `provide (name, value)`
  - `hook(name, cb)`
  - `callHook(name, ...args)`
- Properties
  - `vueApp`
  - `ssrContext`
  - `payload`
  - `isHydrating`
  - `runWithContext`

`useNuxtApp` is a built-in composable that provides a way to access shared runtime context of Nuxt, also known as the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context), which is available on both client and server side (but not within Nitro routes). It helps you access the Vue app instance, runtime hooks, runtime config variables and internal states, such as `ssrContext` and `payload`.

If runtime context is unavailable in your scope, `useNuxtApp` will throw an exception when called. You can use [`tryUseNuxtApp`](https://nuxt.com/#tryusenuxtapp) instead for composables that do not require `nuxtApp`, or to simply check if context is available or not without an exception.

### `provide (name, value)`

`nuxtApp` is a runtime context that you can extend using [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins). Use the `provide` function to create Nuxt plugins to make values and helper methods available in your Nuxt application across all composables and components.

`provide` function accepts `name` and `value` parameters.

As you can see in the example above, `$hello` has become the new and custom part of `nuxtApp` context and it is available in all places where `nuxtApp` is accessible.

Hooks available in `nuxtApp` allows you to customize the runtime aspects of your Nuxt application. You can use runtime hooks in Vue.js composables and [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) to hook into the rendering lifecycle.

`hook` function is useful for adding custom logic by hooking into the rendering lifecycle at a specific point. `hook` function is mostly used when creating Nuxt plugins.

See [Runtime Hooks](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) for available runtime hooks called by Nuxt.

### `callHook(name, ...args)`

`callHook` returns a promise when called with any of the existing hooks.

`useNuxtApp()` exposes the following properties that you can use to extend and customize your app and share state, data and variables.

`vueApp` is the global Vue.js [application instance](https://vuejs.org/api/application.html#application-api){rel="nofollow"} that you can access through `nuxtApp`.

- [`component()`](https://vuejs.org/api/application.html#app-component){rel="nofollow"} - Registers a global component if passing both a name string and a component definition, or retrieves an already registered one if only the name is passed.
- [`directive()`](https://vuejs.org/api/application.html#app-directive){rel="nofollow"} - Registers a global custom directive if passing both a name string and a directive definition, or retrieves an already registered one if only the name is passed[(example)](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#vue-directives).
- [`use()`](https://vuejs.org/api/application.html#app-use){rel="nofollow"&#x7D; - Installs a &#x2A;*[Vue.js Plugin](https://vuejs.org/guide/reusability/plugins.html){rel="nofollow"}** [(example)](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#vue-plugins).

::read-more
---
icon: i-simple-icons-vuedotjs
to: https://vuejs.org/api/application.html#application-api
---
::

`ssrContext` is generated during server-side rendering and it is only available on the server side.

Nuxt exposes the following properties through `ssrContext`:

- `url` (string) - Current request url.
- `event` ([h3js/h3](https://github.com/h3js/h3){rel="nofollow"} request event) - Access the request & response of the current route.
- `payload` (object) - NuxtApp payload object.

`payload` exposes data and state variables from server side to client side. The following keys will be available on the client after they have been passed from the server side:

- `serverRendered` (boolean) - Indicates if response is server-side-rendered.
- `data` (object) - When you fetch the data from an API endpoint using either [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) or [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) , resulting payload can be accessed from the `payload.data`. This data is cached and helps you prevent fetching the same data in case an identical request is made more than once. :code-group[]:br After fetching the value of `count` using [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) in the example above, if you access `payload.data`, you will see `{ count: 1 }` recorded there. :br When accessing the same `payload.data` from [`ssrcontext`](https://nuxt.com/#ssrcontext), you can access the same value on the server side as well.
- `state` (object) - When you use [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) composable in Nuxt to set shared state, this state data is accessed through `payload.state.[name-of-your-state]`.
  
  :brIt is also possible to use more advanced types, such as `ref`, `reactive`, `shallowRef`, `shallowReactive` and `NuxtError`. :br Since [Nuxt v3.4](https://nuxt.com/blog/v3-4#payload-enhancements){rel="nofollow"}, it is possible to define your own reducer/reviver for types that are not supported by Nuxt. :video-accordion{title="Watch a video from Alexander Lichter about serializing payloads, especially with regards to classes" video-id="8w6ffRBs8a4"}:br In the example below, we define a reducer (or a serializer) and a reviver (or deserializer) for the [Luxon](https://moment.github.io/luxon/#/){rel="nofollow"} DateTime class, using a payload plugin.

Use `nuxtApp.isHydrating` (boolean) to check if the Nuxt app is hydrating on the client side.

::note
You are likely here because you got a "Nuxt instance unavailable" message. Please use this method sparingly, and report examples that are causing issues, so that it can ultimately be solved at the framework level.
::

The `runWithContext` method is meant to be used to call a function and give it an explicit Nuxt context. Typically, the Nuxt context is passed around implicitly and you do not need to worry about this. However, when working with complex `async`/`await` scenarios in middleware/plugins, you can run into instances where the current instance has been unset after an async call.

- `functionWithContext`: Any function that requires the context of the current Nuxt application. This context will be correctly applied automatically.

`runWithContext` will return whatever is returned by `functionWithContext`.

#### A Deeper Explanation of Context

Vue.js Composition API (and Nuxt composables similarly) work by depending on an implicit context. During the lifecycle, Vue sets the temporary instance of the current component (and Nuxt temporary instance of nuxtApp) to a global variable and unsets it in same tick. When rendering on the server side, there are multiple requests from different users and nuxtApp running in a same global context. Because of this, Nuxt and Vue immediately unset this global instance to avoid leaking a shared reference between two users or components.

What it does mean? The Composition API and Nuxt Composables are only available during lifecycle and in same tick before any async operation:

The classic solution to this, is caching the current instance on first call to a local variable like `const instance = getCurrentInstance()` and use it in the next composable call but the issue is that any nested composable calls now needs to explicitly accept the instance as an argument and not depend on the implicit context of composition-api. This is design limitation with composables and not an issue per-se.

To overcome this limitation, Vue does some behind the scenes work when compiling our application code and restores context after each call for `<script setup>`:

For a better description of what Vue actually does, see [unjs/unctx#2 (comment)](https://github.com/unjs/unctx/issues/2#issuecomment-942193723){rel="nofollow"}.

This is where `runWithContext` can be used to restore context, similarly to how `<script setup>` works.

Nuxt internally uses [unjs/unctx](https://github.com/unjs/unctx){rel="nofollow"} to support composables similar to Vue for plugins and middleware. This enables composables like `navigateTo()` to work without directly passing `nuxtApp` to them - bringing the DX and performance benefits of Composition API to the whole Nuxt framework.

Nuxt composables have the same design as the Vue Composition API and therefore need a similar solution to magically do this transform. Check out [unjs/unctx#2](https://github.com/unjs/unctx/issues/2){rel="nofollow"} (proposal), [unjs/unctx#4](https://github.com/unjs/unctx/pull/4){rel="nofollow"} (transform implementation), and [nuxt/framework#3884](https://github.com/nuxt/framework/pull/3884){rel="nofollow"} (Integration to Nuxt).

Vue currently only supports async context restoration for `<script setup>` for async/await usage. In Nuxt, the transform support for `defineNuxtPlugin()` and `defineNuxtRouteMiddleware()` was added, which means when you use them Nuxt automatically transforms them with context restoration.

#### Remaining Issues

The `unjs/unctx` transformation to automatically restore context seems buggy with `try/catch` statements containing `await` which ultimately needs to be solved in order to remove the requirement of the workaround suggested above.

#### Native Async Context

Using a new experimental feature, it is possible to enable native async context support using [Node.js `AsyncLocalStorage`](https://nodejs.org/api/async_context.html#class-asynclocalstorage){rel="nofollow"} and new unctx support to make async context available **natively** to **any nested async composable** without needing a transform or manual passing/calling with context.

::tip
Native async context support works currently in Bun and Node.
::

::read-more
---
to: https://nuxt.com/docs/guide/going-further/experimental-features#asynccontext
---
::

This function works exactly the same as `useNuxtApp`, but returns `null` if context is unavailable instead of throwing an exception.

You can use it for composables that do not require `nuxtApp`, or to simply check if context is available or not without an exception.

**Examples:**

Example 1 (unknown):
```unknown
If runtime context is unavailable in your scope, `useNuxtApp` will throw an exception when called. You can use [`tryUseNuxtApp`](https://nuxt.com/#tryusenuxtapp) instead for composables that do not require `nuxtApp`, or to simply check if context is available or not without an exception.

## Methods

### `provide (name, value)`

`nuxtApp` is a runtime context that you can extend using [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins). Use the `provide` function to create Nuxt plugins to make values and helper methods available in your Nuxt application across all composables and components.

`provide` function accepts `name` and `value` parameters.
```

Example 2 (unknown):
```unknown
As you can see in the example above, `$hello` has become the new and custom part of `nuxtApp` context and it is available in all places where `nuxtApp` is accessible.

### `hook(name, cb)`

Hooks available in `nuxtApp` allows you to customize the runtime aspects of your Nuxt application. You can use runtime hooks in Vue.js composables and [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) to hook into the rendering lifecycle.

`hook` function is useful for adding custom logic by hooking into the rendering lifecycle at a specific point. `hook` function is mostly used when creating Nuxt plugins.

See [Runtime Hooks](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) for available runtime hooks called by Nuxt.
```

Example 3 (unknown):
```unknown
### `callHook(name, ...args)`

`callHook` returns a promise when called with any of the existing hooks.
```

Example 4 (unknown):
```unknown
## Properties

`useNuxtApp()` exposes the following properties that you can use to extend and customize your app and share state, data and variables.

### `vueApp`

`vueApp` is the global Vue.js [application instance](https://vuejs.org/api/application.html#application-api){rel="nofollow"} that you can access through `nuxtApp`.

Some useful methods:

- [`component()`](https://vuejs.org/api/application.html#app-component){rel="nofollow"} - Registers a global component if passing both a name string and a component definition, or retrieves an already registered one if only the name is passed.
- [`directive()`](https://vuejs.org/api/application.html#app-directive){rel="nofollow"} - Registers a global custom directive if passing both a name string and a directive definition, or retrieves an already registered one if only the name is passed[(example)](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#vue-directives).
- [`use()`](https://vuejs.org/api/application.html#app-use){rel="nofollow"&#x7D; - Installs a &#x2A;*[Vue.js Plugin](https://vuejs.org/guide/reusability/plugins.html){rel="nofollow"}** [(example)](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#vue-plugins).

::read-more
---
icon: i-simple-icons-vuedotjs
to: https://vuejs.org/api/application.html#application-api
---
::

### `ssrContext`

`ssrContext` is generated during server-side rendering and it is only available on the server side.

Nuxt exposes the following properties through `ssrContext`:

- `url` (string) - Current request url.
- `event` ([h3js/h3](https://github.com/h3js/h3){rel="nofollow"} request event) - Access the request & response of the current route.
- `payload` (object) - NuxtApp payload object.

### `payload`

`payload` exposes data and state variables from server side to client side. The following keys will be available on the client after they have been passed from the server side:

- `serverRendered` (boolean) - Indicates if response is server-side-rendered.
- `data` (object) - When you fetch the data from an API endpoint using either [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) or [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) , resulting payload can be accessed from the `payload.data`. This data is cached and helps you prevent fetching the same data in case an identical request is made more than once. :code-group[
```

---

## Components

**URL:** llms-txt#components

**Contents:**
- `addComponentsDir`
  - Usage
  - Type
  - Parameters
- `addComponent`
  - Usage
  - Type
  - Parameters
  - Examples

Components are the building blocks of your Nuxt application. They are reusable Vue instances that can be used to create a user interface. In Nuxt, components from the components directory are automatically imported by default. However, if you need to import components from an alternative directory or wish to selectively import them as needed, `@nuxt/kit` provides the `addComponentsDir` and `addComponent` methods. These utils allow you to customize the component configuration to better suit your needs.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/injecting-components-and-component-directories?friend=nuxt
---
Watch Vue School video about injecting components.
::

## `addComponentsDir`

Register a directory to be scanned for components and imported only when used. Keep in mind, that this does not register components globally, until you specify `global: true` option.

`dir` An object with the following properties:

| Property          | Type                                                                                                                                                                                         | Required | Description                                                                                                                                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`            | `string`                                                                                                                                                                                     | `true`   | Path (absolute or relative) to the directory containing your components. You can use Nuxt aliases (\~ or @) to refer to directories inside project or directly use an npm package path similar to require.                                                              |
| `pattern`         | `string | string[]`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                                                        | `false`  | Accept Pattern that will be run against specified path.                                                                                                                                                                                                                 |
| `ignore`          | `string[]`                                                                                                                                                                                   | `false`  | Ignore patterns that will be run against specified path.                                                                                                                                                                                                                |
| `prefix`          | `string`                                                                                                                                                                                     | `false`  | Prefix all matched components with this string.                                                                                                                                                                                                                         |
| `pathPrefix`      | `boolean`                                                                                                                                                                                    | `false`  | Prefix component name by its path.                                                                                                                                                                                                                                      |
| `prefetch`        | `boolean`                                                                                                                                                                                    | `false`  | These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on [webpack documentation](https://webpack.js.org/api/module-methods/#magic-comments){rel="nofollow"} |
| `preload`         | `boolean`                                                                                                                                                                                    | `false`  | These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on [webpack documentation](https://webpack.js.org/api/module-methods/#magic-comments){rel="nofollow"} |
| `isAsync`         | `boolean`                                                                                                                                                                                    | `false`  | This flag indicates, component should be loaded async (with a separate chunk) regardless of using Lazy prefix or not.                                                                                                                                                   |
| `extendComponent` | `(component: Component) => Promise<Component | void> | (Component | void)`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called for each component found in the directory. It accepts a component object and should return a component object or a promise that resolves to a component object.                                                                          |
| `global`          | `boolean`                                                                                                                                                                                    | `false`  | If enabled, registers components to be globally available.                                                                                                                                                                                                              |
| `island`          | `boolean`                                                                                                                                                                                    | `false`  | If enabled, registers components as islands. You can read more about islands in [`<NuxtIsland/>`](https://nuxt.com/docs/3.x/api/components/nuxt-island#nuxtisland) component description.                                                                               |
| `watch`           | `boolean`                                                                                                                                                                                    | `false`  | Watch specified path for changes, including file additions and file deletions.                                                                                                                                                                                          |
| `extensions`      | `string[]`                                                                                                                                                                                   | `false`  | Extensions supported by Nuxt builder.                                                                                                                                                                                                                                   |
| `transpile`       | `'auto' | boolean`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                                                         | `false`  | Transpile specified path using build.transpile. If set to `'auto'`, it will set `transpile: true` if `node_modules/` is in path.                                                                                                                                        |

| Property  | Type      | Required | Description                                                                                          |
| --------- | --------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `prepend` | `boolean` | `false`  | If set to `true`, the directory will be prepended to the array with `unshift()` instead of `push()`. |

Register a component to be automatically imported.

`options`: An object with the following properties:

| Property          | Type                                                                                                                                            | Required | Description                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | `string`                                                                                                                                        | `true`   | Component name.                                                                                                                                                                                                                                                         |
| `filePath`        | `string`                                                                                                                                        | `true`   | Path to the component.                                                                                                                                                                                                                                                  |
| `declarationPath` | `string`                                                                                                                                        | `false`  | Path to component's declaration file. It is used to generate components' [type templates](https://nuxt.com/docs/4.x/api/kit/templates#addtypetemplate); if not provided, `filePath` is used instead.                                                                    |
| `pascalName`      | `string`                                                                                                                                        | `false`  | Pascal case component name. If not provided, it will be generated from the component name.                                                                                                                                                                              |
| `kebabName`       | `string`                                                                                                                                        | `false`  | Kebab case component name. If not provided, it will be generated from the component name.                                                                                                                                                                               |
| `export`          | `string`                                                                                                                                        | `false`  | Specify named or default export. If not provided, it will be set to `'default'`.                                                                                                                                                                                        |
| `shortPath`       | `string`                                                                                                                                        | `false`  | Short path to the component. If not provided, it will be generated from the component path.                                                                                                                                                                             |
| `chunkName`       | `string`                                                                                                                                        | `false`  | Chunk name for the component. If not provided, it will be generated from the component name.                                                                                                                                                                            |
| `prefetch`        | `boolean`                                                                                                                                       | `false`  | These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on [webpack documentation](https://webpack.js.org/api/module-methods/#magic-comments){rel="nofollow"} |
| `preload`         | `boolean`                                                                                                                                       | `false`  | These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on [webpack documentation](https://webpack.js.org/api/module-methods/#magic-comments){rel="nofollow"} |
| `global`          | `boolean`                                                                                                                                       | `false`  | If enabled, registers component to be globally available.                                                                                                                                                                                                               |
| `island`          | `boolean`                                                                                                                                       | `false`  | If enabled, registers component as island. You can read more about islands in [`<NuxtIsland/>`](https://nuxt.com/docs/3.x/api/components/nuxt-island#nuxtisland) component description.                                                                                 |
| `mode`            | `'client' | 'server' | 'all'`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | This options indicates if component should render on client, server or both. By default, it will render on both client and server.                                                                                                                                      |
| `priority`        | `number`                                                                                                                                        | `false`  | Priority of the component, if multiple components have the same name, the one with the highest priority will be used.                                                                                                                                                   |

If you want to auto-import a component from an npm package, and the component is a named export (rather than the default), you can use the `export` option to specify it.

**Examples:**

Example 1 (ts):
```ts
export default defineNuxtModule({
  meta: {
    name: '@nuxt/ui',
    configKey: 'ui',
  },
  setup () {
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: 'U',
      pathPrefix: false,
    })
  },
})
```

Example 2 (ts):
```ts
function addComponentsDir (dir: ComponentsDir, opts: { prepend?: boolean } = {}): void
```

Example 3 (ts):
```ts
import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@nuxt/image',
    configKey: 'image',
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'NuxtImg',
      filePath: resolver.resolve('./runtime/components/NuxtImg.vue'),
    })

    addComponent({
      name: 'NuxtPicture',
      filePath: resolver.resolve('./runtime/components/NuxtPicture.vue'),
    })
  },
})
```

Example 4 (ts):
```ts
function addComponent (options: AddComponentOptions): void
```

---

## useLazyAsyncData

**URL:** llms-txt#uselazyasyncdata

**Contents:**
- Description
- Example

By default, [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) blocks navigation until its async handler is resolved. `useLazyAsyncData` provides a wrapper around [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) that triggers navigation before the handler is resolved by setting the `lazy` option to `true`.

::note
`useLazyAsyncData` has the same signature as [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data).
::

::read-more{to="https://nuxt.com/docs/api/composables/use-async-data"}
::

::warning
`useLazyAsyncData` is a reserved function name transformed by the compiler, so you should not name your own function `useLazyAsyncData`.
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

---

## Styling

**URL:** llms-txt#styling

**Contents:**
- Local Stylesheets
  - Importing Within Components
  - The CSS Property
  - Working With Fonts
  - Stylesheets Distributed Through NPM
- External Stylesheets
  - Dynamically Adding Stylesheets
  - Modifying The Rendered Head With A Nitro Plugin
- Using Preprocessors
  - Preprocessor Workers (Experimental)

Nuxt is highly flexible when it comes to styling. Write your own styles, or reference local and external stylesheets.
You can use CSS preprocessors, CSS frameworks, UI libraries and Nuxt modules to style your application.

If you're writing local stylesheets, the natural place to put them is the [`assets/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/assets).

### Importing Within Components

You can import stylesheets in your pages, layouts and components directly.
You can use a JavaScript import, or a CSS [`@import` statement](https://developer.mozilla.org/en-US/docs/Web/CSS/@import){rel="nofollow"}.

::tip
The stylesheets will be inlined in the HTML rendered by Nuxt.
::

You can also use the `css` property in the Nuxt configuration.
The natural place for your stylesheets is the [`assets/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/assets). You can then reference its path and Nuxt will include it to all the pages of your application.

::tip
The stylesheets will be inlined in the HTML rendered by Nuxt, injected globally and present in all pages.
::

### Working With Fonts

Place your local fonts files in your `public/` directory, for example in `public/fonts`. You can then reference them in your stylesheets using `url()`.

Then reference your fonts by name in your stylesheets, pages or components:

### Stylesheets Distributed Through NPM

You can also reference stylesheets that are distributed through npm. Let's use the popular `animate.css` library as an example.

::code-group{sync="pm"}

Then you can reference it directly in your pages, layouts and components:

The package can also be referenced as a string in the css property of your Nuxt configuration.

## External Stylesheets

You can include external stylesheets in your application by adding a link element in the head section of your nuxt.config file. You can achieve this result using different methods. Note that local stylesheets can also be included this way.

You can manipulate the head with the [`app.head`](https://nuxt.com/docs/3.x/api/nuxt-config#head) property of your Nuxt configuration:

### Dynamically Adding Stylesheets

You can use the useHead composable to dynamically set a value in your head in your code.

::read-more{to="https://nuxt.com/docs/api/composables/use-head"}
::

Nuxt uses `unhead` under the hood, and you can refer to [its full documentation](https://unhead.unjs.io){rel="nofollow"}.

### Modifying The Rendered Head With A Nitro Plugin

If you need more advanced control, you can intercept the rendered html with a hook and modify the head programmatically.

Create a plugin in `~/server/plugins/my-plugin.ts` like this:

External stylesheets are render-blocking resources: they must be loaded and processed before the browser renders the page. Web pages that contain unnecessarily large styles take longer to render. You can read more about it on [web.dev](https://web.dev/defer-non-critical-css){rel="nofollow"}.

## Using Preprocessors

To use a preprocessor like SCSS, Sass, Less or Stylus, install it first.

The natural place to write your stylesheets is the `assets` directory.
You can then import your source files in your `app.vue` (or layouts files) using your preprocessor's syntax.

Alternatively, you can use the `css` property of your Nuxt configuration.

::tip
In both cases, the compiled stylesheets will be inlined in the HTML rendered by Nuxt.
::

If you need to inject code in pre-processed files, like a [Sass partial](https://sass-lang.com/documentation/at-rules/use#partials){rel="nofollow"} with color variables, you can do so with the Vite [preprocessors options](https://vite.dev/config/shared-options.html#css-preprocessoroptions){rel="nofollow"}.

Create some partials in your `assets` directory:

::code-group{sync="preprocessor"}

Then in your `nuxt.config` :

Nuxt uses Vite by default. If you wish to use webpack instead, refer to each preprocessor loader [documentation](https://webpack.js.org/loaders/sass-loader){rel="nofollow"}.

### Preprocessor Workers (Experimental)

Vite has made available an [experimental option](https://vite.dev/config/shared-options.html#css-preprocessormaxworkers){rel="nofollow"} which can speed up using preprocessors.

You can enable this in your `nuxt.config`:

::note
This is an experimental option and you should refer to the Vite documentation and [provide feedback](https://github.com/vitejs/vite/discussions/15835){rel="nofollow"}.
::

## Single File Components (SFC) Styling

One of the best things about Vue and SFC is how great it is at naturally dealing with styling. You can directly write CSS or preprocessor code in the style block of your components file, therefore you will have fantastic developer experience without having to use something like CSS-in-JS. However if you wish to use CSS-in-JS, you can find 3rd party libraries and modules that support it, such as [pinceau](https://github.com/Tahul/pinceau){rel="nofollow"}.

You can refer to the [Vue docs](https://vuejs.org/api/sfc-css-features.html){rel="nofollow"} for a comprehensive reference about styling components in SFC.

### Class And Style Bindings

You can leverage Vue SFC features to style your components with class and style attributes.

Refer to the [Vue docs](https://vuejs.org/guide/essentials/class-and-style.html){rel="nofollow"} for more information.

### Dynamic Styles With `v-bind`

You can reference JavaScript variable and expression within your style blocks with the v-bind function.
The binding will be dynamic, meaning that if the variable value changes, the style will be updated.

The scoped attribute allows you to style components in isolation. The styles declared with this attribute will only apply to this component.

You can use [CSS Modules](https://github.com/css-modules/css-modules){rel="nofollow"} with the module attribute. Access it with the injected `$style` variable.

### Preprocessors Support

SFC style blocks support preprocessor syntax. Vite comes with built-in support for .scss, .sass, .less, .styl and .stylus files without configuration. You just need to install them first, and they will be available directly in SFC with the lang attribute.

You can refer to the [Vite CSS docs](https://vite.dev/guide/features.html#css){rel="nofollow"} and the [@vitejs/plugin-vue docs](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue){rel="nofollow"}.
For webpack users, refer to the [vue loader docs](https://vue-loader.vuejs.org){rel="nofollow"}.

Nuxt comes with postcss built-in. You can configure it in your `nuxt.config` file.

For proper syntax highlighting in SFC, you can use the postcss lang attribute.

By default, Nuxt comes with the following plugins already pre-configured:

- [postcss-import](https://github.com/postcss/postcss-import){rel="nofollow"}: Improves the `@import` rule
- [postcss-url](https://github.com/postcss/postcss-url){rel="nofollow"}: Transforms `url()` statements
- [autoprefixer](https://github.com/postcss/autoprefixer){rel="nofollow"}: Automatically adds vendor prefixes
- [cssnano](https://cssnano.github.io/cssnano){rel="nofollow"}: Minification and purge

## Leveraging Layouts For Multiple Styles

If you need to style different parts of your application completely differently, you can use layouts.
Use different styles for different layouts.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
::

## Third Party Libraries And Modules

Nuxt isn't opinionated when it comes to styling and provides you with a wide variety of options. You can use any styling tool that you want, such as popular libraries like [UnoCSS](https://unocss.dev){rel="nofollow"} or [Tailwind CSS](https://tailwindcss.com){rel="nofollow"}.

The community and the Nuxt team have developed plenty of Nuxt modules to make the integration easier.
You can discover them on the [modules section](https://nuxt.com/modules) of the website.
Here are a few modules to help you get started:

- [UnoCSS](https://nuxt.com/modules/unocss): Instant on-demand atomic CSS engine
- [Tailwind CSS](https://nuxt.com/modules/tailwindcss): Utility-first CSS framework
- [Fontaine](https://github.com/nuxt-modules/fontaine){rel="nofollow"}: Font metric fallback
- [Pinceau](https://github.com/Tahul/pinceau){rel="nofollow"}: Adaptable styling framework
- [Nuxt UI](https://ui.nuxt.com){rel="nofollow"}: A UI Library for Modern Web Apps
- [Panda CSS](https://panda-css.com/docs/installation/nuxt){rel="nofollow"}: CSS-in-JS engine that generates atomic CSS at build time

Nuxt modules provide you with a good developer experience out of the box, but remember that if your favorite tool doesn't have a module, it doesn't mean that you can't use it with Nuxt! You can configure it yourself for your own project. Depending on the tool, you might need to use a [Nuxt plugin](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) and/or [make your own module](https://nuxt.com/docs/3.x/guide/going-further/modules). Share them with the [community](https://nuxt.com/modules) if you do!

### Easily Load Webfonts

You can use [the Nuxt Google Fonts module](https://github.com/nuxt-modules/google-fonts){rel="nofollow"} to load Google Fonts.

If you are using [UnoCSS](https://unocss.dev/integrations/nuxt){rel="nofollow"}, note that it comes with a [web fonts presets](https://unocss.dev/presets/web-fonts){rel="nofollow"} to conveniently load fonts from common providers, including Google Fonts and more.

Nuxt comes with the same `<Transition>` element that Vue has, and also has support for the experimental [View Transitions API](https://nuxt.com/docs/3.x/getting-started/transitions#view-transitions-api-experimental).

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

### Font Advanced Optimization

We would recommend using [Fontaine](https://github.com/nuxt-modules/fontaine){rel="nofollow"} to reduce your [CLS](https://web.dev/cls){rel="nofollow"}. If you need something more advanced, consider creating a Nuxt module to extend the build process or the Nuxt runtime.

::tip
Always remember to take advantage of the various tools and techniques available in the Web ecosystem at large to make styling your application easier and more efficient. Whether you're using native CSS, a preprocessor, postcss, a UI library or a module, Nuxt has got you covered. Happy styling!
::

### LCP Advanced Optimizations

You can do the following to speed-up the download of your global CSS files:

- Use a CDN so the files are physically closer to your users
- Compress your assets, ideally using Brotli
- Use HTTP2/HTTP3 for delivery
- Host your assets on the same domain (do not use a different subdomain)

Most of these things should be done for you automatically if you're using modern platforms like Cloudflare, Netlify or Vercel.
You can find an LCP optimization guide on [web.dev](https://web.dev/optimize-lcp){rel="nofollow"}.

If all of your CSS is inlined by Nuxt, you can (experimentally) completely stop external CSS files from being referenced in your rendered HTML.
You can achieve that with a hook, that you can place in a module, or in your Nuxt configuration file.

**Examples:**

Example 1 (unknown):
```unknown
::tip
The stylesheets will be inlined in the HTML rendered by Nuxt.
::

### The CSS Property

You can also use the `css` property in the Nuxt configuration.
The natural place for your stylesheets is the [`assets/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/assets). You can then reference its path and Nuxt will include it to all the pages of your application.
```

Example 2 (unknown):
```unknown
::tip
The stylesheets will be inlined in the HTML rendered by Nuxt, injected globally and present in all pages.
::

### Working With Fonts

Place your local fonts files in your `public/` directory, for example in `public/fonts`. You can then reference them in your stylesheets using `url()`.
```

Example 3 (unknown):
```unknown
Then reference your fonts by name in your stylesheets, pages or components:
```

Example 4 (unknown):
```unknown
### Stylesheets Distributed Through NPM

You can also reference stylesheets that are distributed through npm. Let's use the popular `animate.css` library as an example.

::code-group{sync="pm"}
```

---

## Meta Tags

**URL:** llms-txt#meta-tags

**Contents:**
- Migration
  - useHead
  - Meta-components
  - Options API

Nuxt 3 provides several different ways to manage your meta tags:

1. Through your `nuxt.config`.
2. Through the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) [composable](https://nuxt.com/docs/3.x/getting-started/seo-meta)
3. Through [global meta components](https://nuxt.com/docs/3.x/getting-started/seo-meta)

You can customize `title`, `titleTemplate`, `base`, `script`, `noscript`, `style`, `meta`, `link`, `htmlAttrs` and `bodyAttrs`.

::tip
Nuxt currently uses [`Unhead`](https://github.com/unjs/unhead){rel="nofollow"} to manage your meta tags, but implementation details may change.
::

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

1. In your `nuxt.config`, rename `head` to `meta`. Consider moving this shared meta configuration into your `app.vue` instead. (Note that objects no longer have a `hid` key for deduplication.)
2. If you need to access the component state with `head`, you should migrate to using [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) . You might also consider using the built-in meta-components.
3. If you need to use the Options API, there is a `head()` method you can use when you use `defineNuxtComponent`.

Nuxt 3 also provides meta components that you can use to accomplish the same task. While these components look similar to HTML tags, they are provided by Nuxt and have similar functionality.

::important
1. Make sure you use capital letters for these component names to distinguish them from native HTML elements (`<Title>` rather than `<title>`).
2. You can place these components anywhere in your template for your page.
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

### Meta-components

Nuxt 3 also provides meta components that you can use to accomplish the same task. While these components look similar to HTML tags, they are provided by Nuxt and have similar functionality.

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

::important
1. Make sure you use capital letters for these component names to distinguish them from native HTML elements (`<Title>` rather than `<title>`).
2. You can place these components anywhere in your template for your page.
::

### Options API
```

---

## Generates `app/middleware/auth.ts`

**URL:** llms-txt#generates-`app/middleware/auth.ts`

**Contents:**
- `nuxt add api`

npx nuxt add middleware auth
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add api`

- Modifier flags: `--method` (can accept `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put` or `trace`) or alternatively you can directly use `--get`, `--post`, etc.
```

---

## nuxt preview

**URL:** llms-txt#nuxt-preview

**Contents:**
- Arguments
- Options

The `preview` command starts a server to preview your Nuxt application after running the `build` command. The `start` command is an alias for `preview`. When running your application in production refer to the [Deployment section](https://nuxt.com/docs/3.x/getting-started/deployment).

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |
| `-p, --port`                       |         | Port to listen on (use `PORT` environment variable to override)                                                                                      |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |

This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a `.env` file or as command-line argument.

::note
For convenience, in preview mode, your [`.env`](https://nuxt.com/docs/3.x/guide/directory-structure/env) file will be loaded into `process.env`. (However, in production you will need to ensure your environment variables are set yourself. For example, with Node.js 20+ you could do this by running `node --env-file .env .output/server/index.mjs` to start your server.)
::

---

## Generates `layouts/custom.vue`

**URL:** llms-txt#generates-`layouts/custom.vue`

**Contents:**
- `nuxt add plugin`

npx nuxt add layout custom
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add plugin`

- Modifier flags: `--mode client|server` or `--client`or `--server`
```

---

## app.vue

**URL:** llms-txt#app.vue

**Contents:**
- Usage
  - Minimal Usage
  - Usage with Pages
  - Usage with Layouts

::tip
If you have a `pages/` directory, the `app.vue` file is optional. Nuxt will automatically include a default `app.vue`, but you can still add your own to customize the structure and content as needed.
::

With Nuxt, the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory is optional. If it is not present, Nuxt will not include the [vue-router](https://router.vuejs.org){rel="nofollow"} dependency. This is useful when building a landing page or an application that does not require routing.

::link-example{to="https://nuxt.com/docs/examples/hello-world"}
::

When you have a [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory, you need to use the [`<NuxtPage>`](https://nuxt.com/docs/3.x/api/components/nuxt-page) component to display the current page:

You can also define the common structure of your application directly in `app.vue`. This is useful when you want to include global elements such as a header or footer:

::note
Remember that `app.vue` acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
Learn more about how to structure your pages using the `pages/` directory.
::

### Usage with Layouts

When your application requires different layouts for different pages, you can use the `layouts/` directory with the [`<NuxtLayout>`](https://nuxt.com/docs/3.x/api/components/nuxt-layout) component. This allows you to define multiple layouts and apply them per page.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
Learn more about how to structure your layouts using the `layouts/` directory.
::

**Examples:**

Example 1 (unknown):
```unknown
::link-example{to="https://nuxt.com/docs/examples/hello-world"}
::

### Usage with Pages

When you have a [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory, you need to use the [`<NuxtPage>`](https://nuxt.com/docs/3.x/api/components/nuxt-page) component to display the current page:
```

Example 2 (unknown):
```unknown
You can also define the common structure of your application directly in `app.vue`. This is useful when you want to include global elements such as a header or footer:
```

Example 3 (unknown):
```unknown
::note
Remember that `app.vue` acts as the main component of your Nuxt application. Anything you add to it (JS and CSS) will be global and included in every page.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
Learn more about how to structure your pages using the `pages/` directory.
::

### Usage with Layouts

When your application requires different layouts for different pages, you can use the `layouts/` directory with the [`<NuxtLayout>`](https://nuxt.com/docs/3.x/api/components/nuxt-layout) component. This allows you to define multiple layouts and apply them per page.
```

---

## Layers

**URL:** llms-txt#layers

This example shows how to use the `extends` key in `nuxt.config.ts` to use the `base/` directory as a base Nuxt application, and use its components, composables or config and override them if necessary.

::read-more{to="https://nuxt.com/docs/getting-started/layers"}
::

::sandbox
---
branch: main
dir: examples/advanced/config-extends
file: nuxt.config.ts
repo: nuxt/examples
---
::

---

## Custom Routing

**URL:** llms-txt#custom-routing

**Contents:**
- Adding custom routes
  - Router Config
  - Pages Hook
  - Nuxt Module
- Router Options
  - Using `app/router.options`
  - Using `nuxt.config`
  - Hash Mode (SPA)
  - Scroll Behavior for hash links

## Adding custom routes

In Nuxt, your routing is defined by the structure of your files inside the [pages directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages). However, since it uses [vue-router](https://router.vuejs.org){rel="nofollow"} under the hood, Nuxt offers you several ways to add custom routes in your project.

Using [router options](https://nuxt.com/docs/3.x/guide/recipes/custom-routing#router-options), you can optionally override or extend your routes using a function that accepts the scanned routes and returns customized routes.

If it returns `null` or `undefined`, Nuxt will fall back to the default routes (useful to modify input array).

::note
Nuxt will not augment any new routes you return from the `routes` function with metadata defined in `definePageMeta` of the component you provide. If you want that to happen, you should use the `pages:extend` hook which is [called at build-time](https://nuxt.com/docs/3.x/api/advanced/hooks#nuxt-hooks-build-time).
::

You can add, change or remove pages from the scanned routes with the `pages:extend` nuxt hook.

For example, to prevent creating routes for any `.ts` files:

If you plan to add a whole set of pages related with a specific functionality, you might want to use a [Nuxt module](https://nuxt.com/modules).

The [Nuxt kit](https://nuxt.com/docs/3.x/guide/going-further/kit) provides a few ways [to add routes](https://nuxt.com/docs/3.x/api/kit/pages):

- [`extendPages`](https://nuxt.com/docs/3.x/api/kit/pages#extendpages) (callback: pages => void)
- [`extendRouteRules`](https://nuxt.com/docs/3.x/api/kit/pages#extendrouterules) (route: string, rule: NitroRouteConfig, options: ExtendRouteRulesOptions)

On top of customizing options for [`vue-router`](https://router.vuejs.org/api/interfaces/routeroptions.html){rel="nofollow"}, Nuxt offers [additional options](https://nuxt.com/docs/3.x/api/nuxt-config#router) to customize the router.

### Using `app/router.options`

This is the recommended way to specify [router options](https://nuxt.com/docs/3.x/api/nuxt-config#router).

It is possible to add more router options files by adding files within the `pages:routerOptions` hook. Later items in the array override earlier ones.

::callout
Adding a router options file in this hook will switch on page-based routing, unless `optional` is set, in which case it will only apply when page-based routing is already enabled.
::

### Using `nuxt.config`

**Note:** Only JSON serializable [options](https://nuxt.com/docs/3.x/api/nuxt-config#router) are configurable:

- `linkActiveClass`
- `linkExactActiveClass`
- `end`
- `sensitive`
- `strict`
- `hashMode`
- `scrollBehaviorType`

You can enable hash history in SPA mode using the `hashMode` [config](https://nuxt.com/docs/3.x/api/nuxt-config#router). In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the **URL is never sent to the server** and **SSR is not supported**.

### Scroll Behavior for hash links

You can optionally customize the scroll behavior for hash links. When you set the [config](https://nuxt.com/docs/3.x/api/nuxt-config#router) to be `smooth` and you load a page with a hash link (e.g. `https://example.com/blog/my-article#comments`), you will see that the browser smoothly scrolls to this anchor.

#### Custom History (advanced)

You can optionally override history mode using a function that accepts the base URL and returns the history mode. If it returns `null` or `undefined`, Nuxt will fallback to the default history.

**Examples:**

Example 1 (unknown):
```unknown
::note
Nuxt will not augment any new routes you return from the `routes` function with metadata defined in `definePageMeta` of the component you provide. If you want that to happen, you should use the `pages:extend` hook which is [called at build-time](https://nuxt.com/docs/3.x/api/advanced/hooks#nuxt-hooks-build-time).
::

### Pages Hook

You can add, change or remove pages from the scanned routes with the `pages:extend` nuxt hook.

For example, to prevent creating routes for any `.ts` files:
```

Example 2 (unknown):
```unknown
### Nuxt Module

If you plan to add a whole set of pages related with a specific functionality, you might want to use a [Nuxt module](https://nuxt.com/modules).

The [Nuxt kit](https://nuxt.com/docs/3.x/guide/going-further/kit) provides a few ways [to add routes](https://nuxt.com/docs/3.x/api/kit/pages):

- [`extendPages`](https://nuxt.com/docs/3.x/api/kit/pages#extendpages) (callback: pages => void)
- [`extendRouteRules`](https://nuxt.com/docs/3.x/api/kit/pages#extendrouterules) (route: string, rule: NitroRouteConfig, options: ExtendRouteRulesOptions)

## Router Options

On top of customizing options for [`vue-router`](https://router.vuejs.org/api/interfaces/routeroptions.html){rel="nofollow"}, Nuxt offers [additional options](https://nuxt.com/docs/3.x/api/nuxt-config#router) to customize the router.

### Using `app/router.options`

This is the recommended way to specify [router options](https://nuxt.com/docs/3.x/api/nuxt-config#router).
```

Example 3 (unknown):
```unknown
It is possible to add more router options files by adding files within the `pages:routerOptions` hook. Later items in the array override earlier ones.

::callout
Adding a router options file in this hook will switch on page-based routing, unless `optional` is set, in which case it will only apply when page-based routing is already enabled.
::
```

Example 4 (unknown):
```unknown
### Using `nuxt.config`

**Note:** Only JSON serializable [options](https://nuxt.com/docs/3.x/api/nuxt-config#router) are configurable:

- `linkActiveClass`
- `linkExactActiveClass`
- `end`
- `sensitive`
- `strict`
- `hashMode`
- `scrollBehaviorType`
```

---

## GitHub Pages

**URL:** llms-txt#github-pages

**Contents:**
- Setup
- Deployment

Nuxt supports deploying to [GitHub Pages](https://pages.github.com/){rel="nofollow"} with minimal configuration.

::caution
GitHub Pages only support static sites, Nuxt will pre-render your application to static HTML files.
::

::caution
If you are **not** using a custom domain, you need to set `NUXT_APP_BASE_URL` to your repository-slug for your build step.

**Example**: `https://<user>.github.io/<repository>/`: `NUXT_APP_BASE_URL=/<repository>/ npx nuxt build --preset github_pages`
::

Follow the steps to [create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site){rel="nofollow"}.

Here is an example GitHub Actions workflow to deploy your site to GitHub Pages using the `github_pages` preset:

```yaml [.github/workflows/deploy.yml]

---

## Server

**URL:** llms-txt#server

**Contents:**
- Steps

In a built Nuxt 3 application, there is no runtime Nuxt dependency. That means your site will be highly performant, and ultra-slim. But it also means you can no longer hook into runtime Nuxt server hooks.

::read-more{to="https://nuxt.com/docs/guide/concepts/server-engine"}
::

1. Remove the `render` key in your `nuxt.config`.
2. Any files in `~/server/api` and `~/server/middleware` will be automatically registered; you can remove them from your `serverMiddleware` array.
3. Update any other items in your `serverMiddleware` array to point to files or npm packages directly, rather than using inline functions.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/server"}
::

::read-more
---
to: https://nuxt.com/docs/guide/going-further/hooks#server-hooks-runtime
---
::

---

## <NuxtLoadingIndicator>

**URL:** llms-txt#<nuxtloadingindicator>

**Contents:**
- Usage
- Slots
- Props

Add `<NuxtLoadingIndicator/>` in your [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app) or [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts).

::link-example{to="https://nuxt.com/docs/examples/routing/pages"}
::

You can pass custom HTML or components through the loading indicator's default slot.

- `color`: The color of the loading bar. It can be set to `false` to turn off explicit color styling.
- `errorColor`: The color of the loading bar when `error` is set to `true`.
- `height`: Height of the loading bar, in pixels (default `3`).
- `duration`: Duration of the loading bar, in milliseconds (default `2000`).
- `throttle`: Throttle the appearing and hiding, in milliseconds (default `200`).
- `estimatedProgress`: By default Nuxt will back off as it approaches 100%. You can provide a custom function to customize the progress estimation, which is a function that receives the duration of the loading bar (above) and the elapsed time. It should return a value between 0 and 100.

::note
This component is optional. :br
To achieve full customization, you can implement your own one based on [its source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/nuxt-loading-indicator.ts){rel="nofollow"}.
::

::note
You can hook into the underlying indicator instance using [the `useLoadingIndicator` composable](https://nuxt.com/docs/3.x/api/composables/use-loading-indicator), which will allow you to trigger start/finish events yourself.
::

::tip
The loading indicator's speed gradually decreases after reaching a specific point controlled by `estimatedProgress`. This adjustment provides a more accurate reflection of longer page loading times and prevents the indicator from prematurely showing 100% completion.
::

---

## Module Author Guide

**URL:** llms-txt#module-author-guide

**Contents:**
- Quick Start
  - Using the Starter
- Developing Modules
  - Module Anatomy
  - Tooling
  - Recipes
  - Testing
  - Best Practices
- Ecosystem
  - Module Types

Nuxt's [configuration](https://nuxt.com/docs/3.x/api/nuxt-config) and [hooks](https://nuxt.com/docs/3.x/guide/going-further/hooks) systems make it possible to customize every aspect of Nuxt and add any integration you might need (Vue plugins, CMS, server routes, components, logging, etc.).

**Nuxt Modules** are functions that sequentially run when starting Nuxt in development mode using `nuxt dev` or building a project for production with `nuxt build`.
With modules, you can encapsulate, properly test, and share custom solutions as npm packages without adding unnecessary boilerplate to your project, or requiring changes to Nuxt itself.

We recommend you get started with Nuxt Modules using our [starter template](https://github.com/nuxt/starter/tree/module){rel="nofollow"}:

::code-group{sync="pm"}

This will create a `my-module` project with all the boilerplate necessary to develop and publish your module.

1. Open `my-module` in your IDE of choice
2. Install dependencies using your favorite package manager
3. Prepare local files for development using `npm run dev:prepare`
4. Follow this document to learn more about Nuxt Modules

### Using the Starter

Learn how to perform basic tasks with the module starter.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/navigating-the-official-starter-template?friend=nuxt
---
Watch Vue School video about Nuxt module starter template.
::

While your module source code lives inside the `src` directory, in most cases, to develop a module, you need a Nuxt application. That's what the `playground` directory is about. It's a Nuxt application you can tinker with that is already configured to run with your module.

You can interact with the playground like with any Nuxt application.

- Launch its development server with `npm run dev`, it should reload itself as you make changes to your module in the `src` directory
- Build it with `npm run dev:build`

::note
All other `nuxt` commands can be used against the `playground` directory (e.g. `nuxt <COMMAND> playground`). Feel free to declare additional `dev:*` scripts within your `package.json` referencing them for convenience.
::

The module starter comes with a basic test suite:

- A linter powered by [ESLint](https://eslint.org){rel="nofollow"}, run it with `npm run lint`
- A test runner powered by [Vitest](https://vitest.dev){rel="nofollow"}, run it with `npm run test` or `npm run test:watch`

::tip
Feel free to augment this default test strategy to better suit your needs.
::

Nuxt Modules come with their own builder provided by [`@nuxt/module-builder`](https://github.com/nuxt/module-builder#readme){rel="nofollow"}. This builder doesn't require any configuration on your end, supports TypeScript, and makes sure your assets are properly bundled to be distributed to other Nuxt applications.

You can build your module by running `npm run prepack`.

::tip
While building your module can be useful in some cases, most of the time you won't need to build it on your own: the `playground` takes care of it while developing, and the release script also has you covered when publishing.
::

::important
Before publishing your module to npm, makes sure you have an [npmjs.com](https://www.npmjs.com){rel="nofollow"} account and that you're authenticated to it locally with `npm login`.
::

While you can publish your module by bumping its version and using the `npm publish` command, the module starter comes with a release script that helps you make sure you publish a working version of your module to npm and more.

To use the release script, first, commit all your changes (we recommend you follow [Conventional Commits](https://www.conventionalcommits.org){rel="nofollow"} to also take advantage of automatic version bump and changelog update), then run the release script with `npm run release`.

When running the release script, the following will happen:

- First, it will run your test suite by:

- Running the linter (`npm run lint`)
  - Running unit, integration, and e2e tests (`npm run test`)
  - Building the module (`npm run prepack`)
- Then, if your test suite went well, it will proceed to publish your module by:

- Bumping your module version and generating a changelog according to your Conventional Commits
  - Publishing the module to npm (for that purpose, the module will be built again to ensure its updated version number is taken into account in the published artifact)
  - Pushing a git tag representing the newly published version to your git remote origin

::tip
As with other scripts, feel free to fine-tune the default `release` script in your `package.json` to better suit your needs.
::

## Developing Modules

Nuxt Modules come with a variety of powerful APIs and patterns allowing them to alter a Nuxt application in pretty much any way possible. This section teaches you how to take advantage of those.

We can consider two kinds of Nuxt Modules:

- published modules are distributed on npm - you can see a list of some community modules on [the Nuxt website](https://nuxt.com/modules).
- "local" modules, they exist within a Nuxt project itself, either [inlined in Nuxt config](https://nuxt.com/docs/3.x/api/nuxt-config#modules) or as part of [the `modules` directory](https://nuxt.com/docs/3.x/guide/directory-structure/modules).

In either case, their anatomy is similar.

#### Module Definition

::note
When using the starter, your module definition is available at `src/module.ts`.
::

The module definition is the entry point of your module. It's what gets loaded by Nuxt when your module is referenced within a Nuxt configuration.

At a low level, a Nuxt Module definition is a simple, potentially asynchronous, function accepting inline user options and a `nuxt` object to interact with Nuxt.

You can get type-hint support for this function using the higher-level `defineNuxtModule` helper provided by [Nuxt Kit](https://nuxt.com/docs/3.x/guide/going-further/kit).

However, **we do not recommend** using this low-level function definition. Instead, to define a module, **we recommend** using the object-syntax with `meta` property to identify your module, especially when publishing to npm.

This helper makes writing Nuxt modules more straightforward by implementing many common patterns needed by modules, guaranteeing future compatibility and improving the experience for both module authors and users.

Ultimately `defineNuxtModule` returns a wrapper function with the lower level `(inlineOptions, nuxt)` module signature. This wrapper function applies defaults and other necessary steps before calling your `setup` function:

- Support `defaults` and `meta.configKey` for automatically merging module options
- Type hints and automated type inference
- Add shims for basic Nuxt 2 compatibility
- Ensure module gets installed only once using a unique key computed from `meta.name` or `meta.configKey`
- Automatically register Nuxt hooks
- Automatically check for compatibility issues based on module meta
- Expose `getOptions` and `getMeta` for internal usage of Nuxt
- Ensuring backward and upward compatibility as long as the module is using `defineNuxtModule` from the latest version of `@nuxt/kit`
- Integration with module builder tooling

#### Runtime Directory

::note
When using the starter, the runtime directory is available at `src/runtime`.
::

Modules, like everything in a Nuxt configuration, aren't included in your application runtime. However, you might want your module to provide, or inject runtime code to the application it's installed on. That's what the runtime directory enables you to do.

Inside the runtime directory, you can provide any kind of assets related to the Nuxt App:

- Vue components
- Composables
- [Nuxt plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins)

To the [server engine](https://nuxt.com/docs/3.x/guide/concepts/server-engine), Nitro:

- API routes
- Middlewares
- Nitro plugins

Or any other kind of asset you want to inject in users' Nuxt applications:

- Stylesheets
- 3D models
- Images
- etc.

You'll then be able to inject all those assets inside the application from your [module definition](https://nuxt.com/#module-definition).

::tip
Learn more about asset injection in [the recipes section](https://nuxt.com/#recipes).
::

::warning
Published modules cannot leverage auto-imports for assets within their runtime directory. Instead, they have to import them explicitly from `#imports` or alike.
:br :br
Indeed, auto-imports are not enabled for files within `node_modules` (the location where a published module will eventually live) for performance reasons.
::

Modules come with a set of first-party tools to help you with their development.

#### `@nuxt/module-builder`

[Nuxt Module Builder](https://github.com/nuxt/module-builder#readme){rel="nofollow"} is a zero-configuration build tool taking care of all the heavy lifting to build and ship your module. It ensures proper compatibility of your module build artifact with Nuxt applications.

[Nuxt Kit](https://nuxt.com/docs/3.x/guide/going-further/kit) provides composable utilities to help your module interact with Nuxt applications. It's recommended to use Nuxt Kit utilities over manual alternatives whenever possible to ensure better compatibility and code readability of your module.

::read-more{to="https://nuxt.com/docs/guide/going-further/kit"}
::

#### `@nuxt/test-utils`

[Nuxt Test Utils](https://nuxt.com/docs/3.x/getting-started/testing) is a collection of utilities to help set up and run Nuxt applications within your module tests.

Find here common patterns used to author modules.

#### Altering Nuxt Configuration

Nuxt configuration can be read and altered by modules. Here's an example of a module enabling an experimental feature.

When you need to handle more complex configuration alterations, you should consider using [defu](https://github.com/unjs/defu){rel="nofollow"}.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/extending-and-altering-nuxt-configuration-and-options?friend=nuxt
---
Watch Vue School video about altering Nuxt configuration.
::

#### Exposing Options to Runtime

Because modules aren't part of the application runtime, their options aren't either. However, in many cases, you might need access to some of these module options within your runtime code. We recommend exposing the needed config using Nuxt's [`runtimeConfig`](https://nuxt.com/docs/3.x/api/nuxt-config#runtimeconfig).

Note that we use [`defu`](https://github.com/unjs/defu){rel="nofollow"} to extend the public runtime configuration the user provides instead of overwriting it.

You can then access your module options in a plugin, component, the application like any other runtime configuration:

::warning
Be careful not to expose any sensitive module configuration on the public runtime config, such as private API keys, as they will end up in the public bundle.
::

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/passing-and-exposing-module-options?friend=nuxt
---
Watch Vue School video about passing and exposing Nuxt module options.
::

#### Injecting Plugins With `addPlugin`

Plugins are a common way for a module to add runtime logic. You can use the `addPlugin` utility to register them from your module.

::read-more{to="https://nuxt.com/docs/guide/going-further/kit"}
::

#### Injecting Vue Components With `addComponent`

If your module should provide Vue components, you can use the `addComponent` utility to add them as auto-imports for Nuxt to resolve.

Alternatively, you can add an entire directory by using `addComponentsDir`.

#### Injecting Composables With `addImports` and `addImportsDir`

If your module should provide composables, you can use the `addImports` utility to add them as auto-imports for Nuxt to resolve.

Alternatively, you can add an entire directory by using `addImportsDir`.

#### Injecting Server Routes With `addServerHandler`

You can also add a dynamic server route:

#### Injecting Other Assets

If your module should provide other kinds of assets, they can also be injected. Here's a simple example module injecting a stylesheet through Nuxt's `css` array.

And a more advanced one, exposing a folder of assets through [Nitro](https://nuxt.com/docs/3.x/guide/concepts/server-engine)'s `publicAssets` option:

#### Using Other Modules in Your Module

If your module depends on other modules, you can specify them using the `moduleDependencies` option. This provides a more robust way to handle module dependencies with version constraints and configuration merging:

::callout{type="info"}
The `moduleDependencies` option replaces the deprecated `installModule` function and ensures proper setup order and configuration merging.
::

[Lifecycle hooks](https://nuxt.com/docs/3.x/guide/going-further/hooks) allow you to expand almost every aspect of Nuxt. Modules can hook to them programmatically or through the `hooks` map in their definition.

::read-more{to="https://nuxt.com/docs/api/advanced/hooks"}
::

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/nuxt-lifecycle-hooks?friend=nuxt
---
Watch Vue School video about using Nuxt lifecycle hooks in modules.
::

::note
**Module cleanup**

If your module opens, handles, or starts a watcher, you should close it when the Nuxt lifecycle is done. The `close` hook is available for this.

Modules can also define and call their own hooks, which is a powerful pattern for making your module extensible.

If you expect other modules to be able to subscribe to your module's hooks, you should call them in the `modules:done` hook. This ensures that all other modules have had a chance to be set up and register their listeners to your hook during their own `setup` function.

#### Adding Templates/Virtual Files

If you need to add a virtual file that can be imported into the user's app, you can use the `addTemplate` utility.

For the server, you should use the `addServerTemplate` utility instead.

#### Adding Type Declarations

You might also want to add a type declaration to the user's project (for example, to augment a Nuxt interface
or provide a global type of your own). For this, Nuxt provides the `addTypeTemplate` utility that both
writes a template to the disk and adds a reference to it in the generated `nuxt.d.ts` file.

If your module should augment types handled by Nuxt, you can use `addTypeTemplate` to perform this operation:

If you need more granular control, you can use the `prepare:types` hook to register a callback that will inject your types.

##### Updating Templates

If you need to update your templates/virtual files, you can leverage the `updateTemplates` utility like this :

Testing helps ensuring your module works as expected given various setup. Find in this section how to perform various kinds of tests against your module.

#### Unit and Integration

::tip
We're still discussing and exploring how to ease unit and integration testing on Nuxt Modules.
:br :br[Check out this RFC to join the conversation](https://github.com/nuxt/nuxt/discussions/18399){rel="nofollow"}.
::

[Nuxt Test Utils](https://nuxt.com/docs/3.x/getting-started/testing) is the go-to library to help you test your module in an end-to-end way. Here's the workflow to adopt with it:

1. Create a Nuxt application to be used as a "fixture" inside `test/fixtures/*`
2. Setup Nuxt with this fixture inside your test file
3. Interact with the fixture using utilities from `@nuxt/test-utils` (e.g. fetching a page)
4. Perform checks related to this fixture (e.g. "HTML contains ...")
5. Repeat

In practice, the fixture:

::tip
An example of such a workflow is available on [the module starter](https://github.com/nuxt/starter/blob/module/test/basic.test.ts){rel="nofollow"}.
::

#### Manual QA With Playground and Externally

Having a playground Nuxt application to test your module when developing it is really useful. [The module starter integrates one for that purpose](https://nuxt.com/#how-to-develop).

You can test your module with other Nuxt applications (applications that are not part of your module repository) locally. To do so, you can use [`npm pack`](https://docs.npmjs.com/cli/commands/npm-pack){rel="nofollow"} command, or your package manager equivalent, to create a tarball from your module. Then in your test project, you can add your module to `package.json` packages as: `"my-module": "file:/path/to/tarball.tgz"`.

After that, you should be able to reference `my-module` like in any regular project.

With great power comes great responsibility. While modules are powerful, here are some best practices to keep in mind while authoring modules to keep applications performant and developer experience great.

As we've seen, Nuxt Modules can be asynchronous. For example, you may want to develop a module that needs fetching some API or calling an async function.

However, be careful with asynchronous behaviors as Nuxt will wait for your module to setup before going to the next module and starting the development server, build process, etc. Prefer deferring time-consuming logic to Nuxt hooks.

::warning
If your module takes more than **1 second** to setup, Nuxt will emit a warning about it.
::

#### Always Prefix Exposed Interfaces

Nuxt Modules should provide an explicit prefix for any exposed configuration, plugin, API, composable, or component to avoid conflict with other modules and internals.

Ideally, you should prefix them with your module's name (e.g. if your module is called `nuxt-foo`, expose `<FooButton>` and `useFooBar()` and **not** `<Button>` and `useBar()`).

#### Use Lifecycle Hooks for One-Time Setup

When your module needs to perform one-time setup tasks (like generating configuration files, setting up databases, or installing dependencies), use lifecycle hooks instead of running the logic in your main `setup` function.

This pattern prevents unnecessary work on every build and provides a better developer experience. See the [lifecycle hooks documentation](https://nuxt.com/docs/3.x/api/kit/modules#using-lifecycle-hooks-for-module-installation-and-upgrade) for more details.

#### Be TypeScript Friendly

Nuxt has first-class TypeScript integration for the best developer experience.

Exposing types and using TypeScript to develop modules benefits users even when not using TypeScript directly.

#### Avoid CommonJS Syntax

Nuxt relies on native ESM. Please read [Native ES Modules](https://nuxt.com/docs/3.x/guide/concepts/esm) for more information.

#### Document Module Usage

Consider documenting module usage in the readme file:

- Why use this module?
- How to use this module?
- What does this module do?

Linking to the integration website and documentation is always a good idea.

#### Provide a StackBlitz Demo or Boilerplate

It's a good practice to make a minimal reproduction with your module and [StackBlitz](https://nuxt.new/s/v4){rel="nofollow"} that you add to your module readme.

This not only provides potential users of your module a quick and easy way to experiment with the module but also an easy way for them to build minimal reproductions they can send you when they encounter issues.

#### Do Not Advertise With a Specific Nuxt Version

Nuxt, Nuxt Kit, and other new toolings are made to have both forward and backward compatibility in mind.

Please use "X for Nuxt" instead of "X for Nuxt 3" to avoid fragmentation in the ecosystem and prefer using `meta.compatibility` to set Nuxt version constraints.

#### Stick With Starter Defaults

The module starter comes with a default set of tools and configurations (e.g. ESLint configuration). If you plan on open-sourcing your module, sticking with those defaults ensures your module shares a consistent coding style with other [community modules](https://nuxt.com/modules) out there, making it easier for others to contribute.

[Nuxt Module ecosystem](https://nuxt.com/modules) represents more than 15 million monthly NPM downloads and provides extended functionalities and integrations with all sort of tools. You can be part of this ecosystem!

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/exploring-nuxt-modules-ecosystem-and-module-types?friend=nuxt
---
Watch Vue School video about Nuxt module types.
::

**Official modules** are modules prefixed (scoped) with `@nuxt/` (e.g. [`@nuxt/content`](https://content.nuxtjs.org){rel="nofollow"}). They are made and maintained actively by the Nuxt team. Like with the framework, contributions from the community are more than welcome to help make them better!

**Community modules** are modules prefixed (scoped) with `@nuxtjs/` (e.g. [`@nuxtjs/tailwindcss`](https://tailwindcss.nuxtjs.org){rel="nofollow"}). They are proven modules made and maintained by community members. Again, contributions are welcome from anyone.

**Third-party and other community modules** are modules (often) prefixed with `nuxt-`. Anyone can make them, using this prefix allows these modules to be discoverable on npm. This is the best starting point to draft and try an idea!

**Private or personal modules** are modules made for your own use case or company. They don't need to follow any naming rules to work with Nuxt and are often seen scoped under an npm organization (e.g. `@my-company/nuxt-auth`)

### Listing Your Community Module

Any community modules are welcome to be listed on [the module list](https://nuxt.com/modules). To be listed, [open an issue in the nuxt/modules](https://github.com/nuxt/modules/issues/new?template=module_request.yml){rel="nofollow"} repository. The Nuxt team can help you to apply best practices before listing.

### Joining `nuxt-modules` and `@nuxtjs/`

By moving your modules to [nuxt-modules](https://github.com/nuxt-modules){rel="nofollow"}, there is always someone else to help, and this way, we can join forces to make one perfect solution.

If you have an already published and working module, and want to transfer it to `nuxt-modules`, [open an issue in nuxt/modules](https://github.com/nuxt/modules/issues/new){rel="nofollow"}.

By joining `nuxt-modules` we can rename your community module under the `@nuxtjs/` scope and provide a subdomain (e.g. `my-module.nuxtjs.org`) for its documentation.

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

This will create a `my-module` project with all the boilerplate necessary to develop and publish your module.

**Next steps:**

1. Open `my-module` in your IDE of choice
2. Install dependencies using your favorite package manager
3. Prepare local files for development using `npm run dev:prepare`
4. Follow this document to learn more about Nuxt Modules

### Using the Starter

Learn how to perform basic tasks with the module starter.

::tip
---
icon: i-lucide-video
target: _blank
to: https://vueschool.io/lessons/navigating-the-official-starter-template?friend=nuxt
---
Watch Vue School video about Nuxt module starter template.
::

#### How to Develop

While your module source code lives inside the `src` directory, in most cases, to develop a module, you need a Nuxt application. That's what the `playground` directory is about. It's a Nuxt application you can tinker with that is already configured to run with your module.

You can interact with the playground like with any Nuxt application.

- Launch its development server with `npm run dev`, it should reload itself as you make changes to your module in the `src` directory
- Build it with `npm run dev:build`

::note
All other `nuxt` commands can be used against the `playground` directory (e.g. `nuxt <COMMAND> playground`). Feel free to declare additional `dev:*` scripts within your `package.json` referencing them for convenience.
::

#### How to Test

The module starter comes with a basic test suite:

- A linter powered by [ESLint](https://eslint.org){rel="nofollow"}, run it with `npm run lint`
- A test runner powered by [Vitest](https://vitest.dev){rel="nofollow"}, run it with `npm run test` or `npm run test:watch`

::tip
Feel free to augment this default test strategy to better suit your needs.
::

#### How to Build

Nuxt Modules come with their own builder provided by [`@nuxt/module-builder`](https://github.com/nuxt/module-builder#readme){rel="nofollow"}. This builder doesn't require any configuration on your end, supports TypeScript, and makes sure your assets are properly bundled to be distributed to other Nuxt applications.

You can build your module by running `npm run prepack`.

::tip
While building your module can be useful in some cases, most of the time you won't need to build it on your own: the `playground` takes care of it while developing, and the release script also has you covered when publishing.
::

#### How to Publish

::important
Before publishing your module to npm, makes sure you have an [npmjs.com](https://www.npmjs.com){rel="nofollow"} account and that you're authenticated to it locally with `npm login`.
::

While you can publish your module by bumping its version and using the `npm publish` command, the module starter comes with a release script that helps you make sure you publish a working version of your module to npm and more.

To use the release script, first, commit all your changes (we recommend you follow [Conventional Commits](https://www.conventionalcommits.org){rel="nofollow"} to also take advantage of automatic version bump and changelog update), then run the release script with `npm run release`.

When running the release script, the following will happen:

- First, it will run your test suite by:

  - Running the linter (`npm run lint`)
  - Running unit, integration, and e2e tests (`npm run test`)
  - Building the module (`npm run prepack`)
- Then, if your test suite went well, it will proceed to publish your module by:

  - Bumping your module version and generating a changelog according to your Conventional Commits
  - Publishing the module to npm (for that purpose, the module will be built again to ensure its updated version number is taken into account in the published artifact)
  - Pushing a git tag representing the newly published version to your git remote origin

::tip
As with other scripts, feel free to fine-tune the default `release` script in your `package.json` to better suit your needs.
::

## Developing Modules

Nuxt Modules come with a variety of powerful APIs and patterns allowing them to alter a Nuxt application in pretty much any way possible. This section teaches you how to take advantage of those.

### Module Anatomy

We can consider two kinds of Nuxt Modules:

- published modules are distributed on npm - you can see a list of some community modules on [the Nuxt website](https://nuxt.com/modules).
- "local" modules, they exist within a Nuxt project itself, either [inlined in Nuxt config](https://nuxt.com/docs/3.x/api/nuxt-config#modules) or as part of [the `modules` directory](https://nuxt.com/docs/3.x/guide/directory-structure/modules).

In either case, their anatomy is similar.

#### Module Definition

::note
When using the starter, your module definition is available at `src/module.ts`.
::

The module definition is the entry point of your module. It's what gets loaded by Nuxt when your module is referenced within a Nuxt configuration.

At a low level, a Nuxt Module definition is a simple, potentially asynchronous, function accepting inline user options and a `nuxt` object to interact with Nuxt.
```

---

## content

**URL:** llms-txt#content

**Contents:**
- Enable Nuxt Content
- Create Content

[Nuxt Content](https://content.nuxt.com){rel="nofollow"} reads the [`content/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/content) in your project and parses `.md`, `.yml`, `.csv` and `.json` files to create a file-based CMS for your application.

- Render your content with built-in components.
- Query your content with a MongoDB-like API.
- Use your Vue components in Markdown files with the MDC syntax.
- Automatically generate your navigation.

::read-more{target="_blank" to="https://content.nuxt.com"}
Learn more in **Nuxt Content** documentation.
::

## Enable Nuxt Content

Install the `@nuxt/content` module in your project as well as adding it to your `nuxt.config.ts` with one command:

Place your markdown files inside the `content/` directory:

```md [content/index.md]

**Examples:**

Example 1 (unknown):
```unknown
## Create Content

Place your markdown files inside the `content/` directory:
```

---

## preloadComponents

**URL:** llms-txt#preloadcomponents

Preloading components loads components that your page will need very soon, which you want to start loading early in rendering lifecycle. This ensures they are available earlier and are less likely to block the page's render, improving performance.

Use `preloadComponents` to manually preload individual components that have been registered globally in your Nuxt app. By default Nuxt registers these as async components. You must use the Pascal-cased version of the component name.

::note
On server, `preloadComponents` will have no effect.
::

**Examples:**

Example 1 (ts):
```ts
await preloadComponents('MyGlobalComponent')

await preloadComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

---

## showError

**URL:** llms-txt#showerror

Within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context) you can use `showError` to show an error.

- `error`: `string | Error | Partial<{ cause, data, message, name, stack, statusCode, statusMessage }>`

The error is set in the state using [`useError()`](https://nuxt.com/docs/3.x/api/composables/use-error) to create a reactive and SSR-friendly shared error state across components.

::tip
`showError` calls the `app:error` hook.
::

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

**Examples:**

Example 1 (ts):
```ts
showError('😱 Oh no, an error has been thrown.')
showError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
})
```

---

## Sessions and Authentication

**URL:** llms-txt#sessions-and-authentication

**Contents:**
- Introduction
- Install nuxt-auth-utils
- Cookie Encryption Key
- Login API Route
- Login Page
- Protect API Routes
- Protect App Routes
- Home Page
- Conclusion

In this recipe we'll be setting up authentication in a full-stack Nuxt app using [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils){rel="nofollow"} which provides convenient utilities for managing client-side and server-side session data.

The module uses secured & sealed cookies to store session data, so you don't need to setup a database to store session data.

## Install nuxt-auth-utils

Install the `nuxt-auth-utils` module using the `nuxt` CLI.

::callout
This command will install `nuxt-auth-utils` as dependency and push it in the `modules` section of our `nuxt.config.ts`
::

## Cookie Encryption Key

As `nuxt-auth-utils` uses sealed cookies to store session data, session cookies are encrypted using a secret key from the `NUXT_SESSION_PASSWORD` environment variable.

::note
If not set, this environment variable will be added to your `.env` automatically when running in development mode.
::

::important
You'll need to add this environment variable to your production environment before deploying.
::

For this recipe, we'll create a simple API route to sign-in a user based on static data.

Let's create a `/api/login` API route that will accept a POST request with the email and password in the request body.

::callout
Make sure to install the `zod` dependency in your project (`npm i zod`).
::

::tip{to="https://github.com/atinux/nuxt-auth-utils#server-utils"}
Read more about the `setUserSession` server helper exposed by `nuxt-auth-utils`.
::

The module exposes a Vue composable to know if a user is authenticated in our application:

Let's create a login page with a form to submit the login data to our `/api/login` route.

## Protect API Routes

Protecting server routes is key to making sure your data is safe. Client-side middleware is helpful for the user, but without server-side protection your data can still be accessed. It is critical to protect any routes with sensitive data, we should return a 401 error if the user is not logged in on those.

The `auth-utils` module provides the `requireUserSession` utility function to help make sure that users are logged in and have an active session.

Let's create an example of a `/api/user/stats` route that only authenticated users can access.

## Protect App Routes

Our data is safe with the server-side route in place, but without doing anything else, unauthenticated users would probably get some odd data when trying to access the `/users` page. We should create a [client-side middleware](https://nuxt.com/docs/guide/directory-structure/middleware){rel="nofollow"} to protect the route on the client side and redirect users to the login page.

`nuxt-auth-utils` provides a convenient `useUserSession` composable which we'll use to check if the user is logged in, and redirect them if they are not.

We'll create a middleware in the `/middleware` directory. Unlike on the server, client-side middleware is not automatically applied to all endpoints, and we'll need to specify where we want it applied.

Now that we have our app middleware to protect our routes, we can use it on our home page that display our authenticated user information. If the user is not authenticated, they will be redirected to the login page.

We'll use [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) to apply the middleware to the route that we want to protect.

We also added a logout button to clear the session and redirect the user to the login page.

We've successfully set up a very basic user authentication and session management in our Nuxt app. We've also protected sensitive routes on the server and client side to ensure that only authenticated users can access them.

As next steps, you can:

- Add authentication using the [20+ supported OAuth providers](https://github.com/atinux/nuxt-auth-utils?tab=readme-ov-file#supported-oauth-providers){rel="nofollow"}
- Add a database to store users, see [Nitro SQL Database](https://nitro.build/guide/database){rel="nofollow"} or [NuxtHub SQL Database](https://hub.nuxt.com/docs/features/database){rel="nofollow"}
- Let user signup with email & password using [password hashing](https://github.com/atinux/nuxt-auth-utils?tab=readme-ov-file#password-hashing){rel="nofollow"}
- Add support for [WebAuthn / Passkeys](https://github.com/atinux/nuxt-auth-utils?tab=readme-ov-file#webauthn-passkey){rel="nofollow"}

Checkout the open source [atidone repository](https://github.com/atinux/atidone){rel="nofollow"} for a full example of a Nuxt app with OAuth authentication, database and CRUD operations.

**Examples:**

Example 1 (unknown):
```unknown
::callout
This command will install `nuxt-auth-utils` as dependency and push it in the `modules` section of our `nuxt.config.ts`
::

## Cookie Encryption Key

As `nuxt-auth-utils` uses sealed cookies to store session data, session cookies are encrypted using a secret key from the `NUXT_SESSION_PASSWORD` environment variable.

::note
If not set, this environment variable will be added to your `.env` automatically when running in development mode.
::
```

Example 2 (unknown):
```unknown
::important
You'll need to add this environment variable to your production environment before deploying.
::

## Login API Route

For this recipe, we'll create a simple API route to sign-in a user based on static data.

Let's create a `/api/login` API route that will accept a POST request with the email and password in the request body.
```

Example 3 (unknown):
```unknown
::callout
Make sure to install the `zod` dependency in your project (`npm i zod`).
::

::tip{to="https://github.com/atinux/nuxt-auth-utils#server-utils"}
Read more about the `setUserSession` server helper exposed by `nuxt-auth-utils`.
::

## Login Page

The module exposes a Vue composable to know if a user is authenticated in our application:
```

Example 4 (unknown):
```unknown
Let's create a login page with a form to submit the login data to our `/api/login` route.
```

---

## Head

**URL:** llms-txt#head

**Contents:**
- `setGlobalHead`
  - Type
  - Parameters
  - Examples

Sets global head configuration for your Nuxt application. This utility allows modules to programmatically configure meta tags, links, scripts, and other head elements that will be applied across all pages.

The provided head configuration will be merged with any existing head configuration using deep merging, with your provided values taking precedence.

::tip
This is particularly useful for modules that need to inject global meta tags, stylesheets, or scripts into the application head.
::

**Type**: `AppHeadMetaObject`

An object containing head configuration. All properties are optional and will be merged with existing configuration:

- `charset`: Character encoding for the document
- `viewport`: Viewport meta tag configuration
- `meta`: Array of meta tag objects
- `link`: Array of link tag objects (stylesheets, icons, etc.)
- `style`: Array of inline style tag objects
- `script`: Array of script tag objects
- `noscript`: Array of noscript tag objects
- `title`: Default page title
- `titleTemplate`: Template for formatting page titles
- `bodyAttrs`: Attributes to add to the `<body>` tag
- `htmlAttrs`: Attributes to add to the `<html>` tag

#### Adding Global Meta Tags

#### Injecting Global Stylesheets

#### Adding Global Scripts

#### Setting HTML Attributes

**Examples:**

Example 1 (unknown):
```unknown
### Parameters

#### `head`

**Type**: `AppHeadMetaObject`

An object containing head configuration. All properties are optional and will be merged with existing configuration:

- `charset`: Character encoding for the document
- `viewport`: Viewport meta tag configuration
- `meta`: Array of meta tag objects
- `link`: Array of link tag objects (stylesheets, icons, etc.)
- `style`: Array of inline style tag objects
- `script`: Array of script tag objects
- `noscript`: Array of noscript tag objects
- `title`: Default page title
- `titleTemplate`: Template for formatting page titles
- `bodyAttrs`: Attributes to add to the `<body>` tag
- `htmlAttrs`: Attributes to add to the `<html>` tag

### Examples

#### Adding Global Meta Tags
```

Example 2 (unknown):
```unknown
#### Injecting Global Stylesheets
```

Example 3 (unknown):
```unknown
#### Adding Global Scripts
```

Example 4 (unknown):
```unknown
#### Setting HTML Attributes
```

---

## Nuxt 3.3

**URL:** llms-txt#nuxt-3.3

**Contents:**
- ✨ Local module development DX
- ♻️ Restarting Nuxt
- 🔥 Performance improvements
- 🐛 Error handling
- ⚡️ Head improvements
- 🪵 Better logging in browser DevTools
- 💪 Type improvements
- ⚗️ Nitro enhancements
- 🛠️ Build changes
- 🗺️ Custom config schema (advanced)

## ✨ Local module development DX

We've landed a raft of changes to enable local modules and improve DX.

We now auto-scan your [`~/modules`](https://nuxt.com/docs/guide/directory-structure/modules) folder and register top level files there as modules in your project ([#19394](https://github.com/nuxt/nuxt/pull/19394){rel="nofollow"}).

When these files are changed, we'll automatically restart the nuxt server.

We also now expose `nuxt/kit` for easy access to kit composables in your local project without having to install `@nuxt/kit` ([#19422](https://github.com/nuxt/nuxt/pull/19422){rel="nofollow"}).

[Read the documentation about local modules](https://nuxt.com/docs/guide/directory-structure/modules).

## ♻️ Restarting Nuxt

You can add files to the `watch` array to automatically restart the server ([#19530](https://github.com/nuxt/nuxt/pull/19530){rel="nofollow"}). This is likely to be particularly useful for module authors. You can also trigger a restart of the Nuxt server with the new `restart` hook ([#19084](https://github.com/nuxt/nuxt/pull/19084){rel="nofollow"}).

## 🔥 Performance improvements

We've increased static asset maxAge to 1 year as a matter of best practice ([#19335](https://github.com/nuxt/nuxt/pull/19335){rel="nofollow"}), and support tree-shaking more of your build ([#19508](https://github.com/nuxt/nuxt/pull/19508){rel="nofollow"}).

![nuxt-performance-improvements](https://nuxt.com/assets/blog/nuxt-performance-improvements.png){.rounded-lg.border.border-gray-700}

We also now support preloading [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) with a route in object-syntax ([#19120](https://github.com/nuxt/nuxt/pull/19120){rel="nofollow"}):

We also track how long it takes each module you use to perform its setup, and warn if it takes too long. You can see all these values by running your dev server with `DEBUG=1` ([#18648](https://github.com/nuxt/nuxt/pull/18648){rel="nofollow"}).

You can also opt-in to some of Nuxt's internal optimisations by configuring composables to be treeshaken in a particular environment ([#19383](https://github.com/nuxt/nuxt/pull/19383){rel="nofollow"}) or to have magic keys automatically injected ([#19490](https://github.com/nuxt/nuxt/pull/19490){rel="nofollow"}).

We now handle chunk errors by default ([#19086](https://github.com/nuxt/nuxt/pull/19086){rel="nofollow"}), meaning if your site updates with a redeploy, **we automatically handle reloading it on navigation**.

To disable this behavior, set `experimental.emitRouteChunkError` option to `'manual'` and handle it yourself with the new [`reloadNuxtApp`](https://nuxt.com/docs/api/utils/reload-nuxt-app){rel="nofollow"} composable. Learn more how we implemented in our [chunk-reload.client.ts plugin](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/plugins/chunk-reload.client.ts){rel="nofollow"}.

You can also set `experimental.restoreState` to preserve some of your app state across reloads:

We also have a new experimental error handling component: [`<NuxtClientFallback>`](https://nuxt.com/docs/api/components/nuxt-client-fallback) ([#8216](https://github.com/nuxt/framework/pull/8216){rel="nofollow"}) which can capture errors rendering on server, replace them with fallback content, and granularly trigger rerendering the part with an error on the client. This can be enabled with `experimental.clientFallback` - feedback very welcome!

## ⚡️ Head improvements

We've migrated to use [unhead](https://github.com/unjs/unhead){rel="nofollow"} directly ([#19519](https://github.com/nuxt/nuxt/pull/19519){rel="nofollow"}) - and automatically tree-shake server-only head composables like `useServerHead` from your client build ([#19576](https://github.com/nuxt/nuxt/pull/19576){rel="nofollow"}), meaning you can have great SEO without needing to include meta tag logic that's relevant only for crawlers in your client build.

There's also a new [`useHeadSafe`](https://nuxt.com/docs/api/composables/use-head-safe) composable that handles sanitising untrusted user input ([#19548](https://github.com/nuxt/nuxt/pull/19548){rel="nofollow"}).

## 🪵 Better logging in browser DevTools

Working with the Chrome DevTools team, we've landed a couple of features across the unjs + Nuxt ecosystem meaning we now have first-class support for hiding Nuxt internal stack traces from logs in your (Chromium-based, for now) browser [#19243](https://github.com/nuxt/nuxt/pull/19243){rel="nofollow"}. We also landed a couple of improvements with stacktraces involving Nuxt hooks ([unjs/hookable#69](https://github.com/unjs/hookable/pull/69){rel="nofollow"} and [unjs/hookable#68](https://github.com/unjs/hookable/pull/68){rel="nofollow"}) implementing [`console.createTask`](https://developer.chrome.com/blog/devtools-modern-web-debugging/#linked-stack-traces){rel="nofollow"}.

| Before                                                                                                                                                  | After                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![before-nuxt-console-improvements](https://user-images.githubusercontent.com/28706372/220933126-56d9a0e5-e846-4958-a40a-e528a48bcb32.png){width="529"} | ![after-nuxt-console-improvements](https://user-images.githubusercontent.com/28706372/220932932-932f193b-59a6-4385-8796-a62dcfd59c20.png){width="534"} |

## 💪 Type improvements

Types for server API routes are now more correct - with non-serialisable types stripped out of the return type ([unjs/nitro#1002](https://github.com/unjs/nitro/pull/1002){rel="nofollow"}).

We also now type more of `NuxtApp` and correctly type unknown injections for greater type-safety ([#19643](https://github.com/nuxt/nuxt/pull/19643){rel="nofollow"}).

And if you were struggling with correct types when using `transform` + `default` with Nuxt data fetching composables, fear no more - we now infer the types correctly ([#19487](https://github.com/nuxt/nuxt/pull/19487){rel="nofollow"}).

## ⚗️ Nitro enhancements

This release comes with Nitro v2.3, which brings lots of improvements of its own. Check out [the release](https://github.com/unjs/nitro/releases/tag/v2.3.0){rel="nofollow"} for more info.

We now support [`useAppConfig`](https://nuxt.com/docs/api/composables/use-app-config) in nitro server routes ([#19489](https://github.com/nuxt/nuxt/pull/19489){rel="nofollow"}) - a long-awaited change. Now [`useAppConfig`](https://nuxt.com/docs/api/composables/use-app-config) is consistently available throughout your app for non-runtime configuration from layers, modules, etc.

We've also added a `nitro:build:public-assets` hook to allow modifying assets output from nitro's prerender/build phase ([#19638](https://github.com/nuxt/nuxt/pull/19638){rel="nofollow"}).

As part of moving towards [first-class support for PNP and pnpm support without `--shamefully-hoist`](https://github.com/nuxt/nuxt/issues/14146){rel="nofollow"}, we've dropped support for some internal (deprecated) utilities using CJS resolve patterns ([#19537](https://github.com/nuxt/nuxt/pull/19537){rel="nofollow"} and [#19608](https://github.com/nuxt/nuxt/pull/19608){rel="nofollow"}).

We also now resolve dependencies like `nuxt`, `@nuxt/kit` and more using ESM search-paths. We'll be keeping a close eye on this.

We're also preparing the groundwork for support of new TypeScript Node16 module resolution ([#19606](https://github.com/nuxt/nuxt/issues/19606){rel="nofollow"}), and as part of this have changed the format of our runtime output (using `.js` instead of `.mjs` extensions, providing `types` fields for subpath exports, and more).

## 🗺️ Custom config schema (advanced)

We've been testing out an experimental feature to allow modules and users to extend the Nuxt config schema ([#15592](https://github.com/nuxt/nuxt/issues/15592){rel="nofollow"}), and we've now enabled this by default ([#19172](https://github.com/nuxt/nuxt/pull/19172){rel="nofollow"}). We expect this will be particularly useful for module and layer/theme authors, and should result in some nicer DX for their users.

See the full changelog by [comparing the changes](https://github.com/nuxt/nuxt/compare/v3.2.3...v3.3.0){rel="nofollow"} or checkout the [release on GitHub](https://github.com/nuxt/nuxt/releases/tag/v3.3.0){rel="nofollow"}.

We would like to thank all the 28 contributors who helped on this release 💚

**Examples:**

Example 1 (diff):
```diff
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
-   '~/modules/purge-comments'
  ]
})
```

Example 2 (html):
```html
<NuxtLink :to="{ name: 'home', query: { year: '2023' } }">Home</NuxtLink>
```

Example 3 (sh):
```sh
DEBUG=1 npx nuxt dev
ℹ Module pages took 1.5ms to setup.
ℹ Module meta took 3.15ms to setup
ℹ Module components took 4.5ms to setup.
...
```

---

## Using Vite Plugins in Nuxt

**URL:** llms-txt#using-vite-plugins-in-nuxt

**Contents:**
- Using Vite Plugins in Nuxt Modules

While Nuxt modules offer extensive functionality, sometimes a specific Vite plugin might meet your needs more directly.

First, we need to install the Vite plugin, for our example, we'll use `@rollup/plugin-yaml`:

::code-group{sync="pm"}

Next, we need to import and add it to our [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file:

Now we installed and configured our Vite plugin, we can start using YAML files directly in our project.

For example, we can have a `config.yaml` that stores configuration data and import this data in our Nuxt components:

## Using Vite Plugins in Nuxt Modules

If you're developing a Nuxt module and need to add Vite plugins, you should use the [`addVitePlugin`](https://nuxt.com/docs/4.x/api/kit/builder#addviteplugin) utility:

For environment-specific plugins in Nuxt 5+, use the `applyToEnvironment()` method:

::important
If you're writing code that needs to access resolved Vite configuration, you should use the `config` and `configResolved` hooks *within* your Vite plugin, rather than using Nuxt's `vite:extend`, `vite:extendConfig` and `vite:configResolved`.
::

::read-more{to="https://nuxt.com/docs/4.x/api/kit/builder#addviteplugin"}
Read more about `addVitePlugin` in the Nuxt Kit documentation.
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

Next, we need to import and add it to our [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file:
```

---

## Custom useFetch in Nuxt

**URL:** llms-txt#custom-usefetch-in-nuxt

**Contents:**
- Custom `$fetch`
- Custom `useFetch`/`useAsyncData`

When working with Nuxt, you might be making the frontend and fetching an external API, and you might want to set some default options for fetching from your API.

The [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch) utility function (used by the [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) composable) is intentionally not globally configurable. This is important so that fetching behavior throughout your application remains consistent, and other integrations (like modules) can rely on the behavior of core utilities like `$fetch`.

However, Nuxt provides a way to create a custom fetcher for your API (or multiple fetchers if you have multiple APIs to call).

Let's create a custom `$fetch` instance with a [Nuxt plugin](https://nuxt.com/docs/3.x/guide/directory-structure/plugins).

::note
`$fetch` is a configured instance of [ofetch](https://github.com/unjs/ofetch){rel="nofollow"} which supports adding the base URL of your Nuxt server as well as direct function calls during SSR (avoiding HTTP roundtrips).
::

Let's pretend here that:

- The main API is <https://api.nuxt.com>{rel="nofollow"}
- We are storing the JWT token in a session with [nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils){rel="nofollow"}
- If the API responds with a `401` status code, we redirect the user to the `/login` page

With this Nuxt plugin, `$api` is exposed from `useNuxtApp()` to make API calls directly from the Vue components:

::callout
Wrapping with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) **avoid double data fetching when doing server-side rendering** (server & client on hydration).
::

## Custom `useFetch`/`useAsyncData`

Now that `$api` has the logic we want, let's create a `useAPI` composable to replace the usage of `useAsyncData` + `$api`:

Let's use the new composable and have a nice and clean component:

If you want to customize the type of any error returned, you can also do so:

::note
This example demonstrates how to use a custom `useFetch`, but the same structure is identical for a custom `useAsyncData`.
::

::link-example
---
to: https://nuxt.com/docs/examples/advanced/use-custom-fetch-composable
---
::

::video-accordion
---
title: Watch a video about custom $fetch and Repository Pattern in Nuxt
video-id: jXH8Tr-exhI
---
::

::note
We are currently discussing to find a cleaner way to let you create a custom fetcher, see <https://github.com/nuxt/nuxt/issues/14736>{rel="nofollow"}.
::

**Examples:**

Example 1 (unknown):
```unknown
With this Nuxt plugin, `$api` is exposed from `useNuxtApp()` to make API calls directly from the Vue components:
```

Example 2 (unknown):
```unknown
::callout
Wrapping with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) **avoid double data fetching when doing server-side rendering** (server & client on hydration).
::

## Custom `useFetch`/`useAsyncData`

Now that `$api` has the logic we want, let's create a `useAPI` composable to replace the usage of `useAsyncData` + `$api`:
```

Example 3 (unknown):
```unknown
Let's use the new composable and have a nice and clean component:
```

Example 4 (unknown):
```unknown
If you want to customize the type of any error returned, you can also do so:
```

---

## Nuxt Plugins

**URL:** llms-txt#nuxt-plugins

**Contents:**
- Avoid costly plugin setup
- Use Composition whenever possible
- If `async`, enable `parallel`

Plugins in Nuxt allow you to extend your application with additional functionality. However, improper use can lead to performance bottlenecks. This guide outlines best practices to optimize your Nuxt plugins.

## Avoid costly plugin setup

A large number of plugins can cause performance issues, especially if they require expensive computations or take too long to initialize. Since plugins run during the hydration phase, inefficient setups can block rendering and degrade the user experience.

## Use Composition whenever possible

Whenever possible, favor composition over plugins. Just like in Vue, many utilities and composables can be used directly without the need for a plugin. This keeps your project lightweight and improves maintainability.

## If `async`, enable `parallel`

By default, all plugins loads synchronously.
When defining asynchronous plugins, setting `parallel: true` allows multiple plugins to load concurrently, improving performance by preventing blocking operations.

---

## Layout

**URL:** llms-txt#layout

**Contents:**
- `addLayout`
  - Usage
  - Type
  - Parameters
  - Example

Layouts is used to be a wrapper around your pages. It can be used to wrap your pages with common components, for example, a header and a footer. Layouts can be registered using `addLayout` utility.

Register template as layout and add it to the layouts.

::note
In Nuxt 2 `error` layout can also be registered using this utility. In Nuxt 3+ `error` layout [replaced](https://nuxt.com/docs/3.x/getting-started/error-handling#rendering-an-error-page) with `error.vue` page in project root.
::

**`layout`**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

| Property      | Type                                                                                                                                                   | Required | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                                                                                                                                               | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                          |
| `filename`    | `string`                                                                                                                                               | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                   |
| `dst`         | `string`                                                                                                                                               | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                |
| `options`     | `Record<string, any>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                | `false`  | Options to pass to the template.                                                                                                                                                 |
| `getContents` | `(data) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored. |
| `write`       | `boolean`                                                                                                                                              | `false`  | If set to `true`, the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.                                         |

**`name`**: The name to register the layout under (e.g., `default`, `custom`, etc.).

This will register a layout named `custom` that wraps pages with a header and footer.

You can then use this layout in your pages:

::warning
Due to the lack of support for virtual `.vue` files by `@vitejs/plugin-vue`, you can work around this limitation by passing `write: true` to the first argument of `addLayout`.
::

**Examples:**

Example 1 (unknown):
```unknown
### Type
```

Example 2 (unknown):
```unknown
### Parameters

**`layout`**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

| Property      | Type                                                                                                                                                   | Required | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                                                                                                                                               | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                          |
| `filename`    | `string`                                                                                                                                               | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                   |
| `dst`         | `string`                                                                                                                                               | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                |
| `options`     | `Record<string, any>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"}                | `false`  | Options to pass to the template.                                                                                                                                                 |
| `getContents` | `(data) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored. |
| `write`       | `boolean`                                                                                                                                              | `false`  | If set to `true`, the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.                                         |

**`name`**: The name to register the layout under (e.g., `default`, `custom`, etc.).

### Example

This will register a layout named `custom` that wraps pages with a header and footer.
```

Example 3 (unknown):
```unknown
You can then use this layout in your pages:
```

---

## setPageLayout

**URL:** llms-txt#setpagelayout

::important
`setPageLayout` allows you to dynamically change the layout of a page. It relies on access to the Nuxt context and therefore can only be called within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

::note
If you choose to set the layout dynamically on the server side, you *must* do so before the layout is rendered by Vue (that is, within a plugin or route middleware) to avoid a hydration mismatch.
::

---

## Introducing Nuxt DevTools

**URL:** llms-txt#introducing-nuxt-devtools

**Contents:**
- Developer Experience
- The Problem
- Introducing Nuxt DevTools
  - Overview
  - Pages
  - Components
  - Imports
  - Modules
  - Assets
  - Plugins

We announced the preview of [Nuxt DevTools](https://github.com/nuxt/devtools){rel="nofollow"} on [Vue Amsterdam 2023](https://vuejs.amsterdam/){rel="nofollow"}, a new tool to help you understand your Nuxt app and improve the developer experience even further. Today we released a new minor version [`v0.3.0`](https://github.com/nuxt/devtools/releases/tag/v0.3.0){rel="nofollow"} with a bunch of updates and improvements.

![devtools-tab-overview](https://nuxt.com/assets/blog/devtools/tab-overview.png)

In this post, we will explore the reasons behind the creation of Nuxt DevTools, how it can enhance your development experience, and what you can expect in the future.

## Developer Experience

Over the recent years, there has been an increasing focus on Developer Experience (DX). Tools and frameworks have been striving to improve the DX. Along the way, Nuxt introduced many innovative features and conventions to make your day-to-day development easier and more efficient.

In Nuxt 3, we switched to [Vite](https://vitejs.dev/){rel="nofollow"} as the default bundler for the instant hot module replacement (HMR) during developement, creating a faster feedback loop to your workflow. Additionally, we have introduced [Nitro](https://github.com/unjs/nitro){rel="nofollow"}, a new server engine that allows you to deploy your Nuxt app to any hosting service, such as [Vercel](https://vercel.com){rel="nofollow"}, [Netlify](https://netlify.com){rel="nofollow"}, [Cloudflare](https://cloudflare.com){rel="nofollow"} and [more](https://nitro.unjs.io/deploy){rel="nofollow"} **with zero-config**.

Nuxt offers many common practices built-in:

- Write TypeScript and ESM out-of-the-box throughout your codebase.
- Build single-page applications (SPA), server-side rendering (SSR), static site generation (SSG), or [hybrid them **per routes**](https://nuxt.com/docs/guide/concepts/rendering#route-rules) - using the same codebase isomorphically without any explicit setup.
- Use several composables, like [`useState`](https://nuxt.com/docs/api/composables/use-state) and [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) for sharing states accessible across the server and client sides.
- Leverage SEO utilities, like [`useHead`](https://nuxt.com/docs/api/composables/use-head) and [`useSeoMeta`](https://nuxt.com/docs/getting-started/seo-meta#useseometa) to make meta-tags management a breaze.

Moreover, features such as the [layout system](https://nuxt.com/docs/guide/directory-structure/layouts), [plugins](https://nuxt.com/docs/guide/directory-structure/plugins), route [middleware](https://nuxt.com/docs/guide/directory-structure/middleware), and other tools make app creation easier and codebases more organized.

Conventions like [file-based routing](https://nuxt.com/docs/guide/directory-structure/pages) and [file-based server APIs](https://nitro.unjs.io/guide/introduction/routing){rel="nofollow"} making the routing intuitive and effortless.

[Components auto-imports](https://nuxt.com/docs/guide/directory-structure/components) makes it easy to create shared components that are directly available in any Vue file. Unlike global components, they are code-splitted. We also introduced [composables auto-import](https://nuxt.com/docs/guide/concepts/auto-imports), where all APIs from Vue are directly available. Nuxt modules can also provide their custom composables to be auto-imported, as well as your [local composables](https://nuxt.com/docs/guide/directory-structure/composables).

Recently, we introduced client and server-only components, which can be used by adding `.client` and `.server` to the filename. All these conventions are fully typed and developers can even have type autocomplete when doing route navigation or fetching data from APIs. &#x2A;*These conventions significantly reduce boilerplate code, avoid duplications, and improve productivity.**

When it comes to ecosystem, Nuxt has a large community of developers building modules around it, [with hundreds of high-quality modules](https://nuxt.com/modules) available. Modules allow developers to get integrations for features they want without worrying about configuration or best practices.

Nuxt is capable of creating a large scale application at ease, however there is one problem: **the lack of transparency**.

For every new feature and convention we introduce, we are adding a bit more abstraction to the framework.

Abstractions are great things to transfer implementation complexity and make things easier to get more focus when building. On the other hand, they can also add extra burden for users to learn and understand what's going on under the hood. Leading also to implicitness, like where a auto-imported component is from, or how many modules is using a certain component, etc. It can also make things hard to debug.

This might be considered as a trade-off of any tools, you have to learn and understand the tool to use it with efficiency. Despite improving the documentation and providing more examples, **we believe of an opportunity to improve the lack of transparency**.

## Introducing Nuxt DevTools

[Nuxt DevTools](https://github.com/nuxt/devtools){rel="nofollow"} is a visual tool to help you understand your Nuxt app and improve the developer experience even further. It's created to provide a better transparency of Nuxt and your app, find performance bottlenecks and help you manage your app and configuration.

It is shipped as an experimental module and provide the views right inside your app. Once installed, it will add a small icon on the bottom of your app. Clicking it will open the DevTools panel.

To try it, please refer to the [installation guide](https://devtools.nuxtjs.org/guide){rel="nofollow"}.

Shows a quick overview of your app, including the Nuxt version, pages, components, modules, and plugins you are using. &#x2A;*It also check your Nuxt version and allow you to upgrade with a single click.**

:video{autoplay controls autoPlay="true" controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1679922926/nuxt3/nuxt-devtools-upgrade_dnfghq.jpg"}

The pages tab shows your current routes and provide a quick way to navigate to them. For dynamic routes, it also provide a form to fill with each params interactively. You can also use the textbox to play and test how each route is matched.

:video{autoplay controls autoPlay="true" controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1679923373/nuxt3/nuxt-devtools-pages_csjoh0.jpg"}

Components tab show all the components you are using in your app and where they are from. You can also search for them and go to the source code.

![nuxt-devtools-tab-components](https://nuxt.com/assets/blog/devtools/tab-components.png)

It also provides a graph view that show the relationship between components. You can filter the components to see the dependencies of a specific component. This could help to identify unintended dependencies and improve the performance and bundle size of pages.

![nuxt-devtools-components-graph](https://nuxt.com/assets/blog/devtools/tab-components-graph-all.png)

![nuxt-devtools-components-graph-filtered](https://nuxt.com/assets/blog/devtools/tab-components-graph-filtered.png)

You can also use the "Inspector" feature to inspect the DOM tree and see which component is rendering it. Click to go to your editor of the specific line. Making it much easier to make changes, without the requirement of understanding the project structure thoroughly.

![nuxt-devtools-tab-components-inspector](https://nuxt.com/assets/blog/devtools/tab-components-inspector.png)

Imports tab shows all the auto-imports registered to Nuxt. You can see which files are importing them, and where they are from. Some entries can also provide short descriptions and documentation links.

![nuxt-devtools-tab-imports](https://nuxt.com/assets/blog/devtools/tab-imports.png)

Modules tab shows all the modules you have installed and providing the links to their documentation and source code. You can find more modules available in [Nuxt Modules](https://nuxt.com/modules).

![nuxt-devtools-tab-modules](https://nuxt.com/assets/blog/devtools/tab-modules.png)

Recently we introduce the experimental upgrade feature, which allows you to upgrade your Nuxt or modules with ease. With the [Terminal tab](https://nuxt.com/#terminals), it shows the output of the upgrade process transparently.

![nuxt-devtools-tab-modules-upgrade](https://nuxt.com/assets/blog/devtools/tab-modules-upgrade.png)

The assets tab that shows all your static assets and their information. You can copy the paths of the assets, or the code snippets of using them. In the future, with the integrations of [Nuxt Image](https://image.nuxtjs.org/){rel="nofollow"}, you can even optimize images with a single click.

![nuxt-devtools-tab-assets](https://nuxt.com/assets/blog/devtools/tab-assets.png)

Plugins tab shows all the plugins you are using in your app. As plugins runs before the app is mounted,the time spent in each plugin should be minimal to avoid blocking the app from rendering. The time cost of each plugin provided can be helpful to find performance bottlenecks.

![nuxt-devtools-tab-plugins](https://nuxt.com/assets/blog/devtools/tab-plugins.png)

Hooks tab can help you to monitor the time spent in each hook from both client and server side. You can also see how many lisenters registed to each hook, and how many times they have been invoked. This can be helpful to find performance bottlenecks.

![nuxt-devtools-tab-hooks](https://nuxt.com/assets/blog/devtools/tab-hooks.png)

You can inspect and modify the app config in DevTools, try different configurations and see the effects immediately.

![nuxt-devtools-app-config](https://nuxt.com/assets/blog/devtools/tab-app-config.png)

This tab shows the state created by [`useState`](https://nuxt.com/docs/api/composables/use-state), [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch). It can be helpful to understand how the data is fetched and how the state is managed, or change them reactively to see it they affects your app. For `useAsyncData` and `useFetch`, you can also manually the trigger the refetch.

![nuxt-devtools-tab-payload](https://nuxt.com/assets/blog/devtools/tab-payload.png)

In some integrations, they might require to have subprocesses running to do certain jobs. Before DevTools, you either hide the output of the subprocess entirely and swallow the potential warnings/errors, or pipe to stdout and pollute your terminal with multiple outputs. Now you can now have the outputs in DevTools for each process and clearly isolated.

![nuxt-devtools-tab-terminals](https://nuxt.com/assets/blog/devtools/tab-terminals.png)

Virtual Files tab shows the virtual files generated by Nuxt and Nitro to support the conventions. This can be helpful for advanced debugging.

![nuxt-devtools-tab-virtual-files](https://nuxt.com/assets/blog/devtools/tab-virtual-files.png)

Inspect expose the [`vite-plugin-inspect`](https://github.com/antfu/vite-plugin-inspect){rel="nofollow"} integration, allowing you to inspect transformation steps of Vite. It can be helpful to understand how each plugin is transforming your code and spot potential issues.

![nuxt-devtools-vite-plugin-inspect](https://nuxt.com/assets/blog/devtools/tab-inspect.png)

Thanks to [VS Code Server](https://code.visualstudio.com/docs/remote/vscode-server){rel="nofollow"}, we are able to integrate a **full-featured** VS Code instance into DevTools. You can install extensions and sync your settings. This allows you to get closer feedback loop where you can change the code and see the result immediately without leaving the browser.

![nuxt-devtools-tab-vscode](https://nuxt.com/assets/blog/devtools/tab-vscode.png)

### Module Contributed View

With the ecosystem in mind, Nuxt DevTools to designed to be flexible and extendable. Modules could contribute their own views to DevTools, to provide interactive data and playgrounds for their integrations. The following are a few examples:

[VueUse module](https://nuxt.com/modules/vueuse) provides a search page for available composables and see their documentation.

![nuxt-devtools-tab-vueuse](https://nuxt.com/assets/blog/devtools/tab-vueuse.png)

[UnoCSS module](https://nuxt.com/modules/unocss) provides an interactive inspector to see how each module contributes to the final CSS.

![nuxt-devtools-tab-unocss](https://nuxt.com/assets/blog/devtools/tab-unocss.png)

[Nuxt Icon module](https://nuxt.com/modules/icon) provides a search engine for all icons available.

![nuxt-devtools-tab-nuxt-icon](https://nuxt.com/assets/blog/devtools/tab-icones.png)

[Nuxt Vitest module](https://nuxt.com/modules/vitest){rel="nofollow"} provides Vitest UI for tests runing with the same pipeline as your Nuxt app.

![nuxt-devtools-tab-vitest](https://nuxt.com/assets/blog/devtools/tab-vitest.png)

### For Module Authors

With the release of `v0.3.0`, we improved the ability for module authors to contribute to the DevTools.

- Module contributed views
- Access to client app's context and devtools' utils
- Custom RPC functions to communicate between server and client
- Subprocesses spawning and output steaming
- [`@nuxt/devtools-kit`](https://devtools.nuxtjs.org/module/utils-kit){rel="nofollow"} - a set of utilities help you integrate your module with DevTools
- [`@nuxt/devtools-ui-kit`](https://devtools.nuxtjs.org/module/ui-kit){rel="nofollow"} - the UI components used in DevTools, to make your module's view consistent with the rest of DevTools
- Starter template to create module with DevTools integration

Please check out the [Devtools Module Authors Guide](https://devtools.nuxtjs.org/module/guide){rel="nofollow"} to learn more.

## What to Expect Next?

This is just the beginning of the journey. We are planning to add more features to DevTools, while exploring the ways to present the data in more intuitive and playful ways.

The goals of Nuxt DevTools are to:

- :icon{.size-5 name="lucide:blend"} Improve transparency for conventions
- :icon{.size-5 name="lucide:gauge"} Inspecting performance & analysis
- :icon{.size-5 name="lucide:swatch-book"} Interactive & playful
- :icon{.size-5 name="lucide:file-pen-line"} Personalized documentations
- :icon{.size-5 name="lucide:blocks"} Manage and scaffold apps with ease
- :icon{.size-5 name="lucide:lightbulb"} Provide insights and improvements
- :icon{.size-5 name="lucide:user-check"} Make the development experience more enjoyable

You can check our [Project Roadmap](https://github.com/nuxt/devtools/discussions/31){rel="nofollow"} and share your [Ideas & Suggestions](https://github.com/nuxt/devtools/discussions/29){rel="nofollow"}, helping us to make the DevTools better.

You can follow the latest updates by staring the [GitHub repository](https://github.com/nuxt/devtools){rel="nofollow"}, and following [Nuxt's official Twitter](https://x.com/nuxt_js){rel="nofollow"}.

Thank you for reading, and we are looking forward to your feedback and contributions!

---

## addRouteMiddleware

**URL:** llms-txt#addroutemiddleware

**Contents:**
- Type
- Parameters
  - `name`
  - `middleware`
  - `options`
- Examples
  - Named Route Middleware
  - Global Route Middleware

::note
Route middleware are navigation guards stored in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) directory of your Nuxt application (unless [set otherwise](https://nuxt.com/docs/3.x/api/nuxt-config#middleware)).
::

- **Type:** `string` | `RouteMiddleware`

Can be either a string or a function of type `RouteMiddleware`. Function takes the next route `to` as the first argument and the current route `from` as the second argument, both of which are Vue route objects.

Learn more about available properties of [route objects](https://nuxt.com/docs/3.x/api/composables/use-route).

- **Type:** `RouteMiddleware`

The second argument is a function of type `RouteMiddleware`. Same as above, it provides `to` and `from` route objects. It becomes optional if the first argument in `addRouteMiddleware()` is already passed as a function.

- **Type:** `AddRouteMiddlewareOptions`

An optional `options` argument lets you set the value of `global` to `true` to indicate whether the router middleware is global or not (set to `false` by default).

### Named Route Middleware

Named route middleware is defined by providing a string as the first argument and a function as the second:

When defined in a plugin, it overrides any existing middleware of the same name located in the `middleware/` directory.

### Global Route Middleware

Global route middleware can be defined in two ways:

- Pass a function directly as the first argument without a name. It will automatically be treated as global middleware and applied on every route change.
  
- Set an optional, third argument `{ global: true }` to indicate whether the route middleware is global.

**Examples:**

Example 1 (ts):
```ts
function addRouteMiddleware (name: string, middleware: RouteMiddleware, options?: AddRouteMiddlewareOptions): void
function addRouteMiddleware (middleware: RouteMiddleware): void

interface AddRouteMiddlewareOptions {
  global?: boolean
}
```

Example 2 (unknown):
```unknown
When defined in a plugin, it overrides any existing middleware of the same name located in the `middleware/` directory.

### Global Route Middleware

Global route middleware can be defined in two ways:

- Pass a function directly as the first argument without a name. It will automatically be treated as global middleware and applied on every route change.
```

Example 3 (unknown):
```unknown
- Set an optional, third argument `{ global: true }` to indicate whether the route middleware is global.
```

---

## useLoadingIndicator

**URL:** llms-txt#useloadingindicator

**Contents:**
- Description
- Parameters
- Properties
  - `isLoading`
  - `error`
  - `progress`
- Methods
  - `start()`
  - `set()`
  - `finish()`

A composable which returns the loading state of the page. Used by [`<NuxtLoadingIndicator>`](https://nuxt.com/docs/3.x/api/components/nuxt-loading-indicator) and controllable.
It hooks into [`page:loading:start`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) and [`page:loading:end`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) to change its state.

- `duration`: Duration of the loading bar, in milliseconds (default `2000`).
- `throttle`: Throttle the appearing and hiding, in milliseconds (default `200`).
- `estimatedProgress`: By default Nuxt will back off as it approaches 100%. You can provide a custom function to customize the progress estimation, which is a function that receives the duration of the loading bar (above) and the elapsed time. It should return a value between 0 and 100.

- **type**: `Ref<boolean>`
- **description**: The loading state

- **type**: `Ref<boolean>`
- **description**: The error state

- **type**: `Ref<number>`
- **description**: The progress state. From `0` to `100`.

Set `isLoading` to true and start to increase the `progress` value. `start` accepts a `{ force: true }` option to skip the interval and show the loading state immediately.

Set the `progress` value to a specific value. `set` accepts a `{ force: true }` option to skip the interval and show the loading state immediately.

Set the `progress` value to `100`, stop all timers and intervals then reset the loading state `500` ms later. `finish` accepts a `{ force: true }` option to skip the interval before the state is reset, and `{ error: true }` to change the loading bar color and set the error property to true.

Used by `finish()`. Clear all timers and intervals used by the composable.

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  // This is how progress is calculated by default
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50),
})
</script>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const { start, set } = useLoadingIndicator()
// same as set(0, { force: true })
// set the progress to 0, and show loading immediately
start({ force: true })
</script>
```

---

## useCookie

**URL:** llms-txt#usecookie

::read-more{to="https://nuxt.com/docs/api/composables/use-cookie"}
::

::sandbox
---
branch: main
dir: examples/advanced/use-cookie
file: app.vue
repo: nuxt/examples
---
::

---

## useResponseHeader

**URL:** llms-txt#useresponseheader

**Contents:**
- Example

::important
This composable is available in Nuxt v3.14+.
::

You can use the built-in [`useResponseHeader`](https://nuxt.com/docs/3.x/api/composables/use-response-header) composable to set any server response header within your pages, components, and plugins.

We can use `useResponseHeader` to easily set a response header on a per-page basis.

We can use `useResponseHeader` for example in Nuxt [middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) to set a response header for all pages.

**Examples:**

Example 1 (ts):
```ts
// Set a custom response header
const header = useResponseHeader('X-My-Header')
header.value = 'my-value'
```

Example 2 (unknown):
```unknown
We can use `useResponseHeader` for example in Nuxt [middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) to set a response header for all pages.
```

---

## Generates `pages/about.vue`

**URL:** llms-txt#generates-`pages/about.vue`

npx nuxt add page about
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown

```

---

## useServerSeoMeta

**URL:** llms-txt#useserverseometa

Just like [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta), `useServerSeoMeta` composable lets you define your site's SEO meta tags as a flat object with full TypeScript support.

::read-more{to="https://nuxt.com/docs/api/composables/use-seo-meta"}
::

In most instances, the meta doesn't need to be reactive as robots will only scan the initial load. So we recommend using [`useServerSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-server-seo-meta) as a performance-focused utility that will not do anything (or return a `head` object) on the client.

Parameters are exactly the same as with [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta)

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

---

## Transitions

**URL:** llms-txt#transitions

**Contents:**
- Page Transitions
- Layout Transitions
- Global Settings
- Disable Transitions
- JavaScript Hooks
- Dynamic Transitions
- Transition with NuxtPage
- View Transitions API (experimental)
  - Known Issues

::note
Nuxt leverages Vue's [`<Transition>`](https://vuejs.org/guide/built-ins/transition.html#the-transition-component){rel="nofollow"} component to apply transitions between pages and layouts.
::

You can enable page transitions to apply an automatic transition for all your [pages](https://nuxt.com/docs/3.x/guide/directory-structure/pages).

::note
If you are changing layouts as well as page, the page transition you set here will not run. Instead, you should set a [layout transition](https://nuxt.com/docs/3.x/getting-started/transitions#layout-transitions).
::

To start adding transition between your pages, add the following CSS to your [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app):

This produces the following result when navigating between pages:

:video{.rounded controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1665061349/nuxt3/nuxt3-page-transitions_umwvmh.jpg"}

To set a different transition for a page, set the `pageTransition` key in [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) of the page:

Moving to the about page will add the 3d rotation effect:

:video{.rounded controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1665063233/nuxt3/nuxt3-page-transitions-cutom.jpg"}

## Layout Transitions

You can enable layout transitions to apply an automatic transition for all your [layouts](https://nuxt.com/docs/3.x/guide/directory-structure/layouts).

To start adding transition between your pages and layouts, add the following CSS to your [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app):

This produces the following result when navigating between pages:

:video{.rounded controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1665065289/nuxt3/nuxt3-layouts-transitions_c9hwlx.jpg"}

Similar to `pageTransition`, you can apply a custom `layoutTransition` to the page component using `definePageMeta`:

You can customize these default transition names globally using `nuxt.config`.

Both `pageTransition` and `layoutTransition` keys accept [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"} as JSON serializable values where you can pass the `name`, `mode` and other valid transition-props of the custom CSS transition.

::warning
If you change the `name` property, you also have to rename the CSS classes accordingly.
::

To override the global transition property, use the `definePageMeta` to define page or layout transitions for a single Nuxt page and override any page or layout transitions that are defined globally in `nuxt.config` file.

## Disable Transitions

`pageTransition` and `layoutTransition` can be disabled for a specific route:

Or globally in the `nuxt.config`:

For advanced use-cases, you can use JavaScript hooks to create highly dynamic and custom transitions for your Nuxt pages.

This way presents perfect use-cases for JavaScript animation libraries such as [GSAP](https://gsap.com){rel="nofollow"}.

::tip
Learn more about additional [JavaScript hooks](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks){rel="nofollow"} available in the `Transition` component.
::

## Dynamic Transitions

To apply dynamic transitions using conditional logic, you can leverage inline [middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) to assign a different transition name to `to.meta.pageTransition`.

The page now applies the `slide-left` transition when going to the next id and `slide-right` for the previous:

:video{.rounded controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1665069410/nuxt3/nuxt-dynamic-page-transitions.jpg"}

## Transition with NuxtPage

When `<NuxtPage />` is used in `app.vue`, transitions can be configured with the `transition` prop to activate transitions globally.

::note
Remember, this page transition cannot be overridden with `definePageMeta` on individual pages.
::

## View Transitions API (experimental)

Nuxt ships with an experimental implementation of the [**View Transitions API**](https://developer.chrome.com/docs/web-platform/view-transitions){rel="nofollow"} (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API){rel="nofollow"}). This is an exciting new way to implement native browser transitions which (among other things) have the ability to transition between unrelated elements on different pages.

You can check a demo on <https://nuxt-view-transitions.surge.sh>{rel="nofollow"} and the [source on StackBlitz](https://stackblitz.com/edit/nuxt-view-transitions){rel="nofollow"}.

The Nuxt integration is under active development, but can be enabled with the `experimental.viewTransition` option in your configuration file:

The possible values are: `false`, `true`, or `'always'`.

If set to true, Nuxt will not apply transitions if the user's browser matches `prefers-reduced-motion: reduce` (recommended). If set to `always`, Nuxt will always apply the transition and it is up to you to respect the user's preference.

By default, view transitions are enabled for all [pages](https://nuxt.com/docs/3.x/guide/directory-structure/pages), but you can set a different global default.

It is possible to override the default `viewTransition` value for a page by setting the `viewTransition` key in [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) of the page:

::warning
Overriding view transitions on a per-page basis will only have an effect if you have enabled the `experimental.viewTransition` option.
::

If you are also using Vue transitions like `pageTransition` and `layoutTransition` (see above) to achieve the same result as the new View Transitions API, then you may wish to *disable* Vue transitions if the user's browser supports the newer, native web API. You can do this by creating `~/middleware/disable-vue-transitions.global.ts` with the following contents:

- If you perform data fetching within your page setup functions, you may wish to reconsider using this feature for the moment. (By design, View Transitions completely freeze DOM updates whilst they are taking place.) We're looking at restricting the View Transition to the final moments before `<Suspense>` resolves, but in the interim you may want to consider carefully whether to adopt this feature if this describes you.

**Examples:**

Example 1 (unknown):
```unknown
::note
If you are changing layouts as well as page, the page transition you set here will not run. Instead, you should set a [layout transition](https://nuxt.com/docs/3.x/getting-started/transitions#layout-transitions).
::

To start adding transition between your pages, add the following CSS to your [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app):

::code-group
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

This produces the following result when navigating between pages:

:video{.rounded controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1665061349/nuxt3/nuxt3-page-transitions_umwvmh.jpg"}

To set a different transition for a page, set the `pageTransition` key in [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) of the page:

::code-group
```

---

## nuxt build

**URL:** llms-txt#nuxt-build

**Contents:**
- Arguments
- Options

The `build` command creates a `.output` directory with all your application, server and dependencies ready for production.

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--prerender`                      |         | Build Nuxt and prerender static routes                                                                                                               |
| `--preset`                         |         | Nitro server preset                                                                                                                                  |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |

::note
This command sets `process.env.NODE_ENV` to `production`.
::

::note
`--prerender` will always set the `preset` to `static`
::

---

## Generates `/plugins/sockets.client.ts`

**URL:** llms-txt#generates-`/plugins/sockets.client.ts`

**Contents:**
- `nuxt add component`

npx nuxt add plugin sockets --client
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add component`

- Modifier flags: `--mode client|server` or `--client` or `--server`
```

---

## Pages and Layouts

**URL:** llms-txt#pages-and-layouts

**Contents:**
- `app.vue`
  - Migration
- Layouts
  - Migration
- Pages
  - Dynamic Routes
  - Nested Routes
  - Page Keys and Keep-alive Props
  - Page and Layout Transitions
  - Migration

Nuxt 3 provides a central entry point to your app via `~/app.vue`.

::note
If you don't have an `app.vue` file in your source directory, Nuxt will use its own default version.
::

This file is a great place to put any custom code that needs to be run once when your app starts up, as well as any components that are present on every page of your app. For example, if you only have one layout, you can move this to `app.vue` instead.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/app"}
::

::link-example{to="https://nuxt.com/docs/examples/hello-world"}
::

Consider creating an `app.vue` file and including any logic that needs to run once at the top-level of your app. You can check out [an example here](https://nuxt.com/docs/3.x/guide/directory-structure/app).

If you are using layouts in your app for multiple pages, there is only a slight change required.

In Nuxt 2, the `<Nuxt>` component is used within a layout to render the current page. In Nuxt 3, layouts use slots instead, so you will have to replace that component with a `<slot />`. This also allows advanced use cases with named and scoped slots. [Read more about layouts](https://nuxt.com/docs/3.x/guide/directory-structure/layouts).

You will also need to change how you define the layout used by a page using the `definePageMeta` compiler macro. Layouts will be kebab-cased. So `layouts/customLayout.vue` becomes `custom-layout` when referenced in your page.

1. Replace `<Nuxt />` with `<slot />`
   
2. Use [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) to select the layout used by your page.

3. Move `~/layouts/_error.vue` to `~/error.vue`. See [the error handling docs](https://nuxt.com/docs/3.x/getting-started/error-handling). If you want to ensure that this page uses a layout, you can use [`<NuxtLayout>`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directly within `error.vue`:

Nuxt 3 ships with an optional `vue-router` integration triggered by the existence of a [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory in your source directory. If you only have a single page, you may consider instead moving it to `app.vue` for a lighter build.

The format for defining dynamic routes in Nuxt 3 is slightly different from Nuxt 2, so you may need to rename some of the files within `pages/`.

1. Where you previously used `_id` to define a dynamic route parameter you now use `[id]`.
2. Where you previously used `_.vue` to define a catch-all route, you now use `[...slug].vue`.

In Nuxt 2, you will have defined any nested routes (with parent and child components) using `<Nuxt>` and `<NuxtChild>`. In Nuxt 3, these have been replaced with a single `<NuxtPage>` component.

### Page Keys and Keep-alive Props

If you were passing a custom page key or keep-alive props to `<Nuxt>`, you will now use `definePageMeta` to set these options.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/pages#special-metadata
---
::

### Page and Layout Transitions

If you have been defining transitions for your page or layout directly in your component options, you will now need to use `definePageMeta` to set the transition. Since Vue 3, [-enter and -leave CSS classes have been renamed](https://v3-migration.vuejs.org/breaking-changes/transition.html){rel="nofollow"}. The `style` prop from `<Nuxt>` no longer applies to transition when used on `<slot>`, so move the styles to your `-active` class.

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

1. Rename any pages with dynamic parameters to match the new format.
2. Update `<Nuxt>` and `<NuxtChild>` to be `<NuxtPage>`.
3. If you're using the Composition API, you can also migrate `this.$route` and `this.$router` to use [`useRoute`](https://nuxt.com/docs/3.x/api/composables/use-route) and [`useRouter`](https://nuxt.com/docs/3.x/api/composables/use-router) composables.

#### Example: Dynamic Routes

#### Example: Nested Routes and `definePageMeta`

## `<NuxtLink>` Component

Most of the syntax and functionality are the same for the global [NuxtLink](https://nuxt.com/docs/3.x/api/components/nuxt-link) component. If you have been using the shortcut `<NLink>` format, you should update this to use `<NuxtLink>`.

`<NuxtLink>` is now a drop-in replacement for *all* links, even external ones. You can read more about it, and how to extend it to provide your own link component.

::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
::

## Programmatic Navigation

When migrating from Nuxt 2 to Nuxt 3, you will have to update how you programmatically navigate your users. In Nuxt 2, you had access to the underlying Vue Router with `this.$router`. In Nuxt 3, you can use the `navigateTo()` utility method which allows you to pass a route and parameters to Vue Router.

::warning
Make sure to always `await` on [`navigateTo`](https://nuxt.com/docs/3.x/api/utils/navigate-to) or chain its result by returning from functions.
::

**Examples:**

Example 1 (unknown):
```unknown
2. Use [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) to select the layout used by your page.
```

Example 2 (unknown):
```unknown
3. Move `~/layouts/_error.vue` to `~/error.vue`. See [the error handling docs](https://nuxt.com/docs/3.x/getting-started/error-handling). If you want to ensure that this page uses a layout, you can use [`<NuxtLayout>`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directly within `error.vue`:
```

Example 3 (unknown):
```unknown
## Pages

Nuxt 3 ships with an optional `vue-router` integration triggered by the existence of a [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory in your source directory. If you only have a single page, you may consider instead moving it to `app.vue` for a lighter build.

### Dynamic Routes

The format for defining dynamic routes in Nuxt 3 is slightly different from Nuxt 2, so you may need to rename some of the files within `pages/`.

1. Where you previously used `_id` to define a dynamic route parameter you now use `[id]`.
2. Where you previously used `_.vue` to define a catch-all route, you now use `[...slug].vue`.

### Nested Routes

In Nuxt 2, you will have defined any nested routes (with parent and child components) using `<Nuxt>` and `<NuxtChild>`. In Nuxt 3, these have been replaced with a single `<NuxtPage>` component.

### Page Keys and Keep-alive Props

If you were passing a custom page key or keep-alive props to `<Nuxt>`, you will now use `definePageMeta` to set these options.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/pages#special-metadata
---
::

### Page and Layout Transitions

If you have been defining transitions for your page or layout directly in your component options, you will now need to use `definePageMeta` to set the transition. Since Vue 3, [-enter and -leave CSS classes have been renamed](https://v3-migration.vuejs.org/breaking-changes/transition.html){rel="nofollow"}. The `style` prop from `<Nuxt>` no longer applies to transition when used on `<slot>`, so move the styles to your `-active` class.

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

### Migration

1. Rename any pages with dynamic parameters to match the new format.
2. Update `<Nuxt>` and `<NuxtChild>` to be `<NuxtPage>`.
3. If you're using the Composition API, you can also migrate `this.$route` and `this.$router` to use [`useRoute`](https://nuxt.com/docs/3.x/api/composables/use-route) and [`useRouter`](https://nuxt.com/docs/3.x/api/composables/use-router) composables.

#### Example: Dynamic Routes

::code-group
```

Example 4 (unknown):
```unknown

```

---

## defineRouteRules

**URL:** llms-txt#definerouterules

**Contents:**
- Usage
- Notes

::read-more
---
icon: i-lucide-star
to: https://nuxt.com/docs/guide/going-further/experimental-features#inlinerouterules
---
This feature is experimental and in order to use it you must enable the `experimental.inlineRouteRules` option in your `nuxt.config`.
::

Will be translated to:

::note
When running [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build), the home page will be pre-rendered in `.output/public/index.html` and statically served.
::

- A rule defined in `~/pages/foo/bar.vue` will be applied to `/foo/bar` requests.
- A rule in `~/pages/foo/[id].vue` will be applied to `/foo/**` requests.

For more control, such as if you are using a custom `path` or `alias` set in the page's [`definePageMeta`](https://nuxt.com/docs/3.x/api/utils/define-page-meta), you should set `routeRules` directly within your `nuxt.config`.

::read-more
---
icon: i-lucide-medal
to: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
---
Read more about the `routeRules`.
::

**Examples:**

Example 1 (unknown):
```unknown
Will be translated to:
```

---

## Generates `plugins/analytics.ts`

**URL:** llms-txt#generates-`plugins/analytics.ts`

**Contents:**
- `nuxt add page`

npx nuxt add plugin analytics
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add page`
```

---

## Deployment

**URL:** llms-txt#deployment

**Contents:**
- Node.js Server
  - Entry Point
  - PM2
  - Cluster Mode
  - Learn More
- Static Hosting
  - Client-side Only Rendering
- Hosting Providers
- Presets
- CDN Proxy

A Nuxt application can be deployed on a Node.js server, pre-rendered for static hosting, or deployed to serverless or edge (CDN) environments.

::tip
If you are looking for a list of cloud providers that support Nuxt, see the [Hosting providers](https://nuxt.com/deploy) section.
::

Discover the Node.js server preset with Nitro to deploy on any Node hosting.

- **Default output format** if none is specified or auto-detected :br
- Loads only the required chunks to render the request for optimal cold start timing :br
- Useful for deploying Nuxt apps to any Node.js hosting

When running `nuxt build` with the Node server preset, the result will be an entry point that launches a ready-to-run Node server.

This will launch your production Nuxt server that listens on port 3000 by default.

It respects the following runtime environment variables:

- `NITRO_PORT` or `PORT` (defaults to `3000`)
- `NITRO_HOST` or `HOST` (defaults to `'0.0.0.0'`)
- `NITRO_SSL_CERT` and `NITRO_SSL_KEY` - if both are present, this will launch the server in HTTPS mode. In the vast majority of cases, this should not be used other than for testing, and the Nitro server should be run behind a reverse proxy like nginx or Cloudflare which terminates SSL.

[PM2](https://pm2.keymetrics.io/){rel="nofollow"} (Process Manager 2) is a fast and easy solution for hosting your Nuxt application on your server or VM.

To use `pm2`, use an `ecosystem.config.cjs`:

You can use `NITRO_PRESET=node_cluster` in order to leverage multi-process performance using Node.js [cluster](https://nodejs.org/dist/latest/docs/api/cluster.html){rel="nofollow"} module.

By default, the workload gets distributed to the workers with the round robin strategy.

::read-more
---
title: the Nitro documentation for node-server preset
to: https://nitro.build/deploy/runtimes/node
---
::

::video-accordion
---
title: Watch Daniel Roe's short video on the topic
video-id: 0x1H6K5yOfs
---
::

There are two ways to deploy a Nuxt application to any static hosting services:

- Static site generation (SSG) with `ssr: true` pre-renders routes of your application at build time. (This is the default behavior when running `nuxt generate`.) It will also generate `/200.html` and `/404.html` single-page app fallback pages, which can render dynamic routes or 404 errors on the client (though you may need to configure this on your static host).
- Alternatively, you can prerender your site with `ssr: false` (static single-page app). This will produce HTML pages with an empty `<div id="__nuxt"></div>` where your Vue app would normally be rendered. You will lose many SEO benefits of prerendering your site, so it is suggested instead to use [`<ClientOnly>`](https://nuxt.com/docs/3.x/api/components/client-only) to wrap the portions of your site that cannot be server rendered (if any).

::read-more
---
title: Nuxt prerendering
to: https://nuxt.com/docs/getting-started/prerendering
---
::

### Client-side Only Rendering

If you don't want to pre-render your routes, another way of using static hosting is to set the `ssr` property to `false` in the `nuxt.config` file. The `nuxt generate` command will then output an `.output/public/index.html` entrypoint and JavaScript bundles like a classic client-side Vue.js application.

Nuxt can be deployed to several cloud providers with a minimal amount of configuration:

::read-more{to="https://nuxt.com/deploy"}
::

In addition to Node.js servers and static hosting services, a Nuxt project can be deployed with several well-tested presets and minimal amount of configuration.

You can explicitly set the desired preset in the [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file:

... or use the `NITRO_PRESET` environment variable when running `nuxt build`:

🔎 Check [the Nitro deployment](https://nitro.build/deploy){rel="nofollow"} for all possible deployment presets and providers.

In most cases, Nuxt can work with third-party content that is not generated or created by Nuxt itself. But sometimes such content can cause problems, especially Cloudflare's "Minification and Security Options".

Accordingly, you should make sure that the following options are unchecked / disabled in Cloudflare. Otherwise, unnecessary re-rendering or hydration errors could impact your production application.

1. Speed > Optimization > Content Optimization > Disable "Rocket Loader™"
2. Speed > Optimization > Image Optimization > Disable "Mirage"
3. Scrape Shield > Disable "Email Address Obfuscation"

With these settings, you can be sure that Cloudflare won't inject scripts into your Nuxt application that may cause unwanted side effects.

::tip
Their location on the Cloudflare dashboard sometimes changes so don't hesitate to look around.
::

**Examples:**

Example 1 (unknown):
```unknown
This will launch your production Nuxt server that listens on port 3000 by default.

It respects the following runtime environment variables:

- `NITRO_PORT` or `PORT` (defaults to `3000`)
- `NITRO_HOST` or `HOST` (defaults to `'0.0.0.0'`)
- `NITRO_SSL_CERT` and `NITRO_SSL_KEY` - if both are present, this will launch the server in HTTPS mode. In the vast majority of cases, this should not be used other than for testing, and the Nitro server should be run behind a reverse proxy like nginx or Cloudflare which terminates SSL.

### PM2

[PM2](https://pm2.keymetrics.io/){rel="nofollow"} (Process Manager 2) is a fast and easy solution for hosting your Nuxt application on your server or VM.

To use `pm2`, use an `ecosystem.config.cjs`:
```

Example 2 (unknown):
```unknown
### Cluster Mode

You can use `NITRO_PRESET=node_cluster` in order to leverage multi-process performance using Node.js [cluster](https://nodejs.org/dist/latest/docs/api/cluster.html){rel="nofollow"} module.

By default, the workload gets distributed to the workers with the round robin strategy.

### Learn More

::read-more
---
title: the Nitro documentation for node-server preset
to: https://nitro.build/deploy/runtimes/node
---
::

::video-accordion
---
title: Watch Daniel Roe's short video on the topic
video-id: 0x1H6K5yOfs
---
::

## Static Hosting

There are two ways to deploy a Nuxt application to any static hosting services:

- Static site generation (SSG) with `ssr: true` pre-renders routes of your application at build time. (This is the default behavior when running `nuxt generate`.) It will also generate `/200.html` and `/404.html` single-page app fallback pages, which can render dynamic routes or 404 errors on the client (though you may need to configure this on your static host).
- Alternatively, you can prerender your site with `ssr: false` (static single-page app). This will produce HTML pages with an empty `<div id="__nuxt"></div>` where your Vue app would normally be rendered. You will lose many SEO benefits of prerendering your site, so it is suggested instead to use [`<ClientOnly>`](https://nuxt.com/docs/3.x/api/components/client-only) to wrap the portions of your site that cannot be server rendered (if any).

::read-more
---
title: Nuxt prerendering
to: https://nuxt.com/docs/getting-started/prerendering
---
::

### Client-side Only Rendering

If you don't want to pre-render your routes, another way of using static hosting is to set the `ssr` property to `false` in the `nuxt.config` file. The `nuxt generate` command will then output an `.output/public/index.html` entrypoint and JavaScript bundles like a classic client-side Vue.js application.
```

Example 3 (unknown):
```unknown
## Hosting Providers

Nuxt can be deployed to several cloud providers with a minimal amount of configuration:

::read-more{to="https://nuxt.com/deploy"}
::

## Presets

In addition to Node.js servers and static hosting services, a Nuxt project can be deployed with several well-tested presets and minimal amount of configuration.

You can explicitly set the desired preset in the [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file:
```

Example 4 (unknown):
```unknown
... or use the `NITRO_PRESET` environment variable when running `nuxt build`:
```

---

## Rendering Modes

**URL:** llms-txt#rendering-modes

**Contents:**
- Universal Rendering
- Client-Side Rendering
  - Deploying a Static Client-Rendered App
- Hybrid Rendering
  - Route Rules
- Edge-Side Rendering

Nuxt supports different rendering modes, [universal rendering](https://nuxt.com/#universal-rendering), [client-side rendering](https://nuxt.com/#client-side-rendering) but also offers [hybrid-rendering](https://nuxt.com/#hybrid-rendering) and the possibility to render your application on [CDN Edge Servers](https://nuxt.com/#edge-side-rendering).

Both the browser and server can interpret JavaScript code to turn Vue.js components into HTML elements. This step is called **rendering**. Nuxt supports both **universal** and **client-side** rendering. The two approaches have benefits and downsides that we will cover.

By default, Nuxt uses **universal rendering** to provide better user experience, performance and to optimize search engine indexing, but you can switch rendering modes in [one line of configuration](https://nuxt.com/docs/3.x/api/nuxt-config#ssr).

## Universal Rendering

This step is similar to traditional **server-side rendering** performed by PHP or Ruby applications. When the browser requests a URL with universal rendering enabled, Nuxt runs the JavaScript (Vue.js) code in a server environment and returns a fully rendered HTML page to the browser. Nuxt may also return a fully rendered HTML page from a cache if the page was generated in advance. Users immediately get the entirety of the initial content of the application, contrary to client-side rendering.

Once the HTML document has been downloaded, the browser interprets this and Vue.js takes control of the document. The same JavaScript code that once ran on the server runs on the client (browser) **again** in the background now enabling interactivity (hence **Universal rendering**) by binding its listeners to the HTML. This is called **Hydration**. When hydration is complete, the page can enjoy benefits such as dynamic interfaces and page transitions.

Universal rendering allows a Nuxt application to provide quick page load times while preserving the benefits of client-side rendering. Furthermore, as the content is already present in the HTML document, crawlers can index it without overhead.

![Users can access the static content when the HTML document is loaded. Hydration then allows page's interactivity](https://nuxt.com/assets/docs/concepts/rendering/ssr.svg)

**What's server-rendered and what's client-rendered?**

It is normal to ask which parts of a Vue file runs on the server and/or the client in universal rendering mode.

On the initial request, the `counter` ref is initialized in the server since it is rendered inside the `<p>` tag. The contents of `handleClick` is never executed here. During hydration in the browser, the `counter` ref is re-initialized. The `handleClick` finally binds itself to the button; Therefore it is reasonable to deduce that the body of `handleClick` will always run in a browser environment.

[Middlewares](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) and [pages](https://nuxt.com/docs/3.x/guide/directory-structure/pages) run in the server and on the client during hydration. [Plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) can be rendered on the server or client or both. [Components](https://nuxt.com/docs/3.x/guide/directory-structure/components) can be forced to run on the client only as well. [Composables](https://nuxt.com/docs/3.x/guide/directory-structure/composables) and [utilities](https://nuxt.com/docs/3.x/guide/directory-structure/utils) are rendered based on the context of their usage.

**Benefits of server-side rendering:**

- **Performance**: Users can get immediate access to the page's content because browsers can display static content much faster than JavaScript-generated content. At the same time, Nuxt preserves the interactivity of a web application during the hydration process.
- **Search Engine Optimization**: Universal rendering delivers the entire HTML content of the page to the browser as a classic server application. Web crawlers can directly index the page's content, which makes Universal rendering a great choice for any content that you want to index quickly.

**Downsides of server-side rendering:**

- **Development constraints:** Server and browser environments don't provide the same APIs, and it can be tricky to write code that can run on both sides seamlessly. Fortunately, Nuxt provides guidelines and specific variables to help you determine where a piece of code is executed.
- **Cost:** A server needs to be running in order to render pages on the fly. This adds a monthly cost like any traditional server. However, the server calls are highly reduced thanks to universal rendering with the browser taking over on client-side navigation. A cost reduction is possible by leveraging [edge-side-rendering](https://nuxt.com/#edge-side-rendering).

Universal rendering is very versatile and can fit almost any use case, and is especially appropriate for any content-oriented websites: &#x2A;*blogs, marketing websites, portfolios, e-commerce sites, and marketplaces.**

::tip
For more examples about writing Vue code without hydration mismatch, see [the Vue docs](https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch){rel="nofollow"}.
::

::important
When importing a library that relies on browser APIs and has side effects, make sure the component importing it is only called client-side. Bundlers do not treeshake imports of modules containing side effects.
::

## Client-Side Rendering

Out of the box, a traditional Vue.js application is rendered in the browser (or **client**). Then, Vue.js generates HTML elements after the browser downloads and parses all the JavaScript code containing the instructions to create the current interface.

![Users have to wait for the browser to download, parse and execute the JavaScript before seeing the page's content](https://nuxt.com/assets/docs/concepts/rendering/csr.svg)

**Benefits of client-side rendering:**

- **Development speed**: When working entirely on the client-side, we don't have to worry about the server compatibility of the code, for example, by using browser-only APIs like the `window` object.
- **Cheaper:** Running a server adds a cost of infrastructure as you would need to run on a platform that supports JavaScript. We can host client-only applications on any static server with HTML, CSS, and JavaScript files.
- **Offline:** Because code entirely runs in the browser, it can nicely keep working while the internet is unavailable.

**Downsides of client-side rendering:**

- **Performance**: The user has to wait for the browser to download, parse and run JavaScript files. Depending on the network for the download part and the user's device for the parsing and execution, this can take some time and impact the user's experience.
- **Search Engine Optimization**: Indexing and updating the content delivered via client-side rendering takes more time than with a server-rendered HTML document. This is related to the performance drawback we discussed, as search engine crawlers won't wait for the interface to be fully rendered on their first try to index the page. Your content will take more time to show and update in search results pages with pure client-side rendering.

Client-side rendering is a good choice for heavily interactive **web applications** that don't need indexing or whose users visit frequently. It can leverage browser caching to skip the download phase on subsequent visits, such as **SaaS, back-office applications, or online games**.

You can enable client-side only rendering with Nuxt in your `nuxt.config.ts`:

::note
If you do use `ssr: false`, you should also place an HTML file in `~/app/spa-loading-template.html` with some HTML you would like to use to render a loading screen that will be rendered until your app is hydrated.

:::read-more
  ---
  title: SPA Loading Template
  to: https://nuxt.com/docs/api/configuration/nuxt-config#spaloadingtemplate
  ---
  :::
::

::video-accordion
---
title: Watch a video from Alexander Lichter about Building a plain SPA with Nuxt
video-id: 7Lr0QTP1Ro8
---
::

### Deploying a Static Client-Rendered App

If you deploy your app to [static hosting](https://nuxt.com/docs/3.x/getting-started/deployment#static-hosting) with the `nuxt generate` or `nuxt build --prerender` commands, then by default, Nuxt will render every page as a separate static HTML file.

::warning
If you prerender your app with the `nuxt generate` or `nuxt build --prerender` commands, then you will not be able to use any server endpoints as no server will be included in your output folder. If you need server functionality, use `nuxt build` instead.
::

If you are using purely client-side rendering, then this might be unnecessary. You might only need a single `index.html` file, plus `200.html` and `404.html` fallbacks, which you can tell your static web host to serve up for all requests.

In order to achieve this we can change how the routes are prerendered. Just add this to [your hooks](https://nuxt.com/docs/3.x/api/advanced/hooks#nuxt-hooks-build-time) in your `nuxt.config.ts`:

This will produce three files:

- `index.html`
- `200.html`
- `404.html`

The `200.html` and `404.html` might be useful for the hosting provider you are using.

#### Skipping Client Fallback Generation

When prerendering a client-rendered app, Nuxt will generate `index.html`, `200.html` and `404.html` files by default. However, if you need to prevent any (or all) of these files from being generated in your build, you can use the `'prerender:generate'` hook from [Nitro](https://nuxt.com/docs/3.x/getting-started/prerendering#prerendergenerate-nitro-hook).

Hybrid rendering allows different caching rules per route using **Route Rules** and decides how the server should respond to a new request on a given URL.

Previously every route/page of a Nuxt application and server must use the same rendering mode, universal or client-side. In various cases, some pages could be generated at build time, while others should be client-side rendered. For example, think of a content website with an admin section. Every content page should be primarily static and generated once, but the admin section requires registration and behaves more like a dynamic application.

Nuxt includes route rules and hybrid rendering support. Using route rules you can define rules for a group of nuxt routes, change rendering mode or assign a cache strategy based on route!

Nuxt server will automatically register corresponding middleware and wrap routes with cache handlers using [Nitro caching layer](https://nitro.build/guide/cache){rel="nofollow"}.

The different properties you can use are the following:

- `redirect: string`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Define server-side redirects.
- `ssr: boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Disables server-side rendering of the HTML for sections of your app and make them render only in the browser with `ssr: false`
- `cors: boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Automatically adds cors headers with `cors: true` - you can customize the output by overriding with `headers`
- `headers: object`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Add specific headers to sections of your site - for example, your assets
- `swr: number | boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Add cache headers to the server response and cache it on the server or reverse proxy for a configurable TTL (time to live). The `node-server` preset of Nitro is able to cache the full response. When the TTL expired, the cached response will be sent while the page will be regenerated in the background. If true is used, a `stale-while-revalidate` header is added without a MaxAge.
- `isr: number | boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - The behavior is the same as `swr` except that we are able to add the response to the CDN cache on platforms that support this (currently Netlify or Vercel). If `true` is used, the content persists until the next deploy inside the CDN.
- `prerender: boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Prerenders routes at build time and includes them in your build as static assets
- `noScripts: boolean`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Disables rendering of Nuxt scripts and JS resource hints for sections of your site.
- `appMiddleware: string | string[] | Record<string, boolean>`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"} - Allows you to define middleware that should or should not run for page paths within the Vue app part of your application (that is, not your Nitro routes)

Whenever possible, route rules will be automatically applied to the deployment platform's native rules for optimal performances (Netlify and Vercel are currently supported).

::important
Note that Hybrid Rendering is not available when using [`nuxt generate`](https://nuxt.com/docs/3.x/api/commands/generate).
::

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Vercel ISR
  to: https://github.com/danielroe/nuxt-vercel-isr
  ---
  Example of a Nuxt application with hybrid rendering deployed on Vercel.
  :::
::

## Edge-Side Rendering

Edge-Side Rendering (ESR) is a powerful feature introduced in Nuxt that allows the rendering of your Nuxt application closer to your users via edge servers of a Content Delivery Network (CDN). By leveraging ESR, you can ensure improved performance and reduced latency, thereby providing an enhanced user experience.

With ESR, the rendering process is pushed to the 'edge' of the network - the CDN's edge servers. Note that ESR is more a deployment target than an actual rendering mode.

When a request for a page is made, instead of going all the way to the original server, it's intercepted by the nearest edge server. This server generates the HTML for the page and sends it back to the user. This process minimizes the physical distance the data has to travel, **reducing latency and loading the page faster**.

Edge-side rendering is possible thanks to [Nitro](https://nitro.build/){rel="nofollow"}, the [server engine](https://nuxt.com/docs/3.x/guide/concepts/server-engine) that powers Nuxt. It offers cross-platform support for Node.js, Deno, Cloudflare Workers, and more.

The current platforms where you can leverage ESR are:

- [Cloudflare Pages](https://pages.cloudflare.com){rel="nofollow"} with zero configuration using the git integration and the `nuxt build` command
- [Vercel Edge Functions](https://vercel.com/features/edge-functions){rel="nofollow"} using the `nuxt build` command and `NITRO_PRESET=vercel-edge` environment variable
- [Netlify Edge Functions](https://www.netlify.com/products/#netlify-edge-functions){rel="nofollow"} using the `nuxt build` command and `NITRO_PRESET=netlify-edge` environment variable

Note that **Hybrid Rendering** can be used when using Edge-Side Rendering with route rules.

You can explore open source examples deployed on some of the platform mentioned above:

::card-group
  :::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Nuxt Todos Edge
  to: https://github.com/atinux/nuxt-todos-edge
  ---
  A todos application with user authentication, SSR and SQLite.
  :::

:::card
  ---
  ui:
    icon:
      base: text-black dark:text-white
  icon: i-simple-icons-github
  target: _blank
  title: Atinotes
  to: https://github.com/atinux/atinotes
  ---
  An editable website with universal rendering based on Cloudflare KV.
  :::
::

**Examples:**

Example 1 (unknown):
```unknown
On the initial request, the `counter` ref is initialized in the server since it is rendered inside the `<p>` tag. The contents of `handleClick` is never executed here. During hydration in the browser, the `counter` ref is re-initialized. The `handleClick` finally binds itself to the button; Therefore it is reasonable to deduce that the body of `handleClick` will always run in a browser environment.

[Middlewares](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) and [pages](https://nuxt.com/docs/3.x/guide/directory-structure/pages) run in the server and on the client during hydration. [Plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) can be rendered on the server or client or both. [Components](https://nuxt.com/docs/3.x/guide/directory-structure/components) can be forced to run on the client only as well. [Composables](https://nuxt.com/docs/3.x/guide/directory-structure/composables) and [utilities](https://nuxt.com/docs/3.x/guide/directory-structure/utils) are rendered based on the context of their usage.

**Benefits of server-side rendering:**

- **Performance**: Users can get immediate access to the page's content because browsers can display static content much faster than JavaScript-generated content. At the same time, Nuxt preserves the interactivity of a web application during the hydration process.
- **Search Engine Optimization**: Universal rendering delivers the entire HTML content of the page to the browser as a classic server application. Web crawlers can directly index the page's content, which makes Universal rendering a great choice for any content that you want to index quickly.

**Downsides of server-side rendering:**

- **Development constraints:** Server and browser environments don't provide the same APIs, and it can be tricky to write code that can run on both sides seamlessly. Fortunately, Nuxt provides guidelines and specific variables to help you determine where a piece of code is executed.
- **Cost:** A server needs to be running in order to render pages on the fly. This adds a monthly cost like any traditional server. However, the server calls are highly reduced thanks to universal rendering with the browser taking over on client-side navigation. A cost reduction is possible by leveraging [edge-side-rendering](https://nuxt.com/#edge-side-rendering).

Universal rendering is very versatile and can fit almost any use case, and is especially appropriate for any content-oriented websites: &#x2A;*blogs, marketing websites, portfolios, e-commerce sites, and marketplaces.**

::tip
For more examples about writing Vue code without hydration mismatch, see [the Vue docs](https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch){rel="nofollow"}.
::

::important
When importing a library that relies on browser APIs and has side effects, make sure the component importing it is only called client-side. Bundlers do not treeshake imports of modules containing side effects.
::

## Client-Side Rendering

Out of the box, a traditional Vue.js application is rendered in the browser (or **client**). Then, Vue.js generates HTML elements after the browser downloads and parses all the JavaScript code containing the instructions to create the current interface.

![Users have to wait for the browser to download, parse and execute the JavaScript before seeing the page's content](https://nuxt.com/assets/docs/concepts/rendering/csr.svg)

**Benefits of client-side rendering:**

- **Development speed**: When working entirely on the client-side, we don't have to worry about the server compatibility of the code, for example, by using browser-only APIs like the `window` object.
- **Cheaper:** Running a server adds a cost of infrastructure as you would need to run on a platform that supports JavaScript. We can host client-only applications on any static server with HTML, CSS, and JavaScript files.
- **Offline:** Because code entirely runs in the browser, it can nicely keep working while the internet is unavailable.

**Downsides of client-side rendering:**

- **Performance**: The user has to wait for the browser to download, parse and run JavaScript files. Depending on the network for the download part and the user's device for the parsing and execution, this can take some time and impact the user's experience.
- **Search Engine Optimization**: Indexing and updating the content delivered via client-side rendering takes more time than with a server-rendered HTML document. This is related to the performance drawback we discussed, as search engine crawlers won't wait for the interface to be fully rendered on their first try to index the page. Your content will take more time to show and update in search results pages with pure client-side rendering.

Client-side rendering is a good choice for heavily interactive **web applications** that don't need indexing or whose users visit frequently. It can leverage browser caching to skip the download phase on subsequent visits, such as **SaaS, back-office applications, or online games**.

You can enable client-side only rendering with Nuxt in your `nuxt.config.ts`:
```

Example 2 (unknown):
```unknown
::note
If you do use `ssr: false`, you should also place an HTML file in `~/app/spa-loading-template.html` with some HTML you would like to use to render a loading screen that will be rendered until your app is hydrated.

  :::read-more
  ---
  title: SPA Loading Template
  to: https://nuxt.com/docs/api/configuration/nuxt-config#spaloadingtemplate
  ---
  :::
::

::video-accordion
---
title: Watch a video from Alexander Lichter about Building a plain SPA with Nuxt
video-id: 7Lr0QTP1Ro8
---
::

### Deploying a Static Client-Rendered App

If you deploy your app to [static hosting](https://nuxt.com/docs/3.x/getting-started/deployment#static-hosting) with the `nuxt generate` or `nuxt build --prerender` commands, then by default, Nuxt will render every page as a separate static HTML file.

::warning
If you prerender your app with the `nuxt generate` or `nuxt build --prerender` commands, then you will not be able to use any server endpoints as no server will be included in your output folder. If you need server functionality, use `nuxt build` instead.
::

If you are using purely client-side rendering, then this might be unnecessary. You might only need a single `index.html` file, plus `200.html` and `404.html` fallbacks, which you can tell your static web host to serve up for all requests.

In order to achieve this we can change how the routes are prerendered. Just add this to [your hooks](https://nuxt.com/docs/3.x/api/advanced/hooks#nuxt-hooks-build-time) in your `nuxt.config.ts`:
```

Example 3 (unknown):
```unknown
This will produce three files:

- `index.html`
- `200.html`
- `404.html`

The `200.html` and `404.html` might be useful for the hosting provider you are using.

#### Skipping Client Fallback Generation

When prerendering a client-rendered app, Nuxt will generate `index.html`, `200.html` and `404.html` files by default. However, if you need to prevent any (or all) of these files from being generated in your build, you can use the `'prerender:generate'` hook from [Nitro](https://nuxt.com/docs/3.x/getting-started/prerendering#prerendergenerate-nitro-hook).
```

Example 4 (unknown):
```unknown
## Hybrid Rendering

Hybrid rendering allows different caching rules per route using **Route Rules** and decides how the server should respond to a new request on a given URL.

Previously every route/page of a Nuxt application and server must use the same rendering mode, universal or client-side. In various cases, some pages could be generated at build time, while others should be client-side rendered. For example, think of a content website with an admin section. Every content page should be primarily static and generated once, but the admin section requires registration and behaves more like a dynamic application.

Nuxt includes route rules and hybrid rendering support. Using route rules you can define rules for a group of nuxt routes, change rendering mode or assign a cache strategy based on route!

Nuxt server will automatically register corresponding middleware and wrap routes with cache handlers using [Nitro caching layer](https://nitro.build/guide/cache){rel="nofollow"}.
```

---

## Generates `app/layouts/custom.vue`

**URL:** llms-txt#generates-`app/layouts/custom.vue`

**Contents:**
- `nuxt add plugin`

npx nuxt add layout custom
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add plugin`

- Modifier flags: `--mode client|server` or `--client`or `--server`
```

---

## Nuxt 3.13

**URL:** llms-txt#nuxt-3.13

**Contents:**
- 🏘️ Route Groups
- 🏝️ Islands and Head Metadata
- 🪝 Custom Prefetch Triggers
- 🗺️ Better Server Source Maps
- 🎁 New Features for Module Authors
- ✨ Improved Dev Warnings
- 🚨 Vue TypeScript Changes
- ✅ Upgrading
- Full Release Notes

We now support naming directories with parentheses/brackets to organise your routes without affecting the path.

This will produce `/`, `/about` and `/contact` pages in your app. The `marketing` group is ignored for purposes of your URL structure.

Read more in [the original PR](https://github.com/nuxt/nuxt/pull/28276){rel="nofollow"}.

## 🏝️ Islands and Head Metadata

It's now possible for server component islands to manipulate the head, such as by adding SEO metadata when rendering.

Read more in [#27987](https://github.com/nuxt/nuxt/pull/27987){rel="nofollow"}.

## 🪝 Custom Prefetch Triggers

We now support custom prefetch triggers for `NuxtLink` ([#27846](https://github.com/nuxt/nuxt/pull/27846){rel="nofollow"}).

It's also possible to enable/disable these globally for your app and override them per link.

## 🗺️ Better Server Source Maps

When running with `node --enable-source-maps`, you may have noticed that the source maps for the Vue files in your server build pointed to the Vite build output (something like `.nuxt/dist/server/_nuxt/index-O15BBwZ3.js`).

Now, even after your Nitro build, your server source maps will reference your original source files ([#28521](https://github.com/nuxt/nuxt/pull/28521){rel="nofollow"}).

Note that one of the easiest ways of improving your build performance is to turn off source maps if you aren't using them, which you can do easily in your `nuxt.config.ts`:

## 🎁 New Features for Module Authors

In the run-up to Nuxt v4, we're working on adding some key functionality for module authors, including a new `isNuxtMajorVersion` utility where required ([#27579](https://github.com/nuxt/nuxt/pull/27579){rel="nofollow"}) and better inferred typing for merged module options using the new `defineNuxtModule().with()` method ([#27520](https://github.com/nuxt/nuxt/pull/27520){rel="nofollow"}).

## ✨ Improved Dev Warnings

We no longer warn when using data fetching composables in middleware ([#28604](https://github.com/nuxt/nuxt/pull/28604){rel="nofollow"}) and we warn when user components' names begin with Lazy ([#27838](https://github.com/nuxt/nuxt/pull/27838){rel="nofollow"}).

## 🚨 Vue TypeScript Changes

For a while, in the Vue ecosystem, we've been augmenting `@vue/runtime-core` to add custom properties and more to `vue`. However, this inadvertently breaks the types for projects that augment `vue` - which is now the officially recommended and documented way to augment these interfaces (for example, [ComponentCustomProperties](https://vuejs.org/api/utility-types.html#componentcustomproperties){rel="nofollow"}, [GlobalComponents](https://vuejs.org/guide/extras/web-components.html#web-components-and-typescript){rel="nofollow"} and [so on](https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties){rel="nofollow"}).

This means *all* libraries must update their code (or it will break the types of libraries that augment `vue` instead).

We've updated our types in Nuxt along these lines but you may experience issues with the latest `vue-router` when used with libraries which haven't yet done so.

Please create an issue with a reproduction - I'll happily help create a PR to resolve in the upstream library in question. Or you may be able to work around the issue by creating a `declarations.d.ts` in the root of your project with the following code ([credit](https://github.com/nuxt/nuxt/pull/28542#issuecomment-2293282891){rel="nofollow"} to [@BobbieGoede](https://github.com/BobbieGoede){rel="nofollow"}):

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

## Full Release Notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.13.0
---
Read the full release notes of Nuxt `v3.13.0`.
::

A huge thank you to everyone who's been a part of this release - you are the ones who make Nuxt possible. ❤️

Don't hesitate to let us know if you have any feedback or issues! 🙏

**Examples:**

Example 1 (unknown):
```unknown
This will produce `/`, `/about` and `/contact` pages in your app. The `marketing` group is ignored for purposes of your URL structure.

Read more in [the original PR](https://github.com/nuxt/nuxt/pull/28276){rel="nofollow"}.

## 🏝️ Islands and Head Metadata

It's now possible for server component islands to manipulate the head, such as by adding SEO metadata when rendering.

Read more in [#27987](https://github.com/nuxt/nuxt/pull/27987){rel="nofollow"}.

## 🪝 Custom Prefetch Triggers

We now support custom prefetch triggers for `NuxtLink` ([#27846](https://github.com/nuxt/nuxt/pull/27846){rel="nofollow"}).

For example:
```

Example 2 (unknown):
```unknown
It's also possible to enable/disable these globally for your app and override them per link.

For example:
```

Example 3 (unknown):
```unknown
## 🗺️ Better Server Source Maps

When running with `node --enable-source-maps`, you may have noticed that the source maps for the Vue files in your server build pointed to the Vite build output (something like `.nuxt/dist/server/_nuxt/index-O15BBwZ3.js`).

Now, even after your Nitro build, your server source maps will reference your original source files ([#28521](https://github.com/nuxt/nuxt/pull/28521){rel="nofollow"}).

Note that one of the easiest ways of improving your build performance is to turn off source maps if you aren't using them, which you can do easily in your `nuxt.config.ts`:
```

Example 4 (unknown):
```unknown
## 🎁 New Features for Module Authors

In the run-up to Nuxt v4, we're working on adding some key functionality for module authors, including a new `isNuxtMajorVersion` utility where required ([#27579](https://github.com/nuxt/nuxt/pull/27579){rel="nofollow"}) and better inferred typing for merged module options using the new `defineNuxtModule().with()` method ([#27520](https://github.com/nuxt/nuxt/pull/27520){rel="nofollow"}).

## ✨ Improved Dev Warnings

We no longer warn when using data fetching composables in middleware ([#28604](https://github.com/nuxt/nuxt/pull/28604){rel="nofollow"}) and we warn when user components' names begin with Lazy ([#27838](https://github.com/nuxt/nuxt/pull/27838){rel="nofollow"}).

## 🚨 Vue TypeScript Changes

For a while, in the Vue ecosystem, we've been augmenting `@vue/runtime-core` to add custom properties and more to `vue`. However, this inadvertently breaks the types for projects that augment `vue` - which is now the officially recommended and documented way to augment these interfaces (for example, [ComponentCustomProperties](https://vuejs.org/api/utility-types.html#componentcustomproperties){rel="nofollow"}, [GlobalComponents](https://vuejs.org/guide/extras/web-components.html#web-components-and-typescript){rel="nofollow"} and [so on](https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties){rel="nofollow"}).

This means *all* libraries must update their code (or it will break the types of libraries that augment `vue` instead).

We've updated our types in Nuxt along these lines but you may experience issues with the latest `vue-router` when used with libraries which haven't yet done so.

Please create an issue with a reproduction - I'll happily help create a PR to resolve in the upstream library in question. Or you may be able to work around the issue by creating a `declarations.d.ts` in the root of your project with the following code ([credit](https://github.com/nuxt/nuxt/pull/28542#issuecomment-2293282891){rel="nofollow"} to [@BobbieGoede](https://github.com/BobbieGoede){rel="nofollow"}):
```

---

## Koyeb

**URL:** llms-txt#koyeb

**Contents:**
- Setup
- Learn more

Nuxt supports deploying on the [Koyeb serverless platform](https://www.koyeb.com/docs){rel="nofollow"} with minimal configuration.

1. Create a new Koyeb app for Nuxt following the [guide](https://www.koyeb.com/docs/deploy/nuxt){rel="nofollow"}.
2. Set the `engines.node` field in your project's `package.json` file to a [Koyeb-supported version of Node.js](https://www.koyeb.com/docs/build-and-deploy/build-from-git/nodejs#runtime){rel="nofollow"}:
   
3. Ensure that `build` and `start` scripts are defined within the project's `package.json` file to define how to build and run the application:
   
4. During deployment, you'll need to configure environment variables. In your service settings, set the following [environment variable](https://www.koyeb.com/docs/build-and-deploy/environment-variables){rel="nofollow"}:
   
5. Click "Deploy" to build and deploy your Nuxt app.

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/koyeb"}
Head over **Nitro documentation** to learn more about the Koyeb deployment preset.
::

**Examples:**

Example 1 (unknown):
```unknown
3. Ensure that `build` and `start` scripts are defined within the project's `package.json` file to define how to build and run the application:
```

Example 2 (unknown):
```unknown
4. During deployment, you'll need to configure environment variables. In your service settings, set the following [environment variable](https://www.koyeb.com/docs/build-and-deploy/environment-variables){rel="nofollow"}:
```

---

## Templates

**URL:** llms-txt#templates

**Contents:**
- `addTemplate`
  - Usage
  - Type
  - Parameters
  - Examples
- `addTypeTemplate`
  - Usage
  - Type
  - Parameters
  - Examples

Templates allow you to generate extra files during development and build time. These files will be available in virtual filesystem and can be used in plugins, layouts, components, etc. `addTemplate` and `addTypeTemplate` allow you to add templates to the Nuxt application. `updateTemplates` allows you to regenerate templates that match the filter.

Renders given template during build into the virtual file system, and optionally to disk in the project `buildDir`

**template**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

| Property      | Type                                                                                                                                                            | Required | Description                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                                                                                                                                                        | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                          |
| `filename`    | `string`                                                                                                                                                        | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                   |
| `dst`         | `string`                                                                                                                                                        | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                |
| `options`     | `Options`                                                                                                                                                       | `false`  | Options to pass to the template.                                                                                                                                                 |
| `getContents` | `(data: Options) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored. |
| `write`       | `boolean`                                                                                                                                                       | `false`  | If set to `true`, the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.                                         |

#### Creating a Virtual File for Runtime Plugin

In this example, we merge an object inside a module and consume the result in a runtime plugin.

In the module above, we generate a virtual file named `meta.config.mjs`. In the runtime plugin, we can import it using the `#build` alias:

Renders given template during build into the project buildDir, then registers it as types.

**template**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

| Property      | Type                                                                                                                                                            | Required | Description                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                                                                                                                                                        | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                          |
| `filename`    | `string`                                                                                                                                                        | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                   |
| `dst`         | `string`                                                                                                                                                        | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                |
| `options`     | `Options`                                                                                                                                                       | `false`  | Options to pass to the template.                                                                                                                                                 |
| `getContents` | `(data: Options) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored. |

**context**: An optional context object can be passed to control where the type is added. If omitted, the type will only be added to the Nuxt context. This object supports the following properties:

| Property | Type      | Required | Description                                                    |
| -------- | --------- | -------- | -------------------------------------------------------------- |
| `nuxt`   | `boolean` | `false`  | If set to `true`, the type will be added to the Nuxt context.  |
| `nitro`  | `boolean` | `false`  | If set to `true`, the type will be added to the Nitro context. |

#### Adding Type Templates to the Nitro Context

By default, －－ only adds the type declarations to the Nuxt context. To also add them to the Nitro context, set nitro to true.

This allows the `#auth-utils` module to be used within the Nitro context.

## `addServerTemplate`

Adds a virtual file that can be used within the Nuxt Nitro server build.

**template**: A template object. It must have the following properties:

| Property      | Type                                                                                                                                               | Required | Description                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `filename`    | `string`                                                                                                                                           | `true`   | Filename of the template.                                                                                                   |
| `getContents` | `() => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `true`   | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. |

### Creating a Virtual File for Nitro

In this example, we create a virtual file that can be used within the Nuxt Nitro server build.

And then in a runtime file

Regenerate templates that match the filter. If no filter is provided, all templates will be regenerated.

**options**: Options to pass to the template. This object can have the following property:

| Property | Type                                                                                                                                                            | Required | Description                                                                                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filter` | `(template: ResolvedNuxtTemplate) => boolean`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `template` object. It should return a boolean indicating whether the template should be regenerated. If `filter` is not provided, all templates will be regenerated. |

**Examples:**

Example 1 (unknown):
```unknown
### Type
```

Example 2 (unknown):
```unknown
### Parameters

**template**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

| Property      | Type                                                                                                                                                            | Required | Description                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                                                                                                                                                        | `false`  | Path to the template. If `src` is not provided, `getContents` must be provided instead.                                                                                          |
| `filename`    | `string`                                                                                                                                                        | `false`  | Filename of the template. If `filename` is not provided, it will be generated from the `src` path. In this case, the `src` option is required.                                   |
| `dst`         | `string`                                                                                                                                                        | `false`  | Path to the destination file. If `dst` is not provided, it will be generated from the `filename` path and nuxt `buildDir` option.                                                |
| `options`     | `Options`                                                                                                                                                       | `false`  | Options to pass to the template.                                                                                                                                                 |
| `getContents` | `(data: Options) => string | Promise<string>`{.language-ts.shiki.shiki-themes.material-theme-lighter.material-theme-lighter.material-theme-palenight lang="ts"} | `false`  | A function that will be called with the `options` object. It should return a string or a promise that resolves to a string. If `src` is provided, this function will be ignored. |
| `write`       | `boolean`                                                                                                                                                       | `false`  | If set to `true`, the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.                                         |

### Examples

#### Creating a Virtual File for Runtime Plugin

In this example, we merge an object inside a module and consume the result in a runtime plugin.
```

Example 3 (unknown):
```unknown
In the module above, we generate a virtual file named `meta.config.mjs`. In the runtime plugin, we can import it using the `#build` alias:
```

Example 4 (unknown):
```unknown
## `addTypeTemplate`

Renders given template during build into the project buildDir, then registers it as types.

### Usage
```

---

## Going Full Static

**URL:** llms-txt#going-full-static

**Contents:**
- Too long to read
- History
- Current issues
- New config option: `target`
- Smarter `nuxt generate`
  - Crazy fast static applications
  - Crawler integrated
  - Faster re-deploy
- Smarter `nuxt start`
- Preview mode

1. Upgrade nuxt to `2.14.0`
2. Set `target: 'static'` in your `nuxt.config.js`
3. Run `nuxt generate`
4. That's it ✨

*Bonus: you can run `nuxt start` to run a local server serving your generated static application.*

:video{autoplay controls autoPlay="true" controls="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.jpg"}

Note: in this video we are using `nuxt export` which has been deprecated in favor of `nuxt generate`.

Nuxt had the static generation feature with `nuxt generate` since [v0.3.2](https://github.com/nuxt/nuxt.js/releases/tag/v0.3.2){rel="nofollow"} (November 2016), since then we have improved it in multiple ways but never achieved full static generation. Today I am excited to announce that full static export is now possible with Nuxt 2.13.

`nuxt generate` is mostly pre-rendering, when you navigate client-side, `asyncData` and `fetch` are called, *making a request to your API*. A lot of users asked to support a "full static" mode, meaning to not call these 2 hooks on navigation, since the next page has been already pre-rendered.

Also, the developer experience is not optimal:

- You have access to `req` or `res` on SSR but not when running `nuxt generate`
- `process.static` is `true` only when running `nuxt generate`, making it slow to develop Nuxt modules or plugins for static generation
- You have to specify all your [dynamic routes](https://v2.nuxt.com/docs/features/file-system-routing#dynamic-routes){rel="nofollow"} in `generate.routes`, making it harder since you don't have access to nuxt modules there.
- You cannot test the [SPA fallback](https://v2.nuxt.com/docs/concepts/static-site-generation#spa-fallback){rel="nofollow"} in development, the fallback is a client-only version of your Nuxt application that loads when hitting a 404 page
- `nuxt generate` runs `nuxt build` by default, making it slower to generate your website if only your content changed

Note that it was possible to have full static support with [nuxt-payload-extractor](https://github.com/DreaMinder/nuxt-payload-extractor){rel="nofollow"} module but it was more verbose to use and had limitations.

## New config option: `target`

To improve the user experience as well as telling Nuxt that you want to export your application to static hosting, we are introducing a `target` option in your `nuxt.config.js`:

::important
Full static doesn't work with `ssr: 'false'` (which is the same as the deprecated `mode: 'spa'`) as this is used for client-side rendering only (Single Page Applications).
::

Running `nuxt dev` with the static target will improve the developer experience:

- Remove `req` & `res` from context
- Fallback to client-side rendering on 404, errors and redirects (see [SPA fallback](https://v2.nuxt.com/docs/concepts/static-site-generation#spa-fallback){rel="nofollow"})
- `$route.query` will always be equal to `{}` on server-side rendering
- `process.static` is `true`

We are also exposing `process.target` for modules author to add logic depending on the user target.

## Smarter `nuxt generate`

Now with `v2.14.0`, you can use `nuxt generate`, it will smartly know if it has to build or not.

### Crazy fast static applications

`nuxt generate` with `target: 'static'` will pre-render all your pages to HTML and save a payload file in order to mock `asyncData` and `fetch` on client-side navigation, this means **no** &#x2A;*more HTTP calls to your API on client-side navigation.** By extracting the page payload to a js file, **it also reduces the HTML size** served as well as preloading it (from the  in the header) for optimal performance.

We also improved the [smart prefetching](https://nuxt.com/blog/introducing-smart-prefetching) when doing full static, it will also fetch the payloads, making navigation instant 👀

### Crawler integrated

On top of that, it also has a crawler inside, detecting every relative link and generating it:

If you want to exclude a bunch of routes, use the [generate.exclude](https://v2.nuxt.com/docs/configuration-glossary/configuration-generate#exclude){rel="nofollow"}. You can keep using [generate.routes](https://v2.nuxt.com/docs/configuration-glossary/configuration-generate#routes){rel="nofollow"} to add extra routes that the crawler could not detect.

To disable the crawler, set `generate.crawler: false` in your `nuxt.config.js`

By separating `nuxt build` and `nuxt export`, we are opening a new range of improvements: pre-render your pages only if you content has changed, this means: no webpack build → faster re-deployments.

## Smarter `nuxt start`

Once you statically generated your Nuxt app into `dist/`, use `nuxt start` to start a production HTTP server and serve your static app, supporting [SPA Fallback](https://v2.nuxt.com/docs/concepts/static-site-generation#spa-fallback){rel="nofollow"}.

This command is perfect to locally test your static application before pushing to your favorite static hosting provider.

We do support live preview out of the box to keep calling your API:

It will automatically refresh the page data (calling `nuxtServerInit`, `asyncData` and `fetch`).

When the preview mode is activated, `asyncData` and `fetch` original methods will be called.

Depending of the `target`, you can run these commands.

- `server`
  - `nuxt dev`: Start the development server
  - `nuxt build`: Bundle your Nuxt application for production
  - `nuxt start`: Start the production server
- `static`
  - `nuxt dev`: Start the development server (static aware)
  - `nuxt generate`: Bundle your Nuxt application for production if needed (static aware) and export your application to static HTML in `dist/` directory
  - `nuxt start`: Serve your production application from `dist/`

::read-more
---
target: _blank
to: https://v2.nuxt.com/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config
---
Learn more about how to move from `@nuxtjs/dotenv` to runtime config.
::

**Examples:**

Example 1 (vue):
```vue
<script setup>
  import { ref, computed } from '#imports'

  const count = ref(1)
  const double = computed(() => count.value * 2)
</script>
```

---

## Nuxt 3.6

**URL:** llms-txt#nuxt-3.6

**Contents:**
- ![SPA loading indicator](https://nuxt.com/assets/design-kit/icon-green.svg){height="36" style="display:inline" vAlign="center" width="36"}  SPA loading indicator
- ⚡️ Performance improvements
- 🔥 Fully static server components
- 🎨 Better style inlining
- 🎬 Animation controls
- ✨ Automatic 'static' preset detection
- 💪 Increased type safety
- ⚗️ Nitro 2.5 built-in
- 🛠️ New tools for module authors
- ✅ Upgrading

## ![SPA loading indicator](https://nuxt.com/assets/design-kit/icon-green.svg){height="36" style="display:inline" vAlign="center" width="36"}  SPA loading indicator

If your site is served with `ssr: false` or you have disabled server-rendering on some of your pages, you might be particularly interested in the new [built-in SPA loading indicator](https://github.com/nuxt/nuxt/pull/21640){rel="nofollow"}.

You can now place an HTML file in `~/app/spa-loading-template.html` with some HTML you would like to use to render a loading screen that will be rendered until your app is hydrated on these pages.

::note
In Nuxt v4 (or with `compatibilityMode: 4`), this path is now `~/spa-loading-template.html`.
::

👉 **By default an animated Nuxt icon is rendered**. You can completely disable this indicator by setting `spaLoadingTemplate: false` in your nuxt configuration file.

## ⚡️ Performance improvements

The first thing that happens when your app is hydrated is that your plugins run, and so we now perform [build-time optimisations on your plugins](https://github.com/nuxt/nuxt/pull/21611){rel="nofollow"}, meaning they do not need to be normalised or reordered at runtime.

We also include your error component JS in your main entrypoint, meaning that if an error occurs when a user has no connectivity, you can still handle it with your `~/error.vue`. (This also should decrease your total bundle size.)

👉 Compared to Nuxt 3.5.3, the minimal client bundle has decreased by \~0.7kB. Let's keep this up!

## 🔥 Fully static server components

It has been possible to use server components on static pages, but until now they would increase the payload size of your application. That is no longer true. We now store [rendered server components as separate files, which are preloaded before navigation](https://github.com/nuxt/nuxt/pull/21461){rel="nofollow"}.

👉 **This does rely on the new, richer JSON payload format**, so make sure you have not disabled this by setting `experimental.renderJsonPayloads` to false.

## 🎨 Better style inlining

If you're monitoring your metrics closely and have not turned off `experimental.inlineSSRStyles`, you should see more CSS inlined in your page, and a significantly external CSS file. We're now [better at deduplicating global CSS](https://github.com/nuxt/nuxt/pull/21573){rel="nofollow"}, particularly added by libraries like tailwind or unocss.

## 🎬 Animation controls

To give you more fine-grained control over your page/layout components, for example to create custom transitions with GSAP or other libraries, we now allow you to set [`pageRef` on `<NuxtPage>`](https://github.com/nuxt/nuxt/pull/19403){rel="nofollow"} and [`layoutRef` on `<NuxtLayout>`](https://github.com/nuxt/nuxt/pull/19465){rel="nofollow"}. These will get passed through to the underlying DOM elements.

## ✨ Automatic 'static' preset detection

Up to now, running `nuxt generate` produced the same output on every deployment provider, but with Nuxt 3.6 we now enable [static provider presets](https://github.com/nuxt/nuxt/pull/21655){rel="nofollow"} automatically. That means if you are deploying a static build (produced with `nuxt generate`) to a supported provider (currently vercel and netlify with cloudflare and github pages coming soon) we'll prerender your pages with special support for that provider.

This means we can configure any route rules (redirects/headers/etc) that do not require a server function. So you should get the best of both worlds when deploying a site that doesn't require runtime SSR. It also unblocks use of [Nuxt Image](https://github.com/nuxt/image){rel="nofollow"} on Vercel (with more potential for automatic provider integration coming soon).

## 💪 Increased type safety

We now have better support for server-specific `#imports` and augmentations if you are using the new `~/server/tsconfig.json` we shipped in Nuxt 3.5. So when importing from `#imports` in your server directory, you'll get IDE auto-completion for the right import locations in Nitro, and won't see Vue auto-imports like `useFetch` that are unavailable within your server routes.

You should now also have [type support for runtime Nitro hooks](https://github.com/nuxt/nuxt/pull/21666){rel="nofollow"}.

Finally, we have [removed more locations where objects had a default `any` type](https://github.com/nuxt/nuxt/pull/21700){rel="nofollow"}. This should improve type safety within Nuxt in a number of locations where unspecified types fell back to any:

- `RuntimeConfig`
- `PageMeta`
- `NuxtApp['payload']` (accessible now from `NuxtPayload` interface)
- `ModuleMeta`

You can find out more about how to [update your code](https://github.com/nuxt/nuxt/pull/21700){rel="nofollow"} if this affects you in the original PR.

## ⚗️ Nitro 2.5 built-in

This release ships with new Nitro 2.5, which has a [whole list of exciting improvements](https://github.com/unjs/nitro/releases/tag/v2.5.0){rel="nofollow"} that are worth checking out.

Of particular note is experimental support for streaming, which is also enabled by a [couple of changes](https://github.com/nuxt/nuxt/pull/21665){rel="nofollow"} in Nuxt itself.

## 🛠️ New tools for module authors

This release brings a number of utilities for modules authors to easily [add type templates](https://github.com/nuxt/nuxt/pull/21331){rel="nofollow"} and [assert compatibility](https://github.com/nuxt/nuxt/pull/21246){rel="nofollow"} with a given version of *another* module.

In addition, this release will finally unlock a new `nuxt/module-builder` mode that should improve type support for module authors. If you're a module author, you might consider following [these migration steps](https://github.com/nuxt/starter/pull/392){rel="nofollow"} to try it out in the coming days.

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

Read the full release notes on <https://github.com/nuxt/nuxt/releases/tag/v3.6.0>{rel="nofollow"}

**Examples:**

Example 1 (sh):
```sh
npx nuxi upgrade --force
```

---

## Runtime Config

**URL:** llms-txt#runtime-config

**Contents:**
- Migration

If you wish to reference environment variables within your Nuxt 3 app, you will need to use runtime config.

When referencing these variables within your components, you will have to use the [`useRuntimeConfig`](https://nuxt.com/docs/3.x/api/composables/use-runtime-config) composable in your setup method (or Nuxt plugin).

In the `server/` portion of your app, you can use [`useRuntimeConfig`](https://nuxt.com/docs/3.x/api/composables/use-runtime-config) without any import.

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

1. Add any environment variables that you use in your app to the `runtimeConfig` property of the `nuxt.config` file.
2. Migrate `process.env` to [`useRuntimeConfig`](https://nuxt.com/docs/3.x/api/composables/use-runtime-config) throughout the Vue part of your app.

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

---

## Module Extend Pages

**URL:** llms-txt#module-extend-pages

::read-more{to="https://nuxt.com/docs/guide/going-further/modules"}
::

::sandbox
---
branch: main
dir: examples/advanced/module-extend-pages
file: pages/index.vue
repo: nuxt/examples
---
::

---

## Generates `app/composables/foo.ts`

**URL:** llms-txt#generates-`app/composables/foo.ts`

**Contents:**
- `nuxt add layout`

npx nuxt add composable foo
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add layout`
```

---

## public

**URL:** llms-txt#public

Files contained within the `public/` directory are served at the root and are not modified by the build process. This is suitable for files that have to keep their names (e.g. `robots.txt`) *or* likely won't change (e.g. `favicon.ico`).

::tip{target="_blank" to="https://v2.nuxt.com/docs/directory-structure/static"}
This is known as the [`static/`] directory in Nuxt 2.
::

**Examples:**

Example 1 (unknown):
```unknown

```

---

## Generates `composables/foo.ts`

**URL:** llms-txt#generates-`composables/foo.ts`

**Contents:**
- `nuxt add layout`

npx nuxt add composable foo
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add layout`
```

---

## Generates `app/components/TheHeader.vue`

**URL:** llms-txt#generates-`app/components/theheader.vue`

**Contents:**
- `nuxt add composable`

npx nuxt add component TheHeader
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add composable`
```

---

## updateAppConfig

**URL:** llms-txt#updateappconfig

**Contents:**
- Usage

::note
Updates the [`app.config`](https://nuxt.com/docs/3.x/guide/directory-structure/app-config) using deep assignment. Existing (nested) properties will be preserved.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/app-config"}
::

**Examples:**

Example 1 (js):
```js
import { updateAppConfig, useAppConfig } from '#imports'

const appConfig = useAppConfig() // { foo: 'bar' }

const newAppConfig = { foo: 'baz' }
updateAppConfig(newAppConfig)

console.log(appConfig) // { foo: 'baz' }
```

---

## reloadNuxtApp

**URL:** llms-txt#reloadnuxtapp

**Contents:**
- Type
  - `options` (optional)

::note
`reloadNuxtApp` will perform a hard reload of your app, re-requesting a page and its dependencies from the server.
::

By default, it will also save the current `state` of your app (that is, any state you could access with `useState`).

::read-more
---
icon: i-lucide-star
to: https://nuxt.com/docs/guide/going-further/experimental-features#restorestate
---
You can enable experimental restoration of this state by enabling the `experimental.restoreState` option in your `nuxt.config` file.
::

### `options` (optional)

**Type**: `ReloadNuxtAppOptions`

An object accepting the following properties:

- `path` (optional) :br**Type**: `string`:br**Default**: `window.location.pathname`:br The path to reload (defaulting to the current path). If this is different from the current window location it
  will trigger a navigation and add an entry in the browser history.
- `ttl` (optional) :br**Type**: `number`:br**Default**: `10000`:br The number of milliseconds in which to ignore future reload requests. If called again within this time period,
  `reloadNuxtApp` will not reload your app to avoid reload loops.
- `force` (optional) :br**Type**: `boolean`:br**Default**: `false`:br This option allows bypassing reload loop protection entirely, forcing a reload even if one has occurred within
  the previously specified TTL.
- `persistState` (optional) :br**Type**: `boolean`:br**Default**: `false`:br Whether to dump the current Nuxt state to sessionStorage (as `nuxt:reload:state`). By default this will have no
  effect on reload unless `experimental.restoreState` is also set, or unless you handle restoring the state yourself.

---

## useHeadSafe

**URL:** llms-txt#useheadsafe

**Contents:**
- Usage
- Type

The `useHeadSafe` composable is a wrapper around the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable that restricts the input to only allow safe values.

You can pass all the same values as [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head)

::read-more
---
target: _blank
to: https://unhead.unjs.io/docs/typescript/head/api/composables/use-head-safe
---
Read more on the `Unhead` documentation.
::

The list of allowed values is:

See [@unhead/vue](https://github.com/unjs/unhead/blob/main/packages/vue/src/types/safeSchema.ts){rel="nofollow"} for more detailed types.

**Examples:**

Example 1 (ts):
```ts
useHeadSafe({
  script: [
    { id: 'xss-script', innerHTML: 'alert("xss")' },
  ],
  meta: [
    { 'http-equiv': 'refresh', 'content': '0;javascript:alert(1)' },
  ],
})
// Will safely generate
// <script id="xss-script"></script>
// <meta content="0;javascript:alert(1)">
```

Example 2 (unknown):
```unknown
The list of allowed values is:
```

---

## nuxt prepare

**URL:** llms-txt#nuxt-prepare

**Contents:**
- Arguments
- Options

The `prepare` command creates a [`.nuxt`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt) directory in your application and generates types. This can be useful in a CI environment or as a `postinstall` command in your [`package.json`](https://nuxt.com/docs/3.x/guide/directory-structure/package).

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |

::note
This command sets `process.env.NODE_ENV` to `production`.
::

---

## Nuxt Lifecycle

**URL:** llms-txt#nuxt-lifecycle

**Contents:**
- Server
  - Step 1: Setup Nitro Server and Nitro Plugins (Once)
  - Step 2: Nitro Server Middleware
  - Step 3: Initialize Nuxt and Execute Nuxt App Plugins
  - Step 4: Route Validation
  - Step 5: Execute Nuxt App Middleware
  - Step 6: Render Page and Components
  - Step 7: Generate HTML Output
- Client (browser)
  - Step 1: Initialize Nuxt and Execute Nuxt App Plugins

The goal of this chapter is to provide a high-level overview of the different parts of the framework, their execution order, and how they work together.

On the server, the following steps are executed for every initial request to your application:

### Step 1: Setup Nitro Server and Nitro Plugins (Once)

Nuxt is powered by [Nitro](https://nitro.build/){rel="nofollow"}, a modern server engine.

When Nitro starts, it initializes and executes the plugins under the `/server/plugins` directory. These plugins can:

- Capture and handle application-wide errors.
- Register hooks that execute when Nitro shuts down.
- Register hooks for request lifecycle events, such as modifying responses.

::callout{icon="i-lucide-lightbulb"}
Nitro plugins are executed only once when the server starts. In a serverless environment, the server boots on each incoming request, and so do the Nitro plugins. However, they are not awaited.
::

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/server#server-plugins
---
::

### Step 2: Nitro Server Middleware

After initializing the Nitro server, middleware under `server/middleware/` is executed for every request. Middleware can be used for tasks such as authentication, logging, or request transformation.

::warning
Returning a value from middleware will terminate the request and send the returned value as the response. This behavior should generally be avoided to ensure proper request handling!
::

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/server#server-middleware
---
::

### Step 3: Initialize Nuxt and Execute Nuxt App Plugins

The Vue and Nuxt instances are created first. Afterward, Nuxt executes its server plugins. This includes:

- Built-in plugins, such as Vue Router and `unhead`.
- Custom plugins located in the `plugins/` directory, including those without a suffix (e.g., `myPlugin.ts`) and those with the `.server` suffix (e.g., `myServerPlugin.server.ts`).

Plugins execute in a specific order and may have dependencies on one another. For more details, including execution order and parallelism, refer to the [Plugins documentation](https://nuxt.com/docs/3.x/guide/directory-structure/plugins).

::callout{icon="i-lucide-lightbulb"}
After this step, Nuxt calls the [`app:created`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) hook, which can be used to execute additional logic.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

### Step 4: Route Validation

After initializing plugins and before executing middleware, Nuxt calls the `validate` method if it is defined in the `definePageMeta` function. The `validate` method, which can be synchronous or asynchronous, is often used to validate dynamic route parameters.

- The `validate` function should return `true` if the parameters are valid.
- If validation fails, it should return `false` or an object containing a `statusCode` and/or `statusMessage` to terminate the request.

For more information, see the [Route Validation documentation](https://nuxt.com/docs/3.x/getting-started/routing#route-validation).

::read-more{to="https://nuxt.com/docs/getting-started/routing#route-validation"}
::

### Step 5: Execute Nuxt App Middleware

Middleware allows you to run code before navigating to a particular route. It is often used for tasks such as authentication, redirection, or logging.

In Nuxt, there are three types of middleware:

- **Global route middleware**
- **Named route middleware**
- **Anonymous (or inline) route middleware**

Nuxt executes all global middleware on the initial page load (both on server and client) and then again before any client-side navigation. Named and anonymous middleware are executed only on the routes specified in the middleware property of the page(route) meta defined in the corresponding page components.

For details about each type and examples, see the [Middleware documentation](https://nuxt.com/docs/3.x/guide/directory-structure/middleware).

Any redirection on the server will result in a `Location:` header being sent to the browser; the browser then makes a fresh request to this new location. All application state will be reset when this happens, unless persisted in a cookie.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

### Step 6: Render Page and Components

Nuxt renders the page and its components and fetches any required data with `useFetch` and `useAsyncData` during this step. Since there are no dynamic updates and no DOM operations occur on the server, Vue lifecycle hooks such as `onBeforeMount`, `onMounted`, and subsequent hooks are **NOT** executed during SSR.

By default, Vue pauses dependency tracking during SSR for better performance.

::callout{icon="i-lucide-lightbulb"}
There is no reactivity on the server side because Vue SSR renders the app top-down as static HTML, making it impossible to go back and modify content that has already been rendered.
::

::important
You should avoid code that produces side effects that need cleanup in root scope of `<script setup>`. An example of such side effects is setting up timers with `setInterval`. In client-side only code we may setup a timer and then tear it down in `onBeforeUnmount` or `onUnmounted`. However, because the unmount hooks will never be called during SSR, the timers will stay around forever. To avoid this, move your side-effect code into `onMounted` instead.
::

::tip{icon="i-lucide-video" target="_blank" to="https://youtu.be/dZSNW07sO-A"}
Watch a video from Daniel Roe explaining Server Rendering and Global State.
::

### Step 7: Generate HTML Output

After all required data is fetched and the components are rendered, Nuxt combines the rendered components with settings from `unhead` to generate a complete HTML document. This HTML, along with the associated data, is then sent back to the client to complete the SSR process.

::callout{icon="i-lucide-lightbulb"}
After rendering the Vue application to HTML, Nuxt calls the [`app:rendered`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) hook.
::

::callout{icon="i-lucide-lightbulb"}
Before finalizing and sending the HTML, Nitro will call the [`render:html`](https://nuxt.com/docs/3.x/api/advanced/hooks#nitro-app-hooks-runtime-server-side) hook. This hook allows you to manipulate the generated HTML, such as injecting additional scripts or modifying meta tags.
::

This part of the lifecycle is fully executed in the browser, no matter which Nuxt mode you've chosen.

### Step 1: Initialize Nuxt and Execute Nuxt App Plugins

This step is similar to the server-side execution and includes both built-in and custom plugins.

Custom plugins in the `plugins/` directory, such as those without a suffix (e.g., `myPlugin.ts`) and with the `.client` suffix (e.g., `myClientPlugin.client.ts`), are executed on the client side.

::callout{icon="i-lucide-lightbulb"}
After this step, Nuxt calls the [`app:created`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) hook, which can be used to execute additional logic.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

### Step 2: Route Validation

This step is the same as the server-side execution and includes the `validate` method if defined in the `definePageMeta` function.

### Step 3: Execute Nuxt App Middleware

Nuxt middleware runs on both the server and the client. If you want certain code to run in specific environments, consider splitting it by using `import.meta.client` for the client and `import.meta.server` for the server.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs
---
::

### Step 4: Mount Vue Application and Hydration

Calling `app.mount('#__nuxt')` mounts the Vue application to the DOM. If the application uses SSR or SSG mode, Vue performs a hydration step to make the client-side application interactive. During hydration, Vue recreates the application (excluding [Server Components](https://nuxt.com/docs/3.x/guide/directory-structure/components#server-components)), matches each component to its corresponding DOM nodes, and attaches DOM event listeners.

To ensure proper hydration, it's important to maintain consistency between the data on the server and the client. For API requests, it is recommended to use `useAsyncData`, `useFetch`, or other SSR-friendly composables. These methods ensure that the data fetched on the server side is reused during hydration, avoiding repeated requests. Any new requests should only be triggered after hydration, preventing hydration errors.

::callout{icon="i-lucide-lightbulb"}
Before mounting the Vue application, Nuxt calls the [`app:beforeMount`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) hook.
::

::callout{icon="i-lucide-lightbulb"}
After mounting the Vue application, Nuxt calls the [`app:mounted`](https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime) hook.
::

### Step 5: Vue Lifecycle

Unlike on the server, the browser executes the full [Vue lifecycle](https://vuejs.org/guide/essentials/lifecycle){rel="nofollow"}.

---

## Common reasons

**URL:** llms-txt#common-reasons

**Contents:**
- Browser-only APIs in Server Context
- Inconsistent Data
- Conditional Rendering Based on Client State
- Third-party Libraries with Side Effects
- Dynamic Content Based on Time
- In summary

## Browser-only APIs in Server Context

**Problem**: Using browser-specific APIs during server-side rendering.

**Solution**: You can use [`useCookie`](https://nuxt.com/docs/3.x/api/composables/use-cookie):

**Problem**: Different data between server and client.

**Solution**: Use SSR-friendly state:

## Conditional Rendering Based on Client State

**Problem**: Using client-only conditions during SSR.

**Solution**: Use media queries or handle it client-side:

## Third-party Libraries with Side Effects

**Problem**: Libraries that modify the DOM or have browser dependencies (this happens a LOT with tag managers).

**Solution**: Initialise libraries after hydration has completed:

## Dynamic Content Based on Time

**Problem**: Content that changes based on current time.

**Solution**: Use [`NuxtTime`](https://nuxt.com/docs/3.x/api/components/nuxt-time) component or handle it client-side:

1. **Use SSR-friendly composables**: [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch), [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data), [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state)
2. **Wrap client-only code**: Use [`ClientOnly`](https://nuxt.com/docs/3.x/api/components/client-only) component for browser-specific content
3. **Consistent data sources**: Ensure server and client uses the same data
4. **Avoid side effects in setup**: Move browser-dependent code to `onMounted`

::tip
You can read the [Vue documentation on SSR hydration mismatch](https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch){rel="nofollow"} for a better understanding of hydration.
::

**Examples:**

Example 1 (html):
```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This will cause hydration mismatch!
// localStorage doesn't exist on the server!
const userTheme = localStorage.getItem('theme') || 'light'
</script>
```

Example 2 (html):
```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This works on both server and client
const userTheme = useCookie('theme', { default: () => 'light' })
</script>
```

Example 3 (html):
```html
<template>
  <div>{{ Math.random() }}</div>
</template>
```

Example 4 (html):
```html
<template>
  <div>{{ state }}</div>
</template>

<script setup>
const state = useState('random', () => Math.random())
</script>
```

---

## Authoring Nuxt Layers

**URL:** llms-txt#authoring-nuxt-layers

**Contents:**
- Basic Example
- Layer Priority
- Starter Template
- Publishing Layers
  - Git Repository
  - npm Package
- Tips
  - Named Layer Aliases
  - Relative Paths and Aliases
- Multi-Layer Support for Nuxt Modules

Nuxt layers are a powerful feature that you can use to share and reuse partial Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.

::read-more{to="https://nuxt.com/docs/getting-started/layers"}
::

A minimal Nuxt layer directory should contain a [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file to indicate it is a layer.

Additionally, certain other files in the layer directory will be auto-scanned and used by Nuxt for the project extending this layer.

- [`components/*`](https://nuxt.com/docs/3.x/guide/directory-structure/components) - Extend the default components
- [`composables/*`](https://nuxt.com/docs/3.x/guide/directory-structure/composables) - Extend the default composables
- [`layouts/*`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) - Extend the default layouts
- [`middleware/*`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) - Extend the default middleware
- [`pages/*`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) - Extend the default pages
- [`plugins/*`](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) - Extend the default plugins
- [`server/*`](https://nuxt.com/docs/3.x/guide/directory-structure/server) - Extend the default server endpoints & middleware
- [`utils/*`](https://nuxt.com/docs/3.x/guide/directory-structure/utils) - Extend the default utils
- [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config)- Extend the default nuxt config
- [`app.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/app-config) - Extend the default app config

When extending from multiple layers, it's important to understand the priority order:

1. **Layers in `extends`** - earlier entries have higher priority (first overrides second)
2. **Auto-scanned local layers** from `~~/layers` directory in alphabetical order (Z overrides A)
3. **Your project** has the highest priority in the stack - it will always override other layers

If you also have auto-scanned layers like `~~/layers/a` and `~~/layers/z`, the complete override order would be: `base` > `theme` > `custom` > `z` > `a` > your project.

To get started you can initialize a layer with the [nuxt/starter/layer template](https://github.com/nuxt/starter/tree/layer){rel="nofollow"}. This will create a basic structure you can build upon. Execute this command within the terminal to get started:

Follow up on the README instructions for the next steps.

You can publish and share layers by either using a remote source or an npm package.

You can use a git repository to share your Nuxt layer. Some examples:

::tip
If you want to extend a private remote source, you need to add the environment variable `GIGET_AUTH=<token>` to provide a token.
::

::tip
If you want to extend a remote source from a self-hosted GitHub or GitLab instance, you need to supply its URL with the `GIGET_GITHUB_URL=<url>` or `GIGET_GITLAB_URL=<url>` environment variable - or directly configure it with [the `auth` option](https://github.com/unjs/c12#extending-config-layer-from-remote-sources){rel="nofollow"} in your `nuxt.config`.
::

::warning
Bear in mind that if you are extending a remote source as a layer, you will not be able to access its dependencies outside of Nuxt. For example, if the remote layer depends on an eslint plugin, this will not be usable in your eslint config. That is because these dependencies will be located in a special location (`node_modules/.c12/layer_name/node_modules/`) that is not accessible to your package manager.
::

::note
When using git remote sources, if a layer has npm dependencies and you wish to install them, you can do so by specifying `install: true` in your layer options.

You can publish Nuxt layers as an npm package that contains the files and dependencies you want to extend. This allows you to share your config with others, use it in multiple projects or use it privately.

To extend from an npm package, you need to make sure that the module is published to npm and installed in the user's project as a devDependency. Then you can use the module name to extend the current nuxt config:

To publish a layer directory as an npm package, you want to make sure that the `package.json` has the correct properties filled out. This will make sure that the files are included when the package is published.

::important
Make sure any dependency imported in the layer is **explicitly added** to the `dependencies`. The `nuxt` dependency, and anything only used for testing the layer before publishing, should remain in the `devDependencies` field.
::

Now you can proceed to publish the module to npm, either publicly or privately.

::important
When publishing the layer as a private npm package, you need to make sure you log in, to authenticate with npm to download the node module.
::

### Named Layer Aliases

Auto-scanned layers (from your `~~/layers` directory) automatically create aliases. For example, you can access your `~~/layers/test` layer via `#layers/test`.

If you want to create named layer aliases for other layers, you can specify a name in the configuration of the layer.

This will produce an alias of `#layers/example` which points to your layer.

### Relative Paths and Aliases

When importing using global aliases (such as `~/` and `@/`) in a layer components and composables, note that these aliases are resolved relative to the user's project paths. As a workaround, you can **use relative paths** to import them, or use named layer aliases.

Also when using relative paths in `nuxt.config` file of a layer, (with exception of nested `extends`) they are resolved relative to user's project instead of the layer. As a workaround, use full resolved paths in `nuxt.config`:

## Multi-Layer Support for Nuxt Modules

You can use the [`getLayerDirectories`](https://nuxt.com/docs/api/kit/layers#getlayerdirectories) utility from Nuxt Kit to support custom multi-layer handling for your modules.

- Earlier items in the array have higher priority and override later ones
- The user's project is the first item in the array

Configuration loading and extends support is handled by [unjs/c12](https://github.com/unjs/c12){rel="nofollow"}, merged using [unjs/defu](https://github.com/unjs/defu){rel="nofollow"} and remote git sources are supported using [unjs/giget](https://github.com/unjs/giget){rel="nofollow"}. Check the docs and source code to learn more.

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/issues/13367
---
Checkout our ongoing development to bring more improvements for layers support on GitHub.
::

**Examples:**

Example 1 (unknown):
```unknown
Additionally, certain other files in the layer directory will be auto-scanned and used by Nuxt for the project extending this layer.

- [`components/*`](https://nuxt.com/docs/3.x/guide/directory-structure/components) - Extend the default components
- [`composables/*`](https://nuxt.com/docs/3.x/guide/directory-structure/composables) - Extend the default composables
- [`layouts/*`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) - Extend the default layouts
- [`middleware/*`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) - Extend the default middleware
- [`pages/*`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) - Extend the default pages
- [`plugins/*`](https://nuxt.com/docs/3.x/guide/directory-structure/plugins) - Extend the default plugins
- [`server/*`](https://nuxt.com/docs/3.x/guide/directory-structure/server) - Extend the default server endpoints & middleware
- [`utils/*`](https://nuxt.com/docs/3.x/guide/directory-structure/utils) - Extend the default utils
- [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config)- Extend the default nuxt config
- [`app.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/app-config) - Extend the default app config

## Basic Example

::code-group
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

## $fetch

**URL:** llms-txt#$fetch

**Contents:**
- Usage
  - Passing Headers and Cookies

Nuxt uses [ofetch](https://github.com/unjs/ofetch){rel="nofollow"} to expose globally the `$fetch` helper for making HTTP requests within your Vue app or API routes.

::tip{icon="i-lucide-rocket"}
During server-side rendering, calling `$fetch` to fetch your internal [API routes](https://nuxt.com/docs/3.x/guide/directory-structure/server) will directly call the relevant function (emulating the request), **saving an additional API call**.
::

::note{color="blue" icon="i-lucide-info"}
Using `$fetch` in components without wrapping it with [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) causes fetching the data twice: initially on the server, then again on the client-side during hydration, because `$fetch` does not transfer state from the server to the client. Thus, the fetch will be executed on both sides because the client has to get the data again.
::

We recommend using [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) or [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) + `$fetch` to prevent double data fetching when fetching the component data.

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

You can use `$fetch` in any methods that are executed only on client-side.

::tip
`$fetch` is the preferred way to make HTTP calls in Nuxt instead of [@nuxt/http](https://github.com/nuxt/http){rel="nofollow"} and [@nuxtjs/axios](https://github.com/nuxt-community/axios-module){rel="nofollow"} that are made for Nuxt 2.
::

::note
If you use `$fetch` to call an (external) HTTPS URL with a self-signed certificate in development, you will need to set `NODE_TLS_REJECT_UNAUTHORIZED=0` in your environment.
::

### Passing Headers and Cookies

When we call `$fetch` in the browser, user headers like `cookie` will be directly sent to the API.

However, during Server-Side Rendering, due to security risks such as &#x2A;*Server-Side Request Forgery (SSRF)** or **Authentication Misuse**, the `$fetch` wouldn't include the user's browser cookies, nor pass on cookies from the fetch response.

If you need to forward headers and cookies on the server, you must manually pass them:

However, when calling `useFetch` with a relative URL on the server, Nuxt will use [`useRequestFetch`](https://nuxt.com/docs/3.x/api/composables/use-request-fetch) to proxy headers and cookies (with the exception of headers not meant to be forwarded, like `host`).

**Examples:**

Example 1 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

You can use `$fetch` in any methods that are executed only on client-side.
```

Example 2 (unknown):
```unknown
::tip
`$fetch` is the preferred way to make HTTP calls in Nuxt instead of [@nuxt/http](https://github.com/nuxt/http){rel="nofollow"} and [@nuxtjs/axios](https://github.com/nuxt-community/axios-module){rel="nofollow"} that are made for Nuxt 2.
::

::note
If you use `$fetch` to call an (external) HTTPS URL with a self-signed certificate in development, you will need to set `NODE_TLS_REJECT_UNAUTHORIZED=0` in your environment.
::

### Passing Headers and Cookies

When we call `$fetch` in the browser, user headers like `cookie` will be directly sent to the API.

However, during Server-Side Rendering, due to security risks such as &#x2A;*Server-Side Request Forgery (SSRF)** or **Authentication Misuse**, the `$fetch` wouldn't include the user's browser cookies, nor pass on cookies from the fetch response.

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

If you need to forward headers and cookies on the server, you must manually pass them:
```

---

## definePageMeta

**URL:** llms-txt#definepagemeta

**Contents:**
- Type
- Parameters
  - `meta`
- Examples
  - Basic Usage
  - Defining Middleware
  - Using a Custom Regular Expression
  - Defining Layout

`definePageMeta` is a compiler macro that you can use to set metadata for your **page** components located in the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory (unless [set otherwise](https://nuxt.com/docs/3.x/api/nuxt-config#pages)). This way you can set custom metadata for each static or dynamic route of your Nuxt application.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/pages#page-metadata
---
::

- **Type**: `PageMeta`:br An object accepting the following page metadata:&#x20;:b&#x72;&#x2A;*`name`**
  - **Type**: `string`:br You may define a name for this page's route. By default, name is generated based on path inside the [`pages/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages).
  :b&#x72;&#x2A;*`path`**
  - **Type**: `string`:br You may define a [custom regular expression](https://nuxt.com/#using-a-custom-regular-expression) if you have a more complex pattern than can be expressed with the file name.
  :b&#x72;&#x2A;*`props`**
  - **Type**: [`RouteRecordRaw['props']`](https://router.vuejs.org/guide/essentials/passing-props){rel="nofollow"}:br Allows accessing the route `params` as props passed to the page component.
  :b&#x72;&#x2A;*`alias`**
  - **Type**: `string | string[]`:br Aliases for the record. Allows defining extra paths that will behave like a copy of the record. Allows having paths shorthands like `/users/:id` and `/u/:id`. All `alias` and `path` values must share the same params.
  :b&#x72;&#x2A;*`keepalive`**
  - **Type**: `boolean` | [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive){rel="nofollow"}:br Set to `true` when you want to preserve page state across route changes or use the [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive){rel="nofollow"} for a fine-grained control.
  :b&#x72;&#x2A;*`key`**
  - **Type**: `false` | `string` | `((route: RouteLocationNormalizedLoaded) => string)`:br Set `key` value when you need more control over when the `<NuxtPage>` component is re-rendered.
  :b&#x72;&#x2A;*`layout`**
  - **Type**: `false` | `LayoutKey` | `Ref<LayoutKey>` | `ComputedRef<LayoutKey>`:br Set a static or dynamic name of the layout for each route. This can be set to `false` in case the default layout needs to be disabled.
  :b&#x72;&#x2A;*`layoutTransition`**
  - **Type**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}:br Set name of the transition to apply for current layout. You can also set this value to `false` to disable the layout transition.
  :b&#x72;&#x2A;*`middleware`**
  - **Type**: `MiddlewareKey` | [`NavigationGuard`](https://router.vuejs.org/api/interfaces/NavigationGuard.html#navigationguard){rel="nofollow"} | `Array<MiddlewareKey | NavigationGuard>`:br Define anonymous or named middleware directly within `definePageMeta`. Learn more about [route middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware).
  :b&#x72;&#x2A;*`pageTransition`**
  - **Type**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}:br Set name of the transition to apply for current page. You can also set this value to `false` to disable the page transition.
  :b&#x72;&#x2A;*`viewTransition`**
  - **Type**: `boolean | 'always'`:br&#x2A;*Experimental feature, only available when [enabled in your nuxt.config file](https://nuxt.com/docs/3.x/getting-started/transitions#view-transitions-api-experimental)**:br
    Enable/disable View Transitions for the current page.
    If set to true, Nuxt will not apply the transition if the users browser matches `prefers-reduced-motion: reduce` (recommended). If set to `always`, Nuxt will always apply the transition.
  :b&#x72;&#x2A;*`redirect`**
  - **Type**: [`RouteRecordRedirectOption`](https://router.vuejs.org/guide/essentials/redirect-and-alias.html#redirect-and-alias){rel="nofollow"}:br Where to redirect if the route is directly matched. The redirection happens before any navigation guard and triggers a new navigation with the new target location.
  :b&#x72;&#x2A;*`validate`**
  - **Type**: `(route: RouteLocationNormalized) => boolean | Promise<boolean> | Partial<NuxtError> | Promise<Partial<NuxtError>>`:br Validate whether a given route can validly be rendered with this page. Return true if it is valid, or false if not. If another match can't be found, this will mean a 404. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).
  :b&#x72;&#x2A;*`scrollToTop`**
  - **Type**: `boolean | (to: RouteLocationNormalized, from: RouteLocationNormalized) => boolean`:br Tell Nuxt to scroll to the top before rendering the page or not. If you want to overwrite the default scroll behavior of Nuxt, you can do so in `~/app/router.options.ts` (see [custom routing](https://nuxt.com/docs/3.x/guide/recipes/custom-routing#using-approuteroptions)) for more info.
  :b&#x72;&#x2A;*`[key: string]`**
  - **Type**: `any`:br Apart from the above properties, you can also set **custom** metadata. You may wish to do so in a type-safe way by [augmenting the type of the `meta` object](https://nuxt.com/docs/3.x/guide/directory-structure/pages/#typing-custom-metadata).

The example below demonstrates:

- how `key` can be a function that returns a value;
- how `keepalive` property makes sure that the `<modal>` component is not cached when switching between multiple components;
- adding `pageType` as a custom property:

### Defining Middleware

The example below shows how the middleware can be defined using a `function` directly within the `definePageMeta` or set as a `string` that matches the middleware file name located in the `middleware/` directory:

### Using a Custom Regular Expression

A custom regular expression is a good way to resolve conflicts between overlapping routes, for instance:

The two routes "/test-category" and "/1234-post" match both `[postId]-[postSlug].vue` and `[categorySlug].vue` page routes.

To make sure that we are only matching digits (`\d+`) for `postId` in the `[postId]-[postSlug]` route, we can add the following to the `[postId]-[postSlug].vue` page template:

For more examples see [Vue Router's Matching Syntax](https://router.vuejs.org/guide/essentials/route-matching-syntax.html){rel="nofollow"}.

You can define the layout that matches the layout's file name located (by default) in the [`layouts/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/layouts). You can also disable the layout by setting the `layout` to `false`:

**Examples:**

Example 1 (unknown):
```unknown
::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/pages#page-metadata
---
::

## Type
```

Example 2 (unknown):
```unknown
## Parameters

### `meta`

- **Type**: `PageMeta`:br An object accepting the following page metadata:&#x20;:b&#x72;&#x2A;*`name`**
  - **Type**: `string`:br You may define a name for this page's route. By default, name is generated based on path inside the [`pages/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages).
  :b&#x72;&#x2A;*`path`**
  - **Type**: `string`:br You may define a [custom regular expression](https://nuxt.com/#using-a-custom-regular-expression) if you have a more complex pattern than can be expressed with the file name.
  :b&#x72;&#x2A;*`props`**
  - **Type**: [`RouteRecordRaw['props']`](https://router.vuejs.org/guide/essentials/passing-props){rel="nofollow"}:br Allows accessing the route `params` as props passed to the page component.
  :b&#x72;&#x2A;*`alias`**
  - **Type**: `string | string[]`:br Aliases for the record. Allows defining extra paths that will behave like a copy of the record. Allows having paths shorthands like `/users/:id` and `/u/:id`. All `alias` and `path` values must share the same params.
  :b&#x72;&#x2A;*`keepalive`**
  - **Type**: `boolean` | [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive){rel="nofollow"}:br Set to `true` when you want to preserve page state across route changes or use the [`KeepAliveProps`](https://vuejs.org/api/built-in-components.html#keepalive){rel="nofollow"} for a fine-grained control.
  :b&#x72;&#x2A;*`key`**
  - **Type**: `false` | `string` | `((route: RouteLocationNormalizedLoaded) => string)`:br Set `key` value when you need more control over when the `<NuxtPage>` component is re-rendered.
  :b&#x72;&#x2A;*`layout`**
  - **Type**: `false` | `LayoutKey` | `Ref<LayoutKey>` | `ComputedRef<LayoutKey>`:br Set a static or dynamic name of the layout for each route. This can be set to `false` in case the default layout needs to be disabled.
  :b&#x72;&#x2A;*`layoutTransition`**
  - **Type**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}:br Set name of the transition to apply for current layout. You can also set this value to `false` to disable the layout transition.
  :b&#x72;&#x2A;*`middleware`**
  - **Type**: `MiddlewareKey` | [`NavigationGuard`](https://router.vuejs.org/api/interfaces/NavigationGuard.html#navigationguard){rel="nofollow"} | `Array<MiddlewareKey | NavigationGuard>`:br Define anonymous or named middleware directly within `definePageMeta`. Learn more about [route middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware).
  :b&#x72;&#x2A;*`pageTransition`**
  - **Type**: `boolean` | [`TransitionProps`](https://vuejs.org/api/built-in-components.html#transition){rel="nofollow"}:br Set name of the transition to apply for current page. You can also set this value to `false` to disable the page transition.
  :b&#x72;&#x2A;*`viewTransition`**
  - **Type**: `boolean | 'always'`:br&#x2A;*Experimental feature, only available when [enabled in your nuxt.config file](https://nuxt.com/docs/3.x/getting-started/transitions#view-transitions-api-experimental)**:br
    Enable/disable View Transitions for the current page.
    If set to true, Nuxt will not apply the transition if the users browser matches `prefers-reduced-motion: reduce` (recommended). If set to `always`, Nuxt will always apply the transition.
  :b&#x72;&#x2A;*`redirect`**
  - **Type**: [`RouteRecordRedirectOption`](https://router.vuejs.org/guide/essentials/redirect-and-alias.html#redirect-and-alias){rel="nofollow"}:br Where to redirect if the route is directly matched. The redirection happens before any navigation guard and triggers a new navigation with the new target location.
  :b&#x72;&#x2A;*`validate`**
  - **Type**: `(route: RouteLocationNormalized) => boolean | Promise<boolean> | Partial<NuxtError> | Promise<Partial<NuxtError>>`:br Validate whether a given route can validly be rendered with this page. Return true if it is valid, or false if not. If another match can't be found, this will mean a 404. You can also directly return an object with `statusCode`/`statusMessage` to respond immediately with an error (other matches will not be checked).
  :b&#x72;&#x2A;*`scrollToTop`**
  - **Type**: `boolean | (to: RouteLocationNormalized, from: RouteLocationNormalized) => boolean`:br Tell Nuxt to scroll to the top before rendering the page or not. If you want to overwrite the default scroll behavior of Nuxt, you can do so in `~/app/router.options.ts` (see [custom routing](https://nuxt.com/docs/3.x/guide/recipes/custom-routing#using-approuteroptions)) for more info.
  :b&#x72;&#x2A;*`[key: string]`**
  - **Type**: `any`:br Apart from the above properties, you can also set **custom** metadata. You may wish to do so in a type-safe way by [augmenting the type of the `meta` object](https://nuxt.com/docs/3.x/guide/directory-structure/pages/#typing-custom-metadata).

## Examples

### Basic Usage

The example below demonstrates:

- how `key` can be a function that returns a value;
- how `keepalive` property makes sure that the `<modal>` component is not cached when switching between multiple components;
- adding `pageType` as a custom property:
```

Example 3 (unknown):
```unknown
### Defining Middleware

The example below shows how the middleware can be defined using a `function` directly within the `definePageMeta` or set as a `string` that matches the middleware file name located in the `middleware/` directory:
```

Example 4 (unknown):
```unknown
### Using a Custom Regular Expression

A custom regular expression is a good way to resolve conflicts between overlapping routes, for instance:

The two routes "/test-category" and "/1234-post" match both `[postId]-[postSlug].vue` and `[categorySlug].vue` page routes.

To make sure that we are only matching digits (`\d+`) for `postId` in the `[postId]-[postSlug]` route, we can add the following to the `[postId]-[postSlug].vue` page template:
```

---

## useLazyFetch

**URL:** llms-txt#uselazyfetch

**Contents:**
- Description
- Example

By default, [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) blocks navigation until its async handler is resolved. `useLazyFetch` provides a wrapper around [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) that triggers navigation before the handler is resolved by setting the `lazy` option to `true`.

::note
`useLazyFetch` has the same signature as [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch).
::

::note
Awaiting `useLazyFetch` in this mode only ensures the call is initialized. On client-side navigation, data may not be immediately available, and you should make sure to handle the pending state in your app.
::

::read-more{to="https://nuxt.com/docs/api/composables/use-fetch"}
::

::note
`useLazyFetch` is a reserved function name transformed by the compiler, so you should not name your own function `useLazyFetch`.
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

---

## useAsyncData

**URL:** llms-txt#useasyncdata

**Contents:**
- Usage
  - Watch Params
  - Reactive Keys
- Params
  - Shared State and Option Consistency
- Return Values
- Type

Within your pages, components, and plugins you can use useAsyncData to get access to data that resolves asynchronously.

::note
[`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) is a composable meant to be called directly in the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context). It returns reactive composables and handles adding responses to the Nuxt payload so they can be passed from server to client **without re-fetching the data on client side** when the page hydrates.
::

::warning
If you're using a custom useAsyncData wrapper, do not await it in the composable, as that can cause unexpected behavior. Please follow [this recipe](https://nuxt.com/docs/3.x/guide/recipes/custom-usefetch#custom-usefetch) for more information on how to make a custom async data fetcher.
::

::note
`data`, `status` and `error` are Vue refs and they should be accessed with `.value` when used within the `<script setup>`, while `refresh`/`execute` and `clear` are plain functions.
::

The built-in `watch` option allows automatically rerunning the fetcher function when any changes are detected.

You can use a computed ref, plain ref or a getter function as the key, allowing for dynamic data fetching that automatically updates when the key changes:

::warning
[`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) is a reserved function name transformed by the compiler, so you should not name your own function [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data).
::

::read-more
---
to: https://nuxt.com/docs/getting-started/data-fetching#useasyncdata
---
::

- `key`: a unique key to ensure that data fetching can be properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file name and line number of the instance of `useAsyncData` will be generated for you.
- `handler`: an asynchronous function that must return a truthy value (for example, it should not be `undefined` or `null`) or the request may be duplicated on the client side.
  :warning[The `handler` function should be **side-effect free** to ensure predictable behavior during SSR and CSR hydration. If you need to trigger side effects, use the [`callOnce`](https://nuxt.com/docs/3.x/api/utils/call-once) utility to do so.]
- `options`:

- `server`: whether to fetch the data on the server (defaults to `true`)
  - `lazy`: whether to resolve the async function after loading the route, instead of blocking client-side navigation (defaults to `false`)
  - `immediate`: when set to `false`, will prevent the request from firing immediately. (defaults to `true`)
  - `default`: a factory function to set the default value of the `data`, before the async function resolves - useful with the `lazy: true` or `immediate: false` option
  - `transform`: a function that can be used to alter `handler` function result after resolving
  - `getCachedData`: Provide a function which returns cached data. A `null` or `undefined` return value will trigger a fetch. By default, this is:

Which only caches data when `experimental.payloadExtraction` of `nuxt.config` is enabled.
  - `pick`: only pick specified keys in this array from the `handler` function result
  - `watch`: watch reactive sources to auto-refresh
  - `deep`: return data in a deep ref object (it is `true` by default). It can be set to `false` to return data in a shallow ref object, which can improve performance if your data does not need to be deeply reactive.
  - `dedupe`: avoid fetching same key more than once at a time (defaults to `cancel`). Possible options:

- `cancel` - cancels existing requests when a new one is made
    - `defer` - does not make new requests at all if there is a pending request
  - `timeout` - a number in milliseconds to wait before timing out the request (defaults to `undefined`, which means no timeout)

::note
Under the hood, `lazy: false` uses `<Suspense>` to block the loading of the route before the data has been fetched. Consider using `lazy: true` and implementing a loading state instead for a snappier user experience.
::

::read-more{to="https://nuxt.com/docs/api/composables/use-lazy-async-data"}
You can use `useLazyAsyncData` to have the same behavior as `lazy: true` with `useAsyncData`.
::

::video-accordion
---
title: Watch a video from Alexander Lichter about client-side caching with
  getCachedData
video-id: aQPR0xn-MMk
---
::

### Shared State and Option Consistency

When using the same key for multiple `useAsyncData` calls, they will share the same `data`, `error` and `status` refs. This ensures consistency across components but requires option consistency.

The following options **must be consistent** across all calls with the same key:

- `handler` function
- `deep` option
- `transform` function
- `pick` array
- `getCachedData` function
- `default` value

The following options **can differ** without triggering warnings:

- `server`
- `lazy`
- `immediate`
- `dedupe`
- `watch`

::tip
Keyed state created using `useAsyncData` can be retrieved across your Nuxt application using [`useNuxtData`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-data).
::

- `data`: the result of the asynchronous function that is passed in.
- `refresh`/`execute`: a function that can be used to refresh the data returned by the `handler` function.
- `error`: an error object if the data fetching failed.
- `status`: a string indicating the status of the data request:

- `idle`: when the request has not started, such as:

- when `execute` has not yet been called and `{ immediate: false }` is set
    - when rendering HTML on the server and `{ server: false }` is set
  - `pending`: the request is in progress
  - `success`: the request has completed successfully
  - `error`: the request has failed
- `clear`: a function that can be used to set `data` to `undefined` (or the value of `options.default()` if provided), set `error` to `null`, set `status` to `idle`, and mark any currently pending requests as cancelled.

By default, Nuxt waits until a `refresh` is finished before it can be executed again.

::note
If you have not fetched data on the server (for example, with `server: false`), then the data *will not* be fetched until hydration completes. This means even if you await [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) on the client side, `data` will remain `undefined` within `<script setup>`.
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

**Examples:**

Example 1 (unknown):
```unknown
::warning
If you're using a custom useAsyncData wrapper, do not await it in the composable, as that can cause unexpected behavior. Please follow [this recipe](https://nuxt.com/docs/3.x/guide/recipes/custom-usefetch#custom-usefetch) for more information on how to make a custom async data fetcher.
::

::note
`data`, `status` and `error` are Vue refs and they should be accessed with `.value` when used within the `<script setup>`, while `refresh`/`execute` and `clear` are plain functions.
::

### Watch Params

The built-in `watch` option allows automatically rerunning the fetcher function when any changes are detected.
```

Example 2 (unknown):
```unknown
### Reactive Keys

You can use a computed ref, plain ref or a getter function as the key, allowing for dynamic data fetching that automatically updates when the key changes:
```

Example 3 (unknown):
```unknown
::warning
[`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) is a reserved function name transformed by the compiler, so you should not name your own function [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data).
::

::read-more
---
to: https://nuxt.com/docs/getting-started/data-fetching#useasyncdata
---
::

## Params

- `key`: a unique key to ensure that data fetching can be properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file name and line number of the instance of `useAsyncData` will be generated for you.
- `handler`: an asynchronous function that must return a truthy value (for example, it should not be `undefined` or `null`) or the request may be duplicated on the client side.
  :warning[The `handler` function should be **side-effect free** to ensure predictable behavior during SSR and CSR hydration. If you need to trigger side effects, use the [`callOnce`](https://nuxt.com/docs/3.x/api/utils/call-once) utility to do so.]
- `options`:

  - `server`: whether to fetch the data on the server (defaults to `true`)
  - `lazy`: whether to resolve the async function after loading the route, instead of blocking client-side navigation (defaults to `false`)
  - `immediate`: when set to `false`, will prevent the request from firing immediately. (defaults to `true`)
  - `default`: a factory function to set the default value of the `data`, before the async function resolves - useful with the `lazy: true` or `immediate: false` option
  - `transform`: a function that can be used to alter `handler` function result after resolving
  - `getCachedData`: Provide a function which returns cached data. A `null` or `undefined` return value will trigger a fetch. By default, this is:
```

Example 4 (unknown):
```unknown
Which only caches data when `experimental.payloadExtraction` of `nuxt.config` is enabled.
  - `pick`: only pick specified keys in this array from the `handler` function result
  - `watch`: watch reactive sources to auto-refresh
  - `deep`: return data in a deep ref object (it is `true` by default). It can be set to `false` to return data in a shallow ref object, which can improve performance if your data does not need to be deeply reactive.
  - `dedupe`: avoid fetching same key more than once at a time (defaults to `cancel`). Possible options:

    - `cancel` - cancels existing requests when a new one is made
    - `defer` - does not make new requests at all if there is a pending request
  - `timeout` - a number in milliseconds to wait before timing out the request (defaults to `undefined`, which means no timeout)

::note
Under the hood, `lazy: false` uses `<Suspense>` to block the loading of the route before the data has been fetched. Consider using `lazy: true` and implementing a loading state instead for a snappier user experience.
::

::read-more{to="https://nuxt.com/docs/api/composables/use-lazy-async-data"}
You can use `useLazyAsyncData` to have the same behavior as `lazy: true` with `useAsyncData`.
::

::video-accordion
---
title: Watch a video from Alexander Lichter about client-side caching with
  getCachedData
video-id: aQPR0xn-MMk
---
::

### Shared State and Option Consistency

When using the same key for multiple `useAsyncData` calls, they will share the same `data`, `error` and `status` refs. This ensures consistency across components but requires option consistency.

The following options **must be consistent** across all calls with the same key:

- `handler` function
- `deep` option
- `transform` function
- `pick` array
- `getCachedData` function
- `default` value

The following options **can differ** without triggering warnings:

- `server`
- `lazy`
- `immediate`
- `dedupe`
- `watch`
```

---

## navigateTo

**URL:** llms-txt#navigateto

**Contents:**
- Usage
  - Within a Vue Component
  - Within Route Middleware
  - Navigating to an External URL
  - Opening a Page in a New Tab
- Type
- Parameters
  - `to`
  - `options` (optional)

`navigateTo` is available on both server side and client side. It can be used within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context), or directly, to perform page navigation.

::warning
Make sure to always use `await` or `return` on result of `navigateTo` when calling it.
::

::note
`navigateTo` cannot be used within Nitro routes. To perform a server-side redirect in Nitro routes, use [`sendRedirect`](https://h3.dev/utils/response#sendredirectevent-location-code){rel="nofollow"} instead.
::

### Within a Vue Component

### Within Route Middleware

When using `navigateTo` within route middleware, you must **return its result** to ensure the middleware execution flow works correctly.

For example, the following implementation **will not work as expected**:

In this case, `navigateTo` will be executed but not returned, which may lead to unexpected behavior.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

### Navigating to an External URL

The `external` parameter in `navigateTo` influences how navigating to URLs is handled:

- **Without `external: true`**:
  - Internal URLs navigate as expected.
  - External URLs throw an error.
- **With `external: true`**:
  - Internal URLs navigate with a full-page reload.
  - External URLs navigate as expected.

### Opening a Page in a New Tab

**Type**: [`RouteLocationRaw`](https://router.vuejs.org/api/interfaces/RouteLocationOptions.html#Interface-RouteLocationOptions){rel="nofollow"} | `undefined` | `null`

`to` can be a plain string or a route object to redirect to. When passed as `undefined` or `null`, it will default to `'/'`.

### `options` (optional)

**Type**: `NavigateToOptions`

An object accepting the following properties:

- `replace`
  - **Type**: `boolean`
  - **Default**: `false`
  - By default, `navigateTo` pushes the given route into the Vue Router's instance on the client side. :br This behavior can be changed by setting `replace` to `true`, to indicate that given route should be replaced.
- `redirectCode`
  - **Type**: `number`
  - **Default**: `302`
  - `navigateTo` redirects to the given path and sets the redirect code to [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302){rel="nofollow"} by default when the redirection takes place on the server side. :br This default behavior can be modified by providing different `redirectCode`. Commonly, [`301 Moved Permanently`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301){rel="nofollow"} can be used for permanent redirections.
- `external`
  - **Type**: `boolean`
  - **Default**: `false`
  - Allows navigating to an external URL when set to `true`. Otherwise, `navigateTo` will throw an error, as external navigation is not allowed by default.
- `open`
  - **Type**: `OpenOptions`
  - Allows navigating to the URL using the [open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open){rel="nofollow"} method of the window. This option is only applicable on the client side and will be ignored on the server side. :br An object accepting the following properties:
  - `target`
    - **Type**: `string`
    - **Default**: `'_blank'`
    - A string, without whitespace, specifying the name of the browsing context the resource is being loaded into.
  - `windowFeatures`
    - **Type**: `OpenWindowFeatures`
    - An object accepting the following properties:
      | Property                  | Type      | Description                                                                                    |
      | ------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
      | `popup`                   | `boolean` | Requests a minimal popup window instead of a new tab, with UI features decided by the browser. |
      | `width` or `innerWidth`   | `number`  | Specifies the content area's width (minimum 100 pixels), including scrollbars.                 |
      | `height` or `innerHeight` | `number`  | Specifies the content area's height (minimum 100 pixels), including scrollbars.                |
      | `left` or `screenX`       | `number`  | Sets the horizontal position of the new window relative to the left edge of the screen.        |
      | `top` or `screenY`        | `number`  | Sets the vertical position of the new window relative to the top edge of the screen.           |
      | `noopener`                | `boolean` | Prevents the new window from accessing the originating window via `window.opener`.             |
      | `noreferrer`              | `boolean` | Prevents the Referer header from being sent and implicitly enables `noopener`.                 |
      :brRefer to the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures){rel="nofollow"} for more detailed information on the **windowFeatures** properties.

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
// passing 'to' as a string
await navigateTo('/search')

// ... or as a route object
await navigateTo({ path: '/search' })

// ... or as a route object with query parameters
await navigateTo({
  path: '/search',
  query: {
    page: 1,
    sort: 'asc',
  },
})
</script>
```

Example 2 (ts):
```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // setting the redirect code to '301 Moved Permanently'
    return navigateTo('/search', { redirectCode: 301 })
  }
})
```

Example 3 (ts):
```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/search') {
    // ❌ This will not work as expected
    navigateTo('/search', { redirectCode: 301 })
    return
  }
})
```

Example 4 (vue):
```vue
<script setup lang="ts">
// will throw an error;
// navigating to an external URL is not allowed by default
await navigateTo('https://nuxt.com')

// will redirect successfully with the 'external' parameter set to 'true'
await navigateTo('https://nuxt.com', {
  external: true,
})
</script>
```

---

## setResponseStatus

**URL:** llms-txt#setresponsestatus

Nuxt provides composables and utilities for first-class server-side-rendering support.

`setResponseStatus` sets the statusCode (and optionally the statusMessage) of the response.

::important
`setResponseStatus` can only be called in the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

::note
In the browser, `setResponseStatus` will have no effect.
::

::read-more{to="https://nuxt.com/docs/getting-started/error-handling"}
::

**Examples:**

Example 1 (ts):
```ts
const event = useRequestEvent()

// event will be undefined in the browser
if (event) {
  // Set the status code to 404 for a custom 404 page
  setResponseStatus(event, 404)

  // Set the status message as well
  setResponseStatus(event, 404, 'Page Not Found')
}
```

---

## Cleavr

**URL:** llms-txt#cleavr

**Contents:**
- Setup
- Learn more

::tip
**Zero Configuration ✨**

Integration with this provider is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel="nofollow"}.
::

**In your [Cleavr.io](https://cleavr.io/){rel="nofollow"} panel:**

1. Provision a new server
2. Add a website, selecting **Nuxt 3** as the app type
3. In web app > settings > Code Repo, point to your project's code repository
4. In web app > settings > Environment variables, set `SERVER_PRESET=cleavr`

You're now all set to deploy your project!

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/cleavr"}
Head over **Nitro documentation** to learn more about the cleavr deployment preset.
::

---

## Nuxt 3.5

**URL:** llms-txt#nuxt-3.5

**Contents:**
- ⚡️ Vue 3.3 released
  - 🙌 Nitropack v2.4
  - 💖 Rich JSON payloads
- 🛝 Interactive server components
- ⏰ Environment config
- 💪 Fully typed pages
- 🔎 'Bundler' module resolution
- ⚗️ Separate server types
- 💀 Deprecations
- ✅ Upgrading

## ⚡️ Vue 3.3 released

Vue 3.3 has been released, with lots of exciting features, particularly around type support.

- new `defineOptions` macro
- 'generic' components
- typed slots and using external types in defineProps
- ... and more

This also brings a significant improvement to data fetching when navigating between nested pages ([#20777](https://github.com/nuxt/nuxt/pull/20777){rel="nofollow"}), thanks to [@antfu](https://github.com/antfu){rel="nofollow"} and [@baiwusanyu-c](https://github.com/baiwusanyu-c){rel="nofollow"}.

Read &#x2A;*[the full release announcement](https://blog.vuejs.org/posts/vue-3-3){rel="nofollow"}** for more details.

We've been working on lots of improvements to Nitro and these have landed already in Nitro v2.4 - you may already have this upgrade, which contains a lot of bug fixes, updates to the module worker format for Cloudflare, Vercel KV support and more.

One note: if you're deploying to Vercel or Netlify and want to benefit from incremental static regeneration, you should now update your route rules:

Read &#x2A;*[the full release notes](https://github.com/unjs/nitro/releases/tag/v2.4.0){rel="nofollow"}**.

### 💖 Rich JSON payloads

**Rich JSON payload serialisation** is now enabled by default ([#19205](https://github.com/nuxt/nuxt/pull/19205){rel="nofollow"}, [#20770](https://github.com/nuxt/nuxt/pull/20770){rel="nofollow"}). This is both faster and allows serialising complex objects in the payload passed from the Nuxt server to client (and also when extracting payload data for prerendered sites).

This now means that **various rich JS types are supported out-of-the-box**: regular expressions, dates, Map and Set and BigInt as well as NuxtError - and Vue-specific objects like `ref`, `reactive`, `shallowRef` and `shallowReactive`.

You can find [an example](https://github.com/nuxt/nuxt/blob/main/test/fixtures/basic/pages/json-payload.vue){rel="nofollow"} in our test suite.

This is all possible due to [Rich-Harris/devalue#58](https://github.com/Rich-Harris/devalue/pull/58){rel="nofollow"}. For a long time, Nuxt has been using our own fork of devalue owing to issues serialising Errors and other non-POJO objects, but we now have transitioned back to the original.

You can even register your own custom types with a new object-syntax Nuxt plugin:

You can read more about how this works [here](https://github.com/rich-harris/devalue#custom-types){rel="nofollow"}.

## 🛝 Interactive server components

This feature should be considered highly experimental, but thanks to some great work from @huang-julien we now support interactive content within server components via *slots* ([#20284](https://github.com/nuxt/nuxt/pull/20284){rel="nofollow"}).

You can follow the server component roadmap at [#19772](https://github.com/nuxt/nuxt/issues/19772){rel="nofollow"}.

## ⏰ Environment config

You can now configure fully typed, per-environment overrides in your `nuxt.config.ts`:

If you're authoring layers, you can also use the `$meta` key to provide metadata that you or the consumers of your layer might use.

Read more [about per-environment overrides](https://github.com/nuxt/nuxt/pull/20329){rel="nofollow"}.

## 💪 Fully typed pages

You can benefit from fully typed routing within your Nuxt app via this experimental integration with [unplugin-vue-router](https://github.com/posva/unplugin-vue-router){rel="nofollow"} - thanks to some great work from [@posva](https://github.com/posva){rel="nofollow"}!

Out of the box, this will enable typed usage of [`navigateTo`](https://nuxt.com/docs/api/utils/navigate-to), [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link), `router.push()` and more.

You can even get typed params within a page by using `const route = useRoute('route-name')`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"}.

Enable this feature directly in your `nuxt.config.ts`:

## 🔎 'Bundler' module resolution

We now have full support within Nuxt for the `bundler` strategy of [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html){rel="nofollow"}.

We would recommend adopting this if possible. It has type support for subpath exports, for example, but more exactly matches the behaviour of build tools like Vite and Nuxt than `Node16` resolution.

This turns on TypeScript's ability to 'follow' Node subpath exports. For example, if a library has a subpath export like `mylib/path` that is mapped to `mylib/dist/path.mjs` then the types for this can be pulled in from `mylib/dist/path.d.ts` rather than requiring the library author to create `mylib/path.d.ts`.

## ⚗️ Separate server types

We plan to improve clarity within your IDE between the 'nitro' and 'vue' part of your app, we've shipped the first part of this via a separate generated `tsconfig.json` for your [`~/server`](https://nuxt.com/docs/guide/directory-structure/server) directory ([#20559](https://github.com/nuxt/nuxt/pull/20559){rel="nofollow"}).

You can use by adding an additional `~/server/tsconfig.json` with the following content:

Although right now these values won't be respected when type checking (`nuxi typecheck`), you should get better type hints in your IDE.

Although we have not typed or documented the `build.extend` hook from Nuxt 2, we have been calling it within the webpack builder. We are now explicitly deprecating this and will remove it in a future minor version.

As usual, our recommendation for upgrading is to run:

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the unjs ecosystem.

Read the full release note on <https://github.com/nuxt/nuxt/releases/tag/v3.5.0>{rel="nofollow"}

**Examples:**

Example 1 (diff):
```diff
routeRules: {
--  '/blog/**': { swr: 3000 },
++  '/blog/**': { isr: 3000 },
}
```

Example 2 (unknown):
```unknown
You can read more about how this works [here](https://github.com/rich-harris/devalue#custom-types){rel="nofollow"}.

## 🛝 Interactive server components

This feature should be considered highly experimental, but thanks to some great work from @huang-julien we now support interactive content within server components via *slots* ([#20284](https://github.com/nuxt/nuxt/pull/20284){rel="nofollow"}).

You can follow the server component roadmap at [#19772](https://github.com/nuxt/nuxt/issues/19772){rel="nofollow"}.

## ⏰ Environment config

You can now configure fully typed, per-environment overrides in your `nuxt.config.ts`:
```

Example 3 (unknown):
```unknown
If you're authoring layers, you can also use the `$meta` key to provide metadata that you or the consumers of your layer might use.

Read more [about per-environment overrides](https://github.com/nuxt/nuxt/pull/20329){rel="nofollow"}.

## 💪 Fully typed pages

You can benefit from fully typed routing within your Nuxt app via this experimental integration with [unplugin-vue-router](https://github.com/posva/unplugin-vue-router){rel="nofollow"} - thanks to some great work from [@posva](https://github.com/posva){rel="nofollow"}!

Out of the box, this will enable typed usage of [`navigateTo`](https://nuxt.com/docs/api/utils/navigate-to), [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link), `router.push()` and more.

You can even get typed params within a page by using `const route = useRoute('route-name')`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="ts"}.

Enable this feature directly in your `nuxt.config.ts`:
```

Example 4 (unknown):
```unknown
## 🔎 'Bundler' module resolution

We now have full support within Nuxt for the `bundler` strategy of [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html){rel="nofollow"}.

We would recommend adopting this if possible. It has type support for subpath exports, for example, but more exactly matches the behaviour of build tools like Vite and Nuxt than `Node16` resolution.
```

---

## app.config.ts

**URL:** llms-txt#app.config.ts

**Contents:**
- Usage
- Typing App Config
  - App Config Input
  - App Config Output
- Merging Strategy
- Known Limitations

Nuxt provides an `app.config` config file to expose reactive configuration within your application with the ability to update it at runtime within lifecycle or using a nuxt plugin and editing it with HMR (hot-module-replacement).

You can easily provide runtime app configuration using `app.config.ts` file. It can have either of `.ts`, `.js`, or `.mjs` extensions.

::caution
Do not put any secret values inside `app.config` file. It is exposed to the user client bundle.
::

::note
When configuring a custom [`srcDir`](https://nuxt.com/docs/3.x/api/nuxt-config#srcdir), make sure to place the `app.config` file at the root of the new `srcDir` path.
::

To expose config and environment variables to the rest of your app, you will need to define configuration in `app.config` file.

We can now universally access `theme` both when server-rendering the page and in the browser using [`useAppConfig`](https://nuxt.com/docs/3.x/api/composables/use-app-config) composable.

The [`updateAppConfig`](https://nuxt.com/docs/3.x/api/utils/update-app-config) utility can be used to update the `app.config` at runtime.

::read-more{to="https://nuxt.com/docs/api/utils/update-app-config"}
Read more about the `updateAppConfig` utility.
::

Nuxt tries to automatically generate a TypeScript interface from provided app config so you won't have to type it yourself.

However, there are some cases where you might want to type it yourself. There are two possible things you might want to type.

`AppConfigInput` might be used by module authors who are declaring what valid *input* options are when setting app config. This will not affect the type of `useAppConfig()`.

### App Config Output

If you want to type the result of calling [`useAppConfig()`](https://nuxt.com/docs/3.x/api/composables/use-app-config), then you will want to extend `AppConfig`.

::warning
Be careful when typing `AppConfig` as you will overwrite the types Nuxt infers from your actually defined app config.
::

Nuxt uses a custom merging strategy for the `AppConfig` within [the layers](https://nuxt.com/docs/3.x/getting-started/layers) of your application.

This strategy is implemented using a [Function Merger](https://github.com/unjs/defu#function-merger){rel="nofollow"}, which allows defining a custom merging strategy for every key in `app.config` that has an array as value.

::note
The function merger can only be used in the extended layers and not the main `app.config` in project.
::

Here's an example of how you can use:

As of Nuxt v3.3, the `app.config.ts` file is shared with Nitro, which results in the following limitations:

1. You cannot import Vue components directly in `app.config.ts`.
2. Some auto-imports are not available in the Nitro context.

These limitations occur because Nitro processes the app config without full Vue component support.

While it's possible to use Vite plugins in the Nitro config as a workaround, this approach is not recommended:

::warning
Using this workaround may lead to unexpected behavior and bugs. The Vue plugin is one of many that are not available in the Nitro context.
::

- [Issue #19858](https://github.com/nuxt/nuxt/issues/19858){rel="nofollow"}
- [Issue #19854](https://github.com/nuxt/nuxt/issues/19854){rel="nofollow"}

::note
Nitro v3 will resolve these limitations by removing support for the app config.
You can track the progress in [this pull request](https://github.com/nitrojs/nitro/pull/2521){rel="nofollow"}.
::

**Examples:**

Example 1 (unknown):
```unknown
::caution
Do not put any secret values inside `app.config` file. It is exposed to the user client bundle.
::

::note
When configuring a custom [`srcDir`](https://nuxt.com/docs/3.x/api/nuxt-config#srcdir), make sure to place the `app.config` file at the root of the new `srcDir` path.
::

## Usage

To expose config and environment variables to the rest of your app, you will need to define configuration in `app.config` file.
```

Example 2 (unknown):
```unknown
We can now universally access `theme` both when server-rendering the page and in the browser using [`useAppConfig`](https://nuxt.com/docs/3.x/api/composables/use-app-config) composable.
```

Example 3 (unknown):
```unknown
The [`updateAppConfig`](https://nuxt.com/docs/3.x/api/utils/update-app-config) utility can be used to update the `app.config` at runtime.
```

Example 4 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/api/utils/update-app-config"}
Read more about the `updateAppConfig` utility.
::

## Typing App Config

Nuxt tries to automatically generate a TypeScript interface from provided app config so you won't have to type it yourself.

However, there are some cases where you might want to type it yourself. There are two possible things you might want to type.

### App Config Input

`AppConfigInput` might be used by module authors who are declaring what valid *input* options are when setting app config. This will not affect the type of `useAppConfig()`.
```

---

## prefetchComponents

**URL:** llms-txt#prefetchcomponents

Prefetching component downloads the code in the background, this is based on the assumption that the component will likely be used for rendering, enabling the component to load instantly if and when the user requests it. The component is downloaded and cached for anticipated future use without the user making an explicit request for it.

Use `prefetchComponents` to manually prefetch individual components that have been registered globally in your Nuxt app. By default Nuxt registers these as async components. You must use the Pascal-cased version of the component name.

::note
Current implementation behaves exactly the same as [`preloadComponents`](https://nuxt.com/docs/3.x/api/utils/preload-components) by preloading components instead of just prefetching we are working to improve this behavior.
::

::note
On server, `prefetchComponents` will have no effect.
::

**Examples:**

Example 1 (ts):
```ts
await prefetchComponents('MyGlobalComponent')

await prefetchComponents(['MyGlobalComponent1', 'MyGlobalComponent2'])
```

---

## Generates `app/plugins/analytics.ts`

**URL:** llms-txt#generates-`app/plugins/analytics.ts`

**Contents:**
- `nuxt add page`

npx nuxt add plugin analytics
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add page`
```

---

## https://github.com/actions/deploy-pages#usage

**URL:** llms-txt#https://github.com/actions/deploy-pages#usage

name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: corepack enable
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      # Pick your own package manager and build script
      - run: npm install
      - run: npx nuxt build --preset github_pages
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.output/public
  # Deployment job
  deploy:
    # Add a dependency to the build job
    needs: build
    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write      # to deploy to Pages
      id-token: write   # to verify the deployment originates from an appropriate source
    # Deploy to the github_pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    # Specify runner + deployment step
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

::read-more
---
target: _blank
to: https://nitro.unjs.io/deploy/providers/github-pages
---
Head over **Nitro documentation** to learn more about the github-pages deployment preset.
::

---

## Pages

**URL:** llms-txt#pages

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
::

::sandbox
---
branch: main
dir: examples/routing/pages
file: app.vue
repo: nuxt/examples
---
::

---

## useRequestHeader

**URL:** llms-txt#userequestheader

**Contents:**
- Example

You can use the built-in [`useRequestHeader`](https://nuxt.com/docs/3.x/api/composables/use-request-header) composable to access any incoming request header within your pages, components, and plugins.

::tip
In the browser, `useRequestHeader` will return `undefined`.
::

We can use `useRequestHeader` to easily figure out if a user is authorized or not.

The example below reads the `authorization` request header to find out if a person can access a restricted resource.

**Examples:**

Example 1 (ts):
```ts
// Get the authorization request header
const authorization = useRequestHeader('authorization')
```

---

## Nuxt API Reference

**URL:** llms-txt#nuxt-api-reference

::card-group
  :::card
  ---
  icon: i-lucide-box
  title: Components
  to: https://nuxt.com/docs/api/components/client-only
  ---
  Explore Nuxt built-in components for pages, layouts, head, and more.
  :::

:::card
  ---
  icon: i-lucide-arrow-left-right
  title: Composables
  to: https://nuxt.com/docs/api/composables/use-app-config
  ---
  Discover Nuxt composable functions for data-fetching, head management and more.
  :::

:::card
  ---
  icon: i-lucide-square-function
  title: Utils
  to: https://nuxt.com/docs/api/utils/dollarfetch
  ---
  Learn about Nuxt utility functions for navigation, error handling and more.
  :::

:::card
  ---
  icon: i-lucide-square-terminal
  title: Commands
  to: https://nuxt.com/docs/api/commands/add
  ---
  List of Nuxt CLI commands to init, analyze, build, and preview your application.
  :::

:::card
  ---
  icon: i-lucide-package
  title: Nuxt Kit
  to: https://nuxt.com/docs/api/kit/modules
  ---
  Understand Nuxt Kit utilities to create modules and control Nuxt.
  :::

:::card
  ---
  icon: i-lucide-brain
  title: Advanced
  to: https://nuxt.com/docs/api/advanced/hooks
  ---
  Go deep in Nuxt internals with Nuxt lifecycle hooks.
  :::

:::card
  ---
  icon: i-lucide-cog
  title: Nuxt Configuration
  to: https://nuxt.com/docs/api/nuxt-config
  ---
  Explore all Nuxt configuration options to customize your application.
  :::
::

---

## abortNavigation

**URL:** llms-txt#abortnavigation

**Contents:**
- Type
- Parameters
  - `err`
- Examples
  - `err` as a String
  - `err` as an Error Object

::warning
`abortNavigation` is only usable inside a [route middleware handler](https://nuxt.com/docs/3.x/guide/directory-structure/middleware).
::

- **Type**: [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error){rel="nofollow"} | `string`:br Optional error to be thrown by `abortNavigation`.

The example below shows how you can use `abortNavigation` in a route middleware to prevent unauthorized route access:

### `err` as a String

You can pass the error as a string:

### `err` as an Error Object

You can pass the error as an [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error){rel="nofollow"} object, e.g. caught by the `catch`-block:

**Examples:**

Example 1 (unknown):
```unknown
## Parameters

### `err`

- **Type**: [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error){rel="nofollow"} | `string`:br Optional error to be thrown by `abortNavigation`.

## Examples

The example below shows how you can use `abortNavigation` in a route middleware to prevent unauthorized route access:
```

Example 2 (unknown):
```unknown
### `err` as a String

You can pass the error as a string:
```

Example 3 (unknown):
```unknown
### `err` as an Error Object

You can pass the error as an [`Error`](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Error){rel="nofollow"} object, e.g. caught by the `catch`-block:
```

---

## Nuxt 3.16

**URL:** llms-txt#nuxt-3.16

**Contents:**
- ⚡️ A New New Nuxt
- 🚀 Unhead v2
- 🔧 Devtools v2 Upgrade
- ⚡️ Performance Improvements
- 🕰️ Delayed Hydration Support
- 🧩 Advanced Pages Configuration
- 🔍 Enhanced Debugging
- 🎨 Decorators Support
- 📛 Named Layer Aliases
- 🧪 Error Handling Improvements

There's a lot in this one!

Say hello to `create-nuxt`, a new tool for starting Nuxt projects (big thanks to [@devgar](https://github.com/devgar){rel="nofollow"} for donating the package name)!

It's a streamlined version of `nuxi init` - just a sixth of the size and bundled as a single file with all dependencies inlined, to get you going as fast as possible.

Starting a new project is as simple as:

![screenshot of create nuxt app](https://nuxt.com/assets/blog/create-nuxt-ascii.jpeg){.border.border-gray-200.dark:border-gray-700.rounded-lg}

Special thanks to [@cmang](https://github.com/cmang){rel="nofollow"} for the [beautiful ASCII-art](https://bsky.app/profile/durdraw.org/post/3liadod3gv22a){rel="nofollow"}. ❤️

Want to learn more about where we're headed with the Nuxt CLI? Check out our roadmap [here](https://github.com/nuxt/cli/issues/648){rel="nofollow"}, including our plans for an [interactive modules selector](https://github.com/nuxt/cli/issues/754){rel="nofollow"}.

We've upgraded to `unhead` v2, the engine behind Nuxt's `<head>` management. This major version removes deprecations and improves how context works:

- For Nuxt 3 users, we're shipping a legacy compatibility build so nothing breaks
- The context implementation is now more direct via Nuxt itself

If you're using Unhead directly in your app, keep in mind:

1. Import from Nuxt's auto-imports or `#app/composables/head` instead of `@unhead/vue`
2. Importing directly from `@unhead/vue` might lose async context

Don't worry though - we've maintained backward compatibility in Nuxt 3, so most users won't need to change anything!

If you've opted into `compatibilityVersion: 4`, check out [our upgrade guide](https://nuxt.com/docs/getting-started/upgrade#unhead-v2) for additional changes.

## 🔧 Devtools v2 Upgrade

Nuxt Devtools has leveled up to v2 ([#30889](https://github.com/nuxt/nuxt/pull/30889){rel="nofollow"})!

You'll love the new features like custom editor selection, Discovery.js for inspecting resolved configs (perfect for debugging), the return of the schema generator, and slimmer dependencies.

One of our favorite improvements is the ability to track how modules modify your Nuxt configuration - giving you X-ray vision into what's happening under the hood.

👉 Discover all the details in the [Nuxt DevTools release notes](https://github.com/nuxt/devtools/releases){rel="nofollow"}.

## ⚡️ Performance Improvements

We're continuing to make Nuxt faster, and there are a number of improvements in v3.16:

1. Using [`exsolve`](https://github.com/unjs/exsolve){rel="nofollow"} for module resolution ([#31124](https://github.com/nuxt/nuxt/pull/31124){rel="nofollow"}) along with the rest of the unjs ecosystem (nitro, c12, pkg-types, and more) - which dramatically speeds up module resolution
2. Smarter module resolution paths ([#31037](https://github.com/nuxt/nuxt/pull/31037){rel="nofollow"}) - prioritizes direct imports for better efficiency
3. Eliminated duplicated Nitro alias resolution ([#31088](https://github.com/nuxt/nuxt/pull/31088){rel="nofollow"}) - leaner file handling
4. Streamlined `loadNuxt` by skipping unnecessary resolution steps ([#31176](https://github.com/nuxt/nuxt/pull/31176){rel="nofollow"}) - faster startups
5. Adopt `oxc-parser` for parsing in Nuxt plugins ([#30066](https://github.com/nuxt/nuxt/pull/30066){rel="nofollow"})

All these speed boosts happen automatically - no configuration needed!

Shout out to [CodSpeed](https://codspeed.io/){rel="nofollow"} with [Vitest benchmarking](https://vitest.dev/guide/features.html#benchmarking){rel="nofollow"} to measure these improvements in CI - it has been really helpful.

To add some anecdotal evidence, my personal site at [roe.dev](https://github.com/danielroe/roe.dev){rel="nofollow"} loads 32% faster with v3.16, and [nuxt.com](https://github.com/nuxt/nuxt.com){rel="nofollow"} is 28% faster. I hope you see similar results! ⚡️

## 🕰️ Delayed Hydration Support

We're very pleased to bring you native delayed/lazy hydration support ([#26468](https://github.com/nuxt/nuxt/pull/26468){rel="nofollow"})! This lets you control exactly when components hydrate, which can improve initial load performance and time-to-interactive. We're leveraging Vue's built-in hydration strategies - [check them out in the Vue docs](https://vuejs.org/guide/components/async.html#lazy-hydration){rel="nofollow"}.

You can also listen for when hydration happens with the `@hydrated` event:

Learn more about lazy hydration in [our components documentation](https://nuxt.com/docs/guide/directory-structure/components#delayed-or-lazy-hydration).

## 🧩 Advanced Pages Configuration

You can now fine-tune which files Nuxt scans for pages ([#31090](https://github.com/nuxt/nuxt/pull/31090){rel="nofollow"}), giving you more control over your project structure:

## 🔍 Enhanced Debugging

We've made debugging with the `debug` option more flexible! Now you can enable just the debug logs you need ([#30578](https://github.com/nuxt/nuxt/pull/30578){rel="nofollow"}):

Or keep it simple with `debug: true` to enable all these debugging features.

## 🎨 Decorators Support

For the decorator fans out there (whoever you are!), we've added experimental support ([#27672](https://github.com/nuxt/nuxt/pull/27672){rel="nofollow"}). As with all experimental features, feedback is much appreciated.

## 📛 Named Layer Aliases

It's been much requested, and it's here! Auto-scanned local layers (from your `~~/layers` directory) now automatically create aliases. You can access your `~~/layers/test` layer via `#layers/test` ([#30948](https://github.com/nuxt/nuxt/pull/30948){rel="nofollow"}) - no configuration needed.

If you want named aliases for other layers, you can add a name to your layer configuration:

This creates the alias `#layers/example-layer` pointing to your layer - making imports cleaner and more intuitive.

## 🧪 Error Handling Improvements

We've greatly improved error messages and source tracking ([#31144](https://github.com/nuxt/nuxt/pull/31144){rel="nofollow"}):

1. Better warnings for undefined `useAsyncData` calls with precise file location information
2. Error pages now appear correctly on island page errors ([#31081](https://github.com/nuxt/nuxt/pull/31081){rel="nofollow"})

Plus, we're now using Nitro's beautiful error handling (powered by [youch](https://github.com/poppinss/youch){rel="nofollow"}) to provide more helpful error messages in the terminal, complete with stacktrace support.

Nitro now also automatically applies source maps without requiring extra Node options, and we set appropriate security headers when rendering error pages.

## 📦 Module Development Improvements

For module authors, we've added the ability to augment Nitro types with `addTypeTemplate` ([#31079](https://github.com/nuxt/nuxt/pull/31079){rel="nofollow"}):

## ⚙️ Nitro v2.11 Upgrade

We've upgraded to Nitro v2.11. There are so many improvements - more than I can cover in these brief release notes.

👉 Check out all the details in the [Nitro v2.11.0 release notes](https://github.com/nitrojs/nitro/releases/tag/v2.11.0){rel="nofollow"}.

## 📦 New `unjs` Major Versions

This release includes several major version upgrades from the unjs ecosystem, focused on performance and smaller bundle sizes through ESM-only distributions:

- unenv upgraded to v2 (full rewrite)
- db0 upgraded to v0.3 (ESM-only, native node\:sql, improvements)
- ohash upgraded to v2 (ESM-only, native node\:crypto support, much faster)
- untyped upgraded to v2 (ESM-only, smaller install size)
- unimport upgraded to v4 (improvements)
- c12 upgraded to v3 (ESM-only)
- pathe upgraded to v2 (ESM-only)
- cookie-es upgraded to v2 (ESM-only)
- esbuild upgraded to v0.25
- chokidar upgraded to v4

As usual, our recommendation for upgrading is to run:

This refreshes your lockfile and pulls in all the latest dependencies that Nuxt relies on, especially from the unjs ecosystem.

## Full release notes

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt/nuxt/releases/tag/v3.16.0
---
Read the full release notes of Nuxt `v3.16.0`.
::

A huge thank you to everyone who's been a part of this release. ❤️

I'm aware there have been lots of very significant changes in this release - please don't hesitate to let us know if you have any feedback or issues! 🙏

**Examples:**

Example 1 (bash):
```bash
npm create nuxt
```

Example 2 (ts):
```ts
// Nuxt now re-exports composables while properly resolving the context
export function useHead(input, options = {}) {
  const unhead = injectHead(options.nuxt)
  return head(input, { head: unhead, ...options })
}
```

Example 3 (vue):
```vue
<template>
  <!-- Hydrate when component becomes visible in viewport -->
  <LazyExpensiveComponent hydrate-on-visible />
  
  <!-- Hydrate when browser is idle -->
  <LazyHeavyComponent hydrate-on-idle />
  
  <!-- Hydrate on interaction (mouseover in this case) -->
  <LazyDropdown hydrate-on-interaction="mouseover" />
  
  <!-- Hydrate when media query matches -->
  <LazyMobileMenu hydrate-on-media-query="(max-width: 768px)" />
  
  <!-- Hydrate after a specific delay in milliseconds -->
  <LazyFooter :hydrate-after="2000" />
</template>
```

Example 4 (vue):
```vue
<LazyComponent hydrate-on-visible @hydrated="onComponentHydrated" />
```

---

## <NuxtRouteAnnouncer>

**URL:** llms-txt#<nuxtrouteannouncer>

**Contents:**
- Usage
- Slots
- Props

::important
This component is available in Nuxt v3.12+.
::

Add `<NuxtRouteAnnouncer/>` in your [`app.vue`](https://nuxt.com/docs/3.x/guide/directory-structure/app) or [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) to enhance accessibility by informing assistive technologies about page title changes. This ensures that navigational changes are announced to users relying on screen readers.

You can pass custom HTML or components through the route announcer's default slot.

- `atomic`: Controls if screen readers only announce changes or the entire content. Set to true for full content readouts on updates, false for changes only. (default `false`)
- `politeness`: Sets the urgency for screen reader announcements: `off` (disable the announcement), `polite` (waits for silence), or `assertive` (interrupts immediately). (default `polite`)

::callout
This component is optional. :br
To achieve full customization, you can implement your own one based on [its source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/nuxt-route-announcer.ts){rel="nofollow"}.
::

::callout
You can hook into the underlying announcer instance using [the `useRouteAnnouncer` composable](https://nuxt.com/docs/3.x/api/composables/use-route-announcer), which allows you to set a custom announcement message.
::

**Examples:**

Example 1 (unknown):
```unknown
## Slots

You can pass custom HTML or components through the route announcer's default slot.
```

---

## This will override the value of apiSecret

**URL:** llms-txt#this-will-override-the-value-of-apisecret

**Contents:**
- App Configuration
- `runtimeConfig` vs. `app.config`
- External Configuration Files
- Vue Configuration
  - With Vite
  - With webpack
  - Enabling Experimental Vue Features

NUXT_API_SECRET=api_secret_token
vue [pages/index.vue]
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
ts [app.config.ts]
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
})
vue [pages/index.vue]
<script setup lang="ts">
const appConfig = useAppConfig()
</script>
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
})
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
})
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  vue: {
    propsDestructure: true,
  },
})
```

#### experimental `reactivityTransform` migration from Vue 3.4 and Nuxt 3.9

Since Nuxt 3.9 and Vue 3.4, `reactivityTransform` has been moved from Vue to Vue Macros which has a [Nuxt integration](https://vue-macros.dev/guide/nuxt-integration.html){rel="nofollow"}.

::read-more{to="https://nuxt.com/docs/api/configuration/nuxt-config#vue-1"}
::

**Examples:**

Example 1 (unknown):
```unknown
::

These variables are exposed to the rest of your application using the [`useRuntimeConfig()`](https://nuxt.com/docs/3.x/api/composables/use-runtime-config) composable.
```

Example 2 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

## App Configuration

The `app.config.ts` file, located in the source directory (by default the root of the project), is used to expose public variables that can be determined at build time. Contrary to the `runtimeConfig` option, these cannot be overridden using environment variables.

A minimal configuration file exports the `defineAppConfig` function containing an object with your configuration. The `defineAppConfig` helper is globally available without import.
```

Example 3 (unknown):
```unknown
These variables are exposed to the rest of your application using the [`useAppConfig`](https://nuxt.com/docs/3.x/api/composables/use-app-config) composable.
```

Example 4 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/guide/directory-structure/app-config"}
::

## `runtimeConfig` vs. `app.config`

As stated above, `runtimeConfig` and `app.config` are both used to expose variables to the rest of your application. To determine whether you should use one or the other, here are some guidelines:

- `runtimeConfig`: Private or public tokens that need to be specified after build using environment variables.
- `app.config`: Public tokens that are determined at build time, website configuration such as theme variant, title and any project config that are not sensitive.

| Feature                   | `runtimeConfig` | `app.config` |
| ------------------------- | --------------- | ------------ |
| Client Side               | Hydrated        | Bundled      |
| Environment Variables     | ✅ Yes           | ❌ No         |
| Reactive                  | ✅ Yes           | ✅ Yes        |
| Types support             | ✅ Partial       | ✅ Yes        |
| Configuration per Request | ❌ No            | ✅ Yes        |
| Hot Module Replacement    | ❌ No            | ✅ Yes        |
| Non primitive JS types    | ❌ No            | ✅ Yes        |

## External Configuration Files

Nuxt uses [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) file as the single source of truth for configurations and skips reading external configuration files. During the course of building your project, you may have a need to configure those. The following table highlights common configurations and, where applicable, how they can be configured with Nuxt.

| Name                                              | Config File             | How To Configure                                                                          |
| ------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------- |
| [Nitro](https://nitro.build){rel="nofollow"}      | ~~`nitro.config.ts`~~   | Use [`nitro`](https://nuxt.com/docs/3.x/api/nuxt-config#nitro) key in `nuxt.config`       |
| [PostCSS](https://postcss.org){rel="nofollow"}    | ~~`postcss.config.js`~~ | Use [`postcss`](https://nuxt.com/docs/3.x/api/nuxt-config#postcss) key in `nuxt.config`   |
| [Vite](https://vite.dev){rel="nofollow"}          | ~~`vite.config.ts`~~    | Use [`vite`](https://nuxt.com/docs/3.x/api/nuxt-config#vite) key in `nuxt.config`         |
| [webpack](https://webpack.js.org){rel="nofollow"} | ~~`webpack.config.ts`~~ | Use [`webpack`](https://nuxt.com/docs/3.x/api/nuxt-config#webpack-1) key in `nuxt.config` |

Here is a list of other common config files:

| Name                                                         | Config File           | How To Configure                                                                              |
| ------------------------------------------------------------ | --------------------- | --------------------------------------------------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org){rel="nofollow"} | `tsconfig.json`       | [More Info](https://nuxt.com/docs/3.x/guide/concepts/typescript#nuxttsconfigjson)             |
| [ESLint](https://eslint.org){rel="nofollow"}                 | `eslint.config.js`    | [More Info](https://eslint.org/docs/latest/use/configure/configuration-files){rel="nofollow"} |
| [Prettier](https://prettier.io){rel="nofollow"}              | `prettier.config.js`  | [More Info](https://prettier.io/docs/en/configuration.html){rel="nofollow"}                   |
| [Stylelint](https://stylelint.io){rel="nofollow"}            | `stylelint.config.js` | [More Info](https://stylelint.io/user-guide/configure){rel="nofollow"}                        |
| [TailwindCSS](https://tailwindcss.com){rel="nofollow"}       | `tailwind.config.js`  | [More Info](https://tailwindcss.nuxtjs.org/tailwindcss/configuration){rel="nofollow"}         |
| [Vitest](https://vitest.dev){rel="nofollow"}                 | `vitest.config.ts`    | [More Info](https://vitest.dev/config/){rel="nofollow"}                                       |

## Vue Configuration

### With Vite

If you need to pass options to `@vitejs/plugin-vue` or `@vitejs/plugin-vue-jsx`, you can do this in your `nuxt.config` file.

- `vite.vue` for `@vitejs/plugin-vue`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue){rel="nofollow"}.
- `vite.vueJsx` for `@vitejs/plugin-vue-jsx`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx){rel="nofollow"}.
```

---

## Generates `app/pages/about.vue`

**URL:** llms-txt#generates-`app/pages/about.vue`

npx nuxt add page about
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown

```

---

## shared

**URL:** llms-txt#shared

**Contents:**
- Usage
- How Files Are Scanned

The `shared/` directory allows you to share code that can be used in both the Vue app and the Nitro server.

::note
The `shared/` directory is available in Nuxt v3.14+.
::

::important
Code in the `shared/` directory cannot import any Vue or Nitro code.
::

::warning
Auto-imports are not enabled by default in Nuxt v3 to prevent breaking changes in existing projects.

To use these auto-imported utils and types, you must first [set `future.compatibilityVersion: 4` in your `nuxt.config.ts`](https://nuxt.com/docs/3.x/getting-started/upgrade#opting-in-to-nuxt-4).
::

::video-accordion
---
title: Watch a video from Vue School on sharing utils and types between app and server
video-id: nnAR-MO3q5M
---
::

**Method 1:** Named export

**Method 2:** Default export

You can now use [auto-imported](https://nuxt.com/docs/3.x/guide/directory-structure/shared#auto-imports) utilities in your Nuxt app and `server/` directory.

## How Files Are Scanned

Only files in the `shared/utils/` and `shared/types/` directories will be auto-imported. Files nested within subdirectories of these directories will not be auto-imported unless you add these directories to `imports.dirs` and `nitro.imports.dirs`.

::tip
The way `shared/utils` and `shared/types` auto-imports work and are scanned is identical to the [`composables/`](https://nuxt.com/docs/3.x/guide/directory-structure/composables) and [`utils/`](https://nuxt.com/docs/3.x/guide/directory-structure/utils) directories.
::

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/composables#how-files-are-scanned
---
::

Any other files you create in the `shared/` folder must be manually imported using the `#shared` alias (automatically configured by Nuxt):

This alias ensures consistent imports across your application, regardless of the importing file's location.

::read-more{to="https://nuxt.com/docs/guide/concepts/auto-imports"}
::

**Examples:**

Example 1 (unknown):
```unknown
**Method 2:** Default export
```

Example 2 (unknown):
```unknown
You can now use [auto-imported](https://nuxt.com/docs/3.x/guide/directory-structure/shared#auto-imports) utilities in your Nuxt app and `server/` directory.
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
## How Files Are Scanned

Only files in the `shared/utils/` and `shared/types/` directories will be auto-imported. Files nested within subdirectories of these directories will not be auto-imported unless you add these directories to `imports.dirs` and `nitro.imports.dirs`.

::tip
The way `shared/utils` and `shared/types` auto-imports work and are scanned is identical to the [`composables/`](https://nuxt.com/docs/3.x/guide/directory-structure/composables) and [`utils/`](https://nuxt.com/docs/3.x/guide/directory-structure/utils) directories.
::

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/composables#how-files-are-scanned
---
::
```

---

## prerenderRoutes

**URL:** llms-txt#prerenderroutes

When prerendering, you can hint to Nitro to prerender additional paths, even if their URLs do not show up in the HTML of the generated page.

::important
`prerenderRoutes` can only be called within the [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context).
::

::note
`prerenderRoutes` has to be executed during prerendering. If the `prerenderRoutes` is used in dynamic pages/routes which are not prerendered, then it will not be executed.
::

::note
In the browser, or if called outside prerendering, `prerenderRoutes` will have no effect.
::

You can even prerender API routes which is particularly useful for full statically generated sites (SSG) because you can then `$fetch` data as if you have an available server!

::warning
Prerendered API routes in production may not return the expected response headers, depending on the provider you deploy to. For example, a JSON response might be served with an `application/octet-stream` content type.
Always manually set `responseType` when fetching prerendered API routes.
::

**Examples:**

Example 1 (ts):
```ts
const route = useRoute()

prerenderRoutes('/')
prerenderRoutes(['/', '/about'])
```

Example 2 (ts):
```ts
prerenderRoutes('/api/content/article/name-of-article')

// Somewhere later in App
const articleContent = await $fetch('/api/content/article/name-of-article', {
  responseType: 'json',
})
```

---

## Plugins and Middleware

**URL:** llms-txt#plugins-and-middleware

**Contents:**
- Plugins
  - Migration
- Route Middleware
  - Migration

Plugins now have a different format, and take only one argument (`nuxtApp`).

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

::read-more{to="https://nuxt.com/docs/api/composables/use-nuxt-app"}
Read more about the format of `nuxtApp`.
::

1. Migrate your plugins to use the `defineNuxtPlugin` helper function.
2. Remove any entries in your `nuxt.config` plugins array that are located in your `plugins/` folder. All files in this directory at the top level (and any index files in any subdirectories) will be automatically registered. Instead of setting `mode` to `client` or `server`, you can indicate this in the file name. For example, `~/plugins/my-plugin.client.ts` will only be loaded on client-side.

Route middleware has a different format.

Much like Nuxt 2, route middleware placed in your `~/middleware` folder is automatically registered. You can then specify it by name in a component. However, this is done with `definePageMeta` rather than as a component option.

`navigateTo` is one of a number of route helper functions.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

1. Migrate your route middleware to use the `defineNuxtRouteMiddleware` helper function.
2. Any global middleware (such as in your `nuxt.config`) can be placed in your `~/middleware` folder with a `.global` extension, for example `~/middleware/auth.global.ts`.

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

::read-more{to="https://nuxt.com/docs/api/composables/use-nuxt-app"}
Read more about the format of `nuxtApp`.
::

### Migration

1. Migrate your plugins to use the `defineNuxtPlugin` helper function.
2. Remove any entries in your `nuxt.config` plugins array that are located in your `plugins/` folder. All files in this directory at the top level (and any index files in any subdirectories) will be automatically registered. Instead of setting `mode` to `client` or `server`, you can indicate this in the file name. For example, `~/plugins/my-plugin.client.ts` will only be loaded on client-side.

## Route Middleware

Route middleware has a different format.

::code-group
```

Example 3 (unknown):
```unknown

```

---

## Introducing Smart Prefetching

**URL:** llms-txt#introducing-smart-prefetching

**Contents:**
- Introducing Smart prefetching ⚡️

## Introducing Smart prefetching ⚡️

Starting from [Nuxt v2.4.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.4.0){rel="nofollow"}, Nuxt will automagically prefetch the code-splitted pages linked with `<nuxt-link>` when visible in the viewport **by default**. This hugely improves the end user performances, inspired by [quicklink](https://github.com/GoogleChromeLabs/quicklink){rel="nofollow"}.

![nuxt-prefetch-comparison](https://nuxt.com/assets/blog/nuxt-prefetch-comparison.gif){.rounded-lg.border.border-gray-700}

Demos are online and we recommend you to try it out to feel the difference:

- No prefetching (v2.3): <https://nuxt-no-prefetch.surge.sh>{rel="nofollow"}
- With prefetching (v2.4): <https://nuxt-prefetch.surge.sh>{rel="nofollow"}

You can learn more about this feature in the [`<nuxt-link>`](https://v2.nuxt.com/docs/features/nuxt-components#the-nuxtlink-component){rel="nofollow"} section of the documentation.

---

## <NuxtIsland>

**URL:** llms-txt#<nuxtisland>

**Contents:**
- Props
- Slots
- Ref
- Events

When rendering an island component, the content of the island component is static, thus no JS is downloaded client-side.

Changing the island component props triggers a refetch of the island component to re-render it again.

::note
Global styles of your application are sent with the response.
::

::tip
Server only components use `<NuxtIsland>` under the hood
::

- `name` : Name of the component to render.

- **type**: `string`
  - **required**
- `lazy`: Make the component non-blocking.

- **type**: `boolean`
  - **default**: `false`
- `props`: Props to send to the component to render.

- **type**: `Record<string, any>`
- `source`: Remote source to call the island to render.

- **type**: `string`
- **dangerouslyLoadClientComponents**: Required to load components from a remote source.

- **type**: `boolean`
  - **default**: `false`

::note
Remote islands need `experimental.componentIslands` to be `'local+remote'` in your `nuxt.config`.
It is strongly discouraged to enable `dangerouslyLoadClientComponents` as you can't trust a remote server's javascript.
::

::note
By default, component islands are scanned from the `~/components/islands/` directory. So the `~/components/islands/MyIsland.vue` component could be rendered with `<NuxtIsland name="MyIsland" />`.
::

Slots can be passed to an island component if declared.

Every slot is interactive since the parent component is the one providing it.

Some slots are reserved to `NuxtIsland` for special cases.

- `#fallback`: Specify the content to be rendered before the island loads (if the component is lazy) or if `NuxtIsland` fails to fetch the component.

- `refresh()`
  - **type**: `() => Promise<void>`
  - **description**: force refetch the server component by refetching it.

- `error`
  - **parameters**:

- **type**: `unknown`
  - **description**: emitted when when `NuxtIsland` fails to fetch the new island.

---

## Generates `server/api/hello.ts`

**URL:** llms-txt#generates-`server/api/hello.ts`

**Contents:**
- `nuxt add layer`

npx nuxt add api hello
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add layer`
```

---

## Generates `middleware/auth.ts`

**URL:** llms-txt#generates-`middleware/auth.ts`

**Contents:**
- `nuxt add api`

npx nuxt add middleware auth
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add api`

- Modifier flags: `--method` (can accept `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put` or `trace`) or alternatively you can directly use `--get`, `--post`, etc.
```

---

## Server Engine

**URL:** llms-txt#server-engine

**Contents:**
- API Layer
- Direct API Calls
- Typed API Routes
- Standalone Server

While building Nuxt, we created a new server engine: [Nitro](https://nitro.build/){rel="nofollow"}.

It is shipped with many features:

- Cross-platform support for Node.js, browsers, service workers and more.
- Serverless support out-of-the-box.
- API routes support.
- Automatic code-splitting and async-loaded chunks.
- Hybrid mode for static + serverless sites.
- Development server with hot module reloading.

Server [API endpoints](https://nuxt.com/docs/3.x/guide/directory-structure/server#api-routes) and [Middleware](https://nuxt.com/docs/3.x/guide/directory-structure/server#server-middleware) are added by Nitro that internally uses [h3](https://github.com/h3js/h3){rel="nofollow"}.

Key features include:

- Handlers can directly return objects/arrays for an automatically-handled JSON response
- Handlers can return promises, which will be awaited (`res.end()` and `next()` are also supported)
- Helper functions for body parsing, cookie handling, redirects, headers and more

Check out [the h3 docs](https://github.com/h3js/h3){rel="nofollow"} for more information.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/server#server-routes
---
Learn more about the API layer in the `server/` directory.
::

Nitro allows 'direct' calling of routes via the globally-available [`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch) helper. This will make an API call to the server if run on the browser, but will directly call the relevant function if run on the server, **saving an additional API call**.

[`$fetch`](https://nuxt.com/docs/3.x/api/utils/dollarfetch) API is using [ofetch](https://github.com/unjs/ofetch){rel="nofollow"}, with key features including:

- Automatic parsing of JSON responses (with access to raw response if needed)
- Request body and params are automatically handled, with correct `Content-Type` headers

For more information on `$fetch` features, check out [ofetch](https://github.com/unjs/ofetch){rel="nofollow"}.

When using API routes (or middleware), Nitro will generate typings for these routes as long as you are returning a value instead of using `res.end()` to send a response.

You can access these types when using [`$fetch()`](https://nuxt.com/docs/3.x/api/utils/dollarfetch) or [`useFetch()`](https://nuxt.com/docs/3.x/api/composables/use-fetch).

Nitro produces a standalone server dist that is independent of `node_modules`.

The server in Nuxt 2 is not standalone and requires part of Nuxt core to be involved by running `nuxt start` (with the [`nuxt-start`](https://www.npmjs.com/package/nuxt-start){rel="nofollow"} or [`nuxt`](https://www.npmjs.com/package/nuxt){rel="nofollow"} distributions) or custom programmatic usage, which is fragile and prone to breakage and not suitable for serverless and service worker environments.

Nuxt generates this dist when running `nuxt build` into a [`.output`](https://nuxt.com/docs/3.x/guide/directory-structure/output) directory.

The output contains runtime code to run your Nuxt server in any environment (including experimental browser service workers!) and serve your static files, making it a true hybrid framework for the JAMstack. In addition, Nuxt implements a native storage layer, supporting multi-source drivers and local assets.

::read-more
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nitrojs/nitro
---
Read more about Nitro engine on GitHub.
::

---

## Using pinned version due to https://github.com/codemod-com/codemod/issues/1710

**URL:** llms-txt#using-pinned-version-due-to-https://github.com/codemod-com/codemod/issues/1710

**Contents:**
  - New Directory Structure
  - Singleton Data Fetching Layer
  - Corrected Module Loading Order in Layers
  - Deduplication of Route Metadata
  - Normalized Component Names
  - Unhead v2
  - New DOM Location for SPA Loading Screen
  - Parsed `error.data`
  - More Granular Inline Styles
  - Scan Page Meta After Resolution

bun x codemod@0.18.7 nuxt/4/migration-recipe
sh
.output/
.nuxt/
app/
  assets/
  components/
  composables/
  layouts/
  middleware/
  pages/
  plugins/
  utils/
  app.config.ts
  app.vue
  router.options.ts
content/
layers/
modules/
node_modules/
public/
shared/
server/
  api/
  middleware/
  plugins/
  routes/
  utils/
nuxt.config.ts
ts [nuxt.config.ts]
export default defineNuxtConfig({
  // This reverts the new srcDir default from `app` back to your root directory
  srcDir: '.',
  // This specifies the directory prefix for `app/router.options.ts` and `app/spa-loading-template.html`
  dir: {
    app: 'app',
  },
})
ts
   // This will now trigger a warning
   const { data: users1 } = useAsyncData('users', () => $fetch('/api/users'), { deep: false })
   const { data: users2 } = useAsyncData('users', () => $fetch('/api/users'), { deep: true })
   ts [composables/useUserData.ts]
   export function useUserData (userId: string) {
     return useAsyncData(
       `user-${userId}`,
       () => fetchUser(userId),
       {
         deep: true,
         transform: user => ({ ...user, lastAccessed: new Date() }),
       },
     )
   }
   diff
   useAsyncData('key', fetchFunction, {
   -  getCachedData: (key, nuxtApp) => {
   -    return cachedData[key]
   -  }
   +  getCachedData: (key, nuxtApp, ctx) => {
   +    // ctx.cause - can be 'initial' | 'refresh:hook' | 'refresh:manual' | 'watch'
   +    
   +    // Example: Don't use cache on manual refresh
   +    if (ctx.cause === 'refresh:manual') return undefined
   +    
   +    return cachedData[key]
   +  }
   })
   ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    granularCachedData: false,
    purgeCachedData: false,
  },
})
ts
// Layer: my-layer/nuxt.config.ts
export default defineNuxtConfig({
  modules: ['layer-module-1', 'layer-module-2'],
})

// Project: nuxt.config.ts
export default defineNuxtConfig({
  extends: ['./my-layer'],
  modules: ['project-module-1', 'project-module-2'],
})

// Loading order (corrected):
// 1. layer-module-1
// 2. layer-module-2
// 3. project-module-1 (can override layer modules)
// 4. project-module-2 (can override layer modules)
diff
  const route = useRoute()
  
- console.log(route.meta.name)
+ console.log(route.name)
bash [Directory structure]
├─ components/
├─── SomeFolder/
├───── MyComponent.vue
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    normalizeComponentNames: false,
  },
})
diff
useHead({
  meta: [{ 
    name: 'description', 
    // meta tags don't need a vmid, or a key    
-   vmid: 'description' 
-   hid: 'description'
  }]
})
ts
import { AliasSortingPlugin, TemplateParamsPlugin } from '@unhead/vue/plugins'

export default defineNuxtPlugin({
  setup () {
    const unhead = injectHead()
    unhead.use(TemplateParamsPlugin)
    unhead.use(AliasSortingPlugin)
  },
})
diff
-import { useHead } from '@unhead/vue'
+import { useHead } from '#imports'
ts
export default defineNuxtConfig({
  unhead: {
    legacy: true,
  },
})
html
<div id="__nuxt">
  <!-- spa loading template -->
</div>
html
<div id="__nuxt"></div>
<!-- spa loading template -->
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    spaLoadingTemplateLocation: 'within',
  },
})
diff
  <script setup lang="ts">
  import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
  })

- const data = JSON.parse(error.data)
+ const data = error.data
  </script>
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    parseErrorData: false,
  },
})
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  features: {
    inlineStyles: true,
  },
})
diff
  export default defineNuxtConfig({
    hooks: {
-     'pages:extend'(pages) {
+     'pages:resolved'(pages) {
        const myPage = pages.find(page => page.path === '/')
        myPage.meta ||= {}
        myPage.meta.layout = 'overridden-layout'
      }
    }
  })
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    scanPageMeta: true,
  },
})
ts [app/pages/test/[slug\\].vue]
// This would be unsafe in a dynamic page (e.g. `[slug].vue`) because the route slug makes a difference
// to the data fetched, but Nuxt can't know that because it's not reflected in the key.
const route = useRoute()
const { data } = await useAsyncData(async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
// Instead, you should use a key that uniquely identifies the data fetched.
const { data } = await useAsyncData(route.params.slug, async () => {
  return await $fetch(`/api/my-page/${route.params.slug}`)
})
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    sharedPrerenderData: false,
  },
})
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    defaults: {
      useAsyncData: {
        value: 'null',
        errorValue: 'null',
      },
    },
  },
})
ts [app.vue] twoslash
// @errors: 2322
const { refresh } = await useAsyncData(() => Promise.resolve({ message: 'Hello, Nuxt!' }))

async function refreshData () {
  await refresh({ dedupe: true })
}
diff
  const { refresh } = await useAsyncData(async () => ({ message: 'Hello, Nuxt 3!' }))
  
  async function refreshData () {
-   await refresh({ dedupe: true })
+   await refresh({ dedupe: 'cancel' })

-   await refresh({ dedupe: false })
+   await refresh({ dedupe: 'defer' })
  }
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    resetAsyncDataToUndefined: true,
  },
})
diff
  <template>
-   <div v-if="!pending">
+   <div v-if="status === 'success'">
      <p>Data: {{ data }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  <script setup lang="ts">
  const { data, pending, execute, status } = await useAsyncData(() => fetch('/api/data'), {
    immediate: false
  })
  onMounted(() => execute())
  </script>
ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    pendingWhenIdle: true,
  },
})
diff
  const id = ref('123')
  const { data, execute } = await useFetch('/api/test', {
    query: { id },
    immediate: false
  )
+ watch(id, () => execute(), { once: true })
ts
// Or globally in your Nuxt config
export default defineNuxtConfig({
  experimental: {
    alwaysRunFetchOnKeyChange: true,
  },
})
diff
   - const { data } = useFetch('/api/test')
   + const { data } = useFetch('/api/test', { deep: true })
   ts [nuxt.config.ts] twoslash
   export default defineNuxtConfig({
     experimental: {
       defaults: {
         useAsyncData: {
           deep: true,
         },
       },
     },
   })
   diff
+ import { relative, resolve } from 'node:fs'
  // ...
  nuxt.hook('builder:watch', async (event, path) => {
+   path = relative(nuxt.options.srcDir, resolve(nuxt.options.srcDir, path))
    // ...
  })
diff
- console.log(window.__NUXT__)
+ console.log(useNuxtApp().payload)
ts
export default defineNuxtConfig({
  hooks: {
    'app:resolve' (app) {
      app.middleware = app.middleware.filter(mw => !/\/index\.[^/]+$/.test(mw.path))
    },
  },
})
diff
+ import { readFileSync } from 'node:fs'
+ import { template } from 'es-toolkit/compat'
  // ...
  addTemplate({
    fileName: 'appinsights-vue.js'
    options: { /* some options */ },
-   src: resolver.resolve('./runtime/plugin.ejs'),
+   getContents({ options }) {
+     const contents = readFileSync(resolver.resolve('./runtime/plugin.ejs'), 'utf-8')
+     return template(contents)({ options })
+   },
  })
ts
import { genDynamicImport, genImport, genSafeVariableName } from 'knitwork'

const serialize = (data: any) => JSON.stringify(data, null, 2).replace(/"\{(.+)\}"(?=,?$)/gm, r => JSON.parse(r).replace(/^\{(.*)\}$/, '$1'))

const importSources = (sources: string | string[], { lazy = false } = {}) => {
  return toArray(sources).map((src) => {
    if (lazy) {
      return `const ${genSafeVariableName(src)} = ${genDynamicImport(src, { comment: `webpackChunkName: ${JSON.stringify(src)}` })}`
    }
    return genImport(src, genSafeVariableName(src))
  }).join('\n')
}

const importName = genSafeVariableName
ts
   export default defineNuxtConfig({
     typescript: {
       tsConfig: {
         compilerOptions: {
           noUncheckedIndexedAccess: false,
         },
       },
     },
   })
   json
   {
     "files": [],
     "references": [
       { "path": "./.nuxt/tsconfig.app.json" },
       { "path": "./.nuxt/tsconfig.server.json" },
       { "path": "./.nuxt/tsconfig.shared.json" },
       { "path": "./.nuxt/tsconfig.node.json" }
     ]
   }
   diff
   - "typecheck": "nuxt prepare && vue-tsc --noEmit"
   + "typecheck": "nuxt prepare && vue-tsc -b --noEmit"
   ts
   export default defineNuxtConfig({
     typescript: {
       // Customize app/server TypeScript config
       tsConfig: {
         compilerOptions: {
           strict: true,
         },
       },
       // Customize build-time TypeScript config
       nodeTsConfig: {
         compilerOptions: {
           strict: true,
         },
       },
     },
   })
   diff
export default defineNuxtConfig({
- generate: {
-   exclude: ['/admin', '/private'],
-   routes: ['/sitemap.xml', '/robots.txt']
- }
+ nitro: {
+   prerender: {
+     ignore: ['/admin', '/private'],
+     routes: ['/sitemap.xml', '/robots.txt']
+   }
+ }
})
```

::read-more{to="https://nitro.build/config#prerender"}
Read more about Nitro's prerender configuration options.
::

## Nuxt 2 vs. Nuxt 3+

In the table below, there is a quick comparison between 3 versions of Nuxt:

| Feature / Version       | Nuxt 2     | Nuxt Bridge | Nuxt 3+    |
| ----------------------- | ---------- | ----------- | ---------- |
| Vue                     | 2          | 2           | 3          |
| Stability               | 😊 Stable  | 😊 Stable   | 😊 Stable  |
| Performance             | 🏎 Fast    | ✈️ Faster   | 🚀 Fastest |
| Nitro Engine            | ❌          | ✅           | ✅          |
| ESM support             | 🌙 Partial | 👍 Better   | ✅          |
| TypeScript              | ☑️ Opt-in  | 🚧 Partial  | ✅          |
| Composition API         | ❌          | 🚧 Partial  | ✅          |
| Options API             | ✅          | ✅           | ✅          |
| Components Auto Import  | ✅          | ✅           | ✅          |
| `<script setup>` syntax | ❌          | 🚧 Partial  | ✅          |
| Auto Imports            | ❌          | ✅           | ✅          |
| webpack                 | 4          | 4           | 5          |
| Vite                    | ⚠️ Partial | 🚧 Partial  | ✅          |
| Nuxt CLI                | ❌ Old      | ✅ nuxt      | ✅ nuxt     |
| Static sites            | ✅          | ✅           | ✅          |

The migration guide provides a step-by-step comparison of Nuxt 2 features to Nuxt 3+ features and guidance to adapt your current application.

::read-more{to="https://nuxt.com/docs/migration/overview"}
Check out the **guide to migrating from Nuxt 2 to Nuxt 3**.
::

## Nuxt 2 to Nuxt Bridge

If you prefer to progressively migrate your Nuxt 2 application to Nuxt 3, you can use Nuxt Bridge. Nuxt Bridge is a compatibility layer that allows you to use Nuxt 3+ features in Nuxt 2 with an opt-in mechanism.

::read-more{to="https://nuxt.com/docs/bridge/overview"}
**Migrate from Nuxt 2 to Nuxt Bridge**
::

**Examples:**

Example 1 (unknown):
```unknown
::

This command will execute all codemods in sequence, with the option to deselect any that you do not wish to run. Each codemod is also listed below alongside its respective change and can be executed independently.

### New Directory Structure

🚦 **Impact Level**: Significant

Nuxt now defaults to a new directory structure, with backwards compatibility (so if Nuxt detects you are using the old structure, such as with a top-level `pages/` directory, this new structure will not apply).

👉 [See full RFC](https://github.com/nuxt/nuxt/issues/26444){rel="nofollow"}

#### What Changed

- the new Nuxt default `srcDir` is `app/` by default, and most things are resolved from there.
- `serverDir` now defaults to `<rootDir>/server` rather than `<srcDir>/server`
- `layers/`, `modules/` and `public/` are resolved relative to `<rootDir>` by default
- if using [Nuxt Content v2.13+](https://github.com/nuxt/content/pull/2649){rel="nofollow"}, `content/` is resolved relative to `<rootDir>`
- a new `dir.app` is added, which is the directory we look for `router.options.ts` and `spa-loading-template.html` - this defaults to `<srcDir>/`

An example v4 folder structure.
```

Example 2 (unknown):
```unknown
👉 For more details, see the [PR implementing this change](https://github.com/nuxt/nuxt/pull/27029){rel="nofollow"}.

#### Reasons for Change

1. **Performance** - placing all your code in the root of your repo causes issues with `.git/` and `node_modules/` folders being scanned/included by FS watchers which can significantly delay startup on non-Mac OSes.
2. **IDE type-safety** - `server/` and the rest of your app are running in two entirely different contexts with different global imports available, and making sure `server/` isn't *inside* the same folder as the rest of your app is a big first step to ensuring you get good auto-completes in your IDE.

::video-accordion
---
platform: vimeo
title: Watch a video from Vue School on the new directory structure
video-id: "1031028378"
---
::

#### Migration Steps

1. Create a new directory called `app/`.
2. Move your `assets/`, `components/`, `composables/`, `layouts/`, `middleware/`, `pages/`, `plugins/` and `utils/` folders under it, as well as `app.vue`, `error.vue`, `app.config.ts`. If you have an `app/router-options.ts` or `app/spa-loading-template.html`, these paths remain the same.
3. Make sure your `nuxt.config.ts`, `content/`, `layers/`, `modules/`, `public/` and `server/` folders remain outside the `app/` folder, in the root of your project.
4. Remember to update any third-party configuration files to work with the new directory structure, such as your `tailwindcss` or `eslint` configuration (if required - `@nuxtjs/tailwindcss` should automatically configure `tailwindcss` correctly).

::tip
You can automate this migration by running `npx codemod@latest nuxt/4/file-structure`
::

However, migration is *not required*. If you wish to keep your current folder structure, Nuxt should auto-detect it. (If it does not, please raise an issue.) The one exception is that if you *already* have a custom `srcDir`. In this case, you should be aware that your `modules/`, `public/` and `server/` folders will be resolved from your `rootDir` rather than from your custom `srcDir`. You can override this by configuring `dir.modules`, `dir.public` and `serverDir` if you need to.

You can also force a v3 folder structure with the following configuration:
```

Example 3 (unknown):
```unknown
### Singleton Data Fetching Layer

🚦 **Impact Level**: Moderate

#### What Changed

Nuxt's data fetching system (`useAsyncData` and `useFetch`) has been significantly reorganized for better performance and consistency:

1. **Shared refs for the same key**: All calls to `useAsyncData` or `useFetch` with the same key now share the same `data`, `error` and `status` refs. This means that it is important that all calls with an explicit key must not have conflicting `deep`, `transform`, `pick`, `getCachedData` or `default` options.
2. **More control over `getCachedData`**: The `getCachedData` function is now called every time data is fetched, even if this is caused by a watcher or calling `refreshNuxtData`. (Previously, new data was always fetched and this function was not called in these cases.) To allow more control over when to use cached data and when to refetch, the function now receives a context object with the cause of the request.
3. **Reactive key support**: You can now use computed refs, plain refs or getter functions as keys, which enables automatic data refetching (and stores data separately).
4. **Data cleanup**: When the last component using data fetched with `useAsyncData` is unmounted, Nuxt will remove that data to avoid ever-growing memory usage.

#### Reasons for Change

These changes have been made to improve memory usage and increase consistency with loading states across calls of `useAsyncData`.

#### Migration Steps

1. **Check for inconsistent options**: Review any components using the same key with different options or fetch functions.
```

Example 4 (unknown):
```unknown
:brIt may be beneficial to extract any calls to `useAsyncData` that share an explicit key (and have custom options) into their own composable:
```

---

## IIS

**URL:** llms-txt#iis

**Contents:**
- Using IISnode
- More options

1. Install the latest LTS version of [Node.js](https://nodejs.org/en/){rel="nofollow"} on your Windows Server.
2. Install [IISnode](https://github.com/azure/iisnode/releases){rel="nofollow"}
3. Install [IIS `URLRewrite` Module](https://www.iis.net/downloads/microsoft/url-rewrite){rel="nofollow"}.
4. In IIS, add `.mjs` as a new mime type and set its content type to `application/javascript`.
5. Build you application with the following command:

6. Deploy the contents of your `.output` folder to your website in IIS.

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/iis"}
Head over **Nitro documentation** to learn more about the IIS deployment presets.
::

---

## Layouts

**URL:** llms-txt#layouts

::read-more{to="https://nuxt.com/docs/getting-started/views#layouts"}
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
::

::sandbox
---
branch: main
dir: examples/features/layouts
file: pages/index.vue
repo: nuxt/examples
---
::

---

## composables

**URL:** llms-txt#composables

**Contents:**
- Usage
- Types
- Examples
  - Nested Composables
  - Access plugin injections
- How Files Are Scanned

**Method 1:** Using named export

**Method 2:** Using default export

**Usage:** You can now use auto imported composable in `.js`, `.ts` and `.vue` files

::note
The `composables/` directory in Nuxt does not provide any additional reactivity capabilities to your code. Instead, any reactivity within composables is achieved using Vue's Composition API mechanisms, such as ref and reactive. Note that reactive code is also not limited to the boundaries of the `composables/` directory. You are free to employ reactivity features wherever they're needed in your application.
::

::read-more{to="https://nuxt.com/docs/guide/concepts/auto-imports"}
::

::link-example{to="https://nuxt.com/docs/examples/features/auto-imports"}
::

Under the hood, Nuxt auto generates the file `.nuxt/imports.d.ts` to declare the types.

Be aware that you have to run [`nuxt prepare`](https://nuxt.com/docs/3.x/api/commands/prepare), [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build) in order to let Nuxt generate the types.

::note
If you create a composable without having the dev server running, TypeScript will throw an error, such as `Cannot find name 'useBar'.`
::

### Nested Composables

You can use a composable within another composable using auto imports:

### Access plugin injections

You can access [plugin injections](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#providing-helpers) from composables:

## How Files Are Scanned

Nuxt only scans files at the top level of the [`composables/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/composables), e.g.:

Only `composables/index.ts` and `composables/useFoo.ts` would be searched for imports.

To get auto imports working for nested modules, you could either re-export them (recommended) or configure the scanner to include nested directories:

**Example:** Re-export the composables you need from the `composables/index.ts` file:

**Example:** Scan nested directories inside the `composables/` folder:

**Examples:**

Example 1 (unknown):
```unknown
**Method 2:** Using default export
```

Example 2 (unknown):
```unknown
**Usage:** You can now use auto imported composable in `.js`, `.ts` and `.vue` files
```

Example 3 (unknown):
```unknown
::note
The `composables/` directory in Nuxt does not provide any additional reactivity capabilities to your code. Instead, any reactivity within composables is achieved using Vue's Composition API mechanisms, such as ref and reactive. Note that reactive code is also not limited to the boundaries of the `composables/` directory. You are free to employ reactivity features wherever they're needed in your application.
::

::read-more{to="https://nuxt.com/docs/guide/concepts/auto-imports"}
::

::link-example{to="https://nuxt.com/docs/examples/features/auto-imports"}
::

## Types

Under the hood, Nuxt auto generates the file `.nuxt/imports.d.ts` to declare the types.

Be aware that you have to run [`nuxt prepare`](https://nuxt.com/docs/3.x/api/commands/prepare), [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build) in order to let Nuxt generate the types.

::note
If you create a composable without having the dev server running, TypeScript will throw an error, such as `Cannot find name 'useBar'.`
::

## Examples

### Nested Composables

You can use a composable within another composable using auto imports:
```

Example 4 (unknown):
```unknown
### Access plugin injections

You can access [plugin injections](https://nuxt.com/docs/3.x/guide/directory-structure/plugins#providing-helpers) from composables:
```

---

## SEO and Meta

**URL:** llms-txt#seo-and-meta

**Contents:**
- Nuxt Config
  - Defaults Tags
- `useHead`
- `useSeoMeta`
- Components
- Types
- Features
  - Reactivity
  - Title Template
  - Template Params

Nuxt head tag management is powered by [Unhead](https://unhead.unjs.io){rel="nofollow"}. It provides sensible defaults, several powerful composables
and numerous configuration options to manage your app's head and SEO meta tags.

Providing an [`app.head`](https://nuxt.com/docs/3.x/api/nuxt-config#head) property in your [`nuxt.config.ts`](https://nuxt.com/docs/3.x/guide/directory-structure/nuxt-config) allows you to statically customize the head for your entire app.

::important
This method does not allow you to provide reactive data. We recommend using `useHead()` in `app.vue`.
::

It's good practice to set tags here that won't change such as your site title default, language and favicon.

You can also provide any of the keys listed below in [Types](https://nuxt.com/#types).

Some tags are provided by Nuxt by default to ensure your website works well out of the box.

- `viewport`: `width=device-width, initial-scale=1`
- `charset`: `utf-8`

While most sites won't need to override these defaults, you can update them using the keyed shortcuts.

The [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable function supports reactive input, allowing you to manage your head tags programmatically.

We recommend taking a look at the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) and [`useHeadSafe`](https://nuxt.com/docs/3.x/api/composables/use-head-safe) composables.

The [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta) composable lets you define your site's SEO meta tags as an object with full type safety.

This helps you avoid typos and common mistakes, such as using `name` instead of `property`.

::read-more{to="https://nuxt.com/docs/api/composables/use-seo-meta"}
::

While using [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) is recommended in all cases, you may have a personal preference for defining your head tags in your template using components.

Nuxt provides the following components for this purpose: `<Title>`, `<Base>`, `<NoScript>`, `<Style>`, `<Meta>`, `<Link>`, `<Body>`, `<Html>` and `<Head>`. Note
the capitalization of these components ensuring we don't use invalid native HTML tags.

`<Head>` and `<Body>` can accept nested meta tags (for aesthetic reasons) but this does not affect *where* the nested meta tags are rendered in the final HTML.

It's suggested to wrap your components in either a `<Head>` or `<Html>` components as tags will be deduped more intuitively.

Below are the non-reactive types used for [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head), [`app.head`](https://nuxt.com/docs/3.x/api/nuxt-config#head) and components.

See [@unhead/vue](https://github.com/unjs/unhead/blob/main/packages/vue/src/types/schema.ts){rel="nofollow"} for more detailed types.

Reactivity is supported on all properties, by providing a computed value, a getter, or a reactive object.

You can use the `titleTemplate` option to provide a dynamic template for customizing the title of your site. For example, you could add the name of your site to the title of every page.

The `titleTemplate` can either be a string, where `%s` is replaced with the title, or a function.

If you want to use a function (for full control), then this cannot be set in your `nuxt.config`. It is recommended instead to set it within your `app.vue` file where it will apply to all pages on your site:

Now, if you set the title to `My Page` with [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) on another page of your site, the title would appear as 'My Page - Site Title' in the browser tab. You could also pass `null` to default to 'Site Title'.

You can use `templateParams` to provide additional placeholders in your `titleTemplate` besides the default `%s`. This allows for more dynamic title generation.

You can use the `tagPosition: 'bodyClose'` option on applicable tags to append them to the end of the `<body>` tag.

### With `definePageMeta`

Within your [`pages/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages), you can use `definePageMeta` along with [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) to set metadata based on the current route.

For example, you can first set the current page title (this is extracted at build time via a macro, so it can't be set dynamically):

And then in your layout file, you might use the route's metadata you have previously set:

::link-example{to="https://nuxt.com/docs/examples/features/meta-tags"}
::

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/pages/#page-metadata
---
::

In the example below, `titleTemplate` is set either as a string with the `%s` placeholder or as a `function`, which allows greater flexibility in setting the page title dynamically for each route of your Nuxt app:

`nuxt.config` is also used as an alternative way of setting the page title. However, `nuxt.config` does not allow the page title to be dynamic. Therefore, it is recommended to use `titleTemplate` in the `app.vue` file to add a dynamic title, which is then applied to all routes of your Nuxt app.

The example below shows how you might enable Google Fonts using either the `link` property of the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable or using the `<Link>` component:

**Examples:**

Example 1 (unknown):
```unknown
You can also provide any of the keys listed below in [Types](https://nuxt.com/#types).

### Defaults Tags

Some tags are provided by Nuxt by default to ensure your website works well out of the box.

- `viewport`: `width=device-width, initial-scale=1`
- `charset`: `utf-8`

While most sites won't need to override these defaults, you can update them using the keyed shortcuts.
```

Example 2 (unknown):
```unknown
## `useHead`

The [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable function supports reactive input, allowing you to manage your head tags programmatically.
```

Example 3 (unknown):
```unknown
We recommend taking a look at the [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) and [`useHeadSafe`](https://nuxt.com/docs/3.x/api/composables/use-head-safe) composables.

## `useSeoMeta`

The [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta) composable lets you define your site's SEO meta tags as an object with full type safety.

This helps you avoid typos and common mistakes, such as using `name` instead of `property`.
```

Example 4 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/api/composables/use-seo-meta"}
::

## Components

While using [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) is recommended in all cases, you may have a personal preference for defining your head tags in your template using components.

Nuxt provides the following components for this purpose: `<Title>`, `<Base>`, `<NoScript>`, `<Style>`, `<Meta>`, `<Link>`, `<Body>`, `<Html>` and `<Head>`. Note
the capitalization of these components ensuring we don't use invalid native HTML tags.

`<Head>` and `<Body>` can accept nested meta tags (for aesthetic reasons) but this does not affect *where* the nested meta tags are rendered in the final HTML.
```

---

## useRequestHeaders

**URL:** llms-txt#userequestheaders

**Contents:**
- Example

You can use built-in [`useRequestHeaders`](https://nuxt.com/docs/3.x/api/composables/use-request-headers) composable to access the incoming request headers within your pages, components, and plugins.

::tip
In the browser, `useRequestHeaders` will return an empty object.
::

We can use `useRequestHeaders` to access and proxy the initial request's `authorization` header to any future internal requests during SSR.

The example below adds the `authorization` request header to an isomorphic `$fetch` call.

**Examples:**

Example 1 (ts):
```ts
// Get all request headers
const headers = useRequestHeaders()

// Get only cookie request header
const { cookie } = useRequestHeaders(['cookie'])
```

---

## <NuxtLayout>

**URL:** llms-txt#<nuxtlayout>

**Contents:**
- Props
- Additional Props
- Transitions
- Layout's Ref

You can use `<NuxtLayout />` component to activate the `default` layout on `app.vue` or `error.vue`.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
::

- `name`: Specify a layout name to be rendered, can be a string, reactive reference or a computed property. It **must** match the name of the corresponding layout file in the [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directory.

- **type**: `string`
  - **default**: `default`

::note
Please note the layout name is normalized to kebab-case, so if your layout file is named `errorLayout.vue`, it will become `error-layout` when passed as a `name` property to `<NuxtLayout />`.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
Read more about dynamic layouts.
::

- `fallback`: If an invalid layout is passed to the `name` prop, no layout will be rendered. Specify a `fallback` layout to be rendered in this scenario. It **must** match the name of the corresponding layout file in the [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directory.

- **type**: `string`
  - **default**: `null`

`NuxtLayout` also accepts any additional props that you may need to pass to the layout. These custom props are then made accessible as attributes.

In the above example, the value of `title` will be available using `$attrs.title` in the template or `useAttrs().title` in `<script setup>` at custom.vue.

`<NuxtLayout />` renders incoming content via `<slot />`, which is then wrapped around Vue’s `<Transition />` component to activate layout transition. For this to work as expected, it is recommended that `<NuxtLayout />` is **not** the root element of the page component.

::read-more{to="https://nuxt.com/docs/getting-started/transitions"}
::

To get the ref of a layout component, access it through `ref.value.layoutRef`.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
::

**Examples:**

Example 1 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
::

## Props

- `name`: Specify a layout name to be rendered, can be a string, reactive reference or a computed property. It **must** match the name of the corresponding layout file in the [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directory.

  - **type**: `string`
  - **default**: `default`
```

Example 2 (unknown):
```unknown
::note
Please note the layout name is normalized to kebab-case, so if your layout file is named `errorLayout.vue`, it will become `error-layout` when passed as a `name` property to `<NuxtLayout />`.
::
```

Example 3 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}
Read more about dynamic layouts.
::

- `fallback`: If an invalid layout is passed to the `name` prop, no layout will be rendered. Specify a `fallback` layout to be rendered in this scenario. It **must** match the name of the corresponding layout file in the [`layouts/`](https://nuxt.com/docs/3.x/guide/directory-structure/layouts) directory.

  - **type**: `string`
  - **default**: `null`

## Additional Props

`NuxtLayout` also accepts any additional props that you may need to pass to the layout. These custom props are then made accessible as attributes.
```

Example 4 (unknown):
```unknown
In the above example, the value of `title` will be available using `$attrs.title` in the template or `useAttrs().title` in `<script setup>` at custom.vue.
```

---

## utils

**URL:** llms-txt#utils

**Contents:**
- Usage

The main purpose of the [`utils/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/utils) is to allow a semantic distinction between your Vue composables and other auto-imported utility functions.

**Method 1:** Using named export

**Method 2:** Using default export

You can now use auto imported utility functions in `.js`, `.ts` and `.vue` files

::read-more{to="https://nuxt.com/docs/guide/concepts/auto-imports"}
::

::link-example{to="https://nuxt.com/docs/examples/features/auto-imports"}
::

::tip
The way `utils/` auto-imports work and are scanned is identical to the [`composables/`](https://nuxt.com/docs/3.x/guide/directory-structure/composables) directory.
::

::important
These utils are only available within the Vue part of your app. :br
Only `server/utils` are auto-imported in the [`server/`](https://nuxt.com/docs/3.x/guide/directory-structure/server#server-utilities) directory.
::

**Examples:**

Example 1 (unknown):
```unknown
**Method 2:** Using default export
```

Example 2 (unknown):
```unknown
You can now use auto imported utility functions in `.js`, `.ts` and `.vue` files
```

---

## <NuxtLink>

**URL:** llms-txt#<nuxtlink>

**Contents:**
- Internal Routing
  - Passing Params to Dynamic Routes
  - Handling Static File and Cross-App Links
- External Routing
- `rel` and `noRel` Attributes
- Prefetch Links
  - Custom Prefetch Triggers
  - Enable Cross-origin Prefetch
  - Disable prefetch globally
- Props

::note
`<NuxtLink>` is a drop-in replacement for both Vue Router's `<RouterLink>` component and HTML's `<a>` tag. It intelligently determines whether the link is *internal* or *external* and renders it accordingly with available optimizations (prefetching, default attributes, etc.)
::

In this example, we use `<NuxtLink>` component to link to another page of the application.

### Passing Params to Dynamic Routes

In this example, we pass the `id` param to link to the route `~/pages/posts/[id].vue`.

::tip
Check out the Pages panel in Nuxt DevTools to see the route name and the params it might take.
::

::tip
When you pass an object into the `to` prop, `<NuxtLink>` will inherit Vue Router’s handling of query parameters. Keys and values will be automatically encoded, so you don’t need to call `encodeURI` or `encodeURIComponent` manually.
::

### Handling Static File and Cross-App Links

By default, `<NuxtLink>` uses Vue Router's client side navigation for relative route. When linking to static files in the `/public` directory or to another application hosted on the same domain, it might result in unexpected 404 errors because they are not part of the client routes. In such cases, you can use the `external` prop with `<NuxtLink>` to bypass Vue Router's internal routing mechanism.

The `external` prop explicitly indicates that the link is external. `<NuxtLink>` will render the link as a standard HTML `<a>` tag. This ensures the link behaves correctly, bypassing Vue Router’s logic and directly pointing to the resource.

#### Linking to Static Files

For static files in the `/public` directory, such as PDFs or images, use the `external` prop to ensure the link resolves correctly.

#### Linking to a Cross-App URL

When pointing to a different application on the same domain, using the `external` prop ensures the correct behavior.

Using the `external` prop or relying on automatic handling ensures proper navigation, avoids unexpected routing issues, and improves compatibility with static resources or cross-application scenarios.

In this example, we use `<NuxtLink>` component to link to a website.

## `rel` and `noRel` Attributes

A `rel` attribute of `noopener noreferrer` is applied by default to links with a `target` attribute or to absolute links (e.g., links starting with `http://`, `https://`, or `//`).

- `noopener` solves a [security bug](https://mathiasbynens.github.io/rel-noopener/){rel="nofollow"} in older browsers.
- `noreferrer` improves privacy for your users by not sending the `Referer` header to the linked site.

These defaults have no negative impact on SEO and are considered [best practice](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener){rel="nofollow"}.

When you need to overwrite this behavior you can use the `rel` or `noRel` props.

A `noRel` prop can be used to prevent the default `rel` attribute from being added to the absolute links.

::note
`noRel` and `rel` cannot be used together. `rel` will be ignored.
::

Nuxt automatically includes smart prefetching. That means it detects when a link is visible (by default), either in the viewport or when scrolling and prefetches the JavaScript for those pages so that they are ready when the user clicks the link. Nuxt only loads the resources when the browser isn't busy and skips prefetching if your connection is offline or if you only have 2g connection.

### Custom Prefetch Triggers

We now support custom prefetch triggers for `<NuxtLink>` after `v3.13.0`. You can use the `prefetchOn` prop to control when to prefetch links.

- `visibility`: Prefetches when the link becomes visible in the viewport. Monitors the element's intersection with the viewport using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API){rel="nofollow"}. Prefetching is triggered when the element is scrolled into view.
- `interaction`: Prefetches when the link is hovered or focused. This approach listens for `pointerenter` and `focus` events, proactively prefetching resources when the user indicates intent to interact.

You can also use an object to configure `prefetchOn`:

That you probably don't want both enabled!

This configuration will observe when the element enters the viewport and also listen for `pointerenter` and `focus` events. This may result in unnecessary resource usage or redundant prefetching, as both triggers can prefetch the same resource under different conditions.

### Enable Cross-origin Prefetch

To enable cross-origin prefetching, you can set the `crossOriginPrefetch` option in your `nuxt.config`. This will enable cross-origin prefetching using the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API){rel="nofollow"}.

### Disable prefetch globally

It's also possible to enable/disable prefetching all links globally for your app.

When not using `external`, `<NuxtLink>` supports all Vue Router's [`RouterLink` props](https://router.vuejs.org/api/interfaces/RouterLinkProps.html){rel="nofollow"}

- `to`: Any URL or a [route location object](https://router.vuejs.org/api/type-aliases/RouteLocation.html){rel="nofollow"} from Vue Router
- `custom`: Whether `<NuxtLink>` should wrap its content in an `<a>` element. It allows taking full control of how a link is rendered and how navigation works when it is clicked. Works the same as [Vue Router's `custom` prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom){rel="nofollow"}
- `exactActiveClass`: A class to apply on exact active links. Works the same as [Vue Router's `exactActiveClass` prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-exactActiveClass){rel="nofollow"} on internal links. Defaults to Vue Router's default (`"router-link-exact-active"`)
- `activeClass`: A class to apply on active links. Works the same as [Vue Router's `activeClass` prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-activeClass){rel="nofollow"} on internal links. Defaults to Vue Router's default (`"router-link-active"`)
- `replace`: Works the same as [Vue Router's `replace` prop](https://router.vuejs.org/api/interfaces/RouteLocationOptions.html#Properties-replace){rel="nofollow"} on internal links
- `ariaCurrentValue`: An `aria-current` attribute value to apply on exact active links. Works the same as [Vue Router's `ariaCurrentValue` prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-ariaCurrentValue){rel="nofollow"} on internal links

- `href`: An alias for `to`. If used with `to`, `href` will be ignored
- `noRel`: If set to `true`, no `rel` attribute will be added to the external link
- `external`: Forces the link to be rendered as an `<a>` tag instead of a Vue Router `RouterLink`.
- `prefetch`: When enabled will prefetch middleware, layouts and payloads (when using [payloadExtraction](https://nuxt.com/docs/3.x/api/nuxt-config#crossoriginprefetch)) of links in the viewport. Used by the experimental [crossOriginPrefetch](https://nuxt.com/docs/3.x/api/nuxt-config#crossoriginprefetch) config.
- `prefetchOn`: Allows custom control of when to prefetch links. Possible options are `interaction` and `visibility` (default). You can also pass an object for full control, for example: `{ interaction: true, visibility: true }`. This prop is only used when `prefetch` is enabled (default) and `noPrefetch` is not set.
- `noPrefetch`: Disables prefetching.
- `prefetchedClass`: A class to apply to links that have been prefetched.

- `target`: A `target` attribute value to apply on the link
- `rel`: A `rel` attribute value to apply on the link. Defaults to `"noopener noreferrer"` for external links.

::tip
Defaults can be overwritten, see [overwriting defaults](https://nuxt.com/#overwriting-defaults) if you want to change them.
::

## Overwriting Defaults

You can overwrite some `<NuxtLink>` defaults in your [`nuxt.config`](https://nuxt.com/docs/3.x/api/nuxt-config#defaults)

::important
These options will likely be moved elsewhere in the future, such as into `app.config` or into the `app/` directory.
::

### Custom Link Component

You can overwrite `<NuxtLink>` defaults by creating your own link component using `defineNuxtLink`.

You can then use `<MyNuxtLink />` component as usual with your new defaults.

### `defineNuxtLink` Signature

- `componentName`: A name for the component. Default is `NuxtLink`.
- `externalRelAttribute`: A default `rel` attribute value applied on external links. Defaults to `"noopener noreferrer"`. Set it to `""` to disable
- `activeClass`: A default class to apply on active links. Works the same as [Vue Router's `linkActiveClass` option](https://router.vuejs.org/api/interfaces/RouterOptions.html#Properties-linkActiveClass){rel="nofollow"}. Defaults to Vue Router's default (`"router-link-active"`)
- `exactActiveClass`: A default class to apply on exact active links. Works the same as [Vue Router's `linkExactActiveClass` option](https://router.vuejs.org/api/interfaces/RouterOptions.html#Properties-linkExactActiveClass){rel="nofollow"}. Defaults to Vue Router's default (`"router-link-exact-active"`)
- `trailingSlash`: An option to either add or remove trailing slashes in the `href`. If unset or not matching the valid values `append` or `remove`, it will be ignored.
- `prefetch`: Whether or not to prefetch links by default.
- `prefetchOn`: Granular control of which prefetch strategies to apply by default.
- `prefetchedClass`: A default class to apply to links that have been prefetched.

::link-example{to="https://nuxt.com/docs/examples/routing/pages"}
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

### Passing Params to Dynamic Routes

In this example, we pass the `id` param to link to the route `~/pages/posts/[id].vue`.

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

::tip
Check out the Pages panel in Nuxt DevTools to see the route name and the params it might take.
::

::tip
When you pass an object into the `to` prop, `<NuxtLink>` will inherit Vue Router’s handling of query parameters. Keys and values will be automatically encoded, so you don’t need to call `encodeURI` or `encodeURIComponent` manually.
::

### Handling Static File and Cross-App Links

By default, `<NuxtLink>` uses Vue Router's client side navigation for relative route. When linking to static files in the `/public` directory or to another application hosted on the same domain, it might result in unexpected 404 errors because they are not part of the client routes. In such cases, you can use the `external` prop with `<NuxtLink>` to bypass Vue Router's internal routing mechanism.

The `external` prop explicitly indicates that the link is external. `<NuxtLink>` will render the link as a standard HTML `<a>` tag. This ensures the link behaves correctly, bypassing Vue Router’s logic and directly pointing to the resource.

#### Linking to Static Files

For static files in the `/public` directory, such as PDFs or images, use the `external` prop to ensure the link resolves correctly.
```

---

## ignore route middleware files under foo folder except foo/bar.js

**URL:** llms-txt#ignore-route-middleware-files-under-foo-folder-except-foo/bar.js

middleware/foo/*.js
!middleware/foo/bar.js
```

::read-more
---
icon: i-simple-icons-git
target: _blank
title: the git documentation
to: https://git-scm.com/docs/gitignore
---
More details about the spec are in the **gitignore documentation**.
::

---

## useRuntimeConfig

**URL:** llms-txt#useruntimeconfig

**Contents:**
- Usage
- Define Runtime Config
- Access Runtime Config
- Environment Variables
  - Using the `.env` File
- `app` namespace
  - `app.baseURL`
  - `app.cdnURL`

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

## Define Runtime Config

The example below shows how to set a public API base URL and a secret API token that is only accessible on the server.

We should always define `runtimeConfig` variables inside `nuxt.config`.

::note
Variables that need to be accessible on the server are added directly inside `runtimeConfig`. Variables that need to be accessible on both the client and the server are defined in `runtimeConfig.public`.
::

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

## Access Runtime Config

To access runtime config, we can use `useRuntimeConfig()` composable:

In this example, since `apiBase` is defined within the `public` namespace, it is universally accessible on both server and client-side, while `apiSecret` **is only accessible on the server-side**.

## Environment Variables

It is possible to update runtime config values using a matching environment variable name prefixed with `NUXT_`.

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

### Using the `.env` File

We can set the environment variables inside the `.env` file to make them accessible during **development** and **build/generate**.

::note
Any environment variables set within `.env` file are accessed using `process.env` in the Nuxt app during **development** and **build/generate**.
::

::warning
In **production runtime**, you should use platform environment variables and `.env` is not used.
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/env"}
::

Nuxt uses `app` namespace in runtime-config with keys including `baseURL` and `cdnURL`. You can customize their values at runtime by setting environment variables.

::note
This is a reserved namespace. You should not introduce additional keys inside `app`.
::

By default, the `baseURL` is set to `'/'`.

However, the `baseURL` can be updated at runtime by setting the `NUXT_APP_BASE_URL` as an environment variable.

Then, you can access this new base URL using `config.app.baseURL`:

This example shows how to set a custom CDN url and access them using `useRuntimeConfig()`.

You can use a custom CDN for serving static assets inside `.output/public` using the `NUXT_APP_CDN_URL` environment variable.

And then access the new CDN url using `config.app.cdnURL`.

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

## Define Runtime Config

The example below shows how to set a public API base URL and a secret API token that is only accessible on the server.

We should always define `runtimeConfig` variables inside `nuxt.config`.
```

Example 3 (unknown):
```unknown
::note
Variables that need to be accessible on the server are added directly inside `runtimeConfig`. Variables that need to be accessible on both the client and the server are defined in `runtimeConfig.public`.
::

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

## Access Runtime Config

To access runtime config, we can use `useRuntimeConfig()` composable:
```

Example 4 (unknown):
```unknown
In this example, since `apiBase` is defined within the `public` namespace, it is universally accessible on both server and client-side, while `apiSecret` **is only accessible on the server-side**.

## Environment Variables

It is possible to update runtime config values using a matching environment variable name prefixed with `NUXT_`.

::read-more{to="https://nuxt.com/docs/guide/going-further/runtime-config"}
::

### Using the `.env` File

We can set the environment variables inside the `.env` file to make them accessible during **development** and **build/generate**.
```

---

## useAppConfig

**URL:** llms-txt#useappconfig

**Contents:**
- Usage

::read-more{to="https://nuxt.com/docs/guide/directory-structure/app-config"}
::

**Examples:**

Example 1 (ts):
```ts
const appConfig = useAppConfig()

console.log(appConfig)
```

---

## Run tests in watch mode

**URL:** llms-txt#run-tests-in-watch-mode

**Contents:**
  - 🎭 Built-In Mocks
  - 🛠️ Helpers
  - Using `@vue/test-utils`
- End-To-End Testing
  - Setup
  - APIs
  - Testing in a Browser

npx vitest --watch
ts twoslash
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
  },
})
ts twoslash
// @noErrors
import { expect, it } from 'vitest'
import type { Component } from 'vue'

declare module '#components' {
  export const SomeComponent: Component
}
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { SomeComponent } from '#components'

it('can mount some component', async () => {
  const component = await mountSuspended(SomeComponent)
  expect(component.text()).toMatchInlineSnapshot(
    '"This is an auto-imported component"',
  )
})
ts twoslash
// @noErrors
import { expect, it } from 'vitest'
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

// tests/App.nuxt.spec.ts
it('can also mount an app', async () => {
  const component = await mountSuspended(App, { route: '/test' })
  expect(component.html()).toMatchInlineSnapshot(`
      "<div>This is an auto-imported component</div>
      <div> I am a global component </div>
      <div>/</div>
      <a href="/test"> Test link </a>"
    `)
})
ts twoslash
// @noErrors
import { expect, it } from 'vitest'
import type { Component } from 'vue'

declare module '#components' {
  export const SomeComponent: Component
}
// ---cut---
// tests/components/SomeComponents.nuxt.spec.ts
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { SomeComponent } from '#components'
import { screen } from '@testing-library/vue'

it('can render some component', async () => {
  await renderSuspended(SomeComponent)
  expect(screen.getByText('This is an auto-imported component')).toBeDefined()
})
ts twoslash
// @noErrors
import { expect, it } from 'vitest'
// ---cut---
// tests/App.nuxt.spec.ts
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

it('can also render an app', async () => {
  const html = await renderSuspended(App, { route: '/test' })
  expect(html).toMatchInlineSnapshot(`
    "<div id="test-wrapper">
      <div>This is an auto-imported component</div>
      <div> I am a global component </div>
      <div>Index page</div><a href="/test"> Test link </a>
    </div>"
  `)
})
ts twoslash
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

mockNuxtImport('useStorage', () => {
  return () => {
    return { value: 'mocked storage' }
  }
})

// your tests here
ts twoslash
import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

const { useStorageMock } = vi.hoisted(() => {
  return {
    useStorageMock: vi.fn(() => {
      return { value: 'mocked storage' }
    }),
  }
})

mockNuxtImport('useStorage', () => {
  return useStorageMock
})

// Then, inside a test
useStorageMock.mockImplementation(() => {
  return { value: 'something else' }
})
ts twoslash
import { mockComponent } from '@nuxt/test-utils/runtime'

mockComponent('MyComponent', {
  props: {
    value: String,
  },
  setup (props) {
    // ...
  },
})

// relative path or alias also works
mockComponent('~/components/my-component.vue', () => {
  // or a factory function
  return defineComponent({
    setup (props) {
      // ...
    },
  })
})

// or you can use SFC for redirecting to a mock component
mockComponent('MyComponent', () => import('./MockComponent.vue'))

// your tests here
ts twoslash
import { mockComponent } from '@nuxt/test-utils/runtime'

mockComponent('MyComponent', async () => {
  const { ref, h } = await import('vue')

return defineComponent({
    setup (props) {
      const counter = ref(0)
      return () => h('div', null, counter.value)
    },
  })
})
ts twoslash
import { registerEndpoint } from '@nuxt/test-utils/runtime'

registerEndpoint('/test/', () => ({
  test: 'test-field',
}))
ts twoslash
import { registerEndpoint } from '@nuxt/test-utils/runtime'

registerEndpoint('/test/', {
  method: 'POST',
  handler: () => ({ test: 'test-field' }),
})
ts twoslash
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

mockNuxtImport('useStorage', () => {
  return () => {
    return { value: 'mocked storage' }
  }
})
ts twoslash
import { $fetch, setup } from '@nuxt/test-utils/e2e'

await setup({
  setupTimeout: 10000,
})

// ...
bash \[npm\]
   npm i --save-dev vitest @vue/test-utils happy-dom @vitejs/plugin-vue
   bash \[yarn\]
   yarn add --dev vitest @vue/test-utils happy-dom @vitejs/plugin-vue
   bash \[pnpm\]
   pnpm add -D vitest @vue/test-utils happy-dom @vitejs/plugin-vue
   bash \[bun\]
   bun add --dev vitest @vue/test-utils happy-dom @vitejs/plugin-vue
   ts
   import { defineConfig } from 'vitest/config'
   import vue from '@vitejs/plugin-vue'

export default defineConfig({
     plugins: [vue()],
     test: {
       environment: 'happy-dom',
     },
   })
   json
   "scripts": {
     "build": "nuxt build",
     "dev": "nuxt dev",
     ...
     "test": "vitest"
   },
   vue
   <template>
     <p>Hello world</p>
   </template>
   ts twoslash
   import { describe, expect, it } from 'vitest'
   import { mount } from '@vue/test-utils'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
     it('component renders Hello world properly', () => {
       const wrapper = mount(HelloWorld)
       expect(wrapper.text()).toContain('Hello world')
     })
   })
   bash \[npm\]
   npm run test
   bash \[yarn\]
   yarn test
   bash \[pnpm\]
   pnpm run test
   bash \[bun\]
   bun run test
   ts [test/my-test.spec.ts] twoslash
import { describe, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('My test', async () => {
  await setup({
    // test context options
  })

test('my test', () => {
    // ...
  })
})
ts twoslash
import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('login page', async () => {
  await setup({
    host: 'http://localhost:8787',
  })

it('displays the email and password fields', async () => {
    const page = await createPage('/login')
    expect(await page.getByTestId('email').isVisible()).toBe(true)
    expect(await page.getByTestId('password').isVisible()).toBe(true)
  })
})
ts twoslash
import { $fetch } from '@nuxt/test-utils/e2e'

const html = await $fetch('/')
ts twoslash
import { fetch } from '@nuxt/test-utils/e2e'

const res = await fetch('/')
const { body, headers } = res
ts twoslash
import { url } from '@nuxt/test-utils/e2e'

const pageUrl = url('/page')
// 'http://localhost:6840/page'
ts twoslash
import { createPage } from '@nuxt/test-utils/e2e'

const page = await createPage('/page')
// you can access all the Playwright APIs from the `page` variable
bash [npm]
npm i --save-dev @playwright/test @nuxt/test-utils
bash [yarn]
yarn add --dev @playwright/test @nuxt/test-utils
bash [pnpm]
pnpm add -D @playwright/test @nuxt/test-utils
bash [bun]
bun add --dev @playwright/test @nuxt/test-utils
ts [playwright.config.ts]
import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  // ...
})
ts [tests/example.test.ts]
import { expect, test } from '@nuxt/test-utils/playwright'

test('test', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading')).toHaveText('Welcome to Playwright!')
})
ts [tests/example.test.ts]
import { expect, test } from '@nuxt/test-utils/playwright'

test.use({
  nuxt: {
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
  },
})

test('test', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading')).toHaveText('Welcome to Playwright!')
})
```

**Examples:**

Example 1 (unknown):
```unknown
::warning
When you run your tests within the Nuxt environment, they will be running in a [`happy-dom`](https://github.com/capricorn86/happy-dom){rel="nofollow"} or [`jsdom`](https://github.com/jsdom/jsdom){rel="nofollow"} environment. Before your tests run, a global Nuxt app will be initialized (including, for example, running any plugins or code you've defined in your `app.vue`).

This means you should take particular care not to mutate the global state in your tests (or, if you need to, to reset it afterwards).
::

### 🎭 Built-In Mocks

`@nuxt/test-utils` provides some built-in mocks for the DOM environment.

#### `intersectionObserver`

Default `true`, creates a dummy class without any functionality for the IntersectionObserver API

#### `indexedDB`

Default `false`, uses [`fake-indexeddb`](https://github.com/dumbmatter/fakeIndexedDB){rel="nofollow"} to create a functional mock of the IndexedDB API

These can be configured in the `environmentOptions` section of your `vitest.config.ts` file:
```

Example 2 (unknown):
```unknown
### 🛠️ Helpers

`@nuxt/test-utils` provides a number of helpers to make testing Nuxt apps easier.

#### `mountSuspended`

`mountSuspended` allows you to mount any Vue component within the Nuxt environment, allowing async setup and access to injections from your Nuxt plugins.

::note
Under the hood, `mountSuspended` wraps `mount` from `@vue/test-utils`, so you can check out [the Vue Test Utils documentation](https://test-utils.vuejs.org/guide/){rel="nofollow"} for more on the options you can pass, and how to use this utility.
::

For example:
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
#### `renderSuspended`

`renderSuspended` allows you to render any Vue component within the Nuxt environment using `@testing-library/vue`, allowing async setup and access to injections from your Nuxt plugins.

This should be used together with utilities from Testing Library, e.g. `screen` and `fireEvent`. Install [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro){rel="nofollow"} in your project to use these.

Additionally, Testing Library also relies on testing globals for cleanup. You should turn these on in your [Vitest config](https://vitest.dev/config/#globals){rel="nofollow"}.

The passed in component will be rendered inside a `<div id="test-wrapper"></div>`.

Examples:
```

---

## .output

**URL:** llms-txt#.output

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/guide/directory-structure/gitignore) file to avoid pushing the build output to your repository.
::

Use this directory to deploy your Nuxt application to production.

::read-more{to="https://nuxt.com/docs/getting-started/deployment"}
::

::warning
You should not touch any files inside since the whole directory will be re-created when running [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build).
::

---

## <NuxtTime>

**URL:** llms-txt#<nuxttime>

**Contents:**
- Usage
- Props
  - `datetime`
  - `locale`
  - Formatting Props
  - `relative`
  - Relative Time Formatting Props
- Examples
  - Basic Usage
  - Custom Formatting

::important
This component is available in Nuxt v3.17+.
::

The `<NuxtTime>` component lets you display dates and times in a locale-friendly format with proper `<time>` HTML semantics. It ensures consistent rendering between server and client without hydration mismatches.

You can use the `<NuxtTime>` component anywhere in your app:

- Type: `Date | number | string`
- Required: `true`

The date and time value to display. You can provide:

- A `Date` object
- A timestamp (number)
- An ISO-formatted date string

- Type: `string`
- Required: `false`
- Default: Uses the browser or server's default locale

The [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646){rel="nofollow"} for formatting (e.g., 'en-US', 'fr-FR', 'ja-JP'):

The component accepts any property from the [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat){rel="nofollow"} options:

This would output something like: "April 22, 2025, 08:30 AM"

- Type: `boolean`
- Required: `false`
- Default: `false`

Enables relative time formatting using the Intl.RelativeTimeFormat API:

### Relative Time Formatting Props

When `relative` is set to `true`, the component also accepts properties from [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat){rel="nofollow"}:

::warning
Due to `style` being a reserved prop, `relativeStyle` prop is used instead.
::

This would output something like: "3 days ago" or "last Friday" depending on the `numeric` setting.

### Custom Formatting

### With Custom Locale

**Examples:**

Example 1 (vue):
```vue
<template>
  <NuxtTime :datetime="Date.now()" />
</template>
```

Example 2 (vue):
```vue
<template>
  <NuxtTime :datetime="Date.now()" />
  <NuxtTime :datetime="new Date()" />
  <NuxtTime datetime="2023-06-15T09:30:00.000Z" />
</template>
```

Example 3 (vue):
```vue
<template>
  <NuxtTime
    :datetime="Date.now()"
    locale="fr-FR"
  />
</template>
```

Example 4 (vue):
```vue
<template>
  <NuxtTime
    :datetime="Date.now()"
    year="numeric"
    month="long"
    day="numeric"
    hour="2-digit"
    minute="2-digit"
  />
</template>
```

---

## preloadRouteComponents

**URL:** llms-txt#preloadroutecomponents

**Contents:**
- Example

Preloading routes loads the components of a given route that the user might navigate to in future. This ensures that the components are available earlier and less likely to block the navigation, improving performance.

::tip{icon="i-lucide-rocket"}
Nuxt already automatically preloads the necessary routes if you're using the `NuxtLink` component.
::

::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
::

Preload a route when using `navigateTo`.

::read-more{to="https://nuxt.com/docs/api/utils/navigate-to"}
::

::note
On server, `preloadRouteComponents` will have no effect.
::

**Examples:**

Example 1 (ts):
```ts
// we don't await this async function, to avoid blocking rendering
// this component's setup function
preloadRouteComponents('/dashboard')

const submit = async () => {
  const results = await $fetch('/api/authentication')

  if (results.token) {
    await navigateTo('/dashboard')
  }
}
```

---

## Generates `pages/category/[id].vue`

**URL:** llms-txt#generates-`pages/category/[id].vue`

**Contents:**
- `nuxt add middleware`

npx nuxt add page "category/[id]"
bash [Terminal]

**Examples:**

Example 1 (unknown):
```unknown
## `nuxt add middleware`

- Modifier flags: `--global`
```

---

## Prerendering

**URL:** llms-txt#prerendering

**Contents:**
- Crawl-based Pre-rendering
  - Selective Pre-rendering
- Runtime Prerender Configuration
  - `prerenderRoutes`
  - `prerender:routes` Nuxt hook
  - `prerender:generate` Nitro hook

Nuxt allows for select pages from your application to be rendered at build time. Nuxt will serve the prebuilt pages when requested instead of generating them on the fly.

::read-more
---
title: Nuxt rendering modes
to: https://nuxt.com/docs/guide/concepts/rendering
---
::

## Crawl-based Pre-rendering

Use the [`nuxt generate` command](https://nuxt.com/docs/3.x/api/commands/generate) to build and pre-render your application using the [Nitro](https://nuxt.com/docs/3.x/guide/concepts/server-engine) crawler. This command is similar to `nuxt build` with the `nitro.static` option set to `true`, or running `nuxt build --prerender`.

This will build your site, stand up a nuxt instance, and, by default, prerender the root page `/` along with any of your site's pages it links to, any of your site's pages they link to, and so on.

::code-group{sync="pm"}

You can now deploy the `.output/public` directory to any static hosting service or preview it locally with `npx serve .output/public`.

Working of the Nitro crawler:

1. Load the HTML of your application's root route (`/`), any non-dynamic pages in your `~/pages` directory, and any other routes in the `nitro.prerender.routes` array.
2. Save the HTML and `payload.json` to the `~/.output/public/` directory to be served statically.
3. Find all anchor tags (`<a href="...">`) in the HTML to navigate to other routes.
4. Repeat steps 1-3 for each anchor tag found until there are no more anchor tags to crawl.

This is important to understand since pages that are not linked to a discoverable page can't be pre-rendered automatically.

::read-more{to="https://nuxt.com/docs/api/commands/generate#nuxt-generate"}
Read more about the `nuxt generate` command.
::

### Selective Pre-rendering

You can manually specify routes that [Nitro](https://nuxt.com/docs/3.x/guide/concepts/server-engine) will fetch and pre-render during the build or ignore routes that you don't want to pre-render like `/dynamic` in the `nuxt.config` file:

You can combine this with the `crawlLinks` option to pre-render a set of routes that the crawler can't discover like your `/sitemap.xml` or `/robots.txt`:

Setting `nitro.prerender` to `true` is similar to `nitro.prerender.crawlLinks` to `true`.

::read-more{to="https://nitro.build/config#prerender"}
Read more about pre-rendering in the Nitro documentation.
::

Lastly, you can manually configure this using routeRules.

::read-more{to="https://nitro.build/config#routerules"}
Read more about Nitro's `routeRules` configuration.
::

As a shorthand, you can also configure this in a page file using [`defineRouteRules`](https://nuxt.com/docs/3.x/api/utils/define-route-rules).

::read-more
---
icon: i-lucide-star
to: https://nuxt.com/docs/guide/going-further/experimental-features#inlinerouterules
---
This feature is experimental and in order to use it you must enable the `experimental.inlineRouteRules` option in your `nuxt.config`.
::

This will be translated to:

## Runtime Prerender Configuration

### `prerenderRoutes`

You can use this at runtime within a [Nuxt context](https://nuxt.com/docs/3.x/guide/going-further/nuxt-app#the-nuxt-context) to add more routes for Nitro to prerender.

::read-more
---
title: prerenderRoutes
to: https://nuxt.com/docs/api/utils/prerender-routes
---
::

### `prerender:routes` Nuxt hook

This is called before prerendering for additional routes to be registered.

### `prerender:generate` Nitro hook

This is called for each route during prerendering. You can use this for fine-grained handling of each route that gets prerendered.

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

You can now deploy the `.output/public` directory to any static hosting service or preview it locally with `npx serve .output/public`.

Working of the Nitro crawler:

1. Load the HTML of your application's root route (`/`), any non-dynamic pages in your `~/pages` directory, and any other routes in the `nitro.prerender.routes` array.
2. Save the HTML and `payload.json` to the `~/.output/public/` directory to be served statically.
3. Find all anchor tags (`<a href="...">`) in the HTML to navigate to other routes.
4. Repeat steps 1-3 for each anchor tag found until there are no more anchor tags to crawl.

This is important to understand since pages that are not linked to a discoverable page can't be pre-rendered automatically.

::read-more{to="https://nuxt.com/docs/api/commands/generate#nuxt-generate"}
Read more about the `nuxt generate` command.
::

### Selective Pre-rendering

You can manually specify routes that [Nitro](https://nuxt.com/docs/3.x/guide/concepts/server-engine) will fetch and pre-render during the build or ignore routes that you don't want to pre-render like `/dynamic` in the `nuxt.config` file:
```

---

## NuxtApp

**URL:** llms-txt#nuxtapp

**Contents:**
- Nuxt App Interface
- The Nuxt Context
- Accessing NuxtApp
- Providing Helpers

In Nuxt, you can access runtime app context within composables, components and plugins.

::read-more
---
target: _blank
to: https://v2.nuxt.com/docs/internals-glossary/context#the-context
---
In Nuxt 2, this was referred to as **Nuxt context**.
::

## Nuxt App Interface

::read-more
---
to: https://nuxt.com/docs/guide/going-further/internals#the-nuxtapp-interface
---
Jump over the `NuxtApp` interface documentation.
::

Many composables and utilities, both built-in and user-made, may require access to the Nuxt instance. This doesn't exist everywhere on your application, because a fresh instance is created on every request.

Currently, the Nuxt context is only accessible in [plugins](https://nuxt.com/docs/3.x/guide/directory-structure/plugins), [Nuxt hooks](https://nuxt.com/docs/3.x/guide/going-further/hooks), [Nuxt middleware](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) (if wrapped in `defineNuxtRouteMiddleware`), and [setup functions](https://vuejs.org/api/composition-api-setup.html){rel="nofollow"} (in pages and components).

If a composable is called without access to the context, you may get an error stating that 'A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function.' In that case, you can also explicitly call functions within this context by using [`nuxtApp.runWithContext`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app#runwithcontext).

Within composables, plugins and components you can access `nuxtApp` with [`useNuxtApp()`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app):

If your composable does not always need `nuxtApp` or you simply want to check if it is present or not, since [`useNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) throws an exception, you can use [`tryUseNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app#tryusenuxtapp) instead.

Plugins also receive `nuxtApp` as the first argument for convenience.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

You can provide helpers to be usable across all composables and application. This usually happens within a Nuxt plugin.

::read-more
---
to: https://nuxt.com/docs/guide/directory-structure/plugins#providing-helpers
---
It is possible to inject helpers by returning an object with a `provide` key in plugins.
::

::read-more
---
target: _blank
to: https://v2.nuxt.com/docs/directory-structure/plugins#inject-in-root--context
---
In Nuxt 2 plugins, this was referred to as **inject function**.
::

**Examples:**

Example 1 (unknown):
```unknown
If your composable does not always need `nuxtApp` or you simply want to check if it is present or not, since [`useNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app) throws an exception, you can use [`tryUseNuxtApp`](https://nuxt.com/docs/3.x/api/composables/use-nuxt-app#tryusenuxtapp) instead.

Plugins also receive `nuxtApp` as the first argument for convenience.

::read-more{to="https://nuxt.com/docs/guide/directory-structure/plugins"}
::

## Providing Helpers

You can provide helpers to be usable across all composables and application. This usually happens within a Nuxt plugin.
```

---

## Routing

**URL:** llms-txt#routing

**Contents:**
- Pages
- Navigation
- Route Parameters
- Route Middleware
- Route Validation

One core feature of Nuxt is the file system router. Every Vue file inside the [`pages/`](https://nuxt.com/docs/3.x/guide/directory-structure/pages) directory creates a corresponding URL (or route) that displays the contents of the file. By using dynamic imports for each page, Nuxt leverages code-splitting to ship the minimum amount of JavaScript for the requested route.

Nuxt routing is based on [vue-router](https://router.vuejs.org){rel="nofollow"} and generates the routes from every component created in the [`pages/` directory](https://nuxt.com/docs/3.x/guide/directory-structure/pages), based on their filename.

This file system routing uses naming conventions to create dynamic and nested routes:

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
::

The [`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link) component links pages between them. It renders an `<a>` tag with the `href` attribute set to the route of the page. Once the application is hydrated, page transitions are performed in JavaScript by updating the browser URL. This prevents full-page refreshes and allows for animated transitions.

When a [`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link) enters the viewport on the client side, Nuxt will automatically prefetch components and payload (generated pages) of the linked pages ahead of time, resulting in faster navigation.

::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
::

The [`useRoute()`](https://nuxt.com/docs/3.x/api/composables/use-route) composable can be used in a `<script setup>` block or a `setup()` method of a Vue component to access the current route details.

::read-more{to="https://nuxt.com/docs/api/composables/use-route"}
::

Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

::note
Route middleware runs within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.
::

There are three kinds of route middleware:

1. Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.
2. Named route middleware, which are placed in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) directory and will be automatically loaded via asynchronous import when used on a page. (**Note**: The route middleware name is normalized to kebab-case, so `someMiddleware` becomes `some-middleware`.)
3. Global route middleware, which are placed in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) directory (with a `.global` suffix) and will be automatically run on every route change.

Example of an `auth` middleware protecting the `/dashboard` page:

::read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}
::

Nuxt offers route validation via the `validate` property in [`definePageMeta()`](https://nuxt.com/docs/3.x/api/utils/define-page-meta) in each page you wish to validate.

The `validate` property accepts the `route` as an argument. You can return a boolean value to determine whether or not this is a valid route to be rendered with this page. If you return `false`, this will cause a 404 error. You can also directly return an object with `statusCode`/`statusMessage` to customize the error returned.

If you have a more complex use case, then you can use anonymous route middleware instead.

::read-more{to="https://nuxt.com/docs/api/utils/define-page-meta"}
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

::read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}
::

## Navigation

The [`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link) component links pages between them. It renders an `<a>` tag with the `href` attribute set to the route of the page. Once the application is hydrated, page transitions are performed in JavaScript by updating the browser URL. This prevents full-page refreshes and allows for animated transitions.

When a [`<NuxtLink>`](https://nuxt.com/docs/3.x/api/components/nuxt-link) enters the viewport on the client side, Nuxt will automatically prefetch components and payload (generated pages) of the linked pages ahead of time, resulting in faster navigation.
```

Example 3 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
::

## Route Parameters

The [`useRoute()`](https://nuxt.com/docs/3.x/api/composables/use-route) composable can be used in a `<script setup>` block or a `setup()` method of a Vue component to access the current route details.
```

Example 4 (unknown):
```unknown
::read-more{to="https://nuxt.com/docs/api/composables/use-route"}
::

## Route Middleware

Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

::note
Route middleware runs within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.
::

There are three kinds of route middleware:

1. Anonymous (or inline) route middleware, which are defined directly in the pages where they are used.
2. Named route middleware, which are placed in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) directory and will be automatically loaded via asynchronous import when used on a page. (**Note**: The route middleware name is normalized to kebab-case, so `someMiddleware` becomes `some-middleware`.)
3. Global route middleware, which are placed in the [`middleware/`](https://nuxt.com/docs/3.x/guide/directory-structure/middleware) directory (with a `.global` suffix) and will be automatically run on every route change.

Example of an `auth` middleware protecting the `/dashboard` page:

::code-group
```

---
