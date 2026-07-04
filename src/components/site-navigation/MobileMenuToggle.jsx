export default function MobileMenuToggle({ setOpen, open }) {
  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="z-15 relative w-6 h-4 cursor-pointer"
    >
      <span
        className={`absolute left-0 h-0.5 w-full rounded bg-gray-900 transition-all duration-300 ease-in-out ${open ? "top-1.75 rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute left-0 top-1.75 h-0.5 w-1/2 rounded bg-gray-900 transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 h-0.5 w-full rounded bg-gray-900 transition-all duration-300 ease-in-out ${open ? "top-1.75 -rotate-45" : "top-3.5"}`}
      />
    </button>
  );
}
