"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charging current",
  description:
    "A simple app to calculate charging current for high voltage AC transmission lines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          onClick={(e) => {
            e.currentTarget.classList.add("md:hidden");
          }}
          className="w-screen h-screen z-50 absolute top-0 hidden md:block bg-orange-200 cursor-pointer"
        >
          <div className="flex h-screen flex-col justify-center">
            <h1 className="text-4xl font-bold text-center drop-shadow">{`This site doesn't build for large screen yet`}</h1>
            <p className="text-center">click to disable this warning</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
