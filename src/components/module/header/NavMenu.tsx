"use client";

import { useTranslations } from "next-intl";

import MenuLink from "./MenuLink";

interface INavMenuProps {
  closeMenu: () => void;
}

const NavMenu = ({ closeMenu }: INavMenuProps) => {
  const t = useTranslations();

  const menuList = [
    { title: t("header.menu.home"), path: "/" },
    { title: t("header.menu.services"), path: "/services" },
    { title: t("header.menu.events"), path: "/events" },
    { title: t("header.menu.experience"), path: "/experience" },
    { title: t("header.menu.publications"), path: "/publications" },
    { title: t("header.menu.contacts"), path: "/contacts" },
    { title: t("header.menu.school"), path: "/school" },
    { title: t("header.menu.announcements"), path: "/announcements" },
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
