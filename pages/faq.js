import Navbar from '/components/landing/utils/Navbar';
import Footer from '/components/landing/utils/Footer';
import Faq from '../components/landing/faq';

export default function Index() {
  return (
    <>
			<div className="spacing py-10 bg-dark_blue">
	      <Navbar button={"aqua"} fg_color={"black"}/>
			</div>
			<Faq />
      <Footer color="medium_blue" />
    </>
  )
}