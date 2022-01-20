import { withoutAuth } from "/components/Auth";
import Navbar from "/components/website/utils/Navbar";
import Footer from "/components/website/utils/Footer";
import Faqs from "../components/website/faqs";

function Faq() {
  return (
    <Navbar bgColor="primary" button={"quinary"} fgColor={"black"}>
      <Faqs />
      <Footer color="primary" />
    </Navbar>
  );
}

export default withoutAuth(Faq);
