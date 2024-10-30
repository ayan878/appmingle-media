import Addressbar from "../components/Addressbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceModal from "../components/ServiceModal";
import Services from "../components/Services";

function Service() {
  return (
    <div className="absolute bg-service bg-no-repeat bg-contain xl:bg-cover bg-center h-screen text-white">
      <ServiceModal />
      <Addressbar />
      <Header />
      <div className="mt-80">
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default Service;
