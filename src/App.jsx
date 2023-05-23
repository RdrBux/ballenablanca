import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Servicios from './components/Servicios';
import Trabajos from './components/Trabajos';
import Contacto from './components/Contacto';

export default function App() {
  const app = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: { duration: 1.3, ease: 'power3.inOut' },
      });

      tl.to('.hero', {
        height: '500px',
        backgroundSize: '100%',
        duration: 1.5,
        ease: 'power4.inOut',
      })
        .to(
          '.hero',
          {
            height: '250px',
            borderRadius: '32px',
            y: '0',
          },
          1.5
        )
        .from(
          '.hero-text',
          {
            y: '75vh',
          },
          1.5
        )
        .from(
          '.hide',
          {
            opacity: '0',
          },
          1.5
        )
        .to(
          '.hero-text',
          {
            scale: 10,
            scrollTrigger: {
              scrub: 1,
              start: -200,
            },
          },
          3
        );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="bg-white text-zinc-900">
      <Nav />
      <Hero />
      <Servicios />
      <Trabajos />
      <Contacto />
    </div>
  );
}
