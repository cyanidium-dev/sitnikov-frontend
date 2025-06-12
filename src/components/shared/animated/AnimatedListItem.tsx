"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

interface AnimatedListItemProps {
  children: ReactNode;
  className: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const AnimatedListItem = ({
  children,
  className = "",
}: AnimatedListItemProps) => {
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  );
};

export default AnimatedListItem;
