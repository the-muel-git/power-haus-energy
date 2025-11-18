import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Target } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">About Power Haus</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Helping Adelaide Hills homeowners create comfortable, energy-efficient homes that work with our unique climate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Story</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We combine traditional passive design principles with modern energy assessment technology to help Adelaide Hills homeowners reduce costs and improve comfort.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
              <p>
                From cold, windy winters to hot, dry summers, the Adelaide Hills region demands smart solutions that work with nature. Our unique Mediterranean climate creates temperature extremes that challenge even the best-built homes.
              </p>
              <p>
                We understand these challenges firsthand. That's why we've dedicated ourselves to helping local homeowners create comfortable, energy-efficient spaces that perform beautifully year-round. Every assessment we conduct and every recommendation we make is informed by deep knowledge of our region's specific climate conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <Card className="border-2 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-sans">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Make sustainable, energy-efficient living accessible and affordable for every Adelaide Hills homeowner. We believe everyone deserves a comfortable home that doesn't cost the earth to run.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-sans">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Sustainability, integrity, and practical solutions that deliver measurable results. We focus on what works, backed by data and proven methodology.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Choose Power Haus</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Local expertise meets proven methodology to deliver results you can measure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-sans">Climate-Specific Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Every solution is tailored for Adelaide Hills' unique Mediterranean climate and extreme temperature variations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-sans">Certified Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Industry-recognised certifications in home energy assessment and sustainable building design practices.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-sans">Whole-Home Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    We analyse your entire home as an integrated system, providing comprehensive and prioritised recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Let us help you create a more comfortable, energy-efficient home
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg" asChild>
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

