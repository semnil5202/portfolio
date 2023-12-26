import { ProjectDetails } from '@/types/projectDetails';
import mapBeFineImage from '../../public/assets/mapbefine.png';

export const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Recoil',
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
      '• React를 활용한 웹 애플리케이션 개발 경험이 있습니다.',
      '• React와 외부시스템인 지도를 결합해본 경험이 있습니다. ',
      '• Recoil, Zustand 등 상태관리 라이브러리 사용 경험이 있습니다.',
      '• React Lazy를 활용한 성능 최적화를 진행한 경험이 있습니다.',
    ],
  },
  {
    title: 'HTML/CSS',
    description: [
      '• 반응형 웹에 대응할 수 있습니다.',
      '• 시맨틱 태그, 웹 표준, 웹 접근성을 준수할 수 있습니다.',
      '• 크로스 브라우징에 대응할 수 있습니다.',
      '• CSS In JS 방식인 styled-components를 활용할 수 있습니다.',
    ],
  },
  {
    title: 'NEXT',
    description: [
      '• SSG, SSR, ISR 방식으로 상황에 맞게 활용할 수 있습니다.',
      '• 한가지더 쓰셈',
    ],
  },

  {
    title: 'JS/TS',
    description: [
      '• JavaScript 원리에 대해 깊게 알고 있습니다.',
      '• TypeScript를 활용하여 프로젝트를 진행한 경험이 있습니다.',
      '• webpack을 활용한 번들러 사용 경험이 있습니다.',
      '• Jest, Cypress를 활용한 테스트 코드 작성 및 환경 구축 경험이 있습니다.',
      '• Jest, Cypress를 활용한 테스트 코드 작성 및 환경 구축 경험이 있습니다.',
      '• Jest, Cypress를 활용한 테스트 코드 작성 및 환경 구축 경험이 있습니다.',
    ],
  },
];

export const EDUCATIONS = [
  {
    organization: {
      school: '우아한테크코스 5기',
      date: '2023.02 - 2023.11',
      motherSchool: '우아한형제들',
      link: 'Archive',
    },
    content: {
      title: '웹 프론트엔드 과정',
      descriptions: [
        '• Vanilla JavaScript, TypeScript, Webpack, Jest, Cypress를 활용한 미션 기반으로 웹 기술 학습',
        '• Recoil, MSW, Storybook, React-Testing-Library를 활용한 React 학습',
        '• 웹 성능 최적화, NPM 라이브러리 배포, Github-Actions를 활용한 CI/CD 구축, NEXT.js 학습',
        '• 기획, 개발, 유지 보수 과정의 실 사용자가 있는 팀 프로젝트 수행',
        '• 페어 프로그래밍, 코드 리뷰, 협업, 팀 프로젝트, 글쓰기를 통한 소프트스킬 증진',
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
        '• Hidden Markov Model을 이용한 Anomaly Detection 수행 경험',
        '• SYN Flood Attack, Key Log 등의 방법을 통해 취약점 분석 경험',
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
    imageSrc: mapBeFineImage,
    title: '장바구니',
    description: '우아한테크코스 React 미션',
    slug: 'shopping-cart',
  },
  {
    imageSrc: mapBeFineImage,
    title: '페이먼츠',
    description: '우아한테크코스 React 미션',
    slug: 'payments',
  },
  {
    imageSrc: mapBeFineImage,
    title: 'Movie List',
    description: '우아한테크코스 Vanilla JS 미션',
    slug: 'movie-list',
  },
  {
    imageSrc: mapBeFineImage,
    title: '점심 뭐 먹지',
    description: '우아한테크코스 Vanilla JS 미션',
    slug: 'lunch-recommendation',
  },
];

export const PROJECT_DETAILS: ProjectDetails = {
  mapbefine: {
    overview: {
      imageSrc: mapBeFineImage,
      name: '괜찮을지도',
      intros: [
        '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스입니다.',
        '기존의 지도 서비스는 개인의 관심사를 기록하는데 용이하지만, 다른 사람과 정보를 공유하는데 불편하다는 점에서 이를 개선하고자 프로젝트를 시작하였습니다.',
        '서로 다른 주제의 지도를 한 번에 모아보거나, 마음에 드는 정보만 골라 나만의 지도로 재탄생 시킬 수도 있습니다.',
      ],
      period: '2023.06 - 2023.12',
      personnel: 'BE: 4명, FE: 3명',
      role: '기획, 디자인, 프론트엔드',
      tecStack:
        'Typescript, React, Zustand, Styled Components, Webpack, MSW, Storybook, Jest, React Testing Library, Cypress, Github Actions',
      links: [
        {
          name: 'Introduction Page',
          link: 'https://sites.google.com/woowahan.com/woowacourse-demo-5th/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EA%B4%9C%EC%B0%AE%EC%9D%84%EC%A7%80%EB%8F%84',
        },
        { name: 'Homepage', link: 'https://mapbefine.com/' },
        {
          name: 'Github',
          link: 'https://github.com/woowacourse-teams/2023-map-befine',
        },
      ],
    },
    details: [
      {
        title: '1. 마커 클러스터링 및 스크린 사이즈 렌더링으로 지도 최적화',
        problems: [
          '수백 개 이상의 마커를 보유한 지도의 경우 마커가 지도를 가려 위치 확인이 어렵고 지도를 조작할 때 버벅대는 불편함이 있었습니다.',
        ],
        solves: [
          '지도의 줌 레벨에 따라 마커의 지름이 차지하는 실제 거리를 구하고, 이를 바탕으로 마커 간 겹침 여부를 판단하여 마커 클러스터링을 진행하였습니다.',
          '스크린 사이즈에 해당하는 마커들만 동적으로 렌더링함으로써 렌더링 프레임을 48 FPS에서 71 FPS로 개선하였습니다.',
        ],
        result: {
          description: 'Pull Request',
          imageSrc: mapBeFineImage,
        },
      },
      {
        title:
          '2. 지도 이벤트 핸들링 및 사이드 바와 지도 간 상호작용 기능 구현',
        problems: [
          '지도를 드래그 및 줌 할 때 스크린 사이즈 마커 렌더링, 클러스터링 등 복잡한 연산 로직과 서버와의 통신을 최소한으로 수행해야 했습니다.',
          '지도 위 마커를 클릭했을 때 사이드바를 확장하여 세부 정보를 보여줄 수 있도록 해야 했고, 사이드 바의 리스트를 클릭하면 지도를 해당 정보의 위치로 이동 및 줌 인 시켜야 했습니다.',
        ],
        solves: [
          '지도 이벤트 핸들링 로직에 디바운싱을 걸어 마지막 이벤트에만 로직을 수행함으로써 서버 통신 비용을 절감하고 효율적으로 지도를 조작할 수 있도록 하였습니다.',
          'Route State 및 쿼리 파라미터를 사용하여 마커 및 사이드 바 리스트 클릭 여부를 확인할 수 있도록 함으로써 사이드 바와 지도 간 상호작용과 URL 공유를 가능케 했습니다.',
        ],
      },
      {
        title:
          '3. 공용 Swiper 컴포넌트 구현 및 적용으로 메인 페이지 사용자 경험 개선',
        problems: [
          '서비스 초기에는 콘텐츠 생산자 중심의 메인 페이지 UI와 복잡한 플로우로 인해 사용자 이탈 현상이 자주 발생했습니다.',
          '단순 콘텐츠 나열 형태로 사용자에게 우선적으로 노출하고자 한 콘텐츠가 잘 전달되지 못했습니다.',
        ],
        solves: [
          '콘텐츠 소비자를 중심으로 UI를 재배치하기 위해 메인 페이지에서부터 존재하던 지도를 분리하고, 지도를 필요로 하는 페이지에서만 동적으로 보여줄 수 있도록 하였습니다.',
          '프로젝트에서 공용으로 사용할 수 있는 Swiper를 구현함으로써, 사용자에게 노출하고자 하는 콘텐츠를 우선적으로 배치할 수 있었습니다. 또한 Swiper는 NPM에 배포하였습니다.',
        ],
        result: {
          description: 'Blog Post',
          imageSrc: mapBeFineImage,
        },
      },
      {
        title: '4. 번들 사이즈 최적화로 초기 로딩 속도 개선',
        problems: [
          '서비스 규모가 방대해짐에 따라 번들 사이즈가 커져 초기 로딩 시간이 길어지는 현상이 발생했습니다.',
        ],
        solves: [
          'Webpack의 sideEffects 속성을 false로 지정함으로써 Tree Shaking을 진행하였습니다.',
          'Page 컴포넌트 단위로 Dynamic Import 방식과 React.lazy, Suspense를 사용하여 Code Splitting을 진행하였습니다.',
        ],
        result: {
          description:
            '메인 페이지 LCP를 2.9초에서 1.5초로 약 1.4초 개선하고, 번들 사이즈를 609KB에서 455KB로 약 34% 축소시켰습니다.',
        },
      },
      {
        title: '5. 시맨틱 태그 및 웹 표준, 웹 접근성 적용',
        problems: [
          '스크린 리더기를 통해 서비스를 이용해 보았을 때, 정상적으로 사용하기에는 어려움이 있었습니다.',
        ],
        solves: [
          '시맨틱 태그, aria-label 등을 적용하여 스크린 리더기를 사용하는 사용자들에게 페이지에 대한 이해를 높이고 보다 편리하게 사용할 수 있도록 하였습니다.',
          'Chrome, Safari 등 목표한 브라우저에서 서비스의 모든 플로우가 동작 가능하도록 웹 표준을 준수하였습니다.',
        ],
      },
      {
        title: '6. PC, 태블릿, 모바일 사이즈 반응형 웹 적용',
        problems: [
          'PC 환경을 기준으로 서비스를 개발하였기에 모바일, 태블릿 환경에서 서비스를 쾌적하게 이용하기 어려운 점이 있었습니다.',
        ],
        solves: [
          'CSS의 Media Query 등을 사용하여 PC, 태블릿, 모바일 환경에서 동일한 사용자 경험을 제공할 수 있도록 하였습니다.',
        ],
        result: {
          description: 'Pull Request',
          imageSrc: mapBeFineImage,
        },
      },
      {
        title: '7. Figma를 사용하여 전반적인 UI/UX 설계',
        problems: [
          '디자이너의 부재로 서비스 전반의 UI/UX를 3명의 프론트엔드 인원이 나눠서 개발해야 하는 상황이었습니다. 이 경우 일관되지 않은 UI/UX로 이어져 사용자 경험을 해칠 우려가 있었습니다.',
        ],
        solves: [
          'Figma를 사용하여 프로젝트 전반의 와이어 프레임 및 프로토타입을 구현함으로써 일관된 UI/UX 구축하였습니다.',
          '매 스프린트 별로 변경사항이 생길 경우 이에 대응하여 와이어 프레임 및 프로토타입을 수정하여 제공하였습니다.',
        ],
      },
    ],
  },
};
