import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, User } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  farmer: string;
  location: string;
  price: string;
  rating: number;
  organic?: boolean;
  inStock: boolean;
}

export const ProductCard = ({ 
  image, 
  name, 
  farmer, 
  location, 
  price, 
  rating, 
  organic = false,
  inStock 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-smooth overflow-hidden border-0 shadow-soft">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-spring"
        />
        {organic && (
          <Badge className="absolute top-3 left-3 bg-fresh-green text-white">
            Organic
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{farmer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-harvest text-harvest" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <Button 
            variant={inStock ? "default" : "outline"} 
            disabled={!inStock}
            className="px-6"
          >
            {inStock ? "Order Now" : "Notify Me"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};