import React, { useEffect, useState } from "react";
import { useUser } from "../../components/moonstone/context/user";
import SectionHeader from "../../components/moonstone/SectionHeader";
import Header from "../../components/moonstone/Header";
import Button from "../../components/moonstone/Button";

import API from "../../utils/api";

import "../../assets/css/moonstone.css";

const Message = ({ msg, sucesseful }) => {
  return (
    <pre
      style={{
        display: "inline",
        "font-family": "Inter Regular",
        width: "100%",
        "text-align": "center",
        color: `${sucesseful ? "#000000" : "#FF4444"}`,
      }}
    >
      {msg || " "}
    </pre>
  );
};

function Spotlight() {
  const { user, dispatch } = useUser();
  const [message, setMessage] = useState({});

  useEffect(async () => {
    const { data: user } = await API.get("/api/v1/company");
    dispatch({ type: "INIT_COMPANY", user: user });
  }, []);

  const handleSpotlight = () => {
    API.post("/api/v1/spotlight")
      .then(() => {
        setMessage({
          msg: `Spotlight ativado por 30 minutos`,
          sucesseful: true,
        });
      })
      .catch((err) => {
        if (err.response.data.errors.active) {
          setMessage({
            msg: `Não foi possível ativar, há outro spotlight ativo`,
            sucesseful: false,
          });
        } else if (err.response.data.erros.remaining_spotlights) {
          setMessage({
            msg: `Não tem spotlights restantes`,
            sucesseful: false,
          });
        }
      })
      .finally(() => {
        setTimeout(() => setMessage({}), 5000);
      });
  };

  return (
    <div className="userProfile">
      <SectionHeader
        title="Spotlight"
        subtitle={`O Spotlight dura 30 minutos.\nDurante este período, a sala da empresa fica no topo da hierarquia e o valor dos badges e tokens atribuídos por esta
        é multiplicado.`}
      />
      <div className="main">
        <div className="participants">
          <Header
            title="Comandos"
            style={{ marginBottom: "15px", width: "100%" }}
          />

          <Button
            style={{
              "font-size": "18px",
              marginTop: "20px",
              marginBottom: "35px",
            }}
            onClick={() => handleSpotlight()}
          >
            💡 Ativar Spotlight
          </Button>
          <Message sucesseful={message.sucesseful} msg={message.msg} />
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
