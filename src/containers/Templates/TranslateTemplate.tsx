import Activity from './Activity';
import Separator from './Separator';
import Introduction from './Introduction';
import Title from './Title';
import { TemplateType } from '../../types';
import ActivityImages from './ActivityImages';
import ActivityTexts from './ActivityTexts';

interface Props {
  slide: TemplateType;
  slideIndex: number;
}

const TranslateTemplate = ({ slide, slideIndex }: Props) => {
  if (slide.template === 'title') return <Title {...slide} />;
  if (slide.template === 'separator') return <Separator {...slide} />;
  if (slide.template === 'introduction') return <Introduction {...slide} />;
  if (slide.template === 'activity') {
    return <Activity {...slide} slideIndex={slideIndex} />;
  }

  if (slide.template === 'activity-texts') {
    return <ActivityTexts {...slide} slideIndex={slideIndex} />;
  }

  return <ActivityImages {...slide} slideIndex={slideIndex} />;
};

export default TranslateTemplate;
