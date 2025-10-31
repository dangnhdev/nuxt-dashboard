import ky from 'ky'
import { convex } from '@/lib/convex.js'
import { api } from 'convex/_generated/api.js'
import type {
  EtsyShop,
  EtsyListing,
  EtsyListingImage,
  FindShopsResponse,
  GetShopActiveListingsResponse,
  GetListingImagesResponse
} from '#shared/types/etsy'

/**
 * Global ky HTTP client instance with Etsy API configuration
 *
 * Features:
 * - Base URL: https://openapi.etsy.com/v3/application
 * - Automatic API key rotation from Convex
 * - HTTP/2 support
 * - Retry logic: 3 attempts with 1s delay
 * - Auto-throws on non-2xx responses
 * - Gzip/deflate/brotli/zstd compression
 */
export const kyInstance = ky.create({
  prefixUrl: 'https://openapi.etsy.com/v3/application',
  timeout: 30000,
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'delete'],
    statusCodes: [403, 408, 413, 429, 500, 502, 503, 504],
    backoffLimit: 3000,
    delay: attemptCount => 1000 * attemptCount // 1s, 2s, 3s
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        // Get next API key from Convex on each request
        const apiKey = await convex.mutation(api.etsyKeys.getNextKey)

        if (!apiKey) {
          throw new Error('No active Etsy API key available')
        }

        request.headers.set('x-api-key', apiKey)
        request.headers.set('accept-encoding', 'deflate, gzip, br, zstd')
      }
    ],
    afterResponse: [
      async (request, _options, response) => {
        // Handle 403 Forbidden - API key is invalid/expired
        if (response.status === 403) {
          const apiKey = request.headers.get('x-api-key')
          if (apiKey) {
            console.warn(`⚠️  API Key 403 Forbidden: ${apiKey}`)

            // Set the key as inactive in Convex
            try {
              await convex.mutation(api.etsyKeys.setActiveStatus, {
                key: apiKey,
                isActive: false
              })
              console.warn(`✓ Marked API key as inactive: ${apiKey}`)
            } catch (deactivateError) {
              console.error(`Failed to deactivate API key:`, deactivateError)
            }
          }
        }
        return response
      }
    ],
    beforeError: [
      async (error) => {
        const { response } = error
        if (response) {
          try {
            const body = await response.json()
            error.message = `Etsy API Error (${
              response.status
            }): ${JSON.stringify(body)}`
          } catch {
            // If response is not JSON, use default message
            error.message = `Etsy API Error (${response.status}): ${response.statusText}`
          }
        }
        return error
      }
    ]
  }
})

console.log('✅ Ky HTTP client initialized')

/**
 * Etsy API Client
 *
 * TypeScript implementation of Etsy OpenAPI v3 client
 * Ported from PHP EtsyAPI.php with improvements:
 * - Type-safe with TypeScript
 * - Uses ky HTTP client
 * - Automatic API key rotation via Convex
 * - Native Promise-based async operations
 */

/**
 * Extract listing ID from Etsy URL
 * Supports various Etsy URL formats:
 * - https://www.etsy.com/listing/1234567890/title
 * - https://www.etsy.com/ca/listing/1234567890/title?params
 * - /listing/1234567890
 *
 * @param url - Etsy listing URL
 * @returns Listing ID as number
 * @throws Error if URL format is invalid or listing ID not found
 */
export function extractListingIdFromUrl(url: string): number {
  const match = url.match(/\/listing\/(\d+)/)
  if (!match || !match[1]) {
    throw new Error(`Invalid Etsy listing URL: ${url}`)
  }
  return parseInt(match[1], 10)
}

// Types are imported from @/shared/types/etsy

/**
 * Search for shops by name
 *
 * @param shopName - The shop name to search for
 * @param limit - Maximum number of results (default: 25, max: 100)
 * @param offset - Number of results to skip for pagination
 * @returns Array of shop results
 */
export async function findShops(
  shopName: string,
  limit?: number,
  offset?: number
): Promise<EtsyShop[]> {
  const searchParams: Record<string, string | number> = {
    shop_name: shopName
  }

  if (limit !== undefined) searchParams.limit = limit
  if (offset !== undefined) searchParams.offset = offset

  const response = await kyInstance
    .get('shops', { searchParams })
    .json<FindShopsResponse>()

  return response.results
}

/**
 * Get details of a specific shop
 *
 * @param shopId - The shop ID
 * @returns Shop details
 */
export async function getShop(shopId: number): Promise<EtsyShop> {
  return kyInstance.get(`shops/${shopId}`).json<EtsyShop>()
}

/**
 * Get details of a specific listing
 * Accepts either a listing ID or an Etsy listing URL
 *
 * @param listingIdOrUrl - Listing ID (number) or Etsy listing URL (string)
 * @returns Listing details as JSON
 * @example
 * // Using listing ID
 * const listing = await getListing(4373939061);
 *
 * // Using Etsy URL
 * const listing = await getListing("https://www.etsy.com/ca/listing/4373939061/custom-wooden-pig");
 */
export async function getListing(
  listingIdOrUrl: number | string
): Promise<EtsyListing> {
  const listingId
    = typeof listingIdOrUrl === 'string'
      ? extractListingIdFromUrl(listingIdOrUrl)
      : listingIdOrUrl

  return kyInstance.get(`listings/${listingId}`).json<EtsyListing>()
}

/**
 * Get the count of active listings for a shop
 *
 * @param shopId - The shop ID
 * @returns Number of active listings
 */
export async function getShopListingCount(shopId: number): Promise<number> {
  const shop = await getShop(shopId)
  return shop.listing_active_count
}

/**
 * Get active listings for a shop (paginated)
 *
 * @param shopId - The shop ID
 * @param limit - Maximum number of results (default: 25, max: 100)
 * @param offset - Number of results to skip for pagination
 * @returns Array of active listings
 */
export async function getShopActiveListings(
  shopId: number,
  limit?: number,
  offset: number = 0
): Promise<EtsyListing[]> {
  const searchParams: Record<string, string | number> = { offset }

  if (limit !== undefined) searchParams.limit = limit

  const response = await kyInstance
    .get(`shops/${shopId}/listings/active`, { searchParams })
    .json<GetShopActiveListingsResponse>()

  return response.results
}

/**
 * Get images for a specific listing
 *
 * @param listingId - The listing ID
 * @returns Array of listing images
 */
export async function getListingImages(
  listingId: number
): Promise<EtsyListingImage[]> {
  const response = await kyInstance
    .get(`listings/${listingId}/images`)
    .json<GetListingImagesResponse>()

  return response.results
}

/**
 * Get all active listings for a shop with their images
 * Uses parallel requests for optimal performance
 *
 * @param shopId - The shop ID
 * @returns Array of all active listings with images
 */
export async function getAllShopListings(
  shopId: number
): Promise<EtsyListing[]> {
  const limit = 100 // Max Etsy limit per batch
  const totalProductCount = await getShopListingCount(shopId)
  const maxRequestCount = Math.floor((totalProductCount - 1) / limit) + 1

  // Create parallel requests for all listing batches
  const listingPromises: Promise<EtsyListing[]>[] = []
  for (let i = 0, offset = 0; i < maxRequestCount; i++, offset += limit) {
    listingPromises.push(getShopActiveListings(shopId, limit, offset))
  }

  // Wait for all listing batches
  const listingBatches = await Promise.all(listingPromises)

  // Flatten all batches into single array
  const allListings = listingBatches.flat()

  // Fetch images for all listings in parallel
  const listingsWithImages = await Promise.all(
    allListings.map(async (listing) => {
      try {
        const images = await getListingImages(listing.listing_id)
        return { ...listing, images }
      } catch (error) {
        console.error(
          `Failed to get images for listing ${listing.listing_id}:`,
          error
        )
        return { ...listing, images: [] }
      }
    })
  )

  return listingsWithImages
}
