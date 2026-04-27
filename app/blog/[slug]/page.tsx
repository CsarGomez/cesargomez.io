import dayjs from 'dayjs';
import { getPostData } from '@/utils/getBlogPost';
import Link from 'next/link';

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return (
    <section className='mx-auto flex md:w-3xl flex-col justify-center gap-4 rounded-lg px-14 py-8 font-medium'>
      <Link href='/blog' className='text-sm text-gray-500 hover:text-gray-700'>
        &larr; Back to Blog
      </Link>
      <h1 className='font-bricolage-grotesque font-extrabold text-3xl text-gray-400 dark:text-gray-500 underline'>
        {postData.title}
      </h1>
      <p className='text-sm text-sky-500'>
        Published on {dayjs(postData.date).format('MMMM D, YYYY')}
      </p>
      <article
        className='blog-post flex flex-col gap-6 font-light text-black dark:text-white'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </section>
  );
};

export default BlogPostPage;
