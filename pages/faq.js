import Navbar from '/components/website/utils/Navbar';
import Footer from '/components/website/utils/Footer';
import Faqs from '../components/website/faqs';

export default function Faq() {
  return (
    <Navbar bgColor="secondary" button={"quinary"} fgColor={"black"}>
      <Faqs />
      <Footer color="tertiary" />
    </Navbar>
  )
}