export interface StackItem {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface StackSection {
  id: string;
  title: string;
  description: string;
  items: StackItem[];
}

export const stackSections: StackSection[] = [
  {
    id: 'connected-brain',
    title: 'The Connected Brain',
    description:
      '30+ production tools operating as one interconnected intelligence system. Not separate apps. One nervous system. When VoxShop logs a defect, the Pricing Engine adjusts future estimates. When Takeoff measures a job, Drawing Intelligence already knows the specs. Every tool is an organ in a single brain — and the brain gets smarter with every job.',
    items: [
      {
        title: 'One Brain, Not Sixteen Tools',
        description:
          'Every tool shares context through a sacred data hierarchy: Job > Opportunity/Project > Scope > Work Order > Line Item > Cost Atom. The Pricing Engine knows what Timber tracks. DocIntake feeds Takeoff. The ERP orchestrates everything. Nothing operates in isolation.',
        details: [
          'Sacred Data Hierarchy connects every system to the same truth',
          'Pricing Engine pulls real lumber costs from Timber automatically',
          'DocIntake extracts specs that flow directly into Takeoff measurements',
          'Production Brain surfaces shop floor data to front office in real time',
          'Craft Brain knowledge is available at every workstation and in every estimate',
        ],
        icon: 'brain',
      },
      {
        title: 'The Data Flywheel',
        description:
          'Every job that runs through E.F. San Juan makes the entire system smarter. Pricing gets more accurate. Estimates get tighter. Quality patterns emerge. This compounds forever and can never be replicated by a competitor starting from zero.',
        details: [
          '200+ work orders per year, each generating 50+ connected data points across 19+ systems',
          '10,000+ connected data points per year feeding back into every tool',
          'After 5 years: 50,000+ data points no competitor will ever have',
          'Historical cost accuracy improves with every completed job',
          'Pattern recognition surfaces problems before they happen',
        ],
        icon: 'flywheel',
      },
      {
        title: 'Compound Intelligence',
        description:
          'The brain doesn\'t just store data — it thinks. Predictive cascading anticipates downstream impacts. Self-correcting estimates learn from actuals. Institutional knowledge gets used automatically, not lost when people retire. The system doesn\'t just run the business — it makes the business smarter every day.',
        details: [
          'Predictive cascading: a material change in one scope ripples pricing across the entire project',
          'Self-correcting estimates: actual vs. estimated costs automatically refine future pricing',
          'Institutional knowledge capture: 50 years of craft expertise encoded and accessible',
          'Autonomous pre-staging: production schedules informed by material lead times and shop capacity',
          'Closed-loop quality feedback: field issues traced back to production steps for root cause elimination',
        ],
        icon: 'compound',
      },
    ],
  },
  {
    id: 'production-stack',
    title: 'Production Floor to Front Office',
    description:
      'The full stack of tools, organized by where they operate. From the CNC machine to the front office, every layer of the business has purpose-built technology that talks to every other layer.',
    items: [
      {
        title: 'Shop Floor',
        description:
          'Tools built for operators wearing gloves, standing at machines, working with sawdust in the air. Voice-first, touch-friendly, zero learning curve. Technology that respects the craft instead of interrupting it.',
        details: [
          'VoxShop: Voice-first AI interface — operators dictate updates, log issues, and query the ERP hands-free with 389 millwork-specific correction mappings',
          'CNC Validator: G-code safety linting that checks 40 rules in 27.6ms before any program touches a machine',
          'Production Brain: Real-time production visibility — every work order, every station, every status, live',
          'Maintain: Equipment health tracking with predictive maintenance alerts and service history',
          'Craft Brain: 50 years of institutional knowledge accessible at every workstation — species properties, joinery specs, finishing protocols',
          'Smart Dispatch: Digital work queue on wall-mounted kiosk displays — workers claim jobs, complete tasks, see material readiness',
          'Quality Gate: Tablet-first digital inspections with photo documentation and AWI compliance',
        ],
        icon: 'factory',
      },
      {
        title: 'Preconstruction & Engineering',
        description:
          'Where jobs get priced, measured, and prepared for production. AI handles the tedious extraction and measurement work so estimators and engineers focus on judgment and craftsmanship decisions.',
        details: [
          'Takeoff: Digital measurement tool that extracts quantities from construction documents — replaces manual counting and measuring',
          'Drawing Intelligence: AI-powered drawing parsing that turns architectural plans into structured data — 6 hours of manual matching reduced to 30 minutes',
          'DocIntake: Document extraction pipeline that pulls structured data from vendor confirmations, submittals, and contracts with confidence scoring',
          'Pricing Engine: Cost Genome Architecture — every cost broken down to its atomic components, assembled into estimates using real historical data and live material pricing',
        ],
        icon: 'layers',
      },
      {
        title: 'Operations & Management',
        description:
          'The connective tissue that ties shop floor to front office. Work order creation, lumber market intelligence, client communication, and the ERP backbone that makes everything else possible.',
        details: [
          'Cabinetry WO Composer: Guided work order creation for cabinetry jobs — structured input, validated output, zero ambiguity for production',
          'Timber: Lumber market intelligence — real-time pricing, species availability, market trend tracking that feeds directly into the Pricing Engine',
          'Custom ERP: The Airtable-based backbone connecting everything — project tracking, resource allocation, financial reporting, all in one integrated system',
          'Client Portal: Customer-facing project visibility — status updates, approval workflows, and document sharing without phone calls or emails',
          'Field Memory: Installation and site visit documentation — photos, notes, and punch lists that feed back into production quality loops',
          'Nerve Center: Unified operations command center — CEO, PM, Shop Floor, Admin all see their tailored view of every active project',
          'CRM: Task-based client relationship management — follow-up risk alerts, decision pressure, zero dropped touches',
          'Heartbeat: Relationship health scoring with proactive action queue — at-risk clients surfaced before they go cold',
          'Profit Autopsy: Job-by-job estimated vs actual analysis — the learning engine that makes every estimate more accurate',
        ],
        icon: 'operations',
      },
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI That Ships, Not Demos',
    description:
      'Every AI integration solves a real problem that was costing real time or real money. No chatbots. No gimmicks. No "AI-powered" marketing. These systems run in production every day, handling real work that humans used to do by hand.',
    items: [
      {
        title: 'Claude Vision',
        description:
          'Reads engineering drawings, vendor confirmations, and construction documents. Extracts structured data from PDFs that humans used to key in by hand. Handles the messy reality of construction documents — inconsistent formats, hand-drawn markups, multi-page specs.',
        details: [
          'Architectural drawing parsing: identifies rooms, dimensions, material callouts, and hardware specs',
          'Vendor confirmation extraction: pulls line items, pricing, lead times, and terms from any format',
          'Construction document analysis: reads specs, submittals, and RFIs to extract actionable data',
          'Multi-format handling: PDFs, scanned documents, photos of hand-drawn markups',
          'Structured output: every extraction produces typed, validated data ready for the ERP',
        ],
        icon: 'vision',
      },
      {
        title: 'Local Whisper',
        description:
          'VoxShop runs speech-to-text entirely on-device. No API calls. No cloud dependency. No latency. Works in a loud shop environment with sawdust in the air and operators wearing gloves. This is what "AI for the shop floor" actually looks like.',
        details: [
          'Runs 100% on-device — no internet required, no data leaves the building',
          '389 custom correction mappings for millwork terminology (e.g., "rabbet" not "rabbit")',
          'Optimized for noisy shop environments with background machinery',
          'Sub-second response time — faster than typing on any device',
          'Continuous vocabulary expansion as new terms and species are encountered',
        ],
        icon: 'microphone',
      },
      {
        title: 'Intelligent Validation',
        description:
          'Nothing ships unchecked. Every system has built-in validation that catches errors before they become expensive. CNC programs get linted. Document extractions get confidence-scored. Estimates get preflight checks. The AI doesn\'t just do the work — it checks the work.',
        details: [
          'CNC Validator: 40 safety and quality rules checked in 27.6ms — bad G-code never reaches the machine',
          'DocIntake confidence scoring: every extracted field rated for accuracy, low-confidence items flagged for human review',
          'Pricing Engine preflight guardrails: estimates checked against historical ranges, outliers flagged before they reach the client',
          'Work Order completeness validation: missing specs, unclear dimensions, and ambiguous instructions caught before production starts',
          'Closed-loop verification: production outcomes compared against estimates to continuously calibrate accuracy',
        ],
        icon: 'sparkles',
      },
    ],
  },
  {
    id: 'how-its-built',
    title: 'Built In-House, Not by a Vendor',
    description:
      'Eddie San Juan builds these systems himself, using AI agent fleet coordination to move at a speed that shouldn\'t be possible for one person. No dev team. No consultants. No six-month implementation timelines. The person who understands the problem builds the solution.',
    items: [
      {
        title: 'Agent Fleet',
        description:
          '10+ specialized AI agents — Developer, QA, Auditor, ERP Specialist, Manufacturing Expert — coordinated by an orchestrator that routes tasks to the right specialist. Parallel deployment means multiple agents work simultaneously on different parts of the same system.',
        details: [
          'Developer agents write production code, handle deployments, and manage version control',
          'QA agents test every PR against acceptance criteria before merge',
          'Auditor agents review code quality, security posture, and UX consistency',
          'ERP Specialist agents handle database schema changes and data migrations',
          'Manufacturing Expert agents validate business logic against real shop floor reality',
        ],
        icon: 'terminal',
      },
      {
        title: 'Weekend Sprints, Not Quarters',
        description:
          '10 tools deployed in a single overnight build session. The Pricing Engine went from zero to production in one weekend. Drawing Intelligence shipped its first working version in 48 hours. This is what happens when the builder understands both the problem and the code.',
        details: [
          '10 production tools deployed in a single overnight marathon session',
          '30+ tools deployed and maintained by one Operations Manager with AI agent fleet coordination',
          'CRM, meeting management, accountability charts — concept to production in days, not months',
          'Pricing Engine: concept to production in one weekend sprint',
          'VoxShop: voice interface built and deployed with 389 correction mappings in days, not months',
          'Iteration speed measured in hours, not sprints or quarters',
          'No handoff delays — the person who sees the problem fixes it the same day',
        ],
        icon: 'rocket',
      },
      {
        title: 'Zero Vendor Lock-in',
        description:
          'Every tool custom-built. Every line of code owned. Every architectural decision made from first principles for THIS business, not adapted from a generic template. No consultants telling E.F. San Juan to change their process to fit the software.',
        details: [
          'Every line of code owned by the company — no licensing fees, no vendor dependencies',
          'Architecture decisions made by someone who has run the shop floor, not read about it',
          'No generic SaaS adapted to "sort of" fit — every tool built for exactly how EFSJ operates',
          'Technology stack chosen for the problem, not the resume — React, Next.js, Supabase, Railway, Airtable',
          'Full source control, full deployment control, full data ownership — the company can never be held hostage',
        ],
        icon: 'shield',
      },
    ],
  },
];

export const philosophy = [
  {
    principle: 'Understanding Before Automation',
    explanation:
      'We spent months interviewing every department head before writing a single line of ERP code. 83+ insights captured. 29+ architectural decisions documented. The temptation is to build fast. The discipline is to build right. Understanding the problem deeply is what separates tools that get adopted from tools that get abandoned.',
  },
  {
    principle: 'Every Tool Elevates',
    explanation:
      'Technology doesn\'t replace craftsmen — it gives them superpowers. VoxShop lets operators dictate instead of type. Drawing Intelligence turns 6 hours of manual drawing matching into 30 minutes. CNC Validator catches dangerous G-code before it reaches the machine. The goal is making excellence feel effortless.',
  },
  {
    principle: 'The Something Special Effect',
    explanation:
      'Every person who uses these tools knows they\'re part of something that doesn\'t exist anywhere else in this industry. New hires hit competency in 2-4 months instead of 6-12. Operators request to be trained on VoxShop. Engineers compete to use Drawing Intelligence first. Nobody leaves because the tools make them better at their craft.',
  },
  {
    principle: 'Connected Intelligence Compounds',
    explanation:
      'Isolated tools add value. An integrated brain multiplies it. Every job E.F. San Juan runs makes the entire system smarter — pricing more accurate, estimates tighter, quality more consistent. A competitor can copy a single tool. They cannot copy 5 years of compounding, interconnected operational data built on 50 years of craft expertise.',
  },
];
