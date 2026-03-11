import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Palette,
  Lightbulb,
  Users,
  Zap,
  Target,
  Sparkles,
  Layers,
  Briefcase,
  BookOpen,
  Rocket,
  Brain,
  Heart,
  CheckCircle,
  TrendingUp,
  Award,
  PenTool,
  Code,
  Layout,
  Phone,
  Download
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router";
import sphinxLogo from "../../assets/sphinx-logo.svg";
import profilePhoto from "../../assets/37d73ded32c6eed6554aa6b4f1a13fa704d5ec08.png";

export function DesignerProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Layers,
      label: "Design Systems",
      value: "Scalable system built from scratch",
      gradient: "from-violet-500 to-purple-600",
      border: "border-violet-200 dark:border-violet-900/50"
    },
    {
      icon: Users,
      label: "User Impact",
      value: "10K+ active learners across live products",
      gradient: "from-blue-500 to-cyan-600",
      border: "border-blue-200 dark:border-blue-900/50"
    },
    {
      icon: TrendingUp,
      label: "Platforms",
      value: "Web & mobile products",
      gradient: "from-orange-500 to-pink-600",
      border: "border-pink-200 dark:border-pink-900/50"
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-pink-500/10 border border-violet-200 dark:border-violet-800 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Designer Profile
            </span>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 space-y-4">
              {/* Profile Card with Centered Image - Minimalist */}
              <div className="relative group">
                {/* Removed outer glow shadow */}
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-violet-200 dark:border-violet-900/50">
                  {/* Connect Button removed for minimalist design */}

                  {/* Centered Profile Image */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-5">
                      {/* Removed profile photo glow */}
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50">
                        <ImageWithFallback
                          src={profilePhoto}
                          alt="Rashid Khan - Senior UI/UX Designer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Animated Signature - Smaller */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute -bottom-2 -right-2"
                      >
                        <svg
                          viewBox="0 0 120 60"
                          className="w-12 h-6 drop-shadow-xl"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.path
                            d="M10 35 Q 25 15, 40 35 T 70 35 Q 85 25, 100 35"
                            stroke="#FF6B35"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                          <motion.path
                            d="M70 35 Q 75 40, 80 38"
                            stroke="#FF6B35"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                          />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Name and Designation */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Irfan Khan
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
                        UI/UX Designer
                      </p>
                    </motion.div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent mt-6 mb-2.5 opacity-50"></div>

                    {/* Quick Info Cards - Moved from bottom */}
                    <div className="grid grid-cols-2 gap-3 w-full">

                      {/* Phone Card - SECONDARY */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="group"
                      >
                        <a
                          href="tel:+918053230589"
                          className="block relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-xl p-2 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex items-start gap-2">
                            {/* Left Side - Icon */}
                            <div className="flex-shrink-0 p-1.5 rounded-lg bg-gray-200 dark:bg-gray-700">
                              <Phone className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" />
                            </div>
                            
                            {/* Right Side - Heading + Text */}
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase mb-0.5 text-left">Call me</p>
                              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate text-left">
                                +91 7838957053
                              </p>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 space-y-5"
          >
            {/* About Me Section */}
            <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-violet-200 dark:border-violet-900/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome!
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Hi, I'm <span className="font-bold text-gray-900 dark:text-white">Irfan Khan</span>.
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-3">
                  <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">Current Role : UI UX Designer at Sphinx Worldbiz</span>
                </div>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                Creative and detail-oriented UI/UX Designer & Frontend Developer with 4 years of experience in
                designing intuitive user interfaces and developing responsive websites. Skilled in Figma, Adobe
                Photoshop, HTML, CSS, JavaScript, Bootstrap, and responsive design, with a strong focus on
                usability, clean UI, and pixel-perfect implementation
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for blob animation */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}