import { useState } from 'react';
import { Seat, SeatsData } from '../../_lib/types';
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
  const { formData, setFormData, saveForm } = useFormState();
  let [seatsData, setSeatsData] = useState(initialSeatsData);
  let [totalSelected, setTotalSelected] = useState(countSelected(seatsData));
  const totalTickets = formData.type.normal + formData.type.reduced;

  const handleSeatClick = (rowIndex: number, seatIndex: number) => {
    if (!seatsData[rowIndex][seatIndex - 1].available) {
      alert('To miejsce jest niedostępne.');
      return;
    }

    if (
      totalSelected < totalTickets ||
      seatsData[rowIndex][seatIndex - 1].selected
    ) {
      const updatedSeatsData: SeatsData = { ...seatsData };
      updatedSeatsData[rowIndex][seatIndex - 1].selected =
        !updatedSeatsData[rowIndex][seatIndex - 1].selected;

      setSeatsData(updatedSeatsData);
      setTotalSelected(countSelected(updatedSeatsData));

      const selectedSeats = Object.entries(seatsData).flatMap(
        ([row, seatRow]) =>
          seatRow
            .filter((seat: Seat) => seat.selected)
            .map((seat: Seat) => ({ row, ...seat }))
      );

      const updatedSeats = {
        ...formData,
        seats: selectedSeats,
      };

      setFormData(updatedSeats);
      saveForm(updatedSeats);
    } else {
      alert('Wszystkie miejsca zostały wybrane.');
    }
  };

  return {
    seatsData,
    setSeatsData,
    totalTickets,
    totalSelected,
    handleSeatClick,
  };
}
