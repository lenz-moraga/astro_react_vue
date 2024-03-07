import React from "react";

interface LinkProps {
  href: string;
  label: string;
  additionalClasses?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  additionalClasses = "",
}) => (
  <a
    href={href}
    className={`text-blue-600 hover:text-blue-800 ${additionalClasses}`}
  >
    {label}
  </a>
);
