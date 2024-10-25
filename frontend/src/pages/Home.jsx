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

export default function Home() {
  return (
    <div className="bg-hero bg-contain  bg-no-repeat">
      <div className="flex md:hidden">
        <MobAddressbar />
      </div>
      <Addressbar />
      <Header />
      <Hero />
      <AboutUs />
      <Counting />
      <Expertteam />
      <OurBlog />
      <AppMingleFamily />
      <Footer />
    </div>
  );
}
