import TranslateTemplate from '../../containers/Templates/TranslateTemplate';
import { SlugType } from '../../types';
import DETAILS, { DETAIL_LANDING, DETAIL_NAV } from '@/constants/details';
import ProjectFullPageSwiper from '@/providers/ProjectFullPageSwiper';

const ProjectDetail = ({ params }: { params: { slug: SlugType } }) => {
  const landingImage = DETAIL_LANDING[params.slug];
  const slideLength = DETAILS[params.slug].length;
  const navigationImages = DETAIL_NAV[params.slug];

  return (
    <main className="relative w-screen h-dvh">
      <ProjectFullPageSwiper
        landingImage={landingImage}
        navigationImages={navigationImages}
        slideLength={slideLength}
      >
        {DETAILS[params.slug].map((slide, idx) => (
          <TranslateTemplate key={slide.id} slide={slide} slideIndex={idx} />
        ))}
      </ProjectFullPageSwiper>
    </main>
  );
};

export default ProjectDetail;
