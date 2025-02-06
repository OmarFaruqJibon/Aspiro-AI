import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI CareerForge",
  description: "AI CareerForge is an AI-powered career coaching platform designed to help job seekers streamline their job application process.",
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
            <main className="min-h-screen pt-40">{children}</main>

            {/* FOOTER SECTION */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center">
                <p className="">Developed by ME</p>
              </div>
            </footer>
          </ThemeProvider>





        </body>
      </html>
    </ClerkProvider>
  );
}
