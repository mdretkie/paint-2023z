'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  handleNext: () => void;
  handleBack: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleBack: () => {},
  step: 0,
});

export function FormProvider({ children }: { children: ReactNode }) {
  let [formData, setFormData] = useState({});
  let [step, setStep] = useState(1);

  function handleNext() {
    setStep((current) => current + 1);
  }

  function handleBack() {
    setStep((current) => current - 1);
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, step, handleNext, handleBack }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
