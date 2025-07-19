import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase"; // Import your Supabase client

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.businessName) {
      toast({
        title: "Please fill in all required fields",
        description: "First Name, Last Name, Email, and Business Name are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Actually save to Supabase
      const { data, error } = await supabase
        .from('reputation_audits') // Replace with your actual table name
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phone,
          business_name: formData.businessName,
          website_url: formData.website,
          reputation_challenges: formData.message,
         }]);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Success message
      toast({
        title: "Audit Request Submitted!",
        description: "We'll contact you within 24 hours with your free reputation audit.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        website: '',
        message: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission failed",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        className="border-border" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        className="border-border" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        className="border-border" 
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="07398243131" 
                        className="border-border" 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Business Name *</label>
                    <Input 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Enter your business name" 
                      className="border-border" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Website URL</label>
                    <Input 
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourbusiness.com" 
                      className="border-border" 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Tell us about your reputation challenges</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe any negative reviews, rating issues, or reputation concerns you're facing..."
                      className="min-h-[120px] border-border"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Submitting...' : 'Get My Free Audit'}
                  </Button>
                </form>
                
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-warning-orange border-warning-orange hover:bg-warning-orange hover:text-white"
                  onClick={scrollToContact}
                >
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
