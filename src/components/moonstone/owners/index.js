import Owner from "./Owner";
import Header from "../Header";

export default function Owners(props) {
  const cutString = (string) => {
    console.log(string);
    if (string.length >= 24) return string.substr(0, 21) + "...";
    else return string;
  };

  return (
    <div className="badge-owners">
      <Header
        title={"Owners"}
        style={{ marginBottom: "20px", width: "100%" }}
      ></Header>

      {props.owners && props.owners.length !== 0 ? (
        <div className="owners">
          {props.owners.map((item) => (
            <Owner
              key={item.id}
              user={
                item.nickname
                  ? cutString(item.nickname)
                  : item.name
                  ? cutString(item.name)
                  : ""
              }
            ></Owner>
          ))}
        </div>
      ) : (
        <div className="header-4">Noone redeemed this badge.</div>
      )}
    </div>
  );
}
