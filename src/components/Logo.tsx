import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  theme?: "light" | "dark";
  layout?: "horizontal" | "vertical" | "symbol";
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
  theme = "light",
  layout = "horizontal"
}: LogoProps) {
  const logoUrl = "https://res.cloudinary.com/deic5ha4h/image/upload/v1782488497/Only_Green_1-removebg-preview_lxuh9y.png";

  const sizeClasses = {
    sm: "h-8 sm:h-10 w-auto",
    md: "h-12 sm:h-14 w-auto",
    lg: "h-20 sm:h-24 w-auto",
    xl: "h-28 sm:h-32 w-auto"
  };

  const currentSizeClass = sizeClasses[size];

  // If theme is dark, we apply a high-end flat white silhouette filter (brightness-0 invert)
  // to ensure absolute premium readability on dark backgrounds like the footer.
  const filterClass = theme === "dark" ? "brightness-0 invert" : "";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoUrl}
        alt="Only Green"
        referrerPolicy="no-referrer"
        className={`${currentSizeClass} ${filterClass} object-contain transition-transform duration-300 hover:scale-[1.02]`}
      />
    </div>
  );
}


