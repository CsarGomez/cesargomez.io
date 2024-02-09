import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='p-5 md:p-10 mx-auto flex flex-col items-center justify-around gap-5 font-roboto font-light text-xs text-center border-t border-t-neutral-100 dark:border-t-neutral-900'>
      {/* email + source code */}
      <div>
        <Link
          href='mailto:me@cesargomez.io'
          target='_blank'
          rel='noopener noreferrer'
        >
          me@cesargomez.io
        </Link>
        <p className='mt-1'>
          Source code on{' '}
          <Link
            href='https://github.com/CsarGomez/cesargomez.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
        </p>
      </div>

      {/* social links */}
      <div className='flex items-center gap-5'>
        <Link
          href='https://github.com/csargomez'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </Link>
        <Link
          href='https://www.linkedin.com/in/cgope/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </Link>
        <Link
          href='https://www.instagram.com/cgope/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </Link>
        <Link
          href='https://twitter.com/cgope'
          target='_blank'
          rel='noopener noreferrer'
        >
          X/Twitter
        </Link>
      </div>
    </footer>
  );
}
