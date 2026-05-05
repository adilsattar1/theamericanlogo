import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: {
    default: "The American Logo",
    template: "%s | The American Logo",
  },
  description: "Creative design, branding, web, and growth services for businesses.",
  keywords: ["logo design", "web development", "seo", "social media marketing", "branding"],
  path: "/",
});

export const revalidate = 60;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/iconn.png" type="image/x-icon" />
        <link href="/assets/css/m-style.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/newcss.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main className="app-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
