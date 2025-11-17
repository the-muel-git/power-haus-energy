/**
 * Business contact information and configuration
 * 
 * This file contains all business-related constants used throughout the application.
 * Update these values to reflect your actual business information.
 */

export const BUSINESS_INFO = {
  name: "Power Haus",
  fullName: "Power Haus Energy Consultation",
  tagline: "Energy Consultation",
  
  // Contact Information
  phone: "(08) 1234 5678",
  phoneHref: "tel:+61812345678",
  email: "info@powerhausenergy.com.au",
  emailHref: "mailto:info@powerhausenergy.com.au",
  
  // Location & Service Area
  location: "Adelaide Hills, SA",
  serviceArea: "Serving Adelaide Hills, SA",
  serviceRadius: "50km radius from Adelaide CBD",
  
  // Business Hours
  hours: "Mon-Fri: 9am-5pm",
  responseTime: "24 hour response time",
  
  // Branding
  logoPath: "/logo.png",
  logoIconPath: "/logo-icon.png",
  logoAlt: "Power Haus Energy",
} as const;

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Energy Tips", href: "/tips" },
  { name: "Contact", href: "/contact" },
] as const;

export const PRICING = {
  energyAudit: {
    from: 400,
    label: "From $400",
    description: "Investment varies by home size and complexity"
  },
  passiveDesign: {
    from: 800,
    label: "From $800",
    description: "Investment varies by project scope and complexity"
  }
} as const;

