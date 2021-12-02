import HeroTeam from '/components/HeroTeam';
import Organization from '/components/Organization';
import FindUs from '/components/FindUs';
import Footer from '/components/Footer';

export default function Index() {
  return (
    <>
      <HeroTeam />
      <Organization />
      <FindUs />
      <Footer color="medium_light_blue" />
    </>
  )
}