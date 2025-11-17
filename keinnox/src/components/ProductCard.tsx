import { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Star, X } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="relative bg-zinc-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      
      {/* Clickable Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => setShowDescription(true)}
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        {product.year && <p className="text-gray-400 text-sm">{product.year}</p>}
        {product.region && <p className="text-gray-400 text-sm">{product.region}</p>}

        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-700'}`}
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-500 font-bold text-lg">
            ₦{product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-full font-medium transition ${
              product.inStock
                ? 'bg-amber-500 text-black hover:bg-amber-400'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Transparent Pop-up Description Overlay */}
      {showDescription && (
        <div
          className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center p-6 rounded-lg text-center text-gray-200 z-50 transition-opacity duration-300"
        >
          <button
            onClick={() => setShowDescription(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-amber-500"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          {product.year && <p className="text-gray-200 text-sm">{product.year}</p>}
          {product.region && <p className="text-gray-200 text-sm">{product.region}</p>}
          <p className="mt-4 text-gray-100">{product.description}</p>
        </div>
      )}
    </div>
  );
};
