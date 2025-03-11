
import "./globals.css";
import Navbar from "../app/Navbar/page";
import Footer from "../app/Footer/page"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
     
        {children}
        <Footer />
      </body>
    </html>
  );
}
