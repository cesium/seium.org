import React, { useState } from "react";
import { useUser } from "../context/user";
import Header from "../Header";
import Button from "../Button";

import API from "../../../utils/api";

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

export default function ButtonMenu({ UUID, users }) {
  const { user } = useUser();
  const [message, setMessage] = useState({});

  const handleBadge = (uuid) => {
    API.post(`api/v1/redeems`, {
      redeem: {
        attendee_id: uuid,
      },
    })
      .then((res) => {
        setMessage({
          msg: `Badge atribuído com sucesso`,
          sucesseful: true,
        });
      })
      .catch((err) => {
        setMessage({
          msg: `Não foi possível atribuir o badge`,
          sucesseful: false,
        });
      })
      .finally(() => {
        setTimeout(() => setMessage({}), 3000);
      });
  };

  const handlePrize = () => {
    API.post(`api/v1/give_bonus/${UUID}`)
      .then((res) => {
        setMessage({
          msg: `Premiado com ${res.data.token_bonus} tokens`,
          sucesseful: true,
        });
      })
      .catch((err) => {
        setMessage({
          msg: `Não foi possível premiar`,
          sucesseful: false,
        });
      })
      .finally(() => {
        setTimeout(() => setMessage({}), 3000);
      });
  };

  const handleBadgesAll = () => {
    users.map((user) => {
      API.get(`api/v1/association/${user.discord_id}`).then((res) => {
        handleBadge(res.data.id);
      });
    });
  };

  return (
    <div className="participants">
      <Header
        title="Comandos"
        style={{ marginBottom: "15px", width: "100%" }}
      />
      <Button style={{ "font-size": "18px" }} onClick={() => handleBadge(UUID)}>
        🏅 Dar badge {user.name}
      </Button>
      <Button
        style={{ "font-size": "18px", marginTop: "20px" }}
        onClick={() => handlePrize()}
      >
        🪙 Prémio: câmera ligada
      </Button>
      <Button
        style={{ "font-size": "18px", marginTop: "20px" }}
        onClick={() => handlePrize()}
      >
        🪙 Prémio: conversa interessante
      </Button>
      <Button
        style={{ "font-size": "18px", marginTop: "20px", marginBottom: "35px" }}
        onClick={() => handlePrize()}
      >
        🪙 Prémio: participante excecional
      </Button>
      <Message sucesseful={message.sucesseful} msg={message.msg} />
      <Button
        style={{
          "font-size": "18px",
          marginTop: "35px",
        }}
        onClick={() => handleBadgesAll()}
      >
        🏅 Dar badge a{" "}
        <span style={{ "font-family": "Inter Black" }}>todos</span> na sala
      </Button>
    </div>
  );
}
