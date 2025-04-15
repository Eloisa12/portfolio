import type { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export const initialState = {
  darkmode: typeof window !== "undefined" ? window.localStorage.getItem('darkmode') : false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkmode = localStorage.getItem("darkmode");
  if (darkmode == null)
    return (
      <html lang="en">
        <body className='h-dvh bg-linear-to-b from-purple-200 to-pink-400  bg-no-repeat'>{children}</body>
      </html>
    );
  else (darkmode == "on")
    return (
      <html lang="en">
        <body className='h-dvh bg-linear-to-b from-purple-950 to-blue-800 bg-no-repeat'>{children}</body>
      </html>
    );
}
