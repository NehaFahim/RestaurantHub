import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://restauranthub.example.com'),
  title: {
    default: 'RestaurantHub — Fine Dining, Delivered',
    template: '%s | RestaurantHub',
  },
  description:
    'Order gourmet dishes or reserve your table at RestaurantHub. Premium cuisine, crafted by award-winning chefs, delivered to your door.',
  keywords: [
    'restaurant',
    'fine dining',
    'food delivery',
    'table reservation',
    'gourmet',
    'chef',
  ],
  authors: [{ name: 'RestaurantHub' }],
  openGraph: {
    title: 'RestaurantHub — Fine Dining, Delivered',
    description:
      'Order gourmet dishes or reserve your table at RestaurantHub.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RestaurantHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RestaurantHub — Fine Dining, Delivered',
    description:
      'Order gourmet dishes or reserve your table at RestaurantHub.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
