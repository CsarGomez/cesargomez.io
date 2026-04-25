import type { Metadata } from 'next';
import { getSortedPosts } from '@/utils/getBlogPost';
import dayjs from 'dayjs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Cesar Gomez',
  description: 'Blog page of Cesar Gomez',
};

export default function BlogPage() {
  const posts = getSortedPosts();

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
        {posts.map((post) => (
          <Link
            key={post.id}
            className='flex flex-col gap-4 bg-gray-50 border border-gray-300 rounded-lg p-4 dark:bg-gray-800 dark:border-gray-700 shadow-lg cursor-pointer hover:bg-black hover:text-white hover:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black '
            href={`/blog/${post.id}`}
          >
            <p className='font-lustria text-xs text-sky-500 font-semibold'>
              {dayjs(post.date).format('MMM D, YYYY')}
            </p>
            <h6 className='font-bricolage-grotesque font-bold'>{post.title}</h6>
            <p className='text-xs'>{post.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
