import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
// import bribooksLogo from "../../assets/eecdabb43a7e13c3f8a5249e367a6909c3845ec7.png";
// import dearImaginationLogo from "../../assets/6cf23f33b9e6c194a43bf78608dfd6e53fe3ccda.png";
// import mosyLogo from "../../assets/16a0954c9a68076d796c4bea7d82c2e8e48b603c.png";
// import statcapLogo from "../../assets/39e67987220cf3e758c6c8f572cee950117b5bf4.png";
// import econivasLogo from "../../assets/9c0219af6f86f5625b0e9a6474b8abec7d343e73.png";
// import idigitaleyeLogo from "../../assets/bb22cef3502b6d707435823675c512724c54b40e.png";
// import voicesOfEducationLogo from "../../assets/15b2c13b79d1b494400a9d7209b61bee0d0fd468.png";
// import zipshopLogo from "../../assets/267c1796830b7b73e3c4bfd01dfec5ea0be6e3ce.png";

export function ExperienceLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const projectLogos = [
    {
      name: "BriBooks",
      image: bribooksLogo,
    },
    {
      name: "Dear Imagination",
      image: dearImaginationLogo,
    },
    {
      name: "MOSY",
      image: mosyLogo,
    },
    {
      name: "STATCAP ConnecT",
      image: statcapLogo,
    },
    {
      name: "ECO-NIWAS",
      image: econivasLogo,
    },
    {
      name: "iDigitalEye",
      image: idigitaleyeLogo,
    },
    {
      name: "Voices Of Education India",
      image: voicesOfEducationLogo,
    },
    {
      name: "ZIPSHOP",
      image: zipshopLogo,
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...projectLogos, ...projectLogos];

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollAmount = 0;
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += 0.5;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section
      ref={ref}
      className="py-12 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4">
            <p>6D Process</p>I believe in experience-based
            learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Every project has been a learning opportunity,
            allowing me to refine my craft, understand diverse
            user needs, and build solutions that create real
            impact. Through hands-on experience across
            education, government, and consumer tech, I've
            developed a deep understanding of how great design
            shapes user behavior and drives business outcomes.
          </p>
        </motion.div>

        {/* Project Logos Scrolling Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>

          <div
            ref={scrollRef}
            className="overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-8 w-max">
              {duplicatedLogos.map((project, index) => (
                <div
                  key={`${project.name}-${index}`}
                  className="group flex-shrink-0 relative"
                >
                  <div
                    className="h-24 w-auto p-0 flex items-center justify-center bg-card rounded-xl hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300"
                    style={{ border: '0.5px solid var(--border)' }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="bg-slate-900 dark:bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                      {project.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-800 rotate-45" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Button */}
          <div className="text-center mt-8">
            <Link to="/work">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}