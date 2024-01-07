import { useFormState } from '@/components/providers/FormContext';
import React, { useEffect, useState } from 'react';

export default function TotalPrice() {
  const { formData, step } = useFormState();
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPirce = () => {
    let totalPrice = 0;
    totalPrice += formData.seats.length * 24.9;
    if (formData.seats.length == formData.type.reduced + formData.type.normal) {
      totalPrice -= formData.type.reduced * 5;
    }
    return totalPrice;
  };

  useEffect(() => {
    const total = calculateTotalPirce();
    setTotalPrice(total);
  }, [formData.seats]);

  return (
    <div>
      <div className="text-xl border-t border-zinc-600 pt-4 flex justify-between">
        <div>Razem do zapłaty:</div>
        <div>{totalPrice.toFixed(2)}zł</div>
      </div>
      {step >= 2 && formData.type.reduced > 0 && (
        <div className="text-zinc-400 mt-2">
          {formData.seats.length ==
          formData.type.reduced + formData.type.normal ? (
            <div className="flex justify-between">
              <div>Ulga:</div> {(-formData.type.reduced * 5).toFixed(2)}zł
            </div>
          ) : (
            'Zniżka za bilety ulgowe zostanie naliczona po wybraniu wszystkich miejsc.'
          )}
        </div>
      )}
    </div>
  );
}
