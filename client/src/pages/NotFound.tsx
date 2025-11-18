import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-destructive/10 rounded-2xl flex items-center justify-center">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">404</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Page Not Found
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-base font-sans">Page Doesn't Exist</CardTitle>
                <CardDescription className="text-sm">
                  This page may have been moved or deleted.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Find helpful information on our other pages:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <Button variant="outline" size="lg" className="h-12" asChild>
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2" />
                      Home Page
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-12" asChild>
                    <Link href="/services">Our Services</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-12" asChild>
                    <Link href="/tips">Energy Tips</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-12" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>

                <div className="pt-4 text-center">
                  <Button size="lg" className="h-12" asChild>
                    <Link href="/">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
