import { useFormState } from '@/components/providers/FormContext';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Confirmation() {
  const { formData } = useFormState();

  useEffect(() => {
    // const postData = async () => {
    //   try {
    //     const response = await fetch('http://127.0.0.1:8080/api/buyer-data', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Origin': 'http://localhost:3000',
    //       },
    //       body: JSON.stringify({
    //         rodzaj_biletu: 'ulgowy',
    //         miejsce: 'I1',
    //         imie: 'Jan',
    //         nazwisko: 'Kowalski',
    //         email: 'jan.k@gmail.com',
    //         telefon: '123456789',
    //       }),
    //     });
    //     if (response.ok) {
    //       console.log('POST request successful');
    //     } else {
    //       console.log('POST request failed');
    //     }
    //   } catch (error) {
    //     console.log('Error:', error);
    //   }
    // };

    // postData();
    fetch('http://127.0.0.1:8080/api/buyer-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rodzaj_biletu: 'ulgowy',
        miejsce: 'I1',
        imie: 'Jan',
        nazwisko: 'Kowalski',
        email: 'jan.k@gmail.com',
        telefon: '123456789',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        console.log(data.data);
      });
  }, []);

  return (
    <div className="flex items-center h-full">
      <div className="flex flex-col items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <g clipPath="url(#clip0_131_389)">
            <path
              d="M40 78C60.9868 78 78 60.9868 78 40C78 19.0132 60.9868 2 40 2C19.0132 2 2 19.0132 2 40C2 60.9868 19.0132 78 40 78Z"
              stroke="#FB923C"
              strokeWidth="4"
            />
            <path
              d="M32.8002 48.7751L23.3502 39.3251L20.2002 42.475L32.8002 55.0751L59.8002 28.0751L56.6502 24.925L32.8002 48.7751Z"
              fill="#FB923C"
            />
          </g>
          <defs>
            <clipPath id="clip0_131_389">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="text-3xl text-zinc-50 font-bold text-center">
          Bilety Zaklepane! <br />
          Czas na Filmową Magię!
        </div>
        <div className="text-md text-center text-zinc-50">
          Dziękujemy za skorzystanie z naszych usług! Proces zakupu biletów
          zakończony sukcesem. Bilety zostały przesłane na{' '}
          <em>Twój adres e-mail</em>. Życzymy udanego seansu!
        </div>
        <Link
          href={'/'}
          className="w-fit px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
