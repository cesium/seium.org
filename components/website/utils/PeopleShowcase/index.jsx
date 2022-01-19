export default function PeopleShowcase({ children, title, subtitle }) {
  return (
    <div className="flex flex-col justify-around lg:flex-row bg-secondary pt-40 pb-20 spacing">
      <div className="mb-10 lg:w-1/2">
        {title}
        <div>{subtitle}</div>
      </div>
      <div className="grid gap-y-8 gap-x-2 grid-cols-2 justify-items-center lg:gap-x-8">
        {children}
      </div>
    </div>
  );
}
