import React, { useCallback } from "react";

interface ButtonProps {
  additionalClasses?: string;
  children: React.ReactNode;
  color?: "primary" | "secondary";
  id?: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  size = "medium",
  additionalClasses = "",
  id,
}) => {
  const baseStyle = "font-bold py-2 px-4 rounded";
  const colorStyle =
    color === "primary"
      ? "bg-blue-500 hover:bg-blue-700"
      : "bg-gray-500 hover:bg-gray-700";

  const sizeStyle = {
    small: "text-xs",
    medium: "text-base",
    large: "text-lg",
  };

  const handleOnClick = useCallback((evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onClick();
  }, []);

  return (
    <button
      id={id}
      onClick={handleOnClick}
      className={`text-white ${baseStyle} ${colorStyle} ${sizeStyle[size]} ${additionalClasses}`}
    >
      {children}
    </button>
  );
};
