import ListItem from '@/components/ListItem/ListItem';
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
      <div className="w-full max-w-[1140px] h-[72%] flex pt-6">
        <ul className="w-[50%] h-full flex flex-col pr-10">
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
        <div className="w-[50%] h-full">
          <ul className="flex max-w-[504px] mx-auto items-center flex-wrap gap-2 pl-10">
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
