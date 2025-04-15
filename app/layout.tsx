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
  const darkmode = localStorage.getItem("Darkmode");
  if (darkmode == null) {
    return (
      <html lang="en">
        <body className='h-dvh bg-linear-to-b from-purple-200 to-pink-400  bg-no-repeat'>{children}</body>
      </html>
    );
  }
  else (darkmode == "on") {
    return (
      <html lang="en">
        <body className='h-dvh bg-linear-to-b from-purple-950 to-blue-800 bg-no-repeat'>{children}</body>
      </html>
    );
  }
}
