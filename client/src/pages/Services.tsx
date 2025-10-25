import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ClipboardList, Home, Sun } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive energy solutions designed specifically for Adelaide Hills homes. From detailed assessments to passive design advice, we help you create a more comfortable and cost-effective home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Energy Audits */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Energy Audits & Consultations</CardTitle>
                  <CardDescription className="text-base">
                    A comprehensive assessment of your home's energy performance with actionable recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Initial Consultation:</strong> Discussion of your energy concerns, utility bills, and comfort issues
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Room-by-Room Assessment:</strong> Detailed inspection of every area of your home
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Blower Door Test:</strong> Identifies air leakage and drafts throughout your home
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Thermal Imaging:</strong> Infrared camera inspection to detect heat loss and insulation gaps
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Detailed Report:</strong> Comprehensive findings with prioritized recommendations and estimated savings
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Follow-up Support:</strong> Guidance on implementing recommendations and finding qualified contractors
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      Existing homeowners looking to reduce energy bills, improve comfort, or planning renovations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Passive Design */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sun className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Passive Design Advice</CardTitle>
                  <CardDescription className="text-base">
                    Expert guidance on incorporating energy-efficient design principles into your new build or renovation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Site Assessment:</strong> Analysis of your property's orientation, topography, and microclimate
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Orientation Planning:</strong> Optimal positioning of rooms and windows for solar access
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Thermal Mass Strategy:</strong> Recommendations for materials and placement to regulate temperature
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Insulation Specifications:</strong> Detailed R-value recommendations for Adelaide Hills climate
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Ventilation Design:</strong> Natural airflow strategies to capture cooling breezes
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>Shading Solutions:</strong> Eave sizing, window treatments, and landscaping recommendations
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      New home builders, major renovators, or anyone in the design phase of a building project
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A straightforward, professional approach to improving your home's energy efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Book a free consultation to discuss your needs and goals"
              },
              {
                step: "2",
                title: "Assessment",
                description: "We visit your home or site to conduct a thorough evaluation"
              },
              {
                step: "3",
                title: "Report & Recommendations",
                description: "Receive a detailed report with prioritized action items"
              },
              {
                step: "4",
                title: "Implementation Support",
                description: "We guide you through implementing our recommendations"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pre-Purchase Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Considering buying a home in the Adelaide Hills? We can assess its energy efficiency and provide estimated improvement costs before you commit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Post-Renovation Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  After implementing energy improvements, we can verify the work was done correctly and measure the actual performance improvements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your free consultation today and take the first step toward a more comfortable, energy-efficient home.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

