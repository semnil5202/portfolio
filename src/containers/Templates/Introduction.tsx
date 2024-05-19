import ListItem from '@/components/ListItem';
import { StaticImageData } from 'next/image';
import Tech from './components/Tech';
import TemplateLayout from './components/TemplateLayout';
import IntroductionContent from './components/IntroductionContent';

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
      <section className="w-full max-w-[1140px] h-[72%] flex lg:h-[80%] lg:pt-3 md:h-[84%] md:flex md:flex-col">
        <ul className="w-[50%] h-full flex flex-col pr-10 lg:w-[55%] lg:pr-5 md:w-full md:h-max md:pr-0">
          <IntroductionContent heading="설명" content={intro} />
          {value && <IntroductionContent heading="핵심 가치" content={value} />}
          {contribution && (
            <IntroductionContent heading="기대 효과" content={contribution} />
          )}
          <div className={`${bottomContainer}`}>
            {organization && (
              <IntroductionContent
                heading="소속"
                content={organization}
                isColumnLayout={isEnough}
              />
            )}
            <IntroductionContent
              heading="기간"
              content={date}
              isColumnLayout={isEnough}
            />
            <IntroductionContent
              heading="인원"
              content={member}
              isColumnLayout={isEnough}
            />
          </div>
        </ul>
        <ul className="w-[50%] h-full lg:w-[45%] md:w-full">
          <ListItem
            textColor="text-white"
            bgColor="bg-white"
            mb="hidden md:flex"
            weight="semibold"
            size="lg"
            mediaText="md:font-medium md:text-[14px]"
          >
            기술 스택
          </ListItem>
          <ul className="flex max-w-[464px] h-max mx-auto items-center flex-wrap gap-2 pl-10 lg:max-w-[312px] lg:pl-5 lg:gap-1 md:max-w-full md:mx-0 md:ml-3 md:pl-0 md:gap-1">
            {techs.map(({ image, name }) => (
              <Tech key={name} image={image} name={name} />
            ))}
          </ul>
        </ul>
      </section>
    </TemplateLayout>
  );
};

export default Introduction;
