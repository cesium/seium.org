import Hero from '/components/website/team/Hero';
import Organization from '/components/website/team/Organization';
import FindUs from '/components/website/team/FindUs';
import Footer from '/components/website/utils/Footer';

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