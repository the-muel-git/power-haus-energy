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
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Book Your Consultation</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Take the first step toward a more comfortable, energy-efficient home. Choose the consultation that's right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Energy Audit */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Energy Audit</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive assessment of your existing home's energy performance with actionable recommendations.
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Initial Consultation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Discussion of your energy concerns, utility bills, and comfort issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Room-by-Room Assessment</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Detailed inspection of insulation, windows, doors, and systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Blower Door & Thermal Imaging</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Advanced testing to identify air leaks and heat loss
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Comprehensive Report</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Prioritized recommendations with costs and projected savings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Follow-up Support</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Guidance on implementing recommendations
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
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                  <p className="text-2xl font-bold text-primary mb-2">From $400</p>
                  <p className="text-sm text-muted-foreground">Investment varies by home size and complexity</p>
                </div>
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/contact">Book Energy Audit</Link>
              </Button>
            </div>

            {/* Passive Design Consultation */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Passive Design Consultation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Expert guidance for new builds and major renovations to incorporate energy-efficient design from the start.
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Site Assessment</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Analysis of orientation, topography, and microclimate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Solar Orientation Planning</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Optimal positioning to maximize winter sun, minimize summer heat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Thermal Mass & Insulation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Material recommendations and R-value specifications
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Ventilation & Shading Design</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Window placement, eave sizing, and natural cooling strategies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Design Review & Collaboration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Work with your architect or builder to integrate principles
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
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                  <p className="text-2xl font-bold text-primary mb-2">From $800</p>
                  <p className="text-sm text-muted-foreground">Investment varies by project scope and complexity</p>
                </div>
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/contact">Book Passive Design Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A straightforward process designed to deliver maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-center font-sans">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Contact us via phone, email, or the booking form to discuss your needs and schedule a consultation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-center font-sans">On-Site Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  We conduct a thorough assessment of your home or property at a time that works for you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-center font-sans">Receive Report</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Get a detailed report with prioritized recommendations, cost estimates, and projected savings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-center font-sans">Take Action</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Implement improvements at your own pace with our ongoing support and contractor referrals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book your consultation today and discover how much you could save while improving your home's comfort.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

