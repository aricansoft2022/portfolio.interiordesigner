import { topNavLinks } from "../../data/content";
import MenuItem from "./MenuItem";

export default function DesktopMenu() {
  return (
    <ul className="flex items-center gap-12">
      {topNavLinks.map(({ label, href, active }) => (
        <MenuItem
          key={label}
          href={href}
          active={active}
          text={label}
          variant="desktop"
        />
      ))}
    </ul>
  );
}
