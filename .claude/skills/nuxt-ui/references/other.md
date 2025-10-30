# Nuxt-Ui - Other

**Pages:** 80

---

## PageSection

**URL:** llms-txt#pagesection

**Contents:**
- Usage
  - Title
  - Description
  - Headline
  - Icon
  - Features
  - Links
  - Orientation
  - Reverse
- API

The PageSection component wraps your content in a [Container](https://ui.nuxt.com/docs/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

::code-preview
  :::u-page-section
  ---
  features:
    - title: Icons
      description: Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons
        from Iconify.
      icon: i-lucide-smile
      to: /docs/getting-started/integrations/icons
    - title: Fonts
      description: Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font
        optimization.
      icon: i-lucide-a-large-small
      to: /docs/getting-started/integrations/fonts
    - title: Color Mode
      description: Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.
      icon: i-lucide-sun-moon
      to: /docs/getting-started/integrations/color-mode
  description: Nuxt UI provides a comprehensive suite of components and utilities
    to help you build beautiful and accessible web applications with Vue and Nuxt.
  headline: Features
  title: Beautiful Vue UI components
  ---
  :::
::

Use it after a [PageHero](https://ui.nuxt.com/docs/components/page-hero) component:

Use the `title` prop to set the title of the section.

Use the `description` prop to set the description of the section.

Use the `headline` prop to set the headline of the section.

Use the `icon` prop to set the icon of the section.

Use the `features` prop to display a list of [PageFeature](https://ui.nuxt.com/docs/components/page-feature) under the description as an array of objects with the following properties:

- `title?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: 'horizontal' | 'vertical'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) under the description.

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

Use the `reverse` prop to reverse the orientation of the default slot.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Title

Use the `title` prop to set the title of the section.
```

Example 2 (unknown):
```unknown
### Description

Use the `description` prop to set the description of the section.
```

Example 3 (unknown):
```unknown
### Headline

Use the `headline` prop to set the headline of the section.
```

Example 4 (unknown):
```unknown
### Icon

Use the `icon` prop to set the icon of the section.
```

---

## Migration to v4

**URL:** llms-txt#migration-to-v4

**Contents:**
- Migrate your project
  - From Nuxt UI Pro
  - From Nuxt UI
- Changes from v3
  - Renamed ButtonGroup
  - Renamed PageMarquee
  - Removed PageAccordion
  - Renamed model modifiers
  - Changes to Form component
  - Removed deprecated utilities

Nuxt UI v4 marks a major milestone: **Nuxt UI and Nuxt UI Pro are now unified into a single, fully open-source and free library**. You now have access to 100+ production-ready components, all available in the `@nuxt/ui` package.

::note
Nuxt UI v4 requires **Nuxt 4** due to some dependencies. Make sure to upgrade to Nuxt 4 before migrating to Nuxt UI v4.
::

This guide provides step-by-step instructions to migrate your application from v3 to v4.

## Migrate your project

1. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your `package.json`:

::code-group{sync="pm"}

::framework-only
#nuxt
  :::div
  2. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your `nuxt.config.ts`:
  
  
  :::

#vue
  :::div
  2. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your `vite.config.ts`:
  
  
  :::
::

::framework-only
#nuxt
  :::div
  3. Use the `ui` key instead of `uiPro` in your `app.config.ts`:
  
  
  :::

#vue
  :::div
  3. Use the `ui` key instead of `uiPro` in your `vite.config.ts`:
  
  
  :::
::

4. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your CSS:

::framework-only
#nuxt
  :::div
  
  
    ::::warning
    If you are upgrading to Nuxt 4 at the same time as Nuxt UI v4, make sure to update the `@source` directive to match the new directory structure.
    
    
    ::::
  :::

#vue
  :::div
  
  :::
::

5. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your imports:

1. When upgrading from Nuxt UI v3, you simply need to update to v4:

::code-group{sync="pm"}

After upgrading to Nuxt UI v4, please note the following important changes:

### Renamed ButtonGroup

The `ButtonGroup` component has been renamed to [`FieldGroup`](https://ui.nuxt.com/docs/components/field-group):

### Renamed PageMarquee

The `PageMarquee` component has been renamed to [`Marquee`](https://ui.nuxt.com/docs/components/marquee):

### Removed PageAccordion

The `PageAccordion` component has been removed in favor of [`Accordion`](https://ui.nuxt.com/docs/components/accordion):

::note
The `PageAccordion` component was a wrapper that set `unmount-on-hide` to `false` and customized the `ui` prop.
::

### Renamed model modifiers

The `modelModifiers` shape used by [`Input`](https://ui.nuxt.com/docs/components/input), [`InputNumber`](https://ui.nuxt.com/docs/components/input-number) and [`Textarea`](https://ui.nuxt.com/docs/components/textarea) has changed in v4:

1. The `nullify` modifier was renamed to `nullable` (it converts empty/blank values to `null`).
2. A new `optional` modifier was added (it converts empty/blank values to `undefined`).

Use `nullable` when you want empty values as `null`, and `optional` when you prefer `undefined` for absent values.

### Changes to Form component

The `Form` component has been improved in v4 with better state management and nested form handling. Here are the key changes you need to be aware of:

1. Schema **transformations will only*&#x2A; be applied to the **`@submit` data** and will no longer mutate the form's state. This provides better predictability and prevents unexpected state mutations.
2. **Nested forms must be enabled explicitly** using the `nested` prop. This makes the component behavior more explicit and prevents accidental nested form creation.
3. **Nested forms should now provide a `name`** prop (similar to `UFormField`) and will automatically inherit their state from their parent form.

### Removed deprecated utilities

Some **Nuxt Content utilities** that were previously available in Nuxt UI Pro have been **removed** in v4:

- `findPageBreadcrumb`
- `findPageHeadline`

These are now fully provided by Nuxt Content. Make sure to update your imports and usage accordingly.

### AI SDK v5 migration (optional)

This section only applies if you're using the AI SDK and chat components (`ChatMessage`, `ChatMessages`, `ChatPrompt`, `ChatPromptSubmit`, `ChatPalette`). If you're not using AI features, you can skip this section.

1. Update `@ai-sdk/vue` and `ai` dependencies in your `package.json`:

2. `useChat` composable has been replaced with the new `Chat` class:

3. Messages now use `parts` instead of `content`:

4. Some methods have been renamed:

5. New `getTextFromMessage` utility to extract text from AI SDK v5 message parts:

::note
---
target: _blank
to: https://ai-sdk.dev/docs/migration-guides/migration-guide-5-0
---
For more details on AI SDK v5 changes, review the **official AI SDK v5 migration guide**.
::

::tip{target="_blank" to="https://github.com/nuxt/ui/pull/4698"}
View all changes from AI SDK v4 to v5 **in the upgrade PR** for a detailed migration reference.
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

::framework-only
#nuxt
  :::div
  2. Replace `@nuxt/ui-pro` with `@nuxt/ui` in your `nuxt.config.ts`:
```

---

## Timeline

**URL:** llms-txt#timeline

**Contents:**
- Usage
  - Items
  - Color
  - Size
  - Orientation
  - Reverse
- Examples
  - Control active item
  - With alternating layout
  - With custom slot

Use the Timeline component to display a list of items in a timeline.

Use the `items` prop as an array of objects with the following properties:

- `date?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `title?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string | number`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `color` prop to change the color of the active items in a Timeline.

Use the `size` prop to change the size of the Timeline.

Use the `orientation` prop to change the orientation of the Timeline. Defaults to `vertical`.

Use the reverse prop to reverse the direction of the Timeline.

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the index of the item.

::tip
You can also pass the `value` of one of the items if provided.
::

### With alternating layout

Use the `ui` prop to create a Timeline with alternating layout.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}-indicator`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-date`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-title`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-description`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the available slots to create a more complex Timeline.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket',
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette',
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code',
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
  },
])
</script>

<template>
  <UTimeline :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket',
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette',
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code',
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
  },
])
</script>

<template>
  <UTimeline :default-value="2" class="w-96" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket',
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette',
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code',
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
  },
])
</script>

<template>
  <UTimeline color="neutral" :default-value="2" class="w-96" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
    icon: 'i-lucide-rocket',
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
    icon: 'i-lucide-palette',
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
    icon: 'i-lucide-code',
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization. Deployed the application to production.',
    icon: 'i-lucide-check-circle',
  },
])
</script>

<template>
  <UTimeline size="xs" :default-value="2" class="w-96" :items="items" />
</template>
```

---

## ChatMessages

**URL:** llms-txt#chatmessages

**Contents:**
- Usage
  - Messages
  - Status
  - User
  - Assistant
  - Auto Scroll
  - Auto Scroll Icon
  - Should Auto Scroll
  - Should Scroll To Bottom
- Examples

The ChatMessages component displays a list of [ChatMessage](https://ui.nuxt.com/docs/components/chat-message) components using either the default slot or the `messages` prop.

::callout{icon="i-lucide-rocket"}
This component is purpose-built for AI chatbots with features like:

- Initial scroll to the bottom upon loading ([`shouldScrollToBottom`](https://ui.nuxt.com/#should-scroll-to-bottom)).
- Continuous scrolling down as new messages arrive ([`shouldAutoScroll`](https://ui.nuxt.com/#should-auto-scroll)).
- An "Auto scroll" button appears when scrolled up, allowing users to jump back to the latest messages ([`autoScroll`](https://ui.nuxt.com/#auto-scroll)).
- A loading indicator displays while the assistant is processing ([`status`](https://ui.nuxt.com/#status)).
- Submitted messages are scrolled to the top of the viewport and the height of the last user message is dynamically adjusted.
::

Use the `messages` prop to display a list of chat messages.

Use the `status` prop to display a visual indicator when the assistant is processing.

::note
Here's the detail of the different statuses from the AI SDK v5 Chat class:

- `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
- `streaming`: The response is actively streaming in from the API, receiving chunks of data.
- `ready`: The full response has been received and processed; a new user message can be submitted.
- `error`: An error occurred during the API request, preventing successful completion.
::

Use the `user` prop to change the [ChatMessage](https://ui.nuxt.com/docs/components/chat-message) props for `user` messages. Defaults to:

- `side: 'right'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'soft'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `assistant` prop to change the [ChatMessage](https://ui.nuxt.com/docs/components/chat-message) props for `assistant` messages. Defaults to:

- `side: 'left'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'naked'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `auto-scroll` prop to customize or hide the auto scroll button (with `false` value) displayed when scrolling to the top of the chat. Defaults to:

- `color: 'neutral'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'outline'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `auto-scroll-icon` prop to customize the auto scroll button [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-arrow-down`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowDown` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowDown` key.
  :::
::

### Should Auto Scroll

Use the `should-auto-scroll` prop to enable/disable continuous auto scroll while messages are streaming. Defaults to `false`.

### Should Scroll To Bottom

Use the `should-scroll-to-bottom` prop to enable/disable bottom auto scroll when the component is mounted. Defaults to `true`.

::note{target="_blank" to="https://ai-sdk.dev/docs/getting-started/nuxt"}
These chat components are designed to be used with the **AI SDK v5** from **Vercel AI SDK**.
::

::callout
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt-ui-templates/chat
---
Check out the source code of our **AI Chat template** on GitHub for a real-life example.
::

Use the ChatMessages component with the `Chat` class from AI SDK v5 to display a list of chat messages within a page.

Pass the `messages` prop alongside the `status` prop that will be used for the auto scroll and the indicator display.

::note
In this example, we use the `MDC` component from [`@nuxtjs/mdc`](https://github.com/nuxt-modules/mdc){rel="nofollow"} to render the content of the message. The `getTextFromMessage` utility extracts the text content from the AI SDK V5 message parts. As Nuxt UI provides pre-styled prose components, your content will be automatically styled.
::

### With indicator slot

You can customize the loading indicator that appears when the status is `submitted`.

::tip
You can use all the slots of the [`ChatMessage`](https://ui.nuxt.com/docs/components/chat-message#slots) component inside ChatMessages, they are automatically forwarded allowing you to customize individual messages when using the `messages` prop.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::callout{icon="i-lucide-rocket"}
This component is purpose-built for AI chatbots with features like:

- Initial scroll to the bottom upon loading ([`shouldScrollToBottom`](https://ui.nuxt.com/#should-scroll-to-bottom)).
- Continuous scrolling down as new messages arrive ([`shouldAutoScroll`](https://ui.nuxt.com/#should-auto-scroll)).
- An "Auto scroll" button appears when scrolled up, allowing users to jump back to the latest messages ([`autoScroll`](https://ui.nuxt.com/#auto-scroll)).
- A loading indicator displays while the assistant is processing ([`status`](https://ui.nuxt.com/#status)).
- Submitted messages are scrolled to the top of the viewport and the height of the last user message is dynamically adjusted.
::

### Messages

Use the `messages` prop to display a list of chat messages.
```

Example 2 (unknown):
```unknown
### Status

Use the `status` prop to display a visual indicator when the assistant is processing.
```

Example 3 (unknown):
```unknown
::note
Here's the detail of the different statuses from the AI SDK v5 Chat class:

- `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
- `streaming`: The response is actively streaming in from the API, receiving chunks of data.
- `ready`: The full response has been received and processed; a new user message can be submitted.
- `error`: An error occurred during the API request, preventing successful completion.
::

### User

Use the `user` prop to change the [ChatMessage](https://ui.nuxt.com/docs/components/chat-message) props for `user` messages. Defaults to:

- `side: 'right'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'soft'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
```

Example 4 (unknown):
```unknown
### Assistant

Use the `assistant` prop to change the [ChatMessage](https://ui.nuxt.com/docs/components/chat-message) props for `assistant` messages. Defaults to:

- `side: 'left'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'naked'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
```

---

## ContentToc

**URL:** llms-txt#contenttoc

**Contents:**
- Usage
  - Title
  - Color
  - Highlight
- Examples
  - Within a page
- API
  - Props
  - Slots
  - Emits

::warning{to="https://ui.nuxt.com/docs/getting-started/integrations/content"}
This component is only available when the `@nuxt/content` module is installed.
::

Use the `links` prop with the `page?.body?.toc?.links`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} you get when fetching a page.

Use the `title` prop to change the title of the Table of Contents.

Use the `color` prop to change the color of the links.

Use the `highlight` prop to display a highlighted border for the active item.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.

Use the ContentToc component in a page to display the Table of Contents:

::component-changelog{prefix="content"}
::

**Examples:**

Example 1 (unknown):
```unknown
### Title

Use the `title` prop to change the title of the Table of Contents.
```

Example 2 (unknown):
```unknown
### Color

Use the `color` prop to change the color of the links.
```

Example 3 (unknown):
```unknown
### Highlight

Use the `highlight` prop to display a highlighted border for the active item.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.
```

Example 4 (unknown):
```unknown
## Examples

### Within a page

Use the ContentToc component in a page to display the Table of Contents:
```

---

## ColorModeImage

**URL:** llms-txt#colormodeimage

**Contents:**
- Usage
- API
  - Props
- Changelog

The ColorModeImage component uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image){rel="nofollow"} is installed, falling back to `img` otherwise.

::note
Switch between light and dark mode to see the different images: :u-color-mode-select{size="sm"}
::

::component-changelog{prefix="color-mode"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorModeImage light="https://picsum.photos/id/29/400" dark="https://picsum.photos/id/46/400" :width="200" :height="200" />
</template>
```

Example 2 (ts):
```ts
/**
 * Props for the ColorModeImage component
 */
interface ColorModeImageProps {
  dark: string;
  light: string;
}
```

---

## PricingPlans

**URL:** llms-txt#pricingplans

**Contents:**
- Usage
  - Plans
  - Orientation
  - Compact
  - Scale
- Examples
  - Within a page
- API
  - Props
  - Slots

The PricingPlans component provides a flexible layout to display a list of [PricingPlan](https://ui.nuxt.com/docs/components/pricing-plan) components using either the default slot or the `plans` prop.

::tip
The grid columns will be automatically calculated based on the number of plans, this works with the `plans` prop but also with the default slot.
::

Use the `plans` prop as an array of objects with the properties of the [PricingPlan](https://ui.nuxt.com/docs/components/pricing-plan#props) component.

Use the `orientation` prop to change the orientation of the PricingPlans. Defaults to `horizontal`.

::tip
When using the `plans` prop instead of the default slot, the `orientation` of the plans is automatically reversed, `horizontal` to `vertical` and vice versa.
::

Use the `compact` prop to reduce the padding between the plans when one of the plans is scaled for a better visual balance.

Use the `scale` prop to adjust the spacing between the plans when one of the plans is scaled for a better visual balance.

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PricingPlans component in a page to create a pricing page:

::note
In this example, the `plans` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
The grid columns will be automatically calculated based on the number of plans, this works with the `plans` prop but also with the default slot.
::

### Plans

Use the `plans` prop as an array of objects with the properties of the [PricingPlan](https://ui.nuxt.com/docs/components/pricing-plan#props) component.
```

Example 2 (unknown):
```unknown
### Orientation

Use the `orientation` prop to change the orientation of the PricingPlans. Defaults to `horizontal`.
```

Example 3 (unknown):
```unknown
::tip
When using the `plans` prop instead of the default slot, the `orientation` of the plans is automatically reversed, `horizontal` to `vertical` and vice versa.
::

### Compact

Use the `compact` prop to reduce the padding between the plans when one of the plans is scaled for a better visual balance.
```

Example 4 (unknown):
```unknown
### Scale

Use the `scale` prop to adjust the spacing between the plans when one of the plans is scaled for a better visual balance.
```

---

## Migration to v3

**URL:** llms-txt#migration-to-v3

**Contents:**
- Migrate your project
  - Update Tailwind CSS
  - Update Nuxt UI
- Changes from v2
  - Updated design system
  - Updated theming system
  - Renamed components
  - Changed components
  - Changed composables
  - Changed form validation

Nuxt UI v3 is a new major version rebuilt from the ground up, introducing a modern architecture with significant performance improvements and an enhanced developer experience. This major release includes several breaking changes alongside powerful new features and capabilities:

- **Tailwind CSS v4**: Migration from JavaScript to CSS-based configuration
- **Reka UI**: Replacing Headless UI as the underlying component library
- **Tailwind Variants**: New styling API for component variants

This guide provides step by step instructions to migrate your application from v2 to v3.

## Migrate your project

::steps
### Update Tailwind CSS

Tailwind CSS v4 introduces significant changes to its configuration approach. The official Tailwind upgrade tool will help automate most of the migration process.

:::note
  ---
  target: _blank
  to: https://tailwindcss.com/docs/upgrade-guide#changes-from-v3
  ---
  For a detailed walkthrough of all changes, refer to the official **Tailwind CSS v4 upgrade guide**.
  :::

1. Create a `main.css` file and import it in your `nuxt.config.ts` file:

:::code-group
  
  
  
  :::

2. Run the Tailwind CSS upgrade tool:

3. Install the latest version of the package:

:::code-group{sync="pm"}
  
  
  
  
  
  
  
  :::

4. Import it in your CSS:

5. Wrap your app with the [App](https://ui.nuxt.com/docs/components/app) component:

Now that you have updated your project, you can start migrating your code. Here's a comprehensive list of all the breaking changes in Nuxt UI v3.

### Updated design system

In Nuxt UI v2, we had a mix between a design system with `primary`, `gray`, `error` aliases and all the colors from Tailwind CSS. We've replaced it with a proper [design system](https://ui.nuxt.com/docs/getting-started/theme/design-system) with 7 color aliases:

| Color                          | Default  | Description                                                 |
| ------------------------------ | -------- | ----------------------------------------------------------- |
| `primary`{color="primary"}     | `green`  | Main brand color, used as the default color for components. |
| `secondary`{color="secondary"} | `blue`   | Secondary color to complement the primary color.            |
| `success`{color="success"}     | `green`  | Used for success states.                                    |
| `info`{color="info"}           | `blue`   | Used for informational states.                              |
| `warning`{color="warning"}     | `yellow` | Used for warning states.                                    |
| `error`{color="error"}         | `red`    | Used for form error validation states.                      |
| `neutral`                      | `slate`  | Neutral color for backgrounds, text, etc.                   |

This change introduces several breaking changes that you need to be aware of:

- The `gray` color has been renamed to `neutral`

::note
You can also use the new [design tokens](https://ui.nuxt.com/docs/getting-started/theme/css-variables) to handle light and dark mode:

- The `gray`, `black` and `white` in the `color` props have been removed in favor of `neutral`:

- You can no longer use Tailwind CSS colors in the `color` props, use the new aliases instead:

::note{to="https://ui.nuxt.com/docs/getting-started/theme/design-system#colors"}
Learn how to extend the design system to add new color aliases.
::

- The color configuration in `app.config.ts` has been moved into a `colors` object:

### Updated theming system

Nuxt UI components are now styled using the [Tailwind Variants API](https://ui.nuxt.com/docs/getting-started/theme/components), which makes all the overrides you made using the `app.config.ts` and the `ui` prop obsolete.

- Update your [`app.config.ts`](https://ui.nuxt.com/docs/getting-started/theme/components#global-config) to override components with their new theme:

- Update your [`ui` props](https://ui.nuxt.com/docs/getting-started/theme/components#ui-prop) to override each component's slots using their new theme:

::tip{to="https://ui.nuxt.com/docs/components/button#theme"}
We can't detail all the changes here but you can check each component's theme in the **Theme** section.
::

### Renamed components

We've renamed some Nuxt UI components to align with the Reka UI naming convention:

| v2                     | v3                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| `Divider`              | [`Separator`](https://ui.nuxt.com/docs/components/separator)                                            |
| `Dropdown`             | [`DropdownMenu`](https://ui.nuxt.com/docs/components/dropdown-menu)                                     |
| `FormGroup`            | [`FormField`](https://ui.nuxt.com/docs/components/form-field)                                           |
| `Range`                | [`Slider`](https://ui.nuxt.com/docs/components/slider)                                                  |
| `Toggle`               | [`Switch`](https://ui.nuxt.com/docs/components/switch)                                                  |
| `Notification`         | [`Toast`](https://ui.nuxt.com/docs/components/toast)                                                    |
| `VerticalNavigation`   | [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) with `orientation="vertical"`   |
| `HorizontalNavigation` | [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) with `orientation="horizontal"` |

Here are the Nuxt UI Pro components that have been renamed or removed:

| v1                      | v3                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `BlogList`              | [`BlogPosts`](https://ui.nuxt.com/docs/components/blog-posts)                                                                      |
| `ColorModeToggle`       | [`ColorModeSwitch`](https://ui.nuxt.com/docs/components/color-mode-switch)                                                         |
| `DashboardCard`         | Removed (use [`PageCard`](https://ui.nuxt.com/docs/components/page-card) instead)                                                  |
| `DashboardLayout`       | [`DashboardGroup`](https://ui.nuxt.com/docs/components/dashboard-group)                                                            |
| `DashboardModal`        | Removed (use [`Modal`](https://ui.nuxt.com/docs/components/modal) instead)                                                         |
| `DashboardNavbarToggle` | [`DashboardSidebarToggle`](https://ui.nuxt.com/docs/components/dashboard-sidebar-toggle)                                           |
| `DashboardPage`         | Removed                                                                                                                            |
| `DashboardPanelContent` | Removed (use `#body` slot instead)                                                                                                 |
| `DashboardPanelHandle`  | [`DashboardResizeHandle`](https://ui.nuxt.com/docs/components/dashboard-resize-handle)                                             |
| `DashboardSection`      | Removed (use [`PageCard`](https://ui.nuxt.com/docs/components/page-card) instead)                                                  |
| `DashboardSidebarLinks` | Removed (use [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) instead)                                      |
| `DashboardSlideover`    | Removed (use [`Slideover`](https://ui.nuxt.com/docs/components/slideover) instead)                                                 |
| `FooterLinks`           | Removed (use [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) instead)                                      |
| `HeaderLinks`           | Removed (use [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) instead)                                      |
| `LandingCard`           | Removed (use [`PageCard`](https://ui.nuxt.com/docs/components/page-card) instead)                                                  |
| `LandingCTA`            | [`PageCTA`](https://ui.nuxt.com/docs/components/page-cta)                                                                          |
| `LandingFAQ`            | Removed (use [`Accordion`](https://ui.nuxt.com/docs/components/accordion) instead)                                                 |
| `LandingGrid`           | Removed (use [`PageGrid`](https://ui.nuxt.com/docs/components/page-grid) instead)                                                  |
| `LandingHero`           | Removed (use [`PageHero`](https://ui.nuxt.com/docs/components/page-hero) instead)                                                  |
| `LandingLogos`          | [`PageLogos`](https://ui.nuxt.com/docs/components/page-logos)                                                                      |
| `LandingSection`        | [`PageSection`](https://ui.nuxt.com/docs/components/page-section)                                                                  |
| `LandingTestimonial`    | Removed (use [`PageCard`](https://ui.nuxt.com/docs/components/page-card#as-a-testimonial) instead)                                 |
| `NavigationAccordion`   | [`ContentNavigation`](https://ui.nuxt.com/docs/components/content-navigation)                                                      |
| `NavigationLinks`       | [`ContentNavigation`](https://ui.nuxt.com/docs/components/content-navigation)                                                      |
| `NavigationTree`        | [`ContentNavigation`](https://ui.nuxt.com/docs/components/content-navigation)                                                      |
| `PageError`             | [`Error`](https://ui.nuxt.com/docs/components/error)                                                                               |
| `PricingCard`           | [`PricingPlan`](https://ui.nuxt.com/docs/components/pricing-plan)                                                                  |
| `PricingGrid`           | [`PricingPlans`](https://ui.nuxt.com/docs/components/pricing-plans)                                                                |
| `PricingSwitch`         | Removed (use [`Switch`](https://ui.nuxt.com/docs/components/switch) or [`Tabs`](https://ui.nuxt.com/docs/components/tabs) instead) |

### Changed components

In addition to the renamed components, there are lots of changes to the components API. Let's detail the most important ones:

- The `links` and `options` props have been renamed to `items` for consistency:

::note
This change affects the following components: `Breadcrumb`, `HorizontalNavigation`, `InputMenu`, `RadioGroup`, `Select`, `SelectMenu`, `VerticalNavigation`.
::

- The `click` field in different components has been removed in favor of the native Vue `onClick` event:

::note
This change affects the `Toast` component as well as all component that have `items` links like `NavigationMenu`, `DropdownMenu`, `CommandPalette`, etc.
::

- The global `Modals`, `Slideovers` and `Notifications` components have been removed in favor the [App](https://ui.nuxt.com/docs/components/app) component:

- The `v-model:open` directive and `default-open` prop are now used to control visibility:

::note
This change affects the following components: `ContextMenu`, `Modal` and `Slideover` and enables controlling visibility for `InputMenu`, `Select`, `SelectMenu` and `Tooltip`.
::

- The default slot is now used for the trigger and the content goes inside the `#content` slot (you don't need to use a `v-model:open` directive with this method):

::note
This change affects the following components: `Modal`, `Popover`, `Slideover`, `Tooltip`.
::

- A `#header`, `#body` and `#footer` slots have been added inside the `#content` slot like the `Card` component:

::note
This change affects the following components: `Modal`, `Slideover`.
::

### Changed composables

- The `useToast()` composable `timeout` prop has been renamed to `duration`:

- The `useModal` and `useSlideover` composables have been removed in favor of a more generic `useOverlay` composable:

Some important differences:

- The `useOverlay` composable is now used to create overlay instances
- Overlays that are opened, can be awaited for their result
- Overlays can no longer be close using `modal.close()` or `slideover.close()`, rather, they close automatically: either when a `close` event is fired explicitly from the opened component OR when the overlay closes itself (clicking on backdrop, pressing the ESC key, etc)
- To capture the return value in the parent component you must explictly emit a `close` event with the desired value

Props are now passed through a props attribute:

Closing a modal is now done through the `close` event. The `modal.open` method now returns an instance that can be used to await for the result of the modal whenever the modal is closed:

### Changed form validation

- The error object property for targeting form fields has been renamed from `path` to `name`:

::warning
This page is a work in progress, we'll improve it regularly.
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::

2. Run the Tailwind CSS upgrade tool:
```

Example 3 (unknown):
```unknown
### Update Nuxt UI

3. Install the latest version of the package:

  :::code-group{sync="pm"}
```

Example 4 (unknown):
```unknown

```

---

## Skeleton

**URL:** llms-txt#skeleton

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

Use the Skeleton component as-is to display a placeholder.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## API

### Props
```

Example 2 (unknown):
```unknown
### Slots
```

Example 3 (unknown):
```unknown
## Theme
```

---

## Stepper

**URL:** llms-txt#stepper

**Contents:**
- Usage
  - Items
  - Color
  - Size
  - Orientation
  - Disabled
- Examples
  - With controls
  - Control active item
  - With content slot

Use the Stepper component to display a list of items in a stepper.

Use the `items` prop as an array of objects with the following properties:

- `title?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `content?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string | number`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
Click on the items to navigate through the steps.
::

Use the `color` prop to change the color of the Stepper.

Use the `size` prop to change the size of the Stepper.

Use the `orientation` prop to change the orientation of the Stepper. Defaults to `horizontal`.

Use the `disabled` prop to disable navigation through the steps.

::note{to="https://ui.nuxt.com/#with-controls"}
This can be useful when you want to force navigation with controls.
::

You can add additional controls for the stepper using buttons.

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the index of the item.

::tip
You can also pass the `value` of one of the items if provided.
::

### With content slot

Use the `#content` slot to customize the content of each item.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}.

This will give you access to the following:

| Name                                                                                                                          | Type                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `next`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}    | `() => void`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}   |
| `prev`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}    | `() => void`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}   |
| `hasNext`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |
| `hasPrev`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
])
</script>

<template>
  <UStepper :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
])
</script>

<template>
  <UStepper class="w-full" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
])
</script>

<template>
  <UStepper color="neutral" class="w-full" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house',
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Checkout',
    description: 'Confirm your order',
  },
])
</script>

<template>
  <UStepper size="xl" class="w-full" :items="items" />
</template>
```

---

## Accordion

**URL:** llms-txt#accordion

**Contents:**
- Usage
  - Items
  - Multiple
  - Collapsible
  - Unmount
  - Disabled
  - Trailing Icon
- Examples
  - Control active item(s)
  - With drag and drop

Use the Accordion component to display a list of collapsible items.

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `trailingIcon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `content?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Set the `type` prop to `multiple` to allow multiple items to be active at the same time. Defaults to `single`.

When `type` is `single`, you can set the `collapsible` prop to `false` to prevent the active item from collapsing.

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the accordion is collapsed. Defaults to `true`.

::note
You can inspect the DOM to see each item's content being rendered.
::

Use the `disabled` property to disable the Accordion.

You can also disable a specific item by using the `disabled` property in the item object.

Use the `trailing-icon` prop to customize the trailing [Icon](https://ui.nuxt.com/docs/components/icon) of each item. Defaults to `i-lucide-chevron-down`.

::tip
You can also set an icon for a specific item by using the `trailingIcon` property in the item object.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.
  :::
::

### Control active item(s)

You can control the active item(s) by using the `default-value` prop or the `v-model` directive with the index of the item.

::tip
You can also pass the `value` of one of the items if provided.
::

::caution
When `type="multiple"`, ensure to pass an array to the `default-value` prop or the `v-model` directive.
::

### With drag and drop

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/){rel="nofollow"} composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html){rel="nofollow"} to enable drag and drop functionality on the Accordion. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/){rel="nofollow"} to provide a seamless drag and drop experience.

Use the `#body` slot to customize the body of each item.

::tip
The `#body` slot includes some pre-defined styles, use the [`#content` slot](https://ui.nuxt.com/#with-content-slot) if you want to start from scratch.
::

### With content slot

Use the `#content` slot to customize the content of each item.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-body`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

### With markdown content

You can use the [MDC](https://github.com/nuxt-modules/mdc?tab=readme-ov-file#mdc){rel="nofollow"} component from `@nuxtjs/mdc` to render markdown in the accordion items.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    label: 'Is Nuxt UI free to use?',
    content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.',
  },
  {
    label: 'Can I use Nuxt UI with Vue without Nuxt?',
    content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.',
  },
  {
    label: 'Is Nuxt UI production-ready?',
    content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.',
  },
])
</script>

<template>
  <UAccordion :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
])
</script>

<template>
  <UAccordion :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
])
</script>

<template>
  <UAccordion type="multiple" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
])
</script>

<template>
  <UAccordion :collapsible="false" :items="items" />
</template>
```

---

## Empty

**URL:** llms-txt#empty

**Contents:**
- Usage
  - Title
  - Description
  - Icon
  - Avatar
  - Actions
  - Variant
  - Size
- Examples
  - With slots

::code-preview
  :::u-empty
  ---
  actions:
    - icon: i-lucide-plus
      label: Create new
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
  description: It looks like you haven't added any projects. Create one to get started.
  icon: i-lucide-file
  title: No projects found
  ---
  :::
::

Use the `title` prop to set the title of the empty state.

Use the `description` prop to set the description of the empty state.

Use the `icon` prop to set the icon of the empty state.

Use the `avatar` prop to set the avatar of the empty state.

Use the `actions` prop to add some [Button](https://ui.nuxt.com/docs/components/button) actions to the empty state.

Use the `variant` prop to change the variant of the empty state.

Use the `size` prop to change the size of the empty state.

Use the available slots to create a more complex empty state.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UEmpty title="No projects found" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UEmpty title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UEmpty icon="i-lucide-file" title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

Example 4 (vue):
```vue
<template>
  <UEmpty title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

---

## RadioGroup

**URL:** llms-txt#radiogroup

**Contents:**
- Usage
  - Items
  - Value Key
  - Legend
  - Color
  - Variant
  - Size
  - Orientation
  - Indicator
  - Disabled

Use the `v-model` directive to control the value of the RadioGroup or the `default-value` prop to set the initial value when you do not need to control its state.

Use the `items` prop as an array of strings or numbers:

You can also pass an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`value?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#value-key)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::caution
When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.
::

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

Use the `legend` prop to set the legend of the RadioGroup.

Use the `color` prop to change the color of the RadioGroup.

Use the `variant` prop to change the variant of the RadioGroup.

Use the `size` prop to change the size of the RadioGroup.

Use the `orientation` prop to change the orientation of the RadioGroup. Defaults to `vertical`.

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

Use the `disabled` prop to disable the RadioGroup.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'System',
  'Light',
  'Dark',
])
</script>

<template>
  <URadioGroup model-value="System" :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'System',
  'Light',
  'Dark',
])
</script>

<template>
  <URadioGroup model-value="System" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui'

const items = ref<RadioGroupItem[]>([
  {
    label: 'System',
    description: 'This is the first option.',
    value: 'system',
  },
  {
    label: 'Light',
    description: 'This is the second option.',
    value: 'light',
  },
  {
    label: 'Dark',
    description: 'This is the third option.',
    value: 'dark',
  },
])
</script>

<template>
  <URadioGroup model-value="system" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui'

const items = ref<RadioGroupItem[]>([
  {
    label: 'System',
    description: 'This is the first option.',
    id: 'system',
  },
  {
    label: 'Light',
    description: 'This is the second option.',
    id: 'light',
  },
  {
    label: 'Dark',
    description: 'This is the third option.',
    id: 'dark',
  },
])
</script>

<template>
  <URadioGroup model-value="light" value-key="id" :items="items" />
</template>
```

---

## NavigationMenu

**URL:** llms-txt#navigationmenu

**Contents:**
- Usage
  - Items
  - Orientation
  - Collapsed
  - Highlight
  - Color
  - Variant
  - Trailing Icon
  - Arrow
  - Content Orientation

Use the NavigationMenu component to display a list of links horizontally or vertically.

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `badge?: string | number | BadgeProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `tooltip?: TooltipProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `trailingIcon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `type?: 'label' | 'trigger' | 'link'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `defaultOpen?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `open?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `onSelect?: (e: Event) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `children?: NavigationMenuChildItem[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::note
You can also pass an array of arrays to the `items` prop to display groups of items.
::

::tip
Each item can take a `children` array of objects with the following properties to create submenus:

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?: (e: Event) => void`
- `class?: any`
::

Use the `orientation` prop to change the orientation of the NavigationMenu.

::note
When orientation is `vertical`, an [Accordion](https://ui.nuxt.com/docs/components/accordion) component is used to display each group. You can control the open state of each item using the `open` and `defaultOpen` properties and change the behavior using the [`collapsible`](https://ui.nuxt.com/docs/components/accordion#collapsible) and [`type`](https://ui.nuxt.com/docs/components/accordion#multiple) props.
::

::note
Groups will be spaced when orientation is `horizontal` and separated when orientation is `vertical`.
::

In `vertical` orientation, use the `collapsed` prop to collapse the NavigationMenu, this can be useful in a sidebar for example.

::note
You can use the [`tooltip`](https://ui.nuxt.com/#with-tooltip-in-items) and [`popover`](https://ui.nuxt.com/#with-popover-in-items) props to display more information on the collapsed items.
::

Use the `highlight` prop to display a highlighted border for the active item.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.

::note
In this example, the `border-b` class is applied to display a border in `horizontal` orientation, this is not done by default to let you have a clean slate to work with.
::

::caution
In `vertical` orientation, the `highlight` prop only highlights the border of active children.
::

Use the `color` prop to change the color of the NavigationMenu.

Use the `variant` prop to change the variant of the NavigationMenu.

::note
The `highlight` prop changes the `pill` variant active item style. Try it out to see the difference.
::

Use the `trailing-icon` prop to customize the trailing [Icon](https://ui.nuxt.com/docs/components/icon) of each item. Defaults to `i-lucide-chevron-down`. This icon is only displayed when an item has children.

::tip
You can also set an icon for a specific item by using the `trailingIcon` property in the item object.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.
  :::
::

Use the `arrow` prop to display an arrow on the NavigationMenu content when items have children.

::note
The arrow is animated to follow the active item.
::

### Content Orientation

Use the `content-orientation` prop to change the orientation of the content.

::warning
This prop only works when `orientation` is `horizontal`.
::

Use the `unmount-on-hide` prop to control the content unmounting behavior. Defaults to `true`.

::note
You can inspect the DOM to see each item's content being rendered.
::

### With tooltip in items

When orientation is `vertical` and the menu is `collapsed`, you can set the `tooltip` prop to `true` to display a [Tooltip](https://ui.nuxt.com/docs/components/tooltip) around items with their label but you can also use the `tooltip` property on each item to override the default tooltip.

You can pass any property from the [Tooltip](https://ui.nuxt.com/docs/components/tooltip) component globally or on each item.

### With popover in items

When orientation is `vertical` and the menu is `collapsed`, you can set the `popover` prop to `true` to display a [Popover](https://ui.nuxt.com/docs/components/popover) around items with their children but you can also use the `popover` property on each item to override the default popover.

You can pass any property from the [Popover](https://ui.nuxt.com/docs/components/popover) component globally or on each item.

::tip{to="https://ui.nuxt.com/#with-content-slot"}
You can use the `#content` slot to customize the content of the popover in the `vertical` orientation.
::

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the index of the item.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can switch the active item by pressing ``, ``, or ``.
::

::tip
You can also pass the `value` of one of the items if provided.
::

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-content`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/#slots"}
You can also use the `#item`, `#item-leading`, `#item-label`, `#item-trailing` and `#item-content` slots to customize all items.
::

### With content slot

Use the `#item-content` slot or the `slot` property (`#{{ item.slot }}-content`) to customize the content of a specific item.

::note
In this example, we add the `sm:w-(--reka-navigation-menu-viewport-width)` class on the `viewport` to have a dynamic width. This requires to set a width on the content's first child.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
      },
    ],
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/docs/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/docs/composables/define-shortcuts',
      },
      {
        label: 'useOverlay',
        icon: 'i-lucide-file-text',
        description: 'Display a modal/slideover within your application.',
        to: '/docs/composables/use-overlay',
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/docs/composables/use-toast',
      },
    ],
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/docs/components/link',
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/docs/components/modal',
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/docs/components/navigation-menu',
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/docs/components/pagination',
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/docs/components/popover',
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/docs/components/progress',
      },
    ],
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank',
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true,
  },
])
</script>

<template>
  <UNavigationMenu :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
      },
    ],
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/docs/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/docs/composables/define-shortcuts',
      },
      {
        label: 'useOverlay',
        icon: 'i-lucide-file-text',
        description: 'Display a modal/slideover within your application.',
        to: '/docs/composables/use-overlay',
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/docs/composables/use-toast',
      },
    ],
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/docs/components/link',
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/docs/components/modal',
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/docs/components/navigation-menu',
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/docs/components/pagination',
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/docs/components/popover',
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/docs/components/progress',
      },
    ],
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank',
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true,
  },
])
</script>

<template>
  <UNavigationMenu class="w-full justify-center" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Links',
      type: 'label',
    },
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house',
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download',
        },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        },
      ],
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/docs/composables/define-shortcuts',
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/docs/composables/use-overlay',
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/docs/composables/use-toast',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/docs/components',
      active: true,
      defaultOpen: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/docs/components/link',
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/docs/components/modal',
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/docs/components/navigation-menu',
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/docs/components/pagination',
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/docs/components/popover',
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/docs/components/progress',
        },
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true,
    },
  ],
])
</script>

<template>
  <UNavigationMenu orientation="vertical" class="data-[orientation=vertical]:w-48" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Links',
      type: 'label',
    },
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house',
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download',
        },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        },
      ],
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/docs/composables/define-shortcuts',
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/docs/composables/use-overlay',
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/docs/composables/use-toast',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/docs/components',
      active: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/docs/components/link',
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/docs/components/modal',
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/docs/components/navigation-menu',
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/docs/components/pagination',
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/docs/components/popover',
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/docs/components/progress',
        },
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true,
    },
  ],
])
</script>

<template>
  <UNavigationMenu collapsed :tooltip="false" :popover="false" orientation="vertical" :items="items" />
</template>
```

---

## Contribution

**URL:** llms-txt#contribution

**Contents:**
- Project structure
  - Documentation
  - Module
- CLI
  - Components

Nuxt UI thrives thanks to its incredible community ❤️. We welcome all contributions through bug reports, pull requests, and feedback to help make this library even better.

::caution
Before reporting a bug or requesting a feature, make sure that you have read through our [documentation](https://ui.nuxt.com/){rel="nofollow"} and existing [issues](https://github.com/nuxt/ui/issues?q=is%3Aissue%20is%3Aopen%20sort%3Aupdated-desc){rel="nofollow"}.
::

Here's an overview of the key directories and files in the Nuxt UI project structure:

The documentation lives in the `docs` folder as a Nuxt app using `@nuxt/content` to generate pages from Markdown files. See the [Nuxt Content documentation](https://content.nuxt.com/docs/getting-started){rel="nofollow"} for details on how it works. Here's a breakdown of its structure:

The module code resides in the `src` folder. Here's a breakdown of its structure:

To make development easier, we've created a CLI that you can use to generate components and locales. You can access it using the `nuxt-ui make` command.

First, you need to link the CLI to your global environment:

You can create new components using the following command:

- `--primitive` Create a primitive component
- `--prose` Create a prose component
- `--content` Create a content component
- `--template` Only generate specific template (available templates: `playground`, `docs`, `test`, `theme`, `component`)

**Examples:**

Example 1 (bash):
```bash
├── app/
│   ├── assets/
│   ├── components/
│   │   └── content/
│   │       └── examples   # Components used in documentation as examples
│   ├── composables/
│   └── ...
├── content/
│   ├── 1.getting-started
│   ├── 2.composables
│   └── 3.components       # Components documentation
```

Example 2 (bash):
```bash
├── plugins/
├── runtime/
│   ├── components/        # Where all the components are located
│   │   ├── Accordion.vue
│   │   ├── Alert.vue
│   │   └── ...
│   ├── composables/
│   ├── locale/
│   ├── plugins/
│   ├── types/
│   ├── utils/
│   └── vue/
│       ├── components/
│       └── plugins/
├── theme/                 # This where the theme for each component is located
│   ├── accordion.ts       # Theme for Accordion component
│   ├── alert.ts
│   └── ...
└── module.ts
```

Example 3 (sh):
```sh
npm link
```

Example 4 (sh):
```sh
nuxt-ui make component <name> [options]
```

---

## Select

**URL:** llms-txt#select

**Contents:**
- Usage
  - Items
  - Value Key
  - Multiple
  - Placeholder
  - Content
  - Arrow
  - Color
  - Variant
  - Size

Use the `v-model` directive to control the value of the Select or the `default-value` prop to set the initial value when you do not need to control its state.

Use the `items` prop as an array of strings, numbers or booleans:

You can also pass an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`value?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#value-key)
- [`type?: "label" | "separator" | "item"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-items-type)
- [`icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-icons-in-items)
- [`avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-avatar-in-items)
- [`chip?: ChipProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-chip-in-items)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::caution
When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.
::

You can also pass an array of arrays to the `items` prop to display separated groups of items.

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

::caution
Ensure to pass an array to the `default-value` prop or the `v-model` directive.
::

Use the `placeholder` prop to set a placeholder text.

Use the `content` prop to control how the Select content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the Select.

Use the `color` prop to change the ring color when the Select is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the Select.

Use the `size` prop to change the size of the Select.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the Select.

Use the `trailing-icon` prop to customize the trailing [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-chevron-down`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.
  :::
::

Use the `selected-icon` prop to customize the icon when an item is selected. Defaults to `i-lucide-check`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.
  :::
::

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the Select.

Use the `loading` prop to show a loading icon on the Select.

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.
  :::
::

Use the `disabled` prop to disable the Select.

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

### With icon in items

You can use the `icon` property to display an [Icon](https://ui.nuxt.com/docs/components/icon) inside the items.

::note
In this example, the icon is computed from the `value` property of the selected item.
::

::tip
You can also use the `#leading` slot to display the selected icon.
::

### With avatar in items

You can use the `avatar` property to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the items.

::note
In this example, the avatar is computed from the `value` property of the selected item.
::

::tip
You can also use the `#leading` slot to display the selected avatar.
::

### With chip in items

You can use the `chip` property to display a [Chip](https://ui.nuxt.com/docs/components/chip) inside the items.

::note
In this example, the `#leading` slot is used to display the selected chip.
::

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Select by pressing ``.
::

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the Select.

### With fetched items

You can fetch items from an API and use them in the Select.

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

::tip
You can also change the content width globally in your `app.config.ts`:

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                             | Type                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `triggerRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<InstanceType<typeof SelectTrigger> | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'Backlog',
  'Todo',
  'In Progress',
  'Done',
])
</script>

<template>
  <USelect model-value="Backlog" :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'Backlog',
  'Todo',
  'In Progress',
  'Done',
])
</script>

<template>
  <USelect model-value="Backlog" class="w-48" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const items = ref<SelectItem[]>([
  {
    label: 'Backlog',
    value: 'backlog',
  },
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
  {
    label: 'Done',
    value: 'done',
  },
])
</script>

<template>
  <USelect model-value="backlog" class="w-48" :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  [
    'Apple',
    'Banana',
    'Blueberry',
    'Grapes',
    'Pineapple',
  ],
  [
    'Aubergine',
    'Broccoli',
    'Carrot',
    'Courgette',
    'Leek',
  ],
])
</script>

<template>
  <USelect model-value="Apple" class="w-48" :items="items" />
</template>
```

---

## ColorModeSwitch

**URL:** llms-txt#colormodeswitch

**Contents:**
- Usage
- Examples
  - With custom icons
- API
  - Props
- Changelog

The ColorModeSwitch component extends the [Switch](https://ui.nuxt.com/docs/components/switch) component, so you can pass any property such as `color`, `size`, etc.

### With custom icons

::framework-only
#nuxt
  :::div
  Use the `app.config.ts` to customize the icon with the `ui.icons` property:
  
  
  :::

#vue
  :::div
  Use the `vite.config.ts` to customize the icon with the `ui.icons` property:
  
  
  :::
::

::component-changelog{prefix="color-mode"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorModeSwitch />
</template>
```

Example 2 (unknown):
```unknown
:::

#vue
  :::div
  Use the `vite.config.ts` to customize the icon with the `ui.icons` property:
```

Example 3 (unknown):
```unknown
:::
::

## API

### Props
```

---

## Badge

**URL:** llms-txt#badge

**Contents:**
- Usage
  - Label
  - Color
  - Variant
  - Size
  - Icon
  - Avatar
- Examples
  - `class` prop
- API

Use the default slot to set the label of the Badge.

Use the `label` prop to set the label of the Badge.

Use the `color` prop to change the color of the Badge.

Use the `variant` props to change the variant of the Badge.

Use the `size` prop to change the size of the Badge.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the Badge.

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the Badge.

Use the `class` prop to override the base styles of the Badge.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UBadge>
    Badge
  </UBadge>
</template>
```

Example 2 (vue):
```vue
<template>
  <UBadge label="Badge" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UBadge color="neutral">
    Badge
  </UBadge>
</template>
```

Example 4 (vue):
```vue
<template>
  <UBadge color="neutral" variant="outline">
    Badge
  </UBadge>
</template>
```

---

## PageLogos

**URL:** llms-txt#pagelogos

**Contents:**
- Usage
  - Title
  - Items
  - Marquee
- API
  - Props
  - Slots
- Theme
- Changelog

The PageLogos component provides a flexible way to display a list of logos or images in your pages.

Use the `title` prop to set the title above the logos.

You can display logos in two ways:

1. Using the `items` prop to provide a list of logos. Each item can be either:

- An icon name (e.g., `i-simple-icons-github`)
- An object containing `src` and `alt` properties for images, which will be utilized in a `UAvatar` component

2. Using the default slot to have complete control over the content

Use the `marquee` prop to enable a marquee effect for the logos.

::note{to="https://ui.nuxt.com/docs/components/marquee"}
When you use `marquee` mode, you can customize its behavior by passing props. For more info, check out the [Marquee](https://ui.nuxt.com/docs/components/marquee) component.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook',
])
</script>

<template>
  <UPageLogos :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook',
])
</script>

<template>
  <UPageLogos title="Trusted by the best front-end teams" :items="items" />
</template>
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

### Marquee

Use the `marquee` prop to enable a marquee effect for the logos.
```

---

## ContentNavigation

**URL:** llms-txt#contentnavigation

**Contents:**
- Usage
  - Type
  - Color
  - Variant
  - Highlight
  - Trailing Icon
- Examples
  - Within a layout
  - Within a header
- API

::warning{to="https://ui.nuxt.com/docs/getting-started/integrations/content"}
This component is only available when the `@nuxt/content` module is installed.
::

Use the `navigation` prop with the `navigation`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} value you get when fetching the navigation of your app.

Set the `type` prop to `single` to only allow one item to be open at a time. Defaults to `multiple`.

Use the `color` prop to change the color of the navigation links.

Use the `variant` prop to change the variant of the navigation links.

Use the `highlight` prop to display a highlighted border for the active link.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.

Use the ContentNavigation component inside a [PageAside](https://ui.nuxt.com/docs/components/page-aside) component within a layout to display the navigation of the page:

Use the ContentNavigation component inside the `content` slot of a [Header](https://ui.nuxt.com/docs/components/header) component to display the navigation of the page on mobile:

::component-changelog{prefix="content"}
::

**Examples:**

Example 1 (unknown):
```unknown
### Type

Set the `type` prop to `single` to only allow one item to be open at a time. Defaults to `multiple`.
```

Example 2 (unknown):
```unknown
### Color

Use the `color` prop to change the color of the navigation links.
```

Example 3 (unknown):
```unknown
### Variant

Use the `variant` prop to change the variant of the navigation links.
```

Example 4 (unknown):
```unknown
### Highlight

Use the `highlight` prop to display a highlighted border for the active link.

Use the `highlight-color` prop to change the color of the border. It defaults to the `color` prop.
```

---

## AvatarGroup

**URL:** llms-txt#avatargroup

**Contents:**
- Usage
  - Size
  - Max
- Examples
  - With tooltip
  - With chip
  - With link
  - With mask
- API
  - Props

Wrap multiple [Avatar](https://ui.nuxt.com/docs/components/avatar) within an AvatarGroup to stack them.

Use the `size` prop to change the size of all the avatars.

Use the `max` prop to limit the number of avatars displayed. The rest is displayed as an `+X` avatar.

Wrap each avatar with a [Tooltip](https://ui.nuxt.com/docs/components/tooltip) to display a tooltip on hover.

Wrap each avatar with a [Chip](https://ui.nuxt.com/docs/components/chip) to display a chip around the avatar.

Wrap each avatar with a [Link](https://ui.nuxt.com/docs/components/link) to make them clickable.

Wrap an avatar with a CSS mask to display it with a custom shape.

::warning
The `chip` prop does not work correctly when using a mask. Chips may be cut depending on the mask shape.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UAvatarGroup>
    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
  </UAvatarGroup>
</template>
```

Example 2 (vue):
```vue
<template>
  <UAvatarGroup size="xl">
    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
  </UAvatarGroup>
</template>
```

Example 3 (vue):
```vue
<template>
  <UAvatarGroup :max="2">
    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
  </UAvatarGroup>
</template>
```

Example 4 (unknown):
```unknown
### With chip

Wrap each avatar with a [Chip](https://ui.nuxt.com/docs/components/chip) to display a chip around the avatar.
```

---

## DashboardSidebar

**URL:** llms-txt#dashboardsidebar

**Contents:**
- Usage
  - Resizable
  - Collapsible
  - Size
  - Side
  - Mode
  - Toggle
  - Toggle Side
- Examples
  - Control open state

The DashboardSidebar component is used to display a sidebar. Its state (size, collapsed, etc.) will be saved based on the `storage` and `storage-key` props you provide to the [DashboardGroup](https://ui.nuxt.com/docs/components/dashboard-group#props) component.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/docs/components/dashboard-group) component:

::warning
This component does not have a single root element when using the `resizable` prop, so wrap it in a container (e.g., `<div class="flex flex-1">`) if you use page transitions or require a single root for layout.
::

Use the `left`, `default` and `right` slots to customize the sidebar and the `body` or `content` slots to customize the sidebar menu.

::note
Drag the sidebar near the left edge of the screen to collapse it.
::

Use the `resizable` prop to make the sidebar resizable.

Use the `collapsible` prop to make the sidebar collapsible when dragging near the edge of the screen.

::warning
The [`DashboardSidebarCollapse`](https://ui.nuxt.com/docs/components/dashboard-sidebar-collapse) component will have no effect if the sidebar is not **collapsible**.
::

::tip{to="https://ui.nuxt.com/#slots"}
You can access the `collapsed` state in the slot props to customize the content of the sidebar when it is collapsed.
::

Use the `min-size`, `max-size`, `default-size` and `collapsed-size` props to customize the size of the sidebar.

::tip{to="https://ui.nuxt.com/docs/components/dashboard-group#props"}
Sizes are calculated as percentages by default. You can change this using the `unit` prop on the `DashboardGroup` component.
::

::note
The `collapsed-size` prop is set to `0` by default but the sidebar has a `min-w-16` to make sure it is visible.
::

Use the `side` prop to change the side of the sidebar. Defaults to `left`.

Use the `mode` prop to change the mode of the sidebar menu. Defaults to `slideover`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

::tip{to="https://ui.nuxt.com/#props"}
You can use the `menu` prop to customize the menu of the sidebar, it will adapt depending on the mode you choose.
::

::note
These examples contain the [`DashboardGroup`](https://ui.nuxt.com/docs/components/dashboard-group), [`DashboardPanel`](https://ui.nuxt.com/docs/components/dashboard-panel) and [`DashboardNavbar`](https://ui.nuxt.com/docs/components/dashboard-navbar) components as they are required to demonstrate the sidebar on mobile.
::

Use the `toggle` prop to customize the [DashboardSidebarToggle](https://ui.nuxt.com/docs/components/dashboard-sidebar-toggle) component displayed on mobile.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `left`.

### Control open state

You can control the open state by using the `open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the open state of the DashboardSidebar by pressing ``.
::

### Control collapsed state

You can control the collapsed state by using the `collapsed` prop or the `v-model:collapsed` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the collapsed state of the DashboardSidebar by pressing ``.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::warning
This component does not have a single root element when using the `resizable` prop, so wrap it in a container (e.g., `<div class="flex flex-1">`) if you use page transitions or require a single root for layout.
::

Use the `left`, `default` and `right` slots to customize the sidebar and the `body` or `content` slots to customize the sidebar menu.
```

Example 2 (unknown):
```unknown
::note
Drag the sidebar near the left edge of the screen to collapse it.
::

### Resizable

Use the `resizable` prop to make the sidebar resizable.
```

Example 3 (unknown):
```unknown
### Collapsible

Use the `collapsible` prop to make the sidebar collapsible when dragging near the edge of the screen.

::warning
The [`DashboardSidebarCollapse`](https://ui.nuxt.com/docs/components/dashboard-sidebar-collapse) component will have no effect if the sidebar is not **collapsible**.
::
```

Example 4 (unknown):
```unknown
::tip{to="https://ui.nuxt.com/#slots"}
You can access the `collapsed` state in the slot props to customize the content of the sidebar when it is collapsed.
::

### Size

Use the `min-size`, `max-size`, `default-size` and `collapsed-size` props to customize the size of the sidebar.
```

---

## Fonts

**URL:** llms-txt#fonts

**Contents:**
- Usage
  - Declaration
  - Configuration

Nuxt UI automatically registers the [`@nuxt/fonts`](https://github.com/nuxt/fonts){rel="nofollow"} module for you, so there's no additional setup required.

To use a font in your Nuxt UI application, you can simply declare it in your CSS. It will be automatically loaded and optimized for you.

You can disable the `@nuxt/fonts` module with the `ui.fonts` option in your `nuxt.config.ts`:

**Examples:**

Example 1 (unknown):
```unknown
### Configuration

You can disable the `@nuxt/fonts` module with the `ui.fonts` option in your `nuxt.config.ts`:
```

---

## Avatar

**URL:** llms-txt#avatar

**Contents:**
- Usage
  - Src
  - Size
  - Icon
  - Text
  - Alt
  - Chip
- Examples
  - With tooltip
  - With mask

The Avatar uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image){rel="nofollow"} is installed, falling back to `img` otherwise.

::note
You can pass any property from the HTML `<img>` element such as `alt`, `loading`, etc.
::

Use the `src` prop to set the image URL.

Use the `size` prop to set the size of the Avatar.

::note
The `<img>` element's `width` and `height` are automatically set based on the `size` prop.
::

Use the `icon` prop to display a fallback [Icon](https://ui.nuxt.com/docs/components/icon).

Use the `text` prop to display a fallback text.

When no icon or text is provided, the **initials** of the `alt` prop is used as fallback.

::note
The `alt` prop is passed to the `img` element as the `alt` attribute.
::

Use the `chip` prop to display a chip around the Avatar.

You can use a [Tooltip](https://ui.nuxt.com/docs/components/tooltip) component to display a tooltip when hovering the Avatar.

You can use a CSS mask to display an Avatar with a custom shape instead of a simple circle.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UAvatar icon="i-lucide-image" size="md" />
</template>
```

---

## Textarea

**URL:** llms-txt#textarea

**Contents:**
- Usage
  - Rows
  - Placeholder
  - Autoresize
  - Color
  - Variant
  - Size
  - Icon
  - Avatar
  - Loading

Use the `v-model` directive to control the value of the Textarea.

Use the `rows` prop to set the number of rows. Defaults to `3`.

Use the `placeholder` prop to set a placeholder text.

Use the `autoresize` prop to enable autoresizing the height of the Textarea.

Use the `maxrows` prop to set the maximum number of rows when autoresizing. If set to `0`, the Textarea will grow indefinitely.

Use the `color` prop to change the ring color when the Textarea is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the Textarea.

Use the `size` prop to change the size of the Textarea.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the Textarea.

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the Textarea.

Use the `loading` prop to show a loading icon on the Textarea.

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.
  :::
::

Use the `disabled` prop to disable the Textarea.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                              | Type                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textareaRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLTextAreaElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UTextarea model-value="" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UTextarea :rows="12" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UTextarea placeholder="Type something..." />
</template>
```

Example 4 (vue):
```vue
<template>
  <UTextarea model-value="This is a long text that will autoresize the height of the Textarea." autoresize />
</template>
```

---

## defineShortcuts

**URL:** llms-txt#defineshortcuts

**Contents:**
- Usage
- API
- Examples
  - Basic usage
  - With input focus handling
  - Extracting shortcuts from menu items

Use the auto-imported `defineShortcuts` composable to define keyboard shortcuts.

- Shortcuts are automatically adjusted for non-macOS platforms, converting `meta` to `ctrl`.
- The composable uses VueUse's [`useEventListener`](https://vueuse.org/core/useEventListener/){rel="nofollow"} to handle keydown events.
- For a complete list of available shortcut keys, refer to the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values){rel="nofollow"} API documentation. Note that the key should be written in lowercase.

::tip{to="https://ui.nuxt.com/docs/components/kbd"}
Learn how to display shortcuts in components in the **Kbd** component documentation.
::

`defineShortcuts(config: ShortcutsConfig, options?: ShortcutsOptions): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Define keyboard shortcuts for your application.

::field-group
  :::field{required name="config" required="true" type="ShortcutsConfig"}
  An object where keys are shortcut definitions and values are either handler functions or shortcut configuration objects.
  :::

:::field{name="options" type="ShortcutsOptions"}
  Optional configuration for the shortcuts behavior.
  
    ::::collapsible
      :::::field{name="chainDelay" type="number"}
      The delay between key presses to consider the shortcut as chained. Default is `250`.
      :::::
    ::::
  :::
::

#### Shortcut definition

Shortcuts are defined using the following format:

- Single key: `'a'`, `'b'`, `'1'`, `'?'`, etc.
- Key combinations: Use `_` to separate keys, e.g., `'meta_k'`, `'ctrl_shift_f'`
- Key sequences: Use `-` to define a sequence, e.g., `'g-d'`

- `meta`: Represents `⌘ Command` on macOS and `Ctrl` on other platforms
- `ctrl`: Represents `Ctrl` on all platforms
- `shift`: Used for alphabetic keys when Shift is required

- `escape`: Triggers on Esc key
- `enter`: Triggers on Enter key
- `arrowleft`, `arrowright`, `arrowup`, `arrowdown`: Trigger on respective arrow keys

#### Shortcut configuration

Each shortcut can be defined as a function or an object with the following properties:

`interface ShortcutConfig { handler: () => void; usingInput?: boolean | string }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::field-group
  :::field{required name="handler" required="true" type="() => void"}
  Function to be executed when the shortcut is triggered.
  :::

:::field{name="usingInput" type="boolean | string"}
  Controls when the shortcut should trigger based on input focus:
  
  - `false` (default): Shortcut only triggers when no input is focused
  - `true`: Shortcut triggers even when any input is focused
  - `string`: Shortcut only triggers when the specified input (by name) is focused
  :::
::

### With input focus handling

The `usingInput` option allows you to specify that a shortcut should only trigger when a specific input is focused.

### Extracting shortcuts from menu items

The `extractShortcuts` utility can be used to automatically define shortcuts from menu items:

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

Example 2 (vue):
```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

Example 3 (vue):
```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

Example 4 (vue):
```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

---

## ChangelogVersion

**URL:** llms-txt#changelogversion

**Contents:**
- Usage
  - Title
  - Description
  - Date
  - Badge
  - Image
  - Authors
  - Link
  - Indicator
- Examples

The ChangelogVersion component provides a flexible way to display an `<article>` element with customizable content including title, description, image, etc.

::code-preview
  :::u-changelog-version
  ---
  authors:
    - name: Benjamin Canac
      description: "@benjamincanac"
      avatar:
        src: https://github.com/benjamincanac.png
      to: https://x.com/benjamincanac
      target: _blank
    - name: Sebastien Chopin
      description: "@atinux"
      avatar:
        src: https://github.com/atinux.png
      to: https://x.com/atinux
      target: _blank
    - name: Hugo Richard
      description: "@hugorcd__"
      avatar:
        src: https://github.com/hugorcd.png
      to: https://x.com/hugorcd__
      target: _blank
  ui:
    container: max-w-lg
  class: w-full
  date: 2025-03-12
  description: Nuxt UI v3 is out! After 1500+ commits, this major redesign brings
    improved accessibility, Tailwind CSS v4 support, and full Vue compatibility.
  image: https://nuxt.com/assets/blog/nuxt-ui-v3.png
  target: _blank
  title: Introducing Nuxt UI v3
  to: https://nuxt.com/blog/nuxt-ui-v3
  ---
  :::
::

::tip{to="https://ui.nuxt.com/docs/components/changelog-versions"}
Use the [`ChangelogVersions`](https://ui.nuxt.com/docs/components/changelog-versions) component to display multiple changelog versions in a timeline with an indicator bar on the left.
::

Use the `title` prop to display the title of the ChangelogVersion.

Use the `description` prop to display the description of the ChangelogVersion.

Use the `date` prop to display the date of the ChangelogVersion.

::tip
The date is automatically formatted to the [current locale](https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt#locale). You can either pass a `Date` object or a string.
::

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/docs/components/badge) on the ChangelogVersion.

You can pass any property from the [Badge](https://ui.nuxt.com/docs/components/badge#props) component to customize it.

Use the `image` prop to display an image in the BlogPost.

::note
If [`@nuxt/image`](https://image.nuxt.com/get-started/installation){rel="nofollow"} is installed, the `<NuxtImg>` component will be used instead of the native `img` tag.
::

Use the `authors` prop to display a list of [User](https://ui.nuxt.com/docs/components/user) in the ChangelogVersion as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `size?: UserProps['size']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: UserProps['orientation']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

Use the `indicator` prop to hide the indicator dot on the left. Defaults to `true`.

::note
When the `indicator` prop is `false`, the date will be displayed over the title.
::

You can use the `body` slot to display custom content between the image and the authors with:

- the [MDC](https://github.com/nuxt-modules/mdc?tab=readme-ov-file#mdc){rel="nofollow"} component from `@nuxtjs/mdc` to display some markdown.
- the [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer){rel="nofollow"} component from `@nuxt/content` to render the content of the page or list.
- or use the `:u-changelog-version` component directly in your content with markdown inside the `body` slot as Nuxt UI provides pre-styled prose components.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" badge="Release" />
</template>
```

---

## Chip

**URL:** llms-txt#chip

**Contents:**
- Usage
  - Color
  - Size
  - Text
  - Position
  - Inset
  - Standalone
- Examples
  - Control visibility
- API

Wrap any component with a Chip to display an indicator.

Use the `color` prop to change the color of the Chip.

Use the `size` prop to change the size of the Chip.

Use the `text` prop to set the text of the Chip.

Use the `position` prop to change the position of the Chip.

Use the `inset` prop to display the Chip inside the component. This is useful when dealing with rounded components.

Use the `standalone` prop alongside the `inset` prop to display the Chip inline.

::note
It's used this way in the [`CommandPalette`](https://ui.nuxt.com/docs/components/command-palette), [`InputMenu`](https://ui.nuxt.com/docs/components/input-menu), [`Select`](https://ui.nuxt.com/docs/components/select) or [`SelectMenu`](https://ui.nuxt.com/docs/components/select-menu) components for example.
::

### Control visibility

You can control the visibility of the Chip using the `show` prop.

::note
In this example, the Chip has a color per status and is displayed when the status is not `offline`.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UChip>
    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
  </UChip>
</template>
```

Example 2 (vue):
```vue
<template>
  <UChip color="neutral">
    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
  </UChip>
</template>
```

Example 3 (vue):
```vue
<template>
  <UChip size="3xl">
    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
  </UChip>
</template>
```

Example 4 (vue):
```vue
<template>
  <UChip :text="5" size="3xl">
    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
  </UChip>
</template>
```

---

## CheckboxGroup

**URL:** llms-txt#checkboxgroup

**Contents:**
- Usage
  - Items
  - Value Key
  - Legend
  - Color
  - Variant
  - Size
  - Orientation
  - Indicator
  - Disabled

Use the `v-model` directive to control the value of the CheckboxGroup or the `default-value` prop to set the initial value when you do not need to control its state.

Use the `items` prop as an array of strings or numbers:

You can also pass an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`value?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#value-key)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::caution
When using objects, you need to reference the `value` property of the object in the `v-model` directive or the `default-value` prop.
::

You can change the property that is used to set the value by using the `value-key` prop. Defaults to `value`.

Use the `legend` prop to set the legend of the CheckboxGroup.

Use the `color` prop to change the color of the CheckboxGroup.

Use the `variant` prop to change the variant of the CheckboxGroup.

Use the `size` prop to change the size of the CheckboxGroup.

Use the `orientation` prop to change the orientation of the CheckboxGroup. Defaults to `vertical`.

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

Use the `disabled` prop to disable the CheckboxGroup.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'System',
  'Light',
  'Dark',
])
</script>

<template>
  <UCheckboxGroup :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  'System',
  'Light',
  'Dark',
])
</script>

<template>
  <UCheckboxGroup :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: 'System',
    description: 'This is the first option.',
    value: 'system',
  },
  {
    label: 'Light',
    description: 'This is the second option.',
    value: 'light',
  },
  {
    label: 'Dark',
    description: 'This is the third option.',
    value: 'dark',
  },
])
</script>

<template>
  <UCheckboxGroup :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { CheckboxGroupItem } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>([
  {
    label: 'System',
    description: 'This is the first option.',
    id: 'system',
  },
  {
    label: 'Light',
    description: 'This is the second option.',
    id: 'light',
  },
  {
    label: 'Dark',
    description: 'This is the third option.',
    id: 'dark',
  },
])
</script>

<template>
  <UCheckboxGroup value-key="id" :items="items" />
</template>
```

---

## Checkbox

**URL:** llms-txt#checkbox

**Contents:**
- Usage
  - Indeterminate
  - Indeterminate Icon
  - Label
  - Description
  - Icon
  - Color
  - Variant
  - Size
  - Indicator

Use the `v-model` directive to control the checked state of the Checkbox.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `indeterminate` value in the `v-model` directive or `default-value` prop to set the Checkbox to an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes){rel="nofollow"}.

### Indeterminate Icon

Use the `indeterminate-icon` prop to customize the indeterminate icon. Defaults to `i-lucide-minus`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key.
  :::
::

Use the `label` prop to set the label of the Checkbox.

When using the `required` prop, an asterisk is added next to the label.

Use the `description` prop to set the description of the Checkbox.

Use the `icon` prop to set the icon of the Checkbox when it is checked. Defaults to `i-lucide-check`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.
  :::
::

Use the `color` prop to change the color of the Checkbox.

Use the `variant` prop to change the variant of the Checkbox.

Use the `size` prop to change the size of the Checkbox.

Use the `indicator` prop to change the position or hide the indicator. Defaults to `start`.

Use the `disabled` prop to disable the Checkbox.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UCheckbox model-value />
</template>
```

Example 2 (vue):
```vue
<template>
  <UCheckbox default-value />
</template>
```

Example 3 (vue):
```vue
<template>
  <UCheckbox default-value="indeterminate" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UCheckbox default-value="indeterminate" indeterminate-icon="i-lucide-plus" />
</template>
```

---

## ChangelogVersions

**URL:** llms-txt#changelogversions

**Contents:**
- Usage
  - Versions
  - Indicator
  - Indicator Motion
- Examples
  - Within a page
  - With sticky indicator
- API
  - Props
  - Slots

The ChangelogVersions component provides a flexible layout to display a list of [ChangelogVersion](https://ui.nuxt.com/docs/components/changelog-version) components using either the default slot or the `versions` prop.

Use the `versions` prop as an array of objects with the properties of the [ChangelogVersion](https://ui.nuxt.com/docs/components/changelog-version#props) component.

Use the `indicator` prop to hide the indicator bar on the left. Defaults to `true`.

Use the `indicator-motion` prop to customize or hide the motion effect on the indicator bar. Defaults to `true` with `{ damping: 30, restDelta: 0.001 }` [spring transition options](https://motion.dev/docs/vue-transitions#spring){rel="nofollow"}.

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the ChangelogVersions component in a page to create a changelog page:

::note
In this example, the `versions` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

### With sticky indicator

You can use the `ui` prop and the different slots to make the indicators sticky:

::tip
You can use all the slots of the [`ChangelogVersion`](https://ui.nuxt.com/docs/components/changelog-version#slots) component inside ChangelogVersions, they are automatically forwarded allowing you to customize individual versions when using the `versions` prop.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Versions

Use the `versions` prop as an array of objects with the properties of the [ChangelogVersion](https://ui.nuxt.com/docs/components/changelog-version#props) component.
```

Example 2 (unknown):
```unknown
### Indicator

Use the `indicator` prop to hide the indicator bar on the left. Defaults to `true`.
```

Example 3 (unknown):
```unknown
### Indicator Motion

Use the `indicator-motion` prop to customize or hide the motion effect on the indicator bar. Defaults to `true` with `{ damping: 30, restDelta: 0.001 }` [spring transition options](https://motion.dev/docs/vue-transitions#spring){rel="nofollow"}.
```

Example 4 (unknown):
```unknown
## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the ChangelogVersions component in a page to create a changelog page:
```

---

## Error

**URL:** llms-txt#error

**Contents:**
- Usage
  - Error
  - Clear
  - Redirect
- Examples
  - Within `error.vue`
- API
  - Props
  - Slots
- Theme

The Error component works together with the [Header](https://ui.nuxt.com/docs/components/header) component to create a full-height layout that extends to the viewport's available height.

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/css-variables#header"}
The Error component uses the `--ui-header-height` CSS variable to position itself correctly below the [Header](https://ui.nuxt.com/docs/components/header).
::

Use the `error` prop to display an error message.

::note
---
target: _blank
to: https://nuxt.com/docs/guide/directory-structure/error
---
In most cases, you will receive the `error` prop in your `error.vue` file.
::

Use the `clear` prop to customize or hide the clear button (with `false` value).

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `redirect` prop to redirect the user to a different page when the clear button is clicked. Defaults to `/`.

### Within `error.vue`

Use the Error component in your `error.vue`:

::tip
You might want to replicate the code of your `app.vue` inside your `error.vue` file to have the same layout and features, here is an example: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>{rel="nofollow"}
::

::note
You can read more about how to handle errors in the [Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page){rel="nofollow"}, but when using `nuxt generate` it is recommended to add `fatal: true` inside your `createError` call to make sure the error page is displayed:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UError />
</template>
```

Example 2 (vue):
```vue
<template>
  <UError />
</template>
```

Example 3 (vue):
```vue
<template>
  <UError redirect="/docs/getting-started" />
</template>
```

Example 4 (unknown):
```unknown
::tip
You might want to replicate the code of your `app.vue` inside your `error.vue` file to have the same layout and features, here is an example: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>{rel="nofollow"}
::

::note
You can read more about how to handle errors in the [Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page){rel="nofollow"}, but when using `nuxt generate` it is recommended to add `fatal: true` inside your `createError` call to make sure the error page is displayed:
```

---

## Separator

**URL:** llms-txt#separator

**Contents:**
- Usage
  - Orientation
  - Label
  - Icon
  - Avatar
  - Color
  - Type
  - Size
- API
  - Props

Use the Separator component as-is to separate content.

Use the `orientation` prop to change the orientation of the Separator. Defaults to `horizontal`.

Use the `label` prop to display a label in the middle of the Separator.

Use the `icon` prop to display an icon in the middle of the Separator.

Use the `avatar` prop to display an avatar in the middle of the Separator.

Use the `color` prop to change the color of the Separator. Defaults to `neutral`.

Use the `type` prop to change the type of the Separator. Defaults to `solid`.

Use the `size` prop to change the size of the Separator. Defaults to `xs`.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <USeparator />
</template>
```

Example 2 (vue):
```vue
<template>
  <USeparator orientation="vertical" class="h-48" />
</template>
```

Example 3 (vue):
```vue
<template>
  <USeparator label="Hello World" />
</template>
```

Example 4 (vue):
```vue
<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" />
</template>
```

---

## Footer

**URL:** llms-txt#footer

**Contents:**
- Usage
- Examples
  - Within `app.vue`
- API
  - Props
  - Slots
- Theme
- Changelog

The Footer component renders a `<footer>` element.

Use the `left`, `default` and `right` slots to customize the footer.

::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render the footer links in the center.
::

::tip{to="https://ui.nuxt.com/docs/components/footer-columns"}
You can use the [FooterColumns](https://ui.nuxt.com/docs/components/footer-columns) component to display a list of links inside the `top` slot.
::

Use the Footer component in your `app.vue` or in a layout:

::note
In this example, we use the [Separator](https://ui.nuxt.com/docs/components/separator) component to add a border above the footer.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render the footer links in the center.
::

::tip{to="https://ui.nuxt.com/docs/components/footer-columns"}
You can use the [FooterColumns](https://ui.nuxt.com/docs/components/footer-columns) component to display a list of links inside the `top` slot.
::

## Examples

### Within `app.vue`

Use the Footer component in your `app.vue` or in a layout:
```

Example 2 (unknown):
```unknown
::note
In this example, we use the [Separator](https://ui.nuxt.com/docs/components/separator) component to add a border above the footer.
::

## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## DashboardPanel

**URL:** llms-txt#dashboardpanel

**Contents:**
- Usage
  - Resizable
  - Size
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardPanel component is used to display a panel. Its state (size, collapsed, etc.) will be saved based on the `storage` and `storage-key` props you provide to the [DashboardGroup](https://ui.nuxt.com/docs/components/dashboard-group#props) component.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/docs/components/dashboard-group) component, you can put multiple panels next to each other:

::caution
It is recommended to set an `id` when using multiple panels in different pages to avoid conflicts.
::

::warning
This component does not have a single root element when using the `resizable` prop, so wrap it in a container (e.g., `<div class="flex flex-1">`) if you use page transitions or require a single root for layout.
::

Use the `header`, `body` and `footer` slots to customize the panel or the default slot if you don't want a scrollable body with padding.

::note
Most of the time, you will use the [`DashboardNavbar`](https://ui.nuxt.com/docs/components/dashboard-navbar) component in the `header` slot.
::

Use the `resizable` prop to make the panel resizable.

Use the `min-size`, `max-size` and `default-size` props to customize the size of the panel.

::tip{to="https://ui.nuxt.com/docs/components/dashboard-group#props"}
Sizes are calculated as percentages by default. You can change this using the `unit` prop on the `DashboardGroup` component.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::caution
It is recommended to set an `id` when using multiple panels in different pages to avoid conflicts.
::

::warning
This component does not have a single root element when using the `resizable` prop, so wrap it in a container (e.g., `<div class="flex flex-1">`) if you use page transitions or require a single root for layout.
::

Use the `header`, `body` and `footer` slots to customize the panel or the default slot if you don't want a scrollable body with padding.
```

Example 2 (unknown):
```unknown
::note
Most of the time, you will use the [`DashboardNavbar`](https://ui.nuxt.com/docs/components/dashboard-navbar) component in the `header` slot.
::

### Resizable

Use the `resizable` prop to make the panel resizable.
```

Example 3 (unknown):
```unknown
### Size

Use the `min-size`, `max-size` and `default-size` props to customize the size of the panel.
```

Example 4 (unknown):
```unknown
::tip{to="https://ui.nuxt.com/docs/components/dashboard-group#props"}
Sizes are calculated as percentages by default. You can change this using the `unit` prop on the `DashboardGroup` component.
::

## API

### Props
```

---

## Progress

**URL:** llms-txt#progress

**Contents:**
- Usage
  - Max
  - Status
  - Indeterminate
  - Animation
  - Orientation
  - Color
  - Size
  - Inverted
- API

Use the `v-model` directive to control the value of the Progress.

Use the `max` prop to set the maximum value of the Progress.

Use the `max` prop with an array of strings to display the active step under the bar, the maximum value of the Progress is the length of the array.

Use the `status` prop to display the current Progress value above the bar.

When no `v-model` is set or the value is `null`, the Progress becomes *indeterminate*. The progress bar is animated as a `carousel`, but you can change it using the [`animation`](https://ui.nuxt.com/#animation) prop.

Use the `animation` prop to change the animation of the Progress to an inverse carousel, a swinging bar or an elastic bar. Defaults to `carousel`.

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

Use the `color` prop to change the color of the Slider.

Use the `size` prop to change the size of the Slider.

Use the `inverted` prop to visually invert the Progress.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UProgress :model-value="50" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UProgress :model-value="3" :max="4" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UProgress :model-value="3" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UProgress :model-value="50" status />
</template>
```

---

## Link

**URL:** llms-txt#link

**Contents:**
- Usage
  - Tag
  - Style
- IntelliSense
- API
  - Props
  - Slots
- Theme
- Changelog

The Link component is a wrapper around [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} using the [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom){rel="nofollow"} prop. It provides a few extra props:

- `inactive-class` prop to set a class when the link is inactive, `active-class` is used when active.
- `exact` prop to style with `active-class` when the link is active and the route is exactly the same as the current route.
- `exact-query` and `exact-hash` props to style with `active-class` when the link is active and the query or hash is exactly the same as the current query or hash.

- use `exact-query="partial"` to style with `active-class` when the link is active and the query partially match the current query.

The incentive behind this is to provide the same API as NuxtLink back in Nuxt 2 / Vue 2. You can read more about it in the Vue Router [migration from Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link){rel="nofollow"} guide.

::note
It is used by the [`Breadcrumb`](https://ui.nuxt.com/docs/components/breadcrumb), [`Button`](https://ui.nuxt.com/docs/components/button), [`ContextMenu`](https://ui.nuxt.com/docs/components/context-menu), [`DropdownMenu`](https://ui.nuxt.com/docs/components/dropdown-menu) and [`NavigationMenu`](https://ui.nuxt.com/docs/components/navigation-menu) components.
::

The `Link` components renders an `<a>` tag when a `to` prop is provided, otherwise it renders a `<button>` tag. You can use the `as` prop to change fallback tag.

::note
You can inspect the rendered HTML by changing the `to` prop.
::

By default, the link has default active and inactive styles, check out the [#theme](https://ui.nuxt.com/#theme) section.

::note
Try changing the `to` prop to see the active and inactive states.
::

You can override this behavior by using the `raw` prop and provide your own styles using `class`, `active-class` and `inactive-class`.

If you're using VSCode and wish to get autocompletion for the classes `active-class` and `inactive-class`, you can add the following settings to your `.vscode/settings.json`:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <ULink to="" as="button">
    Link
  </ULink>
</template>
```

Example 2 (vue):
```vue
<template>
  <ULink to="/docs/components/link">
    Link
  </ULink>
</template>
```

Example 3 (vue):
```vue
<template>
  <ULink raw to="/docs/components/link" active-class="font-bold" inactive-class="text-muted">
    Link
  </ULink>
</template>
```

Example 4 (unknown):
```unknown
## API

### Props
```

---

## PageAnchors

**URL:** llms-txt#pageanchors

**Contents:**
- Usage
  - Links
- Examples
  - Within a layout
- API
  - Props
  - Slots
- Theme
- Changelog

Use the PageAnchors component to display a list of links.

Use the `links` prop as an array of objects with the following properties:

- `label: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PageAnchors component inside the [PageAside](https://ui.nuxt.com/docs/components/page-aside) component to display a list of links above the navigation.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPageAnchors />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
</script>

<template>
  <UPageAnchors />
</template>
```

Example 3 (unknown):
```unknown
## API

### Props
```

Example 4 (unknown):
```unknown
### Slots
```

---

## MCP Server

**URL:** llms-txt#mcp-server

**Contents:**
- What is MCP?
- Available Resources
- Available Tools
  - Component Tools
  - Template Tools
  - Documentation Tools
  - Example Tools
  - Migration Tools
- Available Prompts
- Configuration

MCP (Model Context Protocol) is a standardized protocol that enables AI assistants to access external data sources and tools. Nuxt UI provides an MCP server that allows AI assistants like Claude Code, Cursor, and Windsurf to access component information, source code, and usage examples directly.

The MCP server provides structured access to our component library, making it easy for AI tools to understand and assist with Nuxt UI development.

## Available Resources

The Nuxt UI MCP server provides the following resources for discovery:

- **`resource://nuxt-ui/components`**: Browse all available components with categories
- **`resource://nuxt-ui/composables`**: Browse all available composables with categories
- **`resource://nuxt-ui/examples`**: Browse all available code examples
- **`resource://nuxt-ui/templates`**: Browse all available project templates
- **`resource://nuxt-ui/documentation-pages`**: Browse all available documentation pages

You're able to access these resources with tools like Claude Code by using `@`.

The Nuxt UI MCP server provides the following tools organized by category:

- **`list_components`**: Lists all available Nuxt UI components with their categories and basic information
- **`list_composables`**: Lists all available Nuxt UI composables with their categories and basic information
- **`get_component`**: Retrieves component documentation and details
- **`get_component_metadata`**: Retrieves detailed metadata for a component including props, slots, and events
- **`search_components_by_category`**: Searches components by category or text filter

- **`list_templates`**: Lists all available Nuxt UI templates with optional category filtering
- **`get_template`**: Retrieves template details and setup instructions

### Documentation Tools

- **`list_documentation_pages`**: Lists all documentation pages
- **`get_documentation_page`**: Retrieves documentation page content by URL path
- **`list_getting_started_guides`**: Lists all getting started guides and installation instructions

- **`list_examples`**: Lists all available UI examples and code demonstrations
- **`get_example`**: Retrieves specific UI example implementation code and details

- **`get_migration_guide`**: Retrieves version-specific migration guides and upgrade instructions

The Nuxt UI MCP server provides guided prompts for common workflows:

- **`find_component_for_usecase`**: Find the best component for your specific use case
- **`implement_component_with_props`**: Generate complete component implementation with proper props
- **`setup_project_with_template`**: Get guided setup instructions for project templates

You're able to access these resources with tools like Claude Code by using `/`.

The Nuxt UI MCP server uses HTTP transport and can be configured in different AI assistants.

::note{icon="i-lucide-info"}
**Custom connectors using MCP are available on ChatGPT for Pro and Plus accounts** on the web.
::

Follow these steps to set up Nuxt UI as a connector within ChatGPT:

1. **Enable Developer mode:**
   - Go to Settings → Connectors → Advanced settings → Developer mode
2. **Open ChatGPT settings**
3. **In the Connectors tab, Create a new connector:**
   - Give it a name: `Nuxt UI`
   - MCP server URL: `https://ui.nuxt.com/mcp`
   - Authentication: `None`
4. **Click Create**

The Nuxt UI connector will appear in the composer's "Developer mode" tool later during conversations.

::note{icon="i-lucide-info"}
**Ensure Claude Code is installed** - Visit [Anthropic's documentation](https://docs.anthropic.com/en/docs/claude-code/quickstart){rel="nofollow"} for installation instructions.
::

Add the server using the CLI command:

Click the button below to install the Nuxt UI MCP server directly in Cursor:

::u-button
---
color: neutral
icon: i-custom-cursor
label: Install MCP Server
to: cursor://anysphere.cursor-deeplink/mcp/install?name=nuxt-ui&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vdWkubnV4dC5jb20vbWNwIn0%3D
---
::

#### Manual Setup Instructions:

1. Open Cursor and go to "Settings" > "Tools & MCP"
2. Add the Nuxt UI MCP server configuration

Or manually create/update `.cursor/mcp.json` in your project root:

#### Setup Instructions:

1. Navigate to "Intelligence" > "Connectors"
2. Click on "Add Connector" button, then select "Custom MCP Connector"
3. Create your Custom MCP Connector:

- Connector Name : `NuxtUI`
   - Connector Server : `https://ui.nuxt.com/mcp`

### Visual Studio Code

::note{icon="i-lucide-info"}
**Install required extensions** - Ensure you have [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot){rel="nofollow"} and [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat){rel="nofollow"} extensions installed.
::

#### Setup Instructions:

1. Open VS Code and access the Command Palette (Ctrl/Cmd + Shift + P)
2. Type "Preferences: Open Workspace Settings (JSON)" and select it
3. Navigate to your project's `.vscode` folder or create one if it doesn't exist
4. Create or edit the `mcp.json` file with the following configuration:

#### Setup Instructions:

1. Open Windsurf and navigate to "Settings" > "Windsurf Settings" > "Cascade"
2. Click the "Manage MCPs" button, then select the "View raw config" option
3. Add the following configuration to your MCP settings:

#### Setup Instructions:

1. Open Zed and go to "Settings" > "Open Settings"
2. Navigate to the JSON settings file
3. Add the following context server configuration to your settings:

#### Setup Instructions:

1. In your project root, create `opencode.json`
2. Add the following configuration:

Once configured, you can ask your AI assistant questions like:

- "List all available Nuxt UI components"
- "Get Button component documentation"
- "What props does Input accept?"
- "Find form-related components"
- "List dashboard templates"
- "Get template setup instructions"
- "Show installation guide"
- "Get v4 migration guide"
- "List all examples"
- "Get ContactForm example code"

The AI assistant will use the MCP server to fetch structured JSON data and provide guided assistance for Nuxt UI during development.

**Examples:**

Example 1 (bash):
```bash
claude mcp add --transport http nuxt-ui-remote https://ui.nuxt.com/mcp
```

Example 2 (unknown):
```unknown
### Le Chat Mistral

#### Setup Instructions:

1. Navigate to "Intelligence" > "Connectors"
2. Click on "Add Connector" button, then select "Custom MCP Connector"
3. Create your Custom MCP Connector:

   - Connector Name : `NuxtUI`
   - Connector Server : `https://ui.nuxt.com/mcp`

### Visual Studio Code

::note{icon="i-lucide-info"}
**Install required extensions** - Ensure you have [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot){rel="nofollow"} and [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat){rel="nofollow"} extensions installed.
::

#### Setup Instructions:

1. Open VS Code and access the Command Palette (Ctrl/Cmd + Shift + P)
2. Type "Preferences: Open Workspace Settings (JSON)" and select it
3. Navigate to your project's `.vscode` folder or create one if it doesn't exist
4. Create or edit the `mcp.json` file with the following configuration:
```

Example 3 (unknown):
```unknown
### Windsurf

#### Setup Instructions:

1. Open Windsurf and navigate to "Settings" > "Windsurf Settings" > "Cascade"
2. Click the "Manage MCPs" button, then select the "View raw config" option
3. Add the following configuration to your MCP settings:
```

Example 4 (unknown):
```unknown
### Zed

#### Setup Instructions:

1. Open Zed and go to "Settings" > "Open Settings"
2. Navigate to the JSON settings file
3. Add the following context server configuration to your settings:
```

---

## Marquee

**URL:** llms-txt#marquee

**Contents:**
- Usage
  - Pause on Hover
  - Reverse
  - Orientation
  - Repeat
  - Overlay
- Examples
  - Testimonials
  - Screenshots
- API

Use the default slot with your content to create an infinite scrolling animation.

Use the `pause-on-hover` prop to pause the animation when the user hovers over the content.

Use the `reverse` prop to reverse the direction of the animation.

Use the `orientation` prop to change the scrolling direction.

Use the `repeat` prop to specify how many times the content should be repeated in the animation.

Use the `overlay` prop to remove the gradient overlays on the edges of the marquee.

Use the `Marquee` component to create an infinite scrolling animation for your testimonials.

Use the `Marquee` component to create an infinite scrolling animation for your screenshots.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UMarquee>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

Example 2 (vue):
```vue
<template>
  <UMarquee pause-on-hover>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

Example 3 (vue):
```vue
<template>
  <UMarquee reverse>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

Example 4 (vue):
```vue
<template>
  <UMarquee orientation="vertical">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

---

## PageAside

**URL:** llms-txt#pageaside

**Contents:**
- Usage
- Examples
  - Within a layout
- API
  - Props
  - Slots
- Theme
- Changelog

The PageAside component is a sticky `<aside>` element that is only displayed starting from the [`lg` breakpoint](https://tailwindcss.com/docs/breakpoints){rel="nofollow"}.

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/css-variables#header"}
The PageAside component uses the `--ui-header-height` CSS variable to position itself correctly below the [Header](https://ui.nuxt.com/docs/components/header).
::

Use it inside the `left` or `right` slot of the [Page](https://ui.nuxt.com/docs/components/page) component:

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PageAside component in a layout to display the navigation:

::note
In this example, we use the `ContentNavigation` component to display the navigation injected in `app.vue`.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a layout

Use the PageAside component in a layout to display the navigation:
```

Example 2 (unknown):
```unknown
::note
In this example, we use the `ContentNavigation` component to display the navigation injected in `app.vue`.
::

## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## Icons

**URL:** llms-txt#icons

**Contents:**
- Usage
  - Icon component
  - Component props
- Theme

::callout
---
class: hidden
icon: i-logos-nuxt-icon
to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt
---
Looking for the **Nuxt** version?
::

You can use the [Icon](https://ui.nuxt.com/docs/components/icon) component with a `name` prop to display an icon:

::note
You can use any name from the <https://icones.js.org>{rel="nofollow"} collection.
::

::warning
When using collections with a dash (`-`), you need to separate the icon name from the collection name with a colon (`:`) as `@iconify/vue` does not handle this case like `@nuxt/icon`. For example, instead of `i-simple-icons-github` you need to write `i-simple-icons:github` or `simple-icons:github`.

Learn more about the [Iconify naming convention](https://iconify.design/docs/icon-components/vue/#icon){rel="nofollow"}.
::

Some components also have an `icon` prop to display an icon, like the [Button](https://ui.nuxt.com/docs/components/button) for example:

You can change the default icons used by Nuxt UI components in your `vite.config.ts`:

**Examples:**

Example 1 (vue):
```vue
<template>
  <UIcons name="i-lucide-lightbulb" class="size-5" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UIcons icon="i-lucide-sun" variant="subtle">
    Button
  </UIcons>
</template>
```

---

## Breadcrumb

**URL:** llms-txt#breadcrumb

**Contents:**
- Usage
  - Items
  - Separator Icon
- Examples
  - With separator slot
  - With custom slot
- API
  - Props
  - Slots
- Theme

Use the Breadcrumb component to show the current page's location in your site's hierarchy.

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::note
A `span` is rendered instead of a link when the `to` property is not defined.
::

Use the `separator-icon` prop to customize the [Icon](https://ui.nuxt.com/docs/components/icon) between each item. Defaults to `i-lucide-chevron-right`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key.
  :::
::

### With separator slot

Use the `#separator` slot to customize the separator between each item.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/#slots"}
You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    to: '/docs',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/docs/components/breadcrumb',
  },
])
</script>

<template>
  <UBreadcrumb :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    to: '/docs',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/docs/components/breadcrumb',
  },
])
</script>

<template>
  <UBreadcrumb :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Docs',
    icon: 'i-lucide-book-open',
    to: '/docs',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/docs/components',
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/docs/components/breadcrumb',
  },
])
</script>

<template>
  <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items" />
</template>
```

Example 4 (unknown):
```unknown
### With custom slot

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
```

---

## Container

**URL:** llms-txt#container

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

Use the default slot to center and constrain the width of your content.

::tip
---
to: https://ui.nuxt.com/docs/getting-started/theme/css-variables#container
---
Its max width is controlled by the `--ui-container` CSS variable.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## API

### Props
```

Example 2 (unknown):
```unknown
### Slots
```

Example 3 (unknown):
```unknown
## Theme
```

---

## Create a basic component

**URL:** llms-txt#create-a-basic-component

nuxt-ui make component my-component

---

## DashboardGroup

**URL:** llms-txt#dashboardgroup

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardGroup component is the main layout that wraps the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) and [DashboardPanel](https://ui.nuxt.com/docs/components/dashboard-panel) components to create a responsive dashboard interface.

Use it in a layout or in your `app.vue`:

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## API

### Props
```

Example 2 (unknown):
```unknown
### Slots
```

Example 3 (unknown):
```unknown
## Theme
```

---

## PageHero

**URL:** llms-txt#pagehero

**Contents:**
- Usage
  - Title
  - Description
  - Headline
  - Links
  - Orientation
  - Reverse
- API
  - Props
  - Slots

The PageHero component wraps your content in a [Container](https://ui.nuxt.com/docs/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

::code-preview
  :::u-page-hero
  ---
  description: A Nuxt/Vue-integrated UI library providing a rich set of
    fully-styled, accessible and highly customizable components for building
    modern web applications.
  title: Ultimate Vue UI library
  ---
    ::::u-page-card
    ---
    class: rounded-lg
    variant: subtle
    ---
    #default{unwrap="p"}
    ![App screenshot](https://ui.nuxt.com/blocks/image4.png){.rounded-sm.shadow-2xl.ring.ring-default height="3000" width="4804"}
    ::::
  :::
::

Use the `title` prop to set the title of the hero.

Use the `description` prop to set the description of the hero.

Use the `headline` prop to set the headline of the hero.

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) under the description.

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

Use the `reverse` prop to reverse the orientation of the default slot.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPageHero title="Ultimate Vue UI library" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." />
</template>
```

---

## Calendar

**URL:** llms-txt#calendar

**Contents:**
- Usage
  - Multiple
  - Range
  - Color
  - Variant
  - Size
  - Disabled
  - Number Of Months
  - Month Controls
  - Year Controls

Use the `v-model` directive to control the selected date.

Use the `default-value` prop to set the initial value when you do not need to control its state.

::note
This component relies on the [`@internationalized/date`](https://react-spectrum.adobe.com/internationalized/date/index.html){rel="nofollow"} package which provides objects and functions for representing and manipulating dates and times in a locale-aware manner.
::

Use the `multiple` prop to allow multiple selections.

Use the `range` prop to select a range of dates.

Use the `color` prop to change the color of the calendar.

Use the `variant` prop to change the variant of the calendar.

Use the `size` prop to change the size of the calendar.

Use the `disabled` prop to disable the calendar.

Use the `numberOfMonths` prop to change the number of months in the calendar.

Use the `month-controls` prop to show the month controls. Defaults to `true`.

Use the `year-controls` prop to show the year controls. Defaults to `true`.

Use the `fixed-weeks` prop to display the calendar with fixed weeks.

Use the [Chip](https://ui.nuxt.com/docs/components/chip) component to add events to specific days.

### With disabled dates

Use the `is-date-disabled` prop with a function to mark specific dates as disabled.

### With unavailable dates

Use the `is-date-unavailable` prop with a function to mark specific dates as unavailable.

### With min/max dates

Use the `min-value` and `max-value` props to limit the dates.

### With other calendar systems

You can use other calenders from `@internationalized/date` to implement a different calendar system.

::note
---
to: https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations
---
You can check all the available calendars on `@internationalized/date` docs.
::

### With external controls

You can control the calendar with external controls by manipulating the date passed in the `v-model`.

Use a [Button](https://ui.nuxt.com/docs/components/button) and a [Popover](https://ui.nuxt.com/docs/components/popover) component to create a date picker.

### As a DateRangePicker

Use a [Button](https://ui.nuxt.com/docs/components/button) and a [Popover](https://ui.nuxt.com/docs/components/popover) component to create a date range picker.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const value = ref(new CalendarDate(2022, 2, 3))
</script>

<template>
  <UCalendar v-model="value" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UCalendar />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
const value = ref(new CalendarDate(2022,2,4, 2022,2,6, 2022,2,8))
</script>

<template>
  <UCalendar multiple v-model="value" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UCalendar range v-model="value" />
</template>
```

---

## Switch

**URL:** llms-txt#switch

**Contents:**
- Usage
  - Label
  - Description
  - Icon
  - Loading
  - Loading Icon
  - Color
  - Size
  - Disabled
- API

Use the `v-model` directive to control the checked state of the Switch.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `label` prop to set the label of the Switch.

When using the `required` prop, an asterisk is added next to the label.

Use the `description` prop to set the description of the Switch.

Use the `checked-icon` and `unchecked-icon` props to set the icons of the Switch when checked and unchecked.

Use the `loading` prop to show a loading icon on the Switch.

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.
  :::
::

Use the `color` prop to change the color of the Switch.

Use the `size` prop to change the size of the Switch.

Use the `disabled` prop to disable the Switch.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <USwitch model-value />
</template>
```

Example 2 (vue):
```vue
<template>
  <USwitch default-value />
</template>
```

Example 3 (vue):
```vue
<template>
  <USwitch label="Check me" />
</template>
```

Example 4 (vue):
```vue
<template>
  <USwitch required label="Check me" />
</template>
```

---

## Create a content component

**URL:** llms-txt#create-a-content-component

nuxt-ui make component block --content

---

## PageLinks

**URL:** llms-txt#pagelinks

**Contents:**
- Usage
  - Links
  - Title
- Examples
  - Within a page
- API
  - Props
  - Slots
- Theme
- Changelog

Use the PageLinks component to display a list of links.

Use the `links` prop as an array of objects with the following properties:

- `label: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

Use the `title` prop to display a title above the links.

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PageLinks component in the `bottom` slot of the ContentToc component to display a list of links below the table of contents.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPageLinks />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'
</script>

<template>
  <UPageLinks />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'
</script>

<template>
  <UPageLinks title="Community" />
</template>
```

Example 4 (unknown):
```unknown
## API

### Props
```

---

## Create a prose component

**URL:** llms-txt#create-a-prose-component

nuxt-ui make component heading --prose

---

## Icon

**URL:** llms-txt#icon

**Contents:**
- Usage
- Examples
  - SVG
- API
  - Props
- Changelog

Use the `name` prop to display an icon:

::framework-only
#nuxt
  :::caution
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#collections
  ---
  It's highly recommended to install the icons collections you need, read more about this.
  :::
::

You can also pass a Vue component into the `name` prop:

You can define your icon components yourself, or use [`unplugin-icons`](https://github.com/unplugin/unplugin-icons){rel="nofollow"} to import them directly from SVG files:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UIcon name="i-lucide-lightbulb" class="size-5" />
</template>
```

Example 2 (unknown):
```unknown
You can define your icon components yourself, or use [`unplugin-icons`](https://github.com/unplugin/unplugin-icons){rel="nofollow"} to import them directly from SVG files:
```

Example 3 (unknown):
```unknown
## API

### Props
```

---

## BlogPosts

**URL:** llms-txt#blogposts

**Contents:**
- Usage
  - Posts
  - Orientation
- Examples
  - Within a page
- API
  - Props
  - Slots
- Theme
- Changelog

The BlogPosts component provides a flexible layout to display a list of [BlogPost](https://ui.nuxt.com/docs/components/blog-post) components using either the default slot or the `posts` prop.

Use the `posts` prop as an array of objects with the properties of the [BlogPost](https://ui.nuxt.com/docs/components/blog-post#props) component.

Use the `orientation` prop to change the orientation of the BlogPosts. Defaults to `horizontal`.

::tip
When using the `posts` prop instead of the default slot, the `orientation` of the posts is automatically reversed, `horizontal` to `vertical` and vice versa.
::

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the BlogPosts component in a page to create a blog page:

::note
In this example, the `posts` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Posts

Use the `posts` prop as an array of objects with the properties of the [BlogPost](https://ui.nuxt.com/docs/components/blog-post#props) component.
```

Example 2 (unknown):
```unknown
### Orientation

Use the `orientation` prop to change the orientation of the BlogPosts. Defaults to `horizontal`.
```

Example 3 (unknown):
```unknown
::tip
When using the `posts` prop instead of the default slot, the `orientation` of the posts is automatically reversed, `horizontal` to `vertical` and vice versa.
::

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the BlogPosts component in a page to create a blog page:
```

Example 4 (unknown):
```unknown
::note
In this example, the `posts` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

## API

### Props
```

---

## ContentSearch

**URL:** llms-txt#contentsearch

**Contents:**
- Usage
  - Shortcut
  - Color Mode
- Examples
  - Within `app.vue`
- API
  - Props
  - Slots
  - Emits
- Theme

::warning{to="https://ui.nuxt.com/docs/getting-started/integrations/content"}
This component is only available when the `@nuxt/content` module is installed.
::

The ContentSearch component extends the [CommandPalette](https://ui.nuxt.com/docs/components/command-palette) component, so you can pass any property such as `icon`, `placeholder`, etc.

Use the `files` and `navigation` props with the `files`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} and `navigation`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} values you fetched using the `queryCollectionSearchSections` and `queryCollectionNavigation` composables from `@nuxt/content`.

::tip
You can open the CommandPalette by pressing `` ``, by using the [ContentSearchButton](https://ui.nuxt.com/docs/components/content-search-button) component or by using the `useContentSearch` composable: `const { open } = useContentSearch()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"}.
::

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](https://ui.nuxt.com/docs/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`` ``).

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:

You can disable this behavior by setting the `color-mode` prop to `false`:

Use the ContentSearch component in your `app.vue` or in a layout:

::tip
It is recommended to wrap the `ContentSearch` component in a [ClientOnly](https://nuxt.com/docs/api/components/client-only){rel="nofollow"} component so it's not rendered on the server.
::

::component-changelog{prefix="content"}
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
You can open the CommandPalette by pressing `` ``, by using the [ContentSearchButton](https://ui.nuxt.com/docs/components/content-search-button) component or by using the `useContentSearch` composable: `const { open } = useContentSearch()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"}.
::

### Shortcut

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](https://ui.nuxt.com/docs/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`` ``).
```

Example 2 (unknown):
```unknown
### Color Mode

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:
```

Example 3 (unknown):
```unknown
You can disable this behavior by setting the `color-mode` prop to `false`:
```

Example 4 (unknown):
```unknown
## Examples

### Within `app.vue`

Use the ContentSearch component in your `app.vue` or in a layout:
```

---

## PageBody

**URL:** llms-txt#pagebody

**Contents:**
- Usage
- Examples
  - Within a page
- API
  - Props
  - Slots
- Theme
- Changelog

The PageBody component wraps your main content and adds some padding for consistent spacing.

Use it inside the default slot of the [Page](https://ui.nuxt.com/docs/components/page) component, after the [PageHeader](https://ui.nuxt.com/docs/components/page-header) component:

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PageBody component in a page to display the content of the page:

::note
In this example, we use the [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer){rel="nofollow"} component from `@nuxt/content` to render the content of the page.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the PageBody component in a page to display the content of the page:
```

Example 2 (unknown):
```unknown
::note
In this example, we use the [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer){rel="nofollow"} component from `@nuxt/content` to render the content of the page.
::

## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## PageCTA

**URL:** llms-txt#pagecta

**Contents:**
- Usage
  - Title
  - Description
  - Links
  - Variant
  - Orientation
  - Reverse
- API
  - Props
  - Slots

The PageCTA component provides a flexible way to display a call to action in your pages with an illustration in the default slot.

::code-preview
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      color: neutral
    - label: Learn more
      color: neutral
      variant: subtle
      trailingIcon: i-lucide-arrow-right
  description: Preview the latest Tailwind CSS v4 and get started with Nuxt UI.
  orientation: horizontal
  title: Trusted and supported by our amazing community
  ---
  ![Illustration](https://picsum.photos/640/616){.w-full.rounded-lg height="308" width="320"}
  :::
::

Use it inside a [PageSection](https://ui.nuxt.com/docs/components/page-section) component or directly in your page:

::tip
Use `px-0` and `rounded-none` classes to make the CTA fill the edge of the page on mobile.
::

Use the `title` prop to set the title of the CTA.

Use the `description` prop to set the description of the CTA.

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) under the description.

Use the `variant` prop to change the style of the CTA.

::tip
You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.
::

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

Use the `reverse` prop to reverse the orientation of the default slot.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
Use `px-0` and `rounded-none` classes to make the CTA fill the edge of the page on mobile.
::

### Title

Use the `title` prop to set the title of the CTA.
```

Example 2 (unknown):
```unknown
### Description

Use the `description` prop to set the description of the CTA.
```

Example 3 (unknown):
```unknown
### Links

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) under the description.
```

Example 4 (unknown):
```unknown
### Variant

Use the `variant` prop to change the style of the CTA.
```

---

## Generate only documentation template

**URL:** llms-txt#generate-only-documentation-template

**Contents:**
  - Locales
- Submit a Pull Request (PR)
  - Local development
  - IDE Setup
  - Linting
  - Type checking
  - Testing
  - Commit conventions
  - Making a Pull Request
- Thanks

nuxt-ui make component my-component --template=docs
sh
nuxt-ui make locale --code <code> --name <name>
sh
git clone -b v4 https://github.com/nuxt/ui.git
sh
corepack enable
sh
pnpm install
sh
pnpm run dev:prepare
sh
pnpm run docs
sh
pnpm run dev
sh
pnpm run dev:vue
json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
sh
pnpm run lint # check for linting errors
pnpm run lint:fix # fix linting errors
sh
pnpm run typecheck
sh
pnpm run test # for Nuxt
pnpm run test:vue # for Vue
```

::tip
If you have to update the snapshots, press `u` after the tests have finished running.
::

### Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/){rel="nofollow"} for commit messages, which allows a changelog to be auto-generated based on the commits. Please read the [guide](https://www.conventionalcommits.org/en/v1.0.0/#summary){rel="nofollow"} through if you aren't familiar with it already.

- Use `fix` and `feat` for code changes that affect functionality or logic
- Use `docs` for documentation changes and `chore` for maintenance tasks

### Making a Pull Request

- Follow along the [instructions](https://github.com/nuxt/ui/blob/v4/.github/PULL_REQUEST_TEMPLATE.md?plain=1){rel="nofollow"} provided when creating a PR
- Ensure your PR's title adheres to the [Conventional Commits](https://www.conventionalcommits.org/){rel="nofollow"} since it will be used once the code is merged.
- Multiple commits are fine; no need to rebase or force push. We'll use `Squash and Merge` when merging.
- Ensure `lint`, `typecheck` and `tests` work before submitting the PR. Avoid making unrelated changes.

We'll review it promptly. If assigned to a maintainer, they'll review it carefully. Ignore the red text; it's for tracking purposes.

Thank you again for being interested in this project! You are awesome! ❤️

**Examples:**

Example 1 (unknown):
```unknown
::note
When creating a new component, the CLI will automatically generate all the necessary files like the component itself, theme, tests, and documentation.
::

### Locales

You can create new locales using the following command:
```

Example 2 (unknown):
```unknown
::note
---
to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt#supported-languages
---
Learn more about **i18n** in the documentation.
::

## Submit a Pull Request (PR)

Before you start, check if there's an existing issue describing the problem or feature request you're working on. If there is, please leave a comment on the issue to let us know you're working on it.

If there isn't, open a new issue to discuss the problem or feature.

### Local development

To begin local development, follow these steps:

::steps{level="4"}
#### Clone the `nuxt/ui` repository to your local machine
```

Example 3 (unknown):
```unknown
#### Enable [Corepack](https://github.com/nodejs/corepack){rel="nofollow"}
```

Example 4 (unknown):
```unknown
#### Install dependencies
```

---

## ColorPicker

**URL:** llms-txt#colorpicker

**Contents:**
- Usage
  - RGB Format
  - HSL Format
  - CMYK Format
  - CIELab Format
  - Throttle
  - Size
  - Disabled
- Examples
  - As a Color chooser

Use the `v-model` directive to control the value of the ColorPicker.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `format` prop to set `rgb` value of the ColorPicker.

Use the `format` prop to set `hsl` value of the ColorPicker.

Use the `format` prop to set `cmyk` value of the ColorPicker.

Use the `format` prop to set `lab` value of the ColorPicker.

Use the `throttle` prop to set the throttle value of the ColorPicker.

Use the `size` prop to set the size of the ColorPicker.

Use the `disabled` prop to disable the ColorPicker.

### As a Color chooser

Use a [Button](https://ui.nuxt.com/docs/components/button) and a [Popover](https://ui.nuxt.com/docs/components/popover) component to create a color chooser.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorPicker model-value="#00C16A" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UColorPicker default-value="#00BCD4" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UColorPicker format="rgb" model-value="rgb(0, 193, 106)" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UColorPicker format="hsl" model-value="hsl(153, 100%, 37.8%)" />
</template>
```

---

## Slider

**URL:** llms-txt#slider

**Contents:**
- Usage
  - Min / Max
  - Step
  - Multiple
  - Orientation
  - Color
  - Size
  - Tooltip
  - Disabled
  - Inverted

Use the `v-model` directive to control the value of the Slider.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `min` and `max` props to set the minimum and maximum values of the Slider. Defaults to `0` and `100`.

Use the `step` prop to set the increment value of the Slider. Defaults to `1`.

Use the `v-model` directive or the `default-value` prop with an array of values to create a range Slider.

Use the `min-steps-between-thumbs` prop to limit the minimum distance between the thumbs.

Use the `orientation` prop to change the orientation of the Slider. Defaults to `horizontal`.

Use the `color` prop to change the color of the Slider.

Use the `size` prop to change the size of the Slider.

Use the `tooltip` prop to display a [Tooltip](https://ui.nuxt.com/docs/components/tooltip) around the Slider thumbs with the current value. You can set it to `true` for default behavior or pass an object to customize it with any property from the [Tooltip](https://ui.nuxt.com/docs/components/tooltip#props) component.

Use the `disabled` prop to disable the Slider.

Use the `inverted` prop to visually invert the Slider.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <USlider :model-value="50" />
</template>
```

Example 2 (vue):
```vue
<template>
  <USlider :default-value="50" />
</template>
```

Example 3 (vue):
```vue
<template>
  <USlider :min="0" :max="50" :default-value="50" />
</template>
```

Example 4 (vue):
```vue
<template>
  <USlider :step="10" :default-value="50" />
</template>
```

---

## ColorModeAvatar

**URL:** llms-txt#colormodeavatar

**Contents:**
- Usage
- API
  - Props
- Changelog

The ColorModeAvatar component extends the [Avatar](https://ui.nuxt.com/docs/components/avatar) component, so you can pass any property such as `size`, `icon`, etc.

Use the `light` and `dark` props to define the source for light and dark mode.

::note
Switch between light and dark mode to see the different images: :u-color-mode-select{size="sm"}
::

::component-changelog{prefix="color-mode"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorModeAvatar light="https://github.com/vuejs.png" dark="https://github.com/nuxt.png" />
</template>
```

Example 2 (ts):
```ts
/**
 * Props for the ColorModeAvatar component
 */
interface ColorModeAvatarProps {
  light: string;
  dark: string;
  /**
   * The element or component this component should render as.
   */
  as?: any;
  ui?: { root?: ClassNameValue; image?: ClassNameValue; fallback?: ClassNameValue; icon?: ClassNameValue; } | undefined;
  alt?: string | undefined;
  icon?: string | object | undefined;
  text?: string | undefined;
  size?: "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | undefined;
  chip?: boolean | ChipProps | undefined;
}
```

---

## BlogPost

**URL:** llms-txt#blogpost

**Contents:**
- Usage
  - Title
  - Description
  - Date
  - Badge
  - Image
  - Authors
  - Link
  - Variant
  - Orientation

The BlogPost component provides a flexible way to display an `<article>` element with customizable content including title, description, image, etc.

::code-preview
  :::u-blog-post
  ---
  authors:
    - name: Anthony Fu
      description: antfu7
      avatar:
        src: https://github.com/antfu.png
      to: https://github.com/antfu
      target: _blank
  class: w-96
  date: 2024-11-25
  description: Discover Nuxt Icon v1 - a modern, versatile, and customizable icon
    solution for your Nuxt projects.
  image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  target: _blank
  title: Introducing Nuxt Icon v1
  to: https://nuxt.com/blog/nuxt-icon-v1-0
  ---
  :::
::

::tip{to="https://ui.nuxt.com/docs/components/blog-posts"}
Use the [`BlogPosts`](https://ui.nuxt.com/docs/components/blog-posts) component to display multiple blog posts in a responsive grid layout.
::

Use the `title` prop to display the title of the BlogPost.

Use the `description` prop to display the description of the BlogPost.

Use the `date` prop to display the date of the BlogPost.

::tip
The date is automatically formatted to the [current locale](https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt#locale). You can either pass a `Date` object or a string.
::

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/docs/components/badge) in the BlogPost.

You can pass any property from the [Badge](https://ui.nuxt.com/docs/components/badge#props) component to customize it.

Use the `image` prop to display an image in the BlogPost.

::note
If [`@nuxt/image`](https://image.nuxt.com/get-started/installation){rel="nofollow"} is installed, the `<NuxtImg>` component will be used instead of the native `img` tag.
::

Use the `authors` prop to display a list of [User](https://ui.nuxt.com/docs/components/user) in the BlogPost as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `size?: UserProps['size']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: UserProps['orientation']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

When the `authors` prop has more than one item, the [AvatarGroup](https://ui.nuxt.com/docs/components/avatar-group) component is used.

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

Use the `variant` prop to change the style of the BlogPost.

::note
The styling will be different wether you provide a `to` prop or an `image`.
::

Use the `orientation` prop to change the BlogPost orientation. Defaults to `vertical`.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." date="2024-11-25" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." badge="Release" />
</template>
```

---

## DashboardResizeHandle

**URL:** llms-txt#dashboardresizehandle

**Contents:**
- Usage
- Examples
  - Within `resize-handle` slot
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardResizeHandle component is used by the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) and [DashboardPanel](https://ui.nuxt.com/docs/components/dashboard-panel) components.

It is automatically displayed when the `resizable` prop is set, **you don't have to add it manually**.

### Within `resize-handle` slot

Even though this component is automatically displayed when the `resizable` prop is set, you can use the `resize-handle` slot of the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) and [DashboardPanel](https://ui.nuxt.com/docs/components/dashboard-panel) components to customize the handle.

::note
In this example, we add an `after` pseudo-element to display a vertical line on hover.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

::note
In this example, we add an `after` pseudo-element to display a vertical line on hover.
::

## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## Tabs

**URL:** llms-txt#tabs

**Contents:**
- Usage
  - Items
  - Content
  - Unmount
  - Color
  - Variant
  - Size
  - Orientation
- Examples
  - Control active item

Use the Tabs component to display a list of items in a tabs.

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `badge?: string | number | BadgeProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `content?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string | number`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Set the `content` prop to `false` to turn the Tabs into a toggle-only control without displaying any content. Defaults to `true`.

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Tabs is collapsed. Defaults to `true`.

::note
You can inspect the DOM to see each item's content being rendered.
::

Use the `color` prop to change the color of the Tabs.

Use the `variant` prop to change the variant of the Tabs.

Use the `size` prop to change the size of the Tabs.

Use the `orientation` prop to change the orientation of the Tabs. Defaults to `horizontal`.

### Control active item

You can control the active item by using the `default-value` prop or the `v-model` directive with the index of the item.

### With content slot

Use the `#content` slot to customize the content of each item.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                              | Type                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `triggersRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<ComponentPublicInstance[]>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Items

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `badge?: string | number | BadgeProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `content?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `value?: string | number`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
```

Example 2 (unknown):
```unknown
### Content

Set the `content` prop to `false` to turn the Tabs into a toggle-only control without displaying any content. Defaults to `true`.
```

Example 3 (unknown):
```unknown
### Unmount

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Tabs is collapsed. Defaults to `true`.
```

Example 4 (unknown):
```unknown
::note
You can inspect the DOM to see each item's content being rendered.
::

### Color

Use the `color` prop to change the color of the Tabs.
```

---

## Internationalization (i18n)

**URL:** llms-txt#internationalization-(i18n)

**Contents:**
- Usage
  - Locale
  - Custom locale
  - Extend locale
  - Dynamic locale
  - Dynamic direction
- Supported languages

::callout
---
class: hidden
icon: i-logos-nuxt-icon
to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt
---
Looking for the **Nuxt** version?
::

::note{to="https://ui.nuxt.com/docs/components/app"}
Nuxt UI provides an **App** component that wraps your app to provide global configurations.
::

Use the `locale` prop with the locale you want to use from `@nuxt/ui/locale`:

You can create your own locale using the `defineLocale` composable:

::tip
Look at the `code` parameter, there you need to pass the iso code of the language. Example:

- `hi` Hindi (language)
- `de-AT`: German (language) as used in Austria (region)
::

You can customize an existing locale by overriding its `messages` or `code` using the `extendLocale` composable:

To dynamically switch between languages, you can use the [Vue I18n](https://vue-i18n.intlify.dev/){rel="nofollow"} plugin.

::steps{level="4"}
#### Install the Vue I18n package

:::code-group{sync="pm"}
  
  
  
  
  
  
  
  :::

#### Use the Vue I18n plugin in your `main.ts`

#### Set the `locale` prop using `useI18n`

### Dynamic direction

Each locale has a `dir` property which will be used by the `App` component to set the directionality of all components.

In a multilingual application, you might want to set the `lang` and `dir` attributes on the `<html>` element dynamically based on the user's locale, which you can do with the [useHead](https://unhead.unjs.io/usage/composables/use-head){rel="nofollow"} composable:

## Supported languages

::supported-languages
::

**Examples:**

Example 1 (unknown):
```unknown
### Custom locale

You can create your own locale using the `defineLocale` composable:
```

Example 2 (unknown):
```unknown
::tip
Look at the `code` parameter, there you need to pass the iso code of the language. Example:

- `hi` Hindi (language)
- `de-AT`: German (language) as used in Austria (region)
::

### Extend locale

You can customize an existing locale by overriding its `messages` or `code` using the `extendLocale` composable:
```

Example 3 (unknown):
```unknown
### Dynamic locale

To dynamically switch between languages, you can use the [Vue I18n](https://vue-i18n.intlify.dev/){rel="nofollow"} plugin.

::steps{level="4"}
#### Install the Vue I18n package

  :::code-group{sync="pm"}
```

Example 4 (unknown):
```unknown

```

---

## Header

**URL:** llms-txt#header

**Contents:**
- Usage
  - Title
  - To
  - Mode
  - Toggle
  - Toggle Side
- Examples
  - Within `app.vue`
- API
  - Props

The Header component renders a `<header>` element.

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/css-variables#header"}
Its height is defined through a `--ui-header-height` CSS variable.
::

Use the `left`, `default` and `right` slots to customize the header and the `body` or `content` slots to customize the header menu.

::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render the header links in the center.
::

Use the `title` prop to change the title of the header. Defaults to `Nuxt UI`.

You can also use the `title` slot to add your own logo.

::tip{to="https://ui.nuxt.com/#props"}
You should still add the `title` prop to replace the default `aria-label` of the link.
::

Use the `to` prop to change the link of the title. Defaults to `/`.

You can also use the `left` slot to override the link entirely.

Use the `mode` prop to change the mode of the header menu. Defaults to `modal`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

::tip{to="https://ui.nuxt.com/#props"}
You can use the `menu` prop to customize the menu of the header, it will adapt depending on the mode you choose.
::

Use the `toggle` prop to customize the toggle button displayed on mobile.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

Use the Header component in your `app.vue` or in a layout:

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render the header links in the center.
::

### Title

Use the `title` prop to change the title of the header. Defaults to `Nuxt UI`.
```

Example 2 (unknown):
```unknown
You can also use the `title` slot to add your own logo.

::tip{to="https://ui.nuxt.com/#props"}
You should still add the `title` prop to replace the default `aria-label` of the link.
::
```

Example 3 (unknown):
```unknown
### To

Use the `to` prop to change the link of the title. Defaults to `/`.
```

Example 4 (unknown):
```unknown
You can also use the `left` slot to override the link entirely.
```

---

## ChatMessage

**URL:** llms-txt#chatmessage

**Contents:**
- Usage
  - Parts
  - Side
  - Variant
  - Icon
  - Avatar
  - Actions
- API
  - Props
  - Slots

The ChatMessage component renders an `<article>` element for a `user` or `assistant` chat message.

::code-preview
  :::u-chat-message
  ---
  avatar:
    src: https://github.com/benjamincanac.png
  parts:
    - type: text
      id: "1"
      text: Hello! Tell me more about building AI chatbots with Nuxt UI.
  id: "1"
  role: user
  side: right
  variant: soft
  ---
  :::
::

::tip{to="https://ui.nuxt.com/docs/components/chat-messages"}
Use the [`ChatMessages`](https://ui.nuxt.com/docs/components/chat-messages) component to display a list of chat messages.
::

Use the `parts` prop to display the message content using the AI SDK v5 format.

::note
The `parts` prop is the recommended format for AI SDK v5. Each part has a `type` (e.g., 'text') and corresponding content. The ChatMessage component also supports the deprecated `content` prop for backward compatibility.
::

Use the `side` prop to display the message on the left or right.

::note
When using the [`ChatMessages`](https://ui.nuxt.com/docs/components/chat-messages) component, the `side` prop is set to `left` for `assistant` messages and `right` for `user` messages.
::

Use the `variant` prop to change style of the message.

::note
When using the [`ChatMessages`](https://ui.nuxt.com/docs/components/chat-messages) component, the `variant` prop is set to `naked` for `assistant` messages and `soft` for `user` messages.
::

Use the `icon` prop to display an [Icon](https://ui.nuxt.com/docs/components/icon) component next to the message.

Use the `avatar` prop to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) component next to the message.

You can also use the `avatar.icon` prop to display an icon as the avatar.

Use the `actions` prop to display actions below the message that will be displayed when hovering over the message.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UChatMessage role="user" id="1" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UChatMessage side="right" role="user" id="1" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UChatMessage variant="soft" role="user" id="1" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UChatMessage icon="i-lucide-user" variant="soft" side="right" role="user" id="1" />
</template>
```

---

## Main

**URL:** llms-txt#main

**Contents:**
- Usage
- Examples
  - Within `app.vue`
- API
  - Props
  - Slots
- Theme
- Changelog

The Main component works together with the [Header](https://ui.nuxt.com/docs/components/header) component to create a full-height layout that extends to the viewport's available height.

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/css-variables#header"}
The Main component uses the `--ui-header-height` CSS variable to position itself correctly below the [Header](https://ui.nuxt.com/docs/components/header).
::

Use the Main component in your `app.vue` or in a layout:

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## API

### Props
```

Example 2 (unknown):
```unknown
### Slots
```

Example 3 (unknown):
```unknown
## Theme
```

---

## ContextMenu

**URL:** llms-txt#contextmenu

**Contents:**
- Usage
  - Items
  - Size
  - Disabled
- Examples
  - With checkbox items
  - With color items
  - With custom slot
  - Extract shortcuts
- API

Use anything you like in the default slot of the ContextMenu, and right-click on it to display the menu.

Use the `items` prop as an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-color-items)
- [`checked?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-checkbox-items)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `onSelect?: (e: Event) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-checkbox-items)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::note
You can also pass an array of arrays to the `items` prop to create separated groups of items.
::

::tip
Each item can take a `children` array of objects with the same properties as the `items` prop to create a nested menu which can be controlled using the `open`, `defaultOpen` and `content` properties.
::

Use the `size` prop to change the size of the ContextMenu.

Use the `disabled` prop to disable the ContextMenu.

### With checkbox items

You can use the `type` property with `checkbox` and use the `checked` / `onUpdateChecked` properties to control the checked state of the item.

::note
To ensure reactivity for the `checked` state of items, it's recommended to wrap your `items` array inside a `computed`.
::

You can use the `color` property to highlight certain items with a color.

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/#slots"}
You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.
::

### Extract shortcuts

When you have some items with `kbds` property (displaying some [Kbd](https://ui.nuxt.com/docs/components/kbd)), you can easily make them work with the [defineShortcuts](https://ui.nuxt.com/docs/composables/define-shortcuts) composable.

Inside the `defineShortcuts` composable, there is an `extractShortcuts` utility that will extract the shortcuts recursively from the items and return an object that you can pass to `defineShortcuts`. It will automatically call the `select` function of the item when the shortcut is pressed.

::note
In this example, `` ``, `` `` ``, `` `` ``, `` `` ``, `` `` `` and `` `` `` would trigger the `select` function of the corresponding item.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  [
    {
      label: 'Appearance',
      children: [
        {
          label: 'System',
          icon: 'i-lucide-monitor',
        },
        {
          label: 'Light',
          icon: 'i-lucide-sun',
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
        },
      ],
    },
  ],
  [
    {
      label: 'Show Sidebar',
      kbds: [
        'meta',
        's',
      ],
    },
    {
      label: 'Show Toolbar',
      kbds: [
        'shift',
        'meta',
        'd',
      ],
    },
    {
      label: 'Collapse Pinned Tabs',
      disabled: true,
    },
  ],
  [
    {
      label: 'Refresh the Page',
    },
    {
      label: 'Clear Cookies and Refresh',
    },
    {
      label: 'Clear Cache and Refresh',
    },
    {
      type: 'separator',
    },
    {
      label: 'Developer',
      children: [
        [
          {
            label: 'View Source',
            kbds: [
              'meta',
              'shift',
              'u',
            ],
          },
          {
            label: 'Developer Tools',
            kbds: [
              'option',
              'meta',
              'i',
            ],
          },
          {
            label: 'Inspect Elements',
            kbds: [
              'option',
              'meta',
              'c',
            ],
          },
        ],
        [
          {
            label: 'JavaScript Console',
            kbds: [
              'option',
              'meta',
              'j',
            ],
          },
        ],
      ],
    },
  ],
])
</script>

<template>
  <UContextMenu :items="items">
    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui'

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: 'Appearance',
      children: [
        {
          label: 'System',
          icon: 'i-lucide-monitor',
        },
        {
          label: 'Light',
          icon: 'i-lucide-sun',
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
        },
      ],
    },
  ],
  [
    {
      label: 'Show Sidebar',
      kbds: [
        'meta',
        's',
      ],
    },
    {
      label: 'Show Toolbar',
      kbds: [
        'shift',
        'meta',
        'd',
      ],
    },
    {
      label: 'Collapse Pinned Tabs',
      disabled: true,
    },
  ],
  [
    {
      label: 'Refresh the Page',
    },
    {
      label: 'Clear Cookies and Refresh',
    },
    {
      label: 'Clear Cache and Refresh',
    },
    {
      type: 'separator',
    },
    {
      label: 'Developer',
      children: [
        [
          {
            label: 'View Source',
            kbds: [
              'meta',
              'shift',
              'u',
            ],
          },
          {
            label: 'Developer Tools',
            kbds: [
              'option',
              'meta',
              'i',
            ],
          },
          {
            label: 'Inspect Elements',
            kbds: [
              'option',
              'meta',
              'c',
            ],
          },
        ],
        [
          {
            label: 'JavaScript Console',
            kbds: [
              'option',
              'meta',
              'j',
            ],
          },
        ],
      ],
    },
  ],
])
</script>

<template>
  <UContextMenu :items="items">
    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui'

const items = ref<ContextMenuItem[]>([
  {
    label: 'System',
    icon: 'i-lucide-monitor',
  },
  {
    label: 'Light',
    icon: 'i-lucide-sun',
  },
  {
    label: 'Dark',
    icon: 'i-lucide-moon',
  },
])
</script>

<template>
  <UContextMenu size="xl" :items="items">
    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui'

const items = ref<ContextMenuItem[]>([
  {
    label: 'System',
    icon: 'i-lucide-monitor',
  },
  {
    label: 'Light',
    icon: 'i-lucide-sun',
  },
  {
    label: 'Dark',
    icon: 'i-lucide-moon',
  },
])
</script>

<template>
  <UContextMenu disabled :items="items">
    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
  </UContextMenu>
</template>
```

---

## PageFeature

**URL:** llms-txt#pagefeature

**Contents:**
- Usage
  - Title
  - Description
  - Icon
  - Link
  - Orientation
- API
  - Props
  - Slots
- Theme

The PageFeature component is used by the [PageSection](https://ui.nuxt.com/docs/components/page-section) component to display [features](https://ui.nuxt.com/docs/components/page-section#features).

Use the `title` prop to set the title of the feature.

Use the `description` prop to set the description of the feature.

Use the `icon` prop to set the icon of the feature.

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

Use the `orientation` prop to change the orientation of the feature. Defaults to `horizontal`.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPageFeature title="Theme" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPageFeature title="Theme" description="Customize Nuxt UI with your own colors, fonts, and more." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPageFeature title="Theme" description="Customize Nuxt UI with your own colors, fonts, and more." icon="i-lucide-swatch-book" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPageFeature title="Theme" description="Customize Nuxt UI with your own colors, fonts, and more." icon="i-lucide-swatch-book" to="/docs/getting-started/theme/design-system" target="_blank" />
</template>
```

---

## Page

**URL:** llms-txt#page

**Contents:**
- Usage
- Examples
  - Within a layout
  - Within a page
- API
  - Props
  - Slots
- Theme
- Changelog

The Page component helps you create layouts with optional left and right columns. It's perfect for building documentation sites and other content-focused pages.

::tip
The page will display as a centered single column layout if no slots are specified.
::

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the Page component in a layout with the `left` slot to display a navigation:

::note
In this example, we use the `ContentNavigation` component to display the navigation injected in `app.vue`.
::

Use the Page component in a page with the `right` slot to display a table of contents:

::note
In this example, we use the `ContentToc` component to display the table of contents.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
The page will display as a centered single column layout if no slots are specified.
::

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a layout

Use the Page component in a layout with the `left` slot to display a navigation:
```

Example 2 (unknown):
```unknown
::note
In this example, we use the `ContentNavigation` component to display the navigation injected in `app.vue`.
::

### Within a page

Use the Page component in a page with the `right` slot to display a table of contents:
```

Example 3 (unknown):
```unknown
::note
In this example, we use the `ContentToc` component to display the table of contents.
::

## API

### Props
```

Example 4 (unknown):
```unknown
### Slots
```

---

## ColorModeSelect

**URL:** llms-txt#colormodeselect

**Contents:**
- Usage
- Examples
  - With custom icons
- API
  - Props
- Changelog

The ColorModeSelect component extends the [SelectMenu](https://ui.nuxt.com/docs/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

### With custom icons

::framework-only
#nuxt
  :::div
  Use the `app.config.ts` to customize the icon with the `ui.icons` property:
  
  
  :::

#vue
  :::div
  Use the `vite.config.ts` to customize the icon with the `ui.icons` property:
  
  
  :::
::

::component-changelog{prefix="color-mode"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorModeSelect />
</template>
```

Example 2 (unknown):
```unknown
:::

#vue
  :::div
  Use the `vite.config.ts` to customize the icon with the `ui.icons` property:
```

Example 3 (unknown):
```unknown
:::
::

## API

### Props
```

---

## App

**URL:** llms-txt#app

**Contents:**
- Usage
- API
  - Props
  - Slots
- Changelog

This component implements Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider){rel="nofollow"} to provide global configuration to all components:

- Enables all primitives to inherit global reading direction.
- Enables changing the behavior of scroll body when setting body lock.
- Much more controls to prevent layout shifts.

It's also using [ToastProvider](https://reka-ui.com/docs/components/toast#provider){rel="nofollow"} and [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider){rel="nofollow"} to provide global toasts and tooltips, as well as programmatic modals and slideovers.

Wrap your entire application with the App component in your `app.vue` file:

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt#locale
  ---
  Learn how to use the `locale` prop to change the locale of your app.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/vue#locale
  ---
  Learn how to use the `locale` prop to change the locale of your app.
  :::
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt#locale
  ---
  Learn how to use the `locale` prop to change the locale of your app.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/i18n/vue#locale
  ---
  Learn how to use the `locale` prop to change the locale of your app.
  :::
::

## API

### Props
```

Example 2 (unknown):
```unknown
### Slots
```

---

## LocaleSelect

**URL:** llms-txt#localeselect

**Contents:**
- Usage
  - Locales
  - Dynamic locale
- API
  - Props
- Changelog

The LocaleSelect component extends the [SelectMenu](https://ui.nuxt.com/docs/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::framework-only
#nuxt
  :::note{to="https://ui.nuxt.com/docs/getting-started/integrations/i18n/nuxt"}
  This component is meant to be used with the **i18n** system. Learn more about it in the guide.
  :::

#vue
  :::note{to="https://ui.nuxt.com/docs/getting-started/integrations/i18n/vue"}
  This component is meant to be used with the **i18n** system. Learn more about it in the guide.
  :::
::

::warning
The flags are displayed using Unicode characters. This may result in a different display, e.g. Microsoft Edge under Windows displays the ISO 3166-1 alpha-2 code instead, as no flag icons are shipped with the OS fonts.
::

Use the `locales` prop with an array of locales from `@nuxt/ui/locale`.

You can pass only the locales you need in your application:

::framework-only
#nuxt
  :::div
  You can use it with Nuxt i18n:
  
  
  :::

#vue
  :::div
  You can use it with Vue i18n:
  
  
  :::
::

::component-changelog{prefix="locale"}
::

**Examples:**

Example 1 (unknown):
```unknown
You can pass only the locales you need in your application:
```

Example 2 (unknown):
```unknown
### Dynamic locale

::framework-only
#nuxt
  :::div
  You can use it with Nuxt i18n:
```

Example 3 (unknown):
```unknown
:::

#vue
  :::div
  You can use it with Vue i18n:
```

Example 4 (unknown):
```unknown
:::
::

## API

### Props
```

---

## PricingPlan

**URL:** llms-txt#pricingplan

**Contents:**
- Usage
  - Title
  - Description
  - Badge
  - Price
  - Discount
  - Billing
  - Features
  - Button
  - Variant

The PricingPlan component provides a flexible way to display a pricing plan with customizable content including title, description, price, features, etc.

::code-preview
  :::u-pricing-plan
  ---
  button:
    label: Buy now
  features:
    - One developer
    - Unlimited projects
    - Access to GitHub repository
    - Unlimited patch & minor updates
    - Lifetime access
  badge: Most popular
  billing-cycle: /month
  class: w-96
  description: For bootstrappers and indie hackers.
  discount: $199
  price: $249
  title: Solo
  ---
  :::
::

::tip{to="https://ui.nuxt.com/docs/components/pricing-plans"}
Use the [`PricingPlans`](https://ui.nuxt.com/docs/components/pricing-plans) component to display multiple pricing plans in a responsive grid layout.
::

Use the `title` prop to set the title of the PricingPlan.

Use the `description` prop to set the description of the PricingPlan.

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/docs/components/badge) next to the title of the PricingPlan.

You can pass any property from the [Badge](https://ui.nuxt.com/docs/components/badge#props) component to customize it.

Use the `price` prop to set the price of the PricingPlan.

Use the `discount` prop to set a discounted price that will be displayed alongside the original price (which will be shown with a strikethrough).

Use the `billing-cycle` and/or `billing-period` props to display the billing information of the PricingPlan.

Use the `features` prop as an array of string to display a list of features on the PricingPlan:

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.success` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.success` key.
  :::
::

You can also pass an array of objects with the following properties:

- `title: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Use the `button` prop with any property from the [Button](https://ui.nuxt.com/docs/components/button) component to display a button at the bottom of the PricingPlan.

::tip
Use the `onClick` field to add a click handler to trigger the plan purchase.
::

Use the `variant` prop to change the variant of the PricingPlan.

Use the `orientation` prop to change the orientation of the PricingPlan. Defaults to `vertical`.

Use the `tagline` prop to display a tagline text above the price.

Use the `terms` prop to display terms below the price.

Use the `highlight` prop to display a highlighted border around the PricingPlan.

Use the `scale` prop to make a PricingPlan bigger than the others.

::note{to="https://ui.nuxt.com/docs/components/pricing-plans#scale"}
Check out the PricingPlans's `scale` example to see how it works as it's hard to demonstrate by itself.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPricingPlan title="Solo" class="w-96" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." badge="Most popular" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." />
</template>
```

---

## FooterColumns

**URL:** llms-txt#footercolumns

**Contents:**
- Usage
  - Columns
- API
  - Props
  - Slots
- Theme
- Changelog

The FooterColumns component renders a list of columns to display in your Footer.

Use it in the `top` slot of the [Footer](https://ui.nuxt.com/docs/components/footer) component:

Use the `columns` prop as an array of objects with the following properties:

- `label: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `children?: FooterColumnLink[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Each column contains a `children` array of objects that define the links. Each link can have the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Columns

Use the `columns` prop as an array of objects with the following properties:

- `label: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `children?: FooterColumnLink[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Each column contains a `children` array of objects that define the links. Each link can have the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.
```

Example 2 (unknown):
```unknown
## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## Tree

**URL:** llms-txt#tree

**Contents:**
- Usage
  - Items
  - Multiple
  - Nested :badge{label="4.1+"}
  - Color
  - Size
  - Trailing Icon
  - Expanded Icon
  - Disabled
- Examples

Use the Tree component to display a hierarchical structure of items.

Use the `items` prop as an array of objects with the following properties:

- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `trailingIcon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `defaultExpanded?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `children?: TreeItem[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
A unique identifier is required for each item. The component will use the `label` prop as identifier if no `get-key` is provided. Ideally you should provide a `get-key` function prop to return a unique identifier. Alternatively, you can use the `labelKey` prop to specify which property to use as the unique identifier.
::

Use the `multiple` prop to allow multiple item selections.

### Nested :badge{label="4.1+"}

Use the `nested` prop to control whether the Tree is rendered with nested structure or as a flat list. Defaults to `true`.

::note{to="https://ui.nuxt.com/#with-virtualization"}
When `nested` is `false`, all items are rendered at the same level with indentation to indicate hierarchy. This is useful for virtualization or drag and drop functionality.
::

Use the `color` prop to change the color of the Tree.

Use the `size` prop to change the size of the Tree.

Use the `trailing-icon` prop to customize the trailing [Icon](https://ui.nuxt.com/docs/components/icon) of a parent node. Defaults to `i-lucide-chevron-down`.

::note
If an icon is specified for an item, it will always take precedence over these props.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.
  :::
::

Use the `expanded-icon` and `collapsed-icon` props to customize the icons of a parent node when it is expanded or collapsed. Defaults to `i-lucide-folder-open` and `i-lucide-folder` respectively.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize these icons globally in your `app.config.ts` under `ui.icons.folder` and `ui.icons.folderOpen` keys.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize these icons globally in your `vite.config.ts` under `ui.icons.folder` and `ui.icons.folderOpen` keys.
  :::
::

Use the `disabled` prop to prevent any user interaction with the Tree.

::note
You can also disable individual items using `item.disabled`.
::

### Control selected item(s)

You can control the selected item(s) by using the `default-value` prop or the `v-model` directive.

If you want to prevent an item from being selected, you can use the `item.onSelect()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} property or the global `select` event:

::note
This lets you expand or collapse a parent item without selecting it.
::

### Control expanded items

You can control the expanded items by using the `default-expanded` prop or the `v-model` directive.

If you want to prevent an item from being expanded, you can use the `item.onToggle()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} property or the global `toggle` event:

::note
This lets you select a parent item without expanding or collapsing its children.
::

### With checkbox in items :badge{label="4.1+"}

You can use the `item-leading` slot to add a [Checkbox](https://ui.nuxt.com/docs/components/checkbox) to the items. Use the `multiple`, `propagate-select` and `bubble-select` props to enable multi-selection with parent-child relationship and the `select` and `toggle` events to control the selected and expanded state of the items.

::note
This example uses the `as` prop to change the items from `button` to `div` as the [`Checkbox`](https://ui.nuxt.com/docs/components/checkbox) is also rendered as a `button`.
::

### With drag and drop :badge{label="4.1+"}

Use the [`useSortable`](https://vueuse.org/integrations/useSortable/){rel="nofollow"} composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html){rel="nofollow"} to enable drag and drop functionality on the Tree. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/){rel="nofollow"} to provide a seamless drag and drop experience.

::note
This example sets the `nested` prop to `false` to have a flat list of items so that the items can be dragged and dropped.
::

### With virtualization :badge{label="4.1+"}

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

::warning
When virtualization is enabled, the tree structure is flattened, similar to setting the `nested` prop to `false`.
::

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}-wrapper`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const items = ref<undefined>([
  {
    label: 'app/',
    defaultExpanded: true,
    children: [
      {
        label: 'composables/',
        children: [
          {
            label: 'useAuth.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          {
            label: 'useUser.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
        ],
      },
      {
        label: 'components/',
        defaultExpanded: true,
        children: [
          {
            label: 'Card.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
          {
            label: 'Button.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
        ],
      },
    ],
  },
  {
    label: 'app.vue',
    icon: 'i-vscode-icons-file-type-vue',
  },
  {
    label: 'nuxt.config.ts',
    icon: 'i-vscode-icons-file-type-nuxt',
  },
])
</script>

<template>
  <UTree :items="items" />
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const items = ref<TreeItem[]>([
  {
    label: 'app/',
    defaultExpanded: true,
    children: [
      {
        label: 'composables/',
        children: [
          {
            label: 'useAuth.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          {
            label: 'useUser.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
        ],
      },
      {
        label: 'components/',
        defaultExpanded: true,
        children: [
          {
            label: 'Card.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
          {
            label: 'Button.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
        ],
      },
    ],
  },
  {
    label: 'app.vue',
    icon: 'i-vscode-icons-file-type-vue',
  },
  {
    label: 'nuxt.config.ts',
    icon: 'i-vscode-icons-file-type-nuxt',
  },
])
</script>

<template>
  <UTree :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const items = ref<TreeItem[]>([
  {
    label: 'app/',
    defaultExpanded: true,
    children: [
      {
        label: 'composables/',
        children: [
          {
            label: 'useAuth.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          {
            label: 'useUser.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
        ],
      },
      {
        label: 'components/',
        defaultExpanded: true,
        children: [
          {
            label: 'Card.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
          {
            label: 'Button.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
        ],
      },
    ],
  },
  {
    label: 'app.vue',
    icon: 'i-vscode-icons-file-type-vue',
  },
  {
    label: 'nuxt.config.ts',
    icon: 'i-vscode-icons-file-type-nuxt',
  },
])
</script>

<template>
  <UTree multiple :items="items" />
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const items = ref<TreeItem[]>([
  {
    label: 'app/',
    defaultExpanded: true,
    children: [
      {
        label: 'composables/',
        children: [
          {
            label: 'useAuth.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          {
            label: 'useUser.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
        ],
      },
      {
        label: 'components/',
        defaultExpanded: true,
        children: [
          {
            label: 'Card.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
          {
            label: 'Button.vue',
            icon: 'i-vscode-icons-file-type-vue',
          },
        ],
      },
    ],
  },
  {
    label: 'app.vue',
    icon: 'i-vscode-icons-file-type-vue',
  },
  {
    label: 'nuxt.config.ts',
    icon: 'i-vscode-icons-file-type-nuxt',
  },
])
</script>

<template>
  <UTree :nested="false" :items="items" />
</template>
```

---

## CommandPalette

**URL:** llms-txt#commandpalette

**Contents:**
- Usage
  - Groups
  - Multiple
  - Placeholder
  - Icon
  - Selected Icon
  - Trailing Icon
  - Loading
  - Loading Icon
  - Close

Use the `v-model` directive to control the value of the CommandPalette or the `default-value` prop to set the initial value when you do not need to control its state.

::tip{to="https://ui.nuxt.com/#control-selected-items"}
You can also use the `@update:model-value` event to listen to the selected item(s).
::

The CommandPalette component filters groups and ranks matching commands by relevance as users type. It provides dynamic, instant search results for efficient command discovery. Use the `groups` prop as an array of objects with the following properties:

- `id: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `items?: CommandPaletteItem[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`ignoreFilter?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-post-filtered-items)
- `highlightedIcon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::caution
You must provide an `id` for each group otherwise the group will be ignored.
::

Each group contains an `items` array of objects that define the commands. Each item can have the following properties:

- `prefix?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `suffix?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `chip?: ChipProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `active?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `loading?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`slot?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-custom-slot)
- `placeholder?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `children?: CommandPaletteItem[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `onSelect?: (e: Event) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::tip{to="https://ui.nuxt.com/#with-children-in-items"}
Each item can take a `children` array of objects with the following properties to create submenus:
::

Use the `multiple` prop to allow multiple selections.

::caution
Ensure to pass an array to the `default-value` prop or the `v-model` directive.
::

Use the `placeholder` prop to change the placeholder text.

Use the `icon` prop to customize the input [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-search`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.search` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.search` key.
  :::
::

Use the `selected-icon` prop to customize the selected item [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-check`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.check` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.check` key.
  :::
::

Use the `trailing-icon` prop to customize the trailing [Icon](https://ui.nuxt.com/docs/components/icon) when an item has children. Defaults to `i-lucide-chevron-right`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronRight` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronRight` key.
  :::
::

Use the `loading` prop to show a loading icon on the CommandPalette.

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.
  :::
::

Use the `close` prop to display a [Button](https://ui.nuxt.com/docs/components/button) to dismiss the CommandPalette.

::tip
An `update:open` event will be emitted when the close button is clicked.
::

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `close-icon` prop to customize the close button [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-x`.

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

Use the `back` prop to customize or hide the back button (with `false` value) displayed when navigating into a submenu.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `back-icon` prop to customize the back button [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-arrow-left`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowLeft` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowLeft` key.
  :::
::

Use the `disabled` prop to disable the CommandPalette.

### Control selected item(s)

You can control the selected item(s) by using the `default-value` prop or the `v-model` directive, by using the `onSelect` field on each item or by using the `@update:model-value` event.

### Control search term

Use the `v-model:search-term` directive to control the search term.

::note
This example uses the `@update:model-value` event to reset the search term when an item is selected.
::

### With children in items

You can create hierarchical menus by using the `children` property in items. When an item has children, it will automatically display a chevron icon and enable navigation into a submenu.

::note
When navigating into a submenu:

- The search term is reset
- A back button appears in the input
- You can go back to the previous group by pressing the `` key
::

### With fetched items

You can fetch items from an API and use them in the CommandPalette.

### With ignore filter

You can set the `ignoreFilter` field to `true` on a group to disable the internal search and use your own search logic.

::note
This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced){rel="nofollow"} to debounce the API calls.
::

### With post-filtered items

You can use the `postFilter` field on a group to filter items after the search happened.

::note
Start typing to see items with higher level appear.
::

### With custom fuse search

You can use the `fuse` prop to override the options of [useFuse](https://vueuse.org/integrations/useFuse){rel="nofollow"} which defaults to:

::tip
The `fuseOptions` are the options of [Fuse.js](https://www.fusejs.io/api/options.html){rel="nofollow"}, the `resultLimit` is the maximum number of results to return and the `matchAllWhenSearchEmpty` is a boolean to match all items when the search term is empty.
::

You can for example set `{ fuseOptions: { includeMatches: true } }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} to highlight the search term in the items.

### With virtualization :badge{label="4.1+"}

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

::warning{target="_blank" to="https://github.com/unovue/reka-ui/issues/1885"}
When enabled, all groups are flattened into a single list due to a limitation of Reka UI.
::

You can use the CommandPalette component inside a [Popover](https://ui.nuxt.com/docs/components/popover)'s content.

You can use the CommandPalette component inside a [Modal](https://ui.nuxt.com/docs/components/modal)'s content.

You can use the CommandPalette component inside a [Drawer](https://ui.nuxt.com/docs/components/drawer)'s content.

### Listen open state

When using the `close` prop, you can listen to the `update:open` event when the button is clicked.

::note
This can be useful when using the CommandPalette inside a [`Modal`](https://ui.nuxt.com/docs/components/modal) for example.
::

Use the `#footer` slot to add custom content at the bottom of the CommandPalette, such as keyboard shortcuts help or additional actions.

Use the `slot` property to customize a specific item or group.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ group.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ group.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ group.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ group.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/#slots"}
You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UCommandPalette class="flex-1 h-80" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UCommandPalette class="flex-1" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UCommandPalette multiple class="flex-1" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UCommandPalette placeholder="Search an app..." class="flex-1" />
</template>
```

---

## DashboardToolbar

**URL:** llms-txt#dashboardtoolbar

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardToolbar component is used to display a toolbar under the [DashboardNavbar](https://ui.nuxt.com/docs/components/dashboard-navbar) component.

Use it inside the `header` slot of the [DashboardPanel](https://ui.nuxt.com/docs/components/dashboard-panel) component:

Use the `left`, `default` and `right` slots to customize the toolbar.

::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render some links.
::

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
Use the `left`, `default` and `right` slots to customize the toolbar.
```

Example 2 (unknown):
```unknown
::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/docs/components/navigation-menu) component to render some links.
::

## API

### Props
```

Example 3 (unknown):
```unknown
### Slots
```

Example 4 (unknown):
```unknown
## Theme
```

---

## Table

**URL:** llms-txt#table

**Contents:**
- Usage
  - Data
  - Columns
  - Meta
  - Loading
  - Sticky
- Examples
  - With row actions
  - With expandable rows
  - With grouped rows

The Table component is built on top of [TanStack Table](https://tanstack.com/table/latest){rel="nofollow"} and is powered by the [useVueTable](https://tanstack.com/table/latest/docs/framework/vue/vue-table#usevuetable){rel="nofollow"} composable to provide a flexible and fully type-safe API. &#x2A;Some features of TanStack Table are not supported yet, we'll add more over time.*

::callout
---
ariaLabel: View source code
icon: i-simple-icons-github
to: https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue
---
This example demonstrates the most common use case of the `Table` component. Check out the source code on GitHub.
::

Use the `data` prop as an array of objects, the columns will be generated based on the keys of the objects.

Use the `columns` prop as an array of [ColumnDef](https://tanstack.com/table/latest/docs/api/core/column-def){rel="nofollow"} objects with properties like:

- `accessorKey`: [The key of the row object to use when extracting the value for the column.]{.text-muted}
- `header`: [The header to display for the column. If a string is passed, it can be used as a default for the column ID. If a function is passed, it will be passed a props object for the header and should return the rendered header value (the exact type depends on the adapter being used).]{.text-muted}
- `footer`: [The footer to display for the column. Works exactly like header, but is displayed under the table.]{.text-muted}
- `cell`: [The cell to display each row for the column. If a function is passed, it will be passed a props object for the cell and should return the rendered cell value (the exact type depends on the adapter being used).]{.text-muted}
- `meta`: [Extra properties for the column.]{.text-muted}
  - `class`:

- `td`: [The classes to apply to the `td` element.]{.text-muted}
    - `th`: [The classes to apply to the `th` element.]{.text-muted}
  - `style`:

- `td`: [The style to apply to the `td` element.]{.text-muted}
    - `th`: [The style to apply to the `th` element.]{.text-muted}

In order to render components or other HTML elements, you will need to use the Vue [`h` function](https://vuejs.org/api/render-function.html#h){rel="nofollow"} inside the `header` and `cell` props. This is different from other components that use slots but allows for more flexibility.

::tip{ariaLabel="Table columns with slots" to="https://ui.nuxt.com/#with-slots"}
You can also use slots to customize the header and data cells of the table.
::

::note
When rendering components with `h`, you can either use the `resolveComponent` function or import from `#components`.
::

Use the `meta` prop as an object ([TableMeta](https://tanstack.com/table/latest/docs/api/core/table#meta){rel="nofollow"}) to pass properties like:

- `tr`: [The classes to apply to the `tr` element.]{.text-muted}
- `style`:

- `tr`: [The style to apply to the `tr` element.]{.text-muted}

Use the `loading` prop to display a loading state, the `loading-color` prop to change its color and the `loading-animation` prop to change its animation.

Use the `sticky` prop to make the header or footer sticky.

You can add a new column that renders a [DropdownMenu](https://ui.nuxt.com/docs/components/dropdown-menu) component inside the `cell` to render row actions.

### With expandable rows

You can add a new column that renders a [Button](https://ui.nuxt.com/docs/components/button) component inside the `cell` to toggle the expandable state of a row using the TanStack Table [Expanding APIs](https://tanstack.com/table/latest/docs/api/features/expanding){rel="nofollow"}.

::caution
You need to define the `#expanded` slot to render the expanded content which will receive the row as a parameter.
::

::tip
You can use the `expanded` prop to control the expandable state of the rows (can be binded with `v-model`).
::

::note
You could also add this action to the [`DropdownMenu`](https://ui.nuxt.com/docs/components/dropdown-menu) component inside the `actions` column.
::

### With grouped rows

You can group rows based on a given column value and show/hide sub rows via some button added to the cell using the TanStack Table [Grouping APIs](https://tanstack.com/table/latest/docs/api/features/grouping){rel="nofollow"}.

#### Important parts:

- Add `grouping` prop with an array of column ids you want to group by.
- Add `grouping-options` prop. It must include `getGroupedRowModel`, you can import it from `@tanstack/vue-table` or implement your own.
- Expand rows via `row.toggleExpanded()` method on any cell of the row. Keep in mind, it also toggles `#expanded` slot.
- Use `aggregateFn` on column definition to define how to aggregate the rows.
- `agregatedCell` renderer on column definition only works if there is no `cell` renderer.

### With row selection

You can add a new column that renders a [Checkbox](https://ui.nuxt.com/docs/components/checkbox) component inside the `header` and `cell` to select rows using the TanStack Table [Row Selection APIs](https://tanstack.com/table/latest/docs/api/features/row-selection){rel="nofollow"}.

::tip
You can use the `row-selection` prop to control the selection state of the rows (can be binded with `v-model`).
::

### With row select event

You can add a `@select` listener to make rows clickable with or without a checkbox column.

::note
The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.
::

::tip
You can use this to navigate to a page, open a modal or even to select the row manually.
::

### With row context menu event

You can add a `@contextmenu` listener to make rows right clickable and wrap the Table in a [ContextMenu](https://ui.nuxt.com/docs/components/context-menu) component to display row actions for example.

::note
The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.
::

### With row hover event

You can add a `@hover` listener to make rows hoverable and use a [Popover](https://ui.nuxt.com/docs/components/popover) or a [Tooltip](https://ui.nuxt.com/docs/components/tooltip) component to display row details for example.

::note
The handler function receives the `Event` and `TableRow` instance as the first and second arguments respectively.
::

::note
This example is similar as the Popover [with following cursor example](https://ui.nuxt.com/docs/components/popover#with-following-cursor) and uses a [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced){rel="nofollow"} to prevent the Popover from opening and closing too quickly when moving the cursor from one row to another.
::

### With column footer

You can add a `footer` property to the column definition to render a footer for the column.

### With column sorting

You can update a column `header` to render a [Button](https://ui.nuxt.com/docs/components/button) component inside the `header` to toggle the sorting state using the TanStack Table [Sorting APIs](https://tanstack.com/table/latest/docs/api/features/sorting){rel="nofollow"}.

::tip
You can use the `sorting` prop to control the sorting state of the columns (can be binded with `v-model`).
::

You can also create a reusable component to make any column header sortable.

::note
In this example, we use a function to define the column header but you can also create an actual component.
::

### With column pinning

You can update a column `header` to render a [Button](https://ui.nuxt.com/docs/components/button) component inside the `header` to toggle the pinning state using the TanStack Table [Pinning APIs](https://tanstack.com/table/latest/docs/api/features/row-pinning){rel="nofollow"}.

::note
A pinned column will become sticky on the left or right side of the table.
::

::tip
You can use the `column-pinning` prop to control the pinning state of the columns (can be binded with `v-model`).
::

### With column visibility

You can use a [DropdownMenu](https://ui.nuxt.com/docs/components/dropdown-menu) component to toggle the visibility of the columns using the TanStack Table [Column Visibility APIs](https://tanstack.com/table/latest/docs/api/features/column-visibility){rel="nofollow"}.

::tip
You can use the `column-visibility` prop to control the visibility state of the columns (can be binded with `v-model`).
::

### With column filters

You can use an [Input](https://ui.nuxt.com/docs/components/input) component to filter per column the rows using the TanStack Table [Column Filtering APIs](https://tanstack.com/table/latest/docs/api/features/column-filtering){rel="nofollow"}.

::tip
You can use the `column-filters` prop to control the filters state of the columns (can be binded with `v-model`).
::

### With global filter

You can use an [Input](https://ui.nuxt.com/docs/components/input) component to filter the rows using the TanStack Table [Global Filtering APIs](https://tanstack.com/table/latest/docs/api/features/global-filtering){rel="nofollow"}.

::tip
You can use the `global-filter` prop to control the global filter state (can be binded with `v-model`).
::

You can use a [Pagination](https://ui.nuxt.com/docs/components/pagination) component to control the pagination state using the [Pagination APIs](https://tanstack.com/table/latest/docs/api/features/pagination){rel="nofollow"}.

There are different pagination approaches as explained in [Pagination Guide](https://tanstack.com/table/latest/docs/guide/pagination#pagination-guide){rel="nofollow"}. In this example, we use client-side pagination so we need to manually pass `getPaginationRowModel()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} function.

::tip
You can use the `pagination` prop to control the pagination state (can be binded with `v-model`).
::

### With fetched data

You can fetch data from an API and use them in the Table.

### With infinite scroll

If you use server-side pagination, you can use the [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll){rel="nofollow"} composable to load more data when scrolling.

### With drag and drop

You can use the [`useSortable`](https://vueuse.org/integrations/useSortable/){rel="nofollow"} composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html){rel="nofollow"} to enable drag and drop functionality on the Table. This integration wraps [Sortable.js](https://sortablejs.github.io/Sortable/){rel="nofollow"} to provide a seamless drag and drop experience.

::note
Since the table ref doesn't expose the tbody element, add a unique class to it via the `:ui` prop to target it with `useSortable` (e.g. `:ui="{ tbody: 'my-table-tbody' }"`).
::

### With virtualization :badge{label="4.1+"}

Use the `virtualize` prop to enable virtualization for large datasets as a boolean or an object with options like `{ estimateSize: 65, overscan: 12 }`. You can also pass other [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options){rel="nofollow"} to customize the virtualization behavior.

::warning
When virtualization is enabled, the divider between rows and sticky properties are not supported.
::

::note
A height constraint is required on the table for virtualization to work properly (e.g., `class="h-[400px]"`).
::

You can use the `get-sub-rows` prop to display hierarchical (tree) data in the table.
For example, if your data objects have a `children` array, set `:get-sub-rows="row => row.children"` to enable expandable rows.

You can use slots to customize the header and data cells of the table.

Use the `#<column>-header` slot to customize the header of a column. You will have access to the `column`, `header` and `table` properties in the slot scope.

Use the `#<column>-cell` slot to customize the cell of a column. You will have access to the `cell`, `column`, `getValue`, `renderValue`, `row`, and `table` properties in the slot scope.

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}.

This will give you access to the following:

| Name                                                                                                                           | Type                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tableRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLTableElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                         |
| `tableApi`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | [`Ref<Table | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://tanstack.com/table/latest/docs/api/core/table#table-api){rel="nofollow"} |

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::callout
---
ariaLabel: View source code
icon: i-simple-icons-github
to: https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue
---
This example demonstrates the most common use case of the `Table` component. Check out the source code on GitHub.
::

### Data

Use the `data` prop as an array of objects, the columns will be generated based on the keys of the objects.
```

Example 2 (unknown):
```unknown
### Columns

Use the `columns` prop as an array of [ColumnDef](https://tanstack.com/table/latest/docs/api/core/column-def){rel="nofollow"} objects with properties like:

- `accessorKey`: [The key of the row object to use when extracting the value for the column.]{.text-muted}
- `header`: [The header to display for the column. If a string is passed, it can be used as a default for the column ID. If a function is passed, it will be passed a props object for the header and should return the rendered header value (the exact type depends on the adapter being used).]{.text-muted}
- `footer`: [The footer to display for the column. Works exactly like header, but is displayed under the table.]{.text-muted}
- `cell`: [The cell to display each row for the column. If a function is passed, it will be passed a props object for the cell and should return the rendered cell value (the exact type depends on the adapter being used).]{.text-muted}
- `meta`: [Extra properties for the column.]{.text-muted}
  - `class`:

    - `td`: [The classes to apply to the `td` element.]{.text-muted}
    - `th`: [The classes to apply to the `th` element.]{.text-muted}
  - `style`:

    - `td`: [The style to apply to the `td` element.]{.text-muted}
    - `th`: [The style to apply to the `th` element.]{.text-muted}

In order to render components or other HTML elements, you will need to use the Vue [`h` function](https://vuejs.org/api/render-function.html#h){rel="nofollow"} inside the `header` and `cell` props. This is different from other components that use slots but allows for more flexibility.

::tip{ariaLabel="Table columns with slots" to="https://ui.nuxt.com/#with-slots"}
You can also use slots to customize the header and data cells of the table.
::
```

Example 3 (unknown):
```unknown
::note
When rendering components with `h`, you can either use the `resolveComponent` function or import from `#components`.
::

### Meta

Use the `meta` prop as an object ([TableMeta](https://tanstack.com/table/latest/docs/api/core/table#meta){rel="nofollow"}) to pass properties like:

- `class`:

  - `tr`: [The classes to apply to the `tr` element.]{.text-muted}
- `style`:

  - `tr`: [The style to apply to the `tr` element.]{.text-muted}
```

Example 4 (unknown):
```unknown
### Loading

Use the `loading` prop to display a loading state, the `loading-color` prop to change its color and the `loading-animation` prop to change its animation.
```

---
