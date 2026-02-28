'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  const featured = caseStudies.find((s) => s.featured);
  const rest = caseStudies.filter((s) => !s.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel label="Case Studies" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            One custom ERP.
            <br />
            <span className="text-muted">Three integrated AI systems.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            The ERP is the backbone. Everything else plugs into it. Each system
            started with the same question: &quot;What if we stopped accepting
            this as normal?&quot;
          </p>
        </FadeIn>

        {/* Featured ERP card */}
        {featured && (
          <FadeIn delay={0.25}>
            <Link href={`/case-studies/${featured.slug}`}>
              <article className="group relative mt-12 p-6 md:p-8 rounded-xl border border-accent/30 bg-card hover:bg-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                    Centerpiece
                  </span>
                  <span className="text-xs font-mono text-accent">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted/40">/</span>
                  <span className="text-xs text-muted/60">
                    {featured.year}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
                  {featured.subtitle}
                </p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['8 Departments', '6 AI Helpers', 'Voice AI', 'Zero Paper'].map((tag) => (
                    <div key={tag} className="px-3 py-2 rounded-lg border border-border bg-background/50 text-center">
                      <span className="text-xs font-mono text-muted">{tag}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featured.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-border/50 text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-mono text-accent group-hover:text-accent-hover transition-colors">
                    Read the full story &rarr;
                  </span>
                </div>
              </article>
            </Link>
          </FadeIn>
        )}

        {/* Divider */}
        <FadeIn delay={0.3}>
          <div className="mt-16 mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono text-muted/60 uppercase tracking-wider">Integrated Systems</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </FadeIn>

        {/* Other case study cards */}
        <div className="space-y-6">
          {rest.map((study, i) => (
            <FadeIn key={study.slug} delay={0.3 + i * 0.08}>
              <Link href={`/case-studies/${study.slug}`}>
                <article className="group relative grid md:grid-cols-[1fr_auto] gap-6 p-6 md:p-8 rounded-xl border border-border bg-card hover:bg-card-hover transition-all duration-300 hover:border-accent/30">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-accent">
                        {study.category}
                      </span>
                      <span className="text-xs text-muted/40">/</span>
                      <span className="text-xs text-muted/60">
                        {study.year}
                      </span>
                      {study.status !== 'live' && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {study.status}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                      {study.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 rounded-md bg-border/50 text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center md:text-right md:min-w-[140px]">
                    <div>
                      <p className="text-3xl md:text-4xl font-bold">
                        {study.heroStat.value}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {study.heroStat.label}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all md:mt-4"
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
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
