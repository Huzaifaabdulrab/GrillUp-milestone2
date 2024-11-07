import Link from "next/link";
import { Button } from "@/components/ui/button"; // Importing Button component
import Image from "next/image"; // Importing Image component from Next.js
import ScreenImage from "../images/BurgerImages/ScreenImage (1).jpg"; // Importing burger image

export default function Screen() {
  return (
    <>
      <div id="home" className="screen-container">
        <Image
          src={ScreenImage}
          alt="Burger image"
          fill
          style={{ objectFit: "cover" }} // Ensuring the image covers the area
          className="screen-image" // Custom class for image
        />
        <div className="screen-overlay">
          <div className="brand-link">
            <Link href="#about">GrillUp!</Link>
          </div>
          <h1 className="welcome-heading">
            𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔{" "}
            <span className="grillup-text">
              𝕲𝖗𝖎𝖑𝖑𝖀𝖕<span className="grillup-exclamation">!</span>
            </span>
          </h1>
          <p className="tagline">Savor the Flavor, Anytime, Anywhere!</p>
          <p className="subtext">
            Explore our menu and discover your new favorite dish today!
          </p>
          <div className="button-container">
            <Button
              variant="outline"
              className="order-now-button"
            >
              <Link href="#Contact">Order Now</Link>
            </Button>
            <Button
              variant="outline"
              className="view-special-button"
            >
              <Link href="#Offer">View Special</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
