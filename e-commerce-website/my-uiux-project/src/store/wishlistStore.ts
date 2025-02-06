import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';
import { imageUrl } from '@/lib/imageUrl'; // Ensure this utility correctly generates image URLs from Sanity

// Define the Wishlist Product type
type WishlistProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
};

type WishlistState = {
  wishlist: WishlistProduct[];
  addToWishlist: (product: any) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
  syncWishlist: () => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],

      // Add product to wishlist
      addToWishlist: (product) => {
        const wishlist = get().wishlist;

        // Prevent duplicate entries
        if (wishlist.some((item) => item.id === product._id)) {
          toast.error(`${product.name} is already in your wishlist!`);
          return;
        }

        // Map Sanity Product to Wishlist Product format
        const wishlistProduct: WishlistProduct = {
          id: product._id,
          title: product.name,
          image: product.image ? imageUrl(product.image).url() : '/fallback-image.jpg',
          price: product.price || 0,
        };

        const updatedWishlist = [...wishlist, wishlistProduct];
        set({ wishlist: updatedWishlist });

        toast.success(`${product.name} added to your wishlist!`);
      },

      // Remove product from wishlist
      removeFromWishlist: (id) => {
        const updatedWishlist = get().wishlist.filter((item) => item.id !== id);
        set({ wishlist: updatedWishlist });

        toast.error('Removed from wishlist.');
      },

      // Clear wishlist
      clearWishlist: () => {
        set({ wishlist: [] });
        toast('Wishlist cleared!', { icon: '🗑️' });
      },

      // Sync wishlist from localStorage
      syncWishlist: () => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          set({ wishlist: JSON.parse(storedWishlist) });
        }
      },
    }),
    {
      name: 'wishlist-storage', // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Specify the storage type
    }
  )
);

// import { create } from "zustand";
// import toast from "react-hot-toast";

// // Define the Product type
// type Product = {
//   id: string;
//   title: string;
//   image: string;
//   price: number;
// };

// type WishlistState = {
//   wishlist: Product[];
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (id: string) => void;
//   clearWishlist: () => void;
//   syncWishlist: () => void; // Sync wishlist from localStorage
// };

// export const useWishlistStore = create<WishlistState>((set, get) => ({
//   wishlist: [],

//    // Add product to the wishlist
//   addToWishlist: (product) => {
//     const wishlist = get().wishlist;

//     // Prevent duplicate entries
//     if (wishlist.some((item) => item.id === product.id)) {
//       toast.error(`${product.title} is already in your wishlist!`);
//       return;
//     }

//     // Update wishlist in state
//     const updatedWishlist = [...wishlist, product];
//     set({ wishlist: updatedWishlist });

//     // Save to localStorage
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     toast.success(`${product.title} added to your wishlist!`);
//   },

  
  
//   // Remove product from wishlist
//   removeFromWishlist: (id) => {
//     const updatedWishlist = get().wishlist.filter((item) => item.id !== id);
//     set({ wishlist: updatedWishlist });

//     // Save updated wishlist to localStorage
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     toast.error("Removed from wishlist.");
//   },

//   // Clear the wishlist
//   clearWishlist: () => {
//     set({ wishlist: [] });

//     // Clear from localStorage
//     localStorage.removeItem("wishlist");
//     toast("Wishlist cleared!", { icon: "🗑️" });
//   },

//   // Sync wishlist from localStorage
//   syncWishlist: () => {
//     const storedWishlist = localStorage.getItem("wishlist");

//     if (storedWishlist) {
//       set({ wishlist: JSON.parse(storedWishlist) });
//     }
//   },
// }));
