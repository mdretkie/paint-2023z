'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Logowanie() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        if (username === 'admin') {
          router.push('/admin');
        } else {
          router.push('/user');
        }
      } else {
        console.log(data.message);
        alert('Podaj poprawne dane logowania');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-zinc-900 p-16"
    >
      <h1 className="text-3xl mb-8 font-bold text-zinc-50">Logowanie</h1>
      <div className="flex items-center gap-4 relative mb-6">
        <input
          className={`w-56 text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none `}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nazwa użytkownika"
        />
      </div>
      <div className="flex items-center gap-4 relative mb-6">
        <input
          className="w-56 text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hasło"
        />
      </div>
      <button
        className="disabled:opacity-10 disabled:hover:outline-none px-4 py-3 bg-zinc-800 border border-orange-500 rounded-md font-medium text-zinc-50 mb-6 md:mb-0 hover:outline hover:outline-orange-500 w-56"
        type="submit"
      >
        Zaloguj się
      </button>
      <div className="text-zinc-50 mt-8">
        Nie masz konta?{' '}
        <Link
          className="hover:underline text-orange-500 opacity-50 hover:opacity-100 transform-opacity duration-300"
          href="/rejestracja"
        >
          Zarejestruj się
        </Link>
      </div>
    </form>
  );
}
