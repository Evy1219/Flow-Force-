import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Flow Force',
  description: 'Adaptive workplace management platform for modern organizations.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
