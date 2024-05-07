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
      links: {
        name: string;
        href: string;
        svg: React.FC<React.SVGProps<SVGSVGElement>>;
      }[];
    }
  | {
      id: number;
      template: 'introduction';
      subHeading: string;
      intro: string;
      value: string;
      contribution: string;
      organization?: string;
      date: string;
      member: string;
      techs: {
        image: StaticImageData;
        name: string;
      }[];
    }
  | {
      id: number;
      template: 'activity';
      subHeading: string;
      image: StaticImageData;
      contents: {
        heading: string;
        descriptions: string[];
      }[];
    }
  | {
      id: number;
      template: 'activity-extend';
      subHeading: string;
      contents: {
        image?: StaticImageData;
        heading: string;
        descriptions: string[];
      }[];
    }
  | {
      id: number;
      template: 'activity-grid';
      subHeading: string;
      contents: {
        heading: string;
        descriptions: string[];
      }[];
    };

export interface Detail {
  'map-befine': TemplateType[];
  'concept-be': TemplateType[];
  'shopping-cart': TemplateType[];
  'movie-list': TemplateType[];
  portfolio: TemplateType[];
}
