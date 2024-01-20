import Link from 'next/link';
import Carousel from './_components/Carousel';
import Heading from './_components/Heading';
import CompactMovies from './_components/CompactMovies';

export default function Home() {
  const currentDate = new Date().toLocaleDateString('pl-PL');

  return (
    <div className="bg-zinc-900">
      <Carousel />
      <div className="w-full bg-zinc-900 mt-8">
        <div className="max-w-[1040px] m-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Heading>Reperutar</Heading>
            <Link
              className="disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500"
              href="/repertuar"
            >
              Wyświetl więcej
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <span className="material-symbols-outlined text-zinc-50">
              calendar_today
            </span>
            <span className="text-zinc-50">Dziś - {currentDate}</span>
          </div>
          <CompactMovies />
        </div>
      </div>
    </div>
  );
}
