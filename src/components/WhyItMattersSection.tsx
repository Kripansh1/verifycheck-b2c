import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, TrendingDown, Users } from "lucide-react";

const WhyItMattersSection = () => {
  const risks = [
    {
      icon: AlertTriangle,
      title: "Credential Fraud Prevention",
      stat: "76%",
      description: "of employers have caught candidates lying on their resumes"
    },
    {
      icon: DollarSign,
      title: "Cost of Bad Hires",
      stat: "$240K",
      description: "average cost of a bad executive hire according to industry studies"
    },
    {
      icon: TrendingDown,
      title: "Productivity Loss",
      stat: "3-5x",
      description: "salary impact when hiring unqualified candidates"
    },
    {
      icon: Users,
      title: "Team Impact",
      stat: "67%",
      description: "of teams report decreased morale due to unverified hires"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Profile Verification Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The cost of hiring mistakes is higher than ever. Protect your organization 
            with comprehensive verification services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {risks.map((risk, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-elevated transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <risk.icon className="h-6 w-6 text-warning" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-warning">
                      {risk.stat}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {risk.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Mitigation Points */}
        <div className="bg-gradient-light rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            How Verification Mitigates These Risks
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Early Detection</h4>
              <p className="text-muted-foreground">
                Identify fraudulent credentials before they impact your organization
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Cost Savings</h4>
              <p className="text-muted-foreground">
                Reduce turnover costs and productivity losses from bad hires
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Better Outcomes</h4>
              <p className="text-muted-foreground">
                Improve team performance and workplace culture with verified talent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;