import Addressbar from "../components/Addressbar";
import MobAddressbar from "../components/MobAddressbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceModal from "../components/ServiceModal";
import Services from "../components/Services";

function Service() {
  return (
    <div className="relative text-white">
      <ServiceModal />
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="md:hidden flex relative">
          <MobAddressbar />
        </div>
        <Addressbar />
        <Header />
      </div>
      <div className=" z-0 relative">
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default Service;
