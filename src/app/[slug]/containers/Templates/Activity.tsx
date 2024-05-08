import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';

interface Props {
  heading: string;
  subHeading?: string;
  image: StaticImageData;
  contents: {
    heading: string;
    descriptions: string[];
  }[];
}

const Activity = ({ heading, subHeading, image, contents }: Props) => {
  return (
    <section className="w-full h-full px-[12%] pb-[4%]">
      <div className="w-full h-[24%] flex flex-col justify-end">
        <h2 className="text-4xl text-fff font-bold">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        {subHeading ? (
          <h4 className="text-lg text-fff font-extralight">{subHeading}</h4>
        ) : (
          <div className="w-full h-[28px]" />
        )}
      </div>
      <div className="w-full h-[76%] flex items-center pt-10">
        <div className="w-[50%] h-full flex">
          <div className="h-max rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-135 hover:translate-y-10">
            <Image src={image} alt={heading} loading="lazy" />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col pl-12">
          {contents.map(({ heading, descriptions }, idx) => (
            <div key={heading} className="mb-6 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={description}
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="extralight"
                >
                  {description}
                </ListItem>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;
