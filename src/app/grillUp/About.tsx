import React from "react";
import Image from "next/image";
import aboutImage from "../images/BurgerImages/aboutImage.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex-container flex-row">
          
          {/* Image Section */}
          <div className="imageContainer shadow-lg">
            <Image
              src={aboutImage}
              alt="Grilled Burger with toppings"
              layout="responsive"
              width={500}
              height={400}
              className="imageShadow"
            />
          </div>

          {/* About Content */}
          <div className="textContainer">
            <h2 className="heading">About GrillUp!</h2>
            <p className="paragraph">
              Welcome to GrillUp, where passion meets flavor! Our burgers are
              crafted with the finest ingredients, grilled to perfection, and
              served with love. Whether you're craving a classic cheeseburger or
              something bold and new, we've got you covered. Come join us for a
              bite you won't forget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
