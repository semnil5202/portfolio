import ListItem from '@/components/ListItem/ListItem';

interface Props {
  heading: string;
  content: string;
  isColumnLayout?: boolean;
}

const IntroductionContent = ({ heading, content, isColumnLayout }: Props) => {
  return (
    <div className="pb-8 lg:pb-[2vw]">
      <ListItem color="fff" bgColor="fff" mb="mb-2" weight="semibold" size="lg">
        {heading}
      </ListItem>
      <p className="text-fff font-extralight ml-3 leading-relaxed">{content}</p>
    </div>
  );
};

export default IntroductionContent;
