import React, { useCallback } from "react";
import { Button, Link } from "@/components/React/atoms";
import { calculateTotal, isCartOpen } from "@/store/cartStore";
import { useStore } from "@nanostores/react";
import { v4 as uuidv4 } from "uuid";

interface NavigationProps {
  additionalClasses?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  additionalClasses = "",
}) => {
  const $isCartOpen = useStore(isCartOpen);
  const total = useStore(calculateTotal);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const openCartHandler = useCallback(() => {
    isCartOpen.set(!$isCartOpen);
  }, []);

  return (
    <>
      <nav className={`flex space-x-4 items-center ${additionalClasses}`}>
        {links.map((link) => (
          <Link key={uuidv4()} href={link.href} label={link.label} />
        ))}
      </nav>
      <p>Total: {total}</p>
      <Button onClick={openCartHandler}>Open Cart</Button>
    </>
  );
};
