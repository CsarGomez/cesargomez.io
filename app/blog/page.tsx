import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cesar Gomez',
  description: 'Blog page of Cesar Gomez',
};

export default function BlogPage() {
  return (
    <main className='mx-auto flex md:w-3xl flex-col gap-4 rounded-lg px-14 py-8 font-medium'>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        Blog
      </h3>

      <p>This is where I think out loud.</p>
      <p>
        Ideas, lessons, and experiments around building products, writing better
        code, and improving how I work.
      </p>
      <section className='grid gap-10 sm:grid-cols-2'>
        <article className='flex flex-col gap-4 bg-gray-50 border border-gray-300 rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700 shadow-lg cursor-pointer hover:bg-black hover:text-white hover:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black '>
          <p className='font-lustria text-xs text-sky-500 font-semibold'>
            Mar 14, 2023
          </p>
          <h6 className='font-bricolage-grotesque font-bold'>
            Setup aliases in Vite with TypeScript or JavaScript
          </h6>
          <p className='text-xs'>
            How to setup aliases in Vite with TypeScript or JavaScript to use
            absolute imports in your react projects.
          </p>
        </article>
      </section>
    </main>
  );
}
