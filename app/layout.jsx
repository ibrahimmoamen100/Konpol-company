import BottomNavbar from "./componnets/BottomNavbar";
import Footer from "./componnets/Footer";
import Navbar from "./componnets/Navbar";
import Topnavbar from "./componnets/Topnavbar";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Topnavbar/>
      <Navbar/>
      <BottomNavbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
