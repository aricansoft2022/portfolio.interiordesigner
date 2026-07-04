import { designTopics } from "../../data/content";
import plusButton from "../../assets/icons/accordion/plus.svg";

import { useState } from "react";

export default function DesignTopicsAccordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="flex flex-col gap-12">
      {designTopics.map((topic) => (
        <AccordionSection
          key={topic.id}
          topic={topic}
          setOpenId={setOpenId}
          open={openId === topic.id}
        />
      ))}
    </div>
  );
}

function AccordionSection({ topic, open, setOpenId }) {
  const { id, title, description } = topic;
  const panelId = `accordion-panel-${id}`;
  const titleId = `${id}-title`;

  const handleToggle = () => {
    setOpenId(open ? null : id);
  };

  return (
    <section id={id} className="flex flex-col gap-5 scroll-mt-24">
      <div className="flex justify-between items-center">
        <h3 id={titleId} className="accordion-title">
          {title}
        </h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-labelledby={titleId}
          onClick={handleToggle}
          className={`cursor-pointer transition-all duration-200 ${open ? " -rotate-45" : ""}`}
        >
          <img src={plusButton} alt="" aria-hidden="true" />
        </button>
      </div>
      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        hidden={!open}
      >
        <p>{description}</p>
      </div>
    </section>
  );
}
