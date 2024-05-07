import { StaticImageData } from 'next/image';
import Activity from './Templates/Activity';
import End from './Templates/End';
import ExtendActivity from './Templates/ExtendActivity';
import Introduction from './Templates/Introduction';
import Title from './Templates/Title';
import { TemplateType } from '../types';

interface Props {
  slide: TemplateType;
}

const TranslateTemplate = ({ slide }: Props) => {
  if (slide.template === 'title') return <Title {...slide} />;
  if (slide.template === 'introduction') return <Introduction {...slide} />;
  if (slide.template === 'activity') return <Activity {...slide} />;
  return <></>;
};

export default TranslateTemplate;
