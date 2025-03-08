import type { Metadata } from 'next';
import './globals.css'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-dvh bg-linear-to-b from-purple-400 to-pink-300 bg-no-repeat'>{children}</body>
    </html>
  );
}
