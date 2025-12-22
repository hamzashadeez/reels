import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Reels",
  description: "Project by Hamza Shadeez to mimic Youtube Shorts & IG reels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  antialiased`}
      >
        <div className="h-screen bg-gray-100">
            <Header />
          <main className="h-[calc(100vh-70px)] overflow-auto snap-y snap-mandatory max-w-3xl mx-auto my-5">
            {children}

          </main>

        </div>
      </body>
    </html>
  );
}
