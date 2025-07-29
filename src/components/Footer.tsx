import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d5a43fb2-5d9a-43b6-9210-d53c82a70a81.png" 
                alt="Quality Point Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary">Quality Point</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensuring product authenticity through advanced verification technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/user-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                User Guide
              </Link>
              <Link to="/developer-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Developer Guide
              </Link>
              <Link to="/manufacturers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                For Manufacturers
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  27 University Plaza, Bombo RD,<br />Kampala (U)
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+256 706 851883</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">support@qualitypoint.net</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest features and security updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Quality Point. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/delete-account" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;