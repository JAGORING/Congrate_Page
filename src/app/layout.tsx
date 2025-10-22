import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: "./fonts/pretendard/PretendardVariable.woff2",
      weight: "100 400 900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "쭌댕이 완전 축하해👻",
  description: "우리 준댕이의 취업을 축하합니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        {children}
      </body>
    </html>
  );
}
