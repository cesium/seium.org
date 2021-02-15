import React from "react";

// Exclusive
import accenture from "../../../images/sponsors/accenture.svg";

// Gold
import kpmg from "../../../images/sponsors/kpmg.svg";
import everis from "../../../images/sponsors/everis.png";
import subvisual from "../../../images/sponsors/subvisual.png";

// Silver
import capgemini from "../../../images/sponsors/capgemini.svg";
import bosch from "../../../images/sponsors/bosch.svg";
import ubiwhere from "../../../images/sponsors/ubiwhere.svg";
import vilt from "../../../images/sponsors/vilt.png";
import outsystems from "../../../images/sponsors/outsystems.svg";
import critical from "../../../images/sponsors/critical.png";
import teleperformance from "../../../images/sponsors/teleperformance.svg";
import bnpParibas from "../../../images/sponsors/bnp-paribas.png";
import primavera from "../../../images/sponsors/primavera.png";

// Bronze
import seegno from "../../../images/sponsors/seegno.jpeg";
import ey from "../../../images/sponsors/ey.svg";
import retail from "../../../images/sponsors/retail.svg";
import inovaria from "../../../images/sponsors/inovaria.png";
import alten from "../../../images/sponsors/alten.svg";
import farfetch from "../../../images/sponsors/farfetch.png";
import konk from "../../../images/sponsors/konk.png";
import glintt from "../../../images/sponsors/glintt.png";

const exclusive = [[accenture, "https://www.accenture.com/pt-pt"]];
const gold = [
  [kpmg, "https://home.kpmg/pt/pt/home.html"],
  [everis, "https://www.everis.com/portugal/pt-pt/home-pt"],
  [subvisual, "https://subvisual.com/"],
];
const silver = [
  [capgemini, "https://www.capgemini.com/"],
  [bosch, "https://www.bosch.pt/"],
  [ubiwhere, "https://www.ubiwhere.com/"],
  [vilt, "https://www.vilt-group.com/pt/"],
  [outsystems, "https://www.outsystems.com/"],
  [critical, "https://www.criticalsoftware.com/"],
  [
    teleperformance,
    "https://jobs.teleperformance.pt/working-in-portugal/en/working-in-portugal/",
  ],
  [bnpParibas, "https://www.bnpparibas.pt/en/"],
  [primavera, "https://pt.primaverabss.com/pt/"],
];
const bronze = [
  [seegno, "https://seegno.com/"],
  [ey, "https://www.ey.com/pt_pt"],
  [retail, "https://www.retail-consult.com/"],
  [inovaria, "http://www.inova-ria.pt/"],
  [alten, "https://www.alten.pt/pt-pt/"],
  [farfetch, "https://www.farfetch.com/pt/"],
  [konk, "http://www.konkconsulting.com/PT/"],
  [glintt, "https://www.glintt.com"],
];

function ImgList(props) {
  const list = props.list;
  const className = props.className;

  const listItems = list.map((c, i) => (
    <a key={i} target="_blank" href={c[1]}>
      <img src={c[0]} alt={c[1]} />
    </a>
  ));

  return <div className={className}>{listItems}</div>;
}

class Brands extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: "high" };

    this.high = this.high.bind(this);
    this.low = this.low.bind(this);
  }

  high() {
    this.setState({ type: "high" });
  }

  low() {
    this.setState({ type: "low" });
  }

  render() {
    let column1, column2;

    if (this.state.type === "high") {
      column1 = exclusive;
      column2 = gold;
    } else {
      column1 = silver;
      column2 = bronze;
    }

    return (
      <div>
        <div className="title">
          <h2>Our amazing sponsors</h2>
          <div className="categories">
            <p
              className={
                "nav-bar-link " + (this.state.type === "high" ? "selected" : "")
              }
              onClick={this.high}
            >
              Exclusive & Gold
            </p>
            <p
              className={
                "nav-bar-link " + (this.state.type === "low" ? "selected" : "")
              }
              onClick={this.low}
            >
              Silver & Bronze
            </p>
          </div>
        </div>
        <div className="brands">
          <div className="exclusive-or-silver">
            <h6>{this.state.type === "high" ? "Exclusive" : "Silver"}</h6>
            <ImgList
              className={this.state.type === "low" ? "logos" : ""}
              list={column1}
            />
          </div>
          <div className="separator"></div>
          <div className="gold-or-bronze">
            <h6>{this.state.type === "high" ? "Gold" : "Bronze"}</h6>
            <ImgList className="logos" list={column2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
