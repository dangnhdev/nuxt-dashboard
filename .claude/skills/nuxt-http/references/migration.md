# Nuxt-Http - Migration

**Pages:** 1

---

## Migration Guides

**URL:** https://http.nuxtjs.org/migration-guides/migration

**Contents:**
- Migration Guides
- Differences
- Response body parsing

How to migrate from Axios module

This guide will help you to migrate from Axios Module.

Axios automatically transforms response bodies to JSON, if you wish to keep that behaviour you will

If you are already using $ prefixed shortcuts for making requests that return JSON, you can keep using them.

**Examples:**

Example 1 (javascript):
```javascript
-- const resJson = await this.$axios.get('/url')++ const resJson = await this.$http.$get('/url')
```

Example 2 (javascript):
```javascript
-- const resJson = await this.$axios.get('/url')++ const resJson = await this.$http.get('/url').json()
```

Example 3 (javascript):
```javascript
-- const resJson = await this.$axios.$get('/url')++ const resJson = await this.$http.$get('/url')
```

---
