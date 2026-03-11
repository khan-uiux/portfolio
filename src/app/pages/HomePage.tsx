import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SixDProcess } from "../components/SixDProcess";
import { DesignerProfile } from "../components/DesignerProfile";
import { ToolsSkills } from "../components/ToolsSkills";
import { CaseStudies } from "../components/CaseStudies";
import { SocialLinks } from "../components/SocialLinks";
import { Contact } from "../components/Contact";
import { ExperienceLearning } from "../components/ExperienceLearning";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router";

export function HomePage() {
  const navigate = useNavigate();

  const handleViewCaseStudy = (project: string) => {
    navigate(`/case-study/${project}`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <Hero />
      <SixDProcess />
      <ToolsSkills />
      <DesignerProfile />
      <CaseStudies onViewCaseStudy={handleViewCaseStudy} />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}