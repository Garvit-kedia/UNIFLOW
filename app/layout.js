
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/header";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

export const metadata = {
  title: "UniFLow",
  description: "Unified Oppurtunity Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white">
          <ThemeProvider   attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
            <ClerkProvider   appearance={{
     theme: dark,
   }}
>
            <ConvexClientProvider>
            {/* {header} */}
            <Header/>
            <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
                </div>
                 <div className="relative z-10">{children}</div>
                    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                    Unified Oppurtunity Platform
                </div>
                </footer>
                <Toaster  richColors/>


            </main>
            </ConvexClientProvider>
            </ClerkProvider>

          </ThemeProvider>
      

      </body>
    </html>
  );
}
