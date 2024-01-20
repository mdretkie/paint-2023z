'use client';

import Link from 'next/link';
import SelectedTickets from './tickets-summary/SelectedTickets';
import { useState, useEffect } from 'react';

export default function Summary({ date, id }: { date: string; id: string }) {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/api/film/${id}`);
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const hour = date.slice(11, 13);
  const minute = date.slice(14, 16);

  const handleDateChange = (event: React.MouseEvent) => {
    event.preventDefault();
    const userConfirmation = window.confirm(
      'Na pewno chcesz zmienić datę? Spowoduje to powrót do repertuaru.'
    );
    if (userConfirmation) {
      window.location.href = '/repertuar';
    }
  };
  return (
    <div className="text-zinc-50 h-full relative flex flex-col">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-5xl">
          calendar_today
        </span>
        <div className="flex flex-col text-2xl font-medium">
          {day}.{month}.{year} {hour}:{minute}
          <Link
            className="text-sm underline"
            href={'/repertuar'}
            onClick={handleDateChange}
          >
            Wybierz inną datę
          </Link>
        </div>
      </div>
      <div className="h-px my-6 bg-zinc-600"></div>
      <div>
        <div className="uppercase text-3xl font-bold">
          {movie ? movie.title : 'Ładowanie...'}
        </div>
        <div className="lowercase text-xl text-zinc-300">
          {movie ? movie.type : 'Ładowanie...'}
        </div>
      </div>
      <SelectedTickets />
    </div>
  );
}
