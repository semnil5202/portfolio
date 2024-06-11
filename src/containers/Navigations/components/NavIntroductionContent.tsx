import ListItem from '@/components/ListItem';

interface Props {
  heading: string;
  content: string;
  isColumnLayout?: boolean;
}

const NavIntroductionContent = ({
  heading,
  content,
  isColumnLayout,
}: Props) => {
  return (
    <div className="mb-8 lg:mb-4 md:mb-2">
      <ListItem
        textColor="text-white"
        bgColor="bg-white"
        mb="mb-2 md:mb-0"
        weight="semibold"
        size="lg"
        mediaText="md:font-medium md:text-[14px]"
      >
        {heading}
      </ListItem>
      <p className="text-white font-extralight ml-3 leading-relaxed md:text-[12px] md:leading-normal">
        {content}
      </p>
    </div>
  );
};

export default NavIntroductionContent;
