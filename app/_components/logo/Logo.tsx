import Image from "next/image";

type LogoProps = {
  className?: string;
};

function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      width={154}
      height={50}
      className={className}
      src="/images/logo.svg"
      alt="Superio Logo"
      priority
    />
  );
}

export default Logo;
