import { useState } from "react";

import { referral } from "@lib/api";

export default function CodeInput() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const buttonText = () => {
    switch (error) {
      case null:
        return "SEND";
      case false:
        return "✅";
      case true:
        return "❌";
    }
  };

  const sendCode = (event) => {
    event.preventDefault();

    if (error === null) {
      referral(code)
        .then((_) => {
          setError(false);
          setCode("");
        })
        .catch((_) => setError(true))
        .finally(() => setTimeout(() => setError(null), 2000));
    }
  };

  return (
    <div className="pt-4">
      <input
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
        type="text"
        placeholder="CODE"
        className="h-10 w-full max-w-lg rounded-full border border-quinary pl-4 pr-28 font-iregular text-black"
      />
      <button
        className="-ml-28 h-10 w-28 rounded-full bg-quinary font-iregular"
        onClick={(e) => sendCode(e)}
      >
        {buttonText()}
      </button>
    </div>
  );
}
