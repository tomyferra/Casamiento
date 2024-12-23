import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiore & Tomi",
  description: "15 de Marzo 2025",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
