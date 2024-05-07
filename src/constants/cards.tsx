import PNGMapBeFine from '../../public/assets/mapbefine.png';
import PNGConceptBe from '../../public/assets/conceptbe.png';
import PNGShoppingCart from '../../public/assets/shoppingcart.png';
import PNGMovieList from '../../public/assets/movielist.png';
import PNGPortfolio from '../../public/assets/portfolio.png';

const CARDS = [
  {
    id: 1,
    src: PNGMapBeFine,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    slug: 'map-befine',
  },
  {
    id: 2,
    src: PNGConceptBe,
    title: '컨셉비',
    description: '다양한 종목의 프로젝트 인원들을 구인할 수 있는 서비스',
    slug: 'concept-be',
  },
  {
    id: 3,
    src: PNGShoppingCart,
    title: '장바구니',
    description:
      'MSW를 활용하여 장바구니 페이지를 만드는 우아한테크코스 React 미션',
    slug: 'shopping-cart',
  },
  {
    id: 4,
    src: PNGMovieList,
    title: '무비 리스트',
    description:
      'TMDB를 활용해 영화 목록을 만드는 우아한테크코스 Vanilla JS 미션',
    slug: 'movie-list',
  },
  {
    id: 5,
    src: PNGPortfolio,
    title: '포트폴리오',
    description: 'Next.js를 사용하여 만든 포트폴리오 웹 페이지',
    slug: 'portfolio',
  },
];

export default CARDS;
