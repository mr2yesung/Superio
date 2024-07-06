import { Metadata } from "next";
import LoginWrapper from "../_components/wrapper/LoginWrapper";
import LoginForm from "./LoginForm";
import SocialLogin from "../_components/auth/SocialLogin";
import Link from "next/link";

const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

function Login() {
  return (
    <LoginWrapper>
      <h3 className="text-2xl leading-[33px] font-medium text-text-primary mb-8">
        Login to Superio
      </h3>

      <LoginForm />

      <div className="pt-3">
        <div className="text-sm leading-[19px] text-text-secondary text-center mt-[5px] font-normal">
          Don&apos;t have an account?{" "}
          <Link
            href={"/signup"}
            className="font-medium cursor-pointer transition-colors duration-300 hover:text-primary"
          >
            Signup
          </Link>
        </div>
      </div>

      <div className="relative text-[15px] text-center leading-5 text-text-secondary mt-[10px] mb-[25px] before:absolute before:left-0 before:top-[10px] before:h-[1px] before:w-full before:bg-[#ecedf2] before:rounded-lg before:-z-10 after:-z-10 after:absolute after:left-1/2 after:top-0 after:h-5 after:w-[60px] after:bg-white after:-ml-[30px]">
        or
      </div>

      <SocialLogin />
    </LoginWrapper>
  );
}

export default Login;
export { metadata };
