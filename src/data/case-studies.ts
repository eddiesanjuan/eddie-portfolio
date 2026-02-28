export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  heroStat: { value: string; label: string };
  problem: string;
  oldWay: string[];
  newWay: string[];
  impact: { metric: string; description: string }[];
  techStack: string[];
  quote?: string;
  status: 'live' | 'in-progress' | 'planned';
  featured?: boolean;
  // Extended fields for the ERP deep-dive
  vision?: string;
  scope?: { department: string; description: string }[];
  aiIntegration?: { name: string; description: string }[];
  team?: { name: string; role: string }[];
  whyCustom?: string[];
  scale?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-powered-erp',
    title: 'Building the Operating System for Modern Manufacturing',
    subtitle: 'A top-to-bottom custom ERP with integrated AI helpers — built by us, for us, because nobody else can handle custom millwork.',
    category: 'Operations / Full Custom ERP',
    year: '2024-2026',
    heroStat: { value: '8', label: 'Departments. One system. Zero off-the-shelf.' },
    problem:
      'E.F. San Juan ran on tribal knowledge, paper work orders, and an Airtable system that was bursting at the seams. Every project is a snowflake — custom dimensions, unique species, one-off joinery. Off-the-shelf ERPs are built for companies that make the same thing twice. We never make the same thing twice. Estimating took weeks. Shop floor workers hunted for information across three different systems. Project managers spent more time on data entry than managing projects. We didn\'t need a better tool. We needed to build our own.',
    oldWay: [
      'Paper work orders passed hand-to-hand on a 50,000 sq ft shop floor',
      'Airtable base hitting row limits and grinding to a halt under real load',
      'Project managers spending 40% of their time on data entry instead of managing projects',
      'No real-time visibility — "Where is this job?" required a phone call chain',
      'Estimating required senior staff with 20+ years of experience and 1-2 weeks per project',
      'Every department had its own system — none of them talked to each other',
      'Tribal knowledge walked out the door every time someone retired',
    ],
    newWay: [
      'Digital work orders with real-time status tracking from sales through installation',
      'Custom ERP on Supabase with role-based access for every department',
      'Automated data flow: one entry in sales cascades through engineering, production, finishing, and delivery',
      'Live dashboards showing every project\'s status, every piece\'s location, every department\'s workload',
      'AI-assisted estimating that reads architectural drawings and learns from 50 years of historical data',
      'Integrated AI helpers at every decision point — not bolted on, woven in',
      'Every piece of lumber tracked from arrival at the shop to installation on the job site',
    ],
    impact: [
      { metric: '70% less data entry', description: 'Automated flows replaced manual input across all eight departments' },
      { metric: 'Real-time visibility', description: 'Any team member can check any project, any piece, any status — instantly' },
      { metric: '3x faster onboarding', description: 'New project managers productive in weeks, not the 6 months it used to take' },
      { metric: 'Zero paper work orders', description: 'Fully digital from estimate through production through delivery' },
      { metric: 'Every piece tracked', description: 'From raw lumber arrival to client installation — nothing gets lost' },
      { metric: 'AI at every step', description: 'Voice AI on the floor, automated validation in CNC, intelligent scheduling in production' },
    ],
    techStack: ['Supabase', 'Next.js', 'TypeScript', 'PostgreSQL', 'Claude API', 'Rust (VoxShop)', 'Custom G-code parser', 'Railway', 'Vercel'],
    quote: 'We didn\'t digitize the old process. We rebuilt it from scratch around how our people actually work — and then we gave every decision point an AI copilot.',
    status: 'live',
    featured: true,
    vision:
      'Replace Airtable entirely with a fully custom ERP designed for custom manufacturing. Not an off-the-shelf system bent into shape. Not a SaaS product that handles 80% of what we need. A system that handles 100% — because we built every screen, every workflow, every integration ourselves. This is a CEO personally architecting his company\'s entire technology stack, not hiring consultants or buying enterprise software. Every line of code exists because it solves a real problem on our shop floor.',
    scope: [
      {
        department: 'Sales / CRM',
        description: 'Lead tracking, client relationships, bid management. Todd Oliver drives the CRM requirements — the system knows every interaction, every preference, every project history for every client.',
      },
      {
        department: 'Estimating',
        description: 'AI-powered takeoffs from architectural drawings. What used to take our best estimators 2 weeks now gets a first pass in minutes. Human review still required — AI handles the complexity, humans handle the judgment.',
      },
      {
        department: 'Engineering',
        description: 'Shop drawings, cut lists, material specifications. The engineering module generates production-ready documentation that flows directly to the shop floor without re-entry.',
      },
      {
        department: 'Production / Shop Floor',
        description: 'Real-time work order tracking, station-by-station progress. Every craftsman sees exactly what\'s next, what\'s needed, and what the spec says. VoxShop provides voice-first AI access at every station.',
      },
      {
        department: 'CNC / Machine Shop',
        description: 'Automated G-code validation before any material gets cut. Trey Carr drives the CNC requirements. The CNC Validator catches the $10,000 mistakes before they happen.',
      },
      {
        department: 'Procurement',
        description: 'Material tracking from purchase order to receiving to allocation. Know exactly what\'s in stock, what\'s on order, and what\'s allocated to which job — in real time.',
      },
      {
        department: 'Quality Control / Finishing',
        description: 'Finish specifications, inspection checkpoints, defect tracking. The right stain, the right sheen, the right number of coats — validated by the system, not by memory.',
      },
      {
        department: 'Delivery / Logistics',
        description: 'Scheduling, load planning, installation coordination. Every piece packed, shipped, and installed in the right order. Nothing arrives at the job site without everything it needs.',
      },
    ],
    aiIntegration: [
      {
        name: 'VoxShop — Voice AI on the Shop Floor',
        description: 'Craftsmen ask questions by voice without leaving their station. "What\'s the finish spec for the Riverside master bath vanity?" Answers in 2 seconds from work orders, specs, and material databases. Built in Rust for speed.',
      },
      {
        name: 'AI-Powered Estimating',
        description: 'Reads architectural PDFs, extracts millwork scope, calculates material and labor costs from 50 years of historical project data. Turns a 2-week process into a 4-minute first pass.',
      },
      {
        name: 'CNC Validator — Automated G-code Linting',
        description: 'Every CNC program validated before it touches material. Feed rates, tool changes, depth cuts, material-specific rules. 50 years of "watch out for this" encoded into automated checks.',
      },
      {
        name: 'Craft Brain — Institutional Knowledge Engine',
        description: 'Five decades of woodworking expertise — species behavior, joinery techniques, finish compatibility in Gulf Coast climate — extracted, structured, and queryable by any team member at any time.',
      },
      {
        name: 'Intelligent Scheduling',
        description: 'Production scheduling that accounts for material availability, station capacity, finishing dry times, and delivery deadlines. The system knows the dependencies humans used to track in their heads.',
      },
      {
        name: 'Automated Work Order Validation',
        description: 'Before a work order hits the shop floor, AI validates completeness: are specs attached? Materials allocated? CNC programs validated? Engineering drawings approved? Nothing starts production half-baked.',
      },
    ],
    team: [
      { name: 'Eddie San Juan', role: 'System architect, product owner, CEO. Designs the workflows, writes the specs, reviews every deployment.' },
      { name: 'Nick Akins', role: 'Lead developer. Builds the application layer — frontend, API, database design, deployment pipeline.' },
      { name: 'Andrew Shelley', role: 'Testing and training lead. Makes sure the system works for real people on a real shop floor, not just in a demo.' },
      { name: 'Todd Oliver', role: 'Sales/CRM requirements. Drives the client-facing side of the system — what sales needs to close deals faster.' },
      { name: 'Trey Carr', role: 'CNC and machine shop requirements. Ensures the CNC validation and machine integration actually works the way operators need it to.' },
    ],
    whyCustom: [
      'Every job in custom millwork is unique — different dimensions, species, joinery, finishes. ERP systems built for widget manufacturing can\'t handle "every product is a prototype."',
      'Off-the-shelf ERPs force you into their workflow. We need the software to match how a 50-year-old company actually operates, not the other way around.',
      'AI integration has to be deep — embedded in every workflow, every decision point. You can\'t bolt Claude onto SAP and call it AI-powered.',
      'The shop floor environment is hostile to enterprise software: sawdust, noise, gloves, no keyboard. We needed voice-first, mobile-first, gloves-on interfaces.',
      'Our competitive advantage IS our process. Running on the same ERP as every other shop means competing on the same terms. Custom software is a moat.',
      'We outgrew Airtable. It was the right tool to get started, but at our scale the row limits, performance issues, and integration constraints became the bottleneck.',
    ],
    scale:
      'This isn\'t a dashboard or a project tracker. It\'s an operating system for a manufacturing company. Every piece of lumber is tracked from the moment it arrives at our shop to the moment it\'s installed in the client\'s home. Eight departments. Hundreds of active projects. Thousands of individual pieces in production at any time. Dozens of active users from the front office to the shop floor. And AI copilots woven into every step — not watching from the sidelines, but embedded in the work.',
  },
  {
    slug: 'voxshop',
    title: 'VoxShop: AI on the Shop Floor',
    subtitle: 'A voice-first AI assistant that lets shop floor workers get answers without leaving their station.',
    category: 'Manufacturing AI',
    year: '2025',
    heroStat: { value: '< 2s', label: 'Voice response time' },
    problem:
      'Shop floor workers needed information constantly: cut lists, material specs, assembly instructions, safety data. Every question meant walking to a computer, finding the right person, or stopping production. In a 50,000 sq ft shop, that adds up fast.',
    oldWay: [
      'Walk to the office to check specs on a computer',
      'Interrupt a senior craftsman to ask a question',
      'Flip through paper binders for material data',
      'Radio the project manager for status updates',
      'Guess and hope when documentation was unclear',
    ],
    newWay: [
      'Ask VoxShop any question by voice at your station',
      'Multi-operator support: recognizes who\'s asking',
      'Pulls from work orders, specs, and material databases in real-time',
      'Answers in natural language, confirms understanding',
      'Escalates to human experts when confidence is low',
    ],
    impact: [
      { metric: '15+ min/day saved per worker', description: 'Eliminated walking to check information' },
      { metric: 'Fewer interruptions', description: 'Senior staff freed from routine questions' },
      { metric: 'Consistent answers', description: 'Same question gets the same right answer every time' },
      { metric: 'Safety compliance', description: 'Instant access to SDS and safety protocols' },
    ],
    techStack: ['Rust', 'WebSocket', 'Whisper ASR', 'Claude API', 'Custom wake word detection'],
    quote: 'The guys on the floor went from skeptical to "don\'t you dare take this away" in about two weeks.',
    status: 'live',
  },
  {
    slug: 'cnc-validator',
    title: 'CNC Validation: Catching $10K Mistakes',
    subtitle: 'Automated toolpath validation that catches errors before they destroy expensive material.',
    category: 'Quality Assurance',
    year: '2025',
    heroStat: { value: '$0', label: 'Material waste from code errors' },
    problem:
      'Custom millwork means custom CNC programs. Every job is different. A wrong feed rate, a missed tool change, or an incorrect depth cut doesn\'t just waste time. It destroys irreplaceable material. A single bad program on premium walnut can cost $10,000+.',
    oldWay: [
      'Manual review of G-code by experienced CNC operators',
      'Test cuts on scrap material before production runs',
      'Errors caught after material was already ruined',
      'No systematic validation — relied on operator experience',
      'New operators had no safety net',
    ],
    newWay: [
      'Automated G-code linting before any material is cut',
      'Rules engine validates feed rates, tool changes, depths',
      'Material-specific validation (different rules for walnut vs MDF)',
      'Clear error reports with line numbers and fix suggestions',
      'Confidence scoring: green/yellow/red before running',
    ],
    impact: [
      { metric: 'Zero material losses from code errors', description: 'Every program validated before it touches material' },
      { metric: '< 30 seconds to validate', description: 'Full program analysis in the time it takes to load stock' },
      { metric: 'New operator confidence', description: 'Junior operators can run complex programs safely' },
      { metric: 'Institutional knowledge encoded', description: '50 years of "watch out for this" turned into rules' },
    ],
    techStack: ['TypeScript', 'Custom G-code parser', 'Rule engine', 'Next.js dashboard'],
    quote: 'Every rule in the validator exists because someone learned it the expensive way. Now nobody has to.',
    status: 'live',
  },
  {
    slug: 'craft-brain',
    title: 'Craft Brain: 50 Years, Digitized',
    subtitle: 'Systematic extraction of five decades of woodworking expertise into AI-queryable knowledge.',
    category: 'Knowledge Management',
    year: '2025-2026',
    heroStat: { value: '50 yrs', label: 'Of expertise captured' },
    problem:
      'E.F. San Juan has craftsmen with 30-40 years of experience. When they retire, decades of knowledge about wood behavior, joinery techniques, finish compatibility, and material sourcing walks out the door. You can\'t Google "how does this specific species of mahogany behave in Houston humidity."',
    oldWay: [
      'Knowledge lived in people\'s heads',
      'New employees learned by shadowing for months',
      'Critical decisions required the "right" person to be available',
      'No documentation of why past decisions were made',
      'Retirement meant permanent knowledge loss',
    ],
    newWay: [
      'Structured knowledge extraction interviews with senior craftsmen',
      'Decision trees for common material and technique choices',
      'AI-queryable database of species behavior, joinery methods, and finish specs',
      'Contextual retrieval: "What finish do we use on exterior sapele in Gulf Coast climate?"',
      'Living system that grows with every project',
    ],
    impact: [
      { metric: 'Knowledge preserved permanently', description: 'Expertise survives beyond any individual employee' },
      { metric: 'Faster decision-making', description: 'Answers that used to require finding the right person, instantly' },
      { metric: 'Training accelerated', description: 'New craftsmen access accumulated wisdom from day one' },
      { metric: 'Consistent quality', description: 'Best practices applied across every project, every time' },
    ],
    techStack: ['RAG pipeline', 'Supabase pgvector', 'Claude API', 'Structured interviews', 'Custom embeddings'],
    quote: 'We\'re not replacing craftsmen. We\'re making sure what they know never gets lost.',
    status: 'in-progress',
  },
  {
    slug: 'ai-estimating',
    title: 'From 2-Week Estimates to 4 Minutes',
    subtitle: 'AI that reads architectural drawings and produces accurate estimates in minutes, not weeks.',
    category: 'Business Intelligence',
    year: '2026',
    heroStat: { value: '4 min', label: 'Target estimate time' },
    problem:
      'Custom millwork estimation is brutally complex. Every project is unique. An estimator needs to read architectural drawings, understand material requirements, calculate labor hours across a dozen departments, account for finishing and hardware, and produce a number the business can stand behind. It currently takes our best estimators 1-2 weeks per project.',
    oldWay: [
      'Manual takeoff from architectural drawings (hours per project)',
      'Estimators needed 10+ years of experience to be accurate',
      'Only 2-3 people in the company could estimate complex projects',
      'Bottleneck limited how many bids we could pursue',
      'Inconsistent pricing across estimators',
    ],
    newWay: [
      'AI reads architectural PDFs and extracts millwork scope',
      'Historical project data trains the pricing model',
      'Automated material takeoff with species and grade detection',
      'Labor estimation by department based on complexity scoring',
      'Human review of AI estimate for final approval',
    ],
    impact: [
      { metric: '99% faster estimates', description: 'From 2 weeks to 4 minutes for initial pricing' },
      { metric: '5x more bids', description: 'Capacity to pursue every viable project' },
      { metric: 'Consistent pricing', description: 'Same project gets the same price regardless of who estimates' },
      { metric: 'Junior estimator enablement', description: 'AI handles complexity, humans handle relationships' },
    ],
    techStack: ['Vision AI', 'Claude API', 'Historical data pipeline', 'Custom pricing engine', 'PDF extraction'],
    quote: 'The goal isn\'t to remove the estimator. It\'s to give them superpowers.',
    status: 'planned',
  },
];
