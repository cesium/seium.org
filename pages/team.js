import Hero from '/components/landing/team/Hero';
import Organization from '/components/landing/team/Organization';
import FindUs from '/components/landing/team/FindUs';
import Footer from '/components/landing/utils/Footer';

export default function Index() {
  return (
    <>
      <Hero />
      <Organization />
      <FindUs />
      <Footer color="medium_light_blue" />
    </>
  )
}