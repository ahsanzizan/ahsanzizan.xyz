type InfiniteScrollAnimationProps = {
  className: string;
};

export default function InfiniteScrollAnimation({
  className,
}: InfiniteScrollAnimationProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      id="landing-uao"
    >
      <div id="1" className="h-1/3 w-full bg-black opacity-100"></div>
      <div id="2" className="h-1/3 w-full bg-black opacity-80"></div>
      <div id="3" className="h-1/3 w-full bg-black opacity-60"></div>
      <div id="4" className="h-1/3 w-full bg-black opacity-40"></div>
      <div id="5" className="h-1/3 w-full bg-black opacity-20"></div>
      <div id="1" className="h-1/3 w-full bg-black opacity-100"></div>
      <div id="2" className="h-1/3 w-full bg-black opacity-80"></div>
      <div id="3" className="h-1/3 w-full bg-black opacity-60"></div>
      <div id="4" className="h-1/3 w-full bg-black opacity-40"></div>
      <div id="5" className="h-1/3 w-full bg-black opacity-20"></div>
    </div>
  );
}
