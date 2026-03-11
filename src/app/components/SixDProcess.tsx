import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Lightbulb, Palette, Rocket, Code, CheckCircle, ArrowRight } from "lucide-react";

export function SixDProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const processCards = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding user needs and business goals through research to create effective and user-centered design solutions.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Prototyping",
      description: "Creating wireframes and interactive prototypes to visualize product ideas and validate user experience before development.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Code",
      description: "Transforming design concepts into responsive and high-quality frontend interfaces using modern web technologies.",
      color: "from-indigo-500 to-violet-600"
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Ensuring the final product is functional, user-friendly, and optimized through continuous testing and improvement.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-black text-white relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">The infamous UX process</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A structured approach combining discovery, strategic thinking, creative ideation, precise execution, technical development, and successful delivery to solve complex problems and create meaningful digital experiences.
          </p>
        </motion.div>

        {/* Process Cards - Modern Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
              className="group relative"
            >
              {/* Modern Card Design */}
              <div className="relative h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl mb-3 group-hover:text-white transition-colors duration-300">{card.title}</h3>
                <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Bottom line accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-none rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}