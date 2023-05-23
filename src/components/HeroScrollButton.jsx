export default function HeroScrollButton() {
  return (
    <div className="hide | absolute bottom-0 right-1/2 flex translate-x-1/2 flex-col items-center gap-2">
      <button className="text-sm text-yellow-200">SCROLL DOWN</button>
      <div className="h-24 w-[1px] bg-yellow-200 lg:h-10"></div>
    </div>
  );
}
