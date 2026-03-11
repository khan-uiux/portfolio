import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  Figma, 
  Layers, 
  Search, 
  Sparkles, 
  Code,
  Users
} from "lucide-react";

export function ToolsSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Design & Prototyping",
      icon: Figma,
      skills: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Dev Tools",
      icon: Code,
      skills: ["HTML5", "CSS3", "Bootstrap", "SCSS", "javaScript"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Team Collaboration",
      icon: Users,
      skills: ["Microsoft Teams", "Google Meets"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Header Badge - Designer Profile Style */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-pink-500/10 border border-violet-200 dark:border-violet-800 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Tools & Skills
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for designing scalable, user-centered products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-violet-400/50 dark:hover:border-violet-600/50 hover:bg-card hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />

                {/* Icon with gradient background */}
                <div className="mb-4">
                  <motion.div 
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-lg mb-3 font-semibold">{category.title}</h3>

                {/* Skills list - Compact grid layout */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * skillIndex }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted border border-border/50 hover:border-violet-400/50 dark:hover:border-violet-600/50 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 cursor-default"
                      title={skill}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}