export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  heroStat: { value: string; label: string };
  heroStats?: { value: string; label: string }[];
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
    title: 'The Operating System for Custom Manufacturing',
    subtitle: 'A full-stack custom ERP built from first principles — 29 architectural decisions, 83 insights from 10 department interviews, 8 departments unified. No off-the-shelf system could touch this.',
    category: 'Operations / Full Custom ERP',
    year: '2024-2026',
    heroStat: { value: '8', label: 'Departments connected' },
    heroStats: [
      { value: '29+', label: 'Architectural decisions documented' },
      { value: '83+', label: 'Insights captured from interviews' },
      { value: '10', label: 'Module interviews completed' },
    ],
    problem:
      'E.F. San Juan is a 50-year-old luxury custom millwork manufacturer. Every project is a prototype — unique dimensions, rare species, one-off joinery, bespoke finishes. Off-the-shelf ERPs assume you make the same thing twice. We never make the same thing twice. The company ran on tribal knowledge, paper work orders, and an Airtable system buckling under production scale. Estimating took weeks. Shop floor workers hunted across three disconnected systems. Project managers spent more time on data entry than managing projects. We didn\'t need a better tool. We needed to build our own operating system.',
    oldWay: [
      'Paper work orders passed hand-to-hand across a 50,000 sq ft shop floor',
      'Airtable base hitting row limits and grinding to a halt under real production load',
      'Project managers spending 40% of their time on data entry instead of managing projects',
      'No real-time visibility — "Where is this job?" required a phone call chain',
      'Estimating bottlenecked on senior staff with 20+ years of tribal knowledge',
      'Every department had its own system — none of them talked to each other',
      'Institutional knowledge walked out the door every time someone retired',
    ],
    newWay: [
      'Sacred Data Hierarchy: Job > Opportunity/Project > Scope > Work Order > Line Item > Cost Atom — every entity has one source of truth',
      'Custom ERP built on Airtable with deep integrations, migrating to Supabase for scale',
      'Automated data flow: one entry in sales cascades through engineering, production, finishing, and delivery',
      'Live dashboards showing every project\'s status, every piece\'s location, every department\'s workload',
      'AI copilots embedded at every decision point — not bolted on, woven into the workflow',
      'Every architectural decision documented with rationale — this system explains itself',
      'Living specification that evolves with the company, not a frozen requirements doc',
    ],
    impact: [
      { metric: '70% less data entry', description: 'Automated flows replaced manual input across all eight departments' },
      { metric: 'Real-time visibility', description: 'Any team member can check any project, any piece, any status — instantly' },
      { metric: '3x faster onboarding', description: 'New project managers productive in weeks instead of the 6 months it used to take' },
      { metric: 'Zero paper work orders', description: 'Fully digital from estimate through production through delivery' },
      { metric: 'Every piece tracked', description: 'From raw lumber arrival to client installation — nothing gets lost' },
      { metric: 'AI at every step', description: 'Voice AI on the floor, automated validation in CNC, intelligent scheduling in production' },
    ],
    techStack: ['Airtable', 'Supabase', 'Next.js', 'TypeScript', 'PostgreSQL', 'Claude API', 'Rust', 'FastAPI', 'Railway', 'Vercel'],
    quote: 'We didn\'t digitize the old process. We rebuilt it from first principles around how custom manufacturing actually works — then gave every decision point an AI copilot.',
    status: 'live',
    featured: true,
    vision:
      'A fully custom ERP designed for custom manufacturing from the ground up. Not an off-the-shelf system bent into shape. Not a SaaS product that handles 80% of what we need. A system that handles 100% — because we built every screen, every workflow, every integration ourselves. 29+ architectural decisions documented with full rationale. 83+ insights captured from 10 module interviews across every department. Every line of code exists because it solves a real problem on our shop floor.',
    scope: [
      {
        department: 'Sales / CRM',
        description: 'Lead tracking, client relationships, bid management. The system knows every interaction, every preference, every project history for every client.',
      },
      {
        department: 'Estimating & Preconstruction',
        description: 'Digital takeoff, structured estimating workflows, and cost genome pricing. Decades of pricing knowledge captured in systems, not spreadsheets.',
      },
      {
        department: 'Engineering & Design',
        description: 'Shop drawings, cut lists, material specifications. AI-powered drawing-to-line-item matching. Engineering output flows directly to production without re-entry.',
      },
      {
        department: 'Production / Shop Floor',
        description: 'Real-time work order tracking, station-by-station progress, capacity heatmaps. Every craftsman sees exactly what\'s next. VoxShop provides voice-first AI at every station.',
      },
      {
        department: 'CNC / Machine Shop',
        description: 'Automated G-code validation with 40 rules. 38/38 production files validated, zero false positives. The $10,000 mistakes get caught before they happen.',
      },
      {
        department: 'Procurement & Supply Chain',
        description: 'Real-time lumber market intelligence, material tracking from PO to receiving to allocation. Live FRED API data, futures tracking, tariff monitoring.',
      },
      {
        department: 'Quality Control / Finishing',
        description: 'Finish specifications, inspection checkpoints, defect tracking. The right stain, the right sheen, the right number of coats — validated by the system.',
      },
      {
        department: 'Equipment & Maintenance',
        description: 'AI-augmented CMMS with 33 preventive maintenance templates. Every machine tracked. Every PM scheduled. Zero surprises.',
      },
    ],
    aiIntegration: [
      {
        name: 'VoxShop — Voice AI on the Shop Floor',
        description: 'Offline speech-to-text in Rust with local Whisper, 389 correction mappings, 339 industry terms. Craftsmen ask questions by voice without leaving their station. Multi-platform: macOS and Windows.',
      },
      {
        name: 'Drawing Intelligence — AI Drawing Matching',
        description: 'Claude Vision parses engineering drawing packets, matches drawings to line items with confidence scores, uploads extracted pages to Airtable. 6 hours of manual matching reduced to 30 minutes.',
      },
      {
        name: 'DocIntake — AI Document Classification',
        description: 'Construction documents arrive as chaos — specs, schedules, change orders, RFIs, POs, submittals. AI classifies each document, extracts data with confidence scoring, flags anything below 70% for human review.',
      },
      {
        name: 'CNC Validator — Automated G-code Linting',
        description: '40 validation rules. 38/38 production files validated, zero false positives. 27.6ms average per 46K lines of G-code. 50 years of "watch out for this" encoded into automated checks.',
      },
      {
        name: 'Craft Brain — Institutional Knowledge Engine',
        description: '10 research briefs, 35 wood species profiled, AWI quality standards integrated. Five decades of woodworking expertise — structured, searchable, and growing.',
      },
      {
        name: 'Cab WO Composer — Intelligent Work Order Creation',
        description: 'PDF import via Claude Vision API, Cabinet Vision CSV import, S4S cut list import. Work order creation from 45 minutes to 3 minutes.',
      },
    ],
    team: [
      { name: 'Eddie San Juan', role: 'Senior leadership, system architect, and product owner. Designs workflows, writes specs, builds with AI agents, reviews every deployment.' },
      { name: 'Nick Akins', role: 'Warehouse worker trained into co-developer. Builds alongside Eddie — proof that domain expertise beats computer science degrees.' },
      { name: 'AI Agent Fleet', role: 'Developer, QA, auditor, and specialist agents coordinated as a build team. The multiplier that makes one person\'s output look like a department.' },
    ],
    whyCustom: [
      'Every job in custom millwork is unique — different dimensions, species, joinery, finishes. ERP systems built for widget manufacturing cannot handle "every product is a prototype."',
      'Off-the-shelf ERPs force you into their workflow. We need the software to match how a 50-year-old company actually operates, not the other way around.',
      'AI integration has to be deep — embedded in every workflow, every decision point. You cannot bolt Claude onto SAP and call it AI-powered.',
      'The shop floor is hostile to enterprise software: sawdust, noise, gloves, no keyboard. We needed voice-first, mobile-first, gloves-on interfaces.',
      'Our competitive advantage IS our process. Running on the same ERP as every competitor means competing on the same terms. Custom software is a moat.',
      'We outgrew Airtable. It was the right tool to start, but at production scale the row limits, performance issues, and integration constraints became the bottleneck.',
    ],
    scale:
      'This is not a dashboard or a project tracker. It is an operating system for a manufacturing company — and every tool on this page is a module in it. Every piece of lumber tracked from arrival to installation. Eight departments. Hundreds of active projects. Thousands of individual pieces in production at any time. Dozens of active users from the front office to the shop floor. And AI copilots woven into every step — not watching from the sidelines, but embedded in the work.',
  },
  {
    slug: 'takeoff',
    title: 'EFSJ Takeoff: Digital Precision for Custom Millwork',
    subtitle: 'On-screen digital takeoff that replaced paper-based estimating with canvas-based markup, offline mutations, and instant archival.',
    category: 'Estimating & Preconstruction',
    year: '2025-2026',
    heroStat: { value: 'v2.17', label: 'In production daily' },
    heroStats: [
      { value: 'v2.17', label: 'Production version' },
      { value: '0ms', label: 'Offline mutation latency' },
      { value: '100%', label: 'Paper takeoffs replaced' },
    ],
    problem:
      'Custom millwork estimating starts with construction drawings — hundreds of pages of architectural plans. Estimators need to measure every door, panel, moulding, and cabinet run. At E.F. San Juan, this was done with paper printouts, colored pencils, and a calculator. Dimensions were hand-measured, tallied on notepads, and manually entered into spreadsheets. One missed dimension on a $2M project could cost tens of thousands.',
    oldWay: [
      'Print architectural drawings on oversize paper — hundreds of pages per project',
      'Mark up drawings with colored pencils and highlighters',
      'Hand-measure dimensions with a scale ruler',
      'Tally quantities on notepads, transfer to spreadsheets manually',
      'No archival — paper markups filed in cabinets, never referenced again',
      'One estimator bottleneck: only senior staff could do takeoffs accurately',
    ],
    newWay: [
      'Canvas-based drawing markup with precision dimension extraction on-screen',
      'Offline mutations — the app works even when internet drops on the shop floor',
      'Custom assembly packs for recurring millwork configurations — one click instead of 50 measurements',
      'PDF storage and archiving with full lifecycle management',
      'Every takeoff saved, searchable, and referenceable for future bids',
      'Junior estimators can produce accurate takeoffs with system guidance',
    ],
    impact: [
      { metric: 'Zero paper takeoffs', description: 'Entire estimating workflow moved to digital' },
      { metric: 'Works offline', description: 'Offline mutations ensure no work is lost when connectivity drops' },
      { metric: 'Instant archival', description: 'Every takeoff preserved and searchable — historical pricing at your fingertips' },
      { metric: 'Faster onboarding', description: 'Assembly packs encode senior knowledge into reusable templates' },
    ],
    techStack: ['Next.js 14', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    quote: 'We didn\'t just digitize the paper process. We built a system that makes a first-year estimator as accurate as a twenty-year veteran.',
    status: 'live',
  },
  {
    slug: 'pricing-engine',
    title: 'EFSJ Pricing Engine: The Cost Genome',
    subtitle: 'Every line item decomposed into five cost atoms — Material, Machine, Labor, Consumable, Overhead. Pricing transformed from art to science.',
    category: 'Finance & Pricing',
    year: '2025-2026',
    heroStat: { value: '5', label: 'Cost atoms per line item' },
    heroStats: [
      { value: '5', label: 'Cost atoms per line item' },
      { value: '0', label: 'Lost drafts (snapshot recovery)' },
      { value: '100%', label: 'Cost visibility per item' },
    ],
    problem:
      'Pricing custom millwork is brutally complex. Every project is unique. Material costs fluctuate weekly. Machine time varies by species and profile. Labor rates differ by skill level and operation. For 50 years, pricing lived in the heads of senior estimators — intuition-based, inconsistent, and impossible to audit. When margins were thin, nobody could explain exactly why.',
    oldWay: [
      'Senior estimators priced from gut feel and experience — no two priced the same project alike',
      'Material costs looked up manually from vendor quotes, often outdated',
      'Machine time estimated by feel, not calculated from actual run data',
      'Labor priced as a lump sum, no visibility into which operations cost what',
      'Pricing drafts lost when browser crashed or session timed out',
      'No version history — once a price was overwritten, the old number was gone',
    ],
    newWay: [
      'Cost Genome Architecture: every line item breaks into Material, Machine, Labor, Consumable, and Overhead atoms',
      'Draft recovery snapshot system — work-in-progress saved automatically, never lose a pricing session',
      'Preflight guardrails prevent bad data from entering the system before it corrupts downstream',
      'Version comparison tracks pricing evolution — see exactly what changed and why',
      'Parser gauntlet corpus validates every input for bulletproof data integrity',
      'Airtable source-of-truth integration — pricing data flows from one canonical source',
    ],
    impact: [
      { metric: 'Complete cost transparency', description: 'Every dollar in every line item traced to its source' },
      { metric: 'Zero lost drafts', description: 'Snapshot recovery system preserves every pricing session automatically' },
      { metric: 'Auditable pricing history', description: 'Version comparison shows exactly how and why prices evolved' },
      { metric: 'Margin protection', description: 'Preflight guardrails catch underpricing before it reaches a client' },
    ],
    techStack: ['FastAPI', 'Python', 'React', 'TanStack Query', 'PostgreSQL', 'Airtable'],
    quote: 'When you can see every dollar — material, machine, labor, consumable, overhead — you stop guessing at margins. You engineer them.',
    status: 'live',
  },
  {
    slug: 'voxshop',
    title: 'VoxShop: The Voice of the Shop Floor',
    subtitle: 'Offline speech-to-text built in Rust with local Whisper, 389 correction mappings, 339 industry terms. Multi-platform. Zero cloud dependency. The shop floor runs on voice.',
    category: 'Shop Floor Intelligence',
    year: '2025-2026',
    heroStat: { value: '389', label: 'Grammar correction mappings' },
    heroStats: [
      { value: '389', label: 'Correction mappings' },
      { value: '339', label: 'EFSJ industry terms' },
      { value: '9', label: 'Stage grammar pipeline' },
    ],
    problem:
      'The shop floor is hostile to keyboards. Craftsmen wear gloves, their hands are covered in sawdust and finish, and the machines are loud. Every time they need to enter data, check a spec, or log progress, they have to stop what they are doing, clean their hands, walk to a terminal, and type. Cloud-based voice tools require internet, send private production data to third parties, and lag when the shop\'s WiFi is spotty. The shop floor needed a voice interface that works like the floor works — fast, private, and always on.',
    oldWay: [
      'Walk to a computer terminal to check specs or enter data',
      'Interrupt a senior craftsman to ask a question',
      'Flip through paper binders for material data',
      'Radio the project manager for status updates',
      'Type with gloved or dusty hands — slow and error-prone',
    ],
    newWay: [
      'Local Whisper speech engine — completely offline, no API keys, zero cloud dependency',
      '9-stage grammar correction pipeline built in Rust for sub-second processing',
      '389 correction mappings handle shop floor speech patterns and slang',
      '339 EFSJ industry terms — "sapele", "cope and stick", "S4S" recognized perfectly',
      'Voice shortcuts with trigger words for common operations',
      'Stutter removal and professional formatting — raw speech becomes clean text',
      'Dictation commands system for hands-free workflow control',
      'Multi-platform: v1.4.0 on macOS, v1.0.0 on Windows — built with Tauri v2',
    ],
    impact: [
      { metric: '15+ min/day saved per worker', description: 'Eliminated walking to terminals for information' },
      { metric: 'Zero cloud dependency', description: 'Runs entirely on local hardware — no internet required, no data leaves the shop' },
      { metric: 'Multi-platform shipping', description: 'macOS v1.4.0 and Windows v1.0.0 — Tauri v2 with Rust + Swift on macOS' },
      { metric: 'Industry-grade accuracy', description: '339 custom terms ensure millwork vocabulary is recognized, not mangled' },
    ],
    techStack: ['Rust', 'Tauri v2', 'Swift (macOS)', 'Whisper ASR (local)', 'Custom grammar pipeline'],
    quote: 'The guys on the floor went from skeptical to "don\'t you dare take this away" in about two weeks. Voice is the interface. Everything else is friction.',
    status: 'live',
  },
  {
    slug: 'maintain',
    title: 'EFSJ Maintain: AI-Augmented Maintenance Management',
    subtitle: 'Every machine tracked. Every preventive maintenance scheduled. Zero surprises. A CMMS built for a shop floor that cannot afford downtime.',
    category: 'Equipment & Maintenance',
    year: '2025-2026',
    heroStat: { value: 'v3.4', label: 'Production version' },
    heroStats: [
      { value: '33', label: 'PM templates pre-loaded' },
      { value: 'v3.4', label: 'Production version' },
      { value: '0', label: 'Unscheduled surprises (target)' },
    ],
    problem:
      'A custom millwork shop runs on machines that cost $50K-$500K each — CNC routers, wide-belt sanders, moulders, panel saws. When one goes down unexpectedly, it does not just stop one job. It cascades through the entire production schedule. E.F. San Juan tracked maintenance on spreadsheets and sticky notes. PM schedules lived in one person\'s head. When that person was out, maintenance got skipped. When maintenance got skipped, machines broke.',
    oldWay: [
      'Maintenance schedules tracked on spreadsheets — updated sporadically',
      'PM reminders via sticky notes on the machine or mental memory',
      'Equipment history scattered across emails, invoices, and one person\'s memory',
      'Reactive maintenance: fix it when it breaks, absorb the downtime',
      'No visibility into maintenance costs or patterns across the fleet',
    ],
    newWay: [
      'Drilldown dashboard with PM-to-work-order flows — click a machine, see everything',
      'Report chart drilldowns with payload validation for accurate analytics',
      'Import/export quick actions for bulk equipment and PM management',
      '33 preventive maintenance templates pre-loaded for common shop equipment',
      'AI insights surface patterns: which machines need attention before they fail',
      'Equipment maintenance tracking with full history and cost attribution',
    ],
    impact: [
      { metric: 'Every machine tracked', description: 'Complete equipment registry with maintenance history and cost attribution' },
      { metric: 'PM compliance visible', description: 'Dashboard shows what is due, what is overdue, and what is coming' },
      { metric: '33 PM templates', description: 'Pre-loaded preventive maintenance for common shop floor equipment' },
      { metric: 'AI-augmented insights', description: 'Patterns in maintenance data surface before they become breakdowns' },
    ],
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    quote: 'The most expensive maintenance is the kind you do after the machine breaks. We do it before.',
    status: 'live',
  },
  {
    slug: 'doc-intake',
    title: 'EFSJ DocIntake: Order from Document Chaos',
    subtitle: 'Construction documents arrive as chaos — specs, schedules, change orders, RFIs, POs, submittals. They leave as structured, searchable, confidence-scored data.',
    category: 'Document Intelligence',
    year: '2025-2026',
    heroStat: { value: '6', label: 'Document types auto-classified' },
    heroStats: [
      { value: '6', label: 'Auto-classified document types' },
      { value: '< 70%', label: 'Confidence threshold flags human review' },
      { value: '100%', label: 'Full-text searchable' },
    ],
    problem:
      'A single luxury millwork project generates hundreds of documents — architectural specifications, shop drawing schedules, change orders, RFIs, purchase orders, submittals. They arrive as email attachments, shared drive uploads, and hand-delivered USB drives. Different formats, different naming conventions, no consistent structure. Project managers spent hours sorting, reading, and manually extracting the data that mattered. Miss a change order buried in a 200-page spec, and you build the wrong thing.',
    oldWay: [
      'Documents arrive via email, shared drives, and USB — no single intake point',
      'Project managers manually read and classify every document',
      'Key data extracted by hand into spreadsheets and Airtable',
      'Change orders buried in spec addenda — easy to miss, expensive to miss',
      'No full-text search — finding a specific clause meant re-reading entire documents',
      'No audit trail — who read what, when, and what they extracted',
    ],
    newWay: [
      'Single intake: upload PDFs, DOCX, TXT, and images into one pipeline',
      'AI classification: spec, schedule, change order, RFI, PO, or submittal — automatically',
      'Claude AI data extraction with per-field confidence scoring (0-100%)',
      'Fields below 70% confidence flagged for human review — AI knows what it does not know',
      'Review queue with inline editing and bulk approve for efficient processing',
      'Full-text search across all documents — find any clause, any spec, any reference instantly',
      'Processing logs with token usage tracking for cost visibility',
    ],
    impact: [
      { metric: 'Automated classification', description: 'Six document types identified automatically — specs, schedules, change orders, RFIs, POs, submittals' },
      { metric: 'Confidence-scored extraction', description: 'Every extracted field rated 0-100% — the system tells you exactly where it is unsure' },
      { metric: 'Full-text search', description: 'Every document searchable — no more re-reading 200-page specs to find one clause' },
      { metric: 'Audit trail', description: 'Processing logs track every extraction, every classification, every token used' },
    ],
    techStack: ['Next.js 14', 'React 19', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind CSS'],
    quote: 'Construction documents arrive as chaos. They leave as structured data. The AI knows what it knows — and more importantly, it knows what it doesn\'t.',
    status: 'live',
  },
  {
    slug: 'cab-wo-composer',
    title: 'Cab WO Composer: Work Orders in 3 Minutes',
    subtitle: 'Intelligent work order creation for cabinetry operations. PDF import via AI vision, CSV import, S4S cut lists. 45 minutes of copy-paste replaced with 3 minutes of review.',
    category: 'Production Operations',
    year: '2025-2026',
    heroStat: { value: '93%', label: 'Time reduction in WO creation' },
    heroStats: [
      { value: '3 min', label: 'Average WO creation time' },
      { value: '4', label: 'WO types supported' },
      { value: '93%', label: 'Time saved vs. manual entry' },
    ],
    problem:
      'Creating work orders for cabinetry operations was the worst bottleneck in production scheduling. Every WO required manual entry in QuickBooks — line by line, field by field. Vendor confirmations arrived as PDFs that had to be re-keyed. Cabinet Vision exports could not be imported directly. S4S cut lists were printed, read, and re-typed. A single brokerage work order with 30 line items took 45 minutes of pure data entry. Multiply that by dozens of WOs per week.',
    oldWay: [
      'Line-by-line manual entry in QuickBooks for every work order',
      'Vendor confirmation PDFs re-keyed by hand — 45 minutes per brokerage WO',
      'Cabinet Vision CSV exports printed and re-typed instead of imported',
      'S4S cut list PDFs read manually and entered field by field',
      'WO numbers assigned ad hoc — no systematic numbering by type or job',
      'Revenue scattered across line items — no aggregation for financial visibility',
    ],
    newWay: [
      '4 WO types handled: Brokerage, Custom, Production, Install',
      'PDF import from vendor confirmations using Anthropic Vision API — read, extract, populate',
      'Cabinet Vision CSV import — drag, drop, done',
      'S4S cut list PDF import — parsed and structured automatically',
      'Auto-generated WO numbers by type and job — consistent, traceable, systematic',
      'Revenue concentration for brokerage/custom: first line = PKG with total for clean financials',
      'Direct Airtable Dashboard base integration — WOs flow into the ERP automatically',
    ],
    impact: [
      { metric: '45 min to 3 min', description: 'Work order creation time reduced by 93%' },
      { metric: 'PDF vision import', description: 'Vendor confirmations parsed by AI — no more re-keying' },
      { metric: 'Multi-format intake', description: 'PDFs, CSVs, and cut lists all import into one unified flow' },
      { metric: 'Direct ERP integration', description: 'WOs flow straight into Airtable Dashboard — zero manual handoff' },
    ],
    techStack: ['React 19', 'Vite 6', 'TypeScript', 'shadcn/ui', 'Tailwind 4', 'Claude Vision API', 'Airtable'],
    quote: 'The fastest work order is the one you don\'t have to type. AI reads the PDF, extracts the data, and all you do is review.',
    status: 'live',
  },
  {
    slug: 'drawing-intelligence',
    title: 'Drawing Intelligence: AI-Powered Drawing Matching',
    subtitle: 'Claude Vision parses engineering drawing packets, matches drawings to line items with confidence scores, and uploads extracted pages to Airtable. 6 hours of daily matching reduced to 30 minutes.',
    category: 'Engineering & Design',
    year: '2025-2026',
    heroStat: { value: '92%', label: 'Reduction in matching time' },
    heroStats: [
      { value: '30 min', label: 'Daily matching time (was 6 hours)' },
      { value: '1 click', label: 'Per item (was 30 clicks)' },
      { value: '92%', label: 'Time saved' },
    ],
    problem:
      'Engineering drawing packets for custom millwork projects contain hundreds of individual drawings — door elevations, panel details, moulding profiles, cabinet plans. Each drawing must be matched to a specific line item in the work order. At E.F. San Juan, a dedicated person spent 6 hours per day doing this manually: open the PDF, find the drawing, cross-reference the description, navigate to the right line item in Airtable, upload the file. 30 clicks per item, hundreds of items per week.',
    oldWay: [
      '6 hours per day dedicated to manual drawing-to-line-item matching',
      '30 clicks per item: open PDF, find page, cross-reference description, navigate Airtable, upload',
      'Matching done by description eyeballing — error-prone and inconsistent',
      'S4S rectangular blocks mixed in with actual drawings — wasted time reviewing non-drawings',
      'Change order drawings required re-doing the entire matching process',
      'No confidence indication — human had to self-assess accuracy',
    ],
    newWay: [
      'Claude Vision parses entire engineering drawing packets — AI reads what humans used to squint at',
      'Description-based line item matching with confidence scores — the system tells you how sure it is',
      'S4S detection: true rectangular blocks automatically skipped — only real drawings presented for review',
      'Page extraction and Airtable attachment upload — from PDF to linked record in one flow',
      'Side-by-side view for human review: drawing on the left, line item on the right',
      'Keyboard-driven workflow — tab, arrow, enter. No mouse hunting.',
      'Change order support — new drawings matched incrementally, not from scratch',
    ],
    impact: [
      { metric: '6 hours to 30 minutes', description: 'Daily drawing matching time reduced by 92%' },
      { metric: '30 clicks to 1 click', description: 'Per-item interaction reduced from navigating 5 systems to confirming one match' },
      { metric: 'Confidence scoring', description: 'Every match rated by AI — high confidence auto-approved, low confidence flagged' },
      { metric: 'Change order ready', description: 'New drawings matched incrementally without re-processing the entire packet' },
    ],
    techStack: ['React', 'TypeScript', 'Claude Vision API', 'Airtable API', 'PDF.js'],
    quote: 'Six hours a day of a skilled person\'s time, reduced to thirty minutes of review. That\'s not efficiency. That\'s liberation.',
    status: 'live',
  },
  {
    slug: 'cnc-validator',
    title: 'CNC Validator: Zero Tolerance for Bad Code',
    subtitle: '40 validation rules. 38/38 production files validated. Zero false positives. 27.6ms per 46,000 lines. The $10,000 mistake catcher.',
    category: 'Manufacturing Intelligence',
    year: '2025',
    heroStat: { value: '0', label: 'False positives in production' },
    heroStats: [
      { value: '40', label: 'Validation rules' },
      { value: '27.6ms', label: 'Average validation time' },
      { value: '0', label: 'False positives' },
    ],
    problem:
      'Custom millwork means custom CNC programs. Every job is different — different species, different profiles, different machine setups. A wrong feed rate, a missed tool change, or an incorrect depth cut does not just waste time. It destroys irreplaceable material. A single bad program on premium walnut can cost $10,000+. And with hundreds of unique programs running each month, manual review does not scale.',
    oldWay: [
      'Manual review of G-code by experienced CNC operators — time-consuming and inconsistent',
      'Test cuts on scrap material before production runs — slow and wasteful',
      'Errors caught after material was already ruined — the worst time to find a bug',
      'No systematic validation — quality depended entirely on operator experience',
      'New CNC operators had no safety net — steep learning curve with expensive consequences',
    ],
    newWay: [
      '40 validation rules covering feed rates, tool changes, depths, material-specific constraints',
      '38/38 production files validated with zero false positives — trusted by operators',
      '27.6ms average validation time per 46,000 lines of G-code — faster than loading the stock',
      'Material-specific validation: different rules for walnut vs MDF vs sapele',
      'Clear error reports with line numbers, rule violations, and fix suggestions',
      'Confidence scoring: green/yellow/red before any program runs on material',
    ],
    impact: [
      { metric: 'Zero material losses from code errors', description: 'Every program validated before it touches material — period' },
      { metric: '27.6ms validation time', description: '46,000 lines analyzed in the time it takes to load stock into the machine' },
      { metric: 'Zero false positives', description: '38/38 production files — operators trust it because it has never cried wolf' },
      { metric: '50 years of knowledge encoded', description: 'Every rule exists because someone learned it the expensive way. Now nobody has to.' },
    ],
    techStack: ['TypeScript', 'Custom G-code parser', 'Rule engine', 'Next.js'],
    quote: 'Every rule in the validator exists because someone learned it the expensive way. Now nobody has to. 40 rules. Zero false positives. Zero tolerance.',
    status: 'live',
  },
  {
    slug: 'production-brain',
    title: 'Production Brain: The Factory\'s Nervous System',
    subtitle: 'Real-time production operations dashboard with capacity heatmaps, job simulation, and Airtable schema integration. Every job, every machine, every deadline — visible.',
    category: 'Production Operations',
    year: '2025-2026',
    heroStat: { value: 'Real-time', label: 'Production visibility' },
    heroStats: [
      { value: 'Real-time', label: 'Production visibility' },
      { value: '100%', label: 'Job coverage' },
      { value: '0', label: 'Hydration mismatches' },
    ],
    problem:
      'A custom millwork shop runs dozens of active jobs simultaneously across multiple departments and workstations. At E.F. San Juan, production status lived in department heads\' minds. The question "where is this job?" required a chain of phone calls. Capacity was estimated by gut feel. Scheduling conflicts were discovered when two jobs showed up at the same machine at the same time. The production manager was the single point of failure — the only person who could see the whole picture, and only because they held it in their head.',
    oldWay: [
      'Production status tracked in department heads\' memories — no single source of truth',
      '"Where is this job?" required a chain of phone calls across the shop',
      'Capacity estimated by gut feel — overloads discovered too late',
      'Scheduling conflicts found when two jobs arrived at the same machine simultaneously',
      'Production manager as single point of failure — the whole picture lived in one head',
    ],
    newWay: [
      'Real-time production operations dashboard — every job visible at a glance',
      'Capacity heatmap shows bottlenecks before they become crises',
      'Job simulator for scheduling — test "what if" scenarios without moving real work',
      'Airtable schema integration — production data flows from the ERP in real time',
      'Hydration-safe rendering for reliable server-side and client-side consistency',
      'Department-level and machine-level views for both managers and operators',
    ],
    impact: [
      { metric: 'Complete visibility', description: 'Every active job, every department, every machine — one screen' },
      { metric: 'Capacity heatmaps', description: 'Bottlenecks visible before they cascade into missed deadlines' },
      { metric: 'Job simulation', description: 'Test scheduling scenarios without disrupting active production' },
      { metric: 'Zero phone call chains', description: '"Where is this job?" answered in one click, not five calls' },
    ],
    techStack: ['Next.js 14', 'React 19', 'TypeScript', 'Airtable API', 'Tailwind CSS'],
    quote: 'A factory without real-time visibility is flying blind. Production Brain is the instrument panel.',
    status: 'live',
  },
  {
    slug: 'timber',
    title: 'EFSJ Timber: Real-Time Lumber Market Intelligence',
    subtitle: 'Live FRED API integration, lumber futures tracking, housing demand feeds, and tariff monitoring. Material costs move daily. Now EFSJ sees them move in real time.',
    category: 'Procurement & Supply Chain',
    year: '2025-2026',
    heroStat: { value: 'Live', label: 'Market data feeds' },
    heroStats: [
      { value: 'Live', label: 'FRED API market data' },
      { value: 'Real-time', label: 'Futures tracking' },
      { value: '24/7', label: 'Tariff monitoring' },
    ],
    problem:
      'Hardwood lumber is a volatile commodity. Prices swing 20-40% in a single year based on housing starts, tariffs, supply chain disruptions, and species availability. E.F. San Juan bids projects months before production begins. A bid priced on January lumber costs can be underwater by March if hardwood prices spike. The procurement team tracked prices through vendor phone calls, industry newsletters, and gut feel. By the time a price increase was noticed, it had already eaten the margin.',
    oldWay: [
      'Lumber prices tracked through vendor phone calls and industry newsletters',
      'Price increases noticed weeks after they happened — margin already eroded',
      'No connection between market data and project bidding — bids priced on stale costs',
      'Tariff impacts assessed reactively — discovered on the invoice, not the forecast',
      'Housing start data checked manually from government websites — monthly at best',
    ],
    newWay: [
      'Live FRED API integration pulling Federal Reserve Economic Data for lumber markets',
      'Lumber futures tracking for forward-looking price intelligence',
      'Housing data feeds for demand forecasting — see where the market is heading, not where it was',
      'Tariff monitoring and impact analysis — trade policy changes surfaced immediately',
      'Railway Postgres with in-memory fallback for high-availability data access',
      'Market intelligence feeds directly into estimating and procurement workflows',
    ],
    impact: [
      { metric: 'Real-time market data', description: 'Lumber prices, futures, and economic indicators updated continuously' },
      { metric: 'Forward-looking intelligence', description: 'Futures and housing data predict price movements before they hit invoices' },
      { metric: 'Tariff awareness', description: 'Trade policy changes surfaced immediately — no more invoice surprises' },
      { metric: 'Margin protection', description: 'Bids priced on current and projected costs, not last month\'s numbers' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Railway Postgres', 'FRED API', 'Tailwind CSS'],
    quote: 'You can\'t protect margins you can\'t see. Timber makes the invisible visible — every price movement, every tariff, every market signal.',
    status: 'live',
  },
  {
    slug: 'craft-brain',
    title: 'Craft Brain: 50 Years of Mastery, Searchable',
    subtitle: '10 research briefs, 35 wood species profiled, AWI quality standards integrated. Five decades of institutional knowledge being captured systematically — the knowledge moat.',
    category: 'Knowledge & Expertise',
    year: '2025-2026',
    heroStat: { value: '35', label: 'Wood species profiled' },
    heroStats: [
      { value: '35', label: 'Species profiled with working properties' },
      { value: '10', label: 'Research briefs pre-loaded' },
      { value: '50 yrs', label: 'Of expertise being captured' },
    ],
    problem:
      'E.F. San Juan has craftsmen with 30-40 years of experience. They know how sapele behaves in Gulf Coast humidity. They know which adhesive fails on teak. They know why you never run figured maple through the moulder at the same feed rate as poplar. When they retire, those decades of nuanced knowledge walk out the door permanently. You cannot Google "how does this specific species of mahogany behave in Houston humidity with a marine-grade finish." That knowledge exists in one place: the heads of people who have been doing this for half a century.',
    oldWay: [
      'Knowledge lived in people\'s heads — inaccessible to anyone else',
      'New employees learned by shadowing senior craftsmen for months',
      'Critical decisions required the "right" person to be available that day',
      'No documentation of why past decisions were made — only what was decided',
      'Retirement meant permanent, irrecoverable knowledge loss',
      'Same mistakes repeated by new hires who never learned the hard-won lessons',
    ],
    newWay: [
      '10 research briefs pre-loaded: Species, Adhesives, Finishing, Joinery, Machining, Materials, Installation, Quality, Design/DFM, Coastal',
      '35 wood species profiled with complete working properties — hardness, stability, workability, finish compatibility',
      'AWI (Architectural Woodwork Institute) quality standards integrated as the baseline',
      'Contextual retrieval: "What finish do we use on exterior sapele in Gulf Coast climate?" — answered in seconds',
      'Living system that grows with every project, every discovery, every lesson learned',
      '50 years of institutional knowledge being captured systematically — not all at once, but relentlessly',
    ],
    impact: [
      { metric: 'Knowledge preserved permanently', description: 'Expertise survives beyond any individual employee — the company remembers everything' },
      { metric: '35 species, complete profiles', description: 'Working properties, finish compatibility, machining notes — all searchable' },
      { metric: 'AWI standards integrated', description: 'Quality benchmarks built into the knowledge base, not separate reference documents' },
      { metric: 'Training accelerated', description: 'New craftsmen access accumulated wisdom from day one, not after years of shadowing' },
    ],
    techStack: ['RAG pipeline', 'Supabase pgvector', 'Claude API', 'Structured interviews', 'Custom embeddings'],
    quote: 'We are not replacing craftsmen. We are making sure that what they know — every species quirk, every finish trick, every hard-won lesson — never gets lost.',
    status: 'live',
  },
];
