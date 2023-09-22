import type { Metadata } from 'next';

import { montserrat, poppins } from '@/app/fonts';

import { Header, Footer } from '@/components/common';

import './globals.css';

export const metadata: Metadata = {
  title: { default: '연지 기술 블로그', template: '%s | YooBlog' },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${montserrat.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
