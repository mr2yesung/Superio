import Header from "../header/Header";

type MainWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

function MainWrapper({ className = "", children }: MainWrapperProps) {
  return (
    <>
      <Header />

      <main className={`relative ${className}`}>{children}</main>
    </>
  );
}

export default MainWrapper;
