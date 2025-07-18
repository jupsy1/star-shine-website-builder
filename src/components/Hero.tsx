import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-reputation.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-accent mr-2" />
              <span className="text-white text-sm font-medium">
                Professional Online Reputation Management
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-accent to-success-green bg-clip-text text-transparent">
                {" "}Online Reputation
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Don't let negative reviews damage your business. Our expert team helps you 
              reclaim control of your online presence and build lasting customer trust.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 text-white">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-semibold">4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-success-green" />
                <span className="font-semibold">98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold">500+ Businesses Helped</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="success" className="text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                View Our Services
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Professional Online Reputation Management" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-card animate-bounce">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-warning-orange fill-warning-orange" />
                <div>
                  <div className="text-sm font-bold text-foreground">5.0 Rating</div>
                  <div className="text-xs text-muted-foreground">+127 Reviews</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-card animate-pulse">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-success-green" />
                <div>
                  <div className="text-sm font-bold text-foreground">Rating Improved</div>
                  <div className="text-xs text-muted-foreground">+2.3 Stars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};