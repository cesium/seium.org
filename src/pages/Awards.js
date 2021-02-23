import { useEffect, useState } from "react";
import { useUser } from "../components/moonstone/context/user";
import SectionHeader from "../components/moonstone/SectionHeader";
import FixedWheel from "../components/moonstone/awards/FixedWheel";
import Item from "../components/moonstone/awards/Item";
import Header from "../components/moonstone/Header";
import UserAchievementsItems from "../components/moonstone/User/UserAchievementsItems";
import API from "../utils/api";

import "../assets/css/awards.css";

const getItems = (awards, incrementState) => {
  const items = [];

  for (const { id, image, name, price, can_buy, stock } of awards) {
    items.push(
      <Item
        key={id}
        id={id}
        img={image}
        price={price}
        limit={can_buy}
        stock={stock}
        incrementState={incrementState}
      >
        {name}
      </Item>
    );
  }

  return items;
};

const Awards = (props) => {
  const { user } = useUser();
  const [info, setInfo] = useState({ awards: [], state: 0 });

  useEffect(async () => {
    if (user?.id) {
      const {
        data: { data: awards },
      } = await API.get(`/api/v1/store`);
      setInfo({ awards, state: info.state });
    }
  }, [user.id, info.state]);

  const incrementState = () => {
    setInfo({ awards: info.awards, state: info.state + 1 });
  };

  return (
    <div className="userProfile">
      <SectionHeader
        title="Awards"
        subtitle="Win awards and collect tokens"
      ></SectionHeader>
      <div className="main awards">
        <Header style={{ width: "100%" }} title="Achievements">
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              paddingTop: "7%",
            }}
          >
            <UserAchievementsItems state={info.state} />
          </div>
        </Header>
        <div className="awardsList">
          <FixedWheel goToWheel={props.goToWheel} />
          {getItems(info.awards, incrementState)}
        </div>
      </div>
    </div>
  );
};

export default Awards;
