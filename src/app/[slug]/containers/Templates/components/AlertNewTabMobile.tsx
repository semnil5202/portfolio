const AlertNewTabMobile = () => {
  return (
    <section className="opacity-0 flex fixed justify-center items-center w-full h-full bg-dark tall:opacity-100 tall:z-[100]">
      <div className="w-[250px] h-[100px] flex justify-center items-center mb-4">
        <div className="w-[200px] h-[100px] border-2 border-fff rounded-lg flex justify-evenly items-center">
          <div className="w-[164px] h-[84px] bg-fff rounded-md tall:animate-new-tab-smart-phone" />
          <div className="w-[16px] h-[16px] border-2 border-fff rounded-full" />
        </div>
      </div>

      <div className="w-[50%]">
        <p className="w-[80%] text-xl text-fff font-medium mb-4 text-center break-keep">
          인터넷 앱에서 접속해 주세요.
        </p>
        <p className="w-[80%] text-sm text-fff font-extralight mb-10 leading-relaxed text-center break-keep">
          Chrome, Safari, Samsung Internet 등 인터넷 앱으로 직접 접속해 주세요.
          인터넷 앱으로 접속한 이후에도 이 화면이 유지된다면 PC로 접속해 주세요.
        </p>
      </div>
    </section>
  );
};

export default AlertNewTabMobile;
