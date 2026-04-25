'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  label: string;
}
const ActiveLink = ({ path, label }: Props) => {
  const pathname = usePathname();
  const isActive =
    path === '/'
      ? pathname === '/'
      : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <Link
      href={path}
      className={` ${isActive ? 'text-sky-500' : 'text-black dark:text-white'} font-semibold`}
    >
      {label}
    </Link>
  );
};

export default ActiveLink;
