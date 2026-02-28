import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eddie San Juan — Building the Future of Custom Manufacturing',
  description:
    'CEO of E.F. San Juan Inc. Transforming a 50-year-old custom millwork company into the most technologically advanced manufacturer in the country.',
  openGraph: {
    title: 'Eddie San Juan — Building the Future of Custom Manufacturing',
    description:
      'How AI, custom software, and 50 years of craftsmanship come together at E.F. San Juan.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
