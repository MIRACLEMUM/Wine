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
    name: "Eva Wine",
    category: "Wine",
    price: 38000,
    image: "/products/evawine.jpeg",
    description: "Intense and complex red wine with layered flavors.",
    rating: 4.5,
    inStock: true,
    year: "2016",
    region: " Italy "
  },

  // ---------- CHAMPAGNE ----------
  {
    id: 6,
    name: "4 Cousins Prestige",
    category: "Champagne",
    price: 110000,
    image: "/products/4cousins.jpg",
    description: "Prestigious champagne with refined luxury bubbles.",
    rating: 5.0,
    inStock: true,
    year: "2012",
    region: "France"
  },
  {
    id: 7,
    name: "Godfather Champagne",
    category: "Champagne",
    price: 30000,
    image: "/products/whisky.jpeg",
    description: "Sweet, rich and smooth champagne for celebrations.",
    rating: 4.7,
    inStock: true,
    region: "France"
  },
  {
    id: 8,
    name: "jack Daniel's Champagne",
    category: "Champagne",
    price: 85000,
    image: "/products/jack.jpg",
    description: "Bold champagne with deep complexity & freshness.",
    rating: 4.8,
    inStock: true,
    region: "France"
  },
  {
    id: 9,
    name: "Four Cousins Rosé",
    category: "Champagne",
    price: 95000,
    image: "/products/4cousins.jpg",
    description: "Luxurious rosé champagne with fruity aroma.",
    rating: 4.9,
    inStock: true,
    region: "France"
  },
  {
    id: 10,
    name: "Gordon's Champagne",
    category: "Champagne",
    price: 90000,
    image: "/products/Gordons.jpg",
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
    name: "Campari Strawberry Gin",
    category: "Gin",
    price: 27000,
    image: "/public/godfather.jpeg",
    description: "Sweet and fruity gin with natural strawberry flavors.",
    rating: 4.5,
    inStock: true,
    region: "UK"
  },
  {
    id: 14,
    name: "Lord's Citrus Gin",
    category: "Gin",
    price: 4000,
    image: "/products/lords.jpg",
    description: "Refreshing gin with zesty citrus botanicals.",
    rating: 4.7,
    inStock: true,
    region: "Scotland"
  },
  {
    id: 15,
    name: "Sir Edward",
    category: "Gin",
    price: 10000,
    image: "/products/sir edward.jpg",
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
    description: " Rich and complex Tennessee whiskey with bold flavors.",
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
    name: "501 Drink",
    category: "Whisky",
    price: 17000,
    image: "/public/products/5011.jpeg",
    description: "Smooth and approachable whisky with rich flavor.",
    rating: 4.5,
    inStock: true,
    region: "Scotland "
  }
];
