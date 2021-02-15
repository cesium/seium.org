import Input from "./Input";
import Header from "./Header";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

export default function EditProfile(params) {
  const label2Style = {
    color: "#000",
  };
  const input2Style = {
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    color: "#181818",
  };
  return (
    <div className="editProfile">
      <Header
        style={{ flexWrap: "no-wrap", width: "100%" }}
        title="User Profile"
      >
        <Button style={{ padding: "13px", marginBottom: "-9px" }} width="88px">
          EDIT
        </Button>
      </Header>
      <div className="profilePicture"></div>
      <Input
        label="NAME"
        placeholder="John"
        label2={label2Style}
        input2={input2Style}
      />
      <Input
        label="USERNAME"
        placeholder="John-Robert"
        label2={label2Style}
        input2={input2Style}
      />
      <Input
        label="PASSWORD"
        placeholder="*******"
        type="password"
        label2={label2Style}
        input2={input2Style}
      />
      <a className="small reset" href="#">
        Reset password
      </a>
    </div>
  );
}
