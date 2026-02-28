import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-3 text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center mt-6 text-sm font-mono text-accent hover:text-accent-hover transition-colors"
        >
          &larr; Back home
        </Link>
      </div>
    </div>
  );
}
