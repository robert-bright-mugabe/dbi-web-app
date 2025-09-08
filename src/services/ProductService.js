// src/services/ProductService.js
export class ProductService {
  constructor() {
    this.products = [
      {
        id: "liquid-detergent",
        name: "Liquid Detergent",
        description: "Powerful plant-based formula for spotless laundry. Gentle on fabrics, tough on stains.",
        price: 18000,
        image: "/images/liquid-detergent.jpg",
        stock: 15,
      },
      {
    id: "toilet-bowl-cleaner",
    name: "Toilet Bowl Cleaner",
    description: "Eco-safe cleaner that removes tough stains and deodorizes, leaving your bathroom fresh.",
    price: 12000,
    image: "./images/toilet-bowl-cleaner.jpg",
    stock: 20
  },
  {
    id: "disinfectant-spray",
    name: "Disinfectant Spray",
    description: "Natural disinfectant spray kills 99.9% of germs. Safe for your family and the environment.",
    price: 15000,
    image: "./images/disinfectant-spray.jpg",
    stock: 10
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    description: "Streak-free shine for windows and mirrors. Ammonia-free and eco-friendly.",
    price: 10000,
    image: "./images/glass-cleaner.jpg",
    stock: 18
  },
  {
    id: "floor-cleaner",
    name: "Floor Cleaner",
    description: "Concentrated formula for sparkling clean floors. Safe for kids and pets.",
    price: 14000,
    image: "./images/floor-cleaner.jpg",
    stock: 22
  },
  {
    id: "multi-surface-cleaner",
    name: "Multi-Surface Cleaner",
    description: "Versatile cleaner for kitchens, bathrooms, and more. Leaves a fresh scent.",
    price: 13000,
    image: "./images/multi-surface-cleaner.jpg",
    stock: 25
  },
  {
    id: "fabric-softener",
    name: "Fabric Softener",
    description: "Keeps clothes soft and static-free with a gentle, natural fragrance.",
    price: 11000,
    image: "./images/fabric-softener.jpg",
    stock: 17
  },
  {
    id: "dishwashing-liquid",
    name: "Dishwashing Liquid",
    description: "Cuts through grease for sparkling dishes. Gentle on hands, tough on grime.",
    price: 9000,
    image: "./images/dishwashing-liquid.jpg",
    stock: 30
  },
  {
    id: "air-freshener",
    name: "Air Freshener",
    description: "Natural essential oil blend for a long-lasting, fresh-smelling home.",
    price: 8000,
    image: "./images/air-freshener.jpg",
    stock: 28
  },
  {
    id: "hand-sanitizer",
    name: "Hand Sanitizer",
    description: "Alcohol-based sanitizer kills 99.9% of germs. Moisturizes as it cleans.",
    price: 7000,
    image: "./images/hand-sanitizer.jpg",
    stock: 40
  }
    ];
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((p) => p.id === id);
  }
}