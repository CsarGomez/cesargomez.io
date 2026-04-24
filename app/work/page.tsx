import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work - Cesar Gomez',
  description: 'Work page of Cesar Gomez',
};

export default function WorkPage() {
  return (
    <main className='mx-auto flex h-[calc(100dvh-80px)] w-3xl flex-col justify-center gap-4 rounded-lg px-14 py-8'>
      <h1 className='font-title text-3xl leading-0 font-semibold'>Work</h1>
      <p>Coming soon...</p>
    </main>
  );
}
