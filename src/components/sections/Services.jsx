import { serviceCards } from "../../data/content";
import ServiceCard from "../cards/ServiceCard";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <h1 className="self-start font-semibold text-[54px] text-grey-900">
        Our Services
      </h1>
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map(({ icon, title, bodyText }) => (
          <ServiceCard
            key={title}
            icon={icon}
            title={title}
            bodyText={bodyText}
          />
        ))}
      </div>
    </div>
  );
}
