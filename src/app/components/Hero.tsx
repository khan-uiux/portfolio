import { motion } from "motion/react";
import { Button } from "./ui/button";
import heroImage from "../../assets/hero.png";
import myResume from "../../assets/resume.pdf"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-background to-blue-50/50 dark:from-violet-950/20 dark:via-background dark:to-blue-950/20" />
      
      {/* Subtle mesh pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(99 102 241 / 0.05) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold font-[Avenir_Next_LT_Pro]"
            >
              Turning complex ideas into{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
                simple, human-centered
              </span>{" "}
              <span className="whitespace-nowrap">digital experiences.</span>
            </motion.h1>

            {/* Elevator pitch */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Designing scalable products for education and content-driven platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col md:flex-row md:flex-wrap gap-4 pt-4"
            >
              
              <div className="flex gap-4 w-full md:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 md:flex-none h-14 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300"
                >
                  <a href={myResume} target="_blank">Download Resume</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative blob background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-blue-500 rounded-[3rem] rotate-6 scale-105 opacity-20 blur-2xl" />
              
              {/* Image card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background dark:border-muted">
                <img
                  src={heroImage}
                  alt="Irfan Khan"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Glassmorphic overlay card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-16 left-6 right-6 bg-background/80 dark:bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border shadow-lg"
                >
                  <p className="text-sm font-medium">UI/UX & Product Designer</p>
                  <p className="text-xs text-muted-foreground mt-1">Designing products at scale</p>
                </motion.div>
              </div>

              {/* Animated Pencil Drawing App Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
                className="absolute -bottom-12 -right-12 w-48 h-36 z-20"
              >
                {/* Pencil Icon */}
                <motion.div
                  initial={{ x: -100, y: -100, rotate: -45 }}
                  animate={{ x: 0, y: 0, rotate: 0 }}
                  transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 z-30"
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" 
                          stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#a855f7" fillOpacity="0.2"/>
                  </svg>
                </motion.div>

                {/* Sketched App Interface */}
                <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 250 200">
                  {/* App outline - drawn effect */}
                  <motion.rect
                    x="10" y="10" width="230" height="180" rx="12"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    fill="rgba(255, 255, 255, 0.95)"
                    strokeDasharray="840"
                    initial={{ strokeDashoffset: 840 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ delay: 2.2, duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* Header bar */}
                  <motion.rect
                    x="20" y="20" width="210" height="30" rx="6"
                    fill="#f3f4f6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 3.2, duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                  
                  {/* Menu dots */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx={200 + i * 12} cy="35" r="3"
                      fill="#8b5cf6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3.5 + i * 0.1, duration: 0.3 }}
                    />
                  ))}
                  
                  {/* Content lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.rect
                      key={i}
                      x="30" y={65 + i * 25} width={180 - i * 20} height="8" rx="4"
                      fill="#e5e7eb"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 3.8 + i * 0.2, duration: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  ))}
                  
                  {/* Button */}
                  <motion.rect
                    x="30" y="165" width="80" height="20" rx="10"
                    fill="url(#buttonGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 4.5, duration: 0.4, ease: "backOut" }}
                  />
                  
                  <defs>
                    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Sparkles around sketch */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-violet-400 rounded-full"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${-10 + i * 5}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      delay: 4.5 + i * 0.3,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-60 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}