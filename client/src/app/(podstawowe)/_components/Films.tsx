'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Films() {
  const [films, setFilms] = useState([]);
  const date = new Date().toLocaleDateString('pl-PL');

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/repertuar')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  return (
    <>
      <div className="flex w-full font-medium text-zinc-50 border-b-2 py-4 border-zinc-50">
        <div className="basis-1/2">Filmy</div>
        <div className="basis-1/6">przed południem</div>
        <div className="basis-1/6">po południu</div>
        <div className="basis-1/6">wieczorem</div>
      </div>
      {films.map((film: any, index: number) => {
        const hours = film.availableHours.split(', ');
        const beforeNoon = hours.filter(
          (hour: string) => parseInt(hour.split(':')[0]) <= 12
        );
        const afternoon = hours.filter(
          (hour: string) =>
            parseInt(hour.split(':')[0]) > 12 &&
            parseInt(hour.split(':')[0]) < 20
        );
        const evening = hours.filter(
          (hour: string) => parseInt(hour.split(':')[0]) >= 20
        );

        return (
          <div
            className="flex w-full font-medium text-zinc-50 border-b py-4 border-zinc-600"
            key={index}
          >
            <div className="basis-1/2">{film.title}</div>
            <div className="basis-1/6 flex gap-2">
              {beforeNoon.map((hour: string, index: number) => (
                <Link
                  key={index}
                  href={`/kup-bilet/${film.id}?date=${date.split('.')[2]}-${
                    date.split('.')[1]
                  }-${date.split('.')[0]}T${hour.split(':')[0]}-${
                    hour.split(':')[1]
                  }`}
                >
                  {hour}
                </Link>
              ))}
            </div>
            <div className="basis-1/6 flex gap-2">
              {afternoon.map((hour: string, index: number) => (
                <Link
                  key={index}
                  href={`/kup-bilet/${film.id}?date=${date.split('.')[2]}-${
                    date.split('.')[1]
                  }-${date.split('.')[0]}T${hour.split(':')[0]}-${
                    hour.split(':')[1]
                  }`}
                >
                  {hour}
                </Link>
              ))}
            </div>
            <div className="basis-1/6 flex gap-2">
              {evening.map((hour: string, index: number) => (
                <Link
                  key={index}
                  href={`/kup-bilet/${film.id}?date=${date.split('.')[2]}-${
                    date.split('.')[1]
                  }-${date.split('.')[0]}T${hour.split(':')[0]}-${
                    hour.split(':')[1]
                  }`}
                >
                  {hour}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
