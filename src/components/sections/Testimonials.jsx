import { testimonials } from "../../data/content";
import leftArrow from "../../assets/icons/testimonial/testimonial-left-arrow.svg";
import rightArrow from "../../assets/icons/testimonial/testimonial-right-arrow.svg";
import TestimonialCard from "../cards/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-12 bg-[url(/luxury-living-room-staircase.webp)] bg-no-repeat w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex lg:col-span-1"></div>
        <div className="col-span-1">
          <h2 className="font-semibold text-grey-900 text-6xl">
            {testimonials.title}
          </h2>
        </div>
      </div>
      <div className="place-items-end gap-2 lg:gap-0 grid lg:grid-flow-col lg:auto-cols-fr auto-rows-min w-full">
        <div className="flex justify-center gap-4 w-full">
          <img src={leftArrow} />
          <img src={rightArrow} />
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-white p-4 pb-0">
          {testimonials.testimonials.map(
            ({ id, author, bodyText, location, avatar }) => (
              <TestimonialCard
                key={id}
                author={author}
                bodyText={bodyText}
                location={location}
                avatar={avatar}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
