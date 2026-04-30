import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import logo_light from '@/app/assets/svg/logo_light.svg';
import logo_dark from '@/app/assets/svg/logo_dark.svg';
import ThemeColorSwitch from '../navbar/theme-color-switch/ThemeColorSwitch';

export const Header = () => {
  return (
    <header className='w-full mx-auto flex h-12 items-center justify-between px-4 md:w-3xl sticky top-0 bg-white/80 backdrop-blur-sm z-10 dark:bg-black/80'>
      <div className='flex items-center gap-1'>
        <Image src={logo_light} alt='Logo' className='block dark:hidden' />
        <Image src={logo_dark} alt='Logo' className='hidden dark:block' />
        <h3 className='hidden md:block md:font-bricolage-grotesque md:text-xl md:font-bold'>
          Cesar Gomez
        </h3>
      </div>
      <div className='flex items-center gap-4'>
        <Navbar />
        <ThemeColorSwitch />
      </div>
    </header>
  );
};
