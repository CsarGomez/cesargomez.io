'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  id: number;
  path: string;
  name: string;
}

const NavLink = ({ id, path, name }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      key={id}
      href={path}
      className={` ${
        pathname === path
          ? 'text-sky-400'
          : 'text-neutral-400 dark:text-neutral-500'
      } font-light`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
