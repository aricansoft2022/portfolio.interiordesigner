import { useEffect, useState } from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import DesktopNavigation from "./DesktopNavigation";
import { brandAssets, navigationLinks } from "../../data/content";

export default function MainNavigation() {
  const [activeHref, setActiveHref] = useState(navigationLinks[0].url);

  useEffect(() => {
    const sectionAnchors = navigationLinks
      .map(({ url }) => {
        const id = url.replace("#", "");
        const element = document.getElementById(id);
        return element ? { url, element } : null;
      })
      .filter(Boolean);

    const updateActiveHref = () => {
      const scrollOffset = 120;

      const currentSection = sectionAnchors.find(({ element }) => {
        const { top, bottom } = element.getBoundingClientRect();
        return top <= scrollOffset && bottom > scrollOffset;
      });

      if (currentSection) {
        setActiveHref(currentSection.url);
        return;
      }

      const passedSections = sectionAnchors.filter(({ element }) => {
        const { top } = element.getBoundingClientRect();
        return top <= scrollOffset;
      });

      if (passedSections.length > 0) {
        setActiveHref(passedSections.at(-1).url);
        return;
      }

      setActiveHref(navigationLinks[0].url);
    };

    updateActiveHref();
    window.addEventListener("scroll", updateActiveHref, { passive: true });
    window.addEventListener("resize", updateActiveHref);

    return () => {
      window.removeEventListener("scroll", updateActiveHref);
      window.removeEventListener("resize", updateActiveHref);
    };
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="flex justify-between items-center bg-white w-full h-16"
    >
      <a href="#home" className="z-50">
        <img
          src={brandAssets.headerLogo.src}
          alt={brandAssets.headerLogo.alt}
          width="177"
          height="48"
        />
      </a>
      <DesktopNavigation activeHref={activeHref} />
      <MobileNavigationMenu activeHref={activeHref} />
    </nav>
  );
}
