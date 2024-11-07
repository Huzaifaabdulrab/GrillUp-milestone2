// components/Menu.js
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import M2 from "../images/BurgerImages/M2.jpg";
import M3 from "../images/BurgerImages/M3.jpg";
import M4 from "../images/BurgerImages/M4.jpg";

export default function Menu() {
  type MenuItems = {
    id: number;
    name: string;
    description: string;
    price: string | number;
    image: StaticImageData;
    icon: JSX.Element;
  };

  const menuItems: MenuItems[] = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description:
        "A juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
      price: "$8.99",
      image: M4,
      icon: <FaStar className="text-orange-600" />,
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      description:
        "Grilled beef patty with crispy bacon, BBQ sauce, and cheddar cheese.",
      price: "$10.99",
      image: M2,
      icon: <FaStar className="text-orange-600" />,
    },
    {
      id: 3,
      name: "Veggie Delight Burger",
      description:
        "A delicious veggie patty with avocado, lettuce, and special sauce.",
      price: "$7.99",
      image: M3,
      icon: <FaStar className="text-orange-600" />,
    },
  ];

  return (
    <div id="Menu" className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="menu-item-image"
              />
              <div className="menu-item-content">
                <h3 className="menu-item-title">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-rating">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index}>{item.icon}</span>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="menu-item-price">Price: {item.price}</p>
                  <Link href="#Contact">
                    <button className="menu-item-button">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
