import Header from "../header/Header";

type MainWrapperProps = {
  children: React.ReactNode;
};

function MainWrapper({ children }: MainWrapperProps) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

export default MainWrapper;
