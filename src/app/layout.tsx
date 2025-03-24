import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW Donalds",
  description: "Bora finalizar esse projeto lindo!",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <CartProvider>{children}</CartProvider>
        <Toaster />
      </body>
    </html>
  );
}

//commit o unico jeito de ter um server component dentro de um client component é passando ele como props (children)