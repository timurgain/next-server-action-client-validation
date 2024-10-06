import type { Metadata } from "next";
import "@/app/styles/globals.scss";
import styles from "./layout.module.scss";

import { Comfortaa } from "next/font/google";
import { Header } from "@/widgets/Header";
import { Providers } from "../providers/Providers";

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Server action, client validation",
  description: "Server action, client validation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <main className={styles.main}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
