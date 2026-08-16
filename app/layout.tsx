import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERTIX — Juegos interactivos para eventos",
  description: "Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "VERTIX — Juegos interactivos para eventos", description: "Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "VERTIX — Juegos interactivos para eventos", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
