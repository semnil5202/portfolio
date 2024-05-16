interface Props {
  currentPageIndex: number;
}

const Background = ({ currentPageIndex }: Props) => {
  const primaryColorWidth =
    currentPageIndex === 0 ? 'w-2/5 md:w-full md:h-1/2' : 'w-full md:h-full';
  const bgColor = currentPageIndex === 2 ? 'bg-dark' : 'bg-primary';

  return (
    <div className="w-full h-full fixed md:flex md:flex-col-reverse">
      <div
        className={`${primaryColorWidth} h-full ${bgColor} animate-init-background transition-all ease duration-700`}
      />
    </div>
  );
};

export default Background;
