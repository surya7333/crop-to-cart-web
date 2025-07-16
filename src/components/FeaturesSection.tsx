import { Card, CardContent } from "@/components/ui/card";
import { 
  Handshake, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Direct Connection",
    description: "Connect farmers directly with buyers, eliminating middlemen and ensuring fair prices for all.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Access real-time market data and pricing trends to make informed selling decisions.",
    color: "text-fresh-green"
  },
  {
    icon: Shield,
    title: "Fair Trade Guarantee",
    description: "Our platform ensures transparent pricing and fair trade practices for sustainable agriculture.",
    color: "text-harvest"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Manage your farm business on-the-go with our mobile-optimized platform.",
    color: "text-earth"
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track your sales performance with detailed analytics and insights.",
    color: "text-forest"
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "Streamlined delivery and logistics solutions to get fresh produce to buyers quickly.",
    color: "text-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-fresh">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering farmers and buyers with cutting-edge technology for sustainable agriculture
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-smooth group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/10 transition-smooth">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};