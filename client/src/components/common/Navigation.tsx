'use client';

import { useState } from 'react';
import Logo from './Logo';
import NavigationLink from './NavigationLink';
import { twMerge } from 'tailwind-merge';

const links = ['Repertuar', 'Cennik', 'Filmy', 'Zapowiedzi'];

export default function Navigation() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="w-full h-20 bg-zinc-900 flex items-center justify-between md:gap-8 md:justify-start p-4">
      <Logo />
      <div className="gap-4 hidden md:flex">
        {links.map((name, index) => {
          return <NavigationLink key={index} name={name} />;
        })}
      </div>
      <div className="md:hidden">
        <span
          className="material-symbols-outlined text-3xl text-white cursor-pointer"
          onClick={() => setShowLinks(!showLinks)}
        >
          menu
        </span>
        <div
          className={twMerge(
            showLinks ? 'max-h-full' : 'max-h-0 invisible',
            'flex flex-col items-center absolute top-20 left-0 bg-zinc-900 w-full transition-all duration-500 ease-in-out overflow-hidden'
          )}
        >
          {links.map((name, index) => {
            return <NavigationLink key={index} name={name} />;
          })}
        </div>
      </div>
    </div>
  );
}
