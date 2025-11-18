import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Home, 
  Thermometer,
  Wind,
  Lightbulb,
  TrendingDown,
  Shield,
  ClipboardList,
  Clock,
  Award
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Our Services</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Energy solutions for Adelaide Hills homes
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-secondary/20 via-secondary/10 to-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Why Energy Assessment Matters</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              Understanding your home's energy performance drives savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Reduce Energy Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients typically see 30\u201350% reduction in energy costs after implementing our recommendations. That's hundreds to thousands saved every year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Improve Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate drafts, hot spots, and temperature swings. Create a consistently comfortable living environment year-round.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Protect Your Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Identify issues before they become expensive repairs. Proactive maintenance saves money and extends your home's lifespan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Informed Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Prioritised recommendations with clear ROI projections. Know exactly where to invest for maximum return.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Lower Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reduce your carbon footprint while saving money. Energy efficiency benefits both your wallet and the environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Increase Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Energy-efficient homes command higher resale values. Invest in improvements that buyers actively seek.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-accent/5 via-background to-secondary/10">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Specialised Services</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              Tailored assessments for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Pre-Purchase Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Assess energy efficiency before you buy. Make informed decisions with comprehensive property evaluations.
                </CardDescription>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Identify potential issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Estimate upgrade costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Negotiate with confidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Post-Renovation Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Verify improvements and measure performance gains. Ensure your investment delivers the expected results.
                </CardDescription>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quality assurance testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance measurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Savings verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-sans">Energy Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Track performance with annual check-ins. Maintain optimal efficiency with ongoing support and guidance.
                </CardDescription>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual performance reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>System maintenance reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Ready to Get Started?</h2>
            <p className="text-sm md:text-base mb-6 opacity-90">
              Book a consultation to discover your savings
            </p>
            <Button size="lg" variant="secondary" className="h-11 px-8" asChild>
              <Link href="/book-consultation">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

