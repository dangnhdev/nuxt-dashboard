---
name: nuxt-http
description: Guide for using Nuxt HTTP module - HTTP client for Nuxt.js applications. Use when making HTTP requests, API calls, or configuring HTTP interceptors in Nuxt apps.
---

# Nuxt HTTP Module Skill

Universal HTTP client cho Nuxt.js apps, built trên ky-universal và Fetch API. Module này cung cấp cách đơn giản để make HTTP requests với auto parsing, hooks, và helper methods.

## When to Use This Skill

Trigger skill này khi bạn:

**Setup & Installation:**
- Cài đặt @nuxt/http module trong Nuxt project
- Configure HTTP client với base URL, headers, interceptors

**Making HTTP Requests:**
- GET/POST/PUT/DELETE requests trong `asyncData`, `fetch`, components, hoặc Vuex store
- Parse JSON, text, arrayBuffer, hoặc stream responses
- Use $ prefix shortcuts cho auto JSON parsing

**Advanced Features:**
- Setup request/response/error hooks (interceptors)
- Configure base URL và headers globally
- Create custom HTTP instances với different configs
- Handle authentication tokens
- Error handling và retries

**Migration:**
- Migrate từ `@nuxtjs/axios` sang `@nuxt/http`

## Key Concepts

### $ Prefix Shortcuts
Methods bắt đầu với `$` auto-parse response thành JSON sử dụng `destr`:
- `$http.$get()` → returns parsed JSON object
- `$http.get()` → returns Response object (requires manual parsing)

### Response Parsing Methods
Khi use methods không có `$` prefix:
- `.json()` - Parse JSON
- `.text()` - Get text content
- `.arrayBuffer()` - Get binary data
- `.blob()` - Get blob object
- `.formData()` - Parse form data

### Runtime Config (Production Required)
Để use environment variables trong production, MUST configure runtime config:
- `publicRuntimeConfig.http` - Available cả client và server
- `privateRuntimeConfig.http` - Chỉ available server-side

## Quick Reference

### 1. Installation & Setup

**Install module:**
```bash
yarn add @nuxt/http
# or
npm install @nuxt/http
```

**Basic config (nuxt.config.js):**
```javascript
export default {
  modules: ['@nuxt/http'],
  http: {
    baseURL: 'http://localhost:4000'
  }
}
```

**Runtime config (production):**
```javascript
export default {
  modules: ['@nuxt/http'],
  http: {
    baseURL: 'http://localhost:4000' // Fallback
  },
  publicRuntimeConfig: {
    http: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    http: {
      baseURL: process.env.BASE_URL
    }
  }
}
```

### 2. GET Requests với JSON Auto-Parsing

**Simple GET ($ prefix):**
```javascript
// Auto parses response thành JSON
const package = await $http.$get('https://unpkg.com/nuxt/package.json')
console.log(package.name) // "nuxt"
```

**GET với manual parsing:**
```javascript
// Returns Response object
const res = await $http.get('https://unpkg.com/nuxt/package.json')
const responseText = await res.text()
```

**GET với prefixUrl option:**
```javascript
// Calls https://example.com/items
const items = await $http.$get('items', {
  prefixUrl: 'https://example.com'
})
```

### 3. POST Requests

**POST với JSON body:**
```javascript
const data = await $http.$post('http://api.com', { foo: 'bar' })
```

**POST với options:**
```javascript
const data = await $http.$post('http://api.com',
  { foo: 'bar' },
  {
    debug: true,
    retry: 2,
    serverTimeout: 5000
  }
)
```

### 4. Using trong AsyncData

**Basic usage:**
```javascript
async asyncData({ $http }) {
  const res = await $http.get('https://icanhazip.com')
  const ip = await res.text()
  return { ip }
}
```

**GET JSON data:**
```javascript
async asyncData({ $http }) {
  const users = await $http.$get('https://reqres.in/api/users')
  return { users }
}
```

### 5. Using trong Component Methods

**Component method:**
```javascript
methods: {
  async fetchSomething() {
    this.ip = await this.$http.$get('https://icanhazip.com')
  }
}
```

### 6. Using trong Vuex Store

**Store action:**
```javascript
{
  actions: {
    async getIP({ commit }) {
      const ip = await this.$http.$get('https://icanhazip.com')
      commit('SET_IP', ip)
    }
  }
}
```

### 7. Setting Base URL

**Set base URL:**
```javascript
// Both client and server
this.$http.setBaseURL('http://api.example.com')

// Client only
if (process.client) {
  this.$http.setBaseURL('http://api.example.com')
}

// Server only
if (process.server) {
  this.$http.setBaseURL('http://api.example.com')
}
```

**Get base URL:**
```javascript
const baseURL = this.$http.getBaseURL()
```

### 8. Setting Headers

**Set header globally:**
```javascript
// Add header to all requests
this.$http.setHeader('Content-Type', 'application/json')

// Override existing header
this.$http.setHeader('Authorization', '456')

// Remove header
this.$http.setHeader('Content-Type', false)
```

### 9. Setting Authentication Token

**Set token:**
```javascript
// Adds header: Authorization: 123
this.$http.setToken('123')

// Adds header: Authorization: Bearer 123
this.$http.setToken('123', 'Bearer')

// Remove token
this.$http.setToken(false)
```

### 10. Request Hook (Interceptor)

**Log requests (plugins/http.js):**
```javascript
export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
```

**Register plugin:**
```javascript
// nuxt.config.js
export default {
  plugins: ['~/plugins/http']
}
```

### 11. Response Hook

**Log responses (plugins/http.js):**
```javascript
export default function ({ $http }) {
  $http.onResponse((req, options, res) => {
    console.log('Making request to ' + req.url)
    console.log('Options:', options)
    console.log('Response data:', res.body)
  })
}
```

### 12. Error Hook

**Handle errors (plugins/http.js):**
```javascript
export default function ({ $http, redirect }) {
  $http.onError((err) => {
    // Redirect on unauthorized
    if (err.statusCode === 401) {
      redirect('/401')
    }
  })
}
```

**Available error properties:**
- `error.statusCode` (may be undefined)
- `error.response?.data` (may be undefined)

**Return fallback response:**
```javascript
$http.onError(error => {
  if (error.statusCode === 500) {
    alert('Request Error!')
  }
  // Return fallback to avoid rejection
  return { data: 'fallback' }
})
```

### 13. Advanced Hook Examples

**Multiple hooks với retry:**
```javascript
import ky from 'ky-universal'

export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onRetry(async (request, options, errors, retryCount) => {
    const token = await ky('https://example.com/refresh-token')
    options.header.set('Authorization', `Bearer ${token}`)
  })

  $http.onError(error => {
    if (error.statusCode === 500) {
      alert('Request Error!')
    }
  })
}
```

### 14. GET ArrayBuffer

**Download binary data:**
```javascript
const response = await this.$http.get('https://nuxtjs.org/logos/nuxt.svg')
const buffer = await response.arrayBuffer()
console.log('buffer.byteLength =', buffer.byteLength)
```

### 15. GET Stream (Readable Stream)

**Process streaming data:**
```javascript
const response = await this.$http.get('https://example.org')
const reader = response.body.getReader()
let result = ''

reader.read().then(function process({ done, value }) {
  if (done) {
    console.log('Stream complete result =>', result)
    return
  }

  const decoder = new TextDecoder('utf-8')
  result += decoder.decode(value, { stream: true })

  // Read more
  return reader.read().then(process)
})
```

### 16. Create Custom Instance

**Create new instance với custom config:**
```javascript
// Create instance based on $http defaults
const customHttp = this.$http.create({
  prefixUrl: 'https://api.custom.com',
  timeout: 10000
})

// Use it
const data = await customHttp.$get('/endpoint')
```

### 17. Migration từ Axios

**Migrate $ prefix methods:**
```javascript
// Before (axios)
const resJson = await this.$axios.$get('/url')

// After (http)
const resJson = await this.$http.$get('/url')
```

**Migrate non-prefixed methods:**
```javascript
// Before (axios) - auto JSON parsing
const resJson = await this.$axios.get('/url')

// After (http) - manual parsing
const resJson = await this.$http.get('/url').json()
```

### 18. TypeScript Support

**Add types (tsconfig.json):**
```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxt/http"
    ]
  }
}
```

## Reference Files

Skill này includes comprehensive documentation trong `references/`:

### api.md (4 pages)
- **Runtime Config** - Configure baseURL và browserBaseURL với environment variables
- **Helpers** - `setBaseURL()`, `getBaseURL()`, `setHeader()`, `setToken()`, `create()`
- **Hooks** - `onRequest()`, `onResponse()`, `onError()` với arguments và usage examples
- **Options** - Module configuration options

### getting_started.md (4 pages)
- **Setup** - Installation, module registration, TypeScript config
- **Usage** - Making requests, asyncData usage, component methods, Vuex store
- **Advanced** - Hooks registration, header helpers, creating custom instances
- **HTTP Methods** - Complete reference cho `$get`, `$post`, `$put`, `$delete`, `$patch`, `$head`, và non-prefixed versions

### migration.md (1 page)
- **Migration Guides** - How to migrate từ `@nuxtjs/axios` module
- **Differences** - Response body parsing behavior changes
- **Code examples** - Before/after migration examples

### other.md (1 page)
- **Introduction** - Overview của module, features list
- **Links** - Official documentation và resources

## Working with This Skill

### For Beginners
1. Start with **getting_started.md** → Setup section
2. Try basic GET request với `$http.$get()` trong component
3. Learn về `$` prefix (auto JSON parsing)
4. Practice trong `asyncData`, component methods, store actions

### For Intermediate Users
1. Read **api.md** → Helpers section
2. Setup `setBaseURL()` và `setHeader()` globally
3. Use **getting_started.md** → Advanced → Hooks
4. Handle errors với `onError()` hook
5. Configure runtime config cho production

### For Advanced Users
1. Study **api.md** → Hooks section
2. Implement authentication flow với hooks
3. Create custom instances với `create()`
4. Setup retry logic với `onRetry()`
5. Handle streaming responses
6. Optimize với runtime config

### Quick Navigation
- **Basic requests?** → Quick Reference #2-3
- **AsyncData?** → Quick Reference #4
- **Component methods?** → Quick Reference #5
- **Store actions?** → Quick Reference #6
- **Headers/tokens?** → Quick Reference #8-9
- **Interceptors?** → Quick Reference #10-12
- **Migration?** → Quick Reference #17, migration.md
- **TypeScript?** → Quick Reference #18

## Common Patterns

### Authentication Flow
```javascript
// plugins/http.js
export default function ({ $http, store, redirect }) {
  // Add token to requests
  $http.onRequest(config => {
    const token = store.state.auth.token
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`)
    }
  })

  // Handle 401 errors
  $http.onError((err) => {
    if (err.statusCode === 401) {
      store.commit('auth/LOGOUT')
      redirect('/login')
    }
  })
}
```

### API Wrapper Module
```javascript
// plugins/api.js
export default function ({ $http }, inject) {
  const api = {
    async getUsers() {
      return await $http.$get('/api/users')
    },
    async createUser(data) {
      return await $http.$post('/api/users', data)
    }
  }

  inject('api', api)
}

// Usage trong component
async asyncData({ $api }) {
  const users = await $api.getUsers()
  return { users }
}
```

## Key Differences từ Axios

| Feature | @nuxtjs/axios | @nuxt/http |
|---------|---------------|------------|
| Response parsing | Auto JSON | Manual hoặc use `$` prefix |
| Base library | axios | ky-universal + Fetch API |
| Bundle size | Larger | Smaller |
| API style | `$axios.$get()` | `$http.$get()` |
| Manual parsing | Not needed | `.json()`, `.text()`, etc. |

## Best Practices

1. **Use $ prefix** cho JSON responses (most common case)
2. **Configure runtime config** khi deploy production
3. **Setup error hooks** trong plugin cho global error handling
4. **Use `setBaseURL()`** thay vì hard-code URLs
5. **Create plugin wrappers** cho API endpoints thay vì scatter requests
6. **Handle errors** với `onError()` hook thay vì try/catch everywhere
7. **TypeScript:** Add types vào `tsconfig.json`

## Resources

### Official Links
- 📖 Documentation: https://http.nuxtjs.org/
- 🔧 ky-universal: https://github.com/sindresorhus/ky-universal
- 🌐 Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### references/
Organized documentation extracted từ official sources:
- Detailed explanations với rationale
- Complete code examples với language annotations
- Original documentation links
- Quick navigation tables of contents

### scripts/
Add helper scripts here cho common automation tasks.

### assets/
Add templates, boilerplate, hoặc example projects here.

## Notes

- Module này là alternative to Axios module
- Uses Fetch API under the hood (modern, lightweight)
- Smart response parsing với `destr` (safe JSON parsing)
- Auto TypeScript support
- Universal (works cả client và server side)

## Updating

To refresh skill với updated documentation:
1. Re-run scraper với same configuration
2. Skill sẽ rebuild với latest information từ official docs
