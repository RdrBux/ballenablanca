import NavItem from './NavItem';

export default function NavList({
  menuOpen,
  openMenu,
  closeMenu,
  menuAnimation,
}) {
  return (
    <>
      <ul className="hidden gap-8 lg:flex">
        <NavItem text="Inicio" link="" isSelected={false} />
        <NavItem text="Servicios" link="servicios" isSelected={false} />
        <NavItem
          text="Trabajos realizados"
          link="trabajos"
          isSelected={false}
        />
        <NavItem text="Contacto" link="contacto" isSelected={false} />
      </ul>
      <button
        onClick={menuOpen ? closeMenu : openMenu}
        className="p-2 lg:hidden"
      >
        <div className={`btn ${menuAnimation ? 'active' : 'not-active'}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
}
