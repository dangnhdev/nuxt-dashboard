/**
 * Bit Browser API Functions
 * Browser automation with READ operations and browser control (open/close)
 */

import ky from 'ky'

/**
 * Global ky HTTP client instance with Bit Browser API configuration
 *
 * Features:
 * - Base URL: Configured via environment or defaults to http://127.0.0.1:54346
 * - Optional Bearer token authentication
 * - HTTP/2 support
 * - Retry logic: 2 attempts with exponential backoff
 * - Auto-throws on non-2xx responses
 * - Gzip/deflate/brotli compression
 */
const { bitBrowser: { apiUrl, apiToken } } = useRuntimeConfig()
const kyInstance = ky.create({
  prefixUrl: apiUrl,
  timeout: 30000,
  retry: {
    limit: 2,
    methods: ['get', 'post'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    backoffLimit: 3000,
    delay: attemptCount => 500 * attemptCount // 500ms, 1s
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // Set headers
        request.headers.set('Content-Type', 'application/json')
        request.headers.set('accept-encoding', 'deflate, gzip, br')

        // Add Bearer token if configured
        if (apiToken) {
          request.headers.set(
            'Authorization',
            `Bearer ${apiToken}`
          )
        }
      }
    ],
    beforeError: [
      async (error) => {
        const { response } = error

        // Network error (cannot reach API)
        if (!response) {
          throw new Error(
            `Cannot reach Bit Browser API at ${apiUrl}. `
            + `Ensure Bit Browser is running and API is accessible.`
          )
        }

        // API error response
        try {
          const body = await response.json()
          error.message = `Bit Browser API Error (${
            response.status
          }): ${JSON.stringify(body)}`
        } catch {
          // If response is not JSON, use default message
          error.message = `Bit Browser API Error (${response.status}): ${response.statusText}`
        }

        return error
      }
    ]
  }
})

// ========================================
// Response Handler
// ========================================

/**
 * Unwraps API response and throws error if success is false
 * @param response - BitBrowserResponse from API
 * @returns Data from successful response
 * @throws Error with full response if success is false
 */
const unwrapResponse = <T>(response: BitBrowserResponse<T>): T => {
  if (!response.success) {
    throw new Error(`Bit Browser API Error: ${JSON.stringify(response)}`)
  }
  return response.data as T
}

// ========================================
// Health Check
// ========================================

/**
 * Check API health status
 * @returns Promise resolving to health check data
 * @throws Error if API returns success: false
 */
export const checkHealth = async (): Promise<unknown> => {
  const response = await kyInstance
    .post('health')
    .json<BitBrowserResponse<unknown>>()
  return unwrapResponse(response)
}

// ========================================
// Browser Profile Operations (READ only)
// ========================================

/**
 * Get list of browser profiles with full details
 * @param request - List request parameters
 * @returns Promise resolving to browser list data
 * @throws Error if API returns success: false
 */
export const getBrowserList = async (
  request: BrowserListRequest = {}
): Promise<BrowserListResponse> => {
  const payload = {
    page: request.page ?? 0,
    pageSize: request.pageSize ?? 10,
    groupId: request.groupId,
    sortDirection: request.sortDirection,
    sortProperties: request.sortProperties
  }

  const response = await kyInstance
    .post('browser/list', { json: payload })
    .json<BitBrowserResponse<BrowserListResponse>>()

  return unwrapResponse(response)
}

/**
 * Get concise list of browser profiles
 * @param request - List request parameters
 * @returns Promise resolving to concise browser list data
 * @throws Error if API returns success: false
 */
export const getBrowserListConcise = async (
  request: BrowserListRequest = {}
): Promise<BrowserConciseListResponse> => {
  const payload = {
    page: request.page ?? 0,
    pageSize: request.pageSize ?? 100,
    sortDirection: request.sortDirection ?? 'desc',
    sortProperties: request.sortProperties ?? 'seq'
  }

  const response = await kyInstance
    .post('browser/list/concise', { json: payload })
    .json<BitBrowserResponse<BrowserConciseListResponse>>()

  return unwrapResponse(response)
}

/**
 * Get detailed information about a specific browser profile
 * @param request - Browser detail request
 * @returns Promise resolving to browser profile data
 * @throws Error if API returns success: false
 */
export const getBrowserDetail = async (
  request: BrowserDetailRequest
): Promise<BrowserProfile> => {
  const response = await kyInstance
    .post('browser/detail', { json: request })
    .json<BitBrowserResponse<BrowserProfile>>()

  return unwrapResponse(response)
}

/**
 * Get process IDs (PIDs) for given browser profiles
 * @param request - Browser IDs to query
 * @returns Promise resolving to browser PIDs data
 * @throws Error if API returns success: false
 */
export const getBrowserPids = async (
  request: BrowserPidsRequest
): Promise<BrowserPidsResponse> => {
  const response = await kyInstance
    .post('browser/pids', { json: request })
    .json<BitBrowserResponse<BrowserPidsResponse>>()

  return unwrapResponse(response)
}

/**
 * Get process IDs and check if browsers are still alive
 * @param request - Browser IDs to query
 * @returns Promise resolving to browser PIDs with alive status data
 * @throws Error if API returns success: false
 */
export const getBrowserPidsAlive = async (
  request: BrowserPidsRequest
): Promise<BrowserPidsAliveResponse> => {
  const response = await kyInstance
    .post('browser/pids/alive', { json: request })
    .json<BitBrowserResponse<BrowserPidsAliveResponse>>()

  return unwrapResponse(response)
}

/**
 * Get PIDs of all currently active browsers
 * @returns Promise resolving to all browser PIDs data
 * @throws Error if API returns success: false
 */
export const getAllBrowserPids = async (): Promise<BrowserPidsResponse> => {
  const response = await kyInstance
    .post('browser/pids/all')
    .json<BitBrowserResponse<BrowserPidsResponse>>()

  return unwrapResponse(response)
}

/**
 * Get ports of all currently opened browser windows
 * @returns Promise resolving to browser ports data
 * @throws Error if API returns success: false
 */
export const getBrowserPorts = async (): Promise<BrowserPortsResponse> => {
  const response = await kyInstance
    .post('browser/ports')
    .json<BitBrowserResponse<BrowserPortsResponse>>()

  return unwrapResponse(response)
}

// ========================================
// Group Operations (READ only)
// ========================================

/**
 * Get list of browser profile groups
 * @param request - Group list request parameters
 * @returns Promise resolving to group list data
 * @throws Error if API returns success: false
 */
export const getGroupList = async (
  request: GroupListRequest = {}
): Promise<GroupListResponse> => {
  const payload = {
    page: request.page ?? 0,
    pageSize: request.pageSize ?? 10,
    all: request.all ?? true,
    sortDirection: request.sortDirection ?? 'asc',
    sortProperties: request.sortProperties ?? 'sortNum'
  }

  const response = await kyInstance
    .post('group/list', { json: payload })
    .json<BitBrowserResponse<GroupListResponse>>()

  return unwrapResponse(response)
}

/**
 * Get detailed information about a specific group
 * @param request - Group detail request
 * @returns Promise resolving to group data
 * @throws Error if API returns success: false
 */
export const getGroupDetail = async (
  request: GroupDetailRequest
): Promise<Group> => {
  const response = await kyInstance
    .post('group/detail', { json: request })
    .json<BitBrowserResponse<Group>>()

  return unwrapResponse(response)
}

// ========================================
// System Operations (READ only)
// ========================================

/**
 * Get current user information
 * @returns Promise resolving to user information data
 * @throws Error if API returns success: false
 */
export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await kyInstance
    .post('userInfo')
    .json<BitBrowserResponse<UserInfo>>()
  return unwrapResponse(response)
}

/**
 * Check proxy configuration validity
 * @param request - Proxy check request
 * @returns Promise resolving to proxy check result data
 * @throws Error if API returns success: false
 */
export const checkProxy = async (
  request: ProxyCheckRequest
): Promise<ProxyCheckResponse> => {
  const response = await kyInstance
    .post('checkagent', { json: request })
    .json<BitBrowserResponse<ProxyCheckResponse>>()

  return unwrapResponse(response)
}

// ========================================
// Browser Control Operations (WRITE)
// ========================================

/**
 * Open a browser window and get remote debugging endpoints
 * @param request - Browser open request
 * @returns Promise resolving to remote endpoints (HTTP and WebSocket URLs)
 * @throws Error if API returns success: false
 *
 * @example
 * // Open browser and get WebSocket URL for Puppeteer
 * const endpoints = await openBrowser({ id: 'browser-id' });
 *
 * // Connect with Puppeteer
 * const browser = await puppeteer.connect({
 *   browserWSEndpoint: endpoints.ws
 * });
 *
 * // Or use HTTP endpoint for Selenium
 * const capabilities = {
 *   'goog:chromeOptions': {
 *     debuggerAddress: endpoints.http
 *   }
 * };
 */
export const openBrowser = async (
  request: BrowserOpenRequest
): Promise<BrowserOpenData> => {
  const response = await kyInstance
    .post('browser/open', { json: request })
    .json<BitBrowserResponse<BrowserOpenData>>()

  return unwrapResponse(response)
}

/**
 * Close an opened browser window
 * @param request - Browser close request
 * @returns Promise resolving to success message
 * @throws Error if API returns success: false
 */
export const closeBrowser = async (
  request: BrowserCloseRequest
): Promise<unknown> => {
  const response = await kyInstance
    .post('browser/close', { json: request })
    .json<BitBrowserResponse<unknown>>()

  return unwrapResponse(response)
}
