import { cn } from '@/components/utils/utils';
import Legend from './_components/Legend';
import { useState } from 'react';
import { useFormState } from '@/components/providers/FormContext';

interface Seat {
  number: number;
  available: boolean;
  selected: boolean;
}

interface RowProps {
  rowIndex: number;
  row: Seat[];
  onSeatClick: (rowIndex: number, seatIndex: number) => void;
}

interface SeatsData {
  [rowIndex: number]: Seat[];
}

const romanRowNumbers = ['I', 'II', 'III', 'IV', 'V'];

export default function Seats() {
  const { formData } = useFormState();
  const [seatsData, setSeatsData] = useState<SeatsData>({
    1: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
    ],
    2: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
    ],
  });
  const totalTickets = formData.type.normal + formData.type.reduced;

  const countSelectedSeats = (data: SeatsData) => {
    let totalCount = 0;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const array = data[key];
        array.forEach((item) => {
          if (item.selected) {
            totalCount++;
          }
        });
      }
    }
    return totalCount;
  };

  const totalSelectedTickets = countSelectedSeats(seatsData);

  const handleSeatClick = (rowIndex: number, seatIndex: number) => {
    if (
      totalSelectedTickets < totalTickets ||
      seatsData[rowIndex][seatIndex].selected
    ) {
      const updatedSeatsData: SeatsData = { ...seatsData };
      updatedSeatsData[rowIndex][seatIndex].selected =
        !updatedSeatsData[rowIndex][seatIndex].selected;

      setSeatsData(updatedSeatsData);
    } else {
      console.log('All seats selected!');
    }
  };

  return (
    <div className="text-zinc-50">
      <div className="text-3xl font-bold">Wybierz rodzaj biletów</div>
      <div className="text-sm my-4">
        {totalTickets - totalSelectedTickets !== 0 ? (
          <span>
            Pozostał{totalTickets - totalSelectedTickets > 1 ? 'y' : 'o'}{' '}
            <span className="text-orange-400">
              {totalTickets - totalSelectedTickets}
            </span>{' '}
            miejsc{totalTickets - totalSelectedTickets > 1 ? 'a' : 'e'} do
            wyboru
          </span>
        ) : (
          'Wszystkie miejsca zostały wybrane'
        )}
      </div>
      <div className="uppercase text-sm text-center mt-6">Ekran</div>
      <div className="h-1 bg-zinc-50 mx-8 mb-6"></div>
      <div className="flex flex-col gap-2">
        {Object.entries(seatsData).map(([rowIndex, row], index) => (
          <div className="flex items-center gap-4" key={index}>
            {rowIndex}
            <Row
              rowIndex={parseInt(rowIndex)}
              row={row}
              onSeatClick={handleSeatClick}
            />
          </div>
        ))}
      </div>
      <Legend />
    </div>
  );
}

function Row({ rowIndex, row, onSeatClick }: RowProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        {row.map((seat, seatIndex) => (
          <div key={seatIndex} onClick={() => onSeatClick(rowIndex, seatIndex)}>
            <Seat
              number={seat.number}
              available={seat.available}
              selected={seat.selected}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Seat({ number, available, selected }: Seat) {
  const seatClass = cn(
    'w-8 h-8 text-zinc-50 font-black rounded flex items-center justify-center',
    available ? (selected ? 'bg-orange-900' : 'bg-orange-400') : 'bg-zinc-400'
  );

  return <div className={seatClass}>{number}</div>;
}
