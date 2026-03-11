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

export function HaryanaCsrStudy() {
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
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20 dark:to-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
              Government & Public Sector
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Haryana State CSR Trust</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Improving accessibility, transparency, and trust for government CSR initiatives through user-centered design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard label="My Role" value="Senior UX Designer" />
          <InfoCard label="Platform" value="Web & Mobile" />
          <InfoCard label="Timeline" value="8 months" />
          <InfoCard label="Team" value="Cross-functional (10 members)" />
        </div>
      </Section>

      {/* Problem Statement */}
      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Target}>Problem Statement</SectionTitle>
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            The Haryana State CSR Trust needed a digital platform to manage Corporate Social Responsibility (CSR) projects, 
            but existing systems lacked transparency, were difficult to navigate, and failed to build trust with both companies 
            and beneficiaries.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">Why This Mattered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Without a transparent and accessible system, CSR funds worth crores were underutilized. Companies hesitated to 
              contribute due to lack of visibility, and beneficiaries couldn't track project status. This created a trust 
              deficit that hindered social development initiatives.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Issues */}
      <Section>
        <SectionTitle icon={Lightbulb}>Key Issues & Challenges</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Lack of Transparency"
            description="No visibility into how CSR funds were allocated, utilized, or what impact they created"
          />
          <IssueCard
            title="Complex Processes"
            description="Application and approval workflows were bureaucratic, confusing, and time-consuming"
          />
          <IssueCard
            title="Trust Deficit"
            description="Companies and citizens had low confidence in the system due to lack of accountability"
          />
        </div>
      </Section>

      {/* Target Users */}
      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Users}>Target Users</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <UserPersona
            type="Primary"
            title="Corporate CSR Teams"
            description="Companies required to allocate CSR funds seeking trustworthy and impactful projects"
            goals={["Transparent fund utilization", "Impact reporting", "Compliance assurance"]}
          />
          <UserPersona
            type="Secondary"
            title="Government Officials & NGOs"
            description="Organizations managing projects and requiring streamlined approval and tracking systems"
            goals={["Efficient workflows", "Real-time tracking", "Stakeholder communication"]}
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
              <GoalItem text="Build trust through complete transparency" />
              <GoalItem text="Simplify application and approval processes" />
              <GoalItem text="Enable real-time project tracking" />
              <GoalItem text="Ensure accessibility for diverse users" />
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Constraints</h3>
            <ul className="space-y-3">
              <GoalItem text="Strict government data security requirements" />
              <GoalItem text="Multiple stakeholder approval processes" />
              <GoalItem text="Varied digital literacy levels" />
              <GoalItem text="Limited budget for advanced features" />
            </ul>
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>Research & UX Process</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <ResearchCard
            title="Stakeholder Interviews"
            description="20+ interviews with government officials, CSR heads, and NGO representatives to understand ecosystem"
          />
          <ResearchCard
            title="Contextual Inquiry"
            description="Shadowed officials to observe existing workflows and identify pain points in current processes"
          />
          <ResearchCard
            title="Competitive Analysis"
            description="Studied 6 government platforms and international CSR systems to identify best practices"
          />
          <ResearchCard
            title="Accessibility Audits"
            description="Ensured WCAG 2.1 AA compliance for inclusive design across all user groups"
          />
        </div>
      </Section>

      {/* Research Insights */}
      <Section>
        <SectionTitle>Research Insights & UX Decisions</SectionTitle>
        <div className="space-y-6">
          <InsightCard
            insight="Corporate users needed proof of impact to justify continued CSR investment"
            decision="Designed comprehensive impact dashboards with real-time metrics, photos, and beneficiary testimonials"
          />
          <InsightCard
            insight="Officials spent 60% of time on status update requests from multiple stakeholders"
            decision="Created automated notification system with role-based dashboards showing relevant information"
          />
          <InsightCard
            insight="Low digital literacy users struggled with complex forms"
            decision="Implemented progressive form filling with smart defaults, inline help, and save-as-draft functionality"
          />
        </div>
      </Section>

      {/* Outcome & Impact */}
      <Section>
        <SectionTitle icon={TrendingUp}>Outcome & Impact</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <MetricCard metric="3.2x" label="Increase in CSR fund allocation" />
          <MetricCard metric="70%" label="Reduction in approval time" />
          <MetricCard metric="500+" label="Projects tracked in first year" />
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border max-w-3xl">
          <h3 className="text-lg font-medium mb-3">Qualitative Improvements</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Platform became model for other state CSR initiatives across India</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Corporate partners reported significantly higher confidence in fund utilization</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Government officials praised the reduction in administrative burden</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Key Learnings */}
      <Section bgColor="bg-muted/30">
        <SectionTitle>Key Learnings & Reflection</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <LearningCard
            title="Trust Through Transparency"
            description="Learned that showing the complete journey—from fund allocation to beneficiary impact—was more important than any single feature. Transparency became the core design principle."
          />
          <LearningCard
            title="Designing for Multiple Stakeholders"
            description="Balancing needs of government, corporates, and beneficiaries required careful prioritization and role-based experiences rather than one-size-fits-all approach."
          />
          <LearningCard
            title="Accessibility Isn't Optional"
            description="Designing for low digital literacy users early in the process led to a simpler, better product for everyone—not just an accommodation."
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

// Reusable Components (same as EcoNiwas)
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