'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function EditForm({ id }: { id: string }) {
  const [film, setFilm] = useState({
    czas_trwania: '116',
    daty: '2024-01-20, 2024-01-21, 2024-01-22, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26',
    gatunek: 'obyczajowy',
    id: 1,
    plakat: 'https://placehold.co/68x96',
    rok_produkcji: 'Polska [2024]',
    seanse: [
      { godzina: '11:00', id: 1 },
      { godzina: '12:00', id: 2 },
      { godzina: '14:00', id: 3 },
      { godzina: '16:00', id: 4 },
      { godzina: '20:00', id: 5 },
    ],
    tytul: 'Chłopi',
    wiek: '13',
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/film/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          setFilm(data);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Label>
        Plakat:
        <input
          type="text"
          name="plakat"
          value={film.plakat}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Tytuł:
        <input
          type="text"
          name="tytul"
          value={film.tytul}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Gatunek:
        <input
          type="text"
          name="gatunek"
          value={film.gatunek}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Minimalny wiek:
        <input
          type="text"
          name="wiek"
          value={film.wiek}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Czas trwania:
        <input
          type="text"
          name="czas_trwania"
          value={film.czas_trwania}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Produkcja:
        <input
          type="text"
          name="rok_produkcji"
          value={film.rok_produkcji}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Godziny:
        <input
          type="text"
          name="seanse"
          value={film.seanse.map((seans: any) => seans.godzina).join(', ')}
          onChange={handleChange}
          className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
        />
      </Label>
      <Label>
        Daty:
        <input
          type="text"
          name="daty"
          value={film.daty}
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
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-zinc-50 flex flex-col gap-2">{children}</label>;
}
