import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  description: string;
}

const Title = ({ title, description }: Props) => {
  return (
    <section className="w-3/6 h-full flex flex-col items-center justify-center animate-init-fade-in">
      <div className="ml-[-20px] max-w-[70%]">
        <h1 className="text-7xl text-fff font-bold">{title}</h1>
        <div className="flex mt-6">
          <div className="w-[2px] h-[18px] bg-fff mt-[6px] mr-4" />
          <p className="text-lg text-fff font-light ">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Title;
