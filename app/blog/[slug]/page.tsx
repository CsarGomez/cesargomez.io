import dayjs from 'dayjs';
import { getPostData } from '@/app/helpers/getBlogPosts';
import AnchorLink from '@/app/components/shared/AnchorLink';
import Pill from '@/app/components/shared/Pill';

const Post = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug);
  return (
    <div className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col gap-10'>
      <header className='flex flex-col gap-3'>
        <AnchorLink href='/blog' label='back to blog' variant='back' />

        <div className='flex items-end gap-2 border-b border-b-sky-400'>
          <div className='p-2 bg-sky-400 rounded-t text-neutral-950'>
            <p className='font-roboto text-xs whitespace-nowrap'>
              {dayjs(postData.date).format('MMM D, YYYY')}
            </p>
          </div>
        </div>
        <h3 className='pb-0 border-0'>{postData.title}</h3>
        <p className='font-roboto font-light'>{postData.author}</p>
        <div className='flex items-center flex-wrap gap-2 font-sans font-light text-xs'>
          <p>Tags:</p>
          {postData.tags.map((tag: string) => (
            <Pill key={tag} text={tag} />
          ))}
        </div>
      </header>
      <article
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className='blog-post'
      />
    </div>
  );
};

export default Post;
