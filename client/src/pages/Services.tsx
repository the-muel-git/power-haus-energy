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
  Clock,
  Users,
  Award,
  Star
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive energy solutions designed specifically for Adelaide Hills homes
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-b border-border bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground font-sans">Homes Assessed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <TrendingDown className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">35%</div>
              <div className="text-sm text-muted-foreground font-sans">Average Savings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground font-sans">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Energy Audits */}
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight font-sans">Energy Audits</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive assessment of your existing home's energy performance with actionable recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Room-by-room assessment and thermal imaging</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Blower door testing for air leakage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Appliance and systems efficiency review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Detailed report with prioritised recommendations</span>
                  </div>
                </div>

                <div className="bg-accent/30 rounded-xl p-4">
                  <p className="text-sm font-semibold mb-1 font-sans">Perfect For:</p>
                  <p className="text-sm text-muted-foreground">
                    Existing homeowners looking to reduce energy bills and improve comfort
                  </p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/book-consultation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Passive Design */}
            <Card className="border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight font-sans">Passive Design</CardTitle>
                <CardDescription className="text-base">
                  Expert guidance for new builds and major renovations to incorporate energy-efficient design from the start
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Site assessment and solar orientation planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Thermal mass and insulation strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Natural ventilation and shading design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Collaboration with your architect or builder</span>
                  </div>
                </div>

                <div className="bg-accent/30 rounded-xl p-4">
                  <p className="text-sm font-semibold mb-1 font-sans">Perfect For:</p>
                  <p className="text-sm text-muted-foreground">
                    New home builders and major renovators in the design phase
                  </p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/book-consultation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Why Professional Energy Assessment Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding your home's energy performance is the first step to meaningful savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Reduce Energy Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients typically see 30\u201350% reduction in energy costs after implementing our recommendations. That's hundreds to thousands saved every year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Improve Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate cold drafts, hot spots, and temperature fluctuations. Create a home that's comfortable year-round.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Protect Your Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Identify moisture issues, inadequate insulation, and system problems before they become expensive repairs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Make Informed Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our prioritised recommendations show you exactly where to invest for maximum return.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Reduce Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lower your carbon footprint and contribute to a more sustainable future while saving money.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Increase Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Energy-efficient homes are increasingly valued by buyers. Documentation of improvements can boost resale value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialised assessments for specific situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Pre-Purchase Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  Assess a home's energy efficiency and estimated improvement costs before you buy.
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

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Post-Renovation Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  Verify energy improvements were done correctly and measure actual performance gains.
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

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Ongoing Energy Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  Track your home's energy performance over time with annual check-ins.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book a consultation today and discover how much you could save while improving your home's comfort
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

