import dayjs from 'dayjs';
import { Post } from '@/app/models/post.model';
import AnchorLink from '@/app/components/shared/AnchorLink';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article className='flex flex-col rounded'>
      {/* title + date */}
      <div className='flex items-end gap-2 border-b border-b-sky-400'>
        <div className='p-2 bg-sky-400 rounded-t text-neutral-950'>
          <time className='font-roboto text-xs whitespace-nowrap'>
            {dayjs(post.date).format('MMM D, YYYY')}
          </time>
        </div>
        <h6 className='pb-0 border-0'>{post.title}</h6>
      </div>
      {/* content */}
      <div className='p-5 flex flex-col gap-2 bg-neutral-100 dark:bg-neutral-900 rounded-b'>
        <p className='font-roboto font-light'>{post.excerpt}</p>
        <AnchorLink
          href={`/blog/${post.id}`}
          label='Read Post'
          variant='read'
        />
      </div>
    </article>
  );
};

export default PostItem;
