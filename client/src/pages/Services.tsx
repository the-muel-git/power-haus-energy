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
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive energy solutions designed specifically for Adelaide Hills homes
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-b border-border bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
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

      {/* Why It Matters */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Why Professional Energy Assessment Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding your home's energy performance is the first step to meaningful savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialised assessments for specific situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90">
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

