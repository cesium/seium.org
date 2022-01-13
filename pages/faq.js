import Navbar from '/components/website/utils/Navbar';
import Footer from '/components/website/utils/Footer';
import Faqs from '../components/website/faqs';

export default function Faq() {
  return (
    <Navbar bg_color="secondary" button={"quinary"} fg_color={"black"}>
      <Faqs />
      <Footer color="tertiary" />
    </Navbar>
  )
}