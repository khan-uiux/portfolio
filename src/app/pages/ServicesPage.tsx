import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { Palette, Layout, Code, Users, Target, Zap, Heart, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { PageHeader } from "@/app/components/PageHeader";

export function ServicesPage() {
  const services = [
    {
      icon: Layout,
      title: "Graphic Design",
      description: "Creating visually compelling graphics that communicate brand identity and enhance digital presence across different platforms.",
      features: ["Social Media Creatives", "Marketing Banners", "Web Graphics", "Visual Content Design"],
      gradient: "from-violet-500 via-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Designing modern, responsive websites that deliver seamless user experiences and visually engaging interfaces across all devices.",
      features: ["Component Libraries", "Design Tokens", "Documentation", "Governance"],
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Prototyping",
      description: "Building interactive prototypes to visualize user flows, validate ideas, and improve the overall user experience before development.",
      features: ["Wireframing", "Interactive Prototypes", "User Flow Design", "UX Testing"],
      gradient: "from-cyan-500 via-teal-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: Target },
    { number: "10+", label: "Happy Clients", icon: Heart },
    { number: "3.6+", label: "Years Experience", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-20">
            <PageHeader 
              title="What I Offer" 
              subtitle="Comprehensive design services to help your business create exceptional digital experiences that users love."
            />
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300">
                  <stat.icon className="h-8 w-8 mb-4 text-violet-600 dark:text-violet-400" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient background glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
                
                <div className="relative h-full p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Animated icon */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground group/item"
                      >
                        <CheckCircle className="h-4 w-4 text-violet-600 dark:text-violet-400 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-6 pt-6 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-sm font-medium text-violet-600 dark:text-violet-400 flex items-center gap-2">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}