import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingDown, Thermometer, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Save Money.<br />Live Comfortably.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Expert energy consultation for Adelaide Hills homes. Reduce bills by 30–50% while improving year-round comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="text-base px-8 py-6 h-auto">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-sans">Lower Bills</h3>
              <p className="text-muted-foreground">
                Typical savings of 30–50% through proven passive design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-sans">Better Comfort</h3>
              <p className="text-muted-foreground">
                Comfortable temperatures year-round, less heating and cooling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-sans">Climate-Specific</h3>
              <p className="text-muted-foreground">
                Tailored for Adelaide Hills' Mediterranean climate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How We Help</h2>
              <p className="text-lg text-muted-foreground">
                Professional energy assessments and passive design advice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-sans">Energy Audits</CardTitle>
                  <CardDescription className="text-base">
                    Identify where you're losing energy and money
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Thermal imaging and air leakage testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detailed energy-saving report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Prioritised recommendations with ROI</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm font-medium text-primary">From $400</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-sans">Passive Design</CardTitle>
                  <CardDescription className="text-base">
                    Build efficiency into new homes and renovations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Solar orientation and window placement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Thermal mass and insulation strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Natural ventilation and shading</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm font-medium text-primary">From $800</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Book a free consultation and discover how much you could save
          </p>
          <Link href="/book-consultation">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

