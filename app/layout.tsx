import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Практическая работа Next.js',
  description: 'Страницы и маршруты Next.js'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
