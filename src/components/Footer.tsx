import { Star, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-accent fill-accent" />
              <span className="text-2xl font-bold">RepairYourStars</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional Online Reputation Management helping businesses rebuild trust and attract more customers through strategic review management and digital presence optimization.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-accent transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-accent transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-white/60 hover:text-accent transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Review Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Google My Business Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Brand Monitoring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">SEO Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Crisis Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Reputation Audit</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">07398243131</div>
                  <div className="text-sm text-white/60">Mon-Fri 8AM-6PM EST</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">jay@repairyourstars.com</div>
                  <div className="text-sm text-white/60">24hr response time</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Innovation House</div>
                  <div className="text-white/80">131 Broad Street</div>
                  <div className="text-white/80">Birmingham, B1 2HF</div>
                  <div className="text-white/80">United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 RepairYourStars.com. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
