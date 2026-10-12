'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const path = usePathname();
  const router = useRouter();

  function styleFor(href: string) {
    const active = href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
    return { fontWeight: active ? 'bold' as const : 'normal' as const };
  }

  return (
    <nav>
      <Link href="/" style={styleFor('/')}>Главная</Link>
      <Link href="/about" style={styleFor('/about')}>О нас</Link>
      <Link href="/blog" style={styleFor('/blog')}>Блог</Link>
      <Link href="/courses" style={styleFor('/courses')}>Курсы</Link>
      <button onClick={() => router.push('/about')}>Перейти к О нас</button>
    </nav>
  );
}
