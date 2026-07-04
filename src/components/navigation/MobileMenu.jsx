import { useState, useEffect } from "react";
import { topNavLinks } from "../../data/content";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

export default function MobileMenu() {
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
    <>
      <ul
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed z-10 flex flex-col items-center justify-center gap-12 bg-white h-dvh left-0 w-full transition-all duration-500 ${open ? "top-0" : "-top-full"}`}
      >
        {topNavLinks.map(({ label, href, active }) => (
          <MenuItem
            key={label}
            href={href}
            active={active}
            text={label}
            variant="mobile"
            setOpen={setOpen}
          />
        ))}
      </ul>

      <MenuButton open={open} setOpen={setOpen} />
    </>
  );
}
