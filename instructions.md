# DecoNetwork Integration Instructions

## Part 1: External Cart API ( Complete)

### What We've Built

The External Cart API allows DecoNetwork to send product data to your site when users add items to their cart.

**Flow:**
1. User browses products on DecoNetwork
2. User adds product to cart
3. DecoNetwork sends data to your API
4. User is redirected back to your site

---

## DecoNetwork Portal Configuration

You've already configured these settings in the DecoNetwork portal:

```
Add To Cart callback url:
https://ltsportland.vercel.app/api/cart/add

Cancel callback url:
https://ltsportland.vercel.app/api/cart/cancel

Commit Order Password:
dN8k2mP9xL4vQ7wR3tY6zB1nC5hF0jG8

Default Shipping Method:
Standard

P3P Header:
[blank]

Options Separator:
[blank]
```

---

## Files Created

1.  **`.env.local`** - Environment variables with commit order password
2.  **`src/app/api/cart/add/route.ts`** - Receives products from DecoNetwork
3.  **`src/app/api/cart/cancel/route.ts`** - Handles cart cancellations

---

## Deployment Instructions

### Step 1: Add Environment Variable to Vercel

**IMPORTANT:** Before deploying, add the environment variable to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project ’ Settings ’ Environment Variables
3. Add new variable:
   - **Name:** `DECONETWORK_COMMIT_ORDER_PASSWORD`
   - **Value:** `dN8k2mP9xL4vQ7wR3tY6zB1nC5hF0jG8`
4. Save

### Step 2: Deploy to GitHub & Vercel

```bash
git add .
git commit -m "Add DecoNetwork External Cart API integration"
git push
```

Vercel will automatically deploy. Wait for deployment to complete.

### Step 3: Test the Endpoints

Visit these URLs to verify they're working:

**Test Add Callback:**
```
https://ltsportland.vercel.app/api/cart/add
```
Expected response: `{"message":"DecoNetwork Add to Cart Endpoint","status":"active","method":"POST required"}`

**Test Cancel Callback:**
```
https://ltsportland.vercel.app/api/cart/cancel
```
Expected response: `{"message":"DecoNetwork Cancel Callback Endpoint","status":"active","method":"POST required"}`

### Step 4: Test with DecoNetwork

1. Go to your DecoNetwork portal
2. Find a product and click "Add to Cart"
3. Configure the product and submit
4. You should see the "Adding to Cart..." screen
5. After 1.5 seconds, you'll be redirected back to your shop

---

## Part 2: Product Management API (L Not Built Yet)

### Current Limitation

Right now, users must browse products on DecoNetwork's website. We **cannot yet** fetch and display DecoNetwork products directly on your site.

### Two Integration Options

**Option A: External Cart Only (Currently Built)**
-  Already working
- User clicks link ’ goes to DecoNetwork
- Browses products there ’ adds to cart ’ returns to your site
- **Pros:** Simple, already complete
- **Cons:** User leaves your site, you don't control UX

**Option B: Product Management API (Recommended)**
- L Not yet built
- Products display directly on YOUR site
- User never leaves your site
- Full control over UI/UX
- Search and filter DecoNetwork catalog
- **Pros:** Better user experience, professional look
- **Cons:** Requires API credentials and implementation

---

## How to Enable Product Fetching (Option B)

### Step 1: Get DecoNetwork API Credentials

1. Log into your DecoNetwork account
2. Go to **Settings ’ API Settings** (or Developer Resources)
3. Look for or generate:
   - **API Key**
   - **API Secret**
   - **API Base URL** (usually `https://api.deconetwork.com/v1`)

### Step 2: Add API Credentials to Environment

Add these to `.env.local`:

```env
# DecoNetwork External Cart API
DECONETWORK_COMMIT_ORDER_PASSWORD=dN8k2mP9xL4vQ7wR3tY6zB1nC5hF0jG8

# DecoNetwork Product Management API (add these)
DECONETWORK_API_KEY=your_api_key_here
DECONETWORK_API_SECRET=your_api_secret_here
DECONETWORK_BASE_URL=https://api.deconetwork.com/v1
```

Also add them to Vercel Environment Variables.

### Step 3: Request Implementation

Once you have API credentials, the following will be built:

**New Files:**
1. `src/lib/deconetwork-client.ts` - API client to communicate with DecoNetwork
2. `src/lib/transform.ts` - Transform DecoNetwork data to your ProductType format
3. `src/app/api/products/route.ts` - Fetch product list
4. `src/app/api/products/[id]/route.ts` - Fetch single product details
5. `src/app/api/categories/route.ts` - Fetch product categories

**Updated Files:**
1. `src/app/shop/breadcrumb-img/page.tsx` - Display DecoNetwork products
2. `src/app/search-result/page.tsx` - Search DecoNetwork catalog
3. `src/components/Home1/Collection.tsx` - Show featured products

**Optional Enhancements:**
- Database caching (PostgreSQL) for better performance
- Product synchronization
- Inventory management
- Order submission to suppliers

### What You'll Get

 Browse thousands of DecoNetwork products on your own site
 Search and filter their entire catalog
 Custom product pages with your LTS Inc branding
 Users never leave your site
 Full control over shopping experience
 Professional B2B e-commerce site

---

## Architecture Overview

### Current (External Cart Only)
```
Your Site ’ [Link] ’ DecoNetwork Site ’ Add to Cart ’ POST to your API ’ Redirect back
```

### Future (With Product Management API)
```
Your Site ’ Fetch Products ’ Display on Your Site ’ Add to Cart ’ Order via API
```

---

## DecoNetwork API Documentation

**Official Resources:**
- Product Management API: https://help.deconetwork.com/hc/en-us/articles/360015345354-Product-Management-API
- Order Management API: https://help.deconetwork.com/hc/en-us/articles/115001306413-Order-Management-API
- Developer Resources: https://www.deconetwork.com/developer-resources/

---

## Troubleshooting

### External Cart Issues

**Products not showing up in cart?**
- Check that environment variable is added to Vercel
- Verify commit password matches in both places
- Check browser console for errors
- Review Vercel function logs for API errors

**Can't access the API endpoints?**
- Ensure deployment completed successfully
- Verify URLs match exactly (https://ltsportland.vercel.app)
- Check DecoNetwork settings for typos

**DecoNetwork shows an error?**
- Double-check callback URLs are correct
- Ensure no typos in commit order password
- Test endpoints directly first

### Product API Issues (When Implemented)

**Products not loading?**
- Verify API credentials are correct
- Check that API key has proper permissions
- Review API rate limits
- Check Vercel function logs

---

## Next Steps

### If You Have API Credentials
Share them and we'll build the Product Management API integration to display DecoNetwork products directly on your site.

### If You Don't Have API Access
Contact DecoNetwork support to:
- Enable API access for your account
- Get your API credentials
- Verify which API endpoints you have access to

### If Using External Cart Only
You're ready to go! Just:
1. Deploy to Vercel (with environment variable)
2. Test the endpoints
3. Link to DecoNetwork from your site

---

## Summary

** Completed:**
- External Cart API callbacks
- Environment configuration
- Deployment instructions

**ó Pending (needs API credentials):**
- Product fetching from DecoNetwork
- Display products on your site
- Search and filtering
- Full catalog integration

**=ç Contact:** Once you have API credentials, provide them to continue implementation.
