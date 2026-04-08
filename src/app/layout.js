import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const barlow = Barlow({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "Rank #1 on Google — Free SEO Masterclass | IDS",
  description: "A 2-hour live masterclass where you'll learn Advanced SEO from scratch. Certification included.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
