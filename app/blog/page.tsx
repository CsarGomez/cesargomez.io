import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cesar Gomez',
  description: 'Blog page of Cesar Gomez',
};

export default function BlogPage() {
  return (
    <main className='mx-auto flex h-[calc(100dvh-80px)] w-3xl flex-col justify-center gap-4 rounded-lg px-14 py-8'>
      <h1 className='font-title text-3xl leading-0 font-semibold'>Blog</h1>
      <p>
        This is where I will share my thoughts and experiences on software
        development, technology, and other topics that interest me. Stay tuned
        for updates!
      </p>
    </main>
  );
}
