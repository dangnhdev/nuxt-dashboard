# Nuxt - Composables

**Pages:** 6

---

## useNuxtData

**URL:** llms-txt#usenuxtdata

**Contents:**
- Usage
- Params
- Return Values
- Example
- Optimistic Updates
- Type

::note
`useNuxtData` gives you access to the current cached value of [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) , [`useLazyAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-lazy-async-data), [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) and [`useLazyFetch`](https://nuxt.com/docs/3.x/api/composables/use-lazy-fetch) with explicitly provided key.
::

The `useNuxtData` composable is used to access the current cached value of data-fetching composables such as `useAsyncData`, `useLazyAsyncData`, `useFetch`, and `useLazyFetch`. By providing the key used during the data fetch, you can retrieve the cached data and use it as needed.

This is particularly useful for optimizing performance by reusing already-fetched data or implementing features like Optimistic Updates or cascading data updates.

To use `useNuxtData`, ensure that the data-fetching composable (`useFetch`, `useAsyncData`, etc.) has been called with an explicitly provided key.

::video-accordion
---
title: Watch a video from LearnVue about useNuxtData
video-id: e-_u6swXRWk
---
::

- `key`: The unique key that identifies the cached data. This key should match the one used during the original data fetch.

- `data`: A reactive reference to the cached data associated with the provided key. If no cached data exists, the value will be `null`. This `Ref` automatically updates if the cached data changes, allowing seamless reactivity in your components.

The example below shows how you can use cached data as a placeholder while the most recent data is being fetched from the server.

## Optimistic Updates

The example below shows how implementing Optimistic Updates can be achieved using useNuxtData.

Optimistic Updates is a technique where the user interface is updated immediately, assuming a server operation will succeed. If the operation eventually fails, the UI is rolled back to its previous state.

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
## Optimistic Updates

The example below shows how implementing Optimistic Updates can be achieved using useNuxtData.

Optimistic Updates is a technique where the user interface is updated immediately, assuming a server operation will succeed. If the operation eventually fails, the UI is rolled back to its previous state.
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
## Type
```

---

## `usePreviewMode`

**URL:** llms-txt#`usepreviewmode`

**Contents:**
- Options
  - Custom `enable` check
  - Modify default state
  - Customize the `onEnable` and `onDisable` callbacks
- Example

Preview mode allows you to see how your changes would be displayed on a live site without revealing them to users.

You can use the built-in `usePreviewMode` composable to access and control preview state in Nuxt. If the composable detects preview mode it will automatically force any updates necessary for [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) to rerender preview content.

### Custom `enable` check

You can specify a custom way to enable preview mode. By default the `usePreviewMode` composable will enable preview mode if there is a `preview` param in url that is equal to `true` (for example, `http://localhost:3000?preview=true`). You can wrap the `usePreviewMode` into custom composable, to keep options consistent across usages and prevent any errors.

### Modify default state

`usePreviewMode` will try to store the value of a `token` param from url in state. You can modify this state and it will be available for all [`usePreviewMode`](https://nuxt.com/docs/3.x/api/composables/use-preview-mode) calls.

::note
The `getState` function will append returned values to current state, so be careful not to accidentally overwrite important state.
::

### Customize the `onEnable` and `onDisable` callbacks

By default, when `usePreviewMode` is enabled, it will call `refreshNuxtData()` to re-fetch all data from the server.

When preview mode is disabled, the composable will attach a callback to call `refreshNuxtData()` to run after a subsequent router navigation.

You can specify custom callbacks to be triggered by providing your own functions for the `onEnable` and `onDisable` options.

The example below creates a page where part of a content is rendered only in preview mode.

Now you can generate your site and serve it:

Then you can see your preview page by adding the query param `preview` to the end of the page you want to see once, for example `http://localhost:3000/?preview=true`.

::note
`usePreviewMode` should be tested locally with `nuxt generate` and then `nuxt preview` rather than `nuxt dev`. (The [preview command](https://nuxt.com/docs/3.x/api/commands/preview) is not related to preview mode.)
::

**Examples:**

Example 1 (ts):
```ts
const { enabled, state } = usePreviewMode()
```

Example 2 (ts):
```ts
export function useMyPreviewMode () {
  const route = useRoute()
  return usePreviewMode({
    shouldEnable: () => {
      return !!route.query.customPreview
    },
  })
}
```

Example 3 (ts):
```ts
const data1 = ref('data1')

const { enabled, state } = usePreviewMode({
  getState: (currentState) => {
    return { data1, data2: 'data2' }
  },
})
```

Example 4 (ts):
```ts
const { enabled, state } = usePreviewMode({
  onEnable: () => {
    console.log('preview mode has been enabled')
  },
  onDisable: () => {
    console.log('preview mode has been disabled')
  },
})
```

---

## refreshNuxtData

**URL:** llms-txt#refreshnuxtdata

**Contents:**
- Type
- Parameters
- Return Values
- Examples
  - Refresh All Data
  - Refresh Specific Data

`refreshNuxtData` is used to refetch all or specific `asyncData` instances, including those from [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data), [`useLazyAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-lazy-async-data), [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch), and [`useLazyFetch`](https://nuxt.com/docs/3.x/api/composables/use-lazy-fetch).

::note
If your component is cached by `<KeepAlive>` and enters a deactivated state, the `asyncData` inside the component will still be refetched until the component is unmounted.
::

- `keys`: A single string or an array of strings as `keys` that are used to fetch the data. This parameter is **optional**. All [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) keys are re-fetched when no `keys` are explicitly specified.

`refreshNuxtData` returns a promise, resolving when all or specific `asyncData` instances have been refreshed.

This example below refreshes all data being fetched using `useAsyncData` and `useFetch` in Nuxt application.

### Refresh Specific Data

This example below refreshes only data where the key matches to `count` and `user`.

::note
If you have access to the `asyncData` instance, it is recommended to use its `refresh` or `execute` method as the preferred way to refetch the data.
::

::read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}
::

**Examples:**

Example 1 (unknown):
```unknown
## Parameters

- `keys`: A single string or an array of strings as `keys` that are used to fetch the data. This parameter is **optional**. All [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/3.x/api/composables/use-fetch) keys are re-fetched when no `keys` are explicitly specified.

## Return Values

`refreshNuxtData` returns a promise, resolving when all or specific `asyncData` instances have been refreshed.

## Examples

### Refresh All Data

This example below refreshes all data being fetched using `useAsyncData` and `useFetch` in Nuxt application.
```

Example 2 (unknown):
```unknown
### Refresh Specific Data

This example below refreshes only data where the key matches to `count` and `user`.
```

---

## clearNuxtState

**URL:** llms-txt#clearnuxtstate

**Contents:**
- Type
- Parameters

::note
This method is useful if you want to invalidate the state of `useState`.
::

- `keys`: One or an array of keys that are used in [`useState`](https://nuxt.com/docs/3.x/api/composables/use-state) to delete their cached state. If no keys are provided, **all state** will be invalidated.

---

## clearNuxtData

**URL:** llms-txt#clearnuxtdata

**Contents:**
- Type
- Parameters

::note
This method is useful if you want to invalidate the data fetching for another page.
::

- `keys`: One or an array of keys that are used in [`useAsyncData`](https://nuxt.com/docs/3.x/api/composables/use-async-data) to delete their cached data. If no keys are provided, **all data** will be invalidated.

---

## useHead

**URL:** llms-txt#usehead

**Contents:**
- Type
- Params
  - `meta`

The [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) composable function allows you to manage your head tags in a programmatic and reactive way, powered by [Unhead](https://unhead.unjs.io){rel="nofollow"}. If the data comes from a user or other untrusted source, we recommend you check out [`useHeadSafe`](https://nuxt.com/docs/3.x/api/composables/use-head-safe).

::read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}
::

Below are the non-reactive types for [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) .

See [@unhead/vue](https://github.com/unjs/unhead/blob/main/packages/vue/src/types/schema.ts){rel="nofollow"} for more detailed types.

::note
The properties of `useHead` can be dynamic, accepting `ref`, `computed` and `reactive` properties. `meta` parameter can also accept a function returning an object to make the entire object reactive.
::

**Type**: `MetaObject`

An object accepting the following head metadata:

- `meta`: Each element in the array is mapped to a newly-created `<meta>` tag, where object properties are mapped to the corresponding attributes.

- **Type**: `Array<Record<string, any>>`
- `link`: Each element in the array is mapped to a newly-created `<link>` tag, where object properties are mapped to the corresponding attributes.

- **Type**: `Array<Record<string, any>>`
- `style`: Each element in the array is mapped to a newly-created `<style>` tag, where object properties are mapped to the corresponding attributes.

- **Type**: `Array<Record<string, any>>`
- `script`: Each element in the array is mapped to a newly-created `<script>` tag, where object properties are mapped to the corresponding attributes.

- **Type**: `Array<Record<string, any>>`
- `noscript`: Each element in the array is mapped to a newly-created `<noscript>` tag, where object properties are mapped to the corresponding attributes.

- **Type**: `Array<Record<string, any>>`
- `titleTemplate`: Configures dynamic template to customize the page title on an individual page.

- **Type**: `string` | `((title: string) => string)`
- `title`: Sets static page title on an individual page.

- **Type**: `string`
- `bodyAttrs`: Sets attributes of the `<body>` tag. Each object property is mapped to the corresponding attribute.

- **Type**: `Record<string, any>`
- `htmlAttrs`: Sets attributes of the `<html>` tag. Each object property is mapped to the corresponding attribute.

- **Type**: `Record<string, any>`

**Examples:**

Example 1 (unknown):
```unknown
Below are the non-reactive types for [`useHead`](https://nuxt.com/docs/3.x/api/composables/use-head) .
```

---
