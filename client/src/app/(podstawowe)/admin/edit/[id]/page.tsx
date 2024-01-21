import Heading from '@/app/(podstawowe)/_components/Heading';
import React from 'react';
import EditForm from './_components/EditForm';

export default function Edit({ params }: { params: { id: string } }) {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <Heading>Edytuj flilm</Heading>
        <EditForm id={params.id} />
      </div>
    </div>
  );
}
