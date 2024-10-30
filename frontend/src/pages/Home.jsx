import Addressbar from "../components/Addressbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobAddressbar from "../components/MobAddressbar";
import AppMingleFamily from "../components/AppMingleFamily";
import OurBlog from "../components/OurBlog";
import Expertteam from "../components/Expertteam";
import Counting from "../components/Counting";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import AppMingleMedia from "../components/AppMingleMedia";
import AppMingleServices from "../components/AppMingleServices";

import ScreenForm from "../components/ScreenForm";
import ModalForm from "../components/ModalForm";
// import hero from "../assets/11.gif"
export default function Home() {
  return (
    <div
      // className="bg-hero bg-cover sm:h-screen md:h-auto md:bg-contain  md:bg-no-repeat "
      className="bg-mobHero md:bg-hero bg-contain bg-no-repeat w-full"
      // style={{backgroundImage:`url(${hero})`, backgroundRepeat:"no-repeat",
      // backgroundSize:"contain"}}
    >
      <ModalForm />
      <div className="flex md:hidden">
        <MobAddressbar />
      </div>
      <Addressbar />
      <Header />
      <ScreenForm />
      <Hero />
      <AboutUs />
      <AppMingleMedia />
      <AppMingleServices />
      <Counting />
      <Expertteam />
      <OurBlog />
      <AppMingleFamily />
      <Footer />
    </div>
  );
}
