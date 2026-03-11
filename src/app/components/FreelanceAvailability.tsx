import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function FreelanceAvailability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      title: "UI/UX Design",
      description: "End-to-end product design from research to high-fidelity mockups"
    },
    {
      title: "Product Strategy",
      description: "Strategic planning and user experience consulting for digital products"
    },
    {
      title: "Design Systems",
      description: "Building scalable, consistent design systems for growing teams"
    },
    {
      title: "UX Research",
      description: "User research, testing, and insights to inform design decisions"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-violet-50/30 to-background dark:from-background dark:via-violet-950/10 dark:to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-500/20">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-foreground">
            Hello 👋 I'm available for<br />freelance work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm passionate about helping startups and established companies create exceptional digital experiences. 
            Let's collaborate on your next project and bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-violet-500/50 hover:bg-card/80 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-violet-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-foreground group-hover:text-violet-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 backdrop-blur-sm border border-violet-500/20 shadow-xl shadow-violet-500/10">
            <h3 className="text-2xl md:text-3xl mb-4 text-foreground">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a complete product redesign, a new design system, or expert UX guidance, 
              I'm here to help you achieve your goals.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300">
                Let's Talk About Your Project
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}