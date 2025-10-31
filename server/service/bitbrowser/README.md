# Bit Browser API Client

Type-safe TypeScript client for Bit Browser local API with browser control and READ operations.

## Features

- **Functional Style**: Clean functional API with exported functions
- **Browser Control**: Open/close browsers and get remote debugging endpoints (WebSocket/HTTP)
- **READ Operations**: Safe access to browser profiles, groups, and system info
- **Type-Safe**: Full TypeScript support with detailed type definitions
- **HTTP Client**: Built on `ky` for reliable HTTP requests with automatic retries
- **Environment Configuration**: Easily configure via environment variables
- **Error Handling**: Descriptive error messages when API is unreachable
- **Selenium/Puppeteer Support**: Get remote WebSocket URLs for automation

## Installation

The Bit Browser client is already installed as part of this project. No additional dependencies required.

## Quick Start

### Basic Usage

```typescript
import { getBrowserList, checkHealth } from '@/lib/bitbrowser';

// Check if API is reachable
const health = await checkHealth();

// Get list of browser profiles (returns data directly)
const browserList = await getBrowserList({
  page: 0,
  pageSize: 10,
});

console.log(browserList.list); // Direct access to list
```

### Environment Configuration

Add these to your `.env.local` file:

```bash
# Bit Browser Configuration (optional)
BITBROWSER_API_URL=http://127.0.0.1:54346  # Default local API URL
BITBROWSER_API_TOKEN=your-token-here        # Optional Bearer token
```

The client will automatically use these environment variables on initialization.

## Available Operations

### Long-Running Browser Pattern (Recommended for Production)

**Use Case:** Keep browsers open for long periods and connect with Puppeteer to run tasks on-demand.

#### Important Concepts

**Browser ID vs Process ID (PID):**
- **Browser ID**: Permanent identifier (e.g., `'45756af5a4ab40a199b33d8290cf4277'`)
  - Stored in database, never changes
  - Used in all API calls to reference a browser profile
  - Get from `getBrowserList()` or browser creation
- **Process ID (PID)**: OS process number (e.g., `12345`)
  - Only exists while browser is running
  - Changes every time browser opens
  - Used only for status checking (alive/dead)
  - **You never need to use PID directly in API calls**

#### Complete Workflow Example

```typescript
import {
  getBrowserList,
  getBrowserPidsAlive,
  openBrowser
} from '@/lib/bitbrowser';
import puppeteer from 'puppeteer';

// Step 1: Get browser ID from your browser list
const browserList = await getBrowserList({ page: 0, pageSize: 10 });
const browserId = browserList.list[0].id; // Use browser ID (NOT PID!)

// Step 2: Check if browser is currently running
const status = await getBrowserPidsAlive({
  ids: [browserId] // Pass browser ID
});

if (!status[browserId]?.alive) {
  throw new Error(`Browser ${browserId} is not running`);
}

console.log(`Browser is running with PID: ${status[browserId].pid}`);

// Step 3: Get WebSocket endpoint
// IMPORTANT: Calling openBrowser() on an already-open browser is SAFE:
// - Does NOT restart the browser
// - Does NOT close existing Puppeteer connections
// - Simply returns the existing WebSocket/HTTP endpoints
const endpoints = await openBrowser({
  id: browserId, // Use browser ID
  isBackground: true // Optional: keep in background
});

console.log('WebSocket URL:', endpoints.ws);
console.log('HTTP endpoint:', endpoints.http);

// Step 4: Connect with Puppeteer
const browser = await puppeteer.connect({
  browserWSEndpoint: endpoints.ws,
  defaultViewport: null, // Don't override browser viewport
});

// Step 5: Run your automation tasks
const pages = await browser.pages();
const page = pages[0] || await browser.newPage();

await page.goto('https://example.com');
// ... do your work ...

// Step 6: Disconnect (IMPORTANT: Use disconnect, NOT close)
// This keeps the browser running for next time
await browser.disconnect();

console.log('Task completed, browser still running');
```

#### Helper Function for Repeated Tasks

```typescript
import { getBrowserPidsAlive, openBrowser } from '@/lib/bitbrowser';
import puppeteer, { Browser } from 'puppeteer';

async function connectToRunningBrowser(browserId: string): Promise<Browser> {
  // Check if browser is running
  const status = await getBrowserPidsAlive({ ids: [browserId] });

  if (!status[browserId]?.alive) {
    throw new Error(
      `Browser ${browserId} is not running. ` +
      `Please open it in Bit Browser first.`
    );
  }

  // Get WebSocket endpoint (safe on running browsers)
  const endpoints = await openBrowser({ id: browserId });

  // Connect with Puppeteer
  return puppeteer.connect({
    browserWSEndpoint: endpoints.ws,
    defaultViewport: null,
  });
}

// Usage: Run multiple tasks on the same browser
async function runMultipleTasks(browserId: string) {
  for (const task of ['task1', 'task2', 'task3']) {
    try {
      const browser = await connectToRunningBrowser(browserId);
      const page = (await browser.pages())[0];

      // Run task
      await page.goto(`https://example.com/${task}`);
      console.log(`Completed ${task}`);

      // Disconnect (keeps browser running)
      await browser.disconnect();

    } catch (error) {
      console.error(`Task ${task} failed:`, error);
    }
  }
}
```

#### Best Practices

**✅ DO:**
- Use `browser.disconnect()` to keep browser running
- Check browser status with `getBrowserPidsAlive()` before connecting
- Call `openBrowser()` to get WebSocket URL (safe on running browsers)
- Always use Browser ID in API calls (NOT PID)
- Handle connection errors gracefully

**❌ DON'T:**
- Don't use `browser.close()` if you want to keep browser open
- Don't assume browser is running - always check status first
- Don't try to construct WebSocket URLs manually
- Don't use PID in API calls (use Browser ID)

### Browser Control Operations

#### Open Browser

Open a browser and get remote debugging endpoints for Selenium/Puppeteer:

```typescript
import { openBrowser } from '@/lib/bitbrowser';

const endpoints = await openBrowser({
  id: 'browser-id', // Required: Browser ID (NOT PID)
  isBackground: false, // Optional: Open in foreground
  loadExtensions: true, // Optional: Load extensions
});

console.log('WebSocket URL:', endpoints.ws);
console.log('HTTP endpoint:', endpoints.http);
console.log('Process ID:', endpoints.id);

// Use with Puppeteer
import puppeteer from 'puppeteer';
const browser = await puppeteer.connect({
  browserWSEndpoint: endpoints.ws
});

// Use with Playwright
import { chromium } from 'playwright';
const browser = await chromium.connectOverCDP(endpoints.ws);

// Use with Selenium
const capabilities = {
  'goog:chromeOptions': {
    debuggerAddress: endpoints.http
  }
};
```

**Important:** `openBrowser()` is **idempotent** - calling it on an already-open browser:
- ✅ Returns existing WebSocket/HTTP endpoints
- ✅ Does NOT restart the browser
- ✅ Does NOT close existing connections
- ✅ Safe to call multiple times

#### Close Browser

```typescript
import { closeBrowser } from '@/lib/bitbrowser';

await closeBrowser({
  id: 'browser-id' // Browser ID (NOT PID)
});
```

### Browser Profile Operations (READ)

#### Get Browser List (Full Details)

```typescript
import { getBrowserList } from '@/lib/bitbrowser';

const response = await getBrowserList({
  page: 0,
  pageSize: 10,
  groupId: 'optional-group-id',
  sortDirection: 'desc',
  sortProperties: 'seq',
});
```

#### Get Browser List (Concise)

```typescript
import { getBrowserListConcise } from '@/lib/bitbrowser';

const response = await getBrowserListConcise({
  page: 0,
  pageSize: 100,
});
```

#### Get Browser Detail

```typescript
import { getBrowserDetail } from '@/lib/bitbrowser';

const response = await getBrowserDetail({
  id: 'browser-id',
});
```

#### Get Browser PIDs

Get process IDs for specific browsers (0 = not running):

```typescript
import { getBrowserPids } from '@/lib/bitbrowser';

// Input: Array of Browser IDs (NOT PIDs)
const pids = await getBrowserPids({
  ids: ['browser-id-1', 'browser-id-2'], // Browser IDs
});

// Output: Map of Browser ID → Process ID
// {
//   'browser-id-1': 12345,  // Running (PID > 0)
//   'browser-id-2': 0       // Not running (PID = 0)
// }
console.log(pids);
```

#### Get Browser PIDs with Alive Status (Recommended)

Check if browsers are running with detailed status:

```typescript
import { getBrowserPidsAlive } from '@/lib/bitbrowser';

// Input: Array of Browser IDs (NOT PIDs)
const status = await getBrowserPidsAlive({
  ids: ['browser-id-1', 'browser-id-2'], // Browser IDs
});

// Output: Map of Browser ID → {pid, alive}
// {
//   'browser-id-1': { pid: 12345, alive: true },  // Running
//   'browser-id-2': { pid: 0, alive: false }      // Not running
// }
console.log(status);

// Check if specific browser is running
if (status['browser-id-1']?.alive) {
  console.log(`Browser is running with PID ${status['browser-id-1'].pid}`);
}
```

#### Get All Browser PIDs

Get PIDs of all currently running browsers:

```typescript
import { getAllBrowserPids } from '@/lib/bitbrowser';

const allPids = await getAllBrowserPids();

// Output: Map of Browser ID → Process ID (only running browsers)
// {
//   'browser-id-1': 12345,
//   'browser-id-3': 67890
// }
console.log(allPids);
```

#### Get Browser Ports

Get remote debugging ports for running browsers:

```typescript
import { getBrowserPorts } from '@/lib/bitbrowser';

const ports = await getBrowserPorts();

// Output: Map of Browser ID → Debug Port
// {
//   'browser-id-1': '64170',
//   'browser-id-2': '64217'
// }
console.log(ports);

// Note: WebSocket URLs include session UUIDs, so use openBrowser()
// to get full WebSocket URL instead of constructing manually
```

### Group Operations

#### Get Group List

```typescript
import { getGroupList } from '@/lib/bitbrowser';

const response = await getGroupList({
  page: 0,
  pageSize: 10,
  all: true,
  sortDirection: 'asc',
  sortProperties: 'sortNum',
});
```

#### Get Group Detail

```typescript
import { getGroupDetail } from '@/lib/bitbrowser';

const response = await getGroupDetail({
  id: 'group-id',
});
```

### System Operations

#### Check API Health

```typescript
import { checkHealth } from '@/lib/bitbrowser';

const response = await checkHealth();
```

#### Get User Info

```typescript
import { getUserInfo } from '@/lib/bitbrowser';

const response = await getUserInfo();
console.log(response.data?.username);
```

#### Check Proxy Configuration

```typescript
import { checkProxy } from '@/lib/bitbrowser';

const response = await checkProxy({
  host: '127.0.0.1',
  port: 1080,
  proxyType: 'socks5',
  proxyUserName: 'optional',
  proxyPassword: 'optional',
});

// Response includes IP location, timezone, etc.
console.log(response.data?.data.ip);
console.log(response.data?.data.city);
```

## Response Format

All operations automatically unwrap the API response and return data directly:

- **On Success** (when `success: true`): Returns the data directly
- **On Failure** (when `success: false`): Throws an error with the full response

```typescript
// Internal API response format (handled automatically)
interface BitBrowserResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
```

Example:

```typescript
import { getBrowserList } from '@/lib/bitbrowser';

try {
  // Returns data directly on success
  const browserList = await getBrowserList();

  console.log('Total browsers:', browserList.total);
  browserList.list.forEach(browser => {
    console.log(browser.name, browser.id);
  });
} catch (error) {
  // Throws error if success: false
  console.error('API Error:', error.message);
  // Error includes full response: "Bit Browser API Error: {success:false,...}"
}
```

## Error Handling

The client automatically throws errors in two scenarios:

### 1. Network Errors (API Unreachable)

```typescript
import { checkHealth } from '@/lib/bitbrowser';

try {
  await checkHealth();
} catch (error) {
  // Error message: "Cannot reach Bit Browser API at http://127.0.0.1:54346.
  // Ensure Bit Browser is running and API is accessible."
  console.error('Network error:', error.message);
}
```

### 2. API Errors (success: false)

```typescript
import { getBrowserDetail } from '@/lib/bitbrowser';

try {
  const browser = await getBrowserDetail({ id: 'invalid-id' });
} catch (error) {
  // Error includes full response with success: false
  // Error message: "Bit Browser API Error: {success:false,message:'...',...}"
  console.error('API error:', error.message);
}
```

### Automatic Retry

The client includes automatic retry logic for network errors:
- **Retry attempts**: 2
- **Retry delay**: 500ms, 1s (exponential backoff)
- **Status codes**: 408, 413, 429, 500, 502, 503, 504

## Type Definitions

All types are exported for use in your application:

```typescript
import type {
  BrowserProfile,
  BrowserListRequest,
  BrowserListResponse,
  Group,
  ProxyCheckRequest,
  ProxyCheckResponse,
} from '@/lib/bitbrowser';
```

## Troubleshooting

### Connection Issues

**Problem:** "Cannot reach Bit Browser API"

**Solutions:**
1. Ensure Bit Browser application is running
2. Check the local API is accessible at http://127.0.0.1:54346
3. Verify the port in your `.env.local` matches Bit Browser's API port
4. Check firewall settings aren't blocking localhost connections

### Browser Not Found

**Problem:** Browser ID not working

**Solutions:**
1. Get valid browser IDs from `getBrowserList()`
2. Verify you're using Browser ID (e.g., `'45756af5a4ab40a199b33d8290cf4277'`) NOT PID (e.g., `12345`)
3. Check browser wasn't deleted in Bit Browser application

### Browser Status Issues

**Problem:** `getBrowserPidsAlive()` shows `alive: false` but browser is open

**Solutions:**
1. Browser might have crashed - check Bit Browser application
2. Refresh browser list with `getBrowserList()` to verify status
3. Try closing and reopening the browser in Bit Browser

### Puppeteer Connection Fails

**Problem:** `puppeteer.connect()` throws error

**Solutions:**
1. Check browser is actually running: `getBrowserPidsAlive()`
2. Get fresh WebSocket URL: `openBrowser()` (safe to call again)
3. Verify WebSocket URL format: should start with `ws://`
4. Check no firewall blocking WebSocket connections
5. Ensure browser wasn't closed between getting URL and connecting

### Multiple Connections

**Problem:** Can I connect multiple Puppeteer instances to same browser?

**Answer:** Yes! Multiple Puppeteer connections to the same browser are supported:

```typescript
// Connection 1
const browser1 = await puppeteer.connect({ browserWSEndpoint: endpoints.ws });

// Connection 2 (same browser)
const browser2 = await puppeteer.connect({ browserWSEndpoint: endpoints.ws });

// Both can control the same browser independently
```

### Browser Still Running After Task

**Problem:** Browser stays open after script ends

**Answer:** This is expected behavior when using the long-running pattern:
- Use `browser.disconnect()` to keep browser open (correct)
- Use `browser.close()` only if you want to close the browser
- Manually close in Bit Browser application when done

## Testing

Run tests with:

```bash
pnpm test bitbrowser
```

Tests will connect to Bit Browser if running, or gracefully handle connection failures.

## Architecture

The implementation follows functional programming principles:

```
src/lib/bitbrowser/
├── index.ts       # Main entry, ky instance, exports
├── api.ts         # API functions (getBrowserList, etc.)
├── types.ts       # TypeScript type definitions
└── README.md      # This file
```

### Key Components

1. **Ky Instance** (`index.ts`): Global HTTP client with pre-configured hooks
2. **API Functions** (`api.ts`): Pure functions for each API endpoint
3. **Type Definitions** (`types.ts`): Complete TypeScript types

### Similar to Etsy Client

This implementation follows the same pattern as `src/lib/etsy/index.ts`:

```typescript
// Global ky instance with configuration
export const kyInstance = ky.create({
  prefixUrl: env.BITBROWSER_API_URL,
  hooks: {
    beforeRequest: [/* auth, headers */],
    beforeError: [/* error handling */],
  },
});

// Export API functions
export const getBrowserList = async (request) => {
  return kyInstance.post("browser/list", { json: request }).json();
};
```

## API Reference

### Browser Profile Types

- `BrowserProfile` - Complete browser profile with all settings
- `BrowserProfileConcise` - Simplified browser profile
- `BrowserFingerprint` - Fingerprint configuration
- `ProxyConfig` - Proxy configuration

### Group Types

- `Group` - Browser group information
- `GroupListRequest` - Group list query parameters
- `GroupListResponse` - Group list response with pagination

### Request/Response Types

- `BitBrowserResponse<T>` - Standard API response wrapper
- `BrowserListRequest` - Browser list query parameters
- `ProxyCheckRequest` - Proxy validation request
- `ProxyCheckResponse` - Proxy validation result

## Supported Operations

This implementation includes:

**Browser Control:**
- ✅ Open browser (get WebSocket/HTTP endpoints)
- ✅ Close browser

**READ Operations:**
- ✅ Get browser profiles
- ✅ Get groups
- ✅ Get system information
- ✅ Check proxy configuration

**Not Implemented:**
- ❌ Create/update/delete browser profiles
- ❌ Create/update/delete groups

For additional operations, please refer to the official Bit Browser API documentation.

## Resources

- **Bit Browser Website**: https://www.bitbrowser.net
- **API Documentation**: https://doc.bitbrowser.net
- **Local API Base URL**: http://127.0.0.1:54346 (default)

## Troubleshooting

### Connection Issues

If you get connection errors:

1. Ensure Bit Browser application is running
2. Check the local API is accessible at http://127.0.0.1:54346
3. Verify the port in your `.env.local` matches Bit Browser's API port
4. Error message will clearly indicate: "Cannot reach Bit Browser API"

### Type Errors

If TypeScript shows type errors:

1. Ensure all imports use `.js` extensions (required for ES modules)
2. Run `pnpm build` to check for compilation errors
3. Check that types are imported from `@/lib/bitbrowser`

### Test Failures

Tests connect to Bit Browser if running:

1. Start Bit Browser application
2. Ensure local API is enabled
3. Run tests again with `pnpm test bitbrowser`

## Contributing

When adding new READ operations:

1. Add types to `types.ts`
2. Add function to `api.ts` using `kyInstance`
3. Export function from `index.ts`
4. Add tests to `test/bitbrowser.test.ts`
5. Update this README

## License

MIT
