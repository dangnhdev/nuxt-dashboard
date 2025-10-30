---
name: nuxt
description: Use this skill when working with Nuxt.js 4.x - the Vue.js framework for building web applications. Covers directory structure, auto-imports, routing, components, composables, server API, and deployment.
---

# Nuxt Skill

Comprehensive assistance with Nuxt development, generated from official documentation.

## When to Use This Skill

This skill should be triggered when:
- Creating or configuring a Nuxt project (`nuxt.config.ts`)
- Working with Nuxt pages, layouts, or routing
- Using Nuxt composables (useAsyncData, useFetch, useHead, etc.)
- Setting up server routes or API endpoints
- Implementing data fetching and state management
- Configuring SEO and meta tags
- Building components with auto-imports
- Setting up middleware or plugins
- Deploying Nuxt applications
- Debugging Nuxt-specific issues (ESM/CJS compatibility, hydration, etc.)
- Migrating from Nuxt 2 to Nuxt 3

## Key Concepts

### Auto-Imports
Nuxt automatically imports Vue composables, Nuxt composables, and your components, composables, and utilities from specific directories. No explicit imports needed.

### Hybrid Rendering
Nuxt supports multiple rendering modes (SSR, SSG, SPA) and allows you to mix them in the same app using route rules.

### File-Based Routing
Pages are automatically created based on the file structure in the `pages/` directory.

### Universal Deployment
The same Nuxt app can be deployed to various platforms (Node.js, serverless, edge, static hosting) using Nitro presets.

## Quick Reference

### Example 1: Basic Nuxt Config
**Description:** Essential nuxt.config.ts setup with common options

```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // Development configuration
  devtools: { enabled: true },

  // Build configuration
  build: {
    transpile: []
  }
})
```

### Example 2: Data Fetching with useFetch
**Description:** Fetching data with automatic reactivity and SSR support

```vue
<script setup>
// Automatically handles server-side rendering and client-side hydration
const { data: user, pending, error, refresh } = await useFetch('/api/user')

// With key for caching
const { data: posts } = await useFetch('/api/posts', {
  key: 'posts',
  lazy: true  // Don't block navigation
})
</script>

<template>
  <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else>{{ user }}</div>
  </div>
</template>
```

### Example 3: Preview Mode
**Description:** Enable preview mode for draft content with custom check

```ts
export function useMyPreviewMode() {
  const route = useRoute()
  return usePreviewMode({
    shouldEnable: () => {
      return !!route.query.customPreview
    }
  })
}

// In your component
const { enabled, state } = useMyPreviewMode()
```

### Example 4: Accessing Cached Data
**Description:** Use cached data from previous fetches across components

```vue
<script setup>
// Access previously fetched data by its key
const { data } = useNuxtData('posts')

// Refresh specific data
await refreshNuxtData('posts')

// Refresh multiple keys
await refreshNuxtData(['posts', 'user'])

// Clear cached data
clearNuxtData('posts')
</script>
```

### Example 5: Dynamic Head Management
**Description:** Set page meta tags reactively

```vue
<script setup>
const title = ref('My Page')

useHead({
  title: () => title.value,
  meta: [
    { name: 'description', content: 'My page description' },
    { property: 'og:title', content: () => title.value }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com' }
  ]
})
</script>
```

### Example 6: Server API Route
**Description:** Create a server API endpoint in `server/api/`

```ts
// server/api/hello.ts
export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt API!'
  }
})

// With parameters
// server/api/users/[id].ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return {
    user: { id, name: 'John' }
  }
})
```

### Example 7: Request URL Helper
**Description:** Get the current request URL on both server and client

```vue
<script setup>
const url = useRequestURL()

console.log(url.protocol)  // 'https:'
console.log(url.host)      // 'example.com'
console.log(url.pathname)  // '/path/to/page'
console.log(url.search)    // '?query=value'
</script>
```

### Example 8: Component with Nuxt Config
**Description:** Configure component auto-import directories

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/global',
      global: true
    }
  ]
})
```

### Example 9: ESM Module Imports
**Description:** Correct way to import CommonJS modules in ESM context

```ts
// Incorrect - may fail
import lib from 'some-library'

// Correct - with interop
const lib = await import('some-library').then(m => m.default || m)

// Or using mlly for safety
import { interopDefault } from 'mlly'
const lib = interopDefault(await import('some-library'))
```

### Example 10: Optimistic Updates Pattern
**Description:** Update UI immediately while waiting for server confirmation

```vue
<script setup>
const { data: todos } = useNuxtData('todos')

async function addTodo(text) {
  // Optimistic update
  const newTodo = { id: Date.now(), text, done: false }
  todos.value = [...todos.value, newTodo]

  try {
    // Send to server
    await $fetch('/api/todos', { method: 'POST', body: newTodo })

    // Refresh from server to get real ID
    await refreshNuxtData('todos')
  } catch (error) {
    // Rollback on error
    todos.value = todos.value.filter(t => t.id !== newTodo.id)
  }
}
</script>
```

## Reference Files

This skill includes comprehensive documentation in `references/`:

### api.md - API Configuration & Setup
- **nuxt.config.ts**: Complete configuration options including app config, build settings, directories, and experimental features
- **Configuration Options**: Detailed explanation of all config properties (alias, app, build, components, css, dev, etc.)
- Use this for: Setting up your Nuxt project, configuring build options, customizing directories

### composables.md - Built-in Composables
- **useNuxtData**: Access cached data from useFetch/useAsyncData
- **usePreviewMode**: Implement draft/preview functionality
- **refreshNuxtData**: Manually refresh fetched data
- **clearNuxtData/clearNuxtState**: Clear cached data and state
- **useHead**: Manage head tags programmatically
- Use this for: Data fetching patterns, state management, SEO optimization

### concepts.md - Core Concepts & Advanced Topics
- **useRequestURL**: Get current URL on server and client
- **ES Modules**: Understanding ESM vs CommonJS, troubleshooting import issues
- **Module System**: How to migrate modules, handle compatibility
- **Directory Structure**: Understanding node_modules, tsconfig.json
- Use this for: Understanding Nuxt architecture, solving module issues, TypeScript setup

### deployment.md - Deployment Configuration
- Deployment strategies and hosting options
- Platform-specific configurations
- Build and optimization settings
- Use this for: Production builds, deployment to various platforms

### directory_structure.md - File Organization
- Standard Nuxt directories (pages, components, composables, etc.)
- Auto-import behavior for each directory
- File naming conventions
- Use this for: Project structure, organizing code, understanding auto-imports

### getting_started.md - Installation & Setup
- Creating new Nuxt projects
- Installation methods
- Initial configuration
- Basic project setup
- Use this for: Starting new projects, initial setup questions

### server.md - Server Routes & Middleware
- Creating API endpoints
- Server middleware
- Server utilities and helpers
- Nitro configuration
- Use this for: Backend functionality, API development, server-side logic

### other.md - Additional Features
- Miscellaneous Nuxt features
- Advanced use cases
- Utilities and helpers not covered in other sections

## Working with This Skill

### For Beginners
1. **Start here**: Read `getting_started.md` for project setup
2. **Learn structure**: Review `directory_structure.md` to understand where files go
3. **Basic composables**: Check `composables.md` for common patterns like `useFetch` and `useHead`
4. **Configuration**: Look at `api.md` examples for `nuxt.config.ts` setup

### For Building Features
1. **Data fetching**: Use `composables.md` for `useFetch`, `useAsyncData`, and caching patterns
2. **Routing**: Check `directory_structure.md` for pages and layouts
3. **API endpoints**: See `server.md` for creating server routes
4. **SEO**: Look at `useHead` examples in `composables.md`

### For Troubleshooting
1. **Import errors**: Check `concepts.md` ES Modules section for ESM/CJS issues
2. **Configuration issues**: Review `api.md` for correct config options
3. **Module problems**: See Module Compatibility section in `concepts.md`
4. **Build errors**: Look at transpile and build options in `api.md`

### For Deployment
1. **Production build**: Review `deployment.md` for platform-specific settings
2. **Optimization**: Check build configuration in `api.md`
3. **Environment setup**: Look at deployment strategies in `deployment.md`

## Common Patterns

### Pattern 1: Page with Data Fetching
```vue
<script setup>
definePageMeta({
  layout: 'default'
})

const { data: post } = await useFetch(`/api/posts/${useRoute().params.id}`)

useHead({
  title: () => post.value?.title
})
</script>
```

### Pattern 2: Global State with useState
```ts
// composables/useAuth.ts
export const useAuth = () => useState('auth', () => ({
  user: null,
  loggedIn: false
}))
```

### Pattern 3: API Route with Validation
```ts
// server/api/users.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate
  if (!body.email) {
    throw createError({
      statusCode: 400,
      message: 'Email is required'
    })
  }

  // Process
  return { success: true }
})
```

## Resources

### Official Documentation
- [Nuxt Documentation](https://nuxt.com)
- [Nuxt Examples](https://nuxt.com/docs/examples)
- [Nuxt Modules](https://nuxt.com/modules)

### Common Issues
- **ESM/CJS Errors**: See `concepts.md` → ES Modules section
- **Hydration Mismatch**: Check server vs client rendering in your components
- **Module Not Found**: Add to `build.transpile` in nuxt.config.ts
- **Type Errors**: Ensure `.nuxt/tsconfig.json` is properly generated

## Notes

- This skill was automatically generated from official Nuxt 4.x documentation
- All code examples are extracted from official sources
- Examples are tested and follow current best practices
- Nuxt 4.x is currently in development; some features may be experimental

## Updating

To refresh this skill with updated documentation:
1. Re-run the documentation scraper with the same configuration
2. The skill will be rebuilt with the latest information from nuxt.com
3. Review the changelog for breaking changes between Nuxt versions
