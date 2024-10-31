import Addressbar from "../components/Addressbar";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MapForm from "../components/MapForm";
import MobAddressbar from "../components/MobAddressbar";
import ServiceModal from "../components/ServiceModal";

function Contact() {
  return (
    <div>
      <ServiceModal />
      <div className="absolute top-0 left-0 w-full z-10 text-white">
        <div className="md:hidden flex relative">
          <MobAddressbar />
        </div>
        <Addressbar />
        <Header />
      </div>
      <ContactBox />
      <MapForm />
      <Footer />
    </div>
  );
}

export default Contact;
