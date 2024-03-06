import React from "react";

interface PriceTagProps {
  price: number;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary";
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  size = "medium",
  color = "default",
}) => {
  const sizeStyle = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const colorStyle = {
    default: "text-black",
    primary: "text-blue-600",
    secondary: "text-red-600",
  };

  return (
    <span
      className={`${sizeStyle[size]} ${colorStyle[color]} inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold mr-2 mb-2`}
    >
      ${price.toFixed(2)}
    </span>
  );
};
