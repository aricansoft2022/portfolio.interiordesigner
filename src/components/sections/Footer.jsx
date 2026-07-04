import { footer } from "../../data/content";

export default function Footer() {
  return (
    <div className="gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-black mt-15 p-5 md:p-7 lg:p-8 py-16 md:py-16 lg:py-16 w-full text-white">
      <div className="flex flex-col justify-between items-start gap-6">
        <img src={footer.logo} />
        <p className="text-grey-300 text-2xl">{footer.bodyText}</p>
        <div className="flex gap-4">
          {footer.socialLogos.map((logo) => (
            <img key={logo.id} src={logo.logo}></img>
          ))}
        </div>
      </div>
      {footer.columns.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-6">
          <h4 className="font-semibold text-2xl">{title}</h4>
          <ul className="flex flex-col gap-4 text-[22px] text-grey-300">
            {links.map((link) => (
              <li key={link.id}>{link.text}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col justify-between items-start">
        <h4 className="font-semibold text-2xl">{footer.contact.title}</h4>
        <p className="text-[22px] text-grey-300">{footer.contact.email}</p>
        <p className="text-[22px] text-grey-300">{footer.contact.address}</p>
      </div>
    </div>
  );
}
