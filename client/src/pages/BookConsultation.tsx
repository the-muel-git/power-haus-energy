import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Home, 
  Sun,
  Clock,
  Users,
  FileText
} from "lucide-react";
import { Link } from "wouter";

export default function BookConsultation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Book Your Consultation</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Choose the right consultation for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Energy Audit */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Energy Audit</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Comprehensive assessment with actionable recommendations.
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-base font-sans">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Initial Consultation</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Energy concerns, bills, and comfort issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Room-by-Room Assessment</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Inspection of insulation, windows, doors, systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Blower Door & Thermal Imaging</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Testing to identify air leaks and heat loss
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Comprehensive Report</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Prioritised recommendations with costs and savings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Follow-up Support</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Implementation guidance
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Typical duration: 2-3 hours on-site</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Report delivered within 5 business days</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-12" asChild>
                <Link href="/contact">Book Energy Audit</Link>
              </Button>
            </div>

            {/* Passive Design Consultation */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Passive Design Consultation</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Energy-efficient design for new builds and renovations.
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-base font-sans">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Site Assessment</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Orientation, topography, microclimate analysis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Solar Orientation</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Maximize winter sun, minimize summer heat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Thermal Mass & Insulation</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Material recommendations and R-values
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Ventilation & Shading</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Window placement, eaves, natural cooling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 font-sans">Design Collaboration</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Work with your architect or builder
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Collaborative sessions with your design team</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Detailed specifications and design recommendations</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-12" asChild>
                <Link href="/contact">Book Passive Design Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">How It Works</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple process for maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-base text-center font-sans">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center leading-relaxed">
                  Contact us to discuss needs and schedule.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-base text-center font-sans">On-Site Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center leading-relaxed">
                  Thorough assessment at your convenience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-base text-center font-sans">Receive Report</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center leading-relaxed">
                  Detailed report with recommendations and savings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-base text-center font-sans">Take Action</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center leading-relaxed">
                  Implement improvements with our support.
                </CardDescription>
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
              Book your consultation to discover your savings.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

