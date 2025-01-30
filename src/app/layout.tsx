import type { Metadata } from "next";
import Container from "@/components/Container";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizzzy",
  description: "Test your knowledge with Quizzzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
