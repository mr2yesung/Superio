import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const metadata: Metadata = {
  title: {
    template: "%s - Superio",
    default: "Superio",
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
      <body className={`${jost.className} bg-white`}>
        <div className="relative mx-auto my-0 w-full min-w-[300px] overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
