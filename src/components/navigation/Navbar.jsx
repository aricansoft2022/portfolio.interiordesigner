import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import logoImage from "../../assets/brand/vivadecor-logo-dark.svg";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileMenu = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white w-full h-16">
      <a href="#home" className="z-50">
        <img src={logoImage} alt="VivaDecor" />
      </a>
      {isMobileMenu ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
}
