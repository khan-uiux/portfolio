import { Header } from "../components/Header";
import { SocialLinks } from "../components/SocialLinks";
import { FreelanceAvailability } from "../components/FreelanceAvailability";
import { ExperienceLearning } from "../components/ExperienceLearning";
import { Footer } from "../components/Footer";

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">My Process</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-foreground/80 mb-6">
              Explain your design process, methodology, and approach here.
            </p>
            <p className="text-foreground/70 mb-4">
              This is a placeholder page where you can detail how you work and solve problems.
            </p>
          </div>
        </div>
      </div>
      <SocialLinks />
      <FreelanceAvailability />
      <ExperienceLearning />
      <Footer />
    </div>
  );
}