export default function PrimaryButton({ text, href, type = "button" }) {
  const className =
    "flex items-center bg-grey-900 hover:bg-grey-800 px-8 py-3 rounded w-fit text-white cursor-pointer";

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
