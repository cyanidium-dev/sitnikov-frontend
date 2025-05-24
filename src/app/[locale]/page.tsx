import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <main className="">
        <div>
          <h1>{t("title")}</h1>
          <Link href="/services">{t("services")}</Link>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
