import React from "react";
import Container from "../../../components/container/container";
import Card from "../../../components/utils/cardCompo";
import MemberTeam from "../../../components/utils/memberTeam";
import Twitter from "../../../components/images/Twitter.svg";
import GitHub from "../../../components/images/GitHub.svg";
import GitLab from "../../../components/images/GitLab.svg";
import Chrome from "../../../components/images/Chrome.svg";
import Linkedin from "../../../components/images/Linkedin.svg";
import Member1 from "../../../components/images/memTeam1.png";
import Member2 from "../../../components/images/memTeam2.png";
import Member3 from "../../../components/images/memTeam3.png";
import Member4 from "../../../components/images/memTeam4.png";
import TeamImg from "../../../components/images/Team.svg";
import Map from "../../../components/images/map.png";
import Footer from "../../../components/sections/footer";
import "../../../assets/css/team.css";
import windowDimensions from "../../../components/utils/windowDimensions";
import NavBar from "../../../components/nav/nav";

function Team() {
  let { width, height } = windowDimensions();
  let cardTeamStyle = () => {
    if (width >= 992) {
      return { w: "210px", h: "210px", mrB: "114px" };
    } else if (width >= 768) {
      return { w: "139px", h: "139px", mrB: "73px" };
    } else if (width >= 540) {
      return { w: "139px", h: "139px", mrB: "53px" };
    } else if (width >= 411) {
      return { w: "129px", h: "129px", mrB: "53px" };
    } else if (width >= 375) {
      return { w: "126px", h: "126px", mrB: "53px" };
    } else if (width >= 360) {
      return { w: "115px", h: "115px", mrB: "53px" };
    } else if (width >= 320) {
      return { w: "100px", h: "100px", mrB: "53px" };
    } else {
      return { w: "100px", h: "100px", mrB: "73px" };
    }
  };

  return (
    <>
      <div className="team-bg">
        <NavBar />
        <div className="team">
          <Container>
            <p className="x-large-1 team-title">Team</p>
            <h1 className="team-desc">
              CeSIUM has teamed up with the best team possible.
            </h1>
            <div className="organization">
              <p className="nav-bar-link orgTitle">Organization</p>
              <a href="">
                <div className="image"></div>
              </a>
            </div>
            <div className="section">
              <div className="team-compo">
                <h3>Organization</h3>
                <p className="parag">
                  They walk around, full of work, gathering speakers, attracting
                  partners and giving their imaginations wings, all for this to
                  be your favorite week.
                </p>
              </div>
              <div className="images">
                <MemberTeam
                  memberTeam={Member2}
                  alt="member2"
                  name="Francisco Lira"
                  icon1={GitHub}
                  icon2={Twitter}
                  icon3={Linkedin}
                />
                <MemberTeam
                  memberTeam={Member1}
                  alt="member1"
                  name="Sérgio Costa"
                  icon1={GitHub}
                  icon2={Twitter}
                  icon3={Linkedin}
                />
                <MemberTeam
                  memberTeam={Member4}
                  alt="member4"
                  name="Francisco Costa"
                  icon1={GitHub}
                  icon2={Twitter}
                  icon3={Linkedin}
                />
                <MemberTeam
                  memberTeam={Member3}
                  alt="member3"
                  name="Nelson Estevão"
                  icon1={Chrome}
                  icon2={GitHub}
                  icon3={GitLab}
                  icon4={Linkedin}
                />
              </div>
            </div>
            <div className="section">
              <div className="images">
                <MemberTeam
                  memberTeam={Member4}
                  alt="member4"
                  name="Francisco Costa"
                  icon1={GitHub}
                  icon2={Twitter}
                />
                <MemberTeam
                  memberTeam={Member3}
                  alt="member3"
                  name="Nelson Estevão"
                  icon1={Chrome}
                  icon2={GitHub}
                  icon3={GitLab}
                  icon4={Linkedin}
                  icon5={Twitter}
                />
                <MemberTeam
                  memberTeam={Member4}
                  alt="member4"
                  name="Francisco Costa"
                  icon1={GitHub}
                  icon2={Twitter}
                  icon3={Linkedin}
                />
                <MemberTeam
                  memberTeam={Member3}
                  alt="member3"
                  name="Nelson Estevão"
                  icon1={Chrome}
                  icon2={GitHub}
                  icon3={GitLab}
                  icon4={Linkedin}
                  icon5={Twitter}
                />
                <MemberTeam
                  memberTeam={Member4}
                  alt="member4"
                  name="Francisco Costa"
                  icon1={GitHub}
                  icon2={Twitter}
                  icon3={Linkedin}
                />
                <MemberTeam
                  memberTeam={Member3}
                  alt="member3"
                  name="Nelson Estevão"
                  icon1={Chrome}
                  icon2={GitHub}
                  icon3={GitLab}
                />
              </div>
              <div className="firstPlace">
                <div
                  className="cardTeam"
                  style={{
                    height: cardTeamStyle().h,
                    marginBottom: cardTeamStyle().mrB,
                  }}
                >
                  <Card img={TeamImg}>
                    I am also very important to the team. Actually I should be
                    in first place.
                  </Card>
                </div>
                <div className="images">
                  <MemberTeam
                    memberTeam={Member4}
                    alt="member4"
                    name="Francisco Costa"
                    icon1={GitHub}
                    icon2={Twitter}
                    icon3={Linkedin}
                  />
                  <MemberTeam
                    memberTeam={Member3}
                    alt="member3"
                    name="Nelson Estevão"
                    icon1={Chrome}
                    icon2={GitHub}
                  />
                  <MemberTeam
                    memberTeam={Member4}
                    alt="member4"
                    name="Francisco Costa"
                    icon1={GitHub}
                    icon2={Twitter}
                    icon3={Linkedin}
                  />
                  <MemberTeam
                    memberTeam={Member3}
                    alt="member3"
                    name="Nelson Estevão"
                    icon1={Chrome}
                    icon2={GitHub}
                    icon3={GitLab}
                    icon4={Linkedin}
                    icon5={Twitter}
                  />
                </div>
              </div>
            </div>
            <div className="section lastSection">
              <div className="team-compo">
                <h3>How to find us</h3>
                <p className="parag paragTeam">
                  The SEI is free for participants and is organized by
                  volunteers from CeSIUM.
                </p>
                <p className="meduim-5 contact">
                  Centro de Estudantes de Engenharia Informática
                </p>
                <ul>
                  <li>
                    {" "}
                    <p className="medium-2 contact">
                      E-mail: cesium@di.uminho.pt
                    </p>{" "}
                  </li>
                  <li>
                    {" "}
                    <p
                      className="medium-2 contact"
                      style={{ color: "#ffffff" }}
                    >
                      Phone: +351 253 604 448
                    </p>{" "}
                  </li>
                </ul>
              </div>
              <div className="map">
                <img src={Map} alt="map" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer>Just really useful links here. Bye now. 👋</Footer>
    </>
  );
}
export default Team;
