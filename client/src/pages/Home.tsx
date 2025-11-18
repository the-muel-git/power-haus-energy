import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingDown, Thermometer, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/20 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Save Money.<br />Live Comfortably.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Expert energy consultation for Adelaide Hills homes. Reducing bills by 30–50% whilst improving year-round comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="text-base px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-shadow">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-2 hover:bg-secondary/50">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-sans">Lower Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Typical savings of 30–50% through proven passive design principles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-secondary/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-sans">Better Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Comfortable temperatures year-round with reduced heating and cooling needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-accent/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-sans">Climate-Specific</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Tailored solutions for Adelaide Hills' Mediterranean climate
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 via-secondary/20 to-primary/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How We Help</h2>
              <p className="text-lg text-muted-foreground">
                Professional energy assessments and passive design advice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow bg-background">
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
                </CardContent>
              </Card>

              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow bg-background">
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
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base border-2 hover:bg-background/80">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-accent/5 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 shadow-2xl bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Start Saving Today
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Book your free consultation and discover exactly how much you could save on energy bills whilst creating a more comfortable home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/book-consultation">
                      <Button size="lg" className="text-lg px-10 py-7 h-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                        Book Free Consultation
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="text-lg px-10 py-7 h-auto border-2">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    No obligation • Expert advice • 30-minute consultation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Book a free consultation and discover how much you could save
          </p>
          <Link href="/book-consultation">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

