import React from 'react';

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: Function;
}) {
  const daysOfWeek = ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'];
  const today = new Date();
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate().toString();
    const isSelected = date.toDateString() === selectedDate.toDateString();

    weekDays.push(
      <div
        key={i}
        onClick={() => {
          setSelectedDate(date);
        }}
      >
        <Day
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          isSelected={isSelected}
        />
      </div>
    );
  }

  return <div className="flex gap-4">{weekDays}</div>;
}

function Day({
  dayOfWeek,
  dayOfMonth,
  isSelected,
}: {
  dayOfWeek: string;
  dayOfMonth: string;
  isSelected: boolean;
}) {
  return (
    <div
      className={`h-20 w-14 text-zinc-50 border ${
        isSelected ? 'border-orange-500' : 'border-zinc-600'
      } flex flex-col items-center justify-around rounded-md`}
    >
      <div className="font-bold">{dayOfWeek}</div>
      <div className="font-black text-xl">{dayOfMonth}</div>
    </div>
  );
}
