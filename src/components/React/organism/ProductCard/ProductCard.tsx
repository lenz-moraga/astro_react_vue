import React, { useCallback } from "react";
import { Button, Image } from "@/components/React/atoms";
import { ProductDescription } from "@/components/React/molecules";

import { addCartItem, type Product } from "@/store/cartStore.ts";

interface ProductCardProps {
  product: Product;
  cardBgColor?: "white" | "gray" | "blue";
  textColor?: "default" | "primary" | "secondary";
  imageSize?: "small" | "medium" | "large";
  titleSize?: "small" | "medium" | "large";
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cardBgColor = "white",
  textColor = "default",
  imageSize = "medium",
  titleSize = "medium",
}) => {
  const BgColor = {
    gray: "bg-gray-100",
    blue: "bg-blue-100",
    white: "bg-white",
  };
  const handleAddToCart = useCallback(() => {
    addCartItem(product);
  }, []);

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 ${BgColor[cardBgColor]} flex flex-col justify-between`}
    >
      <Image src={product.imageSrc} alt={product.name} size={imageSize} />
      <div className="px-6 py-4">
        <ProductDescription
          name={product.name}
          description={product.description}
          price={product.price}
          titleSize={titleSize}
          textColor={textColor}
        />
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};
