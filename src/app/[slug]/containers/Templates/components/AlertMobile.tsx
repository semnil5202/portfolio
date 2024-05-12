const AlertMobile = () => {
  return (
    <section className="opacity-0 flex fixed flex-col justify-center items-center w-full h-full bg-dark sm:opacity-100 sm:z-[100]">
      <div className="w-[250px] h-[250px] flex justify-center items-center mb-4 animate-rotate-smart-phone">
        <div className="w-[120px] h-[200px] border-2 border-fff rounded-lg flex flex-col justify-end items-center py-2">
          <div className="w-[100px] h-[160px] mb-1 bg-fff rounded-md" />
          <div className="w-[16px] h-[16px] border-2 border-fff rounded-full" />
        </div>
      </div>

      <p className="w-[80%] text-xl text-fff font-medium mb-4 text-center break-keep">
        디바이스를 가로로 회전시켜 주세요.
      </p>
      <p className="w-[80%] text-sm text-fff font-extralight mb-10 leading-relaxed text-center break-keep">
        모바일 환경에선 가로로 긴 PPT 형식의 페이지 특성상 세로로 보기가
        어렵습니다. 가로로 회전시킨 이후에도 이 화면이 유지된다면 PC로 접속해
        주세요.
      </p>
    </section>
  );
};

export default AlertMobile;
