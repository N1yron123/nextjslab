'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export default function BlogTemplate({ children }: { children: ReactNode }) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('BlogTemplate создан заново');
  }, []);

  return (
    <div>
      <p>Поле из template.tsx (очищается при переходе):</p>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Напиши что-нибудь" />
      {children}
    </div>
  );
}
