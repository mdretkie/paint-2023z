'use client';

import React, { useEffect, useState } from 'react';
import ShowTimes from './ShowTimes';

export default function Movies({ selectedDate }: { selectedDate: Date }) {
  const [films, setFilms] = useState([]);
  let [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8080/api/repertuar/${
        selectedDate.toISOString().split('T')[0]
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (date != selectedDate.toISOString().split('T')[0]) {
          setDate(selectedDate.toISOString().split('T')[0]);
        }
        setFilms(data);
      });
  }, [selectedDate]);

  return (
    <>
      <div className="flex w-full font-medium text-zinc-50 border-b-2 py-4 border-zinc-50">
        <div className="basis-1/2">Filmy</div>
        <div className="basis-1/6 pl-4">przed południem</div>
        <div className="basis-1/6 pl-4">po południu</div>
        <div className="basis-1/6 pl-4">wieczorem</div>
      </div>
      {films.map((film: any, index: number) => {
        const seanse = film.seanse;
        const beforeNoon = seanse.filter(
          (seans: { godzina: string; id: number }) =>
            parseInt(seans.godzina.split(':')[0]) <= 12
        );
        const afternoon = seanse.filter(
          (seans: { godzina: string; id: number }) =>
            parseInt(seans.godzina.split(':')[0]) > 12 &&
            parseInt(seans.godzina.split(':')[0]) < 20
        );
        const evening = seanse.filter(
          (seans: { godzina: string; id: number }) =>
            parseInt(seans.godzina.split(':')[0]) >= 20
        );

        return (
          <div
            className="flex w-full font-medium text-zinc-50 border-b border-zinc-600"
            key={index}
          >
            <div className="basis-1/2 flex gap-4 items-center py-4">
              <img className="h-24" src={film.plakat} alt="Plakat" />
              <div className="h-full flex flex-col justify-around">
                <div className="text-2xl">{film.tytul}</div>
                <div className="text-zinc-400 text-sm">
                  Od lat: {film.wiek}. Czas trwania: {film.czas_trwania} min.{' '}
                  <br />
                  Produkcja: {film.rok_produkcji}.
                </div>
              </div>
            </div>
            <ShowTimes times={beforeNoon} film={film} date={date} />
            <ShowTimes times={afternoon} film={film} date={date} />
            <ShowTimes times={evening} film={film} date={date} />
          </div>
        );
      })}
    </>
  );
}
