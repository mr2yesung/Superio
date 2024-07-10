"use client";

type ButtonLightSecondaryProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

function ButtonLightSecondary({
  type = "button",
  className = "",
  onClick = () => {},
  disabled = false,
  children,
}: ButtonLightSecondaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} w-full cursor-pointer whitespace-nowrap text-primary bg-[rgba(25,103,210,.07)] transition-colors overflow-hidden hover:bg-[rgba(25,103,210,.17)] text-center`}
    >
      {children}
    </button>
  );
}

export default ButtonLightSecondary;
