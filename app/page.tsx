import Image from 'next/image';
import profile_picture from '@/app/assets/img/me.png';

export default function Home() {
  return (
    <main className='mx-auto flex md:w-3xl flex-col justify-center gap-4 rounded-lg px-14 py-8 font-medium'>
      <Image
        src={profile_picture}
        alt='me'
        className='h-32 w-32 rounded-full border border-gray-600 object-cover dark:border-gray-300'
        loading='eager'
      />
      <p>Hi !.</p>
      <h1 className='font-bricolage-grotesque text-3xl leading-0 font-semibold'>
        I&apos;m Cesar Gomez
      </h1>
      <p className='font-lustria text-lg text-sky-500'>
        A software developer with love of beating personal beats.
      </p>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        How I Work
      </h3>
      <p>
        I strongly believe in lifelong learning. JavaScript is my foundation,
        but I don&apos;t limit myself to a single stack. I&apos;m constantly
        learning, experimenting, and adapting, whether that means adopting new
        tools, improving architecture, or finding better ways to ship faster
        without sacrificing quality. In tech, standing still is falling behind,
        so growth is part of my daily routine.
      </p>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        What I Build
      </h3>
      <p>
        I focus on building products that are not only functional, but intuitive
        and meaningful to the people who use them. Beyond the technical side,
        I&apos;m deeply interested in how products evolve—how ideas become
        businesses, how small decisions shape user experience, and how
        consistency and iteration compound into real results over time.
      </p>
      <h3 className='font-bricolage-grotesque font-extrabold text-xl text-gray-400 dark:text-gray-500 underline'>
        Beyond Code
      </h3>
      <p>
        Outside of coding, I enjoy playing guitar, competing on the volleyball
        court, and spending quality time with my dog and family. That balance
        keeps me focused, creative, and grounded.
      </p>
    </main>
  );
}
