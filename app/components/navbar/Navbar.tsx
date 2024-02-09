'use client';

import { NavigationMenu } from '@/app/constants/constants';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className='flex gap-3 md:gap-5'>
      {NavigationMenu.map((item) => (
        <NavLink key={item.id} id={item.id} path={item.path} name={item.name} />
      ))}
    </nav>
  );
};

export default Navbar;
