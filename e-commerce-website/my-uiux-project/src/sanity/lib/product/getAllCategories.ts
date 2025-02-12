import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  // Define Query to fetch categories, ordered by title
  const ALL_CATEGORIES_QUERY = defineQuery(`*[_type == "category"] | order(title asc)`);

  try {
    // Use sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // Return the list of categories, or an empty array if none are found
    return categories.data || []; // Adjust based on the actual structure of the sanityFetch response
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};

