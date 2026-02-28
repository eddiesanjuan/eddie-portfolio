'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { stackSections, philosophy } from '@/data/stack';

const iconMap: Record<string, ReactNode> = {
  erp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <line x1="8" y1="9" x2="8" y2="21" />
      <line x1="16" y1="9" x2="16" y2="21" />
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  custom: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  orchestrator: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="4" cy="12" r="2" />
      <line x1="12" y1="9" x2="12" y2="6" />
      <line x1="15" y1="12" x2="18" y2="12" />
      <line x1="12" y1="15" x2="12" y2="18" />
      <line x1="9" y1="12" x2="6" y2="12" />
    </svg>
  ),
  agents: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  parallel: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <polyline points="16,3 20,6 16,9" />
      <polyline points="16,9 20,12 16,15" />
      <polyline points="16,15 20,18 16,21" />
    </svg>
  ),
  commands: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="4,17 10,11 4,5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  teams: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="3" />
      <circle cx="5" cy="17" r="2.5" />
      <circle cx="19" cy="17" r="2.5" />
      <line x1="12" y1="10" x2="5" y2="14.5" />
      <line x1="12" y1="10" x2="19" y2="14.5" />
    </svg>
  ),
  improve: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  meetings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    </svg>
  ),
  crm: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  deploy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16,16 12,12 8,16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
    </svg>
  ),
};

export default function StackPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionLabel label="The Stack" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            How I actually
            <br />
            <span className="gradient-text">built all of this.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            This isn&apos;t a pitch deck. This is the real infrastructure behind
            every transformation at E.F. San Juan. Agent fleets, automated
            workflows, and production systems that ship every day.
          </p>
        </FadeIn>
      </div>

      {/* Architecture diagram */}
      <div className="mx-auto max-w-6xl px-6 mt-16">
        <FadeIn>
          <div className="relative rounded-xl border border-border bg-card overflow-hidden p-6 md:p-10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                agent-fleet-architecture
              </span>
            </div>

            {/* ASCII-style architecture */}
            <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
              <div className="text-muted/60 mb-4">
                {'// The orchestrator never writes code. It routes.'}
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-lg border border-accent/40 bg-accent/5 text-accent"
                >
                  Orchestrator
                </motion.div>

                <div className="text-muted/40">|</div>
                <div className="flex items-center gap-1 text-muted/40">
                  <span>-----</span>
                  <span>+</span>
                  <span>-----</span>
                  <span>+</span>
                  <span>-----</span>
                  <span>+</span>
                  <span>-----</span>
                </div>
                <div className="text-muted/40">|{'           '}|{'           '}|{'           '}|</div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                  {['Developer', 'QA Agent', 'Auditor', 'ERP Specialist'].map(
                    (agent, i) => (
                      <motion.div
                        key={agent}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="px-3 py-2 rounded-lg border border-border bg-card-hover text-foreground text-center"
                      >
                        {agent}
                      </motion.div>
                    )
                  )}
                </div>

                <div className="text-muted/40 mt-2">|{'           '}|{'           '}|{'           '}|</div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                  {['Code', 'Tests', 'Review', 'Data'].map((output, i) => (
                    <motion.div
                      key={output}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="px-3 py-2 rounded-lg border border-border/50 text-muted text-center"
                    >
                      {output}
                    </motion.div>
                  ))}
                </div>

                <div className="text-muted/40 mt-2">|</div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-2 rounded-lg border border-green-500/40 bg-green-500/5 text-green-400"
                >
                  Production
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Stack sections */}
      {stackSections.map((section, sectionIdx) => (
        <section
          key={section.id}
          id={section.id}
          className="mt-24 md:mt-32"
        >
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <SectionLabel label={`0${sectionIdx + 1}`} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {section.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-3 text-muted max-w-2xl leading-relaxed">
                {section.description}
              </p>
            </FadeIn>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors h-full flex flex-col">
                    <div className="text-accent mb-4">
                      {iconMap[item.icon] || (
                        <div className="w-6 h-6 rounded bg-accent/20" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {item.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-muted/80"
                        >
                          <span className="text-accent mt-0.5 shrink-0">
                            &bull;
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Philosophy */}
      <section className="mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionLabel label="Philosophy" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Principles, not just tools.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-3 text-muted max-w-2xl leading-relaxed">
              The tech doesn&apos;t matter if the thinking behind it is wrong.
              These are the principles that guide every system I build.
            </p>
          </FadeIn>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <FadeIn key={item.principle} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.principle}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="mt-24 md:mt-32 border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              By the numbers.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Specialized AI agents' },
              { value: '80+', label: 'Automated workflows' },
              { value: '5', label: 'Agent team blueprints' },
              { value: '24/7', label: 'Autonomous operations' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
