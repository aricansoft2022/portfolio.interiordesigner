import { processSection } from "../../data/content";
import ProcessStepCard from "../content-cards/ProcessStepCard";

export default function DesignProcess() {
  return (
    <section
      id="process"
      aria-labelledby="steps-title"
      className="gap-12 grid grid-cols-1 lg:grid-cols-2 scroll-mt-24"
    >
      <div className="flex flex-col gap-12">
        <h2 id="steps-title" className="section-title">
          {processSection.title}
        </h2>
        <ol className="flex flex-col gap-14 w-10/12">
          {processSection.steps.map((step) => (
            <ProcessStepCard key={step.id} step={step} />
          ))}
        </ol>
      </div>
      <img
        src={processSection.illustration.src}
        alt={processSection.illustration.alt}
        className="w-full"
        width="698"
        height="851"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}
