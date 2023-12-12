export default function JoinUs(props) {
  return (
    <a
      href="https://sei23.eventbrite.pt"
      className={`flex h-28 w-28 flex-shrink-0 rotate-15 transform items-center justify-center font-ibold text-xl text-${props.fgColor} bg-${props.button} translate-x-0 select-none rounded-full`}
    >
      Join us 👋
    </a>
  );
}
