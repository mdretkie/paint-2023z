import React from 'react';

export default function Ticket({
  tytul_filmu,
  data,
  godzina,
  miejsce,
  rodzaj_biletu,
}: {
  tytul_filmu: string;
  data: string;
  godzina: string;
  miejsce: string;
  rodzaj_biletu: string;
}) {
  return (
    <div className="flex-1 flex mb-8 md:mb-0">
      <div className="h-48 flex-1 bg-zinc-50 rounded-md rounded-r-2xl border-r-2 border-dashed border-zinc-700 p-6 flex flex-col justify-around">
        <div>
          <div className="text font-bold">{tytul_filmu}</div>
          <div className="flex justify-between">
            <div>{data}</div>
            <div>{godzina}</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl">{miejsce}</div>
        </div>
        <div className="text-sm">Cena: {rodzaj_biletu}</div>
      </div>
      <div className="flex items-center bg-zinc-50 w-48 h-48 justify-center rounded-md rounded-l-2xl">
        <img className="w-36 h-auto" src="qr.png" alt="Kod QR" />
      </div>
    </div>
  );
}
