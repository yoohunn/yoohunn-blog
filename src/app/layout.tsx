import type { Metadata } from 'next';

import { montserrat } from '@/app/fonts';
import './globals.css';
import { Header } from '@/components/common';

export const metadata: Metadata = {
  title: { default: '연지 기술 블로그', template: '%s | Yoohunn' },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={montserrat.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
