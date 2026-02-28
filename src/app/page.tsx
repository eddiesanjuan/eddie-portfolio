'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { caseStudies } from '@/data/case-studies';

const stats = [
  { value: '50', suffix: ' yrs', label: 'of craftsmanship' },
  { value: '10', suffix: '+', label: 'AI agents deployed' },
  { value: '80', suffix: '+', label: 'automated workflows' },
  { value: '0', suffix: '', label: 'buzzwords used' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Gradient orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
          <FadeIn delay={0.1}>
            <p className="font-mono text-sm text-accent mb-6 tracking-wider">
              Eddie San Juan
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl">
              Turning a 50-year-old
              <br />
              millwork shop into the{' '}
              <span className="gradient-text">most advanced</span>
              <br />
              manufacturer in the country.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              CEO of E.F. San Juan Inc. I build AI systems, custom software, and
              automation infrastructure for a company where the product is still
              made by human hands.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                See the work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/stack"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card transition-colors"
              >
                How I built it
              </Link>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.7} className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold tracking-tight">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* The story */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The story" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              My family has been building custom millwork for five decades. I&apos;m making sure we build it for five more.
            </h2>
          </FadeIn>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <p className="text-muted leading-relaxed">
                E.F. San Juan builds the millwork you see in luxury homes, high-end
                commercial spaces, and architectural projects where &quot;good enough&quot;
                doesn&apos;t exist. Custom staircases, radius moldings, hand-finished
                cabinetry — the kind of work that still requires master craftsmen.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-muted leading-relaxed">
                But the industry is changing. The craftsmen who built this company
                are retiring. The complexity is increasing. The margins are
                thinning. So I&apos;m building the systems that let us keep doing
                exceptional work — AI that amplifies human skill instead of
                replacing it.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured: The ERP */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The Centerpiece" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              We&apos;re building the operating system
              <br />
              <span className="gradient-text">for modern manufacturing.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-muted max-w-2xl leading-relaxed">
              A full custom ERP with AI helpers integrated into every department.
              Not an off-the-shelf system bent into shape. Built by Eddie San Juan
              and developer Nick Akins — because nobody else makes software for a
              company where every product is a prototype.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href="/case-studies/ai-powered-erp">
              <div className="mt-10 p-6 md:p-8 rounded-xl border border-accent/30 bg-card hover:bg-card-hover transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-accent">Full Custom ERP</span>
                  <span className="text-xs text-muted/40">/</span>
                  <span className="text-xs text-muted/60">8 departments</span>
                  <span className="text-xs text-muted/40">/</span>
                  <span className="text-xs text-muted/60">6 AI integrations</span>
                </div>

                {/* Department grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {['Sales/CRM', 'Estimating', 'Engineering', 'Production', 'CNC', 'Procurement', 'Finishing', 'Delivery'].map((dept) => (
                    <div key={dept} className="px-3 py-2 rounded-lg border border-border bg-background/50 text-center">
                      <span className="text-xs font-mono text-muted">{dept}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted leading-relaxed max-w-xl">
                      Every piece of lumber tracked from arrival to installation.
                      AI copilots at every decision point. Voice AI on the shop floor.
                      One system that replaced Airtable, paper work orders, and three
                      separate databases.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-accent group-hover:text-accent-hover transition-colors shrink-0">
                    Read the full story &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Other case studies */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The Systems" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                What plugs into it.
              </h2>
              <Link
                href="/case-studies"
                className="text-sm text-accent hover:text-accent-hover transition-colors font-mono"
              >
                View all case studies &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.filter(s => !s.featured).map((study, i) => (
              <FadeIn key={study.slug} delay={i * 0.1}>
                <Link href={`/case-studies/${study.slug}`}>
                  <article className="group relative p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all duration-300 hover:border-accent/30 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono text-accent">
                        {study.category}
                      </span>
                      {study.status !== 'live' && (
                        <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {study.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {study.subtitle}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-2xl font-bold">
                        {study.heroStat.value}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {study.heroStat.label}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The approach teaser */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The approach" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              AI agents that actually ship.
              <br />
              <span className="text-muted">Not slides about AI. Not pilots. Production systems.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-muted max-w-2xl leading-relaxed">
              I run a fleet of specialized AI agents that handle everything from
              code deployment to meeting analysis to CNC validation. Each agent
              has a role. Each role has boundaries. The system improves itself
              with every task.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            {/* Terminal-style preview */}
            <div className="mt-12 max-w-2xl rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-muted font-mono">
                  orchestrator
                </span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <p className="text-muted">
                  <span className="text-accent">$</span> /deploy cnc-validator
                </p>
                <p className="text-muted/60">
                  Routing to developer agent...
                </p>
                <p className="text-muted/60">
                  Running tests... <span className="text-green-400">12/12 passed</span>
                </p>
                <p className="text-muted/60">
                  Creating PR #247... <span className="text-green-400">done</span>
                </p>
                <p className="text-muted/60">
                  QA agent verifying... <span className="text-green-400">approved</span>
                </p>
                <p className="text-muted/60">
                  Deploying to Railway... <span className="text-green-400">live</span>
                </p>
                <p className="text-foreground mt-2">
                  Deployed cnc-validator v2.4.1 in 3m 22s
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link
              href="/stack"
              className="inline-flex items-center mt-8 text-sm font-mono text-accent hover:text-accent-hover transition-colors"
            >
              See how it works &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Let&apos;s talk.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Whether you&apos;re building AI systems for manufacturing, curious about
              the agent architecture, or just want to talk shop.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:eddie@efsanjuan.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                eddie@efsanjuan.com
              </a>
              <a
                href="https://linkedin.com/in/eddiesanjuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
