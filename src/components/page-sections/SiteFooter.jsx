import { footerContent } from "../../data/content";

export default function SiteFooter() {
  const creditLinkClass =
    "text-white underline underline-offset-4 transition-colors hover:text-grey-300";

  return (
    <footer
      id="contact"
      className="bg-black mt-15 w-full text-white scroll-mt-24"
    >
      <div className="gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-5 md:p-7 lg:p-8 py-16 md:py-16 lg:py-16">
        <div className="flex flex-col justify-between items-start gap-6">
          <img
            src={footerContent.logo.src}
            alt={footerContent.logo.alt}
            width="177"
            height="48"
          />
          <p className="body-copy-xl-medium text-grey-300">
            {footerContent.description}
          </p>
          <ul className="flex gap-4">
            {footerContent.socialLinks.map((logo) => (
              <li key={logo.id}>
                <img src={logo.icon} alt="" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
        {footerContent.linkGroups.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-6">
            <h2 className="footer-heading">{title}</h2>
            <ul className="footer-copy-list">
              {links.map((link) => (
                <li key={link.id}>
                  {link.url ? (
                    <a href={link.url} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    link.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-between items-start">
          <h2 className="footer-heading">{footerContent.contact.heading}</h2>
          <address className="contents not-italic">
            <a
              href={`mailto:${footerContent.contact.email}`}
              className="footer-copy"
            >
              {footerContent.contact.email}
            </a>
            <p className="footer-copy">
              {footerContent.contact.address}
            </p>
          </address>
        </div>
      </div>
      <small className="block border-grey-800 border-t px-5 md:px-7 lg:px-8 py-5 text-center text-grey-300 text-sm">
        <a
          href={footerContent.credit.design.url}
          className={creditLinkClass}
          target="_blank"
          rel="noreferrer"
        >
          {footerContent.credit.design.label}
        </a>{" "}
        by{" "}
        <a
          href={footerContent.credit.designer.url}
          className={creditLinkClass}
          target="_blank"
          rel="noreferrer"
        >
          {footerContent.credit.designer.label}
        </a>
        ,{" "}
        <a
          href={footerContent.credit.code.url}
          className={creditLinkClass}
          target="_blank"
          rel="noreferrer"
        >
          {footerContent.credit.code.label}
        </a>{" "}
        by{" "}
        <a
          href={footerContent.credit.developer.url}
          className={creditLinkClass}
          target="_blank"
          rel="noreferrer"
        >
          {footerContent.credit.developer.label}
        </a>
      </small>
    </footer>
  );
}
