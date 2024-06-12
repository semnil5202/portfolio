import ListItem from '@/components/ListItem';

interface Props {
  heading: string;
  content: string;
}

const NavIntroductionContent = ({ heading, content }: Props) => {
  return (
    <div className="mb-1">
      <ListItem
        textColor="text-white"
        bgColor="bg-white"
        mb="gap-1 items-center"
        weight="semibold"
        size="[2px]"
        mediaBullet="min-w-px min-h-px mt-0"
      >
        {heading}
      </ListItem>
      <p className="text-white text-[2px] font-extralight ml-1 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default NavIntroductionContent;
