import PrimaryButton from "../buttons/PrimaryButton";

import { hero } from "../../data/content";

export default function Hero() {
  return (
    <div className="gap-16 grid grid-cols-1 lg:grid-cols-2 -mt-40">
      <div className="flex flex-col items-start gap-23.5">
        <div className="flex flex-col gap-25">
          <div className="flex flex-col gap-10">
            <h1 className="font-medium text-[133px] text-grey-900">
              {hero.title}
            </h1>
            <p className="font-medium text-grey-600 text-2xl">
              {hero.bodyText}
            </p>
          </div>
          <div className="flex justify-start">
            <PrimaryButton text={"Start Project"} href={"#home"} />
          </div>
        </div>
        <div className="gap-21.75 grid grid-cols-3">
          <div className="flex flex-col">
            <p className="text-[55px] text-grey-600 text-nowrap">
              {hero.projectsCompleted} +
            </p>
            <p className="text-[22px] text-grey-600">Projects Completed</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[55px] text-grey-600 text-nowrap">
              {hero.satisfiedClients} +
            </p>
            <p className="text-[22px] text-grey-600">Satisfied Clients</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[55px] text-grey-600 text-nowrap">
              {hero.uniqueStyles} +
            </p>
            <p className="text-[22px] text-grey-600">Unique Styles</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 h-full">
        <img src={hero.images[0].image} alt={hero.images[0].alt} />
        <img
          src={hero.images[1].image}
          alt={hero.images[1].alt}
          className="justify-self-end"
        />
      </div>
    </div>
  );
}
