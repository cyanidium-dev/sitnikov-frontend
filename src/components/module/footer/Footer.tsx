import Logo from "@/components/shared/logo/Logo";

import FooterContacts from "./FooterContacts";
import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="bg-dark pb-10 pl-8 pt-16 text-light">
      <div className="container">
        <div className="flex flex-col gap-10">
          <Logo className="mb-9 h-auto w-6 xl:w-10" />
          <FooterNav />
          <FooterInfo />
          <FooterContacts />
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
