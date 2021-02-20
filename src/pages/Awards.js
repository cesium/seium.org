import { Component } from "react";
import SectionHeader from "../components/moonstone/SectionHeader";
import FixedWheel from "../components/moonstone/awards/FixedWheel";
import Item from "../components/moonstone/awards/Item";
import Header from "../components/moonstone/Header";
import Achievement from "../components/moonstone/Achievement";

import "../assets/css/awards.css";

import award1 from "../components/images/awards/award1.png";

class Awards extends Component {
  render() {
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
              <Achievement text="💰170 Tokens " />
              <Achievement text="🥇68 Badges " />
            </div>
          </Header>
          <div className="awardsList">
            <FixedWheel goToWheel={this.props.goToWheel} />
            <Item img={award1} price={10} limit={1} />
            <Item img={award1} price={15} stock={5} limit={0} />
            <Item img={award1} price={20} stock={100} />
            <Item img={award1} price={10} stock={0} limit={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
