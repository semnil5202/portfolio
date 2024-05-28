import ListItem from '@/components/ListItem';

interface Props {
  date: string;
  content: string;
}

const ExperienceList = ({ date, content }: Props) => {
  return (
    <>
      <ListItem
        textColor="text-white"
        bgColor="bg-white"
        mb="md:px-1"
        mediaText="md:text-dark md:text-[14px] md:font-medium"
        mediaBullet="md:bg-dark"
      >
        {date}
      </ListItem>
      <p className="text-white mb-4 last:mb-0 ml-3 mt-1 md:px-1 md:text-dark md:text-[14px] md:mt-0 md:font-medium md:mb-2">
        {content}
      </p>
    </>
  );
};

export default ExperienceList;
