import { ProductType } from '@/type/ProductType'

/**
 * Transform DecoNetwork product data to our ProductType format
 *
 * DecoNetwork products have different field names and structure,
 * so we map them to match our existing ProductType interface.
 */

interface DecoNetworkProduct {
  id?: string | number
  product_id?: string | number
  product_code?: string
  product_name?: string
  name?: string
  description?: string
  supplier?: string
  supplier_name?: string
  price?: number | string
  cost?: number | string
  msrp?: number | string
  retail_price?: number | string
  images?: string[]
  image_url?: string
  primary_image?: string
  colors?: Array<{
    name: string
    code?: string
    hex?: string
    image?: string
  }>
  sizes?: string[]
  available_sizes?: string[]
  category?: string
  categories?: string[]
  sku?: string
  inventory?: number
  stock?: number
  quantity?: number
  is_new?: boolean
  on_sale?: boolean
  rating?: number
  date_modified?: string
  date_created?: string
  [key: string]: any // Allow other fields
}

export function transformDecoProduct(decoProduct: DecoNetworkProduct): ProductType {
  // Extract ID
  const id = String(decoProduct.id || decoProduct.product_id || decoProduct.product_code || Math.random())

  // Extract name
  const name = decoProduct.product_name || decoProduct.name || 'Unnamed Product'

  // Extract price (try multiple fields)
  const price = parseFloat(String(decoProduct.price || decoProduct.retail_price || decoProduct.msrp || 0))
  const originPrice = parseFloat(String(decoProduct.msrp || decoProduct.retail_price || price || 0))

  // Extract images
  let images: string[] = []
  if (decoProduct.images && Array.isArray(decoProduct.images)) {
    images = decoProduct.images
  } else if (decoProduct.primary_image) {
    images = [decoProduct.primary_image]
  } else if (decoProduct.image_url) {
    images = [decoProduct.image_url]
  }

  // If no images, use placeholder
  if (images.length === 0) {
    images = ['/images/product/1000x1000.png']
  }

  // Extract colors/variations
  const variations = (decoProduct.colors || []).map((color: any) => ({
    color: color.name || 'default',
    colorCode: color.hex || color.code || '#000000',
    colorImage: color.image || '/images/product/color/48x48.png',
    image: color.image || images[0] || '/images/product/1000x1000.png',
  }))

  // If no variations, create a default one
  if (variations.length === 0) {
    variations.push({
      color: 'default',
      colorCode: '#000000',
      colorImage: '/images/product/color/48x48.png',
      image: images[0] || '/images/product/1000x1000.png',
    })
  }

  // Extract sizes
  const sizes = decoProduct.sizes || decoProduct.available_sizes || ['One Size']

  // Extract category
  let category = 'promotional'
  if (decoProduct.category) {
    category = decoProduct.category
  } else if (decoProduct.categories && Array.isArray(decoProduct.categories)) {
    category = decoProduct.categories[0] || 'promotional'
  }

  // Extract inventory
  const quantity = decoProduct.inventory || decoProduct.stock || decoProduct.quantity || 100

  // Create slug from name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  // Transform to ProductType
  const product: ProductType = {
    id,
    category,
    type: 'promotional-product',
    name,
    gender: 'unisex', // Most promotional products are unisex
    new: decoProduct.is_new || false,
    sale: decoProduct.on_sale || false,
    rate: decoProduct.rating || 0,
    price,
    originPrice,
    brand: decoProduct.supplier || decoProduct.supplier_name || 'DecoNetwork',
    sold: 0, // We don't track this from DecoNetwork
    quantity,
    quantityPurchase: 1,
    sizes,
    variation: variations,
    thumbImage: images.slice(0, 2),
    images,
    description: decoProduct.description || '',
    action: 'quick shop',
    slug,
  }

  return product
}

/**
 * Transform an array of DecoNetwork products
 */
export function transformDecoProducts(decoProducts: DecoNetworkProduct[]): ProductType[] {
  return decoProducts.map(transformDecoProduct)
}

/**
 * Extract products from DecoNetwork API response
 *
 * DecoNetwork API returns data in different formats depending on the endpoint.
 * This function extracts the product array from various response structures.
 */
export function extractProductsFromResponse(response: any): DecoNetworkProduct[] {
  // Try different possible locations for product data
  if (Array.isArray(response)) {
    return response
  }

  if (response.data && Array.isArray(response.data)) {
    return response.data
  }

  if (response.products && Array.isArray(response.products)) {
    return response.products
  }

  if (response.result && Array.isArray(response.result)) {
    return response.result
  }

  // If single product object
  if (response.data && typeof response.data === 'object' && !Array.isArray(response.data)) {
    return [response.data]
  }

  // If response itself is a single product
  if (response.id || response.product_id) {
    return [response]
  }

  console.warn('Could not extract products from response:', response)
  return []
}
