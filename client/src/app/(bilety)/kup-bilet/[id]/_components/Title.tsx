import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <div className="text-3xl font-bold text-zinc-50">{children}</div>;
}
