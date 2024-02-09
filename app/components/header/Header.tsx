import Link from 'next/link';
import Navbar from '@/app/components/navbar/Navbar';

const Header = () => {
  return (
    <header className='w-full h-16 flex items-center justify-between font-sans text-sm sticky top-0 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur z-50'>
      <Link href='/'>
        <h6 className='text-xl font-bold leading-none border-none pb-0'>
          Cesar<span className='font-thin'>Gomez</span>
        </h6>
        <p className='leading-none font-thin tracking-[0.01em] text-gray-400'>
          software developer
        </p>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
