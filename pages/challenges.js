import Hero from '/components/landing/challenges/Hero';
import Challenge from '/components/landing/challenges/Challenge';
import Footer from '/components/landing/utils/Footer';



export default function Index() {
  return (
    <>
      <Hero />

      <Challenge></Challenge>

      <Footer color="dark_blue" />
    </>
  )
}