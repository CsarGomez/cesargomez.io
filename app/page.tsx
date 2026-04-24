export default function Home() {
  return (
    <main className='mx-auto flex h-[calc(100dvh-80px)] w-3xl flex-col justify-center gap-4 rounded-lg px-14 py-8'>
      {/* <img
        src='/img/me.png'
        alt='me'
        className='h-32 w-32 rounded-full border border-gray-600 object-cover dark:border-gray-300'
      /> */}
      <p>Hi !.</p>
      <h1 className='font-title text-3xl leading-0 font-semibold'>
        I&apos;m Cesar Gomez
      </h1>
      <p className='font-serif text-lg text-sky-500'>
        A software developer with love of beating personal beats.
      </p>
      <p>
        I&apos;m a big believer in lifelong learning. While my main focus is on
        JavaScript, I continuously expand my skill set by exploring new
        languages and technologies.
      </p>
      <p>
        I&apos;m a motivated developer with a passion for building innovative,
        user-friendly applications that create real impact.
      </p>
      <p>
        Outside of coding, I&apos;m a music enthusiast who enjoys playing guitar
        and volleyball, and I value spending quality time with my dog and
        family.
      </p>
    </main>
  );
}
