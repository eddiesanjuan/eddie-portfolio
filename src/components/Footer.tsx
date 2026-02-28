import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-mono text-sm text-muted tracking-wider">Eddie San Juan</p>
            <p className="text-sm text-muted mt-1">
              CEO, E.F. San Juan Inc.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-muted/60 uppercase tracking-wider">Navigate</p>
              <Link href="/case-studies" className="text-sm text-muted hover:text-foreground transition-colors">
                Case Studies
              </Link>
              <Link href="/stack" className="text-sm text-muted hover:text-foreground transition-colors">
                The Stack
              </Link>
              <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                About
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-muted/60 uppercase tracking-wider">Connect</p>
              <a
                href="https://linkedin.com/in/eddiesanjuan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:eddie@efsanjuan.com"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/60">
            E.F. San Juan Inc. — Custom Millwork Since 1976
          </p>
          <p className="text-xs text-muted/60 font-mono">
            Built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
