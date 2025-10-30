# Nuxt-Ui - Components

**Pages:** 45

---

## InputMenu

**URL:** llms-txt#inputmenu

**Contents:**
- Usage
  - Items
  - Value Key
  - Multiple
  - Delete Icon
  - Placeholder
  - Content
  - Arrow
  - Color
  - Variant

Use the `v-model` directive to control the value of the InputMenu or the `default-value` prop to set the initial value when you do not need to control its state.

::tip
Use this over an [`Input`](https://ui.nuxt.com/docs/components/input) to take advantage of Reka UI's [`Combobox`](https://reka-ui.com/docs/components/combobox){rel="nofollow"} component that offers autocomplete capabilities.
::

::note
This component is similar to the [`SelectMenu`](https://ui.nuxt.com/docs/components/select-menu) but it's using an Input instead of a Select.
::

Use the `items` prop as an array of strings, numbers or booleans:

You can also pass an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`type?: "label" | "separator" | "item"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-items-type)
- [`icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-icons-in-items)
- [`avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-avatar-in-items)
- [`chip?: ChipProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-chip-in-items)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `onSelect?: (e: Event) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can also pass an array of arrays to the `items` prop to display separated groups of items.

You can choose to bind a single property of the object rather than the whole object by using the `value-key` prop. Defaults to `undefined`.

Use the `multiple` prop to allow multiple selections, the selected items will be displayed as tags.

::caution
Ensure to pass an array to the `default-value` prop or the `v-model` directive.
::

With `multiple`, use the `delete-icon` prop to customize the delete [Icon](https://ui.nuxt.com/docs/components/icon) in the tags. Defaults to `i-lucide-x`.

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

Use the `placeholder` prop to set a placeholder text.

Use the `content` prop to control how the InputMenu content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the InputMenu.

Use the `color` prop to change the ring color when the InputMenu is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the InputMenu.

Use the `size` prop to change the size of the InputMenu.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the InputMenu.

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

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the InputMenu.

Use the `loading` prop to show a loading icon on the InputMenu.

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

Use the `disabled` prop to disable the InputMenu.

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

### With icon in items

You can use the `icon` property to display an [Icon](https://ui.nuxt.com/docs/components/icon) inside the items.

::tip
You can also use the `#leading` slot to display the selected icon.
::

### With avatar in items

You can use the `avatar` property to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the items.

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
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the InputMenu by pressing ``.
::

### Control open state on focus

You can use the `open-on-focus` or `open-on-click` props to open the menu when the input is focused or clicked.

### Control search term

Use the `v-model:search-term` directive to control the search term.

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the InputMenu.

Use the `create-item` prop to enable users to add custom values that aren't in the predefined options.

::note
The create option shows when no match is found by default. Set it to `always` to show it even when similar values exist.
::

::tip{to="https://ui.nuxt.com/#emits"}
Use the `@create` event to handle the creation of the item. You will receive the event and the item as arguments.
::

### With fetched items

You can fetch items from an API and use them in the InputMenu.

### With ignore filter

Set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic.

::note
This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced){rel="nofollow"} to debounce the API calls.
::

### With filter fields

Use the `filter-fields` prop with an array of fields to filter on. Defaults to `[labelKey]`.

### With virtualization :badge{label="4.1+"}

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

::warning{target="_blank" to="https://github.com/unovue/reka-ui/issues/1885"}
When enabled, all groups are flattened into a single list due to a limitation of Reka UI.
::

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

::tip
You can also change the content width globally in your `app.config.ts`:

### As a CountryPicker

This example demonstrates using the InputMenu as a country picker with lazy loading - countries are only fetched when the menu is opened.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                           | Type                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<InstanceType<typeof ComboboxTrigger> | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

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
  <UInputMenu model-value="Backlog" :items="items" />
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
  <UInputMenu model-value="Backlog" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { InputMenuItem } from '@nuxt/ui'

const items = ref<InputMenuItem[]>([
  {
    label: 'Backlog',
  },
  {
    label: 'Todo',
  },
  {
    label: 'In Progress',
  },
  {
    label: 'Done',
  },
])
</script>

<template>
  <UInputMenu :items="items" />
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
  <UInputMenu model-value="Apple" :items="items" />
</template>
```

---

## Alert

**URL:** llms-txt#alert

**Contents:**
- Usage
  - Title
  - Description
  - Icon
  - Avatar
  - Color
  - Variant
  - Close
  - Close Icon
  - Actions

Use the `title` prop to set the title of the Alert.

Use the `description` prop to set the description of the Alert.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon).

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar).

Use the `color` prop to change the color of the Alert.

Use the `variant` prop to change the variant of the Alert.

Use the `close` prop to display a [Button](https://ui.nuxt.com/docs/components/button) to dismiss the Alert.

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

Use the `actions` prop to add some [Button](https://ui.nuxt.com/docs/components/button) actions to the Alert.

Use the `orientation` prop to change the orientation of the Alert.

Use the `class` prop to override the base styles of the Alert.

Use the `ui` prop to override the slots styles of the Alert.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UAlert title="Heads up!" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." icon="i-lucide-terminal" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UAlert title="Heads up!" description="You can change the primary color in your app config." />
</template>
```

---

## InputNumber

**URL:** llms-txt#inputnumber

**Contents:**
- Usage
  - Min / Max
  - Step
  - Orientation
  - Placeholder
  - Color
  - Variant
  - Size
  - Disabled
  - Increment / Decrement

Use the `v-model` directive to control the value of the InputNumber.

Use the `default-value` prop to set the initial value when you do not need to control its state.

::note
This component relies on the [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html){rel="nofollow"} package which provides utilities for formatting and parsing numbers across locales and numbering systems.
::

Use the `min` and `max` props to set the minimum and maximum values of the InputNumber.

Use the `step` prop to set the step value of the InputNumber.

Use the `orientation` prop to change the orientation of the InputNumber.

Use the `placeholder` prop to set a placeholder text.

Use the `color` prop to change the ring color when the InputNumber is focused.

Use the `variant` prop to change the variant of the InputNumber.

Use the `size` prop to change the size of the InputNumber.

Use the `disabled` prop to disable the InputNumber.

### Increment / Decrement

Use the `increment` and `decrement` props to customize the increment and decrement buttons with any [Button](https://ui.nuxt.com/docs/components/button) props. Defaults to `{ variant: 'link' }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}.

### Increment / Decrement Icons

Use the `increment-icon` and `decrement-icon` props to customize the buttons [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-plus` / `i-lucide-minus`.

### With decimal format

Use the `format-options` prop to customize the format of the value.

### With percentage format

Use the `format-options` prop with `style: 'percent'` to customize the format of the value.

### With currency format

Use the `format-options` prop with `style: 'currency'` to customize the format of the value.

You can use the `increment` and `decrement` props to control visibility of the buttons.

### Within a FormField

You can use the InputNumber within a [FormField](https://ui.nuxt.com/docs/components/form-field) component to display a label, help text, required indicator, etc.

Use the `#increment` and `#decrement` slots to customize the buttons.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                           | Type                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<InstanceType<typeof NumberFieldInput> | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UInputNumber :model-value="5" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UInputNumber :default-value="5" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UInputNumber :model-value="5" :min="0" :max="10" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UInputNumber :model-value="5" :step="2" />
</template>
```

---

## DashboardSearch

**URL:** llms-txt#dashboardsearch

**Contents:**
- Usage
  - Shortcut
  - Color Mode
- API
  - Props
  - Slots
  - Emits
- Theme
- Changelog

The DashboardSearch component extends the [CommandPalette](https://ui.nuxt.com/docs/components/command-palette) component, so you can pass any property such as `icon`, `placeholder`, etc.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/docs/components/dashboard-group) component:

::tip
You can open the CommandPalette by pressing `` ``, by using the [DashboardSearchButton](https://ui.nuxt.com/docs/components/dashboard-search-button) component or by using a `v-model:open`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"} directive.
::

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](https://ui.nuxt.com/docs/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`` ``).

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:

You can disable this behavior by setting the `color-mode` prop to `false`:

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
::tip
You can open the CommandPalette by pressing `` ``, by using the [DashboardSearchButton](https://ui.nuxt.com/docs/components/dashboard-search-button) component or by using a `v-model:open`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"} directive.
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
## API

### Props
```

---

## FormField

**URL:** llms-txt#formfield

**Contents:**
- Usage
  - Label
  - Description
  - Hint
  - Help
  - Error
  - Size
- API
  - Props
  - Slots

Wrap any form component with a FormField. Used in a [Form](https://ui.nuxt.com/docs/components/form), it provides validation and error handling.

Use the `label` prop to set the label for the form control.

::note
The label `for` attribute and the form control are associated with a unique `id` if not provided.
::

When using the `required` prop, an asterisk is added next to the label.

Use the `description` prop to provide additional information below the label.

Use the `hint` prop to display a hint message next to the label.

Use the `help` prop to display a help message below the form control.

Use the `error` prop to display an error message below the form control. When used together with the `help` prop, the `error` prop takes precedence.

When used inside a [Form](https://ui.nuxt.com/docs/components/form), this is automatically set when a validation error occurs.

::tip{to="https://ui.nuxt.com/docs/getting-started/theme/design-system#colors"}
This sets the `color` to `error` on the form control. You can change it globally in your `app.config.ts`.
::

Use the `size` prop to change the size of the FormField, the `size` is proxied to the form control.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UFormField label="Email">
    <UInput placeholder="Enter your email" />
  </UFormField>
</template>
```

Example 2 (vue):
```vue
<template>
  <UFormField label="Email" required>
    <UInput placeholder="Enter your email" />
  </UFormField>
</template>
```

Example 3 (vue):
```vue
<template>
  <UFormField label="Email" description="We'll never share your email with anyone else.">
    <UInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

Example 4 (vue):
```vue
<template>
  <UFormField label="Email" hint="Optional">
    <UInput placeholder="Enter your email" />
  </UFormField>
</template>
```

---

## Drawer

**URL:** llms-txt#drawer

**Contents:**
- Usage
  - Title
  - Description
  - Direction
  - Inset
  - Handle
  - Handle Only
  - Overlay
  - Scale Background
- Examples

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Drawer.

Then, use the `#content` slot to add the content displayed when the Drawer is open.

You can also use the `#header`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, `#body`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} and `#footer`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} slots to customize the Drawer's content.

Use the `title` prop to set the title of the Drawer's header.

Use the `description` prop to set the description of the Drawer's header.

Use the `direction` prop to control the direction of the Drawer. Defaults to `bottom`.

Use the `inset` prop to inset the Drawer from the edges.

Use the `handle` prop to control whether the Drawer has a handle or not. Defaults to `true`.

Use the `handle-only` prop to only allow the Drawer to be dragged by the handle.

Use the `overlay` prop to control whether the Drawer has an overlay or not. Defaults to `true`.

Use the `should-scale-background` prop to scale the background when the Drawer is open, creating a visual depth effect. You can set the `set-background-color-on-scale` prop to `false` to prevent changing the background color.

::warning
Make sure to add the `data-vaul-drawer-wrapper` directive to a parent element of your app to make this work.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Drawer by pressing ``.
::

::tip
This allows you to move the trigger outside of the Drawer or remove it entirely.
::

### Disable dismissal

Set the `dismissible` prop to `false` to prevent the Drawer from being closed when clicking outside of it or pressing escape. A `close:prevent` event will be emitted when the user tries to close it.

::note
In this example, the `header` slot is used to add a close button which is not done by default.
::

### With interactive background

Set the `overlay` and `modal` props to `false` alongside the `dismissible` prop to make the Drawer's background interactive without closing the Drawer.

### Responsive drawer

You can render a [Modal](https://ui.nuxt.com/docs/components/modal) component on desktop and a Drawer on mobile for example.

You can nest drawers within each other by using the `nested` prop.

Use the `#footer` slot to add content after the Drawer's body.

### With command palette

You can use a [CommandPalette](https://ui.nuxt.com/docs/components/command-palette) component inside the Drawer's content.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UDrawer>
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UDrawer>
</template>
```

Example 2 (vue):
```vue
<template>
  <UDrawer title="Drawer with title">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

Example 3 (vue):
```vue
<template>
  <UDrawer title="Drawer with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UDrawer>
</template>
```

Example 4 (vue):
```vue
<template>
  <UDrawer direction="right">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
  
    <template #content>
      <Placeholder class="min-w-96 min-h-96 size-full m-4" />
    </template></UDrawer>
</template>
```

---

## PageColumns

**URL:** llms-txt#pagecolumns

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

The PageColumns component displays content in a responsive multi-column layout. It works well with [PageCard](https://ui.nuxt.com/docs/components/page-card) components or any other elements, adapting from single column on mobile to multiple columns on larger screens.

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

## DashboardSidebarToggle

**URL:** llms-txt#dashboardsidebartoggle

**Contents:**
- Usage
- Examples
  - Within `toggle` slot
- API
  - Props
- Theme
- Changelog

The DashboardSidebarToggle component is used by the [DashboardNavbar](https://ui.nuxt.com/docs/components/dashboard-navbar) and [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) components.

It is automatically displayed on mobile to toggle the sidebar, **you don't have to add it manually**.

It extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

### Within `toggle` slot

Even though this component is automatically displayed on mobile, you can use the `toggle` slot of the [DashboardNavbar](https://ui.nuxt.com/docs/components/dashboard-navbar) and [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) components to customize the button.

::tip
When using the `toggle-side` prop of the `DashboardSidebar` and `DashboardNavbar` components, the button will be displayed on the specified side.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UDashboardSidebarToggle />
</template>
```

Example 2 (vue):
```vue
<template>
  <UDashboardSidebarToggle variant="subtle" />
</template>
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

::tip
When using the `toggle-side` prop of the `DashboardSidebar` and `DashboardNavbar` components, the button will be displayed on the specified side.
::

## API

### Props
```

---

## Form

**URL:** llms-txt#form

**Contents:**
- Usage
  - Schema validation
  - Custom validation
  - Input events
  - Error event
  - Nesting forms
- API
  - Props
  - Slots
  - Emits

Use the Form component to validate form data using any validation library supporting [Standard Schema](https://github.com/standard-schema/standard-schema){rel="nofollow"} such as [Valibot](https://github.com/fabian-hiller/valibot){rel="nofollow"}, [Zod](https://github.com/colinhacks/zod){rel="nofollow"}, [Regle](https://github.com/victorgarciaesgi/regle){rel="nofollow"}, [Yup](https://github.com/jquense/yup){rel="nofollow"}, [Joi](https://github.com/hapijs/joi){rel="nofollow"} or [Superstruct](https://github.com/ianstormtaylor/superstruct){rel="nofollow"} or your own validation logic.

It works with the [FormField](https://ui.nuxt.com/docs/components/form-field) component to display error messages around form elements automatically.

### Schema validation

It requires two props:

- `state` - a reactive object holding the form's state.
- `schema` - any [Standard Schema](https://github.com/standard-schema/standard-schema){rel="nofollow"} or [Superstruct](https://github.com/ianstormtaylor/superstruct){rel="nofollow"}.

::warning
**No validation library is included** by default, ensure you **install the one you need**.
::

Errors are reported directly to the [FormField](https://ui.nuxt.com/docs/components/form-field) component based on the `name` or `error-pattern` prop. This means the validation rules defined for the `email` attribute in your schema will be applied to `<FormField name="email">`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="vue"}.

Nested validation rules are handled using dot notation. For example, a rule like `{ user: z.object({ email: z.string() }) }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"} will be applied to `<FormField name="user.email">`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="vue"}.

### Custom validation

Use the `validate` prop to apply your own validation logic.

The validation function must return a list of errors with the following attributes:

- `message` - the error message to display.
- `name` - the `name` of the `FormField` to send the error to.

::tip
It can be used alongside the `schema` prop to handle complex use cases.
::

The Form component automatically triggers validation when an input emits an `input`, `change`, or `blur` event.

- Validation on `input` occurs **as you type**.
- Validation on `change` occurs when you **commit to a value**.
- Validation on `blur` happens when an input **loses focus**.

You can control when validation happens this using the `validate-on` prop.

::tip
The form always validates on submit.
::

::tip
You can use the [`useFormField`](https://ui.nuxt.com/docs/composables/use-form-field) composable to implement this inside your own components.
::

You can listen to the `@error` event to handle errors. This event is triggered when the form is submitted and contains an array of `FormError` objects with the following fields:

- `id` - the input's `id`.
- `name` - the `name` of the `FormField`
- `message` - the error message to display.

Here's an example that focuses the first input element with an error after the form is submitted:

Use the `nested` prop to nest multiple Form components and link their validation functions. In this case, validating the parent form will automatically validate all the other forms inside it.

Nested forms directly inherit their parent's state, so you don't need to define a separate state for them. You can use the `name` prop to target a nested attribute within the parent's state.

It can be used to dynamically add fields based on user's input:

Or to validate list inputs:

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}.

This will give you access to the following:

| Name                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `submit()`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                  | `Promise<void>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Triggers form submission.
::                                                                                         |
| `validate(opts: { name?: keyof T | (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Promise<T>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Triggers form validation. Will raise any errors unless `opts.silent` is set to true.
::                                 |
| `clear(path?: keyof T | RegExp)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                            | `void` :br ::div{.text-toned.mt-1}
Clears form errors associated with a specific path. If no path is provided, clears all form errors.
::                                                                                                                                            |
| `getErrors(path?: keyof T RegExp)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                          | `FormError[]`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.
::             |
| `setErrors(errors: FormError[], name?: keyof T RegExp)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                     | `void` :br ::div{.text-toned.mt-1}
Sets form errors for a given path. If no path is provided, overrides all errors.
::                                                                                                                                                               |
| `errors`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                    | `Ref<FormError[]>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
A reference to the array containing validation errors. Use this to access or manipulate the error information.
:: |
| `disabled`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                  | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                                                                   |
| `dirty`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                     | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} `true` if at least one form field has been updated by the user.                                                                                   |
| `dirtyFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                               | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields that have been modified by the user.                                                                                  |
| `touchedFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                             | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields that the user interacted with.                                                                                        |
| `blurredFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                             | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields blurred by the user.                                                                                                  |

::component-changelog
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

```

---

## DashboardSidebarCollapse

**URL:** llms-txt#dashboardsidebarcollapse

**Contents:**
- Usage
- Examples
  - Within `header` slot
  - Within `leading` slot
- API
  - Props
- Theme
- Changelog

The DashboardSidebarCollapse component is used to collapse/expand the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) component **when its `collapsible` prop is set**.

It extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

### Within `header` slot

You can put this component in the `header` slot of the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) component and use the `collapsed` prop to hide the left part of the header for example:

### Within `leading` slot

You can put this component in the `leading` slot of the [DashboardNavbar](https://ui.nuxt.com/docs/components/dashboard-navbar) component to display it before the title for example:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UDashboardSidebarCollapse />
</template>
```

Example 2 (vue):
```vue
<template>
  <UDashboardSidebarCollapse variant="subtle" />
</template>
```

Example 3 (unknown):
```unknown
### Within `leading` slot

You can put this component in the `leading` slot of the [DashboardNavbar](https://ui.nuxt.com/docs/components/dashboard-navbar) component to display it before the title for example:
```

Example 4 (unknown):
```unknown
## API

### Props
```

---

## PageHeader

**URL:** llms-txt#pageheader

**Contents:**
- Usage
  - Title
  - Description
  - Headline
  - Links
- Examples
  - Within a page
- API
  - Props
  - Slots

The PageHeader component displays a header for your page.

Use it inside the default slot of the [Page](https://ui.nuxt.com/docs/components/page) component, before the [PageBody](https://ui.nuxt.com/docs/components/page-body) component:

Use the `title` prop to display a title in the header.

Use the `description` prop to display a description in the header.

Use the `headline` prop to display a headline in the header.

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) in the header.

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

Use the PageHeader component in a page to display the header of the page:

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Title

Use the `title` prop to display a title in the header.
```

Example 2 (unknown):
```unknown
### Description

Use the `description` prop to display a description in the header.
```

Example 3 (unknown):
```unknown
### Headline

Use the `headline` prop to display a headline in the header.
```

Example 4 (unknown):
```unknown
### Links

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/docs/components/button) in the header.
```

---

## Collapsible

**URL:** llms-txt#collapsible

**Contents:**
- Usage
  - Unmount
  - Disabled
- Examples
  - Control open state
  - With rotating icon
- API
  - Props
  - Slots
  - Emits

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Collapsible.

Then, use the `#content` slot to add the content displayed when the Collapsible is open.

Use the `unmount-on-hide` prop to prevent the content from being unmounted when the Collapsible is collapsed. Defaults to `true`.

::note
You can inspect the DOM to see the content being rendered.
::

Use the `disabled` prop to disable the Collapsible.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Collapsible by pressing ``.
::

::tip
This allows you to move the trigger outside of the Collapsible or remove it entirely.
::

### With rotating icon

Here is an example with a rotating icon in the Button that indicates the open state of the Collapsible.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UCollapsible class="flex flex-col gap-2 w-48">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

Example 2 (vue):
```vue
<template>
  <UCollapsible :unmount-on-hide="false" class="flex flex-col gap-2 w-48">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

Example 3 (vue):
```vue
<template>
  <UCollapsible class="flex flex-col gap-2 w-48" disabled>
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />
  
    <template #content>
      <Placeholder class="h-48" />
    </template></UCollapsible>
</template>
```

Example 4 (unknown):
```unknown
::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Collapsible by pressing ``.
::

::tip
This allows you to move the trigger outside of the Collapsible or remove it entirely.
::

### With rotating icon

Here is an example with a rotating icon in the Button that indicates the open state of the Collapsible.
```

---

## PageList

**URL:** llms-txt#pagelist

**Contents:**
- Usage
  - Divide
- API
  - Props
  - Slots
- Theme
- Changelog

The PageList component provides a flexible way to display content in a vertical list layout. It's perfect for creating stacked lists of [PageCard](https://ui.nuxt.com/docs/components/page-card) components or any other elements, with optional dividers between items.

Use the `divide` prop to add a divider between each child element.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Divide

Use the `divide` prop to add a divider between each child element.
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

## InputTags

**URL:** llms-txt#inputtags

**Contents:**
- Usage
  - Placeholder
  - Max Length
  - Color
  - Variants
  - Sizes
  - Icon
  - Avatar
  - Delete Icon
  - Loading

Use the `v-model` directive to control the value of the InputTags.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `placeholder` prop to set a placeholder text.

Use the `max-length` prop to set the maximum number of characters allowed in a tag.

Use the `color` prop to change the ring color when the InputTags is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the appearance of the InputTags.

Use the `size` prop to adjust the size of the InputTags.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the InputTags.

::note
Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.
::

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the InputTags.

Use the `delete-icon` prop to customize the delete [Icon](https://ui.nuxt.com/docs/components/icon) in the tags. Defaults to `i-lucide-x`.

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

Use the `loading` prop to show a loading icon on the InputTags.

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

Use the `disabled` prop to disable the InputTags.

### Within a FormField

You can use the InputTags within a [FormField](https://ui.nuxt.com/docs/components/form-field) component to display a label, help text, required indicator, etc.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                           | Type                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<InstanceType<typeof TagsInputInput> | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UInputTags />
</template>
```

Example 2 (vue):
```vue
<template>
  <UInputTags />
</template>
```

Example 3 (vue):
```vue
<template>
  <UInputTags placeholder="Enter tags..." />
</template>
```

Example 4 (vue):
```vue
<template>
  <UInputTags :max-length="4" />
</template>
```

---

## PinInput

**URL:** llms-txt#pininput

**Contents:**
- Usage
  - Type
  - Mask
  - OTP
  - Length
  - Placeholder
  - Color
  - Variant
  - Size
  - Disabled

Use the `v-model` directive to control the value of the PinInput.

Use the `default-value` prop to set the initial value when you do not need to control its state.

Use the `type` prop to change the input type. Defaults to `text`.

::note
When `type` is set to `number`, it will only accept numeric characters.
::

Use the `mask` prop to treat the input like a password.

Use the `otp` prop to enable One-Time Password functionality. When enabled, mobile devices can automatically detect and fill OTP codes from SMS messages or clipboard content, with autocomplete support.

Use the `length` prop to change the amount of inputs.

Use the `placeholder` prop to set a placeholder text.

Use the `color` prop to change the ring color when the PinInput is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the PinInput.

Use the `size` prop to change the size of the PinInput.

Use the `disabled` prop to disable the PinInput.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                            | Type                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputsRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<ComponentPublicInstance[]>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPinInput />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPinInput />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPinInput type="number" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPinInput mask />
</template>
```

---

## DashboardSearchButton

**URL:** llms-txt#dashboardsearchbutton

**Contents:**
- Usage
  - Collapsed
  - Kbds
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardSearchButton component is used to open the [DashboardSearch](https://ui.nuxt.com/docs/components/dashboard-search) modal.

It extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::note{to="https://ui.nuxt.com/#collapsed"}
The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.
::

Use the `collapsed` prop to hide the button's label and [kbds](https://ui.nuxt.com/#kbds). Defaults to `false`.

::tip{to="https://ui.nuxt.com/docs/components/dashboard-sidebar#slots"}
When using the button in the **DashboardSidebar** component, use the `collapsed` slot prop directly.
::

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} to match the default shortcut of the [DashboardSearch](https://ui.nuxt.com/docs/components/dashboard-search#shortcut) component.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UDashboardSearchButton />
</template>
```

Example 2 (vue):
```vue
<template>
  <UDashboardSearchButton variant="subtle" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UDashboardSearchButton collapsed />
</template>
```

Example 4 (vue):
```vue
<template>
  <UDashboardSearchButton :collapsed="false" />
</template>
```

---

## ColorModeButton

**URL:** llms-txt#colormodebutton

**Contents:**
- Usage
- Examples
  - With custom icons
  - With fallback slot
- API
  - Props
  - Slots
- Changelog

The ColorModeButton component extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

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

### With fallback slot

As the button is wrapped in a [ClientOnly](https://nuxt.com/docs/api/components/client-only){rel="nofollow"} component, you can pass a `fallback` slot to display a placeholder while the component is loading.

::component-changelog{prefix="color-mode"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UColorModeButton />
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

### With fallback slot

As the button is wrapped in a [ClientOnly](https://nuxt.com/docs/api/components/client-only){rel="nofollow"} component, you can pass a `fallback` slot to display a placeholder while the component is loading.
```

Example 4 (unknown):
```unknown
## API

### Props
```

---

## ChatPrompt

**URL:** llms-txt#chatprompt

**Contents:**
- Usage
  - Variant
- Examples
  - Within a page
- API
  - Props
  - Slots
  - Emits
- Theme
- Changelog

The ChatPrompt component renders a `<form>` element and extends the [Textarea](https://ui.nuxt.com/docs/components/textarea) component so you can pass any property such as `icon`, `placeholder`, `autofocus`, etc.

::code-preview
  :::u-chat-prompt
  ---
  variant: subtle
  ---
    ::::u-chat-prompt-submit{.rounded-full color="neutral"}
    ::::
  
  #footer
    ::::u-select
    ---
    items:
      - label: Gemini 2.5 Pro
        value: gemini-2.5-pro
        icon: i-simple-icons-googlegemini
      - label: GPT-4o
        value: gpt-4o
        icon: i-simple-icons-openai
      - label: Claude 3.5 Sonnet
        value: claude-3.5-sonnet
        icon: i-simple-icons-anthropic
      - label: Llama 4
        value: llama-4
        icon: i-simple-icons-ollama
    icon: i-simple-icons-openai
    modelValue: gpt-4o
    placeholder: Select a model
    variant: ghost
    ---
    ::::
  :::
::

::note
The ChatPrompt handles the following events:

- The form is submitted when the user presses `` or when the user clicks on the submit button.
- The textarea is blurred when `` is pressed and emits a `close` event.
::

Use the `variant` prop to change the style of the prompt. Defaults to `outline`.

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

Use the ChatPrompt component with the `Chat` class from AI SDK v5 to display a chat prompt within a page.

Pass the `input` prop alongside the `error` prop to disable the textarea when an error occurs.

You can also use it as a starting point for a chat interface.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UChatPrompt variant="soft" />
</template>
```

Example 2 (unknown):
```unknown
You can also use it as a starting point for a chat interface.
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

## Banner

**URL:** llms-txt#banner

**Contents:**
- Usage
  - Title
  - Icon
  - Color
  - Close
  - Close Icon
  - Actions
  - Link
- Examples
  - Within `app.vue`

Use the `title` prop to display a title on the Banner.

Use the `icon` prop to display an icon on the Banner.

Use the `color` prop to change the color of the Banner.

Use the `close` prop to display a [Button](https://ui.nuxt.com/docs/components/button) to dismiss the Banner. Defaults to `false`.

::tip
A `close` event will be emitted when the close button is clicked.
::

::note
When closed, `banner-${id}` will be stored in the local storage to prevent it from being displayed again. :br For the example above, `banner-example` will be stored in the local storage.
::

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

Use the `actions` prop to add some [Button](https://ui.nuxt.com/docs/components/button) actions to the Banner.

::note
The action buttons default to `color="neutral"` and `size="xs"`. You can customize these values by passing them directly to each action button.
::

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

::note
The `NuxtLink` component will inherit all other attributes you pass to the `User` component.
::

Use the Banner component in your `app.vue` or in a layout:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UBanner title="This is a banner with an important message." />
</template>
```

Example 2 (vue):
```vue
<template>
  <UBanner icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UBanner color="neutral" icon="i-lucide-info" title="This is a banner with an icon." />
</template>
```

Example 4 (unknown):
```unknown
::note
When closed, `banner-${id}` will be stored in the local storage to prevent it from being displayed again. :br For the example above, `banner-example` will be stored in the local storage.
::

### Close Icon

Use the `close-icon` prop to customize the close button [Icon](https://ui.nuxt.com/docs/components/icon). Defaults to `i-lucide-x`.
```

---

## Introduction

**URL:** llms-txt#introduction

**Contents:**
- What is Nuxt UI?
- What's new in v4?
- Core technologies
  - Reka UI
  - Tailwind CSS
  - Tailwind Variants
- Key features
  - Ecosystem integration
  - Vue Compatibility
  - TypeScript Support

A modern UI library built on [Reka UI](https://reka-ui.com/){rel="nofollow"}, [Tailwind CSS](https://tailwindcss.com/){rel="nofollow"}, and [Tailwind Variants](https://www.tailwind-variants.org/){rel="nofollow"} to ship beautiful and accessible applications with 100+ production-ready components.

::card-group
  :::card{icon="i-lucide-sparkles" title="Developer Experience First"}
  Intuitive APIs, excellent TypeScript support, auto-completion, and comprehensive docs.
  :::

:::card{icon="i-lucide-palette" title="Beautiful by Default"}
  A modern, clean design out of the box with a theme you can adapt in minutes.
  :::

:::card{icon="i-lucide-accessibility" title="Accessible by Default"}
  WAI-ARIA compliant with keyboard navigation, focus management, and screen reader support.
  :::

:::card{icon="i-lucide-blocks" title="Production Ready"}
  100+ battle-tested components used by thousands of applications in production.
  :::
::

Nuxt UI v4 marks a major milestone: Nuxt UI and Nuxt UI Pro are now unified into a single, fully open-source and free library of 100+ production-ready components and a complete Figma Kit.

The migration from v3 to v4 will be much smoother than from v2 to v3. Read more in the [migration guide](https://ui.nuxt.com/docs/getting-started/migration/v4).

::note{to="https://ui.nuxt.com/docs/getting-started/migration/v3"}
If you are migrating from v2, you can read more in this **migration guide**.
::

Nuxt UI is built on top of [Reka UI](https://reka-ui.com/){rel="nofollow"} as a foundation for the components:

- **WAI-ARIA Compliance**: Follows [WAI-ARIA authoring practices](https://reka-ui.com/docs/overview/accessibility){rel="nofollow"} with proper semantics and roles
- **Keyboard Navigation**: Built-in keyboard support for complex components like tabs and dialogs
- **Focus Management**: Intelligent focus handling that moves focus based on user interactions
- **Accessible Labels**: Abstractions to simplify labeling controls for screen readers

Nuxt UI integrates the latest [Tailwind CSS](https://tailwindcss.com/){rel="nofollow"} v4, bringing significant improvements:

- **5x Faster Builds**: Full builds up to 5x faster, incremental builds over 100x faster
- **Unified Toolchain**: Built-in import handling, vendor prefixing, and syntax transforms
- **CSS-first Configuration**: Customize and extend directly in CSS instead of JavaScript
- **Modern Web Features**: Container queries, cascade layers, wide-gamut colors, and more

### Tailwind Variants

Nuxt UI takes advantage of [Tailwind Variants](https://www.tailwind-variants.org/){rel="nofollow"} to provide a powerful theming system:

- **Dynamic Styling**: Flexible component variants with a powerful API
- **Type Safety**: Full TypeScript support with auto-completion
- **Conflict Resolution**: Efficient merging of conflicting styles

### Ecosystem integration

Nuxt UI integrates with the Nuxt ecosystem to provide a seamless development experience:

- [**Icons**](https://ui.nuxt.com/docs/getting-started/integrations/icons): Access 200,000+ icons from Iconify
- [**Fonts**](https://ui.nuxt.com/docs/getting-started/integrations/fonts): Plug-and-play web font optimization and configuration
- [**Color Mode**](https://ui.nuxt.com/docs/getting-started/integrations/color-mode): Dark and Light mode with auto detection
- [**i18n**](https://ui.nuxt.com/docs/getting-started/integrations/i18n): Internationalize your components with 50+ languages
- [**Content**](https://ui.nuxt.com/docs/getting-started/integrations/content): Beautiful typography out of the box

### Vue Compatibility

Nuxt UI works with any Vue project. Simply add the Vite and Vue plugins to your configuration:

- **Auto-imports**: Components and composables are automatically imported and available globally
- **Theming System**: Full theming support with customizable colors, sizes, variants, and more
- **Developer Experience**: Complete TypeScript support with IntelliSense and auto-completion

::tip
---
ariaLabel: Vue installation guide
to: https://ui.nuxt.com/docs/getting-started/installation/vue
---
Learn how to install and configure Nuxt UI in a Vue project in the **Vue installation guide**.
::

### TypeScript Support

Nuxt UI provides comprehensive TypeScript integration for a superior developer experience:

- **Auto-completion**: For all component props, slots, and events
- **Generic Components**: Using [Vue Generics](https://vuejs.org/api/sfc-script-setup.html#generics){rel="nofollow"}
- **Type-safe Theming**: In `app.config.ts`
- **IntelliSense**: Throughout your entire codebase

::accordion
  :::accordion-item{label="Is Nuxt UI free to use?"}
  Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.
  :::

:::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?"}
  Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](https://ui.nuxt.com/docs/getting-started/installation/vue) to get started.
  :::

:::accordion-item
  ---
  label: Will Nuxt UI work with other CSS frameworks like UnoCSS?
  ---
  No. Nuxt UI is designed exclusively for Tailwind CSS. UnoCSS support would require significant architecture changes due to different class naming conventions.
  :::

:::accordion-item{label="How does Nuxt UI handle accessibility?"}
  Through [Reka UI](https://reka-ui.com/docs/overview/accessibility){rel="nofollow"} integration, Nuxt UI provides automatic ARIA attributes, keyboard navigation, focus management, and screen reader support. While offering a strong foundation, testing in your specific use case remains important.
  :::

:::accordion-item{label="How is Nuxt UI tested?"}
  Nuxt UI ensures reliability with 1000+ Vitest tests covering core functionality and accessibility.
  :::

:::accordion-item{label="Is Nuxt UI production-ready?"}
  Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
  :::
::

---

## PageCard

**URL:** llms-txt#pagecard

**Contents:**
- Usage
  - Title
  - Description
  - Icon
  - Link
  - Variant
  - Orientation
  - Reverse
  - Highlight
  - Spotlight

The PageCard component provides a flexible way to display content in a card with an illustration in the default slot.

::code-preview
  :::u-page-card
  ---
  class: w-96
  description: Nuxt UI integrates with latest Tailwind CSS v4, bringing
    significant improvements.
  icon: i-simple-icons-tailwindcss
  title: Tailwind CSS
  ---
  ![Tailwind CSS](https://ui.nuxt.com/tailwindcss-v4.svg){.w-full}
  :::
::

::tip
Use the [PageGrid](https://ui.nuxt.com/docs/components/page-grid), [PageColumns](https://ui.nuxt.com/docs/components/page-columns) or [PageList](https://ui.nuxt.com/docs/components/page-list) components to display multiple PageCard.
::

Use the `title` prop to set the title of the card.

Use the `description` prop to set the description of the card.

Use the `icon` prop to set the icon of the card.

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

Use the `variant` prop to change the style of the card.

::tip
You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.
::

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

Use the `reverse` prop to reverse the orientation of the default slot.

Use the `highlight` and `highlight-color` props to display a highlighted border around the card.

Use the `spotlight` and `spotlight-color` props to display a spotlight effect that follows your mouse cursor and highlights borders on hover.

::note
The spotlight effect will take over hover effects when using a `to` prop. It's best to use it with the `outline` variant.
::

::tip
You can also customize the color and size by using the `--spotlight-color` and `--spotlight-size` CSS variables:

Use the [User](https://ui.nuxt.com/docs/components/user) component in the `header` or `footer` slot to make the card look like a testimonial.

::tip{to="https://ui.nuxt.com/docs/components/page-columns"}
You can use the [`PageColumns`](https://ui.nuxt.com/docs/components/page-columns) component to display multiple PageCard in a multi-column layout.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPageCard title="Tailwind CSS" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements." />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" to="https://tailwindcss.com/docs/v4-beta" target="_blank" />
</template>
```

---

## PricingTable

**URL:** llms-txt#pricingtable

**Contents:**
- Usage
  - Tiers
  - Sections
- Examples
  - With slots
- API
  - Props
  - Slots
- Theme
- Changelog

The PricingTable component provides a responsive and customizable way to display pricing plans in a table format, automatically switching between a horizontal table layout on desktop for easy comparison and a vertical card layout on mobile for better readability.

::code-preview
  :::u-pricing-table
  ---
  sections:
    - title: Features
      features:
        - title: Number of developers
          tiers:
            solo: "1"
            team: "5"
            enterprise: Unlimited
        - title: Projects
          tiers:
            solo: true
            team: true
            enterprise: true
        - title: GitHub repository access
          tiers:
            solo: true
            team: true
            enterprise: true
        - title: Updates
          tiers:
            solo: Patch & minor
            team: All updates
            enterprise: All updates
        - title: Support
          tiers:
            solo: Community
            team: Priority
            enterprise: 24/7
    - title: Security
      features:
        - title: SSO
          tiers:
            solo: false
            team: true
            enterprise: true
        - title: Audit logs
          tiers:
            solo: false
            team: true
            enterprise: true
        - title: Custom security review
          tiers:
            solo: false
            team: false
            enterprise: true
  tiers:
    - id: solo
      title: Solo
      description: For indie hackers.
      price: $249
      billingCycle: /month
      billingPeriod: billed annually
      badge: Most popular
      button:
        label: Buy now
        variant: subtle
    - id: team
      title: Team
      description: For growing teams.
      price: $499
      billingCycle: /month
      billingPeriod: billed annually
      button:
        label: Buy now
      highlight: true
    - id: enterprise
      title: Enterprise
      description: For large organizations.
      price: Custom
      button:
        label: Contact sales
        color: neutral
  ---
  :::
::

Use the `tiers` prop as an array of objects to define your pricing plans. Each tier object supports the following properties:

- `id: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Unique identifier for the tier (required)
- `title?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Name of the pricing plan
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Short description of the plan
- `price?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - The current price of the plan (e.g., "$99", "€99", "Free")
- `discount?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - The discounted price that will display the `price` with strikethrough (e.g., "$79", "€79")
- `billingCycle?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - The unit price period that appears next to the price (e.g., "/month", "/seat/month")
- `billingPeriod?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Additional billing context that appears above the billing cycle (e.g., "billed monthly")
- `badge?: string | BadgeProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Display a badge next to the title `{ color: 'primary', variant: 'subtle' }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `button?: ButtonProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Configure the CTA button `{ size: 'lg', block: true }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `highlight?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - Whether to visually emphasize this tier as the recommended option

Use the `sections` prop to organize features into logical groups. Each section represents a category of features that you want to compare across different pricing tiers.

- `title: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - The heading for the feature section
- `features: PricingTableSectionFeature[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} - An array of features with their availability in each tier:

- Each feature requires a `title` and a `tiers` object mapping tier IDs to values
  - Boolean values (`true`/`false`) will display as checkmarks (✓) or minus icons (-)
  - String values will be shown as text (e.g., "Unlimited", "Up to 5 users")
  - Numeric values will be displayed as is (e.g., 10, 100)

The PricingTable component provides powerful slot customization options to tailor the display of your content. You can customize individual elements using generic slots or target specific items using their IDs.

The component supports various slot types for maximum customization flexibility:

| Slot Type         | Pattern                                       | Description              | Example                      |
| ----------------- | --------------------------------------------- | ------------------------ | ---------------------------- |
| **Tier slots**    | `#{tier-id}-{element}`                        | Target specific tiers    | `#team-title`, `#solo-price` |
| **Section slots** | `#section-{id|formatted-title}-title`         | Target specific sections | `#section-features-title`    |
| **Feature slots** | `#feature-{id|formatted-title}-{title|value}` | Target specific features | `#feature-developers-title`  |
| **Generic slots** | `#tier-title`, `#section-title`, etc.         | Apply to all items       | `#feature-value`             |

::note
When no `id` is provided, the slot name is auto-generated from the title (e.g., "Premium Features!" becomes `#section-premium-features-title`).
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPricingTable />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPricingTable />
</template>
```

Example 3 (unknown):
```unknown
The component supports various slot types for maximum customization flexibility:

| Slot Type         | Pattern                                       | Description              | Example                      |
| ----------------- | --------------------------------------------- | ------------------------ | ---------------------------- |
| **Tier slots**    | `#{tier-id}-{element}`                        | Target specific tiers    | `#team-title`, `#solo-price` |
| **Section slots** | `#section-{id|formatted-title}-title`         | Target specific sections | `#section-features-title`    |
| **Feature slots** | `#feature-{id|formatted-title}-{title|value}` | Target specific features | `#feature-developers-title`  |
| **Generic slots** | `#tier-title`, `#section-title`, etc.         | Apply to all items       | `#feature-value`             |

::note
When no `id` is provided, the slot name is auto-generated from the title (e.g., "Premium Features!" becomes `#section-premium-features-title`).
::

## API

### Props
```

Example 4 (unknown):
```unknown
### Slots
```

---

## Pagination

**URL:** llms-txt#pagination

**Contents:**
- Usage
  - Total
  - Items Per Page
  - Sibling Count
  - Show Edges
  - Show Controls
  - Color
  - Variant
  - Active Color
  - Active Variant

Use the `default-page` prop or the `v-model:page` directive to control the current page.

::note
The Pagination component uses some [`Button`](https://ui.nuxt.com/docs/components/button) to display the pages, use [`color`](https://ui.nuxt.com/#color), [`variant`](https://ui.nuxt.com/#variant) and [`size`](https://ui.nuxt.com/#size) props to style them.
::

Use the `total` prop to set the total number of items in the list.

Use the `items-per-page` prop to set the number of items per page. Defaults to `10`.

Use the `sibling-count` prop to set the number of siblings to show. Defaults to `2`.

Use the `show-edges` prop to always show the ellipsis, first and last pages. Defaults to `false`.

Use the `show-controls` prop to show the first, prev, next and last buttons. Defaults to `true`.

Use the `color` prop to set the color of the inactive controls. Defaults to `neutral`.

Use the `variant` prop to set the variant of the inactive controls. Defaults to `outline`.

Use the `active-color` prop to set the color of the active control. Defaults to `primary`.

Use the `active-variant` prop to set the variant of the active control. Defaults to `solid`.

Use the `size` prop to set the size of the controls. Defaults to `md`.

Use the `disabled` prop to disable the pagination controls.

Use the `to` prop to transform buttons into links. Pass a function that receives the page number and returns a route destination.

::note
In this example we're adding the `#with-links` hash to avoid going to the top of the page.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPagination :page="5" :total="100" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UPagination :page="5" :total="100" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UPagination :page="5" :items-per-page="20" :total="100" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UPagination :page="5" :sibling-count="1" :total="100" />
</template>
```

---

## Card

**URL:** llms-txt#card

**Contents:**
- Usage
  - Variant
- API
  - Props
  - Slots
- Theme
- Changelog

Use the `header`, `default` and `footer` slots to add content to the Card.

Use the `variant` prop to change the variant of the Card.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Variant

Use the `variant` prop to change the variant of the Card.
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

## FileUpload

**URL:** llms-txt#fileupload

**Contents:**
- Usage
  - Multiple
  - Dropzone
  - Interactive
  - Accept
  - Label
  - Description
  - Icon
  - Color
  - Variant

Use the `v-model` directive to control the value of the FileUpload.

Use the `multiple` prop to allow multiple files to be selected.

Use the `dropzone` prop to enable/disable the droppable area. Defaults to `true`.

Use the `interactive` prop to enable/disable the clickable area. Defaults to `true`.

::tip{to="https://ui.nuxt.com/#with-files-bottom-slot"}
This can be useful when adding a [`Button`](https://ui.nuxt.com/docs/components/button) component in the `#actions` slot.
::

Use the `accept` prop to specify the allowed file types for the input. Provide a comma-separated list of [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types){rel="nofollow"} or file extensions (e.g., `image/png,application/pdf,.jpg`). Defaults to `*` (all file types).

Use the `label` prop to set the label of the FileUpload.

Use the `description` prop to set the description of the FileUpload.

Use the `icon` prop to set the icon of the FileUpload. Defaults to `i-lucide-upload`.

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.upload` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.upload` key.
  :::
::

Use the `color` prop to change the color of the FileUpload.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the FileUpload.

Use the `size` prop to change the size of the FileUpload.

Use the `layout` prop to change how the files are displayed in the FileUpload. Defaults to `grid`.

::warning
This prop only works when `variant` is `area`.
::

Use the `position` prop to change the position of the files in the FileUpload. Defaults to `outside`.

::warning
This prop only works when `variant` is `area` and when `layout` is `list`.
::

### With Form validation

You can use the FileUpload within a [Form](https://ui.nuxt.com/docs/components/form) and [FormField](https://ui.nuxt.com/docs/components/form-field) components to handle validation and error handling.

### With default slot

You can use the default slot to make your own FileUpload component.

### With files-bottom slot

You can use the `files-bottom` slot to add a [Button](https://ui.nuxt.com/docs/components/button) under the files list to remove all files for example.

::note{to="https://ui.nuxt.com/#interactive"}
The `interactive` prop is set to `false` in this example to prevent the default clickable area.
::

### With files-top slot

You can use the `files-top` slot to add a [Button](https://ui.nuxt.com/docs/components/button) above the files list to add new files for example.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                              | Type                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}    | `Ref<HTMLInputElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |
| `dropzoneRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLDivElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}   |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UFileUpload class="w-96 min-h-48" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UFileUpload multiple class="w-96 min-h-48" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UFileUpload :dropzone="false" class="w-96 min-h-48" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UFileUpload :interactive="false" class="w-96 min-h-48" />
</template>
```

---

## ContentSearchButton

**URL:** llms-txt#contentsearchbutton

**Contents:**
- Usage
  - Collapsed
  - Kbds
- API
  - Props
  - Slots
- Theme
- Changelog

::warning{to="https://ui.nuxt.com/docs/getting-started/integrations/content"}
This component is only available when the `@nuxt/content` module is installed.
::

The ContentSearchButton component is used to open the [ContentSearch](https://ui.nuxt.com/docs/components/content-search) modal.

It extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::note{to="https://ui.nuxt.com/#collapsed"}
The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.
::

Use the `collapsed` prop to show the button's label and [kbds](https://ui.nuxt.com/#kbds). Defaults to `true`.

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} to match the default shortcut of the [ContentSearch](https://ui.nuxt.com/docs/components/content-search#shortcut) component.

::component-changelog{prefix="content"}
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UContentSearchButton />
</template>
```

Example 2 (vue):
```vue
<template>
  <UContentSearchButton variant="subtle" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```

---

## Slideover

**URL:** llms-txt#slideover

**Contents:**
- Usage
  - Title
  - Description
  - Close
  - Close Icon
  - Side
  - Overlay
  - Transition
- Examples
  - Control open state

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Slideover.

Then, use the `#content` slot to add the content displayed when the Slideover is open.

You can also use the `#header`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, `#body`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} and `#footer`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} slots to customize the Slideover's content.

Use the `title` prop to set the title of the Slideover's header.

Use the `description` prop to set the description of the Slideover's header.

Use the `close` prop to customize or hide the close button (with `false` value) displayed in the Slideover's header.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

::note
The close button is not displayed if the `#content` slot is used as it's a part of the header.
::

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

Use the `side` prop to set the side of the screen where the Slideover will slide in from. Defaults to `right`.

Use the `overlay` prop to control whether the Slideover has an overlay or not. Defaults to `true`.

Use the `transition` prop to control whether the Slideover is animated or not. Defaults to `true`.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Slideover by pressing ``.
::

::tip
This allows you to move the trigger outside of the Slideover or remove it entirely.
::

### Disable dismissal

Set the `dismissible` prop to `false` to prevent the Slideover from being closed when clicking outside of it or pressing escape. A `close:prevent` event will be emitted when the user tries to close it.

### Programmatic usage

You can use the [`useOverlay`](https://ui.nuxt.com/docs/composables/use-overlay) composable to open a Slideover programmatically.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses the [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue){rel="nofollow"} component.
::

First, create a slideover component that will be opened programmatically:

::note
We are emitting a `close` event when the slideover is closed or dismissed here. You can emit any data through the `close` event, however, the event must be emitted in order to capture the return value.
::

Then, use it in your app:

::tip
You can close the slideover within the slideover component by emitting `emit('close')`.
::

### Nested slideovers

You can nest slideovers within each other.

Use the `#footer` slot to add content after the Slideover's body.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <USlideover>
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="h-full m-4" />
    </template></USlideover>
</template>
```

Example 2 (vue):
```vue
<template>
  <USlideover title="Slideover with title">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-full" />
    </template></USlideover>
</template>
```

Example 3 (vue):
```vue
<template>
  <USlideover title="Slideover with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-full" />
    </template></USlideover>
</template>
```

Example 4 (vue):
```vue
<template>
  <USlideover title="Slideover with close button">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-full" />
    </template></USlideover>
</template>
```

---

## Tooltip

**URL:** llms-txt#tooltip

**Contents:**
- Usage
  - Text
  - Kbds
  - Delay
  - Content
  - Arrow
  - Disabled
- Examples
  - Control open state
  - With following cursor

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Tooltip.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses the [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider){rel="nofollow"} component from Reka UI.
::

::tip{to="https://ui.nuxt.com/docs/components/app#props"}
You can check the `App` component `tooltip` prop to see how to configure the Tooltip globally.
::

Use the `text` prop to set the content of the Tooltip.

Use the `kbds` prop to render [Kbd](https://ui.nuxt.com/docs/components/kbd) components in the Tooltip.

::tip
You can use special keys like `meta` that displays as `⌘` on macOS and `Ctrl` on other platforms.
::

Use the `delay-duration` prop to change the delay before the Tooltip appears. For example, you can make it appear instantly by setting it to `0`.

::tip
This can be configured globally through the `tooltip.delayDuration` option in the [`App`](https://ui.nuxt.com/docs/components/app) component.
::

Use the `content` prop to control how the Tooltip content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the Tooltip.

Use the `disabled` prop to disable the Tooltip.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Tooltip by pressing ``.
::

### With following cursor

You can make the Tooltip follow the cursor when hovering over an element using the [`reference`](https://reka-ui.com/docs/components/tooltip#trigger){rel="nofollow"} prop:

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

Example 2 (vue):
```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

Example 3 (vue):
```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

Example 4 (vue):
```vue
<template>
  <UTooltip :delay-duration="0" text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

---

## DashboardNavbar

**URL:** llms-txt#dashboardnavbar

**Contents:**
- Usage
  - Title
  - Icon
  - Toggle
  - Toggle Side
- API
  - Props
  - Slots
- Theme
- Changelog

The DashboardNavbar component is a responsive navigation bar that integrates with the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) component. It includes a mobile toggle button to enable responsive navigation in dashboard layouts.

Use it inside the `header` slot of the [DashboardPanel](https://ui.nuxt.com/docs/components/dashboard-panel) component:

Use the `left`, `default` and `right` slots to customize the navbar.

::note
In this example, we use the [Tabs](https://ui.nuxt.com/docs/components/tabs) component in the right slot to display some tabs.
::

Use the `title` prop to set the title of the navbar.

Use the `icon` prop to set the icon of the navbar.

Use the `toggle` prop to customize the toggle button displayed on mobile that opens the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) component.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
Use the `left`, `default` and `right` slots to customize the navbar.
```

Example 2 (unknown):
```unknown
::note
In this example, we use the [Tabs](https://ui.nuxt.com/docs/components/tabs) component in the right slot to display some tabs.
::

### Title

Use the `title` prop to set the title of the navbar.
```

Example 3 (unknown):
```unknown
### Icon

Use the `icon` prop to set the icon of the navbar.
```

Example 4 (unknown):
```unknown
### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile that opens the [DashboardSidebar](https://ui.nuxt.com/docs/components/dashboard-sidebar) component.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.
```

---

## useFormField

**URL:** llms-txt#useformfield

**Contents:**
- Usage

Use the auto-imported `useFormField` composable to integrate custom inputs with a [Form](https://ui.nuxt.com/docs/components/form).

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
const { id, emitFormBlur, emitFormInput, emitFormChange } = useFormField()
</script>
```

---

## LLMs.txt

**URL:** llms-txt#llms.txt

**Contents:**
- What is LLMs.txt?
- Available routes
- Choosing the Right File
- Important usage notes
- Usage with AI Tools
  - Cursor
  - Windsurf
  - Other AI Tools

LLMs.txt is a structured documentation format specifically designed for large language models (LLMs). Nuxt UI provides LLMs.txt files that contain comprehensive information about our component library, making it easy for AI tools to understand and assist with Nuxt UI development.

These files are optimized for AI consumption and contain structured information about components, APIs, usage patterns, and best practices.

We provide LLMs.txt routes to help AI tools access our documentation:

- **`/llms.txt`** - Contains a structured overview of all components and their documentation links (\~5K tokens)
- **`/llms-full.txt`** - Provides comprehensive documentation including implementation details, examples, theming, composables, and migration guidance (\~1M+ tokens)

## Choosing the Right File

::note{icon="i-lucide-info"}
**Most users should start with `/llms.txt`** - it contains all essential information and works with standard LLM context windows. Use `/llms-full.txt` only if you need comprehensive implementation examples and your AI tool supports large contexts (200K+ tokens).
::

## Important usage notes

::warning{icon="i-lucide-alert-triangle"}
**@-symbol must be typed manually** - When using tools like Cursor or Windsurf, the `@` symbol must be typed by hand in the chat interface. Copy-pasting breaks the tool's ability to recognize it as a context reference.
::

## Usage with AI Tools

Nuxt UI provides specialized LLMs.txt files that you can reference in Cursor for better AI assistance with component development.

1. **Direct reference**: Mention the LLMs.txt URLs when asking questions
2. Add these specific URLs to your project context using `@docs`

[Read more about Cursor Web and Docs Search](https://docs.cursor.com/en/context/@-symbols/@-docs){rel="nofollow"}

Windsurf can directly access the Nuxt UI LLMs.txt files to understand component usage and best practices.

#### Using LLMs.txt with Windsurf:

- Use `@docs` to reference specific LLMs.txt URLs
- Create persistent rules referencing these URLs in your workspace

[Read more about Windsurf Web and Docs Search](https://docs.windsurf.com/windsurf/cascade/web-search){rel="nofollow"}

Any AI tool that supports LLMs.txt can use these routes to better understand Nuxt UI.

#### Examples for ChatGPT, Claude, or other LLMs:

- "Using Nuxt UI documentation from <https://ui.nuxt.com/llms.txt>{rel="nofollow"}"
- "Follow complete Nuxt UI guidelines from <https://ui.nuxt.com/llms-full.txt>{rel="nofollow"}"

---

## FieldGroup

**URL:** llms-txt#fieldgroup

**Contents:**
- Usage
  - Size
  - Orientation
- Examples
  - With input
  - With tooltip
  - With dropdown
  - With badge
- API
  - Props

Wrap multiple [Button](https://ui.nuxt.com/components/button) within a FieldGroup to group them together.

Use the `size` prop to change the size of all the buttons.

Use the `orientation` prop to change the orientation of the buttons. Defaults to `horizontal`.

You can use components like [Input](https://ui.nuxt.com/components/input), [InputMenu](https://ui.nuxt.com/components/input-menu), [Select](https://ui.nuxt.com/components/select) [SelectMenu](https://ui.nuxt.com/components/select-menu), etc. within a field group.

You can use a [Tooltip](https://ui.nuxt.com/components/tooltip) within a field group.

You can use a [DropdownMenu](https://ui.nuxt.com/components/dropdown-menu) within a field group.

You can use a [Badge](https://ui.nuxt.com/components/badge) within a field group.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UFieldGroup>
    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
  </UFieldGroup>
</template>
```

Example 2 (vue):
```vue
<template>
  <UFieldGroup size="xl">
    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
  </UFieldGroup>
</template>
```

Example 3 (vue):
```vue
<template>
  <UFieldGroup orientation="vertical">
    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
  </UFieldGroup>
</template>
```

Example 4 (vue):
```vue
<template>
  <UFieldGroup>
    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
  </UFieldGroup>
</template>
```

---

## ContentSurround

**URL:** llms-txt#contentsurround

**Contents:**
- Usage
  - Prev / Next
- Examples
  - Within a page
- API
  - Props
  - Slots
- Theme
- Changelog

::warning{to="https://ui.nuxt.com/docs/getting-started/integrations/content"}
This component is only available when the `@nuxt/content` module is installed.
::

Use the `surround` prop with the `surround`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} value you get when fetching a page surround.

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](https://ui.nuxt.com/docs/components/icon).

Use the ContentSurround component in a page to display the prev and next links:

::component-changelog{prefix="content"}
::

**Examples:**

Example 1 (unknown):
```unknown
### Prev / Next

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](https://ui.nuxt.com/docs/components/icon).
```

Example 2 (unknown):
```unknown
## Examples

### Within a page

Use the ContentSurround component in a page to display the prev and next links:
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

## Modal

**URL:** llms-txt#modal

**Contents:**
- Usage
  - Title
  - Description
  - Close
  - Close Icon
  - Overlay
  - Transition
  - Fullscreen
- Examples
  - Control open state

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Modal.

Then, use the `#content` slot to add the content displayed when the Modal is open.

You can also use the `#header`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, `#body`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} and `#footer`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} slots to customize the Modal's content.

Use the `title` prop to set the title of the Modal's header.

Use the `description` prop to set the description of the Modal's header.

Use the `close` prop to customize or hide the close button (with `false` value) displayed in the Modal's header.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component to customize it.

::tip
The close button is not displayed if the `#content` slot is used as it's a part of the header.
::

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

Use the `overlay` prop to control whether the Modal has an overlay or not. Defaults to `true`.

Use the `transition` prop to control whether the Modal is animated or not. Defaults to `true`.

Use the `fullscreen` prop to make the Modal fullscreen.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Modal by pressing ``.
::

::tip
This allows you to move the trigger outside of the Modal or remove it entirely.
::

### Disable dismissal

Set the `dismissible` prop to `false` to prevent the Modal from being closed when clicking outside of it or pressing escape. A `close:prevent` event will be emitted when the user tries to close it.

### Programmatic usage

You can use the [`useOverlay`](https://ui.nuxt.com/docs/composables/use-overlay) composable to open a Modal programmatically.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/docs/components/app) component which uses the [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue){rel="nofollow"} component.
::

First, create a modal component that will be opened programmatically:

::note
We are emitting a `close` event when the modal is closed or dismissed here. You can emit any data through the `close` event, however, the event must be emitted in order to capture the return value.
::

Then, use it in your app:

::tip
You can close the modal within the modal component by emitting `emit('close')`.
::

You can nest modals within each other.

Use the `#footer` slot to add content after the Modal's body.

### With command palette

You can use a [CommandPalette](https://ui.nuxt.com/docs/components/command-palette) component inside the Modal's content.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UModal>
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="h-48 m-4" />
    </template></UModal>
</template>
```

Example 2 (vue):
```vue
<template>
  <UModal title="Modal with title">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

Example 3 (vue):
```vue
<template>
  <UModal title="Modal with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

Example 4 (vue):
```vue
<template>
  <UModal title="Modal with close button">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #body>
      <Placeholder class="h-48" />
    </template></UModal>
</template>
```

---

## PageGrid

**URL:** llms-txt#pagegrid

**Contents:**
- Usage
- API
  - Props
  - Slots
- Theme
- Changelog

The PageGrid component provides a responsive grid layout for displaying [PageCard](https://ui.nuxt.com/docs/components/page-card) components or any other elements, automatically adjusting from 1 to 3 columns based on screen size.

You can also use it to display a list of cards in a bento style layout by using `col-span-*` and `row-span-*` utility classes.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
You can also use it to display a list of cards in a bento style layout by using `col-span-*` and `row-span-*` utility classes.
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

## useOverlay

**URL:** llms-txt#useoverlay

**Contents:**
- Usage
- API
  - create()
  - open()
  - close()
  - patch()
  - unmount()
  - isOpen()
  - overlays
- Instance API

Use the auto-imported `useOverlay` composable to programmatically control [Modal](https://ui.nuxt.com/docs/components/modal) and [Slideover](https://ui.nuxt.com/docs/components/slideover) components.

- The `useOverlay` composable is created using `createSharedComposable`, ensuring that the same overlay state is shared across your entire application.

::note
In order to return a value from the overlay, the `overlay.open()` can be awaited. In order for this to work, however, the **overlay component must emit a `close` event**. See example below for details.
::

`useOverlay()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

The `useOverlay` composable provides methods to manage overlays globally. Each created overlay returns an instance with its own methods.

`create(component: T, options: OverlayOptions): OverlayInstance`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Create an overlay, and return a factory instance.

::field-group
  :::field{required name="component" required="true" type="T"}
  The overlay component to render.
  :::

:::field{name="options" type="OverlayOptions"}
  Configuration options for the overlay.
  
    ::::collapsible
      :::::field-group
        ::::::field{name="defaultOpen" type="boolean"}
        Open the overlay immediately after being created. Defaults to `false`.
        ::::::
      
        ::::::field{name="props" type="ComponentProps"}
        An optional object of props to pass to the rendered component.
        ::::::
      
        ::::::field{name="destroyOnClose" type="boolean"}
        Removes the overlay from memory when closed. Defaults to `false`.
        ::::::
      :::::
    ::::
  :::
::

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Open an overlay by its `id`.

::field-group
  :::field{required name="id" required="true" type="symbol"}
  The identifier of the overlay.
  :::

:::field{name="props" type="ComponentProps<T>"}
  An optional object of props to pass to the rendered component.
  :::
::

`close(id: symbol, value?: any): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Close an overlay by its `id`.

::field-group
  :::field{required name="id" required="true" type="symbol"}
  The identifier of the overlay.
  :::

:::field{name="value" type="any"}
  A value to resolve the overlay promise with.
  :::
::

`patch(id: symbol, props: ComponentProps<T>): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Update an overlay by its `id`.

::field-group
  :::field{required name="id" required="true" type="symbol"}
  The identifier of the overlay.
  :::

:::field{required name="props" required="true" type="ComponentProps<T>"}
  An object of props to update on the rendered component.
  :::
::

`unmount(id: symbol): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Remove an overlay from the DOM by its `id`.

::field-group
  :::field{required name="id" required="true" type="symbol"}
  The identifier of the overlay.
  :::
::

`isOpen(id: symbol): boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Check if an overlay is open using its `id`.

::field-group
  :::field{required name="id" required="true" type="symbol"}
  The identifier of the overlay.
  :::
::

`overlays: Overlay[]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

In-memory list of all overlays that were created.

`open(props?: ComponentProps<T>): Promise<OpenedOverlay<T>>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::field-group
  :::field{name="props" type="ComponentProps<T>"}
  An optional object of props to pass to the rendered component.
  :::
::

`close(value?: any): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::field-group
  :::field{name="value" type="any"}
  A value to resolve the overlay promise with.
  :::
::

`patch(props: ComponentProps<T>): void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Update the props of the overlay.

::field-group
  :::field{required name="props" required="true" type="ComponentProps<T>"}
  An object of props to update on the rendered component.
  :::
::

Here's a complete example of how to use the `useOverlay` composable:

In this example, we're using the `useOverlay` composable to control multiple modals and slideovers.

When opening overlays programmatically (e.g. modals, slideovers, etc), the overlay component can only access injected values from the component containing `UApp` (typically `app.vue` or layout components). This is because overlays are mounted outside of the page context by the `UApp` component.

As such, using `provide()` in pages or parent components isn't supported directly. To pass provided values to overlays, the recommended approach is to use props instead:

**Examples:**

Example 1 (vue):
```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

async function openModal() {
  modal.open()
}
</script>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  title: 'Welcome'
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { title: 'Welcome' })
const modalB = overlay.create(ModalB)

const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const modalBInstance = modalB.open()

  const input = await modalBInstance

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <button @click="openModalA">Open Modal</button>
</template>
```

---

## AuthForm

**URL:** llms-txt#authform

**Contents:**
- Usage
  - Fields
  - Title
  - Description
  - Icon
  - Providers
  - Separator
  - Submit
- Examples
  - Within a page

Built on top of the [Form](https://ui.nuxt.com/docs/components/form) component, the `AuthForm` component can be used in your pages or wrapped in a [PageCard](https://ui.nuxt.com/docs/components/page-card).

The Form will construct itself based on the `fields` prop and the state will be handled internally.

Use the `fields` prop as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `type?: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'select' | 'otp'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Each field must include a `type` property, which determines the input component and any additional props applied: `checkbox` fields use [Checkbox](https://ui.nuxt.com/docs/components/checkbox#props) props, `select` fields use [SelectMenu](https://ui.nuxt.com/docs/components/select-menu#props) props, `otp` fields use [PinInput](https://ui.nuxt.com/docs/components/pin-input#props) props, and all other types use [Input](https://ui.nuxt.com/docs/components/input#props) props.

You can also pass any property from the [FormField](https://ui.nuxt.com/docs/components/form-field#props) component to each field.

Use the `title` prop to set the title of the Form.

Use the `description` prop to set the description of the Form.

Use the `icon` prop to set the icon of the Form.

Use the `providers` prop to add providers to the form.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component such as `variant`, `color`, `to`, etc.

Use the `separator` prop to customize the [Separator](https://ui.nuxt.com/docs/components/separator) between the providers and the fields. Defaults to `or`.

You can pass any property from the [Separator](https://ui.nuxt.com/docs/components/separator#props) component to customize it.

Use the `submit` prop to change the submit button of the Form.

You can pass any property from the [Button](https://ui.nuxt.com/docs/components/button) component such as `variant`, `color`, `to`, etc.

You can wrap the `AuthForm` component with the [PageCard](https://ui.nuxt.com/docs/components/page-card) component to display it within a `login.vue` page for example.

You can access the typed component instance (exposing formRef and state) using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}. For example, in a separate form (e.g. a "reset" form) you can do:

This gives you access to the following (exposed) properties:

| Name                                                                                                                          | Type                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLFormElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |
| `state`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}   | `Reactive<FormStateType>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}     |

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
### Fields

The Form will construct itself based on the `fields` prop and the state will be handled internally.

Use the `fields` prop as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `type?: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'select' | 'otp'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

Each field must include a `type` property, which determines the input component and any additional props applied: `checkbox` fields use [Checkbox](https://ui.nuxt.com/docs/components/checkbox#props) props, `select` fields use [SelectMenu](https://ui.nuxt.com/docs/components/select-menu#props) props, `otp` fields use [PinInput](https://ui.nuxt.com/docs/components/pin-input#props) props, and all other types use [Input](https://ui.nuxt.com/docs/components/input#props) props.

You can also pass any property from the [FormField](https://ui.nuxt.com/docs/components/form-field#props) component to each field.
```

Example 2 (unknown):
```unknown
### Title

Use the `title` prop to set the title of the Form.
```

Example 3 (unknown):
```unknown
### Description

Use the `description` prop to set the description of the Form.
```

Example 4 (unknown):
```unknown
### Icon

Use the `icon` prop to set the icon of the Form.
```

---

## ChatPromptSubmit

**URL:** llms-txt#chatpromptsubmit

**Contents:**
- Usage
  - Ready
  - Submitted
  - Streaming
  - Error
- Examples
  - Within a page
- API
  - Props
  - Slots

The ChatPromptSubmit component is used inside the [ChatPrompt](https://ui.nuxt.com/docs/components/chat-prompt) component to submit the prompt. It automatically handles the different `status` values to control the chat.

It extends the [Button](https://ui.nuxt.com/docs/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::code-preview
  :::u-chat-prompt-submit
  :::

::note
You can also use it inside the `footer` slot of the [`ChatPrompt`](https://ui.nuxt.com/docs/components/chat-prompt) component.
::

When its status is `ready`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `color`, `variant` and `icon` props to customize the Button. Defaults to:

- `color="primary"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant="solid"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon="i-lucide-arrow-up"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowUp` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowUp` key.
  :::
::

When its status is `submitted`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `submitted-color`, `submitted-variant` and `submitted-icon` props to customize the Button. Defaults to:

- `submittedColor="neutral"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `submittedVariant="subtle"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `submittedIcon="i-lucide-square"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `stop` event is emitted when the user clicks on the Button.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.
  :::
::

When its status is `streaming`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `streaming-color`, `streaming-variant` and `streaming-icon` props to customize the Button. Defaults to:

- `streamingColor="neutral"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `streamingVariant="subtle"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `streamingIcon="i-lucide-square"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `stop` event is emitted when the user clicks on the Button.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.
  :::
::

When its status is `error`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `error-color`, `error-variant` and `error-icon` props to customize the Button. Defaults to:

- `errorColor="error"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `errorVariant="soft"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `reload` event is emitted when the user clicks on the Button.
::

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt#theme
  ---
  You can customize this icon globally in your `app.config.ts` under `ui.icons.reload` key.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/integrations/icons/vue#theme
  ---
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.reload` key.
  :::
::

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

Use the ChatPromptSubmit component with the `Chat` class from AI SDK v5 to display a chat prompt within a page.

Pass the `status` prop and listen to the `stop` and `reload` events to control the chat.

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```

Example 2 (vue):
```vue
<template>
  <UChatPromptSubmit color="primary" variant="solid" icon="i-lucide-arrow-up" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UChatPromptSubmit submitted-color="neutral" submitted-variant="subtle" submitted-icon="i-lucide-square" status="submitted" />
</template>
```

Example 4 (vue):
```vue
<template>
  <UChatPromptSubmit streaming-color="neutral" streaming-variant="subtle" streaming-icon="i-lucide-square" status="streaming" />
</template>
```

---

## Popover

**URL:** llms-txt#popover

**Contents:**
- Usage
  - Mode
  - Delay
  - Content
  - Arrow
- Examples
  - Control open state
  - Disable dismissal
  - With command palette
  - With following cursor

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the Popover.

Then, use the `#content` slot to add the content displayed when the Popover is open.

Use the `mode` prop to change the mode of the Popover. Defaults to `click`.

::note
When using the `hover` mode, the Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card){rel="nofollow"} component is used instead of the [`Popover`](https://reka-ui.com/docs/components/popover){rel="nofollow"}.
::

When using the `hover` mode, you can use the `open-delay` and `close-delay` props to control the delay before the Popover is opened or closed.

Use the `content` prop to control how the Popover content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the Popover.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the Popover by pressing ``.
::

### Disable dismissal

Set the `dismissible` prop to `false` to prevent the Popover from being closed when clicking outside of it or pressing escape. A `close:prevent` event will be emitted when the user tries to close it.

### With command palette

You can use a [CommandPalette](https://ui.nuxt.com/docs/components/command-palette) component inside the Popover's content.

### With following cursor

You can make the Popover follow the cursor when hovering over an element using the [`reference`](https://reka-ui.com/docs/components/tooltip#trigger){rel="nofollow"} prop:

You can use the `#anchor` slot to position the Popover against a custom element.

::warning
This slot only works when `mode` is `click`.
::

::note
The `close` function is only available when `mode` is set to `click` because Reka UI exposes this for [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props){rel="nofollow"} but not for [`HoverCard`](https://reka-ui.com/docs/components/hover-card){rel="nofollow"}.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UPopover>
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

Example 2 (vue):
```vue
<template>
  <UPopover mode="hover">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

Example 3 (vue):
```vue
<template>
  <UPopover mode="hover" :open-delay="500" :close-delay="300">
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

Example 4 (vue):
```vue
<template>
  <UPopover>
    <UButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

---

## DropdownMenu

**URL:** llms-txt#dropdownmenu

**Contents:**
- Usage
  - Items
  - Content
  - Arrow
  - Size
  - Disabled
- Examples
  - With checkbox items
  - With color items
  - Control open state

Use a [Button](https://ui.nuxt.com/docs/components/button) or any other component in the default slot of the DropdownMenu.

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
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

::note
You can also pass an array of arrays to the `items` prop to create separated groups of items.
::

::tip
Each item can take a `children` array of objects with the same properties as the `items` prop to create a nested menu which can be controlled using the `open`, `defaultOpen` and `content` properties.
::

Use the `content` prop to control how the DropdownMenu content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the DropdownMenu.

Use the `size` prop to control the size of the DropdownMenu.

::warning
The `size` prop will not be proxied to the Button, you need to set it yourself.
::

::note
When using the same size, the DropdownMenu items will be perfectly aligned with the Button.
::

Use the `disabled` prop to disable the DropdownMenu.

### With checkbox items

You can use the `type` property with `checkbox` and use the `checked` / `onUpdateChecked` properties to control the checked state of the item.

::note
To ensure reactivity for the `checked` state of items, it's recommended to wrap your `items` array inside a `computed`.
::

You can use the `color` property to highlight certain items with a color.

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the DropdownMenu by pressing ``.
::

Use the `slot` property to customize a specific item.

You will have access to the following slots:

- `#{{ item.slot }}`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-leading`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-label`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `#{{ item.slot }}-trailing`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::tip{to="https://ui.nuxt.com/#slots"}
You can also use the `#item`, `#item-leading`, `#item-label` and `#item-trailing` slots to customize all items.
::

### With trigger content width

You can expand the content to the full width of its button by adding the `w-(--reka-dropdown-menu-trigger-width)` class on the `ui.content` slot.

::tip
You can also change the content width globally in your `app.config.ts`:

### Extract shortcuts

When you have some items with `kbds` property (displaying some [Kbd](https://ui.nuxt.com/docs/components/kbd)), you can easily make them work with the [defineShortcuts](https://ui.nuxt.com/docs/composables/define-shortcuts) composable.

Inside the `defineShortcuts` composable, there is an `extractShortcuts` utility that will extract the shortcuts recursively from the items and return an object that you can pass to `defineShortcuts`. It will automatically call the `select` function of the item when the shortcut is pressed.

::note
In this example, `` ``, `` `` and `` `` would trigger the `select` function of the corresponding item.
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
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png',
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [
        ',',
      ],
    },
    {
      label: 'Keyboard shortcuts',
      icon: 'i-lucide-monitor',
    },
  ],
  [
    {
      label: 'Team',
      icon: 'i-lucide-users',
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail',
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square',
          },
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus',
          },
        ],
      ],
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: [
        'meta',
        'n',
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
      to: '/docs/components/dropdown-menu',
    },
    {
      label: 'API',
      icon: 'i-lucide-cloud',
      disabled: true,
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: [
        'shift',
        'meta',
        'q',
      ],
    },
  ],
])
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```

Example 2 (vue):
```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png',
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [
        ',',
      ],
    },
    {
      label: 'Keyboard shortcuts',
      icon: 'i-lucide-monitor',
    },
  ],
  [
    {
      label: 'Team',
      icon: 'i-lucide-users',
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail',
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square',
          },
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus',
          },
        ],
      ],
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: [
        'meta',
        'n',
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
      to: '/docs/components/dropdown-menu',
    },
    {
      label: 'API',
      icon: 'i-lucide-cloud',
      disabled: true,
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: [
        'shift',
        'meta',
        'q',
      ],
    },
  ],
])
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  },
])
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```

Example 4 (vue):
```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  },
])
</script>

<template>
  <UDropdownMenu arrow :items="items">
    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
```

---

## SelectMenu

**URL:** llms-txt#selectmenu

**Contents:**
- Usage
  - Items
  - Value Key
  - Multiple
  - Placeholder
  - Search Input
  - Content
  - Arrow
  - Color
  - Variant

Use the `v-model` directive to control the value of the SelectMenu or the `default-value` prop to set the initial value when you do not need to control its state.

::tip
Use this over a [`Select`](https://ui.nuxt.com/docs/components/select) to take advantage of Reka UI's [`Combobox`](https://reka-ui.com/docs/components/combobox){rel="nofollow"} component that offers search capabilities and multiple selection.
::

::note
This component is similar to the [`InputMenu`](https://ui.nuxt.com/docs/components/input-menu) but it's using a Select instead of an Input with the search inside the menu.
::

Use the `items` prop as an array of strings, numbers or booleans:

You can also pass an array of objects with the following properties:

- `label?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- [`type?: "label" | "separator" | "item"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-items-type)
- [`icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-icons-in-items)
- [`avatar?: AvatarProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-avatar-in-items)
- [`chip?: ChipProps`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}](https://ui.nuxt.com/#with-chip-in-items)
- `disabled?: boolean`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `onSelect?: (e: Event) => void`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::caution
Unlike the [`Select`](https://ui.nuxt.com/docs/components/select) component, the SelectMenu expects the whole object to be passed to the `v-model` directive or the `default-value` prop by default.
::

You can also pass an array of arrays to the `items` prop to display separated groups of items.

You can choose to bind a single property of the object rather than the whole object by using the `value-key` prop. Defaults to `undefined`.

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

::caution
Ensure to pass an array to the `default-value` prop or the `v-model` directive.
::

Use the `placeholder` prop to set a placeholder text.

Use the `search-input` prop to customize or hide the search input (with `false` value).

You can pass any property from the [Input](https://ui.nuxt.com/docs/components/input) component to customize it.

::tip
You can set the `search-input` prop to `false` to hide the search input.
::

Use the `content` prop to control how the SelectMenu content is rendered, like its `align` or `side` for example.

Use the `arrow` prop to display an arrow on the SelectMenu.

Use the `color` prop to change the ring color when the SelectMenu is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the SelectMenu.

Use the `size` prop to change the size of the SelectMenu.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the SelectMenu.

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

Use the `avatar` prop to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the SelectMenu.

Use the `loading` prop to show a loading icon on the SelectMenu.

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

Use the `disabled` prop to disable the SelectMenu.

You can use the `type` property with `separator` to display a separator between items or `label` to display a label.

### With icon in items

You can use the `icon` property to display an [Icon](https://ui.nuxt.com/docs/components/icon) inside the items.

::tip
You can also use the `#leading` slot to display the selected icon.
::

### With avatar in items

You can use the `avatar` property to display an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the items.

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
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/docs/composables/define-shortcuts), you can toggle the SelectMenu by pressing ``.
::

### Control search term

Use the `v-model:search-term` directive to control the search term.

### With rotating icon

Here is an example with a rotating icon that indicates the open state of the SelectMenu.

Use the `create-item` prop to enable users to add custom values that aren't in the predefined options.

::note
The create option shows when no match is found by default. Set it to `always` to show it even when similar values exist.
::

::tip{to="https://ui.nuxt.com/#emits"}
Use the `@create` event to handle the creation of the item. You will receive the event and the item as arguments.
::

### With fetched items

You can fetch items from an API and use them in the SelectMenu.

### With ignore filter

Set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic.

::note
This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced){rel="nofollow"} to debounce the API calls.
::

### With filter fields

Use the `filter-fields` prop with an array of fields to filter on. Defaults to `[labelKey]`.

### With virtualization :badge{label="4.1+"}

Use the `virtualize` prop to enable virtualization for large lists as a boolean or an object with options like `{ estimateSize: 32, overscan: 12 }`.

::warning{target="_blank" to="https://github.com/unovue/reka-ui/issues/1885"}
When enabled, all groups are flattened into a single list due to a limitation of Reka UI.
::

### With full content width

You can expand the content to the full width of its items by adding the `min-w-fit` class on the `ui.content` slot.

::tip
You can also change the content width globally in your `app.config.ts`:

### As a CountryPicker

This example demonstrates using the SelectMenu as a country picker with lazy loading - countries are only fetched when the menu is opened.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                             | Type                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `triggerRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<InstanceType<typeof ComboboxTrigger> | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

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
  <USelectMenu model-value="Backlog" :items="items" />
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
  <USelectMenu model-value="Backlog" class="w-48" :items="items" />
</template>
```

Example 3 (vue):
```vue
<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'

const items = ref<SelectMenuItem[]>([
  {
    label: 'Backlog',
  },
  {
    label: 'Todo',
  },
  {
    label: 'In Progress',
  },
  {
    label: 'Done',
  },
])
</script>

<template>
  <USelectMenu class="w-48" :items="items" />
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
  <USelectMenu model-value="Apple" class="w-48" :items="items" />
</template>
```

---

## Customize components

**URL:** llms-txt#customize-components

**Contents:**
- Tailwind Variants
  - Slots
  - Variants
  - Default Variants
  - Compound Variants
- Customize theme
  - Global config
  - `ui` prop
  - `class` prop

Nuxt UI components are styled using the [Tailwind Variants](https://www.tailwind-variants.org/){rel="nofollow"} API, which provides a powerful way to create variants and manage component styles.

Components can have multiple `slots`, each representing a distinct HTML element or section within the component. These slots allow for flexible content insertion and styling.

Let's take the [Card](https://ui.nuxt.com/docs/components/card) component as an example which has multiple slots:

Some components don't have slots, they are just composed of a single root element. In this case, the theme only defines the `base` slot like the [Container](https://ui.nuxt.com/docs/components/container) component for example:

::warning
Components without slots don't have a [`ui` prop](https://ui.nuxt.com/#ui-prop), only the [`class` prop](https://ui.nuxt.com/#class-prop) is available to override styles.
::

Components support `variants`, which allow you to dynamically adjust the styles of different `slots` based on component props.

For example, the [Avatar](https://ui.nuxt.com/docs/components/avatar) component uses a `size` variant to control its appearance:

This way, the `size` prop will apply the corresponding styles to the `root` slot:

The `defaultVariants` property sets the default value for each variant when no prop is passed.

For example, the [Avatar](https://ui.nuxt.com/docs/components/avatar) component has its default size set to `md`:

::framework-only
#nuxt
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/installation/nuxt#themedefaultvariants
  ---
  You can use the `theme.defaultVariants` option in your `nuxt.config.ts` to override the default values for `size` and `color` for all components at once.
  :::

#vue
  :::tip
  ---
  to: https://ui.nuxt.com/docs/getting-started/installation/vue#themedefaultvariants
  ---
  You can use the `theme.defaultVariants` option in your `vite.config.ts` to override the default values for `size` and `color` for all components at once.
  :::
::

### Compound Variants

Some components use the `compoundVariants` property to apply classes when multiple variant conditions are met at the same time.

For example, the [Button](https://ui.nuxt.com/docs/components/button) component uses the `compoundVariants` property to apply classes for a specific `color` and `variant` combination:

You have multiple ways to customize the appearance of Nuxt UI components, you can do it for all components at once or on a per-component basis.

::note
Tailwind Variants uses [`tailwind-merge`](https://github.com/dcastil/tailwind-merge){rel="nofollow"} under the hood to merge classes so you don't have to worry about conflicting classes.
::

::tip
You can explore the theme for each component in two ways:

- Check the `Theme` section in the documentation of each individual component.
- Browse the source code directly in the GitHub repository at [`src/theme`](https://github.com/nuxt/ui/tree/v4/src/theme){rel="nofollow"}.
::

::framework-only
#nuxt
You can override the theme of components globally inside your `app.config.ts` by using the exact same structure as the theme object.

#vue
You can override the theme of components globally inside your `vite.config.ts` by using the exact same structure as the theme object.
::

You can customize the [`slots`](https://ui.nuxt.com/#slots), [`variants`](https://ui.nuxt.com/#variants), [`compoundVariants`](https://ui.nuxt.com/#compound-variants) and [`defaultVariants`](https://ui.nuxt.com/#default-variants) of a component to change the default theme of a component:

::framework-only
#nuxt
  :::div
  
  :::

#vue
  :::div
  
  :::
::

::note
In this example, `font-bold` overrides `font-medium` on all buttons, `size-4` overrides `size-5` class on the leading icon when `size="md"` and `ring-default hover:bg-accented` overrides `ring-accented hover:bg-elevated` when `color="neutral"` and `variant="outline"`. The buttons now defaults to `color="neutral"` and `variant="outline"`.
::

You can also override a component's **slots** using the `ui` prop. This takes priority over both global config and resolved `variants`.

::note
In this example, the `trailingIcon` slot is overwritten with `size-3` even though the `md` size variant would apply a `size-5` class to it.
::

The `class` prop allows you to override the classes of the `root` or `base` slot. This takes priority over both global config and resolved `variants`.

::note
In this example, the `font-bold` class will override the default `font-medium` class on this button.
::

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
::

Some components don't have slots, they are just composed of a single root element. In this case, the theme only defines the `base` slot like the [Container](https://ui.nuxt.com/docs/components/container) component for example:

::code-group
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
::

::warning
Components without slots don't have a [`ui` prop](https://ui.nuxt.com/#ui-prop), only the [`class` prop](https://ui.nuxt.com/#class-prop) is available to override styles.
::

### Variants

Components support `variants`, which allow you to dynamically adjust the styles of different `slots` based on component props.

For example, the [Avatar](https://ui.nuxt.com/docs/components/avatar) component uses a `size` variant to control its appearance:
```

---

## Input

**URL:** llms-txt#input

**Contents:**
- Usage
  - Type
  - Placeholder
  - Color
  - Variant
  - Size
  - Icon
  - Avatar
  - Loading
  - Loading Icon

Use the `v-model` directive to control the value of the Input.

Use the `type` prop to change the input type. Defaults to `text`.

Some types have been implemented in their own components such as [Checkbox](https://ui.nuxt.com/docs/components/checkbox), [Radio](https://ui.nuxt.com/docs/components/radio-group), [InputNumber](https://ui.nuxt.com/docs/components/input-number) etc. and others have been styled like `file` for example.

::callout
---
icon: i-simple-icons-mdnwebdocs
target: _blank
to: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
---
You can check all the available types on the MDN Web Docs.
::

Use the `placeholder` prop to set a placeholder text.

Use the `color` prop to change the ring color when the Input is focused.

::note
The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.
::

Use the `variant` prop to change the variant of the Input.

Use the `size` prop to change the size of the Input.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the Input.

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the Input.

Use the `loading` prop to show a loading icon on the Input.

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

Use the `disabled` prop to disable the Input.

### With clear button

You can put a [Button](https://ui.nuxt.com/docs/components/button) inside the `#trailing` slot to clear the Input.

You can put a [Button](https://ui.nuxt.com/docs/components/button) inside the `#trailing` slot to copy the value to the clipboard.

### With password toggle

You can put a [Button](https://ui.nuxt.com/docs/components/button) inside the `#trailing` slot to toggle the password visibility.

### With password strength indicator

You can use the [Progress](https://ui.nuxt.com/docs/components/progress) component to display the password strength indicator.

### With character limit

You can use the `#trailing` slot to add a character limit to the Input.

### With keyboard shortcut

You can use the [Kbd](https://ui.nuxt.com/docs/components/kbd) component inside the `#trailing` slot to add a keyboard shortcut to the Input.

::note{to="https://ui.nuxt.com/composables/define-shortcuts"}
This example uses the `defineShortcuts` composable to focus the Input when the `` key is pressed.
::

There's no built-in support for masks, but you can use libraries like [maska](https://github.com/beholdr/maska){rel="nofollow"} to mask the Input.

### With floating label

You can use the `#default` slot to add a floating label to the Input.

### Within a FormField

You can use the Input within a [FormField](https://ui.nuxt.com/docs/components/form-field) component to display a label, help text, required indicator, etc.

::tip{to="https://ui.nuxt.com/docs/components/form"}
It also provides validation and error handling when used within a **Form** component.
::

### Within a FieldGroup

You can use the Input within a [FieldGroup](https://ui.nuxt.com/components/field-group) component to group multiple elements together.

When accessing the component via a template ref, you can use the following:

| Name                                                                                                                           | Type                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLInputElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UInput model-value="" />
</template>
```

Example 2 (vue):
```vue
<template>
  <UInput type="file" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UInput placeholder="Search..." />
</template>
```

Example 4 (vue):
```vue
<template>
  <UInput color="neutral" highlight placeholder="Search..." />
</template>
```

---

## ChatPalette

**URL:** llms-txt#chatpalette

**Contents:**
- Usage
- Examples
  - Within a Modal
  - Within ContentSearch
- API
  - Props
  - Slots
- Theme
- Changelog

The ChatPalette component is a structured layout wrapper that organizes [ChatMessages](https://ui.nuxt.com/docs/components/chat-messages) in a scrollable content area and [ChatPrompt](https://ui.nuxt.com/docs/components/chat-prompt) in a fixed bottom section, creating cohesive chatbot interfaces for modals, slideovers, or drawers.

::note{target="_blank" to="https://ai-sdk.dev/docs/getting-started/nuxt"}
These chat components are designed to be used with the **AI SDK v5** from **Vercel AI SDK**.
::

You can use the ChatPalette component inside a [Modal](https://ui.nuxt.com/docs/components/modal)'s content.

### Within ContentSearch

You can use the ChatPalette component conditionally inside [ContentSearch](https://ui.nuxt.com/docs/components/content-search)'s content to display a chatbot interface when a user selects an item.

::component-changelog
::

**Examples:**

Example 1 (unknown):
```unknown
## Examples

::note{target="_blank" to="https://ai-sdk.dev/docs/getting-started/nuxt"}
These chat components are designed to be used with the **AI SDK v5** from **Vercel AI SDK**.
::

### Within a Modal

You can use the ChatPalette component inside a [Modal](https://ui.nuxt.com/docs/components/modal)'s content.
```

Example 2 (unknown):
```unknown
### Within ContentSearch

You can use the ChatPalette component conditionally inside [ContentSearch](https://ui.nuxt.com/docs/components/content-search)'s content to display a chatbot interface when a user selects an item.
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

## Button

**URL:** llms-txt#button

**Contents:**
- Usage
  - Label
  - Color
  - Variant
  - Size
  - Icon
  - Avatar
  - Link
  - Loading
  - Loading Icon

Use the default slot to set the label of the Button.

Use the `label` prop to set the label of the Button.

Use the `color` prop to change the color of the Button.

Use the `variant` prop to change the variant of the Button.

Use the `size` prop to change the size of the Button.

Use the `icon` prop to show an [Icon](https://ui.nuxt.com/docs/components/icon) inside the Button.

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

The `label` as prop or slot is optional so you can use the Button as an icon-only button.

Use the `avatar` prop to show an [Avatar](https://ui.nuxt.com/docs/components/avatar) inside the Button.

The `label` as prop or slot is optional so you can use the Button as an avatar-only button.

You can pass any property from the [Link](https://ui.nuxt.com/docs/components/link#props) component such as `to`, `target`, etc.

When the Button is a link or when using the `active` prop, you can use the `active-color` and `active-variant` props to customize the active state.

You can also use the `active-class` and `inactive-class` props to customize the active state.

::tip
You can configure these styles globally in your `app.config.ts` file under the `ui.button.variants.active` key.

Use the `loading` prop to show a loading icon and disable the Button.

Use the `loading-auto` prop to show the loading icon automatically while the `@click` promise is pending.

This also works with the [Form](https://ui.nuxt.com/docs/components/form) component.

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

Use the `disabled` prop to disable the Button.

Use the `class` prop to override the base styles of the Button.

Use the `ui` prop to override the slots styles of the Button.

::callout
---
icon: i-simple-icons-github
to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13
---
The `Button` component extends the `Link` component. Check out the source code on GitHub.
::

::component-changelog
::

**Examples:**

Example 1 (vue):
```vue
<template>
  <UButton>
    Button
  </UButton>
</template>
```

Example 2 (vue):
```vue
<template>
  <UButton label="Button" />
</template>
```

Example 3 (vue):
```vue
<template>
  <UButton color="neutral">
    Button
  </UButton>
</template>
```

Example 4 (vue):
```vue
<template>
  <UButton color="neutral" variant="outline">
    Button
  </UButton>
</template>
```

---
