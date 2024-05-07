import ListItem from '@/components/ListItem/ListItem';
import Image, { StaticImageData } from 'next/image';

interface Props {
  subHeading: string;
  image: StaticImageData;
  contents: {
    heading: string;
    descriptions: string[];
  }[];
}

const Activity = ({ subHeading, image, contents }: Props) => {
  return (
    <section className="w-full h-full px-[12%] pb-[4%]">
      <div className="w-full h-[28%] flex flex-col justify-end">
        <h2 className="text-5xl text-fff font-bold">프로젝트 활동</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        <h4 className="text-xl text-fff font-extralight">{subHeading}</h4>
      </div>
      <div className="w-full h-[72%] flex items-center pt-4">
        <div className="w-[50%] h-full flex items-center">
          <div className="rounded-lg overflow-hidden transition-all ease duration-400 hover:scale-135 hover:translate-x-1/5">
            <Image src={image} alt={subHeading} loading="lazy" />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center pl-12">
          {contents.map(({ heading, descriptions }, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <p className="text-lg text-fff font-semibold mb-2">{heading}</p>
              {descriptions.map((description, idx) => (
                <ListItem
                  key={idx}
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
