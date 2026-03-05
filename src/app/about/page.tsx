'use client';

import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';

const timeline = [
  {
    year: '1976',
    title: 'E.F. San Juan founded',
    description:
      'My grandfather started a custom millwork shop in San Antonio, Texas. Hand tools, local projects, one truck.',
  },
  {
    year: '2000s',
    title: 'Growth into luxury custom',
    description:
      'The company expanded into high-end residential and commercial custom millwork across the Gulf Coast region.',
  },
  {
    year: '2020',
    title: 'I took the reins',
    description:
      'Third-generation leadership. Same commitment to craft, but with a question: how do we build this to last another 50 years?',
  },
  {
    year: '2023',
    title: 'The AI transformation begins',
    description:
      'Started building custom software and AI systems to address the real bottlenecks: knowledge loss, estimation time, quality consistency.',
  },
  {
    year: '2024',
    title: 'Custom ERP goes live',
    description:
      'Replaced Airtable with a purpose-built ERP. Digital work orders, automated workflows, real-time production visibility.',
  },
  {
    year: '2025',
    title: 'Agent fleet deployed',
    description:
      'VoxShop on the shop floor. CNC Validator catching errors. Craft Brain capturing decades of expertise. The systems are running.',
  },
  {
    year: '2026',
    title: 'What comes next',
    description:
      'Autonomous CNC programming. Deeper knowledge capture. The goal: 10x the capacity without losing an ounce of craft.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <SectionLabel label="About" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Eddie San Juan
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 text-xl text-muted max-w-2xl leading-relaxed">
            Third-generation leader of E.F. San Juan Inc.
            <br />
            Building AI systems for a company that builds things by hand.
          </p>
        </FadeIn>
      </div>

      {/* Bio */}
      <div className="mx-auto max-w-4xl px-6 mt-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          {/* Photo placeholder */}
          <FadeIn>
            <div className="aspect-[3/4] rounded-xl border border-border bg-card overflow-hidden relative">
              <img
                src="/eddie-headshot.jpg"
                alt="Eddie San Juan"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I run a 50-year-old custom millwork company in San Antonio, Texas.
                We build the kind of woodwork you find in luxury homes and
                high-end commercial spaces: custom staircases, radius moldings,
                architectural panels, hand-finished cabinetry.
              </p>
              <p>
                I&apos;m also a software builder. Not the kind who talks about
                &quot;digital transformation&quot; in slide decks. The kind who writes
                code, deploys systems, and measures whether they actually work.
              </p>
              <p>
                The tension between these two identities is the interesting part.
                Manufacturing is physical, slow, and unforgiving. Software is
                abstract, fast, and endlessly revisable. Finding where they
                actually meet — not where consultants say they should meet — is
                what I spend my time on.
              </p>
              <p>
                I believe the future of American manufacturing isn&apos;t robots
                replacing craftsmen. It&apos;s AI amplifying what skilled people
                can do. Making expertise accessible, decisions faster, and
                quality more consistent — without losing the human judgment that
                makes custom work custom.
              </p>
              <p>
                Everything on this site, I built. The AI agents, the ERP, the
                shop floor voice assistant, the CNC validator. All of it with
                an in-house development team. None of it with consultants.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* What I actually do */}
      <div className="mx-auto max-w-4xl px-6 mt-24">
        <FadeIn>
          <SectionLabel label="What I do" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Two jobs. One mission.
          </h2>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.15}>
            <div className="p-6 rounded-xl border border-border bg-card h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-mono text-accent">Operator</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Running the Company
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>P&L responsibility for a multi-million dollar operation</li>
                <li>50+ employees across production, sales, and admin</li>
                <li>Client relationships with architects and GCs</li>
                <li>Strategic planning for a 50-year legacy business</li>
                <li>Culture stewardship across three generations</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-6 rounded-xl border border-border bg-card h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-mono text-accent">Builder</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Building the Systems
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>AI agent fleet architecture and deployment</li>
                <li>Custom ERP and production management software</li>
                <li>Voice AI for shop floor operations</li>
                <li>CNC toolpath validation and automation</li>
                <li>Knowledge capture and retrieval systems</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-4xl px-6 mt-24">
        <FadeIn>
          <SectionLabel label="Timeline" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            50 years of building.
          </h2>
        </FadeIn>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((event, i) => (
              <FadeIn key={event.year} delay={i * 0.05}>
                <div className="relative flex gap-6">
                  <div className="shrink-0 w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="pb-2">
                    <span className="text-sm font-mono text-accent">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-semibold mt-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mx-auto max-w-4xl px-6 mt-24 pt-12 border-t border-border">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in touch.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-muted max-w-xl leading-relaxed">
            I&apos;m always interested in talking with people who are building
            real things — especially at the intersection of AI and
            manufacturing.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:eddie@efsanjuan.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-accent transition-colors"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              eddie@efsanjuan.com
            </a>
            <a
              href="https://linkedin.com/in/eddiesanjuan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted group-hover:text-accent transition-colors"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <div className="flex items-center gap-3 text-muted">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              San Antonio, Texas
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
