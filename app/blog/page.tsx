import Link from 'next/link';

interface Post {
  id: string;
  title: string;
}

export default function BlogPage() {
  const posts: Post[] = [
    { id: '1', title: 'Мой первый сайт' },
    { id: '2', title: 'Что такое Next.js' },
    { id: '3', title: 'Как работают страницы' }
  ];

  return (
    <div>
      <h1>Блог</h1>
      <p>Список записей:</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
