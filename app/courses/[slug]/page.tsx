import Link from 'next/link';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const names: Record<string, string> = {
    html: 'Основы HTML',
    css: 'Основы CSS',
    nextjs: 'Основы Next.js'
  };

  return (
    <div>
      <h1>{names[slug] || 'Курс: ' + slug}</h1>
      <p>Страница курса. Здесь будет информация и задания.</p>
      <Link href="/courses">Назад к курсам</Link>
    </div>
  );
}
