import { motion, useInView } from "motion/react";
import { useRef } from "react";
import sphinxWorldbiz from "../../assets/15812daa6c4381f2d35cbb7e97710ba6975519ee.png";

interface CaseStudiesProps {
  onViewCaseStudy: (project: "sphinx" | "policy" | "sharescart" | "barbados" | "sorwe") => void;
}

export function CaseStudies({ onViewCaseStudy }: CaseStudiesProps) {
  const ref = useRef(null);

  const projects = [
    {
      id: "sphinx" as const,
      title: "Sphinx Worldbiz",
      description: "Aug 2025 to Present",
      image: sphinxWorldbiz,
      gradient: "from-green-500/20 to-emerald-500/20",
      experties: ["UI/UX Design", "Frontend Development", "Figma", "Photoshop", "HTML", "CSS", "SCSS", "Bootstrap", "javaScript"],
      url: "https://www.sphinxworldbiz.com/"
    },
    {
      id: "policyX.com" as const,
      title: "PolicyX.com",
      description: "Oct 2022 - June 2025",
      image: sphinxWorldbiz,
      gradient: "from-green-500/20 to-emerald-500/20",
      experties: ["UI/UX", "Web Design", "Graphic Design", "HTML", "CSS", "SCSS", "Bootstrap", "javaScript"],
      url: "https://policyx.com/"
    },
    {
      id: "Haut IT Solutions" as const,
      title: "Haut IT Solutions",
      description: "Jan 2022 - Sep 2022",
      image: sphinxWorldbiz,
      gradient: "from-green-500/20 to-emerald-500/20",
      experties: ["Web Design", "Graphic Design", "Photoshop", "HTML", "CSS", "Bootstrap",],
      url: "https://www.hautitsolutions.com/"
    }
    
  ];

  return (
    <section id="case-studies" ref={ref} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real-world projects showcasing end-to-end design thinking, problem-solving, and measurable impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            // Project numbers: 05, 01, 02, 03
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={project.id}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative w-full"
              >
                {/* Figma-style Card Container */}
                <div className="relative rounded-lg overflow-hidden border border-black/10" style={{ 
                  background: "linear-gradient(rgb(255, 255, 255) 0.57%, rgba(255, 255, 255, 0.973) 60.7%, rgba(255, 255, 255, 0.97) 70.1%, rgba(255, 255, 255, 0.86) 93.26%), linear-gradient(90deg, rgb(0, 190, 255) 8.78%, rgb(255, 220, 24) 53.8%, rgb(255, 50, 120) 97.3%)"
                }}>
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0 p-0">
                    
                    {/* Left Content Section - Minimal */}
                    <div className="flex flex-col justify-center space-y-4 px-12 lg:px-24 py-6 lg:py-8">
                      
                      {/* Top Section */}
                      <div className="space-y-4">
                        {/* Project Number Badge with Logo */}
                        <div className="flex items-center gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/5 backdrop-blur-sm">
                            <span className="font-medium text-[14px] text-black/60">{projectNumber}</span>
                          </div>
                        </div>
                        
                        {/* Project Title - Bold & Large */}
                        <div>
                          <h3 className="font-bold text-[32px] lg:text-[40px] leading-[1.2] text-black">
                            {project.title}
                          </h3>
                        </div>
                        
                        {/* Short Tagline - Single Line */}
                        <div>
                          <p className="text-[18px] leading-[1.6] text-[#7e7e7e] max-w-md">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Minimal Meta Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.experties.map((item, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-[12px] rounded-full bg-black/5 text-black/60"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <div className="pt-[10px]">
                          <button
                            className="group inline-flex items-center gap-3 border-2 border-black rounded-full px-8 py-3 text-[15px] font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                          >
                            <a href={project.url} target="_blank">View Case Study</a>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Image Section - Hero Visual */}
                    <div className="relative h-[450px] lg:h-[550px] px-12 lg:px-16 py-8">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500" />
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}