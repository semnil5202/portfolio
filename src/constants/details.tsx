import { Detail } from '@/app/[slug]/types';
import PNGMapBeFine from '../../public/assets/mapbefine-landing.png';
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
import PNGMapBeFineMcBefore from '../../public/assets/projects/mapbefine-mc-before.png';
import PNGMapBeFineMcAfter from '../../public/assets/projects/mapbefine-mc-after.png';
import PNGMapBeFineSwiper1 from '../../public/assets/projects/mapbefine-swiper-1.png';
import PNGMapBeFineSwiper2 from '../../public/assets/projects/mapbefine-swiper-2.png';
import PNGMapBeFineSwiper3 from '../../public/assets/projects/mapbefine-swiper-3.png';
import PNGMapBeFineSwiperPercentage from '../../public/assets/projects/mapbefine-swiper-percentage.png';
import SVGGithubLogoWhite from '../../public/assets/icons/github-logo-white.svg';
import SVGMapBeFineLogo from '../../public/assets/icons/mapbefine-logo.svg';
import SVGFigmaLogo from '../../public/assets/icons/figma-logo.svg';
import GIFMapBeFineInteraction from '../../public/assets/projects/mapbefine-interaction.gif';
import GIFMapBeFineResponsive from '../../public/assets/projects/mapbefine-responsive.gif';

export const DETAIL_LANDING = {
  'map-befine': PNGMapBeFine,
  'concept-be': PNGMapBeFine,
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
      backgroundImg: PNGMapBeFine,
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
        '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스입니다. 서로 다른 주제의 지도를 한 번에 모아보거나 마음에 드는 장소만 골라 나만의 지도로 재탄생 시킬 수도 있으며, 내가 선택한 사람들과 협력하여 지도를 만들 수 있습니다.',
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
      template: 'activity',
      heading: '사이드 바와 지도 간 상호작용 기능 및 지도 이벤트 핸들링 구현',
      image: GIFMapBeFineInteraction,
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '지도 위 마커를 클릭했을 때 사이드바를 확장하여 세부 정보를 보여줄 수 있도록 해야 했고, 사이드 바의 리스트를 클릭하면 지도를 해당 정보의 위치로 이동 및 줌 인 시켜야 했습니다. 또한 URL 공유 기능이 가능해야 했습니다.',
            '사용자가 지도를 드래그 및 줌 할 때 마커 클러스터링, 마커 동적 렌더링 등 복잡한 연산 로직과 서버와의 통신을 최소한으로 수행해야 했습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'Route State 및 쿼리 파라미터를 사용하여 마커 및 사이드 바 리스트 클릭 여부를 확인할 수 있도록 함으로써 사이드 바와 지도 간 상호작용과 URL 공유를 가능하게 했습니다.',
            '지도 이벤트 핸들링 로직에 디바운싱을 걸어 마지막 이벤트에만 로직을 수행함으로써 서버 통신 비용을 절감하고 효율적으로 지도를 조작할 수 있도록 했습니다.',
          ],
        },
      ],
    },
    {
      id: 4,
      template: 'activity-images',
      heading: '마커 클러스터링과 마커 동적 렌더링을 구현',
      images: [PNGMapBeFineMcBefore, PNGMapBeFineMcAfter],
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '괜찮을지도는 지도를 기반으로 동작하는 서비스이기 때문에 지도 사용성이 가장 중요한 요소 중 하나였습니다. 적은 수의 마커를 보유한 지도의 경우 사용자가 서비스를 이용하는데 큰 문제점이 없었지만, 수백 개 이상의 마커를 보유한 지도의 경우 마커가 지도를 가려 위치 확인이 어렵고 지도를 조작할 때 버벅대는 불편함이 있었습니다.',
            '마커 클러스터링을 도입한 후에도 사용자가 지도를 최대로 확대한 경우, 마커 클러스터링이 모두 해제되어 지도를 조작할 때 버벅대는 문제가 여전히 남아있었습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            '지도의 줌 레벨에 따라 마커의 지름이 차지하는 실제 거리를 구하고, 마커 간 겹침 여부를 판단하여 마커 클러스터링을 구현했습니다. 이를 통해 지도 위 마커들의 가시성을 개선할 수 있었습니다.',
            '스크린 사이즈에 해당하는 마커들만 동적으로 렌더링함으로써 27인치 FHD, 75fps 모니터 환경에서 800여 개의 마커를 기준으로 렌더링 프레임을 48fps에서 71fps로 향상시킬 수 있었습니다.',
          ],
        },
      ],
    },
    {
      id: 5,
      template: 'activity-images',
      heading: 'Swiper 라이브러리 구현으로 메인 페이지 UI 개선',
      subHeading: '버전 별 메인 페이지 레이아웃',
      images: [PNGMapBeFineSwiper1, PNGMapBeFineSwiper2, PNGMapBeFineSwiper3],
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            '서비스 초반의 메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하기 어려운 문제점이 있었습니다. 본인의 관심사를 기록할 사용자가 많을 것이라는 예상에 메인 페이지에서부터 지도를 배치했지만, 실제로는 구경하는 사용자가 더 많았고 메인 페이지에서부터 지도를 사용하는 경우가 드물었습니다.',
            "1.0.0 버전으로 메인 페이지를 업데이트 한 이후, '대동붕어빵여지도'와 같은 사용자에게 우선적으로 노출하고자 한 콘텐츠가 잘 전달되지 못하는 문제점이 새롭게 발생했습니다.",
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            '메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하는데 집중할 수 있도록 지도를 분리하고, 지도가 필요한 페이지에서 동적으로 지도를 보일 수 있도록 기능을 구현함으로써 첫 번째 문제점을 해결할 수 있었습니다.',
            'Swiper 컴포넌트를 구현하여 메인 페이지의 UI를 개선함으로써 두 번째 문제점을 해결할 수 있었습니다. Swiper 컴포넌트를 활용하여 메인 페이지에 배너, 토픽 조회 섹션을 구현하였고, 우선적으로 노출하고자 하는 콘텐츠를 메인 페이지 배너에 위치해 배너를 클릭하면 해당 콘텐츠 페이지로 이동할 수 있도록 기능을 구현했습니다. GA를 확인해 본 결과 Swiper 컴포넌트를 적용하기 전 우선적으로 노출시키고자 한 콘텐츠 방문율이 9.5%였던 것에 반에, 적용 후 21.4%로 약 12% 증가했습니다.',
          ],
        },
      ],
    },
    {
      id: 5,
      template: 'activity',
      heading: 'Swiper 라이브러리 구현으로 메인 페이지 UI 개선',
      subHeading: '메인 페이지 UI 개선 결과',
      image: PNGMapBeFineSwiperPercentage,
      contents: [
        {
          heading: 'Swiper 적용 전',
          descriptions: [
            '서비스 초반의 메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하기 어려운 문제점이 있었습니다. 본인의 관심사를 기록할 사용자가 많을 것이라는 예상에 메인 페이지에서부터 지도를 배치했지만, 실제로는 구경하는 사용자가 더 많았고 메인 페이지에서부터 지도를 사용하는 경우가 드물었습니다.',
            "1.0.0 버전으로 메인 페이지를 업데이트 한 이후, '대동붕어빵여지도'와 같은 사용자에게 우선적으로 노출하고자 한 콘텐츠가 잘 전달되지 못하는 문제점이 새롭게 발생했습니다.",
          ],
        },
        {
          heading: 'Swiper 적용 후',
          descriptions: [
            '메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하는데 집중할 수 있도록 지도를 분리하고, 지도가 필요한 페이지에서 동적으로 지도를 보일 수 있도록 기능을 구현함으로써 첫 번째 문제점을 해결할 수 있었습니다.',
            'Swiper 컴포넌트를 구현하여 메인 페이지의 UI를 개선함으로써 두 번째 문제점을 해결할 수 있었습니다. Swiper 컴포넌트를 활용하여 메인 페이지에 배너, 토픽 조회 섹션을 구현하였고, 우선적으로 노출하고자 하는 콘텐츠를 메인 페이지 배너에 위치해 배너를 클릭하면 해당 콘텐츠 페이지로 이동할 수 있도록 기능을 구현했습니다. GA를 확인해 본 결과 Swiper 컴포넌트를 적용하기 전 우선적으로 노출시키고자 한 콘텐츠 방문율이 9.5%였던 것에 반에, 적용 후 21.4%로 약 12% 증가했습니다.',
          ],
        },
      ],
    },
    {
      id: 5,
      template: 'activity',
      heading: 'PC 기반 UI에 태블릿, 모바일 사이즈 반응형 대응',
      image: GIFMapBeFineResponsive,
      contents: [
        {
          heading: '문제 상황',
          descriptions: [
            'PC 환경을 기준으로 서비스를 개발하였기에 모바일, 태블릿 환경에서 서비스를 이용하기 어려웠습니다.',
          ],
        },
        {
          heading: '해결 과정',
          descriptions: [
            'CSS의 Media Query, Web API의 MatchMedia를 사용하여 반응형 웹을 적용함으로써 PC, 태블릿, 모바일 각각의 환경에 적합한 사용성을 제공할 수 있도록 했습니다.',
          ],
        },
      ],
    },
    {
      id: 6,
      template: 'activity-texts',
      heading: '웹 접근성 적용 및 Figma를 활용한 UI/UX 설계',
      first: {
        title: '시맨틱 태그 및 웹 표준, 웹 접근성 적용',
        contents: [
          {
            heading: '문제 상황',
            descriptions: [
              '스크린 리더기를 통해 서비스를 이용해 보았을 때, 예측 불가한 요소 포커스, 요소 설명 부족 등으로 인해 스크린 리더기를 사용하는 사용자가 서비스를 정상적으로 이용하기에는 어려움이 있었습니다.',
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              '시맨틱 태그, aria-label 등을 활용하여 일반 사용자가 컨텐츠를 읽는 순으로 요소 포커스를 수행하고 동시에 컨텐츠에 대한 설명을 진행할 수 있도록 하였습니다. 이를 통해 스크린 리더기를 사용하는 사용자가 서비스에 대한 이해도를 높일 수 있도록 했습니다.',
              '웹 표준을 준수하여 서비스의 모든 플로우가 목표한 브라우저(Chrome, Edge, Safari, Whale, Samsung Mobile)에서 원활하게 동작하도록 했습니다.',
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
              '디자이너의 부재로 서비스 전반의 UI/UX를 3명의 프론트엔드 인원이 나눠서 설계해야 하는 상황이었습니다. 이러한 방법으로 진행할 경우 일관되지 않은 UI/UX로 이어져 사용자 경험에 부정적인 영향을 미칠 우려가 있었습니다. 또한 프론트엔드 인원들이 개발과 디자인 양쪽에서의 업무를 병행해야 하는 어려움이 예상되었습니다.',
            ],
          },
          {
            heading: '해결 과정',
            descriptions: [
              '이전에 Figma를 사용해 토이 프로젝트의 유저 플로우를 설계했던 경험을 살려, 주도적으로 프로젝트 전반의 와이어 프레임 및 프로토타입을 구현함으로써 일관된 UI/UX 구축했습니다.',
              '사용자 피드백, 개발 과정에서 리팩토링 등으로 인해 변경사항이 생길 경우, 매 스프린트 별로 이에 대응하여 와이어 프레임 및 프로토타입을 수정하여 제공했습니다.',
            ],
          },
        ],
      },
    },
  ],
  'concept-be': [
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
      organization: '우아한테크코스',
      date: '23.06 - 23.12',
      member: 'FE: 3명, BE: 4명',

      techs: [],
    },
  ],
  'shopping-cart': [
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
