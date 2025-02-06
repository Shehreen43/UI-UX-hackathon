// AddToWishlist.js
import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlistStore';
import { Product } from '../../sanity.types';

type AddToWishlistProps = {
  product: Product;
};

const AddToWishlist: React.FC<AddToWishlistProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isWishlisted = wishlist.some((item) => item.id === product._id);

  const handleWishlistToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
    if (isWishlisted) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`p-2 rounded-full ${
        isWishlisted ? 'bg-white text-prim_blue' : 'bg-gray-200 text-gray-500'
      } border hover:bg-gray-300 transition duration-300`}
    >
      <Heart className="w-6 h-6" fill={isWishlisted ? 'white' : 'none'} />
    </button>
  );
};

export default AddToWishlist;


// import React from 'react';
// import { Heart } from 'lucide-react';
// import { useWishlistStore } from '@/store/wishlistStore';
// import { Product } from '../../sanity.types';

// type AddToWishlistProps = {
//   product: Product;
// };

// const AddToWishlist: React.FC<AddToWishlistProps> = ({ product }) => {
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
//   const isWishlisted = wishlist.some((item) => item.id === product._id);

//   const handleWishlistToggle = (event: React.MouseEvent) => {
//     event.stopPropagation(); // Prevent the event from bubbling up to parent elements
//     if (isWishlisted) {
//       removeFromWishlist(product._id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <button
//       onClick={handleWishlistToggle}
//       className={`p-2 rounded-full ${
//         isWishlisted ? 'bg-white text-prim_blue'  : 'bg-gray-200 text-gray-500'
//       } border hover:bg-gray-300 transition duration-300`}
//     >
//       <Heart className="w-6 h-6" fill={isWishlisted ? 'white' : 'none'} />
//     </button>
//   );
// };

// export default AddToWishlist;