export default function NavItem({ text, link, isSelected }) {
  return (
    <li
      className={`border-b-2 border-transparent hover:border-white  ${
        isSelected ? 'border-white font-bold' : ''
      }`}
    >
      <a className="p-2" href={`#${link}`}>
        {text}
      </a>
    </li>
  );
}
