import { useState } from "react";
import Link from "next/link";

export default function Question({ title, description, href, link }) {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="border-t-2 border-white py-4 text-white">
      <h2 className="mb-4 font-iextrabold text-2xl md:text-4xl">{title}</h2>
      {showQuestion && <p>{description}</p>}
      <div className="flex items-center justify-end">
        <Link href={href}>
          <a className="mr-4 font-iextrabold text-sm text-quinary">{link}</a>
        </Link>
        <button
          className="w-16 rounded-full bg-quinary px-2 font-iextrabold text-xl text-white"
          onClick={() =>
            setShowQuestion((prevShowQuestion) => !prevShowQuestion)
          }
        >
          {showQuestion ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}
