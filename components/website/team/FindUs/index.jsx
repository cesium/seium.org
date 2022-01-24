import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function FindUs() {
  return (
    <section className="spacing flex flex-col bg-quaternary py-20 lg:flex-row lg:justify-between">
      <div className="mb-10 mr-10 flex flex-col text-white">
        <h2 className="mb-2 font-iextrabold text-6xl">How to find us</h2>

        <p className="mb-8 font-iregular">
          The SEI is free for participants and is organized by volunteers from
          CeSIUM and from the university community.
        </p>

        <p className="mb-2 font-ibold">
          Centro de Estudantes de Engenharia Informática
        </p>
        <ul className="list-inside list-disc font-iregular">
          <li className="">E-mail: cesium@di.uminho.pt</li>
          <li className="">Phone: +351 253 604 448</li>
        </ul>
      </div>
      <div className="w-full lg:w-3/5">
        <Map />
      </div>
    </section>
  );
}
