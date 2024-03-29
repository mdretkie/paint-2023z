import { BackButton, SubmitButton } from '@/components/common/buttons';
import Legend from './_components/Legend';
import Row from './_components/Row';
import RowNumber from './_components/RowNumber';
import Screen from './_components/Screen';
import SeatsSelectionInfo from './_components/SeatSelectionInfo';
import { useSeats } from './_components/hooks/useSeats';
import { useFormState } from '@/components/providers/FormContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { number } from 'yup';

export default function Seats() {
  const params = useSearchParams();
  const screeningId = params.get('seans');
  const { formData, handleNext } = useFormState();
  const {
    seatsData,
    setSeatsData,
    totalTickets,
    totalSelected,
    handleSeatClick,
  } = useSeats({
    1: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
      { number: 3, available: true, selected: false },
      { number: 4, available: true, selected: false },
      { number: 5, available: true, selected: false },
      { number: 6, available: true, selected: false },
      { number: 7, available: true, selected: false },
      { number: 8, available: true, selected: false },
    ],
    2: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
      { number: 3, available: true, selected: false },
      { number: 4, available: true, selected: false },
      { number: 5, available: true, selected: false },
      { number: 6, available: true, selected: false },
      { number: 7, available: true, selected: false },
      { number: 8, available: true, selected: false },
    ],
    3: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
      { number: 3, available: true, selected: false },
      { number: 4, available: true, selected: false },
      { number: 5, available: true, selected: false },
      { number: 6, available: true, selected: false },
      { number: 7, available: true, selected: false },
      { number: 8, available: true, selected: false },
    ],
    4: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
      { number: 3, available: true, selected: false },
      { number: 4, available: true, selected: false },
      { number: 5, available: true, selected: false },
      { number: 6, available: true, selected: false },
      { number: 7, available: true, selected: false },
      { number: 8, available: true, selected: false },
    ],
    5: [
      { number: 1, available: true, selected: false },
      { number: 2, available: true, selected: false },
      { number: 3, available: true, selected: false },
      { number: 4, available: true, selected: false },
      { number: 5, available: true, selected: false },
      { number: 6, available: true, selected: false },
      { number: 7, available: true, selected: false },
      { number: 8, available: true, selected: false },
    ],
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/seats/${screeningId}`)
      .then((response) => response.json())
      .then((data) => {
        const unavailableSeats = data.unavailable_seats;
        const newSeatsData = { ...seatsData };
        unavailableSeats.map((seat: any) => {
          newSeatsData[seat.rzad][seat.numer - 1].available = false;
        });
        setSeatsData(newSeatsData);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.seats.map(
      (seat: {
        available: boolean;
        number: number;
        row: string;
        selected: boolean;
      }) => {
        fetch(
          `http://127.0.0.1:8080/api/seats/${screeningId}/${seat.row}/${seat.number}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.info(data);
          })
          .catch((error) => console.error('Error:', error));
      }
    );

    handleNext();
  };

  return (
    <div className="text-zinc-50 h-full flex flex-col">
      <div className="text-3xl font-bold">Wybierz miejsca</div>
      <SeatsSelectionInfo total={totalTickets} selected={totalSelected} />
      <form
        onSubmit={handleSubmit}
        className="flex-1 h-full flex flex-col justify-between"
      >
        <div>
          <Screen />
          <div className="flex flex-col gap-2">
            {Object.entries(seatsData).map(([rowIndex, row], index) => (
              <div className="flex items-center gap-4" key={index}>
                <RowNumber index={index} />
                <Row
                  rowIndex={parseInt(rowIndex)}
                  row={row}
                  onSeatClick={handleSeatClick}
                />
                <RowNumber index={index} />
              </div>
            ))}
          </div>
        </div>
        <Legend />
        <div className="flex justify-between">
          <BackButton text={'Powrót'} />
          <SubmitButton
            text={'Dalej'}
            disabled={formData.seats.length !== totalTickets}
          />
        </div>
      </form>
    </div>
  );
}
