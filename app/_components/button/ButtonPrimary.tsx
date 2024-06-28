"use client";

type ButtonPrimaryProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

function ButtonPrimary({
  type = "button",
  className = "",
  onClick = () => {},
  children,
}: ButtonPrimaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} w-full cursor-pointer whitespace-nowrap text-white bg-primary transition-colors overflow-hidden hover:bg-primary-hover text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
