import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Home as HomeIcon, Leaf, Sun, ThermometerSun, Wind } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Save Money and Live Comfortably with a Smarter, Greener Home
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Expert energy consultation and passive design advice tailored for Adelaide Hills homeowners. Reduce your energy bills while creating a more comfortable, sustainable home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Adelaide Hills Homeowners Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique climate challenges of the Adelaide Hills and provide tailored solutions for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Climate-Specific Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our solutions are designed specifically for Adelaide Hills' Mediterranean climate with cold winters and hot, dry summers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sustainable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We focus on passive design principles that work with nature, reducing your environmental footprint while saving money.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients typically see 30-50% reduction in energy bills after implementing our recommendations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive energy solutions for every stage of your home journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy Audits & Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professional home energy assessments that identify exactly where you're losing energy and money. Get a customized action plan with prioritized recommendations.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comprehensive room-by-room assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Thermal imaging and air leakage testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed energy-saving report</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Passive Design Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Expert guidance on incorporating passive design principles into new builds or renovations. Work with nature to maintain comfortable temperatures year-round.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimal orientation and window placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Thermal mass and insulation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Natural ventilation and shading solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Passive Design Principles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Passive Design Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding how to work with Adelaide Hills' unique climate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Solar Orientation",
                description: "North-facing living areas capture winter sun while strategic eaves block harsh summer rays."
              },
              {
                icon: Wind,
                title: "Natural Ventilation",
                description: "Capture morning and evening south-westerly breezes for natural cooling and air circulation."
              },
              {
                icon: ThermometerSun,
                title: "Thermal Mass",
                description: "Materials like concrete and brick absorb heat during the day and release it at night."
              },
              {
                icon: HomeIcon,
                title: "Insulation",
                description: "High-quality insulation in walls, floors, and ceilings prevents unwanted heat transfer."
              },
              {
                icon: Leaf,
                title: "Shading",
                description: "Properly sized eaves, awnings, and plantings control solar gain throughout the year."
              },
              {
                icon: CheckCircle2,
                title: "Glazing",
                description: "Double-glazed windows minimize heat loss in winter and heat gain in summer."
              }
            ].map((principle, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation today and discover how much you could save on your energy bills.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

