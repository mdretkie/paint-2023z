import { BackButton, SubmitButton } from '@/components/common/buttons';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFormState } from '@/components/providers/FormContext';
import { clear } from 'console';

const BlikSchema = Yup.object().shape({
  blikCode: Yup.string()
    .required('Kod BLIK jest wymagany')
    .matches(/^\d{6}$/, 'Nieprawidłowy kod BLIK'),
});

export default function Blik() {
  const { formData, setFormData, handleNext, clearLocalStorage } =
    useFormState();
  const formik = useFormik({
    initialValues: {
      blikCode: '',
    },
    validationSchema: BlikSchema,
    onSubmit: (values) => {
      const draw = Math.random();
      const confirmation = confirm('Czy na pewno chcesz zapłacić?');

      if (draw < 1 / 6 || !confirmation) {
        console.warn('Niepowodzenie płatności');
        alert('Niepowodzenie płatności. Spróbuj ponownie.');
      } else if (confirmation) {
        console.log('Płatność przebiegła pomyślnie');

        const ticketTypes = formData.type;
        const promises = Object.keys(ticketTypes).map((ticketType) => {
          const ticketCount = ticketTypes[ticketType];
          return Array.from({ length: ticketCount }).map(() =>
            fetch('http://127.0.0.1:8080/api/buyer-data', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                rodzaj_biletu: ticketType,
                miejsce: 'I1',
                imie: formData.firstName,
                nazwisko: formData.lastName,
                email: formData.email,
                telefon: formData.phone,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data.message);
                console.log(data.data);
              })
          );
        });

        Promise.all(promises.flat())
          .then(() => {
            console.log('All tickets have been bought');
          })
          .catch((error) => {
            console.error('Error buying tickets:', error);
          });

        handleNext();
        clearLocalStorage();
      }
    },
  });

  const handleBlikCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= 6) {
      formik.setFieldValue('blikCode', value);
    }
  };

  return (
    <form
      className="flex-1 flex flex-col justify-between"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-1 flex items-center">
        <div className="flex items-center gap-4 relative">
          <div className="text-zinc-50">kod BLIK: </div>
          <input
            type="number"
            maxLength={6}
            name="blikCode"
            value={formik.values.blikCode}
            onChange={handleBlikCodeChange}
            onBlur={formik.handleBlur}
            className={`w-32 text-center text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none `}
          />
          {formik.touched.blikCode && formik.errors.blikCode && (
            <div className="text-red-500 text-sm">{formik.errors.blikCode}</div>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <BackButton text={'Powrót'} />
        <SubmitButton text={'Potwierdź'} />
      </div>
    </form>
  );
}
