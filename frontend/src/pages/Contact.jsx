import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Map from "../components/Map";
import MapForm from "../components/MapForm";
import ServiceModal from "../components/ServiceModal";

function Contact() {
  return (
    <div>
      <ServiceModal />
      <ContactBox/>
      <MapForm/>
      <Footer />
    </div>
  );
}

export default Contact;
