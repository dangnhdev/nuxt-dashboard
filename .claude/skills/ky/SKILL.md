# Ky HTTP Client

Ky - Tiny and elegant HTTP client based on the Fetch API for modern browsers, Node.js, Bun, and Deno. Use for simpler fetch API, method shortcuts, automatic retries, JSON handling, timeouts, hooks, and TypeScript support.

## When to Use This Skill

Use this skill when working with:
- HTTP requests using Ky library
- Fetch API alternatives with better defaults
- JSON API requests with automatic error handling
- Request retries and timeout configuration
- Request/response hooks and interceptors
- Upload/download progress tracking
- TypeScript-safe HTTP clients

## Core API

### Basic Usage

```js
import ky from 'ky';

// Simple GET request with JSON response
const user = await ky('/api/user').json();

// POST request with JSON body
const result = await ky.post('https://example.com', {
  json: {foo: true}
}).json();

// TypeScript with type parameter
const user = await ky<User>('/api/user').json();
const user2 = await ky('/api/user').json<User>();
```

### HTTP Methods

```js
// Method shortcuts
await ky.get(url, options);
await ky.post(url, options);
await ky.put(url, options);
await ky.patch(url, options);
await ky.delete(url, options);
await ky.head(url, options);
```

### Response Body Methods

```js
const json = await ky(url).json();
const text = await ky(url).text();
const blob = await ky(url).blob();
const arrayBuffer = await ky(url).arrayBuffer();
const formData = await ky(url).formData();
const bytes = await ky(url).bytes(); // When supported
```

## Configuration Options

### JSON Requests

```js
await ky.post(url, {
  json: {
    name: 'John',
    age: 30
  }
});
```

### Search Parameters

```js
await ky(url, {
  searchParams: {
    page: 1,
    limit: 10
  }
});

// Or with URLSearchParams
await ky(url, {
  searchParams: new URLSearchParams({page: '1'})
});
```

### Prefix URL

```js
const api = ky.create({prefixUrl: 'https://api.example.com'});
await api.get('users/123'); // https://api.example.com/users/123

// Or per request
await ky('users', {prefixUrl: '/api'});
```

### Timeout

```js
await ky(url, {
  timeout: 5000 // 5 seconds
});

// Disable timeout
await ky(url, {
  timeout: false
});
```

### Retry Configuration

```js
await ky(url, {
  retry: {
    limit: 3,
    methods: ['get', 'post'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    afterStatusCodes: [413, 429, 503],
    backoffLimit: 3000,
    delay: attemptCount => 0.3 * (2 ** (attemptCount - 1)) * 1000,
    jitter: true, // Add random jitter to prevent thundering herd
    retryOnTimeout: true
  }
});

// Simple retry limit
await ky(url, {retry: 3});

// Custom retry logic
await ky(url, {
  retry: {
    limit: 3,
    shouldRetry: ({error, retryCount}) => {
      if (error instanceof HTTPError) {
        const status = error.response.status;
        if (status === 429 && retryCount <= 2) return true;
        if (status >= 400 && status < 500) return false;
      }
      return undefined; // Use default retry logic
    }
  }
});
```

## Hooks

### beforeRequest Hook

```js
await ky(url, {
  hooks: {
    beforeRequest: [
      (request, options, {retryCount}) => {
        // Modify request before sending
        if (retryCount === 0) {
          request.headers.set('Authorization', 'token initial-token');
        }
      }
    ]
  }
});

// Return Request to replace outgoing request
hooks: {
  beforeRequest: [
    request => {
      const modifiedRequest = new Request(request, {
        headers: new Headers(request.headers)
      });
      return modifiedRequest;
    }
  ]
}

// Return Response to mock/cache
hooks: {
  beforeRequest: [
    () => {
      if (cachedResponse) return cachedResponse;
    }
  ]
}
```

### beforeRetry Hook

```js
await ky(url, {
  hooks: {
    beforeRetry: [
      async ({request, options, error, retryCount}) => {
        // Refresh token before retry
        const token = await ky('https://example.com/refresh-token').text();
        request.headers.set('Authorization', `token ${token}`);
      }
    ]
  }
});

// Modify request URL
hooks: {
  beforeRetry: [
    async ({request, error}) => {
      if (error.response) {
        const body = await error.response.json();
        const url = new URL(request.url);
        url.searchParams.set('processId', body.processId);
        return new Request(url, request);
      }
    }
  ]
}

// Return cached response instead of retrying
hooks: {
  beforeRetry: [
    ({error, retryCount}) => {
      if (retryCount > 1 && cachedResponse) {
        return cachedResponse;
      }
    }
  ]
}

// Stop retry
hooks: {
  beforeRetry: [
    () => {
      if (shouldStop) return ky.stop;
    }
  ]
}
```

### beforeError Hook

```js
await ky(url, {
  hooks: {
    beforeError: [
      async error => {
        const {response} = error;
        if (response) {
          const body = await response.json();
          error.name = 'APIError';
          error.message = `${body.message} (${response.status})`;
        }
        return error;
      },

      // Different error based on retry count
      (error, {retryCount}) => {
        if (retryCount === error.options.retry.limit) {
          error.message = `${error.message} (failed after ${retryCount} retries)`;
        }
        return error;
      }
    ]
  }
});
```

### afterResponse Hook

```js
await ky(url, {
  hooks: {
    afterResponse: [
      (_request, _options, response) => {
        // Log response
        console.log(response);

        // Return modified response
        return new Response('Modified', {status: 200});
      },

      // Retry with fresh token on 403
      async (request, options, response) => {
        if (response.status === 403) {
          const token = await ky('https://example.com/token').text();
          request.headers.set('Authorization', `token ${token}`);
          return ky(request, options);
        }
      },

      // Show notification on last retry
      (request, options, response, {retryCount}) => {
        if (response.status >= 500 && retryCount === options.retry.limit) {
          showNotification('Request failed');
        }
      }
    ]
  }
});
```

## Progress Tracking

### Download Progress

```js
await ky(url, {
  onDownloadProgress: (progress, chunk) => {
    console.log(`${progress.percent * 100}%`);
    console.log(`${progress.transferredBytes} of ${progress.totalBytes} bytes`);
  }
});
```

### Upload Progress

```js
await ky.post(url, {
  body: largeFile,
  onUploadProgress: (progress, chunk) => {
    console.log(`${progress.percent * 100}%`);
    console.log(`${progress.transferredBytes} of ${progress.totalBytes} bytes`);
  }
});
```

## Creating Instances

### ky.create()

Create new instance with complete new defaults:

```js
const api = ky.create({
  prefixUrl: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer token'
  },
  timeout: 10000,
  retry: 3
});

await api.get('users/123');
```

### ky.extend()

Extend existing instance (inherits parent defaults):

```js
const api = ky.create({
  prefixUrl: 'https://api.example.com',
  headers: {unicorn: 'rainbow'}
});

const usersApi = api.extend({
  prefixUrl: '/api/users',
  headers: {rainbow: undefined} // Remove header
});

// With function to reference parent defaults
const extended = api.extend(options => ({
  prefixUrl: `${options.prefixUrl}/v2`
}));
```

## Form Data

### Multipart Form Data

```js
const formData = new FormData();
formData.append('file', fileBlob);
formData.append('name', 'example');

await ky.post(url, {body: formData});
```

### URL Encoded Form Data

```js
const searchParams = new URLSearchParams();
searchParams.set('email', 'user@example.com');
searchParams.set('password', 'secret');

await ky.post(url, {body: searchParams});
```

### Modifying FormData in Hooks

```js
await ky.post(url, {
  body: formData,
  hooks: {
    beforeRequest: [
      request => {
        const newFormData = new FormData();
        for (const [key, value] of formData) {
          newFormData.set(key.toLowerCase(), value);
        }

        // Delete Content-Type to let Request regenerate with correct boundary
        request.headers.delete('content-type');
        return new Request(request, {body: newFormData});
      }
    ]
  }
});
```

## Error Handling

### HTTPError

```js
import ky, {HTTPError} from 'ky';

try {
  await ky('https://example.com').json();
} catch (error) {
  if (error instanceof HTTPError) {
    console.log(error.response.status); // 404
    console.log(error.request); // Request object
    console.log(error.options); // Normalized options

    // IMPORTANT: Consume or cancel body to prevent resource leaks
    const errorJson = await error.response.json();
    // OR
    await error.response.body?.cancel();
  }
}
```

### TimeoutError

```js
import ky, {TimeoutError} from 'ky';

try {
  await ky(url, {timeout: 1000});
} catch (error) {
  if (error instanceof TimeoutError) {
    console.log('Request timed out');
  }
}
```

### Throw HTTP Errors

```js
// Disable throwing errors for non-2xx responses
await ky(url, {
  throwHttpErrors: false
});
```

## Advanced Features

### Request Cancellation

```js
const controller = new AbortController();
const {signal} = controller;

setTimeout(() => controller.abort(), 5000);

try {
  await ky(url, {signal}).text();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request aborted');
  }
}
```

### Custom JSON Parsing

```js
import bourne from '@hapijs/bourne';

await ky(url, {
  parseJson: text => bourne(text)
}).json();

// With reviver
await ky(url, {
  parseJson: text => JSON.parse(text, (key, value) => {
    if (key === 'date') return new Date(value);
    return value;
  })
}).json();
```

### Custom JSON Stringifying

```js
await ky.post(url, {
  json: data,
  stringifyJson: data => JSON.stringify(data, (key, value) => {
    if (key.endsWith('_at')) {
      return new Date(value).toISOString();
    }
    return value;
  })
});
```

### Context for Hooks

```js
const api = ky.create({
  hooks: {
    beforeRequest: [
      (request, options) => {
        const {token} = options.context;
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      }
    ]
  }
});

await api(url, {
  context: {token: 'secret123'}
});

// Context is shallow merged
const instance = ky.create({
  context: {a: 1, b: {nested: true}}
});

const extended = instance.extend({
  context: {b: {updated: true}, c: 3}
});
// Result: {a: 1, b: {updated: true}, c: 3}
```

### Custom Fetch Implementation

```js
import fetch from 'isomorphic-unfetch';

await ky(url, {fetch});
```

## Node.js Specific

### Proxy Support (Node.js 24.5+)

```sh
NODE_USE_ENV_PROXY=1 HTTP_PROXY=http://proxy:8080 node app.js
# or
node --use-env-proxy app.js
```

### ProxyAgent

```js
import {ProxyAgent} from 'undici';

const proxyAgent = new ProxyAgent('http://proxy.example.com:8080');

await ky(url, {
  // @ts-expect-error
  dispatcher: proxyAgent
}).json();
```

### EnvHttpProxyAgent

```js
import {EnvHttpProxyAgent} from 'undici';

const api = ky.extend({
  // @ts-expect-error
  dispatcher: new EnvHttpProxyAgent()
});
```

### HTTP/2 Support

```js
import {Agent, Pool} from 'undici';

const agent = new Agent({
  factory(origin, options) {
    return new Pool(origin, {...options, allowH2: true});
  }
});

await ky(url, {
  // @ts-expect-error
  dispatcher: agent
}).json();
```

## Common Patterns

### API Client with Base Configuration

```js
const api = ky.create({
  prefixUrl: 'https://api.example.com',
  timeout: 10000,
  retry: {
    limit: 2,
    statusCodes: [408, 500, 502, 503, 504]
  },
  hooks: {
    beforeRequest: [
      request => {
        const token = localStorage.getItem('token');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      }
    ],
    beforeError: [
      async error => {
        if (error.response) {
          const {message} = await error.response.json();
          error.message = message;
        }
        return error;
      }
    ]
  }
});

// Use the client
const users = await api.get('users').json<User[]>();
const user = await api.post('users', {json: newUser}).json<User>();
```

### Automatic Token Refresh

```js
const api = ky.create({
  prefixUrl: 'https://api.example.com',
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          // Refresh token
          const {token} = await ky('https://api.example.com/refresh', {
            json: {refreshToken: localStorage.getItem('refreshToken')}
          }).json();

          localStorage.setItem('token', token);

          // Retry original request
          request.headers.set('Authorization', `Bearer ${token}`);
          return ky(request, options);
        }
      }
    ]
  }
});
```

### Rate Limiting with Retry-After

```js
await ky(url, {
  retry: {
    limit: 5,
    statusCodes: [429],
    afterStatusCodes: [429],
    maxRetryAfter: 30000 // Max 30 seconds wait
  }
});
```

### Request Logging

```js
const api = ky.create({
  hooks: {
    beforeRequest: [
      request => {
        console.log(`→ ${request.method} ${request.url}`);
      }
    ],
    afterResponse: [
      (request, options, response) => {
        console.log(`← ${request.method} ${request.url} ${response.status}`);
      }
    ]
  }
});
```

## TypeScript Support

```ts
interface User {
  id: number;
  name: string;
}

interface ApiError {
  message: string;
  code: string;
}

// Type parameter on ky call
const user = await ky<User>('/api/user').json();

// Type parameter on .json()
const user2 = await ky('/api/user').json<User>();

// HTTPError with typed response
try {
  await ky<User>('/api/user').json();
} catch (error) {
  if (error instanceof HTTPError) {
    const apiError = await error.response.json<ApiError>();
    console.log(apiError.message);
  }
}

// Custom options type
interface MyOptions extends Options {
  customFlag?: boolean;
}

const api = ky.create<MyOptions>({
  customFlag: true
});
```

## Key Differences from Other Libraries

### vs fetch
- Method shortcuts (ky.post vs fetch with method option)
- Automatic error throwing for non-2xx
- Built-in retries
- JSON shortcut
- Timeout support
- Hooks system

### vs axios
- Smaller bundle size
- Native Fetch API based
- Works in all modern environments
- No transformers/interceptors (uses hooks instead)
- TypeScript-first design

### vs got
- Works in browser
- Smaller size
- Built on Fetch API (more stable)
- Same maintainers

## Best Practices

1. **Create instances for different APIs**
   ```js
   const githubApi = ky.create({prefixUrl: 'https://api.github.com'});
   const internalApi = ky.create({prefixUrl: '/api'});
   ```

2. **Always handle HTTPError body to prevent leaks**
   ```js
   try {
     await ky(url).json();
   } catch (error) {
     if (error instanceof HTTPError) {
       await error.response.json(); // or .body?.cancel()
     }
   }
   ```

3. **Use beforeError hook for consistent error formatting**
   ```js
   hooks: {
     beforeError: [
       async error => {
         if (error.response) {
           error.message = await error.response.text();
         }
         return error;
       }
     ]
   }
   ```

4. **Configure retries based on idempotency**
   ```js
   // Safe for GET/PUT/DELETE
   retry: {methods: ['get', 'put', 'delete']}

   // Careful with POST (may not be idempotent)
   retry: {methods: ['get']}
   ```

5. **Use context for hook configuration**
   ```js
   await api(url, {
     context: {skipAuth: true}
   });
   ```

6. **Set appropriate timeouts**
   ```js
   const api = ky.create({
     timeout: 10000, // 10s default
     retry: {
       limit: 2,
       retryOnTimeout: true
     }
   });
   ```

## Common Issues

### Issue: FormData boundary missing after modification
**Solution:** Delete Content-Type header before creating new Request with modified FormData

### Issue: Duplicate retries in Chromium for 408
**Solution:** Either set `keepalive: false` or remove 408 from retry status codes

### Issue: Memory leak when catching HTTPError
**Solution:** Always consume or cancel error.response.body

### Issue: TypeScript error with dispatcher option
**Solution:** Use `// @ts-expect-error` comment (dispatcher is not in types but passed through)

## Support

- **Browsers:** Latest Chrome, Firefox, Safari
- **Node.js:** 18+
- **Bun:** ✓
- **Deno:** ✓ (import from CDN like esm.sh)
