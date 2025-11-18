import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_INFO } from "@config";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to start saving energy and money? Book your free consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(08) 1234 5678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Energy Audit Inquiry"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your home and what you're looking to achieve..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-sans">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Phone</h3>
                      <a href={BUSINESS_INFO.phoneHref} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{BUSINESS_INFO.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Email</h3>
                      <a href={BUSINESS_INFO.emailHref} className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                        {BUSINESS_INFO.email}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">{BUSINESS_INFO.responseTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-sans">Service Area</h3>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS_INFO.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {BUSINESS_INFO.serviceRadius}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-sans">Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-95 leading-relaxed">
                    Not sure where to start? Book a free 30-minute consultation to discuss your home's energy needs. No obligation, just expert advice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-accent/5 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Common Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about energy audits and passive design
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-2.5">
              <AccordionItem value="item-1" className="border-2 rounded-lg px-6 bg-background/80 backdrop-blur-sm">
                <AccordionTrigger className="font-sans font-semibold hover:no-underline">
                  What is an energy audit and what does it include?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  An energy audit is a comprehensive assessment of your home's energy performance. We use thermal imaging to identify heat loss, conduct air leakage testing to find draughts, and review your appliances and systems. You'll receive a detailed report with prioritised recommendations and estimated costs and savings for each improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-lg px-6 bg-background/80 backdrop-blur-sm">
                <AccordionTrigger className="font-sans font-semibold hover:no-underline">
                  How much can I realistically save on my energy bills?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most Adelaide Hills homeowners see savings of 30–50% after implementing our recommendations. The exact amount depends on your current home's condition and which improvements you choose to implement. Simple fixes like sealing air leaks can save 10–15%, whilst comprehensive upgrades including insulation and passive design features can achieve 40–50% reductions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-lg px-6 bg-background/80 backdrop-blur-sm">
                <AccordionTrigger className="font-sans font-semibold hover:no-underline">
                  What is passive design and is it only for new homes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Passive design uses your home's orientation, materials, and layout to naturally regulate temperature without relying on heating and cooling systems. Whilst it's easiest to incorporate in new builds, many passive design principles can be applied to existing homes through renovations—such as adding thermal mass, improving insulation, installing appropriate shading, and optimising natural ventilation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-lg px-6 bg-background/80 backdrop-blur-sm">
                <AccordionTrigger className="font-sans font-semibold hover:no-underline">
                  How long does an energy audit take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A typical residential energy audit takes 2–3 hours on-site. This includes thermal imaging, air leakage testing, and a thorough inspection of your home's envelope, insulation, windows, and systems. You'll receive your detailed report with recommendations within 5–7 business days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-lg px-6 bg-background/80 backdrop-blur-sm">
                <AccordionTrigger className="font-sans font-semibold hover:no-underline">
                  Do you offer rebates or financing options?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Whilst we don't directly offer financing, we can guide you through available South Australian government rebates and incentive programmes for energy efficiency upgrades. We'll identify which improvements qualify for rebates and provide all the documentation you need for your applications. Many improvements pay for themselves within 2–5 years through energy savings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

