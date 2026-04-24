import ActiveLink from '@/components/navbar/active-link/ActiveLink';

const NAVIGATION_LINKS = [
  {
    id: 0,
    name: 'Home',
    href: '/',
  },
  {
    id: 1,
    name: 'Work',
    href: '/work',
  },
  {
    id: 2,
    name: 'Blog',
    href: '/blog',
  },
];
export const Navbar = () => {
  return (
    <nav className='flex items-center gap-3 text-gray-600 dark:text-gray-300'>
      {NAVIGATION_LINKS.map((link) => (
        <ActiveLink key={link.id} path={link.href} label={link.name} />
      ))}
    </nav>
  );
};
