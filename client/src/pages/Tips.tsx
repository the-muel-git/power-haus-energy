import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Snowflake, Sun, ThermometerSun, Wind, Zap } from "lucide-react";

export default function Tips() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Energy Saving Tips</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Practical advice for Adelaide Hills homeowners to reduce energy consumption, lower bills, and improve home comfort throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Understanding Adelaide Hills Climate</h2>
            <div className="bg-secondary/20 rounded-lg p-6 space-y-4">
              <p className="text-muted-foreground">
                The Adelaide Hills experiences a Mediterranean climate with distinct seasonal challenges. Winters are cold and windy (average July temperatures 5-13°C), while summers are hot and dry (average January temperatures 15-27°C). Understanding these patterns is key to effective energy management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div 
                  className="bg-white rounded p-4 cursor-pointer hover:shadow-md hover:bg-blue-50/50 transition-all" 
                  onClick={() => document.getElementById('winter-tips')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  <h3 className="font-semibold mb-2">Winter (June-August)</h3>
                  <p className="text-muted-foreground mb-2">Cold, windy, wettest months. Focus on retaining heat and preventing drafts.</p>
                  <p className="text-xs text-primary font-medium">View winter tips →</p>
                </div>
                <div 
                  className="bg-white rounded p-4 cursor-pointer hover:shadow-md hover:bg-orange-50/50 transition-all" 
                  onClick={() => document.getElementById('summer-tips')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  <h3 className="font-semibold mb-2">Summer (December-February)</h3>
                  <p className="text-muted-foreground mb-2">Hot, dry, clear skies. Focus on blocking heat and maximizing natural cooling.</p>
                  <p className="text-xs text-primary font-medium">View summer tips →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section id="winter-tips" className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Snowflake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Winter Energy Saving Tips</h2>
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
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
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
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sun className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Cooling Tips</h2>
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
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
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
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Year-Round Energy Savers</h2>
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
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Quick Wins: Free or Low-Cost Actions</h2>
            <Card className="bg-accent/30">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Change thermostat settings (free, saves 10-15% immediately)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Open/close curtains strategically (free, reduces heating/cooling needs by 10-20%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Seal obvious drafts with weather stripping ($20-50, saves $100-200/year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Switch 10 bulbs to LED ($50-100, saves $100+/year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Clean HVAC filters (free, improves efficiency by 5-15%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Use fans instead of AC when possible (saves 98% of cooling energy)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

