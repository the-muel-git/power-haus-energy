import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Snowflake, Sun, ThermometerSun, Wind, Zap } from "lucide-react";
import { Link } from "wouter";
import ROICalculator from "@/components/features/ROICalculator";

export default function Tips() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Energy Saving Tips</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Practical advice for Adelaide Hills homeowners to reduce energy consumption, lower bills, and improve home comfort throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Calculate Your Potential Savings</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See how much you could save with energy efficiency improvements
              </p>
            </div>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section id="winter-tips" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Snowflake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Winter Energy Saving Tips</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keep warm and reduce heating costs during cold Adelaide Hills winters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Seal Drafts and Air Leaks",
                description: "Check windows, doors, and gaps around pipes. Use weather stripping and caulk to seal leaks. Even small gaps can significantly increase heating costs in our windy winters."
              },
              {
                title: "Maximize Winter Sun",
                description: "Open curtains on north-facing windows during the day to let in warming sunlight. Close them at night to retain heat. This free passive heating can reduce your heating needs by 10-20%."
              },
              {
                title: "Set Thermostat Wisely",
                description: "Set heating to 18-20°C when home. Every degree above 20°C adds approximately 10% to heating costs. Lower to 15°C when sleeping or away for 4+ hours."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Tips */}
      <section id="summer-tips" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sun className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Summer Cooling Tips</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay cool and reduce cooling costs during hot Adelaide Hills summers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Block Out Summer Sun",
                description: "Close curtains, blinds, and shutters on windows receiving direct sunlight, especially on east and west-facing windows. External shading is most effective—up to 90% heat reduction."
              },
              {
                title: "Capture Evening Breezes",
                description: "Open windows in the evening to capture south-westerly breezes. Create cross-flow ventilation by opening windows on opposite sides of your home to flush out hot air."
              },
              {
                title: "Set Cooling Temperature Higher",
                description: "Set air conditioning to 24-26°C. Every degree lower increases cooling costs by 5-10%. Use fans in conjunction with AC to feel cooler at higher temperatures."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Tips */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Year-Round Energy Savers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple habits that reduce energy consumption all year long
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Switch to LED Lighting",
                description: "LED bulbs use 75% less energy than incandescent bulbs and last 25 times longer. Replacing your 10 most-used bulbs can save $100+ per year."
              },
              {
                icon: ThermometerSun,
                title: "Upgrade Insulation",
                description: "Proper insulation in ceiling (R6.0), walls (R4.0), and floors (R4.0) is crucial for Adelaide Hills homes. Good insulation reduces heating and cooling costs by 40-50%."
              },
              {
                icon: Wind,
                title: "Maintain HVAC Systems",
                description: "Clean or replace filters every 3 months. Service heating and cooling systems annually. Dirty filters can increase energy use by 15% and reduce system lifespan."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-sans">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Want Personalized Advice?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Get a professional energy audit and receive customized recommendations for your home
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg" asChild>
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

