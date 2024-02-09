import { GitHubIcon, LinkedInIcon } from '@/public/icons/Icons';
import Link from 'next/link';

export default function Title() {
  return (
    <div className='w-full'>
      <h1 className='text-4xl font-bold border-none pb-0'>Cesar Gomez</h1>
      <div className='flex flex-col gap-1'>
        <p className='font-sans text-xl font-thin'>
          A software developer with love of beating personal beats.
        </p>
        <div className='flex items-center gap-5 font-roboto font-light text-xs'>
          <Link
            href='https://github.com/csargomez'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center hover:text-yellow-600 dark:hover:text-yellow-400'
          >
            <GitHubIcon width={16} height={16} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/cgope/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center hover:text-yellow-600 dark:hover:text-yellow-400'
          >
            <LinkedInIcon width={16} height={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
