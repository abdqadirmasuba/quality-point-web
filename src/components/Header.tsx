import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/d5a43fb2-5d9a-43b6-9210-d53c82a70a81.png" 
            alt="Quality Point Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-primary">Quality Point</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  About Us
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Our Services
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link to="/user-guide" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        User Guide
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/developer-guide" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Developer Guide
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/privacy-policy" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Privacy Policy
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/terms-conditions" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Terms & Conditions
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  FAQ
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
          
          <Button className="bg-primary hover:bg-primary-dark">
            <Download className="w-4 h-4 mr-2" />
            Get App
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            <button 
              onClick={() => {
                scrollToSection("about");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => {
                scrollToSection("services");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-medium"
            >
              Our Services
            </button>
            <Link to="/user-guide" className="block py-2 text-sm font-medium">
              User Guide
            </Link>
            <Link to="/developer-guide" className="block py-2 text-sm font-medium">
              Developer Guide
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary-dark">
              <Download className="w-4 h-4 mr-2" />
              Get App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;