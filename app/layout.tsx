import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Patil | Power BI Developer & Data Analyst",
  description:
    "Explore Ashish Patil's Power BI dashboards, SQL analytics, DAX reporting, MIS solutions, and business intelligence projects.",
  keywords: [
    "Ashish Patil",
    "Power BI Developer",
    "Data Analyst",
    "Business Intelligence",
    "DAX",
    "SQL",
    "Power Query",
    "Excel",
    "Python",
    "MIS Reporting",
    "Indore",
    "Portfolio",
  ],
  authors: [{ name: "Ashish Patil" }],
  creator: "Ashish Patil",
  metadataBase: new URL("https://ashish-patil-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashish-patil-portfolio.vercel.app",
    title: "Ashish Patil | Power BI Developer & Data Analyst",
    description:
      "Explore Ashish Patil's Power BI dashboards, SQL analytics, DAX reporting, MIS solutions, and business intelligence projects.",
    siteName: "Ashish Patil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Patil | Power BI Developer & Data Analyst",
    description:
      "Explore Ashish Patil's Power BI dashboards, SQL analytics, DAX reporting, MIS solutions, and business intelligence projects.",
    creator: "@AshishPatil",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-textPrimary bg-white selection:bg-accent/20 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
