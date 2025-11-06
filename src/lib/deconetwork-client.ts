/**
 * DecoNetwork Product Management API Client
 *
 * Authenticates using username/password and provides methods
 * to fetch products from DecoNetwork's catalog.
 */

interface DecoNetworkConfig {
  username: string
  password: string
  baseUrl: string
}

interface ProductSearchParams {
  field?: number
  condition?: number
  value?: string
  date1?: string
  date2?: string
  offset?: number
  limit?: number
}

interface DecoNetworkResponse<T> {
  response_status: {
    code: number
    severity: string
    message?: string
  }
  data?: T
}

export class DecoNetworkClient {
  private config: DecoNetworkConfig

  constructor() {
    this.config = {
      username: process.env.DECONETWORK_USERNAME!,
      password: process.env.DECONETWORK_PASSWORD!,
      baseUrl: process.env.DECONETWORK_API_BASE_URL || 'https://developer.deconetwork.com',
    }

    if (!this.config.username || !this.config.password) {
      throw new Error('DecoNetwork credentials not configured in environment variables')
    }
  }

  /**
   * Search products with filters
   *
   * Field values:
   * 1 = Product Code
   * 2 = Product Name
   * 3 = Supplier
   * 4 = Product ID
   * 5 = Date Modified
   *
   * Condition values:
   * 0 = ==
   * 1 = !=
   * 2 = <
   * 3 = >
   * 4 = >=
   * 5 = <=
   * 6 = Between
   */
  async searchProducts(params: ProductSearchParams = {}) {
    try {
      const url = `${this.config.baseUrl}/api/json/manage_products/find`

      const body = new URLSearchParams({
        username: this.config.username,
        password: this.config.password,
        ...Object.fromEntries(
          Object.entries(params).map(([key, value]) => [key, String(value)])
        ),
      })

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: DecoNetworkResponse<any> = await response.json()

      if (data.response_status.severity === 'error') {
        throw new Error(data.response_status.message || 'DecoNetwork API error')
      }

      return data
    } catch (error) {
      console.error('DecoNetwork search error:', error)
      throw error
    }
  }

  /**
   * Get a single product by ID
   */
  async getProduct(id: string | number) {
    try {
      const url = `${this.config.baseUrl}/api/json/manage_products/get?username=${encodeURIComponent(this.config.username)}&password=${encodeURIComponent(this.config.password)}&id=${id}`

      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: DecoNetworkResponse<any> = await response.json()

      if (data.response_status.severity === 'error') {
        throw new Error(data.response_status.message || 'DecoNetwork API error')
      }

      return data
    } catch (error) {
      console.error('DecoNetwork get product error:', error)
      throw error
    }
  }

  /**
   * Get multiple products by IDs (max 100)
   */
  async getProducts(ids: (string | number)[]) {
    try {
      const idsString = ids.slice(0, 100).join(',') // Max 100 IDs

      const url = `${this.config.baseUrl}/api/json/manage_products/get?username=${encodeURIComponent(this.config.username)}&password=${encodeURIComponent(this.config.password)}&ids=${idsString}`

      const response = await fetch(url, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: DecoNetworkResponse<any> = await response.json()

      if (data.response_status.severity === 'error') {
        throw new Error(data.response_status.message || 'DecoNetwork API error')
      }

      return data
    } catch (error) {
      console.error('DecoNetwork get products error:', error)
      throw error
    }
  }

  /**
   * Get all products (paginated)
   */
  async getAllProducts(limit: number = 100, offset: number = 0) {
    try {
      // Search with no filters to get all products
      return await this.searchProducts({
        limit: Math.min(limit, 100), // Max 100 per request
        offset,
      })
    } catch (error) {
      console.error('DecoNetwork get all products error:', error)
      throw error
    }
  }

  /**
   * Search products by name
   */
  async searchProductsByName(name: string, limit: number = 100) {
    try {
      return await this.searchProducts({
        field: 2, // Product Name
        condition: 0, // ==
        value: name,
        limit: Math.min(limit, 100),
      })
    } catch (error) {
      console.error('DecoNetwork search by name error:', error)
      throw error
    }
  }

  /**
   * Get products modified after a certain date
   */
  async getProductsModifiedAfter(date: string, limit: number = 100) {
    try {
      return await this.searchProducts({
        field: 5, // Date Modified
        condition: 4, // >=
        date1: date, // Format: YYYY-MM-DDTHH:MM:SS
        limit: Math.min(limit, 100),
      })
    } catch (error) {
      console.error('DecoNetwork get modified products error:', error)
      throw error
    }
  }
}

// Export singleton instance
export const decoClient = new DecoNetworkClient()
