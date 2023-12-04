export interface Seat {
  number: number;
  available: boolean;
  selected: boolean;
}
export interface SeatGroupProps {
  start: number;
  end: number;
  rowIndex: number;
  row: Seat[];
  onSeatClick: (rowIndex: number, seatIndex: number) => void;
}

export interface RowProps {
  rowIndex: number;
  row: Seat[];
  onSeatClick: (rowIndex: number, seatIndex: number) => void;
}

export interface SeatsData {
  [rowIndex: number]: Seat[];
}
