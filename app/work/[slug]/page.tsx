import dayjs from 'dayjs';
import AnchorLink from '@/app/components/shared/AnchorLink';
import Pill from '@/app/components/shared/Pill';
import { getWorkData } from '@/app/helpers/getWorkPosts';

const Work = async ({ params }: { params: { slug: string } }) => {
  const workData = await getWorkData(params.slug);

  return (
    <div className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col gap-10'>
      <div className='flex flex-col gap-10'>
        <header className='flex flex-col gap-2'>
          <AnchorLink href='/work' label='back to works' variant='back' />

          <div className='flex items-end gap-2 border-b border-b-sky-400'>
            <div className='p-2 bg-sky-400 rounded-t text-neutral-950'>
              <p className='font-roboto text-xs whitespace-nowrap'>
                {dayjs(workData.date).format('MMM D, YYYY')}
              </p>
            </div>
          </div>
          <h3 className='pb-0 border-0'>{workData.title}</h3>
          <div className='flex items-center flex-wrap gap-2 font-sans font-light text-xs'>
            <p>Tags:</p>
            {workData.stack.map((tag: string) => (
              <Pill key={tag} text={tag} />
            ))}
          </div>
        </header>
        <article
          dangerouslySetInnerHTML={{ __html: workData.contentHtml }}
          className='blog-post'
        />
      </div>
    </div>
  );
};

export default Work;
