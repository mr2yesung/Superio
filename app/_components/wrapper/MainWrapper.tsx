import Footer from "../footer/Footer";
import Header from "../header/Header";

type MainWrapperProps = {
  children: React.ReactNode;
};

function MainWrapper({ children }: MainWrapperProps) {
  return (
    <>
      <Header />

      <main className="relative">{children}</main>

      <Footer />
    </>
  );
}

export default MainWrapper;
