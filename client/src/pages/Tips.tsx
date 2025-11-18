import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Snowflake, Sun, ThermometerSun, Wind, Zap } from "lucide-react";
import { Link } from "wouter";
import ROICalculator from "@/components/features/ROICalculator";

export default function Tips() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Energy Saving Tips</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Reduce consumption, lower bills, improve comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Calculate Potential Savings</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                See your potential energy savings
              </p>
            </div>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section id="winter-tips" className="py-10 md:py-14">
        <div className="container">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Snowflake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Winter Tips</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Reduce heating costs during winter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Seal Drafts",
                description: "Check windows, doors, and gaps. Use weather stripping and caulk. Small gaps significantly increase heating costs."
              },
              {
                title: "Maximize Winter Sun",
                description: "Open north-facing curtains during the day. Close at night. Can reduce heating needs by 10-20%."
              },
              {
                title: "Set Thermostat Wisely",
                description: "18-20°C when home. Each degree above 20°C adds 10% to costs. Lower to 15°C when sleeping or away."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Tips */}
      <section id="summer-tips" className="py-10 md:py-14">
        <div className="container">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sun className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Summer Tips</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Reduce cooling costs during summer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Block Summer Sun",
                description: "Close curtains and blinds on windows with direct sunlight. External shading reduces heat by up to 90%."
              },
              {
                title: "Capture Evening Breezes",
                description: "Open windows in the evening for south-westerly breezes. Create cross-flow ventilation to flush out hot air."
              },
              {
                title: "Set Cooling Higher",
                description: "24-26°C for AC. Each degree lower adds 5-10% to costs. Use fans with AC to feel cooler."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Tips */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Year-Round Tips</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Reduce energy consumption year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Lightbulb,
                title: "Switch to LED",
                description: "LEDs use 75% less energy and last 25x longer. Replacing 10 bulbs saves $100+ yearly."
              },
              {
                icon: ThermometerSun,
                title: "Upgrade Insulation",
                description: "Ceiling R6.0, walls R4.0, floors R4.0. Reduces heating/cooling costs by 40-50%."
              },
              {
                icon: Wind,
                title: "Maintain HVAC",
                description: "Clean filters every 3 months. Annual service. Dirty filters increase energy use by 15%."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Want Personalised Advice?</h2>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto opacity-95">
            Get a professional energy audit with customised recommendations
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg" asChild>
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

