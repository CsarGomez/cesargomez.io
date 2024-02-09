import AnchorLink from '@/app/components/shared/AnchorLink';
import Pill from '@/app/components/shared/Pill';

interface Props {
  index: number;
  length: number;
  experience: {
    id: number;
    period: string;
    role: string;
    href: string;
    company: string;
    excerpt: string;
    stack: string[];
  };
}

const ExperienceListItem = ({ index, length, experience }: Props) => {
  return (
    <li
      key={experience.id}
      className={`${
        index !== length - 1 && 'mb-10 '
      } ms-4 flex flex-col gap-1  font-sans`}
    >
      <div className='absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -start-1.5'></div>
      <time className='mb-1 text-sm leading-none'>{experience.period}</time>
      <h6 className='font-bold border-none pb-0'>{experience.role}</h6>
      <div className='group flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-600 '>
        <AnchorLink
          href={experience.href}
          label={experience.company}
          variant='url'
        />
      </div>
      <p className='font-roboto font-light'>{experience.excerpt}</p>
      <div className='flex items-center flex-wrap gap-1'>
        <p className='text-sm font-light'>Technologies:</p>
        {experience.stack.map((tech, index) => (
          <Pill key={index} text={tech} />
        ))}
      </div>
    </li>
  );
};

export default ExperienceListItem;
