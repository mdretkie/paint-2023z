import React, { useEffect, useState } from 'react';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    fetch('http://127.0.0.1:8080/auth/tickets', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
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
  );
}
