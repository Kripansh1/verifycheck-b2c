import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  GraduationCap, 
  Building, 
  Shield, 
  Award, 
  Clock,
  CheckCircle,
  FileText
} from "lucide-react";

const VerificationComponents = () => {
  const components = [
    {
      icon: User,
      title: "Identity Verification",
      description: "Comprehensive identity validation including government-issued ID verification, biometric authentication, and address confirmation.",
      features: ["Government ID Check", "Biometric Verification", "Address Validation", "Social Security Verification"],
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Educational Background Check",
      description: "Thorough verification of academic credentials, degrees, certifications, and educational achievements from recognized institutions.",
      features: ["Degree Verification", "Institution Authentication", "GPA Validation", "Certification Checks"],
      color: "bg-green-500"
    },
    {
      icon: Building,
      title: "Employment History Verification",
      description: "Complete employment background screening including job titles, employment dates, salary verification, and performance records.",
      features: ["Employment Dates", "Position Verification", "Salary Confirmation", "Performance Records"],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Criminal Background Screening",
      description: "Comprehensive criminal history checks including local, national, and international databases for complete peace of mind.",
      features: ["Criminal Records", "Court Records", "International Checks", "Watchlist Screening"],
      color: "bg-red-500"
    },
    {
      icon: Award,
      title: "Professional License Validation",
      description: "Verification of professional licenses, certifications, and regulatory compliance across various industries and jurisdictions.",
      features: ["License Verification", "Regulatory Compliance", "Certification Status", "Renewal Tracking"],
      color: "bg-yellow-500"
    },
    {
      icon: FileText,
      title: "Reference Checks",
      description: "Professional reference verification including supervisor contacts, peer reviews, and character assessments from previous employers.",
      features: ["Supervisor Contacts", "Peer Reviews", "Character Assessment", "Performance Feedback"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Verification Components
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multi-layered approach ensures thorough verification across all aspects 
            of a candidate's background and credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-elevated transition-all duration-300 group animate-fade-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="space-y-4 flex-grow">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <component.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {component.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {component.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end pt-4 mt-4 border-t border-border">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-success font-medium">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationComponents;