export default function PeopleShowcase({ children, title, subtitle }) {
  return (
    <div className="flex flex-col justify-around pt-40 pb-20 spacing bg-secondary lg:flex-row">
      <div className="mb-10 lg:w-1/2">
        {title}
        <div>{subtitle}</div>
      </div>
      <div className="grid max-w-[24rem] grid-cols-2 justify-items-center gap-y-8 gap-x-2 lg:gap-x-8">
        {children}
      </div>
    </div>
  );
}
