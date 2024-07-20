import type { Metadata } from "next";
import { Inter,Open_Sans,Lato,Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const OpenSans=Open_Sans({subsets: ['latin'],variable:'--OpenSans-font'},)
const raleway=Raleway({subsets:['latin'],variable:'--raleway-font'})
const lato=Lato({subsets:['latin'],weight:'400',variable:'--lato-font'})

export const metadata: Metadata = {
  title: "Chrysansdecor",
  description: "Chrysans Décor excels in interior construction designs, providing consultation, specialized services and products in tile installations, interior and exterior painting, P.O.P ceilings, lighting solutions, space partitioning, Turkish security doors, CCTV and digital security. Our focus on excellence and innovation ensures top-notch results that exceeds our clients’ expectations, giving your space that topmost luxurious and sophisticated touch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSans.className} ${OpenSans.variable} ${lato.variable} ${raleway.variable}`}>
        <div className="min-h-screen w-full flex flex-col justify-between scroll-smooth">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
