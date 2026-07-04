export default function TestimonialCard({
  bodyText,
  author,
  location,
  avatar,
}) {
  return (
    <div className="flex flex-col gap-12 bg-black p-12 text-white">
      <p className="font-medium text-[150px] leading-20">“</p>
      <p className="font-medium text-2xl">{bodyText}</p>
      <div className="flex items-center gap-4">
        <img src={avatar} />
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-2xl">{author}</p>
          <p className="font-medium text-grey-450 text-xl">{location}</p>
        </div>
      </div>
    </div>
  );
}
