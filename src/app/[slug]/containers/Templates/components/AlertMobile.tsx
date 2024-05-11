import Image from 'next/image';
import PNGAlertMobile from '../../../../../../public/assets/alert-mobile.png';

const AlertMobile = () => {
  return (
    <div className="opacity-0 flex fixed flex-col justify-center items-center w-full h-full bg-dark sm:opacity-100 sm:z-[100]">
      <div className="w-[320px] h-max mb-14">
        <Image src={PNGAlertMobile} alt="모바일 안내 이미지" />
      </div>
      <p className="w-[320px] text-xl text-fff font-bold mb-4 text-center break-keep">
        PC로 접속하시거나 디바이스를 가로로 회전시켜 주세요.
      </p>
      <p className="w-[320px] text-sm text-fff font-extralight mb-10 leading-relaxed text-center break-keep">
        모바일 환경에선 페이지 특성상 세로로 보기가 어렵습니다. <br /> 아이폰
        미니와 같이 화면 크기가 작은 기종은 PC로 접속해 주세요.
      </p>
      <p className="w-[320px] text-sm text-link font-extralight leading-relaxed text-center break-keep">
        프로젝트 상세 페이지에서 PPT 미리 보기를 열려면 좌측 스크롤 바를 터치해
        주세요.
      </p>
    </div>
  );
};

export default AlertMobile;
