import Link from 'next/link';
import React from 'react';
import Heading from '../_components/Heading';
import AdminMovieList from './_components/AdminMovieList';

export default function Admin() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <Heading>Strona Administratora</Heading>
        <div className="my-8">
          <Link
            className='className="mt-4 disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500"'
            href="/admin/add"
          >
            Dodaj film
          </Link>
        </div>
        <AdminMovieList />
      </div>
    </div>
  );
}
