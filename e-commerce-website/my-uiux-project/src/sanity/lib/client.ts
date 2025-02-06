import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: dataset || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: apiVersion || "2024-02-05",
  useCdn: true, // Set to false if using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // FIXED: Correct environment variable name
  stega: {
    studioUrl: process.env.VERCEL
      ? `https://${process.env.VERCEL_URL}/studio`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  },
});
