import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { createActorContext } from "@xstate/react";
import cartMachine from "@/xstate/cartMachine";
import { CartProviders } from "@/xstate/provider";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apple Accessories  - Apple(台灣)",
  description: "Apple accessories store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/apple_logo_icon.ico"
        type="image/x-icon"
        sizes="any"
      />
      <body className={roboto.className}>
        <CartProviders>
          <Navbar />
          {children}
        </CartProviders>
        <Footer />
      </body>
    </html>
  );
}
