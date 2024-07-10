"use client";

type ButtonSecondaryProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

function ButtonSecondary({
  type = "button",
  className = "",
  onClick = () => {},
  disabled = false,
  children,
}: ButtonSecondaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} w-full cursor-pointer whitespace-nowrap text-primary bg-[#e2eaf8] transition-colors overflow-hidden hover:bg-primary-hover hover:text-white text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
