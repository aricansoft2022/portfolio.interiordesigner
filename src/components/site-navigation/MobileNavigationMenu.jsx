import { useState, useEffect } from "react";
import { navigationLinks } from "../../data/content";
import MobileMenuToggle from "./MobileMenuToggle";
import NavigationMenuItem from "./NavigationMenuItem";

export default function MobileNavigationMenu({ activeHref }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <ul
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed z-10 flex flex-col items-center justify-center gap-12 bg-white h-dvh left-0 w-full transition-all duration-500 ${open ? "top-0" : "-top-full"}`}
      >
        {navigationLinks.map(({ label, url }) => (
          <NavigationMenuItem
            key={label}
            href={url}
            active={activeHref === url}
            text={label}
            variant="mobile"
            setOpen={setOpen}
          />
        ))}
      </ul>

      <MobileMenuToggle open={open} setOpen={setOpen} />
    </div>
  );
}
