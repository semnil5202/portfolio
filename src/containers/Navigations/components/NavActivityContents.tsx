import NavListItem from './NavListItem';

interface Props {
  contents: {
    heading: string;
    descriptions: string[];
  }[];
  link?: {
    heading: string;
    name: string;
    href: string;
  };
}

const NavActivityContents = ({ contents, link }: Props) => {
  return (
    <>
      {contents.map(({ heading, descriptions }) => (
        <div key={heading} className="mb-1">
          <p className="text-[2px] text-white font-semibold mb-[2px]">
            {heading}
          </p>
          {descriptions.map((description) => (
            <NavListItem
              key={description}
              fontWeight="font-extralight"
              fontSize="text-[2px]"
            >
              {description}
            </NavListItem>
          ))}
        </div>
      ))}
      {link && (
        <div className="mb-1">
          <p className="text-[2px] text-white font-semibold mb-[2px]">
            {link.heading}
          </p>
          <NavListItem fontWeight="font-extralight" fontSize="text-[2px]">
            <p className="underline text-link">{link.name}</p>
          </NavListItem>
        </div>
      )}
    </>
  );
};

export default NavActivityContents;
