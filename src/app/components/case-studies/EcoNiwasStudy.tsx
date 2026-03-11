import { Button } from "../ui/button";
import { Header } from "../Header";
import { SocialLinks } from "../SocialLinks";
import { FreelanceAvailability } from "../FreelanceAvailability";
import { ExperienceLearning } from "../ExperienceLearning";
import { Footer } from "../Footer";
import { Link } from "react-router";
import { ArrowLeft, Target, Lightbulb, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function EcoNiwasStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/">
            <Button
              variant="ghost"
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50/50 to-background dark:from-green-950/20 dark:to-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              Sustainability & Compliance Platform
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">ECO-NIWAS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Simplifying complex sustainability and compliance information through intuitive design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard label="My Role" value="Lead Product Designer" />
          <InfoCard label="Platform" value="Web & Mobile" />
          <InfoCard label="Timeline" value="6 months" />
          <InfoCard label="Team" value="Cross-functional (8 members)" />
        </div>
      </Section>

      {/* Problem Statement */}
      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Target}>Problem Statement</SectionTitle>
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Building owners and developers struggled to understand and comply with India's ECO-NIWAS (Energy Conservation Building Code) 
            requirements. The existing documentation was fragmented, technical, and inaccessible to non-experts.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">Why This Mattered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Without proper compliance, buildings consumed 30-40% more energy than necessary, leading to higher costs, 
              environmental damage, and potential legal issues. There was no centralized platform to guide users through 
              the compliance process step-by-step.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Issues */}
      <Section>
        <SectionTitle icon={Lightbulb}>Key Issues & Challenges</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Complex Regulations"
            description="Technical jargon made compliance documentation incomprehensible to building owners without engineering backgrounds"
          />
          <IssueCard
            title="Fragmented Information"
            description="Users had to navigate multiple PDFs, websites, and government portals to piece together requirements"
          />
          <IssueCard
            title="No Guidance System"
            description="Lack of step-by-step guidance led to errors, delays, and costly compliance failures"
          />
        </div>
      </Section>

      {/* Target Users */}
      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Users}>Target Users</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <UserPersona
            type="Primary"
            title="Building Owners & Developers"
            description="Need to ensure their projects meet compliance standards without hiring expensive consultants"
            goals={["Quick compliance checks", "Clear documentation", "Cost savings"]}
          />
          <UserPersona
            type="Secondary"
            title="Architects & Engineers"
            description="Require detailed technical specifications and validation tools for their designs"
            goals={["Technical accuracy", "Faster approvals", "Client confidence"]}
          />
        </div>
      </Section>

      {/* Goals & Constraints */}
      <Section>
        <SectionTitle>Goals & Constraints</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Goals</h3>
            <ul className="space-y-3">
              <GoalItem text="Reduce compliance time by 60%" />
              <GoalItem text="Make regulations accessible to non-technical users" />
              <GoalItem text="Increase compliance adoption rate" />
              <GoalItem text="Provide real-time validation and feedback" />
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Constraints</h3>
            <ul className="space-y-3">
              <GoalItem text="Strict government regulations and approval processes" />
              <GoalItem text="Multilingual support requirement (Hindi + English)" />
              <GoalItem text="Limited technical literacy among target users" />
              <GoalItem text="6-month launch deadline" />
            </ul>
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>Research & UX Process</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <ResearchCard
            title="User Interviews"
            description="Conducted 15 interviews with building owners, architects, and government officials to understand pain points"
          />
          <ResearchCard
            title="Competitive Analysis"
            description="Analyzed 8 compliance platforms globally to identify best practices and gaps"
          />
          <ResearchCard
            title="Stakeholder Workshops"
            description="3 workshops with government bodies to ensure regulatory accuracy and approval alignment"
          />
          <ResearchCard
            title="Usability Testing"
            description="2 rounds of testing with 12 participants to validate flows and information architecture"
          />
        </div>
      </Section>

      {/* Research Insights */}
      <Section>
        <SectionTitle>Research Insights & UX Decisions</SectionTitle>
        <div className="space-y-6">
          <InsightCard
            insight="Users felt overwhelmed by technical terminology"
            decision="Created a simplified glossary with visual examples and implemented progressive disclosure for advanced details"
          />
          <InsightCard
            insight="80% of users abandoned the process mid-way due to unclear next steps"
            decision="Designed a step-by-step wizard with clear progress indicators and save-for-later functionality"
          />
          <InsightCard
            insight="Users wanted validation before submitting documents"
            decision="Built real-time validation with instant feedback and error prevention rather than error correction"
          />
        </div>
      </Section>

      {/* Wireframes */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>User Flows, Wireframes & Sketches</SectionTitle>
        <div className="space-y-6">
          <p className="text-muted-foreground max-w-3xl">
            Started with low-fidelity wireframes to map out the compliance journey, focusing on reducing cognitive load 
            and providing clear pathways for different user types.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <WireframeCard
              title="Information Architecture"
              description="Restructured content into 4 main sections: Learn, Check, Apply, Track"
            />
            <WireframeCard
              title="Compliance Wizard Flow"
              description="Designed 5-step guided process with contextual help at each stage"
            />
          </div>
        </div>
      </Section>

      {/* Usability Testing */}
      <Section>
        <SectionTitle>Usability Testing & Iterations</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-4">Testing Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conducted moderated remote testing with 12 participants representing both primary user groups. 
              Tasks included completing a compliance check, uploading documents, and understanding feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <IterationCard
              feedback="Confusion about document format requirements"
              improvement="Added inline examples and format templates with one-click downloads"
            />
            <IterationCard
              feedback="Users didn't notice the help tooltips"
              improvement="Redesigned help system with prominent contextual cards and video tutorials"
            />
          </div>
        </div>
      </Section>

      {/* Final Screens */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>High-Fidelity Final Screens</SectionTitle>
        <div className="space-y-8">
          <div className="relative">
            {/* Main Image with Brush Effect */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center border border-border relative overflow-hidden group">
              <p className="text-muted-foreground relative z-10">Dashboard Overview Screen</p>
              
              {/* Animated Brush Strokes Overlay */}
              <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M 0,50 Q 25,30 50,50 T 100,50"
                    stroke="url(#brushGradient)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0,30 Q 30,50 60,30 T 100,30"
                    stroke="url(#brushGradient)"
                    strokeWidth="0.3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Floating Particles Effect */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-green-400/40"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400/40"
                animate={{
                  y: [0, -15, 0],
                  x: [0, -8, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-green-300/30"
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              />
            </div>
            
            {/* Animated Pencil Sketching Below */}
            <div className="relative h-16 mt-4 overflow-hidden">
              <motion.div
                className="absolute left-0 flex items-center gap-2"
                animate={{
                  x: ["0%", "90%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Pencil SVG */}
                <motion.svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-violet-600 dark:text-violet-400"
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                
                {/* Sketch Line Trail */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-violet-600 to-transparent rounded-full"
                  style={{ width: "100px" }}
                  animate={{
                    opacity: [0.8, 0.3, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              {/* Sketch Text */}
              <motion.p
                className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-muted-foreground italic"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Sketching design...
              </motion.p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center border border-border">
              <p className="text-sm text-muted-foreground">Compliance Wizard</p>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 flex items-center justify-center border border-border">
              <p className="text-sm text-muted-foreground">Document Upload</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcome & Impact */}
      <Section>
        <SectionTitle icon={TrendingUp}>Outcome & Impact</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <MetricCard metric="65%" label="Reduction in compliance time" />
          <MetricCard metric="4.6/5" label="User satisfaction score" />
          <MetricCard metric="3,000+" label="Active users in first quarter" />
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border max-w-3xl">
          <h3 className="text-lg font-medium mb-3">Qualitative Improvements</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Government officials reported 40% fewer incomplete submissions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Users praised the simplified language and step-by-step guidance</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Platform became reference case for other government digitization projects</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Key Learnings */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>Key Learnings & Reflection</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <LearningCard
            title="Simplicity Over Completeness"
            description="Initially tried to include every detail upfront, but learned that progressive disclosure helped users feel less overwhelmed and actually increased completion rates."
          />
          <LearningCard
            title="Stakeholder Alignment is Critical"
            description="Early and continuous involvement of government stakeholders prevented major redesigns and ensured regulatory compliance from the start."
          />
          <LearningCard
            title="Design for Real Constraints"
            description="Many users had limited internet connectivity. This taught me to optimize for performance and provide offline-capable features where possible."
          />
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => {}}
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <SocialLinks />

      {/* Freelance Availability */}
      <FreelanceAvailability />

      {/* Experience Learning */}
      <ExperienceLearning />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Helper Components
function Section({ children, bgColor = "bg-background" }: { children: React.ReactNode; bgColor?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`py-16 ${bgColor}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="mb-12">
      {Icon && (
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl">{children}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-4" />
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg transition-all duration-300">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function IssueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">⚠️</span>
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function UserPersona({ type, title, description, goals }: { type: string; title: string; description: string; goals: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <div className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium mb-4">
        {type} User
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div>
        <p className="text-sm font-medium mb-2">Goals:</p>
        <ul className="space-y-1">
          {goals.map((goal) => (
            <li key={goal} className="text-sm text-muted-foreground flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2" />
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GoalItem({ text }: { text: string }) {
  return (
    <li className="flex items-start text-muted-foreground">
      <CheckCircle className="h-5 w-5 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function ResearchCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function InsightCard({ insight, decision }: { insight: string; decision: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-violet-200 dark:hover:border-violet-800 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2">💡 Insight</p>
          <p className="text-muted-foreground">{insight}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">✅ Decision</p>
          <p className="text-muted-foreground">{decision}</p>
        </div>
      </div>
    </div>
  );
}

function WireframeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center mb-4 border border-border">
        <p className="text-xs text-muted-foreground">Wireframe</p>
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function IterationCard({ feedback, improvement }: { feedback: string; improvement: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">📝 Feedback</p>
      <p className="text-sm text-muted-foreground mb-4">{feedback}</p>
      <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">✨ Improvement</p>
      <p className="text-sm text-muted-foreground">{improvement}</p>
    </div>
  );
}

function MetricCard({ metric, label }: { metric: string; label: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-950/30 dark:to-blue-950/30 border border-border text-center">
      <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">
        {metric}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function LearningCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}