import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building, FileCheck } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Highest Qualification Check",
      description: "Comprehensive verification of educational credentials, degrees, and certifications from accredited institutions worldwide.",
      features: ["Degree Authentication", "Institution Verification", "Grade Validation"]
    },
    {
      icon: Building,
      title: "Previous Employment Verification",
      description: "Thorough validation of work history, job titles, employment dates, and professional references.",
      features: ["Employment History", "Position Verification", "Reference Checks"]
    },
    {
      icon: FileCheck,
      title: "Passport & Identity Verification",
      description: "Secure identity verification including passport authentication and government document validation.",
      features: ["Identity Confirmation", "Document Authentication", "Biometric Verification"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Key Verification Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive background screening solutions designed to meet global employment standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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

export default ServicesOverview;