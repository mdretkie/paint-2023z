'use client';

import Link from 'next/link';
import SelectedTickets from './tickets-summary/SelectedTickets';

export default function Summary() {
  return (
    <div className="text-zinc-50 h-full relative flex flex-col">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-5xl">
          calendar_today
        </span>
        <div className="flex flex-col text-2xl font-medium">
          Niedziela, 29 października
          <Link className="text-sm underline" href={'kup-bilet'}>
            Wybierz inną datę
          </Link>
        </div>
      </div>
      <div className="h-px my-6 bg-zinc-600"></div>
      <div>
        <div className="uppercase text-3xl font-bold">
          PIĘĆ KOSZMARNYCH NOCY 2D / NAPISY
        </div>
        <div className="lowercase text-xl text-zinc-300">horror/przygodowy</div>
      </div>
      <SelectedTickets />
    </div>
  );
}
