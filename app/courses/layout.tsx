import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Наши курсы</h2>
      {children}
    </section>
  );
}
