# Nuxt-Http - Getting Started

**Pages:** 4

---

## Setup

**URL:** https://http.nuxtjs.org/getting-started/setup

**Contents:**
- Setup
- Install
- Configure
- TypeScript

How to setup your module.

Checkout the Nuxt documentation for more information about installing and using modules.

Add @nuxt/http dependency to your project:

Then add it to the modules section in your nuxt.config.js:

Add a http object to your nuxt.config.js to configure global options which will be applied to all requests

Add the types to your "types" array in tsconfig.json after the @nuxt/types (Nuxt 2.9.0+) or @nuxt/vue-app entry

Because of the way Nuxt works the $http property on the context has to be merged into the Nuxt Context interface via declaration merging. Adding @nuxt/http to your types will import the types from the package and make typescript aware of the additions to the Context interface.

**Examples:**

Example 1 (unknown):
```unknown
yarn add @nuxt/http
```

Example 2 (unknown):
```unknown
npm install @nuxt/http
```

Example 3 (unknown):
```unknown
export default {  modules: ['@nuxt/http']}
```

Example 4 (unknown):
```unknown
export default {  modules: [    '@nuxt/http',  ],  http: {    // proxyHeaders: false  }}
```

---

## Usage

**URL:** https://http.nuxtjs.org/getting-started/usage

**Contents:**
- Usage
- Making Requests
- Using in asyncData
- Using in Component Methods
- Using in Store

How to use this module.

See the list of available HTTP methods.

Calling a HTTP methods returns a Promise that resolves to a Response object or rejects in case of network errors.

You can use methods to convert response stream into usable data:

See ky docs for all available options.

Example: GET JSON data

In most of the case, you want to get the JSON response. You can use $ prefixed shortcut that smartly parses response using destr.

Alternatively for other response type, you can use the methods mentioned above:

Example: GET data as text

Example: GET data as arrayBuffer

Example: GET data as readable stream

Example: POST with JSON body

For asyncData and fetch you can access instance from context:

Example: GET JSON data using $ helper

When you have access to this, you can use this.$http:

For store actions you can also use this.$http:

**Examples:**

Example 1 (javascript):
```javascript
const package = await $http.$get('https://unpkg.com/nuxt/package.json')console.log(package.name) // log "nuxt"
```

Example 2 (javascript):
```javascript
const res = await $http.get('https://unpkg.com/nuxt/package.json')const responseText = await res.text()
```

Example 3 (javascript):
```javascript
const response = await this.$http.get('https://nuxtjs.org/logos/nuxt.svg')const buffer = await response.arrayBuffer()console.log('buffer.byteLength = ', buffer.byteLength)
```

Example 4 (javascript):
```javascript
const response = await this.$http.get('https://example.org')const reader = response.body.getReader()let result = ''reader.read().then(function process ({ done, value }) {  if (done) {    console.log('Stream complete result =>', result)    return  }  const decoder = new TextDecoder('utf-8')  result += decoder.decode(value, { stream: true })  // Read some more, and call this function again  return reader.read().then(process)})
```

---

## Advanced

**URL:** https://http.nuxtjs.org/getting-started/advanced

**Contents:**
- Advanced
- Hooks
  - Register Hooks
- Header Helpers
  - setHeader(name, value)
  - setToken(token, type)
- Create new instance based on defaults

Hooks can be used to globally intercept HTTP request and responses. E.g. if you wish to log errors, display a toast on error or need to dynamically modify requests.

See the API reference for the list of lifecycle hooks the HTTP module provides

These functions don't have to return anything by default.

For registering hooks, you have to create a nuxt plugin:

Globally set a header to all subsequent requests.

Globally set Authorization header to all subsequent requests.

If you need to create your own ky instance which based on $http defaults, you can use the create(options) method.

**Examples:**

Example 1 (unknown):
```unknown
export default {  plugins: [    '~/plugins/http'  ]}
```

Example 2 (python):
```python
import ky from 'ky-universal'export default function ({ $http }) {  $http.onRequest(config => {    console.log('Making request to ' + config.url)  })  $http.onRetry(async (request, options, errors, retryCount) => {    const token = await ky('https://example.com/refresh-token')    options.header.set('Authorization', `Bearer ${token}`)  })  $http.onError(error => {    if (error.statusCode === 500) {      alert('Request Error!')    }    // Tip: error.response will be undefined if the connection dropped to the server    // Tip: You can use error.response.data to get response message    // Tip: You can return an object or Promise as fallback response to avoid rejection  })}
```

Example 3 (unknown):
```unknown
// Add header `Authorization: 123` to all requeststhis.$http.setHeader('Authorization', '123')// Override `Authorization` header with new valuethis.$http.setHeader('Authorization', '456')// Add header `Content-Type: application/x-www-form-urlencoded`this.$http.setHeader('Content-Type', 'application/x-www-form-urlencoded')// Remove default Content-Type headerthis.$http.setHeader('Content-Type', false)
```

Example 4 (unknown):
```unknown
// Adds header: `Authorization: 123` to all requeststhis.$http.setToken('123')// Overrides `Authorization` header with new valuethis.$http.setToken('456')// Adds header: `Authorization: Bearer 123` to all requeststhis.$http.setToken('123', 'Bearer')// Removes default Authorization headerthis.$http.setToken(false)
```

---

## HTTP Methods

**URL:** https://http.nuxtjs.org/getting-started/http-methods

**Contents:**
- HTTP Methods
  - $get
  - $post
  - $put
  - $delete
  - $patch
  - $head
  - get
  - post
  - put

See here to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

See here to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

See here to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

See here to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

See here to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

These methods corresponds to the similar named HTTP/1.1 methods.

**Examples:**

Example 1 (javascript):
```javascript
const package = await $http.$get('https://unpkg.com/nuxt/package.json')
```

Example 2 (javascript):
```javascript
// With prefixUrl option to call `https://example.com/items`const items = await $http.$get('items', { prefixUrl: 'https://example.com' })
```

Example 3 (javascript):
```javascript
const data = await $http.$post('http://api.com', { foo: 'bar' })
```

Example 4 (javascript):
```javascript
// With some additional optionsconst data = await $http.$post('http://api.com', { foo: 'bar' }, {  debug: true,  retry: 2,  serverTimeout: 5000})
```

---
