import Image from "next/image";
import Link from "next/link";

function SocialLinks() {
  const socialLinks = [
    {
      name: "facebook",
      iconPath: "/images/icons/social/facebook.svg",
      href: "https://www.facebook.com/",
    },
    {
      name: "twitter",
      iconPath: "/images/icons/social/twitter.svg",
      href: "https://www.twitter.com/",
    },
    {
      name: "instagram",
      iconPath: "/images/icons/social/instagram.svg",
      href: "https://www.instagram.com/",
    },
    {
      name: "linkedin",
      iconPath: "/images/icons/social/linkedin.svg",
      href: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="flex gap-x-[37px] justify-start items-center">
      {socialLinks.map(({ name, iconPath, href }) => (
        <Link key={name} href={href}>
          <Image width={20} height={20} src={iconPath} alt={name} />
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
