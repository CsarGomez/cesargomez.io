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
    <main className='mx-auto flex md:w-3xl flex-col gap-4 rounded-lg px-14 py-8 font-medium'>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        Projects
      </h3>
      <p>
        These are products I&apos;ve built and problems I&apos;ve solved. I
        focus on shipping solutions that are functional, scalable, and actually
        useful, not just technically interesting.
      </p>
      <section className='grid gap-10 sm:grid-cols-2'>
        {projects.map((project) => (
          <Link
            key={project.id}
            className='rounded-lg bg-[#ffffff]  shadow-lg'
            href={`/projects/${project.id}`}
          >
            <Image
              src={'/img/projects/dealerpath/dealerpath-home_nda.png'}
              alt='project image'
              width={500}
              height={300}
              className='rounded-lg'
            />
            <h6 className='p-2 font-bricolage-grotesque font-bold text-neutral-400 dark:text-neutral-500'>
              {project.title}
            </h6>
            <p className='p-2 text-xs'>{project.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
