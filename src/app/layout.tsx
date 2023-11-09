import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { montserrat, poppins } from '@/app/fonts';
import { Header, Footer } from '@/components/common';

import './globals.css';

export const metadata: Metadata = {
  title: { default: '연지 기술 블로그', template: '%s | YooBlog' },
  description: '고민의 과정과 그 속에서 얻은 지식을 공유하는 블로그입니다. 👋🏻',
  openGraph: {
    siteName: 'YooBlog',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/94881503/275089995-a8c1c61a-bec0-4633-94d3-31a38f55e5ee.png',
        width: 300,
        height: 300,
      },
    ],
  },
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={`${montserrat.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
