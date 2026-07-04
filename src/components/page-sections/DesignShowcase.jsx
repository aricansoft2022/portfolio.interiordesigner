import { designShowcaseSection } from "../../data/content";
import PrimaryButton from "../actions/PrimaryButton";
import DesignTopicsAccordion from "../disclosure/DesignTopicsAccordion";

export default function DesignShowcase() {
  return (
    <section
      id="about"
      aria-labelledby="brilliance-title"
      className="gap-12 grid grid-cols-1 lg:grid-cols-2 scroll-mt-24"
    >
      <img
        src={designShowcaseSection.image.src}
        alt={designShowcaseSection.image.alt}
        className="w-full"
        width="711"
        height="711"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col gap-20">
        <h2
          id="brilliance-title"
          className="section-title"
        >
          {designShowcaseSection.title}
        </h2>
        <p className="body-copy-lg">{designShowcaseSection.description}</p>
        <DesignTopicsAccordion />
        <PrimaryButton text={"Learn more"} href={"#process"} />
      </div>
    </section>
  );
}
