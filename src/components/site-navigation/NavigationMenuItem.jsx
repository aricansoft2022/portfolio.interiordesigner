export default function NavigationMenuItem({
  text,
  active,
  href,
  variant,
  setOpen,
}) {
  return (
    <li>
      <a
        onClick={() => setOpen?.(false)}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`${variant === "desktop" ? "text-[22px]" : "text-6xl"} hover:text-grey-900 font-medium ${active ? "text-grey-900" : "text-grey-600"}`}
      >
        {text}
      </a>
    </li>
  );
}
