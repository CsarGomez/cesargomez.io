import { getSortedProjects } from '@/utils/getProjectPosts';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work - Cesar Gomez',
  description: 'Work page of Cesar Gomez',
};

export default function ProjectsPage() {
  const projects = getSortedProjects();
  return (
    <main className='mx-auto px-8 md:px-14 py-8 flex md:w-3xl flex-col justify-center gap-4 rounded-lg font-medium'>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        Projects
      </h3>
      <p className='mb-4'>
        These are products I&apos;ve built and problems I&apos;ve solved. I
        focus on shipping solutions that are functional, scalable, and actually
        useful, not just technically interesting.
      </p>
      <section className='grid gap-10 sm:grid-cols-2'>
        {projects.map((project) => (
          <Link
            key={project.id}
            className='group rounded-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 hover:bg-[#ffffff] hover:dark:bg-neutral-800 transition-all duration-300'
            href={`/projects/${project.id}`}
          >
            <div className='relative rounded-t-lg h-32 w-full overflow-hidden'>
              <Image
                src={project.image}
                alt='project image'
                fill
                loading='eager'
                sizes='(max-width: 640px) 100vw, 50vw'
                className='object-cover object-top'
              />
            </div>
            <section className='flex flex-col rounded-b-lg gap-1 py-2 px-1 group-hover:px-4 group-hover:bg-[#ffffff] dark:group-hover:bg-neutral-800   transition-all duration-300'>
              <h6 className='font-bricolage-grotesque font-bold text-neutral-400 dark:text-neutral-500'>
                {project.title}
              </h6>
              <p className='text-xs'>{project.excerpt}</p>
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}
