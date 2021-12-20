import Hero from '/components/website/challenges/Hero';
import Challenges from '/components/website/challenges/Challenges';
import Footer from '/components/website/utils/Footer';


export default function Index() {
  return (
    <>
      <Hero />
      <Challenges />
      <Footer color="dark_blue" />
    </>
  );
}