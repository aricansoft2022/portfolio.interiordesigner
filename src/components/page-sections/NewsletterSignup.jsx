import { newsletterSection } from "../../data/content";
import PrimaryButton from "../actions/PrimaryButton";

export default function NewsletterSignup() {
  return (
    <section
      id="support"
      aria-labelledby="newsletter-title"
      className="flex flex-col gap-18 lg:w-7/12 scroll-mt-24"
    >
      <h2
        id="newsletter-title"
        className="section-title body-copy-center"
      >
        {newsletterSection.title}
      </h2>
      <p className="body-copy-lg body-copy-center">
        {newsletterSection.description}
      </p>
      <form
        className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0 shadow-2xl shadow-grey-300/40 p-2 w-full"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex items-center gap-4 md:ml-2 p-4 w-full">
          <img src={newsletterSection.emailIcon} alt="" aria-hidden="true" />
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={newsletterSection.emailPlaceholder}
            className="outline-none w-full text-2xl"
          />
        </div>
        <PrimaryButton
          text={newsletterSection.submitLabel}
          type="submit"
          className="w-full md:w-fit"
        />
      </form>
    </section>
  );
}
