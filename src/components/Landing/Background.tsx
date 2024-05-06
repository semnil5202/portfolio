interface Props {
  currentPageIndex: number;
}

const Background = ({ currentPageIndex }: Props) => {
  console.log(currentPageIndex);
  const primaryColorWidth = currentPageIndex === 0 ? 'w-2/5' : 'w-full';

  return (
    <div className="w-full h-full fixed z-0">
      <div
        className={`${primaryColorWidth} h-full bg-primary animate-init-background transition-[width] ease duration-700`}
      ></div>
    </div>
  );
};

export default Background;
