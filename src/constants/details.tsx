import { Detail } from '@/app/[slug]/types';
import PNGMapBeFine from '../../public/assets/mapbefine-landing.png';

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
      links: [],
    },
  ],
  'concept-be': [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
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
      links: [],
    },
  ],
  'shopping-cart': [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
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
      links: [],
    },
  ],
  'movie-list': [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
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
      links: [],
    },
  ],
  portfolio: [
    {
      id: 1,
      template: 'title',
      title: '괜찮을지도',
      description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
      backgroundImg: PNGMapBeFine,
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
      links: [],
    },
  ],
};

export default DETAILS;
