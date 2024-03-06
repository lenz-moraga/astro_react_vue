import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary";
}

export const Title: React.FC<TitleProps> = ({
  children,
  size = "medium",
  color = "default",
}) => {
  const sizeStyle = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-3xl",
  };

  const colorStyle = {
    default: "text-black",
    primary: "text-blue-600",
    secondary: "text-red-600",
  };

  return (
    <div
      className={`${sizeStyle[size]} ${colorStyle[color]} font-bold mb-2`}
    >
      {children}
    </div>
  );
};
