import Brief from '@/app/components/home/Brief';
import Experience from '@/app/components/home/Experience';
import Title from '@/app/components/home/Title';

const HomePage = () => {
  return (
    <div className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col gap-10 md:gap-20'>
      <section className='w-full flex flex-col items-center justify-center gap-10'>
        <Title />
        <Brief />
      </section>
      <Experience />
    </div>
  );
};
export default HomePage;
