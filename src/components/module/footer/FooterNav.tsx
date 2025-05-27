import { getTranslations } from "next-intl/server";

import MenuLink from "../header/MenuLink";

const FooterNav = async () => {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("footer.navigation");

  const menuList = [
    { title: tNav("home"), path: "/" },
    { title: tNav("experience"), path: "/experience" },
    { title: tNav("events"), path: "/events" },
    { title: tNav("services"), path: "/services" },
    { title: tNav("publications"), path: "/publications" },
    { title: tNav("contacts"), path: "/contacts" },
  ];

  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        {t("section.nav")}
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
