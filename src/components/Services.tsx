import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Search, Shield, ArrowRight, CheckCircle } from "lucide-react";
import reviewsImage from "@/assets/services-reviews.jpg";
import gmbImage from "@/assets/services-gmb.jpg";
import seoImage from "@/assets/services-seo.jpg";

export const Services = () => {
  const services = [
    {
      icon: <Star className="h-8 w-8 text-warning-orange" />,
      image: reviewsImage,
      title: "Review Management",
      description: "Strategic response to negative reviews and proactive generation of positive feedback.",
      features: [
        "Professional review responses",
        "Review generation campaigns", 
        "Review monitoring & alerts",
        "Customer satisfaction surveys"
      ],
      color: "from-warning-orange/20 to-warning-orange/5"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      image: gmbImage,
      title: "Google My Business Optimization", 
      description: "Maximize your local search visibility and attract more customers to your business.",
      features: [
        "GMB profile optimization",
        "Local SEO enhancement",
        "Business hours & info updates",
        "Photo & content management"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: <Search className="h-8 w-8 text-success-green" />,
      image: seoImage,
      title: "Brand Monitoring & SEO",
      description: "Comprehensive online presence management with search engine optimization.",
      features: [
        "24/7 brand monitoring",
        "Search result optimization",
        "Content creation & promotion",
        "Crisis management support"
      ],
      color: "from-success-green/20 to-success-green/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Reputation Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From review management to search optimization, we provide end-to-end solutions 
            to protect and enhance your online reputation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img src={service.image} alt={service.title} className="w-12 h-12 object-cover rounded-lg" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success-green mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a comprehensive analysis of your current online reputation and a customized strategy to improve it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="success"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Reputation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};