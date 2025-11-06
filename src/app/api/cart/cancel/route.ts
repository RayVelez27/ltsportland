import { NextRequest, NextResponse } from 'next/server'

/**
 * DecoNetwork External Cart API - Cancel Callback
 *
 * This endpoint is called when a user cancels or closes the
 * DecoNetwork cart interface without adding products.
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

    // Log cancellation (optional)
    console.log('DecoNetwork cart cancelled by user')

    // Return HTML that closes the DecoNetwork popup and returns to shop
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Cancelled</title>
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
          h2 { margin: 0 0 1rem 0; }
          p { margin: 0.5rem 0; opacity: 0.9; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Cart Cancelled</h2>
          <p>Returning to products...</p>
        </div>
        <script>
          // Notify parent window (if in iframe/popup)
          try {
            if (window.opener) {
              window.opener.postMessage({
                type: 'DECONETWORK_CART_CANCELLED'
              }, window.location.origin);
              window.close();
            } else if (window.parent !== window) {
              window.parent.postMessage({
                type: 'DECONETWORK_CART_CANCELLED'
              }, window.location.origin);
            }
          } catch (err) {
            console.log('Could not communicate with parent window');
          }

          // Redirect back to shop
          setTimeout(() => {
            window.location.href = '/shop/breadcrumb-img';
          }, 1000);
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
    console.error('Cancel callback error:', error)

    // Return simple redirect on error
    const errorHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="refresh" content="0;url=/shop/breadcrumb-img">
      </head>
      <body>
        <p>Redirecting...</p>
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
    message: 'DecoNetwork Cancel Callback Endpoint',
    status: 'active',
    method: 'POST required',
  })
}
