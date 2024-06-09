import { TemplateType } from '@/types';
import Title from './Title';
import Separator from './Separator';
import Introduction from './Introduction';
import Activity from './Activity';
import ActivityTexts from './ActivityTexts';

interface Props {
  slide: TemplateType;
  slideIndex: number;
}

const TranslateTemplate = ({ slide, slideIndex }: Props) => {
  if (slide.template === 'title') return <Title {...slide} />;
  if (slide.template === 'separator') return <Separator {...slide} />;
  if (slide.template === 'introduction') return <Introduction {...slide} />;
  if (slide.template === 'activity-texts') {
    return <ActivityTexts {...slide} slideIndex={slideIndex} />;
  }
  // return <Activity {...slide} slideIndex={slideIndex} />;
  return <></>;
};

export default TranslateTemplate;
