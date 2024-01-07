import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[512px] bg-zinc-800 rounded p-8">{children}</div>
  );
}
