import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

export function CurrentRole() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-3">
            Current Role
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-950/30 dark:to-blue-950/30 border border-violet-100 dark:border-violet-900 shadow-xl">
            {/* Company Logo Placeholder */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6 text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <Briefcase className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl mb-4">
                  UI UX Designer At BriBooks
                </h3>
                <div className="flex justify-start gap-3 text-sm">
                  {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 dark:bg-background/40 border border-border">
                    <Building2 className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    <span>Work from office</span>
                  </div> */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 dark:bg-background/40 border border-border">
                    <MapPin className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    <span className="font-medium">Gurgaon</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 dark:bg-background/40 border border-border">
                    <Calendar className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    <span className="font-medium">2022 – Present</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta Info */}

            {/* Description */}
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                I lead end-to-end product design for a
                large-scale EdTech ecosystem, shaping intuitive
                experiences for students, educators, and
                administrators.
              </p>
              <p>
                My role focuses on solving complex educational
                problems through user research, scalable design
                systems, and data-informed decisions, ensuring
                consistency across web and mobile platforms.
              </p>
              <p>
                I collaborate closely with product managers,
                developers, and stakeholders to transform ideas
                into high-impact, usable, and accessible digital
                products.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                {
                  label: "Design Systems",
                  value: "Scalable system built from scratch",
                },
                {
                  label: "User Impact",
                  value: "10K+ monthly active learners",
                },
                {
                  label: "Platforms",
                  value: "Web apps & mobile-first experiences",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="p-4 rounded-xl bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border hover:border-violet-200 dark:hover:border-violet-800 transition-colors duration-300"
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400 to-blue-500 rounded-full opacity-10 blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}