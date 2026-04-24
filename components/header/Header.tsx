'use client';

import { Navbar } from '@/components/navbar/Navbar';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <header className='w-full mx-auto flex h-10 items-center justify-between px-4 md:px-14'>
      <div className='flex items-center gap-1'>
        <h3 className='hidden md:block md:font-sans md:text-xl md:font-normal'>
          Cesar Gomez
        </h3>
      </div>
      <div className='flex items-center gap-4'>
        <Navbar />
        <button
          id='theme-toggle'
          type='button'
          aria-label='Switch theme'
          className='flex h-6 w-24 cursor-pointer items-center gap-1 rounded-lg border border-purple-800 bg-purple-200 px-2 text-[0.65rem] font-semibold text-purple-800 dark:border-yellow-800 dark:bg-yellow-200 dark:text-yellow-800'
          onClick={toggleTheme}
        >
          <span className='relative h-4 w-4'>
            <svg
              id='theme-icon-lightbulb'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              width='16'
              height='16'
              fill='none'
              className='hidden dark:block'
            >
              <rect width='256' height='256' fill='none'></rect>
              <line
                x1='88'
                y1='232'
                x2='168'
                y2='232'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></line>
              <path
                d='M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M136,56c20,3.37,36.61,20,40,40'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
            <svg
              id='theme-icon-moon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
              width='16'
              height='16'
              fill='none'
              className='block dark:hidden'
            >
              <rect width='256' height='256' fill='none'></rect>
              <line
                x1='208'
                y1='120'
                x2='208'
                y2='72'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></line>
              <line
                x1='232'
                y1='96'
                x2='184'
                y2='96'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></line>
              <line
                x1='160'
                y1='32'
                x2='160'
                y2='64'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></line>
              <line
                x1='176'
                y1='48'
                x2='144'
                y2='48'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></line>
              <path
                d='M210.69,158.18A96.78,96.78,0,0,1,192,160,96.08,96.08,0,0,1,97.82,45.31,88,88,0,1,0,210.69,158.18Z'
                stroke='currentColor'
                strokeWidth='16'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </span>
          <p>{isDark ? 'Light mode' : 'Dark mode'}</p>
        </button>
      </div>
    </header>
  );
};
