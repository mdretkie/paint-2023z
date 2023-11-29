'use client';

import { twMerge } from 'tailwind-merge';
import { useSearchParams } from 'next/navigation';
import Logo from './Logo';

interface Links {
  links: string[];
}

export default function Sidebar({ links }: Links) {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const sideMenuSpaces = ['', ...links, '', '', ''];
  return (
    <div className="md:hidden">
      {sideMenuSpaces.map((linkName, index) => {
        return (
          <div
            key={index}
            className={twMerge(
              'fixed top-0 flex flex-col justify-center pl-4 h-[12.5%] w-2/3 transition-all ease-in-out duration-300 text-zinc-50 text-xl font-bold',
              showSidebar ? 'left-1/3' : 'left-full'
            )}
            style={{
              top: `${12.5 * index}%`,
              transitionDelay: `${
                showSidebar
                  ? 100 * index - index * 25
                  : 100 * (8 - index) - (8 - index) * 25
              }ms`,
              backgroundColor: `hsl(${15 + index * 5}, 91%, 53%)`,
            }}
          >
            {index == 0 ? <Logo inSidebar={true} /> : linkName}
          </div>
        );
      })}
    </div>
  );
}
