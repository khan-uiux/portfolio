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

export function GyfthintStudy() {
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

      <section className="py-16 bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/20 dark:to-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-6">
              Consumer Product
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">Gyfthint</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Revolutionizing gift discovery through personalized recommendations and social engagement
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionTitle>Project Overview</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard label="My Role" value="Product Designer" />
          <InfoCard label="Platform" value="iOS & Android" />
          <InfoCard label="Timeline" value="4 months" />
          <InfoCard label="Team" value="Small team (5 members)" />
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Target}>Problem Statement</SectionTitle>
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Finding the perfect gift is stressful and time-consuming. People spend hours browsing generic e-commerce sites, 
            second-guessing their choices, and often settling for impersonal gifts that don't truly resonate with recipients.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">Why This Mattered</h3>
            <p className="text-muted-foreground leading-relaxed">
              The $500B+ global gifting industry was dominated by transactional e-commerce experiences. There was no platform 
              focused on the emotional aspect of gift-giving or helping people discover meaningful, personalized gifts efficiently.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle icon={Lightbulb}>Key Issues & Challenges</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <IssueCard
            title="Decision Paralysis"
            description="Too many options without personalization led to analysis paralysis and gift-buying anxiety"
          />
          <IssueCard
            title="Lack of Confidence"
            description="Users weren't sure if their chosen gift would be appreciated, leading to last-minute purchases"
          />
          <IssueCard
            title="No Social Context"
            description="Existing platforms didn't leverage social connections to provide gift recommendations"
          />
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle icon={Users}>Target Users</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <UserPersona
            type="Primary"
            title="Thoughtful Gift Givers"
            description="People who care about giving meaningful gifts but struggle with finding the right options"
            goals={["Personalized suggestions", "Confidence in choices", "Time savings"]}
          />
          <UserPersona
            type="Secondary"
            title="Last-Minute Shoppers"
            description="Users who need quick, reliable gift ideas for upcoming occasions"
            goals={["Fast discovery", "Curated options", "Delivery reliability"]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Goals & Constraints</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Goals</h3>
            <ul className="space-y-3">
              <GoalItem text="Make gift discovery delightful and stress-free" />
              <GoalItem text="Increase user confidence in gift choices" />
              <GoalItem text="Drive 40% user retention month-over-month" />
              <GoalItem text="Build social features for recommendations" />
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Constraints</h3>
            <ul className="space-y-3">
              <GoalItem text="Limited initial product inventory" />
              <GoalItem text="Privacy concerns around social features" />
              <GoalItem text="Competing with established e-commerce giants" />
              <GoalItem text="Tight launch timeline for holiday season" />
            </ul>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle>Research & UX Process</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <ResearchCard
            title="User Interviews"
            description="25 interviews exploring gift-giving behaviors, pain points, and decision-making processes"
          />
          <ResearchCard
            title="Survey Research"
            description="200+ responses analyzing gift-buying frequency, budget ranges, and preferred discovery methods"
          />
          <ResearchCard
            title="Competitive Analysis"
            description="Analyzed 10 gifting and e-commerce platforms to identify gaps and opportunities"
          />
          <ResearchCard
            title="Usability Testing"
            description="3 rounds of testing with 18 participants to refine recommendation algorithm and UI"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Research Insights & UX Decisions</SectionTitle>
        <div className="space-y-6">
          <InsightCard
            insight="Users wanted gift ideas from friends who know the recipient better"
            decision="Built 'Hint Circle' feature allowing users to invite friends to suggest gifts for shared connections"
          />
          <InsightCard
            insight="85% of users abandoned carts due to uncertainty about recipient preferences"
            decision="Implemented confidence scoring system with recipient persona matching and visual preference indicators"
          />
          <InsightCard
            insight="Users felt overwhelmed by too many choices in one view"
            decision="Designed swipe-based discovery (Tinder-like) showing one curated option at a time with explanations"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle icon={TrendingUp}>Outcome & Impact</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <MetricCard metric="62%" label="Month-over-month retention" />
          <MetricCard metric="4.8/5" label="App store rating" />
          <MetricCard metric="35min" label="Average session time" />
        </div>
        <div className="p-6 rounded-2xl bg-card border border-border max-w-3xl">
          <h3 className="text-lg font-medium mb-3">Qualitative Improvements</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Users reported feeling more confident and less stressed about gift-giving</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Social features drove 40% of gift purchases through friend recommendations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Featured in App Store as 'App of the Day' during holiday season</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section bgColor="bg-muted/30">
        <SectionTitle>Key Learnings & Reflection</SectionTitle>
        <div className="max-w-4xl space-y-6">
          <LearningCard
            title="Emotion Over Transaction"
            description="Learned that focusing on the emotional journey of gift-giving—not just the transaction—created deeper user engagement. Features like 'Why this gift' explanations resonated more than discounts."
          />
          <LearningCard
            title="Social Proof is Powerful"
            description="Friend recommendations drove significantly higher conversion than algorithm-only suggestions. Building trust through social connections was more effective than perfect personalization."
          />
          <LearningCard
            title="Simplicity Wins"
            description="Initial designs were feature-heavy. Stripping down to core features (swipe discovery + hint circle) improved both usability and user satisfaction."
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

// Reusable components
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