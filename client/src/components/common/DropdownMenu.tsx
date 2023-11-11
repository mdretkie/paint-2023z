'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import NavigationLink from './NavigationLink';
import { LogInButton } from './buttons';

interface Links {
  links: string[];
}

export default function DropdownMenu({ links }: Links) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="md:hidden">
      <span
        className="material-symbols-outlined text-3xl text-white cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? 'close' : 'menu'}
      </span>
      <div
        className={twMerge(
          showMenu ? 'max-h-full' : 'max-h-0 invisible',
          'flex flex-col items-center absolute top-20 left-0 bg-zinc-900 w-full transition-all duration-500 ease-in-out overflow-hidden'
        )}
      >
        {links.map((name, index) => {
          return <NavigationLink key={index} name={name} />;
        })}
        <LogInButton />
      </div>
    </div>
  );
}
