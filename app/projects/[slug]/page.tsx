import { getProjectData } from '@/utils/getProjectPosts';
import dayjs from 'dayjs';

import Link from 'next/link';

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const projectData = await getProjectData(slug);
  return (
    <section className='mx-auto px-8 md:px-14 py-8 flex md:w-3xl flex-col justify-center gap-4 rounded-lg'>
      <section className='space-y-2 p-4'>
        <Link
          href='/projects'
          className='text-sm text-neutral-500 dark:text-neutral-400 hover:dark:text-white hover:text-black'
        >
          &larr; Back to Projects
        </Link>

        <h1 className='mt-4 font-bricolage-grotesque font-extrabold text-2xl text-black dark:text-white underline'>
          {projectData.title}
        </h1>
        <section className='flex flex-wrap gap-2 mb-4'>
          {projectData.stack.map((tag: string) => (
            <span
              key={tag}
              className='inline-flex items-center rounded-md dark:bg-gray-400/10 px-2 py-1 text-xs font-medium dark:text-gray-400 inset-ring dark:inset-ring-gray-400/20 bg-gray-50 text-gray-600 inset-ring-gray-500/10'
            >
              {tag}
            </span>
          ))}
        </section>
        <p className='mb-4 text-sm font-lustria font-semibold text-sky-500'>
          Published on {dayjs(projectData.date).format('MMMM D, YYYY')}
        </p>
      </section>

      <article
        className='blog-post flex flex-col gap-6 text-black dark:text-white'
        dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
      />
    </section>
  );
};

export default ProjectDetailPage;
