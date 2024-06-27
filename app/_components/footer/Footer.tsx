import SocialLinks from "../social-links/SocialLinks";

function Footer() {
  return (
    <div className="w-full py-9 border-t-[#ecedf2] border-t-[1px] min-h-[100px]">
      <div className="div-container">
        <div className="flex justify-between items-center flex-col gap-y-5 md:flex-row">
          <div className="text-sm font-normal text-text-secondary leading-6 order-last md:order-first">
            © {new Date().getFullYear()} Superio. All rights reserved.
          </div>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
