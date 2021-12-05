import HeroTeam from '/components/landing/sections/HeroTeam';
import Organization from '/components/landing/sections/Organization';
import FindUs from '/components/landing/sections/FindUs';
import Footer from '/components/landing/sections/Footer';

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