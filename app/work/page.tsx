import { getSortedWorks } from '@/app/helpers/getWorkPosts';
import WorkItem from '@/app/components/work/WorkItem';

const WorkPage = () => {
  const works = getSortedWorks();

  return (
    <main className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col gap-10'>
      {works.map((work, index) => (
        <WorkItem key={work.title} work={work} index={index} />
      ))}
    </main>
  );
};

export default WorkPage;
