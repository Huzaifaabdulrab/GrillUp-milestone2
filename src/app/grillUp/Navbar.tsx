"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

// Navbar component
export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar container */}
      <nav className="navbar">
        
        {/* Main container for Navbar content */}
        <div className="navbar-container">
          
          {/* Brand name with a link */}
          <div className="brand-name">
            <Link href="#about">GrillUp!</Link>
          </div>
          
          {/* Hamburger icon for toggling mobile menu */}
          <FaBars
            onClick={toggleMenu}
            className="hamburger-icon"
          />
          
          {/* Desktop navigation links */}
          <div className="desktop-links">
            <Link href="#Screen" className="link" aria-label="Home">
              Home
            </Link>
            <Link href="#about" className="link" aria-label="About">
              About
            </Link>
            <Link href="#Menu" className="link" aria-label="Menu">
              Menu
            </Link>
            <Link href="#Offer" className="link" aria-label="Offers">
              Offers
            </Link>
            <Link href="#Contact" className="link" aria-label="Contact">
              Contact
            </Link>
          </div>

          {/* "Get Started" button visible on desktop only */}
          <div className="get-started">
            <Button>
              <Link href="#Offer" className="link" aria-label="Get Started">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
        {/* Mobile menu that toggles with the hamburger icon */}
        <div className={`${isOpen ? "mobile-menu-visible" : "mobile-menu-hidden"}`}>
          <div className="mobile-links">
            <Link href="#Screen" className="mobile-link">
              Home
            </Link>
            <Link href="#about" className="mobile-link">
              About
            </Link>
            <Link href="#Menu" className="mobile-link">
              Menu
            </Link>
            <Link href="#Offer" className="mobile-link">
              Offers
            </Link>
            <Link href="#Contact" className="mobile-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
