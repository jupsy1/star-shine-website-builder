import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Restaurant",
      rating: 5,
      text: "RepairYourStars transformed our online presence completely. We went from a 2.1 to 4.8 star rating in just 6 months. Our customer traffic has increased by 40%!",
      improvement: "2.7 star increase"
    },
    {
      name: "Michael Chen",
      business: "Chen Dental Practice",
      rating: 5,
      text: "The team's professional approach to handling negative reviews was impressive. They helped us address concerns while building a strong positive reputation online.",
      improvement: "98% positive sentiment"
    },
    {
      name: "Lisa Rodriguez",
      business: "Rodriguez Law Firm",
      rating: 5,
      text: "Outstanding service! They not only improved our Google reviews but also optimized our entire online presence. Highly recommend their expertise.",
      improvement: "300% more reviews"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success-green/10 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-success-green mr-2" />
            <span className="text-success-green text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results for
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Real Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how RepairYourStars has helped businesses like yours rebuild trust and attract more customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning-orange fill-warning-orange" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.business}</div>
                  <div className="inline-flex items-center bg-success-green/10 rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-success-green">
                      {testimonial.improvement}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-orange mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};