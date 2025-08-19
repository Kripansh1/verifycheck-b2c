import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // Commented out since we're embedding HubSpot form
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const hubspotRef = useRef<HTMLDivElement | null>(null);

  // Load HubSpot embed script (auto-initializes .hs-form-frame)
  useEffect(() => {
    const SCRIPT_ID = "hs-embed-243642137-js";
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.src = "https://js-na2.hsforms.net/forms/embed/243642137.js";
      s.defer = true;
      s.id = SCRIPT_ID;
      document.body.appendChild(s);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const base = (import.meta as any).env?.VITE_API_BASE || "http://localhost:8080";
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to submit");
      setStatus({ ok: true, message: "Thanks! We will contact you within 24 hours." });
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      setStatus({ ok: false, message: "Sorry, something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-gradient-light pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Trusted Profile Verification for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Global Opportunities
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mandatory verification certificates for foreign job applications. 
                Ensure your credentials are verified by trusted professionals 
                and stand out in the global marketplace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group"
              >
                Get Verified Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - HubSpot Enquiry Form (custom styled) */}
          <div className="relative animate-fade-up">
            {/* Switched to light theme card */}
            <Card className="border border-border bg-card text-foreground shadow-elevated overflow-hidden">
              {/* Top color bar */}
              <div className="h-1 w-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-400 to-pink-400" />
              <CardHeader>
                <CardTitle className="text-2xl">Enquiry Now</CardTitle>
                <div className="w-16 h-[3px] bg-primary mt-2 rounded" />
              </CardHeader>
              <CardContent>
                {/* HubSpot script is loaded via useEffect above */}
                <div ref={hubspotRef} className="hubspot-embed">
                  <div
                    className="hs-form-frame"
                    data-region="na2"
                    data-form-id="9dd9e924-8ac0-4c5a-aa07-95ad43f10cda"
                    data-portal-id="243642137"
                  />
                </div>
                {/* Style HubSpot form to match our light card UI */}
                <style>{`
                  /* Container spacing */
                  .hubspot-embed .hs-form fieldset { max-width: 100% !important; }
                  .hubspot-embed .hs-form .hs-form-field { margin-bottom: 1rem !important; }

                  /* Labels - ensure visible on dark card */
                  .hubspot-embed .hs-form label {
                    color: hsl(var(--foreground)) !important;
                    font-size: 0.875rem !important; /* text-sm */
                    font-weight: 600 !important;
                    margin-bottom: 0.5rem !important;
                    display: block !important;
                  }

                  /* Inputs */
                  .hubspot-embed .hs-form .hs-input,
                  .hubspot-embed .hs-form input[type="text"],
                  .hubspot-embed .hs-form input[type="email"],
                  .hubspot-embed .hs-form input[type="tel"],
                  .hubspot-embed .hs-form select,
                  .hubspot-embed .hs-form textarea {
                    width: 100% !important;
                    background: hsl(var(--card)) !important;
                    color: hsl(var(--foreground)) !important;
                    border: 1px solid hsl(var(--border)) !important;
                    border-radius: 0.5rem !important; /* rounded-md */
                    padding: 0.625rem 0.875rem !important; /* px-3 py-2.5 */
                    min-height: 44px !important; /* touch target */
                    box-shadow: none !important;
                  }
                  .hubspot-embed .hs-form .hs-input:focus,
                  .hubspot-embed .hs-form input:focus,
                  .hubspot-embed .hs-form select:focus,
                  .hubspot-embed .hs-form textarea:focus {
                    outline: 2px solid hsl(var(--primary)) !important;
                    outline-offset: 0 !important;
                    border-color: hsl(var(--primary)) !important;
                  }
                  .hubspot-embed .hs-form input::placeholder,
                  .hubspot-embed .hs-form textarea::placeholder {
                    color: hsl(var(--muted-foreground)) !important;
                    opacity: 1 !important;
                  }

                  /* Button */
                  .hubspot-embed .hs-form .hs-button {
                    width: 100% !important;
                    background: hsl(var(--primary)) !important;
                    color: hsl(var(--primary-foreground)) !important;
                    border: none !important;
                    border-radius: 0.5rem !important;
                    padding: 0.75rem 1rem !important; /* py-3 */
                    font-weight: 700 !important;
                    cursor: pointer !important;
                  }
                  .hubspot-embed .hs-form .hs-button:hover { opacity: 0.9 !important; }

                  /* Errors and misc */
                  .hubspot-embed .hs-form .inputs-list { margin: 0 !important; }
                  .hubspot-embed .hs_error_rollup { display: none !important; }
                `}</style>

                {/**
                 * The original in-house form is commented out per request.
                 * Keeping it here for quick restoration if needed.
                 */}
                {false && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* fields */}
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">Submit</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;