import ProjectOverview from '@/components/ProjectOverview/ProjectOverview';
import { Space } from '@/components/common/Space';
import { PROJECT_DETAILS } from '@/constants/data';
import styles from './page.module.css';

export default function Detail({ params }: { params: { slug: string } }) {
  const { overview, details } = PROJECT_DETAILS[params.slug];
  const { imageSrc, name, intros, tecStack, links, period, personnel, role } =
    overview;

  return (
    <main className={styles.main}>
      <Space size={72} />
      <ProjectOverview
        imageSrc={imageSrc}
        name={name}
        intros={intros}
        tecStack={tecStack}
        links={links}
        period={period}
        personnel={personnel}
        role={role}
      />
      <Space size={40} />
    </main>
  );
}
