/* eslint-disable @next/next/no-head-element */

import Navbar from "../components/navbar/Navbar";

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
    </html>
  );
}
