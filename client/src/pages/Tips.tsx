import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Snowflake, Sun, ThermometerSun, Wind, Zap } from "lucide-react";
import { Link } from "wouter";

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

      {/* Winter Tips */}
      <section id="winter-tips" className="py-16 md:py-24 bg-secondary/20">
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
              },
              {
                title: "Use Ceiling Fans in Reverse",
                description: "Run ceiling fans clockwise on low speed to push warm air down from the ceiling. This simple trick can make rooms feel 2-3 degrees warmer without increasing heating."
              },
              {
                title: "Close Off Unused Rooms",
                description: "Shut doors to rooms you're not using and close heating vents in those areas. Focus your heating on the spaces you actually occupy."
              },
              {
                title: "Add Rugs and Soft Furnishings",
                description: "Rugs on hard floors provide insulation and make rooms feel warmer. Heavy curtains, throws, and cushions also help retain heat and reduce the need for heating."
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
                title: "Use Fans Strategically",
                description: "Ceiling fans use 98% less energy than air conditioning. Run them counter-clockwise in summer. Portable fans can create cooling breezes that make rooms feel 4-6 degrees cooler."
              },
              {
                title: "Minimize Heat Generation",
                description: "Use outdoor BBQ instead of oven. Run dishwasher and washing machine in the evening. Turn off unnecessary lights and electronics—they all generate heat."
              },
              {
                title: "Set Cooling Temperature Higher",
                description: "Set air conditioning to 24-26°C. Every degree lower increases cooling costs by 5-10%. Use fans in conjunction with AC to feel cooler at higher temperatures."
              },
              {
                title: "Close Internal Doors",
                description: "If using air conditioning, close doors to cool only the rooms you're using. This reduces the volume of space to cool and can cut cooling costs by 20-30%."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              },
              {
                icon: Zap,
                title: "Unplug Phantom Loads",
                description: "Devices on standby still consume power. Unplug chargers, appliances, and electronics when not in use, or use power strips to easily switch off multiple devices."
              },
              {
                icon: Sun,
                title: "Use Cold Water for Laundry",
                description: "Washing clothes in cold water saves energy used to heat water—up to 90% of washing machine energy goes to heating. Modern detergents work well in cold water."
              },
              {
                icon: ThermometerSun,
                title: "Install Double Glazing",
                description: "Double-glazed windows reduce heat loss by 40% in winter and heat gain by 87% in summer. They're especially effective for Adelaide Hills' temperature extremes."
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">How long does an energy audit take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A typical residential energy audit takes 2-3 hours, depending on the size of your home. We'll schedule a time that's convenient for you.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">What should I prepare for an energy audit?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Have your recent energy bills available (we can help you access them if needed). Make a list of any comfort issues or areas of concern. Ensure we can access all areas of your home, including roof space if possible.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">Do you service my area?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We service the Adelaide Hills region and surrounding areas, including Stirling, Mount Barker, Hahndorf, Lobethal, and nearby communities. Contact us if you're unsure whether we service your location.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">How much can I expect to save?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Savings vary depending on your home's current condition and which recommendations you implement. Our clients typically see 30-50% reduction in energy bills after implementing our recommendations. We'll provide specific estimates in your assessment report.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
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

