import Navbar from '/components/landing/utils/Navbar';
import Footer from '/components/landing/utils/Footer';
import Faqs from '../components/landing/faqs';

export default function Faq() {
  return (
    <>
			<div className="spacing py-10 bg-dark_blue">
	      <Navbar button={"aqua"} fg_color={"black"}/>
			</div>
			<Faqs />
      <Footer color="medium_blue" />
    </>
  )
}