import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Energy Tips", href: "/tips" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/98 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <nav className="container flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">PH</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight">Power Haus Energy</span>
              <span className="text-xs text-muted-foreground leading-tight font-sans">Adelaide Hills Specialists</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`text-sm font-medium font-sans transition-colors hover:text-primary cursor-pointer ${
                  location === item.href ? "text-primary font-semibold" : "text-foreground/80"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <Button size="sm" className="shadow-sm">Book Consultation</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium block py-2 cursor-pointer ${
                    location === item.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button size="sm" className="w-full">Book Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}

