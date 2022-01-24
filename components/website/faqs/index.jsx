import Question from "./Question";

import questions from "/data/faqs";

export default function Faqs() {
  return (
    <div className="spacing flex flex-col justify-between bg-primary py-20 lg:h-3/4 lg:flex-row">
      <div className="mb-10 text-white lg:w-2/5">
        <h1 className="mb-4 font-iextrabold text-4xl font-bold lg:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="text-lg">
          This list of frequently asked questions serves to complement the
          general rules that you can find below. Get in touch with the
          organizing team whenever a question arises and we will add answers to
          the most frequently asked questions here.
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
