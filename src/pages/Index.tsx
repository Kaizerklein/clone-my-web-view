import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestWorks from "@/components/LatestWorks";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LatestWorks />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;
