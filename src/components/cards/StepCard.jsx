export default function StepCard({ icon, title, bodyText }) {
  return (
    <div className="flex gap-12">
      <div className="flex flex-col gap-12">
        <span className="flex justify-center items-center bg-black rounded-full w-16 h-16">
          <img src={icon} />
        </span>
        <div className="bg-[url(/grey-line.svg)] bg-no-repeat bg-center w-full h-20"></div>
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="font-bold text-3xl">{title}</h4>
        <p className="text-grey-600 text-2xl">{bodyText}</p>
      </div>
    </div>
  );
}
