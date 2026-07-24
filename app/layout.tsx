import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Moon Property',
  description: 'Pune\'s premier real estate platform for buying, selling, and renting flats.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans text-slate-800 bg-slate-50 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
