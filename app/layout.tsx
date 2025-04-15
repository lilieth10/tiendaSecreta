import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const metadata: Metadata = {
  title: 'La Tienda Secreta | Boutique Exclusiva',
  description: 'Descubre objetos únicos y misteriosos en nuestra boutique exclusiva.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${playfair.variable} ${raleway.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}