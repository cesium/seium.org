import { useState } from "react";
import Link from "next/link";

export default function Question({ title, description, href, link }) {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="text-white border-t-2 border-white py-4">
      <h2 className="text-2xl md:text-4xl font-iextrabold mb-4">{title}</h2>
      {showQuestion && <p>{description}</p>}
      <div className="flex justify-end items-center">
        <Link href={href}>
          <a className="text-quinary font-iextrabold text-sm mr-4">{link}</a>
        </Link>
        <button
          className="bg-quinary px-2 font-iextrabold text-xl text-white rounded-full w-16"
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
