import Link from 'next/link';
import { useFormState } from '../providers/FormContext';
import { useAuthState } from '../providers/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';

export function LogInButton() {
  return (
    <Link
      href={'/logowanie'}
      className="px-4 py-3 bg-zinc-800 rounded-md font-medium text-white mb-6 md:mb-0"
    >
      Logowanie
    </Link>
  );
}

export function LogOutButton() {
  const { setIsLoggedIn } = useAuthState();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('logged_in_as');
    localStorage.removeItem('is_logged_in');
    setIsLoggedIn(false);
    router.push('/');
    alert('Wylogowano pomyślnie');
  };
  return (
    <button
      className="px-4 py-3 bg-zinc-800 rounded-md font-medium text-white mb-6 md:mb-0"
      onClick={handleLogout}
    >
      Wyloguj
    </button>
  );
}

export function SubmitButton({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500"
    >
      {text}
    </button>
  );
}

export function BackButton({ text }: { text: string }) {
  const params = useSearchParams();
  const screeningId = params.get('seans');
  const { formData, handleBack } = useFormState();
  const { step } = useFormState();
  return (
    <button
      type="button"
      className="px-4 py-3 bg-zinc-800 rounded-md font-medium text-zinc-200 mb-6 md:mb-0 hover:text-zinc-50 "
      onClick={() => {
        let confirmation;
        if (step == 3) {
          confirmation = confirm(
            'Powrtót od poprzedniego kroku spowoduje utratę wybranych miejsc. Czy na pewno chcesz wrócić?'
          );

          if (!confirmation && confirmation != null) return;

          formData.seats.map(
            (seat: {
              available: boolean;
              number: number;
              row: string;
              selected: boolean;
            }) => {
              fetch(
                `http://127.0.0.1:8080/api/seats/${screeningId}/${seat.row}/${seat.number}`,
                {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then((response) => response.json())
                .then((data) => {
                  console.info(data);
                })
                .catch((error) => console.error('Error:', error));
            }
          );
          handleBack();
        }
        handleBack();
      }}
    >
      {text}
    </button>
  );
}
