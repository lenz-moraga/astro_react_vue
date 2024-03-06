import React, { useCallback } from "react";
import { Button } from "../../atoms";
import { isCartOpen } from "@/store/cartStore";
import { useStore } from "@nanostores/react";

export const Navigation = () => {
  const $isCartOpen = useStore(isCartOpen);

  const openCartHandler = useCallback(() => {
    isCartOpen.set(!$isCartOpen);
  }, []);

  return <Button onClick={openCartHandler}>Open Cart</Button>;
};
