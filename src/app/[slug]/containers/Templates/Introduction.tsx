import ListItem from '@/components/ListItem/ListItem';
import { StaticImageData } from 'next/image';
import Tech from './components/Tech';

interface Props {
  heading: string;
  intro: string;
  value?: string;
  contribution?: string;
  organization?: string;
  date: string;
  member: string;
  techs: {
    image: StaticImageData;
    name: string;
  }[];
}

const Introduction = ({
  heading,
  intro,
  value,
  contribution,
  date,
  member,
  organization,
  techs,
}: Props) => {
  const isEnough = !value && !contribution;
  const bottomContainer = isEnough ? 'flex flex-col' : 'flex justify-between';

  return (
    <section className="w-full h-full px-[8%] pb-[4%] flex flex-col items-center md:px-[4%] md:pb-0">
      <div className="w-full max-w-[1140px] h-[28%] flex flex-col justify-end md:h-[18%]">
        <h2 className="text-4xl text-fff font-bold md:text-2xl">{heading}</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3 md:my-1 md:w-[24px]" />
        <div className="w-full h-[28px] md:h-[14px]" />
      </div>
      <div className="w-full max-w-[1140px] h-[72%] flex pt-6 md:pt-0 md:h-[82%]">
        <ul className="w-[50%] h-full flex flex-col pr-10 md:pr-2">
          <div className="pb-8 md:pb-2">
            <ListItem
              color="fff"
              bgColor="fff"
              mb="mb-2"
              weight="semibold"
              size="lg"
            >
              설명
            </ListItem>
            <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
              {intro}
            </p>
          </div>
          {value && (
            <div className="pb-8 md:pb-2">
              <ListItem
                color="fff"
                bgColor="fff"
                mb="mb-2"
                weight="semibold"
                size="lg"
              >
                핵심 가치
              </ListItem>
              <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
                {value}
              </p>
            </div>
          )}
          {contribution && (
            <div className="pb-8 md:pb-2">
              <ListItem
                color="fff"
                bgColor="fff"
                mb="mb-2"
                weight="semibold"
                size="lg"
              >
                기대 효과
              </ListItem>
              <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
                {contribution}
              </p>
            </div>
          )}
          <div>
            <div className={`${bottomContainer}`}>
              {organization && (
                <div className={`${isEnough && 'pb-8 md:pb-2'}`}>
                  <ListItem
                    color="fff"
                    bgColor="fff"
                    mb="mb-2"
                    weight="semibold"
                    size="lg"
                  >
                    소속
                  </ListItem>
                  <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
                    {organization}
                  </p>
                </div>
              )}
              <div className={`${isEnough && 'pb-8 md:pb-2'}`}>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  기간
                </ListItem>
                <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
                  {date}
                </p>
              </div>
              <div className={`${isEnough && 'pb-8 md:pb-2'}`}>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  인원
                </ListItem>
                <p className="text-fff font-extralight ml-3 leading-relaxed md:text-xs">
                  {member}
                </p>
              </div>
            </div>
          </div>
        </ul>
        <div className="w-[50%] h-full md:mt-[-5%]">
          <ul className="flex justify-center items-center flex-wrap gap-2 pl-10 overflow-hidden md:pl-2">
            {techs.map(({ image, name }) => (
              <Tech key={name} image={image} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
