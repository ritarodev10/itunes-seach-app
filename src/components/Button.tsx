import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonVariant = "searchOne" | "searchTwo" | "genre" | "loadMore";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "searchOne",
  ...props
}) => {
  const variants = {
    searchOne:
      "h-10 sm:h-12 w-[280px] sm:w-full bg-white bg-opacity-20 text-white text-sm rounded-[20px] sm:rounded-full",
    searchTwo:
      "h-10 sm:h-12 w-[280px] sm:w-full bg-gradient-to-r from-[#712bda] to-[#a45deb] text-white text-sm rounded-[20px] sm:rounded-full",
    genre:
      "bg-[#10b981] text-white text-[10px] rounded-[10px] sm:rounded-full px-3 py-1",
    loadMore:
      " px-7 py-2 bg-[#e2e8f0] text-[#64748b] text-sm rounded-[17px] sm:rounded-full mb-10",
  };

  const classes = `${variants[variant] || variants.searchOne}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
