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
      <p className='mb-4'>
        Ideas, lessons, and experiments around building products, writing better
        code, and improving how I work.
      </p>

      <section className='grid gap-10'>
        {posts.map((post) => (
          <Link
            key={post.id}
            className='flex flex-col cursor-pointer hover:bg-[#ffffff] hover:dark:bg-neutral-800 border-l border-l-neutral-300 dark:border-l-neutral-700 hover:rounded-lg hover:border-l-transparent'
            href={`/blog/${post.id}`}
          >
            <p className='font-lustria text-xs bg-neutral-500 font-semibold py-1 px-4 w-fit rounded-r-md text-white shadow-md'>
              {dayjs(post.date).format('MMM D, YYYY')}
            </p>
            <section className='py-2 px-4 flex flex-col gap-1'>
              <h6 className='font-bricolage-grotesque font-bold text-neutral-400 dark:text-neutral-500'>
                {post.title}
              </h6>
              <p className='text-xs'>{post.excerpt}</p>
            </section>
            <section className='flex gap-2 mb-4 pl-4'>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-500 inset-ring inset-ring-sky-700/10 dark:bg-sky-400/10 dark:text-sky-400 dark:inset-ring-sky-400/30'
                >
                  {tag}
                </span>
              ))}
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}
