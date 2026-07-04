export default function PrimaryButton({ text, href }) {
  return (
    <a
      href={href}
      className="flex items-center bg-grey-900 hover:bg-grey-800 px-8 py-3 rounded w-fit text-white cursor-pointer"
    >
      {text}
    </a>
  );
}
