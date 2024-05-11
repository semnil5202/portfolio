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
      <div className="w-[250px] flex flex-col items-center">
        <div className="w-[250px] h-[250px] rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            loading="lazy"
            className="animate-skeleton"
          />
        </div>
        <div>
          <h4 className="text-fff text-xl font-semibold mt-4">{title}</h4>
          <p className="text-fff font-light mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
