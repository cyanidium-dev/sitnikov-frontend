import { getTranslations } from "next-intl/server";

import MenuLink from "../header/MenuLink";

const FooterNav = async () => {
  const t = await getTranslations("footer.navigation");

  const menuList = [
    { title: t("home"), path: "/" },
    { title: t("experience"), path: "/experience" },
    { title: t("events"), path: "/events" },
    { title: t("services"), path: "/services" },
    { title: t("publications"), path: "/publications" },
    { title: t("contacts"), path: "/contacts" },
  ];

  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        Навігація
      </h4>
      <nav>
        <ul className="flex flex-col gap-3">
          {menuList.map((menuItem, idx) => (
            <MenuLink key={idx} menuItem={menuItem} className="" />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
