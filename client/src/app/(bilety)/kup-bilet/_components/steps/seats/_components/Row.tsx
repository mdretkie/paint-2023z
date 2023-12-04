import { cn } from '@/components/utils/utils';
import { RowProps, Seat, SeatGroupProps } from '../_lib/types';

export default function Row({ rowIndex, row, onSeatClick }: RowProps) {
  return (
    <div className="w-full flex justify-between">
      <SeatGroup
        start={1}
        end={2}
        rowIndex={rowIndex}
        row={row}
        onSeatClick={onSeatClick}
      />
      <SeatGroup
        start={3}
        end={6}
        rowIndex={rowIndex}
        row={row}
        onSeatClick={onSeatClick}
      />
      <SeatGroup
        start={7}
        end={8}
        rowIndex={rowIndex}
        row={row}
        onSeatClick={onSeatClick}
      />
    </div>
  );
}

function SeatGroup({ start, end, rowIndex, row, onSeatClick }: SeatGroupProps) {
  return (
    <div className="flex gap-2">
      {row
        .filter((seat) => seat.number >= start && seat.number <= end)
        .map((seat, seatIndex) => (
          <div
            key={seatIndex}
            onClick={() => onSeatClick(rowIndex, seat.number)}
          >
            <Seat
              number={seat.number}
              available={seat.available}
              selected={seat.selected}
            />
          </div>
        ))}
    </div>
  );
}

function Seat({ number, available, selected }: Seat) {
  const seatClass = cn(
    'w-8 h-8 text-zinc-50 font-black rounded flex items-center justify-center cursor-pointer ',
    available
      ? selected
        ? 'bg-orange-900'
        : 'bg-orange-400'
      : 'bg-zinc-400 cursor-not-allowed'
  );

  return <div className={seatClass}>{number}</div>;
}
