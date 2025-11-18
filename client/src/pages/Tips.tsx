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

          <div className="space-y-4 max-w-6xl mx-auto">
            {/* Winter Tips Row */}
            <div className="group relative bg-gradient-to-br from-slate-50 via-background to-slate-50/50 dark:from-slate-900/50 dark:via-background dark:to-slate-900/30 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Snowflake className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold">Winter</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Seal Drafts", description: "Weather stripping and caulk. Small gaps increase heating costs." },
                  { title: "Maximize Winter Sun", description: "Open north curtains by day, close at night. Saves 10-20%." },
                  { title: "Set Thermostat Wisely", description: "18-20°C when home. Each degree above adds 10% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-3.5 border border-border/30 hover:border-primary/20 hover:bg-card/80 transition-all">
                    <h4 className="font-semibold mb-1.5 text-sm">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summer Tips Row */}
            <div className="group relative bg-gradient-to-br from-slate-50 via-background to-slate-50/50 dark:from-slate-900/50 dark:via-background dark:to-slate-900/30 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold">Summer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Block Summer Sun", description: "Close curtains with direct sun. External shading reduces heat 90%." },
                  { title: "Evening Breezes", description: "Open windows for south-west breezes. Cross-flow ventilation." },
                  { title: "Set Cooling Higher", description: "24-26°C for AC. Each degree lower adds 5-10% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-3.5 border border-border/30 hover:border-primary/20 hover:bg-card/80 transition-all">
                    <h4 className="font-semibold mb-1.5 text-sm">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Year-Round Tips Row */}
            <div className="group relative bg-gradient-to-br from-slate-50 via-background to-slate-50/50 dark:from-slate-900/50 dark:via-background dark:to-slate-900/30 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold">Year-Round</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { icon: Lightbulb, title: "Switch to LED", description: "Use 75% less energy. Replacing 10 bulbs saves $100+ yearly." },
                  { icon: ThermometerSun, title: "Upgrade Insulation", description: "R6.0 ceiling, R4.0 walls/floors. Reduces costs by 40-50%." },
                  { icon: Wind, title: "Maintain HVAC", description: "Clean filters every 3 months. Dirty filters add 15% to costs." }
                ].map((tip, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-3.5 border border-border/30 hover:border-primary/20 hover:bg-card/80 transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <tip.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <h4 className="font-semibold text-sm">{tip.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Ready to Get Started?</h2>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto opacity-95">
            Book a free consultation to discover your savings
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg" asChild>
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

