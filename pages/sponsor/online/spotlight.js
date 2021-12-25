import Dashboard from "/components/moonstone/sponsor/utils/Dashboard";

import SpotlightButton from "/components/moonstone/sponsor/spotlight/SpotlightButton"

export default function Spotlight() {
  return (
    <Dashboard href="spotlight">
      <div>
        <div className="md:mt-16 mt-8">
          <h1 className="font-ibold text-4xl text-iextrabold sm:text-5xl"> Spotlight </h1>
          <p className="mt-4 text-xl font-iregular">
            O spotlight dura 30 minutos. Durante este período, a sala da empresa fica no topo da hierarquia e o valor dos badges e tokens atribuidos por esta é multiplicado.
          </p>
        </div>

        <div className="col-span-1 w-full md:w-1/2">
          <div className="border-black border-b-2 mt-8 pb-2">
            <span className="font-ibold text-xl sm:text-2xl">Comandos</span>
          </div>

          <div className="mt-5 ml-3  w-3/4">
            <SpotlightButton sponsor="Accenture" />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}