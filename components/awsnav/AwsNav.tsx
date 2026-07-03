import { Inter } from "next/font/google";
import { Navbar } from "./Navbar";
import "./awsnav.css";

/* The aws-site header (utility bar + primary nav + mega menus) from the
   rebuilt Sentrize site at E:\aws, mounted on every route. The Inter
   variable is attached to the header itself so the font stays scoped to
   the nav. Theme is pinned to the light look — the toggle and the
   prefers-color-scheme bootstrap were removed on request; the .dark
   overrides in awsnav.css stay dormant unless <html> gets the class. */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function AwsNav() {
  return <Navbar className={inter.variable} />;
}
