import LandingMain from '@/containers/Landing/LandingMain';
import Strength from '@/containers/Landing/Strength';
import Projects from '@/containers/Landing/Projects';
import MainFullPageSwiper from '@/providers/MainFullPageSwiper';

export default function Home() {
  return (
    <main className="w-screen h-dvh">
      <MainFullPageSwiper>
        <LandingMain />
        <Strength />
        <Projects currentpageindex={undefined as never} />
      </MainFullPageSwiper>
    </main>
  );
}
