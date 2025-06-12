"use client";

import { ElementType, PropsWithChildren } from "react";

import { fadeInAnimation } from "@/helpers/animation";
import { Variants, motion } from "framer-motion";

interface AnimatedWrapperProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
  animation?: Variants;
  viewport?: { once?: boolean; amount?: number };
}

const AnimatedWrapper = ({
  as: Component = motion.div,
  className = "",
  animation = fadeInAnimation({}),
  viewport = { once: true },
  children,
}: AnimatedWrapperProps) => {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={animation}
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimatedWrapper;
