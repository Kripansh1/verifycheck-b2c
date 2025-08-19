import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  Phone, 
  Award,
  ArrowRight
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Information Collection",
      description: "Secure submission of personal and professional documents through our encrypted portal.",
      details: [
        "Document upload via secure portal",
        "Personal information form completion",
        "Consent and authorization signatures",
        "Payment processing"
      ],
      duration: "Day 1"
    },
    {
      icon: Search,
      title: "Database Verification", 
      description: "Cross-referencing submitted information with multiple authoritative databases and sources.",
      details: [
        "Educational institution verification",
        "Employment records cross-check",
        "Criminal background screening",
        "Identity confirmation"
      ],
      duration: "Days 2-3"
    },
    {
      icon: ShieldCheck,
      title: "Authentication Process",
      description: "Advanced authentication using AI-powered verification and manual expert review.",
      details: [
        "Document authenticity analysis",
        "Fraud detection algorithms",
        "Expert manual review",
        "Quality assurance checks"
      ],
      duration: "Days 3-4"
    },
    {
      icon: Phone,
      title: "Reference Checks",
      description: "Direct contact with employers, institutions, and professional references for validation.",
      details: [
        "Employer contact verification",
        "Academic institution confirmation",
        "Professional reference calls",
        "Character assessment"
      ],
      duration: "Days 4-5"
    },
    {
      icon: Award,
      title: "Final Certificate Issuance",
      description: "Generation of your official verification certificate with security features and digital validation.",
      details: [
        "Certificate generation",
        "Digital signature application",
        "QR code for verification",
        "Secure delivery"
      ],
      duration: "Day 5"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Verification Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic 5-step approach ensuring accuracy, security, and reliability 
            in every verification certificate we issue.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-primary opacity-20"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground border-0 w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </Badge>
                  </div>
                  
                  <Card className="border border-border hover:shadow-elevated transition-all duration-300 group pt-8">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-xs text-primary font-medium">{step.duration}</div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>

                        <div className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-xs text-muted-foreground">
                              • {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary opacity-50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="border border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <Badge className="bg-gradient-primary text-primary-foreground border-0 w-10 h-10 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center space-x-3">
                        <step.icon className="h-6 w-6 text-primary" />
                        <div>
                          <div className="text-xs text-primary font-medium">{step.duration}</div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                      
                      <div className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm text-muted-foreground">
                            • {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="h-6 w-6 text-primary opacity-50 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;