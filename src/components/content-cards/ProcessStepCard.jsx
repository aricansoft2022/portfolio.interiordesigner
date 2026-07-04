export default function ProcessStepCard({ step }) {
  const { icon, title, description } = step;

  return (
    <li className="flex gap-12">
      <div className="flex flex-col gap-12">
        <span className="flex justify-center items-center bg-black rounded-full w-16 h-16">
          <img src={icon} alt="" aria-hidden="true" />
        </span>
        <div className="bg-[url(/grey-line.svg)] bg-no-repeat bg-center w-full h-20"></div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="body-copy-lg">{description}</p>
      </div>
    </li>
  );
}
