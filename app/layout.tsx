import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/layout/Layout";


export const metadata: Metadata = {
  title: "Abhishek N | Software Developer",
  description:
    "Portfolio of Abhishek N, Software Developer specializing in modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}