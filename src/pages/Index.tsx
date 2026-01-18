import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
