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
            className='flex flex-col cursor-pointer rounded-lg hover:bg-neutral-50 hover:shadow-lg hover:dark:bg-neutral-800'
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
          </Link>
        ))}
      </section>
    </main>
  );
}
