import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connect Farmers
            <span className="block text-primary">Directly with Buyers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A revolutionary platform that eliminates middlemen, ensuring fair prices for farmers 
            and fresh produce for buyers. Join the agricultural revolution today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="harvest" className="text-lg px-8 py-6">
              Start Selling
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="fresh" className="text-lg px-8 py-6">
              Browse Products
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Active Farmers</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center">
                <TrendingUp className="h-8 w-8 text-fresh-green" />
              </div>
              <div className="text-2xl font-bold text-foreground">30%</div>
              <div className="text-muted-foreground">Higher Farmer Income</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center">
                <Shield className="h-8 w-8 text-harvest" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-muted-foreground">Fair Trade Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};