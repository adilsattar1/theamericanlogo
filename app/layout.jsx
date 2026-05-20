import Script from "next/script";
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
        <meta name="google-site-verification" content="9I7S-kMkmIw7ZXQI7qh3piLSH8SHRddYABCKvRhnZOg" />
      </head>
      <body suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCWQTY29JQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BCWQTY29JQ');`}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wu5395k71a");`}
        </Script>
        <Header />
        <main className="app-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
