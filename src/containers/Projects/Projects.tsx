import { ProjectCard } from '@/components/ProjectCard';
import styles from './Projects.module.css';
import { PROJECTS } from '@/constants/data';

export default function Projects() {
  return (
    <section className={styles.wrapper}>
      {PROJECTS.map(({ imageSrc, title, description, slug }) => (
        <ProjectCard
          key={title}
          imageSrc={imageSrc}
          title={title}
          description={description}
          slug={slug}
        />
      ))}
    </section>
  );
}
