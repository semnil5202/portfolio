import ListItem from '@/components/ListItem';
import { StaticImageData } from 'next/image';
import NavTech from './components/NavTech';
import NavTemplateLayout from './components/NavTemplateLayout';
import NavIntroductionContent from './components/NavIntroductionContent';

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

const NavIntroduction = ({
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
    <NavTemplateLayout heading={heading}>
      <section className="w-full max-w-[1140px] h-[80%] flex">
        <ul className="w-[50%] h-full flex flex-col pr-[2px]">
          <NavIntroductionContent heading="설명" content={intro} />
          {value && (
            <NavIntroductionContent heading="핵심 가치" content={value} />
          )}
          {contribution && (
            <NavIntroductionContent
              heading="기대 효과"
              content={contribution}
            />
          )}
          <div className={`${bottomContainer}`}>
            {organization && (
              <NavIntroductionContent heading="소속" content={organization} />
            )}
            <NavIntroductionContent heading="기간" content={date} />
            <NavIntroductionContent heading="인원" content={member} />
          </div>
        </ul>
        <ul className="w-[50%] h-full">
          <ListItem
            textColor="text-white"
            bgColor="bg-white"
            mb="hidden"
            weight="semibold"
            size="lg"
            mediaText=""
          >
            기술 스택
          </ListItem>
          <ul className="flex max-w-[50px] h-max mx-auto items-center flex-wrap gap-[2px] pl-[2px]">
            {techs.map(({ image, name }) => (
              <NavTech key={name} image={image} name={name} />
            ))}
          </ul>
        </ul>
      </section>
    </NavTemplateLayout>
  );
};

export default NavIntroduction;
