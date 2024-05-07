import ProjectCard from './components/ProjectCard';
import CARDS from '@/constants/cards';
import ProjectSwiper from './components/ProjectSwiper';

const Projects = () => {
  return (
    <div className="w-[1128px] h-full mx-auto flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center">
        <h2 className="text-fff text-5xl font-semibold">PROJECTS</h2>
        <div className="w-[60px] h-[1px] bg-fff mt-4" />
      </div>
      <article className="w-full h-[440px]">
        <ProjectSwiper />
      </article>
    </div>
  );
};

export default Projects;
