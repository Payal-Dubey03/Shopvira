import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatProvider } from "@/lib/context/ChatContext";
import { ChatWidget } from "@/components/chat-widget";
import { TopNavigation } from "@/components/top-navigation";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopVira — Gift Perfectly, Every Time",
  description:
    "India's most loved gifting platform. Discover handpicked gifts from local artisans with same-day delivery, group gifting, and AI recommendations.",
  keywords: "gifts, flowers, cakes, same day delivery, group gifting, India, ShopVira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 antialiased">
        <ChatProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            <TopNavigation />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget currentPage="home" />
            <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
          </ThemeProvider>
        </ChatProvider>
      </body>
    </html>
  );
}
