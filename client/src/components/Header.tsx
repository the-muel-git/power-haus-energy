import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, NAVIGATION_LINKS } from "@config/business";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white/98 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <nav className="container flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={BUSINESS_INFO.logoPath} alt={BUSINESS_INFO.logoAlt} className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none tracking-tight font-sans">{BUSINESS_INFO.name}</span>
              <span className="text-xs font-medium text-muted-foreground leading-none mt-1 font-sans">{BUSINESS_INFO.tagline}</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((item) => (
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
          <Button size="sm" className="shadow-sm font-sans" asChild>
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium font-sans block py-2 cursor-pointer ${
                    location === item.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button size="sm" className="w-full font-sans" asChild>
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

