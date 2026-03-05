'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import { stackSections, philosophy } from '@/data/stack';

const iconMap: Record<string, ReactNode> = {
  brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 002 2h4a2 2 0 002-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7z" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
      <path d="M9 9c0-1 .6-2 1.5-2.5M15 9c0-1-.6-2-1.5-2.5" />
      <line x1="12" y1="2" x2="12" y2="6" />
    </svg>
  ),
  flywheel: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3c3 2 5 5 5 9" />
      <path d="M12 21c-3-2-5-5-5-9" />
      <path d="M3 12c2-3 5-5 9-5" />
      <path d="M21 12c-2 3-5 5-9 5" />
    </svg>
  ),
  compound: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  ),
  factory: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20" />
      <path d="M6 20V10l4 3V10l4 3V4h4v16" />
      <path d="M22 20V8l-4 3" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 2,7 12,12 22,7" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  ),
  operations: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  vision: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  microphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  sparkles: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2.09 6.26L20 9.27l-4.91 3.82L16.18 20 12 16.77 7.82 20l1.09-6.91L4 9.27l5.91-1.01L12 2z" />
      <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3z" />
      <path d="M19 17l.5 1.5L21 19l-1.5.5L19 21l-.5-1.5L17 19l1.5-.5L19 17z" />
    </svg>
  ),
  terminal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="4,17 10,11 4,5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z" />
      <path d="M9 12H4s.55-3.03 2-4.5" />
      <path d="M12 15v5s3.03-.55 4.5-2" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
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
            One connected brain.
            <br />
            <span className="gradient-text">Not sixteen separate tools.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            16+ production tools operating as a single interconnected intelligence
            system. Every job makes the system smarter. Every tool talks to every
            other tool. This is the technology that transformed a 50-year-old
            millwork company from the inside out.
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
                connected-brain-architecture
              </span>
            </div>

            {/* Connected Brain Architecture */}
            <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
              <div className="text-muted/60 mb-4">
                {'// Every tool connected. Every job makes the system smarter.'}
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                {/* The Connected Brain label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-lg border border-accent/40 bg-accent/5 text-accent font-semibold tracking-wide"
                >
                  THE CONNECTED BRAIN
                </motion.div>

                <div className="text-muted/40 text-lg">|</div>

                {/* Tier 1: Core systems */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                  {['Takeoff', 'Pricing', 'ERP', 'Timber'].map(
                    (tool, i) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="px-3 py-2 rounded-lg border border-border bg-card-hover text-foreground text-center"
                      >
                        {tool}
                      </motion.div>
                    )
                  )}
                </div>

                {/* Connectors */}
                <div className="flex items-center gap-1 text-muted/40">
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                </div>

                {/* Tier 2: AI Tools */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                  {['DocIntake', 'VoxShop', 'Maintain', 'CNC Val'].map(
                    (tool, i) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="px-3 py-2 rounded-lg border border-accent/15 bg-accent/5 text-foreground text-center"
                      >
                        {tool}
                      </motion.div>
                    )
                  )}
                </div>

                {/* Connectors */}
                <div className="flex items-center gap-1 text-muted/40">
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                  <span>{'<-->'}</span>
                </div>

                {/* Tier 3: Intelligence layers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                  {['Drawing Intel', 'Craft Brain', 'Prod Brain', 'WO Composer'].map(
                    (tool, i) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="px-3 py-2 rounded-lg border border-border/50 text-muted text-center"
                      >
                        {tool}
                      </motion.div>
                    )
                  )}
                </div>

                <div className="text-muted/40 mt-2">|</div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-2 rounded-lg border border-green-500/40 bg-green-500/5 text-green-400"
                >
                  Every job compounds the intelligence
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
              { value: '16+', label: 'Production Tools' },
              { value: '12', label: 'AI-Integrated Systems' },
              { value: '1', label: 'Connected Brain' },
              { value: '24/7', label: 'Autonomous Operations' },
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
