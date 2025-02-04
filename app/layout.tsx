import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "./_components/wrapper/SessionProviderWrapper";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const metadata: Metadata = {
  title: {
    template: "%s - Superio",
    default: "Superio - Find your jobs easily",
  },
  description: "Superio - Find your jobs easily",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-white text-[#363636]`}>
        <SessionProviderWrapper>
          <div className="relative mx-auto my-0 w-full min-w-[300px] overflow-hidden">
            {children}
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };

/**
 * TODO: Header right section modify when user logged in (HeaderMonitorRight component)
 * TODO: Header navbar array modify if needed
 * TODO: add toast to Authform and UserTypeForm components
 * TODO: manage route in dashboard child pages
 * TODO: fix rerendering of mobile header sidebar on route change (MobileSidebarController component)
 * TODO: fix Logout component
 * TODO: add dropdown navbar to header and dashboard wrapper
 */
