import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <HeroSection />
      
      <SectionSeparator />
      <InteractiveTerminal />
      
      <SectionSeparator />
      <AboutSection />
      
      <SectionSeparator />
      <SkillsSection />
      
      <SectionSeparator />
      <ProjectsSection />
      
      <SectionSeparator />
      <CertificationsSection />
      
      <SectionSeparator />
      <EducationSection />
      
      <SectionSeparator />
      <ExperienceSection />
      
      <SectionSeparator />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
