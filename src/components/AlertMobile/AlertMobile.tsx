import PCIllustration from './PCIllustration';

const AlertMobile = () => {
  return (
    <section className="hidden relative w-screen h-dvh z-[100] limit-width:block limit-height:block">
      <div className="w-full h-full px-10 flex flex-col justify-center items-center bg-primary">
        <PCIllustration />
        <h2 className="text-white text-lg font-medium mt-6 mb-1">
          PC로 접속해 주세요.
        </h2>
        <p className="max-w-[272px] text-white text-xs font-extralight leading-relaxed">
          이 페이지에서 귀하의 기기 사이즈를 지원하지 않습니다. 갤럭시 폴드일
          경우 화면을 펼쳐주시고, 그 외의 스마트폰은 PC로 접속해 주세요.
        </p>
      </div>
    </section>
  );
};

export default AlertMobile;
