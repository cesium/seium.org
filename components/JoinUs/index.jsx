export default function JoinUs(props) {
  return (
    <a
      href="https://sei24.eventbrite.pt"
      target="_blank"
      className={`before:ease flex flex-wrap content-center justify-center border-2 text-${props.fgColor} font-terminal-uppercase relative h-10 w-28 overflow-hidden rounded-full bg-transparent before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-${props.button} transition-transform before:transition-all before:duration-300 hover:scale-105 hover:text-white hover:before:-rotate-180`}
    >
      <span className="relative z-10">Join Us</span>
    </a>
  );
}
