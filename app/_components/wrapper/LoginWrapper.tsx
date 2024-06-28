import Image from "next/image";
import Link from "next/link";

type LoginWrapperProps = {
  children: React.ReactNode;
};

function LoginWrapper({ children }: LoginWrapperProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-[120px] pb-[50px] overflow-auto">
      <div className="h-full w-[42%] hidden absolute left-0 top-0 lg:block">
        <Image
          fill
          src={"/images/backgrounds/login.jpg"}
          sizes="42vw"
          style={{ objectFit: "cover" }}
          alt="Login"
          priority
        />
      </div>

      <div className="w-full ml-0 lg:ml-[42%] lg:w-[58%] flex justify-center items-center">
        <div className="my-0 mx-auto w-full max-w-[610px] px-[30px]">
          <div className="flex flex-col justify-center">
            {children}

            <Link
              href={"/"}
              className="text-sm leading-5 text-text-secondary text-center mt-4 font-normal w-fit flex justify-center items-center"
            >
              <Image
                src={"/images/icons/chevron-left.svg"}
                width={20}
                height={20}
                alt="Back to Home"
              />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWrapper;
