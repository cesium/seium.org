import { withoutAuth } from "/components/Auth";
import Hero from "/components/website/hackathon/Hero";
import PeopleShowcase from "/components/website/utils/PeopleShowcase";
import UnderlineAnimation from "/components/website/utils/UnderlineAnimation";
import Awards from "/components/website/hackathon/Awards";
import Regulations from "/components/website/hackathon/Regulations";

import Navbar from "/components/website/utils/Navbar";
import Speaker from "/components/website/utils/Speaker";
import Footer from "/components/website/utils/Footer";

import mentors from "/data/mentors.json";
import jury from "/data/jury.json";

function JuryTitle() {
  return (
    <UnderlineAnimation text="These are the one to fear. Just saying">
      <h2 className="relative z-0 text-5xl font-bold text-white md:w-full md:text-6xl">
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
    <h2 className="relative z-0 text-5xl font-bold text-white md:w-full md:text-6xl">
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
    <Navbar bgColor="secondary" button="quinary" fgColor="black">
      <Hero />

      <PeopleShowcase title={<MentorsTitle />} subtitle={<MentorsSubtitle />}>
        {mentors.map((mentor, i) => (
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

export default withoutAuth(Index);
