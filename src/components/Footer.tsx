import { Sprout, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AgriConnect</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Connecting farmers directly with buyers for a sustainable agricultural future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">Products</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">For Farmers</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">For Buyers</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">About Us</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@agriconnect.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 AgriConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};