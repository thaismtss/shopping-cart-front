import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./Components/Header";
import "./globals.css";
import { Providers } from "./providers/providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "FakeStore",
  description: "FakeStor - Loja fictícia de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
