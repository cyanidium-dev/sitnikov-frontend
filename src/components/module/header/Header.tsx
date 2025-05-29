"use client";

import { useState } from "react";
import Image from "next/image";

import { siteConfig } from "@/constants/siteConfig";
import { headerPhoneRegex } from "@/regex/regex";

import Backdrop from "@/components/shared/backdrop/Backdrop";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink ";
import LocaleSwitcher from "@/components/shared/localSwitcher/LocalSwitcher";
import Logo from "@/components/shared/logo/Logo";

import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  const openMenu = () => setIsNavMenuOpened(true);
  const closeMenu = () => setIsNavMenuOpened(false);

  return (
    <header className="fixed z-[100] w-dvw bg-black bg-opacity-40 py-6 backdrop-blur-lg will-change-transform supports-[backdrop-blur]:before:backdrop-blur-lg xl:py-[30.5px]">
      <div className="container flex max-w-[1280px] justify-between">
        <Logo
          className="h-auto w-6 xl:w-10"
          variant="light"
          textStyles="text-light"
        />

        <div className="flex items-center gap-x-6 xl:gap-x-10">
          <LocaleSwitcher />

          <ButtonOrLink
            variant="transparent"
            className="hidden h-10 w-[202px] xl:flex"
            href={`tel:+${siteConfig.phone.replace(/\D/g, "")}`}
            external
          >
            <Image
              className="mr-[14px]"
              src="/images/icons/phone.svg"
              alt="phone icon"
              width={20}
              height={20}
            />
            {siteConfig.phone.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
          </ButtonOrLink>

          <BurgerButton openMenu={openMenu} />

          <BurgerMenu isOpen={isNavMenuOpened} closeMenu={closeMenu} />
        </div>
      </div>
      <Backdrop isVisible={isNavMenuOpened} onClick={closeMenu} />
    </header>
  );
};

export default Header;
