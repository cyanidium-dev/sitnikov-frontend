import { Link } from "@/i18n/navigation";

interface IMenuLinkProps {
  menuItem: {
    title: string;
    path: string;
  };
  onClick: () => void;
  className?: string;
}

const MenuLink = ({ menuItem, onClick, className = "" }: IMenuLinkProps) => {
  const { title, path } = menuItem;

  return (
    <li className={className}>
      <Link
        href={path}
        onClick={onClick}
        className="active:text-blue focus-visible:text-blue laptop:hover:text-blue transition duration-300 ease-in-out"
      >
        {title}
      </Link>
    </li>
  );
};
export default MenuLink;
