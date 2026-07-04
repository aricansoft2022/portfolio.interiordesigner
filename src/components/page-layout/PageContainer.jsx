export default function PageContainer({ children }) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-57 p-5 md:p-7 lg:p-8 w-full font-inter"
      id="container"
    >
      {children}
    </div>
  );
}
