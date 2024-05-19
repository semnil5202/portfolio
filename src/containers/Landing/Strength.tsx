import STRENGTHS from '@/constants/strength';
import StrengthItem from './components/StrengthItem';
import StrengthSwiper from '@/providers/StrengthSwiper';

const Strength = () => {
  return (
    <div className="w-[1140px] h-full mx-auto lg:w-full md:w-full md:justify-around">
      <article className="w-full h-full flex justify-center items-center">
        <StrengthSwiper>
          {STRENGTHS.map((strength) => (
            <StrengthItem key={strength.id} {...strength} />
          ))}
        </StrengthSwiper>
      </article>
    </div>
  );
};

export default Strength;
