import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded" | "circle" | "square";
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  size = "medium",
  shape = "square",
}) => {
  const sizeStyle = {
    small: "size-24",
    medium: "size-48",
    large: "size-96",
  };

  const shapeStyle = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    square: "",
  };

  return (
    <img
      className={`${sizeStyle[size]} ${shapeStyle[shape]}`}
      src={src}
      alt={alt}
    />
  );
};
