'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Heading from '../_components/Heading';
import AdminMovieList from './_components/AdminMovieList';
import { useAuthState } from '@/components/providers/AuthContext';

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setUserData } = useAuthState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:8080/auth/is_admin_logged_in', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setIsAdmin(true);
          setIsLoggedIn(true);
        } else {
          setIsAdmin(false);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem(
          'logged_in_as',
          JSON.stringify(data['logged_in_as'])
        );
        setUserData(data['logged_in_as']);
        localStorage.setItem('is_logged_in', JSON.stringify(true));
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  if (!isAdmin) {
    return (
      <div className="w-full bg-zinc-900">
        <div className="max-w-[1040px] m-auto px-4 md:px-8">
          <div className="text-white">
            403 Forbidden, Nie masz uprawnień do wyświetlenia tej strony.
          </div>
        </div>
      </div>
    );
  }

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
