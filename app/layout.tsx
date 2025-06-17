import ClientClerkProvider from '@/components/providers/clerk-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import ToasterProvider from '@/components/providers/toaster-provider';
import { hindSiliguri, spaceGrotesk } from '@/constant/fonts';
import { cn } from '@/lib/utils';
import OfflineProvider from '@/providers/offline-provider';
import ReduxProvider from '@/providers/redux-provider';
import type { Metadata } from 'next';
import 'react-phone-input-2/lib/style.css';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata: Metadata = {
  title: 'Natural Sefa - Natural Health Solutions for All',
  description:
    "Discover Natural Sefa's range of health products: Methi Mix for gastric relief, Kalojira Tel for hair & wellness, Diabetes Cha, Allergy Binash, Joytuner Tel, and Arjun Heart Care. Order now for a healthier life!",
  keywords:
    'Natural Sefa, Methi Mix, Kalojira Tel, Diabetes Cha, Allergy Binash, Joytuner Tel, Arjun Heart Care, 100% natural products, natural health solutions, gastric relief, diabetes care, allergy relief, heart care, Bangladesh, natural remedies, herbal products, organic health, free delivery, gastric treatment, diabetes management, allergy cure, heart wellness, natural ingredients, health supplements',
  openGraph: {
    title: 'Natural Sefa - 100% Natural Health Products',
    description:
      "Discover Natural Sefa's range of health products: Methi Mix for gastric relief, Kalojira Tel for hair & wellness, Diabetes Cha, Allergy Binash, Joytuner Tel, and Arjun Heart Care. Order now for a healthier life!",
    url: 'https://www.naturalsefa.com',
    siteName: 'Natural Sefa',
    images: [
      {
        url: 'https://www.naturalsefa.com/images/natural-products.jpg',
        width: 800,
        height: 600,
        alt: 'Natural Sefa Natural Health Products',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('dark:bg-dark-deep bg-light overflow-x-hidden scroll-smooth antialiased', spaceGrotesk.variable, hindSiliguri.variable)}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ClientClerkProvider>
              <main className="min-h-screen overflow-x-hidden">{children}</main>
              <OfflineProvider />
              <ToasterProvider />
            </ClientClerkProvider>
          </ThemeProvider>
        </ReduxProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
