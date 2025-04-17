import type {Metadata} from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import ClientSideMenu from '@/components/ClientSideMenu';

export const metadata: Metadata = {
  title: 'Martin\'s Portfolio',
  description: 'Generated by Firebase Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 bg-background z-10">
          <div className="max-w-6xl mx-auto px-4 py-2 flex justify-end items-center">
            <ClientSideMenu />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
