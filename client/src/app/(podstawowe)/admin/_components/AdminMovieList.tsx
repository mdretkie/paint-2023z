'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function AdminMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/repertuar')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  const handleDelete = (id: number) => {
    const confirmation = confirm('Czy na pewno chcesz usunąć ten film?');
    if (confirmation) {
      console.log('usunięto', id);
    } else {
      console.log('anulowano');
    }
  };

  const handleEdit = (id: number) => {};

  return (
    <table className="w-full bg-zinc-800">
      <thead>
        <tr className="text-zinc-50 border-zinc-600 ">
          <TH>ID</TH>
          <TH>Nazwa</TH>
          <TH>Dostępne godziny</TH>
          <TH>Dostępne daty</TH>
          <TH>Usuń</TH>
          <TH>Edytuj</TH>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie: any, index: number) => (
          <tr
            className="text-zinc-50 border-zinc-600 odd:bg-zinc-700"
            key={index}
          >
            <TD>{movie.id}</TD>
            <TD>{movie.title}</TD>
            <TD>{movie.availableHours}</TD>
            <TD>{movie.dates}</TD>
            <TD>
              <div
                className="hover:underline cursor-pointer hover:text-red-500"
                onClick={() => handleDelete(movie.id)}
              >
                Usuń
              </div>
            </TD>
            <TD>
              <Link
                href={`/admin/edit/${movie.id}`}
                className="hover:underline cursor-pointer hover:text-green-500"
              >
                Edytuj
              </Link>
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TH({ children }: { children: React.ReactNode }) {
  return (
    <th className="border border-zinc-600 font-bold p-4 rounded-xl">
      {children}
    </th>
  );
}

function TD({ children }: { children: React.ReactNode }) {
  return <td className="border border-zinc-600 p-4 font-light">{children}</td>;
}
