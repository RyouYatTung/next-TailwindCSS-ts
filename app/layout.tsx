import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav/Nav";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Modal isOpen />
          <Nav />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
