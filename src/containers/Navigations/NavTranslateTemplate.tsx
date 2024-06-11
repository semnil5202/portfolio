import { TemplateType } from '@/types';
import NavTitle from './NavTitle';
import NavSeparator from './NavSeparator';
import NavIntroduction from './NavIntroduction';
import NavActivity from './NavActivity';
import NavActivityTexts from './NavActivityTexts';

interface Props {
  slide: TemplateType;
  slideIndex: number;
}

const NavTranslateTemplate = ({ slide, slideIndex }: Props) => {
  if (slide.template === 'title') return <NavTitle {...slide} />;
  if (slide.template === 'separator') return <NavSeparator {...slide} />;
  if (slide.template === 'introduction') return <NavIntroduction {...slide} />;
  if (slide.template === 'activity-texts') {
    return <NavActivityTexts {...slide} slideIndex={slideIndex} />;
  }
  return <NavActivity {...slide} slideIndex={slideIndex} />;
};

export default NavTranslateTemplate;
