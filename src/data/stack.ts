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
    id: 'erp-backbone',
    title: 'Custom ERP: The Backbone',
    description:
      'Every system we build plugs into the ERP. It\'s not a module — it\'s the foundation. VoxShop reads from it. CNC Validator writes to it. Craft Brain enriches it. The ERP is the single source of truth for the entire operation.',
    items: [
      {
        title: 'Work Order Lifecycle',
        description:
          'A project enters as a sales lead and flows through estimating, engineering, production, finishing, and delivery — every state change tracked, every handoff automated.',
        details: [
          'Sales creates the opportunity → Estimating prices it',
          'Engineering generates shop drawings and cut lists',
          'Production tracks station-by-station progress',
          'Finishing validates specs and logs inspections',
          'Delivery coordinates scheduling and installation',
        ],
        icon: 'erp',
      },
      {
        title: 'AI Helpers at Every Step',
        description:
          'AI isn\'t a feature of the ERP — it\'s in the ERP\'s DNA. Every department has AI copilots embedded in their actual workflow, not sitting in a separate tab.',
        details: [
          'VoxShop: Voice AI on the shop floor (reads ERP data)',
          'CNC Validator: G-code linting (writes results to ERP)',
          'Craft Brain: Knowledge engine (enriches ERP decisions)',
          'Estimating workflows: Structured pricing with historical data',
          'Work Order Validation: Completeness checks before production',
        ],
        icon: 'ai',
      },
      {
        title: 'Why We Built It Ourselves',
        description:
          'Off-the-shelf ERPs are built for companies that make the same thing twice. We never make the same thing twice. Custom software is our competitive moat.',
        details: [
          'Every job is unique — standard ERPs can\'t handle it',
          'Replaced Airtable when we outgrew it at scale',
          'Deep AI integration impossible with SAP/Oracle/NetSuite',
          'Shop floor needs voice-first, gloves-on interfaces',
          'Our process IS our advantage — custom software protects it',
        ],
        icon: 'custom',
      },
    ],
  },
  {
    id: 'agent-fleet',
    title: 'Agent Fleet Architecture',
    description:
      'A fleet of specialized AI agents, each with a defined role, coordinated by an orchestrator that routes tasks to the right specialist. This is how the ERP and every other system gets built and maintained.',
    items: [
      {
        title: 'Orchestrator Pattern',
        description:
          'The main Claude instance never writes code. It routes, coordinates, and synthesizes. Like a general who deploys specialists but never picks up a wrench.',
        details: [
          'Routes tasks to 10+ specialized agents',
          'Parallel deployment: multiple agents work simultaneously',
          'Context preservation through delegation',
          'State management across agent sessions',
        ],
        icon: 'orchestrator',
      },
      {
        title: 'Specialized Agents',
        description:
          'Each agent has a defined role, skill set, and boundary. A developer agent writes code. A QA agent tests it. An auditor reviews it. They never cross lanes.',
        details: [
          'Developer: Code implementation and deployment',
          'QA Agent: Automated and manual testing',
          'Auditor: Code review, security, UX analysis',
          'ERP Specialist: Database and schema operations',
          'Manufacturing Expert: Domain validation',
        ],
        icon: 'agents',
      },
      {
        title: 'Parallel Execution',
        description:
          'When a task touches multiple files, multiple agents deploy simultaneously with file ownership. No conflicts, no waiting.',
        details: [
          'File-level ownership prevents merge conflicts',
          'Sibling awareness: agents know what others handle',
          'Synthesis step merges parallel outputs',
          'Wave-based deployment for dependent work',
        ],
        icon: 'parallel',
      },
    ],
  },
  {
    id: 'skills-system',
    title: 'Skills System',
    description:
      '80+ slash commands that deploy agent legions for specific workflows. Type a command, an entire pipeline executes.',
    items: [
      {
        title: 'Command-Driven Automation',
        description:
          'Every repeatable workflow is a skill. Meeting prep, code deployment, CNC validation, client follow-up — all triggered with a single command.',
        details: [
          '/commit — Smart versioning with conventional commits',
          '/review-pr — Full code review pipeline',
          '/brainstorm — Structured ideation with convergence',
          '/youtube-analysis — Meeting transcript extraction',
        ],
        icon: 'commands',
      },
      {
        title: 'Team Blueprints',
        description:
          'Pre-configured agent teams for common scenarios. Full-stack team for features. EFSJ-ops team for manufacturing. Strategic command for decisions.',
        details: [
          'full-stack: developer + auditor + QA',
          'efsj-ops: manufacturing expert + ERP specialist',
          'product-launch: 3+ auditors + growth agent',
          'rapid-prototype: one session, ship fast',
        ],
        icon: 'teams',
      },
      {
        title: 'Self-Improving System',
        description:
          'Every agent reports friction, missing context, and suggestions after completing work. The system gets better with every task.',
        details: [
          'FRICTION reports identify bottlenecks',
          'MISSING_CONTEXT feeds better prompts',
          'SUGGESTION drives architecture evolution',
          'Fleet memory persists across sessions',
        ],
        icon: 'improve',
      },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Production Infrastructure',
    description:
      'The backbone: meeting analysis, CRM intelligence, automated deployments, and continuous monitoring.',
    items: [
      {
        title: 'Meeting Intelligence Pipeline',
        description:
          'Every meeting is automatically transcribed, analyzed, and turned into action items routed to the right agent or team member.',
        details: [
          'Fireflies.ai transcription integration',
          'Automatic action item extraction',
          'Decision logging with context',
          'Follow-up task creation and routing',
        ],
        icon: 'meetings',
      },
      {
        title: 'Relationship Intelligence',
        description:
          'Automated CRM that tracks interactions, surfaces relationship context before meetings, and ensures no follow-up falls through the cracks.',
        details: [
          'Contact interaction timeline',
          'Pre-meeting context briefings',
          'Automated follow-up reminders',
          'Relationship health scoring',
        ],
        icon: 'crm',
      },
      {
        title: 'Deployment Pipeline',
        description:
          'Code goes from branch to production with automated testing, PR creation, and deployment monitoring. Railway + Vercel infrastructure.',
        details: [
          'Git-based workflow with conventional commits',
          'Automated PR creation with test instructions',
          'Railway deployment with monitoring',
          'Vercel preview deployments for review',
        ],
        icon: 'deploy',
      },
    ],
  },
];

export const philosophy = [
  {
    principle: 'Understanding before automation',
    explanation:
      'I never automate what I don\'t deeply understand first. Every AI system starts with weeks of manual observation and documentation.',
  },
  {
    principle: 'Energy over efficiency',
    explanation:
      'The goal isn\'t to do things faster. It\'s to free human energy for work that matters. Efficiency without purpose is just faster waste.',
  },
  {
    principle: 'Progressive trust',
    explanation:
      'AI systems earn responsibility over time. Start with suggestions, graduate to drafts, eventually autonomous execution. Never skip steps.',
  },
  {
    principle: 'Transparent reasoning',
    explanation:
      'Every AI recommendation comes with its reasoning. No black boxes. If a system can\'t explain why, it doesn\'t get to decide.',
  },
];
