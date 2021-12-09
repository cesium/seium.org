import Hero from '/components/landing/sections/Hero';
import Schedule from '/components/landing/sections/Schedule';
import Sponsors from '/components/landing/sections/Sponsors';
import Hackathon from '/components/landing/sections/Hackathon';
import PeopleShowcase from '/components/landing/utils/PeopleShowcase';
import Footer from '/components/landing/sections/Footer';
import Speaker from '/components/landing/utils/Speaker';
import UnderlineAnimation from '/components/landing/utils/UnderlineAnimation';
import Awards from '/components/hackathon/Awards';
import Regulations from '/components/hackathon/Regulations';

function JuryTitle() {
    return (
        <UnderlineAnimation>
            The Jury
        </UnderlineAnimation>
    );
}

function JurySubtitle() {
    return (
        <p className="text-white mt-10">
            Who will be the jurors? Can you guess? I bet you already suspect…
            Yeah, once again we have members of Fake Company! They will evaluate everything, 
            including the technical component, so you need to do your best throughout the entire project! Good luck!
        </p>
    )
}

function MentorsTitle() {
    return (
        <h2 className="font-bold text-white text-6xl md:text-8xl md:w-full relative z-0">
            The mentors
        </h2>
    );
}

function MentorsSubtitle() {
    return (
        <p className="text-white mt-10">
            This year, we provide the most amazing mentors you could ever have to accompany and help you in order to
            make the best decisions for the development of your, certainly, spectacular project! Who are the mentors?
            You should have guessed by now, don’t you think?! However, we will tell you, our mentors are *drum roll* some members of Fake Company!
        </p>
    )
}

export default function Index() {
  return (
    <>
      <Hero />

      <PeopleShowcase title={<MentorsTitle/>} subtitle={<MentorsSubtitle/>}>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
      </PeopleShowcase>

      <Awards/>

      <PeopleShowcase title={<JuryTitle/>} subtitle={<JurySubtitle/>}>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
        <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
      </PeopleShowcase>

      <Regulations/>

      <Footer color="dark_blue" />
    </>
  )
}