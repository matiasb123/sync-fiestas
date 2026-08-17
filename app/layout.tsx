import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNC — Experiencias interactivas para eventos",
  description: "Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
