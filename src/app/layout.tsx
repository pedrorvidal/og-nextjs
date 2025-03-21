import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/menu';

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Criado por Pedro Vidal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
