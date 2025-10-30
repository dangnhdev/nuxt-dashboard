---
name: nuxt-ui
description: Guide for using Nuxt UI - a comprehensive UI library with production-ready components for Vue and Nuxt applications. Use when building Nuxt apps with UI components, theming, or composables.
---

# Nuxt-Ui Skill

Comprehensive assistance với Nuxt UI development, generated từ official documentation.

## When to Use This Skill

Trigger skill này khi:
- Building hoặc working với Nuxt/Vue UI components
- Implementing forms, inputs, menus, toasts, alerts
- Setting up theming và color modes
- Cần composables như `useToast`, `useColorMode`
- Styling với Tailwind CSS trong Nuxt UI context
- Debugging Nuxt UI components
- Tạo carousels, navigation, layouts

## Quick Reference

### Basic Components

**Alert với title và description**
```vue
<template>
  <UAlert
    title="Heads up!"
    description="You can change the primary color in your app config."
  />
</template>
```

**Alert với icon và actions**
```vue
<template>
  <UAlert
    title="Heads up!"
    icon="i-lucide-terminal"
    :close="true"
  />
</template>
```

### Form Components

**InputMenu - Combobox với autocomplete**
```vue
<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
</script>

<template>
  <UInputMenu
    v-model="selected"
    :items="items"
    placeholder="Select status..."
  />
</template>
```

**InputMenu với objects và icons**
```vue
<script setup lang="ts">
import type { InputMenuItem } from '@nuxt/ui'

const items = ref<InputMenuItem[]>([
  { label: 'Backlog', icon: 'i-lucide-inbox' },
  { label: 'Todo', icon: 'i-lucide-circle' },
  { label: 'In Progress', icon: 'i-lucide-loader' },
  { label: 'Done', icon: 'i-lucide-check' }
])
</script>

<template>
  <UInputMenu :items="items" />
</template>
```

**InputNumber với min/max**
```vue
<template>
  <UInputNumber
    v-model="quantity"
    :min="0"
    :max="100"
    :step="5"
  />
</template>
```

### Toast Notifications

**Basic toast usage**
```vue
<script setup lang="ts">
const toast = useToast()

function showSuccess() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

**Update existing toast**
```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string) {
  toast.update(id, {
    title: 'Updated',
    description: 'This toast has been updated.'
  })
}
</script>
```

### User Component

**User với name, description và avatar**
```vue
<template>
  <UUser
    name="John Doe"
    description="Software Engineer"
    :avatar="{ src: '/avatar.jpg' }"
  />
</template>
```

### Keyboard Shortcut

**Kbd component cho shortcuts**
```vue
<template>
  <div>
    Press <UKbd>K</UKbd> to open search
    <UKbd value="meta" />
  </div>
</template>
```

### Carousel

**Basic carousel với items**
```vue
<script setup lang="ts">
const items = ref([1, 2, 3, 4, 5])
</script>

<template>
  <UCarousel
    :items="items"
    :arrows="true"
    :dots="true"
    class="w-full"
  >
    <template #default="{ item }">
      <div class="p-4">
        Slide {{ item }}
      </div>
    </template>
  </UCarousel>
</template>
```

**Carousel với autoplay**
```vue
<template>
  <UCarousel
    :items="items"
    :autoplay="{ delay: 3000 }"
    :loop="true"
  />
</template>
```

### Color Mode Integration

**Custom color mode toggle**
```vue
<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()
</script>

<template>
  <UButton @click="colorMode = colorMode === 'dark' ? 'light' : 'dark'">
    Toggle theme
  </UButton>
</template>
```

## Reference Files

Skill này includes comprehensive documentation trong `references/`:

### `components.md`
- **45 pages** covering all UI components
- **InputMenu** - Combobox với autocomplete, multiple selection, fetched items
- **Alert** - Notifications với title, description, icon, avatar, actions
- **InputNumber** - Number inputs với min/max, step, orientation
- **User** - User profile display với avatar, name, description
- **Kbd** - Keyboard shortcut display
- **Toast** - Toast notifications (xem `composables.md` cho usage)

### `composables.md`
- **5 pages** covering composables và utilities
- **useToast** - Toast notification management (`add`, `update`, `remove`, `clear`)
- **Carousel** - Advanced carousel component với plugins (autoplay, auto-scroll, fade)
- Usage patterns và best practices

### `getting_started.md`
- **3 pages** về installation và configuration
- Setup cho Vue projects
- Vite plugin configuration
- Theme customization options
- Color mode integration
- Continuous releases với pkg.pr.new

### `theming.md`
- Theming system và customization
- Color configuration
- Variants và styling
- Design tokens

### `other.md`
- Additional documentation
- Edge cases và advanced patterns
- Integration guides

## Working with This Skill

### For Beginners

1. **Start với `getting_started.md`** - Installation và basic setup
2. **Explore common components**: Alert, Button, Input components
3. **Try `useToast` composable** - Easy way để add notifications
4. **Use built-in color mode** - ColorModeButton, ColorModeSwitch

### For Intermediate Users

1. **Explore `components.md`** - Deep dive vào specific components
2. **Customize với `ui` prop** - Override component styles
3. **Use advanced InputMenu features** - Multiple selection, fetched items, filtering
4. **Implement carousels** - Với autoplay, arrows, dots

### For Advanced Users

1. **Read `theming.md`** - Complete theming system
2. **Use template refs** - Access component APIs directly
3. **Customize theme** - Via `vite.config.ts` options
4. **Integrate với @nuxt/content** - Build documentation sites

## Key Concepts

### Component Structure
- **Props** - Configure component behavior
- **Slots** - Custom content rendering
- **UI prop** - Override internal styles với Tailwind classes
- **Color/Variant** - Consistent theming across components

### Form Components
- **v-model** - Two-way binding
- **default-value** - Uncontrolled initial state
- **Items** - Arrays hoặc objects với specific properties
- **Multiple selection** - Tags-based UI

### Toast System
- **Max 5 toasts** - Oldest removed automatically
- **Add/Update/Remove** - Full control over notifications
- **200ms delay** - On remove for exit animations
- **Wrap with App component** - Required for toasts to work

### Carousel Plugins
- **Autoplay** - Auto-advance slides
- **Auto Scroll** - Continuous scrolling
- **Auto Height** - Dynamic height adjustment
- **Class Names** - Toggle classes on slides
- **Fade** - Fade transitions
- **Wheel Gestures** - Mouse wheel navigation

### Theme Customization
- **Color aliases** - `primary`, `secondary`, `success`, etc.
- **Transitions** - Enable/disable globally
- **Default variants** - Set default color and size
- **Prefix** - Change component prefix (default: `U`)

## Common Patterns

### Form với validation
Combine InputMenu với form validation:
```vue
<UInputMenu
  v-model="status"
  :items="statuses"
  :color="hasError ? 'error' : 'primary'"
/>
```

### Toast với actions
```vue
toast.add({
  title: 'File uploaded',
  actions: [{
    label: 'View',
    click: () => viewFile()
  }]
})
```

### Responsive carousel
Control items visible:
```vue
<UCarousel :items="items">
  <template #default="{ item }">
    <div class="basis-full md:basis-1/2 lg:basis-1/3">
      {{ item }}
    </div>
  </template>
</UCarousel>
```

### Dynamic theming
```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    UI({
      theme: {
        colors: ['primary', 'secondary', 'success'],
        defaultVariants: {
          color: 'primary',
          size: 'lg'
        }
      }
    })
  ]
})
```

## Resources

### Official Links
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Reka UI](https://reka-ui.com) - Underlying component library
- [Tailwind CSS](https://tailwindcss.com)

### Helper Tools
- Add scripts trong `scripts/` cho automation tasks
- Add templates trong `assets/` cho boilerplate code
- Use `view` command để read reference files

## Notes

- Skill generated từ official documentation
- Code examples include proper language detection
- Reference files preserve structure từ source docs
- Quick reference patterns extracted từ common use cases
- Components support full TypeScript typing

## Updating

To refresh skill với updated documentation:
1. Re-run scraper với same configuration
2. Skill will be rebuilt với latest information
3. Check changelog trong component documentation
