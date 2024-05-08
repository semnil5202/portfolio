import { StaticImageData } from 'next/image';
import Activity from './Templates/Activity';
import End from './Templates/Separator';
import Introduction from './Templates/Introduction';
import Title from './Templates/Title';
import { TemplateType } from '../types';
import ActivityImages from './Templates/ActivityImages';
import ActivityTexts from './Templates/ActivityTexts';

interface Props {
  slide: TemplateType;
}

const TranslateTemplate = ({ slide }: Props) => {
  if (slide.template === 'title') return <Title {...slide} />;
  if (slide.template === 'introduction') return <Introduction {...slide} />;
  if (slide.template === 'activity') return <Activity {...slide} />;
  if (slide.template === 'activity-texts') return <ActivityTexts {...slide} />;
  if (slide.template === 'activity-images')
    return <ActivityImages {...slide} />;
  return <></>;
};

export default TranslateTemplate;
