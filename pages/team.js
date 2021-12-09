import HeroTeam from '/components/landing/team/HeroTeam';
import Organization from '/components/landing/team/Organization';
import FindUs from '/components/landing/team/FindUs';
import Footer from '/components/landing/utils/Footer';

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