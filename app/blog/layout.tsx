import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Раздел блога</h2>
      <p>Этот блок сделан через layout.tsx и остаётся при переходах внутри блога.</p>
      {children}
    </section>
  );
}
