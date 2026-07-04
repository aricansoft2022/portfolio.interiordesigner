export default function ServiceCard({ icon, title, bodyText }) {
  return (
    <div className="flex items-start gap-8.75">
      <img src={icon} alt={title} className="w-18" />
      <div className="flex flex-col gap-8.75">
        <h3 className="font-semibold text-[30px] text-grey-900">{title}</h3>
        <p className="font-medium text-[22px] text-grey-600">{bodyText}</p>
      </div>
    </div>
  );
}
