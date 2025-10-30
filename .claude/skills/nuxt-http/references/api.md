# Nuxt-Http - Api

**Pages:** 4

---

## Runtime Config

**URL:** https://http.nuxtjs.org/api/runtime-config

**Contents:**
- Runtime Config

The use of runtime config is mandatory in case of using environment variables in production.

The use of runtime config is mandatory in case of using environment variables in production. Otherwise, the values will be hard coded during build and won't change until the next build.

**Examples:**

Example 1 (unknown):
```unknown
export default {  modules: [    '@nuxt/http'  ],  http: {    baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided  },  publicRuntimeConfig: {    http: {      browserBaseURL: process.env.BROWSER_BASE_URL    }  },  privateRuntimeConfig: {    http: {      baseURL: process.env.BASE_URL    }  }}
```

---

## Helpers

**URL:** https://http.nuxtjs.org/api/helpers

**Contents:**
- Helpers
- setBaseURL
- getBaseURL
- setHeader
- setToken
- create

Helpers available on $http instance.

Globally set a base URL to all subsequent requests

Get the value of the base URL

Globally set a header to all subsequent requests

Globally set a Authorization header for all subsequent requests.

Create a new KY instance based on defaults, see create new instance based on defaults for usage.

**Examples:**

Example 1 (unknown):
```unknown
// Set baseURL (both client and server)this.$http.setBaseURL('http://api.example.com')// Change URL only for clientif (process.client) {  this.$http.setBaseURL('http://api.example.com')}// Change URL only for serverif (process.server) {  this.$http.setBaseURL('http://api.example.com')}
```

Example 2 (unknown):
```unknown
// Get baseURL valuethis.$http.getBaseURL()
```

Example 3 (unknown):
```unknown
// Add header `Content-Type: application/json`this.$http.setHeader('Content-Type', 'application/json')
```

Example 4 (unknown):
```unknown
// Adds header: `Authorization: Bearer 123` to all requeststhis.$http.setToken('123', 'Bearer')
```

---

## Hooks

**URL:** https://http.nuxtjs.org/api/hooks

**Contents:**
- Hooks
- onRequest
- onResponse
- onError

Hooks with arguments.

The arguments listed below are those your hook will receive when it's called.

See here for advanced usage.

See here for advanced usage.

If the error originated from a request.

Available properties:

You can optionally return a value or promise that can resolve for fallback response. If hook returns any value, other hooks won't be called.

See here for advanced usage.

**Examples:**

Example 1 (javascript):
```javascript
export default function ({ $http }) {  $http.onRequest(config => {    console.log('Making request to ' + config.url)  })}
```

Example 2 (javascript):
```javascript
export default function ({ $http }) {  $http.onResponse((req, options, res) => {    console.log('Making request to ' + req.url)    console.log('Options :', options)    console.log('Response data :', res.body)  })}
```

Example 3 (javascript):
```javascript
export default function ({ $http, redirect }) {  $http.onError((err) => {    // In case of unauthorized, redirect to a specific page    if (err.statusCode === 401) {      redirect('/401')    }  })}
```

---

## 

**URL:** https://http.nuxtjs.org/api/options

---
