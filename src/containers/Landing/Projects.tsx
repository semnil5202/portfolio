import CARDS from '@/constants/cards';
import ProjectSwiper from '../../providers/ProjectSwiper';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  return (
    <div className="w-[1140px] h-full mx-auto flex flex-col items-center justify-center gap-10 lg:w-full md:w-full md:gap-5">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-5xl font-semibold md:text-3xl md:font-medium">
          프로젝트
        </h2>
        <div className="w-[60px] h-[1px] bg-white mt-4 md:w-[40px] md:mt-2" />
      </div>
      <section className="w-full h-[440px] md:h-[292px]">
        <ProjectSwiper>
          {CARDS.map(({ id, src, title, description, slug }) => (
            <ProjectCard
              key={id}
              src={src}
              title={title}
              description={description}
              slug={slug}
            />
          ))}
        </ProjectSwiper>
      </section>
    </div>
  );
};

export default Projects;
