import ProjectSwiper from './components/ProjectSwiper';

interface Props {
  currentPageIndex: number;
}

const Projects = ({ currentPageIndex }: Props) => {
  return (
    <div className="w-[1140px] h-full mx-auto flex flex-col items-center justify-center gap-10 lg:w-full md:w-full md:gap-[1.5vw]">
      <div className="flex flex-col items-center">
        <h2 className="text-fff text-5xl font-semibold md:text-[4vw]">
          프로젝트
        </h2>
        <div className="w-[60px] h-[1px] bg-fff mt-4 md:hidden" />
      </div>
      <article className="w-full h-[440px] md:h-[38.5vw]">
        <ProjectSwiper currentPageIndex={currentPageIndex} />
      </article>
    </div>
  );
};

export default Projects;
