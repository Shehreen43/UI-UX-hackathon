
/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Sale = {
  _id: string;
  _type: "sale";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  discountAmount?: number;
  couponCode?: string;
  validForm?: string;
  validUntil?: string;
  isActive?: boolean;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  products?: Array<{
    product?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "product";
    };
    quantity?: number;
    _key: string;
  }>;
  totalPrice?: number;
  currency?: string;
  amountDiscount?: number;
  status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  orderDate?: string;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  products?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "product";
  }>;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating?: number;
  ratingCount?: number;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  sizes?: Array<string>;
  stock?: number;
  isAvailable?: boolean;
  url?: string;
  variants?: Array<{
    color?: string;
    style?: string;
    price?: number;
    stock?: number;
    _key: string;
  }>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Sale | Order | Category | Product | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/orders/getMyOrders.tsx
// Variable: MY_ORDERS_QUERY
// Query: *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {            ...,            products[] {                ...,                product-> {                    name,                    price,                    currency,                    image                }            }        }
export type MY_ORDERS_QUERYResult = Array<{
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  products: Array<{
    product: {
      name: string | null;
      price: number | null;
      currency: null;
      image: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      } | null;
    } | null;
    quantity?: number;
    _key: string;
  }> | null;
  totalPrice?: number;
  currency?: string;
  amountDiscount?: number;
  status?: "cancelled" | "delivered" | "paid" | "pending" | "shipped";
  orderDate?: string;
}>;

// Source: ./src/sanity/lib/product/getAllBestsellerProducts.ts
// Variable: ALL_Bestseller_PRODUCTS_QUERY
// Query: *[_type == "product" && "bestseller" in tags] | order(name asc)
export type ALL_Bestseller_PRODUCTS_QUERYResult = Array<never>;

// Source: ./src/sanity/lib/product/getAllCategories.ts
// Variable: ALL_CATEGORIES_QUERY
// Query: *[_type == "category"] | order(title asc)
export type ALL_CATEGORIES_QUERYResult = Array<{
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  products?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "product";
  }>;
}>;

// Source: ./src/sanity/lib/product/getAllProducts.ts
// Variable: ALL_PRODUCTS_QUERY
// Query: *[_type == "product"] | order(name asc)
export type ALL_PRODUCTS_QUERYResult = Array<{
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating?: number;
  ratingCount?: number;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  sizes?: Array<string>;
  stock?: number;
  isAvailable?: boolean;
  url?: string;
  variants?: Array<{
    color?: string;
    style?: string;
    price?: number;
    stock?: number;
    _key: string;
  }>;
}>;

// Source: ./src/sanity/lib/product/getAllProductsBySlug.ts
// Variable: COMMENT_QUERY
// Query: *[_type == "comment" && product._ref == $productId] | order(createdAt desc)
export type COMMENT_QUERYResult = Array<never>;

// Source: ./src/sanity/lib/product/getProductByCategory.tsx
// Variable: PRODUCT_BY_CATEGORY_QUERY
// Query: *[_type == "product" && category->slug.current == $categorySlug] | order(name asc)
export type PRODUCT_BY_CATEGORY_QUERYResult = Array<{
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating?: number;
  ratingCount?: number;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  sizes?: Array<string>;
  stock?: number;
  isAvailable?: boolean;
  url?: string;
  variants?: Array<{
    color?: string;
    style?: string;
    price?: number;
    stock?: number;
    _key: string;
  }>;
}>;

// Source: ./src/sanity/lib/product/searchProductByName.ts
// Variable: PRODUCT_SEARCH_QUERY
// Query: *[_type == "product" && name match $searchParam] | order(name asc)
export type PRODUCT_SEARCH_QUERYResult = Array<{
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  price?: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating?: number;
  ratingCount?: number;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  sizes?: Array<string>;
  stock?: number;
  isAvailable?: boolean;
  url?: string;
  variants?: Array<{
    color?: string;
    style?: string;
    price?: number;
    stock?: number;
    _key: string;
  }>;
}>;

// Source: ./src/sanity/lib/sales/getActiveSaleByCouponCode.ts
// Variable: ACTIVE_SALE_BY_COUPON_QUERY
// Query: *[_type == "sale" && isActive == true && couponCode == $couponCode] | order(validForm desc)[0]
export type ACTIVE_SALE_BY_COUPON_QUERYResult = {
  _id: string;
  _type: "sale";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  discountAmount?: number;
  couponCode?: string;
  validForm?: string;
  validUntil?: string;
  isActive?: boolean;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n        *[_type == \"order\" && clerkUserId == $userId] | order(orderDate desc) {\n            ...,\n            products[] {\n                ...,\n                product-> {\n                    name,\n                    price,\n                    currency,\n                    image\n                }\n            }\n        }\n    ": MY_ORDERS_QUERYResult;
    "*[_type == \"product\" && \"bestseller\" in tags] | order(name asc)": ALL_Bestseller_PRODUCTS_QUERYResult;
    "*[_type == \"category\"] | order(title asc)": ALL_CATEGORIES_QUERYResult;
    "*[_type == \"product\"] | order(name asc)": ALL_PRODUCTS_QUERYResult;
    "\n    *[_type == \"comment\" && product._ref == $productId] | order(createdAt desc)\n  ": COMMENT_QUERYResult;
    "\n        *[_type == \"product\" && category->slug.current == $categorySlug] | order(name asc)\n    ": PRODUCT_BY_CATEGORY_QUERYResult;
    "\n    *[_type == \"product\" && name match $searchParam] | order(name asc)\n  ": PRODUCT_SEARCH_QUERYResult;
    "*[_type == \"sale\" && isActive == true && couponCode == $couponCode] | order(validForm desc)[0]": ACTIVE_SALE_BY_COUPON_QUERYResult;
  }
}
