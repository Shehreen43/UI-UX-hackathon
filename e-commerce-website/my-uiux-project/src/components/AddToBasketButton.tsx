'use client';

import { useEffect, useState } from 'react';
import { Product } from '../../sanity.types';
import useBasketStore from '../../store/store';
import { toast } from 'react-toastify';

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

const AddToBasketButton = ({ product, disabled }: AddToBasketButtonProps) => {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders on the client-side to prevent hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const isStockExceeded = itemCount >= (product.stock || 0);
  const stockRemaining = (product.stock || 0) - itemCount;

  const handleAddItem = () => {
    if (!isStockExceeded) {
      addItem(product);
      toast.success(`Added ${product.name} to your basket.`);
  
      if (stockRemaining <= 3 && stockRemaining > 0) {
        toast.info(`Only ${stockRemaining} left in stock.`, { autoClose: 4000 });
      }
    } else {
      toast.error('You’ve reached the maximum stock limit for this product.', { autoClose: 5000 });
    }
  };  

  const handleRemoveItem = () => {
    removeItem(product._id);
    toast.info(`Removed ${product.name} from your basket.`);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Buttons and Item Count */}
      <div className="flex items-center space-x-2">
        {/* Decrease Button */}
        <button
          onClick={handleRemoveItem}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
          ${itemCount === 0 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
          disabled={itemCount === 0 || disabled}
        >
          <span className="text-xl font-bold">-</span>
        </button>

        {/* Item Count */}
        <span className="w-8 text-center font-bold">{itemCount}</span>

        {/* Increase Button */}
        <button
          onClick={handleAddItem}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
          ${isStockExceeded ? 'bg-gray-100 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={isStockExceeded || disabled}
        >
          <span className="text-xl font-bold text-white">+</span>
        </button>
      </div>
    </div>
  );
};

export default AddToBasketButton;
