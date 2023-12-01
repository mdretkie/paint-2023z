import Link from 'next/link';

export default function NavigationLink({ name }: { name: string }) {
  return (
    <Link
      href={`/${name.toLowerCase()}`}
      className="px-3 py-1.5 mb-6 md:mb-0 text-white rounded-md hover:bg-zinc-800"
    >
      {name}
    </Link>
  );
}
