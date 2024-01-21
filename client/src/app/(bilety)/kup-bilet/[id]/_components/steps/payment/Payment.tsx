import Title from '../../Title';
import React, { use, useState } from 'react';
import Blik from './_components/Blik';
import Card from './_components/Card';
import { cn } from '@/components/utils/utils';
import { useFormState } from '@/components/providers/FormContext';
import { useSearchParams } from 'next/navigation';
import { useAuthState } from '@/components/providers/AuthContext';

export default function Payment({ id }: { id: string }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { formData, handleNext, clearLocalStorage } =
    useFormState();
  const { userData } = useAuthState();
  console.log('userData: ', userData.username);
  const params = useSearchParams();
  const date = params.get('date')?.split('T')[0];
  const time = params.get('date')?.split('T')[1];

  const handlePayment = () => {
    let reducedCount = 0;
    let normalCount = 0;

    formData.seats.forEach((seat: any) => {
      let rodzaj_biletu;

      if (reducedCount < formData.type.reduced) {
        rodzaj_biletu = 'ulgowy';
        reducedCount++;
      } else if (normalCount < formData.type.normal) {
        rodzaj_biletu = 'normalny';
        normalCount++;
      }

      fetch('http://127.0.0.1:8080/api/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          film_id: id,
          data: date,
          godzina: time,
          miejsce: `Rząd: ${seat.row}, Miejsce: ${seat.number}`,
          rodzaj_biletu: rodzaj_biletu,
          username: userData.username || null,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log('Ticket created: ', data))
        .catch((error) => console.error('Error:', error));
    });

    handleNext();
    clearLocalStorage();
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Title>Podaj dane płatności</Title>
        <div className="flex gap-4 mt-4">
          <div
            className={cn(
              'flex flex-col gap-4 flex-1 rounded-md bg-zinc-700 p-4 cursor-pointer',
              paymentMethod === 'card' && 'border-orange-400 border-2'
            )}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="flex gap-2 h-6">
              <img className="h-full" src="/visa.png" alt="visa" />
              <div className="w-px bg-zinc-400"></div>
              <img className="h-full" src="/mastercard.png" alt="mastercard" />
            </div>
            <div>
              <span className="font-bold text-zinc-50">Karta płatnicza</span>
              <p className="text-xs text-zinc-50">
                Wprowadź dane swojej karty płatniczej
              </p>
            </div>
          </div>
          <div
            className={cn(
              'flex flex-col gap-4 flex-1 rounded-md bg-zinc-700 p-4 cursor-pointer',
              paymentMethod === 'blik' && 'border-orange-400 border-2'
            )}
            onClick={() => setPaymentMethod('blik')}
          >
            <div className="flex gap-2 h-6">
              <img className="h-full" src="/blik.png" alt="blik" />
            </div>
            <div>
              <span className="font-bold text-zinc-50">Blik</span>
              <p className="text-xs text-zinc-50">
                Wprowadź 6-cyfrowy kod BLIK
              </p>
            </div>
          </div>
        </div>
      </div>
      {paymentMethod === 'card' ? (
        <Card handlePayment={handlePayment} />
      ) : (
        <Blik handlePayment={handlePayment} />
      )}
    </div>
  );
}
