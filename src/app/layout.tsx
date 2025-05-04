// src/app/layout.tsx
import '@/globals.css'; // your global styles
import './styles/cursor.css'; // cursor styles
import { ReactNode } from 'react';
import ClientLayout from './components/ClientLayout';
import { Nunito_Sans, Poppins, Inter, Montserrat } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Innovation Cell NIT Raipur',
  description: 'Innovating for a better future',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${poppins.variable} ${inter.variable} ${montserrat.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
