import { NextRequest, NextResponse } from 'next/server'

/**
 * DecoNetwork External Cart API - Add to Cart Callback
 *
 * This endpoint receives product data from DecoNetwork when a user
 * adds a product to their cart through the DecoNetwork interface.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the form data sent by DecoNetwork
    const formData = await request.formData()

    // Verify the commit order password for security
    const commitPassword = formData.get('commit_order_password')
    if (commitPassword !== process.env.DECONETWORK_COMMIT_ORDER_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Extract product data from DecoNetwork
    const productData = {
      id: formData.get('product_id') as string,
      name: formData.get('product_name') as string,
      price: parseFloat(formData.get('price') as string || '0'),
      quantity: parseInt(formData.get('quantity') as string || '1'),
      selectedSize: formData.get('size') as string || '',
      selectedColor: formData.get('color') as string || '',
      imageUrl: formData.get('image_url') as string,
      sku: formData.get('sku') as string,
      supplier: formData.get('supplier') as string || 'DecoNetwork',
      description: formData.get('description') as string || '',
      options: formData.get('options') as string || '', // Custom options
    }

    // Log for debugging (remove in production)
    console.log('DecoNetwork Product Data:', productData)

    // Return HTML that closes the DecoNetwork popup and adds to cart
    // This HTML will be displayed in the DecoNetwork iframe/popup
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Adding to Cart...</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          .spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 1rem auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          h2 { margin: 0 0 1rem 0; }
          p { margin: 0.5rem 0; opacity: 0.9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="spinner"></div>
          <h2>Adding to Cart</h2>
          <p>${productData.name}</p>
          <p>Quantity: ${productData.quantity}</p>
        </div>
        <script>
          // Store product data in sessionStorage for the parent window to access
          const productData = ${JSON.stringify(productData)};

          try {
            // Store in sessionStorage
            sessionStorage.setItem('decoNetworkProduct', JSON.stringify(productData));

            // Try to communicate with parent window
            if (window.opener) {
              window.opener.postMessage({
                type: 'DECONETWORK_ADD_TO_CART',
                product: productData
              }, window.location.origin);
            } else if (window.parent !== window) {
              window.parent.postMessage({
                type: 'DECONETWORK_ADD_TO_CART',
                product: productData
              }, window.location.origin);
            }

            // Redirect back to the site after a brief delay
            setTimeout(() => {
              window.location.href = '/shop/breadcrumb-img?added=' + encodeURIComponent(productData.name);
            }, 1500);
          } catch (err) {
            console.error('Error adding to cart:', err);
            // Fallback: redirect immediately
            window.location.href = '/shop/breadcrumb-img';
          }
        </script>
      </body>
      </html>
    `

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })

  } catch (error) {
    console.error('Add to cart error:', error)

    // Return error HTML
    const errorHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error</title>
        <style>
          body {
            font-family: sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: #f44336;
            color: white;
          }
        </style>
      </head>
      <body>
        <div>
          <h2>Error adding to cart</h2>
          <p>Please try again or contact support.</p>
        </div>
      </body>
      </html>
    `

    return new NextResponse(errorHtml, {
      status: 500,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }
}

// Also handle GET requests for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'DecoNetwork Add to Cart Endpoint',
    status: 'active',
    method: 'POST required',
  })
}
