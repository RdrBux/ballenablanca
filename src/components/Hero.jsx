import HeroScrollButton from './HeroScrollButton';

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden bg-zinc-900 text-white">
      <div className="container relative grid h-full place-content-center">
        <div className="hero | absolute bottom-1/2 left-1/2 h-0 w-10/12 -translate-x-1/2 translate-y-1/2 bg-[url('./assets/bg-hero.jpg')] bg-[size:150%] bg-center bg-no-repeat"></div>
        <div className="hero-text | relative z-10 text-center text-5xl font-semibold shadow-2xl lg:text-8xl">
          LLEVAMOS TU
          <br />
          MÚSICA A UN
          <br />
          <span className="text-yellow-200">NUEVO NIVEL</span>
        </div>
        <HeroScrollButton />
      </div>
    </section>
  );
}
