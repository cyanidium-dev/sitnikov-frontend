import { getTranslations } from "next-intl/server";

import MenuLink from "../header/MenuLink";

const FooterInfo = async () => {
  const t = await getTranslations("footer.information");

  const menuList = [
    { title: t("legalDetails"), path: "#" },
    { title: t("ie"), path: "#" },
    { title: t("offer"), path: "#" },
    { title: t("privacy"), path: "#" },
  ];

  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        Інформація
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

export default FooterInfo;
