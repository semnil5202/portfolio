import { Space } from '@/components/common/Space';
import { PROJECT_DETAILS } from '@/constants/data';
import styles from './page.module.css';
import { ProjectOverview } from '@/containers/ProjectOverview';
import { ProjectDetail } from '@/containers/ProjectDetail';

export default function Detail({ params }: { params: { slug: string } }) {
  const { overview, details } = PROJECT_DETAILS[params.slug];
  const { imageSrc, name, intros, tecStack, links, period, personnel, role } =
    overview;

  return (
    <main className={styles.main}>
      <Space size={72} />
      <div className={styles.typographyWrapper}>
        <h2 className={styles.overview}>Overview.</h2>
      </div>
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
      <Space size={120} />
      <div className={styles.typographyWrapper}>
        <h2 className={styles.activity}>Activity.</h2>
      </div>
      {details.map(({ title, problems, solves, result }) => (
        <ProjectDetail
          key={title}
          title={title}
          problems={problems}
          solves={solves}
          result={result}
        />
      ))}
    </main>
  );
}
