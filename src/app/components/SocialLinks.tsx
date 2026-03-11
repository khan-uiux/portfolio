import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Linkedin, Mail, FileText, } from "lucide-react";

export function SocialLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/irfanoptimistic/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:border-blue-500 dark:hover:border-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:irfanoptimistic@gmail.com",
      color: "from-violet-600 to-purple-600",
      hoverColor: "hover:border-violet-500 dark:hover:border-violet-600"
    },
    {
      name: "Phone",
      icon: FileText,
      url: "tel:+7838957053",
      color: "from-violet-600 to-purple-600",
      hoverColor: "hover:border-violet-500 dark:hover:border-violet-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">Let's Be Friends! 👋</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Connect with me on various platforms to stay updated with my latest work and thoughts
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative p-6 rounded-2xl bg-card border border-border ${social.hoverColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon with gradient background */}
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${social.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{social.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    @Irfan
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.a>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            I'm always open to interesting conversations and collaboration opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
