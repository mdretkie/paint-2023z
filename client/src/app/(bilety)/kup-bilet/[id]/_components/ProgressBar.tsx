'use client';

import { useFormState } from '@/components/providers/FormContext';
import { cn } from '@/components/utils/utils';

const formSteps = [
  'rodzaj biletu',
  'wybór miejsc',
  'dane osobowe',
  'płatność',
  'potwierdzenie',
];

export default function ProgressBar() {
  const { step } = useFormState();
  return (
    <div className="w-full flex gap-4 text-zinc-50">
      {formSteps.map((formStep, index) => {
        return (
          <div
            key={index}
            className="w-full text-center uppercase flex flex-col gap-2"
          >
            {index + 1}. {formStep}
            <div
              className={cn(
                'h-2 rounded',
                step >= index + 1 ? 'bg-orange-500' : 'bg-zinc-700'
              )}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
