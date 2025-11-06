import { NextRequest, NextResponse } from 'next/server'
import { decoClient } from '@/lib/deconetwork-client'
import { extractProductsFromResponse, transformDecoProduct } from '@/lib/deconetwork-transform'

/**
 * GET /api/products/[id]
 *
 * Fetch a single product by ID from DecoNetwork
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    console.log(`Fetching product ${id} from DecoNetwork`)

    const response = await decoClient.getProduct(id)

    console.log('DecoNetwork API Response:', response)

    // Extract product from response
    const decoProducts = extractProductsFromResponse(response)

    if (decoProducts.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Product not found',
        },
        { status: 404 }
      )
    }

    // Transform first product
    const product = transformDecoProduct(decoProducts[0])

    return NextResponse.json({
      success: true,
      data: product,
      source: 'deconetwork',
    })

  } catch (error: any) {
    console.error(`Product ${params.id} API Error:`, error)

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch product',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    )
  }
}
