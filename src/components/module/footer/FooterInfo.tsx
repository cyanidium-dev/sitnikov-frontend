import { getTranslations } from "next-intl/server";

import MenuLink from "../header/MenuLink";

const FooterInfo = async () => {
  const t = await getTranslations("footer");
  const tInfo = await getTranslations("footer.information");

  const menuList = [
    { title: tInfo("legalDetails"), path: "#" },
    { title: tInfo("ie"), path: "#" },
    { title: tInfo("offer"), path: "#" },
    { title: tInfo("privacy"), path: "#" },
  ];

  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        {t("section.info")}
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
