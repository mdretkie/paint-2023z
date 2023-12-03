import React, { useState } from 'react';
import { useFormState } from '@/components/providers/FormContext';
import { cn } from '@/components/utils/utils';
import { SubmitButton } from '@/components/common/buttons';

interface TicketInputProps {
  type: string;
  label: string;
  value: number;
  onUpdate: (type: string, increment: number) => void;
}

export default function TicketsType() {
  const { formData, setFormData, handleNext } = useFormState();
  const [reducedTicketNumber, setReducedTicketNumber] = useState(0);
  const [normalTicketNumber, setNormalTicketNumber] = useState(0);

  const updateTicketNumber = (type: string, increment: number) => {
    if (type === 'normalny') {
      setNormalTicketNumber((prev) => Math.max(0, prev + increment));
    } else if (type === 'ulgowy') {
      setReducedTicketNumber((prev) => Math.max(0, prev + increment));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFormData = {
      ...formData,
      type: {
        reduced: reducedTicketNumber,
        normal: normalTicketNumber,
      },
    };

    setFormData(updatedFormData);
    handleNext();
  };

  return (
    <div className="text-zinc-50 h-full">
      <form
        className="h-full flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="text-3xl font-bold">Wybierz rodzaj biletów</div>
        <div className="flex flex-col gap-16 justify-center">
          <TicketInput
            type="normalny"
            label="Normalny"
            value={normalTicketNumber}
            onUpdate={updateTicketNumber}
          />
          <TicketInput
            type="ulgowy"
            label="Ulgowy"
            value={reducedTicketNumber}
            onUpdate={updateTicketNumber}
          />
        </div>
        <SubmitButton text={'Dalej'} />
      </form>
    </div>
  );
}

function TicketInput({ type, label, value, onUpdate }: TicketInputProps) {
  return (
    <div className="flex justify-between">
      <TypeName>{label}</TypeName>
      <div className="flex items-center">
        <div
          className={cn(
            'w-8 h-8 rounded  flex items-center justify-center font-black',
            value > 0
              ? 'bg-orange-400 cursor-pointer'
              : 'bg-zinc-400 cursor-not-allowed'
          )}
          onClick={() => onUpdate(type, -1)}
        >
          -
        </div>
        <input
          type="text"
          value={value}
          readOnly={true}
          className="bg-zinc-800 w-16 text-center text-xl font-medium outline-none"
        />
        <div
          className="w-8 h-8 rounded bg-orange-400 flex items-center justify-center font-black cursor-pointer"
          onClick={() => onUpdate(type, 1)}
        >
          +
        </div>
      </div>
    </div>
  );
}

function TypeName({ children }: { children: React.ReactNode }) {
  return <div className="text-2xl">{children}</div>;
}
