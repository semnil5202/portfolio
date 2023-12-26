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
