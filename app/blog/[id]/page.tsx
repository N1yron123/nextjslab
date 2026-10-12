import Link from 'next/link';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Пост №{id}</h1>
      <p>Это отдельная страница поста с номером {id}.</p>
      <p><Link href={`/blog/${id}/comments/5`}>Посмотреть комментарий 5</Link></p>
      <p><Link href="/blog">Назад к списку</Link></p>
    </div>
  );
}
