import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, TrendingUp, Clock, ArrowRight } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "500+", label: "Businesses Helped" },
    { icon: <Award className="h-8 w-8 text-success-green" />, number: "98%", label: "Success Rate" },
    { icon: <TrendingUp className="h-8 w-8 text-warning-orange" />, number: "2.3x", label: "Average Rating Increase" },
    { icon: <Clock className="h-8 w-8 text-accent" />, number: "24/7", label: "Monitoring Support" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">About RepairYourStars</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}Online Reputation
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                We understand the pain of seeing negative reviews impact your business. 
                A single bad review can overshadow years of excellent service and drive 
                potential customers away.
              </p>
              
              <p>
                At RepairYourStars, we specialize in ethical online reputation management 
                that helps businesses like yours regain control of their digital narrative. 
                Our proven strategies focus on building authentic positive presence while 
                professionally addressing negative feedback.
              </p>
              
              <p>
                With our comprehensive approach combining review management, GMB optimization, 
                and strategic SEO, we've helped hundreds of businesses transform their 
                online reputation and rebuild customer trust.
              </p>
            </div>
            
            <Button size="lg" variant="professional">
              Learn About Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow duration-300 border-0 bg-gradient-to-br from-secondary to-background">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-card mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Businesses Choose RepairYourStars
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Proven Expertise</h4>
              <p className="text-muted-foreground">
                Years of experience in online reputation management with a track record of success across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Personalized Approach</h4>
              <p className="text-muted-foreground">
                Every business is unique. We create customized strategies tailored to your specific needs and industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Measurable Results</h4>
              <p className="text-muted-foreground">
                We provide transparent reporting and measurable improvements to your online reputation and search visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};