import { NextRequest, NextResponse } from 'next/server'
import { decoClient } from '@/lib/deconetwork-client'
import { extractProductsFromResponse, transformDecoProducts } from '@/lib/deconetwork-transform'

/**
 * GET /api/products
 *
 * Fetch products from DecoNetwork with optional filters
 *
 * Query parameters:
 * - search: Search products by name
 * - limit: Number of products to return (max 100, default 20)
 * - offset: Pagination offset (default 0)
 * - category: Filter by category (if supported)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    console.log('Fetching products from DecoNetwork:', { search, limit, offset })

    let response

    if (search) {
      // Search products by name
      response = await decoClient.searchProductsByName(search, limit)
    } else {
      // Get all products (paginated)
      response = await decoClient.getAllProducts(limit, offset)
    }

    console.log('DecoNetwork API Response:', response)

    // Extract products from response
    const decoProducts = extractProductsFromResponse(response)

    console.log(`Found ${decoProducts.length} products from DecoNetwork`)

    // Transform to ProductType format
    const products = transformDecoProducts(decoProducts)

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length,
      limit,
      offset,
      source: 'deconetwork',
    })

  } catch (error: any) {
    console.error('Products API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch products',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    )
  }
}

/**
 * POST /api/products
 *
 * Advanced product search with custom filters
 *
 * Body parameters:
 * - field: Field to search (1=Code, 2=Name, 3=Supplier, 4=ID, 5=Date)
 * - condition: Condition (0===, 1=!=, 2=<, 3=>, 4=>=, 5=<=, 6=Between)
 * - value: Search value
 * - date1: Start date (for date searches)
 * - date2: End date (for Between condition)
 * - limit: Number of products (max 100)
 * - offset: Pagination offset
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Advanced product search:', body)

    const response = await decoClient.searchProducts(body)

    console.log('DecoNetwork API Response:', response)

    // Extract products from response
    const decoProducts = extractProductsFromResponse(response)

    console.log(`Found ${decoProducts.length} products from DecoNetwork`)

    // Transform to ProductType format
    const products = transformDecoProducts(decoProducts)

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length,
      source: 'deconetwork',
    })

  } catch (error: any) {
    console.error('Products Search API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to search products',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    )
  }
}
