import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary-light" />
              <span className="text-base font-semibold">Verify Check</span>
            </div>
            <p className="text-background/70 text-sm">
              &copy; {new Date().getFullYear()} Verify Check Screening Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;