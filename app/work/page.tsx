import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work - Cesar Gomez',
  description: 'Work page of Cesar Gomez',
};

export default function WorkPage() {
  return (
    <main className='mx-auto flex md:w-3xl flex-col gap-4 rounded-lg px-14 py-8 font-medium'>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        Work
      </h3>
      <p>
        These are products I&apos;ve built and problems I&apos;ve solved. I
        focus on shipping solutions that are functional, scalable, and actually
        useful, not just technically interesting.
      </p>
    </main>
  );
}
