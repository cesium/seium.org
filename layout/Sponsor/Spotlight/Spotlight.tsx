import { withAuth } from "@context/Auth";
import Base from "../components/Base";
import SpotlightButton from "@layout/moonstone/sponsor/spotlight/SpotlightButton";

interface Props {}

const Spotlight: React.FC<Props> = () => {
  const navigation = ["scanner", "dashboard", "spotlight", "visitors"];
  return (
    <Base
      href="spotlight"
      title="Spotlight"
      description="Coloque a sua empresa em destaque"
      navigation={navigation}
    >
      <div>
        <div className="mt-8 md:mt-16">
          <h1 className="text-iextrabold font-ibold text-4xl text-white sm:text-5xl">
            Spotlight
          </h1>
          <p className="mt-4 font-iregular text-xl text-white">
            O spotlight dura 30 minutos. Durante este período, a sala da empresa
            fica no topo da hierarquia e o valor dos badges e tokens atribuidos
            por esta é multiplicado.
          </p>
        </div>

        <div className="col-span-1 w-full md:w-1/2">
          <div className="mt-8 border-b-2 border-white pb-2">
            <span className="font-ibold text-xl text-white sm:text-2xl">
              Comandos
            </span>
          </div>

          <div className="mt-5 ml-3  w-3/4">
            {/*<SpotlightButton sponsor="Subvisual" />*/}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default withAuth(Spotlight);
