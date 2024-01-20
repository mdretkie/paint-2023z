import React from 'react';
import Heading from '../_components/Heading';

export default function User() {
  const film = {
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
  };

  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <Heading>Strona Użytkownika</Heading>
        <h2 className="text-lg text-zinc-50 mb-4">Twoje bilety:</h2>
        <div className="md:flex md:flex-row md:flex-wrap flex-col gap-8">
          <div className="flex-1 flex mb-8 md:mb-0">
            <div className="h-48 flex-1 bg-zinc-50 rounded-md rounded-r-2xl border-r-2 border-dashed border-zinc-700 p-6 flex flex-col justify-around">
              <div>
                <div className="text font-bold">Ojciec 2D/Napisy</div>
                <div className="flex justify-between">
                  <div>2021-05-21</div>
                  <div>19:00</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-xl">Rząd: 6</div>
                <div className="font-bold text-xl">Miejsce: 6</div>
              </div>
              <div className="text-sm">Cena: 24,90</div>
            </div>
            <div className="flex items-center bg-zinc-50 w-48 h-48 justify-center rounded-md rounded-l-2xl">
              <img className="w-36 h-auto" src="qr.png" alt="Kod QR" />
            </div>
          </div>
          <div className="flex-1 flex mb-8 md:mb-0">
            <div className="h-48 flex-1 bg-zinc-50 rounded-md rounded-r-2xl border-r-2 border-dashed border-zinc-700 p-6 flex flex-col justify-around">
              <div>
                <div className="text font-bold">Ojciec 2D/Napisy</div>
                <div className="flex justify-between">
                  <div>2021-05-21</div>
                  <div>19:00</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-xl">Rząd: 6</div>
                <div className="font-bold text-xl">Miejsce: 6</div>
              </div>
              <div className="text-sm">Cena: 24,90</div>
            </div>
            <div className="flex items-center bg-zinc-50 w-48 h-48 justify-center rounded-md rounded-l-2xl">
              <img className="w-36 h-auto" src="qr.png" alt="Kod QR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
