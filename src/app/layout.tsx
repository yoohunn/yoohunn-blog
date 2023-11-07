import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { montserrat, poppins } from '@/app/fonts';

import { Header, Footer } from '@/components/common';

import './globals.css';

export const metadata: Metadata = {
  title: { default: '연지 기술 블로그', template: '%s | YooBlog' },
  description: '고민의 과정과 그 속에서 얻은 지식을 공유하는 블로그입니다. 👋🏻',
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
        <Analytics />
      </body>
    </html>
  );
}
