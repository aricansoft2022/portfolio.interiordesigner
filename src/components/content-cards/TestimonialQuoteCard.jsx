export default function TestimonialQuoteCard({ testimonial }) {
  const { quote, author, location, avatar } = testimonial;

  return (
    <li className="bg-black p-12 text-white">
      <figure className="flex flex-col gap-12 h-full">
        <p aria-hidden="true" className="font-medium text-[150px] leading-20">
          “
        </p>
        <blockquote className="body-copy-xl-medium">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="flex items-center gap-4">
          <img
            src={avatar}
            alt={`${author} avatar`}
            className="rounded-full w-20 h-20 object-cover"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col gap-4">
            <cite className="footer-heading not-italic">{author}</cite>
            <p className="testimonial-location">{location}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
