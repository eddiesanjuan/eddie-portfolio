interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-accent" />
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </span>
    </div>
  );
}
