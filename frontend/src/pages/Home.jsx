import Addressbar from "../components/Addressbar";
import Header from "../components/Header";
import hero from "../assets/11.gif";
import Footer from "../components/Footer";
import MobAddressbar from "../components/MobAddressbar";

export default function Home() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* Mobile Address Bar */}
      <div className="flex md:hidden">
        <MobAddressbar />
      </div>
      <Addressbar />
      <Header />
      <Footer />
    </div>
  );
}
