import React from "react";
import { PriceTag, Text, Title } from "../../atoms";

interface ProductDescriptionProps {
  name: string;
  description: string;
  price: number;
  titleSize?: "small" | "medium" | "large";
  textColor?: "default" | "primary" | "secondary";
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  name,
  description,
  price,
  titleSize = "medium",
  textColor = "default",
}) => (
  <>
    <Title size={titleSize} color={textColor}>
      {name}
    </Title>
    <Text color={textColor}>{description}</Text>
    <PriceTag price={price} color={textColor} />
  </>
);
