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
import SVGGithubLogoWhite from '../../public/assets/icons/github-logo-white.svg';
import SVGMapBeFineLogo from '../../public/assets/icons/mapbefine-logo.svg';
import SVGFigmaLogo from '../../public/assets/icons/figma-logo.svg';

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
      subHeading: '개요',
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
        { image: PNGTechCypress, name: 'Cypress' },
        { image: PNGTechTl, name: 'Testing Library' },
        { image: PNGTechGa, name: 'Github Action' },
      ],
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
