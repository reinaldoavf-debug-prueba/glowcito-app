import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Glowcito Beauty Studio",
  description: "Agenda y reservas de Glowcito Beauty Studio by Jenaid Araujo.",
  applicationName: "Glowcito",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8eef2" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
