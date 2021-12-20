import Hero from '/components/landing/challenges/Hero';
import Challenges from '/components/landing/challenges/Challenges';
import Footer from '/components/landing/utils/Footer';


export default function Index() {
  return (
    <>
      <Hero />
      <Challenges />
      <Footer color="dark_blue" />
    </>
  );
}