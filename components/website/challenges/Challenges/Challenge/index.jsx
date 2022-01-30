import Button from "/components/utils/Button";

function Action({ text, url }) {
  return (
    <div className="mt-5 w-60">
      <Button
        onClick={(e) => (window.location.href = url)}
        text={text}
        customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
      />
    </div>
  );
}

export default function Challenge({
  title,
  description,
  prizes,
  button,
  setTitle,
}) {
  return (
    <div className="sticky top-0 mb-24">
      <div>
        <h2 className="font-iextrabold text-3xl text-white md:text-4xl xl:text-5xl">
          {title}
        </h2>
        <p className="mt-10 font-iregular text-white">{description}</p>
        <div>
          {prizes && (
            <h3 className="text-ibold md:text-md xl:text-md mt-5 mb-3 text-xl text-white ">
              Awards 🏆
            </h3>
          )}
          {prizes &&
            prizes.map((prize, index) => {
              let ordinal = "";
              switch (index + 1) {
                case 1:
                  ordinal = "st";
                  break;
                case 2:
                  ordinal = "nd";
                  break;
                case 3:
                  ordinal = "rd";
                  break;
                default:
                  ordinal = "th";
              }
              return (
                <p key={index}>
                  <a
                    href={prizes[index].url}
                    className="text-iregular text-quinary"
                  >
                    {index + 1}
                    <sup>{ordinal}</sup> place - {prizes[index].name}
                  </a>
                </p>
              );
            })}
          {button != null && <Action text={button.text} url={button.url} />}
        </div>
      </div>
    </div>
  );
}
