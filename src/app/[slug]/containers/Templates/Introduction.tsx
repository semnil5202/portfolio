import ListItem from '@/components/ListItem/ListItem';
import { StaticImageData } from 'next/image';
import Tech from './components/Tech';
import TemplateLayout from './components/TemplateLayout';

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
    <TemplateLayout heading={heading}>
      <div className="w-full max-w-[1140px] h-[72%] flex pt-6">
        <ul className="w-[50%] h-full flex flex-col pr-10">
          <div className="pb-8">
            <ListItem
              color="fff"
              bgColor="fff"
              mb="mb-2"
              weight="semibold"
              size="lg"
            >
              설명
            </ListItem>
            <p className="text-fff font-extralight ml-3 leading-relaxed">
              {intro}
            </p>
          </div>
          {value && (
            <div className="pb-8">
              <ListItem
                color="fff"
                bgColor="fff"
                mb="mb-2"
                weight="semibold"
                size="lg"
              >
                핵심 가치
              </ListItem>
              <p className="text-fff font-extralight ml-3 leading-relaxed">
                {value}
              </p>
            </div>
          )}
          {contribution && (
            <div className="pb-8">
              <ListItem
                color="fff"
                bgColor="fff"
                mb="mb-2"
                weight="semibold"
                size="lg"
              >
                기대 효과
              </ListItem>
              <p className="text-fff font-extralight ml-3 leading-relaxed">
                {contribution}
              </p>
            </div>
          )}
          <div>
            <div className={`${bottomContainer}`}>
              {organization && (
                <div className={`${isEnough && 'pb-8'}`}>
                  <ListItem
                    color="fff"
                    bgColor="fff"
                    mb="mb-2"
                    weight="semibold"
                    size="lg"
                  >
                    소속
                  </ListItem>
                  <p className="text-fff font-extralight ml-3 leading-relaxed">
                    {organization}
                  </p>
                </div>
              )}
              <div className={`${isEnough && 'pb-8'}`}>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  기간
                </ListItem>
                <p className="text-fff font-extralight ml-3 leading-relaxed">
                  {date}
                </p>
              </div>
              <div className={`${isEnough && 'pb-8'}`}>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  인원
                </ListItem>
                <p className="text-fff font-extralight ml-3 leading-relaxed">
                  {member}
                </p>
              </div>
            </div>
          </div>
        </ul>
        <div className="w-[50%] h-full">
          <ul className="flex justify-center items-center flex-wrap gap-2 pl-10 overflow-hidden">
            {techs.map(({ image, name }) => (
              <Tech key={name} image={image} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </TemplateLayout>
  );
};

export default Introduction;
