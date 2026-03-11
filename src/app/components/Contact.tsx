import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, PenTool } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useInView } from "motion/react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleHireMe = () => {
    window.open('https://wa.me/918053230589', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918053230589', '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black p-12 md:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          {/* Connection Icon - Top Right */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <motion.div 
              className="relative p-3 md:p-4 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20"
              animate={{
                rotate: [0, -10, 10, -5, 5, 0],
                y: [0, -8, 0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <PenTool className="h-6 w-6 md:h-8 md:w-8 text-violet-300" />
              
              {/* Sparkle Effects */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-300 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.8,
                  repeatDelay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-2 w-1 h-1 bg-violet-300 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.2,
                  repeatDelay: 0.5,
                }}
              />
              
              {/* Yellow Stars */}
              <motion.div
                className="absolute -top-2 -left-2 text-yellow-300 text-sm"
                animate={{
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -top-3 right-2 text-yellow-300 text-xs"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: 0.6,
                  repeatDelay: 0.4,
                }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute bottom-0 -right-3 text-yellow-300 text-sm"
                animate={{
                  scale: [0, 1.3, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: 1,
                  repeatDelay: 0.6,
                }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-2 left-1 text-yellow-400 text-xs"
                animate={{
                  scale: [0, 1.1, 0],
                  opacity: [0, 1, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: 1.4,
                  repeatDelay: 0.5,
                }}
              >
                ⭐
              </motion.div>
              
              {/* Drawing Line Effect */}
              <motion.svg
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 50 50"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.path
                  d="M 5 45 Q 15 25, 25 35 T 45 15"
                  stroke="rgba(167, 139, 250, 0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative text-center flex flex-col items-center">
            {/* Profile Image with WhatsApp Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1740128041074-7fc1593e7851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTY4ODg4NzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rashid Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* WhatsApp Icon Badge - Clickable */}
              <button
                onClick={handleWhatsAppClick}
                className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-800 transition-all duration-300 hover:scale-110 cursor-pointer group"
                aria-label="Chat on WhatsApp"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Hello 👋 i'm available for<br />
              <span className="text-white">freelance work</span>
            </motion.h2>

            {/* WhatsApp Number (Hidden but accessible) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm mb-8"
            >
              WhatsApp: +91 7838957053
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}