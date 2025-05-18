import localFont from "next/font/local";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";
import { AuthContextProvider } from "./Context/AuthContext";
import { EmployContextProvider } from "./Context/EmployContext";
import { DashboardContextProvider } from "./Context/DashboardContext";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200", "300", "400"]
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
        <AuthContextProvider>
          <EmployContextProvider>
            <DashboardContextProvider>
              {children}
            </DashboardContextProvider>
          </EmployContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
