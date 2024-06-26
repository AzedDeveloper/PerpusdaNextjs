import "assets/globals.css";
import Header from "components/Header";
import Carousel from "components/Carousel";
import Search from "components/Search";
import Body from "components/Body";
import Footer from "components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Body>
        <Header />
        <Carousel />
        <Search />
        {children}
        <Footer />
      </Body>
    </html>
  );
}
