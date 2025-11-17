// src/data/products.ts
import type { Product } from '../types';

export const products: Product[] = [
  // ---------- WINES ----------
  {
    id: 1,
    name: "Chamdor",
    category: "Wine",
    price: 5000,
    image: "/products/wine1.jpg",
    description: "Classic French wine with rich flavors and smooth finish.",
    rating: 4.9,
    inStock: true,
    
    region: " France "
  },
  {
    id: 2,
    name: "Four Cousins",
    category: "Wine",
    price: 8000,
    image: "/products/4cousins.jpg",
    description: "Full-bodied red wine with hints of blackberry and oak.",
    rating: 4.8,
    inStock: true,
    year: "2014",
    region: " South Africa "
  },
  {
    id: 3,
    name: "Moment",
    category: "Wine",
    price: 2500,
    image: "/products/image.png",
    description: " Elegant white wine with crisp acidity and floral notes.",
    rating: 4.7,
    inStock: true,
    year: "2018",
    region: " Chile "
  },
  {
    id: 4,
    name: "Veleta Pinot Noir",
    category: "Wine",
    price: 3000,
    image: "/products/veleta wine.jpg",
    description: "Light, smooth and richly balanced premium Pinot Noir.",
    rating: 4.5,
    inStock: true,
    year: "2020",
    region: " Spain "
  },
  {
    id: 5,
    name: "Villa Antinori Rosso",
    category: "Wine",
    price: 38000,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
    description: "Italian red wine with elegant spice and berry flavors.",
    rating: 4.4,
    inStock: true,
    year: "2019",
    region: "Tuscany, Italy"
  },

  // ---------- CHAMPAGNE ----------
  {
    id: 6,
    name: "Dom Pérignon Vintage",
    category: "Champagne",
    price: 310000,
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800",
    description: "Prestigious champagne with refined luxury bubbles.",
    rating: 5.0,
    inStock: true,
    year: "2012",
    region: "France"
  },
  {
    id: 7,
    name: "Moët & Chandon Nectar",
    category: "Champagne",
    price: 85000,
    image: "https://images.unsplash.com/photo-1532634726-8b9fb99845fb?w=800",
    description: "Sweet, rich and smooth champagne for celebrations.",
    rating: 4.7,
    inStock: true,
    region: "France"
  },
  {
    id: 8,
    name: "Veuve Clicquot Brut",
    category: "Champagne",
    price: 120000,
    image: "https://images.unsplash.com/photo-1605721923406-244c3b6b81df?w=800",
    description: "Iconic yellow label champagne with clean finish.",
    rating: 4.8,
    inStock: true,
    region: "France"
  },
  {
    id: 9,
    name: "Laurent Perrier Rosé",
    category: "Champagne",
    price: 150000,
    image: "https://images.unsplash.com/photo-1598511723964-64a8fbf1c320?w=800",
    description: "Luxurious rosé champagne with fruity aroma.",
    rating: 4.9,
    inStock: true,
    region: "France"
  },
  {
    id: 10,
    name: "Bollinger Special Cuvée",
    category: "Champagne",
    price: 140000,
    image: "https://images.unsplash.com/photo-1558640473-2b1e6f5d5d79?w=800",
    description: "Bold champagne with deep complexity & freshness.",
    rating: 4.7,
    inStock: true,
    region: "France"
  },

  // ---------- GIN ----------
  {
    id: 11,
    name: "Gordon's London Dry",
    category: "Gin",
    price: 8000,
    image: "/products/Gordons.jpg",
    description: "Unique gin infused with quinine, wormwood & lotus leaf.",
    rating: 4.7,
    inStock: true,
    region: "Scotland"
  },
  {
    id: 12,
    name: "Lord's Dry Gin",
    category: "Gin",
    price: 4000,
    image: "/products/lords.jpg",
    description: " Classic gin with a blend of 10 exotic botanicals.",
    rating: 4.6,
    inStock: true,
    region: "UK"
  },
  {
    id: 13,
    name: "Gordon's Pink Gin",
    category: "Gin",
    price: 16000,
    image: "https://images.unsplash.com/photo-1574096079513-d8253ebf6c30?w=800",
    description: "Strawberry-infused gin with modern refreshing taste.",
    rating: 4.5,
    inStock: true,
    region: "UK"
  },
  {
    id: 14,
    name: "Tanqueray No. Ten",
    category: "Gin",
    price: 32000,
    image: "https://images.unsplash.com/photo-1548883354-94bc1d1d3a5b?w=800",
    description: "Premium gin crafted with fresh citrus layers.",
    rating: 4.7,
    inStock: true,
    region: "Scotland"
  },
  {
    id: 15,
    name: "Beefeater London Dry",
    category: "Gin",
    price: 14000,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2af?w=800",
    description: "Classic London dry gin with intense botanicals.",
    rating: 4.4,
    inStock: true,
    region: "UK"
  },

  // ---------- WHISKY ----------
  {
    id: 16,
    name: "Jack Daniel's Single Barrel",
    category: "Whisky",
    price: 25000,
    image: "/products/jack.jpg",
    description: " Rich, full-flavored Tennessee whiskey.",
    rating: 4.8,
    inStock: true,
    region: "Tennessee, USA"
  },
  {
    id: 17,
    name: "Sir Edward",
    category: "Whisky",
    price: 50000,
    image: "/products/sir edward.jpg",
    description: "Ultra-premium blend with exceptional smoothness.",
    rating: 4.9,
    inStock: true,
    region: "  Scotland "
  },
  {
    id: 18,
    name: " 8 PM",
    category: "Whisky",
    price: 9000,
    image: "/products/8pm.jpg",
    description: " Classic blended whisky with rich, smoky flavor.",
    rating: 4.7,
    inStock: true,
    region: "Scotland"
  },
  {
    id: 19,
    name: "Royal Standard",
    category: "Whisky",
    price: 4000,
    image: "/products/royal standard.jpg",
    description: "Smooth and approachable Irish whiskey.",
    rating: 4.6,
    inStock: true,
    region: "Ireland"
  },
  {
    id: 20,
    name: "Chivas Regal 12",
    category: "Whisky",
    price: 30000,
    image: "https://images.unsplash.com/photo-1583321503134-1c87c8fcdbd3?w=800",
    description: "Smooth, rich whisky with warm amber finish.",
    rating: 4.5,
    inStock: true,
    region: "Scotland"
  }
];
