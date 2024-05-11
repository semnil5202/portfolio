import PNGCoding from '../../../public/assets/icons/strength-coding.png';
import PNGSoft from '../../../public/assets/icons/strength-soft.png';
import PNGRecord from '../../../public/assets/icons/strength-record.png';
import RoundedImage from '@/components/RoundedImage/RoundedImage';
import ListItem from '@/components/ListItem/ListItem';
import Link from 'next/link';

const Strength = () => {
  return (
    <div className="h-full flex items-center">
      <div className="w-[1140px] h-max flex justify-between mx-auto lg:w-full lg:justify-around md:w-full md:justify-around">
        <div className="flex flex-col items-center">
          <RoundedImage src={PNGCoding} alt="개발 일러스트" bgColor="fff" />
          <ul className="w-[300px] mt-10 font-light md:w-[28vw] md:mt-[2vw]">
            <ListItem color="fff" bgColor="fff" mb="mb-3">
              React와 Next.js를 주로 사용하고 있으며, T-Map과 React를 결합하여
              서비스를 배포해 본{' '}
              <Link
                href="https://github.com/woowacourse-teams/2023-map-befine"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                경험이 있습니다.
              </Link>
            </ListItem>
            <ListItem color="fff" bgColor="fff" mb="mb-3">
              마커 클러스터링과 마커 동적 렌더링을 구현하여 렌더링 프레임을 48%
              향상시켜 사용자 경험을{' '}
              <Link
                href="https://velog.io/@semnil5202/%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EB%A7%88%EC%BB%A4-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                개선했습니다.
              </Link>
            </ListItem>
            <ListItem color="fff" bgColor="fff">
              레거시 코드 개선과 중복 코드 최소화를 위해 Storybook을 활용하여
              디자인 시스템을 구축해 본{' '}
              <Link
                href="https://github.com/ConceptBe/conceptbe-design-system"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                경험이 있습니다.
              </Link>
            </ListItem>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <RoundedImage src={PNGSoft} alt="회의 일러스트" bgColor="fff" />
          <ul className="w-[300px] mt-10 font-light md:w-[28vw] md:mt-[2vw]">
            <ListItem color="fff" bgColor="fff" mb="mb-3">
              여러 직군과 적극적으로 소통합니다. 8개월 간 완성되지 못한
              프로젝트에 중도 참여하여 4개월만에 런칭시킨{' '}
              <Link
                href="https://github.com/ConceptBe/conceptbe-frontend"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                경험이 있습니다.
              </Link>
            </ListItem>
            <ListItem color="fff" bgColor="fff" mb="mb-3">
              건강한 프로덕트는 건강한 팀 문화에서 나온다고 생각합니다. 지속적인
              얼라인을 위한 체계적인 팀 문화를{' '}
              <Link
                href="https://github.com/woowacourse-teams/2023-map-befine/wiki/%ED%8C%80-%EC%86%8C%EA%B0%9C"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                구축한 적이 있습니다.
              </Link>
            </ListItem>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <RoundedImage src={PNGRecord} alt="기록 일러스트" bgColor="fff" />
          <ul className="w-[300px] mt-10 font-light md:w-[28vw] md:mt-[2vw]">
            <ListItem color="fff" bgColor="fff" mb="mb-3">
              기록과 공유를 좋아해 개발 과정에서 겪은 트러블 슈팅이나 학습한
              내용을 블로그에 꾸준히{' '}
              <Link
                href="https://velog.io/@semnil5202/posts"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                작성하고 있습니다.
              </Link>
            </ListItem>
            <ListItem color="fff" bgColor="fff">
              10분 테코톡에서 React의 제어 컴포넌트와 비제어 컴포넌트를 동작
              원리 및 사용자 경험 측면에서 비교 분석하여{' '}
              <Link
                href="https://www.youtube.com/watch?v=PBgQKK6nelo&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC"
                target="_blank"
                className="text-link underline hover:text-fff"
              >
                발표했습니다.
              </Link>
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strength;
