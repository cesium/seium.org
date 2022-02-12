import { useState } from "react";

export default function CodeInput() {
  const [code, setCode] = useState("");

  const sendCode = () => {};

  return (
    <div className="pt-4">
      <input
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
        type="text"
        placeholder="CODE"
        className="h-10 w-80 rounded-full border border-quinary pl-4 pr-28 font-iregular"
      ></input>
      <button
        className="-ml-28 h-10 w-28 rounded-full bg-quinary font-iregular"
        onClick={(e) => sendCode()}
      >
        SEND
      </button>
    </div>
  );
}
