import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { LinkIcon } from '@heroicons/react/16/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

interface Props {
  href: string;
  label: string;
  variant: 'back' | 'url' | 'read' | 'download';
}

const AnchorLink = ({ href, label, variant }: Props) => {
  return (
    <Link
      href={href}
      rel='noopener noreferrer'
      target={variant === 'read' || variant === 'back' ? '_self' : '_blank'}
      className='group self-end flex items-center gap-2 font-roboto font-light text-sm text-yellow-600 dark:text-yellow-400 transition-colors duration-300'
    >
      {variant === 'back' && (
        <ArrowLeftIcon className='w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300' />
      )}
      <span className='text-neutral-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300'>
        {label}
      </span>
      {variant === 'url' ? (
        <ArrowTopRightOnSquareIcon className='w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300' />
      ) : variant === 'read' ? (
        <LinkIcon className='w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300' />
      ) : (
        variant === 'download' && (
          <ArrowDownTrayIcon className='w-0 h-0 group-hover:w-4 group-hover:h-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-all duration-300' />
        )
      )}
    </Link>
  );
};

export default AnchorLink;
