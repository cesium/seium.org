import Question from "./Question";

import questions from "/data/faqs";

export default function Faqs() {
  return (
    <div className="spacing py-20 flex flex-col lg:flex-row justify-between bg-secondary lg:h-3/4">
      <div className="text-white lg:w-2/5 mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-iextrabold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor
          massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis,
          laoreet sit amet felis quis, molestie pellentesque purus. Nam a
          euismod ante, a tincidunt elit.
        </p>
      </div>
      <div className="lg:w-1/3">
        <div className="flex flex-col">
          {questions.map((question, i) => (
            <Question key={i} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}
