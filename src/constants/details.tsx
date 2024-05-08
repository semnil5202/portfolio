import { Detail } from '@/app/[slug]/types';
import PNGTechCypress from '../../public/assets/icons/tech-cypress.png';
import PNGTechGa from '../../public/assets/icons/tech-ga.png';
import PNGTechJest from '../../public/assets/icons/tech-jest.png';
import PNGTechRq from '../../public/assets/icons/tech-rq.png';
import PNGTechMsw from '../../public/assets/icons/tech-msw.png';
import PNGTechReact from '../../public/assets/icons/tech-react.png';
import PNGTechTl from '../../public/assets/icons/tech-tl.png';
import PNGTechStory from '../../public/assets/icons/tech-story.png';
import PNGTechStyled from '../../public/assets/icons/tech-styled.png';
import PNGTechTs from '../../public/assets/icons/tech-ts.png';
import PNGTechWebpack from '../../public/assets/icons/tech-webpack.png';
import PNGTechZustand from '../../public/assets/icons/tech-zustand.png';
import PNGTechEmotion from '../../public/assets/icons/tech-emotion.png';
import PNGTechVite from '../../public/assets/icons/tech-vite.png';

import SVGFigmaLogo from '../../public/assets/icons/figma-logo.svg';
import SVGGithubLogoWhite from '../../public/assets/icons/github-logo-white.svg';

import SVGMapBeFineLogo from '../../public/assets/icons/mapbefine-logo.svg';
import PNGMapBeFine from '../../public/assets/mapbefine-landing.png';
import PNGMapBeFineMcBefore from '../../public/assets/projects/mapbefine-mc-before.png';
import PNGMapBeFineMcAfter from '../../public/assets/projects/mapbefine-mc-after.png';
import PNGMapBeFineSwiper1 from '../../public/assets/projects/mapbefine-swiper-1.png';
import PNGMapBeFineSwiper2 from '../../public/assets/projects/mapbefine-swiper-2.png';
import PNGMapBeFineSwiper3 from '../../public/assets/projects/mapbefine-swiper-3.png';
import PNGMapBeFineSwiperPercentage from '../../public/assets/projects/mapbefine-swiper-percentage.png';
import PNGMapBeFineLoading1 from '../../public/assets/projects//mapbefine-loading-1.png';
import PNGMapBeFineLoading2 from '../../public/assets/projects//mapbefine-loading-2.png';
import GIFMapBeFineInteraction from '../../public/assets/projects/mapbefine-interaction.gif';
import GIFMapBeFineResponsive from '../../public/assets/projects/mapbefine-responsive.gif';

import SVGConceptBeLogoBig from '../../public/assets/icons/concept-be-logo-big.svg';
import SVGConceptLogo from '../../public/assets/icons/concept-be-logo.svg';
import PNGConceptBe from '../../public/assets/concept-be-landing.png';
import GIFConceptBeDebouncing from '../../public/assets/projects/conceptbe-debouncing.gif';
import GIFConceptBeScroll from '../../public/assets/projects/conceptbe-scroll.gif';

import SVGWoowaLogoBig from '../../public/assets/icons/woowa-logo-big.svg';

export const DETAIL_LANDING = {
  'map-befine': PNGMapBeFine,
  'concept-be': PNGConceptBe,
  'shopping-cart': PNGMapBeFine,
  'movie-list': PNGMapBeFine,
  portfolio: PNGMapBeFine,
};

const DETAILS: Detail = {
  'map-befine': [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      links: [
        {
          name: 'Service',
          href: 'https://mapbefine.com/',
          svg: SVGMapBeFineLogo,
        },
        {
          name: 'Github',
          href: 'https://github.com/woowacourse-teams/2023-map-befine',
          svg: SVGGithubLogoWhite,
        },
        {
          name: 'Figma',
          href: 'https://www.figma.com/file/xgmKaz4AiIrlctuhCb1avk/map-befine?type=design&node-id=0%3A1&mode=design&t=ZRmgumwgoYJMraPb-1',
          svg: SVGFigmaLogo,
        },
      ],
    },
    {
      id: 2,
      template: 'introduction',
      intro:
        '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스입니다. 서로 다른 주제의 지도를 한 번에 모아보거나, 마음에 드는 장소만 골라 나만의 지도로 재탄생 시킬 수도 있습니다. 또한 내가 선택한 사람들과 협력하여 지도를 만들 수 있습니다.',
      value:
        '위치 기반으로 다양한 주제의 정보들을 기록하고 공유하면서 기존의 텍스트와 이미지로 느낄 수 없었던 새로운 경험을 전하는 것을 핵심 가치로 삼고 있습니다.',
      contribution:
        '다른 사람과 정보 공유가 제한적인 타 지도 서비스와는 달리, 정보를 공유하고 활용하면서 새로운 가치를 도출해낼 수 있을 것으로 기대합니다.',
      organization: '우아한테크코스',
      date: '23.06 - 23.12',
      member: 'FE: 3명, BE: 4명',
      techs: [
        { image: PNGTechTs, name: 'TypeScript' },
        { image: PNGTechReact, name: 'React' },
        { image: PNGTechZustand, name: 'Zustand' },
        { image: PNGTechRq, name: 'React Query' },
        { image: PNGTechStyled, name: 'Styled Components' },
        { image: PNGTechWebpack, name: 'Webpack' },
        { image: PNGTechStory, name: 'Storybook' },
        { image: PNGTechMsw, name: 'MSW' },
        { image: PNGTechJest, name: 'Jest' },
        { image: PNGTechTl, name: 'Testing Library' },
        { image: PNGTechCypress, name: 'Cypress' },
        { image: PNGTechGa, name: 'Github Actions' },
      ],
    },
    {
      id: 3,
      template: 'separator',
      type: 'separate',
      heading: '프로젝트 활동',
    },
    {
      id: 4,
      template: 'activity',
      heading: '사이드 바와 지도 간 상호작용 기능 및 지도 이벤트 핸들링 구현',
      image: GIFMapBeFineInteraction,
      contents: [
        {
          heading: '요구 사항',
          descriptions: [
            '지도 위 마커를 클릭했을 때 사이드바를 확장하여 세부 정보를 보여줄 수 있도록 해야 했고, 사이드 바의 리스트를 클릭하면 해당 정보의 위치가 지도의 중앙으로 오도록 이동 및 줌 인 시켜야 했습니다. 또한 사이드 바가 확장된 채로 URL 공유 기능이 가능해야 했습니다.',
            '사용자가 지도를 드래그 및 줌 할 때 마커 클러스터링, 마커 동적 렌더링 등 복잡한 연산과 서버와의 통신을 최소한으로 수행해야 했습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'Route State 및 쿼리 파라미터와 React의 State를 결합하여 마커 및 사이드 바 클릭 여부를 확인할 수 있도록 함으로써, 사이드 바와 지도 간 상호작용과 URL 공유를 가능하게 했습니다.',
            '지도 이벤트 핸들링 로직에 디바운싱을 걸어 마지막 이벤트에만 로직을 수행하도록 하여 서버 통신과 연산 비용을 절감하고 효율적으로 지도를 조작할 수 있도록 했습니다.',
          ],
        },
      ],
    },
    {
      id: 5,
      template: 'activity-images',
      heading: '마커 클러스터링과 마커 동적 렌더링 구현',
      images: [PNGMapBeFineMcBefore, PNGMapBeFineMcAfter],
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '적은 수의 마커를 보유한 지도의 경우 사용자가 서비스를 이용하는데 큰 문제점이 없었지만, 수백 개 이상의 마커를 보유한 지도의 경우 마커가 지도를 가려 위치 확인이 어렵고 지도를 조작할 때 버벅대는 문제가 있었습니다.',
            '마커 클러스터링을 도입한 후에도 사용자가 지도를 최대로 확대한 경우, 마커 클러스터링이 모두 해제되어 지도를 조작할 때 버벅대는 문제가 여전히 남아있었습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            '지도의 줌 레벨에 따라 마커의 지름이 지도 상에서 차지하는 실제 거리를 구하고, 마커 간 겹침 여부를 판단하는 방법으로 마커 클러스터링을 구현했습니다.',
            '스크린 사이즈에 해당하는 마커들만 동적으로 렌더링하도록 마커 렌더링 로직을 보완했습니다.',
          ],
        },
        {
          heading: '결과',
          descriptions: [
            '두 번째 이미지에서 볼 수 있듯이 지도의 가시성을 효과적으로 개선했고, 27인치 FHD, 75fps 모니터 환경에서 800여 개의 마커를 기준으로 렌더링 프레임을 48fps에서 71fps로 향상시킬 수 있었습니다.',
          ],
        },
      ],
    },
    {
      id: 6,
      template: 'activity-images',
      heading: 'Swiper 라이브러리 구현으로 메인 페이지 UI 개선',
      subHeading: '메인 페이지 UI 변화 과정',
      images: [PNGMapBeFineSwiper1, PNGMapBeFineSwiper2, PNGMapBeFineSwiper3],
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '서비스 초반의 메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하기에 불편했습니다. 본인의 관심사를 기록하는 사용자가 많을 것이라는 예상에 메인 페이지에서부터 지도를 배치했지만, 실제로는 구경하는 사용자가 더 많아 메인 페이지에서부터 지도를 사용하는 경우가 드물었습니다.',
            '두 번째 이미지처럼 메인 페이지를 업데이트 한 후에는 사용자에게 우선적으로 노출하고자 한 콘텐츠가 잘 전달되지 못하는 문제점이 새롭게 발생했습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            '메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하는데 집중할 수 있도록 지도를 분리하고, 지도가 필요한 페이지에서 동적으로 지도를 보일 수 있도록 기능을 구현함으로써 첫 번째 문제점을 해결할 수 있었습니다.',
            'Swiper 라이브러리를 구현하여 메인 페이지에 배너, 콘텐츠 조회 섹션을 추가했습니다. 우선적으로 노출하고자 하는 콘텐츠를 메인 페이지 배너에 위치해 배너를 클릭하면 해당 콘텐츠 페이지로 이동할 수 있도록 기능을 구현했습니다.',
          ],
        },
      ],
    },
    {
      id: 7,
      template: 'activity',
      heading: 'Swiper 라이브러리 구현으로 메인 페이지 UI 개선',
      subHeading: 'Swiper 라이브러리 적용 이후 주요 콘텐츠 유입률 변화',
      image: PNGMapBeFineSwiperPercentage,
      contents: [
        {
          heading: 'Swiper 적용 전',
          descriptions: [
            '구현한 Swiper 라이브러리를 적용하기 전에는 목표한 콘텐츠 유입률이 전체 페이지 조회수 5,693회 중 649회로 9.5% 밖에 되지 않았습니다.',
          ],
        },
        {
          heading: 'Swiper 적용 후',
          descriptions: [
            'Swiper 라이브러리를 적용 후엔 목표한 콘텐츠 유입률이 전체 페이지 조회수 10,807회 중 2,321회로 21.4%를 기록하여, 기존보다 유입률을 12% 증가시킬 수 있었습니다.',
            '서비스에 특화 되도록 Swiper 라이브러리를 직접 구현한 덕분에, 팀원들이 이미지 조회 등의 영역을 구현할 때 시간을 절감할 수 있었다는 긍정적인 피드백을 받을 수 있었습니다.',
          ],
        },
      ],
    },
    {
      id: 8,
      template: 'activity-images',
      heading: '번들 사이즈 최적화로 초기 로딩 속도 개선',
      images: [PNGMapBeFineLoading1, PNGMapBeFineLoading2],
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '서비스 기능이 다양해짐에 따라 메인 번들 사이즈가 증가해 초기 로딩 시간이 약 4.4초로 길어져 사용자 경험이 좋지 않았습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'Page 컴포넌트 단위로 Dynamic Import와 React의 Lazy, Suspense를 활용하여 Code Splitting을 진행했습니다.',
          ],
        },
        {
          heading: '결과',
          descriptions: [
            '메인 번들 사이즈를 609KB(Gzip: 141.52KB)에서 455KB(Gzip: 93.22KB)로 약 34% 축소시켜, 메인 페이지 LCP를 4.4초에서 3.0초로 약 1.4초 개선했습니다.',
          ],
        },
      ],
    },
    {
      id: 9,
      template: 'activity',
      heading: 'PC 기반 UI에 태블릿 및 모바일 반응형 대응',
      image: GIFMapBeFineResponsive,
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '메인 타겟 환경을 PC로 설정하여 서비스를 개발하였기에 태블릿 및 보바일 환경에서 서비스를 이용하기 어려웠습니다. 또한 걸어다니면서 모바일로 주변의 정보를 확인할 수 있으면 좋겠다는 피드백을 다수 받았습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'CSS의 Media Query를 활용하여 페이지 별로 모바일 환경에 맞는 레이아웃을 구현하고, Web API의 MatchMedia를 활용하여 구현한 Swiper 라이브러리의 반응형 레이아웃을 구축했습니다. 이를 통해 PC, 태블릿, 모바일 각각의 환경에 최적의 사용성을 제공할 수 있도록 했습니다.',
          ],
        },
      ],
    },
    {
      id: 10,
      template: 'activity-texts',
      heading: '웹 접근성 적용 및 Figma를 활용한 UI/UX 설계',
      first: {
        title: '시맨틱 태그 및 웹 접근성, 웹 표준 적용',
        contents: [
          {
            heading: '문제 상황',
            descriptions: [
              '스크린 리더기를 통해 서비스를 이용해 보았을 때, 예측 불가한 요소 포커스, 설명 부족으로 인해 스크린 리더기를 사용하는 사용자가 서비스를 정상적으로 이용하기에는 어려움이 있었습니다.',
              "목표한 브라우저(Chrome, Edge, Safari, Whale, Samsung Mobile)에서 서비스의 모든 플로우가 정상적으로 동작했지만, Safari에서 체크 박스 UI가 너무 작아 '뽑아오기' 기능을 활용하기에 불편했습니다.",
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              '시맨틱 태그, aria-label 등을 활용하여 일반 사용자가 컨텐츠를 읽는 순으로 요소 포커스를 수행하고 동시에 컨텐츠에 대한 설명을 사운드로 진행할 수 있도록 했습니다.',
              "목표한 브라우저에서 모두 동일하게 보이는 체크 박스 컴포넌트를 구현하여 Safari에서도 '뽑아오기' 기능을 보다 편리하게 사용할 수 있도록 개선했습니다.",
            ],
          },
        ],
      },
      second: {
        title: 'Figma를 활용한 서비스 전반의 UI/UX 설계',
        contents: [
          {
            heading: '문제 상황',
            descriptions: [
              '디자이너의 부재로 서비스 전반의 UI/UX를 3명의 프론트엔드 팀원들이 나눠서 설계해야 했습니다. 이 경우 프론트엔드 인원들이 개발과 디자인 양쪽에서의 업무를 병행해야 하고, 일관되지 않은 UI/UX로 이어져 사용자 경험에 부정적인 영향을 미칠 우려가 있었습니다.',
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              '지난 협업에서 Figma를 사용하여 프로젝트의 유저 플로우를 설계했던 경험을 살려, 주도적으로 프로젝트 전반의 와이어 프레임 및 프로토타입을 구현함으로써 일관된 UI/UX 구축했습니다.',
              '사용자 피드백, 개발 과정에서 리팩토링 등으로 인해 변경사항이 생길 경우, 매 스프린트 별로 이에 대응하여 와이어 프레임 및 프로토타입을 수정하여 제공했습니다.',
            ],
          },
        ],
      },
    },
    {
      id: 11,
      template: 'separator',
      type: 'end',
      heading: '컨셉비 프로젝트',
      link: 'concept-be',
      svg: SVGConceptBeLogoBig,
    },
  ],
  'concept-be': [
    {
      id: 1,
      template: 'title',
      title: '컨셉비',
      description:
        '공모전, 스터디 등을 위한 인원을 구인할 수 있는 모바일 웹 서비스',
      links: [
        {
          name: 'Service',
          href: 'https://concept-be.kr/',
          svg: SVGConceptLogo,
        },
        {
          name: 'Github',
          href: 'https://github.com/ConceptBe/conceptbe-frontend',
          svg: SVGGithubLogoWhite,
        },
        {
          name: 'Design System',
          href: 'https://github.com/ConceptBe/conceptbe-design-system',
          svg: SVGGithubLogoWhite,
        },
        {
          name: 'Figma',
          href: 'https://www.figma.com/file/ExNUhQLDU6HDROD14k4bXN/%EC%BB%A8%EC%85%89%EB%B9%84_%EB%93%9C%EB%9E%98%ED%94%84%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=3ffb0AJJm2wTW32s-1',
          svg: SVGFigmaLogo,
        },
      ],
    },
    {
      id: 2,
      template: 'introduction',
      intro:
        '공모전, 스터디 등을 위한 다양한 직군의 팀원을 구인할 수 있는 모바일 웹 서비스입니다. 기존의 프로젝트 구인 서비스는 개발 분야에 치우쳐져 있어 비 개발 분야는 프로젝트 인원 구인이 어렵다는 점을 개선하고자 이 프로젝트를 시작했습니다.',
      value:
        '아이디어를 공유하면서 토론하고 평가할 수 있는 공간을 제공하며, 사용자들 간의 다양한 전문성을 융합하여 다채로운 활동을 형성하는데 기여하는 것을 핵심 가치로 삼고 있습니다.',
      contribution:
        '현재는 공모전을 같이 나갈 팀원을 구하는 공간이 마땅치 않은 문제를 해결하는데 집중하고 있습니다. 컨셉비를 통해 공모전 구인을 보다 간편하게 진행할 수 있도록 기대합니다.',
      organization: '비사이드',
      date: '24.01 - 현재',
      member: 'PM: 2명, PD: 1명, FE: 3명, BE: 4명',
      techs: [
        { image: PNGTechTs, name: 'TypeScript' },
        { image: PNGTechReact, name: 'React' },
        { image: PNGTechRq, name: 'React Query' },
        { image: PNGTechEmotion, name: 'Emotion' },
        { image: PNGTechVite, name: 'Vite' },
        { image: PNGTechStory, name: 'Storybook' },
        { image: PNGTechJest, name: 'Jest' },
        { image: PNGTechTl, name: 'Testing Library' },
      ],
    },
    {
      id: 3,
      template: 'separator',
      type: 'separate',
      heading: '프로젝트 활동',
    },
    {
      id: 4,
      template: 'activity-texts',
      heading: '레거시 코드 개선 및 디자인 시스템 구축',
      first: {
        title: 'React Query 도입 및 레거시 코드 개선',
        contents: [
          {
            heading: '문제 상황',
            descriptions: [
              '여러 명의 개발자가 거쳐가면서 제각각의 코드 컨벤션과 중복 코드로 인해 가독성이 좋지 않았습니다.',
              '컴포넌트 내부에 API 응답에 따른 성공, 로딩, 에러 상태 처리 로직이 모두 위치하여 컴포넌트 책임 분리가 모호했습니다.',
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              '프로젝트 전반에 사용될 공통 컴포넌트를 구현 후 이미지, 폰트 등과 함께 디자인 시스템으로 분리하여 중복 코드를 최소화하고 일관된 UI를 보장할 수 있도록 했습니다.',
              'React-Query를 도입하여 useSuspenseQuery와 React의 Suspense를 활용하여 로딩 상태에 대한 코드를 분리하고, ApiErrorBoundary와 GlobalErrorBoundary를 구현해 에러 상태에 대한 코드를 중앙화 했습니다. 이를 통해 컴포넌트는 성공 상태에 대한 책임만 갖도록 리팩토링을 진행했습니다.',
            ],
          },
        ],
      },
      second: {
        title: 'Storybook을 활용한 디자인 시스템 구축',
        contents: [
          {
            heading: '문제 상황',
            descriptions: [
              '비 개발 팀원이 구현된 결과물을 검토하려면 프로젝트를 AWS 환경에 배포해야만 했으며, 다른 페이지에 위치했지만 동일한 컴포넌트의 UI를 반복적으로 검토하는 불편함이 있었습니다.',
              '디자인 시스템을 최초로 배포했을 때 패키지 사이즈가 4.76MB로 너무 무거웠으며, 서비스 초기 로딩 속도가 저하되는 문제가 있었습니다.',
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              'Storybook을 활용하여 공통 컴포넌트를 문서화하여 배포함으로써 비 개발 팀원들의 검수 작업을 효율적으로 수행할 수 있었습니다. 특히, Addon 기능을 적극적으로 활용하여 컴포넌트의 다양한 형태를 확인하고 테스트 해볼 수 있는 공간을 제공했습니다.',
              '무거운 Variable 파일 대신 사용하는 폰트만 font-face를 통해 지정했으며, Vite의 rollupOptions 속성을 활용하여 번들 파일에 포함시키지 않을 외부의 라이브러리 의존성 목록을 지정했습니다. 이를 통해 기존 4.76MB이던 패키지 사이즈를 2.19MB로 축소시킬 수 있었고, 서비스 LCP를 약 1.6초 개선할 수 있었습니다.',
            ],
          },
        ],
      },
    },
    {
      id: 5,
      template: 'activity',
      heading: '무한 스크롤 기능과 스크롤 제어 로직을 통한 포커싱 기능 구현',
      image: GIFConceptBeScroll,
      contents: [
        {
          heading: '요구 사항',
          descriptions: [
            "모바일 환경에서 댓글 목록을 한 번에 불러올 경우 긴 로딩 시간을 갖게 될 가능성이 높았고, 나눠서 불러올 경우 사용자가 '더 보기'와 같은 버튼을 반복적으로 클릭해야 하는 불편함이 예상되었습니다.",
            '답글 입력창이 고정된 위치에 있지 않고 각 댓글마다 답글 입력창을 생성할 수 있는 형태입니다. 따라서 모바일 환경에서 가상 키보드가 확장됨에 따라 답글 입력창을 가려 스크롤 하여 위치를 수정해야 하는 불편함이 있었습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'useSuspenseInfiniteQuery와 useIntersection을 활용하여, 무한 스크롤 기능을 구현함으로써 추가 동작 없이 댓글 추가 조회를 가능토록 했습니다.',
            'React의 useRef와 브라우저의 resize 이벤트를 통해 사용자의 키보드 높이를 파악하여 답글 입력창이 키보드에 가려지지 않도록 포커싱 기능을 구현했습니다. 또한 OS별로 최적화된 포커싱 기능을 분기 적용하여 PC, Android, iOS 각각의 환경에서 최적의 사용성을 제공했습니다.',
          ],
        },
      ],
      link: {
        heading: '관련 블로그 포스팅',
        name: '댓글 및 답글 스크롤 포커싱 리팩토링',
        href: 'https://velog.io/@semnil5202/%EB%8C%93%EA%B8%80-%EB%B0%8F-%EB%8B%B5%EA%B8%80-%EC%8A%A4%ED%81%AC%EB%A1%A4-%ED%8F%AC%EC%BB%A4%EC%8B%B1-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81',
      },
    },
    {
      id: 6,
      template: 'activity',
      heading: '제어 컴포넌트와 디바운싱을 활용한 닉네임 유효성 및 중복 검사',
      image: GIFConceptBeDebouncing,
      contents: [
        {
          heading: '요구 사항',
          descriptions: [
            '정책상 닉네임은 필수로 입력해야하고, 두 글자 미만으로 작성할 수 없으며, 특수문자를 포함할 수 없습니다. 이런 사항을 일일이 설명하기엔 회원 가입 form이 너무 복잡해질 것 같았고, 제출 버튼을 누른 뒤 잘못 입력한 값에 대한 피드백을 주게 되면 입력했던 값을 다시 수정해야하는 불편함이 예상되었습니다.',
            "사용자가 본인이 입력한 닉네임이 고유한 값인지 확인하려면 '닉네임 중복 확인'과 같은 버튼을 반복적으로 눌러야하는 불편함이 예상되었습니다.",
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'React의 제어 컴포넌트 방식을 활용하여 Form을 구성하였고, 잘못된 입력값이 발생할 경우 그 즉시 피드백을 주어 수정할 수 있도록 유도했습니다. 또한 form 내의 input, textarea가 많아짐에 따라 상태 관리 및 유효성 검사 로직이 중복되었고, 이를 useField라는 Custom Hook으로 분리해 재사용하여 코드 가독성을 높였습니다.',
            "React의 useRef와 setTimeout 메서드를 활용하여 디바운싱 기능을 구현했습니다. 유저의 입력이 300ms 동안 없을 경우 닉네임 작성을 완료했다고 판단하여, 자동으로 서버에 중복 검사 요청을 보내도록 했습니다. 이를 통해 '닉네임 중복 확인'과 같은 버튼을 누를 필요 없이 보다 편리하게 닉네임 중복 검사를 수행할 수 있었습니다.",
          ],
        },
      ],
    },
    {
      id: 7,
      template: 'separator',
      type: 'end',
      heading: '장바구니 미션',
      link: 'shopping-cart',
      svg: SVGWoowaLogoBig,
    },
  ],
  'shopping-cart': [
    {
      id: 1,
      template: 'title',
      title: '장바구니',
      description:
        'MSW를 활용하여 장바구니 페이지를 만드는 우아한테크코스 React 미션',
      links: [],
    },
    {
      id: 2,
      template: 'introduction',
      intro:
        '공모전, 스터디 등을 위한 다양한 직군의 팀원을 구인할 수 있는 모바일 웹 서비스입니다. 기존의 프로젝트 구인 서비스는 개발 분야에 치우쳐져 있어 비 개발 분야는 프로젝트 인원 구인이 어렵다는 점을 개선하고자 이 프로젝트를 시작했습니다.',
      value:
        '아이디어를 공유하면서 토론하고 평가할 수 있는 공간을 제공하며, 사용자들 간의 다양한 전문성을 융합하여 다채로운 활동을 형성하는데 기여하는 것을 핵심 가치로 삼고 있습니다.',
      contribution:
        '현재는 공모전을 같이 나갈 팀원을 구하는 공간이 마땅치 않은 문제를 해결하는데 집중하고 있습니다. 컨셉비를 통해 공모전 구인을 보다 간편하게 진행할 수 있도록 기대합니다.',
      organization: '비사이드',
      date: '24.01 - 현재',
      member: 'PM: 2명, PD: 1명, FE: 3명, BE: 4명',
      techs: [
        { image: PNGTechTs, name: 'TypeScript' },
        { image: PNGTechReact, name: 'React' },
        { image: PNGTechRq, name: 'React Query' },
        { image: PNGTechEmotion, name: 'Emotion' },
        { image: PNGTechVite, name: 'Vite' },
        { image: PNGTechStory, name: 'Storybook' },
        { image: PNGTechJest, name: 'Jest' },
        { image: PNGTechTl, name: 'Testing Library' },
      ],
    },
    {
      id: 3,
      template: 'separator',
      type: 'separate',
      heading: '프로젝트 활동',
    },
  ],
  'movie-list': [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
      links: [],
    },
    {
      id: 2,
      template: 'introduction',
      subHeading: '개요',
      intro: 'asdf',
      value: 'sadf',
      contribution: 'asdf',
      date: '23.06 - 23.12',
      member: 'FE: 3명, BE: 4명',
      techs: [],
    },
  ],
  portfolio: [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
      links: [],
    },
    {
      id: 2,
      template: 'introduction',
      subHeading: '개요',
      intro: 'asdf',
      value: 'sadf',
      contribution: 'asdf',
      date: '23.06 - 23.12',
      member: 'FE: 3명, BE: 4명',
      techs: [],
    },
  ],
};

export default DETAILS;
