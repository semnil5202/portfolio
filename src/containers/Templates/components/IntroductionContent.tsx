import ListItem from '@/components/ListItem';

interface Props {
  heading: string;
  content: string;
  isColumnLayout?: boolean;
}

const IntroductionContent = ({ heading, content, isColumnLayout }: Props) => {
  return (
    <div className="mb-8 lg:mb-[2vw] md:mb-[0.5vw]">
      <ListItem
        textColor="text-white"
        bgColor="bg-white"
        mb="mb-2 md:mb-0"
        weight="semibold"
        size="lg"
        mediaText="md:font-medium md:text-[1.4vw]"
      >
        {heading}
      </ListItem>
      <p className="text-white font-extralight ml-3 leading-relaxed md:text-[1.2vw] md:leading-normal">
        {content}
      </p>
    </div>
  );
};

export default IntroductionContent;
