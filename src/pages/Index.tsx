import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ProfileVerificationSection from "@/components/ProfileVerificationSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import VerificationComponents from "@/components/VerificationComponents";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProfileVerificationSection />
        <WhyItMattersSection />
        <VerificationComponents />
        <ProcessSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;