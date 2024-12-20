import DynamicText from '../../components/DynamicText';
import PNGPortfolioProfile from '../../../public/assets/portfolio-profile.png';
import SVGGithubLogo from '../../../public/assets/icons/github-logo.svg';
import SVGVelogLogo from '../../../public/assets/icons/velog-logo.svg';
import Link from 'next/link';
import SkeletonImage from '@/components/SkeletonImage';
import EXPERIENCES from '@/constants/experience';
import ExperienceList from './components/ExperienceList';

const LandingMain = () => {
  return (
    <div className="w-full h-full">
      <section className="fixed flex flex-col h-[100px] justify-between right-8 top-8 animate-init-fade-in-move md:right-4 md:top-4 md:h-[84px]">
        <Link href="https://github.com/semnil5202" target="_blank">
          <SVGGithubLogo
            className="md:w-[36px] md:h-[36px]"
            viewBox="0 0 40 40"
          />
        </Link>
        <Link href="https://velog.io/@semnil5202/posts" target="_blank">
          <SVGVelogLogo
            className="md:w-[36px] md:h-[36px]"
            viewBox="0 0 40 40"
          />
        </Link>
      </section>
      <section className="h-full flex items-center mt-[-2vh] md:flex-col md:justify-center">
        <div className="w-2/5 animate-init-fade-in-move xl:w-[45%] md:w-full md:flex md:items-center md:h-[50%] md:mt-0">
          <div className="flex flex-col w-max mx-auto md:relative">
            <SkeletonImage
              image={PNGPortfolioProfile}
              alt="프로필 이미지"
              isBlur
              imageClassName="bg-gray-500"
              containerClassName="w-[300px] h-[300px] rounded-[50%] overflow-hidden lg:w-[240px] lg:h-[240px] md:fixed md:translate-y-[-40%] md:translate-x-[-75%] md:w-[55vw] md:h-[55vw] md:min-w-[200px] md:min-h-[200px] md:max-w-[300px] md:max-h-[300px]"
            />

            <ul className="w-max mx-auto mt-12 font-light md:fixed md:bg-white md:rounded-md md:translate-y-[40%] md:translate-x-[-20%] md:mt-3">
              {EXPERIENCES.map(({ date, content }) => (
                <ExperienceList key={date} date={date} content={content} />
              ))}
            </ul>
          </div>
        </div>

        <div className="w-3/5 mt-[72px] animate-init-fade-in-move xl:w-[55%] xl:ml-[-5%] md:w-full md:flex md:items-center md:h-[50%]">
          <div className="w-min mx-auto md:w-[75%] md:max-w-[460px]">
            <div>
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold lg:text-[32px] lg:leading-normal md:text-[20px] md:leading-normal md:text-white md:font-medium">
                안녕하세요.
              </h2>
              <DynamicText
                texts={[
                  '프로덕트 중심으로 사고하는',
                  '시도와 리팩토링을 반복하는',
                  '사용자 경험을 중시하는',
                ]}
              />
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold lg:text-[32px] lg:leading-normal md:text-[20px] md:leading-normal md:text-white md:font-medium">
                프론트엔드 개발자 이세민입니다.
              </h2>
            </div>

            <div className="flex justify-between mt-[98px] lg:mt-[52px] md:mt-4">
              <div className="w-[2px] h-[40px] bg-primary mt-[6px] lg:h-[64px] md:w-px md:bg-white md:h-[32px] md:mt-[4px]" />
              <div className="w-[94%] text-primary-dark leading-relaxed md:text-[14px] md:text-white md:font-extralight md:leading-normal">
                <p className="mb-4 md:hidden">
                  대학에서 정보보호를 전공하고 UX를 다루는 웹 프론트엔드 분야에
                  매력을 느껴, 우아한테크코스에 진학해 10개월간의 웹 프론트엔드
                  과정을 수료했습니다.
                </p>
                <p className="md:whitespace-pre-wrap">
                  {`프로덕트 밸류를 높이기 위해 능동적으로 사고하고 행동합니다.\n\n단순히 코드를 작성하는 것이 아니라 스프린트, 코드 리뷰, 3L 회고 등의 과정을 통해, 여러 직군과 적극적으로 협업하여 문제 해결을 위한 최적의 방법을 고민합니다.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingMain;
