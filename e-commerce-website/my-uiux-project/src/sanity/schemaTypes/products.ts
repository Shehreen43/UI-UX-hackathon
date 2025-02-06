import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon, 
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100).warning('Product name should be between 3 and 100 characters'),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).warning('Description should be at least 10 characters long'),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0).warning('Price must be a positive number'),
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100).warning('Discount percentage must be between 0 and 100'),
    }),
    defineField({
      name: "priceWithoutDiscount",
      title: "Price Without Discount",
      type: "number",
      description: "Original price before discount",
      validation: (Rule) => Rule.required().min(0).warning('Price must be a positive number'),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5).warning('Rating must be between 0 and 5'),
    }),
    defineField({
      name: "ratingCount",
      title: "Rating Count",
      type: "number",
      validation: (Rule) => Rule.min(0).warning('Rating count must be a positive number'),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      description: 'Add category like "new arrival", "bestseller", etc.',
      validation: (Rule) => Rule.unique().warning('Each tag must be unique'),
    }),
    // defineField({
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     layout: "tags",
    //   },
    //   description: 'Add tags like "new arrival", "bestseller", etc.',
    //   validation: (Rule) => Rule.unique().warning('Each tag must be unique'),
    // }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: 'Add sizes like S, M, L, XL, XXL',
      validation: (Rule) => Rule.unique().warning('Each size should be unique'),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0).warning('Stock should be a non-negative number'),
    }),
    defineField({
      name: "isAvailable",
      title: "Is Available?",
      type: "boolean",
      description: "Mark if the product is available for purchase",
      initialValue: true,
    }),
    defineField({
      name: "url",
      title: "Product Link",
      type: "url",
      description: "External link to the product (e.g., e-commerce site)",
    }),
    // New Variant Option (e.g., Color, Style)
    defineField({
      name: "variants",
      title: "Product Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "color",
              title: "Color",
              type: "string",
              validation: (Rule) => Rule.required().min(1).warning('Please specify a color for the variant'),
            }),
            defineField({
              name: "style",
              title: "Style",
              type: "string",
              validation: (Rule) => Rule.required().min(1).warning('Please specify a style for the variant'),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.min(0).warning('Price for the variant must be a positive number'),
            }),
            defineField({
              name: "stock",
              title: "Stock",
              type: "number",
              validation: (Rule) => Rule.min(0).warning('Stock for the variant must be a non-negative number'),
            }),
          ],
        },
      ],
      description: 'Add variants like different colors or styles for the product.',
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(select: { title: string; media: any; price?: number }) {
      return {
        title: select.title,
        subtitle: select.price ? `$${select.price.toFixed(2)}` : "No price set",
        media: select.media,
      };
    },
  },
});
