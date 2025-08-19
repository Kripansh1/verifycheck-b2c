import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Zap, 
  Globe, 
  Clock, 
  Award 
} from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "15+ Years of Experience",
      description: "Over a decade of expertise in background verification and screening services across multiple industries and global markets.",
      metric: "15+ Years"
    },
    {
      icon: Users,
      title: "Industry Expertise",
      description: "Deep understanding of compliance requirements across healthcare, finance, technology, and government sectors.",
      metric: "50+ Industries"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Cutting-edge AI-powered verification systems combined with human expertise for unmatched accuracy and efficiency.",
      metric: "99.9% Accuracy"
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description: "Global verification capabilities with access to databases and institutions in over 190 countries worldwide.",
      metric: "190+ Countries"
    },
    {
      icon: Clock,
      title: "Quick Turnaround Time",
      description: "Standard verification completed within 5 business days with expedited services available for urgent requirements.",
      metric: "5-Day Standard"
    },
    {
      icon: Award,
      title: "Certified & Compliant",
      description: "ISO 27001 certified with full GDPR compliance and adherence to international data protection standards.",
      metric: "ISO Certified"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Verify Check?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by thousands of organizations worldwide for reliable, accurate, 
            and comprehensive verification services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {feature.metric}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-background rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Verifications Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Corporate Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;