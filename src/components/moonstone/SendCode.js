import Button from "./Button";

export default function SendCode(props) {
  return (
    <div className="sendCode">
      <input className="code" type="text" placeholder="CODE" />
      <Button width="109px" href="#">
        SEND
      </Button>
    </div>
  );
}
