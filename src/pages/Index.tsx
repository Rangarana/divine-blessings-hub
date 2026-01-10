import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiveDarshan from "@/components/LiveDarshan";
import HanumanChalisa from "@/components/HanumanChalisa";
import Festivals from "@/components/Festivals";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <LiveDarshan />
        <HanumanChalisa />
        <Festivals />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
