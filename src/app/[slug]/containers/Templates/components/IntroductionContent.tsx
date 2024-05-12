import ListItem from '@/components/ListItem/ListItem';

interface Props {
  heading: string;
  content: string;
  isColumnLayout?: boolean;
}

const IntroductionContent = ({ heading, content, isColumnLayout }: Props) => {
  return (
    <div className="pb-8 lg:pb-[2vw] md:pb-[1vw]">
      <ListItem
        color="fff"
        bgColor="fff"
        mb="mb-2 md:mb-0"
        weight="semibold"
        size="lg"
        media="md:font-medium"
      >
        {heading}
      </ListItem>
      <p className="text-fff font-extralight ml-3 leading-relaxed md:text-[1.35vw]">
        {content}
      </p>
    </div>
  );
};

export default IntroductionContent;
