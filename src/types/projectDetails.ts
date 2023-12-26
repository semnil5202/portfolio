import { StaticImageData } from 'next/image';

export interface ProjectDetails {
  [key: string]: {
    overview: {
      imageSrc: StaticImageData;
      name: string;
      intros: string[];
      tecStack: string;
      links: { name: string; link: string }[];
      period?: string;
      personnel?: string;
      role?: string;
    };
    details: {
      title: string;
      problems: string[];
      solves: string[];
      result?: { description?: string; imageSrc?: StaticImageData };
    }[];
  };
}
