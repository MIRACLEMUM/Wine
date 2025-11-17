import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-900 z-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-900 z-10">
          <div>
            <h2 className="text-2xl font-serif text-white">Shopping Cart</h2>
            <p className="text-gray-400 text-sm">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-black/50 p-4 rounded-lg border border-zinc-800">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{item.name}</h3>
                    <p className="text-amber-500 font-semibold mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center transition"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center transition"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-400 transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-800 sticky bottom-0 bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-2xl font-bold text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
