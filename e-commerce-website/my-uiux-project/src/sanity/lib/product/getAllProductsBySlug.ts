import { sanityFetch } from "../live";

export const getAllProductsBySlug = async (slug: string) => {
  const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]`;
  try {
    const product = await sanityFetch({
      query: PRODUCT_QUERY,
      params: { slug },
    });
    return product.data || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};


// import { defineQuery } from "next-sanity"
// import { sanityFetch } from "../live";

// export const getAllProductsBySlug = async (slug: string) => {
//     const PRODUCT_BY_TO_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug] | order(name asc)[0]`);

//     try {
//         //Use sanityFetch to send the query with the slug as a parameter
//         const product = await sanityFetch({
//             query: PRODUCT_BY_TO_QUERY,
//             params: {
//                 slug,
//             }
//         });

//         //Return te product data or null slug as a parameter
//        return product.data || null;
//     } catch (error) {
//         console.error("Error fetching product by ID:", error);
        
//         return null;
//     }
// }