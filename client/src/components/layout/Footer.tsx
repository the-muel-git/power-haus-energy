import { BUSINESS_INFO } from "@config";
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
              <img src={BUSINESS_INFO.logoPath} alt={BUSINESS_INFO.logoAlt} className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-none tracking-tight font-sans">{BUSINESS_INFO.name}</span>
                <span className="text-xs font-medium text-muted-foreground leading-none mt-1 font-sans">{BUSINESS_INFO.tagline}</span>
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
                  <span className="text-muted-foreground hover:text-primary cursor-pointer font-sans">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer font-sans">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/tips">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer font-sans">Energy Tips</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer font-sans">Contact</span>
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
                <a href={BUSINESS_INFO.phoneHref} className="text-muted-foreground font-sans hover:text-primary transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href={BUSINESS_INFO.emailHref} className="text-muted-foreground font-sans hover:text-primary transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-sans">{BUSINESS_INFO.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

