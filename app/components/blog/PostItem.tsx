import dayjs from 'dayjs';
import { Post } from '@/app/models/post.model';
import AnchorLink from '@/app/components/shared/AnchorLink';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article
      key={post.id}
      className='pb-2 flex flex-col md:flex-row items-start border-b border-neutral-100 dark:border-b-neutral-900'
    >
      <div className='w-full md:w-[12%] font-roboto font-thin text-xs text-sky-400'>
        {dayjs(post.date).format('MMM D, YYYY')}
      </div>
      <div className='w-full md:w-[88%] flex flex-col gap-3'>
        <div>
          <p className='font-bold'>{post.title}</p>
          <p className='font-roboto font-thin text-neutral-400 text-sm'>
            {post.excerpt}
          </p>
        </div>
        <AnchorLink
          href={`/blog/${post.id}`}
          label={'Read post'}
          variant={'read'}
        />
      </div>
    </article>
  );
};

export default PostItem;
