import Image from "next/image";
import ScrollEffect from "../scroll-effect/ScrollEffect";
import HeroBubble from "./HeroBubble";

function Hero() {
  return (
    <section className="p-0 md:px-[15px] xl:px-55px before:absolute before:bg-[url(/images/backgrounds/small-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:w-full before:h-auto before:bottom-0 before:top-[-60px] before:left-0 before:-z-50 md:before:h-full md:before:bg-[url(/images/backgrounds/large-bg.png)] md:before:top-0 md:before:bottom-auto">
      <div className="div-container">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-[0_0_auto] w-full lg:w-[58%] px-3">
            <ScrollEffect
              className="pb-5 pt-[220px] md:pb-[50px] xl:pt-[270px] xl:pb-[150px]"
              animationClassName="animate-fade-up-500"
            >
              <div className="mb-10">
                <h3 className="m-0 font-medium text-text-primary text-[26px] mb-[6px] md:text-[40px] md:leading-[1.2em] md:mb-5 xl:text-[50px] xl:mb-[25px] xxl:leading-[60px]">
                  Superio - Best Job Board for
                  <br />
                  <span className="text-primary">Software Engineers</span>
                </h3>
                <p className="text-[15px] text-text-secondary leading-[25px] font-normal m-0">
                  Find Jobs, Employment &amp; Career Opportunities
                </p>
              </div>

              <div className="bg-transparent w-full lg:w-fit p-0 mb-[22px] md:min-w-[600px] lg:bg-white lg:px-5 lg:py-5 lg:shadow-[0_7px_18px_#404f680d] lg:border-[1px_solid_#ecedf2] lg:rounded-[10px] xl:min-w-[auto]">
                {/* Job Search Form - reusable? */}
                <form className="bg-transparent lg:bg-white">
                  <div className="flex flex-nowrap flex-col justify-center items-center gap-y-5 lg:flex-row">
                    {/* form elements - reusable? */}
                    <div className="lg:border-[#e6e6e6] lg:border-r lg:rounded-none lg:pl-2.5 flex items-center px-5 bg-white lg:bg-transparent py-[25px] lg:py-[15px] md:px-[30px] w-full lg:w-auto shadow-[0_6px_15px_#404f680d] lg:shadow-none rounded-lg">
                      <Image
                        width={20}
                        height={20}
                        src={"/images/icons/search.svg"}
                        alt="Search"
                      />
                      <input
                        type="text"
                        name="job-title"
                        placeholder="Job title or keywords"
                        className="pl-2 h-5 xl:h-[30px] bg-transparent leading-5 xl:leading-[30px] text-sm xl:text-[15px] text-text-secondary font-normal"
                      />
                    </div>

                    {/* repeat */}
                    <div className="flex items-center px-5 bg-white lg:bg-transparent py-[25px] lg:py-[15px] md:px-[30px] w-full lg:w-auto shadow-[0_6px_15px_#404f680d] lg:shadow-none rounded-lg">
                      <Image
                        width={20}
                        height={20}
                        src={"/images/icons/location.svg"}
                        alt="Search"
                      />
                      <input
                        type="text"
                        name="location"
                        placeholder="City or State"
                        className="pl-2 h-5 xl:h-[30px] bg-transparent leading-5 xl:leading-[30px] text-sm xl:text-[15px] text-text-secondary font-normal"
                      />
                    </div>

                    <button className="w-full lg:w-auto mt-[10px] lg:mt-0 text-center text-[15px] leading-5 rounded-lg px-[35px] py-[15px] xl:py-5 min-w-[150px] cursor-pointer whitespace-nowrap text-white bg-primary transition-colors overflow-hidden hover:bg-primary-hover">
                      Find Jobs
                    </button>
                  </div>
                </form>
              </div>

              <ScrollEffect
                className="text-text-secondary text-[14px] font-normal mt-[90px] lg:mt-0"
                animationClassName="animate-fade-up-1000"
              >
                <span className="lg:text-[15px] text-text-primary block md:inline font-medium md:mr-5">
                  Popular Searches:
                </span>
                Web, IOS, PHP, Android, Software Engineer
              </ScrollEffect>
            </ScrollEffect>
          </div>

          <div className="hidden lg:inline flex-[0_0_auto] w-[42%] px-3">
            <div className="relative pt-[150px] xxl:pl-[90px] -mr-10 xxl:-mr-[170px]">
              <ScrollEffect
                className="relative w-full aspect-[486/589] -z-20"
                animationClassName="animate-fade-in-500"
              >
                <Image
                  fill
                  sizes="100%"
                  src={"/images/backgrounds/hero.png"}
                  alt="hero image"
                />
              </ScrollEffect>

              <HeroBubble
                positionClassName="-left-[100px] top-32 xxl:-left-[30px] xxl:top-40"
                animationClassName="animate-fade-in-1000"
              >
                <BubbleContent
                  iconBgClassName="bg-[rgba(249,171,0,.15)]"
                  iconSrc="/images/icons/mail.svg"
                  iconAlt="mail"
                >
                  Send messages to
                  <br />
                  Employers
                </BubbleContent>
              </HeroBubble>

              <HeroBubble
                positionClassName="top-[490px] right-4 xxl:-right-[50px]"
                animationClassName="animate-fade-in-1500"
              >
                <BubbleContent
                  iconBgClassName="bg-[rgba(217,48,37,.2)]"
                  iconSrc="/images/icons/bag.svg"
                  iconAlt="job"
                >
                  Apply for Jobs
                  <br />
                  <span className="text-[15px] text-text-secondary">
                    Begin your journey today
                  </span>
                </BubbleContent>
              </HeroBubble>

              <HeroBubble
                positionClassName="-left-48 bottom-10 xxl:left-[30px] xxl:bottom-[85px]"
                animationClassName="animate-fade-in-2000"
              >
                <BubbleContent
                  iconBgClassName="bg-[rgba(116,121,192,0.2)]"
                  iconSrc="/images/icons/file.svg"
                  iconAlt="resume"
                >
                  Upload your CV
                  <br />
                  <span className="text-[15px] text-text-secondary">
                    It only takes a few seconds
                  </span>
                </BubbleContent>
              </HeroBubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

type BubbleContentProps = {
  iconBgClassName: string;
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
};

function BubbleContent({
  iconBgClassName,
  iconSrc,
  iconAlt,
  children,
}: BubbleContentProps) {
  return (
    <>
      <div
        className={`${iconBgClassName} flex items-center justify-center h-[50px] w-[50px] rounded-[10px]`}
      >
        <Image width={30} height={30} src={iconSrc} alt={iconAlt} />
      </div>
      <p className="text-base leading-[22px] text-text-primary font-medium">
        {children}
      </p>
    </>
  );
}
