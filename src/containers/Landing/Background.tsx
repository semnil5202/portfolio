interface Props {
  currentPageIndex: number;
}

const Background = ({ currentPageIndex }: Props) => {
  const primaryColorWidth = currentPageIndex === 0 ? 'w-2/5' : 'w-full';
  const bgColor = currentPageIndex === 2 ? 'bg-dark' : 'bg-primary';

  return (
    <div className="w-full h-full fixed">
      <div
        className={`${primaryColorWidth} h-full ${bgColor} animate-init-background transition-all ease duration-700`}
      ></div>
    </div>
  );
};

export default Background;
