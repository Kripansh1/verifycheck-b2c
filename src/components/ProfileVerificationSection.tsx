import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Globe, TrendingUp } from "lucide-react";

const ProfileVerificationSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your organization from credential fraud and identity theft"
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Demonstrate your commitment to hiring qualified professionals"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Meet international standards for employment verification"
    },
    {
      icon: TrendingUp,
      title: "Improved Hiring",
      description: "Make informed decisions with verified candidate information"
    }
  ];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Profile Verification Certificate
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Profile Verification?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A Profile Verification Certificate is a comprehensive document that validates 
              an individual's identity, educational background, employment history, and 
              professional credentials. This certificate serves as proof of authenticity 
              for employers and organizations worldwide.
            </p>
          </div>

          {/* Certificate Preview */}
          <div className="mb-16">
            <Card className="border-2 border-primary/20 shadow-elevated">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <Shield className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Verify Check Profile Verification Certificate
                  </h3>
                  <p className="text-muted-foreground">
                    Official verification document recognized globally
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">Identity</div>
                      <div className="text-sm text-muted-foreground">Verified ✓</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">Education</div>
                      <div className="text-sm text-muted-foreground">Verified ✓</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">Employment</div>
                      <div className="text-sm text-muted-foreground">Verified ✓</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">Background</div>
                      <div className="text-sm text-muted-foreground">Verified ✓</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Benefits for Organizations & Individuals
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="border border-border hover:shadow-card transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileVerificationSection;