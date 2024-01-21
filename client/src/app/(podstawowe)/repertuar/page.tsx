'use client';

import { useEffect, useState } from 'react';
import Calendar from '../_components/Calendar';
import Heading from '../_components/Heading';
import Movies from '../_components/Movies';

export default function Repertuar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className="bg-zinc-900 pt-8">
      <div className="w-full bg-zinc-900">
        <div className="max-w-[1040px] m-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Heading>Repertuar</Heading>
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-zinc-50">
                  calendar_today
                </span>
                <span className="text-zinc-50">
                  {selectedDate.toISOString() === currentDate
                    ? `Dziś - ${currentDate}`
                    : selectedDate.toLocaleDateString('pl-PL')}
                </span>
              </div>
            </div>
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <Movies selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}
