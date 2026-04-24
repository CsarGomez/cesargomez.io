'use client';

import { LightbulbIcon, MoonStarsIcon } from '@phosphor-icons/react';

const ThemeColorSwitch = () => {
  return (
    <button
      id='theme-toggle'
      type='button'
      aria-label='Switch theme'
      className='flex h-6 w-24 cursor-pointer items-center gap-1 rounded-lg border border-purple-800 bg-purple-200 px-2 text-[0.65rem] font-semibold text-purple-800 dark:border-yellow-800 dark:bg-yellow-200 dark:text-yellow-800'
    >
      <span className='relative h-4 w-4'>
        <MoonStarsIcon width={16} height={16} className='block dark:hidden' />
        <LightbulbIcon width={16} height={16} className='hidden dark:block' />
      </span>

      <p>Light mode</p>
    </button>
  );
};

export default ThemeColorSwitch;
