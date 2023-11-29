import React, { SetStateAction } from 'react';
import { cn } from '../utils/utils';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SidebarButton() {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 bg-zinc-100 transition ease transform duration-300`;

  return (
    <Link
      className="flex flex-col h-full aspect-square justify-center items-center bg-zinc-800"
      href={`?sidebar=${!showSidebar}`}
    >
      <div
        className={cn(
          genericHamburgerLine,
          showSidebar ? 'rotate-45 translate-y-1.5' : ''
        )}
      />
      <div
        className={cn(genericHamburgerLine, showSidebar ? 'opacity-0' : '')}
      />
      <div
        className={cn(
          genericHamburgerLine,
          showSidebar ? '-rotate-45 -translate-y-1.5' : ''
        )}
      />
    </Link>
  );
}
