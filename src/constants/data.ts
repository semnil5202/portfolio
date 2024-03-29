import { ProjectDetails } from '@/types/projectDetails';
import mapBeFineImage from '../../public/assets/mapbefine.png';
import mapBeFineSwiperImage from '../../public/assets/mapbefine_swiper.png';
import mapBeFineClusterImage from '../../public/assets/mapbefine_cluster.png';
import mapBeFineResponsiveImage from '../../public/assets/mapbefine_responsive.png';
import mapBeFineInteractionImage from '../../public/assets/mapbefine_interaction.gif';

import portfolioImage from '../../public/assets/portfolio.png';

import shoppingCartImage from '../../public/assets/shoppingcart.png';
import shoppingCartResponsiveImage from '../../public/assets/shoppingcart_responsive.png';
import shoppingCartMockingImage from '../../public/assets/shoppingcart_mocking.gif';

import paymentsImage from '../../public/assets/payments.png';
import paymentsValidationImage from '../../public/assets/payments_validation.gif';

import movieListImage from '../../public/assets/movielist.png';
import movieListSkeletonImage from '../../public/assets/movielist_skeleton.png';
import movieListResponsiveImage from '../../public/assets/movielist_responsive.png';
import movieListIntersectionImage from '../../public/assets/movie_intersection.gif';

import conceptBeImage from '../../public/assets/conceptbe.png';
import conceptBeInfiniteImage from '../../public/assets/conceptbe_infinite.gif';
import conceptBeDebouncingImage from '../../public/assets/conceptbe_debouncing.gif';

export const DYNAMIC_TEXTS = [
  '프로덕트 중심으로 사고하는',
  '시도와 리팩토링을 반복하는',
  '사용자 경험을 중시하는',
];

export const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Recoil',
  'React-Query',
  'Styled-Components',
  'Jest',
  'Cypress',
  'React-Testing-Library',
  'MSW',
  'Storybook',
];

export const STRENGTHS = [
  {
    title: 'React',
    description: [
      'React와 지도를 결합하여 서비스를 개발한 경험이 있습니다.',
      'Recoil, React-Query 등 상태 관리 라이브러리를 사용할 수 있습니다.',
      'React Lazy를 활용하여 로딩 성능 최적화를 진행한 경험이 있습니다.',
      'Custom Hook을 활용한 컴포넌트 관심사 분리에 익숙합니다.',
      'ErrorBoundary, Suspense를 활용한 선언형 프로그래밍에 익숙합니다.',
    ],
  },
  {
    title: 'HTML/CSS',
    description: [
      '반응형 웹 및 크로스 브라우징에 대응할 수 있습니다.',
      '시맨틱 태그, 웹 표준, 웹 접근성을 준수해본 경험이 있습니다.',
      'Styled-Components, Emotion을 사용할 수 있습니다.',
    ],
  },
  {
    title: 'Next',
    description: [
      'App Router 방식을 사용할 수 있습니다.',
      'CSR, SSG, SSR, ISR 방식을 상황에 맞게 활용할 수 있습니다.',
    ],
  },

  {
    title: 'JS/TS',
    description: [
      'ES6+ 문법과 비동기 프로그래밍에 익숙합니다.',
      'TypeScript를 사용하여 React 서비스를 개발한 경험이 있습니다.',
      'Webpack을 활용하여 보일러 플레이트를 작성한 경험이 있습니다.',
      'Jest, Cypress를 활용한 테스트 작성 및 환경 구축 경험이 있습니다.',
      'Storybook을 활용하여 디자인 시스템을 구축해본 경험이 있습니다.',
      'MSW를 활용하여 Mock API를 만들 수 있습니다.',
    ],
  },
];

export const EDUCATIONS = [
  {
    organization: {
      school: '우아한테크코스',
      date: '2023.02 - 2023.11',
      motherSchool: '우아한형제들',
      links: [
        {
          name: 'Archive',
          link: 'https://github.com/semnil5202/woowacourse-archive',
        },
        {
          name: 'Youtube',
          link: 'https://www.youtube.com/watch?v=PBgQKK6nelo&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC',
        },
      ],
    },
    content: {
      title: '웹 프론트엔드 5기',
      descriptions: [
        'Vanilla JavaScript, TypeScript, Webpack, Jest, Cypress를 활용한 미션 기반의 웹 기술 학습',
        'Recoil, MSW, Storybook, React-Testing-Library를 활용한 React 학습',
        '웹 성능 최적화, NPM 라이브러리 배포, Github-Actions를 활용한 CI/CD 구축, Next.js 학습',
        '기획, 개발, 유지 보수 과정의 실 사용자가 있는 팀 프로젝트 수행',
        '페어 프로그래밍, 코드 리뷰, 협업, 팀 프로젝트, 글쓰기를 통한 소프트스킬 증진',
        '10분 테코톡에서 React의 제어 컴포넌트와 비제어 컴포넌트에 대해 발표',
      ],
    },
  },
  {
    organization: {
      school: '순천향대학교',
      date: '2017.02 - 2023.02',
    },
    content: {
      title: '정보보호학 (학사)',
      descriptions: [
        'Hidden Markov Model을 활용한 Anomaly Detection 수행 경험',
        'SYN Flood Attack, Key Log 등의 방법을 통해 취약점 분석 경험',
      ],
    },
  },
];

export const PROJECTS = [
  {
    imageSrc: mapBeFineImage,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    slug: 'mapbefine',
  },
  {
    imageSrc: conceptBeImage,
    title: '컨셉비',
    description: '다양한 종목의 프로젝트 인원들을 구인할 수 있는 서비스',
    slug: 'concept-be',
  },
  {
    imageSrc: shoppingCartImage,
    title: '장바구니',
    description:
      'MSW를 활용하여 장바구니 페이지를 만드는 우아한테크코스 React 미션',
    slug: 'shopping-cart',
  },
  {
    imageSrc: paymentsImage,
    title: '페이먼츠',
    description:
      '모바일 환경의 카드 등록 플로우를 만드는 우아한테크코스 React 미션',
    slug: 'payments',
  },
  {
    imageSrc: movieListImage,
    title: '무비 리스트',
    description:
      'TMDB를 활용해 영화 목록을 만드는 우아한테크코스 Vanilla JS 미션',
    slug: 'movie-list',
  },
  {
    imageSrc: portfolioImage,
    title: '포트폴리오',
    description: 'Next.js를 사용하여 만든 포트폴리오 웹 페이지 ',
    slug: 'portfolio',
  },
];

export const PROJECT_DETAILS: ProjectDetails = {
  mapbefine: {
    overview: {
      imageSrc: mapBeFineImage,
      name: '괜찮을지도',
      intros: [
        '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스입니다.',
        '기존의 지도 서비스는 개인의 관심사를 기록하는데 용이하지만, 다른 사람과 정보를 공유하는데 어렵다는 점에서 이를 보완하고자 프로젝트를 시작했습니다.',
        '서로 다른 주제의 지도를 한 번에 모아보거나, 마음에 드는 정보만 골라 나만의 지도로 재탄생 시킬 수도 있습니다.',
      ],
      period: '2023.06 - 2023.12',
      personnel: 'BE: 4명, FE: 3명',
      role: '기획, 디자인, 프론트엔드',
      tecStack:
        'Typescript, React, Zustand, Styled-Components, Webpack, MSW, Storybook, Jest, React-Testing-Library, Cypress, Github Actions',
      links: [
        { name: 'Homepage', link: 'https://mapbefine.com/' },
        {
          name: 'Github',
          link: 'https://github.com/woowacourse-teams/2023-map-befine',
        },
        {
          name: 'Figma',
          link: 'https://www.figma.com/file/xgmKaz4AiIrlctuhCb1avk/map-befine?type=design&node-id=0%3A1&mode=design&t=ZRmgumwgoYJMraPb-1',
        },
      ],
    },
    details: [
      {
        title:
          '1. 마커 클러스터링과 마커 동적 렌더링을 구현으로 렌더링 프레임 48% 향상',
        problems: [
          '괜찮을지도는 지도를 기반으로 동작하는 서비스이기 때문에 지도 사용성이 가장 중요한 요소 중 하나였습니다. 적은 수의 마커를 보유한 지도의 경우 사용자가 서비스를 이용하는데 큰 문제점이 없었지만, 수백 개 이상의 마커를 보유한 지도의 경우 마커가 지도를 가려 위치 확인이 어렵고 지도를 조작할 때 버벅대는 불편함이 있었습니다.',
          '마커 클러스터링을 도입한 후에도 사용자가 지도를 최대로 확대한 경우, 마커 클러스터링이 모두 해제되어 지도를 조작할 때 버벅대는 문제가 여전히 남아있었습니다.',
        ],
        solves: [
          '지도의 줌 레벨에 따라 마커의 지름이 차지하는 실제 거리를 구하고, 마커 간 겹침 여부를 판단하여 마커 클러스터링을 구현했습니다. 이를 통해 지도 위 마커들의 가시성을 개선할 수 있었습니다.',
          '스크린 사이즈에 해당하는 마커들만 동적으로 렌더링함으로써 27인치 FHD, 75fps 모니터 환경에서 800여 개의 마커를 기준으로 렌더링 프레임을 48fps에서 71fps로 향상시킬 수 있었습니다.',
        ],
        result: {
          description: {
            name: '[Blog] 마커 클러스터링 구현하기',
            link: 'https://velog.io/@semnil5202/%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EB%A7%88%EC%BB%A4-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0',
          },
          imageSrc: mapBeFineClusterImage,
        },
      },
      {
        title:
          '2. 지도 이벤트 핸들링 및 사이드 바와 지도 간 상호작용 기능 구현',
        problems: [
          '사용자가 지도를 드래그 및 줌 할 때 마커 클러스터링, 마커 동적 렌더링 등 복잡한 연산 로직과 서버와의 통신을 최소한으로 수행해야 했습니다.',
          '지도 위 마커를 클릭했을 때 사이드바를 확장하여 세부 정보를 보여줄 수 있도록 해야 했고, 사이드 바의 리스트를 클릭하면 지도를 해당 정보의 위치로 이동 및 줌 인 시켜야 했습니다. 또한 URL 공유 기능이 가능해야 했습니다.',
        ],
        solves: [
          '지도 이벤트 핸들링 로직에 디바운싱을 걸어 마지막 이벤트에만 로직을 수행함으로써 서버 통신 비용을 절감하고 효율적으로 지도를 조작할 수 있도록 했습니다.',
          'Route State 및 쿼리 파라미터를 사용하여 마커 및 사이드 바 리스트 클릭 여부를 확인할 수 있도록 함으로써 사이드 바와 지도 간 상호작용과 URL 공유를 가능하게 했습니다.',
        ],
        result: {
          imageSrc: mapBeFineInteractionImage,
        },
      },
      {
        title:
          '3. Swiper 컴포넌트 구현으로 메인 페이지 유저 플로우 개선하여 주요 콘텐츠 방문율 12% 증가',
        problems: [
          '서비스 초반의 메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하기 어려운 문제점이 있었습니다. 본인의 관심사를 기록할 사용자가 많을 것이라는 예상에 메인 페이지에서부터 지도를 배치했지만, 실제로는 구경하는 사용자가 더 많았고 메인 페이지에서부터 지도를 사용하는 경우가 드물었습니다.',
          "1.0.0 버전으로 메인 페이지를 업데이트 한 이후, '대동붕어빵여지도'와 같은 사용자에게 우선적으로 노출하고자 한 콘텐츠가 잘 전달되지 못하는 문제점이 새롭게 발생했습니다.",
        ],
        solves: [
          '메인 페이지에서는 다른 사람이 만들어 둔 지도를 확인하는데 집중할 수 있도록 지도를 분리하고, 지도가 필요한 페이지에서 동적으로 지도를 보일 수 있도록 기능을 구현함으로써 첫 번째 문제점을 해결할 수 있었습니다.',
          'Swiper 컴포넌트를 구현하여 메인 페이지의 UI를 개선함으로써 두 번째 문제점을 해결할 수 있었습니다. Swiper 컴포넌트를 활용하여 메인 페이지에 배너, 토픽 조회 섹션을 구현하였고, 우선적으로 노출하고자 하는 콘텐츠를 메인 페이지 배너에 위치해 배너를 클릭하면 해당 콘텐츠 페이지로 이동할 수 있도록 기능을 구현했습니다. GA를 확인해 본 결과 Swiper 컴포넌트를 적용하기 전 우선적으로 노출시키고자 한 콘텐츠 방문율이 9.5%였던 것에 반에, 적용 후 21.4%로 약 12% 증가했습니다.',
        ],
        result: {
          description: {
            name: '[Blog] Swiper를 만든 이유',
            link: 'https://velog.io/@semnil5202/Swiper%EB%A5%BC-%EB%A7%8C%EB%93%A0-%EC%9D%B4%EC%9C%A0-u6qi4df8',
          },
          imageSrc: mapBeFineSwiperImage,
        },
      },
      {
        title: '4. 번들 사이즈 최적화로 초기 로딩 속도 개선',
        problems: [
          '서비스 기능이 다양해짐에 따라 메인 번들 사이즈가 증가해 초기 로딩 시간이 길어지는 현상이 발생했습니다.',
        ],
        solves: [
          'Page 컴포넌트 단위로 Dynamic Import와 React의 Lazy, Suspense를 활용하여 Code Splitting을 진행했습니다.',
        ],
        result: {
          description: {
            name: '메인 페이지 LCP를 3.5초에서 2.1초로 약 1.4초 개선하고, 메인 번들 사이즈를 609KB에서 455KB로 약 34% 축소시켰습니다.',
          },
        },
      },
      {
        title: '5. 시맨틱 태그 및 웹 표준, 웹 접근성 적용',
        problems: [
          '스크린 리더기를 통해 서비스를 이용해 보았을 때, 예측 불가한 요소 포커스, 요소 설명 부족 등으로 인해 스크린 리더기를 사용하는 사용자가 서비스를 정상적으로 이용하기에는 어려움이 있었습니다.',
        ],
        solves: [
          '시맨틱 태그, aria-label 등을 활용하여 일반 사용자가 컨텐츠를 읽는 순으로 요소 포커스를 수행하고 동시에 컨텐츠에 대한 설명을 진행할 수 있도록 하였습니다. 이를 통해 스크린 리더기를 사용하는 사용자가 서비스에 대한 이해도를 높일 수 있도록 했습니다.',
          '웹 표준을 준수하여 서비스의 모든 플로우가 목표한 브라우저(Chrome, Edge, Safari, Whale, Samsung Mobile)에서 원활하게 동작하도록 했습니다.',
        ],
      },
      {
        title: '6. PC, 태블릿, 모바일 사이즈 반응형 웹 적용',
        problems: [
          'PC 환경을 기준으로 서비스를 개발하였기에 모바일, 태블릿 환경에서 서비스를 이용하기 어려웠습니다.',
        ],
        solves: [
          'CSS의 Media Query, Web API의 MatchMedia를 사용하여 반응형 웹을 적용함으로써 PC, 태블릿, 모바일 각각의 환경에 적합한 사용성을 제공할 수 있도록 했습니다.',
        ],
        result: {
          imageSrc: mapBeFineResponsiveImage,
        },
      },
      {
        title: '7. Figma를 활용한 전반적인 UI/UX 설계',
        problems: [
          '디자이너의 부재로 서비스 전반의 UI/UX를 3명의 프론트엔드 인원이 나눠서 설계해야 하는 상황이었습니다. 이러한 방법으로 진행할 경우 일관되지 않은 UI/UX로 이어져 사용자 경험에 부정적인 영향을 미칠 우려가 있었습니다. 또한 프론트엔드 인원들이 개발과 디자인 양쪽에서의 업무를 병행해야 하는 어려움이 예상되었습니다.',
        ],
        solves: [
          '이전에 Figma를 사용해 토이 프로젝트의 유저 플로우를 설계했던 경험을 살려, 주도적으로 프로젝트 전반의 와이어 프레임 및 프로토타입을 구현함으로써 일관된 UI/UX 구축했습니다.',
          '사용자 피드백, 개발 과정에서 리팩토링 등으로 인해 변경사항이 생길 경우, 매 스프린트 별로 이에 대응하여 와이어 프레임 및 프로토타입을 수정하여 제공했습니다.',
        ],
      },
    ],
  },
  'concept-be': {
    overview: {
      imageSrc: conceptBeImage,
      name: '컨셉비',
      intros: [
        '다양한 종목의 프로젝트 인원들을 구인할 수 있는 서비스입니다.',
        '기존의 프로젝트 구인 서비스는 개발 분야에 치우쳐져 있어 비 개발 분야는 프로젝트 인원 구인이 어렵다는 점을 개선하고자 이 프로젝트를 시작했습니다.',
        '아이디어를 공유하면서 토론하고 평가할 수 있는 공간을 제공하며, 사용자들 간의 다양한 전문성을 융합하여 다채로운 프로젝트를 형성하고자 합니다.',
      ],
      period: '2023.12 - 현재',
      personnel: 'PM: 2명, Design: 1명, BE: 3명, FE: 2명',
      role: '프론트엔드',
      tecStack:
        'Typescript, React, React-Query, Axios, Emotion, Storybook, Jest, React-Testing-Library',
      links: [
        {
          name: 'Demo',
          link: 'http://conceptbe.kr/',
        },
        {
          name: 'Github',
          link: 'https://github.com/ConceptBe/conceptbe-frontend',
        },
        {
          name: 'Design System',
          link: 'https://github.com/ConceptBe/conceptbe-design-system',
        },
        {
          name: 'Storybook',
          link: 'https://65a04fca8611ba47d7f8b115-bdybhmnomg.chromatic.com/',
        },
      ],
    },
    details: [
      {
        title: '1. Storybook을 활용한 디자인 시스템 구축',
        problems: [
          '빠르고 일관된 UI를 갖춘 개발을 위해 공통으로 사용하는 컴포넌트, 이미지 등을 분리하여 사용할 필요가 있었습니다.',
          '기획 및 디자이너분들이 구현된 결과물을 검토하려면 프로젝트를 AWS 환경에 배포해야만 했으며, 서로 다른 전문성으로 인해 소통에 아쉬움이 있었습니다.',
          '디자인 시스템의 컴포넌트를 수정한 후 미처 확인하지 못한 오류를 배포 이후에 확인하는 경우가 종종 있었습니다.',
          '디자인 시스템을 최초로 배포했을 때 컴포넌트, 이미지, 폰트 등이 모두 포함되다 보니 패키지 사이즈가 4.76MB로 너무 큰 문제가 있었습니다.',
        ],
        solves: [
          '프로젝트 전반에 공용으로 쓰일 이미지, 폰트, 컴포넌트 등을 구현 후 디자인 시스템으로 분리해 NPM에 배포했습니다.',
          'Figma에 마련된 디자인 가이드에 맞게 공통 컴포넌트를 구현하고 Storybook을 활용하여 문서화 및 배포함으로써, 기획 및 디자이너분들이 보다 편리하게 구현 결과물을 확인할 수 있도록 했습니다. 특히 Addon 기능을 적극적으로 활용하여 컴포넌트의 다양한 형태를 확인하고 테스트 해볼 수 있는 공간을 제공했습니다.',
          'Jest와 React-Testing-Library를 활용하여 Storybook 상호 작용 테스트를 수행함으로써, 컴포넌트 수정 과정에서 미처 확인하지 못한 오류를 조기에 식별하여 보다 안정적인 개발을 진행할 수 있도록 했습니다.',
          '사용하지 않는 폰트 파일을 제거하고 font-face 속성을 지정했으며, Vite의 rollupOptions 속성을 활용하여 번들 파일에 포함시키지 않을 외부의 라이브러리 의존성 목록을 지정했습니다. 이를 통해 기존의 4.76MB이던 패키지 사이즈를 2.19MB로 감소시킬 수 있었습니다.',
        ],
        result: {
          description: {
            name: 'NPM (concept-be-design-system)',
            link: 'https://www.npmjs.com/package/concept-be-design-system',
          },
        },
      },
      {
        title: '2. 무한 스크롤을 활용한 댓글 및 답글 기능',
        problems: [
          "댓글 목록을 한 번에 불러올 경우 긴 로딩 시간을 갖게 될 확률이 높았고, 나눠서 불러올 경우 사용자가 '더 보기'와 같은 버튼을 반복적으로 클릭해야 하는 불편함이 예상되었습니다.",
          '답글 입력창이 고정된 위치에 있지 않고 각 댓글마다 답글 입력창을 생성할 수 있는 형태입니다. 따라서 모바일 환경에서 가상 키보드가 확장됨에 따라 답글 입력창을 가려 스크롤 하여 위치를 수정해야 하는 불편함이 있었습니다.',
        ],
        solves: [
          'React-Query의 useSuspenseInfiniteQuery와 React-use의 useIntersection을 활용하여, 무한 스크롤 기능을 구현함으로써 사용자의 추가 동작 없이 댓글 추가 조회를 가능토록 했습니다.',
          'React의 useRef와 scrollIntoView 메서드를 활용하여 답글 입력창이 생성되었을 때, 해당 요소로 포커싱함으로써 가상 키보드에 의해 답글 입력창이 가리는 문제를 해결할 수 있었습니다.',
        ],
        result: {
          description: {
            name: '[Blog] 댓글 및 답글 기능 개선하기',
            link: 'https://velog.io/@semnil5202/%EB%8C%93%EA%B8%80-%EB%B0%8F-%EB%8B%B5%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0',
          },
          imageSrc: conceptBeInfiniteImage,
        },
      },
      {
        title:
          '3. 제어 컴포넌트와 디바운싱을 활용한 닉네임 유효성 및 중복 검사',
        problems: [
          "닉네임은 고유한 값이기 때문에 중복될 수 없습니다. 따라서 사용자가 본인이 입력한 닉네임이 고유한 값인지 확인하려면 '닉네임 중복 확인'과 같은 버튼을 반복적으로 눌러야하는 불편함이 예상되었습니다.",
          '정책상 닉네임은 필수로 입력해야하고, 두 글자 미만으로 작성할 수 없으며, 특수문자를 포함할 수 없습니다. 이런 사항을 일일이 설명하기엔 회원 가입 form이 너무 복잡해질 것 같았고, 제출 버튼을 누른 뒤 잘못 입력한 값에 대한 피드백을 주게 되면 입력했던 값을 다시 수정해야하는 불편함이 예상되었습니다.',
        ],
        solves: [
          "React의 useRef와 setTimeout 메서드를 활용하여 디바운싱 기능을 구현했습니다. 유저의 입력이 300ms 동안 없을 경우 닉네임 작성을 완료했다고 판단하여, 자동으로 서버에 중복 검사 요청을 보내도록 했습니다. 이를 통해 '닉네임 중복 확인'과 같은 버튼을 누를 필요 없이 보다 편리하게 닉네임 중복 검사를 수행할 수 있었습니다.",
          'React의 제어 컴포넌트 방식을 활용하여 form을 구성하였고, 잘못된 입력값이 발생할 경우 그 즉시 피드백을 주어 수정할 수 있도록 유도했습니다. 또한 form 내의 input, textarea가 많아짐에 따라 상태 관리 및 유효성 검사 로직이 중복되었고, 이를 useField라는 Custom Hook으로 분리해 재사용하여 코드 가독성을 높였습니다.',
        ],
        result: {
          imageSrc: conceptBeDebouncingImage,
        },
      },
      {
        title: '4. 레거시 코드 개선',
        problems: [
          '전임자가 작성한 코드에는 비즈니스 로직과 컴포넌트 UI 로직의 경계가 모호하여 코드 가독성이 떨어지고 컴포넌트 재사용성이 좋지 않았습니다.',
          '또한 컴포넌트 내부에 API 응답에 따른 성공, 로딩, 에러 상태 처리 로직이 모두 위치함으로써 컴포넌트의 책임 분리가 모호했습니다.',
          '마지막으로 컴포넌트 스타일링 방식이 제각각이어서 중복되는 로직이 많았고 가독성 또한 떨어졌습니다.',
        ],
        solves: [
          'API 모듈과 컴포넌트 사이에 Business Layer를 두어 해당 Layer에 API 요청 로직과 응답값 가공 로직을 커스텀 훅으로 분리했습니다. 이를 통해 컴포넌트와 비즈니스 로직을 분리하여 관심사 분리를 수행할 수 있었고, 컴포넌트 재사용성과 코드 가독성을 높일 수 있었습니다.',
          'React Query의 useSuspenseQuery와 React의 Suspense를 활용하여 로딩 상태에 대한 책임을 위임하고, ApiErrorBoundary와 GlobalErrorBoundary를 구현하여 에러 상태에 대한 책임을 위임했습니다. 이를 통해 컴포넌트는 오로지 성공 상태에 대한 책임을 갖게하여 관심사 분리를 수행할 수 있었습니다.',
          '프로젝트 전반에 사용할 수 있는 공통 컴포넌트를 구현함으로써 중복되는 스타일링 로직을 최소화하고, 사용 방식을 정형화함으로써 가독성을 개선했습니다.',
        ],
      },
    ],
  },
  'shopping-cart': {
    overview: {
      imageSrc: shoppingCartImage,
      name: '장바구니',
      intros: [
        'MSW를 사용하여 Mock API를 만들고, 이를 활용하여 장바구니 플로우를 구현한 우아한테크코스 React 미션입니다.',
      ],
      tecStack:
        'Typescript, React, Recoil, Styled-Components, MSW, Storybook, Jest, React-Testing-Library',
      links: [
        {
          name: 'Deploy',
          link: 'https://semnil5202.github.io/react-shopping-cart/',
        },
        {
          name: 'Github',
          link: 'https://github.com/semnil5202/react-shopping-cart/tree/step2',
        },
      ],
    },
    details: [
      {
        title: '1. MSW를 활용하여 서버 의존성 없이 API 로직 구현',
        problems: [
          '협업 시 API 관련 로직을 구현하려면 백엔드 개발의 완료를 기다려야 하는 불편함이 있었습니다. 이로 인해 프론트엔드 개발 주기가 비효율적으로 흘러가 API 요청 상태에 따른 처리 로직이 미흡한 문제가 있었습니다.',
        ],
        solves: [
          'MSW를 사용하여 백엔드 개발이 완료되지 않은 상황에서도 프론트엔드 단에서 독립적으로 개발을 진행할 수 있도록 했습니다. 추후 End Point만 교체하는 것으로 실제 서버와 통신이 가능토록 했습니다.',
        ],
        result: {
          imageSrc: shoppingCartMockingImage,
        },
      },
      {
        title: '2. 다형성 컴포넌트와 공통 컴포넌트를 통한 중복 코드 최소화',
        problems: [
          '버튼, 텍스트 등 미션 전반에 비슷하게 사용되는 컴포넌트들로 인해 중복 코드가 자주 발생했습니다.',
          '통일되지 않은 스타일 코드로 인해 UI 일관성을 헤칠 우려가 있었습니다.',
        ],
        solves: [
          'Styled-Components를 통해 다형성 컴포넌트를 구현하고, 미션 전반에 사용되는 공통 컴포넌트를 분리함으로써 컴포넌트 재사용성을 높이고 일관된 UI를 구현할 수 있었습니다.',
        ],
      },
      {
        title: '3. 반응형 웹 적용',
        problems: [
          'PC 환경을 기준으로 구현하였기에 모바일 및 태블릿 환경에서 웹 페이지를 확인하기에는 불편함이 있었습니다.',
        ],
        solves: [
          'CSS Media Query를 활용하여 반응형 웹을 적용함으로써 PC, 태블릿, 모바일 각각의 환경에 적합한 사용성을 제공할 수 있도록 했습니다.',
        ],
        result: {
          imageSrc: shoppingCartResponsiveImage,
        },
      },
    ],
  },
  payments: {
    overview: {
      imageSrc: paymentsImage,
      name: '페이먼츠',
      intros: [
        'React의 제어 컴포넌트를 활용하여 카드 등록 플로우를 구현한 우아한테크코스 React 미션입니다.',
      ],
      tecStack: 'Typescript, React, Styled-Components, Storybook',
      links: [
        {
          name: 'Deploy',
          link: 'https://semnil5202.github.io/react-payments/',
        },
        {
          name: 'Github',
          link: 'https://github.com/semnil5202/react-payments/tree/step3',
        },
        {
          name: 'Storybook',
          link: 'https://6440f8da06a6f5059f0881e0-ejdkllxnph.chromatic.com/?path=/story/page-addcard--default',
        },
      ],
    },
    details: [
      {
        title:
          '1. 제어 컴포넌트 방식을 활용하여 사용자 입력값에 대한 즉각적인 피드백 제공',
        problems: [
          '카드 등록 폼의 특성상 입력 형식이 까다롭고 복잡하기에, 사용자가 잘못된 형식으로 정보를 입력하는 경우가 종종 발생했습니다. 제출 버튼을 누룬 후에 잘못된 입력값을 표시하는 방법은 사용자가 잘못 입력한 값을 찾아 다시 한번 수정해야 하므로 번거로워 보였습니다. 따라서 사용자가 잘못된 값을 입력했을 경우 그 즉시 사용자에게 피드백을 주어 수정을 유도하면 사용자 경험이 향상될 것이라 생각했습니다.',
        ],
        solves: [
          'React의 제어 컴포넌트 방식을 활용하여 사용자의 입력과 React의 상태를 결합함으로써 입력이 발생할 때마다 유효성 검사를 실시할 수 있었습니다. 이를 통해 사용자의 입력값이 잘못되었을 경우, 사용자의 입력을 막고 즉각적인 피드백을 통해 빠른 수정을 유도할 수 있게 함으로써 사용자 경험을 증진시킬 수 있었습니다.',
        ],
        result: {
          imageSrc: paymentsValidationImage,
        },
      },
      {
        title: '2. Auto Focus, Numeric Input을 통한 모바일 사용성 증진',
        problems: [
          '모바일 환경에서 카드 정보를 입력하기 전에 일일이 해당 입력 창을 터치해야 하는 불편함이 있었습니다.',
          '모바일 환경은 가상 키보드를 사용하기에 각 폼에서 요구하는 정보에 맞게 숫자 키보드, 문자 키보드 등으로 변환하면 사용자가 더 편리하게 정보를 입력할 수 있을 것이라 생각했습니다.',
        ],
        solves: [
          'React의 useRef와 제어 컴포넌트 방식을 활용하여 Auto Focus를 구현함으로써, 모바일 환경에서 입력 창을 터치하는 과정 없이 보다 편리하게 입력할 수 있도록 했습니다.',
          'input 태그의 type 속성을 활용하여 각 입력 폼에 맞게 가상 키보드의 종류를 변경함으로써, 보다 편리하게 입력할 수 있도록 했습니다.',
        ],
      },
      {
        title: '3. Storybook을 활용한 CDD',
        problems: [
          '페어 프로그래밍과 코드 리뷰 과정에서 컴포넌트 구조 및 구현 이유 등을 설명할 때 명확한 의사 전달 도구가 필요했습니다.',
        ],
        solves: [
          'Storybook을 사용한 CDD를 통해 컴포넌트를 시각적으로 문서화하고 조작해볼 수 있는 환경을 제공함으로써 보다 명확한 의사소통을 가능하게 했습니다.',
        ],
      },
    ],
  },
  'movie-list': {
    overview: {
      imageSrc: movieListImage,
      name: '무비 리스트',
      intros: [
        'TMDB API를 활용하여 인기 영화 목록을 확인하고 영화를 검색할 수 있는 우아한테크코스 Vanilla JS 미션입니다.',
      ],
      tecStack: 'HTML, CSS, JavaScript, Typescript',
      links: [
        {
          name: 'Deploy',
          link: 'https://semnil5202.github.io/javascript-movie-review/',
        },
        {
          name: 'Github',
          link: 'https://github.com/semnil5202/javascript-movie-review/tree/step2',
        },
      ],
    },
    details: [
      {
        title: '1. IntersectionObserver를 활용한 무한 스크롤 구현',
        problems: [
          "사용자가 영화 목록을 추가 조회할 때 '더 불러오기'와 같은 버튼을 반복적으로 클릭해야하는 불편함이 있었습니다.",
        ],
        solves: [
          'IntersectionObserver를 활용하여 사용자가 마지막 영화 목록까지 스크롤 하였을 경우 이를 감지해, 별도의 액션 없이 추가 조회를 수행할 수 있도록 했습니다.',
        ],
        result: {
          imageSrc: movieListIntersectionImage,
        },
      },
      {
        title: '2. Skeleton UI를 사용하여 로딩 상태에서 사용자 경험 증진',
        problems: [
          '영화 포스터의 이미지 로딩 시간이 오래 걸려 영화 목록을 조회하는 동안의 사용자 경험이 좋지 않았습니다.',
          '영화 포스터의 이미지를 로딩하는 과정에서 Layout Shift가 발생하여 사용자가 잘못된 조작을 할 우려가 있었습니다.',
        ],
        solves: [
          'Skeleton UI를 도입함으로써 영화 포스터 이미지가 로딩 중임을 사용자가 보다 명확하게 인지할 수 있도록 하고, Layout Shift를 개선하여 CLS 0을 달성했습니다.',
        ],
        result: {
          imageSrc: movieListSkeletonImage,
        },
      },
      {
        title: '3. 반응형 웹 적용',
        problems: [
          'PC 환경을 기준으로 구현하였기에 모바일 및 태블릿 환경에서 웹 페이지를 확인하기에는 불편함이 있었습니다.',
        ],
        solves: [
          'CSS Media Query를 활용하여 반응형 웹을 적용함으로써 PC, 태블릿, 모바일 각각의 환경에 적합한 사용성을 제공할 수 있도록 했습니다.',
        ],
        result: {
          imageSrc: movieListResponsiveImage,
        },
      },
    ],
  },
  portfolio: {
    overview: {
      imageSrc: portfolioImage,
      name: '포트폴리오',
      intros: ['Next.js를 사용하여 SSG 방식으로 배포한 웹 포트폴리오입니다.'],
      tecStack: 'Typescript, Next.js, Module CSS',
      links: [
        {
          name: 'Github',
          link: 'https://github.com/semnil5202/portfolio',
        },
      ],
    },
    details: [
      {
        title: '1. 다형성 컴포넌트 구현으로 중복 코드 최소화',
        problems: [
          '버튼, 텍스트 등 프로젝트 전반에 비슷하게 사용되는 컴포넌트들로 인해 중복 코드가 많이 발생했으며, 서로 다른 스타일 코드 방식으로 인해 UI 일관성을 헤칠 우려가 있었습니다.',
          '컴포넌트 사용처에서 HTML Tag와 무관한 Attribute를 사용할 경우 잠재적인 오류가 발생할 수 있는 우려가 있었습니다.',
        ],
        solves: [
          'TypeScript를 활용하여 React의 ElementType, ComponentPropsWithoutRef 타입을 통해 다형성 컴포넌트를 구현하였습니다. 이를 통해 중복 코드를 효과적으로 줄일 수 있었으며, 사용처에서 HTML Tag에 알맞은 Attribute만 사용할 수 있도록 강제하여 보다 안정적인 개발을 가능하도록 했습니다.',
        ],
      },
      {
        title: '2. 동적 라우팅 및 ErrorBoundary 적용',
        problems: [
          '각 프로젝트 설명을 위한 정형화된 상세 페이지를 구현해야 했으며 이를 하드 코딩 방식으로 직접 구현할 경우 중복 코드가 다량 발생할 가능성이 높아 보였습니다.',
          '사용자가 라우팅 과정에서 잘못된 URL을 입력할 경우 애플리케이션 전체의 에러로 전이되는 문제점이 있었습니다.',
        ],
        solves: [
          'Next.js에서 제공하는 동적 라우팅 기능과 error, not-found 페이지를 활용하여, 중복 코드를 효과적으로 줄이고 에러 상황을 선언적으로 처리할 수 있었습니다.',
        ],
      },
    ],
  },
};
