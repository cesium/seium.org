import Button from "@components/Button";
import { motion as Motion } from "framer-motion";

function Action({ text, url }) {
  return (
    <div className="mt-5 w-60">
      <Button
        onClick={(e) => (window.location.href = url)}
        title={text}
        className="border-tertiary bg-primary text-white hover:bg-tertiary"
      />
    </div>
  );
}

interface IPrize {
  name: string;
  url?: string;
}

interface IHref {
  name?: string;
  url: string;
}

interface IProps {
  title: string;
  description: string;
  hrefs?: IHref[];
  prizes: IPrize[];
  button?: any;
}

export default function Challenge(props: IProps) {
  return (
    <Motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      key={props.title}
    >
      <h2 className="font-terminal-uppercase select-none text-3xl text-white md:text-4xl xl:text-5xl">
        {props.title}
      </h2>
      <div className="mt-10">
        {props.description.split("\n").map((e) => (
          <p className="font-iregular text-white">{e}</p>
        ))}
      </div>
      <div className="mt-3 flex flex-col">
        {props.hrefs &&
          props.hrefs.map((href, i) => (
            <a
              href={href.url}
              key={i}
              target="_blank"
              rel="noreferrer"
              className="font-iregular text-quinary hover:underline"
            >
              {href.name ?? href.url}
            </a>
          ))}
      </div>
      <div>
        {props.prizes && (
          <h3 className="text-ibold md:text-md xl:text-md mt-5 mb-3 text-xl text-white ">
            Awards 🏆
          </h3>
        )}
        {props.prizes &&
          props.prizes.map((prize, index) => {
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
              <p key={index} className="text-iregular">
                <a href={props.prizes[index].url} className="text-quinary">
                  {index + 1}
                  <sup className="font-mono">{ordinal}</sup> place -{" "}
                  {props.prizes[index].name}
                </a>
              </p>
            );
          })}
        {!props.prizes && (
          <h2 className="font-terminal-uppercase mt-10 w-full text-center text-2xl text-white">
            Awards to be announced!
          </h2>
        )}
        {props.button != null && (
          <Action text={props.button.text} url={props.button.url} />
        )}
      </div>
    </Motion.div>
  );
}
