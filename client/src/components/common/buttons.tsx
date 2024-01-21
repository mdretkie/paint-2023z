import Link from 'next/link';
import { useFormState } from '../providers/FormContext';
import { useAuthState } from '../providers/AuthContext';
import { useRouter } from 'next/navigation';

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
  const { formData, handleBack } = useFormState();
  const { step } = useFormState();
  return (
    <button
      className="px-4 py-3 bg-zinc-800 rounded-md font-medium text-zinc-200 mb-6 md:mb-0 hover:text-zinc-50 "
      onClick={() => {
        let confirmation;
        if (step == 3) {
          confirmation = confirm(
            'Powrtót od poprzedniego kroku spowoduje utratę wybranych miejsc. Czy na pewno chcesz wrócić?'
          );

          const seatsJson = JSON.stringify(formData.seats);

          fetch('http://127.0.0.1:8080/api/seats', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: seatsJson,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Response:', data);
            })
            .catch((error) => console.error('Error:', error));
        }
        if (!confirmation && confirmation != null) return;
        handleBack();
      }}
    >
      {text}
    </button>
  );
}
