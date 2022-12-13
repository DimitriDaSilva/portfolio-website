/* eslint-disable @next/next/no-head-element */

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
