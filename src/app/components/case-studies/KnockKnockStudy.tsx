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

export function KnockKnockStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-cyan-50/50 to-background dark:from-cyan-950/20 dark:to-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-6">
              Communication & Engagement Platform
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Knock Knock</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Reimagining real-time communication through context-aware notifications and smart engagement
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard label="My Role" value="Lead UX/UI Designer" />
          <InfoCard label="Platform" value="Web, iOS & Android" />
          <InfoCard label="Timeline" value="5 months" />
          <InfoCard label="Team" value="Cross-functional (6 members)" />
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Target}>Problem Statement</SectionTitle>
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Users were overwhelmed by notification fatigue across multiple apps and platforms. Important messages got lost in noise, 
            while unnecessary alerts disrupted focus and productivity. There was no smart system to prioritize and contextualize 
            notifications based on user behavior and preferences.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">Why This Mattered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Studies showed users received 60+ notifications daily, with 90% being irrelevant or poorly timed. This led to 
              notification blindness, missed important communications, and decreased user engagement across all platforms.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle icon={Lightbulb}>Key Issues & Challenges</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Notification Overload"
            description="Users felt bombarded with constant alerts, leading to disabling notifications entirely"
          />
          <IssueCard
            title="Lack of Context"
            description="Notifications lacked relevant context, forcing users to open apps unnecessarily to understand importance"
          />
          <IssueCard
            title="Poor Timing"
            description="Alerts arrived at inconvenient times without consideration for user activity or preferences"
          />
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Users}>Target Users</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <UserPersona
            type="Primary"
            title="Busy Professionals"
            description="People juggling multiple communication channels who need smart filtering and prioritization"
            goals={["Reduce notification noise", "Never miss important messages", "Maintain focus time"]}
          />
          <UserPersona
            type="Secondary"
            title="Social Users"
            description="Active social media users wanting better control over when and how they receive updates"
            goals={["Customizable preferences", "Smart grouping", "Context awareness"]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Goals & Constraints</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Goals</h3>
            <ul className="space-y-3">
              <GoalItem text="Reduce notification volume by 70% through smart filtering" />
              <GoalItem text="Increase engagement with important notifications by 50%" />
              <GoalItem text="Provide context-aware delivery timing" />
              <GoalItem text="Enable granular user control and preferences" />
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Constraints</h3>
            <ul className="space-y-3">
              <GoalItem text="Cross-platform consistency challenges (iOS, Android, Web)" />
              <GoalItem text="Privacy concerns around behavior tracking" />
              <GoalItem text="Battery and performance optimization requirements" />
              <GoalItem text="Integration with existing notification systems" />
            </ul>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle>Research & UX Process</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <ResearchCard
            title="Behavioral Analysis"
            description="Analyzed notification patterns of 1,000+ users to identify trends, pain points, and engagement patterns"
          />
          <ResearchCard
            title="User Diary Studies"
            description="8 participants tracked their notification experiences over 2 weeks, documenting frustrations and needs"
          />
          <ResearchCard
            title="A/B Testing"
            description="Tested 5 different notification grouping and prioritization algorithms with 500 beta users"
          />
          <ResearchCard
            title="Accessibility Review"
            description="Ensured notification system worked for users with different abilities and assistive technologies"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Research Insights & UX Decisions</SectionTitle>
        <div className="space-y-6">
          <InsightCard
            insight="Users wanted control but found settings pages too complex and time-consuming"
            decision="Designed smart defaults with quick in-notification controls allowing adjustments without entering settings"
          />
          <InsightCard
            insight="Morning and evening commutes were prime times for catching up, but notifications arrived throughout day"
            decision="Implemented 'Digest Mode' bundling non-urgent notifications for user-defined 'catch-up' times"
          />
          <InsightCard
            insight="Users needed to quickly assess importance without opening the app"
            decision="Created contextual preview cards showing sender relationship, message preview, and smart action buttons"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle icon={TrendingUp}>Outcome & Impact</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <MetricCard metric="73%" label="Reduction in notification volume" />
          <MetricCard metric="85%" label="User satisfaction increase" />
          <MetricCard metric="2.5x" label="Engagement with notifications" />
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border max-w-3xl">
          <h3 className="text-lg font-medium mb-3">Qualitative Improvements</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Users reported feeling less stressed and more in control of their digital lives</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>95% of users kept notifications enabled compared to 40% industry average</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Featured in TechCrunch as "The notification system we've been waiting for"</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle>Key Learnings & Reflection</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <LearningCard
            title="Smart Defaults Matter"
            description="Learned that most users won't customize settings. Investing in intelligent defaults based on behavior patterns created better experiences than extensive customization options."
          />
          <LearningCard
            title="Testing Real Behavior is Critical"
            description="Lab testing didn't reveal notification fatigue. Only real-world diary studies and long-term behavioral tracking showed the true pain points and usage patterns."
          />
          <LearningCard
            title="Micro-interactions Drive Adoption"
            description="Small touches like swipe gestures for quick actions and contextual suggestions made users feel understood and increased feature adoption significantly."
          />
        </div>
      </Section>

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

      <SocialLinks />
      <FreelanceAvailability />
      <ExperienceLearning />
      <Footer />
    </div>
  );
}

// Reusable components (same pattern)
function Section({ children, bgColor = "bg-background" }: { children: React.ReactNode; bgColor?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={`py-16 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </motion.section>
  );
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="mb-12">
      {Icon && <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg mb-4"><Icon className="h-6 w-6 text-white" /></div>}
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
      <div className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium mb-4">{type} User</div>
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
      <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">{metric}</p>
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