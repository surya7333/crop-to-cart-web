import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sprout, ShoppingCart } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Farmers CTA */}
          <Card className="p-8 text-center border-0 shadow-card bg-background/95 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Are You a Farmer?
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join thousands of farmers who have increased their income by 30% 
              through direct sales. No middlemen, fair prices, and growing customer base.
            </p>
            
            <ul className="text-left space-y-2 mb-6 text-sm text-muted-foreground">
              <li>✓ Set your own prices</li>
              <li>✓ Track sales and analytics</li>
              <li>✓ Connect with local buyers</li>
              <li>✓ Sustainable farming support</li>
            </ul>
            
            <Button variant="harvest" size="lg" className="w-full">
              Start Selling Today
              <ArrowRight className="ml-2" />
            </Button>
          </Card>
          
          {/* Buyers CTA */}
          <Card className="p-8 text-center border-0 shadow-card bg-background/95 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fresh-green/10 mb-6">
              <ShoppingCart className="h-8 w-8 text-fresh-green" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Looking for Fresh Produce?
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get the freshest produce directly from local farms. Support sustainable 
              agriculture while enjoying premium quality at fair prices.
            </p>
            
            <ul className="text-left space-y-2 mb-6 text-sm text-muted-foreground">
              <li>✓ Farm-fresh quality guaranteed</li>
              <li>✓ Support local farmers</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Seasonal variety</li>
            </ul>
            
            <Button variant="fresh" size="lg" className="w-full">
              Browse Products
              <ArrowRight className="ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};