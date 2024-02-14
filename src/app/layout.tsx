import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Provider } from "@/components/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teleprompter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
