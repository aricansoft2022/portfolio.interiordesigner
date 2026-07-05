export default function PrimaryButton({
  text,
  href,
  type = "button",
  className: widthClassName = "w-fit",
}) {
  const className = `flex items-center justify-center bg-grey-900 hover:bg-grey-800 px-8 py-3 rounded text-white cursor-pointer ${widthClassName}`;

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
