import { brilliance } from "../../data/content";
import PrimaryButton from "../buttons/PrimaryButton";
import Accordion from "../misc/Accordion";

export default function Brilliance() {
  return (
    <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
      <img
        src={brilliance.image}
        alt={brilliance.imageAlt}
        className="w-full"
      />
      <div className="flex flex-col gap-20">
        <h2 className="font-semibold text-grey-900 text-6xl">
          {brilliance.title}
        </h2>
        <p className="text-grey-600">{brilliance.bodyText}</p>
        <Accordion />
        <PrimaryButton text={"Learn more"} href={"#"} />
      </div>
    </div>
  );
}
