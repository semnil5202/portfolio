import Image from 'next/image';
import DynamicText from '../../components/DynamicText';
import PNGPortfolioProfile from '../../../public/assets/portfolio-profile.png';
import SVGGithubLogo from '../../../public/assets/icons/github-logo.svg';
import SVGVelogLogo from '../../../public/assets/icons/velog-logo.svg';
import ListItem from '@/components/ListItem';
import Link from 'next/link';

const LandingMain = () => {
  return (
    <>
      <div className="fixed flex flex-col h-[100px] justify-between right-8 top-8 animate-init-fade-in-move md:right-2 md:top-2 md:h-[68px]">
        <Link href="https://github.com/semnil5202" target="_blank">
          <SVGGithubLogo
            className="md:w-[28px] md:h-[28px]"
            viewBox="0 0 40 40"
          />
        </Link>
        <Link href="https://velog.io/@semnil5202/posts" target="_blank">
          <SVGVelogLogo
            className="md:w-[28px] md:h-[28px]"
            viewBox="0 0 40 40"
          />
        </Link>
      </div>
      <div className="h-full flex items-center">
        <article className="w-2/5 mt-[-100px] animate-init-fade-in-move md:mt-0">
          <div className="flex flex-col w-max mx-auto">
            <div className="w-[300px] h-[300px] rounded-[50%] overflow-hidden md:w-[17vw] md:h-[17vw]">
              <Image
                src={PNGPortfolioProfile}
                alt="프로필 이미지"
                placeholder="blur"
                className="animate-pulse bg-gray-500"
                onLoad={(e) =>
                  e.currentTarget.classList.remove('animate-pulse')
                }
              />
            </div>

            <ul className="w-max mx-auto mt-12 font-light md:mt-[1.2vw]">
              <ListItem textColor="text-white" bgColor="bg-white">
                23.02 - 23.11
              </ListItem>
              <p className="text-white mb-6 ml-3 mt-1 md:text-[1.5vw] md:mb-[0.6vw]">
                우아한테크코스 웹 프론트엔드 5기
              </p>
              <ListItem textColor="text-white" bgColor="bg-white">
                17.02 - 23.02
              </ListItem>
              <p className="text-white ml-3 mt-1 md:text-[1.5vw]">
                순천향대학교 정보보호학과
              </p>
            </ul>
          </div>
        </article>

        <article className="w-3/5 ml-[-1%] animate-init-fade-in-move">
          <div className="w-min mx-auto md:w-[82%]">
            <div>
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold lg:text-4xl lg:leading-normal md:text-[3vw] md:font-medium">
                안녕하세요.
              </h2>
              <DynamicText
                texts={[
                  '프로덕트 중심으로 사고하는',
                  '시도와 리팩토링을 반복하는',
                  '사용자 경험을 중시하는',
                ]}
              />
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold lg:text-4xl lg:leading-normal md:text-[3vw] md:font-medium">
                프론트엔드 개발자 이세민입니다.
              </h2>
            </div>

            <div className="flex justify-between mt-24 md:mt-[2vw]">
              <div className="w-[2px] h-[40px] bg-primary mt-[6px] lg:h-[64px] md:w-px md:h-[3.2vw] md:mt-[0.48vw]" />
              <p className="w-[94%] text-primary-dark leading-relaxed md:text-[1.5vw] md:leading-normal">
                대학에서 정보보호를 전공하고 UX를 다루는 웹 프론트엔드 분야에
                매력을 느껴, 우아한테크코스에 진학해 10개월간의 웹 프론트엔드
                과정을 수료했습니다.
                <br />
                <br />
                프로덕트 밸류를 높이기 위해 능동적으로 사고하고 행동합니다.
                단순히 코드를 작성하는 것이 아니라 스프린트, 코드 리뷰, 3L 회고
                등의 과정을 통해, 여러 직군과 적극적으로 협업하여 문제 해결을
                위한 최적의 방법을 고민합니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LandingMain;
