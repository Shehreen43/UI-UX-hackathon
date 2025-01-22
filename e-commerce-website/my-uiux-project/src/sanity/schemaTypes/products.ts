export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount'
    },
    {
      name:'rating',
      type:'number',
      title:'Rating',
      description:'Rating of the product'
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add tags like "new arrival", "bestseller", etc.'
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add sizes like S , M , L , XL , XXL'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true // Enables cropping and focal point selection
      }
    }
  ]
};

// import { Rule } from '@sanity/types';

// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Product Name',
//       validation: (Rule: Rule) =>
//         Rule.required().min(3).max(100).warning('The name should be between 3 and 100 characters'),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: (Rule: Rule) =>
//         Rule.required().min(10).warning('The description should be at least 10 characters long'),
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Product Price',
//       validation: (Rule: Rule) =>
//         Rule.required().positive().min(1).warning('Price must be a positive number'),
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       title: 'Discount Percentage',
//       validation: (Rule: Rule) =>
//         Rule.min(0).max(100).warning('Discount percentage must be between 0 and 100'),
//     },
//     {
//       name: 'priceWithoutDiscount',
//       type: 'number',
//       title: 'Price Without Discount',
//       description: 'Original price before discount',
//       validation: (Rule: Rule) =>
//         Rule.required().positive().min(1).warning('Price must be a positive number'),
//     },
//     {
//       name: 'rating',
//       type: 'number',
//       title: 'Rating',
//       description: 'Rating of the product',
//       validation: (Rule: Rule) =>
//         Rule.min(0).max(5).warning('Rating must be between 0 and 5'),
//     },
//     {
//       name: 'ratingCount',
//       type: 'number',
//       title: 'Rating Count',
//       description: 'Number of ratings',
//       validation: (Rule: Rule) =>
//         Rule.min(0).warning('Rating count must be a positive number'),
//     },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tags',
//       of: [{ type: 'reference', to: { type: 'category' } }],
//       options: {
//         layout: 'tags',
//       },
//       description: 'Add tags like "new arrival", "bestseller", etc.',
//       validation: (Rule: Rule) => Rule.unique().warning('Each tag must be unique'),
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 100,
//         slugify: (input:string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
//       },
//     },
//     {
//       name: 'sizes',
//       type: 'array',
//       title: 'Sizes',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags',
//       },
//       description: 'Add sizes like S, M, L, XL, XXL',
//       validation: (Rule: Rule) => Rule.unique().warning('Each size should be unique'),
//     },
//     {
//       name: 'image',
//       type: 'array',
//       title: 'Product Images',
//       of: [
//         {
//           type: 'image',
//           fields: [
//             {
//               name: 'alt',
//               type: 'text',
//               title: 'Alternative Text',
//               description: 'Descriptive text for accessibility',
//             },
//           ],
//         },
//       ],
//       options: {
//         hotspot: true, // Allows cropping and focal point selection
//       },
//     },
//     {
//       name: 'stock',
//       title: 'Stock',
//       type: 'number',
//       validation: (Rule: Rule) => Rule.required().min(0).warning('Stock should be a non-negative number'),
//     },
//     {
//       name: 'isAvailable',
//       type: 'boolean',
//       title: 'Is Available?',
//       description: 'Mark if the product is available for purchase',
//       initialValue: true,
//     },
//     {
//       name: 'url',
//       type: 'url',
//       title: 'Product Link',
//       description: 'External link to the product (e.g., e-commerce site)',
//       validation: (Rule: Rule) =>
//         Rule.uri().warning('Please enter a valid URL if you want to link to the product'),
//     },
//   ],
// };
