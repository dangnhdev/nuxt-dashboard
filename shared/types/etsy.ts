/**
 * Etsy API Type Definitions
 * These types are based on the official Etsy OpenAPI v3
 */

export interface EtsyShop {
  shop_id: number
  shop_name: string
  listing_active_count: number
  [key: string]: unknown
}

export interface EtsyListingImage {
  listing_image_id: number
  url_75x75?: string
  url_170x135?: string
  url_570xN?: string
  url_fullxfull?: string
  [key: string]: unknown
}

export interface EtsyListing {
  listing_id: number
  title: string
  description?: string
  price?: {
    amount: number
    divisor: number
    currency_code: string
  }
  images?: EtsyListingImage[]
  [key: string]: unknown
}

export interface FindShopsResponse {
  results: EtsyShop[]
  count: number
  [key: string]: unknown
}

export interface GetShopActiveListingsResponse {
  results: EtsyListing[]
  count: number
  [key: string]: unknown
}

export interface GetListingImagesResponse {
  results: EtsyListingImage[]
  count: number
  [key: string]: unknown
}
