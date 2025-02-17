import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Aspiro AI",
  description: "Aspiro AI - An AI-powered career coaching platform designed to help job seekers streamline their job application process.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} `}
        >

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* MAIN SECTION */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* FOOTER SECTION */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center">
                <Footer />

              </div>
            </footer>
          </ThemeProvider>





        </body>
      </html>
    </ClerkProvider>
  );
}
