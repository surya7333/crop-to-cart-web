import { ProductCard } from "./ProductCard";
import tomatoesImage from "@/assets/tomatoes.jpg";
import leafyGreensImage from "@/assets/leafy-greens.jpg";
import peppersImage from "@/assets/peppers.jpg";

const products = [
  {
    image: tomatoesImage,
    name: "Organic Cherry Tomatoes",
    farmer: "Maria Rodriguez",
    location: "Sonoma Valley, CA",
    price: "$4.99/lb",
    rating: 4.8,
    organic: true,
    inStock: true
  },
  {
    image: leafyGreensImage,
    name: "Fresh Mixed Greens",
    farmer: "John Anderson",
    location: "Portland, OR",
    price: "$3.49/lb",
    rating: 4.9,
    organic: true,
    inStock: true
  },
  {
    image: peppersImage,
    name: "Rainbow Bell Peppers",
    farmer: "Sarah Chen",
    location: "Fresno, CA",
    price: "$2.99/lb",
    rating: 4.7,
    organic: false,
    inStock: false
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fresh from the Farm
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium quality produce directly from local farmers. 
            Fresh, sustainable, and fairly priced.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-medium text-lg underline underline-offset-4 transition-smooth">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};