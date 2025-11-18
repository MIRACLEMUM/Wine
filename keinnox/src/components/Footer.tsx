import logo from "/logo.jpg"; // Keep only your logo import

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Keinnox Logo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-xl font-serif text-white">Keinnox</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium spirits for discerning tastes
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#products" className="hover:text-amber-500 transition">Wine</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition">Champagne</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition">Gin</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition">Whisky</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-amber-500 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-500 transition">Contact</a></li>
              <li><a href="/faq" className="hover:text-amber-500 transition">FAQ</a></li>

            <li><a href="/shipping" className="hover:text-amber-500 transition">Shipping</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">Subscribe for exclusive offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
              />
              <button className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Miracle Sunday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
