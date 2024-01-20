import React, { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl text-orange-500 font-bold mb-4">{children}</h2>
  );
}
