import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/nav/Nav";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import TOsterProvider from "./components/providers/TOsterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "@/pages/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <TOsterProvider />
          <RegisterModal />
          <LoginModal />
          <Nav currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
