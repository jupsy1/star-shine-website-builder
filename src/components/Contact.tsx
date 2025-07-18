import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Send className="h-4 w-4 text-accent mr-2" />
            <span className="text-accent text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Repair
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Your Stars?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let negative reviews damage your business any longer. Contact us today for a free consultation and customized reputation strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elegant bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Reputation Audit</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll analyze your current online reputation for free.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name *</label>
                    <Input placeholder="Enter your first name" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name *</label>
                    <Input placeholder="Enter your last name" className="border-border" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="your@email.com" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input placeholder="(555) 123-4567" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Business Name *</label>
                  <Input placeholder="Enter your business name" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Website URL</label>
                  <Input placeholder="https://yourbusiness.com" className="border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Tell us about your reputation challenges</label>
                  <Textarea 
                    placeholder="Describe any negative reviews, rating issues, or reputation concerns you're facing..."
                    className="min-h-[120px] border-border"
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Get My Free Audit
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from RepairYourStars. 
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-0 shadow-card bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">07398243131</div>
                      <div className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM EST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@repairyourstars.com</div>
                      <div className="text-sm text-muted-foreground">24 hour response time</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-success-green" />
                    </div>
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-muted-foreground">Innovation House<br />131 Broad Street<br />Birmingham, B1 2HF<br />United Kingdom</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="border-0 shadow-card bg-gradient-to-br from-warning-orange/5 to-background">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-warning-orange mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Reputation Crisis?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Dealing with a reputation emergency? We offer 24/7 crisis support.
                </p>
                <Button variant="outline" size="sm" className="text-warning-orange border-warning-orange hover:bg-warning-orange hover:text-white">
                  Emergency Support
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-card bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span className="font-bold">&lt; 24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clients Served</span>
                    <span className="font-bold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Improvement</span>
                    <span className="font-bold">2.3 Stars</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};