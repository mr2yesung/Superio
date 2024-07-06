"use client";

type ButtonPrimaryProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

function ButtonPrimary({
  type = "button",
  className = "",
  onClick = () => {},
  disabled = false,
  children,
}: ButtonPrimaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} w-full cursor-pointer whitespace-nowrap text-white bg-primary transition-colors overflow-hidden hover:bg-primary-hover text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
