import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900']
})
const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Python Coaching | Learn to Code with Confidence in the AI Age',
  description: 'Discover why learning Python is more valuable than ever. Join our immersive, human-centered coaching program designed to help beginners thrive even in the era of AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
