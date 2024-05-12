import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  src: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

const ProjectCard = ({ src, title, description, slug }: Props) => {
  return (
    <Link href={`/${slug}`} className="cursor-grab flex justify-center">
      <div className="w-[250px] flex flex-col items-center lg:w-[22vw] md:w-[22vw]">
        <div className="w-[250px] h-[250px] rounded-xl overflow-hidden lg:w-[22vw] lg:h-[22vw] md:w-[22vw] md:h-[18.5vw] md:flex md:items-center md:rounded-md">
          <Image
            src={src}
            alt={title}
            loading="lazy"
            className="animate-skeleton"
          />
        </div>
        <div>
          <h4 className="text-fff text-xl font-semibold mt-4 md:text-[1.8vw] md:mt-[0.2vw] md:font-medium md:leading-normal">
            {title}
          </h4>
          <p className="text-fff font-light mt-2 leading-relaxed md:text-[1.5vw] md:mt-0">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
