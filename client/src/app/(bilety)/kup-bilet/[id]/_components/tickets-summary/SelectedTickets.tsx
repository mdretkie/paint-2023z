import { useFormState } from '@/components/providers/FormContext';
import React, { useEffect, useRef } from 'react';
import TotalPrice from './TotalPrice';

interface Seat {
  available: boolean;
  number: number;
  row: number;
  selected: boolean;
}

export default function SelectedTickets() {
  const { formData } = useFormState();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [formData.seats]);

  return (
    <div
      ref={scrollRef}
      className="bg-zinc-700 rounded p-8 flex flex-col gap-4 mt-6 flex-1 overflow-auto scroll-smooth"
    >
      {formData.seats?.map((seat: Seat) => {
        return (
          <div className="flex justify-between">
            <div key={seat.number}>
              Rząd {seat.row}, Miejsce {seat.number}
            </div>
            <div>24.90zł</div>
          </div>
        );
      })}
      <TotalPrice />
    </div>
  );
}
