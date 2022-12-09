function Prize({ place, prize, description }) {
  let abbreviation;
  switch (place) {
    case "1":
      abbreviation = "st";
      break;
    case "2":
      abbreviation = "nd";
      break;
    case "3":
      abbreviation = "rd";
      break;
    default:
      abbreviation = "th";
      break;
  }

  return (
    <div className="mt-10 text-center font-ibold">
      <h3 className="font-iextrabold text-3xl md:text-5xl">
        {place}
        <sup>{abbreviation}</sup> Place
      </h3>
      <p className="mt-10 text-4xl">🏆</p>
      <p className="text-4xl">{prize}</p>
    </div>
  );
}

export default function Awards() {
  return (
    <div className="w-full bg-quaternary pt-20 pb-10 text-center text-white">
      <h2 className="relative font-ibold text-5xl md:w-full md:text-8xl ">
        Awards
      </h2>
      <div className="spacing flex flex-col justify-center pt-10 lg:flex-row">
        <div className="grid w-full grid-cols-1 justify-items-center gap-y-8 gap-x-2 md:grid-cols-3 lg:gap-x-8">
          <div>
            <Prize place="1" prize="300€" />
          </div>
          <div>
            <Prize place="2" prize="200€" />
          </div>
          <div>
            <Prize place="3" prize="100€" />
          </div>
        </div>
      </div>
      <p className="text-ibold m-10 text-xl md:text-2xl">
        All prizes ar divided in equal amounts amongst the winning team members.
        Each member gets a &apos;Cartão Dá&apos; gift card!
      </p>
    </div>
  );
}
