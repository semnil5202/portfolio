import NavListItem from './NavListItem';

interface Props {
  heading: string;
  content: string;
}

const NavIntroductionContent = ({ heading, content }: Props) => {
  return (
    <div className="mb-1">
      <NavListItem fontWeight="font-semibold" fontSize="text-[2px]">
        {heading}
      </NavListItem>
      <p className="text-white text-[2px] font-extralight ml-1 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default NavIntroductionContent;
