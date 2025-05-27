import { siteConfig } from "@/constants/siteConfig";

const FooterContacts = () => {
  const { email, phone } = siteConfig;

  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        Контакти
      </h4>
      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              {phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterContacts;
