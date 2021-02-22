import React, { useState, useEffect } from "react";
import { useUser } from "../../components/moonstone/context/user";
import SectionHeader from "../../components/moonstone/SectionHeader";
import List from "../../components/moonstone/CompanyStand/List";
import ButtonMenu from "../../components/moonstone/CompanyStand/ButtonMenu";

import "../../assets/css/moonstone.css";
import axios from "axios";
import API from "../../utils/api";

function StandDashboard() {
  const { user } = useUser();
  const [users, setUsers] = useState();
  const [selectedUserUUID, setSelectedUserUUID] = useState();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BOT_DOMAIN}/voice/${user.name}`, {
        headers: {
          Authorization: `${process.env.REACT_APP_BOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  }, [user.name, refresh]);

  const handleClick = (discordId) => {
    API.get(`api/v1/association/${discordId}`).then((res) => {
      setSelectedUserUUID(res.data.id);
    });
  };

  return (
    <div className="userProfile">
      <SectionHeader
        title="Dashboard"
        subtitle={`Neste local, pode dar badges e premiar os participantes que se encontram no seu stand`}
      />
      <div className="main">
        {users && (
          <List
            refresh={refresh}
            setRefresh={setRefresh}
            onClick={handleClick}
            participants={users}
          />
        )}
        <div style={{ width: "100px", height: "30px" }}></div>
        <ButtonMenu UUID={selectedUserUUID} users={users}></ButtonMenu>
      </div>
    </div>
  );
}

export default StandDashboard;
