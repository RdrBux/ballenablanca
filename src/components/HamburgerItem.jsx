export default function HamburgerItem({ nombre, link, closeMenu }) {
  return (
    <li onClick={closeMenu} className="item uppercase opacity-0">
      <a href={`#${link}`}>{nombre}</a>
    </li>
  );
}
