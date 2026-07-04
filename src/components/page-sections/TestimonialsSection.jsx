import { testimonialSection } from "../../data/content";
import leftArrow from "../../assets/icons/testimonial/testimonial-left-arrow.svg";
import rightArrow from "../../assets/icons/testimonial/testimonial-right-arrow.svg";
import TestimonialQuoteCard from "../content-cards/TestimonialQuoteCard";

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="testimonials-title"
      className="flex flex-col gap-12 bg-[url(/luxury-living-room-staircase.webp)] bg-no-repeat w-full scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex lg:col-span-1"></div>
        <div className="col-span-1">
          <h2
            id="testimonials-title"
            className="section-title"
          >
            {testimonialSection.title}
          </h2>
        </div>
      </div>
      <div className="place-items-end gap-2 lg:gap-0 grid lg:grid-flow-col lg:auto-cols-fr auto-rows-min w-full">
        <div className="flex justify-center gap-4 w-full">
          <img src={leftArrow} alt="" aria-hidden="true" />
          <img src={rightArrow} alt="" aria-hidden="true" />
        </div>
        <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 bg-white p-4 pb-0">
          {testimonialSection.items.map((testimonial) => (
            <TestimonialQuoteCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
