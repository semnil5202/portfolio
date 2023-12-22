import { ProjectCard } from '@/components/ProjectCard';
import mapBeFineImage from '../../../public/assets/mapbefine.png';
import styles from './Projects.module.css';

const PROJECT_DATA = [
  {
    imageSrc: mapBeFineImage,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    personnel: 'BE: 4명, FE: 3명',
    slug: 'mapbefine',
  },
  {
    imageSrc: mapBeFineImage,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    personnel: 'BE: 4명, FE: 3명',
    slug: 'mapbefine',
  },
  {
    imageSrc: mapBeFineImage,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    personnel: 'BE: 4명, FE: 3명',
    slug: 'mapbefine',
  },
  {
    imageSrc: mapBeFineImage,
    title: '괜찮을지도',
    description: '개인의 관심사를 다양한 지도로 만들고 공유할 수 있는 서비스',
    personnel: 'BE: 4명, FE: 3명',
    slug: 'mapbefine',
  },
];

export default function Projects() {
  return (
    <section className={styles.wrapper}>
      {PROJECT_DATA.map(({ imageSrc, title, description, personnel, slug }) => (
        <ProjectCard
          key={title}
          imageSrc={imageSrc}
          title={title}
          description={description}
          personnel={personnel}
          slug={slug}
        />
      ))}
    </section>
  );
}
