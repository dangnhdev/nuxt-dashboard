# Nuxt-Ui - Composables

**Pages:** 5

---

## Carousel

**URL:** llms-txt#carousel

**Contents:**
- Usage
  - Items
  - Orientation
  - Arrows
  - Prev / Next
  - Prev / Next Icons
  - Dots
- Plugins
  - Autoplay
  - Auto Scroll

Use the Carousel component to display a list of items in a carousel.

::note
Use your mouse to drag the carousel horizontally on desktop.
::

Use the `items` prop as an array and render each item using the default slot:

You can also pass an array of objects with the following properties:

- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can control how many items are visible by using the [`basis`](https://tailwindcss.com/docs/flex-basis){rel="nofollow"} / [`width`](https://tailwindcss.com/docs/width){rel="nofollow"} utility classes on the `item`:

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

::note
Use your mouse to drag the carousel vertically on desktop.
::

::caution
You need to specify a `height` on the container in vertical orientation.
::

Use the `arrows` prop to display prev and next buttons.

Use the `prev` and `next` props to customize the prev and next buttons with any [Button](https://ui.nuxt.com/docs/components/button) props.

### Prev / Next Icons

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-arrow-left` / `i-lucide-arrow-right`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize these icons globally in your `app.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize these icons globally in your `vite.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.
  :::
::

Use the `dots` prop to display a list of dots to scroll to a specific slide.

The number of dots is based on the number of slides displayed in the view:

The Carousel component implements the official [Embla Carousel plugins](https://www.embla-carousel.com/plugins/){rel="nofollow"}.

This plugin is used to extend Embla Carousel with **autoplay** functionality.

Use the `autoplay` prop as a boolean or an object to configure the [Autoplay plugin](https://www.embla-carousel.com/plugins/autoplay/){rel="nofollow"}.

::note
In this example, we're using the `loop` prop for an infinite carousel.
::

This plugin is used to extend Embla Carousel with **auto scroll** functionality.

Use the `auto-scroll` prop as a boolean or an object to configure the [Auto Scroll plugin](https://www.embla-carousel.com/plugins/auto-scroll/){rel="nofollow"}.

::note
In this example, we're using the `loop` prop for an infinite carousel.
::

This plugin is used to extend Embla Carousel with **auto height** functionality. It changes the height of the carousel container to fit the height of the highest slide in view.

Use the `auto-height` prop as a boolean or an object to configure the [Auto Height plugin](https://www.embla-carousel.com/plugins/auto-height/){rel="nofollow"}.

::note
In this example, we add the `transition-[height]` class on the container to animate the height change.
::

Class Names is a **class name toggle** utility plugin for Embla Carousel that enables you to automate the toggling of class names on your carousel.

Use the `class-names` prop as a boolean or an object to configure the [Class Names plugin](https://www.embla-carousel.com/plugins/class-names/){rel="nofollow"}.

::note
In this example, we add the `transition-opacity [&:not(.is-snapped)]:opacity-10` classes on the `item` to animate the opacity change.
::

This plugin is used to replace the Embla Carousel scroll functionality with **fade transitions**.

Use the `fade` prop as a boolean or an object to configure the [Fade plugin](https://www.embla-carousel.com/plugins/fade/){rel="nofollow"}.

This plugin is used to extend Embla Carousel with the ability to **use the mouse/trackpad wheel** to navigate the carousel.

Use the `wheel-gestures` prop as a boolean or an object to configure the [Wheel Gestures plugin](https://www.embla-carousel.com/plugins/wheel-gestures/){rel="nofollow"}.

::note
Use your mouse wheel to scroll the carousel.
::

You can use the [`emblaApi`](https://ui.nuxt.com/#expose) function [scrollTo](https://www.embla-carousel.com/api/methods/#scrollto){rel="nofollow"} to display thumbnails under the carousel that allows you to navigate to a specific slide.

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}.

This will give you access to the following:

| Name                                                                                                                           | Type                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emblaRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                 |
| `emblaApi`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | [`Ref<EmblaCarouselType | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://www.embla-carousel.com/api/methods/#typescript){rel="nofollow"} |

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::note
Use your mouse to drag the carousel horizontally on desktop.
::

### Items

Use the `items` prop as an array and render each item using the default slot:
```

Example 2 (unknown):
```unknown
You can also pass an array of objects with the following properties:

- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can control how many items are visible by using the [`basis`](https://tailwindcss.com/docs/flex-basis){rel="nofollow"} / [`width`](https://tailwindcss.com/docs/width){rel="nofollow"} utility classes on the `item`:
```

Example 3 (unknown):
```unknown
### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

::note
Use your mouse to drag the carousel vertically on desktop.
::
```

Example 4 (unknown):
```unknown
::caution
You need to specify a `height` on the container in vertical orientation.
::

### Arrows

Use the `arrows` prop to display prev and next buttons.
```

---

## User

**URL:** llms-txt#user

**Contents:**
- Usage
  - Name
  - Description
  - Avatar
  - Chip
  - Size
  - Orientation
  - Link
- API
  - Props

Use the `name` prop to display a name for the user.

Use the `description` prop to display a description for the user.

Use the `avatar` prop to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) component.

::collapsible{name="all avatar properties"}

Use the `chip` prop to display a [Chip](https://ui.nuxt.com/docs/components/chip) component.

::collapsible{name="all chip properties"}

Use the `size` prop to change the size of the user avatar and text.

Use the `orientation` prop to change the orientation. Defaults to `horizontal`.

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

::note
The `NuxtLink` component will inherit all other attributes you pass to the `User` component.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UUser name="John Doe" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

Example 4 (ts):
```ts
/**
 * Props for the Avatar component
 */
interface AvatarProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  src?: string | undefined;
  alt?: string | undefined;
  icon?: string | object | undefined;
  text?: string | undefined;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "3xs" | "2xl" | "3xl" | undefined;
  chip?: boolean | ChipProps | undefined;
  ui?: { root?: ClassNameValue; image?: ClassNameValue; fallback?: ClassNameValue; icon?: ClassNameValue; } | undefined;
}
```

---

## Kbd

**URL:** llms-txt#kbd

**Contents:**
- Usage
  - Value
  - Color
  - Variant
  - Size
- Examples
  - `class` prop
- API
  - Props
  - Slots

Use the default slot to set the value of the Kbd.

Use the `value` prop to set the value of the Kbd.

You can pass special keys to the `value` prop that goes through the [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts){rel="nofollow"} composable. For example, the `meta` key displays as `⌘` on macOS and `Ctrl` on other platforms.

Use the `color` prop to change the color of the Kbd.

Use the `variant` prop to change the variant of the Kbd.

Use the `size` prop to change the size of the Kbd.

Use the `class` prop to override the base styles of the Badge.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UKbd>
    K
  </UKbd>
</template>
```

Example 2 (vue):
```vue
<template>
  <UKbd value="K" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UKbd value="meta" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UKbd color="neutral">
    K
  </UKbd>
</template>
```

---

## useToast

**URL:** llms-txt#usetoast

**Contents:**
- Usage
- API
  - add()
  - update()
  - remove()
  - clear()
  - `toasts`

Use the auto-imported `useToast` composable to display [Toast](https://ui.nuxt.com/docs/components/toast) notifications.

- The `useToast` composable uses Nuxt's `useState` to manage the toast state, ensuring reactivity across your application.
- A maximum of 5 toasts are displayed at a time. When adding a new toast that would exceed this limit, the oldest toast is automatically removed.
- When removing a toast, there's a 200ms delay before it's actually removed from the state, allowing for exit animations.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses our [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue){rel="nofollow"} component which uses the [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider){rel="nofollow"} component from Reka UI.
::

::tip{to="https://ui.nuxt.com/docs/components/toast"}
Learn how to customize the appearance and behavior of toasts in the **Toast** component documentation.
::

`useToast()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

The `useToast` composable provides methods to manage toast notifications globally.

`add(toast: Partial<Toast>): Toast`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Adds a new toast notification.

::field-group
  :::field{required name="toast" required="true" type="Partial<Toast>"}
  A partial `Toast` object with the following properties:
  
    ::::collapsible
      :::::field-group
        ::::::field{name="id" type="string | number"}
        A unique identifier for the toast. If not provided, a timestamp will be used.
        ::::::
      
        ::::::field{name="open" type="boolean"}
        Whether the toast is open. Defaults to `true`.
        ::::::
      
        ::::::field{name="..." type="Toast"}
        Other properties from the `Toast` interface.
        ::::::
      :::::
    ::::
  :::
::

**Returns:** The complete `Toast` object that was added.

`update(id: string | number, toast: Partial<Toast>): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Updates an existing toast notification.

::field-group
  :::field{required name="id" required="true" type="string | number"}
  The unique identifier of the toast to update.
  :::

:::field{required name="toast" required="true" type="Partial<Toast>"}
  A partial `Toast` object with the properties to update.
  :::
::

`remove(id: string | number): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Removes a toast notification.

::field-group
  :::field{required name="id" required="true" type="string | number"}
  The unique identifier of the toast to remove.
  :::
::

`clear(): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Removes all toast notifications.

`toasts: Ref<Toast[]>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

- Type: `Ref<Toast[]>`
- Description: A reactive array containing all current toast notifications.

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const toast = useToast()
</script>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

Example 3 (vue):
```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

Example 4 (vue):
```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

---

## Toast

**URL:** llms-txt#toast

**Contents:**
- Usage
  - Title
  - Description
  - Icon
  - Avatar
  - Color
  - Close
  - Close Icon
  - Actions
  - Progress

Use the [useToast](https://ui.nuxt.com/docs/composables/use-toast) composable to display a toast in your application.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses our [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue){rel="nofollow"} component which uses the [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider){rel="nofollow"} component from Reka UI.
::

::tip{to="https://ui.nuxt.com/docs/components/app#props"}
You can check the `App` component `toaster` prop to see how to configure the Toaster globally.
::

Pass a `title` field to the `toast.add` method to display a title.

Pass a `description` field to the `toast.add` method to display a description.

Pass an `icon` field to the `toast.add` method to display an [Icon](https://ui.nuxt.com/docs/components/icon).

Pass an `avatar` field to the `toast.add` method to display an [Avatar](https://ui.nuxt.com/docs/components/avatar).

Pass a `color` field to the `toast.add` method to change the color of the Toast.

Pass a `close` field to customize or hide the close [Button](https://ui.nuxt.com/docs/components/button) (with `false` value).

Pass a `closeIcon` field to customize the close button [Icon](https://ui.nuxt.com/docs/components/icon). Default to `i-lucide-x`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.
  :::
::

Pass an `actions` field to add some [Button](https://ui.nuxt.com/docs/components/button) actions to the Toast.

Pass a `progress` field to customize or hide the [Progress](https://ui.nuxt.com/docs/components/progress) bar (with `false` value).

::tip
The Progress bar inherits the Toast color by default, but you can override it using the `progress.color` field.
::

Pass an `orientation` field to the `toast.add` method to change the orientation of the Toast.

::note{to="https://ui.nuxt.com/components/app"}
Nuxt UI provides an **App** component that wraps your app to provide global configurations.
::

### Change global position

Change the `toaster.position` prop on the [App](https://ui.nuxt.com/docs/components/app#props) component to change the position of the toasts.

::note{to="https://github.com/nuxt/ui/blob/v4/docs/app/app.config.ts#L3"}
In this example, we use the `AppConfig` to configure the `position` prop of the `Toaster` component globally.
::

### Change global duration

Change the `toaster.duration` prop on the [App](https://ui.nuxt.com/docs/components/app#props) component to change the duration of the toasts.

::note{to="https://github.com/nuxt/ui/blob/v4/docs/app/app.config.ts#L4"}
In this example, we use the `AppConfig` to configure the `duration` prop of the `Toaster` component globally.
::

### Change global max :badge{label="4.1+"}

Change the `toaster.max` prop on the [App](https://ui.nuxt.com/docs/components/app#props) component to change the max number of toasts displayed at once.

::note{to="https://github.com/nuxt/ui/blob/v4/docs/app/app.config.ts#L5"}
In this example, we use the `AppConfig` to configure the `max` prop of the `Toaster` component globally.
::

Set the `toaster.expand` prop to `false` on the [App](https://ui.nuxt.com/docs/components/app#props) component to display stacked toasts (inspired by [Sonner](https://sonner.emilkowal.ski/){rel="nofollow"}).

::tip
You can hover over the toasts to expand them. This will also pause the timer of the toasts.
::

::note{to="https://github.com/nuxt/ui/blob/v4/docs/app/app.config.ts#L6"}
In this example, we use the `AppConfig` to configure the `expand` prop of the `Toaster` component globally.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses our [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue){rel="nofollow"} component which uses the [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider){rel="nofollow"} component from Reka UI.
::

::tip{to="https://ui.nuxt.com/docs/components/app#props"}
You can check the `App` component `toaster` prop to see how to configure the Toaster globally.
::

### Title

Pass a `title` field to the `toast.add` method to display a title.
```

Example 2 (unknown):
```unknown
### Description

Pass a `description` field to the `toast.add` method to display a description.
```

Example 3 (unknown):
```unknown
### Icon

Pass an `icon` field to the `toast.add` method to display an [Icon](https://ui.nuxt.com/docs/components/icon).
```

Example 4 (unknown):
```unknown
### Avatar

Pass an `avatar` field to the `toast.add` method to display an [Avatar](https://ui.nuxt.com/docs/components/avatar).
```

---
