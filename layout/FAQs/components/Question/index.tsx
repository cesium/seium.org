import { useState } from "react";
import Link from "next/link";

interface IQuestionProps {
  title: string;
  href: string;
  description: string;
  link?: string;
}

export default function Question({
  title,
  description,
  href,
  link,
}: IQuestionProps) {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="border-t-2 border-white py-4 text-white">
      <h2 className="font-terminal-uppercase mb-4 select-none text-2xl md:text-4xl">
        {title}
      </h2>
      <div
        className={`transition-max-height overflow-hidden duration-300 ${
          showQuestion ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {description && <p>{description}</p>}
      </div>
      <div className="flex items-center justify-end">
        <Link
          href={href}
          className="font-terminal-uppercase mr-4 select-none text-sm text-quinary"
        >
          {link}
        </Link>
        <button
          className="font-terminal-uppercase w-16 transform select-none rounded-full bg-quinary px-2 text-xl text-white transition-transform duration-300 hover:scale-110"
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
