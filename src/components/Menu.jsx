import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import HamburgerItem from './HamburgerItem';

export default function Menu({ closeMenu }) {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let q = gsap.utils.selector('.menu');
      let tl = gsap.timeline();

      tl.to('.menu', {
        width: '100%',
        duration: 0.3,
      }).to(q('.item'), {
        opacity: 1,
        y: 10,
        stagger: {
          amount: 0.2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="menu | fixed bottom-0 right-0 top-0 z-30 w-0 bg-zinc-900 text-white">
      <div className="flex h-full items-center justify-center">
        <ul className="flex flex-col gap-8 text-3xl font-semibold">
          <HamburgerItem nombre="Inicio" link="" closeMenu={closeMenu} />
          <HamburgerItem
            nombre="Servicios"
            link="servicios"
            closeMenu={closeMenu}
          />
          <HamburgerItem
            nombre="Trabajos realizados"
            link="trabajos"
            closeMenu={closeMenu}
          />
          <HamburgerItem
            nombre="Contacto"
            link="contacto"
            closeMenu={closeMenu}
          />
        </ul>
      </div>
    </div>
  );
}
