import TranslateTemplate from '../../containers/Templates/TranslateTemplate';
import TranslateNavTemplate from '../../containers/Navigations/NavTranslateTemplate';
import { SlugType } from '../../types';
import DETAILS, { DETAIL_LANDING } from '@/constants/details';
import ProjectFullPageSwiper from '@/providers/ProjectFullPageSwiper';

const ProjectDetail = ({ params }: { params: { slug: SlugType } }) => {
  const landingImage = DETAIL_LANDING[params.slug];
  const slideLength = DETAILS[params.slug].length;
  const navigationDetails = DETAILS[params.slug].map((slide, idx) => (
    <TranslateNavTemplate slide={slide} slideIndex={idx} />
  ));

  return (
    <main className="relative w-screen h-dvh">
      <ProjectFullPageSwiper
        landingImage={landingImage}
        navigations={navigationDetails}
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
