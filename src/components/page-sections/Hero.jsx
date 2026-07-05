import PrimaryButton from "../actions/PrimaryButton";

import { heroSection } from "../../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="gap-16 grid grid-cols-1 lg:grid-cols-2 -mt-40 scroll-mt-24"
    >
      <div className="flex flex-col items-start gap-23.5">
        <div className="flex flex-col gap-25">
          <div className="flex flex-col gap-10">
            <h1
              id="hero-title"
              className="font-medium text-7xl sm:text-8xl lg:text-[133px] text-grey-900"
            >
              {heroSection.title}
            </h1>
            <p className="body-copy-lg-medium">
              {heroSection.description}
            </p>
          </div>
          <div className="flex justify-start">
            <PrimaryButton text={"Start Project"} href={"#contact"} />
          </div>
        </div>
        <ul className="gap-21.75 grid grid-cols-3">
          <li className="flex flex-col">
            <p className="hero-stat-value">
              {heroSection.projectsCompleted} +
            </p>
            <p className="hero-stat-label">Projects Completed</p>
          </li>
          <li className="flex flex-col">
            <p className="hero-stat-value">
              {heroSection.satisfiedClients} +
            </p>
            <p className="hero-stat-label">Satisfied Clients</p>
          </li>
          <li className="flex flex-col">
            <p className="hero-stat-value">
              {heroSection.uniqueStyles} +
            </p>
            <p className="hero-stat-label">Unique Styles</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-6 h-full">
        <img
          src={heroSection.galleryImages[0].src}
          alt={heroSection.galleryImages[0].alt}
          width="507"
          height="428"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <img
          src={heroSection.galleryImages[1].src}
          alt={heroSection.galleryImages[1].alt}
          className="justify-self-end"
          width="638"
          height="406"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}
