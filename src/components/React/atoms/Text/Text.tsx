import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary";
  weight?: "normal" | "bold";
}

export const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  color = "primary",
  weight = "normal",
}) => {
  const sizeStyle = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  const colorStyle = {
    primary: "text-gray-800",
    secondary: "text-gray-600",
    default: "text-black",
  };
  const weightStyle = weight === "bold" ? "font-bold" : "font-normal";

  return (
    <p
      className={`${sizeStyle[size]} ${colorStyle[color]} ${weightStyle} mb-2 h-[75px] line-clamp-3`}
    >
      {children}
    </p>
  );
};
