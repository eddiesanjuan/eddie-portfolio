'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { caseStudies, type CaseStudy } from '@/data/case-studies';

interface CaseStudyClientProps {
  study: CaseStudy;
}

function StatusBadge({ status }: { status: CaseStudy['status'] }) {
  const config = {
    live: { label: 'LIVE', bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500' },
    'in-progress': { label: 'IN PROGRESS', bg: 'bg-amber-500/10', text: 'text-amber-400', dot: 'bg-amber-500' },
    planned: { label: 'PLANNED', bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-500' },
  };
  const c = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}

export default function CaseStudyClient({ study }: CaseStudyClientProps) {
  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <article className="pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors font-mono mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All case studies
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono text-accent">{study.category}</span>
            <span className="text-xs text-muted/40">/</span>
            <span className="text-xs text-muted/60">{study.year}</span>
            <StatusBadge status={study.status} />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {study.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
            {study.subtitle}
          </p>
        </FadeIn>

        {/* Hero stats */}
        <FadeIn delay={0.3}>
          {study.heroStats && study.heroStats.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {study.heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <p className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-10 p-6 rounded-xl border border-border bg-card inline-block">
              <p className="text-4xl md:text-5xl font-bold gradient-text">
                {study.heroStat.value}
              </p>
              <p className="text-sm text-muted mt-1">{study.heroStat.label}</p>
            </div>
          )}
        </FadeIn>
      </div>

      {/* Problem */}
      <div className="mx-auto max-w-4xl px-6 mt-20">
        <FadeIn>
          <SectionLabel label="The Problem" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-muted leading-relaxed">{study.problem}</p>
        </FadeIn>
      </div>

      {/* Before / After */}
      <div className="mx-auto max-w-4xl px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Old way */}
          <FadeIn>
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-sm font-mono text-red-400/80">
                  Before
                </span>
              </div>
              <ul className="space-y-4">
                {study.oldWay.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-red-400/60 mt-0.5 shrink-0">&times;</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* New way */}
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="text-sm font-mono text-green-400/80">
                  After
                </span>
              </div>
              <ul className="space-y-4">
                {study.newWay.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-green-400/60 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Impact */}
      <div className="mx-auto max-w-4xl px-6 mt-20">
        <FadeIn>
          <SectionLabel label="Impact" />
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {study.impact.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="p-5 rounded-xl border border-border bg-card">
                <p className="text-2xl font-bold">{item.metric}</p>
                <p className="text-sm text-muted mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Quote */}
      {study.quote && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <blockquote className="relative pl-6 border-l-2 border-accent">
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                &ldquo;{study.quote}&rdquo;
              </p>
              <cite className="block mt-4 text-sm text-muted not-italic">
                -- Eddie San Juan
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      )}

      {/* ERP Deep-dive sections (only for featured/ERP study) */}
      {study.vision && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="The Vision" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted leading-relaxed">{study.vision}</p>
          </FadeIn>
        </div>
      )}

      {study.whyCustom && study.whyCustom.length > 0 && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="Why Custom" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Why we couldn&apos;t buy this off the shelf.
            </h3>
          </FadeIn>
          <ul className="space-y-4">
            {study.whyCustom.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-sm text-muted leading-relaxed"
              >
                <span className="text-accent mt-0.5 shrink-0 font-bold">{String(i + 1).padStart(2, '0')}</span>
                {reason}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {study.scope && study.scope.length > 0 && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="The Scope" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Every department. One system.
            </h3>
            <p className="text-sm text-muted mb-8">
              Not separate modules stitched together. One continuous flow from sales lead to installed product.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.scope.map((dept, i) => (
              <FadeIn key={dept.department} delay={i * 0.06}>
                <div className="p-5 rounded-xl border border-border bg-card h-full">
                  <p className="text-sm font-mono text-accent mb-2">{dept.department}</p>
                  <p className="text-sm text-muted leading-relaxed">{dept.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {study.aiIntegration && study.aiIntegration.length > 0 && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="AI Integration" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              AI helpers at every decision point.
            </h3>
            <p className="text-sm text-muted mb-8">
              Not bolted on. Not a chatbot in the corner. Integrated into the workflow so deeply
              you forget it&apos;s AI — it&apos;s just how the system works.
            </p>
          </FadeIn>
          <div className="space-y-4">
            {study.aiIntegration.map((ai, i) => (
              <FadeIn key={ai.name} delay={i * 0.06}>
                <div className="p-5 rounded-xl border border-accent/15 bg-accent/5">
                  <p className="text-sm font-semibold text-foreground mb-1">{ai.name}</p>
                  <p className="text-sm text-muted leading-relaxed">{ai.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {study.scale && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="The Scale" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="p-6 md:p-8 rounded-xl border border-border bg-card">
              <p className="text-lg text-foreground leading-relaxed font-light">{study.scale}</p>
            </div>
          </FadeIn>
        </div>
      )}

      {study.team && study.team.length > 0 && (
        <div className="mx-auto max-w-4xl px-6 mt-20">
          <FadeIn>
            <SectionLabel label="The Team" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Built in-house. Not outsourced.
            </h3>
          </FadeIn>
          <div className="space-y-4">
            {study.team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-xl border border-border bg-card">
                  <p className="text-sm font-semibold text-foreground shrink-0 sm:w-40">{member.name}</p>
                  <p className="text-sm text-muted leading-relaxed">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {/* Tech stack */}
      <div className="mx-auto max-w-4xl px-6 mt-20">
        <FadeIn>
          <SectionLabel label="Tech Stack" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mt-4">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono px-3 py-1.5 rounded-lg border border-border bg-card text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Next case study */}
      <div className="mx-auto max-w-4xl px-6 mt-24 pt-12 border-t border-border">
        <FadeIn>
          <p className="text-xs font-mono text-muted/60 uppercase tracking-wider mb-4">
            Next case study
          </p>
          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="group flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">
                {nextStudy.title}
              </h3>
              <p className="text-sm text-muted mt-1">{nextStudy.category}</p>
            </div>
            <svg
              className="w-6 h-6 text-muted group-hover:text-accent group-hover:translate-x-2 transition-all shrink-0"
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
        </FadeIn>
      </div>
    </article>
  );
}
