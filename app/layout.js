import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voichita's Portofolio",
  description: "Voichita's Portofolio for projects and CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
