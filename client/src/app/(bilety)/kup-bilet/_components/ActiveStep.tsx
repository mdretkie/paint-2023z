'use client';

import { useFormState } from '@/components/providers/FormContext';
import TicketsType from './steps/tickets-type/TicketsType';
import Seats from './steps/seats/Seats';
import PersonalData from './steps/personal-data/PersonalData';
import Payment from './steps/payment/Payment';
import Confirmation from './steps/confirmation/Confirmation';

export default function ActiveStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <TicketsType />;
    case 2:
      return <Seats />;
    case 3:
      return <PersonalData />;
    case 4:
      return <Payment />;
    case 5:
      return <Confirmation />;
  }
}
