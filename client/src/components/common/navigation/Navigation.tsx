'use client';

import { useSearchParams } from 'next/navigation';
import Logo from '../Logo';
import NavigationLink from './NavigationLink';
import { LogInButton, LogOutButton } from '../buttons';
import { cn } from '../../utils/utils';
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

const links = ['Repertuar', 'Cennik'];

export default function Navigation() {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/is_logged_in', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <>
      <div className="w-full bg-zinc-900">
        <div className="max-w-[1040px] m-auto h-20 flex items-center justify-between px-4 md:px-8">
          <div
            className={cn(
              'pl-4 w-full h-20 fixed flex items-center justify-between md:gap-8 transition-all ease-in-out duration-300 md:static md:pl-0 md:justify-start',
              showSidebar ? '-left-2/3' : 'left-0 delay-700'
            )}
          >
            <Logo />
            <div className="gap-4 hidden md:flex">
              {links.map((name, index) => {
                return <NavigationLink key={index} name={name} />;
              })}
            </div>
            <SidebarButton />
          </div>
          <div className="md:hidden">
            <Sidebar links={links} />
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? <LogOutButton /> : <LogInButton />}
          </div>
        </div>
      </div>
    </>
  );
}
