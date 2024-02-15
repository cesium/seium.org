import { motion as Motion } from "framer-motion";

const email = "cesium@di.uminho.pt";
const tel = "+351 253 604 448";

export default function FindUs() {
  return (
    <section className="spacing flex flex-col bg-primary py-20 lg:flex-row lg:justify-between">
      <div className="z-40 mb-10 mr-10 flex flex-col text-white">
        <h2 className="font-terminal-uppercase mb-2 select-none text-6xl font-bold">
          How to find us
        </h2>

        <p className="mb-8 font-iregular">
          SEI is free for participants and is organized by volunteers from
          <a className="hover:text-quinary" href="/bean.html">
            {" "}
            CeSIUM
          </a>{" "}
          and from the university community.
        </p>
        <p className="mb-8 font-iregular">
          This years event will take place at Pedagogic Complex 2, Gualtar
          Campus.
        </p>
        <p className="mb-2 font-ibold">
          Centro de Estudantes de Engenharia Informática
        </p>
        <ul className="list-inside list-disc font-iregular">
          <a href={`mailto:${email}`}>
            <li className="">{`E-mail: ${email}`}</li>
          </a>
          <a href={`tel:${tel}`}>
            <li className="">{`Phone: ${tel}`}</li>
          </a>
        </ul>
      </div>
      <div className="w-full select-none lg:w-3/5">
        <img src="/images/map/location.svg" alt="" />
      </div>
    </section>
  );
}
