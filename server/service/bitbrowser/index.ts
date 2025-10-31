/**
 * Bit Browser API Client
 * Entry point for Bit Browser integration
 */

console.log(`✅ Bit Browser client initialized: ${useRuntimeConfig().bitBrowser.apiUrl}`)

// Re-export types
export type {
  // Response types
  BitBrowserResponse,

  // Browser types
  BrowserFingerprint,
  BrowserProfile,
  BrowserProfileConcise,
  BrowserListRequest,
  BrowserListResponse,
  BrowserConciseListResponse,
  BrowserDetailRequest,
  BrowserPidsRequest,
  BrowserPidsResponse,
  BrowserPidsAliveResponse,
  BrowserPortsResponse,

  // Browser control types
  BrowserOpenRequest,
  BrowserOpenData,
  BrowserCloseRequest,

  // Proxy types
  ProxyType,
  ProxyConfig,
  ProxyCheckRequest,
  ProxyCheckResponse,
  ProxyCheckData,

  // Group types
  Group,
  GroupListRequest,
  GroupListResponse,
  GroupDetailRequest,

  // User types
  UserInfo
} from '#shared/types/bitbrowser'

export * from './api.js'
