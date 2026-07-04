import { threeSimpleSteps } from "../../data/content";
import StepCard from "../cards/StepCard";

export default function ThreeSimpleSteps() {
  return (
    <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-12">
        <h2 className="font-semibold text-grey-900 text-6xl">
          {threeSimpleSteps.title}
        </h2>
        <div className="flex flex-col gap-14 w-10/12">
          {threeSimpleSteps.steps.map(({ id, icon, title, bodyText }) => (
            <StepCard key={id} icon={icon} title={title} bodyText={bodyText} />
          ))}
        </div>
      </div>
      <img
        src={threeSimpleSteps.image.image}
        alt={threeSimpleSteps.image.alt}
        className="w-full"
      />
    </div>
  );
}
