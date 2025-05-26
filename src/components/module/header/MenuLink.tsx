import { Link } from "@/i18n/navigation";

interface IMenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  closeMenu: () => void;
  className?: string;
}

const MenuLink = ({ menuItem, closeMenu, className = "" }: IMenuLinkProps) => {
  const { title, path } = menuItem;

  return (
    <li className={className}>
      <Link
        href={path}
        onClick={() => closeMenu()}
        className="active:text-blue focus-visible:text-blue laptop:hover:text-blue transition duration-300 ease-in-out"
      >
        {title}
      </Link>
    </li>
  );
};
export default MenuLink;
