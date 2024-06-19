import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Princess Hotel Panamá",
  description: "Menú del Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} mx-auto h-screen max-w-sm`}>
        {children}
      </body>
    </html>
  );
}
