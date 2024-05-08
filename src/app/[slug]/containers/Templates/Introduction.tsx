import ListItem from '@/components/ListItem/ListItem';
import { StaticImageData } from 'next/image';
import Tech from './components/Tech';

interface Props {
  intro: string;
  value: string;
  contribution: string;
  date: string;
  organization?: string;
  member: string;
  techs: {
    image: StaticImageData;
    name: string;
  }[];
}

const Introduction = ({
  intro,
  value,
  contribution,
  date,
  member,
  organization = '',
  techs,
}: Props) => {
  return (
    <section className="w-full h-full px-[12%] pb-[6%]">
      <div className="w-full h-[28%] flex flex-col justify-end">
        <h2 className="text-5xl text-fff font-bold">프로젝트 개요</h2>
        <div className="w-[48px] h-[2px] bg-fff my-3" />
        <div className="w-full h-[28px]" />
      </div>
      <div className="w-full h-[72%] flex pt-6">
        <ul className="w-[50%] h-full flex flex-col justify-between pr-10">
          <div>
            <ListItem
              color="fff"
              bgColor="fff"
              mb="mb-2"
              weight="semibold"
              size="lg"
            >
              설명
            </ListItem>
            <p className="text-fff font-extralight ml-3">{intro}</p>
          </div>
          <div>
            <ListItem
              color="fff"
              bgColor="fff"
              mb="mb-2"
              weight="semibold"
              size="lg"
            >
              핵심 가치
            </ListItem>
            <p className="text-fff font-extralight ml-3">{value}</p>
          </div>
          <div>
            <ListItem
              color="fff"
              bgColor="fff"
              mb="mb-2"
              weight="semibold"
              size="lg"
            >
              기대 효과
            </ListItem>
            <p className="text-fff font-extralight ml-3">{contribution}</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  소속
                </ListItem>
                <p className="text-fff font-extralight ml-3">{organization}</p>
              </div>
              <div>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  기간
                </ListItem>
                <p className="text-fff font-extralight ml-3">{date}</p>
              </div>
              <div>
                <ListItem
                  color="fff"
                  bgColor="fff"
                  mb="mb-2"
                  weight="semibold"
                  size="lg"
                >
                  팀원
                </ListItem>
                <p className="text-fff font-extralight ml-3">{member}</p>
              </div>
            </div>
          </div>
        </ul>
        <div className="w-[50%]">
          <ul className="flex max-w-[600px] justify-center items-center flex-wrap gap-2 pl-10 overflow-hidden">
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
