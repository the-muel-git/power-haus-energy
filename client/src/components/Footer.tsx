import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.png" alt="Power Haus Energy" className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-primary">Power Haus Energy</span>
                <span className="text-xs text-muted-foreground leading-tight font-sans">Adelaide Hills Specialists</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground/80 mb-4 max-w-md leading-relaxed">
              Helping Adelaide Hills homeowners save money and live comfortably through expert energy consultation and passive design strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 font-sans">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/tips">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Energy Tips</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 font-sans">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">(08) 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">info@powerhausenergy.com.au</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Serving Adelaide Hills, SA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Power Haus Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

