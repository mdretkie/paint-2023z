'use client';

import { useSearchParams } from 'next/navigation';
import Logo from '../Logo';
import NavigationLink from './NavigationLink';
import { LogInButton } from '../buttons';
import { cn } from '../../utils/utils';
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';
import styles from './index.module.css';

const links = ['Repertuar', 'Cennik', 'Zapowiedzi'];

export default function Navigation() {
  const searchParams = useSearchParams();
  const showSidebar = searchParams.get('sidebar') === 'true';
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
              <LogInButton />
            </div>
          </div>
        </div>
        <div className={`${styles.downrec} ${styles.bottom}`} style={{ position: 'absolute' }}>
      <div>
        <div className={styles.downrec}>
          <div className={styles.downrecChild} />
          <div className={styles.repertuarParent}>
            <div className={styles.repertuar}>Repertuar</div>
            <div className={styles.cennik}>Cennik</div>
            <div className={styles.filmy}>Filmy</div>
            <div className={styles.zapowiedzi}>Zapowiedzi</div>
          </div>
          <div className={styles.kontaktcinemacomParent}>
            <div className={styles.repertuar}>kontakt@cinema.com</div>
            <div className={styles.cennik}>
              <p className={styles.telefon}>Telefon:</p>
              <p className={styles.telefon}>+48 123 456 789</p>
            </div>
            <div className={styles.adresPlPolitechnikiContainer}>
              <p className={styles.telefon}>Adres:</p>
              <p className={styles.telefon}>{`Pl. Politechniki 1, `}</p>
              <p className={styles.telefon}>00-661 Warszawa</p>
            </div>
          </div>
          <img className={styles.movieIcon} alt="" src="movie.svg" />
          <div className={styles.cinemaParent}>
            <div className={styles.cinema}>CINEMA</div>
            <b className={styles.kino}>Kino</b>
            <b className={styles.kontakt}>Kontakt</b>
            <b className={styles.socialMedia}>Social Media</b>
          </div>
          <div className="absolute top-[1609px] left-[1092px] w-24 h-6">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/iconfacebook-1.svg"
            />
            <img
              className="absolute top-[0px] left-[36px] w-6 h-6 overflow-hidden"
              alt=""
              src="/iconinstagram-1.svg"
            />
            <img
              className="absolute top-[1.8px] left-[72px] w-6 h-[20.4px] overflow-hidden"
              alt=""
              src="/icontwitter-1.svg"
            />
          </div>
        </div>
          </div>
        </div>
      </>
    );
  }
