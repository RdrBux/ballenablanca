import { useState } from 'react';
import NavList from './NavList';
import Menu from './Menu';
import { gsap } from 'gsap';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  function openMenu() {
    setMenuOpen(true);
    setMenuAnimation(true);
  }
  function closeMenu() {
    let tl = gsap.timeline();
    let q = gsap.utils.selector('.menu');
    tl.to(q('.item'), {
      onStart() {
        setMenuAnimation(false);
      },
      opacity: 0,
      duration: 0.1,
    }).to('.menu', {
      width: '0px',
      duration: 0.3,
      ease: 'power3.inOut',
      onComplete() {
        setMenuOpen(false);
      },
    });
  }

  return (
    <>
      {menuOpen && <Menu closeMenu={closeMenu} />}
      <nav>
        <div className="hide | fixed left-0 right-0 top-0 z-40 bg-zinc-900/75 py-4 text-white">
          <div className="container mx-auto flex w-screen items-center justify-between">
            <a href="#">
              <div className="text-xl font-semibold lg:text-2xl">
                Estudio Ballena Blanca
              </div>
              <div className="text-sm uppercase text-yellow-100 lg:text-base">
                Mezclas y masterización online
              </div>
            </a>
            <NavList
              menuOpen={menuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
              menuAnimation={menuAnimation}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
