import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Target } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Our Story</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Combining passive design with modern energy assessment to help Adelaide Hills homeowners reduce costs and improve comfort.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Adelaide Hills' Mediterranean climate—cold winters and hot summers—demands smart solutions. We help create homes that perform beautifully year-round through deep local climate knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-10 md:py-14 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-sans">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Make energy-efficient living accessible for Adelaide Hills homeowners. Everyone deserves a comfortable home that's affordable to run.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-sans">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Sustainability, integrity, and practical solutions. Data-driven results that work.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Why Choose Power Haus</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Local expertise and proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-base font-sans">Climate-Specific</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Solutions tailored for Adelaide Hills' Mediterranean climate.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-base font-sans">Certified Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Industry-certified in energy assessment and sustainable design.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-base font-sans">Whole-Home Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    Comprehensive analysis with prioritised recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Ready to Get Started?</h2>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto opacity-95">
            Create a more comfortable, energy-efficient home
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 h-auto shadow-lg" asChild>
            <Link href="/book-consultation">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

