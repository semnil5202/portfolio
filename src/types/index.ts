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
      links: {
        name: string;
        href: string;
        svg: React.FC<React.SVGProps<SVGSVGElement>>;
      }[];
    }
  | {
      id: number;
      template: 'separator';
      type: 'separate';
      heading: string;
    }
  | {
      id: number;
      template: 'separator';
      type: 'end';
      heading: string;
      link: string;
      svg?: React.FC<React.SVGProps<SVGSVGElement>>;
    }
  | {
      id: number;
      template: 'introduction';
      heading: string;
      intro: string;
      value?: string;
      contribution?: string;
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
      heading: string;
      subHeading?: string;
      image: StaticImageData;
      contents: {
        heading: string;
        descriptions: string[];
      }[];
      link?: {
        heading: string;
        name: string;
        href: string;
      };
    }
  | {
      id: number;
      template: 'activity-images';
      heading: string;
      subHeading?: string;
      images: StaticImageData[];
      contents: {
        heading: string;
        descriptions: string[];
      }[];
      link?: {
        heading: string;
        name: string;
        href: string;
      };
    }
  | {
      id: number;
      template: 'activity-texts';
      heading: string;
      subHeading?: string;
      first: {
        title: string;
        contents: {
          heading: string;
          descriptions: string[];
        }[];
        link?: {
          heading: string;
          name: string;
          href: string;
        };
      };
      second: {
        title: string;
        contents: {
          heading: string;
          descriptions: string[];
        }[];
        link?: {
          heading: string;
          name: string;
          href: string;
        };
      };
    };

export interface Detail {
  'map-befine': TemplateType[];
  'concept-be': TemplateType[];
  'shopping-cart': TemplateType[];
  'movie-list': TemplateType[];
  portfolio: TemplateType[];
}

export interface Experience {
  date: string;
  content: string;
}
