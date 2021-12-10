import Navbar from '/components/landing/utils/Navbar';
import Footer from '/components/landing/utils/Footer';
import Faq from '../components/landing/faq';

export default function Index() {
  return (
    <>
			<div className="spacing py-10 bg-dark_blue">
	      <Navbar />
			</div>
			<Faq />
      <Footer color="medium_blue" />
    </>
  )
}