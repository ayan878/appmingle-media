import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Map from "../components/Map";
import ServiceModal from "../components/ServiceModal";

function Contact() {
  return (
    <div>
      <ServiceModal />
      <ContactBox/>
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;
