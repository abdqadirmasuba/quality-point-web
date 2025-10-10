"use client";
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
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = { pathname: "" }; // Placeholder for usePathname
  const isHome = location.pathname === "/";


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Quality Point Logo" 
            className="h-10 w-auto"
            width={40}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <NavigationMenuLink asChild>
                      <Link href="/user-guide" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        User Guide
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/developer-guide" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Developer
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/privacy-policy" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Privacy Policy
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/terms-conditions" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Terms & Conditions
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                  Services
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#faq" className="text-sm font-medium transition-colors hover:text-primary">
                  FAQ
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
              </NavigationMenuItem>              

              <NavigationMenuItem>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.qualitypoint.qualitypoint&hl=en', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Get App
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
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
        <div className="lg:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#faq" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/user-guide" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              User Guide
            </Link>
            <Link 
              href="/developer-guide" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Developer
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              onClick={() => {
                window.open('https://play.google.com/store/apps/details?id=com.qualitypoint.qualitypoint&hl=en', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
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