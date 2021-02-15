import Achievement from "./Achievement";
import Header from "../Header";
import SendCode from "../SendCode";
const Index = () => {
  return (
    <div
      className="achiev-section" /*style={{ justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}*/
    >
      <Header title="Achievements" style={{ width: "100%" }} />
      <div className="achiev-container">
        <div>
          <Achievement
            text="💰 170 Tokens"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
          <Achievement
            text="🏆 16 Entries Final Draw"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
        </div>
        <div>
          <Achievement
            text="🥇 68 Badges"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
          <Achievement
            text="🏁 Level 3 Checkpoint"
            style={{ marginBottom: "20px", paddingTop: "0" }}
          />
        </div>
      </div>
      <div className="achiev-desc">
        <h4>
          You just need 4 more badges to go to Level 4 (and win 10+ entries to
          the final draw). Hurry!
        </h4>
      </div>
      <SendCode></SendCode>
    </div>
  );
};

export default Index;
