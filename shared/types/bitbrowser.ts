/**
 * Bit Browser API Type Definitions
 * These types are based on the official Bit Browser API documentation
 */

/**
 * Base API Response Structure
 */
export interface BitBrowserResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
}

/**
 * Browser Fingerprint Configuration
 */
export interface BrowserFingerprint {
  coreVersion?: string
  ostype?: 'PC' | 'IOS' | 'Android'
  os?: string
  osVersion?: string
  hardwareConcurrency?: string
  openWidth?: number
  openHeight?: number
  resolutionType?: string
  resolution?: string
  devicePixelRatio?: number
  version?: string
}

/**
 * Proxy Configuration Types
 */
export type ProxyType = 'noproxy' | 'http' | 'https' | 'socks5' | 'ssh' | 'ipidea' | (string & Record<never, never>)

export interface ProxyConfig {
  proxyMethod: number // 2 = normal, 3 = API extraction
  proxyType: ProxyType
  host?: string
  port?: string | number
  proxyUserName?: string
  proxyPassword?: string
  ip?: string
  city?: string
  province?: string
  country?: string
  isIpNoChange?: boolean
  dynamicIpUrl?: string
  dynamicIpChannel?: string
  isDynamicIpChangeIp?: boolean
  isGlobalProxyInfo?: boolean
  isIpv6?: boolean
  extractUrl?: string
}

/**
 * Browser Profile (Complete)
 */
export interface BrowserProfile {
  id?: string
  name?: string
  remark?: string
  groupId?: string
  seq?: number
  browserFingerPrint?: BrowserFingerprint
  proxyMethod?: number
  proxyType?: ProxyType
  host?: string
  port?: string | number
  proxyUserName?: string
  proxyPassword?: string
  [key: string]: unknown
}

/**
 * Browser Profile (Concise)
 */
export interface BrowserProfileConcise {
  id: string
  name: string
  remark?: string
  groupId?: string
  seq: number
  [key: string]: unknown
}

/**
 * Browser List Request Parameters
 */
export interface BrowserListRequest {
  page?: number
  pageSize?: number
  groupId?: string
  sortDirection?: 'asc' | 'desc'
  sortProperties?: string
}

/**
 * Browser List Response
 */
export interface BrowserListResponse {
  list: BrowserProfile[]
  total: number
  page: number
  pageSize: number
}

/**
 * Browser Concise List Response
 */
export interface BrowserConciseListResponse {
  list: BrowserProfileConcise[]
  total: number
  page: number
  pageSize: number
}

/**
 * Browser Detail Request
 */
export interface BrowserDetailRequest {
  id: string
}

/**
 * Browser PIDs Request
 */
export interface BrowserPidsRequest {
  ids: string[]
}

/**
 * Browser PIDs Response
 */
export interface BrowserPidsResponse {
  [browserId: string]: number // browserId -> pid
}

/**
 * Browser PIDs Alive Response
 */
export interface BrowserPidsAliveResponse {
  [browserId: string]: {
    pid: number
    alive: boolean
  }
}

/**
 * Browser Ports Response
 */
export interface BrowserPortsResponse {
  [browserId: string]: string // browserId -> port
}

/**
 * Group Information
 */
export interface Group {
  id: string
  groupName: string
  sortNum: number
  [key: string]: unknown
}

/**
 * Group List Request
 */
export interface GroupListRequest {
  page?: number
  pageSize?: number
  all?: boolean
  sortDirection?: 'asc' | 'desc'
  sortProperties?: string
}

/**
 * Group List Response
 */
export interface GroupListResponse {
  list: Group[]
  total: number
  page: number
  pageSize: number
}

/**
 * Group Detail Request
 */
export interface GroupDetailRequest {
  id: string
}

/**
 * User Information Response
 */
export interface UserInfo {
  id: string
  username?: string
  email?: string
  [key: string]: unknown
}

/**
 * Proxy Check Request
 */
export interface ProxyCheckRequest {
  host: string
  port: number
  proxyType: ProxyType
  proxyUserName?: string
  proxyPassword?: string
  id?: string
}

/**
 * Proxy Check Response Data
 */
export interface ProxyCheckData {
  ip: string
  countryName: string
  stateProv: string
  countryCode: string
  region: string
  city: string
  languages: string
  timeZone: string
  offset: string
  longitude: string
  latitude: string
  zip: string
  status: number
  used: boolean
  usedTime: string | null
}

/**
 * Proxy Check Response
 */
export interface ProxyCheckResponse {
  success: boolean
  data: ProxyCheckData
}

/**
 * Browser Open Request
 */
export interface BrowserOpenRequest {
  id: string
  args?: string[]
  loadExtensions?: boolean
  extractIp?: boolean
  isBackground?: boolean
}

/**
 * Browser Open Response Data
 */
export interface BrowserOpenData {
  id: string
  http: string // HTTP endpoint for Selenium
  ws: string // WebSocket endpoint for Puppeteer/Playwright
  seleniumRemoteAddr?: string
  webdriverPath?: string
}

/**
 * Browser Close Request
 */
export interface BrowserCloseRequest {
  id: string
}
