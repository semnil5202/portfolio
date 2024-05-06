import Image from 'next/image';
import DynamicText from '../../components/DynamicText/DynamicText';
import PNGPortfolioProfile from '../../../public/assets/portfolio-profile.png';
import ListItem from '@/components/ListItem/ListItem';

const LandingMain = () => {
  return (
    <div className="flex">
      <article className="w-2/5 mt-[136px] animate-init-fade-in">
        <div className="flex flex-col w-max mx-auto">
          <div className="w-[300px] h-[300px] rounded-[50%] overflow-hidden">
            <Image
              src={PNGPortfolioProfile}
              alt="프로필"
              width={300}
              height={300}
            />
          </div>

          <div className="w-max mx-auto mt-12">
            <ListItem color="fff" bgColor="fff">
              23.02 - 23.11
            </ListItem>
            <p className="text-fff mb-6 ml-3 mt-1">
              우아한테크코스 웹 프론트엔드 5기
            </p>
            <ListItem color="fff" bgColor="fff">
              17.02 - 23.02
            </ListItem>
            <p className="text-fff ml-3 mt-1">순천향대학교 정보보호학과</p>
          </div>
        </div>
      </article>

      <article className="w-3/5 mt-48 animate-init-fade-in">
        <div className="w-min mx-auto">
          <div>
            <h2 className="text-[42px] w-max text-primary-dark font-bold">
              안녕하세요.
            </h2>
            <DynamicText
              texts={[
                '프로덕트 중심으로 사고하는',
                '시도와 리팩토링을 반복하는',
                '사용자 경험을 중시하는',
              ]}
            />
            <h2 className="text-[42px] w-max text-primary-dark font-bold">
              프론트엔드 개발자 이세민입니다.
            </h2>
          </div>

          <div className="flex justify-between mt-24">
            <div className="w-[2px] h-10 bg-primary mt-[6px]" />
            <p className="w-[94%] text-primary-dark leading-7">
              대학에서 정보보호를 전공했지만 UX를 다루는 웹 프론트엔드 분야에
              매력을 느끼고, 우아한테크코스에 진학하여 10개월간의 웹 프론트엔드
              과정을 수료했습니다.
              <br />
              <br />
              프로덕트 밸류를 높이기 위해 능동적으로 사고하고 행동합니다. 단순히
              코드를 작성하는 것이 아니라 스프린트, 코드 리뷰, 3L 회고 등의
              과정을 통해, 여러 직군과 적극적으로 협업하여 문제 해결을 위한
              최적의 방법을 고민합니다.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LandingMain;
