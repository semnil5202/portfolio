import { StaticImageData } from 'next/image';

export type SlugType =
  | 'map-befine'
  | 'concept-be'
  | 'shopping-cart'
  | 'movie-list'
  | 'portfolio';

export type TemplateType =
  | {
      id: number;
      template: 'title';
      title: string;
      description: string;
      backgroundImg: StaticImageData;
    }
  | {
      id: number;
      template: 'introduction';
      subHeading: string;
      intro: string;
      value: string;
      contribution: string;
      date: string;
      member: string;
      links: {
        name: string;
        svg: React.FC<React.SVGProps<SVGSVGElement>>;
      }[];
    };

export interface Detail {
  'map-befine': TemplateType[];
  'concept-be': TemplateType[];
  'shopping-cart': TemplateType[];
  'movie-list': TemplateType[];
  portfolio: TemplateType[];
}