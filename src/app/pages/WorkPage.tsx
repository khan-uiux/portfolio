import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/app/components/PageHeader";
import DemoImage from "../../assets/nocoursesavailable.svg"

export function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "Sphinx Worldbiz",
      category: "UI UX Designer",
      description: "The company focuses on delivering innovative web and software solutions to enhance business efficiency and user experience.",
      tags: ["Figma", "Photoshop", "HTML", "CSS", "SCSS", "Bootstrap", "javaScript"],
      color: "from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://www.sphinxworldbiz.com/"
    },
    {
      id: 2,
      title: "policyX.com",
      category: "UI/UX Designer",
      description: "PolicyX.com is a digital insurance comparison platform that enables users to compare and buy insurance policies easily through a user-friendly online interface.",
      tags: ["Photoshop", "HTML", "CSS", "Bootstrap", "JS"],
      color: "from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://policyx.com/"
    },
    {
      id: 3,
      title: "ITS Barbados Job Searching Plateform",
      category: "Product Designer",
      description: "Barbados is a job platform that helps connect job seekers with employers through an easy and efficient online hiring process.",
      tags: ["Figma", "Photoshop", "HTML", "CSS", "Bootstrap", "JS"],
      color: "from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://www.figma.com/proto/FV3cCPCnZbS4iZtM2wjq3g/ITS-Barbados?page-id=0%3A1&node-id=10-3373&viewport=1094%2C164%2C0.16&t=yQZv86KzepDC20ZH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A3373&show-proto-sidebar=1"
    },
    {
      id: 4,
      title: "HMEL Trading Partner Landing Page",
      category: "Design & Development",
      description: "HMEL Trading Partner is a partner service portal designed to manage business operations and service.",
      tags: ["Figma", "HTML", "CSS", "SCSS", "Bootstrap", "JS"],
      color: "from-pink-100 to-orange-100 dark:from-pink-950/30 dark:to-orange-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://www.figma.com/proto/8xLJGbclupxBQArfyU2hZB/HMEL-Landing-Page?page-id=0%3A1&node-id=1341-600&viewport=1083%2C523%2C0.12&t=aAz0CAytJNxTOgQ6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1341%3A600&show-proto-sidebar=1"
    },
    {
      id: 5,
      title: "HMEL Star Portal",
      category: "UI UX Designer",
      description: "HMEL Star Portal is a suggestion management system that allows users to submit ideas and track the complete process from submission to solution implementation.",
      tags: ["Figma", "HTML", "SCSS", "Bootstrap", "JS"],
      color: "from-gray-100 to-slate-100 dark:from-gray-950/30 dark:to-slate-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://www.figma.com/proto/xjCFUtD552cS8QOnwgAbrR/HMEL-Star-Portal?page-id=551%3A100&node-id=2179-7969&viewport=-404%2C2152%2C0.33&t=QetnvNvNhoVqIa0t-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2179%3A8738&show-proto-sidebar=1"
    },
    {
      id: 6,
      title: "Sorwe LMS (Learning Management System)",
      category: "Product Designer",
      description: "Sorwe LMS is a learning management system that allows users to access courses, training materials online.",
      tags: ["Figma", "HTML", "CSS", "Bootstrap"],
      color: "from-green-100 to-teal-100 dark:from-green-950/30 dark:to-teal-950/30",
      productImageProject: DemoImage,
      linkUrl: "https://www.figma.com/proto/Gux8ALDVRHjVptnsp7e9cv/LMS?page-id=0%3A1&node-id=116-838&viewport=-656%2C-1599%2C0.38&t=wRbprQSEnHpIT93K-1&scaling=min-zoom&content-scaling=fixed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <PageHeader 
            title="Success Stories" 
            subtitle="Transforming ideas into exceptional digital experiences through thoughtful design and strategic thinking."
          />
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden bg-card border border-border hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10">
                  {/* Image Placeholder */}
                  <div className={`relative h-80 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                    <div className="relative text-center p-8">
                      <img src={project.productImageProject} className="mb-4" />
                      <p className="text-sm text-muted-foreground">Image Coming Soon</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-orange-600 dark:text-orange-400 mb-2">{project.category}</p>
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <a href={project.linkUrl} target="_blank">
                        <button className="w-10 h-10 rounded-full bg-muted hover:bg-violet-100 dark:hover:bg-violet-950 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                          <ArrowUpRight className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </button>
                      </a>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Tool Used : 
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Section removed */}
        </div>
      </main>
      <Footer />
    </div>
  );
}