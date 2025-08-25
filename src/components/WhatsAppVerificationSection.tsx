import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, UploadCloud, FileDown } from "lucide-react";

const WhatsAppVerificationSection = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Start Profile Verification on WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Begin your verification in a familiar chat interface. Share documents securely
            and receive your Verification Certificate right inside WhatsApp.
          </p>
        </div>

        <Card className="border border-border shadow-elevated overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              {/* Left copy */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">Chat to Initiate</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UploadCloud className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">Share Aadhaar / Driving License</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">We verify your identity securely</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileDown className="h-5 w-5 text-primary" />
                    <p className="text-foreground font-medium">Get your Verification Certificate PDF</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/919340128637"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="lg" className="bg-whatsapp text-white hover:opacity-90">
                      Start on WhatsApp
                    </Button>
                  </a>
                  {/* tiny style for WhatsApp brand color without requiring extra CSS */}
                  <style>{`.bg-whatsapp{background-color:#25D366}`}</style>
                </div>
              </div>

              {/* Right image */}
              <div className="relative bg-muted/30 flex items-center justify-center p-6">
                <img
                  src="/Verify%20Check.png"
                  alt="Verification chat flow on WhatsApp showing document share and certificate download"
                  className="max-h-[560px] w-auto object-contain drop-shadow-2xl rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatsAppVerificationSection;
