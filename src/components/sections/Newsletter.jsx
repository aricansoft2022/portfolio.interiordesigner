import { newsletter } from "../../data/content";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-18 lg:w-7/12">
      <h2 className="font-semibold text-grey-900 text-6xl text-center">
        {newsletter.title}
      </h2>
      <p className="text-grey-600 text-2xl text-center">
        {newsletter.bodyText}
      </p>
      <div className="flex justify-between shadow-2xl shadow-grey-300/40 p-2 w-full">
        <div className="flex items-center gap-4 ml-2 p-4 w-full">
          <img src={newsletter.inputIcon} />
          <input
            type="text"
            placeholder={newsletter.inputPlaceholder}
            className="outline-none w-full text-2xl"
          />
        </div>
        <PrimaryButton text={newsletter.buttonText} />
      </div>
    </div>
  );
}
