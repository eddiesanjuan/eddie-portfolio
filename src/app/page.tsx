'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { caseStudies } from '@/data/case-studies';

const stats = [
  { value: '50', suffix: ' yrs', label: 'of craftsmanship' },
  { value: '30', suffix: '+', label: 'production tools deployed' },
  { value: '20', suffix: '+', label: 'AI-integrated systems' },
  { value: '1', suffix: '', label: 'connected brain' },
];

const erpStudy = caseStudies.find((s) => s.featured);
const systemStudies = caseStudies.filter((s) => !s.featured);

const connectedBrainFlows = [
  {
    trigger: 'When the Pricing Engine updates a cost,',
    result: 'the Takeoff system knows.',
  },
  {
    trigger: 'When DocIntake extracts a specification,',
    result: 'Engineering can see it.',
  },
  {
    trigger: 'When Timber detects a price movement,',
    result: 'Procurement gets alerted.',
  },
  {
    trigger: 'When a work order is created,',
    result: 'every downstream system is ready.',
  },
  {
    trigger: 'When Smart Dispatch assigns a job,',
    result: 'the craftsman claims it from the kiosk.',
  },
  {
    trigger: 'When Quality Gate flags a defect,',
    result: 'the WO Engine adjusts the build sequence.',
  },
  {
    trigger: 'When the CRM surfaces a follow-up risk,',
    result: 'the sales rep gets a proactive nudge.',
  },
  {
    trigger: 'When Nerve Center detects a bottleneck,',
    result: 'every department sees the impact in real time.',
  },
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl">
              What happens when a{' '}
              <span className="gradient-text">50-year-old manufacturer</span>
              <br />
              decides to build the future.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              E.F. San Juan has been building luxury custom millwork since 1976.
              Now every department — from the shop floor to the front office — runs
              on custom AI systems built from the ground up.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                See the systems
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
                How it&apos;s built
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

      {/* Build Velocity */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="Build velocity" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              One operations manager.
              <br />
              <span className="text-muted">An AI agent fleet. This output.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '30+', label: 'Production tools deployed', detail: 'All custom-built, all in production' },
                { value: '10', label: 'Tools shipped in one night', detail: 'Single overnight build marathon' },
                { value: '34', label: 'EFSJ GitHub repositories', detail: 'Every line of code owned' },
                { value: '8', label: 'Departments connected', detail: 'Sales through installation' },
              ].map((stat, i) => (
                <FadeIn key={stat.label} delay={0.25 + i * 0.08}>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-3xl md:text-4xl font-bold tracking-tight text-accent">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                    <p className="mt-1 text-xs text-muted">{stat.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Transformation Story */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The transformation" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              Every piece is unique. No two jobs are alike.
              <br />
              <span className="text-muted">For 50 years, the knowledge lived in people&apos;s heads.</span>
            </h2>
          </FadeIn>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-muted leading-relaxed">
                  E.F. San Juan is a luxury custom millwork manufacturer. Custom
                  staircases, radius moldings, hand-finished cabinetry — the kind of
                  work that still requires master craftsmen. Every project is a
                  prototype. The institutional knowledge lived in people&apos;s heads,
                  the processes lived on paper, and the data lived in spreadsheets.
                </p>
                <p className="text-muted leading-relaxed">
                  Estimating took weeks. Shop floor workers hunted across three
                  disconnected systems. Project managers spent more time on data entry
                  than managing projects. When a senior craftsman retired, decades of
                  hard-won knowledge walked out the door.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <p className="text-muted leading-relaxed">
                  In 2025, that changed. Not with consultants. Not with enterprise
                  software. Senior leadership started building. Custom tools for every department.
                  AI integrations that actually understand millwork. An ERP designed
                  from first principles for custom manufacturing.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  The result: 30+ production tools. 20+ AI-integrated systems. One
                  connected intelligence that gets smarter with every job.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured: The ERP */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The centerpiece" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              The operating system
              <br />
              <span className="gradient-text">for custom manufacturing.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-muted max-w-2xl leading-relaxed">
              A full custom ERP built from first principles — because nobody makes
              software for a company where every product is a prototype. Not
              off-the-shelf. Not bent into shape. Built in-house, department by
              department, workflow by workflow.
            </p>
          </FadeIn>

          {erpStudy && (
            <FadeIn delay={0.3}>
              <Link href={`/case-studies/${erpStudy.slug}`}>
                <div className="mt-10 p-6 md:p-8 rounded-xl border border-accent/30 bg-card hover:bg-card-hover transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-mono text-accent">Full Custom ERP</span>
                    <span className="text-xs text-muted/40">/</span>
                    <span className="text-xs text-muted/60">8 departments</span>
                    <span className="text-xs text-muted/40">/</span>
                    <span className="text-xs text-muted/60">10 AI integrations</span>
                  </div>

                  {/* Department grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {['Sales/CRM', 'Estimating', 'Engineering', 'Production', 'CNC', 'Procurement', 'Finishing', 'Maintenance'].map((dept) => (
                      <div key={dept} className="px-3 py-2 rounded-lg border border-border bg-background/50 text-center">
                        <span className="text-xs font-mono text-muted">{dept}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted leading-relaxed max-w-xl">
                        Every piece of lumber tracked from arrival to installation. AI
                        copilots at every decision point. Voice AI on the shop floor. One
                        system that replaced paper work orders, disconnected databases,
                        and tribal knowledge.
                      </p>
                    </div>
                    <span className="text-sm font-mono text-accent group-hover:text-accent-hover transition-colors shrink-0">
                      Read the full story &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}
        </div>
      </section>

      {/* The Systems Grid */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The systems" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
                Every department. Every process.
                <br />
                <span className="text-muted">Custom-built. In production.</span>
              </h2>
              <Link
                href="/case-studies"
                className="text-sm text-accent hover:text-accent-hover transition-colors font-mono"
              >
                View all case studies &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemStudies.map((study, i) => (
              <FadeIn key={study.slug} delay={i * 0.08}>
                <Link href={`/case-studies/${study.slug}`}>
                  <article className="group relative p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all duration-300 hover:border-accent/30 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent">
                        {study.category}
                      </span>
                      {study.status !== 'live' && (
                        <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/10 text-muted">
                          {study.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">
                      {study.subtitle}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold">
                          {study.heroStat.value}
                        </p>
                        <p className="text-xs text-muted mt-0.5">
                          {study.heroStat.label}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Connected Brain */}
      <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="The connected brain" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
              Not a collection of apps.
              <br />
              <span className="gradient-text">One intelligence.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-muted max-w-2xl leading-relaxed">
              Every system on this page feeds into the next. Data flows across
              departments without re-entry, without phone calls, without someone
              remembering to update a spreadsheet.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 max-w-2xl space-y-0">
              {connectedBrainFlows.map((flow, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                  className="flex items-start gap-4 py-4 border-b border-border/50 last:border-b-0"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <p className="text-base leading-relaxed">
                    <span className="text-muted">{flow.trigger}</span>{' '}
                    <span className="text-foreground font-medium">{flow.result}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-10 text-sm text-muted/70 font-mono max-w-xl">
              This isn&apos;t integration for integration&apos;s sake. Every connection
              exists because someone used to pick up the phone, walk across the shop,
              or re-enter data by hand. Now the system just knows.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <Link
              href="/stack"
              className="inline-flex items-center mt-8 text-sm font-mono text-accent hover:text-accent-hover transition-colors"
            >
              See the architecture &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Want to see what this looks like
              <br />
              for your business?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-muted max-w-xl mx-auto leading-relaxed">
              Every system shown here is in production. This isn&apos;t a pitch deck.
              Whether you&apos;re exploring AI for manufacturing, building custom tools,
              or just want to understand what&apos;s actually possible — let&apos;s talk.
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
