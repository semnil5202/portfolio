import Image from 'next/image';
import DynamicText from '../../components/DynamicText/DynamicText';
import PNGPortfolioProfile from '../../../public/assets/portfolio-profile.png';
import SVGGithubLogo from '../../../public/assets/icons/github-logo.svg';
import SVGVelogLogo from '../../../public/assets/icons/velog-logo.svg';
import ListItem from '@/components/ListItem/ListItem';
import Link from 'next/link';

const LandingMain = () => {
  return (
    <>
      <div className="fixed flex flex-col h-[100px] justify-between right-8 top-8 animate-init-fade-in-move md:right-4 md:top-4">
        <Link href="https://github.com/semnil5202" target="_blank">
          <SVGGithubLogo />
        </Link>
        <Link href="https://velog.io/@semnil5202/posts" target="_blank">
          <SVGVelogLogo />
        </Link>
      </div>
      <div className="h-full flex items-center">
        <article className="w-2/5 mt-[-100px] animate-init-fade-in-move md:mt-0">
          <div className="flex flex-col w-max mx-auto md:items-center">
            <div className="w-[300px] h-[300px] rounded-[50%] overflow-hidden md:w-[150px] md:h-[150px]">
              <Image
                src={PNGPortfolioProfile}
                alt="프로필"
                priority
                className="animate-skeleton"
              />
            </div>

            <ul className="w-max mx-auto mt-12 font-light md:mt-6">
              <ListItem color="fff" bgColor="fff">
                23.02 - 23.11
              </ListItem>
              <p className="text-fff mb-6 ml-3 mt-1 md:text-sm">
                우아한테크코스 웹 프론트엔드 5기
              </p>
              <ListItem color="fff" bgColor="fff">
                17.02 - 23.02
              </ListItem>
              <p className="text-fff ml-3 mt-1">순천향대학교 정보보호학과</p>
            </ul>
          </div>
        </article>

        <article className="w-3/5 ml-[-1%] animate-init-fade-in-move md:ml-0">
          <div className="w-min mx-auto">
            <div>
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold md:text-3xl md:leading-normal">
                안녕하세요.
              </h2>
              <DynamicText
                texts={[
                  '프로덕트 중심으로 사고하는',
                  '시도와 리팩토링을 반복하는',
                  '사용자 경험을 중시하는',
                ]}
              />
              <h2 className="text-5xl leading-snug w-max text-primary-dark font-bold md:text-3xl md:leading-normal">
                프론트엔드 개발자 이세민입니다.
              </h2>
            </div>

            <div className="flex justify-between mt-24 md:mt-6">
              <div className="w-[2px] h-[42px] bg-primary mt-[6px]" />
              <p className="w-[94%] text-primary-dark leading-relaxed md:text-sm">
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
