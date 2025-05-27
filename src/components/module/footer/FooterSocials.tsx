import FacebookIcon from "@/components/shared/icons";

const FooterSocials = () => {
  return (
    <div>
      <h4 className="mb-4 font-micra uppercase leading-[20px] tracking-[1px]">
        Соц. мережі
      </h4>
      <nav>
        <ul className="flex flex-col gap-3">
          <li className="h-6 w-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterSocials;
