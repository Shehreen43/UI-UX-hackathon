import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function uploadImageToSanity(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    return asset._id;
  } catch (error) {
    console.error('Image upload error:', error.message);
    return null;
  }
}

async function importCategories() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    const categories = response.data;

    for (const category of categories) {
      const categoryData = {
        title: category,
        image: `https://via.placeholder.com/150?text=${encodeURIComponent(category)}`,
        products: 0,
      };

      const imageRef = await uploadImageToSanity(categoryData.image);
      const sanityCategory = {
        _type: 'categories',
        title: categoryData.title,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        products: categoryData.products,
      };

      const result = await client.create(sanityCategory);
      console.log(`Category uploaded: ${result._id}`);
    }
  } catch (error) {
    console.error('Error importing categories:', error.message);
  }
}

importCategories();


// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// // Function to upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// // Function to import categories
// async function importCategories() {
//   try {
//     console.log('Fetching categories from API...');
//     const response = await axios.get('https://fakestoreapi.com/products/categories'); // Example API
//     const categories = response.data;
//     console.log(`Fetched ${categories.length} categories`);

//     for (const category of categories) {
//       console.log(`Processing category: ${category}`);

//       // Example category data, replace this with your API's structure
//       const categoryData = {
//         title: category, // Replace with your API field
//         image: `https://via.placeholder.com/150?text=${encodeURIComponent(category)}`, // Placeholder for image
//         products: 0, // Replace with actual count if available
//       };

//       let imageRef = null;
//       if (categoryData.image) {
//         imageRef = await uploadImageToSanity(categoryData.image);
//       }

//       const sanityCategory = {
//         _type: 'categories',
//         title: categoryData.title,
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef,
//               },
//             }
//           : undefined,
//         products: categoryData.products,
//       };

//       console.log('Uploading category to Sanity:', sanityCategory.title);
//       const result = await client.create(sanityCategory);
//       console.log(`Category uploaded successfully: ${result._id}`);
//     }

//     console.log('Category migration completed successfully!');
//   } catch (error) {
//     console.error('Error importing categories:', error);
//   }
// }

// // Run the migration
// importCategories();


