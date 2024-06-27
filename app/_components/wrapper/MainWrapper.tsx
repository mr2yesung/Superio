import Header from "../header/Header";

type MainWrapperProps = {
  children: React.ReactNode;
};

function MainWrapper({ children }: MainWrapperProps) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}

export default MainWrapper;
