import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import { Question, FindUs } from "./components";

import questions from "@data/faqs.json";
import SpotlightShape from "@components/SpotlightShape";

function Faq() {
  return (
    <>
      <Navbar bgColor="primary" button="quinary" fgColor="white">
        <SpotlightShape />
        <div className="spacing relative z-20 flex flex-col justify-between py-20 lg:h-3/4 lg:flex-row">
          <div className="mb-10 text-white lg:w-2/5">
            <h1 className="font-terminal-uppercase mb-4 select-none text-4xl font-bold lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg">
              This list of frequently asked questions serves to complement the
              general rules that you can find below. Get in touch with the
              organizing team whenever a question arises and we will add answers
              to the most frequently asked questions here.
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
      </Navbar>
      <FindUs />
      <Footer color="primary" />
    </>
  );
}

export default Faq;
