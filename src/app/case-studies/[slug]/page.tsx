import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import CaseStudyClient from './CaseStudyClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.title} — Eddie San Juan`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyClient study={study} />;
}
