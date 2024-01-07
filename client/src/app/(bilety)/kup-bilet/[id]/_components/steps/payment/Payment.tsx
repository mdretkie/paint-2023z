import Title from '../../Title';
import React, { useState } from 'react';
import Blik from './_components/Blik';
import Card from './_components/Card';
import { cn } from '@/components/utils/utils';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');

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
      {paymentMethod === 'card' ? <Card /> : <Blik />}
    </div>
  );
}
