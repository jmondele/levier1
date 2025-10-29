import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-serif text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <img src="/Recurso1.svg" alt="Logo" className="h-[54px] w-[219px]" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="font-serif text-xl font-medium hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#about" className="font-serif text-xl font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#blog" className="font-serif text-xl font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
