import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're passionate about helping Adelaide Hills homeowners create comfortable, energy-efficient homes that work in harmony with our unique local climate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Adelaide Hills Energy Consultation was founded with a simple mission: to help local homeowners reduce their energy costs while creating more comfortable living spaces. Having lived in the Adelaide Hills for over 20 years, we understand the unique challenges our climate presents.
                </p>
                <p>
                  From cold, windy winters to hot, dry summers, Adelaide Hills homes need smart design solutions that work with nature, not against it. That's where passive design principles come in—strategies that have been proven for centuries but are often overlooked in modern construction.
                </p>
                <p>
                  We combine traditional passive design wisdom with modern energy assessment technology to provide homeowners with practical, cost-effective solutions that deliver real results.
                </p>
              </div>
            </div>
            <div className="bg-secondary/20 rounded-lg p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      To make sustainable, energy-efficient living accessible and affordable for every Adelaide Hills homeowner.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Our Values</h3>
                    <p className="text-sm text-muted-foreground">
                      Sustainability, integrity, and practical solutions that deliver measurable results for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our local expertise and holistic approach set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We live and work in the Adelaide Hills. We understand the microclimates, building styles, and specific challenges of homes in this region.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certified Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team holds industry-recognized certifications in home energy assessment and sustainable building design.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Holistic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We don't just focus on one solution. We look at your entire home as a system and provide comprehensive recommendations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Serving the Adelaide Hills</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide energy consultation services throughout the Adelaide Hills region, from Gawler to Mount Barker, Strathalbyn to Sellicks Beach. If you're within approximately 50km of the Adelaide CBD, we'd love to help you create a more comfortable, energy-efficient home.
            </p>
            <div className="bg-secondary/20 rounded-lg p-8">
              <p className="text-muted-foreground">
                Not sure if we service your area? Get in touch and we'll let you know if we can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

