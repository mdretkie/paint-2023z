'use client';

import { get } from 'http';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from 'react';
import { date } from 'yup';

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  handleNext: () => void;
  handleBack: () => void;
  saveForm: (formData: any) => void;
  getFormFromLocalStorage: () => any;
  clearLocalStorage: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleBack: () => {},
  saveForm: () => {},
  getFormFromLocalStorage: () => {},
  clearLocalStorage: () => {},
  step: 0,
});

export function FormProvider({ children }: { children: ReactNode }) {
  let [formData, setFormData] = useState({
    type: {
      reduced: +getFormFromLocalStorage()?.type?.reduced || 0,
      normal: +getFormFromLocalStorage()?.type?.normal || 0,
    },
    seats: [],
    firstName: getFormFromLocalStorage()?.firstName || '',
    lastName: getFormFromLocalStorage()?.lastName || '',
    email: getFormFromLocalStorage()?.email || '',
    phone: getFormFromLocalStorage()?.phone || '',
  });
  let [step, setStep] = useState(1);

  function handleNext() {
    setStep((current) => current + 1);
  }

  function handleBack() {
    setStep((current) => current - 1);
  }

  function saveForm(formData: any) {
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  function getFormFromLocalStorage() {
    if (typeof window !== 'undefined') {
      const formData = localStorage.getItem('formData');
      return formData ? JSON.parse(formData) : null;
    }
    return null;
  }

  function clearLocalStorage() {
    localStorage.removeItem('step');
    localStorage.removeItem('formData');
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        step,
        handleNext,
        handleBack,
        saveForm,
        getFormFromLocalStorage,
        clearLocalStorage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
