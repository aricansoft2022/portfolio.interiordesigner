import { serviceItems } from "../../data/content";
import ServiceCard from "../content-cards/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="flex flex-col items-center gap-16 w-full scroll-mt-24"
    >
      <h2
        id="services-title"
        className="section-title-start"
      >
        Our Services
      </h2>
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((serviceItem) => (
          <ServiceCard key={serviceItem.id} serviceItem={serviceItem} />
        ))}
      </div>
    </section>
  );
}
