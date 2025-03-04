import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
