import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ClipboardList, 
  Home, 
  Sun, 
  Thermometer,
  Wind,
  Lightbulb,
  FileText,
  Users,
  TrendingDown,
  Shield,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Energy Audits */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Energy Audits & Consultations</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A comprehensive assessment of your home's energy performance with actionable, prioritized recommendations that deliver real savings.
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
                        Discussion of your energy concerns, utility bills, comfort issues, and goals for your home
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Room-by-Room Assessment</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Detailed inspection of every area including insulation, windows, doors, heating/cooling systems, and appliances
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Blower Door Test</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pressurization test to identify air leakage points and measure overall home tightness
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Thermal Imaging</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Infrared camera inspection to detect heat loss, insulation gaps, and moisture issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Appliance & Systems Review</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Evaluation of heating, cooling, hot water, and major appliances for efficiency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Comprehensive Report</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Detailed findings with prioritized recommendations, estimated costs, and projected savings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Follow-up Support</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Guidance on implementing recommendations and connecting with qualified contractors
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/30 rounded-2xl p-6">
                <h3 className="font-semibold mb-2 font-sans">Perfect For:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Existing homeowners looking to reduce energy bills, improve comfort, identify issues before renovations, or understand their home's performance.
                </p>
              </div>
            </div>

            {/* Passive Design */}
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Passive Design Consultation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Expert guidance on incorporating energy-efficient design principles into your new build or major renovation from the ground up.
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
                        Comprehensive analysis of your property's orientation, topography, vegetation, and microclimate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Solar Orientation Planning</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Optimal positioning of rooms, windows, and outdoor spaces to maximize winter sun and minimize summer heat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Thermal Mass Strategy</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Recommendations for materials and placement to naturally regulate temperature and reduce heating/cooling needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Insulation Specifications</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Detailed R-value recommendations for walls, ceiling, and floors tailored to Adelaide Hills climate zones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Natural Ventilation Design</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Strategic window placement and sizing to capture cooling breezes and enable cross-flow ventilation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Shading Solutions</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Eave sizing calculations, window treatment recommendations, and landscaping strategies for solar control
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Glazing Recommendations</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Window specifications including size, placement, and performance ratings for optimal energy efficiency
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Design Review & Collaboration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Work directly with your architect or builder to integrate passive design principles into plans
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/30 rounded-2xl p-6">
                <h3 className="font-semibold mb-2 font-sans">Perfect For:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  New home builders, major renovators, or anyone in the early design phase who wants to build energy efficiency in from the start.
                </p>
              </div>
            </div>
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
                  <FileText className="h-6 w-6 text-primary" />
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

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A straightforward, professional approach designed to deliver maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: Users,
                title: "Initial Contact",
                description: "Book a free 15-minute consultation to discuss your needs, goals, and which service is right for you."
              },
              {
                step: "2",
                icon: Home,
                title: "Site Visit",
                description: "We visit your home or property to conduct a thorough evaluation using professional equipment and techniques."
              },
              {
                step: "3",
                icon: FileText,
                title: "Detailed Report",
                description: "Receive a comprehensive report with findings, prioritized recommendations, cost estimates, and savings projections."
              },
              {
                step: "4",
                icon: CheckCircle2,
                title: "Implementation Support",
                description: "We guide you through implementing recommendations, answer questions, and connect you with trusted contractors."
              }
            ].map((item) => (
              <Card key={item.step} className="text-center relative">
                <CardHeader>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mt-4 mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-sans">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized assessments for specific situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Pricing Information */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Investment & Value</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional energy assessment is an investment that pays for itself many times over
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 font-sans text-lg">Typical Investment Range</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-secondary/30 rounded-xl p-4">
                        <p className="font-semibold font-sans mb-1">Energy Audit</p>
                        <p className="text-2xl font-bold text-primary mb-2">$400-$600</p>
                        <p className="text-xs text-muted-foreground">For typical Adelaide Hills home (150-250m²)</p>
                      </div>
                      <div className="bg-secondary/30 rounded-xl p-4">
                        <p className="font-semibold font-sans mb-1">Passive Design Consultation</p>
                        <p className="text-2xl font-bold text-primary mb-2">$800-$1,500</p>
                        <p className="text-xs text-muted-foreground">Depending on project complexity and size</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/30 rounded-xl p-6">
                    <h3 className="font-semibold mb-3 font-sans">Return on Investment</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Most clients recoup their assessment cost within 6-18 months through energy savings alone. Over the life of improvements, the return can be 10-20x the initial investment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">30-50%</p>
                        <p className="text-muted-foreground">Average bill reduction</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">$500-2,000</p>
                        <p className="text-muted-foreground">Annual savings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">6-18 mo</p>
                        <p className="text-muted-foreground">Payback period</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="font-sans">Free initial consultation:</strong> Not sure which service is right for you? Book a free 15-minute phone consultation to discuss your situation and get personalized advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Book your free consultation today and take the first step toward a more comfortable, energy-efficient home that saves you money every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/tips">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Energy Tips
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

