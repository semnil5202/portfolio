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
    <Link href={`/${slug}`}>
      <div className="w-[282px] cursor-pointer p-[16px]">
        <div className="w-[250px] h-[250px] rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={250}
            height={250}
            loading="lazy"
            className="animate-skeleton"
          />
        </div>
        <h4 className="text-fff text-xl font-semibold mt-4">{title}</h4>
        <p className="text-fff font-light mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
