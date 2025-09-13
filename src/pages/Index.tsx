import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestWorks from "@/components/LatestWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LatestWorks />
      </main>
    </div>
  );
};

export default Index;
