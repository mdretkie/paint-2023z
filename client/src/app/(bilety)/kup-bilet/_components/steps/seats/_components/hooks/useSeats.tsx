import { useState } from 'react';
import { SeatsData } from '../../_lib/types';
import { useFormState } from '@/components/providers/FormContext';

const countSelected = (seatsData: SeatsData) => {
  let totalCount = 0;
  for (const key in seatsData) {
    if (seatsData.hasOwnProperty(key)) {
      const row = seatsData[key];
      row.forEach((seat) => {
        if (seat.selected) {
          totalCount++;
        }
      });
    }
  }
  return totalCount;
};

export function useSeats(initialSeatsData: SeatsData) {
  const { formData } = useFormState();
  let [seatsData, setSeatsData] = useState(initialSeatsData);
  let [totalSelected, setTotalSelected] = useState(countSelected(seatsData));
  const totalTickets = formData.type.normal + formData.type.reduced;

  const handleSeatClick = (rowIndex: number, seatIndex: number) => {
    if (
      totalSelected < totalTickets ||
      seatsData[rowIndex][seatIndex - 1].selected
    ) {
      const updatedSeatsData: SeatsData = { ...seatsData };
      updatedSeatsData[rowIndex][seatIndex - 1].selected =
        !updatedSeatsData[rowIndex][seatIndex - 1].selected;

      setSeatsData(updatedSeatsData);
      setTotalSelected(countSelected(updatedSeatsData));
    } else {
      alert('Wszystkie miejsca zostały wybrane.');
    }
  };

  return { seatsData, totalTickets, totalSelected, handleSeatClick };
}
