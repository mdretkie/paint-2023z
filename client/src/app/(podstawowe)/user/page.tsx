'use client';

import React, { useEffect } from 'react';
import Heading from '../_components/Heading';
import { useAuthState } from '@/components/providers/AuthContext';
import Link from 'next/link';
import Tickets from './_components/Tickets';

export default function User() {
  const { isLoggedIn, setIsLoggedIn, setUserData } = useAuthState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    fetch('http://127.0.0.1:8080/auth/is_logged_in', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
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

  if (!isLoggedIn) {
    return (
      <div className="w-full bg-zinc-900">
        <div className="max-w-[1040px] m-auto px-4 md:px-8">
          <div className="text-white">
            <Link href="/logowanie" className="hover:underline">
              Zaloguj się
            </Link>
            , aby wyświetlić tę stronę.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <Heading>Strona Użytkownika</Heading>
        <h2 className="text-lg text-zinc-50 mb-4">Twoje bilety:</h2>
        <Tickets />
      </div>
    </div>
  );
}
