import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Home, Ruler, Layers } from "lucide-react";
import { Link } from "wouter";

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState<"audit" | "passive">("audit");
  const [homeSize, setHomeSize] = useState<"small" | "medium" | "large">("medium");
  const [complexity, setComplexity] = useState<"basic" | "standard" | "comprehensive">("standard");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  // Base prices
  const basePrices = {
    audit: {
      small: 400,
      medium: 550,
      large: 750,
    },
    passive: {
      small: 800,
      medium: 1100,
      large: 1500,
    },
  };

  // Complexity multipliers
  const complexityMultipliers = {
    basic: 1.0,
    standard: 1.2,
    comprehensive: 1.5,
  };

  // Additional services
  const additionalServicePrices: Record<string, number> = {
    "pre-purchase": 200,
    "post-renovation": 250,
    "monitoring": 150,
  };

  // Calculate total price
  const calculatePrice = () => {
    let basePrice = basePrices[serviceType][homeSize];
    let total = basePrice * complexityMultipliers[complexity];
    
    additionalServices.forEach((service) => {
      total += additionalServicePrices[service] || 0;
    });

    return Math.round(total);
  };

  const toggleAdditionalService = (service: string) => {
    setAdditionalServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const estimatedPrice = calculatePrice();

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-sans">Pricing Calculator</CardTitle>
            <CardDescription>Get an instant cost estimate for your consultation</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Service Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Service Type</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={() => setServiceType("audit")}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                serviceType === "audit"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold font-sans">Energy Audit</p>
                  <p className="text-sm text-muted-foreground">Existing homes</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => setServiceType("passive")}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                serviceType === "passive"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold font-sans">Passive Design</p>
                  <p className="text-sm text-muted-foreground">New builds & renovations</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Home Size Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Home Size</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { value: "small", label: "Small", desc: "< 150m²" },
              { value: "medium", label: "Medium", desc: "150-250m²" },
              { value: "large", label: "Large", desc: "> 250m²" },
            ].map((size) => (
              <button
                key={size.value}
                onClick={() => setHomeSize(size.value as typeof homeSize)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  homeSize === size.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <Ruler className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-semibold font-sans">{size.label}</p>
                <p className="text-sm text-muted-foreground">{size.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Complexity Level */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Assessment Level</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { value: "basic", label: "Basic", desc: "Essential assessment" },
              { value: "standard", label: "Standard", desc: "Recommended level" },
              { value: "comprehensive", label: "Comprehensive", desc: "Full detailed analysis" },
            ].map((level) => (
              <button
                key={level.value}
                onClick={() => setComplexity(level.value as typeof complexity)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  complexity === level.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold font-sans">{level.label}</p>
                <p className="text-sm text-muted-foreground">{level.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Additional Services (Optional)</Label>
          <div className="space-y-2">
            {[
              { value: "pre-purchase", label: "Pre-Purchase Assessment", price: 200 },
              { value: "post-renovation", label: "Post-Renovation Verification", price: 250 },
              { value: "monitoring", label: "Ongoing Energy Monitoring", price: 150 },
            ].map((service) => (
              <button
                key={service.value}
                onClick={() => toggleAdditionalService(service.value)}
                className={`w-full p-3 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                  additionalServices.includes(service.value)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <span className="font-sans">{service.label}</span>
                <span className="text-sm text-primary font-semibold">+${service.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Estimated Investment
            </p>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl md:text-5xl font-bold text-primary">${estimatedPrice}</span>
            <span className="text-muted-foreground">AUD</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            This is an estimate based on your selections. Final pricing may vary depending on specific requirements and site conditions.
          </p>
          <Button size="lg" className="w-full" asChild>
            <Link href="/contact">Request Detailed Quote</Link>
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          <p>
            All prices are indicative and subject to confirmation. A detailed quote will be provided after initial consultation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

