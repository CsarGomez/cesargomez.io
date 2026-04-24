'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  label: string;
}
const ActiveLink = ({ path, label }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={` ${pathname === path ? 'text-sky-500' : 'text-black dark:text-white'} font-semibold`}
    >
      {label}
    </Link>
  );
};

export default ActiveLink;
