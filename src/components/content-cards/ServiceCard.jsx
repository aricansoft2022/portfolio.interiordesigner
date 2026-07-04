export default function ServiceCard({ serviceItem }) {
  const { id, icon, title, description } = serviceItem;

  return (
    <article id={id} className="flex items-start gap-8.75 scroll-mt-24">
      <img src={icon} alt="" aria-hidden="true" className="w-18" />
      <div className="flex flex-col gap-8.75">
        <h3 className="font-semibold text-[30px] text-grey-900">{title}</h3>
        <p className="body-copy-lg-medium">{description}</p>
      </div>
    </article>
  );
}
