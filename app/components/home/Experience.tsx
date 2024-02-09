import { WorkExperience } from '@/app/constants/constants';
import AnchorLink from '@/app/components/shared/AnchorLink';
import ExperienceListItem from '@/app/components/home/ExperienceListItem';

export default function Experience() {
  return (
    <div className='relative w-full flex flex-col gap-10'>
      {/* header */}
      <div className='relative flex items-center justify-between'>
        {/* title */}
        <h4 className='w-full'>Experience</h4>
        {/* view resume btn */}
        <div className='absolute top-1 right-0 group flex items-center gap-2'>
          <AnchorLink
            href={'files/CesarGomez_Resume.pdf'}
            label={'View resume'}
            variant={'download'}
          />
        </div>
      </div>

      {/* experience wrapper */}
      <ol className='relative border-s border-sky-400'>
        {WorkExperience.map((experience, index) => (
          <ExperienceListItem
            key={experience.id}
            index={index}
            length={WorkExperience.length}
            experience={experience}
          />
        ))}
      </ol>
    </div>
  );
}
