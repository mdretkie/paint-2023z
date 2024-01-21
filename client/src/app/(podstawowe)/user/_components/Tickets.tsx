import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';

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
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="md:flex md:flex-row md:flex-wrap flex-col gap-8">
      {tickets.map((ticket: any) => (
        <Ticket
          key={ticket.id}
          tytul_filmu={ticket.tytul_filmu}
          data={ticket.data}
          godzina={ticket.godzina}
          miejsce={ticket.miejsce}
          rodzaj_biletu={ticket.rodzaj_biletu}
        />
      ))}
    </div>
  );
}
