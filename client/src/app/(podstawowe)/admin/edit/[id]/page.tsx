'use client';

import Heading from '@/app/(podstawowe)/_components/Heading';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Edit() {
  const [film, setFilm] = useState({
    id: 1,
    poster:
      'https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000',
    title: 'Chłopi',
    type: 'obyczajowy',
    age: '13',
    duration: '116',
    production: 'Polska [2024]',
    availableHours: '11:00, 12:00, 14:00, 16:00, 20:00',
    dates:
      '2024-01-20, 2024-01-21, 2024-01-22, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilm((prevFilm) => ({
      ...prevFilm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(film);
  };

  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <Heading>Edytuj flilm</Heading>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Label>
            Plakat:
            <input
              type="text"
              name="poster"
              value={film.poster}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Tytuł:
            <input
              type="text"
              name="title"
              value={film.title}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Typ:
            <input
              type="text"
              name="type"
              value={film.type}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Minimalny wiek:
            <input
              type="text"
              name="age"
              value={film.age}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Czas trwania:
            <input
              type="text"
              name="duration"
              value={film.duration}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Produkcja:
            <input
              type="text"
              name="production"
              value={film.production}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Godziny:
            <input
              type="text"
              name="availableHours"
              value={film.availableHours}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <Label>
            Daty:
            <input
              type="text"
              name="dates"
              value={film.dates}
              onChange={handleChange}
              className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            />
          </Label>
          <div className="flex gap-4">
            <Link
              className="mt-4 disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-100 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-100"
              href="/admin"
            >
              Anuluj
            </Link>
            <button
              className="mt-4 disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500"
              type="submit"
            >
              Zapisz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-zinc-50 flex flex-col gap-2">{children}</label>;
}
