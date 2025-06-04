"use client";

import { useTranslations } from "next-intl";

import MenuLink from "./MenuLink";

interface INavMenuProps {
  closeMenu: () => void;
}

const NavMenu = ({ closeMenu }: INavMenuProps) => {
  const t = useTranslations("header.menu");

  const menuList = [
    { title: t("home"), path: "/" },
    { title: t("services"), path: "/services" },
    { title: t("events"), path: "/events" },
    { title: t("experience"), path: "/experience" },
    { title: t("publications"), path: "/publications" },
    { title: t("contacts"), path: "/contacts" },
    { title: t("education"), path: "/education" },
    { title: t("announcements"), path: "/announcements" },
  ];

  return (
    <nav className="relative flex w-full max-w-[318px] items-center">
      <ul className="flex flex-col gap-7">
        {menuList.map((menuItem, idx) => (
          <MenuLink key={idx} menuItem={menuItem} onClick={closeMenu} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
