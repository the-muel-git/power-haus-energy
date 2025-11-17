import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About Power Haus Energy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Helping Adelaide Hills homeowners create comfortable, energy-efficient homes that work with our unique climate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Approach</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We combine traditional passive design principles with modern energy assessment technology to help Adelaide Hills homeowners reduce costs and improve comfort.
                  </p>
                  <p>
                    From cold, windy winters to hot, dry summers, our region demands smart solutions that work with nature. We provide practical, cost-effective recommendations that deliver measurable results.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Make sustainable, energy-efficient living accessible and affordable for every Adelaide Hills homeowner.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans">Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Sustainability, integrity, and practical solutions that deliver measurable results.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local expertise meets proven methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans">Climate-Specific</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Solutions designed specifically for Adelaide Hills' Mediterranean climate and temperature extremes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans">Certified Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Industry-recognized certifications in home energy assessment and sustainable building design.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans">Whole-Home Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We analyze your entire home as a system and provide comprehensive, prioritized recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

