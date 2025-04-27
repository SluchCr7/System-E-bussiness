import localFont from "next/font/local";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200", "300", "400", "500", "600"]
  , style: ["normal", "italic"]
})

export const metadata = {
  title: "System Admin",
  description: "System Admin Dashboard - Next.js", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
