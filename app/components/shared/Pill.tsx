interface Props {
  text: string;
}
const Pill = ({ text }: Props) => {
  return (
    <div className='px-2 py-1 font-sans text-xs bg-neutral-100 text-purple-800 dark:bg-neutral-900 dark:text-purple-400 rounded'>
      {text}
    </div>
  );
};

export default Pill;
