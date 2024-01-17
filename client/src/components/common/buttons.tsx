import Link from 'next/link';
import { useFormState } from '../providers/FormContext';

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
  const { handleBack } = useFormState();
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
        }
        if (!confirmation && confirmation != null) return;
        handleBack();
      }}
    >
      {text}
    </button>
  );
}
