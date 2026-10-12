import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div>
      <h1>Курсы</h1>
      <p>Список курсов:</p>
      <ul>
        <li><Link href="/courses/html">Основы HTML</Link></li>
        <li><Link href="/courses/css">Основы CSS</Link></li>
        <li><Link href="/courses/nextjs">Основы Next.js</Link></li>
      </ul>
    </div>
  );
}
