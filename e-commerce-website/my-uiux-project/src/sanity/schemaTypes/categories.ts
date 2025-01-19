import { defineType } from "sanity";

export default defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    // Category Title
    {
      name: "title",
      title: "Category Title",
      type: "string",
      description: "The name of the category, such as 'Electronics' or 'Apparel'.",
      validation: (Rule) => Rule.required().min(3).max(50),
    },

    // Category Image
    {
      name: "image",
      title: "Category Image",
      type: "image",
      description: "An image representing the category.",
      options: {
        hotspot: true, // Enable hotspot for better cropping
      },
      validation: (Rule) => Rule.required(),
    },

    // Number of Products
    {
      name: "products",
      title: "Number of Products",
      type: "number",
      description: "The total number of products in this category.",
      validation: (Rule) => Rule.required().integer().min(0),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "products",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: subtitle ? `${subtitle} products` : "No products count provided",
      };
    },
  },
});
