import { accordion } from "../../data/content";
import plusButton from "../../assets/icons/accordion/plus.svg";

import { useState } from "react";

export default function Accordion() {
  const [openId, setOpenId] = useState(0);

  return (
    <div className="flex flex-col gap-12">
      {accordion.map(({ id, title, bodyText }) => (
        <AccordionSection
          key={id}
          title={title}
          bodyText={bodyText}
          setOpenId={setOpenId}
          open={openId === id}
          id={id}
        />
      ))}
    </div>
  );
}

function AccordionSection({ title, bodyText, open, id, setOpenId }) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-2xl">{title}</h4>
          <img
            src={plusButton}
            onClick={() => {
              if (open) {
                setOpenId(0);
                return;
              }
              setOpenId(id);
            }}
            className={`cursor-pointer transition-all duration-200 ${open ? " -rotate-45" : ""}`}
          />
        </div>
        {open ? <p>{bodyText}</p> : ""}
      </div>
    </>
  );
}
