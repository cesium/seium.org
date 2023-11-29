import { Hero, Awards, Regulations } from "./components";

import PeopleShowcase from "@components/PeopleShowcase";
import UnderlineAnimation from "@components/UnderlineAnimation";
import Navbar from "@components/Navbar";
import Speaker from "@components/Speaker";
import Footer from "@components/Footer";

import jury from "@data/jury.json";

function JuryTitle() {
  return (
    <UnderlineAnimation text="These are the one to fear. Just saying">
      <h2 className="relative z-0 font-ibold text-5xl text-white md:w-full md:text-6xl">
        The Jury
      </h2>
    </UnderlineAnimation>
  );
}

function JurySubtitle() {
  return (
    <p className="mt-10 text-white">
      Who will be the jurors? Can you guess? I bet you already suspect… Yeah, we
      have members of Accenture! They will evaluate everything, including the
      technical component, so you need to do your best throughout the entire
      project! Good luck!
    </p>
  );
}

function MentorsTitle() {
  return (
    <h2 className="relative z-0 font-ibold text-5xl text-white md:w-full md:text-6xl">
      The mentors
    </h2>
  );
}

function MentorsSubtitle() {
  return (
    <p className="mt-10 text-white">
      This year, we provide the most amazing mentors you could ever have to
      accompany and help you in order to make the best decisions for the
      development of your, certainly, spectacular project! Who are the mentors?
      You should have guessed by now, don’t you think?! However, we will tell
      you, our mentors are *drum roll* some members of Accenture!
    </p>
  );
}

function Index() {
  return (
    <Navbar bgColor="secondary" button="quinary" fgColor="white">
      <Hero />

      {/* TODO: Add mentors */}
      <PeopleShowcase title={<MentorsTitle />} subtitle={<MentorsSubtitle />}>
        {jury.map((mentor, i) => (
          <div key={i}>
            <Speaker {...mentor} />
          </div>
        ))}
      </PeopleShowcase>

      <Awards />

      <PeopleShowcase title={<JuryTitle />} subtitle={<JurySubtitle />}>
        {jury.map((member, i) => (
          <div key={i}>
            <Speaker {...member} />
          </div>
        ))}
      </PeopleShowcase>

      <Regulations />

      <Footer color="secondary" />
    </Navbar>
  );
}

export default Index;
