import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BackButton, SubmitButton } from '@/components/common/buttons';
import { useFormState } from '@/components/providers/FormContext';

export default function Card() {
  const { formData, setFormData, handleNext } = useFormState();
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .required('Wymagane')
        .matches(/^(\d{4} ){3}\d{4}$/, 'Nieprawidłowy numer karty'),
      expirationDate: Yup.string()
        .required('Wymagane')
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Nieprawidłowa data ważności'),
      cvv: Yup.string()
        .required('Wymagane')
        .matches(/^\d{3}$/, 'Nieprawidłowy numer'),
    }),
    onSubmit: (values) => {
      const draw = Math.random();
      const confirmation = confirm('Czy na pewno chcesz zapłacić?');

      if (draw < 1 / 6 || !confirmation) {
        console.warn('Niepowodzenie płatności');
        alert('Niepowodzenie płatności. Spróbuj ponownie.');
      } else if (confirmation) {
        console.log('Płatność przebiegła pomyślnie');
        handleNext();
      }
    },
  });

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
    formik.setFieldValue('cardNumber', formattedValue);
  };

  return (
    <form
      className="flex-1 flex flex-col justify-between"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-1 flex flex-col justify-center gap-4">
        <div>
          <div className="flex justify-between text-red-500">
            <label className="text-zinc-50" htmlFor="cardNumber">
              Numer karty
            </label>
            <div className="text-sm">
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <div>{formik.errors.cardNumber}</div>
              )}
            </div>
          </div>
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
            type="text"
            id="cardNumber"
            name="cardNumber"
            onChange={handleCardNumberChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            placeholder="0000 0000 0000 0000"
          />
        </div>

        <div className="flex gap-4 w-full">
          <div className="flex-1 relative">
            <div className="flex justify-between text-red-500">
              <label className="text-zinc-50" htmlFor="expirationDate">
                Data ważności
              </label>
            </div>
            <input
              className="w-full text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
              type="text"
              id="expirationDate"
              name="expirationDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expirationDate}
              placeholder="MM/RR"
            />
            <div className="text-red-500 text-sm mt-1 absolute">
              {formik.touched.expirationDate &&
                formik.errors.expirationDate && (
                  <div>{formik.errors.expirationDate}</div>
                )}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="flex justify-between text-zinc-50">
              <label htmlFor="cvv">CVV2/CVC2</label>
            </div>
            <input
              className="w-full text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
              type="text"
              id="cvv"
              name="cvv"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cvv}
              placeholder="000"
            />
            <div className="text-red-500 text-sm mt-1 absolute">
              {formik.touched.cvv && formik.errors.cvv && (
                <div>{formik.errors.cvv}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <BackButton text={'Powrót'} />
        <SubmitButton text={'Potwierdź'} />
      </div>
    </form>
  );
}
