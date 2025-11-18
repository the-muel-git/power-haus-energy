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
      <section id="calculator" className="py-10 md:py-14 bg-secondary/20">
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

      {/* All Tips Combined */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Energy Saving Tips</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Practical tips for all seasons
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Winter Tips Row */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-100 dark:border-blue-900/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Snowflake className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Winter</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Seal Drafts", description: "Weather stripping and caulk. Small gaps increase heating costs." },
                  { title: "Maximize Winter Sun", description: "Open north curtains by day, close at night. Saves 10-20%." },
                  { title: "Set Thermostat Wisely", description: "18-20°C when home. Each degree above adds 10% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 dark:border-blue-900/30">
                    <h4 className="font-semibold mb-1 text-sm">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summer Tips Row */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-100 dark:border-orange-900/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100">Summer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Block Summer Sun", description: "Close curtains with direct sun. External shading reduces heat 90%." },
                  { title: "Evening Breezes", description: "Open windows for south-west breezes. Cross-flow ventilation." },
                  { title: "Set Cooling Higher", description: "24-26°C for AC. Each degree lower adds 5-10% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-orange-100 dark:border-orange-900/30">
                    <h4 className="font-semibold mb-1 text-sm">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Year-Round Tips Row */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-100 dark:border-emerald-900/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">Year-Round</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Lightbulb, title: "Switch to LED", description: "Use 75% less energy. Replacing 10 bulbs saves $100+ yearly." },
                  { icon: ThermometerSun, title: "Upgrade Insulation", description: "R6.0 ceiling, R4.0 walls/floors. Reduces costs by 40-50%." },
                  { icon: Wind, title: "Maintain HVAC", description: "Clean filters every 3 months. Dirty filters add 15% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-100 dark:border-emerald-900/30">
                    <div className="flex items-center gap-2 mb-2">
                      <tip.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <h4 className="font-semibold text-sm">{tip.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>
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

