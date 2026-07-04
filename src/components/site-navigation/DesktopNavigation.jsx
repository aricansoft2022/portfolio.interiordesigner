import { navigationLinks } from "../../data/content";
import NavigationMenuItem from "./NavigationMenuItem";

export default function DesktopNavigation({ activeHref }) {
  return (
    <ul className="hidden md:flex items-center gap-12">
      {navigationLinks.map(({ label, url }) => (
        <NavigationMenuItem
          key={label}
          href={url}
          active={activeHref === url}
          text={label}
          variant="desktop"
        />
      ))}
    </ul>
  );
}
