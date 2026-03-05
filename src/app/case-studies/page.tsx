'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { caseStudies, type CaseStudy } from '@/data/case-studies';

/* ------------------------------------------------------------------ */
/*  Category groupings for the non-featured case studies               */
/* ------------------------------------------------------------------ */

interface CategoryGroup {
  label: string;
  description: string;
  slugs: string[];
}

const categoryGroups: CategoryGroup[] = [
  {
    label: 'Estimating & Preconstruction',
    description:
      'From paper drawings to priced proposals. Every measurement digital, every cost atom visible, every document classified.',
    slugs: ['takeoff', 'pricing-engine', 'doc-intake', 'drawing-intelligence'],
  },
  {
    label: 'Shop Floor Intelligence',
    description:
      'Voice-first AI, G-code validation, and real-time production visibility. The factory floor became a sensor network.',
    slugs: ['voxshop', 'cnc-validator', 'production-brain'],
  },
  {
    label: 'Operations & Production',
    description:
      'Work order creation collapsed from 45 minutes to 3. Every WO type handled, every format imported.',
    slugs: ['cab-wo-composer'],
  },
  {
    label: 'Equipment & Maintenance',
    description:
      'Every machine tracked. Every PM scheduled. Breakdowns predicted before they cascade through the schedule.',
    slugs: ['maintain'],
  },
  {
    label: 'Procurement & Supply Chain',
    description:
      'Real-time lumber markets, futures tracking, tariff monitoring. Material costs move daily. Now we see them move.',
    slugs: ['timber'],
  },
  {
    label: 'Knowledge & Expertise',
    description:
      '50 years of institutional mastery — species, adhesives, joinery, finishing — captured before it retires.',
    slugs: ['craft-brain'],
  },
];

/* ------------------------------------------------------------------ */
/*  Status badge component                                             */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: CaseStudy['status'] }) {
  const styles: Record<string, string> = {
    live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'in-progress':
      'bg-amber-500/10 text-amber-400 border-amber-500/20',
    planned: 'bg-muted/10 text-muted border-border',
  };
  const labels: Record<string, string> = {
    live: 'Live',
    'in-progress': 'In Progress',
    planned: 'Planned',
  };
  return (
    <span
      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual case study card                                         */
/* ------------------------------------------------------------------ */

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <FadeIn delay={0.05 + index * 0.06}>
      <Link href={`/case-studies/${study.slug}`}>
        <article className="group relative h-full p-5 md:p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent/30 transition-all duration-300">
          {/* Top row: category + status */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted">
              {study.year}
            </span>
            <StatusBadge status={study.status} />
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
            {study.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
            {study.subtitle}
          </p>

          {/* Hero stat */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl md:text-3xl font-bold tracking-tight">
                  {study.heroStat.value}
                </p>
                <p className="text-[11px] text-muted mt-0.5">
                  {study.heroStat.label}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
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
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  const featured = caseStudies.find((s) => s.featured);
  const studyMap = new Map(caseStudies.map((s) => [s.slug, s]));

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* -------------------------------------------------------- */}
        {/*  Page header                                              */}
        {/* -------------------------------------------------------- */}
        <FadeIn>
          <SectionLabel label="The Systems" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Twelve systems.
            <br />
            <span className="text-muted">One connected brain.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            One company. Every department. Each tool built from first principles
            for custom manufacturing — no off-the-shelf software bent into
            shape. The ERP is the backbone. Everything else plugs into it.
          </p>
        </FadeIn>

        {/* System count bar */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">12</span>
              <span className="text-xs text-muted font-mono uppercase tracking-wider">
                Systems Built
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">8</span>
              <span className="text-xs text-muted font-mono uppercase tracking-wider">
                Departments Connected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">6</span>
              <span className="text-xs text-muted font-mono uppercase tracking-wider">
                AI Copilots Embedded
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">0</span>
              <span className="text-xs text-muted font-mono uppercase tracking-wider">
                Off-the-Shelf Tools
              </span>
            </div>
          </div>
        </FadeIn>

        {/* -------------------------------------------------------- */}
        {/*  Featured ERP card                                        */}
        {/* -------------------------------------------------------- */}
        {featured && (
          <FadeIn delay={0.25}>
            <Link href={`/case-studies/${featured.slug}`}>
              <article className="group relative mt-14 rounded-xl border border-accent/30 bg-card hover:bg-card-hover transition-all duration-300 overflow-hidden">
                {/* Accent gradient line at top */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

                <div className="p-6 md:p-8 lg:p-10">
                  {/* Labels row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      The Backbone
                    </span>
                    <span className="text-xs font-mono text-muted">
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted/40">/</span>
                    <span className="text-xs text-muted/60">
                      {featured.year}
                    </span>
                    <StatusBadge status={featured.status} />
                  </div>

                  {/* Title + subtitle */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors max-w-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
                    {featured.subtitle}
                  </p>

                  {/* Stats grid */}
                  {featured.heroStats && (
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {featured.heroStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="px-4 py-3 rounded-lg border border-border bg-background/50"
                        >
                          <p className="text-xl md:text-2xl font-bold">
                            {stat.value}
                          </p>
                          <p className="text-[11px] text-muted mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                      <div className="px-4 py-3 rounded-lg border border-border bg-background/50">
                        <p className="text-xl md:text-2xl font-bold">0</p>
                        <p className="text-[11px] text-muted mt-1">
                          Paper work orders remaining
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tech stack + CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {featured.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 rounded-md bg-border/50 text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {featured.techStack.length > 6 && (
                        <span className="text-xs font-mono px-2 py-1 rounded-md bg-border/50 text-muted">
                          +{featured.techStack.length - 6} more
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-mono text-accent group-hover:text-accent-hover transition-colors whitespace-nowrap">
                      Read the full story &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </FadeIn>
        )}

        {/* -------------------------------------------------------- */}
        {/*  Section divider                                          */}
        {/* -------------------------------------------------------- */}
        <FadeIn delay={0.3}>
          <div className="mt-20 mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono text-muted/60 uppercase tracking-wider">
              Every Department. Its Own System.
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </FadeIn>

        {/* -------------------------------------------------------- */}
        {/*  Category groups                                          */}
        {/* -------------------------------------------------------- */}
        <div className="space-y-16 mt-12">
          {categoryGroups.map((group, groupIndex) => {
            const studies = group.slugs
              .map((slug) => studyMap.get(slug))
              .filter(Boolean) as CaseStudy[];

            if (studies.length === 0) return null;

            // Determine grid columns based on count
            const gridCols =
              studies.length === 1
                ? 'grid-cols-1 max-w-lg'
                : studies.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : studies.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

            return (
              <motion.section
                key={group.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                {/* Group header */}
                <FadeIn delay={0.05}>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                        {group.label}
                      </h2>
                      <span className="text-xs font-mono text-muted/50 bg-border/50 px-2 py-0.5 rounded-full">
                        {studies.length}{' '}
                        {studies.length === 1 ? 'system' : 'systems'}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed max-w-2xl">
                      {group.description}
                    </p>
                  </div>
                </FadeIn>

                {/* Cards grid */}
                <div className={`grid ${gridCols} gap-4`}>
                  {studies.map((study, i) => (
                    <CaseStudyCard
                      key={study.slug}
                      study={study}
                      index={groupIndex * 2 + i}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Bottom summary                                           */}
        {/* -------------------------------------------------------- */}
        <FadeIn delay={0.1}>
          <div className="mt-24 pt-12 border-t border-border">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Not a dashboard.
                  <br />
                  <span className="text-muted">An operating system.</span>
                </h2>
                <p className="mt-4 text-sm text-muted leading-relaxed max-w-md">
                  Every tool on this page is a module in a single, unified
                  system. They share data, enforce consistency, and compound
                  each other&apos;s value. This is what happens when you build
                  software for one company, one shop floor, one way of working
                  — and you get every detail right.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: 'Airtable + Supabase',
                    label: 'Shared data backbone',
                  },
                  {
                    value: 'Claude API',
                    label: 'AI woven into every workflow',
                  },
                  {
                    value: 'Rust + TypeScript',
                    label: 'Performance where it matters',
                  },
                  {
                    value: 'Railway + Vercel',
                    label: 'Deployed and running daily',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-lg border border-border bg-card"
                  >
                    <p className="text-sm font-semibold">{item.value}</p>
                    <p className="text-[11px] text-muted mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
