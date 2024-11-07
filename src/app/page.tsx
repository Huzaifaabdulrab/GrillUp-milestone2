import Image from "next/image";  // Commented out since it's not used currently
import Navbar from "../app/grillUp/Navbar";
import Screen from "./grillUp/Screen";
import About from "../app/grillUp/About";
import Menu from "../app/grillUp/MenuSection";
import Offer from "../app/grillUp/offers";
import Contact from "./grillUp/Contact";
import Footer from "./grillUp/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Screen />
      <About />
      <Menu />
      <Offer />
      <Contact />
      <Footer />
    </>
  );
}
