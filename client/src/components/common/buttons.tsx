export function LogInButton() {
  return (
    <button className="px-4 py-3 bg-zinc-800 rounded-md font-medium text-white mb-6 md:mb-0">
      Logowanie
    </button>
  );
}

export function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-white mb-6 md:mb-0 hover:outline hover:outline-orange-500"
    >
      {text}
    </button>
  );
}
