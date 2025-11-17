import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Home, 
  Sun, 
  Thermometer,
  Wind,
  Lightbulb,
  TrendingDown,
  Shield,
  ClipboardList,
  Clock
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive energy solutions designed specifically for Adelaide Hills homes. From detailed assessments to passive design advice, we help you create a more comfortable and cost-effective home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Energy Audits */}
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">Energy Audits</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Comprehensive assessment of your existing home's energy performance with actionable recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Room-by-room assessment and thermal imaging</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Blower door testing for air leakage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Appliance and systems efficiency review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Detailed report with prioritized recommendations</span>
                  </div>
                </div>

                <div className="bg-accent/30 rounded-xl p-4">
                  <p className="text-sm font-semibold mb-1">Perfect For:</p>
                  <p className="text-sm text-muted-foreground">
                    Existing homeowners looking to reduce energy bills and improve comfort
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border-2 border-primary/20">
                  <p className="text-xl font-bold text-primary">From $400</p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/book-consultation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Passive Design */}
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">Passive Design</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Expert guidance for new builds and major renovations to incorporate energy-efficient design from the start.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Site assessment and solar orientation planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Thermal mass and insulation strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Natural ventilation and shading design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Collaboration with your architect or builder</span>
                  </div>
                </div>

                <div className="bg-accent/30 rounded-xl p-4">
                  <p className="text-sm font-semibold mb-1">Perfect For:</p>
                  <p className="text-sm text-muted-foreground">
                    New home builders and major renovators in the design phase
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border-2 border-primary/20">
                  <p className="text-xl font-bold text-primary">From $800</p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/book-consultation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Professional Energy Assessment Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding your home's energy performance is the first step to meaningful savings and comfort improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Reduce Energy Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Our clients typically see 30-50% reduction in energy costs after implementing our recommendations. That's hundreds to thousands of dollars saved every year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Improve Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Eliminate cold drafts, hot spots, and temperature fluctuations. Create a home that's comfortable year-round without constantly adjusting the thermostat.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Protect Your Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Identify moisture issues, inadequate insulation, and system problems before they become expensive repairs. Extend the life of your home and equipment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Make Informed Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Stop guessing about which improvements will have the biggest impact. Our prioritized recommendations show you exactly where to invest for maximum return.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Reduce Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Lower your carbon footprint and contribute to a more sustainable future while saving money. Energy efficiency benefits everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Increase Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Energy-efficient homes are increasingly valued by buyers. Documentation of improvements and energy ratings can boost resale value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized assessments for specific situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Pre-Purchase Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">
                  Considering buying a home in the Adelaide Hills? We assess its energy efficiency and provide estimated improvement costs before you commit.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Identify potential issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Estimate upgrade costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Negotiate with confidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Post-Renovation Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">
                  After implementing energy improvements, we verify the work was done correctly and measure actual performance gains.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quality assurance testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance measurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Savings verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Ongoing Energy Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">
                  Track your home's energy performance over time and receive annual check-ins to optimize efficiency as conditions change.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual performance reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>System maintenance reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Updated recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book a consultation today and discover how much you could save while improving your home's comfort.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book-consultation">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

