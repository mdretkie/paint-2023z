'use client';

import { useSearchParams } from 'next/navigation';
import Logo from '../Logo';
import NavigationLink from './NavigationLink';
import { LogInButton, LogOutButton } from '../buttons';
import { cn } from '../../utils/utils';
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';
import { useAuthState } from '@/components/providers/AuthContext';
import Link from 'next/link';

const links = ['Repertuar', 'Cennik'];

export default function Navigation() {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
  const { isLoggedIn, userData } = useAuthState();

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
          <div className="hidden md:block min-w-fit">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className="text-zinc-50 min-w-fit">
                  Zalogowany,{' '}
                  <Link
                    href={userData.username === 'admin' ? '/admin' : '/user'}
                    className="text-orange-400 hover:underline"
                  >
                    {userData.username}
                  </Link>
                </div>
                <LogOutButton />
              </div>
            ) : (
              <LogInButton />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
