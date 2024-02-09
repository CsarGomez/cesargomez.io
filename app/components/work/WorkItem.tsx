import dayjs from 'dayjs';
import { Work } from '@/app/models/work.model';
import AnchorLink from '@/app/components/shared/AnchorLink';

interface Props {
  index: number;
  work: Work;
}

const WorkItem = ({ index, work }: Props) => {
  return (
    <ul
      key={work.title}
      className={`${
        index % 2 === 0 && 'bg-neutral-100 dark:bg-neutral-900'
      } flex flex-col rounded p-2 border border-neutral-100 dark:border-neutral-800`}
    >
      <li className='flex flex-col items-start gap-5 '>
        <time className='font-roboto text-xs text-sky-400 whitespace-nowrap'>
          {dayjs(work.date).format('MMM YYYY')}
        </time>

        <div>
          <p className='font-sans font-bold'>{work.title}</p>
          <p className='font-roboto font-light text-neutral-400 '>
            {work.excerpt}
          </p>
        </div>
        <AnchorLink
          href={`/works/${work.id}`}
          label={'View details'}
          variant={'read'}
        />
      </li>
    </ul>
  );
};

export default WorkItem;
